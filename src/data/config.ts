// ============================================================
// DRAUTOMOTRIZ - Configuración global del negocio
// ============================================================

export const config = {
  marca: 'DRAUTOMOTRIZ',
  marcaLarga: 'DRAUTOMOTRIZ',
  instagram: '@dr_automotrizz',
  instagramUrl: 'https://instagram.com/dr_automotrizz',
  whatsappNumero: '56962408735',
  whatsappTexto: 'Hola, necesito un mecanico a domicilio',
  whatsappUrl: 'https://wa.me/56962408735?text=Hola,%20necesito%20un%20mecanico%20a%20domicilio',
  ciudad: 'Santiago, Chile',
  region: 'Región Metropolitana',
  horario: 'Lun a Sáb: 08:00 - 20:00 · Auxilio 24/7',
  stats: {
    clientes: '2.500+',
    cobertura: '40+ comunas',
    experiencia: '8+ años',
    servicios: '13+ servicios'
  },
  email: 'contacto@drautomotriz.cl',
  dominio: 'https://drautomotriz.pages.dev',
};

// Helper para generar enlace de WhatsApp con contexto
export const waLink = (texto?: string) =>
  `https://wa.me/${config.whatsappNumero}?text=${encodeURIComponent(texto || config.whatsappTexto)}`;

// Helper para enlace de WhatsApp con servicio específico
export const waLinkServicio = (nombreServicio: string) =>
  `https://wa.me/${config.whatsappNumero}?text=${encodeURIComponent(`Hola, necesito el servicio de ${nombreServicio} a domicilio. ¿Me puedes ayudar?`)}`;
