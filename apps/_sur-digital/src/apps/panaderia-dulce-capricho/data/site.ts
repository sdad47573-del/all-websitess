/**
 * Datos de Panadería Pastelería Dulce Capricho — Av. Miraflores de los Ángeles
 * (Bailén-Miraflores, 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Pastelería Dulce Capricho,
 *   36.7305362,-4.4399293, feature 0xd72f70814f9166b:0x34339949255eed6f.
 * - Categoría, dirección, valoración, reseñas y horario: ficha pública de Google
 *   (octubre de 2026).
 * - Fachada, rótulos y entorno: Street View de Google del 19 de julio de 2026,
 *   el panorama que la propia ficha enlaza.
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, número de portal,
 * descripción, carta, precios, fotos del local, web, accesibilidad ni métodos de
 * pago. La única reseña no tiene texto público. Nada de eso se rellena aquí.
 * Lo que se describe de la fachada se ve en la imagen de Street View.
 */

export const BUSINESS = {
	name: 'Panadería Pastelería Dulce Capricho',
	shortName: 'Dulce Capricho',
	mark: 'DC',
	street: 'Av. Miraflores de los Ángeles',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	/** La ficha no publica teléfono ni número de portal: no se inventan. */
	phone: '',
	phoneHref: '',
	rating: 5,
	reviewsCount: 1,
	siteUrl: 'https://www.sur-digital.com/panaderia-dulce-capricho',
	geo: { lat: 36.7305362, lng: -4.4399293 },
	featureId: '0xd72f70814f9166b:0x34339949255eed6f',
	placeId: 'ChIJaxb5FAj3cg0Rb-1eJUmZMzQ',
	cid: '3761518653223136623',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería de barrio en la Avenida Miraflores de los Ángeles',
	description:
		'Panadería Pastelería Dulce Capricho, en Av. Miraflores de los Ángeles (Bailén-Miraflores, 29011 Málaga). Abre de lunes a viernes de 8:00 a 15:00 y de 17:00 a 20:00. 5 sobre 5 en Google.',
	hoursSummary: 'L–V 8:00–15:00 y 17:00–20:00 · S y D 8:30–14:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Pasteler%C3%ADa+Dulce+Capricho/@36.7305362,-4.4399293,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70814f9166b:0x34339949255eed6f!8m2!3d36.7305362!4d-4.4399293!16s%2Fg%2F11hcjb0sqc?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=3761518653223136623',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7305362%2C-4.4399293',
	embed: 'https://maps.google.com/maps?q=36.7305362,-4.4399293&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7305362,-4.4399293',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–15:00 y 17:00–20:00' },
	{ day: 'Sábado', value: '8:30–14:00' },
	{ day: 'Domingo', value: '8:30–14:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, con cierre al mediodía de lunes a viernes. El 1 de noviembre (Día de Todos los Santos) el horario podría variar.';

/** Lo que la ficha y la vista de la calle permiten afirmar. */
export const CONSTA = [
	{
		title: 'Dos rótulos',
		text: 'Sobre la puerta, el cartel dice «PANADERÍA Dulce Capricho PASTELERÍA». Debajo, un toldo negro repite «PANADERÍA».',
	},
	{
		title: 'Escaparate y puerta',
		text: 'El local tiene una puerta de doble hoja abierta a la acera y dos vitrinas laterales con productos envasados a la vista.',
	},
	{
		title: 'Horario partido',
		text: 'De lunes a viernes abre de 8:00 a 15:00 y vuelve por la tarde, de 17:00 a 20:00. El fin de semana, solo por la mañana.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Dulce Capricho?',
		a: 'En la Avenida Miraflores de los Ángeles, en el barrio de Bailén-Miraflores (29011 Málaga). La ficha de Google no publica número de portal; el mapa de esta página abre la ubicación exacta y el panorama muestra la fachada en la esquina.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:00 a 15:00 y de 17:00 a 20:00. El sábado y el domingo, de 8:30 a 14:00. El 1 de noviembre el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono, web, correo ni redes sociales, así que esta página no inventa ninguno. El contacto es en el propio local.',
	},
	{
		q: '¿Qué vende?',
		a: 'Los rótulos de la fachada dicen «panadería» y «pastelería», y en las vitrinas se ven productos envasados. La ficha no publica carta, surtido ni precios, así que no se detallan aquí: hay que preguntar en el mostrador.',
	},
	{
		q: '¿Por qué no hay teléfono?',
		a: 'Porque no está publicado. Ni la ficha de Google ni el rótulo visible en Street View muestran un número de teléfono, y esta web no rellena datos que no existan.',
	},
	{
		q: '¿Se puede encargar por internet?',
		a: 'No consta ningún canal de pedidos online: la ficha no publica web ni correo. Cualquier encargo se trata en el propio establecimiento.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha pública no publica información sobre accesibilidad ni aparcamiento, así que esta página no la afirma. En la imagen de la calle, la entrada está a pie de acera, sin escalones visibles.',
	},
	{
		q: '¿Por qué las fotos son de Street View?',
		a: 'Porque la ficha de Google no tiene fotos del negocio. Las tres imágenes son vistas de Google Street View del 19 de julio de 2026, identificadas como tales, en las que se ve la fachada y la avenida.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5 sobre 5 con una reseña en Google. Esa reseña no tiene texto público, así que esta página solo cita el dato, no la opinión.',
	},
];
