// Utilidad temporal: repara los .astro que quedaron con el cierre de frontmatter
// mal colocado por las pasadas anteriores.
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

const marksOf = (lines) =>
  lines.map((l, i) => (i > 0 && l.trim() === "---" ? i : -1)).filter((i) => i > 0);

const files = walk(ROOT);
const log = [];
const still = [];

for (const f of files) {
  const original = fs.readFileSync(f, "utf8");
  const lines = original.split(/\r?\n/);
  if (!problemOf(lines)) continue;
  const rel = path.relative(ROOT, f);

  // 1. Cierre pegado a una etiqueta: `---\t<CustomLayout`.
  const glued = lines.findIndex((l, i) => i > 0 && /^---\s+\S/.test(l));
  if (glued !== -1) {
    lines.splice(glued, 1, "---", lines[glued].replace(/^---\s+/, ""));
    const marks = marksOf(lines);
    if (marks.length >= 2) lines.splice(marks[1], 1);
    log.push(`cierre separado: ${rel}`);
  } else {
    // 2. Cierre delante de un bloque de expresión: vuelve justo antes del `{`.
    const mark = marksOf(lines).find((i) => {
      const next = lines.slice(i + 1).find((x) => x.trim() !== "") ?? "";
      return next.trimStart().startsWith("<");
    });
    if (mark !== undefined) {
      let target = -1;
      for (let i = mark - 1; i > 0; i--) {
        if (/^\{/.test(lines[i])) {
          target = i;
          break;
        }
        if (lines[i].trim() === "---") break;
      }
      if (target !== -1) {
        lines.splice(mark, 1);
        lines.splice(target, 0, "---");
        log.push(`cierre recolocado: ${rel}`);
      }
    }
  }

  // 3. Stub duplicado al final del frontmatter.
  const stub = lines.findIndex(
    (l, i) => l.trim() === "const fotos = {" && lines[i + 1]?.trim() === "" && lines[i + 2]?.trim() === "};"
  );
  if (stub !== -1) {
    lines.splice(stub, 3);
    log.push(`stub de fotos quitado: ${rel}`);
  }

  const after = problemOf(lines);
  if (after) still.push([f, after]);
  if (APPLY && lines.join("\n") !== original) fs.writeFileSync(f, lines.join("\n"));
}

console.log(`${log.length} reparaciones${APPLY ? " aplicadas" : " simuladas"} · siguen rotos: ${still.length}`);
for (const l of log) console.log("·", l);
for (const [f, m] of still.slice(0, 10)) console.log("? ", path.relative(ROOT, f), "→", m);
