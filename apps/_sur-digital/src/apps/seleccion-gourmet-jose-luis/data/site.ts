/**
 * Datos de Selección Gourmet José Luis — carnicería, pollería y productos gourmet —
 * C. de Abtao, 22 (Retiro, 28007 Madrid).
 *
 * Fuente: ficha pública de Google Maps consultada en octubre de 2026.
 * La ficha no publica carta con precios, página web ni redes sociales.
 */

export const BUSINESS = {
	name: 'Selección Gourmet José Luis',
	fullName: 'Selección Gourmet José Luis · Carnicería y pollería',
	shortName: 'Selección Gourmet José Luis',
	mark: 'S',
	street: 'C. de Abtao, 22',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28007',
	locality: 'Retiro',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/seleccion-gourmet-jose-luis',
	geo: { lat: 40.4047375, lng: -3.6753571 },
	featureId: '0xd422796c63972f7:0x5b567571d6ad1774',
	googleCategory: 'Carnicería',
	phone: '915 01 13 30',
	phoneHref: 'tel:+34915011330',
	tagline: 'Productos gourmet a domicilio o en tienda',
	description:
		'Selección Gourmet José Luis, carnicería, pollería y productos gourmet en C. de Abtao, 22 (Retiro, 28007 Madrid). Según su ficha de Google Maps, ofrece productos gourmet a domicilio o en tienda.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Selecci%C3%B3n+gourmet+Jose+Luis/@40.4047375,-3.6753571,17z/data=!3m1!4b1!4m6!3m5!1s0xd422796c63972f7:0x5b567571d6ad1774!8m2!3d40.4047375!4d-3.6753571!16s%2Fg%2F11sfrp1bsn?authuser=0&hl=es&entry=ttu',
	reviews: 'https://search.google.com/local/reviews?placeid=ChIJ93I5xpYnQg0RdBet1nF1Vls&hl=es',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4047375%2C-3.6753571',
	embed: 'https://maps.google.com/maps?q=40.4047375,-3.6753571&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4047375,-3.6753571',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.3,
	count: 9,
	label: '4,3',
};

/** Horario de la ficha: domingo cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–14:00 y 17:30–20:30' },
	{ dia: 'Martes', horas: '9:00–14:00 y 17:30–20:30' },
	{ dia: 'Miércoles', horas: '9:00–14:00 y 17:30–20:30' },
	{ dia: 'Jueves', horas: '9:00–14:00 y 17:30–20:30' },
	{ dia: 'Viernes', horas: '9:00–14:00 y 17:30–20:30' },
	{ dia: 'Sábado', horas: '9:00–14:00' },
	{ dia: 'Domingo', horas: 'Cerrado' },
];

export const HORARIO_AVISO =
	'El horario es el de la ficha de Google Maps. La ficha avisa de que el horario del Día de Todos los Santos podría ser diferente. Confirma antes de desplazarte.';

/** Lo que publican la ficha y las categorías. */
export const SERVICIOS = ['Productos gourmet a domicilio', 'Carnicería', 'Pollería'];

export const HIGHLIGHTS = [
	{
		title: 'Productos gourmet',
		text: 'La ficha indica que se pueden pedir productos gourmet a domicilio o comprarlos en tienda.',
	},
	{
		title: 'Carnicería y pollería',
		text: 'La ficha lo clasifica como carnicería y pollería, además de comida a domicilio.',
	},
];

/** La ficha no publica reseñas literales en esta web: solo la valoración y el número. */
export const RESENAS: { texto: string; valor: number }[] = [];

export const FAQ = [
	{
		q: '¿Dónde está Selección Gourmet José Luis?',
		a: 'En la C. de Abtao, 22, en Retiro, 28007 Madrid. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes de 9:00 a 14:00 y de 17:30 a 20:30. Los sábados de 9:00 a 14:00. Los domingos está cerrado.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha de Google Maps lo clasifica como carnicería, pollería y comida a domicilio, y dice que ofrece productos gourmet a domicilio o en tienda. No publica la carta ni los precios, así que se consultan por teléfono.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. Para cifras concretas conviene llamar al 915 01 13 30.',
	},
	{
		q: '¿Hay reparto a domicilio o pedidos online?',
		a: 'La ficha indica que hay productos gourmet a domicilio, pero no publica página web ni pedidos online. El único canal que aparece es el teléfono, así que el reparto se confirma llamando.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad. Conviene llamar antes si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 4,3 sobre 5 con 9 reseñas en el momento de consultar la ficha (octubre de 2026).',
	},
];
