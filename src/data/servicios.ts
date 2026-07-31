// ============================================================
// DRAUTOMOTRIZ - Catálogo de 10 servicios a domicilio
// ============================================================

export interface Servicio {
  slug: string;
  nombre: string;
  categoria: string;
  tagline: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  icono: string; // emoji o svg id
  descripcionCorta: string;
  paragraphs: string[];
  beneficios: { title: string; desc: string }[];
  incluye: string[];
  faq: { q: string; a: string }[];
  keywords: string[];
  relacionados: string[];
}

export const servicios: Servicio[] = [
  {
    slug: 'mecanica-general-a-domicilio',
    nombre: 'Mecánica General a Domicilio',
    categoria: 'Servicio a Domicilio',
    tagline: 'Diagnóstico y reparación general de fallas mecánicas directamente en tu casa o trabajo.',
    h1: 'Mecánico General a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Mecánica General a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Servicio de mecánica general a domicilio en Santiago. Diagnóstico y reparación de fallas mecánicas en tu casa o trabajo. Agenda por WhatsApp al +56962408735.',
    icono: '🔧',
    descripcionCorta: 'Diagnóstico y reparación general de fallas mecánicas directamente en tu casa o trabajo.',
    paragraphs: [
      'Nuestro servicio de mecánica general a domicilio en Santiago está diseñado para resolver la mayoría de las fallas mecánicas de tu vehículo sin que tengas que desplazarte a un taller. Nuestro técnico móvil llega a tu casa, oficina o estacionamiento con todas las herramientas necesarias para diagnosticar y reparar el problema en el lugar, ahorrándote tiempo, dinero en grúas y la incomodidad de dejar tu auto varios días en un taller tradicional.',
      'En DRAUTOMOTRIZ contamos con mecánicos certificados y equipamiento profesional de diagnóstico que nos permite abordar desde una fuga de aceite hasta una reparación de motor mayor. Operamos en toda la Región Metropolitana, cubriendo comunas como Las Condes, Providencia, Santiago Centro, Maipú, La Florida, Puente Alto, Ñuñoa, Vitacura, Lo Barnechea y muchas más, con tiempos de respuesta que en promedio no superan los 60 minutos desde tu llamada.',
      'Todos nuestros trabajos cuentan con garantía escrita de 3 meses en mano de obra, repuestos originales o de calidad OEM, y boleta electrónica. Además, antes de iniciar cualquier reparación te entregamos un presupuesto detallado y transparente, sin costos ocultos ni sorpresas. Si tu vehículo requiere llevarlo a taller por la magnitud del problema, te asesoramos y coordinamos el traslado sin costo adicional de diagnóstico.'
    ],
    beneficios: [
      { title: 'Ahorro de tiempo', desc: 'No esperas en taller. El mecánico va a ti, normalmente en menos de 60 minutos en toda la Región Metropolitana.' },
      { title: 'Sin costos de grúa', desc: 'Evita el traslado del vehículo. Atendemos in situ siempre que sea mecánicamente posible.' },
      { title: 'Presupuesto transparente', desc: 'Antes de cualquier reparación recibes un presupuesto cerrado y detallado. Sin sorpresas.' },
      { title: 'Garantía escrita', desc: '3 meses de garantía en mano de obra. Repuestos originales u OEM con respaldo.' }
    ],
    incluye: [
      'Diagnóstico mecánico visual y funcional en el lugar',
      'Revisión de niveles (aceite, líquido de frenos, refrigerante)',
      'Identificación de fugas y ruidos anormales',
      'Reparaciones menores en terreno',
      'Presupuesto detallado si requiere taller',
      'Boleta electrónica y garantía escrita de 3 meses'
    ],
    faq: [
      { q: '¿En qué comunas de Santiago ofrecen mecánica general a domicilio?', a: 'Cubrimos toda la Región Metropolitana, incluyendo Las Condes, Providencia, Vitacura, Lo Barnechea, Ñuñoa, Santiago Centro, Maipú, La Florida, Puente Alto, San Miguel, Macul, Peñalolén, La Reina y más.' },
      { q: '¿Cuánto demora en llegar el mecánico?', a: 'Nuestro tiempo promedio de respuesta es de 45 a 60 minutos dentro de Santiago. En horas punta puede extenderse a 90 minutos.' },
      { q: '¿Qué pasa si el problema no se puede resolver en el lugar?', a: 'Si la reparación requiere taller, te entregamos un presupuesto transparente y coordinamos el traslado. El diagnóstico en sitio no tiene costo adicional si decides hacer la reparación con nosotros.' },
      { q: '¿Aceptan tarjetas de crédito y débito?', a: 'Sí. Aceptamos efectivo, transferencia, tarjetas de crédito y débito, y también Mercado Pago.' }
    ],
    keywords: ['mecanico a domicilio santiago', 'mecanica general domicilio', 'reparacion mecanica auto casa', 'mecanico movil santiago'],
    relacionados: ['escaner-y-diagnostico-computarizado', 'mantencion-preventiva-y-afinamiento', 'auxilio-mecanico-24-7']
  },
  {
    slug: 'escaner-y-diagnostico-computarizado',
    nombre: 'Escáner y Diagnóstico Computarizado',
    categoria: 'Diagnóstico',
    tagline: 'Lectura de códigos de falla, borrado de testigos y análisis electrónico avanzado con scanner automotriz.',
    h1: 'Escáner Automotriz a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Escáner y Diagnóstico Computarizado a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Diagnóstico computarizado automotriz a domicilio en Santiago. Lectura de códigos de falla (Check Engine, ABS, Airbag) con scanner profesional. Agenda al +56962408735.',
    icono: '💻',
    descripcionCorta: 'Lectura de códigos de falla, borrado de testigos y análisis electrónico avanzado con scanner automotriz.',
    paragraphs: [
      'El escáner y diagnóstico computarizado a domicilio es uno de nuestros servicios más solicitados. Cuando se enciende la luz de "Check Engine" en tu tablero, el sistema electrónico de tu vehículo ha detectado una falla que necesita atención. Nuestro equipo de diagnóstico profesional de última generación lee los códigos de falla almacenados en la computadora del auto (ECU), interpreta los datos en tiempo real y te explica en lenguaje sencillo qué está pasando y cuánto costará repararlo.',
      'A diferencia de los talleres que solo conectan un escáner barato y borran la luz, en DRAUTOMOTRIZ utilizamos equipos profesionales multimarca que acceden a todos los módulos del vehículo: motor, transmisión, ABS, airbag, carrocería, confort y sistemas de seguridad. Esto nos permite diagnosticar fallas que otros escáneres básicos no detectan, dándote un panorama completo del estado real de tu auto antes de autorizar cualquier reparación.',
      'El servicio incluye la lectura completa de códigos activos y pendientes, el análisis de datos en tiempo real (sensores de oxígeno, temperatura, combustible, etc.), el borrado de testigos una vez reparada la falla y un informe escrito con todos los hallazgos. Si decides realizar la reparación con nosotros, el costo del diagnóstico se descuenta del presupuesto final.'
    ],
    beneficios: [
      { title: 'Escáner profesional multimarca', desc: 'Equipos de diagnóstico que cubren marcas europeas, asiáticas y americanas, incluyendo protocolos CAN, OBD2 y específicos de cada marca.' },
      { title: 'Todos los módulos', desc: 'No solo motor: revisamos ABS, airbag, transmisión, carrocería y sistemas de confort.' },
      { title: 'Informe escrito', desc: 'Recibes un PDF con todos los códigos, valores en tiempo real y recomendaciones de reparación.' },
      { title: 'Diagnóstico descontable', desc: 'Si decides reparar con nosotros, el costo del escáner se descuenta del presupuesto total.' }
    ],
    incluye: [
      'Lectura de códigos de falla activos y pendientes',
      'Análisis de sensores en tiempo real',
      'Acceso a módulos: motor, ABS, airbag, transmisión',
      'Borrado de testigos post-reparación',
      'Informe PDF con hallazgos y recomendaciones',
      'Presupuesto de reparación si corresponde'
    ],
    faq: [
      { q: '¿Pueden borrar la luz de Check Engine en el momento?', a: 'Sí, pero primero identificamos la causa raíz. Borrar el código sin reparar la falla solo hará que la luz vuelva a encenderse en pocos kilómetros.' },
      { q: '¿El escáner sirve para todos los autos?', a: 'Cubrimos la mayoría de las marcas y modelos desde 1996 (protocolo OBD2 obligatorio). Para marcas europeas premium (BMW, Mercedes, Audi) usamos equipos especializados.' },
      { q: '¿Cuánto cuesta el diagnóstico?', a: 'El valor varía según la complejidad. Te recomendamos contactarnos por WhatsApp para una cotización rápida indicando marca, modelo y año de tu vehículo.' },
      { q: '¿El costo del escáner se devuelve?', a: 'Si realizas la reparación con nosotros, el costo del diagnóstico se descuenta del presupuesto final.' }
    ],
    keywords: ['escaner automotriz domicilio', 'diagnostico computarizado auto', 'check engine santiago', 'scanner auto casa'],
    relacionados: ['mecanica-general-a-domicilio', 'inyeccion-electronica-y-limpieza', 'sistema-de-refrigeracion']
  },
  {
    slug: 'mantencion-preventiva-y-afinamiento',
    nombre: 'Mantención Preventiva y Afinamiento',
    categoria: 'Mantenimiento',
    tagline: 'Cambio de aceite, filtros, bujías y revisión general para alargar la vida útil del motor.',
    h1: 'Mantención Preventiva y Afinamiento a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Mantención Preventiva y Afinamiento a Domicilio Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Mantención preventiva a domicilio en Santiago. Cambio de aceite, filtros, bujías y revisión completa del motor. Servicio móvil en toda la RM. Agenda al +56962408735.',
    icono: '🛢️',
    descripcionCorta: 'Cambio de aceite, filtros, bujías y revisión general para alargar la vida útil del motor.',
    paragraphs: [
      'La mantención preventiva es la mejor inversión que puedes hacer para alargar la vida útil de tu vehículo y evitar costosas reparaciones futuras. Nuestro servicio de mantención y afinamiento a domicilio incluye todo lo que tu auto necesita según el kilometraje y los fabricantes, sin que tengas que llevarlo al taller ni perder horas esperando en una sala de espera.',
      'El servicio completo comprende el cambio de aceite motor con sintético o semisintético según especificación, reemplazo de filtro de aceite, filtro de aire, filtro de combustible, filtro de habitáculo (polen), cambio de bujías (si corresponde por kilometraje), revisión y ajuste de niveles (frenos, refrigerante, dirección), revisión del sistema de suspensión, frenos, neumáticos y batería. Al finalizar, te entregamos un check-list firmado con todo lo revisado.',
      'En DRAUTOMOTRIZ trabajamos solo con repuestos de calidad OEM o equivalentes, aceites de marcas reconocidas (Mobil, Castrol, Shell, Valvoline) y filtros originales o de marcas como Bosch, Mann y Wix. Recomendamos realizar la mantención cada 7.500 km o 6 meses (lo que ocurra primero) para vehículos que circulan en ciudad, donde el desgaste es mayor por arranques frecuentes y tráfico.'
    ],
    beneficios: [
      { title: 'Sin desplazarte', desc: 'Hacemos la mantención en tu casa o trabajo. Solo necesitas un espacio techado o sombra.' },
      { title: 'Repuestos de calidad', desc: 'Aceites sintéticos premium y filtros OEM. Nunca usamos repuestos de dudosa procedencia.' },
      { title: 'Check-list completo', desc: 'Te entregamos un informe detallado con todo lo revisado y recomendaciones a futuro.' },
      { title: 'Recordatorio automático', desc: 'Te avisamos por WhatsApp cuando toque la próxima mantención según tu kilometraje.' }
    ],
    incluye: [
      'Cambio de aceite motor (sintético o semisintético)',
      'Filtro de aceite nuevo',
      'Filtro de aire nuevo',
      'Filtro de combustible (si corresponde)',
      'Filtro de habitáculo / polen',
      'Cambio de bujías (si corresponde por km)',
      'Revisión y ajuste de niveles',
      'Check-list de 30 puntos de seguridad',
      'Informe firmado de la mantención'
    ],
    faq: [
      { q: '¿Cada cuántos kilómetros debo hacer la mantención?', a: 'Para uso en ciudad recomendamos cada 7.500 km o 6 meses. Para uso en carretera, cada 10.000 km. Consulta el manual de tu vehículo para la especificación exacta.' },
      { q: '¿Necesitan algún espacio especial para trabajar?', a: 'Solo un lugar relativamente plano, con sombra o techado si es posible. Llevamos todo lo demás: herramientas, aceite, filtros, bandejas de residuos y sistema de recolección.' },
      { q: '¿Qué aceite usan?', a: 'Trabajamos con aceites de marcas reconocidas (Mobil 1, Castrol, Shell Helix, Valvoline). El grado viscoso lo definimos según la recomendación del fabricante de tu vehículo.' },
      { q: '¿Reciclan el aceite usado?', a: 'Sí. Todo el aceite y filtros usados los retiramos y entregamos a un gestor autorizado para reciclaje o disposición final segura.' }
    ],
    keywords: ['mantencion preventiva domicilio', 'cambio aceite domicilio santiago', 'afinamiento auto casa', 'mantencion movil santiago'],
    relacionados: ['mecanica-general-a-domicilio', 'sistema-de-refrigeracion', 'inyeccion-electronica-y-limpieza']
  },
  {
    slug: 'servicio-de-frenos-a-domicilio',
    nombre: 'Servicio de Frenos a Domicilio',
    categoria: 'Reparación',
    tagline: 'Cambio de pastillas, rectificación de discos, líquido de frenos y revisión de seguridad.',
    h1: 'Servicio de Frenos a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Reparación de Frenos a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Servicio de frenos a domicilio en Santiago. Cambio de pastillas, rectificación de discos, líquido de frenos y revisión completa del sistema. Agenda al +56962408735.',
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
    relacionados: ['mecanica-general-a-domicilio', 'suspension-y-tren-delantero', 'auxilio-mecanico-24-7']
  },
  {
    slug: 'revision-y-cambio-de-bateria',
    nombre: 'Revisión y Cambio de Batería',
    categoria: 'Sistema Eléctrico',
    tagline: 'Testeo de alternador, sistema de carga y reemplazo de batería en terreno.',
    h1: 'Cambio de Batería a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Revisión y Cambio de Batería a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Servicio de cambio de batería a domicilio en Santiago. Testeo de alternador, sistema de carga y reemplazo de batería en terreno. Agenda al +56962408735.',
    icono: '🔋',
    descripcionCorta: 'Testeo de alternador, sistema de carga y reemplazo de batería en terreno.',
    paragraphs: [
      'Una batería en mal estado puede dejarte tirado en cualquier momento, generalmente en el peor escenario posible: de madrugada, antes de una reunión importante o con los niños en el auto. Nuestro servicio de revisión y cambio de batería a domicilio en Santiago te permite reemplazarla antes de que falle, con la comodidad de no tener que desplazarte a un taller ni pedir ayuda a un tercero.',
      'El servicio incluye el testeo profesional de la batería actual (voltaje en reposo, voltaje con carga, capacidad de arranque en frío o CCA), la verificación del sistema de carga (alternador y regulador), la inspección de bornes y cables, y el reemplazo de la batería si corresponde. Trabajamos con baterías de marcas reconocidas como Bosch, Ac delco, Willard y Motorcraft, con garantía de fabrica de 12 a 24 meses según el modelo.',
      'Antes de instalar la batería nueva, realizamos una limpieza profunda de bornes y conectores, aplicamos grasa dieléctrica para prevenir corrosión futura y verificamos que el alternador esté cargando correctamente. Si detectamos un problema con el alternador o el sistema eléctrico, te informamos antes de continuar y te entregamos un presupuesto para su reparación. La batería usada la retiramos para reciclaje seguro y gratuito.'
    ],
    beneficios: [
      { title: 'Testeo completo', desc: 'No solo cambiamos la batería: revisamos el alternador, regulador, bornes y cables para detectar la causa raíz.' },
      { title: 'Baterías con garantía', desc: 'Marcas reconocidas (Bosch, AC Delco, Willard) con garantía de fábrica de 12 a 24 meses.' },
      { title: 'Reciclaje gratuito', desc: 'Retiramos tu batería usada y la entregamos a un gestor autorizado para reciclaje ambiental.' },
      { title: 'Limpieza y protección', desc: 'Limpiamos bornes, aplicamos grasa dieléctrica y protegemos contra corrosión futura.' }
    ],
    incluye: [
      'Testeo de batería actual (voltaje, CCA, capacidad)',
      'Verificación del sistema de carga (alternador, regulador)',
      'Inspección de bornes, cables y conectores',
      'Reemplazo de batería si corresponde',
      'Limpieza y protección de bornes',
      'Reciclaje de batería usada',
      'Garantía de fábrica (12-24 meses)'
    ],
    faq: [
      { q: '¿Cuánto dura una batería en Santiago?', a: 'En promedio 3 a 4 años. El clima, la frecuencia de uso y los accesorios eléctricos influyen. Si tu batería tiene más de 3 años, te recomendamos testearla cada 6 meses.' },
      { q: '¿Pueden cambiar la batería en el estacionamiento de mi trabajo?', a: 'Sí, mientras tengamos acceso al vehículo. No necesitamos taller, solo un espacio donde aparcar el auto cómodamente.' },
      { q: '¿Qué pasa si el problema no es la batería sino el alternador?', a: 'Te lo informamos antes de cualquier cambio. Si decides reparar el alternador con nosotros, te entregamos presupuesto detallado. Nunca te cobraremos una batería nueva si la causa raíz es el alternador.' },
      { q: '¿Llevan baterías para mi modelo de auto?', a: 'Trabajamos con los tamaños más comunes (grupos 24, 35, 48, 49, 75, 78, etc.). Te recomendamos enviarnos por WhatsApp la marca, modelo y año de tu auto para confirmar disponibilidad antes de ir.' }
    ],
    keywords: ['cambio bateria domicilio santiago', 'testeo bateria auto', 'alternador revision casa', 'bateria auto a domicilio'],
    relacionados: ['mecanica-general-a-domicilio', 'escaner-y-diagnostico-computarizado', 'auxilio-mecanico-24-7']
  },
  {
    slug: 'suspension-y-tren-delantero',
    nombre: 'Suspensión y Tren Delantero',
    categoria: 'Reparación',
    tagline: 'Cambio de amortiguadores, bandejas, terminales y terminales de dirección.',
    h1: 'Reparación de Suspensión y Tren Delantero a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Suspensión y Tren Delantero a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Reparación de suspensión y tren delantero a domicilio en Santiago. Cambio de amortiguadores, bandejas, terminales y rótulas. Agenda al +56962408735.',
    icono: '🚗',
    descripcionCorta: 'Cambio de amortiguadores, bandejas, terminales y terminales de dirección.',
    paragraphs: [
      'La suspensión y el tren delantero de tu vehículo son responsables del confort de manejo, la estabilidad a alta velocidad y, lo más importante, tu seguridad en curvas y frenadas. Cuando estos componentes se desgastan, el auto se vuelve inestable, los neumáticos se desgastan irregularmente y aumentan las distancias de frenado, poniendo en riesgo tu vida y la de tu familia.',
      'Nuestro servicio de suspensión y tren delantero a domicilio en Santiago cubre el diagnóstico y reemplazo de amortiguadores, espirales, bandejas, rótulas, terminales de dirección, pivotes, bujes y rotulas superiores. Utilizamos repuestos de marcas como KYB, Monroe, TRW, Lemförder y SKF, todos con garantía de fábrica, y entregamos garantía escrita de 6 meses sobre la mano de obra.',
      'Los síntomas más comunes de un problema en la suspensión incluyen: ruidos al pasar por baches, vibración en el volante, desgaste irregular de neumáticos, sensación de inestabilidad en curvas, o el auto que se inclina excesivamente al frenar. Si experimentas cualquiera de estos síntomas, contáctanos por WhatsApp para coordinar una revisión a domicilio antes de que el problema se agrave y los costos de reparación aumenten.'
    ],
    beneficios: [
      { title: 'Diagnóstico preciso', desc: 'Identificamos exactamente qué componente falla antes de cambiarlo. No hacemos trabajos innecesarios.' },
      { title: 'Repuestos premium', desc: 'KYB, Monroe, TRW, Lemförder, SKF. Solo marcas reconocidas con garantía de fábrica.' },
      { title: 'Alineación incluida', desc: 'Tras cualquier cambio en tren delantero, coordinamos la alineación con un aliado cercano a tu ubicación.' },
      { title: 'Garantía 6 meses', desc: 'Mano de obra garantizada por 6 meses. Repuestos con garantía de fábrica.' }
    ],
    incluye: [
      'Diagnóstico completo de suspensión y tren delantero',
      'Cambio de amortiguadores delanteros/traseros',
      'Reemplazo de espirales si corresponde',
      'Cambio de bandejas y rótulas',
      'Reemplazo de terminales de dirección',
      'Cambio de pivotes y bujes',
      'Coordinación de alineación',
      'Garantía escrita de 6 meses'
    ],
    faq: [
      { q: '¿Cuándo debo cambiar los amortiguadores?', a: 'En promedio cada 80.000 a 100.000 km. Si notas que el auto rebota mucho al pasar baches, o que se inclina al frenar, es momento de revisarlos.' },
      { q: '¿Es seguro conducir con suspensión dañada?', a: 'No. La suspensión en mal estado aumenta la distancia de frenado, reduce la estabilidad en curvas y puede causar la pérdida de control del vehículo.' },
      { q: '¿Pueden hacer el trabajo en mi estacionamiento?', a: 'Sí, mientras tengamos un espacio plano y el vehículo pueda ser levantado con gato hidráulico. Llevamos todas las herramientas necesarias.' },
      { q: '¿La alineación también se hace a domicilio?', a: 'La alineación requiere equipos especializados que no son móviles. Coordinamos con un taller aliado cercano a tu ubicación para que la realices con descuento.' }
    ],
    keywords: ['suspension auto domicilio', 'tren delantero santiago', 'cambio amortiguadores casa', 'terminales direccion domicilio'],
    relacionados: ['mecanica-general-a-domicilio', 'servicio-de-frenos-a-domicilio', 'escaner-y-diagnostico-computarizado']
  },
  {
    slug: 'sistema-de-refrigeracion',
    nombre: 'Sistema de Refrigeración',
    categoria: 'Motor / Radiador',
    tagline: 'Reparación de fugas, cambio de bomba de agua, termostato y líquido refrigerante.',
    h1: 'Reparación de Sistema de Refrigeración a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Sistema de Refrigeración a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Reparación de sistema de refrigeración a domicilio en Santiago. Cambio de bomba de agua, termostato, líquido refrigerante y reparación de fugas. Agenda al +56962408735.',
    icono: '💧',
    descripcionCorta: 'Reparación de fugas, cambio de bomba de agua, termostato y líquido refrigerante.',
    paragraphs: [
      'El sistema de refrigeración es el que mantiene tu motor a la temperatura óptima de funcionamiento, evitando el sobrecalentamiento que puede causar daños irreparables que cuestan millones de pesos reparar. Una fuga pequeña de refrigerante, un termostato que no abre, o una bomba de agua defectuosa pueden llevar a la temperatura al rojo en minutos, dejándote tirado y con un motor fundido.',
      'Nuestro servicio de sistema de refrigeración a domicilio en Santiago incluye el diagnóstico completo (prueba de presión, revisión de fugas, testeo del termostato, inspección de mangueras, radiador, bomba de agua y ventilador), la reparación o reemplazo de los componentes dañados, y el cambio completo de líquido refrigerante con fluido de calidad OEM diluido al 50% con agua destilada.',
      'Trabajamos con repuestos de marcas como Gates, Dayco, Bosch y OEM originales. Utilizamos refrigerante concentrado de calidad (verde, rosado o naranja según especificación del fabricante) y realizamos la purga completa del sistema para eliminar bolsas de aire que pueden causar sobrecalentamiento. Todos los trabajos incluyen garantía de 6 meses y la revisión gratuita a los 30 días para confirmar que todo funcione correctamente.'
    ],
    beneficios: [
      { title: 'Diagnóstico con presión', desc: 'Usamos equipos de prueba de presión para detectar incluso las fugas más pequeñas que normalmente no se ven.' },
      { title: 'Refrigerante OEM', desc: 'Fluidos de calidad según especificación del fabricante (verde, rosado, naranja). Nunca agua sola.' },
      { title: 'Purga completa', desc: 'Eliminamos todas las bolsas de aire del sistema para evitar sobrecalentamientos futuros.' },
      { title: 'Revisión a 30 días', desc: 'Gratis. Volvemos a los 30 días para confirmar que todo funcione correctamente.' }
    ],
    incluye: [
      'Diagnóstico completo del sistema de refrigeración',
      'Prueba de presión para detectar fugas',
      'Testeo del termostato',
      'Inspección de mangueras, radiador y ventilador',
      'Cambio de bomba de agua (si corresponde)',
      'Cambio de termostato (si corresponde)',
      'Cambio completo de líquido refrigerante',
      'Purga del sistema',
      'Garantía de 6 meses y revisión a 30 días'
    ],
    faq: [
      { q: '¿Cómo sé si mi sistema de refrigeración tiene problemas?', a: 'Si la temperatura sube más de lo normal, ves charcos debajo del auto, el nivel de refrigerante baja sin razón, o escuchas ruidos del ventilador, llama inmediatamente.' },
      { q: '¿Puedo usar agua en lugar de refrigerante?', a: 'No recomendado. El agua sola no protege contra corrosión, no tiene punto de ebullición adecuado y se congela en zonas frías. Usa siempre refrigerante OEM.' },
      { q: '¿Cada cuánto cambio el refrigerante?', a: 'Cada 40.000 km o 2 años, lo que ocurra primero. El refrigerante pierde propiedades con el tiempo y uso.' },
      { q: '¿Pueden reparar una fuga del radiador en mi casa?', a: 'Depende del tipo de fuga. Las fugas menores en plástico o gomas podemos sellarlas temporalmente. Las fugas en el núcleo del radiador requieren reemplazo.' }
    ],
    keywords: ['sistema refrigeracion auto', 'bomba de agua domicilio', 'cambio refrigerante santiago', 'fuga refrigerante auto'],
    relacionados: ['mecanica-general-a-domicilio', 'mantencion-preventiva-y-afinamiento', 'correa-o-cadena-de-distribucion']
  },
  {
    slug: 'inyeccion-electronica-y-limpieza',
    nombre: 'Inyección Electrónica y Limpieza',
    categoria: 'Motor',
    tagline: 'Ultrasonido y calibración de inyectores, cuerpo de aceleración y control de emisiones.',
    h1: 'Inyección Electrónica y Limpieza de Inyectores a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Inyección Electrónica y Limpieza de Inyectores a Domicilio | DRAUTOMOTRIZ',
    metaDescription: 'Limpieza de inyectores por ultrasonido a domicilio en Santiago. Calibración de cuerpo de aceleración y control de emisiones. Agenda al +56962408735.',
    icono: '⚙️',
    descripcionCorta: 'Ultrasonido y calibración de inyectores, cuerpo de aceleración y control de emisiones.',
    paragraphs: [
      'El sistema de inyección electrónica es responsable de entregar la mezcla exacta de aire y combustible al motor para lograr la máxima eficiencia, potencia y menores emisiones. Con el tiempo, los inyectores se acumulan de carbón y residuos, el cuerpo de aceleración se ensucia, y los sensores de oxígeno y flujo de masa de aire pierden precisión, provocando pérdida de potencia, mayor consumo de combustible, tirones al acelerar y aumento de emisiones.',
      'Nuestro servicio de inyección electrónica y limpieza a domicilio en Santiago incluye la limpieza de inyectores por ultrasonido (sin desmontarlos en la mayoría de los casos), la limpieza del cuerpo de aceleración, la calibración de sensores (MAP, MAF, TPS, oxígeno), la revisión del sistema de combustible (bomba, filtro, regulador de presión), y el control de emisiones con equipo profesional.',
      'Después del servicio notarás una respuesta más rápida al acelerar, menor consumo de combustible (entre 5% y 15% dependiendo del estado previo), arranque más suave en frío y, en muchos casos, la desaparición de la luz de Check Engine si estaba relacionada con mezcla. Recomendamos realizar este servicio cada 30.000 a 40.000 km, o antes si notas pérdida de potencia o aumento de consumo.'
    ],
    beneficios: [
      { title: 'Ultrasonido sin desmontar', desc: 'En la mayoría de los casos limpiamos los inyectores sin desmontarlos, ahorrando tiempo y dinero.' },
      { title: 'Calibración completa', desc: 'No solo limpiamos: recalibramos sensores y parámetros para máxima eficiencia.' },
      { title: 'Menor consumo', desc: 'Reduce tu consumo de combustible entre 5% y 15% con una inyección limpia y calibrada.' },
      { title: 'Control de emisiones', desc: 'Verificamos que tu auto cumpla con las normas de emisiones para la revisión técnica.' }
    ],
    incluye: [
      'Limpieza de inyectores por ultrasonido',
      'Limpieza de cuerpo de aceleración',
      'Calibración de sensores (MAP, MAF, TPS, O2)',
      'Revisión del sistema de combustible',
      'Control de emisiones con equipo profesional',
      'Revisión de bujías (si tiene relación)',
      'Informe comparativo antes/después',
      'Garantía de 6 meses'
    ],
    faq: [
      { q: '¿Cada cuánto debo limpiar la inyección?', a: 'Cada 30.000 a 40.000 km. Si usas combustible de baja calidad o circulas mucho en tráfico, puede ser necesario antes.' },
      { q: '¿Notaré diferencia inmediatamente?', a: 'Sí. La mayoría de los clientes nota arranque más suave, mejor respuesta al acelerar y menor consumo en los primeros 100 km posteriores al servicio.' },
      { q: '¿Pueden hacer el servicio en mi casa?', a: 'Sí. Llevamos el equipo de ultrasonido portátil y todas las herramientas. Solo necesitamos espacio para trabajar alrededor del motor.' },
      { q: '¿Sirve para pasar la revisión técnica?', a: 'Sí. Si tu auto está fallando emisiones, este servicio suele resolver el problema. Si no lo resuelve, te entregamos un diagnóstico de qué más necesita.' }
    ],
    keywords: ['limpieza inyectores ultrasonido', 'inyeccion electronica domicilio', 'cuerpo aceleracion limpieza', 'control emisiones auto'],
    relacionados: ['escaner-y-diagnostico-computarizado', 'mantencion-preventiva-y-afinamiento', 'mecanica-general-a-domicilio']
  },
  {
    slug: 'auxilio-mecanico-24-7',
    nombre: 'Auxilio Mecánico 24/7 y Urgencias',
    categoria: 'Asistencia',
    tagline: 'Asistencia en ruta y terreno para vehículos detenidos o con fallas imprevistas en Santiago.',
    h1: 'Auxilio Mecánico 24/7 a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Auxilio Mecánico 24/7 y Urgencias en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Auxilio mecánico 24/7 a domicilio en Santiago. Asistencia en ruta para vehículos detenidos o con fallas imprevistas. Llámanos al +56962408735.',
    icono: '🆘',
    descripcionCorta: 'Asistencia en ruta y terreno para vehículos detenidos o con fallas imprevistas en Santiago.',
    paragraphs: [
      'Cuando tu auto se detiene en plena vía pública, en un estacionamiento, o simplemente no arranca una mañana antes del trabajo, necesitas una solución rápida y confiable. Nuestro servicio de auxilio mecánico 24/7 en Santiago está diseñado para esos momentos críticos: enviamos un mecánico móvil con herramientas y repuestos comunes para intentar resolver el problema en el lugar y que puedas continuar tu camino.',
      'Los casos más frecuentes que resolvemos en auxilio incluyen: batería descargada (arranque con cables o batería portátil), falta de combustible, pinchadura de neumático (cambio por repuesto), sobrecalentamiento por pérdida de refrigerante, falla de alternador, problemas de arranque,Vehicle sin potencia, llaves adentro del auto, y diagnóstico inicial de fallas que requieren posterior reparación. Si el problema no se puede resolver en el sitio, coordinamos la grúa y el traslado al taller.',
      'Nuestro servicio de auxilio está disponible las 24 horas, los 7 días de la semana, incluyendo festivos. Los tiempos de respuesta varían entre 30 y 90 minutos según la comuna y la hora. Las tarifas son transparentes y se informan antes del envío del mecánico. Para emergencias, comunícate directamente por WhatsApp o llamada telefónica al +56962408735 con tu ubicación (idealmente envía ubicación por WhatsApp), marca y modelo del vehículo, y descripción breve del problema.'
    ],
    beneficios: [
      { title: 'Disponible 24/7', desc: 'Las 24 horas, los 7 días, incluyendo festivos. Atendemos emergencias en toda la Región Metropolitana.' },
      { title: 'Respuesta rápida', desc: 'Tiempo promedio de llegada: 30 a 90 minutos según comuna y hora del día.' },
      { title: 'Resolución in situ', desc: 'En el 70% de los casos resolvemos el problema en el lugar. Solo si no es posible, gestionamos grúa.' },
      { title: 'Tarifas transparentes', desc: 'Antes de enviar al mecánico te informamos el costo del servicio. Sin sorpresas.' }
    ],
    incluye: [
      'Envío de mecánico móvil 24/7',
      'Arranque con cables / batería portátil',
      'Cambio de neumático (repuesto del auto)',
      'Recarga de combustible de emergencia',
      'Diagnóstico inicial de fallas',
      'Reparaciones menores en sitio',
      'Coordinación de grúa si es necesario',
      'Tarifa transparente informada previamente'
    ],
    faq: [
      { q: '¿Cuánto demoran en llegar en una emergencia?', a: 'Tiempo promedio: 30 a 90 minutos. Depende de la comuna, hora del día y tráfico. Siempre te informamos el tiempo estimado antes del envío.' },
      { q: '¿Qué zonas cubren?', a: 'Toda la Región Metropolitana. Para comunas más alejadas (Talagante, Melipilla, Puente Alto extremo), el tiempo puede ser mayor.' },
      { q: '¿El servicio de auxilio tiene costo adicional nocturno?', a: 'Sí, entre las 22:00 y las 06:00 horas aplica un recargo nocturno. Te lo informamos antes de enviar el mecánico.' },
      { q: '¿Aceptan pago con tarjeta en el lugar?', a: 'Sí. Llevamos POS móvil para tarjetas de crédito y débito. También efectivo y transferencia.' }
    ],
    keywords: ['auxilio mecanico 24/7 santiago', 'urgencia mecanico domicilio', 'auto detenido ayuda', 'asistencia ruta santiago'],
    relacionados: ['revision-y-cambio-de-bateria', 'mecanica-general-a-domicilio', 'sistema-de-refrigeracion']
  },
  {
    slug: 'correa-o-cadena-de-distribucion',
    nombre: 'Correa / Cadena de Distribución',
    categoria: 'Motor',
    tagline: 'Sustitución programada de kit de distribución y correas auxiliares para evitar daños graves.',
    h1: 'Cambio de Correa o Cadena de Distribución a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaTitle: 'Correa / Cadena de Distribución a Domicilio en Santiago | DRAUTOMOTRIZ',
    metaDescription: 'Cambio de correa o cadena de distribución a domicilio en Santiago. Kit de distribución completo con correas auxiliares. Servicio móvil. Agenda al +56962408735.',
    icono: '⛓️',
    descripcionCorta: 'Sustitución programada de kit de distribución y correas auxiliares para evitar daños graves.',
    paragraphs: [
      'La correa o cadena de distribución es uno de los componentes más críticos del motor: sincroniza el movimiento de los árboles de levas con el cigüeñal, y si se rompe mientras el motor está funcionando, los pistones pueden golpear las válvulas causando daños que requieren la reconstrucción completa del motor, con costos que fácilmente superan el millón de pesos. Por eso, el cambio programado según el kilometraje es la mantención más importante que debes hacer a tu vehículo.',
      'Nuestro servicio de cambio de correa o cadena de distribución a domicilio en Santiago incluye el kit completo: correa/cadena nueva, tensor, rodillos, bomba de agua (en la mayoría de los modelos va en el mismo kit), y correas auxiliares (alternador, dirección hidráulica, aire acondicionado). Trabajamos con kits de marcas reconocidas como Gates, Dayco, Continental, Bosch y OEM originales, todos con garantía de fábrica.',
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
      { q: '¿Cuándo debo cambiar la correa de distribución?', a: 'Depende del fabricante. En promedio cada 80.000 a 100.000 km o 5 años. Algunos modelos modernos usan cadena y tienen intervalos de 150.000+ km. Consulta tu manual.' },
      { q: '¿Cómo sé si mi correa está fallando?', a: 'Ruidos chirriantes al arrancar, grietas visibles en la correa, pérdida de potencia, o el auto no arranca. Pero lo más seguro es cambiarla según kilometraje antes de que falle.' },
      { q: '¿Pueden hacer el cambio en mi casa?', a: 'Sí, pero requiere un espacio techado, plano, y donde el mecánico pueda trabajar 4 a 8 horas sin interrupciones. Te confirmamos viabilidad antes de coordinar.' },
      { q: '¿Qué pasa si se rompe la correa mientras conduzco?', a: 'En motores de interferencia (la mayoría), los pistones golpean las válvulas y el motor se daña severamente. Por eso es crítico cambiarla según kilometraje, no esperar a que falle.' }
    ],
    keywords: ['cambio correa distribucion', 'cadena distribucion domicilio', 'kit distribucion santiago', 'correa alternador auto'],
    relacionados: ['mantencion-preventiva-y-afinamiento', 'sistema-de-refrigeracion', 'mecanica-general-a-domicilio']
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
