// Utilidad temporal: cada app importa `@astro-config/index.css`, que activa
// Tailwind. Como el cwd del build es la raíz del sitio, el escaneo automático
// recorre las 780 apps y cada hoja genera las utilidades de todas (~6 MB por
// app). Aquí se añade a cada app un `@source` acotado a su propia carpeta.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/apps");
const IMPORT = /@import\s+(["'])@astro-config\/index\.css\1\s*;/;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(css|astro)$/.test(p)) out.push(p);
  }
  return out;
}

const touched = [];
for (const file of walk(ROOT)) {
  const code = fs.readFileSync(file, "utf8");
  if (!IMPORT.test(code) || code.includes("@source \"../../\"")) continue;

  const appDir = path.join(ROOT, path.relative(ROOT, file).split(path.sep)[0]);
  const rel = path.relative(path.dirname(file), appDir).split(path.sep).join("/") || ".";

  // El @source va detrás del import y, en .astro, dentro del bloque <style>.
  const next = code.replace(
    IMPORT,
    (m) => `${m}\n\n/* Solo las clases de esta app (ver tools/scope-app-tailwind.mjs). */\n@source "${rel}/";`,
  );

  fs.writeFileSync(file, next);
  touched.push(path.relative(ROOT, file));
}

// La hoja compartida deja de escanear por su cuenta: cada app aporta su carpeta.
const shared = path.resolve("../../packages/@astro-config/index.css");
const sharedCss = fs.readFileSync(shared, "utf8");
if (!sharedCss.includes("source(none)")) {
  fs.writeFileSync(
    shared,
    sharedCss.replace(
      "@import 'tailwindcss';",
      "// El escaneo automático parte del cwd (la raíz del sitio) y arrastraría\n" +
        "// las 780 webs de src/apps. Cada app declara su propio @source.\n" +
        "@import 'tailwindcss' source(none);",
    ),
  );
}

console.log(`Apps con @source propio: ${touched.length}`);
console.log(touched.slice(0, 5).join("\n"));
