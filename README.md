# DRAUTOMOTRIZ - Mecánico a Domicilio en Santiago

Sitio web oficial de DRAUTOMOTRIZ, servicio de mecánica automotriz a domicilio en Santiago, Chile.

## 🚀 En producción

- **Dominio**: https://drmecanicoautomotriz.com (migrado desde drautomotriz.pages.dev en ago-2026)
- **URL Pages**: https://drautomotriz.pages.dev/
- **Repositorio**: https://github.com/bboymak3/drautomotriz-web
- **Plataforma**: Cloudflare Pages
- **Stack**: Astro + Tailwind CSS + Cloudflare D1 + Cloudflare R2

## 📊 Estadísticas

*(Actualizado sep-2026, verificado con `npm run build`)*

- **98 páginas** HTML generadas
- **35 comunas** con landing individual, en 6 zonas (Norte 6, Oriente 7, Sur 8, Poniente 7, Cordillera 2, Talagante 5)
- **39 vehículos** de 15 marcas con landing individual
- **14 servicios** con landing individual (destacado: Revisión Técnica Sin Estrés)
- **~200 fotos** en la galería (`drautomotriz/` + `galeria/` + `nuevoset/`)
- **1.902 imágenes** indexables en el sitemap (90 URLs únicas; la galería agrupa todas las fotos en `/galeria/`)

## 🛠️ Tecnologías

- **Framework**: Astro 4.16 (SSG - Static Site Generation)
- **CSS**: Tailwind CSS 3.4 con paleta azul neón + naranja neón
- **Fuentes**: Orbitron (display) + Inter (body)
- **Mapa**: Leaflet.js con tile layer dark de CARTO
- **Analytics**: Google Tag Manager (GTM-5BC8WQPG) + Google Analytics 4 (G-5NGSZYCZH8)
- **SEO**: Schema.org (JSON-LD) con AutoRepair, Service, FAQPage, BreadcrumbList, ItemList, ImageGallery
- **Base de datos**: Cloudflare D1 (SQLite)
- **Almacenamiento**: Cloudflare R2 para imágenes
- **Funciones**: Cloudflare Pages Functions para /api/lead

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.astro     # Navegación fija con logo + menú
│   ├── Footer.astro     # Pie de página con 5 columnas
│   ├── Hero.astro       # Sección principal (texto + imagen)
│   ├── Services.astro   # Grid de 14 servicios
│   ├── PaymentMethods.astro     # Métodos de pago (Webpay/Transbank)
│   ├── TapizadoVolantes.astro   # Ficha Tapizado de Volantes (antes del footer)
│   ├── BottomNav.astro          # Navegación inferior móvil
│   ├── LocalPenalolen.astro     # Aviso local físico en Peñalolén (todas las páginas; versión destacada en /comunas/penalolen/)
│   ├── TrabajoChevroletNKR.astro # Módulo home + landing: Chevrolet NKR 512 cambio kit de embrague
│   ├── TrabajoModal.astro        # Tarjeta + modal de fotos reutilizable para trabajos realizados
│   ├── TrabajoNissanTiida.astro  # Módulo home + landing: Nissan Tiida mantención por km (usa TrabajoModal)
│   ├── TrabajoVolkswagenGolf.astro # Módulo home + landing: VW Golf radiador + aire acondicionado (usa TrabajoModal)
│   ├── TrabajoChevroletOnix.astro  # Módulo home + landing: Chevrolet Onix cambio kit de embrague (usa TrabajoModal)
│   ├── TrabajoChevroletCorsa.astro # Módulo home + landing: Chevrolet Corsa kit de distribución + bomba de agua + termostato (usa TrabajoModal)
│   ├── TrabajoToyota4Runner.astro  # Módulo home + landing: Toyota 4Runner inspección pre compra (usa TrabajoModal)
│   ├── TrabajoNissanMarch.astro    # Módulo home + landing: Nissan March mantención por km (usa TrabajoModal)
│   ├── TrabajoSuzukiBaleno.astro   # Módulo home + landing: Suzuki Baleno mantención por km + tapa fuga A/C + revisión técnica (usa TrabajoModal)
│   ├── Vehiculos.astro  # Grid de 39 vehículos
│   ├── ComunasHighlight.astro  # Buscador + lista + mapa Leaflet
│   ├── ComunaMap.astro   # Mapa interactivo con Leaflet
│   ├── GoogleReviewsModal.astro  # Modal de reseñas Google
│   ├── BannerServicio.astro  # Banner para páginas de servicio
│   ├── GaleriaServicio.astro  # Galería en páginas de servicio
│   ├── ComunaContenidoSEO.astro  # Contenido SEO por comuna
│   └── ...
├── data/                # Datos centralizados
│   ├── config.ts        # Configuración global (WhatsApp, dominio, etc.)
│   ├── servicios.ts     # 14 servicios (1 destacado + 13 prioritarios)
│   ├── comunas.ts       # 35 comunas en 6 zonas
│   └── marcas.ts        # 39 vehículos de 15 marcas
├── layouts/
│   └── BaseLayout.astro # Layout base con GTM, GA4, favicon, OG image
├── pages/
│   ├── index.astro              # Home
│   ├── servicios/
│   │   ├── index.astro          # Catálogo de servicios
│   │   └── [slug].astro         # Landing por servicio (14)
│   ├── comunas/
│   │   ├── index.astro          # Listado de comunas
│   │   └── [slug].astro         # Landing por comuna (35)
│   ├── vehiculos/
│   │   ├── index.astro          # Catálogo por marca
│   │   ├── todos.astro          # Grid completo con filtros
│   │   └── [marca]/[modelo].astro  # Landing por vehículo (39) — muestra el modal del trabajo si el vehículo tiene uno
│   ├── galeria.astro            # Galería con lightbox y filtro por categoría
│   ├── 404.astro                # Página 404 (también usada para 410 de comunas eliminadas)
│   ├── quienes-somos.astro
│   ├── contacto.astro
│   ├── politicas-de-privacidad.astro
│   └── sitemap.xml.ts           # Sitemap dinámico (90 URLs + 1.902 imágenes)
├── styles/
│   └── global.css       # Estilos globales con paleta neón
└── functions/
    ├── api/
    │   └── lead.ts      # Pages Function para guardar leads en D1
    └── comunas/
        └── _middleware.ts  # 410 Gone para comunas eliminadas

public/
├── imagen/
│   ├── logo/            # Logo en múltiples formatos y tamaños
│   ├── banner/          # Banners (asistencia-automotriz, revisión-técnica, etc.)
│   ├── comunas/         # 35 banners personalizados por comuna
│   ├── vehiculos/       # 39 fotos de vehículos
│   ├── drautomotriz/    # 105 fotos de galería
│   ├── galeria/         # 11 fotos temáticas (nombres SEO)
│   ├── payment/         # Imagen de métodos de pago
│   └── nuevoset/        # Fotos reales de trabajos (sep-2026), .webp + .jpeg original
│       ├── Peugeot/             # 14 fotos (distribución, filtros, frenos 3008...)
│       ├── nissan-march/        # 6 fotos mantención por km
│       ├── chevrolet-nkr-512/   # 7 fotos cambio kit de embrague (taller en Peñalolén)
│       ├── nissan-tiida/        # 8 fotos mantención por km, correa de accesorios, cuerpo de aceleración
│       ├── chevrolet-onix/      # 4 fotos cambio kit de embrague
│       ├── volkswagen-golf/     # 6 fotos cambio de radiador + recarga de aire acondicionado
│       └── inspeccion/          # Pre-compra: subaru/ (9) y volkswagen-tiguan-r/ (7)
├── favicon.ico          # Multi-resolución (16/32/48/64)
├── favicon.svg
├── og-image.png         # 1200x630 para redes sociales
├── robots.txt           # Reglas para bots + sitemap
├── _headers             # CORS + cache headers
├── _redirects           # 301 a trailing slash + slugs antiguos
└── site.webmanifest     # PWA manifest
```

## 🧭 Contexto y convenciones

- **Imágenes**: todas las fotos se sirven en **WebP**; el `.jpeg` original se conserva al lado. Nombres de archivo en minúsculas, con guiones y palabras clave SEO (ej. `cambio-filtro-de-aire-peugeot-santiago.webp`), nunca con espacios.
- **Galerías por servicio**: `GaleriaServicio.astro` muestra fotos de `nuevoset/` en pre-compra y mantención por km; `/galeria` y la home también las incluyen con labels y categorías.
- **Iconos de servicios**: se unificaron a ⚙️ (engranaje) / 🔧 en vez de emojis variados.
- **URLs**: siempre con trailing slash; los redirects 301 están explícitos en `_redirects` (Cloudflare usa 308 por defecto).
- **Comunas eliminadas**: responden **410 Gone** desde `functions/comunas/_middleware.ts` (Pages no soporta 410 en `_redirects`). Al quitar una comuna: borrarla de `comunas.ts`, agregar su slug a `COMUNAS_ELIMINADAS` y quitar su 301 de `_redirects`.
- **Schemas**: sin `aggregateRating` (causaba errores en Google Search Console).
- **Encoding**: los archivos son UTF-8. Ojo al editar desde Windows (hubo un incidente de mojibake CP850 en `galeria`/`[slug]`/`GaleriaServicio`).
- **Dominio canónico**: `config.dominio` en `src/data/config.ts` y `site` en `astro.config.mjs` → `https://drmecanicoautomotriz.com`.

## ⚠️ Pendientes conocidos

- `wrangler.toml` tiene los bindings de D1 y R2 comentados: `/api/lead` responde igual (devuelve el link de WhatsApp) pero no guarda los leads hasta configurar D1.
- `src/images/` contiene fotos originales sin usar (nombres `WhatsApp Image ...`).

## 🎨 Paleta de colores

- **Azul neón**: `#00d4ff` (primario - servicios regulares)
- **Naranja neón**: `#ff8a00` (secundario - servicio estrella Revisión Técnica)
- **Dark**: `#0a0a0a` (fondo)
- **WhatsApp**: `#25D366` (botones de WhatsApp)

## 🚀 Desarrollo local

```bash
npm install
npm run dev      # Servidor de desarrollo en http://localhost:4321
npm run build     # Build de producción a /dist
npm run preview   # Preview del build
```

## 📦 Deploy

El deploy es automático vía Cloudflare Pages al hacer push a `main`.

```bash
# Deploy manual
CLOUDFLARE_API_TOKEN=cfut_xxx npx wrangler pages deploy dist --project-name drautomotriz --branch main
```

## 📞 Contacto

- **WhatsApp**: +569 6240 8735
- **Instagram**: @dr_automotrizz
- **Email**: contacto@drautomotriz.cl
- **Cobertura**: Santiago, Región Metropolitana, Chile
