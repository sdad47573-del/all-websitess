// Utilidad temporal: normaliza los delimitadores de frontmatter de los .astro
// migrados. Casos vistos: falta el cierre y el cierre llega antes de tiempo.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("src/apps");
const apply = process.argv.includes("--apply");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith(".astro")) out.push(p);
  }
  return out;
}

const files = walk(ROOT);
const fixes = [];
const review = [];
const isTag = (line) => /^\s*</.test(line);

for (const f of files) {
  const lines = fs.readFileSync(f, "utf8").split(/\r?\n/);
  if (lines[0].trim() !== "---") continue; // componentes con HTML directo: nada que hacer

  const marks = lines.map((l, i) => (i > 0 && l.trim() === "---" ? i : -1)).filter((i) => i > 0);
  const firstTag = lines.findIndex((l, i) => i > 0 && isTag(l));

  if (marks.length === 0) {
    if (firstTag === -1) {
      review.push([f, "sin cierre y sin HTML"]);
      continue;
    }
    fixes.push([f, "cierre añadido", firstTag, null]);
    continue;
  }
  if (marks.length > 1) {
    review.push([f, `delimitadores en ${marks.map((i) => i + 1).join(", ")}`]);
    continue;
  }

  // Sano: tras el cierre viene directamente una etiqueta HTML.
  const close = marks[0];
  const after = lines.findIndex((l, i) => i > close && l.trim() !== "");
  if (after !== -1 && isTag(lines[after])) continue;

  if (firstTag === -1) {
    review.push([f, `cierre en ${close + 1} sin HTML después`]);
    continue;
  }
  fixes.push([f, "cierre movido", firstTag, close]);
}

for (const [f, kind, at, from] of fixes) {
  if (!apply) continue;
  const lines = fs.readFileSync(f, "utf8").split(/\r?\n/);
  if (from !== null) lines.splice(from, 1);
  const at2 = lines.findIndex((l, i) => i > 0 && isTag(l));
  lines.splice(at2, 0, "---");
  fs.writeFileSync(f, lines.join("\n"));
}

console.log(`Ficheros: ${files.length}`);
console.log(`arreglables: ${fixes.length} · a revisar: ${review.length}${apply ? " (aplicado)" : " (simulación)"}`);
for (const [f, kind, at] of fixes.slice(0, 12)) console.log("·", path.relative(ROOT, f), "→", kind, `(HTML en ${at + 1})`);
for (const [f, m] of review.slice(0, 12)) console.log("?", path.relative(ROOT, f), "→", m);
