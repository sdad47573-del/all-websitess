// Utilidad temporal: compara los .astro migrados que no compilan con la versión
// que hay en HEAD (cuando cada app era su propio proyecto).
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";

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

/** Devuelve el motivo del error de frontmatter, o null si compila. */
function problemOf(code) {
  const lines = code.split(/\r?\n/);
  if (lines[0].trim() !== "---") return "no empieza por ---";
  const close = lines.findIndex((l, i) => i > 0 && l.trim() === "---");
  if (close === -1) return "sin cierre de frontmatter";
  try {
    esbuild.transformSync(lines.slice(1, close).join("\n"), {
      loader: "ts",
      target: "esnext",
      format: "esm",
    });
    return null;
  } catch (err) {
    const e = err.errors?.[0];
    return `${e?.text ?? err.message} (línea ${close === -1 ? "?" : 1 + (e?.location?.line ?? 1)})`;
  }
}

const files = walk(ROOT);
const broken = [];
const restorable = [];
const hopeless = [];

for (const f of files) {
  const code = fs.readFileSync(f, "utf8");
  const problem = problemOf(code);
  if (!problem) continue;
  broken.push([f, problem]);

  // src/apps/<slug>/… → apps/<slug>/src/…
  const rel = path.relative(ROOT, f).split(path.sep);
  const slug = rel.shift();
  const headPath = `apps/${slug}/src/${rel.join("/")}`;
  const res = spawnSync("git", ["show", `HEAD:${headPath}`], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  if (res.status !== 0) {
    hopeless.push([f, problem, "no está en HEAD"]);
    continue;
  }
  const headProblem = problemOf(res.stdout);
  if (headProblem) hopeless.push([f, problem, `HEAD también roto: ${headProblem}`]);
  else restorable.push([f, headPath]);
}

if (APPLY) {
  for (const [f, headPath] of restorable) {
    const res = spawnSync("git", ["show", `HEAD:${headPath}`], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
    fs.writeFileSync(f, res.stdout);
  }
}

console.log(`Rotos ahora: ${broken.length} · restaurables desde HEAD: ${restorable.length} · sin arreglo: ${hopeless.length}${APPLY ? " (restaurado)" : ""}`);
for (const [f, p] of broken.slice(0, 8)) console.log("· roto:", path.relative(ROOT, f), "→", p);
for (const [f, p, why] of hopeless.slice(0, 20)) console.log("? sin arreglo:", path.relative(ROOT, f), "→", why);
