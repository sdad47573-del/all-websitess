import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { afterAll, describe, expect, test } from 'bun:test';

/**
 * Estas reglas miran el conjunto de rutas de una web, no un fichero suelto, así que el test
 * monta una web de mentira en un directorio temporal y ejecuta el verificador contra ella.
 */
const fixture = mkdtempSync(join(tmpdir(), 'check-site-content-'));

function writeApp(name, pages: Record<string, string>) {
	const dir = join(fixture, 'apps', name);
	mkdirSync(join(dir, 'src', 'pages'), { recursive: true });
	for (const [file, source] of Object.entries(pages)) {
		const full = join(dir, 'src', 'pages', file);
		mkdirSync(dirname(full), { recursive: true });
		writeFileSync(full, source);
	}
	return name;
}

/** Una portada mínima con la cabecera que el verificador espera. */
const landing = (title: string, description: string) => `<!doctype html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<title>${title}</title>
		<meta name="description" content="${description}" />
		<meta name="robots" content="index, follow" />
		<link rel="canonical" href="https://ejemplo.vercel.app/" />
		<meta property="og:title" content="${title}" />
		<meta property="og:description" content="${description}" />
		<meta property="og:image" content="https://ejemplo.vercel.app/og.png" />
		<meta property="og:url" content="https://ejemplo.vercel.app/" />
		<meta property="og:locale" content="es_ES" />
	</head>
	<body><main><h1>Cerrajería</h1></main></body>
</html>
`;

function runChecker(...apps: string[]) {
	const result = Bun.spawnSync({
		cmd: ['bun', join(import.meta.dir, '..', 'check-site-content.mjs'), ...apps],
		cwd: fixture,
		env: { ...process.env, CHECK_SITES_ROOT: fixture },
	});
	return {
		output: result.stdout.toString() + result.stderr.toString(),
		code: result.exitCode,
	};
}

afterAll(() => rmSync(fixture, { recursive: true, force: true }));

describe('duplicate-page', () => {
	test('avisa cuando dos rutas de la misma web compiten por el mismo título y descripción', () => {
		const app = writeApp('duplicada', {
			'index.astro': landing('Cerrajero Barato Málaga 24h', 'Servicio de cerrajería en Málaga.'),
			'copia.astro': landing('Cerrajero Barato Málaga 24h', 'Servicio de cerrajería en Málaga.'),
		});
		const { output } = runChecker(app);
		expect(output).toContain('[duplicate-page]');
		expect(output).toContain('index.astro');
		expect(output).toContain('copia.astro');
	});

	test('avisa también cuando el título y la descripción llegan por props del Layout', () => {
		const page = (file) => `---
import Layout from '../layouts/Layout.astro';
---

<Layout
	title="Cerrajero Barato Málaga 24h – Apertura puertas y cambio cerraduras"
	description="Servicio profesional de cerrajería y persianas en Málaga 24 horas. Teléfono 686 29 89 29."
>
	<h1>Cerrajería</h1>
</Layout>
`;
		const app = writeApp('props', {
			'index.astro': page('index'),
			'index2.astro': page('index2'),
		});
		expect(runChecker(app).output).toContain('[duplicate-page]');
	});

	test('no seodea si cada página tiene su propio título', () => {
		const app = writeApp('distintas', {
			'index.astro': landing('Cerrajero Barato Málaga 24h Apertura de puertas', 'Servicio de cerrajería en Málaga las 24 horas.'),
			'aviso-legal.astro': landing('Aviso legal y privacidad | Cerrajería Málaga', 'Aviso legal, privacidad y cookies de la cerrajería.'),
		});
		expect(runChecker(app).output).not.toContain('[duplicate-page]');
	});

	test('no compara páginas de webs distintas: cada una tiene su propio dominio', () => {
		writeApp('una', { 'index.astro': landing('Cerrajero Málaga 24 h', 'Cerrajería urgente en Málaga capital.') });
		writeApp('otra', { 'index.astro': landing('Cerrajero Málaga 24 h', 'Cerrajería urgente en Málaga capital.') });
		expect(runChecker('una', 'otra').output).not.toContain('[duplicate-page]');
	});

	test('las páginas que no declaran título no se consideran duplicadas entre sí', () => {
		const app = writeApp('sin-titulo', {
			'index.astro': '<div>Contenido</div>',
			'otra.astro': '<div>Otro contenido</div>',
		});
		expect(runChecker(app).output).not.toContain('[duplicate-page]');
	});

	test('no marca un panel de administración, donde el único title es el de un botón', () => {
		const panel = (file) => `---
import CustomLayout from '../../layouts/CustomLayout.astro';
---

<CustomLayout>
	<div id="root">
		<button title="Editar" aria-label="Editar la categoría">Editar</button>
		<h1>Categorías</h1>
	</div>
</CustomLayout>
`;
		const app = writeApp('panel', {
			'index.astro': landing('Panel del bar | gestión de cartas', 'Acceso restringido al panel de gestión.'),
			'dashboard/index.astro': panel('index'),
			'dashboard/categories.astro': panel('categories'),
			'dashboard/offers.astro': panel('offers'),
		});
		expect(runChecker(app).output).not.toContain('[duplicate-page]');
	});

	test('el aviso nombra la ruta gemela y no se repite a sí mismo', () => {
		const app = writeApp('nombres', {
			'index.astro': landing('Cerrajero Barato Málaga 24h', 'Servicio de cerrajería en Málaga.'),
			'index2.astro': landing('Cerrajero Barato Málaga 24h', 'Servicio de cerrajería en Málaga.'),
		});
		const { output } = runChecker(app);
		// La línea que importa es la de `index2.astro`: el campo `file` va justo antes de la
		// regla, así que se ancla ahí para no confundirse con el aviso de `index.astro`, que
		// menciona `index2.astro` dentro del mensaje.
		const aviso = output
			.split('\n')
			.find((line) => /index2\.astro:?\d*\s.*\[duplicate-page\]/.test(line));
		expect(aviso).toContain('contenido idéntico al de index.astro:');
		expect(aviso).not.toContain('index2.astro, index2.astro');
	});
});

describe('draft-file', () => {
	test('avisa de una ruta con nombre de copia o borrador', () => {
		const app = writeApp('borrador', {
			'index.astro': landing('Cerrajero Málaga 24 h Apertura de puertas', 'Cerrajería urgente en Málaga capital.'),
			'copia.astro': landing('Otra página distinta de la anterior', 'Descripción totalmente diferente aquí.'),
			'test.astro': landing('Página de pruebas sin sentido', 'Otra descripción que no coincide con nada.'),
		});
		const { output } = runChecker(app);
		expect(output).toContain('[draft-file]');
		expect(output).toContain('copia.astro');
		expect(output).toContain('test.astro');
	});

	test('avisa de un componente o dato con nombre de copia, no solo de páginas', () => {
		const app = writeApp('componente-copia', {
			'index.astro': landing('Cerrajero Málaga 24 h Apertura de puertas', 'Cerrajería urgente en Málaga capital.'),
		});
		const dir = join(fixture, 'apps', app, 'src', 'data');
		mkdirSync(dir, { recursive: true });
		writeFileSync(join(dir, 'data copy.astro'), 'export const PHONE = "686 29 89 29";\n');
		const { output } = runChecker(app);
		expect(output).toContain('[draft-file]');
		expect(output).toContain('data copy.astro');
	});

	test('una web sin restos de borrador no produce avisos de esta regla', () => {
		const app = writeApp('limpia', {
			'index.astro': landing('Cerrajero Málaga 24 h Apertura de puertas', 'Cerrajería urgente en Málaga capital.'),
			'contacto.astro': landing('Contacto y teléfono de la cerrajería', 'Cómo contactar con la cerrajería en Málaga.'),
		});
		expect(runChecker(app).output).not.toContain('[draft-file]');
	});
});describe('draft-file con assets sin nombre útil', () => {
	/**
	 * Una web con un único asset. Cada test usa la suya porque los assets se acumulan en la
	 * fixture: si compartieran web, los avisos de un test se colarían en el siguiente.
	 */
	function webWithAsset(name: string, file = name) {
		const app = `fotos-${name.replace(/\W+/g, '-')}`;
		writeApp(app, {
			'index.astro': landing(
				'A Fuego Brasería | Parrilla de encina en Córdoba',
				'Brasería de carbón de encina en el Av. Al-Nasir de Córdoba capital, con fotos del local.',
			),
		});
		const full = join(fixture, 'apps', app, 'src', 'assets', file);
		mkdirSync(dirname(full), { recursive: true });
		writeFileSync(full, 'imagen');
		return app;
	}

	test('avisa de una imagen llamada unnamed', () => {
		const app = webWithAsset('unnamed (4).jpg');
		const { output } = runChecker(app);
		expect(output).toContain('[draft-file]');
		expect(output).toContain('no dice qué contiene');
	});

	test('avisa de los nombres genéricos típicos de una descarga de móvil', () => {
		for (const name of ['imagen.png', 'IMG_2043.jpg', 'foto-1.jpg', 'sin nombre.jpg']) {
			const app = webWithAsset(name);
			expect(runChecker(app).output).toContain('[draft-file]');
		}
	});

	test('no se coge con un nombre que sí explica de dónde viene la foto', () => {
		for (const name of [
			'a-fuego-braseria-cordoba-foto-01.jpg',
			'cerrajeria-dilo-malaga-avatar-resena-2.png',
		]) {
			const app = webWithAsset(name, join('fotos', name));
			expect(runChecker(app).output).not.toContain('[draft-file]');
		}
	});

	test('no marca un logo, que no es una foto suelta', () => {
		const app = webWithAsset('logo.svg');
		expect(runChecker(app).output).not.toContain('[draft-file]');
	});
});

describe('el verificador sigue terminando bien', () => {
	test('sale con código 0 cuando solo hay avisos', () => {
		const app = writeApp('solo-avisos', {
			'index.astro': landing('Cerrajero Málaga 24 h Apertura de puertas', 'Cerrajería urgente en Málaga capital.'),
			'copia.astro': landing('Cerrajero Málaga 24 h Apertura de puertas', 'Cerrajería urgente en Málaga capital.'),
		});
		expect(runChecker(app).code).toBe(0);
	});
});
