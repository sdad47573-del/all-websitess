/**
 * Datos de Panadería La Miguita — Mercado del Marrubial, puesto nº 17,
 * Av. de Jesús Rescatado, 1 (14010 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: Panadería La Miguita, 37.891186,-4.763633,
 *   feature 0xd6cdf849bf36a5d:0x887d65d83ff8f30b.
 * - Nombre, categoría, dirección, teléfono, valoración, reseñas, horario y fotos:
 *   ficha pública de Google.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web propia ni
 * datos de accesibilidad. La web no los afirma. Las fotos son las de la galería
 * del establecimiento en Google Maps y los textos se limitan a lo que muestran
 * y a lo que declara la ficha.
 */

export const BUSINESS = {
	name: 'Panadería La Miguita',
	shortName: 'La Miguita',
	mark: 'M',
	street: 'Mercado del Marrubial, puesto nº 17',
	streetLine2: 'Av. de Jesús Rescatado, 1',
	district: 'Levante',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14010',
	country: 'ES',
	phone: '658 39 48 31',
	phoneHref: 'tel:+34658394831',
	rating: 5,
	reviewsCount: 3,
	siteUrl: 'https://www.sur-digital.com/panaderia-la-miguita',
	geo: { lat: 37.891186, lng: -4.763633 },
	featureId: '0xd6cdf849bf36a5d:0x887d65d83ff8f30b',
	placeId: 'ChIJXWrzm4TfbA0RC_P4P9hlfYg',
	googleCategory: 'Panadería',
	tagline: 'Panadería en el Mercado del Marrubial, Córdoba',
	description:
		'Panadería La Miguita, en el puesto nº 17 del Mercado del Marrubial (Av. de Jesús Rescatado, 1, 14010 Córdoba). Pan y bollería de obrador, de lunes a sábado de 8:30 a 14:00. 5,0 sobre 5 en Google.',
	hoursSummary: 'Lunes a sábado, 8:30–14:00 · domingo cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+La+Miguita/@37.891186,-4.763633,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf849bf36a5d:0x887d65d83ff8f30b!8m2!3d37.891186!4d-4.763633!16s%2Fg%2F11bzzyfjbh?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=9835129140707652363',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.891186%2C-4.763633',
	embed: 'https://maps.google.com/maps?q=37.891186,-4.763633&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.891186,-4.763633',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:30–14:00' },
	{ day: 'Sábado', value: '8:30–14:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: de lunes a sábado, de 8:30 a 14:00, y domingo cerrado. Los festivos pueden cambiar el horario; conviene llamar antes de acercarse.';

/** Lo que la ficha enumera y lo que se ve en sus fotos. */
export const SERVICIOS = [
	'Pan del día',
	'Barras y teleras',
	'Bollería y dulces',
	'Huevos y conservas',
	'Pago con Bizum',
];

export const HIGHLIGHTS = [
	{
		title: 'El puesto',
		text: 'La panadería ocupa el puesto nº 17 del Mercado del Marrubial, con entrada por la Av. de Jesús Rescatado. El cartel blanco de letras negras y panes dibujados se ve desde el pasillo del mercado.',
	},
	{
		title: 'El pan',
		text: 'En el mostrador hay barras y teleras, y en las estanterías, pan y bollería envasados. Los carteles de oferta cuelgan entre los panes: dos barras, teleras, palmeras. Todo se compra al momento y se lleva.',
	},
	{
		title: 'La mañana',
		text: 'Abre de lunes a sábado de 8:30 a 14:00 y cierra los domingos, según la ficha de Google. El cartel de Bizum en la pared recuerda que también se puede pagar con el móvil.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería La Miguita?',
		a: 'En el puesto nº 17 del Mercado del Marrubial, con entrada por la Av. de Jesús Rescatado, 1 (14010 Córdoba), en el barrio de Levante. El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a sábado de 8:30 a 14:00, y domingo cerrado, según la ficha de Google. Al ser un puesto de mercado, el horario puede variar en festivos; conviene llamar antes.',
	},
	{
		q: '¿Se puede llamar para encargar?',
		a: 'La ficha publica el 658 39 48 31 como teléfono del negocio. Esta web no gestiona pedidos: cualquier encargo se habla directamente con el puesto por teléfono o en el mostrador.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Las fotos de la ficha muestran el mostrador con barras y teleras, estanterías de pan y bollería envasados, cajas de dulces, huevos y conservas. La oferta cambia con el día, así que lo mejor es preguntar en el puesto.',
	},
	{
		q: '¿Tiene página web o carta con precios?',
		a: 'No. La ficha de Google no enlaza ninguna web propia ni publica carta ni precios, así que esta página no los reproduce. Los precios están en los carteles del propio mostrador.',
	},
	{
		q: '¿Se puede pagar con tarjeta o Bizum?',
		a: 'En la pared del puesto hay un cartel de Bizum que indica que el establecimiento permite el pago por esa vía. Para otros medios de pago, esta web no tiene información publicada: conviene preguntar en el mostrador.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '5,0 sobre 5 con 3 reseñas, según la ficha pública. Son pocas reseñas, así que tómalas como una referencia inicial y no como una media amplia.',
	},
	{
		q: '¿Cómo se llega?',
		a: 'El mercado está en la Av. de Jesús Rescatado, 1, en la zona de Levante, al este del centro de Córdoba. El botón «Cómo llegar» abre la ruta en Google Maps con la ubicación exacta del puesto.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo indica que no hay aparcamiento adaptado para sillas de ruedas; no publica información sobre el acceso al puesto. Al estar dentro de un mercado, el acceso depende de las instalaciones, así que esta web no afirma nada más. Si lo necesitas, llama antes.',
	},
];
