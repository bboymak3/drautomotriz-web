# DRAUTOMOTRIZ - Mecánico a Domicilio en Santiago

Sitio web oficial de DRAUTOMOTRIZ, servicio de mecánica automotriz a domicilio en Santiago, Chile.

## 🚀 En producción

- **URL**: https://drautomotriz.pages.dev/
- **Repositorio**: https://github.com/bboymak3/drautomotriz-web
- **Plataforma**: Cloudflare Pages
- **Stack**: Astro + Tailwind CSS + Cloudflare D1 + Cloudflare R2

## 📊 Estadísticas

- **90 páginas** HTML generadas
- **35 comunas** de Santiago con landing individual
- **32 vehículos** reales con landing individual
- **14 servicios** con landing individual
- **105+ imágenes** en la galería
- **1.974 imágenes** indexables en el sitemap

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
│   ├── Vehiculos.astro  # Grid de 32 vehículos
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
│   ├── comunas.ts        # 35 comunas en 4 zonas
│   └── marcas.ts        # 32 vehículos de 15 marcas
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
│   │   └── [marca]/[modelo].astro  # Landing por vehículo (32)
│   ├── galeria.astro            # Galería con lightbox
│   ├── quienes-somos.astro
│   ├── contacto.astro
│   ├── politicas-de-privacidad.astro
│   └── sitemap.xml.ts           # Sitemap dinámico (290 URLs + 1.974 imágenes)
├── styles/
│   └── global.css       # Estilos globales con paleta neón
└── functions/
    └── api/
        └── lead.ts      # Pages Function para guardar leads en D1

public/
├── imagen/
│   ├── logo/            # Logo en múltiples formatos y tamaños
│   ├── banner/          # Banners (asistencia-automotriz, revisión-técnica, etc.)
│   ├── comunas/         # 35 banners personalizados por comuna
│   ├── vehiculos/       # 32 fotos de vehículos
│   └── drautomotriz/    # 105 fotos de galería
├── favicon.ico          # Multi-resolución (16/32/48/64)
├── favicon.svg
├── og-image.png         # 1200x630 para redes sociales
├── robots.txt           # Reglas para bots + sitemap
├── _headers             # CORS + cache headers
├── _redirects           # Redirecciones 301 de slugs antiguos
└── site.webmanifest     # PWA manifest
```

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
