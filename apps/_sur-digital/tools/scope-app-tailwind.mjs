// Utilidad temporal: deja el CSS de cada app autocontenido. El paquete
// `@astro-config/index.css` activa Tailwind con detección automática desde el
// cwd, que en este proyecto es la raíz del sitio: cada app acababa generando
// las utilidades de las 780 (~15 MB incrustados por página). Aquí se sustituye
// ese import por el mismo bloque, pero con `source(none)` y un `@source`
// limitado a la carpeta de la app.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/apps");
const IMPORT = /@import\s+(["'])@astro-config\/index\.css\1\s*;?/;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith(".css")) out.push(p);
  }
  return out;
}

const posix = (from, to) => {
  const r = path.relative(path.dirname(from), to).split(path.sep).join("/");
  return r.startsWith(".") ? r : "./" + r;
};

const extra = [
  path.resolve("../../packages/@astro-components"),
  path.resolve("../../packages/@astro-icons"),
  path.resolve("../../apps/_sur-digital/src/@astro-components"),
].filter((p) => fs.existsSync(p));

const touched = [];
for (const file of walk(ROOT)) {
  const css = fs.readFileSync(file, "utf8");
  if (!IMPORT.test(css)) continue;

  const appDir = path.join(ROOT, path.relative(ROOT, file).split(path.sep)[0]);
  const block = [
    "@import 'tailwindcss' source(none);",
    "",
    `/* Solo las clases de esta app: el escaneo automático partiría del cwd y`,
    "   arrastraría las 780 webs de src/apps. */",
    `@source "${posix(file, appDir)}/";`,
    ...extra.map((p) => `@source "${posix(file, p)}";`),
    "",
    "@plugin 'daisyui';",
    "",
    "html {",
    "\tscroll-behavior: smooth;",
    "}",
  ].join("\n");

  fs.writeFileSync(file, css.replace(IMPORT, block));
  touched.push(path.relative(ROOT, file));
}

console.log(`CSS de app autocontenidos: ${touched.length}`);
console.log(`Fuentes compartidas: ${extra.map((p) => path.relative(path.resolve(".."), p)).join(", ")}`);
