// Medición temporal: cuánto cuesta codificar una foto en AVIF vs WebP vs JPEG.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const appsDir = path.join(process.cwd(), "src", "apps");
const fotos = [];
for (const slug of fs.readdirSync(appsDir)) {
  const assetsDir = path.join(appsDir, slug, "assets", "fotos");
  if (!fs.existsSync(assetsDir)) continue;
  for (const f of fs.readdirSync(assetsDir)) {
    if (/\.(jpe?g|png)$/i.test(f) && fotos.length < 6) fotos.push(path.join(assetsDir, f));
  }
  if (fotos.length >= 6) break;
}

const anchos = [320, 640, 900, 1200];
const formatos = [
  ["avif", { quality: 65 }],
  ["webp", { quality: 65 }],
  ["jpeg", { quality: 70, mozjpeg: true }],
];

for (const formato of formatos) {
  const total = { ms: 0, bytes: 0, n: 0 };
  for (const foto of fotos) {
    const meta = await sharp(foto).metadata();
    for (const ancho of anchos) {
      if (ancho > (meta.width ?? ancho)) continue;
      const t0 = performance.now();
      const buf = await sharp(foto)
        .resize({ width: ancho })
        .toFormat(formato[0], formato[1])
        .toBuffer();
      total.ms += performance.now() - t0;
      total.bytes += buf.length;
      total.n++;
    }
  }
  const media = total.ms / total.n;
  console.log(
    `${formato[0].padEnd(5)} ${total.n} codificaciones  ${total.ms.toFixed(0)} ms total  ${media.toFixed(0)} ms/imagen  ${(total.bytes / 1024 / 1024).toFixed(2)} MB`,
  );
}
