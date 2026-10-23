import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/restaurante-el-rocio/src/styles/global.css';
let css = readFileSync(p, 'utf8');

css = css.replace(
  /^\/\*[\s\S]*?\*\//,
  `/* Restaurante "El Rocío" · hoja de estilos propia
   Paleta: crema de mantel, rojo de Murcia y ocre de la brasa. */`,
);

const vars = {
  '--cream': '#f9f5ec',
  '--cream-2': '#efe5d3',
  '--surface': '#fffdf7',
  '--ink': '#23261e',
  '--ink-2': '#4d5145',
  '--muted': '#8c8a78',
  '--berry': '#8d2b2b',
  '--berry-soft': '#a83c36',
  '--gold': '#c1964c',
  '--gold-soft': '#ddc08a',
  '--terra': '#b25f2c',
};
for (const [k, v] of Object.entries(vars)) {
  css = css.replace(new RegExp(`${k}: [^;]+;`), `${k}: ${v};`);
}
// nombres de variable con sentido para esta web
css = css.replaceAll('--berry-soft', '--accent-soft').replaceAll('--berry', '--accent');
// la vinoteca no pinta nada en un restaurante: comentarios heredados
css = css.replaceAll('#b0465e', '#8d2b2b');

writeFileSync(p, css);
console.log('ok', css.length);
