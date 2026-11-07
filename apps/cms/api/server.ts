import { createCmsApi } from "./app";
import { openCmsDatabase } from "./db";

const db = openCmsDatabase();
const app = createCmsApi(db);
const port = Number(process.env.CMS_API_PORT ?? 4402);

if (!process.env.CMS_API_TOKEN) {
	console.log("CMS_API_TOKEN no está definido: la API solo escucha en 127.0.0.1 sin token.");
}

console.log(`API del CMS en http://127.0.0.1:${port}`);
Bun.serve({
	port,
	hostname: "127.0.0.1",
	fetch: (request) => app.fetch(request),
});
