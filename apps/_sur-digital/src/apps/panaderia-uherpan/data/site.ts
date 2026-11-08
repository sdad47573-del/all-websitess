/**
 * Datos de Panadería UHERPAN S.C.A. — C. Simón Carpintero, Polígono Industrial
 * Las Quemadas, parcela 13, nave 10 (14014 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: Panadería UHERPAN S.C.A.,
 *   37.9046672,-4.724677, feature 0xd6ce14759f1605b:0x1469dbd90e16a3a8.
 * - Nombre, categoría, dirección, teléfono, valoración, reseñas, horario y fotos:
 *   ficha pública de Google.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web propia ni
 * datos de accesibilidad, y no confirma venta directa al público. La web no
 * afirma nada de eso. Las fotos son las de la galería del establecimiento en
 * Google Maps y los textos se limitan a lo que muestran y a lo que declara la
 * ficha.
 */

export const BUSINESS = {
	name: 'Panadería UHERPAN S.C.A.',
	shortName: 'UHERPAN',
	mark: 'U',
	street: 'C. Simón Carpintero, parcela 13, nave 10',
	district: 'Polígono Industrial Las Quemadas',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14014',
	country: 'ES',
	phone: '648 12 70 20',
	phoneHref: 'tel:+34648127020',
	rating: 4.5,
	reviewsCount: 8,
	siteUrl: 'https://www.sur-digital.com/panaderia-uherpan',
	geo: { lat: 37.9046672, lng: -4.724677 },
	featureId: '0xd6ce14759f1605b:0x1469dbd90e16a3a8',
	placeId: 'ChIJW2DxWUfhbA0RqKMWDtnbaRQ',
	googleCategory: 'Panadería',
	tagline: 'Obrador de pan en el Polígono Las Quemadas, Córdoba',
	description:
		'Panadería UHERPAN S.C.A., en C. Simón Carpintero, parcela 13, nave 10 (Polígono Industrial Las Quemadas, 14014 Córdoba). Obrador de pan: baguettes, hogazas, molletes y magdalenas. 4,5 sobre 5 en Google.',
	hoursSummary: 'Turno de noche y mañana: 22:30–14:00 · domingo cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+UHERPAN+S.C.A./@37.9046672,-4.724677,17z/data=!3m1!4b1!4m6!3m5!1s0xd6ce14759f1605b:0x1469dbd90e16a3a8!8m2!3d37.9046672!4d-4.724677!16s%2Fg%2F11k_nkdx9f?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=1470948478603928488',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9046672%2C-4.724677',
	embed: 'https://maps.google.com/maps?q=37.9046672,-4.724677&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.9046672,-4.724677',
};

/**
 * Horario publicado en Google. La ficha parte el turno a medianoche
 * (0:00–14:00 y 22:30–24:00); aquí se muestra como un turno continuo.
 */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '22:30–14:00' },
	{ day: 'Sábado', value: '22:30–13:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, que parte el turno a medianoche: de 22:30 a 14:00 de lunes a viernes y hasta las 13:30 el sábado, con el domingo cerrado. Para el 1 de noviembre (Día de Todos los Santos) Google avisa de que el horario podría ser diferente.';

/** Lo que la ficha declara y lo que se ve en sus fotos. */
export const SERVICIOS = [
	'Panadería',
	'Obrador',
	'Baguettes',
	'Hogazas',
	'Molletes',
	'Magdalenas',
];

export const HIGHLIGHTS = [
	{
		title: 'El obrador',
		text: 'La ficha está en una nave del Polígono Las Quemadas, y sus fotos son todas de dentro: bandejas negras, carros de varillas y masa reposando. No hay escaparate ni vitrina en la galería.',
	},
	{
		title: 'El pan',
		text: 'Baguettes con greña y harina, hogazas redondas de corte rústico y panecillos alargados. En otra bandeja, magdalenas en cápsula de papel salen del horno por tandas.',
	},
	{
		title: 'El reparto',
		text: 'Una de las fotos es la furgoneta blanca rotulada «UHERPAN · Pan Artesano Caseras · Unión Hermanos Panaderos». El nombre completo de la sociedad aparece en el propio logo.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería UHERPAN?',
		a: 'En la calle Simón Carpintero, parcela 13, nave 10, dentro del Polígono Industrial Las Quemadas (14014 Córdoba). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google muestra un turno de noche y mañana: de 22:30 a 14:00, partido a medianoche en su panel. El sábado cierra a las 13:30 y el domingo permanece cerrado. Para el 1 de noviembre Google avisa de que el horario podría variar.',
	},
	{
		q: '¿Es una tienda abierta al público o un obrador?',
		a: 'La dirección es una nave de polígono industrial y todas las fotos de la ficha son de obrador: bandejas, carros y masa. La ficha no indica horario de tienda ni condiciones de venta al público, así que esta página no lo afirma. Si quieres comprar, llama antes al 648 12 70 20.',
	},
	{
		q: '¿Qué pan hacen?',
		a: 'Lo que muestran las fotos: baguettes enharinadas con greña, hogazas redondas de corte rústico, panecillos alargados y magdalenas en cápsula. La ficha no publica carta ni lista de productos, así que no hay más detalle oficial.',
	},
	{
		q: '¿Reparten a otros establecimientos?',
		a: 'En la galería aparece una furgoneta blanca rotulada con el logo de UHERPAN y el lema «Pan Artesano Caseras». Es lo único que se puede afirmar: la ficha no publica condiciones de reparto ni zonas de entrega. Para consultarlo, llama al teléfono de la ficha.',
	},
	{
		q: '¿Qué significan las siglas S.C.A.?',
		a: 'La ficha y el logo de la furgoneta identifican el negocio como «Panadería UHERPAN S.C.A.» y «Unión Hermanos Panaderos». S.C.A. corresponde a sociedad cooperativa andaluza; esta web se limita a reproducir la denominación que publica el propio negocio.',
	},
	{
		q: '¿Tiene página web o carta con precios?',
		a: 'No. La ficha de Google no enlaza ninguna web propia ni publica precios, así que esta página no los reproduce ni los estima.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,5 sobre 5 con 8 reseñas, según la ficha pública. Esta web no reproduce los textos de las reseñas: se leen enteras, con su autor y su fecha, en el enlace a Google.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información de accesibilidad de la nave. Al tratarse de un polígono industrial con acceso en vehículo, si necesitas un acceso concreto lo mejor es llamar antes.',
	},
];
