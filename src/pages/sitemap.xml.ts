import type { APIRoute } from 'astro';
import { servicios } from '@/data/servicios';
import { comunas } from '@/data/comunas';
import { allModelos } from '@/data/marcas';
import { config } from '@/data/config';

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

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${config.dominio}${page}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangefreq(page)}</changefreq>
    <priority>${getPriority(page)}</priority>
  </url>`).join('\n')}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
