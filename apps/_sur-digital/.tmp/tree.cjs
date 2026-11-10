const fs = require("fs");
const path = require("path");
const dir = ".tmp/cpuprof";
const file = fs.readdirSync(dir).find((f) => f.endsWith(".cpuprofile"));
if (!file) { console.log("no profile"); process.exit(0); }
const p = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
const byId = new Map(p.nodes.map((n) => [n.id, n]));
const parent = new Map();
for (const n of p.nodes) for (const c of n.children ?? []) parent.set(c, n.id);
const short = (u) => u.replace(/^.*all-websites[\\/]/, "").replace(/^file:\/\//, "");
const label = (n) => `${n.callFrame.functionName || "(anon)"} ${short(n.callFrame.url)}:${n.callFrame.lineNumber}`;
const self = new Map();
let total = 0;
p.samples.forEach((id, i) => {
  const dt = (p.timeDeltas[i] ?? 0) / 1000;
  total += dt;
  self.set(id, (self.get(id) || 0) + dt);
});
console.log("profile total ms", total.toFixed(0));
const top = [...self.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
for (const [id, ms] of top) {
  console.log(`\n== ${(ms / 1000).toFixed(2)}s ${label(byId.get(id))}`);
  let cur = id;
  for (let d = 0; d < 6; d++) {
    cur = parent.get(cur);
    if (!cur) break;
    console.log("   <-", label(byId.get(cur)));
  }
}
