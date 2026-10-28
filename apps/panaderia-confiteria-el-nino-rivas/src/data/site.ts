/**
 * Datos de Panadería Confitería El Niño Rivas — Av. de Molière, 27
 * (Carretera de Cádiz, 29004 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panaderia Confiteria El Niño Rivas,
 *   36.6863913,-4.4519097, feature 0xd72f9c4e3f2a793:0x9fd64902162332d2.
 * - Dirección, teléfono, categoría, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google, consultada el 28 de octubre de 2026.
 * - Fotografías: perfil del establecimiento en Google Maps (nueve imágenes).
 *
 * Lo que la web NO inventa: la ficha no publica web propia, descripción, carta,
 * precios, reparto ni fecha de apertura. Los productos citados son los que
 * aparecen en las fotografías del perfil (pan en las estanterías, bollería en la
 * vitrina, roscón de Reyes y el cartel de rosco de vino de la fachada) y los que
 * mencionan las reseñas. No se publican importes.
 */

export const BUSINESS = {
	name: 'Panadería Confitería El Niño Rivas',
	displayName: 'El Niño Rivas',
	mark: 'NR',
	street: 'Av. de Molière, 27',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29004',
	country: 'ES',
	phone: '692 34 53 96',
	phoneHref: 'tel:+34692345396',
	rating: 4.7,
	reviewsCount: 51,
	siteUrl: 'https://panaderia-confiteria-el-nino-rivas.vercel.app',
	geo: { lat: 36.6863913, lng: -4.4519097 },
	featureId: '0xd72f9c4e3f2a793:0x9fd64902162332d2',
	placeId: 'ChIJk6fy48T5cg0R0jIjFgJJ1p8',
	googleCategory: 'Panadería',
	tagline: 'Panadería y confitería abierta los domingos',
	description:
		'Panadería Confitería El Niño Rivas, en Av. de Molière, 27 (Carretera de Cádiz, 29004 Málaga). Pan del día, bollería, dulces de vitrina y roscones, de lunes a domingo. Teléfono 692 34 53 96.',
	hoursSummary: 'De lunes a domingo, desde las 7:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panaderia+Confiteria+El+Ni%C3%B1o+Rivas/@36.6863913,-4.4519097,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9c4e3f2a793:0x9fd64902162332d2!8m2!3d36.6863913!4d-4.4519097!16s%2Fg%2F11fk4ddv35',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6863913%2C-4.4519097',
	embed: 'https://maps.google.com/maps?q=36.6863913,-4.4519097&z=17&hl=es&output=embed',
};

/** Horario del bloque estructurado de la ficha: sin cierre de mediodía. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:00–20:00' },
	{ day: 'Sábado y domingo', value: '7:00–16:00' },
];

/** Reseñas publicadas en la ficha. La primera se cita en la portada. */
export const REVIEW_QUOTE =
	'El pan está buenísimo y los dulces también, la atención no podría ser mejor';

export const REVIEWS = [
	{
		text: 'El pan está buenísimo y los dulces también, la atención no podría ser mejor.',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
	{
		text: 'Todos los productos elaborados tradicional y frescos.',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
	{
		text: 'Esta familia hace un surtido de panes a cada cual más rico!',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
];

/** Lo que la ficha, el rótulo y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Pan del día',
	'Confitería',
	'Bollería',
	'Roscones',
	'Abierto los domingos',
	'Carretera de Cádiz',
];

export const HIGHLIGHTS = [
	{
		number: '01',
		title: 'El rótulo de siempre',
		text: 'La fachada conserva el cartel azul de «Panadería Confitería El Niño Rivas», con el teléfono pintado debajo y el toldo a rayas sobre la puerta.',
	},
	{
		number: '02',
		title: 'Pan y dulce a la vista',
		text: 'Por la puerta abierta se ven las estanterías de pan y la vitrina de bollería. Las reseñas lo confirman: «el pan está buenísimo y los dulces también».',
	},
	{
		number: '03',
		title: 'Los siete días',
		text: 'Abre de lunes a domingo: de 7:00 a 20:00 entre semana y hasta las 16:00 sábado y domingo. El domingo se puede ir a por pan sin esperar al lunes.',
	},
];

/**
 * Lo que aparece en las fotografías del perfil y en las reseñas.
 * La ficha no publica carta ni precios, así que no se muestran importes.
 */
export const MENU = [
	{
		title: 'Del horno',
		kicker: 'Cada mañana',
		items: [
			{
				name: 'Pan del día',
				note: '«el pan está buenísimo», en palabras de una reseña',
			},
			{
				name: 'Hogazas y barras',
				note: 'en las estanterías verdes del local, visibles desde la calle',
			},
			{
				name: 'Surtido de panes',
				note: '«un surtido de panes a cada cual más rico», según la ficha',
			},
		],
	},
	{
		title: 'Confitería',
		kicker: 'Vitrina',
		items: [
			{
				name: 'Dulces de vitrina',
				note: 'la vitrina aparece de frente en la foto de la fachada',
			},
			{
				name: 'Bollería',
				note: '«los dulces también» buenísimos, añade la misma reseña',
			},
			{
				name: 'Productos del día',
				note: '«elaborados tradicional y frescos», en otra de las opiniones',
			},
		],
	},
	{
		title: 'De temporada',
		kicker: 'Mostrador',
		items: [
			{
				name: 'Roscón de Reyes',
				note: 'fotografiado en su caja, con fruta confitada y azúcar',
			},
			{
				name: 'Rosco de vino',
				note: 'el cartel de la fachada anuncia el de la marca P.PAKY',
			},
			{
				name: 'Encargos',
				note: 'la ficha no los anuncia; se consultan en el teléfono del rótulo',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Niño Rivas?',
		a: 'En la avenida de Molière, 27, en la zona de Carretera de Cádiz (29004 Málaga). El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días. De lunes a viernes atiende de 7:00 a 20:00, sin cierre de mediodía, y sábado y domingo de 7:00 a 16:00, según el horario publicado en la ficha de Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 692 34 53 96. La panadería no publica página web propia ni un canal de pedidos por internet, así que las consultas se resuelven por teléfono o en el mostrador.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan del día, bollería y dulces de confitería, según las fotografías del perfil y las reseñas. En el perfil aparecen además un roscón de Reyes y el cartel de rosco de vino de la marca P.PAKY. La ficha no publica carta ni precios, por eso aquí no se citan importes.',
	},
	{
		q: '¿Hacen encargos?',
		a: 'No consta en la ficha ni en la información pública consultada, y la web no lo anuncia. Si necesitas una tarta o una bandeja para una fecha concreta, lo directo es llamar al 692 34 53 96 y preguntar.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero no aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 51 reseñas en Google. Las opiniones destacan el pan, los dulces, la atención y el surtido de panes.',
	},
	{
		q: '¿Hay reparto a domicilio o venta online?',
		a: 'No consta en la ficha ni en la información pública consultada. La web no anuncia reparto ni pedidos por internet.',
	},
	{
		q: '¿Desde cuándo existe la panadería?',
		a: 'La ficha pública no indica una fecha de apertura ni una historia del negocio. El toldo de la fachada lleva el año 2017, pero la web no lo interpreta como fecha de fundación.',
	},
];
