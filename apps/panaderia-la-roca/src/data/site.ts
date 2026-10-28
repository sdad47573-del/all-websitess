/**
 * Datos de Panadería La Roca (Palma-Palmilla · 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería La Roca,
 *   36.7323058,-4.4309386, feature 0xd72f7af819b05cd:0xe9e6f0a9b4e970ef.
 * - Categoría, teléfono, valoración, reseñas, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Fotografía del perfil del establecimiento en Google Maps, descargada con
 *   scripts/fetch-maps-photos.mjs.
 *
 * Lo que la web NO inventa: Google no publica dirección postal, descripción,
 * carta, precios ni web propia de este local. Los productos citados son los que
 * aparecen en las reseñas y en la única fotografía del perfil; no se publican
 * importes ni una dirección que la ficha no da.
 */

export const BUSINESS = {
	name: 'Panadería La Roca',
	shortName: 'La Roca',
	mark: 'LR',
	/** Google no publica calle ni número: solo el barrio y el código postal. */
	street: '',
	district: 'Palma-Palmilla',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	phone: '952 30 57 42',
	phoneHref: 'tel:+34952305742',
	rating: 4.5,
	reviewsCount: 56,
	siteUrl: 'https://panaderia-la-roca.vercel.app',
	geo: { lat: 36.7323058, lng: -4.4309386 },
	featureId: '0xd72f7af819b05cd:0xe9e6f0a9b4e970ef',
	placeId: 'ChIJzQWbga_3cg0R73DptKnw5uk',
	googleCategories: ['Panadería'],
	tagline: 'Panadería de barrio en Palma-Palmilla, Málaga',
	description:
		'Panadería La Roca, en el barrio de Palma-Palmilla (29011 Málaga). Pan hecho a mano, bollería y dulces, según las reseñas de su ficha de Google. Abre de lunes a sábado; teléfono 952 30 57 42.',
	hoursSummary: 'De lunes a viernes, de 9:00 a 14:30 y de 17:00 a 20:30',
	/** Cómo se nombra la ubicación cuando no hay calle publicada. */
	whereShort: 'Palma-Palmilla · 29011 Málaga',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+La+Roca/@36.7323058,-4.4309386,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7af819b05cd:0xe9e6f0a9b4e970ef!8m2!3d36.7323058!4d-4.4309386!16s%2Fg%2F11cmg1f8y7?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7323058%2C-4.4309386',
	embed: 'https://maps.google.com/maps?q=36.7323058,-4.4309386&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google (octubre de 2026). */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–14:30 · 17:00–20:30' },
	{ day: 'Martes', value: '9:00–14:30 · 17:00–20:30' },
	{ day: 'Miércoles', value: '9:00–14:30 · 17:00–20:30' },
	{ day: 'Jueves', value: '9:00–14:30 · 17:00–20:30' },
	{ day: 'Viernes', value: '9:00–14:30 · 17:00–20:30' },
	{ day: 'Sábado', value: '9:00–14:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Pan hecho a mano, bollería de 10',
	},
	{
		rating: 4,
		text: 'Una panadería de barrio con un buen surtido de dulces',
	},
	{
		rating: 3,
		text: 'Pan de calidad, lastima que ya no sigan haciendo bocadillos',
	},
];

/** Lo que la ficha y las reseñas dejan claro que hay. */
export const SERVICIOS = [
	'Pan hecho a mano',
	'Bollería',
	'Dulces',
	'Panadería de barrio',
	'Para llevar',
];

/**
 * Solo tres familias de producto, que son las que nombran las reseñas de la
 * ficha. No hay carta ni precios publicados por el establecimiento.
 */
export const MENU = [
	{
		title: 'Del horno',
		items: [
			{
				name: 'Pan',
				note: '«pan hecho a mano», en palabras de una reseña de la ficha',
			},
			{
				name: 'Pan del día',
				note: 'la ficha la clasifica simplemente como panadería, sin carta publicada',
			},
		],
	},
	{
		title: 'Bollería',
		items: [
			{
				name: 'Bollería',
				note: '«pan hecho a mano, bollería de 10», resume otra reseña',
			},
		],
	},
	{
		title: 'Dulce',
		items: [
			{
				name: 'Dulces',
				note: '«un buen surtido de dulces», según una de las reseñas',
			},
			{
				name: 'Bollos y pastas',
				note: 'la ficha no detalla el surtido: cambia según el día',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería La Roca?',
		a: 'En el barrio de Palma-Palmilla, en Málaga (29011). La ficha de Google no publica calle ni número: solo marca la ubicación en el mapa, así que esta página no inventa una dirección. El mapa de aquí abajo abre el punto exacto y «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 9:00 a 14:30 y de 17:00 a 20:30. El sábado solo por la mañana, de 9:00 a 14:30, y el domingo cierra. En festivos el horario puede cambiar: la propia ficha ya avisa de ello para el 1 de noviembre.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono publicado en la ficha es el 952 30 57 42. La panadería no tiene web propia ni página de pedidos online en Google.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Las reseñas de la ficha hablan de pan hecho a mano, de bollería y de un buen surtido de dulces. La ficha no publica carta ni precios, así que el surtido concreto de cada día hay que preguntarlo en el mostrador o por teléfono.',
	},
	{
		q: '¿Siguen haciendo bocadillos?',
		a: 'Una de las reseñas de la ficha, de tres estrellas, valora el pan pero lamenta que ya no se hagan bocadillos. La ficha no lo aclara, así que conviene llamar al 952 30 57 42 antes de contar con ellos.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo indica que no hay aparcamiento adaptado para sillas de ruedas. No publica datos sobre el acceso al local, así que no se puede afirmar que la entrada sea accesible.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 56 reseñas en Google. Las reseñas destacan el pan hecho a mano, la bollería y el surtido de dulces; la más crítica echa de menos los bocadillos.',
	},
];
