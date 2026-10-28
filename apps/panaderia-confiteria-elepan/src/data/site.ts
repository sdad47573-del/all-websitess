/**
 * Datos de Panadería - confitería Elepan — C. la Defensa, 4 (Palma-Palmilla,
 * 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería - confitería Elepan,
 *   36.7334241,-4.4359827, feature 0xd72f7a8f18282ad:0xf91e36da507b8e20.
 * - Dirección, teléfono, categoría, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google, consultada el 28 de octubre de 2026.
 * - Fotografías: perfil del establecimiento en Google Maps (diez imágenes).
 *
 * Lo que la web NO inventa: la ficha no publica web propia, descripción, carta,
 * precios, reparto ni fecha de apertura. Los productos citados son los que se
 * ven en las fotografías (pan, vitrina de pastelería, roscos, troncos de
 * Navidad, turrones y despensa) y los que mencionan las reseñas. El cartel «Se
 * hacen tartas por encargo» aparece en el escaparate, en una foto del perfil.
 * No se publican importes, aunque algunas fotos muestren etiquetas antiguas.
 */

export const BUSINESS = {
	name: 'Panadería - confitería Elepan',
	displayName: 'Elepan',
	mark: 'EL',
	street: 'C. la Defensa, 4',
	district: 'Palma-Palmilla',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	phone: '627 84 42 51',
	phoneHref: 'tel:+34627844251',
	rating: 4.2,
	reviewsCount: 65,
	siteUrl: 'https://panaderia-confiteria-elepan.vercel.app',
	geo: { lat: 36.7334241, lng: -4.4359827 },
	featureId: '0xd72f7a8f18282ad:0xf91e36da507b8e20',
	placeId: 'ChIJrYKC8aj3cg0RII57UNo2Hvk',
	googleCategory: 'Panadería',
	tagline: 'Panadería, confitería y despensa en Palma-Palmilla',
	description:
		'Panadería - confitería Elepan, en C. la Defensa, 4 (Palma-Palmilla, 29011 Málaga). Pan del día, dulces de vitrina, tartas por encargo y despensa de barrio. Teléfono 627 84 42 51.',
	hoursSummary: 'De lunes a jueves, 8:00–15:00 y 17:00–20:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+-+confiter%C3%ADa+Elepan/@36.7334241,-4.4359827,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a8f18282ad:0xf91e36da507b8e20!8m2!3d36.7334241!4d-4.4359827!16s%2Fg%2F11b6jbhzft',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7334241%2C-4.4359827',
	embed: 'https://maps.google.com/maps?q=36.7334241,-4.4359827&z=17&hl=es&output=embed',
};

/**
 * Horario del bloque estructurado de la ficha. El viernes no abre por la
 * tarde; el fin de semana solo tiene horario de mañana.
 */
export const HOURS = [
	{ day: 'Lunes a jueves', value: '8:00–15:00 · 17:00–20:30' },
	{ day: 'Viernes', value: '8:00–15:00' },
	{ day: 'Sábado y domingo', value: '8:00–15:00' },
];

/** Reseñas publicadas en la ficha. La primera se cita en la portada. */
export const REVIEW_QUOTE = 'Muy buen pan todo fresquito del día y la dependienta escelente';

export const REVIEWS = [
	{
		text: 'Muy buen pan todo fresquito del día y la dependienta escelente',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
	{
		text: 'Buen trato, además de pan y dulces tiene otras cosas',
		note: 'Reseña de 4 estrellas en Google Maps',
	},
	{
		text: 'Buena calidad y personal muy eficiente.',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
];

/** Lo que la ficha y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Pan del día',
	'Confitería',
	'Dulces de vitrina',
	'Tartas por encargo',
	'Troncos de Navidad',
	'Despensa',
	'Palma-Palmilla',
];

export const HIGHLIGHTS = [
	{
		number: '01',
		title: 'El pan del día',
		text: '«Muy buen pan todo fresquito del día», dice una de las reseñas. En el escaparate cuelgan las ofertas del horno: barras, pitufos, pulguitas y magdalenas.',
	},
	{
		number: '02',
		title: 'Tartas por encargo',
		text: 'El cartel «Se hacen tartas por encargo» está pegado en el cristal de la puerta, junto a la vitrina. En el perfil aparecen tartas de cumpleaños y troncos de Navidad.',
	},
	{
		number: '03',
		title: 'Algo más que pan',
		text: '«Además de pan y dulces tiene otras cosas», resume una reseña. El interior del local suma estanterías de turrones, snacks, conservas y bebidas.',
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
				note: '«fresquito del día», en palabras de una reseña',
			},
			{
				name: 'Barras y pitufos',
				note: 'las ofertas del escaparate los citan por su nombre',
			},
			{
				name: 'Magdalenas y pulguitas',
				note: 'el resto de piezas que anuncia el cartel de la puerta',
			},
		],
	},
	{
		title: 'Confitería',
		kicker: 'Vitrina',
		items: [
			{
				name: 'Dulces de vitrina',
				note: 'tartaletas de fruta, pasteles de nata y brazos de gitano',
			},
			{
				name: 'Tartas por encargo',
				note: 'el cartel del escaparate lo anuncia sin más detalle',
			},
			{
				name: 'Troncos de Navidad',
				note: 'varios en la vitrina, con chocolate y nata, en las fotos',
			},
		],
	},
	{
		title: 'Despensa',
		kicker: 'Mostrador',
		items: [
			{
				name: 'Turrones y dulces de fiesta',
				note: 'apilados en las estanterías del interior',
			},
			{
				name: 'Snacks y conservas',
				note: 'junto a las cajas de galletas y los botes de aceitunas',
			},
			{
				name: 'Bebidas',
				note: 'en las mismas baldas, al fondo del local',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Elepan?',
		a: 'En la calle la Defensa, 4, en el barrio de Palma-Palmilla (29011 Málaga). El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 8:00 a 15:00 y de 17:00 a 20:30. El viernes solo abre por la mañana, de 8:00 a 15:00, y sábado y domingo también de 8:00 a 15:00, según el horario publicado en la ficha de Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 627 84 42 51. La panadería no publica página web propia ni un canal de pedidos por internet, así que los encargos se cierran por teléfono o en el mostrador.',
	},
	{
		q: '¿Hacen tartas por encargo?',
		a: 'Sí: en el escaparate hay un cartel que dice «Se hacen tartas por encargo», y una de las fotos del perfil muestra una tarta de cumpleaños. Para concretar una, llama al 627 84 42 51.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan del día, bollería y dulces de confitería, según la vitrina y las reseñas. En las fotos aparecen también troncos de Navidad, roscos rellenos y una despensa con turrones, snacks y bebidas. La ficha no publica carta ni precios, por eso aquí no se citan importes.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo detalla que no hay aparcamiento adaptado; no indica si la entrada es accesible para sillas de ruedas. Es un dato que conviene confirmar llamando al 627 84 42 51.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,2 sobre 5 con 65 reseñas en Google. Las opiniones destacan el pan recién hecho, el trato del personal y la variedad de cosas que se pueden comprar.',
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
