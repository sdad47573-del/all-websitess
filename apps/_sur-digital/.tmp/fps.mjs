// Medición temporal: FPS del hero 3D con Chrome headless vía CDP.
// Uso: node .tmp/fps.mjs http://localhost:4399/
import { spawn } from "node:child_process";

const URL_BASE = process.argv[2] || "http://localhost:4321/";
const PORT = 9333 + Math.floor(Math.random() * 200);
const profile = (process.env.TEMP || "/tmp") + "/cdp-hero-" + Date.now();
const chrome = spawn(
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  [
    "--headless=new",
    "--hide-scrollbars",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    "--window-size=1440,900",
    URL_BASE,
  ],
  { stdio: "ignore" }
);

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

let target;
for (let i = 0; i < 60 && !target; i++) {
  await wait(250);
  try {
    const res = await fetch(`http://127.0.0.1:${PORT}/json`);
    const list = await res.json();
    target = list.find((t) => t.type === "page" && t.url.startsWith("http"));
  } catch {}
}
if (!target) {
  console.log("ERROR: no se encontró el target");
  chrome.kill();
  process.exit(1);
}

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r, { once: true }));

let id = 0;
const pending = new Map();
ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
});
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const msgId = ++id;
    pending.set(msgId, resolve);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

await send("Runtime.enable");
await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Page.navigate", { url: URL_BASE });
await wait(1200);

const evaluate = async (expression) => {
  const res = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (res.result?.exceptionDetails) {
    return "EXCEPCION: " + res.result.exceptionDetails.text;
  }
  return res.result?.result?.value;
};

const gpu = await evaluate(`(() => {
  const c = document.createElement("canvas");
  const gl = c.getContext("webgl2") || c.getContext("webgl");
  if (!gl) return "sin webgl";
  const dbg = gl.getExtension("WEBGL_debug_renderer_info");
  return dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : "webgl sin debug";
})()`);
console.log("GPU:", gpu);

const measure = await evaluate(`(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(5000); // carga de three + glb
  const host = document.querySelector("[data-model3d]");
  const box = host.getBoundingClientRect();
  const cx = box.left + box.width / 2;
  const cy = box.top + box.height / 2;

  const run = async (label, interactive) => {
    let moves = 0;
    const pump = () => {
      if (!interactive) return;
      const a = moves * 0.12;
      window.dispatchEvent(new PointerEvent("pointermove", {
        clientX: cx + Math.cos(a) * box.width * 0.45,
        clientY: cy + Math.sin(a) * box.height * 0.45,
        bubbles: true, pointerType: "mouse",
      }));
      moves++;
    };
    const timer = interactive ? setInterval(pump, 16) : 0;

    const frames = [];
    let stop = false;
    let last = performance.now();
    const tick = (now) => {
      frames.push(now - last);
      last = now;
      if (!stop) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    await sleep(3000);
    stop = true;
    if (timer) clearInterval(timer);

    const usable = frames.slice(3);
    const avg = usable.reduce((s, v) => s + v, 0) / usable.length;
    const sorted = [...usable].sort((a, b) => a - b);
    return {
      label,
      fps: +(1000 / avg).toFixed(1),
      p95_frame_ms: +sorted[Math.floor(sorted.length * 0.95)].toFixed(1),
    };
  };

  return JSON.stringify([await run("reposo", false), await run("cursor", true)]);
})()`);

console.log("MEDIDAS:", measure);
ws.close();
chrome.kill();
