#!/usr/bin/env node
// ============================================================
// Procesa las fotos de una ficha de trabajo realizado.
//
//   node .claude/skills/fichas-trabajos/procesar-fotos.cjs grilla <foto.jpg> <salida.jpg>
//     Dibuja una grilla en % (cada 5%) para ubicar patentes.
//
//   node .claude/skills/fichas-trabajos/procesar-fotos.cjs ficha <config.json>
//     Copia, pixela patentes, recorta franjas negras, genera .jpeg + .webp
//     y la portada del catálogo (700x430). Ver formato de config en SKILL.md.
// ============================================================
const path = require('path');
const fs = require('fs');
const sharp = require(path.join(process.cwd(), 'node_modules', 'sharp'));

async function grilla(src, out) {
  const m = await sharp(src).metadata();
  const W = 800, H = Math.round(m.height * W / m.width);
  let svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;
  for (let i = 1; i < 20; i++) {
    const x = W * i / 20, y = H * i / 20, c = i % 2 ? 'rgba(255,255,0,0.35)' : 'rgba(0,255,255,0.8)';
    svg += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${c}"/><line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${c}"/>`;
    if (i % 2 === 0) svg += `<text x="${x + 2}" y="12" fill="#0ff" font-size="11">${i * 5}</text><text x="2" y="${y - 2}" fill="#0ff" font-size="11">${i * 5}</text>`;
  }
  svg += '</svg>';
  await sharp(src).rotate().resize(W).composite([{ input: Buffer.from(svg) }]).jpeg().toFile(out);
  console.log(`grilla: ${out} (${m.width}x${m.height})`);
}

// Quita filas casi negras arriba/abajo (capturas de video/historias)
async function sinFranjas(buf) {
  const { data, info } = await sharp(buf).greyscale().raw().toBuffer({ resolveWithObject: true });
  const oscura = y => { let s = 0; for (let x = 0; x < info.width; x++) s += data[y * info.width + x]; return s / info.width < 18; };
  let top = 0, bot = info.height - 1;
  while (top < info.height && oscura(top)) top++;
  while (bot > top && oscura(bot)) bot--;
  if (top === 0 && bot === info.height - 1) return buf;
  return sharp(buf).extract({ left: 0, top, width: info.width, height: bot - top + 1 }).toBuffer();
}

// Pixela zonas [x0, y0, x1, y1] en % del ancho/alto
async function pixelar(buf, zonas = []) {
  if (!zonas.length) return buf;
  const { width: W, height: H } = await sharp(buf).metadata();
  const comps = [];
  for (const [x0, y0, x1, y1] of zonas) {
    const left = Math.max(0, Math.floor(W * x0 / 100)), top = Math.max(0, Math.floor(H * y0 / 100));
    const width = Math.min(W - left, Math.ceil(W * (x1 - x0) / 100)), height = Math.min(H - top, Math.ceil(H * (y1 - y0) / 100));
    const small = await sharp(buf).extract({ left, top, width, height }).resize(Math.max(2, Math.round(width / 14)), Math.max(2, Math.round(height / 14))).toBuffer();
    comps.push({ input: await sharp(small).resize(width, height, { kernel: 'nearest' }).blur(3).toBuffer(), left, top });
  }
  return sharp(buf).composite(comps).toBuffer();
}

async function ficha(configPath) {
  const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const dir = path.join(process.cwd(), 'public', 'imagen', 'nuevoset', cfg.id);
  fs.mkdirSync(dir, { recursive: true });
  for (const f of cfg.fotos) {
    let buf = await sharp(f.origen).rotate().toBuffer();
    if (f.recortarFranjas) buf = await sinFranjas(buf);
    buf = await pixelar(buf, f.patentes);
    if (f.brillo) buf = await sharp(buf).modulate({ brightness: f.brillo }).toBuffer();
    const base = path.join(dir, cfg.prefijo + (f.sufijo || ''));
    await sharp(buf).jpeg({ quality: 90 }).toFile(base + '.jpeg');
    await sharp(buf).resize({ width: 1280, height: 1280, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(base + '.webp');
    const m = await sharp(buf).metadata();
    console.log(`${path.basename(base)}.webp  ${m.width}x${m.height}${f.patentes?.length ? '  (patente pixelada)' : ''}`);
  }
  if (cfg.portada) {
    const src = path.join(dir, cfg.prefijo + (cfg.portada.sufijo || '') + '.jpeg');
    const out = path.join(process.cwd(), 'public', 'imagen', 'vehiculos', `drautomotriz-${cfg.id}.webp`);
    let img = sharp(src);
    if (cfg.portada.recorte) {
      const { width: W, height: H } = await img.metadata();
      const [x0, y0, x1] = cfg.portada.recorte; // % ; alto se calcula para 700x430
      const left = Math.floor(W * x0 / 100), top = Math.floor(H * y0 / 100), width = Math.floor(W * (x1 - x0) / 100);
      img = sharp(src).extract({ left, top, width, height: Math.min(H - top, Math.round(width * 430 / 700)) }).resize(700, 430);
    } else {
      img = img.resize(700, 430, { fit: 'cover', position: sharp.strategy.attention });
    }
    await img.webp({ quality: 80 }).toFile(out);
    console.log(`portada: ${path.relative(process.cwd(), out)}`);
  }
}

const [cmd, a, b] = process.argv.slice(2);
(cmd === 'grilla' ? grilla(a, b) : cmd === 'ficha' ? ficha(a) : Promise.reject(new Error('uso: grilla <foto> <salida> | ficha <config.json>')))
  .catch(e => { console.error(e.message); process.exit(1); });
