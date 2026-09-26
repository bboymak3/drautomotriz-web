// ============================================================
// DRAUTOMOTRIZ - 410 Gone para comunas eliminadas
// Ruta: /comunas/*
// ============================================================
// Cloudflare Pages no soporta el código 410 en _redirects
// (solo 301/302/303/307/308/200), así que se responde aquí.
// El resto de /comunas/* pasa directo al sitio estático.
//
// Al eliminar una comuna de src/data/comunas.ts, agregar su
// slug a esta lista.
// ============================================================

const COMUNAS_ELIMINADAS = new Set([
  'alhue',
  'buin',
  'calera-de-tango',
  'colina',
  'curacavi',
  'la-granja',
  'la-pintana',
  'lampa',
  'lo-prado',
  'maria-pinto',
  'melipilla',
  'paine',
  'puente-alto',
  'san-bernardo',
  'san-pedro',
  'san-ramon',
  'tiltil',
]);

export const onRequest: PagesFunction = async ({ request, next, env }) => {
  const url = new URL(request.url);
  const slug = url.pathname.split('/')[2];

  if (!slug || !COMUNAS_ELIMINADAS.has(slug)) return next();

  // Reutiliza la página 404 del sitio como cuerpo, con status 410
  const pagina404 = await (env as { ASSETS: Fetcher }).ASSETS.fetch(new URL('/404.html', url));
  return new Response(pagina404.body, {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex',
      'Cache-Control': 'no-cache',
    },
  });
};
