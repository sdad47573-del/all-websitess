/**
 * Datos de Astuy Taberna (hamburguesería).
 * De la Cosa Juan Kalea, 8, 48004 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 * Lo que la ficha no publica (carta, precios, horario completo, web o redes
 * sociales) no se inventa en esta web.
 */

export const BUSINESS = {
	name: 'Astuy Taberna',
	fullName: 'Astuy Taberna · Hamburguesería',
	shortName: 'Astuy',
	mark: 'A',
	street: 'De la Cosa Juan Kalea, 8',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48004',
	country: 'ES',
	phone: '944 05 13 63',
	phoneHref: 'tel:+34944051363',
	siteUrl: 'https://www.sur-digital.com/astuy-taberna',
	googleCategory: 'Hamburguesería',
	tagline: 'Taberna y hamburguesería en Bilbao',
	description:
		'Astuy Taberna, taberna y hamburguesería en De la Cosa Juan Kalea, 8 (48004 Bilbao, Bizkaia). Según su ficha de Google Maps, hamburguesería.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Astuy+Taberna/@43.251577,-2.913393,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4e4b76e4dcf9:0x49f9a5fe1bab88ab!8m2!3d43.251577!4d-2.913393!16s%2Fg%2F1thvt_z2?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.251577%2C-2.913393',
	embed: 'https://maps.google.com/maps?q=43.251577,-2.913393&z=17&hl=es&output=embed',
};

/** Valoración publicada en la ficha. */
export const RATING = {
	value: 4.2,
	label: '4,2',
};

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Hamburguesería',
	'De la Cosa Juan Kalea, 8',
	'Bilbao · 48004',
	'4,2 en Google',
];

export const HIGHLIGHTS = [
	{
		title: 'Hamburguesería',
		text: 'Es la categoría con la que Google clasifica el local en su ficha pública. El nombre completo es Astuy Taberna.',
	},
	{
		title: 'En De la Cosa Juan Kalea',
		text: 'El local está en el número 8, en Bilbao (48004, Bizkaia). La ficha de Google incluye la ubicación y el teléfono.',
	},
	{
		title: 'Fotos del perfil',
		text: 'Las imágenes de esta página proceden del perfil público del establecimiento en Google Maps.',
	},
];

/** Los datos que publica la ficha, sin añadir nada más. */
export const FICHA = [
	{ label: 'Categoría en Google', value: 'Hamburguesería' },
	{ label: 'Valoración', value: '4,2 sobre 5' },
	{ label: 'Dirección', value: 'De la Cosa Juan Kalea, 8 · 48004 Bilbao' },
	{ label: 'Teléfono', value: '944 05 13 63' },
];

export const FAQ = [
	{
		q: '¿Dónde está Astuy Taberna?',
		a: 'En De la Cosa Juan Kalea, 8, en Bilbao (48004, Bizkaia). El mapa de esta página abre las coordenadas de la ficha y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué teléfono tiene?',
		a: 'El 944 05 13 63, el que publica su ficha de Google Maps.',
	},
	{
		q: '¿Qué tipo de local es?',
		a: 'La ficha de Google lo clasifica como hamburguesería. El nombre del local es Astuy Taberna.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Un 4,2 sobre 5 en el momento de consultar la ficha (noviembre de 2026).',
	},
	{
		q: '¿Cómo llego?',
		a: 'El mapa incrustado en la sección «Dónde está» muestra la ubicación exacta. El botón «Cómo llegar» abre la ruta en Google Maps desde el punto en el que estés.',
	},
	{
		q: '¿Hay carta o precios en esta web?',
		a: 'No. Esta página no publica carta ni precios: solo los datos que aparecen en la ficha y el teléfono del local para preguntar.',
	},
];
