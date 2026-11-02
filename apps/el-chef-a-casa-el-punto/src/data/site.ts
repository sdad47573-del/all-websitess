/**
 * Datos de El Chef a Casa El Punto — C. Tajo, 2, 41500 Sevilla.
 *
 * Fuente pública:
 * - Ficha de Google Maps indicada: El Chef a Casa El Punto*, 37.3560645,-5.9844716,
 *   feature 0xd126dd5966e1fa5:0x14067191aa178d06 (nombre, dirección, categorías,
 *   horario y accesibilidad), más su place id y su CID.
 *
 * Lo que la ficha NO publica y esta web no inventa: teléfono, correo, web propia,
 * carta, precios, fotos del establecimiento y canales de pedido. Los datos de
 * valoración son los de la ficha (3,0 con dos reseñas): se citan, no se lucen.
 */

export const BUSINESS = {
	name: 'El Chef a Casa El Punto',
	shortName: 'El Punto',
	mark: 'EP',
	street: 'C. Tajo, 2',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: '41500',
	postalCode: '41500',
	country: 'ES',
	/** La ficha de Google no publica teléfono: no se inventa uno. */
	phone: '',
	phoneHref: '',
	rating: 3,
	reviewsCount: 2,
	siteUrl: 'https://el-chef-a-casa-el-punto.vercel.app',
	geo: { lat: 37.3560645, lng: -5.9844716 },
	featureId: '0xd126dd5966e1fa5:0x14067191aa178d06',
	placeId: 'ChIJpR9ultVtEg0RBo0XqpFxBhQ',
	cid: '1442965601056689414',
	/** Categorías con las que Google clasifica el local. */
	category: 'Restaurante de cocina española',
	categories: [
		'Restaurante de cocina española',
		'Comida a domicilio',
		'Restaurante de comida para llevar',
	],
	tagline: 'Cocina española, a domicilio y para llevar',
	description:
		'El Chef a Casa El Punto, restaurante de cocina española en la calle Tajo 2, 41500 Sevilla. Comida a domicilio y para llevar, de 12:00 a 23:30 de martes a jueves.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Chef+a+Casa+El+Punto*/@37.3560645,-5.9844716,17z/data=!4m6!3m5!1s0xd126dd5966e1fa5:0x14067191aa178d06!8m2!3d37.3560645!4d-5.9844716!16s%2Fg%2F11gvf13jw6',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3560645%2C-5.9844716',
	embed: 'https://maps.google.com/maps?q=37.3560645,-5.9844716&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: continuo de mediodía a noche de
 * martes a jueves, más largo el viernes y el sábado, y solo mediodía el domingo.
 * El lunes figura cerrado.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '12:00–23:30' },
	{ day: 'Miércoles', value: '12:00–23:30' },
	{ day: 'Jueves', value: '12:00–23:30' },
	{ day: 'Viernes', value: '12:00–24:00' },
	{ day: 'Sábado', value: '12:00–0:30' },
	{ day: 'Domingo', value: '12:00–16:00' },
];

/** Lo que la ficha declara del local, sin añadidos. */
export const SERVICIOS = [
	'Cocina española',
	'Comida a domicilio',
	'Comida para llevar',
	'Mediodía y noche',
	'Acceso adaptado',
];

export const FAQ = [
	{
		q: '¿Dónde está El Chef a Casa El Punto?',
		a: 'En la calle Tajo 2, en el código postal 41500 de la provincia de Sevilla. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De martes a jueves, de 12:00 a 23:30. El viernes alarga hasta las 24:00 y el sábado hasta las 0:30. El domingo solo abre al mediodía, de 12:00 a 16:00. El lunes figura cerrado.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de cocina española, y a la vez como comida a domicilio y comida para llevar. Es decir, la ficha declara las tres formas de servicio, aunque no publica carta, aforo ni reservas.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha lo lista como «comida a domicilio». Lo que no publica es el teléfono, la web ni la plataforma con la que se piden los encargos, así que aquí no hay forma de tramitarlos en línea.',
	},
	{
		q: '¿Cómo se pide o se reserva?',
		a: 'Esta web no recoge pedidos ni reservas y el local no tiene teléfono ni web publicados en Google. La vía directa es pasar por la calle Tajo 2 o abrir la ficha de Maps, donde el propio negocio puede publicar cambios.',
	},
	{
		q: '¿Tiene web propia o teléfono publicado?',
		a: 'No. La ficha de Google no enlaza ninguna web del restaurante ni muestra número de teléfono, y ofrece al titular la opción de añadirlos. Esta página es informativa y no es un canal oficial del negocio.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. No publica ningún otro dato de accesibilidad, como aseos adaptados o aparcamiento reservado, así que conviene confirmarlo en el local si lo necesitas.',
	},
	{
		q: '¿Por qué el nombre aparece con asterisco?',
		a: 'Google publica la ficha como «El Chef a Casa El Punto*», con un asterisco al final del nombre. En los títulos y en el texto de la web se usa el nombre sin el asterisco, que es un símbolo del listado y no parte del nombre comercial.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Tres sobre cinco con dos reseñas. Con tan pocas opiniones la media no dice gran cosa sobre el restaurante, así que esta web no la usa como argumento: solo cita el dato de la ficha.',
	},
];
