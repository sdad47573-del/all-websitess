/**
 * Datos de Panadería El Ciprés — C. del Ciprés, 20 (Bailén-Miraflores,
 * 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería El Ciprés,
 *   36.7246633,-4.4481099, feature 0xd72f70dec944993:0x91059ac7c31fca10.
 * - Dirección, categoría, teléfono, valoración, número de reseñas y horario:
 *   ficha pública de Google (octubre de 2026).
 * - Foto de la calle: Street View de Google del 15 de julio de 2026.
 *
 * Lo que la web NO inventa: la ficha no publica descripción del negocio, carta,
 * precios, fotos del local, página web, accesibilidad ni métodos de pago. Tampoco
 * hay texto público de la única reseña. Nada de eso se rellena aquí.
 */

export const BUSINESS = {
	name: 'Panadería El Ciprés',
	shortName: 'El Ciprés',
	mark: 'EC',
	street: 'C. del Ciprés, 20',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '646 85 16 79',
	phoneHref: 'tel:+34646851679',
	rating: 5,
	reviewsCount: 1,
	siteUrl: 'https://panaderia-el-cipres.vercel.app',
	geo: { lat: 36.7246633, lng: -4.4481099 },
	featureId: '0xd72f70dec944993:0x91059ac7c31fca10',
	placeId: 'ChIJk0mU7A33cg0REMofw8eaBZE',
	cid: '10449928693145913872',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en la calle del Ciprés, Bailén-Miraflores',
	description:
		'Panadería El Ciprés, en C. del Ciprés, 20 (Bailén-Miraflores, 29010 Málaga). Abre de lunes a viernes de 9:00 a 21:00. Teléfono 646 85 16 79. 5 sobre 5 en Google.',
	hoursSummary: 'L–V 9:00–21:00 · S 9:00–15:00 · D 11:00–13:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+El+Cipr%C3%A9s/@36.7246633,-4.4481099,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70dec944993:0x91059ac7c31fca10!8m2!3d36.7246633!4d-4.4481099!16s%2Fg%2F11bxb9_xw2?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=10449928693145913872',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7246633%2C-4.4481099',
	embed: 'https://maps.google.com/maps?q=36.7246633,-4.4481099&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7246633,-4.4481099',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '9:00–21:00' },
	{ day: 'Sábado', value: '9:00–15:00' },
	{ day: 'Domingo', value: '11:00–13:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) el horario podría variar; conviene llamar antes de ir.';

/** Lo único que la ficha pública permite afirmar. */
export const CONSTA = [
	{
		title: 'Una panadería',
		text: 'La ficha de Google la clasifica como panadería y la sitúa en el número 20 de la calle del Ciprés, en Bailén-Miraflores.',
	},
	{
		title: 'Horario amplio',
		text: 'Abre de lunes a viernes de 9:00 a 21:00, el sábado de 9:00 a 15:00 y el domingo de 11:00 a 13:30.',
	},
	{
		title: 'Trato directo',
		text: 'El teléfono de la ficha es el 646 85 16 79. No publica web, redes sociales ni canal de pedidos online.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería El Ciprés?',
		a: 'En la calle del Ciprés, 20, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 9:00 a 21:00. El sábado, de 9:00 a 15:00, y el domingo, de 11:00 a 13:30. El 1 de noviembre el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono, en el 646 85 16 79, el número que publica su ficha de Google. No hay página web, correo ni redes sociales publicados.',
	},
	{
		q: '¿Qué vende?',
		a: 'Su ficha de Google solo la clasifica como panadería: no publica carta, surtido, precios ni fotos del local. Esta web no inventa ninguno de esos datos. Para saber qué hay ese día, lo mejor es llamar al 646 85 16 79.',
	},
	{
		q: '¿Se puede encargar por internet?',
		a: 'No consta ningún canal de pedidos online. La ficha no publica web ni correo, así que los encargos se tratan directamente en el local o por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha pública no publica información sobre accesibilidad, aparcamiento ni acceso para sillas de ruedas, así que esta página no la afirma. Si necesitas un acceso concreto, llama antes al 646 85 16 79.',
	},
	{
		q: '¿Por qué la web no tiene fotos del local?',
		a: 'Porque la ficha de Google no tiene ninguna foto del establecimiento. La única imagen es una vista de la calle del Ciprés en Google Street View, de julio de 2026, y así está identificada. No se usa ninguna foto que no exista.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5 sobre 5 con una reseña en Google. Esa reseña no tiene texto público, así que esta página no cita ninguna opinión: solo el dato de la ficha.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
];
