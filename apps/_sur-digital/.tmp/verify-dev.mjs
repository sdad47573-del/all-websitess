// Solo verificación local: arranca `astro dev` por API, pide las páginas y sale
// limpiamente (para que Node escriba el .cpuprofile si se pide).
import { dev } from "astro";

const port = 4514;
const t = Date.now();
const server = await dev({ root: process.cwd(), server: { port } });
console.log("DEV_READY_MS", Date.now() - t);

for (const path of [
  "/",
  "/1111-coffee-and-bakery/",
  "/abaceria-tinta-de-toro/aviso-legal/",
]) {
  const start = Date.now();
  const res = await fetch(`http://localhost:${port}${path}`);
  const body = await res.text();
  console.log("GET", path, res.status, `${Date.now() - start}ms`, `${body.length}b`);
}

await server.stop();
console.log("STOPPED");
