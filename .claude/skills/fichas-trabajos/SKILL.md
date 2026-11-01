---
name: fichas-trabajos
description: Publicar una ficha de "trabajo realizado" de DRAUTOMOTRIZ a partir de fotos que manda el usuario (vehículo + trabajo hecho). Renombra las fotos con palabras clave separadas por guiones, pixela patentes, genera WebP, crea el modal (TrabajoModal), lo publica en el home, en la galería ("Trabajos realizados"), en las páginas de los servicios asociados y en la landing del vehículo (agregándolo al catálogo si no existe). Usar cuando el usuario manda fotos de un auto/camión con el trabajo realizado, o pide "agregar un vehículo", "nuevo modal", "nueva ficha", "trabajo realizado".
---

# Fichas de trabajos realizados

Una **ficha** es un trabajo real hecho a un vehículo: fotos + qué se hizo. Se publica en 4 lugares a la vez, todo desde el registro `src/data/trabajos.ts`:

| Dónde | Versión | Cómo llega |
|---|---|---|
| Home (`src/pages/index.astro`) | completa (sección grande) | `<TrabajosRealizados />` recorre el registro en orden |
| Landing del vehículo (`/vehiculos/<marca>/<modelo>/`) | completa | `<TrabajosRealizados vehiculo={slug} />` |
| Páginas de servicios asociados (`/servicios/<slug>/`) | compacta (tarjeta en grilla) | `<TrabajosRealizados modo="compacto" servicio={slug} />` |
| Galería (`/galeria/`), sección "Trabajos realizados" | compacta | `<TrabajosRealizados modo="compacto" embebido />` |

Además las fotos aparecen solas en la grilla "Todas las fotos" de `/galeria/` (escanea `public/imagen/nuevoset/` recursivo) y en el sitemap (cada landing de vehículo declara las fotos de `nuevoset/<slug>/`).

## Lo que hay que preguntar (si falta)

- **Marca y modelo** (y año si lo sabe). Si la foto muestra otra versión (ej. "C3" que parece "C3 Aircross"), usar lo que dijo el usuario y avisarle.
- **Trabajo(s) realizado(s)**.
- **Comuna** para el nombre de las fotos. Si no la dice: **Peñalolén** (ahí está el taller).

No bloquear por esto: con vehículo + trabajo se puede avanzar con Peñalolén por defecto.

## 1. Nombres de fotos (SEO)

Formato, todo en minúsculas, sin tildes ni ñ, palabras separadas por `-`:

```
mecanico-a-domicilio-en-<comuna>-<marca>-<modelo>-<servicio>[-<detalle>].webp
```

- `<servicio>` con palabras clave del servicio: `instalacion-laminas-de-seguridad-certificadas`, `cambio-kit-de-embrague`, `cambio-kit-de-distribucion`, `cambio-discos-y-pastillas-de-frenos`, `mantencion-por-km`, `inspeccion-pre-compra`, `cambio-bomba-de-agua`, `cambio-de-radiador`, `servicio-de-revision-tecnica-sin-estres`, etc.
- `<detalle>` describe la foto: `-nuevo-vs-usado`, `-desmontaje-caja-de-cambios`, `-disco-nuevo-instalado`, `-repuestos`…
- La portada (foto del vehículo) va sin detalle.
- Camiones: `...-en-penalolen-camion-hino-xzu-425l-...`.
- Ejemplo real: `mecanico-a-domicilio-en-penalolen-citroen-c3-cambio-discos-y-pastillas-de-frenos-disco-nuevo-vs-usado.webp`
- Carpeta: `public/imagen/nuevoset/<id>/` donde `<id>` = slug del vehículo en `src/data/marcas.ts` (ej. `citroen-c3`, `hino-xzu-425l`). **Tiene que coincidir**: el sitemap y el registro dependen de eso.
- Se guarda `.webp` (lo que usa el sitio) + `.jpeg` (original, también se publica).

Palabras que deciden la **categoría en la galería** (`src/pages/galeria.astro`, por nombre de archivo, en este orden): `pre-compra` → Inspección Pre Compra; `lamina` → Láminas de Seguridad; `kit-de-embrague`/`selectora` → Embrague y Caja; `radiador`/`aire-acondicionado`/`bomba-de-agua`/`termostato` → Refrigeración y A/C; `frenos` → Frenos (ojo: `freno` singular no matchea); `motor`/`distribucion`/`correa`… → Motor; `mantencion` → Mantención; `revision` → Revisión Técnica. Si un trabajo nuevo no cae bien, agregar la palabra a esa cadena.

## 2. Revisar las fotos antes de procesar

- **Duplicadas**: el usuario suele mandar la misma foto 2 veces. `md5sum` sobre los archivos subidos y quedarse con una.
- **Capturas de video/historias** con franjas negras arriba/abajo → `recortarFranjas: true`.
- **Fotos muy oscuras** → `brillo: 1.25` (solo afecta lo publicado).
- **Texto sobreimpreso** (ej. "Hino xzu 423L") que contradice los datos: avisar al usuario.
- **Patentes**: buscar en TODAS las fotos, también patentes de otros autos al fondo, patentes pintadas en la cabina de camiones (Chile) y números en espejos. Se pixelan siempre, en `.webp` y `.jpeg`. Para ubicarlas:

```bash
node .claude/skills/fichas-trabajos/procesar-fotos.cjs grilla <foto.jpg> <scratchpad>/grilla.jpg
```

Mirar la grilla (líneas cada 5%) y anotar la caja `[x0, y0, x1, y1]` en %, con un poco de margen.

## 3. Procesar

Config JSON (en el scratchpad, no en el repo):

```json
{
  "id": "citroen-c3",
  "prefijo": "mecanico-a-domicilio-en-penalolen-citroen-c3-cambio-discos-y-pastillas-de-frenos",
  "fotos": [
    { "origen": "/root/.claude/uploads/.../a069fe3e-image.jpg", "sufijo": "", "patentes": [[91.5, 54.5, 100, 67.5]] },
    { "origen": "/root/.claude/uploads/.../39c3ba64-image.jpg", "sufijo": "-disco-nuevo-vs-usado" },
    { "origen": "...", "sufijo": "-caja-de-cambios-desmontada", "recortarFranjas": true }
  ],
  "portada": { "sufijo": "", "recorte": [11, 18, 100] }
}
```

```bash
npm ci   # si no hay node_modules (sharp viene con astro)
node .claude/skills/fichas-trabajos/procesar-fotos.cjs ficha <scratchpad>/config.json
```

- `portada` genera `public/imagen/vehiculos/drautomotriz-<id>.webp` (700x430, foto del catálogo). `recorte` = `[x0, y0, x1]` en %; sin `recorte` usa recorte automático (a veces encuadra mal: revisar la imagen y ajustar).
- Solo generar portada si el vehículo es **nuevo** en el catálogo; si ya existe, dejar la suya salvo que el usuario pida cambiarla.
- Revisar visualmente las fotos pixeladas y la portada (Read de la imagen).

## 4. Componente de la ficha

Crear `src/components/Trabajo<MarcaModelo>.astro` copiando uno existente (ej. `TrabajoCitroenC3.astro`). Estructura:

```astro
---
import TrabajoModal from '@/components/TrabajoModal.astro';

const { compacto = false } = Astro.props;

const base = '/imagen/nuevoset/<id>/<prefijo>';
const fotos = [
  { src: `${base}.webp`, label: 'Citroën C3 en servicio', alt: '<qué se ve> - mecánico a domicilio en Peñalolén DRAUTOMOTRIZ' },
  // ...
];
---

<TrabajoModal
  compacto={compacto}
  id="modal-<id>"
  vehiculo="Citroën C3"
  titulo="Discos y Pastillas de Freno"
  descripcion='<strong class="text-white">…</strong> … <strong class="text-white">mecánico a domicilio en Peñalolén</strong> …'
  items={['4 viñetas de lo que incluyó el trabajo']}
  fotos={fotos}
  portada={fotos[0]}
  whatsappTexto="Hola! Quiero cotizar <trabajo> para mi <vehículo>"
  servicio={{ href: '/servicios/<slug>/', nombre: 'Ver servicio de …' }}
/>
```

- `compacto` **siempre** se pasa (la galería y los servicios usan la versión compacta).
- Orden de fotos: portada (vehículo) primero; luego desarme → repuesto nuevo vs usado → instalado/terminado.
- `alt`: frase descriptiva con vehículo + trabajo + "mecánico a domicilio en <Comuna>" o "DRAUTOMOTRIZ".
- No inventar trabajos que no están en las fotos ni en el mensaje del usuario (si algo no tiene foto, como un termostato, va en `items` pero no en el nombre de una foto aparte).
- Si no hay servicio exacto (ej. selectora de cambios), usar el más cercano y avisar.

## 5. Registro y publicación

1. `src/data/trabajos.ts`: agregar `{ id, vehiculo, titulo, servicios: [...] }` al final (el orden del array = orden en el home). `servicios` = slugs reales de `src/data/servicios.ts` (verificar con `grep -n "slug:" src/data/servicios.ts`). Un trabajo puede ir en varios servicios (ej. Baleno: mantención + A/C + revisión técnica).
2. `src/components/TrabajosRealizados.astro`: importar el componente y sumarlo a `componentes` con la clave `<id>`.
3. Nada más: home, galería, servicios y landing se actualizan solos.
4. Un servicio sin fichas propias muestra automáticamente los 3 últimos trabajos del registro (caso de `laminas-de-seguridad-certificadas` hasta que llegue su primera ficha). Los filtros de la galería sin fotos se ocultan solos.

## 6. Catálogo de vehículos (si el vehículo no existe)

- `src/data/marcas.ts`: agregar `{ slug: '<id>', marca, marcaSlug, modelo, imagen: vimg('<id>'), alt, anioInicio, tipo }` en el bloque de su marca (orden alfabético). Actualizar el comentario `// N modelos reales`.
- **Marca nueva** (ej. Hino, Citroën): agregarla también a los textos fijos "… Volkswagen, Fiat, MG, Hino y Citroën." en `src/components/Vehiculos.astro` y `src/pages/vehiculos/index.astro`.
- La landing `/vehiculos/<marcaSlug>/<modelo>/` y el sitemap se generan solos.

## 7. Verificar

```bash
npm run build                                   # sin errores; anotar N páginas
grep -c 'id="modal-<id>"' dist/index.html dist/vehiculos/<marca>/<modelo>/index.html dist/galeria/index.html
grep -c 'modal-<id>' dist/servicios/<slug>/index.html
grep -o 'data-item-categoria="[a-z]*"[^>]*data-src="[^"]*<id>[^"]*"' dist/galeria/index.html   # categoría de cada foto
```

Playwright (Chromium en `/opt/pw-browsers/chromium`, playwright global en `$(npm root -g)/playwright`), con `npx astro preview --port 4321` en background: abrir el modal (`[data-abrir-modal="modal-<id>"]`) en home, landing, galería y un servicio, en 390px y 1280px; comprobar `dialog.open`, sin errores JS ni scroll horizontal. Bloquear con `page.route` los hosts externos (googletagmanager, google.com, unpkg, openstreetmap, tapizado) porque el proxy los rechaza. Guardar capturas en el scratchpad (rutas absolutas; nunca dentro del repo).

## 8. README, commit y despliegue

- README: estadísticas (páginas, vehículos, marcas), carpeta nueva en el árbol de `nuevoset/`, componente nuevo en `src/components/`.
- Commit en la rama de trabajo con mensaje descriptivo (qué fotos, dónde se publicó, patentes pixeladas).
- **El despliegue es automático al llegar a `main`** (Cloudflare Pages). Abrir PR a `main` y mergear **solo si el usuario lo pide o lo confirma** en ese turno; si no, preguntar "¿Lo uno a main?".

## Contexto del proyecto

- Sitio: Astro 4 (SSG) + Tailwind, Cloudflare Pages. Dominio canónico `https://drmecanicoautomotriz.com`.
- `TrabajoModal.astro`: modo completo (sección con título, descripción, tarjeta grande) y compacto (tarjeta para grillas). El `<dialog>` es el mismo en ambos; un único script abre todos los `[data-abrir-modal]`.
- Taller físico en Peñalolén; el negocio es mecánico a domicilio en 25 comunas de Santiago (4 zonas).
- Instagram `@dr_automotrizz`; WhatsApp `+56962408735` (`waLink()` en `src/data/config.ts`).
- Historial de fichas publicadas: ver `src/data/trabajos.ts`.
