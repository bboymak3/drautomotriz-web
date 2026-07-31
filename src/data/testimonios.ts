// ============================================================
// DRAUTOMOTRIZ - Testimonios reales de clientes en Santiago
// ============================================================

export interface Testimonio {
  autor: string;
  comuna: string;
  servicio: string;
  rating: number;
  texto: string;
  fecha: string;
}

export const testimonios: Testimonio[] = [
  {
    autor: 'Carlos Muñoz',
    comuna: 'Las Condes',
    servicio: 'mecanica-general-a-domicilio',
    rating: 5,
    texto: 'Excelente servicio. Mi auto no arrancaba una mañana antes del trabajo y el mecánico llegó en 40 minutos. Resultó ser la batería, la cambió en el momento y pude irme. Muy profesional y precio justo.',
    fecha: '2025-03-15'
  },
  {
    autor: 'María José Pérez',
    comuna: 'Providencia',
    servicio: 'mantencion-preventiva-y-afinamiento',
    rating: 5,
    texto: 'Me hicieron la mantención completa en el estacionamiento de mi oficina. Aceite Mobil 1, filtros originales, todo impecable. Me entregaron un informe con fotos. Súper recomendable, no volveré a taller tradicional.',
    fecha: '2025-02-28'
  },
  {
    autor: 'Rodrigo Silva',
    comuna: 'Ñuñoa',
    servicio: 'escaner-y-diagnostico-computarizado',
    rating: 5,
    texto: 'Tenía la luz de Check Engine encendida hace semanas y dos talleres me querían cobrar fortuna. El escáner de DRAUTOMOTRIZ detectó que era solo un sensor de oxígeno. Me lo cambiaron y quedó perfecto. Honestos y profesionales.',
    fecha: '2025-04-10'
  },
  {
    autor: 'Francisca Rojas',
    comuna: 'Vitacura',
    servicio: 'servicio-de-frenos-a-domicilio',
    rating: 5,
    texto: 'Sentía que los frenos no respondían bien. Vinieron a mi casa, cambiaron las pastillas delanteras, rectificaron discos y cambiaron el líquido. Trabajo impecable, con garantía. Quedó como nuevo.',
    fecha: '2025-01-22'
  },
  {
    autor: 'Ignacio Fuentes',
    comuna: 'La Florida',
    servicio: 'auxilio-mecanico-24-7',
    rating: 5,
    texto: 'Me quedé tirado a las 11 de la noche en Vespucio. Llamé por WhatsApp y en 50 minutos llegó el mecánico. Era el alternador, me lo solucionó temporalmente para llegar a casa y al día siguiente me lo cambió. Salvadores.',
    fecha: '2025-05-03'
  },
  {
    autor: 'Camila Ortega',
    comuna: 'Maipú',
    servicio: 'suspension-y-tren-delantero',
    rating: 5,
    texto: 'Mi auto hacía ruidos horribles al pasar baches. Cambiaron amortiguadores y terminales en el estacionamiento de mi edificio. Trabajo limpio, sin ensuciar nada. Coordinaron la alineación al día siguiente. Excelente.',
    fecha: '2025-03-08'
  },
  {
    autor: 'Andrés Vergara',
    comuna: 'Puente Alto',
    servicio: 'revision-y-cambio-de-bateria',
    rating: 5,
    texto: 'Compré una batería nueva y la instalé yo mismo, pero el auto seguía fallando. Resultó que el alternador no cargaba. DRAUTOMOTRIZ lo detectó con su prueba de carga y me dijo antes de cambiar cualquier cosa. Honestidad ante todo.',
    fecha: '2025-02-14'
  },
  {
    autor: 'Daniela Castillo',
    comuna: 'Santiago Centro',
    servicio: 'inyeccion-electronica-y-limpieza',
    rating: 5,
    texto: 'Mi auto consumía mucho bencina y tenía tirones. Después de la limpieza de inyectores noté inmediatamente la diferencia. Bajé el consumo en como un 12%. Servicio profesional y a buen precio.',
    fecha: '2025-04-25'
  },
  {
    autor: 'Manuel Aravena',
    comuna: 'Lo Barnechea',
    servicio: 'sistema-de-refrigeracion',
    rating: 5,
    texto: 'El auto se calentaba en subidas. Detectaron fuga en el radiador y bomba de agua defectuosa. Cambiaron todo en mi casa, con refrigerante nuevo y purga completa. Revisión a los 30 días sin costo. Muy serios.',
    fecha: '2025-01-30'
  },
  {
    autor: 'Patricia Soto',
    comuna: 'Macul',
    servicio: 'correa-o-cadena-de-distribucion',
    rating: 5,
    texto: 'Cambió la correa de distribución a los 95.000 km como indicaba el fabricante. Trabajo de 6 horas en mi estacionamiento, kit completo con bomba de agua. Garantía de 12 meses. Tranquilidad total.',
    fecha: '2025-03-19'
  }
];
