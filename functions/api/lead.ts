// ============================================================
// DRAUTOMOTRIZ - Pages Function para guardar leads en D1
// Ruta: /api/lead
// ============================================================
// Recibe un POST con los datos del formulario de cotización,
// valida, guarda en Cloudflare D1 (si está configurado) y
// devuelve la URL de WhatsApp pre-armada para redirigir.
//
// Si D1 no está configurado, falla silenciosamente y solo
// devuelve la URL de WhatsApp para que el cliente igual pueda
// contactar.
// ============================================================

interface LeadData {
  nombre?: string;
  telefono?: string;
  comuna?: string;
  marca?: string;
  modelo?: string;
  servicio?: string;
  mensaje?: string;
  fecha?: string;
  consentimiento?: boolean;
}

interface Env {
  DB?: D1Database;
}

const WHATSAPP_NUMERO = '56962408735';

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  try {
    const data: LeadData = await request.json();

    // Validación básica
    if (!data.nombre || !data.telefono || !data.servicio || !data.mensaje) {
      return new Response(JSON.stringify({
        error: 'Faltan campos obligatorios: nombre, telefono, servicio, mensaje',
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (!data.consentimiento) {
      return new Response(JSON.stringify({
        error: 'Debes aceptar las políticas de privacidad',
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Guardar en D1 (si está configurado)
    if (env.DB) {
      try {
        await env.DB.prepare(
          `INSERT INTO dra_leads (
            nombre, telefono, comuna, vehiculo_marca, vehiculo_modelo,
            servicio_solicitado, detalle_falla, fecha_preferida,
            fuente, ip_address, user_agent
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'web', ?, ?)`
        ).bind(
          data.nombre,
          data.telefono,
          data.comuna || null,
          data.marca || null,
          data.modelo || null,
          data.servicio,
          data.mensaje,
          data.fecha || null,
          request.headers.get('cf-connecting-ip') || null,
          request.headers.get('user-agent') || null
        ).run();
      } catch (dbErr) {
        console.error('Error guardando en D1:', dbErr);
        // No fallamos la request, seguimos para devolver WhatsApp URL
      }
    }

    // Armar mensaje de WhatsApp
    const mensajeWhatsApp = `*NUEVA COTIZACIÓN - DRAUTOMOTRIZ*

*Nombre:* ${data.nombre}
*Teléfono:* ${data.telefono}
*Comuna:* ${data.comuna || 'No especificada'}
*Vehículo:* ${data.marca || 'No especificado'} ${data.modelo || ''}
*Servicio:* ${data.servicio}
${data.fecha ? `*Fecha preferida:* ${data.fecha}\n` : ''}
*Detalle:*
${data.mensaje}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensajeWhatsApp)}`;

    return new Response(JSON.stringify({
      success: true,
      message: 'Lead guardado correctamente',
      whatsappUrl,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (err) {
    console.error('Error procesando lead:', err);
    return new Response(JSON.stringify({
      error: 'Error interno del servidor',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

// GET: devuelve info del endpoint
export const onRequestGet: PagesFunction<Env> = async () => {
  return new Response(JSON.stringify({
    endpoint: '/api/lead',
    method: 'POST',
    description: 'Recibe leads del formulario de cotización y devuelve URL de WhatsApp pre-armada',
    fields: ['nombre', 'telefono', 'comuna', 'marca', 'modelo', 'servicio', 'mensaje', 'fecha', 'consentimiento'],
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
