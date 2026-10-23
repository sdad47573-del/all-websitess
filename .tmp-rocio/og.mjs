import { createRequire } from 'node:module';
import { resolve } from 'node:path';
const require = createRequire(resolve('apps/bbells-salon-belleza/package.json'));
const sharp = require('sharp');
await sharp('apps/restaurante-el-rocio/src/assets/fotos/restaurante-el-rocio-apaisada-01.jpg')
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('apps/restaurante-el-rocio/public/og.jpg');
const m = await sharp('apps/restaurante-el-rocio/public/og.jpg').metadata();
console.log('og.jpg', m.width + 'x' + m.height, Math.round(m.size / 1024) + ' kB');
