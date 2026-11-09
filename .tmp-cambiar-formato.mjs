// Cambio temporal: pasa las imágenes de AVIF a WebP en landings y componentes.
// AVIF tarda ~1.180 ms por variante con sharp; WebP, ~150 ms (medido con las
// fotos reales del repo), y en estas fotos el archivo resultante no pesa más.
import fs from "node:fs";
import path from "node:path";

const raices = ["apps/_sur-digital/src/apps", "packages"];
let ficheros = 0;
let reemplazos = 0;

function recorrer(dir) {
  for (const entrada of fs.readdirSync(dir, { withFileTypes: true })) {
    const ruta = path.join(dir, entrada.name);
    if (entrada.isDirectory()) {
      if (entrada.name === "node_modules" || entrada.name === "dist") continue;
      recorrer(ruta);
      continue;
    }
    if (!/\.(astro|ts|tsx|js|jsx|mdx)$/.test(entrada.name)) continue;
    const antes = fs.readFileSync(ruta, "utf8");
    const despues = antes.replace(/format=("|')avif\1/g, 'format="webp"');
    if (despues !== antes) {
      fs.writeFileSync(ruta, despues);
      ficheros++;
      reemplazos += (antes.match(/format=("|')avif\1/g) ?? []).length;
    }
  }
}

for (const raiz of raices) recorrer(raiz);
console.log(`ficheros modificados: ${ficheros}`);
console.log(`format="avif" sustituidos: ${reemplazos}`);
