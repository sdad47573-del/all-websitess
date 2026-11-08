// Utilidad temporal: convierte los imports con alias (@assets, @astro-icons,
// @astro-components) a rutas relativas dentro de la propia app.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/apps");
const EXTS = ["", ".astro", ".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".svg", ".webp", ".png", ".jpg"];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(astro|ts|tsx|js|mjs)$/.test(p)) out.push(p);
  }
  return out;
}

const firstExisting = (base) => EXTS.map((e) => base + e).find((p) => fs.existsSync(p)) ?? null;

function rel(from, to) {
  const r = path.relative(path.dirname(from), to).split(path.sep).join("/");
  return r.startsWith(".") ? r : "./" + r;
}

const files = walk(ROOT);
const rewritten = [];
const unresolved = [];

for (const f of files) {
  const appDir = path.relative(ROOT, f).split(path.sep)[0];
  const base = path.join(ROOT, appDir);
  const code = fs.readFileSync(f, "utf8");
  let next = code;

  // Alias con subruta: @assets/x, @astro-icons/x, @astro-components/x
  next = next.replace(/(["'])(@assets\/)([^"']+)\1/g, (full, q, _p, rest) => {
    const target = firstExisting(path.join(base, "@assets", rest));
    if (!target) return unresolved.push([f, `@assets/${rest}`]), full;
    return q + rel(f, target) + q;
  });

  next = next.replace(/(["'])(@astro-icons\/)([^"']+)\1/g, (full, q, _p, rest) => {
    const target =
      firstExisting(path.join(base, "@astro-icons", rest)) ??
      firstExisting(path.join(base, "@astro-icons", "src", rest));
    if (!target) return unresolved.push([f, `@astro-icons/${rest}`]), full;
    return q + rel(f, target) + q;
  });

  next = next.replace(/(["'])(@astro-components\/[^"']+)\1/g, (full, q, spec) => {
    const rest = spec.slice("@astro-components/".length);
    const target =
      firstExisting(path.join(base, "@astro-components", rest)) ??
      firstExisting(path.join(base, "@astro-components", "src", rest));
    if (!target) return unresolved.push([f, spec]), full;
    return q + rel(f, target) + q;
  });

  // Alias sin subruta: solo si la app lleva su propia copia del paquete.
  next = next.replace(/(["'])(@assets|@astro-icons|@astro-components)\1/g, (full, q, spec) => {
    const target = firstExisting(path.join(base, spec, "index"));
    if (!target) return full; // no hay copia local: lo resuelve el workspace
    return q + rel(f, target) + q;
  });

  if (next !== code) {
    fs.writeFileSync(f, next);
    rewritten.push(path.relative(ROOT, f));
  }
}

console.log(`Reescritos: ${rewritten.length} · alias locales sin resolver: ${unresolved.length}`);
for (const [f, spec] of unresolved.slice(0, 10)) console.log("?", path.relative(ROOT, f), "→", spec);
