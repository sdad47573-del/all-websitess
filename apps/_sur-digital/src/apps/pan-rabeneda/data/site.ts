/**
 * Datos de Pan Rabaneda — C. Almogía, 12 (Cruz de Humilladero, 29007 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Pan Rabaneda, 36.7175531,-4.4545185,
 *   feature 0xd72f76b86445b93:0x9b9a20b80bb8389.
 * - Dirección, categoría, teléfono, valoración, reseñas, accesibilidad y
 *   descripción del titular: ficha pública de Google, consultada el 28 de
 *   octubre de 2026.
 * - Horario: bloque estructurado de la ficha (lunes a domingo).
 * - Fotografías: perfil del establecimiento en Google Maps.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, carta, precios ni
 * reparto. La panadería describe su obrador en la propia ficha (pan artesanal,
 * pasteles, tartas, desayunos y salados) y las reseñas citan algunos productos;
 * no se publican importes.
 */

export const BUSINESS = {
	name: 'Pan Rabaneda',
	displayName: 'Rabaneda',
	mark: 'PR',
	street: 'C. Almogía, 12',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29007',
	country: 'ES',
	phone: '665 51 15 10',
	phoneHref: 'tel:+34665511510',
	rating: 4,
	reviewsCount: 83,
	siteUrl: 'https://www.sur-digital.com/pan-rabeneda',
	geo: { lat: 36.7175531, lng: -4.4545185 },
	featureId: '0xd72f76b86445b93:0x9b9a20b80bb8389',
	placeId: 'ChIJk1tEhmv3cg0RiYO7gAuiuQk',
	googleCategory: 'Panadería',
	tagline: 'Panadería artesanal en Cruz de Humilladero',
	description:
		'Pan Rabaneda, panadería artesanal en C. Almogía, 12 (Cruz de Humilladero, 29007 Málaga). Pan, pasteles, tartas, desayunos, salados y encargos personalizados. Teléfono 665 51 15 10.',
	hoursSummary: 'De lunes a domingo, desde las 7:00',
	ownerNote:
		'«Pan Rabaneda es una panadería artesanal en Málaga donde elaboramos pan, pasteles, tartas, desayunos y productos salados con ingredientes de calidad. También realizamos encargos personalizados y ofrecemos una atención cercana para que cada visita sea especial.»',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Pan+Rabaneda/@36.7175531,-4.4545185,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f76b86445b93:0x9b9a20b80bb8389!8m2!3d36.7175531!4d-4.4545185!16s%2Fg%2F11bx1hkzff',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7175531%2C-4.4545185',
	embed: 'https://maps.google.com/maps?q=36.7175531,-4.4545185&z=17&hl=es&output=embed',
};

/**
 * Horario estructurado de la ficha de Google.
 * El viernes aparece sin cierre de mediodía; el fin de semana abre a las 7:30.
 */
export const HOURS = [
	{ day: 'Lunes a jueves', value: '7:00–15:00 · 17:00–20:30' },
	{ day: 'Viernes', value: '7:00–20:30' },
	{ day: 'Sábado y domingo', value: '7:30–15:00 · 17:00–20:30' },
];

/** Reseñas publicadas en la ficha. La primera se cita en la portada. */
export const REVIEW_QUOTE = 'El pan buenísimo, y las palmeras de Nutella increíbles';

export const REVIEWS = [
	{
		text: 'El pan buenísimo, y las palmeras de Nutella increíbles!!',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
	{
		text: 'Dulces muy bueno y muy buena atención en esta panadería.',
		note: 'Reseña de 4 estrellas en Google Maps',
	},
	{
		text: 'Compro un pack por el cumpleaños de mi hijo y todo muy bien.',
		note: 'Reseña de 5 estrellas en Google Maps',
	},
];

/** Lo que la ficha, el rótulo y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Pan artesanal',
	'Pasteles',
	'Tartas',
	'Desayunos',
	'Salados',
	'Encargos',
	'Cruz de Humilladero',
];

export const HIGHLIGHTS = [
	{
		number: '01',
		title: 'Pan de obrador',
		text: 'El titular describe la casa como «una panadería artesanal en Málaga» y las reseñas lo confirman: «el pan buenísimo». El pan se elabora en el propio obrador.',
	},
	{
		number: '02',
		title: 'Dulce y salado',
		text: 'En la ficha, la panadería cita pasteles, tartas, desayunos y productos salados. Las reseñas añaden las palmeras de Nutella y los dulces del mostrador.',
	},
	{
		number: '03',
		title: 'Encargos a medida',
		text: 'La casa anuncia «encargos personalizados». Una de las reseñas cuenta que compró «un pack por el cumpleaños» de su hijo: conviene encargarlo con antelación.',
	},
];

/**
 * Lo que la panadería declara en su ficha y lo que aparece en las reseñas y las
 * fotos del perfil. La ficha no publica carta ni precios, así que no se muestran
 * importes.
 */
export const MENU = [
	{
		title: 'Del obrador',
		kicker: 'Cada mañana',
		items: [
			{
				name: 'Pan artesanal',
				note: '«el pan buenísimo», en palabras de una reseña de la ficha',
			},
			{
				name: 'Barras y piezas de horno',
				note: 'pan del día para desayuno, comida y merienda',
			},
			{
				name: 'Desayunos',
				note: 'la casa los cita entre lo que se sirve a diario',
			},
		],
	},
	{
		title: 'Dulce',
		kicker: 'Pastelería',
		items: [
			{
				name: 'Pasteles y tartas',
				note: 'aparecen en la descripción que el titular publica en Google',
			},
			{
				name: 'Palmeras de Nutella',
				note: '«increíbles!!», según una reseña de 5 estrellas',
			},
			{
				name: 'Dulces del mostrador',
				note: '«dulces muy bueno», en otra de las reseñas de la ficha',
			},
		],
	},
	{
		title: 'Salado y encargos',
		kicker: 'Para llevar',
		items: [
			{
				name: 'Productos salados',
				note: 'la ficha los menciona junto al pan y la pastelería',
			},
			{
				name: 'Packs de cumpleaños',
				note: 'una reseña cuenta un pedido de este tipo; se prepara por encargo',
			},
			{
				name: 'Encargos personalizados',
				note: 'servicio que la panadería anuncia en su propia ficha',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Pan Rabaneda?',
		a: 'En la calle Almogía, 12, en el barrio de Cruz de Humilladero (29007 Málaga). El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 7:00 a 15:00 y de 17:00 a 20:30. El viernes atiende de 7:00 a 20:30 sin cierre de mediodía. Sábado y domingo abre de 7:30 a 15:00 y de 17:00 a 20:30, según el horario publicado en la ficha de Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 665 51 15 10. La panadería no publica página web propia ni un canal de pedidos por internet, así que los encargos se cierran por teléfono o en el mostrador.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La casa describe su obrador con pan artesanal, pasteles, tartas, desayunos y productos salados. Las reseñas de Google citan el pan, los dulces y las palmeras de Nutella. La ficha no publica carta ni precios, por eso aquí no se citan importes.',
	},
	{
		q: '¿Hacen encargos personalizados?',
		a: 'Sí: la propia panadería los anuncia en la descripción de su ficha de Google, junto a los packs de cumpleaños que menciona una de las reseñas. Para concretar un encargo, lo directo es llamar al 665 51 15 10.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas. No especifica si hay aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,0 sobre 5 con 83 reseñas en Google. Las opiniones destacan el pan, los dulces y el trato del mostrador.',
	},
	{
		q: '¿Se puede comprar online o hay reparto a domicilio?',
		a: 'No consta en la ficha ni en la información pública consultada. La web no anuncia reparto ni pedidos por internet; para consultar una compra o un encargo, lo directo es llamar al 665 51 15 10.',
	},
	{
		q: '¿Desde cuándo existe la panadería?',
		a: 'La ficha pública no indica una fecha de apertura ni una historia del negocio. Esta página no inventa una fecha: solo reproduce lo que aparece en Google y en las fotografías del perfil.',
	},
];
