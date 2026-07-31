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

-- Tabla de testimonios / reseñas
CREATE TABLE IF NOT EXISTS dra_testimonios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  autor TEXT NOT NULL,
  comuna TEXT,
  servicio_slug TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  texto TEXT,
  fecha TEXT,
  activo INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
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

-- ============================================================
-- Índices para optimización de consultas
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_dra_leads_comuna ON dra_leads(comuna);
CREATE INDEX IF NOT EXISTS idx_dra_leads_servicio ON dra_leads(servicio_solicitado);
CREATE INDEX IF NOT EXISTS idx_dra_leads_estado ON dra_leads(estado);
CREATE INDEX IF NOT EXISTS idx_dra_leads_fecha ON dra_leads(created_at);
CREATE INDEX IF NOT EXISTS idx_dra_testimonios_comuna ON dra_testimonios(comuna);
CREATE INDEX IF NOT EXISTS idx_dra_testimonios_servicio ON dra_testimonios(servicio_slug);
CREATE INDEX IF NOT EXISTS idx_dra_galeria_servicio ON dra_galeria(servicio_slug);
CREATE INDEX IF NOT EXISTS idx_dra_galeria_comuna ON dra_galeria(comuna);

-- ============================================================
-- Seed inicial: 10 servicios
-- ============================================================
INSERT OR IGNORE INTO dra_servicios (slug, nombre, categoria, descripcion_corta, icono, orden) VALUES
  ('mecanica-general-a-domicilio', 'Mecánica General a Domicilio', 'Servicio a Domicilio', 'Diagnóstico y reparación general de fallas mecánicas directamente en tu casa o trabajo.', '🔧', 1),
  ('escaner-y-diagnostico-computarizado', 'Escáner y Diagnóstico Computarizado', 'Diagnóstico', 'Lectura de códigos de falla, borrado de testigos y análisis electrónico avanzado con scanner automotriz.', '💻', 2),
  ('mantencion-preventiva-y-afinamiento', 'Mantención Preventiva y Afinamiento', 'Mantenimiento', 'Cambio de aceite, filtros, bujías y revisión general para alargar la vida útil del motor.', '🛢️', 3),
  ('servicio-de-frenos-a-domicilio', 'Servicio de Frenos a Domicilio', 'Reparación', 'Cambio de pastillas, rectificación de discos, líquido de frenos y revisión de seguridad.', '🛑', 4),
  ('revision-y-cambio-de-bateria', 'Revisión y Cambio de Batería', 'Sistema Eléctrico', 'Testeo de alternador, sistema de carga y reemplazo de batería en terreno.', '🔋', 5),
  ('suspension-y-tren-delantero', 'Suspensión y Tren Delantero', 'Reparación', 'Cambio de amortiguadores, bandejas, terminales y terminales de dirección.', '🚗', 6),
  ('sistema-de-refrigeracion', 'Sistema de Refrigeración', 'Motor / Radiador', 'Reparación de fugas, cambio de bomba de agua, termostato y líquido refrigerante.', '💧', 7),
  ('inyeccion-electronica-y-limpieza', 'Inyección Electrónica y Limpieza', 'Motor', 'Ultrasonido y calibración de inyectores, cuerpo de aceleración y control de emisiones.', '⚙️', 8),
  ('auxilio-mecanico-24-7', 'Auxilio Mecánico 24/7 y Urgencias', 'Asistencia', 'Asistencia en ruta y terreno para vehículos detenidos o con fallas imprevistas en Santiago.', '🆘', 9),
  ('correa-o-cadena-de-distribucion', 'Correa / Cadena de Distribución', 'Motor', 'Sustitución programada de kit de distribución y correas auxiliares para evitar daños graves.', '⛓️', 10);

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
-- Seed inicial: testimonios de ejemplo
-- ============================================================
INSERT OR IGNORE INTO dra_testimonios (autor, comuna, servicio_slug, rating, texto, fecha) VALUES
  ('Carlos Muñoz', 'Las Condes', 'mecanica-general-a-domicilio', 5, 'Excelente servicio. Mi auto no arrancaba una mañana antes del trabajo y el mecánico llegó en 40 minutos. Muy profesional y precio justo.', '2025-03-15'),
  ('María José Pérez', 'Providencia', 'mantencion-preventiva-y-afinamiento', 5, 'Me hicieron la mantención completa en el estacionamiento de mi oficina. Aceite Mobil 1, filtros originales, todo impecable.', '2025-02-28'),
  ('Rodrigo Silva', 'Ñuñoa', 'escaner-y-diagnostico-computarizado', 5, 'Tenía la luz de Check Engine encendida hace semanas. El escáner detectó que era solo un sensor de oxígeno. Honestos y profesionales.', '2025-04-10'),
  ('Francisca Rojas', 'Vitacura', 'servicio-de-frenos-a-domicilio', 5, 'Sentía que los frenos no respondían bien. Cambiaron pastillas delanteras, rectificaron discos y cambiaron el líquido. Trabajo impecable.', '2025-01-22'),
  ('Ignacio Fuentes', 'La Florida', 'auxilio-mecanico-24-7', 5, 'Me quedé tirado a las 11 de la noche en Vespucio. En 50 minutos llegó el mecánico. Era el alternador. Salvadores.', '2025-05-03');
