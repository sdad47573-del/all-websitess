// Arranca `astro dev` por API en el 4321. El CLI se queda colgado en este
// equipo (el module runner no llega a crear la app del dev server), mientras
// que la API arranca y sirve las rutas con normalidad.
import { dev } from "astro";

const port = 4321;
await dev({ root: process.cwd(), server: { port } });
console.log("DEV_READY", `http://localhost:${port}/`);
