/**
 * Datos de Boutique Del Pan Pasteleria Barba — Av. Miraflores de los Ángeles, 9
 * (Bailén-Miraflores, 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Boutique Del Pan Pasteleria Barba,
 *   36.7301156,-4.4423711, feature 0xd72f708eb708edf:0x1d59adf886114813.
 * - Dirección, categoría, valoración, reseñas, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Reseñas publicadas en la misma ficha.
 * - Imagen: vista de Google Street View de la esquina de la avenida, con
 *   fecha de captura de julio de 2026 (panoid jK1k5V0o7LUurqaC6qkI6g).
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web, carta, precios
 * ni fotografías del perfil. Los productos citados son los que aparecen en
 * las reseñas y en el rótulo del local; no se publican importes.
 */

export const BUSINESS = {
	name: 'Boutique Del Pan Pasteleria Barba',
	shortName: 'Barba',
	mark: 'B',
	street: 'Av. Miraflores de los Ángeles, 9',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	rating: 4.3,
	reviewsCount: 12,
	siteUrl: 'https://boutique-del-pan-pasteleria-barba.vercel.app',
	geo: { lat: 36.7301156, lng: -4.4423711 },
	featureId: '0xd72f708eb708edf:0x1d59adf886114813',
	placeId: 'ChIJ345w6wj3cg0RE0gRhvitWR0',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería de barrio en Bailén-Miraflores',
	description:
		'Boutique Del Pan Pastelería Barba, en Av. Miraflores de los Ángeles, 9 (Bailén-Miraflores, 29011 Málaga). Pan y pastelería de barrio, todos los días de 8:00 a 14:30. Tiene 4,3 sobre 5 en Google.',
	hoursSummary: 'Todos los días, de 8:00 a 14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Boutique+Del+Pan+Pasteleria+Barba/@36.7301156,-4.4423711,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f708eb708edf:0x1d59adf886114813!8m2!3d36.7301156!4d-4.4423711!16s%2Fg%2F11cnr_ss7w?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=2114912782939932691',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7301156%2C-4.4423711',
	embed: 'https://maps.google.com/maps?q=36.7301156,-4.4423711&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7301156,-4.4423711&heading=1.24',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [{ day: 'Todos los días', value: '8:00–14:30' }];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Muy buen pan y te atienden con amabilidad a unos precios muy asequibles.',
	},
	{
		rating: 5,
		text: 'Buenos precios y productos de primera.',
	},
];

/** Lo que la ficha, las reseñas y el rótulo permiten afirmar. */
export const SERVICIOS = [
	'Pan',
	'Pastelería',
	'Precios asequibles',
	'Todos los días',
	'Bailén-Miraflores',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan',
		text: 'Las reseñas de Google lo describen como «muy buen pan» y hablan de «productos de primera».',
	},
	{
		title: 'La pastelería',
		text: 'El rótulo de la casa anuncia «Boutique del Pan · Pastelería Barba», en la esquina de la avenida.',
	},
	{
		title: 'El precio',
		text: '«Precios muy asequibles» y «buenos precios» son las palabras que repiten las reseñas.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Boutique Del Pan Pasteleria Barba?',
		a: 'En la Avenida Miraflores de los Ángeles, 9, en el barrio de Bailén-Miraflores (29011 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 8:00 a 14:30, sin día de cierre. Es el horario publicado en la ficha de Google; conviene confirmarlo antes de ir, sobre todo en festivos.',
	},
	{
		q: '¿Abre por la tarde?',
		a: 'La ficha solo publica horario de mañana, hasta las 14:30. No aparece un tramo de tarde.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono ni página web, y esta página no inventa ninguno. La forma de contacto es acudir al establecimiento o consultar la ficha pública de Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El nombre y el rótulo del local anuncian pan y pastelería. Las reseñas hablan de «muy buen pan» y de «productos de primera», pero la ficha no publica carta ni precios, así que esta página no cita productos concretos ni importes.',
	},
	{
		q: '¿Tiene fotos del interior?',
		a: 'La ficha pública no incluye fotografías del perfil. La imagen de esta página es una vista de Google Street View de julio de 2026, donde se ve la fachada y el rótulo de la boutique.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas. No publica información sobre el aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,3 sobre 5 con 12 reseñas en Google. Las reseñas visibles elogian el pan, la atención y los precios.',
	},
];
