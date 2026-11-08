// Utilidad temporal: comprueba que los imports relativos a assets de las apps
// migradas apuntan a ficheros que existen.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/apps");
const EXT = /\.(jpe?g|png|webp|avif|svg|gif|mp4|webm|woff2?|ttf|json|css)$/i;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(astro|ts|tsx|js|mjs|vue|svelte)$/.test(p)) out.push(p);
  }
  return out;
}

const files = walk(ROOT);
const missing = [];

for (const f of files) {
  const code = fs.readFileSync(f, "utf8");
  const re = /(?:from\s+|import\s*\(\s*|src=\s*|url\(\s*)["'](\.{1,2}\/[^"']+)["']/g;
  let m;
  while ((m = re.exec(code))) {
    const spec = m[1];
    if (!EXT.test(spec)) continue;
    const target = path.resolve(path.dirname(f), spec);
    if (fs.existsSync(target)) continue;
    const line = code.slice(0, m.index).split("\n").length;
    // Sugerencia: mismos dígitos de nombre, otra extensión.
    const dir = path.dirname(target);
    const base = path.basename(target, path.extname(target));
    let hint = "";
    if (fs.existsSync(dir)) {
      const near = fs.readdirSync(dir).filter((n) => n.startsWith(base.slice(0, Math.max(6, base.length - 4))));
      if (near.length) hint = ` (parecidos: ${near.slice(0, 3).join(", ")})`;
    }
    missing.push([f, line, spec, hint]);
  }
}

console.log(`Ficheros: ${files.length} · imports rotos: ${missing.length}`);
for (const [f, line, spec, hint] of missing.slice(0, 25)) {
  console.log(`· ${path.relative(ROOT, f)}:${line} → ${spec}${hint}`);
}
