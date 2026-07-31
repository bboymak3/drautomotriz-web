# 🚗 DRAUTOMOTRIZ — Mecánico a Domicilio en Santiago

Sitio web oficial de **DRAUTOMOTRIZ**, servicio de mecánica automotriz a domicilio en Santiago, Chile. Construido con Astro + Tailwind CSS, optimizado para Cloudflare Pages, con Cloudflare D1 como base de datos y Cloudflare R2 para imágenes.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Desarrollo Local](#-desarrollo-local)
- [Despliegue en Cloudflare Pages](#-despliegue-en-cloudflare-pages)
- [Configuración de Cloudflare D1](#-configuración-de-cloudflare-d1)
- [Configuración de Cloudflare R2](#-configuración-de-cloudflare-r2)
- [Servicios y Comunas](#-servicios-y-comunas)
- [Personalización](#-personalización)

## ✨ Características

- ✅ **10 servicios** especializados con landing individual cada uno
- ✅ **28 comunas** de Santiago con landing individual SEO local
- ✅ **Páginas institucionales**: Inicio, Servicios, Comunas, Quiénes Somos, Contacto, Políticas de Privacidad
- ✅ **Diseño azul neón** moderno con efectos glow y animaciones
- ✅ **Mobile First** — 100% responsivo
- ✅ **WhatsApp integrado** en todas las secciones (+569 6240 8735)
- ✅ **Formulario de cotización** que guarda leads en D1 y abre WhatsApp
- ✅ **SEO local optimizado** para Santiago con Schema.org
- ✅ **Sitemap.xml** dinámico
- ✅ **Pages Function** para procesar leads
- ✅ **Cloudflare D1** para almacenar prospectos
- ✅ **Cloudflare R2** listo para almacenar fotos reales

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
|------------|------------|
| Framework | Astro 4.16+ |
| Estilos | Tailwind CSS 3.4+ |
| Build | Node.js 18+ |
| Hosting | Cloudflare Pages |
| Base de datos | Cloudflare D1 (SQLite) |
| Imágenes | Cloudflare R2 |
| Functions | Cloudflare Pages Functions |

## 📁 Estructura del Proyecto

```
drautomotriz-web/
├── public/                     # Archivos estáticos
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── _headers               # Headers de Cloudflare
│   └── _redirects             # Redirects de Cloudflare
├── src/
│   ├── components/            # Componentes Astro reutilizables
│   │   ├── Header.astro       # Header con menú dropdown
│   │   ├── Footer.astro       # Footer con enlaces
│   │   ├── Hero.astro         # Hero section
│   │   ├── Services.astro     # Grid de servicios
│   │   ├── HowItWorks.astro   # Cómo funciona (4 pasos)
│   │   ├── Gallery.astro      # Galería de trabajos
│   │   ├── Testimonials.astro # Testimonios
│   │   ├── QuoteForm.astro    # Formulario de cotización
│   │   ├── ComunasHighlight.astro
│   │   ├── WhatsAppCTA.astro  # Botón flotante WhatsApp
│   │   └── BottomNav.astro    # Nav inferior móvil
│   ├── data/                  # Datos centralizados
│   │   ├── config.ts          # Configuración global
│   │   ├── servicios.ts       # 10 servicios
│   │   ├── comunas.ts         # 28 comunas
│   │   └── testimonios.ts     # Reseñas
│   ├── layouts/
│   │   └── BaseLayout.astro   # Layout base con SEO
│   ├── pages/
│   │   ├── index.astro        # Home
│   │   ├── quienes-somos.astro
│   │   ├── contacto.astro
│   │   ├── politicas-de-privacidad.astro
│   │   ├── sitemap.xml.ts     # Sitemap dinámico
│   │   ├── servicios/
│   │   │   ├── index.astro    # Listado servicios
│   │   │   └── [slug].astro   # Landing por servicio
│   │   └── comunas/
│   │       ├── index.astro    # Listado comunas
│   │       └── [slug].astro   # Landing por comuna
│   └── styles/
│       └── global.css         # Tailwind + estilos custom
├── functions/
│   └── api/
│       └── lead.ts            # Pages Function para leads
├── database/
│   └── schema.sql             # Esquema Cloudflare D1
├── astro.config.mjs
├── tailwind.config.mjs
├── wrangler.toml
├── tsconfig.json
└── package.json
```

## 🚀 Desarrollo Local

### Requisitos previos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repo
git clone https://github.com/bboymak3/drautomotriz-web.git
cd drautomotriz-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Build de producción

```bash
npm run build       # Genera dist/
npm run preview     # Preview del build
```

## ☁️ Despliegue en Cloudflare Pages

### Opción 1: Via Wrangler CLI

```bash
# Instalar wrangler globalmente (si no lo tienes)
npm install -g wrangler

# Autenticarse en Cloudflare
wrangler login

# Build y deploy
npm run deploy
# o equivalentemente:
npm run build && wrangler pages deploy dist
```

### Opción 2: Via Dashboard de Cloudflare

1. Inicia sesión en [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Ve a **Workers & Pages** → **Create application** → **Pages**
3. Conecta tu repositorio de GitHub (`bboymak3/drautomotriz-web`)
4. Configura:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18
5. **Deploy**

### Dominio personalizado

En el dashboard de Cloudflare Pages → **Custom domains** → agrega `drautomotriz.cl` (o el dominio que tengas).

## 🗄️ Configuración de Cloudflare D1

### 1. Crear la base de datos

```bash
wrangler d1 create drautomotriz-db
```

Esto devolverá un `database_id`. Cópialo.

### 2. Configurar wrangler.toml

Edita `wrangler.toml` y descomenta/completa:

```toml
[[d1_databases]]
binding = "DB"
database_name = "drautomotriz-db"
database_id = "AQUÍ_EL_ID_DEVUELTO"
```

### 3. Aplicar el esquema

```bash
wrangler d1 execute drautomotriz-db --file=./database/schema.sql
```

### 4. Configurar bindings en Cloudflare Pages

En el dashboard: **Pages** → tu proyecto → **Settings** → **Functions** → **D1 database bindings**:
- Variable name: `DB`
- D1 database: `drautomotriz-db`

## 📦 Configuración de Cloudflare R2

### 1. Crear el bucket

```bash
wrangler r2 bucket create drautomotriz-images
```

### 2. Configurar wrangler.toml

```toml
[[r2_buckets]]
binding = "IMAGES"
bucket_name = "drautomotriz-images"
```

### 3. Subir imágenes

```bash
# Subir una imagen
wrangler r2 object put drautomotriz-images/drautomotriz/galeria/scanner-01.webp --file=./tus-imagenes/scanner-01.webp
```

### 4. Configurar dominio público (opcional pero recomendado)

En el dashboard de R2 → tu bucket → **Settings** → **Public access** → habilita un dominio personalizado (ej: `img.drautomotriz.cl`).

Luego puedes referenciar imágenes así: `https://img.drautomotriz.cl/drautomotriz/galeria/scanner-01.webp`

## 🔧 Servicios y Comunas

### Servicios disponibles (10)

1. **Mecánica General a Domicilio** — `/servicios/mecanica-general-a-domicilio`
2. **Escáner y Diagnóstico Computarizado** — `/servicios/escaner-y-diagnostico-computarizado`
3. **Mantención Preventiva y Afinamiento** — `/servicios/mantencion-preventiva-y-afinamiento`
4. **Servicio de Frenos a Domicilio** — `/servicios/servicio-de-frenos-a-domicilio`
5. **Revisión y Cambio de Batería** — `/servicios/revision-y-cambio-de-bateria`
6. **Suspensión y Tren Delantero** — `/servicios/suspension-y-tren-delantero`
7. **Sistema de Refrigeración** — `/servicios/sistema-de-refrigeracion`
8. **Inyección Electrónica y Limpieza** — `/servicios/inyeccion-electronica-y-limpieza`
9. **Auxilio Mecánico 24/7** — `/servicios/auxilio-mecanico-24-7`
10. **Correa / Cadena de Distribución** — `/servicios/correa-o-cadena-de-distribucion`

### Comunas con landing (28)

- **Oriente**: Las Condes, Providencia, Vitacura, Lo Barnechea, Ñuñoa, La Reina, Peñalolén, Macul
- **Centro**: Santiago Centro, Recoleta, Independencia, Estación Central
- **Norte**: Huechuraba, Quilicura, Conchalí, Colina, Lampa
- **Sur**: La Florida, Puente Alto, La Cisterna, San Miguel, San Bernardo
- **Poniente**: Maipú, Pudahuel, Cerro Navia, Lo Prado, Renca, Quinta Normal

## 🎨 Personalización

### Cambiar el número de WhatsApp

Edita `src/data/config.ts`:

```typescript
export const config = {
  whatsappNumero: '56962408735',  // ← Cambia aquí
  whatsappTexto: 'Hola, necesito un mecanico a domicilio',
  // ...
};
```

### Cambiar colores (paleta azul neón)

Edita `tailwind.config.mjs` → sección `colors.neon`:

```javascript
neon: {
  500: '#00d4ff',  // ← Color principal
  // ...
}
```

### Agregar un nuevo servicio

Edita `src/data/servicios.ts` y agrega un objeto al array `servicios` con la estructura definida. Se generará automáticamente la landing en `/servicios/[slug]`.

### Agregar una nueva comuna

Edita `src/data/comunas.ts` y agrega un objeto al array `comunas`. Se generará automáticamente la landing en `/comunas/[slug]`.

## 📞 Contacto

- **WhatsApp**: +569 6240 8735
- **Instagram**: @dr_automotrizz
- **Cobertura**: Santiago, Región Metropolitana

## 📝 Licencia

Propiedad de DRAUTOMOTRIZ. Todos los derechos reservados.
