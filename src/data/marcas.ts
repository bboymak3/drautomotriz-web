// ============================================================
// DRAUTOMOTRIZ - Catálogo de marcas y modelos de vehículos
// Adaptado del repositorio OptimusCars para DRAUTOMOTRIZ
// 32 vehículos distribuidos en 12 marcas
// ============================================================

export interface Modelo {
  nombre: string;
  imagen?: string;
  alt?: string;
  slug?: string;
}

export interface Marca {
  nombre: string;
  slug: string;
  imagen?: string;
  modelos: Modelo[];
}

// Helper para generar rutas de imágenes de vehículos DRAUTOMOTRIZ
const vimg = (slug: string) => `/imagen/vehiculos/drautomotriz-${slug}.webp`;

export const marcas: Marca[] = [
  {
    nombre: 'Chevrolet',
    slug: 'chevrolet',
    imagen: vimg('chevrolet-sail-detailing-profesional'),
    modelos: [
      { nombre: 'Sail', slug: 'sail', imagen: vimg('chevrolet-sail-detailing-profesional'), alt: 'Chevrolet Sail servicio mecanico a domicilio en Santiago - DRAUTOMOTRIZ' },
      { nombre: 'Spark', slug: 'spark', imagen: vimg('chevrolet-spark-laminas-seguridad-auto'), alt: 'Chevrolet Spark revision tecnica a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'Sonic', slug: 'sonic', imagen: vimg('chevrolet-sonic-polarizado-vidrios-uv'), alt: 'Chevrolet Sonic diagnostico computarizado - DRAUTOMOTRIZ' },
      { nombre: 'Cruze', slug: 'cruze' },
      { nombre: 'Onix', slug: 'onix' },
      { nombre: 'Tracker', slug: 'tracker' },
    ],
  },
  {
    nombre: 'Toyota',
    slug: 'toyota',
    imagen: vimg('toyota-corolla-polarizado-proteccion'),
    modelos: [
      { nombre: 'Yaris', slug: 'yaris', imagen: vimg('toyota-yaris-detailing-santiago'), alt: 'Toyota Yaris mantencion a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'Corolla', slug: 'corolla', imagen: vimg('toyota-corolla-polarizado-proteccion'), alt: 'Toyota Corolla servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'Camry', slug: 'camry' },
      { nombre: 'RAV4', slug: 'rav4' },
      { nombre: 'Hilux', slug: 'hilux' },
      { nombre: 'Fortuner', slug: 'fortuner' },
    ],
  },
  {
    nombre: 'Suzuki',
    slug: 'suzuki',
    imagen: vimg('suzuki-baleno-pulido-sellado-ceramico'),
    modelos: [
      { nombre: 'Baleno', slug: 'baleno', imagen: vimg('suzuki-baleno-pulido-sellado-ceramico'), alt: 'Suzuki Baleno servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'Celerio', slug: 'celerio', imagen: vimg('suzuki-celerio-autolavado-premium-optimus'), alt: 'Suzuki Celerio mantencion preventiva - DRAUTOMOTRIZ' },
      { nombre: 'Swift', slug: 'swift' },
      { nombre: 'Vitara', slug: 'vitara' },
      { nombre: 'Jimny', slug: 'jimny' },
    ],
  },
  {
    nombre: 'Hyundai',
    slug: 'hyundai',
    imagen: vimg('hyundai-tucson-laminas-proteccion-uv'),
    modelos: [
      { nombre: 'Accent', slug: 'accent', imagen: vimg('hyundai-accent-ceramic-coating-santiago'), alt: 'Hyundai Accent diagnostico mecanico - DRAUTOMOTRIZ' },
      { nombre: 'Tucson', slug: 'tucson', imagen: vimg('hyundai-tucson-laminas-proteccion-uv'), alt: 'Hyundai Tucson servicio automotriz a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'Grand i10', slug: 'grand-i10', imagen: vimg('hyundai-grand-i10-pulido-brillo-auto'), alt: 'Hyundai Grand i10 mantencion por kilometraje - DRAUTOMOTRIZ' },
      { nombre: 'Creta', slug: 'creta' },
      { nombre: 'Elantra', slug: 'elantra' },
    ],
  },
  {
    nombre: 'Kia',
    slug: 'kia',
    imagen: vimg('kia-rio-wrapping-vinilo-santiago-chile'),
    modelos: [
      { nombre: 'Picanto', slug: 'picanto', imagen: vimg('kia-morning-polarizado-certificado'), alt: 'Kia Picanto servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'Rio', slug: 'rio', imagen: vimg('kia-rio-wrapping-vinilo-santiago-chile'), alt: 'Kia Rio diagnostico computarizado - DRAUTOMOTRIZ' },
      { nombre: 'Sportage', slug: 'sportage' },
      { nombre: 'Seltos', slug: 'seltos' },
      { nombre: 'Cerato', slug: 'cerato' },
    ],
  },
  {
    nombre: 'Nissan',
    slug: 'nissan',
    imagen: vimg('nissan-kicks-polarizado-vidrios-auto'),
    modelos: [
      { nombre: 'Versa', slug: 'versa', imagen: vimg('nissan-versa-autolavado-detallado'), alt: 'Nissan Versa servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'Kicks', slug: 'kicks', imagen: vimg('nissan-kicks-polarizado-vidrios-auto'), alt: 'Nissan Kicks mantencion preventiva - DRAUTOMOTRIZ' },
      { nombre: 'Sentra', slug: 'sentra' },
      { nombre: 'X-Trail', slug: 'x-trail' },
    ],
  },
  {
    nombre: 'Mazda',
    slug: 'mazda',
    imagen: vimg('mazda-cx5-laminas-seguridad-optimus'),
    modelos: [
      { nombre: 'Mazda 3', slug: 'mazda-3', imagen: vimg('mazda-3-detailing-pulido-premium'), alt: 'Mazda 3 servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'CX-5', slug: 'cx-5', imagen: vimg('mazda-cx5-laminas-seguridad-optimus'), alt: 'Mazda CX-5 diagnostico computarizado - DRAUTOMOTRIZ' },
      { nombre: 'CX-3', slug: 'cx-3' },
      { nombre: 'BT-50', slug: 'bt-50' },
    ],
  },
  {
    nombre: 'Honda',
    slug: 'honda',
    imagen: vimg('honda-cr-v-polarizado-detailing-optimus'),
    modelos: [
      { nombre: 'Civic', slug: 'civic', imagen: vimg('honda-civic-laminas-seguridad-santiago'), alt: 'Honda Civic servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'CR-V', slug: 'cr-v', imagen: vimg('honda-cr-v-polarizado-detailing-optimus'), alt: 'Honda CR-V mantencion preventiva - DRAUTOMOTRIZ' },
      { nombre: 'City', slug: 'city', imagen: vimg('honda-city-autolavado-premium-chile'), alt: 'Honda City diagnostico - DRAUTOMOTRIZ' },
      { nombre: 'HR-V', slug: 'hr-v' },
    ],
  },
  {
    nombre: 'Ford',
    slug: 'ford',
    imagen: vimg('ford-ecosport-wrapping-vinilo-completo'),
    modelos: [
      { nombre: 'Fiesta', slug: 'fiesta', imagen: vimg('ford-fiesta-laminas-polarizado-chile'), alt: 'Ford Fiesta servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'EcoSport', slug: 'ecosport', imagen: vimg('ford-ecosport-wrapping-vinilo-completo'), alt: 'Ford EcoSport mantencion preventiva - DRAUTOMOTRIZ' },
      { nombre: 'Focus', slug: 'focus' },
      { nombre: 'Escape', slug: 'escape' },
    ],
  },
  {
    nombre: 'Peugeot',
    slug: 'peugeot',
    imagen: vimg('peugeot-3008-laminas-antivandalismo'),
    modelos: [
      { nombre: '208', slug: '208', imagen: vimg('peugeot-208-ceramic-coating-proteccion'), alt: 'Peugeot 208 servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: '3008', slug: '3008', imagen: vimg('peugeot-3008-laminas-antivandalismo'), alt: 'Peugeot 3008 diagnostico computarizado - DRAUTOMOTRIZ' },
      { nombre: 'Partner', slug: 'partner' },
    ],
  },
  {
    nombre: 'Renault',
    slug: 'renault',
    imagen: vimg('renault-duster-pintura-llantas-calipers'),
    modelos: [
      { nombre: 'Logan', slug: 'logan', imagen: vimg('renault-logan-detailing-interior-limpieza'), alt: 'Renault Logan servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'Duster', slug: 'duster', imagen: vimg('renault-duster-pintura-llantas-calipers'), alt: 'Renault Duster mantencion preventiva - DRAUTOMOTRIZ' },
      { nombre: 'Kwid', slug: 'kwid' },
      { nombre: 'Captur', slug: 'captur' },
    ],
  },
  {
    nombre: 'Subaru',
    slug: 'subaru',
    imagen: vimg('subaru-forester-polarizado-proteccion'),
    modelos: [
      { nombre: 'Forester', slug: 'forester', imagen: vimg('subaru-forester-polarizado-proteccion'), alt: 'Subaru Forester servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'XV', slug: 'xv', imagen: vimg('subaru-xv-laminas-seguridad-santiago'), alt: 'Subaru XV diagnostico computarizado - DRAUTOMOTRIZ' },
      { nombre: 'Outback', slug: 'outback' },
    ],
  },
  {
    nombre: 'Volkswagen',
    slug: 'volkswagen',
    imagen: vimg('volkswagen-gol-pulido-focos-restauracion'),
    modelos: [
      { nombre: 'Gol', slug: 'gol', imagen: vimg('volkswagen-gol-pulido-focos-restauracion'), alt: 'Volkswagen Gol servicio mecanico a domicilio - DRAUTOMOTRIZ' },
      { nombre: 'Voyage', slug: 'voyage' },
      { nombre: 'T-Cross', slug: 't-cross' },
      { nombre: 'Nivus', slug: 'nivus' },
      { nombre: 'Amarok', slug: 'amarok' },
    ],
  },
];

// Helpers
export const getMarcaBySlug = (slug: string): Marca | undefined =>
  marcas.find(m => m.slug === slug);

// Conteo total de modelos
export const totalModelos = marcas.reduce((acc, m) => acc + m.modelos.length, 0);

// Aplanar todos los modelos con su marca
export const allModelos = marcas.flatMap(m =>
  m.modelos.map(mod => ({
    marca: m.nombre,
    marcaSlug: m.slug,
    modelo: mod.nombre,
    modeloSlug: mod.slug || mod.nombre.toLowerCase().replace(/\s+/g, '-'),
    imagen: mod.imagen || m.imagen,
    alt: mod.alt || `${m.nombre} ${mod.nombre} servicio mecanico a domicilio - DRAUTOMOTRIZ`,
  }))
);
