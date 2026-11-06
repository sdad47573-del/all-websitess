import { describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

// Pruebas de humo del hero 3D en un navegador real. El modelo ya falló una vez
// en silencio: solo arrancaba con pointerenter, así que con el cursor ya encima
// al recargar (o sin tocar nada) el hero se quedaba en póster y ningún test lo
// veía. Se cubren los dos escenarios con lo mínimo exigible: canvas visible y
// GLB descargado con 200, sin excepciones. Sin Chrome instalado se saltan
// (CHROME_PATH para apuntar a uno concreto).

const APP_ROOT = join(import.meta.dir, "..");
const DIST = join(APP_ROOT, "dist");
const HOME_FILE = join(DIST, "i18n", "es", "index.html");
const PAGE_PATH = "/i18n/es/index.html";
const MODEL_PATH = "/models/logo-sur-digital.glb";
const COMPONENT_FILE = join(APP_ROOT, "src", "components", "Logo3D.astro");
// Bajo .tmp/chrome/, que ya está ignorado junto al resto de perfiles de Chrome.
const PROFILES = join(APP_ROOT, ".tmp", "chrome");

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter((candidate): candidate is string => Boolean(candidate));

const chromePath = CHROME_CANDIDATES.find((candidate) => existsSync(candidate));

type CdpEvent = { method: string; params: any };
type CdpClient = Awaited<ReturnType<typeof connectCdp>>;
type Page = (method: string, params?: Record<string, unknown>) => Promise<any>;
type HeroState = { canvasVisible: boolean; errorShown: boolean };

// El build tarda más de minuto: solo se recompila si dist no existe o si el
// componente es más nuevo, para que la prueba no valide HTML viejo.
function ensureBuild() {
  const stale =
    !existsSync(HOME_FILE) ||
    statSync(COMPONENT_FILE).mtimeMs > statSync(HOME_FILE).mtimeMs;

  if (!stale) return;

  console.log("hero3d: dist no existe o es anterior a Logo3D.astro, compilando…");
  const build = Bun.spawnSync({
    cmd: ["bun", "run", "build"],
    cwd: APP_ROOT,
    stdout: "pipe",
    stderr: "pipe",
  });

  if (build.exitCode !== 0) {
    throw new Error(`astro build ha fallado:\n${build.stderr.toString().slice(-2000)}`);
  }
}

async function fetchJson(url: string) {
  const deadline = Date.now() + 15_000;
  let lastError: unknown;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return (await response.json()) as Record<string, unknown>;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await Bun.sleep(100);
  }

  throw new Error(`No se ha podido leer ${url}: ${String(lastError)}`);
}

async function connectCdp(url: string) {
  const socket = new WebSocket(url);
  await new Promise<void>((resolve, reject) => {
    socket.onopen = () => resolve();
    socket.onerror = () => reject(new Error("No se ha podido abrir el WebSocket de Chrome"));
  });

  let nextId = 0;
  const pending = new Map<
    number,
    { resolve: (value: any) => void; reject: (error: Error) => void }
  >();
  const events: CdpEvent[] = [];

  socket.onmessage = (event) => {
    const message = JSON.parse(String(event.data));

    if (typeof message.id === "number") {
      const waiter = pending.get(message.id);
      if (!waiter) return;
      pending.delete(message.id);
      if (message.error) waiter.reject(new Error(message.error.message));
      else waiter.resolve(message.result);
      return;
    }

    events.push(message);
  };

  const send = (method: string, params: Record<string, unknown> = {}, sessionId?: string) =>
    new Promise<any>((resolve, reject) => {
      const id = ++nextId;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    });

  return { send, events, close: () => socket.close() };
}

// Chrome escribe el puerto real en <perfil>/DevToolsActivePort cuando arranca
// con --remote-debugging-port=0: así no hay que adivinar un puerto libre.
async function waitForDebugPort(profile: string) {
  const file = join(profile, "DevToolsActivePort");
  const deadline = Date.now() + 20_000;

  while (Date.now() < deadline) {
    if (existsSync(file)) {
      const port = Number(readFileSync(file, "utf8").split(/\r?\n/)[0]);
      if (Number.isInteger(port) && port > 0) return port;
    }
    await Bun.sleep(100);
  }

  throw new Error("Chrome no ha publicado DevToolsActivePort");
}

function serveDist() {
  return Bun.serve({
    port: 0,
    async fetch(request) {
      const pathname = decodeURIComponent(new URL(request.url).pathname);

      for (const candidate of [join(DIST, pathname), join(DIST, pathname, "index.html")]) {
        const file = Bun.file(candidate);
        if (await file.exists()) return new Response(file);
      }

      return new Response("No encontrado", { status: 404 });
    },
  });
}

const READ_HERO = `(() => {
  const host = document.querySelector("[data-model3d]");
  if (!host) return null;
  const canvas = host.querySelector("[data-model3d-canvas]");
  const error = host.querySelector("[data-model3d-error]");
  return {
    canvasVisible: canvas ? !canvas.classList.contains("opacity-0") : false,
    errorShown: error ? !error.hidden : false,
  };
})()`;

const HERO_CENTER = `(() => {
  const host = document.querySelector("[data-model3d]");
  if (!host) return null;
  const rect = host.getBoundingClientRect();
  return { x: Math.round(rect.x + rect.width / 2), y: Math.round(rect.y + rect.height / 2) };
})()`;

const MODEL_LOADED = `performance.getEntriesByType("resource").some((entry) => entry.name.endsWith(${JSON.stringify(
  MODEL_PATH
)}))`;

// Mientras el hero no exista todavía (HTML a medio ejecutar) se sigue
// esperando: null no es un fallo, es que aún no hay nada que mirar.
async function waitForHero(page: Page) {
  let state: HeroState | null = null;
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    try {
      const evaluation = await page("Runtime.evaluate", {
        expression: READ_HERO,
        returnByValue: true,
      });
      state = evaluation.result.value as HeroState | null;
    } catch {
      // Al recargar, el contexto de ejecución anterior se destruye: se
      // reintenta con el documento nuevo.
      state = null;
    }

    if (state?.canvasVisible || state?.errorShown) break;
    await Bun.sleep(250);
  }

  console.log("hero3d estado final:", JSON.stringify(state));
  return state;
}

// En móvil el logo puede quedar por debajo del pliegue: hay que llevarlo a
// pantalla para que el toque caiga sobre él y no sobre otra sección.
async function scrollHeroIntoView(page: Page) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const result = await page("Runtime.evaluate", {
      expression: `(() => {
        const host = document.querySelector("[data-model3d]");
        if (!host) return false;
        host.scrollIntoView({ block: "center" });
        return true;
      })()`,
      returnByValue: true,
    });

    if (result.result.value) return;
    await Bun.sleep(100);
  }

  throw new Error("El hero 3D no está en el DOM");
}

function modelResponses(events: CdpEvent[], from = 0) {
  return events
    .slice(from)
    .filter((event) => event.method === "Network.responseReceived")
    .map((event) => event.params.response)
    .filter((response) => String(response.url).endsWith(MODEL_PATH));
}

// Cada prueba abre su propio Chrome con un perfil distinto para que un cuelgue
// no arrastre al otro escenario.
async function withHeroPage(
  profileName: string,
  body: (hero: { page: Page; events: CdpEvent[] }) => Promise<void>,
  beforeNavigate?: (page: Page) => Promise<void>
) {
  ensureBuild();
  const profile = join(PROFILES, profileName);
  rmSync(profile, { recursive: true, force: true });
  mkdirSync(profile, { recursive: true });

  const server = serveDist();
  const chrome = Bun.spawn(
    [
      chromePath as string,
      "--headless=new",
      "--remote-debugging-port=0",
      `--user-data-dir=${profile}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-extensions",
      "--disable-background-networking",
      "--no-sandbox",
      "--window-size=1280,900",
      "about:blank",
    ],
    { stdout: "ignore", stderr: "ignore" }
  );

  let browser: CdpClient | undefined;

  try {
    const debugPort = await waitForDebugPort(profile);
    const version = await fetchJson(`http://127.0.0.1:${debugPort}/json/version`);
    browser = await connectCdp(String(version.webSocketDebuggerUrl));

    const { targetId } = await browser.send("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await browser.send("Target.attachToTarget", {
      targetId,
      flatten: true,
    });
    const page: Page = (method, params = {}) => browser!.send(method, params, sessionId);

    await page("Page.enable");
    await page("Runtime.enable");
    await page("Network.enable");
    await beforeNavigate?.(page);
    await page("Page.navigate", { url: `${server.url.origin}${PAGE_PATH}` });

    await body({ page, events: browser.events });

    const exceptions = browser.events.filter(
      (event) => event.method === "Runtime.exceptionThrown"
    );
    expect(exceptions).toHaveLength(0);
  } finally {
    try {
      await browser?.send("Browser.close");
    } catch {
      // Chrome ya puede estar cerrado.
    }
    chrome.kill();
    server.stop(true);

    // Windows tarda en soltar los archivos del perfil: si se borra al
    // instante da EBUSY y el fallo de limpieza taparía el resultado real.
    for (let attempt = 0; attempt < 10; attempt += 1) {
      try {
        rmSync(profile, { recursive: true, force: true });
        break;
      } catch {
        await Bun.sleep(200);
      }
    }
  }
}

describe("hero 3D", () => {
  if (!chromePath) {
    console.warn("hero3d: no hay Chrome instalado; define CHROME_PATH para ejecutar estas pruebas.");
  }

  const run = chromePath ? test : test.skip;

  run(
    "muestra el canvas y descarga el modelo sin tocar nada",
    async () => {
      await withHeroPage("hero3d-inicial", async ({ page, events }) => {
        const state = await waitForHero(page);
        const responses = modelResponses(events);

        expect(state).not.toBeNull();
        expect(state?.errorShown).toBe(false);
        expect(state?.canvasVisible).toBe(true);
        expect(responses.length).toBeGreaterThan(0);
        expect(responses[0]?.status).toBe(200);
      });
    },
    300_000
  );

  run(
    "sigue cargando tras recargar con el cursor ya encima del logo",
    async () => {
      await withHeroPage("hero3d-recarga", async ({ page }) => {
        // Primera carga: el visitante deja el ratón sobre el logo.
        const before = await waitForHero(page);
        expect(before?.canvasVisible).toBe(true);

        const center = await page("Runtime.evaluate", {
          expression: HERO_CENTER,
          returnByValue: true,
        });
        const { x, y } = center.result.value as { x: number; y: number };
        await page("Input.dispatchMouseEvent", { type: "mouseMoved", x: 2, y: 2, buttons: 0 });
        await page("Input.dispatchMouseEvent", { type: "mouseMoved", x, y, buttons: 0 });
        await Bun.sleep(500);

        // Recarga sin mover el ratón: el cursor sigue encima, así que Chrome no
        // emite pointerenter. Era la causa exacta del fallo, y el 3D debe
        // arrancar igualmente (carga diferida por visibilidad + idle).
        await page("Page.reload");
        const after = await waitForHero(page);
        const modelLoaded = await page("Runtime.evaluate", {
          expression: MODEL_LOADED,
          returnByValue: true,
        });

        expect(after?.errorShown).toBe(false);
        expect(after?.canvasVisible).toBe(true);
        expect(modelLoaded.result.value).toBe(true);
      });
    },
    300_000
  );

  run(
    "arranca con el primer toque en un móvil",
    async () => {
      await withHeroPage(
        "hero3d-tactil",
        async ({ page }) => {
          await scrollHeroIntoView(page);

          const center = await page("Runtime.evaluate", {
            expression: HERO_CENTER,
            returnByValue: true,
          });
          const { x, y } = center.result.value as { x: number; y: number };

          // En táctil pointerenter no existe: el arranque depende del toque.
          await page("Input.dispatchTouchEvent", {
            type: "touchStart",
            touchPoints: [{ x, y }],
          });
          await page("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });

          const state = await waitForHero(page);
          expect(state?.errorShown).toBe(false);
          expect(state?.canvasVisible).toBe(true);
        },
        async (page) => {
          // Antes de navegar, para que el layout y los media queries ya sean de
          // móvil y el primer toque llegue en las condiciones reales.
          await page("Emulation.setDeviceMetricsOverride", {
            width: 390,
            height: 844,
            deviceScaleFactor: 3,
            mobile: true,
          });
          await page("Emulation.setTouchEmulationEnabled", {
            enabled: true,
            maxTouchPoints: 5,
          });
        }
      );
    },
    300_000
  );
});
