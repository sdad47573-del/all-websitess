// Utilidad temporal: quita el `---` de cierre pegado al final de la última
// línea del frontmatter (p. ej. `import X from './X.astro';---`).
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const ROOT = path.resolve("src/apps");
const APPLY = process.argv.includes("--apply");

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

function problemOf(lines) {
  if (lines[0].trim() !== "---") return null;
  const close = lines.findIndex((l, i) => i > 0 && l.trim() === "---");
  if (close === -1) return "sin cierre";
  try {
    esbuild.transformSync(lines.slice(1, close).join("\n"), {
      loader: "ts",
      target: "esnext",
      format: "esm",
    });
    return null;
  } catch (err) {
    return err.errors?.[0]?.text ?? String(err.message);
  }
}

const files = walk(ROOT);
const changed = [];
const still = [];

for (const f of files) {
  const lines = fs.readFileSync(f, "utf8").split(/\r?\n/);
  const before = problemOf(lines);
  if (!before) continue;

  const close = lines.findIndex((l, i) => i > 0 && l.trim() === "---");
  let target = -1;
  for (let i = close - 1; i >= Math.max(1, close - 3); i--) {
    if (lines[i].trim() === "" && i !== close - 1) break;
    if (/^.*[^\s-]---\s*$/.test(lines[i])) {
      target = i;
      break;
    }
  }
  if (target === -1) {
    still.push([f, before]);
    continue;
  }

  lines[target] = lines[target].replace(/\s*---\s*$/, "");
  const after = problemOf(lines);
  if (APPLY) fs.writeFileSync(f, lines.join("\n"));
  if (after) still.push([f, after]);
  else changed.push([f, path.relative(ROOT, f)]);
}

console.log(`Corregidos: ${changed.length}${APPLY ? " (aplicado)" : " (simulación)"} · siguen rotos: ${still.length}`);
for (const [f, m] of still.slice(0, 20)) console.log("·", path.relative(ROOT, f), "→", m);
