/**
 * Datos de La Fiambrera (Comida para llevar) — Plaza de Bailén, 5,
 * Distrito Centro, 29009 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «La Fiambrera (Comida para llevar)»,
 *   36.7239791,-4.4323158, feature 0xd72f71c3de91645:0x4add50e481e7fe1a.
 * - Nombre, categoría, descripción del negocio, dirección, teléfono,
 *   valoración, reseñas y accesibilidad: ficha pública de Google consultada
 *   en octubre de 2026.
 *
 * La ficha no publica carta, precios ni horario de apertura. La web no
 * inventa esos datos: los platos que se citan son los que nombran la
 * descripción del negocio y las reseñas, y el horario se remite a Google.
 */

export const BUSINESS = {
	name: 'La Fiambrera',
	fullName: 'La Fiambrera (Comida para llevar)',
	shortName: 'Fiambrera',
	mark: 'LF',
	street: 'Pl. de Bailén, 5',
	district: 'Distrito Centro',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29009',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/la-fiambrera-malaga',
	geo: { lat: 36.7239791, lng: -4.4323158 },
	featureId: '0xd72f71c3de91645:0x4add50e481e7fe1a',
	placeId: 'ChIJRRbpPRz3cg0RGv7ngeRQ3Uo',
	googleCategory: 'Restaurante de comida rápida',
	phone: '600 68 93 18',
	phoneHref: 'tel:+34600689318',
	tagline: 'Pollo asado, comida casera y sabor colombiano para llevar',
	description:
		'La Fiambrera, en Plaza de Bailén, 5 (Distrito Centro, 29009 Málaga): pollo asado, comidas caseras, papas rellenas colombianas y empanadas para llevar. 4,9 sobre 5 con 28 reseñas en Google.',
	/** Descripción que publica el propio negocio en su ficha de Google. */
	ownDescription:
		'Pollo asado, comidas caseras y más (papas rellenas colombianas y empanadas).',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Fiambrera+(Comida+para+llevar)/@36.7239791,-4.4323158,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f71c3de91645:0x4add50e481e7fe1a!8m2!3d36.7239791!4d-4.4323158!16s%2Fg%2F11y4yl92mz?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7239791%2C-4.4323158',
	embed: 'https://maps.google.com/maps?q=36.7239791,-4.4323158&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7239791,-4.4323158',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.9,
	count: 28,
	label: '4,9',
};

/** La ficha no publica horario: no se inventa ninguno. */
export const HORARIO_NOTA =
	'La ficha pública de Google no publica el horario de apertura de La Fiambrera. Antes de acercarte, consulta el horario actualizado en Google Maps o llama al 600 68 93 18.';

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado',
		text: 'Es lo primero que anuncia la descripción del negocio en Google. Se pide para llevar, entero o por raciones, y se prepara al momento.',
	},
	{
		title: 'Papas rellenas y empanadas',
		text: 'Las dos especialidades colombianas que el propio local destaca en su ficha. Una reseña lo resume: «empanadas y papas rellenas súper deliciosas».',
	},
	{
		title: 'Comida casera',
		text: 'El nombre completo del negocio es «La Fiambrera (Comida para llevar)»: cocina de casa en táper, lista para comer en el trabajo o en casa.',
	},
];

/** Solo lo que nombran la descripción del negocio y las reseñas. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'el plato que encabeza la descripción del local en Google, pensado para llevar',
			},
		],
	},
	{
		title: 'Sabor colombiano',
		items: [
			{
				name: 'Papas rellenas colombianas',
				note: 'la especialidad que el negocio destaca entre paréntesis en su propia ficha',
			},
			{
				name: 'Empanadas',
				note: 'citadas en la descripción y elogiadas en las reseñas de Google',
			},
		],
	},
	{
		title: 'De la casa',
		items: [
			{
				name: 'Comidas caseras',
				note: 'guisos y platos del día; la ficha no publica la lista ni los precios',
			},
		],
	},
];

/**
 * Precios que se leen en la carta impresa de la foto del local en Google
 * (octubre de 2026). No es una carta oficial: la ficha no publica ninguna,
 * así que la web los muestra como referencia y avisa de que pueden cambiar.
 */
export const CARTA = [
	{
		title: 'Del asador',
		items: [
			{ name: '1 pollo asado', price: '10,00 €' },
			{ name: 'Medio pollo', price: '5,50 €' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Patatas fritas', price: '4,30 €' },
			{ name: 'Media patatas', price: '2,50 €' },
			{ name: 'Salchi papas', price: '5,00 €' },
			{ name: 'Ensalada', price: '4,00 €' },
			{ name: 'Extra salsa', price: '0,50 €' },
		],
	},
	{
		title: 'Sabor colombiano',
		items: [
			{ name: 'Empanadas colombianas sin gluten (3 uds.)', price: '5,00 €' },
			{ name: 'Papa rellena', price: '2,00 €' },
		],
	},
	{
		title: 'Bocadillos',
		items: [{ name: 'Bocadillo de jamón asado', price: '5,00 €' }],
	},
];

/** Aviso que acompaña a los precios. */
export const CARTA_AVISO =
	'Precios leídos en la carta que aparece en las fotos de la ficha de Google, no en una carta oficial del local. Pueden haber cambiado: confírmalos al pedir.';

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Para deleitarse el paladar, empanadas y papas rellenas súper deliciosas.',
		valor: 5,
	},
	{
		texto: 'La comida buenísima, fresca, el personal super amable y atento.',
		valor: 5,
	},
	{
		texto: 'Excelente lugar, buena comida y excelente atención',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Fiambrera?',
		a: 'En Plaza de Bailén, 5, Distrito Centro (29009 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha del negocio anuncia pollo asado, comidas caseras, papas rellenas colombianas y empanadas. Las reseñas confirman las empanadas, las papas rellenas y el pollo. No hay carta completa publicada en Google.',
	},
	{
		q: '¿La comida es para llevar?',
		a: 'Sí: «Comida para llevar» forma parte del nombre del negocio. Está pensada para recoger y comer fuera del local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha pública de Google no publica horario de apertura, así que esta web no indica ninguno. Consulta el horario actualizado en Google Maps o llama al 600 68 93 18 antes de desplazarte.',
	},
	{
		q: '¿Hay precios o carta publicados?',
		a: 'No. La ficha de Google no incluye carta ni importes. Para saber qué hay y cuánto cuesta, lo más rápido es llamar al 600 68 93 18.',
	},
	{
		q: '¿Se puede reservar o comer en el local?',
		a: 'La ficha no publica sistema de reservas ni detalles de sala. El nombre del negocio y la categoría de Google apuntan a comida para llevar, pero conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca «Acceso para sillas de ruedas» como atributo del local.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,9 sobre 5 con 28 reseñas en el momento de consultar la ficha (octubre de 2026). Las opiniones destacan la comida fresca, las empanadas y las papas rellenas, y el trato del personal.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública enlaza la web de Google para editar los datos, pero no un sitio propio ni perfiles sociales.',
	},
];
