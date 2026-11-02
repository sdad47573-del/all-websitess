/**
 * Datos de Frankfurt Pedralbes — Carrer de la Borda, 5, AD500 Andorra la Vella.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 42.5078297, 1.5326679, feature
 *   0x12a58ada49664313:0x1d1fbd40b8268743 (nombre, dirección, categorías, horario,
 *   teléfono, valoración y accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps: frankfurts,
 *   patatas, cerveza, barra, fachada y el kiosco amarillo con el Seat 600.
 *
 * La ficha no enlaza web propia ni publica carta ni precios: esta web no
 * inventa platos ni importes. Lo que se cita son los productos que aparecen en
 * las fotos del propio perfil.
 */

export const BUSINESS = {
	name: 'Frankfurt Pedralbes',
	fullName: 'FRANKFURT PEDRALBES',
	mark: 'FP',
	street: 'Carrer de la Borda, 5',
	city: 'Andorra la Vella',
	parish: 'Andorra la Vella',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://frankfurt-pedralbes.vercel.app',
	geo: { lat: 42.5078297, lng: 1.5326679 },
	featureId: '0x12a58ada49664313:0x1d1fbd40b8268743',
	placeId: 'ChIJE0NmSdqKpRIRQ4cmuEC9Hx0',
	channel: '/g/1q627wh5l',
	category: 'Bar · Comida rápida',
	categories: ['Bar', 'Restaurante de comida rápida'],
	phone: '+376 862 666',
	phoneHref: 'tel:+376862666',
	tagline: 'Frankfurts y comida rápida en el centro de Andorra la Vella',
	description:
		'Frankfurt Pedralbes, bar y restaurante de comida rápida en la calle de la Borda, 5, de Andorra la Vella (AD500). Frankfurts, patatas con carne y cheddar y terraza con el Seat 600 amarillo, de martes a domingo desde las 12:00.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/FRANKFURT+PEDRALBES+(rollo+low+cost+est%C3%A1+genial)/@42.5078297,1.5326679,17z/data=!4m6!3m5!1s0x12a58ada49664313:0x1d1fbd40b8268743!8m2!3d42.5078297!4d1.5326679!16s%2Fg%2F1q627wh5l',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5078297%2C1.5326679',
	embed: 'https://maps.google.com/maps?q=42.5078297,1.5326679&z=17&hl=es&output=embed',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 3.8,
	count: 1160,
	label: '3,8',
};

/** Horario que publica la ficha: lunes cerrado. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '12:00–23:00' },
	{ day: 'Miércoles', value: '12:00–23:00' },
	{ day: 'Jueves', value: '12:00–23:00' },
	{ day: 'Viernes', value: '12:00–23:30' },
	{ day: 'Sábado', value: '12:00–23:30' },
	{ day: 'Domingo', value: '12:00–23:00' },
];

/** Lo que sí consta en la ficha y en las fotos. */
export const SERVICIOS = [
	'Frankfurts',
	'Comida rápida',
	'Bar',
	'Terraza',
	'Precio bajo',
	'Aparcamiento adaptado',
];

/** Productos que aparecen en las fotos del perfil, sin precios. */
export const MENU: {
	title: string;
	items: { name: string; note: string; price?: string }[];
}[] = [
	{
		title: 'Frankfurts',
		items: [
			{
				name: 'Frankfurt clásico',
				note: 'salchicha en pan de barra, servido sobre el papel con el escudo del local',
			},
			{
				name: 'Frankfurt con queso y bacon',
				note: 'en la foto del perfil aparece con lonchas de queso fundido y bacon',
			},
			{
				name: 'Pan de barra',
				note: 'el pan es largo, tostado por fuera y blando por dentro, no el bollo dulce de hamburguesa',
			},
		],
	},
	{
		title: 'Para picar',
		items: [
			{
				name: 'Patatas con carne y cheddar',
				note: 'patatas fritas cubiertas de carne picada y salsa de queso, tal como se ven en la foto',
			},
			{
				name: 'Batatas fritas',
				note: 'ración de boniato frito servida junto a los frankfurts',
			},
			{
				name: 'Patatas fritas',
				note: 'la guarnición que acompaña los platos en las fotos del perfil',
			},
		],
	},
	{
		title: 'Para beber',
		items: [
			{
				name: 'Cerveza Borís',
				note: 'cerveza andorrana Golden Ale, botella de 33 cl, la que aparece en la foto del perfil',
			},
			{
				name: 'Refrescos',
				note: 'Coca-Cola y refrescos de lata en la barra',
			},
			{
				name: 'Café y barra',
				note: 'el local es también bar: barra larga, taburetes y cafetera',
			},
		],
	},
];

export const MENU_NOTE =
	'La ficha de Google no publica carta ni precios, y esta página no inventa importes. Los productos enumerados son los que aparecen en las fotografías del perfil del establecimiento. Para conocer la carta completa y el precio del día, llama al +376 862 666.';

export const FAQ = [
	{
		q: '¿Dónde está Frankfurt Pedralbes?',
		a: 'En la calle de la Borda, 5, en Andorra la Vella (AD500), en el centro de la parroquia. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes. De martes a jueves y el domingo abre de 12:00 a 23:00; los viernes y sábados, de 12:00 a 23:30. Es el horario que publica la ficha de Google.',
	},
	{
		q: '¿Es barato?',
		a: 'El propio nombre de la ficha lo presenta como «rollo low cost está genial», y Google lo clasifica como bar y restaurante de comida rápida. La ficha no publica precios, así que esta página no reproduce importes.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Frankfurts en pan de barra, también con queso y bacon; patatas con carne y cheddar; batatas fritas; cerveza Borís y refrescos. Es lo que muestran las fotos del perfil. La carta completa se consulta en el local.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Hay mesas y sillas en la acera, junto a la fachada amarilla, y un kiosco de madera con toldo en cuya cubierta hay un Seat 600 amarillo pintado con el nombre del local.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no ofrece reservas en línea y esta página no las gestiona. Para grupos o dudas, el teléfono publicado es el +376 862 666.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca aparcamiento adaptado para sillas de ruedas. No publica datos sobre acceso, aseo o asientos adaptados, así que esta página no los afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 3,8 sobre 5 con 1.160 reseñas en el momento de consultarla (noviembre de 2026).',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza web propia ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
