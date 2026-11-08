// Utilidad temporal: valida (y opcionalmente repara) las páginas .astro migradas.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve("src/apps");
const fix = process.argv.includes("--fix");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith(".astro")) out.push(p);
  }
  return out;
}

const files = walk(ROOT);

if (fix) {
  let fixed = 0;
  for (const f of files) {
    const lines = fs.readFileSync(f, "utf8").split(/\r?\n/);
    if (lines[0]?.trim() !== "---") continue;
    const doctype = lines.findIndex((l) => /<!doctype/i.test(l));
    if (doctype < 6) continue;
    // El frontmatter se cierra antes de tiempo: hay código JS seguido de HTML.
    const early = lines.slice(1, 5).findIndex((l) => l.trim() === "---");
    if (early === -1) continue;
    lines.splice(early + 1, 1);
    const dt = lines.findIndex((l) => /<!doctype/i.test(l));
    lines.splice(dt, 0, "---");
    fs.writeFileSync(f, lines.join("\n"));
    fixed++;
    console.log("reparado:", path.relative(ROOT, f));
  }
  console.log(`\nReparados: ${fixed}\n`);
}

// El compilador vive en el store de bun, no hoisted en node_modules.
async function loadCompiler() {
  try {
    return await import("@astrojs/compiler");
  } catch {}
  let dir = ROOT;
  for (;;) {
    const store = path.join(dir, "node_modules", ".bun");
    if (fs.existsSync(store)) {
      const hit = fs
        .readdirSync(store)
        .filter((n) => n.startsWith("@astrojs+compiler"))
        .map((n) => path.join(store, n, "node_modules", "@astrojs", "compiler"))
        .find((p) => fs.existsSync(path.join(p, "package.json")));
      if (hit) {
        const pkg = JSON.parse(fs.readFileSync(path.join(hit, "package.json"), "utf8"));
        const exp = pkg.exports?.["."];
        const entry = pkg.module || pkg.main || (typeof exp === "string" ? exp : exp?.import || exp?.default);
        return await import(pathToFileURL(path.join(hit, entry)).href);
      }
    }
    const up = path.dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  return null;
}

const compiler = await loadCompiler();
if (!compiler?.transform) {
  console.log("Compilador de Astro no disponible; se omite la validación");
  process.exit(0);
}
const { transform } = compiler;

const errors = [];
for (const f of files) {
  const code = fs.readFileSync(f, "utf8");
  try {
    const res = await transform(code, { filename: f });
    const diag = (res.diagnostics || []).find((d) => d.severity === 1);
    if (diag) errors.push([f, diag.text]);
  } catch (err) {
    errors.push([f, String(err?.message || err).split("\n")[0]]);
  }
}

console.log(`Ficheros .astro: ${files.length} · con error: ${errors.length}`);
for (const [f, m] of errors.slice(0, 30)) {
  console.log("·", path.relative(ROOT, f), "→", m);
}
