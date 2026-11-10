import { execSync } from "node:child_process";
import fs from "node:fs";
const files = execSync("git diff --name-only -- 'src/apps/**/*.astro'", { encoding: "utf8" }).split("\n").filter((f) => f.endsWith(".astro"));
const bad = [];
for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  const open = (s.match(/<nav\b/g) || []).length;
  const close = (s.match(/<\/nav>/g) || []).length;
  if (open !== close) bad.push(`${f} nav ${open}/${close}`);
  if (!s.trimEnd().endsWith("</html>")) bad.push(`${f} no termina en </html>`);
  if ((s.match(/<footer\b/g) || []).length !== (s.match(/<\/footer>/g) || []).length) bad.push(`${f} footer desbalanceado`);
}
console.log("astro modificados:", files.length, "| problemas:", bad.length);
console.log(bad.slice(0, 10).join("\n"));
