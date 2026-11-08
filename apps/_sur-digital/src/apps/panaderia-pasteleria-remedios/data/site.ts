/**
 * Datos de Panadería - Pastelería Ntra. Señora de los Remedios —
 * C. Magistrado Salvador Barbera, 11 (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería - Pastelería Ntra. Señora de los
 *   Remedios, 36.7244262,-4.4440488, feature
 *   0xd72f70c7671e08b:0x979ff2a531605dd6.
 * - Dirección, categoría, teléfono, valoración, reseñas y horario: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios. El mostrador
 * recoge solo lo que citan las reseñas (pan, bocadillos, variedad) y lo que
 * muestran las fotos del perfil, sin importes.
 */

export const BUSINESS = {
	name: 'Panadería - Pastelería Ntra. Señora de los Remedios',
	shortName: 'Remedios',
	mark: 'R',
	street: 'C. Magistrado Salvador Barbera, 11',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '675 16 75 66',
	phoneHref: 'tel:+34675167566',
	rating: 4.6,
	reviewsCount: 11,
	siteUrl: 'https://www.sur-digital.com/panaderia-pasteleria-remedios',
	geo: { lat: 36.7244262, lng: -4.4440488 },
	featureId: '0xd72f70c7671e08b:0x979ff2a531605dd6',
	placeId: 'ChIJi-Bxdgz3cg0R1l1gMaXyn5c',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería de barrio en Bailén-Miraflores',
	description:
		'Panadería - Pastelería Ntra. Señora de los Remedios, en C. Magistrado Salvador Barbera, 11 (Bailén-Miraflores, 29010 Málaga). Pan y bocadillos de barrio. Teléfono 675 16 75 66. 4,6 sobre 5 en Google.',
	hoursSummary: 'L–V 7:00–15:00 · S 7:30–15:00 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+-+Pasteler%C3%ADa+Ntra.+Se%C3%B1ora+de+los+Remedios/@36.7244262,-4.4440488,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70c7671e08b:0x979ff2a531605dd6!8m2!3d36.7244262!4d-4.4440488!16s%2Fg%2F11cmg1bctj?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=10926300757888654787',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7244262%2C-4.4440488',
	embed: 'https://maps.google.com/maps?q=36.7244262,-4.4440488&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7244262,-4.4440488',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:00–15:00' },
	{ day: 'Sábado', value: '7:30–15:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) puede variar; conviene llamar antes de ir.';

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Buen sitio, te prepara bocadillos; la que vende es muy amable y el precio está bien.',
	},
	{
		rating: 5,
		text: 'Buen pan, mucha variedad, muy agradable y simpática la dueña.',
	},
	{
		rating: 5,
		text: 'Trato muy amable, siempre con una sonrisa, pan de buena calidad y económico.',
	},
];

/** Lo que el cartel, las fotos y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Pan recién hecho',
	'Dulces artesanos',
	'Bocadillos preparados',
	'Charcutería',
	'Despensa',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan',
		text: 'El cartel de la fachada anuncia «pan recién hecho» y una reseña habla de «buen pan, mucha variedad».',
	},
	{
		title: 'Los bocadillos',
		text: 'El mismo cartel promete «bocadillos recién preparados», y una de las reseñas empieza justamente por eso.',
	},
	{
		title: 'La despensa',
		text: 'La vitrina y las estanterías suman charcutería, tortas de aceite, magdalenas, galletas, arroz y conservas.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Del obrador',
		items: [
			{ name: 'Pan recién hecho', note: 'Lo anuncia el cartel de la fachada; «buen pan, mucha variedad», según una reseña.' },
			{ name: 'Dulces artesanos', note: 'Del cartel de la fachada; en la vitrina hay magdalenas, perrunas y bizcochos.' },
			{ name: 'Bocadillos recién preparados', note: 'El cartel los anuncia y una reseña lo confirma.' },
		],
	},
	{
		title: 'La vitrina',
		items: [
			{ name: 'Charcutería', note: 'Chorizo, morcilla de Ronda y salchichón, en las fotos del perfil.' },
			{ name: 'Tortas de aceite', note: 'Envasadas, de la marca Carmen Lupiáñez.' },
			{ name: 'Magdalenas y perrunas', note: 'Envasadas, junto a los bizcochos, en la vitrina.' },
		],
	},
	{
		title: 'La despensa',
		items: [
			{ name: 'Galletas', note: 'María y Gullón, entre otras, en la estantería.' },
			{ name: 'Arroz y conservas', note: 'La Cazuela, Calvo y La Piña, en las fotos.' },
			{ name: 'Anchoas y aceites', note: 'Conservas y aceite de girasol, en la misma estantería.' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería Ntra. Señora de los Remedios?',
		a: 'En la calle Magistrado Salvador Barbera, 11, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:00 a 15:00 y el sábado de 7:30 a 15:00. El domingo está cerrado. El 1 de noviembre el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan recién hecho, dulces y bocadillos preparados, además de charcutería y una despensa con tortas de aceite, magdalenas, galletas, arroz y conservas, según el cartel y las fotos del perfil. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Hacen bocadillos?',
		a: 'Sí: el cartel de la fachada anuncia «bocadillos recién preparados» y una de las reseñas dice que «te prepara bocadillos». Los precios no están publicados.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 675 16 75 66. No publica página web ni correo electrónico.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información sobre accesibilidad, así que esta página no la afirma. Si necesitas un acceso concreto, llama antes al 675 16 75 66.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 11 reseñas en Google. Las tres que se citan en esta página son de cinco estrellas y hablan del pan, los bocadillos y el trato.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
];
