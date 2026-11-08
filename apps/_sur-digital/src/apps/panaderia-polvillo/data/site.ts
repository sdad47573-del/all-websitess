/**
 * Datos de Panadería Polvillo — C. del Ciprés (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Polvillo, 36.7247446,-4.4481657,
 *   feature 0xd72f79f8f5d6343:0x623036914bfe23d3.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario, accesibilidad y
 *   fotos: ficha pública de Google (octubre de 2026).
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios. El mostrador
 * recoge solo lo que cita la descripción del negocio, lo que dicen las reseñas y
 * lo que muestran las fotos del perfil, sin importes.
 */

export const BUSINESS = {
	name: 'Panadería Polvillo',
	shortName: 'Polvillo',
	mark: 'P',
	street: 'C. del Ciprés',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '610 00 85 61',
	phoneHref: 'tel:+34610008561',
	rating: 4.4,
	reviewsCount: 24,
	siteUrl: 'https://www.sur-digital.com/panaderia-polvillo',
	geo: { lat: 36.7247446, lng: -4.4481657 },
	featureId: '0xd72f79f8f5d6343:0x623036914bfe23d3',
	cid: '7075215012272153555',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería con obrador propio en Bailén-Miraflores',
	description:
		'Panadería Polvillo, en la calle del Ciprés (Bailén-Miraflores, 29010 Málaga). Tartas y palmeras gigantes de obrador. Teléfono 610 00 85 61. 4,4 sobre 5 en Google.',
	hoursSummary: 'L–V 8:00–18:00 · S y D 8:00–14:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Polvillo/@36.7247446,-4.4481657,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f79f8f5d6343:0x623036914bfe23d3!8m2!3d36.7247446!4d-4.4481657!16s%2Fg%2F11h6m80jh3?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=7075215012272153555',
	reviews:
		'https://www.google.com/maps/place/Panader%C3%ADa+Polvillo/@36.7247446,-4.4481657,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f79f8f5d6343:0x623036914bfe23d3!8m2!3d36.7247446!4d-4.4481657!16s%2Fg%2F11h6m80jh3?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7247446%2C-4.4481657',
	embed: 'https://maps.google.com/maps?q=36.7247446,-4.4481657&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7247446,-4.4481657',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–18:00' },
	{ day: 'Sábado', value: '8:00–14:00' },
	{ day: 'Domingo', value: '8:00–14:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) puede variar; conviene llamar antes de ir.';

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Todos los dulces que compramos, buenísimos.',
	},
	{
		rating: 5,
		text: 'Tiene un montón de variedad de productos y la muchacha es un encanto.',
	},
];

/** Lo que la descripción del negocio, las fotos y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Obrador propio',
	'Tartas por encargo',
	'Palmeras gigantes',
	'Bollería',
	'Dulces',
];

export const HIGHLIGHTS = [
	{
		title: 'Las palmeras',
		text: 'La ficha del negocio las anuncia por su nombre: «hacemos tartas, palmeras gigantes». Son las que aparecen en el mostrador.',
	},
	{
		title: 'Las tartas',
		text: 'Se hacen por encargo en el obrador, en formatos cuadrados y redondos, con nata, chocolate y fruta.',
	},
	{
		title: 'La variedad',
		text: 'Lo dice una de las reseñas: «tiene un montón de variedad de productos». En la vitrina hay dulces, bollería y pan.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Palmeras gigantes',
				note: 'La descripción de la ficha de Google las anuncia por su nombre; son de chocolate y de azúcar.',
			},
			{
				name: 'Tartas',
				note: 'También anunciadas en la ficha, en formatos cuadrados y redondos, con nata, chocolate y fruta.',
			},
			{
				name: 'Bollería',
				note: 'Napolitanas, croissants y cañas rellenas, en la vitrina de las fotos.',
			},
		],
	},
	{
		title: 'El mostrador',
		items: [
			{
				name: 'Dulces',
				note: 'Bandejas de dulces y pastas de almendra; una reseña dice que están «buenísimos».',
			},
			{ name: 'Pan', note: 'Hogazas, barras y panes de molde, en las estanterías del local.' },
			{
				name: 'Pastas y mantecados',
				note: 'En cajas y bandejas, junto a los dulces, en las fotos del perfil.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería Polvillo?',
		a: 'En la calle del Ciprés, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:00 a 18:00 y el fin de semana de 8:00 a 14:00. El 1 de noviembre el horario podría variar, así que conviene llamar antes de ir.',
	},
	{
		q: '¿Hacen tartas?',
		a: 'Sí. La propia ficha del negocio dice «hacemos tartas, palmeras gigantes». Esta página no publica precios ni catálogo porque la ficha no los publica: lo mejor es llamar al 610 00 85 61.',
	},
	{
		q: '¿Qué es una palmera gigante?',
		a: 'Es la especialidad que la ficha anuncia por su nombre: la palmera de hojaldre en tamaño grande, de azúcar o de chocolate. Aparecen enteras en el mostrador de las fotos del perfil.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Dulces y pastas, bollería, pan y tartas por encargo, según la descripción del negocio, las reseñas y las fotos del perfil. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 610 00 85 61. No publica página web ni correo electrónico.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica entrada y aparcamiento adaptados para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,4 sobre 5 con 24 reseñas en Google. Las dos reseñas destacadas que se citan aquí son de cinco estrellas y hablan de los dulces y de la variedad.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
];
