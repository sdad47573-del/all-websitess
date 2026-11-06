/**
 * `bun run dev`: API (puerto 4400) y Vite con Solid (4401) a la vez.
 * Vite reenvía /api al servidor, así que el navegador trabaja contra un origen.
 */
const api = Bun.spawn(["bun", "--watch", "server.ts"], {
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
	api.kill();
	web.kill();
	process.exit(0);
};

process.on("SIGINT", stop);
process.on("SIGTERM", stop);

console.log("CMS en http://127.0.0.1:4401 (API en 4400)");

// Si cualquiera de los dos procesos termina, se cierra el otro.
await Promise.race([api.exited, web.exited]);
stop();
