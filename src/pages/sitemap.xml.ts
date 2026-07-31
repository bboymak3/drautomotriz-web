import type { APIRoute } from 'astro';
import { servicios } from '@/data/servicios';
import { comunas } from '@/data/comunas';
import { config } from '@/data/config';

const staticPages = [
  '',
  '/servicios',
  '/comunas',
  '/quienes-somos',
  '/contacto',
  '/politicas-de-privacidad',
];

const servicioPages = servicios.map(s => `/servicios/${s.slug}`);
const comunaPages = comunas.map(c => `/comunas/${c.slug}`);

const allPages = [...staticPages, ...servicioPages, ...comunaPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${config.dominio}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/servicios/') || page.includes('/comunas/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
