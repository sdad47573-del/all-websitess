/**
 * Datos de Restaurante Les Eres — Carrer les Eres, 17, Borriana (Castellón),
 * en los Poblats Marítims, junto al puerto y la playa del Grao.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Les Eres», 39,8844941 /
 *   -0,0853824, feature 0xd5fec8dc6122a2f:0xae4cbb86f2fa4e55 (dirección,
 *   categoría, horario, nota, reseñas, accesibilidad y fotos del perfil).
 * - Callejero de OpenStreetMap para el código postal del Grao (12530).
 *
 * La ficha no publica teléfono, web ni carta: Google muestra «Añadir
 * teléfono» y «Añadir sitio web». Por eso la web no inventa un menú ni un
 * número de contacto y remite al mapa y a la propia ficha.
 */

export const BUSINESS = {
	name: 'Restaurante Les Eres',
	shortName: 'Les Eres',
	mark: 'LE',
	street: 'Carrer les Eres, 17',
	city: 'Borriana',
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	postalCode: '12530',
	country: 'ES',
	rating: 4.2,
	reviewsCount: 6,
	siteUrl: 'https://www.sur-digital.com/restaurante-les-eres',
	geo: { lat: 39.8844941, lng: -0.0853824 },
	featureId: '0xd5fec8dc6122a2f:0xae4cbb86f2fa4e55',
	placeId: 'ChIJLyoSxo3sXw0RVU768oa7TK4',
	cid: '12559619649105972821',
	/** Categoría con la que Google describe el local. */
	categories: ['Bar restaurante'],
	tagline: 'Bar restaurante en el Grao de Borriana',
	description:
		'Bar restaurante Les Eres, en el Grao de Borriana (Castellón), junto al puerto: de 8:00 a 23:00 de martes a domingo, lunes cerrado. 4,2 en Google.',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Les+Eres/@39.8844941,-0.0853824,17z/data=!3m1!4b1!4m6!3m5!1s0xd5fec8dc6122a2f:0xae4cbb86f2fa4e55!8m2!3d39.8844941!4d-0.0853824!16s%2Fg%2F11bt_jlsxr',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=39.8844941%2C-0.0853824',
	embed: 'https://maps.google.com/maps?q=39.8844941,-0.0853824&z=17&hl=es&output=embed',
} as const;

/** Señas de identidad que constan en la ficha de Google. */
export const SERVICIOS = [
	'Bar restaurante',
	'Terraza cubierta',
	'Acceso para sillas de ruedas',
	'Asientos adaptados',
];

export const FAQ = [
	{
		q: '¿Dónde está Les Eres?',
		a: 'En la calle Les Eres, número 17, en los Poblats Marítims, el barrio marinero de Borriana que se conoce como el Grao. Queda junto al puerto, a un paseo de la playa. El mapa de esta página abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo, de 8:00 a 23:00, sin cerrar a mediodía. Los lunes cierra. En festivos el horario puede cambiar, como avisa la propia ficha de Google, así que conviene mirarla antes de acercarse.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google de Les Eres no publica teléfono, web ni reserva online, y en esta página no hay un número inventado. Para asegurar mesa en grupo, lo práctico es pasarse por el local o consultar la ficha, donde el propio establecimiento puede añadir sus datos de contacto.',
	},
	{
		q: '¿Es accesible?',
		a: 'Sí. La ficha marca acceso y asientos adaptados para sillas de ruedas.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, una terraza cubierta con mesas blancas y sillas de madera, con el jardín y las palmeras al fondo. Es la que aparece en la foto del perfil de Google Maps.',
	},
	{
		q: '¿Qué se come?',
		a: 'Google no publica la carta de Les Eres. En la foto del perfil se ve una paella servida en el centro de la mesa, para compartir. Para saber qué hay cada día, lo mejor es preguntar en el propio bar.',
	},
];

/** Horario de la ficha de Google (consultado en octubre de 2026). */
export const HOURS = [
	{ day: 'Martes', value: '08:00–23:00' },
	{ day: 'Miércoles', value: '08:00–23:00' },
	{ day: 'Jueves', value: '08:00–23:00' },
	{ day: 'Viernes', value: '08:00–23:00' },
	{ day: 'Sábado', value: '08:00–23:00' },
	{ day: 'Domingo', value: '08:00–23:00' },
	{ day: 'Lunes', value: 'Cerrado', closed: true },
];
