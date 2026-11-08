// Utilidad temporal: acota el escaneo de Tailwind de cada app migrada a su
// propia carpeta. Sin esto, cada `@import "tailwindcss"` de una app genera las
// utilidades de las 780 (misma raíz de proyecto) y el build escupe ~20 MB de
// CSS incrustado por página.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/apps");
const IMPORT = /@import\s+(["'])tailwindcss\1\s*;/;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith(".css")) out.push(p);
  }
  return out;
}

let touched = 0;
for (const file of walk(ROOT)) {
  const css = fs.readFileSync(file, "utf8");
  if (!IMPORT.test(css)) continue;

  const appDir = path.join(ROOT, path.relative(ROOT, file).split(path.sep)[0]);
  // Ruta relativa desde el CSS hasta la raíz de su app, en formato POSIX.
  const rel = path.relative(path.dirname(file), appDir).split(path.sep).join("/") || ".";

  const next = css.replace(
    IMPORT,
    `@import "tailwindcss" source(none);\n\n/* Solo las clases de esta app: el resto vive en su propia hoja. */\n@source "${rel}/";`,
  );

  if (next !== css) {
    fs.writeFileSync(file, next);
    touched++;
  }
}

// La hoja del sitio ya excluye src/apps; se comprueba que sigue así.
const siteCss = fs.readFileSync(path.resolve("src/styles/global.css"), "utf8");
console.log(`CSS de app reescritos: ${touched}`);
console.log(`global.css excluye apps: ${siteCss.includes('@source not "../../src/apps/**"')}`);
