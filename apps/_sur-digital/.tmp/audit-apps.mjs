// Auditoría temporal de src/apps: sin @source en CSS que usa Tailwind compartido,
// nav legal duplicado y fotos calientes de googleusercontent.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src/apps");
const apps = fs.readdirSync(root, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

const walk = (dir) => {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
};

const twCssNoSource = [];
const plainCssNoSource = [];
const legalNavApps = [];
const googleImgApps = [];
const noCssApps = [];

for (const slug of apps) {
  const dir = path.join(root, slug);
  const files = walk(dir);
  const cssFiles = files.filter((f) => f.endsWith(".css"));
  if (!cssFiles.length) noCssApps.push(slug);

  const usesTw = cssFiles.some((f) => {
    const s = fs.readFileSync(f, "utf8");
    return /@astro-config|tailwindcss|@import\s+["']\.\.\/\.\.\/\.\.\/.*index\.css/.test(s);
  });
  if (usesTw) {
    const missing = cssFiles.filter((f) => !fs.readFileSync(f, "utf8").includes("@source"));
    if (missing.length) twCssNoSource.push({ slug, files: missing.map((f) => path.relative(dir, f)) });
  } else if (cssFiles.length) {
    plainCssNoSource.push(slug);
  }

  const astros = files.filter((f) => f.endsWith(".astro"));
  const src = astros.map((f) => fs.readFileSync(f, "utf8"));
  const joined = src.join("\n");

  if (/<nav[^>]*class="[^"]*legal-links/.test(joined)) legalNavApps.push(slug);
  if (/googleusercontent/.test(joined) && /<img|<Image/.test(joined)) googleImgApps.push(slug);
}

console.log(
  JSON.stringify(
    {
      apps: apps.length,
      twCssNoSource: twCssNoSource.length,
      twCssNoSourceSample: twCssNoSource.slice(0, 8),
      twCssNoSourceSlugs: twCssNoSource.map((x) => x.slug),
      plainCssApps: plainCssNoSource.length,
      legalNavApps: legalNavApps.length,
      legalNavSample: legalNavApps.slice(0, 15),
      googleImgApps: googleImgApps.length,
      googleImgSample: googleImgApps.slice(0, 10),
      noCssApps: noCssApps.length,
    },
    null,
    2,
  ),
);
