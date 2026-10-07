// Genera los iconos que la web sirve de public/. Se ejecuta a mano cuando
// cambia el logo:  node tools/generate-icons.mjs
//
// Hasta ahora public/favicon.png era un PNG de 295×295 y 68 KB, que se
// descargaba en cada visita solo para pintarse a 16-48 px. Aquí se generan las
// medidas que los navegadores piden de verdad, más el apple-touch-icon que
// iOS no tenía.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { rename } from "node:fs/promises";

const SOURCE = "public/favicon.png";

const TARGETS = [
  { out: "public/favicon-16x16.png", size: 16 },
  { out: "public/favicon-32x32.png", size: 32 },
  { out: "public/favicon.png", size: 48 },
  { out: "public/apple-touch-icon.png", size: 180 },
  // Imagen para los datos estructurados: Google pide >= 112x112 para el logo.
  { out: "public/logo-512.png", size: 512 },
];

await mkdir("public", { recursive: true });

for (const { out, size } of TARGETS) {
  // Se escribe a un temporal porque uno de los destinos es el propio origen:
  // sharp no permite leer y escribir el mismo archivo.
  const tmp = `${out}.tmp.png`;
  await sharp(SOURCE)
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9, palette: true })
    .toFile(tmp);
  await rename(tmp, out);
  console.log(`${out}  ${size}x${size}`);
}

// El wordmark del footer y el de la cabecera, reducidos a las medidas en las
// que se muestran, para no servir 160 KB a 96 px de ancho.
for (const [src, out, width] of [
  ["src/assets/logo.png", "src/assets/logo-optimized.png", 288],
  ["src/assets/logoreverse.png", "src/assets/logoreverse-optimized.png", 384],
]) {
  const meta = await sharp(src).metadata();
  await sharp(src)
    .resize({ width })
    .png({ compressionLevel: 9, palette: true })
    .toFile(out);
  console.log(
    `${out}  ${width}x${Math.round((width * meta.height) / meta.width)} (antes ${meta.width}x${meta.height})`
  );
}