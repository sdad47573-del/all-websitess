/**
 * Datos de Panadería Confitería Lochi — Av. de Carlos Haya
 * (Cruz de Humilladero, 29010 Málaga).
 *
 * Esta es la ficha de la avenida de Carlos Haya, distinta de la de la calle
 * Eugenio Gross que ya tiene web en el repo (apps/confiteria-panaderia-lochi).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Confitería Lochi,
 *   36.7216955,-4.4440079, feature 0xd72f7b320a4bb05:0x1f41326e92afdfa7.
 * - Nombre, dirección, categoría, teléfono, valoración, reseñas, horario,
 *   accesibilidad y galería: ficha pública de Google (octubre de 2026).
 *
 * Lo que la ficha NO publica: página web, redes sociales, descripción, carta ni
 * precios. La web no inventa ninguno de esos datos.
 */

export const BUSINESS = {
	name: 'Panadería Confitería Lochi',
	shortName: 'Lochi',
	mark: 'L',
	street: 'Av. de Carlos Haya',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/panaderia-confiteria-lochi',
	phone: '952 39 16 41',
	phoneHref: 'tel:+34952391641',
	geo: { lat: 36.7216955, lng: -4.4440079 },
	featureId: '0xd72f7b320a4bb05:0x1f41326e92afdfa7',
	placeId: 'ChIJBbukILP3cg0Rp9-vkm4yQR8',
	plusCode: '8C8QPHC4+M9',
	googleCategory: 'Panadería',
	description:
		'Panadería y confitería en la avenida de Carlos Haya (Cruz de Humilladero, 29010 Málaga). Donuts, bollería y tartas por encargo, con horario de mañana todos los días.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Confiter%C3%ADa+Lochi/@36.7216955,-4.4440079,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7b320a4bb05:0x1f41326e92afdfa7!8m2!3d36.7216955!4d-4.4440079!16s%2Fg%2F11fjx8rpqq?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=2249539065130631079',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7216955%2C-4.4440079',
	embed: 'https://maps.google.com/maps?q=36.7216955,-4.4440079&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7216955,-4.4440079',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.7,
	count: 30,
	label: '3,7',
};

/** Horario que publica la ficha. */
export const HORARIO = {
	todos: '8:00–14:30',
	dias: 'De lunes a domingo',
	aviso:
		'Día de Todos los Santos: el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en la propia ficha de Google o llamando antes de desplazarte.',
};

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Donuts y bollería',
	'Tartas por encargo',
	'Horario de mañana',
	'Todos los días',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Dulce de vitrina',
		text: 'La ficha la clasifica como panadería, pero su nombre habla de confitería y las fotos de la galería muestran bollería, donuts y tartas en la vitrina.',
	},
	{
		title: 'Tartas de encargo',
		text: 'Entre las reseñas publicadas hay una que cuenta una tarta de cumpleaños comprada en el local. Es la única pista sobre encargos que da la ficha, así que conviene preguntar por teléfono.',
	},
	{
		title: 'Mañanas de barrio',
		text: 'El horario es el mismo los siete días: de 8:00 a 14:30. No figura ningún día de cierre y no hay turno de tarde.',
	},
];

/**
 * Temas de las reseñas destacadas, resumidos con palabras propias: la ficha
 * enseña tres opiniones, una de ellas de cuatro estrellas.
 */
export const RESENAS = [
	{ rating: 5, tema: 'Los donuts', resumen: 'Una de las reseñas destaca los donuts de la casa por encima de otros que ha probado.' },
	{ rating: 4, tema: 'Una tarta de cumpleaños', resumen: 'Otra cuenta que compró una tarta para un cumpleaños y le pareció muy buena.' },
	{ rating: 5, tema: 'El trato', resumen: 'La tercera elogia el género y la atención de las dependientas.' },
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Confitería Lochi?',
		a: 'En la avenida de Carlos Haya, en el barrio de Cruz de Humilladero (29010 Málaga). La ficha de Google indica la avenida sin número de portal, así que esta página no lo inventa: el mapa abre las coordenadas exactas y «Cómo llegar» lanza la ruta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De 8:00 a 14:30, el mismo horario los siete días de la semana. No figura ningún día de cierre ni turno de tarde. En festivos como el Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'Sí. La ficha publica el 952 39 16 41, que es el número que aparece en esta página. Es también la vía para preguntar por encargos de tarta.',
	},
	{
		q: '¿Hacen tartas por encargo?',
		a: 'La ficha no lo publica como servicio, pero una de las reseñas destacadas menciona una tarta de cumpleaños comprada en el local. Para confirmar plazos y tamaños, lo mejor es llamar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y su nombre añade confitería. Las fotos de la galería muestran bollería, donuts y tartas. No publica carta completa ni precios, así que esta página no los detalla.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas. En cambio, indica que no hay aparcamiento adaptado. No publica información sobre el interior ni sobre los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 3,7 sobre 5 con 30 reseñas en el momento de consultarla (octubre de 2026). Las opiniones son variadas, así que conviene leerlas completas en Google Maps.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no añade ninguno.',
	},
];
