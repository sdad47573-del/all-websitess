/**
 * Datos de Panadería Tradición Cordobesa S L — C. Simón Carpintero, 13, 14014.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Tradición Cordobesa S L,
 *   37.9037719,-4.7234296, feature 0xd6ce00cb5fe1823:0x5bc3182d7adaa5a3.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas, horario y
 *   descripción: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * La descripción del obrador (pan candeal, telera y bollo, horno de solera,
 * especialidades de lino, semillas e integral, clientes de supermercados,
 * tiendas y hostelería, lema «Calidad y servicio») es la que publica el propio
 * negocio en su ficha.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta con precios, métodos de pago ni reparto a domicilio. No hay datos de
 * accesibilidad publicados.
 */

export const BUSINESS = {
	name: 'Panadería Tradición Cordobesa',
	legalName: 'Panadería Tradición Cordobesa S L',
	shortName: 'Tradición Cordobesa',
	mark: 'T',
	street: 'C. Simón Carpintero, 13',
	district: '',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14014',
	country: 'ES',
	phone: '957 32 63 74',
	phoneHref: 'tel:+34957326374',
	rating: 4.6,
	reviewsCount: 18,
	siteUrl: 'https://www.sur-digital.com/panaderia-tradicion-cordobesa',
	geo: { lat: 37.9037719, lng: -4.7234296 },
	featureId: '0xd6ce00cb5fe1823:0x5bc3182d7adaa5a3',
	placeId: 'ChIJIxj-tQzgbA0Ro6Xaei0Yw1s',
	googleCategory: 'Panadería',
	tagline: 'Obrador de pan artesano',
	description:
		'Panadería Tradición Cordobesa S L, en la calle Simón Carpintero, 13 (14014 Córdoba). Obrador de pan artesano que sirve a supermercados, tiendas y hostelería: pan candeal, telera y bollo, y especialidades de lino, semillas e integral mejorado. De 10:00 a 13:30 todos los días; domingo cerrado. 4,6 sobre 5 con 18 reseñas. Teléfono 957 32 63 74.',
	hoursSummary: 'L–S 10:00–13:30 · domingo cerrado',
	lema: 'Calidad y servicio',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Tradici%C3%B3n+Cordobesa+S+L/@37.9037719,-4.7234296,17z/data=!3m1!4b1!4m6!3m5!1s0xd6ce00cb5fe1823:0x5bc3182d7adaa5a3!8m2!3d37.9037719!4d-4.7234296!16s%2Fg%2F1q5bpg2fz?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJIxj-tQzgbA0Ro6Xaei0Yw1s',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9037719%2C-4.7234296',
	embed: 'https://maps.google.com/maps?q=37.9037719,-4.7234296&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.9037719,-4.7234296',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '10:00–13:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026: todos los días de 10:00 a 13:30, con el domingo cerrado. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Pan artesano',
	'Pan candeal',
	'Telera y bollo',
	'Semillas e integral',
	'Hostelería',
];

export const HIGHLIGHTS = [
	{
		title: 'Horno de solera',
		text: 'La telera se elabora artesanalmente y se cuece en horno de solera, según cuenta el propio obrador en su ficha.',
	},
	{
		title: 'Del aperitivo al comensal',
		text: 'El obrador sirve pan aperitivo, desayunos y pan comensal, y trabaja con supermercados, tiendas y hostelería.',
	},
	{
		title: 'Lino, semillas e integral',
		text: 'Sus especialidades incluyen lino, mezcla de semillas (amapola, lino marrón, avena y pipa de girasol) e integral mejorado.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan de cada día',
		items: [
			{
				name: 'Pan candeal',
				note: '«Nuestro pan candeal, tanto panes como telera y bollo, es de gran calidad», dice el obrador en su ficha.',
			},
			{
				name: 'Telera',
				note: 'Se trata artesanalmente y se cuece en horno de solera. La ficha no publica formatos ni precios.',
			},
			{
				name: 'Bollo',
				note: 'El bollo forma parte de la línea de candeal que describe el propio negocio. Sin precio publicado.',
			},
		],
	},
	{
		title: 'Especialidades',
		items: [
			{
				name: 'Pan de lino',
				note: 'Una de las especialidades que anuncia el obrador en la descripción de su ficha.',
			},
			{
				name: 'Pan de semillas',
				note: 'Mezcla de amapola, lino marrón, avena y pipa de girasol, según la ficha.',
			},
			{
				name: 'Integral mejorado',
				note: 'El obrador lo cita como especialidad propia. La ficha no detalla la harina ni el formato.',
			},
		],
	},
	{
		title: 'Para la hostelería',
		items: [
			{
				name: 'Pan aperitivo',
				note: 'Pensado para el servicio de aperitivo de bares y restaurantes, según la descripción del obrador.',
			},
			{
				name: 'Pan de desayuno',
				note: 'La ficha menciona desayunos entre los formatos que sirve a la hostelería.',
			},
			{
				name: 'Pan comensal',
				note: 'Pan para el servicio de mesa. Los pedidos se tratan por teléfono: la web no permite comprar.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tradición Cordobesa?',
		a: 'En la calle Simón Carpintero, 13, en el 14014 Córdoba. El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 10:00 a 13:30 y el domingo cierra. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono que publica la ficha es el 957 32 63 74. No figuran web propia, correo ni redes sociales.',
	},
	{
		q: '¿Qué tipo de pan hace?',
		a: 'El obrador describe pan candeal (panes, telera y bollo), especialidades de lino, semilla e integral mejorado, y formatos de aperitivo, desayuno y comensal para la hostelería. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Qué es el horno de solera?',
		a: 'Es el horno que cita el propio obrador para la telera: una solera de piedra sobre la que se cuece el pan. La ficha no da más detalles del proceso.',
	},
	{
		q: '¿Venden al público o solo a empresas?',
		a: 'La descripción del obrador dice que sirve tanto a supermercados como a tiendas, y que es especialista en hostelería. El horario publicado es de mañana, de 10:00 a 13:30. No aclara condiciones de venta al particular: conviene llamar.',
	},
	{
		q: '¿Se puede comprar online?',
		a: 'No. Esta web es informativa y no tiene tienda ni carrito. Los pedidos se consultan por teléfono.',
	},
	{
		q: '¿Qué especialidades de semillas tiene?',
		a: 'La ficha cita lino y una mezcla de semillas con amapola, lino marrón, avena y pipa de girasol, además del integral mejorado.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica datos de accesibilidad para este obrador, así que esta página no afirma nada sobre el acceso, el aseo o el aparcamiento.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 18 reseñas en Google. Entre las destacadas: «Buen surtido de dulces y pan recién hecho» y «Una gran variedad de sabores».',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta por teléfono.',
	},
];
