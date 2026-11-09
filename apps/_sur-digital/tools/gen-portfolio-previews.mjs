// Genera las portadas de los clientes que solo tienen landing propia. Son las
// 1.192 fichas de data/portfolio-apps.ts: las 96 curadas ya llevan su captura.
//
// Para cada landing se usa la primera foto panorámica de assets/fotos. Si la
// ficha no tiene fotos, se compone una portada de marca con la inicial del
// cliente y los colores de su categoría. El resultado va a public/clientes y se
// sirve como /clientes/<slug>.jpg, sin pasar por el optimizador de Astro.
//
// Uso (desde apps/_sur-digital):
//   node tools/gen-portfolio-previews.mjs
//   node tools/gen-portfolio-previews.mjs --force   (vuelve a generar todas)
//
// Es idempotente: sin --force no toca las portadas que ya existen.

import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const RAIZ = process.cwd();
const APPS = join(RAIZ, "src", "apps");
const SALIDA = join(RAIZ, "public", "clientes");
const DATOS = join(RAIZ, "src", "data", "portfolio-apps.ts");

const ANCHO = 640;
const ALTO = 288;
const CALIDAD = 74;
const fuerza = process.argv.includes("--force");

// data/portfolio-apps.ts ya excluye a los 96 curados: su tarjeta usa la
// captura de portfolio.ts y no necesita portada generada.
const fuente = readFileSync(DATOS, "utf8");
const declaracion = fuente.indexOf("PORTFOLIO_APPS");
const inicio = fuente.indexOf("= [", declaracion) + 2;
const apps = JSON.parse(fuente.slice(inicio, fuente.lastIndexOf("]") + 1));

const PALETAS = {
  "Restaurantes y bares": ["#1c1917", "#7c2d12", "#f59e0b"],
  "Peluquería y belleza": ["#1f1b24", "#6b21a8", "#f0abfc"],
  Comercio: ["#0f172a", "#0f766e", "#5eead4"],
  "Taller y motor": ["#0f172a", "#334155", "#cbd5e1"],
  "Servicios profesionales": ["#0b1220", "#1e40af", "#93c5fd"],
};

const escaparXml = (texto) =>
  String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const hash = (texto) => {
  let valor = 2166136261;
  for (const caracter of texto) {
    valor ^= caracter.charCodeAt(0);
    valor = Math.imul(valor, 16777619);
  }
  return valor >>> 0;
};

const portadaDeMarca = (app) => {
  const [fondo, medio, acento] = PALETAS[app.category] ?? PALETAS["Servicios profesionales"];
  const semilla = hash(app.slug);
  const inicial = (app.title.trim()[0] ?? "?").toUpperCase();
  const circuloX = 80 + (semilla % 480);
  const circuloY = 40 + ((semilla >>> 9) % 200);
  const circuloR = 70 + ((semilla >>> 17) % 90);
  const linea = 180 + ((semilla >>> 5) % 260);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${ANCHO}" height="${ALTO}" viewBox="0 0 ${ANCHO} ${ALTO}">
  <defs>
    <linearGradient id="fondo" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="${fondo}"/>
      <stop offset="0.55" stop-color="${medio}"/>
      <stop offset="1" stop-color="${acento}"/>
    </linearGradient>
    <radialGradient id="luz" cx="0.82" cy="0.18" r="0.78">
      <stop stop-color="${acento}" stop-opacity="0.55"/>
      <stop offset="1" stop-color="${acento}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${ANCHO}" height="${ALTO}" fill="url(#fondo)"/>
  <rect width="${ANCHO}" height="${ALTO}" fill="url(#luz)"/>
  <circle cx="${circuloX}" cy="${circuloY}" r="${circuloR}" fill="none" stroke="#fff" stroke-opacity="0.16" stroke-width="2"/>
  <circle cx="${linea}" cy="${ALTO - 34}" r="${circuloR / 2}" fill="none" stroke="#fff" stroke-opacity="0.1" stroke-width="2"/>
  <text x="42" y="218" font-family="Arial, Helvetica, sans-serif" font-size="170" font-weight="800" fill="#fff" fill-opacity="0.92">${escaparXml(inicial)}</text>
  <text x="46" y="252" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="700" letter-spacing="3" fill="#fff" fill-opacity="0.62">SUR DIGITAL</text>
</svg>`;

  return svg;
};

const fotosDe = (slug) => {
  const directorio = join(APPS, slug, "assets", "fotos");
  if (!existsSync(directorio)) return [];
  return readdirSync(directorio)
    .filter((nombre) => /\.(jpe?g|png|webp)$/i.test(nombre))
    .sort((a, b) => {
      const rango = (nombre) =>
        /panoramica/i.test(nombre) ? 0 : /apaisada/i.test(nombre) ? 1 : /cuadrada/i.test(nombre) ? 2 : 3;
      return rango(a) - rango(b) || a.localeCompare(b, "es");
    });
};

const escribir = async (buffer, destino) => {
  const temporal = `${destino}.tmp`;
  writeFileSync(temporal, buffer);
  rmSync(destino, { force: true });
  renameSync(temporal, destino);
};

mkdirSync(SALIDA, { recursive: true });

const pendientes = apps.filter((app) => {
  if (!existsSync(join(APPS, app.slug, "pages", "index.astro"))) {
    console.warn(`  ${app.slug}: no tiene pages/index.astro, se omite`);
    return false;
  }
  return fuerza || !existsSync(join(SALIDA, `${app.slug}.jpg`));
});

console.log(`Portadas pendientes: ${pendientes.length} de ${apps.length} clientes.`);

let cursor = 0;
let generadas = 0;
let conFoto = 0;
let deMarca = 0;
let errores = 0;

const trabajar = async () => {
  while (cursor < pendientes.length) {
    const app = pendientes[cursor++];
    const destino = join(SALIDA, `${app.slug}.jpg`);
    const fotos = fotosDe(app.slug);
    try {
      if (fotos.length) {
        const origen = join(APPS, app.slug, "assets", "fotos", fotos[0]);
        let buffer;
        try {
          buffer = await sharp(origen, { failOn: "none" })
            .rotate()
            .resize(ANCHO, ALTO, { fit: "cover", position: "attention" })
            .jpeg({ quality: CALIDAD, mozjpeg: true })
            .toBuffer();
        } catch {
          buffer = await sharp(origen, { failOn: "none" })
            .rotate()
            .resize(ANCHO, ALTO, { fit: "cover", position: "centre" })
            .jpeg({ quality: CALIDAD, mozjpeg: true })
            .toBuffer();
        }
        await escribir(buffer, destino);
        conFoto++;
      } else {
        const buffer = await sharp(Buffer.from(portadaDeMarca(app)))
          .jpeg({ quality: CALIDAD, mozjpeg: true })
          .toBuffer();
        await escribir(buffer, destino);
        deMarca++;
      }
      generadas++;
      if (generadas % 100 === 0) {
        console.log(`  ${generadas}/${pendientes.length} portadas…`);
      }
    } catch (error) {
      errores++;
      console.error(`  ${app.slug}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
};

await Promise.all(Array.from({ length: 6 }, trabajar));

const archivos = readdirSync(SALIDA).filter((nombre) => nombre.endsWith(".jpg"));
const bytes = archivos.reduce((total, nombre) => total + statSync(join(SALIDA, nombre)).size, 0);
console.log(
  `Portadas: ${generadas} generadas (${conFoto} con foto, ${deMarca} de marca), ${errores} errores.`,
);
console.log(`Directorio: ${archivos.length} imágenes · ${(bytes / 1024 / 1024).toFixed(1)} MB.`);

if (errores) process.exitCode = 1;
