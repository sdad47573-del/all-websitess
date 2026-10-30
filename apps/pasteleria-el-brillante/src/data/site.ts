/**
 * Datos de Pastelería El Brillante — C. la Palmera, 17 (Norte Sierra,
 * 14006 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: Pastelería El Brillante,
 *   37.8972607,-4.7821585, feature 0xd6cdf6ddfd073a5:0xb38aaeedf4f09a48.
 * - Nombre, categorías, dirección, teléfono, valoración, reseñas, horario y fotos:
 *   ficha pública de Google.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios ni web propia, y
 * de accesibilidad solo indica que no hay aparcamiento adaptado. La web no
 * afirma nada más. Las fotos son las de la galería del establecimiento en Google
 * Maps y los textos se limitan a lo que muestran y a lo que declara la ficha.
 */

export const BUSINESS = {
	name: 'Pastelería El Brillante',
	shortName: 'El Brillante',
	mark: 'B',
	street: 'C. la Palmera, 17',
	district: 'Norte Sierra',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14006',
	country: 'ES',
	phone: '957 27 14 40',
	phoneHref: 'tel:+34957271440',
	rating: 4.5,
	reviewsCount: 42,
	siteUrl: 'https://pasteleria-el-brillante.vercel.app',
	geo: { lat: 37.8972607, lng: -4.7821585 },
	featureId: '0xd6cdf6ddfd073a5:0xb38aaeedf4f09a48',
	placeId: 'ChIJpXPQ323fbA0RSJrw9O2uirM',
	googleCategory: 'Pastelería',
	tagline: 'Pastelería y panadería en el barrio Norte Sierra, Córdoba',
	description:
		'Pastelería El Brillante, en C. la Palmera, 17 (Norte Sierra, 14006 Córdoba). Pastelería y panadería de obrador: napolitanas de chocolate, panecillos, migas y tartas por encargo. Todos los días de 8:00 a 14:30. 4,5 sobre 5 en Google.',
	hoursSummary: 'Todos los días, 8:00–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Pasteler%C3%ADa+El+Brillante/@37.8972607,-4.7821585,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf6ddfd073a5:0xb38aaeedf4f09a48!8m2!3d37.8972607!4d-4.7821585!16s%2Fg%2F11yvn43xl?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=12937345216615062088',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8972607%2C-4.7821585',
	embed: 'https://maps.google.com/maps?q=37.8972607,-4.7821585&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8972607,-4.7821585',
};

/** Horario publicado en la ficha de Google: el mismo todos los días. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–14:30' },
	{ day: 'Sábado', value: '8:00–14:30' },
	{ day: 'Domingo', value: '8:00–14:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: abre todos los días, de 8:00 a 14:30, domingo incluido. Para el 1 de noviembre (Día de Todos los Santos) Google avisa de que el horario podría ser diferente.';

/** Lo que la ficha declara y lo que se ve en sus fotos. */
export const SERVICIOS = [
	'Pastelería',
	'Panadería',
	'Napolitanas de chocolate',
	'Migas',
	'Tartas por encargo',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'El chocolate',
		text: 'Las fotos de la ficha están llenas de napolitanas y barras cubiertas de chocolate, en la bandeja y en la mano. Es lo que más se repite en la galería del obrador.',
	},
	{
		title: 'Las migas',
		text: 'Dos de las fotos son de migas: una sartén grande con chorizo y ajos, y un táper lleno para llevar. Se venden preparadas, no solo como dulce de vitrina.',
	},
	{
		title: 'Las tartas',
		text: 'La ficha la clasifica como «pastelería especializada en tartas nupciales». En la galería aparece una tarta rectangular con merengue, fruta escarchada y guindas.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Pastelería El Brillante?',
		a: 'En C. la Palmera, 17, en el barrio Norte Sierra (14006 Córdoba), en una esquina de bajo con la fachada blanca y el rótulo azul. El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días, de 8:00 a 14:30, domingo incluido, según la ficha de Google. Para el 1 de noviembre Google avisa de que el horario podría variar.',
	},
	{
		q: '¿Hacen tartas por encargo?',
		a: 'La ficha de Google la clasifica como «pastelería especializada en tartas nupciales», y en su galería hay una tarta decorada con merengue y fruta escarchada. Los encargos se hablan directamente con la pastelería, por teléfono o en el mostrador: esta web no gestiona pedidos.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Lo que muestran las fotos de la ficha: napolitanas y barras de chocolate, bandejas de panecillos, migas con chorizo y tartas. La oferta cambia con el día, así que lo mejor es preguntar en la tienda o llamar antes.',
	},
	{
		q: '¿Hay migas para llevar?',
		a: 'Sí. En la galería hay una sartén grande de migas recién hechas y un táper lleno, preparado para llevar. Es uno de los productos que el propio negocio fotografía.',
	},
	{
		q: '¿Tiene página web o carta con precios?',
		a: 'No. La ficha de Google no enlaza ninguna web propia ni publica carta ni precios, así que esta página no los reproduce ni los estima. Los precios se consultan en el mostrador o por teléfono.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,5 sobre 5 con 42 reseñas, según la ficha pública. Esta web no reproduce los textos de las reseñas: se leen enteras, con su autor y su fecha, en el enlace a Google.',
	},
	{
		q: '¿Es accesible o tiene aparcamiento?',
		a: 'La ficha de Google solo indica que no hay aparcamiento adaptado para sillas de ruedas; no publica información sobre el acceso al local. La entrada de las fotos está a pie de calle. Si necesitas un acceso concreto, llama antes.',
	},
];
