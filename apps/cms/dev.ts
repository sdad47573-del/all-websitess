/**
 * `bun run dev`: API del panel (4400), API Hono (4402) y Vite con Solid (4401).
 * Vite reenvía /api al servidor del panel, así que el navegador trabaja contra
 * un solo origen. La API Hono se levanta aparte para probar la migración.
 */
import { existsSync } from "node:fs";
import { defaultDatabasePath } from "./api/db";

const apiPort = Number(process.env.CMS_API_PORT ?? 4402);
const cmsPort = Number(process.env.PORT ?? 4400);
const databasePath = process.env.CMS_DB_PATH ?? defaultDatabasePath;

// La API Hono no lee `apps/` al arrancar. En desarrollo, si es la primera vez,
// importamos el contenido una vez para que no arranque con una base vacía.
if (!existsSync(databasePath)) {
	console.log("Base de datos de la API no encontrada; importando el contenido de apps/…");
	const seed = Bun.spawn(["bun", "scripts/seed-api.ts"], {
		cwd: import.meta.dir,
		stdout: "inherit",
		stderr: "inherit",
	});
	if ((await seed.exited) !== 0) {
		console.error("No se ha podido preparar la base de datos de la API.");
		process.exit(1);
	}
}

const cms = Bun.spawn(["bun", "--watch", "server.ts"], {
	cwd: import.meta.dir,
	// Habilita el botón de acceso directo: con `bun run start` no existe.
	env: { ...process.env, CMS_DEV_MODE: "1" },
	stdout: "inherit",
	stderr: "inherit",
});

const api = Bun.spawn(["bun", "--watch", "api/server.ts"], {
	cwd: import.meta.dir,
	stdout: "inherit",
	stderr: "inherit",
});

const web = Bun.spawn(["bun", "x", "vite"], {
	cwd: import.meta.dir,
	stdout: "inherit",
	stderr: "inherit",
});

let stopping = false;
const stop = () => {
	if (stopping) return;
	stopping = true;
	cms.kill();
	api.kill();
	web.kill();
	process.exit(0);
};

process.on("SIGINT", stop);
process.on("SIGTERM", stop);

console.log(`CMS en http://127.0.0.1:4401 (API del panel en ${cmsPort})`);
console.log(`API Hono en http://127.0.0.1:${apiPort}`);

// Si cualquiera de los tres procesos termina, se cierran los demás.
await Promise.race([cms.exited, api.exited, web.exited]);
stop();
