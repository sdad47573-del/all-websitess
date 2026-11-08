/**
 * Datos de El Pescadito — Av. de Uruguay, 6, 03502 Benidorm (Alicante).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «El Pescadito», 38.5387628,-0.1400331,
 *   feature 0xd6204c567304a91:0x7cb81c5456339d42.
 * - Nombre, dirección, teléfono, categorías, valoración, horario y reseñas:
 *   ficha pública de Google consultada el 1 de noviembre de 2026.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs).
 *
 * La ficha no publica carta, precios ni web propia: lo que aparece en la web
 * es lo que dice la ficha y lo que se reconoce en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'El Pescadito',
	fullName: 'El Pescadito',
	shortName: 'El Pescadito',
	mark: 'EP',
	street: 'Av. de Uruguay, 6',
	district: 'Benidorm',
	city: 'Benidorm',
	region: 'Comunidad Valenciana',
	postalCode: '03502',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-pescadito',
	geo: { lat: 38.5387628, lng: -0.1400331 },
	featureId: '0xd6204c567304a91:0x7cb81c5456339d42',
	placeId: 'ChIJkUowZ8UEYg0RQp0zVlQcuHw',
	plusCode: '8CCXGVQ5+GX',
	googleCategory: 'Marisquería y restaurante mediterráneo',
	phone: '965 86 60 03',
	phoneHref: 'tel:+34965866003',
	tagline: 'Marisquería y arroces en Benidorm',
	description:
		'El Pescadito, en la Avenida de Uruguay, 6 (03502 Benidorm, Alicante). Marisquería y restaurante mediterráneo: paellas, pescado a la plancha, fritura y marisco, con comedor de mantel blanco. Martes a domingo de 10:30 a 17:00; lunes cerrado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Pescadito/@38.5387628,-0.1400331,17z/data=!3m1!4b1!4m6!3m5!1s0xd6204c567304a91:0x7cb81c5456339d42!8m2!3d38.5387628!4d-0.1400331!16s%2Fg%2F11cp5q3s5m?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.5387628%2C-0.1400331',
	embed: 'https://maps.google.com/maps?q=38.5387628,-0.1400331&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.5387628,-0.1400331',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.5,
	count: 1117,
	label: '4,5',
};

/**
 * Horario que publica la ficha. Viernes y sábado abren también por la noche,
 * de 20:00 a 24:00.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '10:30–17:00' },
	{ dia: 'Miércoles', horas: '10:30–17:00' },
	{ dia: 'Jueves', horas: '10:30–17:00' },
	{ dia: 'Viernes', horas: '10:30–17:00 · 20:00–24:00' },
	{ dia: 'Sábado', horas: '10:30–17:00 · 20:00–24:00' },
	{ dia: 'Domingo', horas: '10:30–17:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advertía de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin aviso; confírmalo por teléfono antes de ir.';

/** Lo que la ficha y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Marisquería',
	'Cocina mediterránea',
	'Arroces y paellas',
	'Pescado a la plancha',
	'Fritura y marisco',
	'Comedor con mesas',
	'Acceso adaptado',
	'Para compartir',
];

export const HIGHLIGHTS = [
	{
		title: 'Marisquería y cocina mediterránea',
		text: 'Son las dos categorías con las que la ficha de Google describe el local. En las fotos del perfil hay paella de mariscos, gambas rojas, almejas y calamares: la despensa de la costa, servida en platos grandes para compartir.',
	},
	{
		title: 'Arroces en paellera',
		text: 'La paella de mariscos aparece en el perfil con gambones, mejillones, calamar y limón, y la reseña de una clienta cuenta que pidieron «paella de mariscos para 2, muy generosa y rica». Se sirve en la paellera, en la mesa.',
	},
	{
		title: 'Un comedor clásico',
		text: 'La sala tiene mesas con mantel blanco, copas puestas, sillas de madera y una bodega en arco al fondo, con el mural de un barco y sus velas en una pared. Es un comedor de mantel y mantelería, no una barra rápida.',
	},
	{
		title: '4,5 sobre 5 con 1.117 reseñas',
		text: 'La ficha de Google le da 4,5 sobre 5 con 1.117 opiniones (noviembre de 2026). Las reseñas que se ven destacan el trato, las raciones grandes y la variedad de platos a buen precio.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'El trato espectacular,el arroz buenísimo,nos pusieron una sepia buenísima.',
		valor: 5,
	},
	{
		texto: 'Buen restaurante, raciones grandes, mucha variedad de platos y de buena calidad.',
		valor: 5,
	},
	{
		texto: 'También pedimos paella de mariscos para 2, muy generosa y rica.',
		valor: 5,
	},
];

/**
 * Lo que se reconoce en las fotos del perfil. La ficha no publica carta ni
 * precios, así que no se ponen importes.
 */
export const MENU = [
	{
		title: 'Arroces y paellas',
		items: [
			{ name: 'Paella de mariscos', note: 'en paellera, con gambones, mejillones, calamar y limón' },
			{ name: 'Arroz con calamares', note: 'arroz amarillo con anillas de calamar, en la misma paellera' },
			{ name: 'Paella para dos', note: 'una reseña la pide «para 2» y la describe como «muy generosa»' },
		],
	},
	{
		title: 'Del mar a la plancha',
		items: [
			{ name: 'Lenguado a la plancha', note: 'con patatas panadera y pisto de tomate y pimiento' },
			{ name: 'Pescado a la plancha', note: 'pieza entera con chipirones y mejillones, limón aparte' },
			{ name: 'Marisco a la plancha', note: 'chipirones y mejillones en la misma bandeja' },
		],
	},
	{
		title: 'Fritura y para compartir',
		items: [
			{ name: 'Calamares a la andaluza', note: 'anillas rebozadas con limón' },
			{ name: 'Gambas rojas', note: 'bandeja de gambas cocidas con limón' },
			{ name: 'Almejas', note: 'fuente de almejas abiertas con limón, para mojar pan' },
			{ name: 'Fritura de pescado', note: 'pescaditos, calamar y gambas en el plato del local' },
		],
	},
	{
		title: 'Postres y sobremesa',
		items: [
			{ name: 'Crema catalana', note: 'en cazuela de barro, con la azúcar quemada' },
			{ name: 'Café y copa', note: 'la ficha no publica carta de postres ni de bebidas' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Pescadito?',
		a: 'En la Avenida de Uruguay, 6, 03502 Benidorm (Alicante). La ficha de Google sitúa el local en las coordenadas 38.5387628, -0.1400331, en la zona de la avenida de Uruguay. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, de martes a jueves y el domingo abre de 10:30 a 17:00; el viernes y el sábado abre también por la noche, de 20:00 a 24:00; el lunes está cerrado. El día que se consultó la ficha (1 de noviembre) Google advertía de que el horario podría ser distinto por el Día de Todos los Santos, así que conviene llamar antes de ir en festivo.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el 965 86 60 03. No tiene web propia ni sistema de reservas online, así que el teléfono es la vía para preguntar por mesa, por el menú del día o por un encargo.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como marisquería y restaurante mediterráneo. En las fotos del perfil aparecen paella de mariscos, arroz con calamares, lenguado a la plancha con patatas panadera, pescado entero con chipirones y mejillones, calamares a la andaluza, gambas rojas, almejas y crema catalana. No hay carta ni precios publicados.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no ofrece reservas online y la web del local no existe, así que la mesa se pide por teléfono, en el 965 86 60 03. En fin de semana el local abre también por la noche, y es cuando más conviene llamar antes.',
	},
	{
		q: '¿Se puede ir en silla de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas y asientos adaptados para sillas de ruedas, así que el local figura como accesible en ambos apartados. Si necesitas una mesa concreta, coméntalo al llamar.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Las fotos del perfil muestran el comedor de dentro: mesas con mantel blanco, sillas de madera y la bodega al fondo. No hay fotos de terraza en el perfil ni la ficha la menciona, así que no se puede confirmar.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'Ni la ficha ni las fotos publican precios. Las reseñas hablan de «raciones grandes» y de «mucha variedad de platos y de buena calidad», pero el precio del menú, de la paella o del marisco solo se sabe preguntando en el local.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del restaurante. Esta web es informativa: reúne los datos y las fotos públicas del local y no gestiona reservas ni pedidos.',
	},
];

export const LEGAL = {
	razonSocial: 'El Pescadito',
	actualizado: 'Noviembre de 2026',
};
