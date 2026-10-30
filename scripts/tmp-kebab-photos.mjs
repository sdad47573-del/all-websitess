import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
const require = createRequire(new URL('../apps/bar-el-anzuelo/package.json', import.meta.url));
const sharp = require('sharp');
const dir = 'apps/kebab-turkish-y-pizzeria/src/assets/fotos';
const out = 'apps/kebab-turkish-y-pizzeria/.preview';
mkdirSync(out, { recursive: true });

const menu = `${dir}/kebab-turkish-y-pizzeria-apaisada-03.jpg`;
const { data, info } = await sharp(menu).rotate().toBuffer({ resolveWithObject: true });
console.log('rotada', info.width, info.height);
const base = sharp(data);
await base.clone().extract({ left: 0, top: Math.round(info.height*0.10), width: Math.round(info.width*0.30), height: Math.round(info.height*0.80) }).resize({ width: 1200 }).toFile(`${out}/menu-pizzas.jpg`);
await base.clone().extract({ left: Math.round(info.width*0.70), top: Math.round(info.height*0.10), width: Math.round(info.width*0.29), height: Math.round(info.height*0.82) }).resize({ width: 1200 }).toFile(`${out}/menu-especiales.jpg`);
await base.clone().extract({ left: Math.round(info.width*0.25), top: Math.round(info.height*0.48), width: Math.round(info.width*0.50), height: Math.round(info.height*0.42) }).resize({ width: 1500 }).toFile(`${out}/menu-puerta.jpg`);

for (const f of ['vertical-05','vertical-08','vertical-09','vertical-07']) {
  await sharp(`${dir}/kebab-turkish-y-pizzeria-${f}.jpg`).rotate().resize({ width: 900 }).jpeg({ quality: 82 }).toFile(`${out}/${f}.jpg`);
}
console.log('ok');
