/**
 * Comprueba, sin construir el sitio entero, que LocalFooter y LocalSeo ponen sus rutas bajo el
 * prefijo de la landing cuando se renderizan en `/<slug>/…`, y que no lo ponen fuera de una.
 *
 * Uso (desde apps/_sur-digital, para que resuelvan `astro` y `@astro-components`):
 *   node ../../.tmp-verificar-componentes.mjs
 */

import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import LocalFooter from '@astro-components/src/local/Footer.astro';
import LocalSeo from '@astro-components/src/local/Seo.astro';

const container = await AstroContainer.create();

const footerProps = {
	mark: 'AL',
	name: 'Almirez',
	address: 'C. Margarita Xirgu, 4 · 29010 Málaga',
	links: [],
	phone: '+34 644 67 80 99',
	phoneHref: 'tel:+34644678099',
	legal: 'Datos tomados de la ficha pública.',
	ctaLabel: 'Llamar',
};

const seoProps = {
	name: 'Almirez',
	description: 'Comida tradicional para llevar en Teatinos, Málaga.',
	keywords: 'Almirez, comida para llevar',
	canonical: 'https://www.sur-digital.com/almirez/',
	site: 'https://www.sur-digital.com/almirez',
	ogTitle: 'Almirez',
	ogDescription: 'Comida tradicional para llevar en Teatinos, Málaga.',
	ogImage: 'https://www.sur-digital.com/almirez/og.jpg',
	ogImageAlt: 'Almirez',
	ogImageWidth: 1200,
	ogImageHeight: 630,
	themeColor: '#1c1712',
	street: 'C. Margarita Xirgu, 4',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	latitude: 36.72,
	longitude: -4.47,
	placeName: 'Teatinos, Málaga',
	schemas: [],
};

const render = async (Component, url) =>
	container.renderToString(Component, {
		props: Component === LocalFooter ? footerProps : seoProps,
		request: new Request(url),
	});

const checks = [];
const check = (name, ok) => {
	checks.push([name, ok]);
	console.log(`${ok ? '✓' : '✖'} ${name}`);
};

const landingFooter = await render(LocalFooter, 'https://www.sur-digital.com/almirez/');
check('pie de landing enlaza su aviso legal', landingFooter.includes('href="/almirez/aviso-legal"'));
check(
	'pie de landing enlaza privacidad y cookies',
	landingFooter.includes('/almirez/aviso-legal#privacidad') &&
		landingFooter.includes('/almirez/aviso-legal#cookies'),
);

const legalFooter = await render(
	LocalFooter,
	'https://www.sur-digital.com/almirez/aviso-legal/',
);
check(
	'pie de la página legal usa el mismo prefijo',
	legalFooter.includes('href="/almirez/aviso-legal"'),
);

const landingSeo = await render(LocalSeo, 'https://www.sur-digital.com/almirez/');
check('favicon de landing bajo su prefijo', landingSeo.includes('href="/almirez/favicon.svg"'));
check('canonical intacto', landingSeo.includes('href="https://www.sur-digital.com/almirez/"'));

const homeSeo = await render(LocalSeo, 'https://www.sur-digital.com/');
check('favicon de la raíz sin prefijo', homeSeo.includes('href="/favicon.svg"'));

process.exit(checks.every(([, ok]) => ok) ? 0 : 1);
