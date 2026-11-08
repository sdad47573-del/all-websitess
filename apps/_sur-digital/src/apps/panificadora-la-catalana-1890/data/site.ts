/**
 * Datos de Panificadora La Catalana 1890 — C. San Pablo, 16, Centro,
 * 14002 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panificadora La Catalana 1890,
 *   37.8857695,-4.7751928, feature 0xd6cdf7c3d973b91:0x624e495e236404c.
 * - Categoría, valoración, reseñas, horario, teléfono y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web, correo, redes, carta ni
 * precios. El mapa y las indicaciones llevan al punto exacto. El mostrador
 * recoge solo lo que muestran las fotos y lo que cuentan las reseñas, sin
 * importes.
 */

export const BUSINESS = {
	name: 'Panificadora La Catalana 1890',
	shortName: 'La Catalana',
	mark: 'C',
	street: 'C. San Pablo, 16',
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14002',
	country: 'ES',
	phone: '957 47 25 38',
	phoneHref: 'tel:+34957472538',
	rating: 4.7,
	reviewsCount: 99,
	siteUrl: 'https://www.sur-digital.com/panificadora-la-catalana-1890',
	geo: { lat: 37.8857695, lng: -4.7751928 },
	featureId: '0xd6cdf7c3d973b91:0x624e495e236404c',
	placeId: 'ChIJkTuXPXzfbA0RTEA24pXkJAY',
	googleCategory: 'Panadería',
	tagline: 'Panadería tradicional en el centro de Córdoba',
	description:
		'Panificadora La Catalana 1890, panadería y pastelería tradicional en la calle San Pablo, 16 (Centro, 14002 Córdoba). Pan, dulces y pasteles, todos sin lactosa según el sello de la fachada. Abierta de lunes a sábado de 8:30 a 14:30. 4,7 sobre 5 con 99 reseñas en Google.',
	hoursSummary: 'L–S 8:30–14:30 · domingo cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panificadora+La+Catalana+1890/@37.8857695,-4.7751928,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf7c3d973b91:0x624e495e236404c!8m2!3d37.8857695!4d-4.7751928!16s%2Fg%2F11f3cpzvgl?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=442729995785617484',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8857695%2C-4.7751928',
	embed: 'https://maps.google.com/maps?q=37.8857695,-4.7751928&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8857695,-4.7751928',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '8:30–14:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: de lunes a sábado, solo por la mañana, y domingo cerrado. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Pan del día',
	'Dulces y pasteles',
	'Sin lactosa',
	'Encargos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Desde 1890',
		text: 'El rótulo de la fachada anuncia «La Catalana · Panificadora desde 1890» y el de dentro, «Panadería La Catalana · Desde 1890 · Pastelería».',
	},
	{
		title: 'Todo sin lactosa',
		text: 'Un sello morado de la fachada asegura que «todos nuestros productos» son sin lactosa y sin trazas de lactosa.',
	},
	{
		title: 'Pan y pastelería',
		text: 'Las reseñas hablan de una «panadería tradicional con unos dulces y panes estupendos» y de la «gran calidad en sus panes y pasteles».',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan del día',
				note: 'Pan de panadería, a la venta en el mostrador mientras dura la mañana.',
			},
			{
				name: 'Panes tradicionales',
				note: 'Las reseñas destacan «unos dulces y panes estupendos» y la calidad del pan.',
			},
		],
	},
	{
		title: 'La pastelería',
		items: [
			{
				name: 'Dulces y pasteles',
				note: 'En las vitrinas: pasteles de crema, magdalenas, donuts, chocolate y tartas planas.',
			},
			{
				name: 'Milhojas',
				note: 'En las fotos del perfil aparece un pastel de hojaldre y crema cortado en porciones.',
			},
		],
	},
	{
		title: 'Sin lactosa',
		items: [
			{
				name: 'Toda la casa',
				note: 'El sello de la fachada asegura que todos los productos son sin lactosa y sin trazas de lactosa.',
			},
			{
				name: 'Alérgenos y encargos',
				note: 'La ficha no publica la lista de alérgenos. Para encargos, el teléfono es el 957 47 25 38.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panificadora La Catalana 1890?',
		a: 'En la calle San Pablo, 16, en el Centro de Córdoba (14002). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 8:30 a 14:30, solo por la mañana. Los domingos permanece cerrada. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 47 25 38. No indica página web, correo ni redes sociales, así que las consultas se atienden en el local o por teléfono.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, dulces, pasteles y bollería. Google clasifica el negocio como panadería. La ficha no publica carta ni precios, así que esta web no los indica.',
	},
	{
		q: '¿Es una panadería tradicional?',
		a: 'Sí. Las reseñas la describen como «panadería tradicional con unos dulces y panes estupendos». El rótulo de la fachada dice «La Catalana · Panificadora desde 1890», y el del interior añade «Panadería La Catalana · Desde 1890 · Pastelería».',
	},
	{
		q: '¿Los productos son sin lactosa?',
		a: 'Según el sello morado de la fachada, «todos nuestros productos» son sin lactosa y sin trazas de lactosa. La ficha de Google no publica la lista de alérgenos, así que conviene confirmarlo en el mostrador si tienes una intolerancia.',
	},
	{
		q: '¿Hay productos sin gluten?',
		a: 'La fachada anuncia productos sin lactosa, pero no publica información sobre gluten. Esta página no afirma que haya opciones sin gluten; lo mejor es preguntar en el local.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No. La ficha de Google marca el domingo como cerrado. De lunes a sábado abre de 8:30 a 14:30.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 99 reseñas en Google. Las reseñas destacadas hablan de la calidad del pan y los pasteles, la variedad y la buena relación calidad-precio.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local o por teléfono.',
	},
];
