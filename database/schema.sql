-- ============================================================
-- DRAUTOMOTRIZ - Cloudflare D1 Database Schema
-- ============================================================
-- Tablas para gestionar leads, servicios, testimonios y galería.
-- Todas las tablas usan prefijo "dra_" para identificación.
--
-- NOTAS:
-- - R2 Bucket para imágenes: drautomotriz-images
--   Carpeta dentro del bucket: usar prefijo "drautomotriz/"
--   Ruta ejemplo: r2://drautomotriz/galeria/scanner-las-condes-01.webp
-- - Esta base de datos se crea con:
--   wrangler d1 create drautomotriz-db
--   wrangler d1 execute drautomotriz-db --file=./database/schema.sql
-- ============================================================

-- Tabla de servicios (catálogo)
CREATE TABLE IF NOT EXISTS dra_servicios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  nombre TEXT NOT NULL,
  categoria TEXT,
  descripcion_corta TEXT,
  icono TEXT,
  activo INTEGER DEFAULT 1,
  orden INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Tabla de comunas cubiertas
CREATE TABLE IF NOT EXISTS dra_comunas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  nombre TEXT NOT NULL,
  zona TEXT,
  descripcion TEXT,
  activa INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Tabla principal de leads / contactos
CREATE TABLE IF NOT EXISTS dra_leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  telefono TEXT NOT NULL,
  comuna TEXT,
  vehiculo_marca TEXT,
  vehiculo_modelo TEXT,
  servicio_solicitado TEXT,
  detalle_falla TEXT,
  fecha_preferida TEXT,
  fuente TEXT DEFAULT 'web',
  estado TEXT DEFAULT 'nuevo',
  ip_address TEXT,
  user_agent TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Tabla de galería de trabajos (referencias a R2)
CREATE TABLE IF NOT EXISTS dra_galeria (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  servicio_slug TEXT,
  comuna TEXT,
  descripcion TEXT,
  r2_key TEXT NOT NULL,
  url_publica TEXT,
  orden INTEGER DEFAULT 0,
  activo INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Tabla de servicios destacados (controla cuáles aparecen como estrella en home)
CREATE TABLE IF NOT EXISTS dra_servicios_destacados (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  servicio_slug TEXT UNIQUE NOT NULL,
  orden INTEGER DEFAULT 0,
  activo INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);

-- ============================================================
-- Índices para optimización de consultas
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_dra_leads_comuna ON dra_leads(comuna);
CREATE INDEX IF NOT EXISTS idx_dra_leads_servicio ON dra_leads(servicio_solicitado);
CREATE INDEX IF NOT EXISTS idx_dra_leads_estado ON dra_leads(estado);
CREATE INDEX IF NOT EXISTS idx_dra_leads_fecha ON dra_leads(created_at);
CREATE INDEX IF NOT EXISTS idx_dra_galeria_servicio ON dra_galeria(servicio_slug);
CREATE INDEX IF NOT EXISTS idx_dra_galeria_comuna ON dra_galeria(comuna);

-- ============================================================
-- Seed inicial: 14 servicios (1 destacado + 13 prioritarios)
-- ============================================================
INSERT OR IGNORE INTO dra_servicios (slug, nombre, categoria, descripcion_corta, icono, orden) VALUES
  ('revision-tecnica-sin-estres', 'Revisión Técnica Sin Estrés', 'Servicio Especial', 'Retiramos tu vehículo, lo llevamos a la planta de revisión técnica y te lo devolvemos con el documento aprobado.', '📋', 1),
  ('mantencion-por-km', 'Mantención por Kilometraje', 'Mantenimiento', 'Mantenciones programadas según el kilometraje: 10k, 20k, 40k, 60k y 100k km.', '📊', 2),
  ('servicio-de-revision-tecnica', 'Servicio de Revisión Técnica', 'Trámites', 'Coordinación y asesoría completa para que tu auto pase la revisión técnica al primer intento.', '📝', 3),
  ('servicio-de-pre-compra', 'Servicio de Pre-Compra', 'Diagnóstico', 'Inspección técnica completa antes de comprar un auto usado.', '🔍', 4),
  ('servicio-de-frenos-a-domicilio', 'Frenos a Domicilio', 'Reparación', 'Cambio de pastillas, rectificación de discos, líquido de frenos y revisión de seguridad.', '🛑', 5),
  ('tren-delantero', 'Tren Delantero', 'Reparación', 'Cambio de bandejas, terminales, rótulas, pivotes y bujes del tren delantero.', '⚙️', 6),
  ('escaner-para-autos-y-camiones', 'Escáner para Autos y Camiones', 'Diagnóstico', 'Diagnóstico computarizado multimarca para autos livianos, SUVs, camionetas y vehículos pesados.', '💻', 7),
  ('recarga-y-mantencion-de-aire-acondicionado', 'Recarga y Mantención de Aire Acondicionado', 'Climatización', 'Recarga de gas refrigerante, limpieza de conductos, cambio de filtros y reparación de compresor.', '❄️', 8),
  ('direccion-y-suspension', 'Dirección y Suspensión', 'Reparación', 'Cambio de amortiguadores, espirales, cremallera, bomba de dirección hidráulica y rótulas.', '🚗', 9),
  ('cambio-kit-de-distribucion', 'Cambio Kit de Distribución', 'Motor', 'Cambio completo de kit de distribución: correa/cadena, tensor, rodillos y bomba de agua.', '⛓️', 10),
  ('cambio-kit-de-embrague', 'Cambio Kit de Embrague', 'Transmisión', 'Cambio completo de kit de embrague: disco, prensa, collarín y cilindro hidráulico.', '🪖', 11),
  ('venta-de-aceites-motor', 'Venta de Aceites Motor', 'Productos', 'Venta y entrega de aceites motor sintéticos, semisintéticos y minerales de marcas premium.', '🛢️', 12),
  ('pulido-de-opticos-focos-delanteros', 'Pulido de Ópticos (Focos Delanteros)', 'Estética', 'Restauración y pulido de focos delanteros amarillentos o rayados.', '💡', 13),
  ('diagnosticos', 'Diagnósticos', 'Diagnóstico', 'Diagnóstico mecánico, electrónico y visual completo para identificar cualquier falla.', '🔬', 14);

-- ============================================================
-- Seed inicial: comunas
-- ============================================================
INSERT OR IGNORE INTO dra_comunas (slug, nombre, zona) VALUES
  ('las-condes', 'Las Condes', 'Oriente'),
  ('providencia', 'Providencia', 'Oriente'),
  ('vitacura', 'Vitacura', 'Oriente'),
  ('lo-barnechea', 'Lo Barnechea', 'Oriente'),
  ('nunoa', 'Ñuñoa', 'Oriente'),
  ('la-reina', 'La Reina', 'Oriente'),
  ('santiago-centro', 'Santiago Centro', 'Centro'),
  ('recoleta', 'Recoleta', 'Centro'),
  ('independencia', 'Independencia', 'Centro'),
  ('estacion-central', 'Estación Central', 'Centro'),
  ('huechuraba', 'Huechuraba', 'Norte'),
  ('quilicura', 'Quilicura', 'Norte'),
  ('conchali', 'Conchalí', 'Norte'),
  ('la-florida', 'La Florida', 'Sur'),
  ('puente-alto', 'Puente Alto', 'Sur'),
  ('la-cisterna', 'La Cisterna', 'Sur'),
  ('san-miguel', 'San Miguel', 'Sur'),
  ('san-bernardo', 'San Bernardo', 'Sur'),
  ('maipu', 'Maipú', 'Poniente'),
  ('pudahuel', 'Pudahuel', 'Poniente'),
  ('cerro-navia', 'Cerro Navia', 'Poniente'),
  ('lo-prado', 'Lo Prado', 'Poniente'),
  ('renca', 'Renca', 'Poniente'),
  ('quinta-normal', 'Quinta Normal', 'Poniente'),
  ('penalolen', 'Peñalolén', 'Oriente'),
  ('macul', 'Macul', 'Oriente'),
  ('colina', 'Colina', 'Norte'),
  ('lampa', 'Lampa', 'Norte');

-- ============================================================
-- Seed inicial: servicio destacado
-- ============================================================
INSERT OR IGNORE INTO dra_servicios_destacados (servicio_slug, orden) VALUES
  ('revision-tecnica-sin-estres', 1);

