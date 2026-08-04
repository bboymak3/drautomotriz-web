import type { APIRoute } from 'astro';
import { servicios } from '@/data/servicios';
import { comunas } from '@/data/comunas';
import { allModelos, vehiculos } from '@/data/marcas';
import { config } from '@/data/config';
import fs from 'node:fs';
import path from 'node:path';

// Páginas estáticas (sin slash final, se normaliza abajo)
const staticPages = [
  '/',
  '/servicios/',
  '/comunas/',
  '/vehiculos/',
  '/vehiculos/todos/',
  '/galeria/',
  '/quienes-somos/',
  '/contacto/',
  '/politicas-de-privacidad/',
];

const servicioPages = servicios.map(s => `/servicios/${s.slug}/`);
const comunaPages = comunas.map(c => `/comunas/${c.slug}/`);
const vehiculoPages = allModelos.map(m => `/vehiculos/${m.marcaSlug}/${m.modeloSlug}/`);

const allPages = [...staticPages, ...servicioPages, ...comunaPages, ...vehiculoPages];

// Fecha actual en formato ISO
const lastmod = new Date().toISOString().split('T')[0];

// Recopilar todas las imágenes del sitio
function collectAllImages(): string[] {
  const imagesDir = path.join(process.cwd(), 'public', 'imagen');
  const allImages: string[] = [];

  function scanDir(dir: string, prefix: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        scanDir(fullPath, relativePath);
      } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
        allImages.push(`/imagen/${relativePath}`);
      }
    }
  }

  scanDir(imagesDir, '');

  // También incluir imágenes en /public raíz (favicon, og-image, etc.)
  const publicDir = path.join(process.cwd(), 'public');
  const rootImages = [
    '/og-image.png',
    '/og-image.jpg',
    '/favicon.svg',
    '/apple-touch-icon.png',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
  ];
  for (const img of rootImages) {
    if (fs.existsSync(path.join(publicDir, img.replace(/^\//, '')))) {
      allImages.push(img);
    }
  }

  return allImages;
}

function getPriority(page: string): string {
  if (page === '/') return '1.0';
  if (page.includes('/servicios/')) return '0.9';
  if (page.includes('/comunas/')) return '0.8';
  if (page.includes('/vehiculos/') && page !== '/vehiculos/' && page !== '/vehiculos/todos/') return '0.7';
  return '0.6';
}

function getChangefreq(page: string): string {
  if (page === '/') return 'daily';
  if (page.includes('/servicios/')) return 'weekly';
  if (page.includes('/comunas/')) return 'monthly';
  if (page.includes('/vehiculos/')) return 'monthly';
  return 'weekly';
}

// Función para obtener imágenes relevantes por página
function getImagesForPage(page: string): string[] {
  const images: string[] = [];

  // Imágenes globales (todas las páginas)
  images.push('/og-image.png');
  images.push('/imagen/logo/drautomotriz-logo.webp');

  if (page === '/') {
    // Home: banner asistencia-automotriz + banner vehiculo empresa + revision-tecnica
    images.push('/imagen/banner/asistencia-automotriz.png');
    images.push('/imagen/banner/vehiculo-empresa-drautomotriz.jpg');
    images.push('/imagen/banner/revision-tecnica-sin-estres-02.png');
    images.push('/imagen/banner/agenda-tu-servicio.jpeg');
    images.push('/imagen/banner/revision-tecnica-servicio-domicilio.png');
    // Primeras 12 imágenes de galería
    const galeriaDir = path.join(process.cwd(), 'public', 'imagen', 'drautomotriz');
    if (fs.existsSync(galeriaDir)) {
      const files = fs.readdirSync(galeriaDir)
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .sort()
        .slice(0, 12);
      for (const f of files) {
        images.push(`/imagen/drautomotriz/${f}`);
      }
    }
    // Primeros 8 vehículos
    vehiculos.slice(0, 8).forEach(v => images.push(v.imagen));
  } else if (page.includes('/comunas/')) {
    // Páginas de comunas: banner específico de la comuna + banner revisión técnica
    const slug = page.split('/comunas/')[1].replace('/', '');
    images.push(`/imagen/comunas/mecanico-a-domicilio-${slug}.png`);
    images.push('/imagen/banner/revision-tecnica-servicio-domicilio.png');
    images.push('/imagen/banner/asistencia-automotriz.png');
    // Todos los vehículos (para el widget MarcasQueAtendemos)
    vehiculos.forEach(v => images.push(v.imagen));
  } else if (page.includes('/vehiculos/') && page !== '/vehiculos/' && page !== '/vehiculos/todos/') {
    // Landings de vehículos específicos: foto del vehículo + galería
    const parts = page.split('/').filter(Boolean);
    if (parts.length >= 3) {
      const marcaSlug = parts[1];
      const modeloSlug = parts[2].replace('/', '');
      const vehiculo = vehiculos.find(v => {
        const prefix = v.marcaSlug + '-';
        const vModeloSlug = v.slug.startsWith(prefix) ? v.slug.slice(prefix.length) : v.slug;
        return v.marcaSlug === marcaSlug && vModeloSlug === modeloSlug;
      });
      if (vehiculo) {
        images.push(vehiculo.imagen);
      }
    }
    images.push('/imagen/banner/asistencia-automotriz.png');
  } else if (page === '/galeria/') {
    // Galería: todas las imágenes de /public/imagen/drautomotriz/
    const galeriaDir = path.join(process.cwd(), 'public', 'imagen', 'drautomotriz');
    if (fs.existsSync(galeriaDir)) {
      const files = fs.readdirSync(galeriaDir)
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .sort();
      for (const f of files) {
        images.push(`/imagen/drautomotriz/${f}`);
      }
    }
    // + galería temática
    const galeriaExtra = path.join(process.cwd(), 'public', 'imagen', 'galeria');
    if (fs.existsSync(galeriaExtra)) {
      const files = fs.readdirSync(galeriaExtra)
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
      for (const f of files) {
        images.push(`/imagen/galeria/${f}`);
      }
    }
    // + banners
    const bannerDir = path.join(process.cwd(), 'public', 'imagen', 'banner');
    if (fs.existsSync(bannerDir)) {
      const files = fs.readdirSync(bannerDir)
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
      for (const f of files) {
        images.push(`/imagen/banner/${f}`);
      }
    }
  } else if (page.includes('/servicios/')) {
    // Servicios: banner asistencia + algunos vehículos
    images.push('/imagen/banner/asistencia-automotriz.png');
    images.push('/imagen/banner/revision-tecnica-servicio-domicilio.png');
    vehiculos.slice(0, 6).forEach(v => images.push(v.imagen));
  }

  // Deduplicar
  return [...new Set(images)];
}

// Construir entradas del sitemap
const urlEntries = allPages.map(page => {
  const pageImages = getImagesForPage(page);

  let imagesXml = '';
  if (pageImages.length > 0) {
    imagesXml = '\n' + pageImages.map(img => `    <image:image>
      <image:loc>${config.dominio}${img}</image:loc>
      <image:title>DRAUTOMOTRIZ - Mecánico a Domicilio en Santiago</image:title>
    </image:image>`).join('\n');
  }

  return `  <url>
    <loc>${config.dominio}${page}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangefreq(page)}</changefreq>
    <priority>${getPriority(page)}</priority>${imagesXml}
  </url>`;
}).join('\n');

// Sección separada para imágenes que no están asociadas a ninguna página específica
// (imágenes sueltas de la galería, banners, etc.)
const allImages = collectAllImages();
const imagenOnlyEntries = allImages.slice(0, 200).map(img => `  <url>
    <loc>${config.dominio}/galeria/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
    <image:image>
      <image:loc>${config.dominio}${img}</image:loc>
      <image:title>DRAUTOMOTRIZ - Trabajo mecánico a domicilio en Santiago</image:title>
      <image:caption>Foto de trabajo mecánico realizado por DRAUTOMOTRIZ en Santiago, Chile</image:caption>
    </image:image>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
${imagenOnlyEntries}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
