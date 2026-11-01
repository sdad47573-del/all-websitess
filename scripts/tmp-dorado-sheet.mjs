import { createRequire } from 'node:module';
import { readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
const require = createRequire(resolve('apps/gastrochef/package.json'));
const sharp = require('sharp');
const dir = 'apps/alimentacion-preparada-el-dorado/src/assets/fotos';
const files = readdirSync(dir).filter((f) => f.endsWith('.jpg')).sort();
const W = 300, H = 220, COLS = 4;
const rows = Math.ceil(files.length / COLS);
const comps = [];
for (let i = 0; i < files.length; i++) {
  const buf = await sharp(join(dir, files[i])).resize(W, H, { fit: 'cover' }).jpeg().toBuffer();
  comps.push({ input: buf, left: (i % COLS) * W, top: Math.floor(i / COLS) * H });
}
await sharp({ create: { width: W * COLS, height: H * rows, channels: 3, background: '#000' } })
  .composite(comps).jpeg().toFile('scripts/tmp-dorado-sheet.jpg');
console.log(files.map((f, i) => `${i}: ${f}`).join('\n'));
