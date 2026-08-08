// ============================================================
// DRAUTOMOTRIZ - Catálogo de servicios a domicilio
// 13 servicios prioritarios + 1 servicio especial destacado (Revisión Técnica Sin Estrés)
// ============================================================

export interface Servicio {
  slug: string;
  nombre: string;
  categoria: string;
  tagline: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  icono: string;
  descripcionCorta: string;
  paragraphs: string[];
  beneficios: { title: string; desc: string }[];
  incluye: string[];
  faq: { q: string; a: string }[];
  keywords: string[];
  relacionados: string[];
  destacado?: boolean; // Para servicio especial Revisión Técnica
}

export const servicios: Servicio[] = [
  // =====================================================
  // SERVICIO ESPECIAL DESTACADO - REVISIÓN TÉCNICA SIN ESTRÉS
  // =====================================================
  {
    slug: 'revision-tecnica-sin-estres',
    nombre: 'Revisión Técnica Sin Estrés',
    categoria: 'Servicio Especial',
    tagline: 'Vamos a buscar tu auto, lo llevamos a revisión técnica y te lo devolvemos con el documento aprobado.',
    h1: 'Revisión Técnica Sin Estrés en Santiago | Retiro y Devolución a Domicilio',
    metaTitle: 'Revisión Técnica Sin Estrés a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Servicio de revisión técnica sin estrés en Santiago. Retiramos tu auto, lo llevamos a la planta de revisión técnica y te lo devolvemos con el documento aprobado. Agenda al +56962408735.',
    icono: '📋',
    descripcionCorta: 'Retiramos tu vehículo, lo llevamos a la planta de revisión técnica y te lo devolvemos con el documento aprobado. Sin filas, sin pérdida de tiempo.',
    paragraphs: [
      'El servicio de Revisión Técnica Sin Estrés es nuestra propuesta estrella para resolver uno de los trámites más tediosos que deben realizar los conductores en Chile. La revisión técnica obligatoria es un trámite lento que puede tomar entre 2 y 4 horas entre traslado, fila, espera y el proceso mismo, lo que la convierte en una pesadilla para quienes trabajan o tienen responsabilidades familiares. Con nuestro servicio, tú te quedas en casa u oficina y nosotros nos encargamos de todo.',
      'El proceso es simple: primero coordinamos contigo por WhatsApp el día y lugar de retiro del vehículo (casa, oficina, estacionamiento). Nuestro conductor profesional llega con tu auto, lo lleva a la planta de revisión técnica autorizada más cercana, realiza el trámite completo, y devuelve el vehículo en el mismo punto de retiro con el documento aprobado en mano. Todo el proceso lo monitoreas por WhatsApp en tiempo real.',
      'En Chile, circular sin revisión técnica al día puede resultar en multas de hasta 1 UTM (más de $60.000 pesos), retención del vehículo por Carabineros, y problemas con seguros en caso de accidentes. Además, sin revisión técnica no puedes renovar el permiso de circulación. Nuestro servicio te asegura cumplir con la ley sin moverte de tu casa, ahorrándote entre 3 y 5 horas de tiempo productivo que puedes dedicar a tu trabajo, familia o descanso.',
      'Si el vehículo no aprueba la revisión técnica por algún defecto mecánico, te entregamos un informe detallado de las observaciones y te cotizamos las reparaciones necesarias a domicilio. Si decides reparar con nosotros, dentro de 7 días la re-revisión en la misma planta tiene costo reducido, y te incluimos el segundo traslado sin costo adicional. Garantía total: si por alguna razón del trámite no logramos la aprobación, no te cobramos el servicio.'
    ],
    beneficios: [
      { title: 'Cero pérdida de tiempo', desc: 'Te ahorras entre 3 y 5 horas de filas y trámites. Sigues con tu día normal mientras nosotros hacemos todo.' },
      { title: 'Trámite garantizado', desc: 'Si el auto está en condiciones, te entregamos el documento aprobado. Si no aprueba, no te cobramos el servicio.' },
      { title: 'Monitoreo por WhatsApp', desc: 'Recibes fotos y updates en tiempo real: retiro, llegada a planta, proceso y devolución. Tú decides cuándo salir a recibirlo.' },
      { title: 'Reparación a domicilio', desc: 'Si el vehículo no aprueba, te cotizamos las reparaciones a domicilio y coordinamos la re-revisión sin costo de traslado adicional.' }
    ],
    incluye: [
      'Coordinación previa por WhatsApp del día y lugar de retiro',
      'Retiro del vehículo en casa, oficina o estacionamiento',
      'Traslado a planta de revisión técnica autorizada',
      'Pago del trámite (reembolsable o incluido según plan)',
      'Realización del trámite completo',
      'Monitoreo en tiempo real por WhatsApp con fotos',
      'Devolución del vehículo en el mismo punto de retiro',
      'Entrega del documento aprobado físico y digital',
      'Informe de observaciones si no aprueba',
      'Cotización de reparaciones a domicilio si requiere'
    ],
    faq: [
      { q: '¿Cuánto cuesta el servicio de Revisión Técnica Sin Estrés?', a: 'El valor depende de la comuna de retiro y del valor vigente del trámite en la planta. Te recomendamos escribirnos por WhatsApp con tu comuna para una cotización exacta. Incluye retiro, traslado, trámite, espera y devolución.' },
      { q: '¿Qué pasa si mi auto no aprueba la revisión técnica?', a: 'Te entregamos el informe de observaciones detallado. Te cotizamos las reparaciones a domicilio. Si decides reparar con nosotros, te incluimos el segundo traslado a la re-revisión sin costo (la re-revisión en planta tiene costo reducido dentro de 7 días).' },
      { q: '¿Cuánto tiempo toma todo el proceso?', a: 'Entre 3 y 5 horas desde el retiro hasta la devolución. Te informamos cada etapa por WhatsApp para que sepas exactamente cuándo saldrás a recibir tu auto.' },
      { q: '¿Qué documentos necesito entregar?', a: 'Solo necesitas tener el Permiso de Circulación al día (o el comprobante de pago del año en curso), Cédula de Identidad del dueño, y el Seguro Obligatorio (SOAP) vigente. Todo en orden para evitar rechazos en planta.' },
      { q: '¿Cubren todas las comunas de Santiago?', a: 'Sí, cubrimos toda la Región Metropolitana. El precio del traslado varía según la comuna. Para comunas lejanas (Talagante, Melipilla, Colina) puede aplicar un recargo que te informamos antes de confirmar.' },
      { q: '¿Pueden hacer la revisión técnica el mismo día?', a: 'Recomendamos agendar con al menos 24 horas de anticipación para asegurar disponibilidad. En casos de urgencia (vencimiento inminente), intentamos acomodarte el mismo día sujeto a disponibilidad.' },
      { q: '¿El conductor está asegurado?', a: 'Sí, todos nuestros conductores están cubiertos por seguro de responsabilidad civil. Tu vehículo está protegido durante todo el traslado y permanencia en planta.' }
    ],
    keywords: ['revision tecnica sin estres', 'revision tecnica domicilio santiago', 'retiro auto revision tecnica', 'tramitar revision tecnica', 'revision tecnica a domicilio'],
    relacionados: ['mantencion-por-km', 'diagnosticos', 'servicio-de-frenos-a-domicilio'],
    destacado: true
  },

  // =====================================================
  // SERVICIOS PRIORITARIOS (13)
  // =====================================================
  {
    slug: 'mantencion-por-km',
    nombre: 'Mantención por Kilometraje',
    categoria: 'Mantenimiento',
    tagline: 'Mantenciones programadas según el kilometraje de tu vehículo: 10.000, 20.000, 40.000, 60.000 y 100.000 km.',
    h1: 'Mantención por Kilometraje a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Mantención por Km a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Mantención por kilometraje a domicilio en Santiago. Planes programados para 10k, 20k, 40k, 60k y 100k km con repuestos OEM. Agenda al +56962408735.',
    icono: '📊',
    descripcionCorta: 'Mantenciones programadas según el kilometraje de tu vehículo: 10.000, 20.000, 40.000, 60.000 y 100.000 km.',
    paragraphs: [
      'La mantención por kilometraje es la forma profesional y recomendada por los fabricantes para cuidar tu vehículo a lo largo de su vida útil. Cada vez que tu auto acumula cierta cantidad de kilómetros, requiere atención específica en componentes que se desgastan de forma predecible: aceite, filtros, bujías, correas, líquidos y partes mecánicas críticas. En DRAUTOMOTRIZ seguimos al pie de la letra los planes de mantención de cada marca y modelo.',
      'Nuestros planes cubren los hitos más importantes: 10.000 km (cambio de aceite y filtros básicos), 20.000 km (filtros completos, revisión de frenos y suspensión), 40.000 km (bujías, líquidos de frenos y refrigerante), 60.000 km (correas auxiliares, bomba de agua) y 100.000 km (kit de distribución completo). Cada plan se adapta también al tipo de uso: ciudad, ruta o mixto, ya que el desgaste varía significativamente.',
      'Trabajamos exclusivamente con repuestos de calidad OEM o equivalentes de marcas reconocidas (Bosch, Mann, Gates, Mobil, Castrol) y entregamos un informe detallado con todo lo realizado, más recordatorio automático por WhatsApp para tu próxima mantención. Realizar las mantenciones por kilometraje alarga la vida útil del motor, mantiene el valor de reventa del vehículo y previene fallas costosas.'
    ],
    beneficios: [
      { title: 'Planes por marca y modelo', desc: 'Cada vehículo tiene un plan específico. Seguimos las recomendaciones del fabricante al pie de la letra.' },
      { title: 'Repuestos OEM premium', desc: 'Solo usamos repuestos originales o equivalentes de marcas reconocidas (Bosch, Mann, Gates, Mobil).' },
      { title: 'Recordatorio automático', desc: 'Te avisamos por WhatsApp cuando toque tu próxima mantención según tu kilometraje real.' },
      { title: 'Informe detallado', desc: 'Recibes un PDF con todo lo realizado, observaciones y próximos hitos de mantención.' }
    ],
    incluye: [
      'Diagnóstico inicial del estado del vehículo',
      'Cambio de aceite motor según especificación',
      'Filtros según kilometraje (aceite, aire, combustible, habitáculo)',
      'Bujías (en hitos de 40k km o según fabricante)',
      'Líquidos (frenos, refrigerante, dirección)',
      'Revisión visual de frenos, suspensión y neumáticos',
      'Check-list de 30 puntos de seguridad',
      'Informe PDF con todo lo realizado',
      'Recordatorio automático para próxima mantención'
    ],
    faq: [
      { q: '¿Cómo sé qué mantención corresponde a mi kilometraje?', a: 'Consulta tu manual del vehículo o escríbenos por WhatsApp con marca, modelo y kilometraje actual. Te indicamos exactamente qué servicios corresponden.' },
      { q: '¿Cada cuántos kilómetros debo hacer mantención?', a: 'En promedio cada 10.000 km para vehículos a bencina y cada 15.000 km para diésel. Los hitos mayores (40k, 60k, 100k) requieren atención especial.' },
      { q: '¿Sirve la mantención por km para la garantía del vehículo?', a: 'Sí, nuestras mantenciones cumplen con los estándares del fabricante. Entregamos factura electrónica que respalda el cumplimiento de la garantía.' },
      { q: '¿Qué aceite usan?', a: 'Aceites de marcas reconocidas (Mobil 1, Castrol, Shell Helix, Valvoline) según especificación del fabricante. Sintético, semisintético o mineral según corresponda.' }
    ],
    keywords: ['mantencion por kilometraje', 'mantencion 10000 km', 'mantencion 40000 km', 'mantencion 100000 km', 'plan mantencion auto'],
    relacionados: ['revision-tecnica-sin-estres', 'servicio-de-frenos-a-domicilio', 'cambio-kit-de-distribucion']
  },
  {
    slug: 'servicio-de-revision-tecnica',
    nombre: 'Servicio de Revisión Técnica',
    categoria: 'Trámites',
    tagline: 'Coordinación y asesoría completa para que tu auto pase la revisión técnica al primer intento.',
    h1: 'Servicio de Revisión Técnica en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Servicio de Revisión Técnica en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Servicio de revisión técnica en Santiago. Asesoría, pre-revisión, coordinación y traslado. Pasa la revisión al primer intento. WhatsApp +56962408735.',
    icono: '📝',
    descripcionCorta: 'Coordinación y asesoría completa para que tu auto pase la revisión técnica al primer intento.',
    paragraphs: [
      'Nuestro servicio de Revisión Técnica cubre todo lo necesario para que tu vehículo apruebe el trámite obligatorio al primer intento. Esto incluye una pre-revisión técnica completa donde verificamos luces, frenos, suspensión, emisiones, alineación, neumáticos, vidrios y todos los puntos que evalúa la planta oficial. Si encontramos algo que podría causar rechazo, lo reparamos antes del trámite.',
      'A diferencia del servicio "Revisión Técnica Sin Estrés" donde retiramos tu auto y hacemos todo, este servicio está orientado a quienes prefieren llevar su vehículo personalmente pero quieren maximizar las posibilidades de aprobación. Te entregamos un check-list completo del estado de tu auto, te indicamos qué necesita repararse y, una vez listo, te asesoramos con la planta de revisión más cercana y disponible.',
      'En Chile, las plantas de revisión técnica rechazan aproximadamente 1 de cada 3 vehículos en el primer intento, principalmente por: luces mal ajustadas, frenos desbalanceados, emisiones fuera de norma, neumáticos en mal estado, o problemas en el sistema de dirección. Nuestra pre-revisión reduce este riesgo a menos del 5%, ahorrándote tiempo, dinero y estrés.'
    ],
    beneficios: [
      { title: 'Pre-revisión completa', desc: 'Verificamos los 12 puntos críticos que evalúa la planta oficial antes de que pagues el trámite.' },
      { title: 'Aprobación garantizada 95%', desc: 'Después de nuestra pre-revisión y reparaciones recomendadas, la probabilidad de aprobar supera el 95%.' },
      { title: 'Asesoría de planta', desc: 'Te recomendamos la planta más cercana, disponible y con menores tiempos de espera.' },
      { title: 'Reparaciones a domicilio', desc: 'Todo lo que necesite tu auto lo reparamos en tu casa antes del trámite oficial.' }
    ],
    incluye: [
      'Pre-revisión técnica de 12 puntos críticos',
      'Verificación de luces (altas, bajas, freno, giro, patente)',
      'Testeo de frenos (delantero, trasero, balance)',
      'Inspección de suspensión y dirección',
      'Control de emisiones con equipo profesional',
      'Revisión de neumáticos, alineación y balanceo',
      'Verificación de vidrios, espejos y carrocería',
      'Informe de observaciones y cotización de reparaciones',
      'Recomendación de planta oficial más cercana',
      'Asesoría completa del proceso'
    ],
    faq: [
      { q: '¿Qué diferencia hay con el servicio Revisión Técnica Sin Estrés?', a: 'En este servicio tú llevas tu auto a la planta; nosotros hacemos la pre-revisión y asesoría. En el Sin Estrés, nosotros retiramos tu auto, hacemos todo el trámite y te lo devolvemos.' },
      { q: '¿Cuánto cuesta la pre-revisión técnica?', a: 'El valor depende del tipo de vehículo (liviano, SUV, camioneta). Escríbenos por WhatsApp con marca y modelo para una cotización exacta.' },
      { q: '¿La pre-revisión garantiza que pase?', a: 'No garantiza al 100%, pero reduce el riesgo de rechazo a menos del 5%. Si descubrimos problemas, te cotizamos las reparaciones antes del trámite.' },
      { q: '¿Pueden hacer la pre-revisión en mi casa?', a: 'Sí, totalmente. Llevamos el equipo necesario. Solo necesitamos espacio techado o sombra para trabajar.' }
    ],
    keywords: ['servicio revision tecnica', 'pre revision tecnica', 'revision tecnica auto', 'asesoria revision tecnica'],
    relacionados: ['revision-tecnica-sin-estres', 'diagnosticos', 'servicio-de-frenos-a-domicilio']
  },
  {
    slug: 'servicio-de-pre-compra',
    nombre: 'Servicio de Pre-Compra',
    categoria: 'Diagnóstico',
    tagline: 'Inspección técnica completa antes de comprar un auto usado. Evita malas compras con un diagnóstico profesional.',
    h1: 'Servicio de Pre-Compra de Autos Usados en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Servicio de Pre-Compra de Vehículos Usados en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Servicio de pre-compra de autos usados en Santiago. Inspección técnica completa antes de comprar. Evita malas compras. WhatsApp +56962408735.',
    icono: '🔍',
    descripcionCorta: 'Inspección técnica completa antes de comprar un auto usado. Evita malas compras con un diagnóstico profesional.',
    paragraphs: [
      'Comprar un auto usado es una de las decisiones financieras más importantes que puedes tomar, y los vendedores no siempre revelan todos los problemas del vehículo. Nuestro servicio de pre-compra está diseñado para darte tranquilidad: un mecánico profesional va al lugar donde está el auto (casa del vendedor, concesionario, estacionamiento) y realiza una inspección exhaustiva de más de 150 puntos antes de que firmes el contrato.',
      'La inspección cubre motor y transmisión (escáner computarizado, prueba de compresión, ruidos, fugas), sistema eléctrico (batería, alternador, luces, instrumentos), frenos y suspensión (estado de pastillas, discos, amortiguadores, rótulas), carrocería (golpes previos, repintado, óxido, estructural), interior (tapices, olores, funcionalidad de accesorios), neumáticos (profundidad, desgaste irregular, edad de fabricación) y documentos (multas, prendas, historia).',
      'Al finalizar recibes un informe PDF de 4-6 páginas con fotos de cada hallazgo, calificación general del vehículo (Excelente / Bueno / Regular / No recomendado), lista de reparaciones urgentes con presupuesto estimado, y recomendación final de compra con argumentos técnicos. Este servicio cuesta una fracción de lo que podrías perder si compras un auto con problemas ocultos.'
    ],
    beneficios: [
      { title: 'Inspección 150+ puntos', desc: 'Cubrimos motor, transmisión, eléctrico, frenos, suspensión, carrocería, interior, neumáticos y documentos.' },
      { title: 'Informe con fotos', desc: 'PDF de 4-6 páginas con fotos de cada hallazgo, calificación y presupuesto estimado de reparaciones.' },
      { title: 'Escáner computarizado', desc: 'Incluye diagnóstico electrónico completo de todos los módulos del vehículo (motor, ABS, airbag, etc.).' },
      { title: 'Negociación informada', desc: 'Con nuestro informe puedes negociar el precio o exigir reparaciones antes de comprar.' }
    ],
    incluye: [
      'Desplazamiento al lugar del vehículo',
      'Inspección de 150+ puntos (motor, transmisión, eléctrico, frenos, suspensión)',
      'Escáner computarizado completo multimarca',
      'Revisión de carrocería (golpes, repintado, óxido)',
      'Inspección de interior y accesorios',
      'Verificación de neumáticos (edad, profundidad, desgaste)',
      'Prueba de ruta de 10-15 min (si el vendedor autoriza)',
      'Revisión documental (multas, prendas, historia)',
      'Informe PDF con fotos y calificación final',
      'Recomendación de compra con argumentos técnicos'
    ],
    faq: [
      { q: '¿Dónde se realiza la inspección?', a: 'Vamos al lugar donde está el auto: casa del vendedor, concesionario, estacionamiento. Solo necesitamos que el vendedor autorice la inspección.' },
      { q: '¿Cuánto demora la inspección?', a: 'Entre 60 y 90 minutos dependiendo del tipo de vehículo y accesibilidad. Te entregamos el informe preliminar antes de irte del lugar.' },
      { q: '¿Qué pasa si el auto está en otra comuna?', a: 'Cubrimos toda la Región Metropolitana. El costo del traslado está incluido en el precio. Para zonas lejanas puede aplicar recargo.' },
      { q: '¿El informe sirve para negociar el precio?', a: 'Absolutamente. Con el listado de reparaciones urgentes y su presupuesto, puedes pedir un descuento al vendedor o exigir que las arregle antes de comprar.' }
    ],
    keywords: ['pre compra auto usado', 'inspeccion pre compra', 'diagnostico auto comprar', 'revision auto usado'],
    relacionados: ['diagnosticos', 'escaner-para-autos-y-camiones', 'servicio-de-revision-tecnica']
  },
  {
    slug: 'servicio-de-frenos-a-domicilio',
    nombre: 'Frenos a Domicilio',
    categoria: 'Reparación',
    tagline: 'Cambio de pastillas, rectificación de discos, líquido de frenos y revisión completa del sistema de seguridad.',
    h1: 'Servicio de Frenos a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Reparación de Frenos a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Servicio de frenos a domicilio en Santiago. Cambio de pastillas, rectificación de discos, líquido de frenos y revisión completa. WhatsApp +56962408735.',
    icono: '🛑',
    descripcionCorta: 'Cambio de pastillas, rectificación de discos, líquido de frenos y revisión de seguridad.',
    paragraphs: [
      'Los frenos son el sistema de seguridad más importante de tu vehículo y no deberían esperarse hasta que fallen por completo. Nuestro servicio de frenos a domicilio en Santiago cubre todo el ciclo: desde el diagnóstico del estado actual de pastillas, discos, líquido y balatas, hasta la reparación completa en el lugar con repuestos de calidad OEM.',
      'Los signos de que tus frenos necesitan atención incluyen: chirridos al frenar, pedal esponjoso, vibración en el volante al frenar, distancia de frenado aumentada, o el testigo del tablero encendido. Si experimentas cualquiera de estos síntomas, contáctanos inmediatamente por WhatsApp: una revisión a tiempo puede prevenir accidentes y ahorrarte miles de pesos en reparaciones mayores.',
      'Nuestro servicio incluye el cambio de pastillas delanteras o traseras, rectificación de discos (si están dentro de tolerancia), purga y cambio de líquido de frenos, revisión de balatas, calipers y latiguillos. Trabajamos con pastillas de marcas como Bosch, Brembo, Akebono y Textar, y utilizamos líquido de frenos DOT 4 o DOT 5.1 según especificación del fabricante. Todos los trabajos incluyen garantía de 6 meses.'
    ],
    beneficios: [
      { title: 'Diagnóstico completo', desc: 'Medimos espesor de pastillas, paralelismo de discos, estado del líquido y comportamiento de calipers antes de cualquier cambio.' },
      { title: 'Repuestos premium', desc: 'Pastillas Brembo, Bosch, Akebono, Textar. Líquido DOT 4/DOT 5.1 de marcas reconocidas.' },
      { title: 'Rectificación in situ', desc: 'Cuando es posible, rectificamos discos sin desmontar, ahorrando tiempo y dinero.' },
      { title: 'Garantía 6 meses', desc: 'Todos nuestros trabajos de frenos tienen garantía escrita de 6 meses en mano de obra y repuestos.' }
    ],
    incluye: [
      'Diagnóstico del sistema de frenos completo',
      'Cambio de pastillas delanteras y/o traseras',
      'Rectificación de discos (si aplica)',
      'Purga y cambio de líquido de frenos',
      'Revisión de calipers y balatas',
      'Revisión de latiguillos y mangueras',
      'Prueba de ruta post-reparación',
      'Garantía escrita de 6 meses'
    ],
    faq: [
      { q: '¿Cómo sé cuándo cambiar las pastillas de freno?', a: 'Si escuchas chirridos metálicos al frenar, el pedal está más esponjoso de lo normal, o ha pasado más de 30.000 km desde el último cambio, es momento de revisarlas.' },
      { q: '¿Pueden rectificar discos en mi casa?', a: 'En la mayoría de los casos sí, dependiendo del estado del disco y del vehículo. Si no es posible, los retiramos y los rectificamos en taller.' },
      { q: '¿Cuánto demora el cambio de pastillas?', a: 'Entre 45 minutos y 1 hora para un eje (delantero o trasero). Si incluimos rectificación de discos y cambio de líquido, puede tomar 2 horas.' },
      { q: '¿La garantía cubre el desgaste normal?', a: 'La garantía cubre defectos de fabricación y mano de obra. El desgaste normal por uso depende del estilo de conducción y kilometraje.' }
    ],
    keywords: ['frenos a domicilio santiago', 'cambio pastillas freno casa', 'rectificacion discos domicilio', 'liquido frenos auto'],
    relacionados: ['tren-delantero', 'mantencion-por-km', 'revision-tecnica-sin-estres']
  },
  {
    slug: 'tren-delantero',
    nombre: 'Tren Delantero',
    categoria: 'Reparación',
    tagline: 'Cambio de bandejas, terminales, rótulas, pivotes y bujes del tren delantero de tu vehículo.',
    h1: 'Reparación de Tren Delantero a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Tren Delantero a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Reparación de tren delantero a domicilio en Santiago. Cambio de bandejas, terminales, rótulas, pivotes y bujes. WhatsApp +56962408735.',
    icono: '⚙️',
    descripcionCorta: 'Cambio de bandejas, terminales, rótulas, pivotes y bujes del tren delantero de tu vehículo.',
    paragraphs: [
      'El tren delantero de tu vehículo es responsable de la dirección, estabilidad y seguridad en marcha. Cuando sus componentes se desgastan, el auto se vuelve inestable, los neumáticos se desgastan irregularmente, aparecen ruidos al pasar baches o girar, y aumentan las distancias de frenado. Ignorar estos síntomas puede causar pérdida de control del vehículo y accidentes graves.',
      'Nuestro servicio de reparación de tren delantero a domicilio en Santiago cubre el diagnóstico y reemplazo de: bandejas, rótulas superiores e inferiores, terminales de dirección, pivotes, bujes, casquillos, brazos de suspensión y amortiguadores. Utilizamos repuestos de marcas como KYB, Monroe, TRW, Lemförder y SKF, todos con garantía de fábrica, y entregamos garantía escrita de 6 meses sobre la mano de obra.',
      'Los síntomas más comunes de un problema en el tren delantero incluyen: ruidos al pasar por baches, vibración en el volante, desgaste irregular de neumáticos, sensación de inestabilidad en curvas, o el auto que se inclina excesivamente al frenar. Si experimentas cualquiera de estos síntomas, contáctanos por WhatsApp para coordinar una revisión a domicilio antes de que el problema se agrave y los costos de reparación aumenten.'
    ],
    beneficios: [
      { title: 'Diagnóstico preciso', desc: 'Identificamos exactamente qué componente falla antes de cambiarlo. No hacemos trabajos innecesarios.' },
      { title: 'Repuestos premium', desc: 'KYB, Monroe, TRW, Lemförder, SKF. Solo marcas reconocidas con garantía de fábrica.' },
      { title: 'Alineación incluida', desc: 'Tras cualquier cambio en tren delantero, coordinamos la alineación con un aliado cercano a tu ubicación.' },
      { title: 'Garantía 6 meses', desc: 'Mano de obra garantizada por 6 meses. Repuestos con garantía de fábrica.' }
    ],
    incluye: [
      'Diagnóstico completo del tren delantero',
      'Cambio de bandejas y rótulas',
      'Reemplazo de terminales de dirección',
      'Cambio de pivotes y bujes',
      'Revisión de amortiguadores y espirales',
      'Inspección de brazos de suspensión',
      'Coordinación de alineación',
      'Garantía escrita de 6 meses'
    ],
    faq: [
      { q: '¿Cuándo debo revisar el tren delantero?', a: 'Cada 40.000-50.000 km o si notas ruidos al pasar baches, vibración en el volante, desgaste irregular de neumáticos o inestabilidad en curvas.' },
      { q: '¿Es seguro conducir con tren delantero dañado?', a: 'No. El tren delantero en mal estado aumenta la distancia de frenado, reduce la estabilidad y puede causar la pérdida de control del vehículo.' },
      { q: '¿Pueden hacer el trabajo en mi estacionamiento?', a: 'Sí, mientras tengamos un espacio plano y el vehículo pueda ser levantado con gato hidráulico. Llevamos todas las herramientas necesarias.' },
      { q: '¿La alineación también se hace a domicilio?', a: 'La alineación requiere equipos especializados que no son móviles. Coordinamos con un taller aliado cercano a tu ubicación para que la realices con descuento.' }
    ],
    keywords: ['tren delantero santiago', 'cambio bandejas domicilio', 'cambio rotulas', 'terminales direccion domicilio'],
    relacionados: ['servicio-de-frenos-a-domicilio', 'direccion-y-suspension', 'mantencion-por-km']
  },
  {
    slug: 'escaner-para-autos-y-camiones',
    nombre: 'Escáner para Autos y Camiones',
    categoria: 'Diagnóstico',
    tagline: 'Diagnóstico computarizado multimarca para autos livianos, SUVs, camionetas y vehículos pesados.',
    h1: 'Escáner para Autos y Camiones a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Escáner para Autos y Camiones a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Diagnóstico computarizado para autos y camiones a domicilio en Santiago. Escáner multimarca profesional con informe PDF. WhatsApp +56962408735.',
    icono: '💻',
    descripcionCorta: 'Diagnóstico computarizado multimarca para autos livianos, SUVs, camionetas y vehículos pesados.',
    paragraphs: [
      'El escáner computarizado es el primer paso para diagnosticar cualquier falla electrónica en vehículos modernos. Cada vez que se enciende una luz de "Check Engine", ABS, Airbag, o cualquier testigo en tu tablero, el sistema electrónico del vehículo ha detectado y registrado una falla que necesita atención. Nuestro equipo profesional de diagnóstico multimarca lee, interpreta y analiza estos códigos en tiempo real.',
      'A diferencia de talleres que solo conectan un escáner básico OBD2 y borran la luz, en DRAUTOMOTRIZ utilizamos equipos profesionales que acceden a TODOS los módulos del vehículo: motor, transmisión, ABS, airbag, carrocería, confort, climatización, sistema de seguridad, y módulos específicos de cada marca. Esto nos permite diagnosticar fallas que otros escáneres básicos no detectan.',
      'Cubrimos vehículos livianos (autos, SUVs, camionetas), vehículos comerciales (vans, furgones), y vehículos pesados (camiones, buses, maquinaria) con equipos especializados para cada protocolo: OBD2 para vehículos livianos, J1939 y J1708 para camiones, y protocolos específicos de marcas europeas (BMW, Mercedes, Audi, VW, Volvo) y asiáticas (Toyota, Hyundai, Nissan, Mazda, Kia).'
    ],
    beneficios: [
      { title: 'Multimarca y multitipo', desc: 'Diagnóstico para autos, SUVs, camionetas, vans, camiones y buses. Cubrimos todos los protocolos.' },
      { title: 'Todos los módulos', desc: 'No solo motor: revisamos ABS, airbag, transmisión, carrocería, confort, climatización y seguridad.' },
      { title: 'Informe profesional', desc: 'PDF con todos los códigos, valores en tiempo real, interpretación y recomendaciones de reparación.' },
      { title: 'Diagnóstico descontable', desc: 'Si decides reparar con nosotros, el costo del escáner se descuenta del presupuesto final.' }
    ],
    incluye: [
      'Lectura de códigos de falla activos y pendientes',
      'Análisis de sensores en tiempo real',
      'Acceso a todos los módulos del vehículo',
      'Diagnóstico multimarca (europeas, asiáticas, americanas)',
      'Protocolos: OBD2, J1939, J1708, específicos de marca',
      'Borrado de testigos post-reparación',
      'Informe PDF con hallazgos y recomendaciones',
      'Presupuesto de reparación si corresponde'
    ],
    faq: [
      { q: '¿Pueden escanear camiones?', a: 'Sí, contamos con equipos especializados para vehículos pesados con protocolo J1939 y J1708. Cubrimos camiones Scania, Mercedes, Volvo, MAN, Iveco, etc.' },
      { q: '¿Sirve para todas las marcas de autos?', a: 'Cubrimos la mayoría de marcas desde 1996 (protocolo OBD2 obligatorio). Para marcas europeas premium usamos equipos especializados.' },
      { q: '¿Pueden borrar la luz de Check Engine en el momento?', a: 'Sí, pero primero identificamos la causa raíz. Borrar el código sin reparar la falla solo hará que la luz vuelva en pocos kilómetros.' },
      { q: '¿El costo del escáner se devuelve?', a: 'Si realizas la reparación con nosotros, el costo del diagnóstico se descuenta del presupuesto final.' }
    ],
    keywords: ['escaner autos camiones', 'diagnostico computarizado domicilio', 'scanner automotriz santiago', 'escaner multimarca'],
    relacionados: ['diagnosticos', 'servicio-de-pre-compra', 'servicio-de-revision-tecnica']
  },
  {
    slug: 'recarga-y-mantencion-de-aire-acondicionado',
    nombre: 'Recarga y Mantención de Aire Acondicionado',
    categoria: 'Climatización',
    tagline: 'Recarga de gas refrigerante, limpieza de conductos, cambio de filtros y reparación de compresor.',
    h1: 'Recarga y Mantención de Aire Acondicionado a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Recarga Aire Acondicionado Auto a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Recarga y mantención de aire acondicionado automotriz a domicilio en Santiago. Gas R134a y R1234yf. WhatsApp +56962408735.',
    icono: '❄️',
    descripcionCorta: 'Recarga de gas refrigerante, limpieza de conductos, cambio de filtros y reparación de compresor.',
    paragraphs: [
      'El aire acondicionado de tu vehículo no es solo un lujo: en Santiago, donde las temperaturas en verano superan los 33°C y el tráfico puede mantenerte horas dentro del auto, un A/A que funciona mal puede causar fatiga, deshidratación y disminuir tu capacidad de reacción al conducir. Además, un A/A en mal estado obliga al motor a trabajar más, aumentando el consumo de combustible hasta un 15%.',
      'Nuestro servicio de recarga y mantención de aire acondicionado a domicilio cubre todo el sistema: recarga de gas refrigerante (R134a o R1234yf según tu vehículo), cambio de filtro de habitáculo (polen), limpieza de conductos y evaporador con producto antibacterial, revisión del compresor, condensador, válvula de expansión, sensor de presión, y detección de fugas con nitrógeno.',
      'Recomendamos realizar una mantención completa cada 1 o 2 años, o cuando notes: el A/A enfría menos que antes, hace ruidos extraños al activarse, sale aire con olor desagradable (hongos en conductos), o se demora más de lo normal en enfriar. Una recarga a tiempo puede evitar daños mayores en el compresor, que es el componente más caro del sistema.'
    ],
    beneficios: [
      { title: 'Gas correcto para tu auto', desc: 'Usamos R134a para vehículos hasta 2017 y R1234yf para modelos más nuevos. Nunca mezclamos gases.' },
      { title: 'Detección de fugas', desc: 'Usamos nitrógeno a presión para detectar fugas mínimas antes de recargar. Si hay fuga, te avisamos.' },
      { title: 'Limpieza antibacterial', desc: 'Eliminamos hongos y bacterias de los conductos que causan malos olores y problemas respiratorios.' },
      { title: 'Cambio de filtro incluido', desc: 'Reemplazamos el filtro de habitáculo (polen) que mejora la calidad del aire que respiras.' }
    ],
    incluye: [
      'Diagnóstico completo del sistema de A/A',
      'Recarga de gas refrigerante (R134a o R1234yf)',
      'Detección de fugas con nitrógeno',
      'Cambio de filtro de habitáculo (polen)',
      'Limpieza antibacterial de conductos y evaporador',
      'Revisión del compresor y condensador',
      'Inspección de válvula de expansión y sensor de presión',
      'Testeo de rendimiento (temperatura de salida)',
      'Garantía de 3 meses en mano de obra'
    ],
    faq: [
      { q: '¿Cada cuánto debo recargar el aire acondicionado?', a: 'Cada 1-2 años en promedio. Si notas que enfría menos o sale aire tibio, es momento de revisarlo antes de que se dañe el compresor.' },
      { q: '¿Qué gas usa mi auto?', a: 'Vehículos hasta 2017 suelen usar R134a. Modelos 2018+ generalmente usan R1234yf (más ecológico). Verificamos la especificación en tu auto antes de recargar.' },
      { q: '¿Pueden reparar el compresor en mi casa?', a: 'Recargas y limpieza sí. La reparación o reemplazo del compresor requiere taller por la complejidad del trabajo.' },
      { q: '¿Por qué sale olor desagradable del A/A?', a: 'Por acumulación de hongos y bacterias en el evaporador y conductos. Nuestra limpieza antibacterial elimina el problema.' }
    ],
    keywords: ['recarga aire acondicionado auto', 'mantencion aire acondicionado domicilio', 'gas r134a auto', 'limpieza conductos aire acondicionado'],
    relacionados: ['mantencion-por-km', 'diagnosticos', 'pulido-de-opticos-focos-delanteros']
  },
  {
    slug: 'direccion-y-suspension',
    nombre: 'Dirección y Suspensión',
    categoria: 'Reparación',
    tagline: 'Cambio de amortiguadores, espirales, cremallera, bomba de dirección hidráulica y rótulas.',
    h1: 'Reparación de Dirección y Suspensión a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Dirección y Suspensión a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Reparación de dirección y suspensión a domicilio en Santiago. Amortiguadores, espirales, cremallera, bomba de dirección. WhatsApp +56962408735.',
    icono: '🚗',
    descripcionCorta: 'Cambio de amortiguadores, espirales, cremallera, bomba de dirección hidráulica y rótulas.',
    paragraphs: [
      'El sistema de dirección y suspensión de tu vehículo es lo que te permite controlar el auto, absorber las irregularidades del camino y mantener la estabilidad a cualquier velocidad. Cuando estos componentes fallan, el manejo se vuelve inseguro: el auto "flota" en curvas, se inclina excesivamente al frenar, vibra a alta velocidad, o produce ruidos molestos en cada bache. Ignorar estos síntomas es arriesgar tu seguridad y la de tu familia.',
      'Nuestro servicio de dirección y suspensión a domicilio en Santiago cubre el diagnóstico y reemplazo de: amortiguadores (delanteros y traseros), espirales, cremallera de dirección, bomba de dirección hidráulica, rótulas, terminales, bandejas, pivotes, bujes, barra estabilizadora y rótulas de la barra. Trabajamos con marcas como KYB, Monroe, TRW, Lemförder, SKF y ZF.',
      'Es importante distinguir entre los dos sistemas: la dirección (cremallera, bomba, rótulas de dirección) controla hacia dónde va el vehículo, mientras que la suspensión (amortiguadores, espirales, bandejas) controla cómo se mueve el vehículo sobre el camino. Muchos síntomas se traslapan, por eso nuestro diagnóstico es completo y no se limita al componente que aparentemente falla.'
    ],
    beneficios: [
      { title: 'Diagnóstico integral', desc: 'No cambiamos partes a ciegas. Diagnosticamos tanto dirección como suspensión para identificar la causa raíz.' },
      { title: 'Marcas premium', desc: 'KYB, Monroe, TRW, Lemförder, SKF, ZF. Solo marcas reconocidas con garantía de fábrica.' },
      { title: 'Prueba de ruta', desc: 'Tras cada reparación, realizamos una prueba de ruta para confirmar que todo funcione correctamente.' },
      { title: 'Garantía 6 meses', desc: 'Mano de obra garantizada por 6 meses. Repuestos con garantía extendida del fabricante.' }
    ],
    incluye: [
      'Diagnóstico completo de dirección y suspensión',
      'Cambio de amortiguadores delanteros y/o traseros',
      'Reemplazo de espirales',
      'Cambio de cremallera de dirección',
      'Revisión/cambio de bomba de dirección hidráulica',
      'Cambio de rótulas y terminales',
      'Reemplazo de bandejas y pivotes',
      'Revisión de barra estabilizadora',
      'Prueba de ruta post-reparación',
      'Coordinación de alineación',
      'Garantía escrita de 6 meses'
    ],
    faq: [
      { q: '¿Cuándo debo cambiar los amortiguadores?', a: 'Cada 80.000-100.000 km o si notas que el auto rebota al pasar baches, se inclina al frenar, o vibra a alta velocidad.' },
      { q: '¿Cómo sé si falla la bomba de dirección?', a: 'Si el volante se pone duro al girar (especialmente en baja velocidad), escuchas un zumbido al girar, o hay pérdida de líquido hidráulico.' },
      { q: '¿Pueden reparar la cremallera en mi casa?', a: 'Sí, el cambio de cremallera se puede hacer a domicilio. Requiere alzar el vehículo y tener acceso al subchasis, pero es factible.' },
      { q: '¿Es peligroso conducir con suspensión dañada?', a: 'Sí. Aumenta la distancia de frenado, reduce la estabilidad en curvas y puede causar la pérdida de control del vehículo a alta velocidad.' }
    ],
    keywords: ['direccion suspension domicilio', 'cambio amortiguadores santiago', 'cremallera direccion auto', 'bomba direccion hidraulica'],
    relacionados: ['tren-delantero', 'servicio-de-frenos-a-domicilio', 'mantencion-por-km']
  },
  {
    slug: 'cambio-kit-de-distribucion',
    nombre: 'Cambio Kit de Distribución',
    categoria: 'Motor',
    tagline: 'Cambio completo de kit de distribución: correa/cadena, tensor, rodillos y bomba de agua.',
    h1: 'Cambio Kit de Distribución a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Cambio Kit de Distribución a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Cambio de kit de distribución a domicilio en Santiago. Correa/cadena, tensor, rodillos y bomba de agua. Garantía 12 meses. WhatsApp +56962408735.',
    icono: '⛓️',
    descripcionCorta: 'Cambio completo de kit de distribución: correa/cadena, tensor, rodillos y bomba de agua.',
    paragraphs: [
      'La correa o cadena de distribución es uno de los componentes más críticos del motor: sincroniza el movimiento de los árboles de levas con el cigüeñal, y si se rompe mientras el motor está funcionando, los pistones pueden golpear las válvulas causando daños que requieren la reconstrucción completa del motor, con costos que fácilmente superan el millón de pesos. Por eso, el cambio programado según el kilometraje es la mantención más importante que debes hacer a tu vehículo.',
      'Nuestro servicio de cambio de kit de distribución a domicilio en Santiago incluye el kit completo: correa/cadena nueva, tensor, rodillos, bomba de agua (en la mayoría de los modelos va en el mismo kit), y correas auxiliares (alternador, dirección hidráulica, aire acondicionado). Trabajamos con kits de marcas reconocidas como Gates, Dayco, Continental, Bosch y OEM originales.',
      'El servicio se realiza en el lugar que elijas (casa, trabajo, estacionamiento) y toma entre 4 y 8 horas según el modelo del vehículo. Incluimos la sincronización precisa con herramientas especiales, la verificación de puntos de tiempo muerto, la rotación manual del motor antes del primer arranque para confirmar que todo esté correctamente sincronizado, y una prueba de ruta post-instalación. Garantía escrita de 12 meses o 20.000 km sobre el kit completo.'
    ],
    beneficios: [
      { title: 'Kit completo', desc: 'Correa/cadena + tensor + rodillos + bomba de agua + correas auxiliares. Todo en un solo servicio.' },
      { title: 'Marcas premium', desc: 'Gates, Dayco, Continental, Bosch. Solo marcas reconocidas con garantía de fábrica.' },
      { title: 'Sincronización precisa', desc: 'Usamos herramientas especializadas para sincronizar correctamente. Verificamos antes del primer arranque.' },
      { title: 'Garantía 12 meses', desc: 'Garantía escrita de 12 meses o 20.000 km sobre todo el kit instalado.' }
    ],
    incluye: [
      'Kit de distribución completo (correa/cadena, tensor, rodillos)',
      'Bomba de agua nueva',
      'Correas auxiliares (alternador, dirección, A/A)',
      'Sincronización con herramientas especiales',
      'Verificación de puntos de tiempo muerto',
      'Rotación manual antes del primer arranque',
      'Prueba de ruta post-instalación',
      'Garantía escrita de 12 meses o 20.000 km'
    ],
    faq: [
      { q: '¿Cuándo debo cambiar la correa de distribución?', a: 'Depende del fabricante. En promedio cada 80.000-100.000 km o 5 años. Algunos modelos modernos usan cadena y tienen intervalos de 150.000+ km. Consulta tu manual.' },
      { q: '¿Cómo sé si mi correa está fallando?', a: 'Ruidos chirriantes al arrancar, grietas visibles en la correa, pérdida de potencia, o el auto no arranca. Pero lo más seguro es cambiarla según kilometraje antes de que falle.' },
      { q: '¿Pueden hacer el cambio en mi casa?', a: 'Sí, pero requiere un espacio techado, plano, y donde el mecánico pueda trabajar 4-8 horas sin interrupciones. Te confirmamos viabilidad antes de coordinar.' },
      { q: '¿Qué pasa si se rompe la correa mientras conduzco?', a: 'En motores de interferencia (la mayoría), los pistones golpean las válvulas y el motor se daña severamente. Por eso es crítico cambiarla según kilometraje.' }
    ],
    keywords: ['cambio kit distribucion', 'correa distribucion domicilio', 'cadena distribucion santiago', 'kit distribucion completo'],
    relacionados: ['mantencion-por-km', 'cambio-kit-de-embrague', 'revision-tecnica-sin-estres']
  },
  {
    slug: 'cambio-kit-de-embrague',
    nombre: 'Cambio Kit de Embrague',
    categoria: 'Transmisión',
    tagline: 'Cambio completo de kit de embrague: disco, prensa, collarín y cilindro hidráulico.',
    h1: 'Cambio Kit de Embrague a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Cambio Kit de Embrague a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Cambio de kit de embrague a domicilio en Santiago. Disco, prensa, collarín y cilindro hidráulico. Garantía 12 meses. WhatsApp +56962408735.',
    icono: '🪖',
    descripcionCorta: 'Cambio completo de kit de embrague: disco, prensa, collarín y cilindro hidráulico.',
    paragraphs: [
      'El embrague es el componente que te permite cambiar de marcha y transmitir la potencia del motor a las ruedas en vehículos con transmisión manual. Con el uso, el disco de embrague se desgasta, la prensa pierde fuerza, y el collarín o cojinete de empuje puede fallar, causando síntomas como: dificultad para cambiar marchas, pedal duro, el embrague "patina" (el motor acelera pero el auto no avanza), o ruidos al pisar el pedal.',
      'Nuestro servicio de cambio de kit de embrague a domicilio en Santiago incluye el kit completo: disco de embrague, prensa (plato opresor), collarín (cojinete de empuje), y en muchos modelos también el cilindro hidráulico (receptor y/o emisor). Trabajamos con marcas reconocidas como LuK, Sachs, Exedy, Valeo y OEM originales, todos con garantía de fábrica.',
      'El servicio se realiza preferentemente en un espacio techado (garage, estacionamiento cubierto) porque requiere desmontar la transmisión, lo que toma entre 5 y 8 horas según el modelo del vehículo. Tras el cambio, realizamos una prueba de ruta completa para verificar el ajuste correcto, la suavidad del pedal y la respuesta al cambio de marchas. Garantía escrita de 12 meses o 20.000 km.'
    ],
    beneficios: [
      { title: 'Kit completo premium', desc: 'Disco + prensa + collarín + cilindro hidráulico. Marcas LuK, Sachs, Exedy, Valeo.' },
      { title: 'Sincronización correcta', desc: 'Ajuste preciso del sistema para suavidad en el pedal y cambios sin tirones.' },
      { title: 'Prueba de ruta', desc: 'Tras el cambio, realizamos prueba completa de marcha para verificar el funcionamiento.' },
      { title: 'Garantía 12 meses', desc: 'Garantía escrita de 12 meses o 20.000 km sobre todo el kit instalado.' }
    ],
    incluye: [
      'Kit de embrague completo (disco, prensa, collarín)',
      'Cilindro hidráulico (si corresponde al modelo)',
      'Desmontaje y montaje de transmisión',
      'Inspección del volante motor (rectificación si aplica)',
      'Cambio de aceite de transmisión (si corresponde)',
      'Ajuste del sistema hidráulico',
      'Prueba de ruta post-instalación',
      'Garantía escrita de 12 meses o 20.000 km'
    ],
    faq: [
      { q: '¿Cuándo debo cambiar el embrague?', a: 'En promedio cada 100.000-150.000 km en conducción normal. En ciudad con mucho tráfico, puede ser cada 80.000 km. Síntomas: el embrague patina, pedal duro, dificultad para cambiar marchas.' },
      { q: '¿Pueden hacer el cambio en mi casa?', a: 'Sí, pero requiere un espacio techado, plano, y donde el mecánico pueda trabajar 5-8 horas. Es uno de los trabajos más complejos a domicilio por el desmontaje de la transmisión.' },
      { q: '¿El volante motor también se cambia?', a: 'Si es un volante bimasa, lo inspeccionamos. Si está dañado, te cotizamos su reemplazo o rectificación aparte. Si es rígido, normalmente se rectifica.' },
      { q: '¿Cuánto demora el cambio de embrague?', a: 'Entre 5 y 8 horas según el modelo del vehículo y la accesibilidad a la transmisión. Algunos modelos requieren bajar el motor.' }
    ],
    keywords: ['cambio kit embrague', 'embrague auto domicilio', 'cambio embrague santiago', 'disco embrague remplazo'],
    relacionados: ['cambio-kit-de-distribucion', 'mantencion-por-km', 'diagnosticos']
  },
  {
    slug: 'venta-de-aceites-motor',
    nombre: 'Venta de Aceites Motor',
    categoria: 'Productos',
    tagline: 'Venta y entrega de aceites motor sintéticos, semisintéticos y minerales de marcas premium.',
    h1: 'Venta de Aceites Motor a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Venta de Aceites Motor a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Venta de aceites motor a domicilio en Santiago. Sintéticos, semisintéticos y minerales. Marcas Mobil, Castrol, Shell, Valvoline. WhatsApp +56962408735.',
    icono: '🛢️',
    descripcionCorta: 'Venta y entrega de aceites motor sintéticos, semisintéticos y minerales de marcas premium.',
    paragraphs: [
      'En DRAUTOMOTRIZ no solo cambiamos aceite, también lo vendemos y lo entregamos a domicilio en toda la Región Metropolitana. Trabajamos con las marcas más reconocidas del mercado: Mobil 1, Castrol, Shell Helix, Valvoline, Motul, Liqui Moly y marcas OEM. Todos nuestros aceites son originales con sello de garantía y factura electrónica.',
      'Ofrecemos los tres tipos de aceite: sintético (mayor duración y protección, ideal para vehículos modernos), semisintético (mezcla de sintético y mineral, buena relación calidad-precio), y mineral (para vehículos antiguos o de uso intensivo en ciudad). El grado viscoso lo recomendamos según el manual del fabricante: los más comunes son 5W-30, 5W-40, 10W-40, 0W-20 y 15W-40.',
      'Puedes comprar solo el aceite para que lo cambies tú mismo, o combinar la compra con nuestro servicio de cambio de aceite a domicilio. En este caso, llevamos el aceite correcto para tu vehículo, el filtro de aceite nuevo, y realizamos el cambio completo en tu casa u oficina. Para clientes recurrentes ofrecemos planes de mantención con descuento.'
    ],
    beneficios: [
      { title: 'Marcas premium', desc: 'Mobil 1, Castrol, Shell, Valvoline, Motul, Liqui Moly. Solo aceites originales con sello.' },
      { title: 'Asesoría técnica', desc: 'Te recomendamos el aceite correcto según marca, modelo, año y tipo de uso de tu vehículo.' },
      { title: 'Entrega a domicilio', desc: 'Llevamos el aceite a tu casa u oficina en toda la RM. Sin costo de envío en compras sobre $50.000.' },
      { title: 'Combo con cambio', desc: 'Compra el aceite + nuestro servicio de cambio y ahorra. Llevamos todo y hacemos el trabajo.' }
    ],
    incluye: [
      'Venta de aceite motor (sintético, semisintético, mineral)',
      'Marcas: Mobil, Castrol, Shell, Valvoline, Motul, Liqui Moly',
      'Grados viscosos: 0W-20, 5W-30, 5W-40, 10W-40, 15W-40',
      'Venta de filtros de aceite (Mann, Bosch, OEM)',
      'Venta de filtros de aire, combustible y habitáculo',
      'Asesoría técnica de elección del producto',
      'Entrega a domicilio en toda la RM',
      'Factura electrónica',
      'Opción combo: aceite + cambio a domicilio'
    ],
    faq: [
      { q: '¿Qué aceite necesita mi auto?', a: 'Depende del fabricante. Escríbenos por WhatsApp con marca, modelo, año y kilometraje. Te recomendamos el grado viscoso y tipo correcto según el manual.' },
      { q: '¿Cuál es la diferencia entre sintético y semisintético?', a: 'Sintético: mayor protección, duración (10.000-15.000 km), ideal para vehículos modernos. Semisintético: mezcla, buena relación calidad-precio, duración 7.500-10.000 km.' },
      { q: '¿Hacen envío a domicilio?', a: 'Sí, en toda la Región Metropolitana. Envío sin costo en compras sobre $50.000. Para comunas lejanas puede aplicar recargo.' },
      { q: '¿Puedo combinar la compra con el cambio de aceite?', a: 'Sí, es la opción más conveniente. Llevamos el aceite correcto + filtro + cambio completo. Precio combo más económico que comprar por separado.' }
    ],
    keywords: ['venta aceite motor', 'aceite auto domicilio', 'comprar aceite sintetico', 'mobil castrol shell santiago'],
    relacionados: ['mantencion-por-km', 'cambio-kit-de-distribucion', 'revision-tecnica-sin-estres']
  },
  {
    slug: 'pulido-de-opticos-focos-delanteros',
    nombre: 'Pulido de Ópticos (Focos Delanteros)',
    categoria: 'Estética',
    tagline: 'Restauración y pulido de focos delanteros amarillentos o rayados para mejorar la visibilidad nocturna.',
    h1: 'Pulido de Ópticos (Focos Delanteros) a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Pulido de Ópticos a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Pulido y restauración de focos delanteros a domicilio en Santiago. Elimina el amarillento y mejora la visibilidad. WhatsApp +56962408735.',
    icono: '💡',
    descripcionCorta: 'Restauración y pulido de focos delanteros amarillentos o rayados para mejorar la visibilidad nocturna.',
    paragraphs: [
      'Con el tiempo y la exposición al sol, los focos delanteros (ópticos) de tu vehículo se vuelven amarillentos, opacos y rayados, lo que reduce drásticamente la visibilidad nocturna hasta en un 50%. Esto no solo es un problema estético: es un problema de seguridad. Una mala iluminación aumenta el riesgo de accidentes nocturnos y puede ser causal de rechazo en la revisión técnica.',
      'Nuestro servicio de pulido de ópticos a domicilio en Santiago restaura los focos delanteros a su estado original mediante un proceso profesional de 5 pasos: lijado progresivo (desde 400 hasta 3000 grit), pulido con compuesta específica, aplicación de UV protector, sellado cerámico y acabado final. El proceso toma entre 60 y 90 minutos para ambos focos y los resultados duran entre 1 y 2 años.',
      'No uses cremas "mágicas" o remedios caseros que prometen restaurar los ópticos en 5 minutos: solo pulen superficialmente y el amarillento vuelve en pocas semanas. Nuestro proceso es profesional, ataca el problema desde la raíz (oxidación del policarbonato) y aplica selladores que previenen la re-oxidación. Si tus ópticos están rotos o con humedad interna, te recomendamos el reemplazo.'
    ],
    beneficios: [
      { title: 'Restauración profesional', desc: 'Proceso de 5 pasos: lijado, pulido, UV, sellado cerámico y acabado. Resultados que duran 1-2 años.' },
      { title: 'Mejora la visibilidad', desc: 'Aumenta la iluminación nocturna hasta en un 80%. Reduces el riesgo de accidentes en ruta.' },
      { title: 'Aprobación de revisión técnica', desc: 'Ópticos opacos son causal frecuente de rechazo. Con nuestro pulido, aprueban sin problemas.' },
      { title: 'Ahorro vs reemplazo', desc: 'Cuesta una fracción de lo que cuesta reemplazar los focos. Resultados visualmente idénticos a focos nuevos.' }
    ],
    incluye: [
      'Diagnóstico del estado de los ópticos',
      'Lijado progresivo (400, 800, 1500, 3000 grit)',
      'Pulido con compuesta profesional',
      'Aplicación de protector UV',
      'Sellado cerámico',
      'Acabado final con microfibra',
      'Limpieza del área de trabajo',
      'Garantía de 6 meses contra re-oxidación'
    ],
    faq: [
      { q: '¿Cuánto dura el resultado del pulido?', a: 'Entre 1 y 2 años con nuestro sellado cerámico. Depende del estacionamiento (sol directo lo reduce) y frecuencia de lavado.' },
      { q: '¿Sirve para cualquier tipo de foco?', a: 'Para focos de policarbonato (la mayoría desde los 90s). Para focos de vidrio no aplica. Si están rotos o con humedad interna, recomendamos reemplazo.' },
      { q: '¿Cuánto demora el proceso?', a: 'Entre 60 y 90 minutos para ambos focos delanteros. Lo hacemos en tu casa u oficina.' },
      { q: '¿Ayuda a pasar la revisión técnica?', a: 'Sí. Los ópticos opacos son causal frecuente de rechazo. Con el pulido, los focos recuperan su transparencia y aprueban.' }
    ],
    keywords: ['pulido opticos auto', 'restauracion focos delanteros', 'pulido faros domicilio', 'limpiar focos amarillentos'],
    relacionados: ['recarga-y-mantencion-de-aire-acondicionado', 'servicio-de-revision-tecnica', 'revision-tecnica-sin-estres']
  },
  {
    slug: 'diagnosticos',
    nombre: 'Diagnósticos',
    categoria: 'Diagnóstico',
    tagline: 'Diagnóstico mecánico, electrónico y visual completo para identificar cualquier falla en tu vehículo.',
    h1: 'Diagnósticos Automotrices a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Diagnósticos Automotrices a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Diagnóstico mecánico, electrónico y visual a domicilio en Santiago. Identificamos cualquier falla antes de reparar. WhatsApp +56962408735.',
    icono: '🔬',
    descripcionCorta: 'Diagnóstico mecánico, electrónico y visual completo para identificar cualquier falla en tu vehículo.',
    paragraphs: [
      'El diagnóstico es el primer paso fundamental antes de cualquier reparación. Sin un diagnóstico correcto, cualquier trabajo es a ciegas y puede resultar en cambios innecesarios de repuestos, pérdida de tiempo y dinero, y la falla original sigue presente. En DRAUTOMOTRIZ realizamos diagnósticos profesionales que combinan tres enfoques: electrónico (escáner computarizado), mecánico (inspección visual y funcional) y dinámico (prueba de ruta).',
      'Nuestro servicio de diagnóstico a domicilio en Santiago cubre todo tipo de fallas: luces de Check Engine, ABS, Airbag, problemas de arranque, pérdidas de potencia, ruidos extraños, consumo excesivo de combustible, sobrecalentamiento, problemas de transmisión, fallas eléctricas, y cualquier síntoma anormal en el comportamiento del vehículo.',
      'El proceso completo incluye: escáner computarizado multimarca (lectura de códigos activos y pendientes en todos los módulos), inspección visual de motor, transmisión, frenos, suspensión, dirección y eléctrico, prueba de ruta de 15-20 min para reproducir síntomas, medición de compresión y presión de combustible si es necesario, y al final, un informe detallado con la causa raíz identificada y presupuesto de reparación.'
    ],
    beneficios: [
      { title: 'Diagnóstico integral', desc: 'Combinamos escáner + inspección visual + prueba de ruta. No diagnosticamos a ciegas.' },
      { title: 'Causa raíz identificada', desc: 'No solo identificamos el síntoma: encontramos la causa raíz para evitar que vuelva a fallar.' },
      { title: 'Informe profesional', desc: 'PDF con hallazgos, causa raíz, presupuesto y prioridades de reparación.' },
      { title: 'Diagnóstico descontable', desc: 'Si decides reparar con nosotros, el costo del diagnóstico se descuenta del presupuesto final.' }
    ],
    incluye: [
      'Escáner computarizado multimarca completo',
      'Lectura de códigos activos y pendientes',
      'Análisis de sensores en tiempo real',
      'Inspección visual de motor y transmisión',
      'Inspección de frenos, suspensión y dirección',
      'Revisión de sistema eléctrico y batería',
      'Prueba de ruta de 15-20 minutos',
      'Medición de compresión (si aplica)',
      'Informe PDF con causa raíz y presupuesto',
      'Diagnóstico descontable si reparas con nosotros'
    ],
    faq: [
      { q: '¿Cuánto cuesta un diagnóstico?', a: 'Depende del tipo de vehículo y la complejidad. Escríbenos por WhatsApp con los síntomas para una cotización exacta.' },
      { q: '¿El diagnóstico sirve para cualquier falla?', a: 'Sí. Diagnóstico electrónico (Check Engine, ABS, Airbag), mecánico (ruidos, pérdidas, sobrecalentamiento), eléctrico (luces, accesorios) y dinámico (prueba de ruta).' },
      { q: '¿Cuánto demora el diagnóstico?', a: 'Entre 60 y 90 minutos dependiendo del tipo de falla y la complejidad del vehículo. El informe te lo entregamos al finalizar.' },
      { q: '¿El costo del diagnóstico se devuelve?', a: 'Sí. Si decides realizar la reparación con nosotros, el costo del diagnóstico se descuenta del presupuesto final.' }
    ],
    keywords: ['diagnostico automotriz domicilio', 'diagnostico mecanico auto', 'diagnostico electronico vehiculo', 'revisar falla auto santiago'],
    relacionados: ['escaner-para-autos-y-camiones', 'servicio-de-pre-compra', 'servicio-de-revision-tecnica']
  }
];

// Helpers
export const getServicioBySlug = (slug: string): Servicio | undefined =>
  servicios.find(s => s.slug === slug);

export const getServiciosRelacionados = (slug: string): Servicio[] => {
  const servicio = getServicioBySlug(slug);
  if (!servicio) return [];
  return servicio.relacionados
    .map(rel => getServicioBySlug(rel))
    .filter((s): s is Servicio => Boolean(s));
};

// Servicios destacados (especiales)
export const getServiciosDestacados = (): Servicio[] =>
  servicios.filter(s => s.destacado);

// Servicios regulares (no destacados)
export const getServiciosRegulares = (): Servicio[] =>
  servicios.filter(s => !s.destacado);
