import { readFileSync } from 'node:fs';

const text = readFileSync('scripts/tmp-chispito.txt', 'utf8').replace(/^\)\]\}'\n/, '');
const data = JSON.parse(text);

const show = (label, value) => console.log(`\n=== ${label} ===\n${JSON.stringify(value, null, 1)}`);

show('[6][11] nombre', data[6][11]);
show('[6][2] direccion lineas', data[6][2]);
show('[6][18] direccion completa', data[6][18]);
show('[6][13] categorias', data[6][13]);
show('[6][4] nota / resenas', data[6][4]);
show('[6][88] distintivo', data[6][88]);
show('[6][178] telefono', data[6][178]);
show('[6][183] plus code', data[6][183]);
show('[6][203][0] horario', data[6][203][0]);
show('[6][100] features (accesibilidad)', data[6][100]);
show('[6][154] descripcion titular', data[6][154]);
show('[6][37] lugar', data[6][37]);
show('[6][31] resenas', data[6][31]);

const strings = [];
const walk = (node, path) => {
	if (typeof node === 'string') strings.push({ path, value: node });
	else if (Array.isArray(node)) node.forEach((c, i) => walk(c, `${path}[${i}]`));
};
walk(data, '');
console.log('\n=== urls ===');
for (const s of strings)
	if (
		s.value.includes('local/reviews') ||
		s.value.includes('/g/11dxpgq62l') ||
		s.value.includes('maps/place')
	)
		console.log(s.path, s.value.slice(0, 200));
