// Cambios de rendimiento en el hero 3D.
import fs from "node:fs";

const path = "src/components/Hero4.astro";
let s = fs.readFileSync(path, "utf8");
const rep = (a, b) => {
  if (!s.includes(a)) throw new Error("no encontrado: " + a.slice(0, 70));
  s = s.split(a).join(b);
};

// 1) Que el navegador use la GPU dedicada si la hay ("low-power" pedía la integrada).
rep('powerPreference: "low-power",', 'powerPreference: "high-performance",');

// 2) Menos píxeles por frame: el lienzo es grande y el modelo no necesita 2x.
rep(
  "renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));",
  "renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));"
);

// 3) No leer el layout en cada pointermove (rect cacheado).
rep(
  `        const pointer = { x: 0, y: 0 };
        const gaze = { x: 0, y: 0 };

        const readPointer = (event: PointerEvent) => {
          const rect = host.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const clamp = (value: number) => Math.max(-1.6, Math.min(1.6, value)) / 1.6;

          pointer.x = clamp((event.clientX - centerX) / (rect.width * 0.5));
          pointer.y = clamp((event.clientY - centerY) / (rect.height * 0.5));
        };`,
  `        const pointer = { x: 0, y: 0 };
        const gaze = { x: 0, y: 0 };

        // El rectángulo se cachea: leerlo en cada pointermove fuerza un recálculo
        // de layout decenas de veces por segundo y el cursor se nota pegajoso.
        // Solo se refresca cuando la página se mueve o cambia de tamaño.
        let box = host.getBoundingClientRect();
        let boxStale = false;
        const clampGaze = (value: number) => Math.max(-1.6, Math.min(1.6, value)) / 1.6;

        const readPointer = (event: PointerEvent) => {
          if (boxStale) {
            box = host.getBoundingClientRect();
            boxStale = false;
          }
          pointer.x = clampGaze((event.clientX - (box.left + box.width / 2)) / (box.width * 0.5));
          pointer.y = clampGaze((event.clientY - (box.top + box.height / 2)) / (box.height * 0.5));
        };`
);

// 4) Invalidar la caché cuando toca.
rep(
  `        window.addEventListener("pointermove", readPointer, { passive: true });`,
  `        window.addEventListener("pointermove", readPointer, { passive: true });
        window.addEventListener(
          "scroll",
          () => {
            boxStale = true;
          },
          { passive: true }
        );`
);
rep(
  `        new ResizeObserver(() => {
          resize();`,
  `        new ResizeObserver(() => {
          resize();
          boxStale = true;`
);

// 5) Respuesta inmediata: la mirada y el giro dejaban de seguir al cursor con
//    ~0,3 s de retardo por el amortiguado tan bajo.
rep(
  `          gaze.x = ease(gaze.x, pointer.x, 3.4);
          gaze.y = ease(gaze.y, pointer.y, 3.4);`,
  `          gaze.x = ease(gaze.x, pointer.x, 10);
          gaze.y = ease(gaze.y, pointer.y, 10);`
);
rep("            spin = ease(spin, spinTarget, 4.2);", "            spin = ease(spin, spinTarget, 7);");

fs.writeFileSync(path, s);
console.log("patch ok");
