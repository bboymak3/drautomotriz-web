// ============================================================
// DRAUTOMOTRIZ - Registro de fichas de trabajos realizados
// ============================================================
// Cada ficha es un componente src/components/Trabajo<Vehiculo>.astro
// (usa TrabajoModal) con sus fotos en public/imagen/nuevoset/<id>/.
// Este registro decide dónde se publica cada ficha:
//   - home (index.astro), en este orden, versión completa
//   - landing del vehículo (/vehiculos/<marca>/<modelo>/), versión completa
//   - páginas de los servicios asociados (/servicios/<slug>/), versión compacta
//   - galería (/galeria/), sección "Trabajos realizados", versión compacta
// El componente se conecta en src/components/TrabajosRealizados.astro.
// Procedimiento completo: .claude/skills/fichas-trabajos/SKILL.md
// ============================================================

export interface Trabajo {
  id: string;          // = slug del vehículo en marcas.ts = carpeta en nuevoset/
  vehiculo: string;    // "Citroën C3"
  titulo: string;      // trabajo realizado, corto
  servicios: string[]; // slugs de servicios.ts donde se muestra la ficha
}

export const trabajos: Trabajo[] = [
  { id: 'chevrolet-nkr-512', vehiculo: 'Chevrolet NKR 512', titulo: 'Cambio kit de embrague', servicios: ['cambio-kit-de-embrague'] },
  { id: 'nissan-tiida', vehiculo: 'Nissan Tiida', titulo: 'Mantención por km, correa de accesorios y cuerpo de aceleración', servicios: ['mantencion-por-km'] },
  { id: 'volkswagen-golf', vehiculo: 'Volkswagen Golf', titulo: 'Cambio de radiador y recarga de aire acondicionado', servicios: ['recarga-y-mantencion-de-aire-acondicionado'] },
  { id: 'chevrolet-onix', vehiculo: 'Chevrolet Onix', titulo: 'Cambio kit de embrague', servicios: ['cambio-kit-de-embrague'] },
  { id: 'chevrolet-corsa', vehiculo: 'Chevrolet Corsa', titulo: 'Kit de distribución, bomba de agua y termostato', servicios: ['cambio-kit-de-distribucion'] },
  { id: 'toyota-4runner', vehiculo: 'Toyota 4Runner', titulo: 'Inspección pre compra', servicios: ['servicio-de-pre-compra'] },
  { id: 'nissan-march', vehiculo: 'Nissan March', titulo: 'Mantención por km', servicios: ['mantencion-por-km'] },
  { id: 'suzuki-baleno', vehiculo: 'Suzuki Baleno', titulo: 'Mantención por km, tapa fuga A/C y revisión técnica', servicios: ['mantencion-por-km', 'recarga-y-mantencion-de-aire-acondicionado', 'revision-tecnica-sin-estres'] },
  { id: 'mg-zs', vehiculo: 'MG ZS', titulo: 'Cambio de selectora de cambios', servicios: ['cambio-kit-de-embrague'] },
  { id: 'hino-xzu-425l', vehiculo: 'Camión Hino XZU 425L', titulo: 'Cambio kit de embrague', servicios: ['cambio-kit-de-embrague'] },
  { id: 'citroen-c3', vehiculo: 'Citroën C3', titulo: 'Cambio de discos y pastillas de freno delanteras', servicios: ['servicio-de-frenos-a-domicilio'] },
];

export const getTrabajosPorServicio = (servicioSlug: string): Trabajo[] =>
  trabajos.filter(t => t.servicios.includes(servicioSlug));

export const getTrabajosPorVehiculo = (vehiculoSlug: string): Trabajo[] =>
  trabajos.filter(t => t.id === vehiculoSlug);
