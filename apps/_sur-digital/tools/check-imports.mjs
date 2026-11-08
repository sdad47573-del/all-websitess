// Utilidad temporal: comprueba que cada import de las apps migradas resuelve,
// tanto relativos como de paquete.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve("src/apps");
const EXTS = [".astro", ".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".svelte", ".vue", ".svg"];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(astro|ts|tsx|js|mjs)$/.test(p)) out.push(p);
  }
  return out;
}

function resolvesLocal(from, spec) {
  const base = spec.startsWith("@assets/")
    ? path.resolve(path.dirname(from).split("src" + path.sep + "apps")[0], "src/apps", from.split(path.sep).slice(-100, -1).join(path.sep))
    : path.resolve(path.dirname(from), spec);
  const candidates = [base, ...EXTS.map((e) => base + e), ...EXTS.map((e) => path.join(base, "index" + e))];
  return candidates.some((c) => fs.existsSync(c));
}

function resolvesPackage(from, spec) {
  try {
    createRequire(pathToFileURL(from)).resolve(spec);
    return true;
  } catch {
    return false;
  }
}

const files = walk(ROOT);
const broken = [];

for (const f of files) {
  const code = fs.readFileSync(f, "utf8");
  const re = /(?:from\s*|import\s*\(\s*|import\s+)["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(code))) {
    const spec = m[1];
    if (spec.startsWith("astro:") || spec.startsWith("node:")) continue;
    const ok = spec.startsWith(".") || spec.startsWith("@/") ? resolvesLocal(f, spec) : resolvesPackage(f, spec);
    if (ok) continue;
    broken.push([f, code.slice(0, m.index).split("\n").length, spec]);
  }
}

console.log(`Ficheros: ${files.length} · imports sin resolver: ${broken.length}`);
for (const [f, line, spec] of broken.slice(0, 20)) console.log(`· ${path.relative(ROOT, f)}:${line} → ${spec}`);
