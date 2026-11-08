// Utilidad temporal: valida el frontmatter de los .astro migrados con esbuild.
// El compilador de Astro no detecta declaraciones duplicadas; esbuild sí.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const ROOT = path.resolve("src/apps");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith(".astro")) out.push(p);
  }
  return out;
}

function loadEsbuild() {
  const req = createRequire(import.meta.url);
  try {
    return req("esbuild");
  } catch {}
  let dir = ROOT;
  for (;;) {
    const store = path.join(dir, "node_modules", ".bun");
    if (fs.existsSync(store)) {
      const hit = fs
        .readdirSync(store)
        .filter((n) => n.startsWith("esbuild@"))
        .map((n) => path.join(store, n, "node_modules", "esbuild"))
        .find((p) => fs.existsSync(path.join(p, "package.json")));
      if (hit) return req(path.join(hit, "lib", "main.js"));
    }
    const up = path.dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  return null;
}

const esbuild = loadEsbuild();
if (!esbuild) {
  console.log("esbuild no disponible");
  process.exit(0);
}

const files = walk(ROOT);
const errors = [];

for (const f of files) {
  const lines = fs.readFileSync(f, "utf8").split(/\r?\n/);
  if (lines[0].trim() !== "---") continue;
  const close = lines.findIndex((l, i) => i > 0 && l.trim() === "---");
  if (close === -1) {
    errors.push([f, 1, "sin cierre de frontmatter"]);
    continue;
  }
  const code = lines.slice(1, close).join("\n");
  const offset = 1; // el frontmatter empieza en la línea 2
  try {
    esbuild.transformSync(code, { loader: "ts", target: "esnext", format: "esm" });
  } catch (err) {
    for (const e of err.errors ?? [{ text: String(err.message) }]) {
      errors.push([f, offset + (e.location?.line ?? 1), e.text]);
    }
  }
}

console.log(`Ficheros con frontmatter: ${files.length} · errores: ${errors.length}`);
for (const [f, line, text] of errors.slice(0, 25)) {
  console.log(`· ${path.relative(ROOT, f)}:${line} → ${text}`);
}
