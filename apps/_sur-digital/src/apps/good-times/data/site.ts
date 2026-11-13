/**
 * Datos de Good Times.
 * Allende Particular Kalea, 10, 48004 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 * La ficha no publica carta, precios ni horario: aquí no se inventan.
 */

export const BUSINESS = {
	name: 'Good Times',
	fullName: 'Good Times',
	shortName: 'Good Times',
	mark: 'G',
	street: 'Allende Particular Kalea, 10',
	district: 'Bilbao',
	locality: 'Bilbao',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48004',
	country: 'ES',
	geo: { lat: 43.2523202, lng: -2.9134406 },
	phone: '652 32 24 85',
	phoneHref: 'tel:+34652322485',
	whatsappHref:
		'https://wa.me/34652322485?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Good%20Times.',
	siteUrl: 'https://www.sur-digital.com/good-times',
	googleCategory: 'Restaurante de comida rápida',
	tagline: 'Fresh tacos en Bilbao',
	description:
		'Good Times, restaurante de comida rápida en Allende Particular Kalea, 10 (48004 Bilbao, Bizkaia). Fresh tacos, teléfono 652 32 24 85, fotos y cómo llegar. Según su ficha de Google Maps.',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/Good+Times/@43.2523202,-2.9134406,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f2138b550cb:0xa87eb01054330ca1!8m2!3d43.2523202!4d-2.9134406!16s%2Fg%2F11shffbl93?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2523202%2C-2.9134406',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=43.2523202,-2.9134406',
	embed: 'https://maps.google.com/maps?q=43.2523202,-2.9134406&z=17&output=embed',
};

/** La ficha no publicaba valoración al consultarla: se deja vacía en lugar de inventarla. */
export const RATING: { value: number | null; count: number | null; label: string } = {
	value: null,
	count: null,
	label: '',
};

export const FAQ = [
	{
		q: '¿Dónde está Good Times?',
		a: 'En Allende Particular Kalea, 10, 48004 Bilbao (Bizkaia). Puedes abrir la ficha de Google Maps o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono de Good Times?',
		a: 'El teléfono de la ficha es el 652 32 24 85. Llama para preguntar por la oferta del día, hacer un pedido o confirmar el horario.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'La ficha de Google Maps lo clasifica como restaurante de comida rápida y el rótulo de la fachada anuncia «Fresh Tacos». La carta concreta y los precios no están publicados: conviene preguntarlos al llamar.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha pública no incluye carta ni precios y esta web no los inventa. Consulta la oferta disponible y el precio directamente con el establecimiento.',
	},
	{
		q: '¿Se puede ir a comer al local o pedir para llevar?',
		a: 'El local está en la Allende Particular Kalea, 10, y la ficha lo describe como restaurante de comida rápida. Pregunta por teléfono si prefieres recoger el pedido o comer allí.',
	},
	{
		q: '¿Cómo se llega?',
		a: 'El botón «Cómo llegar» abre la ruta en Google Maps hasta 43.2523202, -2.9134406, el punto de la ficha del negocio en Bilbao.',
	},
];

export const LEGAL = {
	razonSocial: '[pendiente de confirmar]',
	nif: '[pendiente de confirmar]',
	email: '[pendiente de confirmar]',
	actualizado: 'Noviembre de 2026',
};
