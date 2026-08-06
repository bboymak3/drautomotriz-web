// ============================================================
// DRAUTOMOTRIZ - Catálogo de vehículos que atendemos
// 32 modelos reales con fotos, basado en Globalpro y OptimusCars
// ============================================================

export interface Vehiculo {
  slug: string;
  marca: string;
  marcaSlug: string;
  modelo: string;
  imagen: string;
  alt: string;
  anioInicio?: number;
  tipo?: string; // Sedán, Hatchback, SUV, etc.
}

// Helper para generar rutas
const vimg = (slug: string, ext: string = 'webp') => `/imagen/vehiculos/drautomotriz-${slug}.${ext}`;

export const vehiculos: Vehiculo[] = [
  // Chevrolet
  { slug: 'chevrolet-sail', marca: 'Chevrolet', marcaSlug: 'chevrolet', modelo: 'Sail', imagen: vimg('chevrolet-sail'), alt: 'Chevrolet Sail servicio mecánico a domicilio en Santiago - DRAUTOMOTRIZ', anioInicio: 2010, tipo: 'Sedán' },
  { slug: 'chevrolet-sonic', marca: 'Chevrolet', marcaSlug: 'chevrolet', modelo: 'Sonic', imagen: vimg('chevrolet-sonic'), alt: 'Chevrolet Sonic diagnostico computarizado a domicilio - DRAUTOMOTRIZ', anioInicio: 2012, tipo: 'Hatchback/Sedán' },
  { slug: 'chevrolet-spark', marca: 'Chevrolet', marcaSlug: 'chevrolet', modelo: 'Spark', imagen: vimg('chevrolet-spark'), alt: 'Chevrolet Spark mantención a domicilio - DRAUTOMOTRIZ', anioInicio: 2010, tipo: 'Hatchback' },

  // Fiat
  { slug: 'fiat-bravo-tjet', marca: 'Fiat', marcaSlug: 'fiat', modelo: 'Bravo T-Jet', imagen: vimg('fiat-bravo-tjet', 'webp'), alt: 'Fiat Bravo T-Jet servicio mecánico a domicilio en Santiago - DRAUTOMOTRIZ', anioInicio: 2016, tipo: 'Hatchback' },

  // Ford
  { slug: 'ford-ecosport', marca: 'Ford', marcaSlug: 'ford', modelo: 'EcoSport', imagen: vimg('ford-ecosport'), alt: 'Ford EcoSport servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2013, tipo: 'SUV' },
  { slug: 'ford-fiesta', marca: 'Ford', marcaSlug: 'ford', modelo: 'Fiesta', imagen: vimg('ford-fiesta'), alt: 'Ford Fiesta mantención preventiva a domicilio - DRAUTOMOTRIZ', anioInicio: 2013, tipo: 'Hatchback/Sedán' },

  // Honda
  { slug: 'honda-city', marca: 'Honda', marcaSlug: 'honda', modelo: 'City', imagen: vimg('honda-city'), alt: 'Honda City servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'Sedán' },
  { slug: 'honda-civic', marca: 'Honda', marcaSlug: 'honda', modelo: 'Civic', imagen: vimg('honda-civic'), alt: 'Honda Civic diagnostico computarizado a domicilio - DRAUTOMOTRIZ', anioInicio: 2012, tipo: 'Sedán' },
  { slug: 'honda-cr-v', marca: 'Honda', marcaSlug: 'honda', modelo: 'CR-V', imagen: vimg('honda-cr-v'), alt: 'Honda CR-V servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2013, tipo: 'SUV' },

  // Hyundai
  { slug: 'hyundai-accent', marca: 'Hyundai', marcaSlug: 'hyundai', modelo: 'Accent', imagen: vimg('hyundai-accent'), alt: 'Hyundai Accent servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'Sedán' },
  { slug: 'hyundai-grand-i10', marca: 'Hyundai', marcaSlug: 'hyundai', modelo: 'Grand i10', imagen: vimg('hyundai-grand-i10'), alt: 'Hyundai Grand i10 mantención por kilometraje - DRAUTOMOTRIZ', anioInicio: 2016, tipo: 'Hatchback' },
  { slug: 'hyundai-tucson', marca: 'Hyundai', marcaSlug: 'hyundai', modelo: 'Tucson', imagen: vimg('hyundai-tucson'), alt: 'Hyundai Tucson servicio automotriz a domicilio - DRAUTOMOTRIZ', anioInicio: 2015, tipo: 'SUV' },

  // Kia
  { slug: 'kia-morning', marca: 'Kia', marcaSlug: 'kia', modelo: 'Morning', imagen: vimg('kia-morning', 'webp'), alt: 'Kia Morning servicio mecánico a domicilio en Santiago - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'Hatchback' },
  { slug: 'kia-rio', marca: 'Kia', marcaSlug: 'kia', modelo: 'Rio', imagen: vimg('kia-rio'), alt: 'Kia Rio diagnostico computarizado a domicilio - DRAUTOMOTRIZ', anioInicio: 2015, tipo: 'Sedán/Hatchback' },

  // Mazda
  { slug: 'mazda-3', marca: 'Mazda', marcaSlug: 'mazda', modelo: 'Mazda 3', imagen: vimg('mazda-3'), alt: 'Mazda 3 servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'Sedán/Hatchback' },
  { slug: 'mazda-cx-5', marca: 'Mazda', marcaSlug: 'mazda', modelo: 'CX-5', imagen: vimg('mazda-cx-5'), alt: 'Mazda CX-5 diagnostico computarizado a domicilio - DRAUTOMOTRIZ', anioInicio: 2015, tipo: 'SUV' },

  // MG
  { slug: 'mg-3', marca: 'MG', marcaSlug: 'mg', modelo: 'MG 3', imagen: vimg('mg-3'), alt: 'MG 3 servicio mecánico a domicilio en Santiago - DRAUTOMOTRIZ', anioInicio: 2019, tipo: 'Hatchback' },
  { slug: 'mg-zs', marca: 'MG', marcaSlug: 'mg', modelo: 'ZS', imagen: vimg('mg-zs'), alt: 'MG ZS servicio automotriz a domicilio - DRAUTOMOTRIZ', anioInicio: 2020, tipo: 'SUV' },

  // Nissan
  { slug: 'nissan-kicks', marca: 'Nissan', marcaSlug: 'nissan', modelo: 'Kicks', imagen: vimg('nissan-kicks'), alt: 'Nissan Kicks mantención preventiva a domicilio - DRAUTOMOTRIZ', anioInicio: 2018, tipo: 'SUV' },
  { slug: 'nissan-versa', marca: 'Nissan', marcaSlug: 'nissan', modelo: 'Versa', imagen: vimg('nissan-versa'), alt: 'Nissan Versa servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'Sedán' },

  // Peugeot
  { slug: 'peugeot-208', marca: 'Peugeot', marcaSlug: 'peugeot', modelo: '208', imagen: vimg('peugeot-208'), alt: 'Peugeot 208 servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2013, tipo: 'Hatchback' },
  { slug: 'peugeot-3008', marca: 'Peugeot', marcaSlug: 'peugeot', modelo: '3008', imagen: vimg('peugeot-3008'), alt: 'Peugeot 3008 diagnostico computarizado a domicilio - DRAUTOMOTRIZ', anioInicio: 2017, tipo: 'SUV' },

  // Renault
  { slug: 'renault-duster', marca: 'Renault', marcaSlug: 'renault', modelo: 'Duster', imagen: vimg('renault-duster'), alt: 'Renault Duster mantención preventiva a domicilio - DRAUTOMOTRIZ', anioInicio: 2013, tipo: 'SUV' },
  { slug: 'renault-logan', marca: 'Renault', marcaSlug: 'renault', modelo: 'Logan', imagen: vimg('renault-logan'), alt: 'Renault Logan servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'Sedán' },

  // Subaru
  { slug: 'subaru-forester', marca: 'Subaru', marcaSlug: 'subaru', modelo: 'Forester', imagen: vimg('subaru-forester'), alt: 'Subaru Forester servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'SUV' },
  { slug: 'subaru-xv', marca: 'Subaru', marcaSlug: 'subaru', modelo: 'XV', imagen: vimg('subaru-xv'), alt: 'Subaru XV diagnostico computarizado a domicilio - DRAUTOMOTRIZ', anioInicio: 2015, tipo: 'SUV' },

  // Suzuki
  { slug: 'suzuki-baleno', marca: 'Suzuki', marcaSlug: 'suzuki', modelo: 'Baleno', imagen: vimg('suzuki-baleno'), alt: 'Suzuki Baleno servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2016, tipo: 'Hatchback' },
  { slug: 'suzuki-celerio', marca: 'Suzuki', marcaSlug: 'suzuki', modelo: 'Celerio', imagen: vimg('suzuki-celerio'), alt: 'Suzuki Celerio mantención preventiva - DRAUTOMOTRIZ', anioInicio: 2015, tipo: 'Hatchback' },
  { slug: 'suzuki-swift', marca: 'Suzuki', marcaSlug: 'suzuki', modelo: 'Swift', imagen: vimg('suzuki-swift'), alt: 'Suzuki Swift servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'Hatchback' },

  // Toyota
  { slug: 'toyota-corolla', marca: 'Toyota', marcaSlug: 'toyota', modelo: 'Corolla', imagen: vimg('toyota-corolla'), alt: 'Toyota Corolla servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'Sedán' },
  { slug: 'toyota-yaris', marca: 'Toyota', marcaSlug: 'toyota', modelo: 'Yaris', imagen: vimg('toyota-yaris'), alt: 'Toyota Yaris mantención a domicilio - DRAUTOMOTRIZ', anioInicio: 2015, tipo: 'Sedán/Hatchback' },

  // Volkswagen
  { slug: 'volkswagen-gol', marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'Gol', imagen: vimg('volkswagen-gol'), alt: 'Volkswagen Gol servicio mecánico a domicilio - DRAUTOMOTRIZ', anioInicio: 2014, tipo: 'Hatchback' },
];

// Interfaces compatibles con código existente
export interface Marca {
  nombre: string;
  slug: string;
  imagen?: string;
  modelos: { nombre: string; slug?: string; imagen?: string; alt?: string }[];
}

// Generar marcas dinámicamente desde la lista de vehículos
export const marcas: Marca[] = (() => {
  const mapa = new Map<string, Marca>();
  for (const v of vehiculos) {
    if (!mapa.has(v.marcaSlug)) {
      mapa.set(v.marcaSlug, {
        nombre: v.marca,
        slug: v.marcaSlug,
        imagen: v.imagen,
        modelos: []
      });
    }
    const prefix = v.marcaSlug + '-';
    const modeloSlug = v.slug.startsWith(prefix)
      ? v.slug.slice(prefix.length)
      : v.slug;
    mapa.get(v.marcaSlug)!.modelos.push({
      nombre: v.modelo,
      slug: modeloSlug,
      imagen: v.imagen,
      alt: v.alt
    });
  }
  return Array.from(mapa.values()).sort((a, b) => a.nombre.localeCompare(b.nombre));
})();

// Total de vehículos
export const totalVehiculos = vehiculos.length;

// Helper para obtener vehículo por slug completo
export const getVehiculoBySlug = (slug: string): Vehiculo | undefined =>
  vehiculos.find(v => v.slug === slug);

// Helper para obtener marca por slug
export const getMarcaBySlug = (slug: string): Marca | undefined =>
  marcas.find(m => m.slug === slug);

// Lista aplanada para uso en landings dinámicas
// modeloSlug = slug completo sin el prefijo de marca
export const allModelos = vehiculos.map(v => {
  // Quitar el prefijo "{marcaSlug}-" del slug para obtener modeloSlug
  const prefix = v.marcaSlug + '-';
  let modeloSlug = v.slug.startsWith(prefix)
    ? v.slug.slice(prefix.length)
    : v.slug;
  // Normalizar a-z0-9-
  modeloSlug = modeloSlug.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  return {
    marca: v.marca,
    marcaSlug: v.marcaSlug,
    modelo: v.modelo,
    modeloSlug,
    slugCompleto: v.slug,
    imagen: v.imagen,
    alt: v.alt,
    tipo: v.tipo,
    anioInicio: v.anioInicio,
  };
});

// Compat: totalModelos = totalVehiculos
export const totalModelos = totalVehiculos;
