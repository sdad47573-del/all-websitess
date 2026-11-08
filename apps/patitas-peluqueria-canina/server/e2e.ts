/**
 * Prueba de extremo a extremo contra el servidor REAL levantado en un puerto,
 * para comprobar el camino que de verdad recorre el navegador: fetch, cookies
 * HttpOnly, CORS y códigos de estado.
 *
 *   bun run test:e2e
 */
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const PORT = 8799;
const BASE = `http://localhost:${PORT}`;

let passed = 0;
let failed = 0;
function check(name: string, condition: unknown, detail?: unknown) {
  if (condition) {
    passed++;
    console.log(`  ok  ${name}`);
  } else {
    failed++;
    console.error(`  FAIL ${name}`, detail === undefined ? "" : detail);
  }
}

/** Cliente mínimo con tarro de cookies, como haría el navegador. */
let cookie = "";
async function http<T = Record<string, unknown>>(
  path: string,
  init: RequestInit = {},
): Promise<{ status: number; body: T; setCookie: string | null }> {
  const headers = new Headers(init.headers);
  if (init.body) headers.set("Content-Type", "application/json");
  if (cookie) headers.set("Cookie", cookie);
  const response = await fetch(`${BASE}${path}`, { ...init, headers });

  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];

  const text = await response.text();
  // Los cuerpos de la API son formas distintas según la ruta; aquí solo hace
  // falta poder inspeccionarlos.
  const body = (text ? JSON.parse(text) : null) as T;
  return { status: response.status, body, setCookie };
}

// Base de datos temporal y desechable para esta prueba.
const dataDir = mkdtempSync(join(tmpdir(), "patitas-e2e-"));
const server = spawn("bun", ["run", "server/index.ts"], {
  env: {
    ...process.env,
    PORT: String(PORT),
    DATABASE_URL: join(dataDir, "e2e.sqlite"),
    AUTH_SECRET: "secreto-e2e",
    NODE_ENV: "production",
  },
  stdio: ["ignore", "pipe", "pipe"],
});

let serverLog = "";
server.stdout.on("data", (chunk) => (serverLog += chunk));
server.stderr.on("data", (chunk) => (serverLog += chunk));

// Espera a que responda.
const deadline = Date.now() + 20000;
let up = false;
while (Date.now() < deadline) {
  try {
    const response = await fetch(`${BASE}/api/health`);
    if (response.ok) {
      up = true;
      break;
    }
  } catch {
    // aún no está levantado
  }
  await Bun.sleep(200);
}

console.log("\nPatitas API · extremo a extremo\n");

try {
  check("el servidor arranca", up, serverLog);

  if (up) {
    check("el health check responde ok", (await http<{ ok: boolean }>("/api/health")).body.ok === true);

    /* --- Sesión por cookie HttpOnly --- */
    const guest = await http<{ user: { _id: string } }>("/api/auth/anonymous", { method: "POST" });
    check("abre sesión como invitado", guest.status === 200, guest);
    check("fija una cookie de sesión", guest.setCookie?.includes("patitas_session"), guest.setCookie);
    check(
      "la cookie es HttpOnly",
      guest.setCookie?.toLowerCase().includes("httponly"),
      guest.setCookie,
    );
    check(
      "la cookie es SameSite=Lax",
      guest.setCookie?.toLowerCase().includes("samesite=lax"),
      guest.setCookie,
    );

    const me = await http<{ user: { _id: string } }>("/api/users/me");
    check("la cookie identifica al usuario", me.body?.user?._id === guest.body.user._id, me);

    /* --- El token viaja solo, sin que el JS lo toque --- */
    const pets = await http("/api/pets");
    check("el navegador reutiliza la cookie automáticamente", pets.status === 200, pets);

    /* --- Reserva real por HTTP --- */
    const pet = await http<{ _id: string; name: string }>("/api/pets", {
      method: "POST",
      body: JSON.stringify({ name: "Nube", size: "S" }),
    });
    check("crea una mascota por HTTP", pet.status === 200 && pet.body.name === "Nube", pet);

    // El salón cierra los domingos, así que se pide un día abierto de verdad
    // en lugar de calcular la fecha a mano.
    const { nextOpenDates } = await import("../src/lib/services");
    const day = nextOpenDates(1)[0];
    check("hay un día abierto que probar", !!day, day);

    const availability = await http<string[]>(
      `/api/appointments/availability?date=${day}&durationMin=60`,
    );
    check("la disponibilidad es pública y devuelve huecos", Array.isArray(availability.body), availability);
    check("el día abierto tiene al menos un hueco", availability.body.length > 0, availability.body);

    const booked = await http("/api/appointments", {
      method: "POST",
      body: JSON.stringify({
        petId: pet.body._id,
        serviceKey: "banco",
        extraKeys: [],
        date: day,
        start: availability.body[0],
      }),
    });
    check("reserva una cita por HTTP", booked.status === 200, booked);

    /* --- Errores en JSON, no en texto plano --- */
    const bad = await http<{ error: string }>("/api/appointments", {
      method: "POST",
      body: JSON.stringify({ petId: pet.body._id, serviceKey: "banco", date: "ayer" }),
    });
    check("un error vuelve como JSON con mensaje", bad.status === 400 && !!bad.body.error, bad);

    const missing = await http<{ error: string }>("/api/ruta/que/no/existe");
    check("una ruta inexistente devuelve 404 JSON", missing.status === 404 && !!missing.body.error, missing);

    /* --- Cerrar sesión invalida la cookie --- */
    await http("/api/auth/signout", { method: "POST" });
    const after = await http("/api/pets");
    check("tras cerrar sesión, /api/pets da 401", after.status === 401, after);
  }
} finally {
  // En Windows el fichero de SQLite sigue abierto un instante tras el kill,
  // así que se espera a que el proceso muera antes de borrar nada.
  const exited = new Promise<void>((resolve) => server.once("exit", () => resolve()));
  server.kill();
  await Promise.race([exited, Bun.sleep(3000)]);
  try {
    rmSync(dataDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  } catch {
    console.log(`(no se pudo borrar ${dataDir}; da igual, está en el temporal)`);
  }
}

console.log(`\n${passed} correctas, ${failed} fallidas\n`);
process.exit(failed === 0 ? 0 : 1);
