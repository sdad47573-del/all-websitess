/**
 * Datos de Restaurante El Cortijo de Sánchez — Carrer Onda, 42,
 * 12540 Vila-real (Castelló).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante El Cortijo de Sánchez»,
 *   39.9430906, -0.112608, feature 0xd60070086f6ecd1:0x5018c08cde66337e
 *   (dirección, teléfono, horario, categoría, nota y reseñas).
 * - Reseñas públicas de Google citadas en la web.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas
 *   a src/assets/fotos/.
 *
 * La ficha no publica carta ni precios: los platos salen de las reseñas y de
 * las fotos del perfil. No se inventan importes.
 */

export const BUSINESS = {
	name: 'El Cortijo de Sánchez',
	fullName: 'Restaurante El Cortijo de Sánchez',
	shortName: 'El Cortijo',
	mark: 'CS',
	street: 'Carrer Onda, 42',
	city: 'Vila-real',
	province: 'Castelló',
	region: 'Comunitat Valenciana',
	comarca: 'Plana Baixa',
	postalCode: '12540',
	country: 'ES',
	phoneDisplay: '604 82 47 32',
	phoneHref: 'tel:+34604824732',
	rating: 4.4,
	reviewsCount: 345,
	siteUrl: 'https://el-cortijo-de-sanchez.vercel.app',
	geo: { lat: 39.9430906, lng: -0.112608 },
	featureId: '0xd60070086f6ecd1:0x5018c08cde66337e',
	placeId: 'ChIJ0ez2hgAHYA0RfjNm3ozAGFA',
	cid: '5771574633734484862',
	googleCats: ['Restaurante mediterráneo'],
	tagline: 'Cocina mediterránea y almuerzos en Vila-real',
	description:
		'Restaurante El Cortijo de Sánchez, en Carrer Onda, 42, Vila-real (Castelló): cocina mediterránea, almuerzos con brasa y bocadillos, croquetas de la casa y comida de mediodía. 4,4 en Google con 345 reseñas. Tel. 604 82 47 32.',
};

const DEST = `${BUSINESS.geo.lat}%2C${BUSINESS.geo.lng}`;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+El+Cortijo+de+S%C3%A1nchez/@39.9430906,-0.112608,17z/data=!3m1!4b1!4m6!3m5!1s0xd60070086f6ecd1:0x5018c08cde66337e!8m2!3d39.9430906!4d-0.112608!16s%2Fg%2F1tdzmx4q?authuser=0&hl=es',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=ES`,
	directions: `https://www.google.com/maps/dir/?api=1&destination=${DEST}`,
	embed: 'https://maps.google.com/maps?q=39.9430906,-0.112608&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: mediodía, con viernes y sábado de noche. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–16:00' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '8:00–16:00' },
	{ day: 'Jueves', value: '8:00–16:00' },
	{ day: 'Viernes', value: '8:00–16:00 · 20:00–24:00' },
	{ day: 'Sábado', value: '8:00–24:00' },
	{ day: 'Domingo', value: '8:00–16:00' },
];

export const SERVICIOS = [
	'Almuerzos',
	'Brasa',
	'Bocadillos',
	'Croquetas',
	'Cocina mediterránea',
	'Comida de mediodía',
	'Tapas',
	'Cenas viernes y sábado',
	'Comedor',
	'Reservas por teléfono',
];

/** Carta orientativa: la ficha no publica platos ni precios. */
export const MENU = [
	{
		title: 'El almuerzo',
		items: [
			{
				name: 'Almuerzo de la brasa',
				note: '«buenos y variados almuerzos, tanto brasa como diferentes opciones de bocadillos», dice una reseña',
			},
			{
				name: 'Bocadillos variados',
				note: 'la otra mitad del almuerzo: varias opciones para elegir en la barra',
			},
		],
	},
	{
		title: 'Para picar',
		items: [
			{
				name: 'Croquetas de la casa',
				note: '«el mejor surtido de croquetas que he probado en mi vida», resume una reseña',
			},
			{
				name: 'Tapas y raciones',
				note: 'para compartir en el centro de la mesa, con la cerveza bien fría',
			},
		],
	},
	{
		title: 'Cocina mediterránea',
		items: [
			{
				name: 'Platos de la casa',
				note: 'cocina mediterránea, con producto de temporada y guisos de siempre',
			},
			{
				name: 'Platos de cuchara',
				note: 'guisos de casa para el mediodía, con el pan de la mesa',
			},
		],
	},
	{
		title: 'De la brasa',
		items: [
			{
				name: 'Carnes a la brasa',
				note: 'el fuego de la casa, presente en los almuerzos y en las mesas del comedor',
			},
			{
				name: 'Parrillada para compartir',
				note: 'para pedir en el centro y repartir entre varios',
			},
		],
	},
	{
		title: 'Postre y café',
		items: [
			{
				name: 'Postre de la casa',
				note: 'lo que haya ese día, para cerrar la comida',
			},
			{
				name: 'Café y cerveza fría',
				note: '«las cervezas muy frescas», apunta una de las reseñas',
			},
		],
	},
];

export const REVIEWS = [
	{ text: 'Los dueños muy buenas personas, las cervezas muy frescas y la comida exquisita.', rating: 5 },
	{ text: 'Buenos y variados almuerzos, tanto brasa como diferentes opciones de bocadillos.', rating: 4 },
	{ text: 'El mejor surtido de croquetas que he probado en mi vida.', rating: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está El Cortijo de Sánchez?',
		a: 'En el número 42 de la calle Onda, en Vila-real (12540), en la Plana Baixa. Está en el casco urbano, a poca distancia del centro. El botón «Cómo llegar» abre la ruta exacta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a domingo de 8:00 a 16:00, salvo el martes, que cierra. El viernes también abre de 20:00 a 24:00 y el sábado alarga el horario de 8:00 a 24:00. En festivos como el Día de Todos los Santos puede cambiar, así que conviene llamar antes al 604 82 47 32.',
	},
	{
		q: '¿Qué se puede comer a mediodía?',
		a: 'Cocina mediterránea y de casa: almuerzos con brasa y bocadillos, croquetas, platos de cuchara y raciones para compartir. La carta cambia y los precios no están publicados en la ficha, así que se consultan en el local o llamando al 604 82 47 32. Esta web no inventa importes.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina mediterránea y de casa. Las reseñas destacan los almuerzos con brasa y bocadillos, las croquetas, la comida en general y la cerveza fría. La ficha lo clasifica como restaurante mediterráneo.',
	},
	{
		q: '¿Se puede desayunar o almorzar?',
		a: 'Sí. Abre a las 8:00 y por la mañana funciona el almuerzo, con brasa y bocadillos. Es lo que más repiten las reseñas: «buenos y variados almuerzos, tanto brasa como diferentes opciones de bocadillos».',
	},
	{
		q: '¿Se puede reservar mesa?',
		a: 'Por teléfono, en el 604 82 47 32. No hay reserva online ni formulario en esta web. Para grupos o para las cenas de viernes y sábado conviene llamar con antelación.',
	},
	{
		q: '¿Abre por la noche?',
		a: 'Solo viernes y sábado. El viernes sirve cena de 20:00 a 24:00 y el sábado mantiene la cocina de 8:00 a 24:00. El resto de días cierra a las 16:00.',
	},
	{
		q: '¿Dónde se aparca?',
		a: 'El local no tiene aparcamiento propio. Se aparca en la calle Onda y en las calles del entorno, en superficie; al estar en el casco de Vila-real, conviene llegar con un poco de margen a la hora del almuerzo.',
	},
];
