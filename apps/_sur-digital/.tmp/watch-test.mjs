// Solo diagnóstico local: cuánto tarda chokidar en «ready» con y sin los
// ignores del proyecto (sin arrancar Astro).
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let chokidar;
try {
  chokidar = require("../../../node_modules/.bun/chokidar@5.0.0/node_modules/chokidar");
} catch {
  chokidar = (await import("../../../node_modules/.bun/chokidar@5.0.0/node_modules/chokidar/index.js")).default;
}
chokidar = chokidar.default ?? chokidar;

const ignored = process.argv.includes("--ignored")
  ? ["**/.git/**", "**/node_modules/**", "**/.tmp/**", "**/src/apps/**", "**/public/**", "**/dist/**"]
  : ["**/.git/**", "**/node_modules/**", "**/.tmp/**"];

const t = Date.now();
const watcher = chokidar.watch(process.cwd(), {
  ignored,
  ignoreInitial: true,
  ignorePermissionErrors: true,
});
watcher.on("ready", async () => {
  console.log("READY_MS", Date.now() - t, "ignored:", process.argv.includes("--ignored"));
  await watcher.close();
  process.exit(0);
});
setTimeout(() => {
  console.log("STILL_NOT_READY_MS", Date.now() - t);
  process.exit(1);
}, 100000);
