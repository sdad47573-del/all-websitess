/**
 * Datos de Mesón Lax — Carril Claras, 89 (30160 Monteagudo, Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Mesón Lax, 38.0181159,-1.1063237,
 *   feature 0xd6383b288f1cc85:0xd28fe7b7038d5047 (dirección, teléfono, horario,
 *   nota, reseñas, categorías y servicios de accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: precios ni carta cerrada. La carta se resume a
 * partir de los platos que se ven en las fotos y de lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Mesón Lax',
	mark: 'ML',
	street: 'Carril Claras, 89',
	city: 'Monteagudo',
	region: 'Murcia',
	regionName: 'Región de Murcia',
	postalCode: '30160',
	country: 'ES',
	phoneDisplay: '968 85 01 19',
	phoneHref: 'tel:+34968850119',
	rating: 4.1,
	reviewsCount: 409,
	priceRange: '€€',
	siteUrl: 'https://www.sur-digital.com/meson-lax',
	geo: { lat: 38.0181159, lng: -1.1063237 },
	featureId: '0xd6383b288f1cc85:0xd28fe7b7038d5047',
};

const CID_DECIMAL = '15172600442859114567';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Mes%C3%B3n+Lax/@38.0181159,-1.1063237,17z/data=!3m1!4b1!4m6!3m5!1s0xd6383b288f1cc85:0xd28fe7b7038d5047!8m2!3d38.0181159!4d-1.1063237!16s%2Fg%2F11dxdhc_s1',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.0181159%2C-1.1063237',
	embed: 'https://maps.google.com/maps?q=38.0181159,-1.1063237&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google. Los cierres de sábado y domingo caen de
 * madrugada, ya en el día siguiente; se indica en la nota del bloque de visita.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '9:00–24:00' },
	{ day: 'Miércoles', value: '9:00–24:00' },
	{ day: 'Jueves', value: '9:00–24:00' },
	{ day: 'Viernes', value: '9:00–24:00' },
	{ day: 'Sábado', value: '9:00–4:00' },
	{ day: 'Domingo', value: '9:00–2:30' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Buena opción para brasas, buena cocina y género.',
	},
	{
		rating: 5,
		text: 'Muy buenos menús económicos y gran servicio.',
	},
	{
		rating: 2,
		text: 'El arroz de verduras y magra que pedimos, demasiada verdura y poca magra.',
	},
];

export const SERVICIOS = [
	'Brasas y parrilla',
	'Menú del día',
	'Banquetes y celebraciones',
	'Salones amplios',
	'Marisco',
	'Arroces',
	'Menús de grupo',
	'Mesas en el exterior',
	'Acceso adaptado',
	'Aparcamiento adaptado',
];

/** Carta resumida a partir de los platos de las fotos y de las reseñas de Google. */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{ name: 'Calamares a la romana', note: 'rebozado fino, con su cuña de limón' },
			{ name: 'Vieiras gratinadas', note: 'seis en la concha, con tomate y pan rallado' },
			{ name: 'Tortilla de la casa', note: 'jugosa, con un toque de pimentón por encima' },
			{ name: 'Gambas con lima', note: 'frías, con brotes y lima' },
		],
	},
	{
		title: 'Brasas',
		items: [
			{
				name: 'Chuletón a la brasa',
				note: 'llega a la mesa ya cortado, con sal gorda; para compartir',
			},
			{ name: 'Carne a la brasa', note: 'el fuego es la especialidad de la casa según las reseñas' },
		],
	},
	{
		title: 'Arroces y guisos',
		items: [
			{ name: 'Arroz de verduras y magra', note: 'el arroz que citan las reseñas de la ficha' },
			{ name: 'Arroces de la casa', note: 'pregunta qué arroz hay ese día' },
			{ name: 'Guisos de cuchara', note: 'cocina de siempre, según mercado' },
		],
	},
	{
		title: 'Menús y celebraciones',
		items: [
			{
				name: 'Menú del día',
				note: '«muy buenos menús económicos», cuentan en las reseñas',
			},
			{ name: 'Menús de grupo', note: 'para grupos y celebraciones, según el montaje de los salones' },
			{
				name: 'Banquetes en los salones',
				note: 'mesas largas y redondas montadas para celebraciones',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mesón Lax?',
		a: 'En el Carril Claras, 89, 30160 Monteagudo (Murcia), la pedanía murciana del cerro del Cristo. Se llega en coche y lo más cómodo es abrir «Cómo llegar» y seguir el mapa.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a viernes, de 9:00 a 24:00; el sábado, de 9:00 a 4:00; y el domingo, de 9:00 a 2:30. El lunes cierra. Ojo con las horas de cierre: las 4:00 del sábado y las 2:30 del domingo son ya de madrugada, del día siguiente.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 968 85 01 19. La ficha de Google no ofrece reserva online, así que llama para mesa, menú del día o celebración. Para grupos conviene avisar con tiempo.',
	},
	{
		q: '¿Tiene menú del día?',
		a: 'Sí. En las reseñas de Google se repite que los menús son económicos, aunque la ficha no publica ni la carta ni los precios. Se consultan al llamar o en el propio mesón.',
	},
	{
		q: '¿Se pueden celebrar banquetes o comidas de grupo?',
		a: 'Los salones aparecen en las fotos de Google montados con mesas largas y mesas redondas vestidas para banquetes. Para fechas concretas, disponibilidad y menú hay que hablar con el mesón por teléfono.',
	},
	{
		q: '¿Hay aparcamiento y acceso adaptado?',
		a: 'La ficha de Google marca aparcamiento adaptado, acceso para sillas de ruedas, aseo adaptado y asientos adaptados. Al estar en el Carril Claras, fuera del casco urbano de Murcia, se llega en coche.',
	},
	{
		q: '¿Qué se come en Mesón Lax?',
		a: 'Brasas y parrilla —el chuletón es la foto más clara de la ficha—, marisco (vieiras gratinadas, calamares, gambas), arroces y guisos, además del menú del día. No publicamos precios porque el mesón no los tiene publicados.',
	},
];
