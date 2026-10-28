/**
 * Datos de Panadería Artesana Sabor a Pan, s.l. — C. Cristóbal de Villalón, 11,
 * local 7 (Cruz de Humilladero, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Artesana Sabor a Pan, s.l.,
 *   36.7102321,-4.4546689, feature 0xd72f73bae9b3c5f:0xf96d4af950c76108.
 * - Dirección, teléfono, categoría, valoración, reseñas, horario, accesibilidad
 *   y descripción del titular: ficha pública de Google, consultada el 28 de
 *   octubre de 2026.
 * - Fotografías: perfil del establecimiento en Google Maps.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, carta, precios ni
 * reparto. La panadería sí describe su obrador en la ficha (masas madres,
 * harinas de cereales, maíz y centeno, tartas de encargo, palmeras gigantes,
 * empanadas, milhojas, torrijas y donuts caseros) y las fotografías del perfil
 * muestran el pan y la pastelería. No se publican importes.
 */

export const BUSINESS = {
	name: 'Panadería Artesana Sabor a Pan, s.l.',
	displayName: 'Sabor a Pan',
	mark: 'SP',
	street: 'C. Cristóbal de Villalón, 11, Loc 7',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	phone: '951 24 52 57',
	phoneHref: 'tel:+34951245257',
	rating: 4.1,
	reviewsCount: 18,
	siteUrl: 'https://panaderia-artesana-sabor-a-pan.vercel.app',
	geo: { lat: 36.7102321, lng: -4.4546689 },
	featureId: '0xd72f73bae9b3c5f:0xf96d4af950c76108',
	placeId: 'ChIJXzybrjv3cg0RCGHHUPlKbfk',
	googleCategory: 'Panadería',
	tagline: 'Obrador artesanal de pan y pastelería',
	description:
		'Panadería Artesana Sabor a Pan, en C. Cristóbal de Villalón, 11, local 7 (Cruz de Humilladero, 29006 Málaga). Pan de masa madre, tartas de encargo, palmeras gigantes, empanadas y dulces caseros. Teléfono 951 24 52 57.',
	hoursSummary: 'De lunes a viernes, 7:00–15:00 y 17:00–20:30',
	ownerNote:
		'«Obrador Artesanal de pastelería y Panadería. Trabajamos con masas madres, harinas de cereales, maíz, chai, centeno… Entre nuestros productos están: locas, todo tipo de bizcochos y bollería, tartas de cumpleaños y de bodas, hojaldres especiales, palmeras gigantes personalizadas (frutas, chocolate…), empanadas, milhojas, torrijas, donuts caseros y muchos más dulces.»',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Artesana+Sabor+a+Pan,+s.l./@36.7102321,-4.4546689,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73bae9b3c5f:0xf96d4af950c76108!8m2!3d36.7102321!4d-4.4546689!16s%2Fg%2F11k667vsjp',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7102321%2C-4.4546689',
	embed: 'https://maps.google.com/maps?q=36.7102321,-4.4546689&z=17&hl=es&output=embed',
};

/** Horario del bloque estructurado de la ficha: domingo cerrado. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:00–15:00 · 17:00–20:30' },
	{ day: 'Sábado', value: '7:00–14:00' },
	{ day: 'Domingo', value: 'Cerrado' },
];

/** Panes que la propia panadería enumera en su ficha de Google. */
export const PANES = [
	{ name: 'Harina blanca', note: 'el pan de cada día' },
	{ name: 'Centeno', note: 'harina de centeno' },
	{ name: 'Maíz', note: 'harina de maíz' },
	{ name: 'Cebolla', note: 'pan de cebolla' },
	{ name: 'Miel y nueces', note: 'dulce y con fruto seco' },
	{ name: 'Chai', note: 'la variedad que cita el titular' },
];

/** Reseñas publicadas en la ficha. La primera se cita en la portada. */
export const REVIEW_QUOTE = 'Muy buenos productos y muy buena atención, todo casero y muy bueno';

export const REVIEWS = [
	{
		text: 'Muy buenos productos y muy buena atención, todo casero y muy bueno.',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
	{
		text: 'Excelentes productos, todo lo que he probado buenísimo.',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
];

/** Lo que la ficha, el rótulo y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Masas madres',
	'Pan artesano',
	'Tartas de encargo',
	'Palmeras gigantes',
	'Empanadas',
	'Donuts caseros',
	'Alérgenos bajo petición',
];

export const HIGHLIGHTS = [
	{
		number: '01',
		title: 'Masas madres',
		text: 'La casa describe su obrador como artesanal y asegura trabajar con masas madres y harinas de cereales, maíz y centeno. En el perfil se ven hogazas de corteza gruesa recién hechas.',
	},
	{
		number: '02',
		title: 'Tartas a medida',
		text: 'Tartas de cumpleaños y de bodas, con posibilidad de personalizarlas con fotografías. El perfil reúne tartas de fútbol, tartas de números y tartas con nombre.',
	},
	{
		number: '03',
		title: 'Alérgenos, bajo petición',
		text: 'La ficha anuncia una certificación del 100 % frente a todo tipo de alérgenos, siempre que se pida. Conviene confirmarlo al hacer un encargo.',
	},
];

/**
 * Lo que la panadería declara en su ficha y lo que muestran las fotos del
 * perfil. La ficha no publica carta ni precios, así que no se muestran importes.
 */
export const MENU = [
	{
		title: 'Tartas y encargos',
		kicker: 'Pastelería',
		items: [
			{
				name: 'Tartas de cumpleaños y de bodas',
				note: 'la casa las cita entre sus productos en la ficha de Google',
			},
			{
				name: 'Tartas con fotografía',
				note: 'la panadería anuncia que personaliza las tartas con imágenes',
			},
			{
				name: 'Tartas de fútbol y de números',
				note: 'varias aparecen en las fotos del perfil',
			},
		],
	},
	{
		title: 'Dulces de vitrina',
		kicker: 'Obrador',
		items: [
			{
				name: 'Locas',
				note: 'el dulce que la ficha nombra en primer lugar',
			},
			{
				name: 'Bizcochos y bollería',
				note: '«todo tipo de bizcochos y bollería», en palabras del titular',
			},
			{
				name: 'Palmeras gigantes personalizadas',
				note: 'de frutas o de chocolate, según la ficha',
			},
			{
				name: 'Milhojas, torrijas y donuts caseros',
				note: 'el resto de dulces que enumera la descripción',
			},
		],
	},
	{
		title: 'Horno y salados',
		kicker: 'Cada mañana',
		items: [
			{
				name: 'Pan de masa madre',
				note: 'en harina blanca, centeno, maíz, cebolla, miel y nueces',
			},
			{
				name: 'Hojaldres especiales',
				note: 'junto a las empanadas, en la descripción de la ficha',
			},
			{
				name: 'Empanadas',
				note: 'para completar la mesa o llevar a casa',
			},
			{
				name: 'Roscón de frutas',
				note: 'los aros con fruta confitada que aparecen en el perfil',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sabor a Pan?',
		a: 'En la calle Cristóbal de Villalón, 11, local 7, en el barrio de Cruz de Humilladero (29006 Málaga). El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:00 a 15:00 y de 17:00 a 20:30. El sábado atiende de 7:00 a 14:00 y el domingo permanece cerrado, según el horario publicado en la ficha de Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 951 24 52 57. La panadería no publica página web propia ni un canal de pedidos por internet, así que los encargos se cierran por teléfono o en el obrador.',
	},
	{
		q: '¿Hacen tartas por encargo?',
		a: 'Sí. La casa anuncia tartas de cumpleaños y de bodas, y explica que personaliza las tartas con fotografías. En el perfil aparecen tartas de fútbol, de números y con el nombre puesto. Para concretar una, llama al 951 24 52 57.',
	},
	{
		q: '¿Qué panes hacen?',
		a: 'La ficha enumera pan de harina blanca, chai, centeno, cebolla y miel y nueces, todo de elaboración artesanal y con masas madres. La disponibilidad puede cambiar según el día.',
	},
	{
		q: '¿Tienen opciones para alérgenos?',
		a: 'La panadería anuncia en su ficha una certificación del 100 % contra todo tipo de alérgenos, bajo petición. Al ser un dato del propio establecimiento, conviene confirmarlo por teléfono antes de encargar.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas y también aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,1 sobre 5 con 18 reseñas en Google. Las opiniones destacan los productos caseros y la atención del obrador.',
	},
	{
		q: '¿Hay reparto a domicilio o venta online?',
		a: 'No consta en la ficha ni en la información pública consultada. La web no anuncia reparto ni pedidos por internet; para un encargo, lo directo es llamar al 951 24 52 57.',
	},
];
