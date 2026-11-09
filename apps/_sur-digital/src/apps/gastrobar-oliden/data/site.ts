/**
 * Datos de GastroBar Oliden — Ctra. Rentería a Irún, km 5,3, Arragua
 * (20180 Errenteria, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «GastroBar Oliden», 43.3154183,-1.8741033,
 *   feature 0xd51a7bea562cf47:0x7ec51ccbc03791db (dirección, teléfono, horario,
 *   categorías, nota, reseñas y accesibilidad).
 * - Descripción que publica el propio local en su ficha: restaurante en plena
 *   naturaleza, aparcamiento exterior, amplio comedor y dos terrazas.
 * - Reseñas publicadas en esa ficha.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que no se
 * reproducen. El teléfono de contacto es un móvil, tal como lo publica la ficha.
 */

export const BUSINESS = {
	name: 'GastroBar Oliden',
	shortName: 'Oliden',
	mark: 'OL',
	street: 'Ctra. Rentería a Irún, km 5,3',
	locality: 'Arragua',
	city: 'Errenteria',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20180',
	country: 'ES',
	phoneDisplay: '681 08 64 77',
	phoneHref: 'tel:+34681086477',
	rating: 4.2,
	reviewsCount: 62,
	siteUrl: 'https://www.sur-digital.com/gastrobar-oliden',
	geo: { lat: 43.3154183, lng: -1.8741033 },
	featureId: '0xd51a7bea562cf47:0x7ec51ccbc03791db',
	placeId: 'ChIJR89ipb6nUQ0R25E3wMscxX4',
	cid: '9134739080619725275',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/GastroBar+Oliden/@43.3154183,-1.8741033,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a7bea562cf47:0x7ec51ccbc03791db!8m2!3d43.3154183!4d-1.8741033!16s%2Fg%2F11jlpr2b11',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3154183%2C-1.8741033',
	embed: 'https://maps.google.com/maps?q=43.3154183,-1.8741033&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: cierra los lunes. De martes a sábado abre de
 * 8:00 a 22:00 y el domingo de 9:00 a 22:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado' },
	{ day: 'Martes', value: '8:00–22:00' },
	{ day: 'Miércoles', value: '8:00–22:00' },
	{ day: 'Jueves', value: '8:00–22:00' },
	{ day: 'Viernes', value: '8:00–22:00' },
	{ day: 'Sábado', value: '8:00–22:00' },
	{ day: 'Domingo', value: '9:00–22:00' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 4, text: 'Buena comida y buena atención, parrilla excelente.' },
	{ rating: 5, text: 'Hamburguesas espectaculares y personal encantador, volveré.' },
	{ rating: 5, text: 'Sitio con menú del día y algún plato típico de Latinoamérica.' },
] as const;

/** Descripción que el propio local publica en su ficha de Google. */
export const DESCRIPCION_LOCAL =
	'Nuestro restaurante se encuentra en plena naturaleza, con aparcamiento exterior y entrada libre sin necesidad de estar acampado. Ven a disfrutar de nuestra cocina rodeado de un agradable ambiente. Disponemos de un amplio comedor, una terraza cubierta y otra descubierta.';

/**
 * Categorías y servicios que constan: Google lo clasifica como bar restaurante y
 * bar; la descripción del titular añade comedor y dos terrazas; las reseñas
 * hablan de parrilla, hamburguesas, menú del día y platos latinoamericanos; la
 * ficha marca acceso, aparcamiento y asientos adaptados.
 */
export const SERVICIOS = [
	'Bar restaurante',
	'Parrilla',
	'Hamburguesas',
	'Menú del día',
	'Platos latinoamericanos',
	'Amplio comedor',
	'Terraza cubierta',
	'Terraza descubierta',
	'Aparcamiento exterior',
	'Acceso para sillas de ruedas',
] as const;

/**
 * Carta: la ficha no publica carta ni precios. Cada entrada lleva la nota de
 * dónde consta.
 */
export const MENU = [
	{
		title: 'De la parrilla',
		items: [
			{ name: 'Parrilla', note: '«parrilla excelente», dice una reseña' },
			{ name: 'Hamburguesas', note: '«espectaculares», según otra reseña; en las fotos del perfil' },
			{ name: 'Pescado frito con plátano', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Del día',
		items: [
			{ name: 'Menú del día', note: 'citado en las reseñas' },
			{ name: 'Platos típicos de Latinoamérica', note: '«algún plato típico», dice una reseña' },
			{ name: 'Arroz con curry y ensalada de langostinos', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Fritos caseros', note: 'en las fotos del perfil' },
			{ name: 'Tabla de embutido y queso', note: 'en las fotos del perfil' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está GastroBar Oliden?',
		a: 'En el kilómetro 5,3 de la carretera de Rentería a Irún, en Arragua (20180 Errenteria, Gipuzkoa), en pleno entorno natural. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes. De martes a sábado abre de 8:00 a 22:00 y el domingo de 9:00 a 22:00. Es el horario que publica su ficha de Google y puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Hay que estar alojado o acampado para entrar?',
		a: 'No. El propio local lo aclara en su ficha: la entrada es libre y no hace falta estar acampado para comer o tomar algo. Dispone de aparcamiento exterior.',
	},
	{
		q: '¿Tiene terraza y comedor?',
		a: 'Sí. La descripción del propio restaurante habla de un amplio comedor, una terraza cubierta y otra descubierta, en un entorno natural.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Lo que citan sus reseñas: parrilla, hamburguesas, menú del día y algún plato típico de Latinoamérica. La ficha de Google no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 681 08 64 77, el móvil que publica su ficha de Google. No hay reserva online ni esta web la ofrece.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,2 sobre 5 con 62 reseñas en Google. Las publicadas destacan la parrilla, las hamburguesas y el trato del personal.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
