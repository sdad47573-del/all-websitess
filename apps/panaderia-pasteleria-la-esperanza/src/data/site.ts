/**
 * Datos de Panadería Pastelería La Esperanza — C. Virgen del Rocío, 70
 * (Cruz de Humilladero, 29007 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Pastelería La Esperanza,
 *   36.7167156,-4.4459899, feature 0xd72f773b7c53dc9:0x886ad6e2343c1e76.
 * - Dirección, categoría, valoración, reseñas, horario y accesibilidad: ficha
 *   pública de Google, consultada el 28 de octubre de 2026.
 * - Fotografías: perfil del establecimiento en Google Maps (tres imágenes).
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web propia, carta,
 * precios, reparto ni fecha de apertura, y no tiene descripción del titular.
 * Los productos citados son los que aparecen en las fotografías del perfil
 * (pan, bollería, dulces, aceites, conservas y bebidas) y los que mencionan las
 * reseñas. No se publican importes.
 */

export const BUSINESS = {
	name: 'Panadería Pastelería La Esperanza',
	displayName: 'La Esperanza',
	mark: 'LE',
	street: 'C. Virgen del Rocío, 70',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29007',
	country: 'ES',
	phone: null,
	rating: 4.3,
	reviewsCount: 48,
	siteUrl: 'https://panaderia-pasteleria-la-esperanza.vercel.app',
	geo: { lat: 36.7167156, lng: -4.4459899 },
	featureId: '0xd72f773b7c53dc9:0x886ad6e2343c1e76',
	placeId: 'ChIJyT3Ft3P3cg0Rdh48NOLWaog',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería en Cruz de Humilladero',
	description:
		'Panadería Pastelería La Esperanza, en C. Virgen del Rocío, 70 (Cruz de Humilladero, 29007 Málaga). Pan del día, bollería, dulces y despensa de barrio. Sin teléfono ni web publicados en Google.',
	hoursSummary: 'Lunes a viernes, 8:00–21:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Pasteler%C3%ADa+La+Esperanza/@36.7167156,-4.4459899,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f773b7c53dc9:0x886ad6e2343c1e76!8m2!3d36.7167156!4d-4.4459899!16s%2Fg%2F11h70qfmh5',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7167156%2C-4.4459899',
	embed: 'https://maps.google.com/maps?q=36.7167156,-4.4459899&z=17&hl=es&output=embed',
};

/** Horario del bloque estructurado de la ficha: sin cierre de mediodía. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–21:00' },
	{ day: 'Sábado y domingo', value: '8:00–15:00' },
];

/** Reseñas publicadas en la ficha. La primera se cita en la portada. */
export const REVIEW_QUOTE =
	'Muy buen pan y personal muy agradable y muy buen trato y muy buenos dulces';

export const REVIEWS = [
	{
		text: 'Muy buen pan y personal muy agradable y muy buen trato y muy buenos dulces',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
	{
		text: 'Profesionalidad fantástica!',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
	{
		text: 'Te atienden mi bien y amables.',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
];

/** Lo que la ficha, el rótulo y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Pan del día',
	'Pastelería',
	'Bollería',
	'Dulces',
	'Aceites y conservas',
	'Bebidas',
	'Cruz de Humilladero',
];

export const HIGHLIGHTS = [
	{
		number: '01',
		title: 'El pan del día',
		text: 'Las estanterías del local, a la vista en la foto del interior, se llenan de barras, hogazas y panecillos. Una de las reseñas lo resume así: «muy buen pan».',
	},
	{
		number: '02',
		title: 'Dulces de vitrina',
		text: 'El nombre de la casa es panadería y pastelería. En el perfil aparece una bandeja de dulces redondos con crema y fruta confitada, y las reseñas hablan de «muy buenos dulces».',
	},
	{
		number: '03',
		title: 'Despensa de barrio',
		text: 'Junto al pan y la vitrina de bollería, el local tiene estanterías con aceites, conservas y bebidas: la compra diaria del barrio se resuelve en el mismo mostrador.',
	},
];

/**
 * Lo que aparece en las fotografías del perfil y en las reseñas.
 * La ficha no publica carta ni precios, así que no se muestran importes.
 */
export const MENU = [
	{
		title: 'Del horno',
		kicker: 'Cada mañana',
		items: [
			{
				name: 'Pan del día',
				note: '«muy buen pan», en palabras de una reseña de la ficha',
			},
			{
				name: 'Barras y hogazas',
				note: 'alineadas en las estanterías del obrador, en la foto del interior',
			},
			{
				name: 'Panecillos',
				note: 'piezas pequeñas junto a las barras, en la misma estantería',
			},
		],
	},
	{
		title: 'De la pastelería',
		kicker: 'Vitrina',
		items: [
			{
				name: 'Dulces del mostrador',
				note: 'las reseñas citan los «muy buenos dulces» de la casa',
			},
			{
				name: 'Dulces con crema y fruta confitada',
				note: 'bandeja fotografiada en el perfil de Google',
			},
			{
				name: 'Bollería',
				note: 'en la vitrina, junto al pan y a los dulces',
			},
		],
	},
	{
		title: 'De despensa',
		kicker: 'Mostrador',
		items: [
			{
				name: 'Aceites y conservas',
				note: 'estanterías visibles en la foto del interior del local',
			},
			{
				name: 'Bebidas',
				note: 'botellas y zumos en las mismas estanterías',
			},
			{
				name: 'La compra del día',
				note: 'pan, dulce y despensa en un mismo mostrador de barrio',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Pastelería La Esperanza?',
		a: 'En la calle Virgen del Rocío, 70, en el barrio de Cruz de Humilladero (29007 Málaga). El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:00 a 21:00, sin cierre de mediodía. Sábado y domingo atiende de 8:00 a 15:00, según el horario publicado en la ficha de Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono ni página web, y esta web no inventa ninguno. Para hablar con la panadería hay que pasar por el local, en Virgen del Rocío, 70, o escribir desde la propia ficha de Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan del día, bollería y dulces de pastelería, más una pequeña despensa con aceites, conservas y bebidas, según las fotografías del perfil. La ficha no publica carta ni precios, por eso aquí no se citan importes.',
	},
	{
		q: '¿Hacen encargos o tartas por encargo?',
		a: 'No consta en la ficha ni en la información pública consultada. La web no anuncia encargos; si necesitas algo concreto, lo directo es preguntar en el mostrador.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero no aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 48 reseñas en Google. Las opiniones destacan el pan, los dulces y el trato del personal.',
	},
	{
		q: '¿Hay reparto a domicilio o venta online?',
		a: 'No consta en la ficha ni en la información pública consultada. La web no anuncia reparto ni pedidos por internet.',
	},
	{
		q: '¿Desde cuándo existe la panadería?',
		a: 'La ficha pública no indica una fecha de apertura ni una historia del negocio. Esta página no inventa una fecha: solo reproduce lo que aparece en Google y en las fotografías del perfil.',
	},
];
