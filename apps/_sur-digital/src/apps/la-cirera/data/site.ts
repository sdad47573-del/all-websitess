/**
 * Datos de La Cirera — Av. de François Mitterrand, 81, AD200 Encamp (Andorra).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 42.5349471, 1.5871667, feature
 *   0x12a58a0f348f5473:0x797fc873fd118761 (nombre, dirección, categoría, horario,
 *   teléfono, valoración, accesibilidad y descripción del negocio).
 * - Fotografías del perfil del establecimiento en Google Maps: terraza, sala,
 *   fachada con los rótulos PIZZERIA, TAPAS y MENÚ DIARI, y los platos.
 *
 * La ficha no enlaza web propia ni publica carta ni precios: esta web no
 * inventa importes. Los platos que se citan son los que muestran las fotos y
 * los carteles del propio local.
 */

export const BUSINESS = {
	name: 'La Cirera',
	fullName: 'LA CIRERA',
	mark: 'LC',
	street: 'Av. de François Mitterrand, 81',
	city: 'Encamp',
	parish: 'Encamp',
	postalCode: 'AD200',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/la-cirera',
	geo: { lat: 42.5349471, lng: 1.5871667 },
	featureId: '0x12a58a0f348f5473:0x797fc873fd118761',
	placeId: 'ChIJc1SPNA-KpRIRYYcR_XPIf3k',
	channel: '/g/1ptx0kndm',
	category: 'Parrilla',
	categories: ['Parrilla'],
	phone: '+376 815 919',
	phoneHref: 'tel:+376815919',
	tagline: 'Borda y parrilla junto al Funicamp, en Encamp',
	description:
		'La Cirera, parrilla y borda de piedra en la Av. de François Mitterrand, 81, junto al Telecabina Funicamp de Encamp (AD200 Andorra). Barra con brasa, salón panorámico para 100 personas y terraza al sol, todos los días de 7:30 a 22:30.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Cirera/@42.5349471,1.5871667,17z/data=!4m6!3m5!1s0x12a58a0f348f5473:0x797fc873fd118761!8m2!3d42.5349471!4d1.5871667!16s%2Fg%2F1ptx0kndm',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5349471%2C1.5871667',
	embed: 'https://maps.google.com/maps?q=42.5349471,1.5871667&z=17&hl=es&output=embed',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 3.9,
	count: 1015,
	label: '3,9',
};

/** Horario que publica la ficha: un solo turno, todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '7:30–22:30' },
	{ day: 'Martes', value: '7:30–22:30' },
	{ day: 'Miércoles', value: '7:30–22:30' },
	{ day: 'Jueves', value: '7:30–22:30' },
	{ day: 'Viernes', value: '7:30–22:30' },
	{ day: 'Sábado', value: '7:30–22:30' },
	{ day: 'Domingo', value: '7:30–22:30' },
];

/** Lo que sí consta en la ficha y en la fachada. */
export const SERVICIOS = [
	'Parrilla y brasa',
	'Borda de piedra',
	'Salón panorámico',
	'Terraza al sol',
	'Aparcamiento para clientes',
	'Acceso y aseo adaptados',
];

/** Platos que muestran las fotos y los carteles del local, sin precios. */
export const MENU: {
	title: string;
	items: { name: string; note: string; price?: string }[];
}[] = [
	{
		title: 'De la brasa',
		items: [
			{
				name: 'Pollo a la brasa',
				note: 'servido con patatas fritas, pimientos de Padrón y alioli, tal como aparece en la foto del perfil',
			},
			{
				name: 'Carn a la brasa',
				note: 'el cartel de la terraza anuncia carnes a la brasa como plato principal',
			},
			{
				name: 'A la parrilla',
				note: 'la ficha clasifica el local como parrilla y la sala tiene la brasa a la vista, junto a la barra',
			},
		],
	},
	{
		title: 'Pizzería',
		items: [
			{
				name: 'Pizzas al horno',
				note: 'el rótulo PIZZERIA preside la fachada; en las fotos, pizzas de cebolla roja con jamón y de pollo con pimiento y salsa',
			},
		],
	},
	{
		title: 'Barra y tapas',
		items: [
			{
				name: 'Tapas',
				note: 'el cartel TAPAS de la entrada y la barra con taburetes y mesas de barril',
			},
			{
				name: 'Hamburguesas',
				note: 'con queso fundido y ración de patatas; aparece en las fotos del perfil',
			},
			{
				name: 'Menú diario',
				note: 'el cartel de la terraza anuncia menú diario y menú de fin de semana',
			},
		],
	},
];

export const MENU_NOTE =
	'La ficha de Google no publica la carta ni los precios, y esta página no inventa importes. Los platos enumerados son los que muestran las fotografías del perfil y los carteles de la fachada: brasa, pizzería, tapas, hamburguesas y menú diario. Para saber el menú del día y el precio, llama al +376 815 919.';

export const FAQ = [
	{
		q: '¿Dónde está La Cirera?',
		a: 'En la Av. de François Mitterrand, 81, en Encamp (AD200 Andorra), junto al Telecabina Funicamp. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 7:30 a 22:30, sin cerrar a mediodía. Así lo publica la ficha de Google y así lo anuncia el cartel de la terraza: «Restaurant La Cirera non stop».',
	},
	{
		q: '¿Se puede aparcar?',
		a: 'Sí. El negocio describe una zona propia de aparcamiento para clientes, dos parkings cercanos y mucha zona azul en los alrededores. Está al lado de la estación del Funicamp.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es una parrilla con brasa a la vista: pollo y carnes a la brasa, pizzas de la pizzería, tapas, hamburguesas y menú diario. En las fotos del perfil aparecen el pollo con patatas y pimientos, las pizzas y las hamburguesas con queso.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha de Google no publica carta ni importes, así que esta página no los reproduce. El menú del día y los precios se consultan por teléfono o en el propio local.',
	},
	{
		q: '¿Se puede ir en grupo?',
		a: 'El local describe capacidad para unas 150 personas repartidas en tres espacios: la barra con la brasa, un salón de 100 comensales con ventanales y la terraza. Para grupos conviene llamar antes al +376 815 919.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, una terraza de madera con toldos, mesas y sillas, flores y vistas a la montaña de Encamp. Es la que aparece en las fotos del perfil.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 3,9 sobre 5 con 1.015 reseñas en el momento de consultarla (noviembre de 2026).',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza web propia ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
