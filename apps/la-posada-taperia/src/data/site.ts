/**
 * Datos de La Posada Tapería — Plaza del Mentidero, 1 (10800 Coria, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Posada Tapería, 39.9847827,-6.5366401,
 *   feature 0xd3de51e3a06dccb:0x19fda98de161f5e0 (dirección, teléfono, horario,
 *   nota, reseñas, categorías y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La carta y los precios salen de la carta
 * fotografiada en la propia ficha de Google Maps (la foto vertical-04), y las
 * valoraciones, de las reseñas publicadas allí.
 */

export const BUSINESS = {
	name: 'La Posada Tapería',
	mark: 'LP',
	street: 'Plaza del Mentidero, 1',
	city: 'Coria',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10800',
	country: 'ES',
	phoneDisplay: '607 57 44 16',
	phoneHref: 'tel:+34607574416',
	rating: 4.4,
	reviewsCount: 1055,
	siteUrl: 'https://la-posada-taperia.vercel.app',
	geo: { lat: 39.9847827, lng: -6.5366401 },
	featureId: '0xd3de51e3a06dccb:0x19fda98de161f5e0',
};

const CID_DECIMAL = '1872839446892770784';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Posada+Taper%C3%ADa/@39.9847827,-6.5366401,17z/data=!3m1!4b1!4m6!3m5!1s0xd3de51e3a06dccb:0x19fda98de161f5e0!8m2!3d39.9847827!4d-6.5366401!16s%2Fg%2F11dynypywq',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=39.9847827%2C-6.5366401',
	embed: 'https://maps.google.com/maps?q=39.9847827,-6.5366401&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: de martes a domingo, de 12:00 a 2:00;
 * el lunes, cerrado. Los cierres de madrugada caen ya en el día siguiente.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '12:00–2:00' },
	{ day: 'Miércoles', value: '12:00–2:00' },
	{ day: 'Jueves', value: '12:00–2:00' },
	{ day: 'Viernes', value: '12:00–2:00' },
	{ day: 'Sábado', value: '12:00–2:00' },
	{ day: 'Domingo', value: '12:00–2:00' },
];

/** Reseñas destacadas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Raciones muy generosas, riquísimas y muy buena atención, muy recomendable.',
	},
	{
		rating: 5,
		text: 'Comimos una paella estupenda y solomillo al ajo tostado buenísimo.',
	},
];

/** Servicios y datos que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Restaurante de tapas',
	'Raciones para compartir',
	'Cocina de 12:00 a 2:00',
	'En la Plaza del Mentidero',
	'Aseo adaptado',
	'Asientos adaptados',
];

/**
 * Carta con los precios de la carta fotografiada que cuelga de la ficha de Google
 * Maps (tostas y novedades). Los precios se transcriben tal cual de esa foto.
 */
export const MENU = [
	{
		title: 'Tostas',
		items: [
			{ name: 'Rociera', note: 'solomillo con cebolla caramelizada y ajo tostado · 13 €' },
			{ name: 'Extremeña', note: 'jamón, tomate y aceite · 9 €' },
			{ name: 'Griega', note: 'queso suave y queso fresco, aguacate, salmón ahumado y espárragos blancos · 12 €' },
			{ name: 'Mentidero', note: 'pollo a la plancha, torta del Casar y mermelada casera · 13 €' },
		],
	},
	{
		title: 'Novedades',
		items: [
			{ name: 'Solomillo de toro', note: 'con salsa romesco y pimientos de piquillo · 12 € (tapa) y 25 € (ración)' },
			{ name: 'Torrezno de Soria', note: 'con patatas y pimentón · 13 €' },
			{ name: 'Ensaladilla de pulpo al pimentón', note: '9 € (tapa) y 16 € (ración)' },
		],
	},
	{
		title: 'De la casa',
		items: [
			{ name: 'Cesto de pan', note: '2 €' },
			{ name: '«Paella estupenda»', note: 'así la describen las reseñas de la ficha de Google' },
			{ name: 'Solomillo al ajo tostado', note: 'el plato que repiten quienes dejan reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Posada Tapería?',
		a: 'En la Plaza del Mentidero, 1, 10800 Coria (Cáceres), en pleno casco histórico de Coria. El mapa de esta página lleva directo a la plaza; «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo, de 12:00 a 2:00. El lunes cierra. Ojo con la hora de cierre: las 2:00 son ya de madrugada, del día siguiente.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 607 57 44 16. La ficha de Google no ofrece reserva online, así que llama para mesa, grupo o cualquier consulta.',
	},
	{
		q: '¿Qué se come en La Posada Tapería?',
		a: 'Tostas y tapas para compartir, según la carta que la propia ficha de Google tiene fotografiada: tosta Rociera (13 €), Extremeña (9 €), Griega (12 €) y Mentidero (13 €), solomillo de toro con salsa romesco (12 € en tapa y 25 € en ración), torrezno de Soria (13 €) y ensaladilla de pulpo al pimentón (9 € y 16 €). En las reseñas se citan además la paella y el solomillo al ajo tostado.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Sí: 4,4 sobre 5 con 1.055 reseñas en Google. Se repiten las raciones generosas y la buena atención.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca aseo adaptado para sillas de ruedas y asientos adaptados. Está en la Plaza del Mentidero, en el centro de Coria.',
	},
];
