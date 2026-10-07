import type { AstroIntegration } from "astro";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Genera variantes cuadradas 1080×1080 (Instagram) de las imágenes OG
// 1200×630 tras el build. Cada PNG dentro de og/ recibe su copia con
// sufijo ".square.png" junto a él.
//
// Composición: la misma tarjeta, recortada y desenfocada, como fondo
// cuadrado; la tarjeta completa centrada encima. Así el texto nunca se
// corta y el resultado tiene el look estándar de las publicaciones de red.

export function socialCards(): AstroIntegration {
  return {
    name: "social-cards",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const ogDir = path.join(urlToPath(dir), "og");
        if (!fs.existsSync(ogDir)) {
          logger.warn("social-cards: no se encontró la carpeta /og");
          return;
        }

        // Recoge todos los PNG que aún no sean variantes .square
        const pngs: string[] = [];
        (function walk(dirPath: string) {
          for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
            const full = path.join(dirPath, entry.name);
            if (entry.isDirectory()) walk(full);
            else if (entry.name.endsWith(".png") && !entry.name.includes(".square."))
              pngs.push(full);
          }
        })(ogDir);

        let count = 0;
        for (const file of pngs) {
          const out = file.replace(/\.png$/, ".square.png");

          // Fondo: recorte a cuadrado, desenfocado y ligeramente oscurecido
          const background = await sharp(file)
            .resize(1080, 1080, { fit: "cover" })
            .blur(24)
            .modulate({ brightness: 0.85, saturation: 1.15 })
            .toBuffer();

          // Primer plano: tarjeta completa a 1080 de ancho (queda a 567 de alto)
          const foreground = await sharp(file)
            .resize(1080, 567, { fit: "fill" })
            .toBuffer();

          await sharp(background)
            .composite([{ input: foreground, gravity: "centre" }])
            .png()
            .toFile(out);
          count++;
        }

        logger.info(`social-cards: ${count} tarjetas cuadradas generadas`);
      },
    },
  };
}

// Convierte la URL del hook a ruta de Windows
function urlToPath(dir: URL | string): string {
  const p = typeof dir === "string" ? dir : dir.pathname;
  return decodeURIComponent(p.replace(/^\/([A-Za-z]:)/, "$1")).replace(/\\/g, "/");
}
