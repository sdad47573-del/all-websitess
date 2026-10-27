/**
 * Datos de Restaurante Monte Cristina — Urbanización Monte Cristina, 2,
 * 12190 Borriol (Castellón).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Monte Cristina», 40.0309,
 *   -0.1485012, feature 0xd5ffcd2c8d1f5b7:0x1f1543d963a4890b (dirección,
 *   teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Web del propio restaurante (restaurante-monte-cristina.webnode.es): menú
 *   diario de 9 €, menú de fin de semana de 15 €, paella valenciana a la leña
 *   los jueves y domingos y carnes a la brasa todos los días.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 */

export const BUSINESS = {
	name: 'Monte Cristina',
	fullName: 'Restaurante Monte Cristina',
	shortName: 'Monte Cristina',
	mark: 'MC',
	street: 'Urbanización Monte Cristina, 2',
	area: 'Crta. Castellón–Alcora, km 16',
	city: 'Borriol',
	province: 'Castellón',
	region: 'Comunitat Valenciana',
	postalCode: '12190',
	country: 'ES',
	phoneDisplay: '643 22 11 68',
	phoneHref: 'tel:+34643221168',
	rating: 4.2,
	reviewsCount: 783,
	siteUrl: 'https://restaurante-monte-cristina.vercel.app',
	geo: { lat: 40.0309, lng: -0.1485012 },
	featureId: '0xd5ffcd2c8d1f5b7:0x1f1543d963a4890b',
	placeId: 'ChIJt_XRyNL8Xw0RC4mkY9lDFR8',
	cid: '2239770990645381387',
	googleCats: ['Restaurante de cocina española', 'Restaurante mediterráneo'],
	tagline: 'Arroces a la leña y brasa en Borriol',
	description:
		'Restaurante Monte Cristina en la Urbanización Monte Cristina 2, Borriol (Castellón): paellas y arroces a la leña, carnes a la brasa, menú diario y terraza. 4,2 en Google con 783 reseñas. Tel. 643 22 11 68.',
	hasPublicWebsite: true,
};

const DEST = `${BUSINESS.geo.lat}%2C${BUSINESS.geo.lng}`;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Monte+Cristina/@40.0309,-0.1485012,17z/data=!3m1!4b1!4m6!3m5!1s0xd5ffcd2c8d1f5b7:0x1f1543d963a4890b!8m2!3d40.0309!4d-0.1485012!16s%2Fg%2F1v_w3pjf?authuser=0&hl=es',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: `https://www.google.com/maps/dir/?api=1&destination=${DEST}`,
	embed: 'https://maps.google.com/maps?q=40.0309,-0.1485012&z=16&hl=es&output=embed',
};

/** Horario de la ficha de Google: de martes a domingo, con el lunes cerrado. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '9:00–17:00' },
	{ day: 'Miércoles', value: '9:00–17:00' },
	{ day: 'Jueves', value: '9:00–17:00' },
	{ day: 'Viernes', value: '9:00–17:00' },
	{ day: 'Sábado', value: '9:00–17:00' },
	{ day: 'Domingo', value: '9:00–17:00' },
];

/** Señas de identidad que constan en la ficha y en la web del restaurante. */
export const SERVICIOS = [
	'Paellas a la leña',
	'Arroces y fideuàs',
	'Carnes a la brasa',
	'Menú del día',
	'Cocina casera española',
	'Terraza bajo moreras',
	'Chimenea',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
	'Zona para niños',
];

/**
 * Carta. No hay carta con precios publicada en la ficha: los platos salen de la
 * web del restaurante, de las reseñas públicas y de las fotos de su perfil.
 */
export const MENU = [
	{
		title: 'De la leña',
		items: [
			{
				name: 'Paella valenciana',
				note: 'a la leña, en el menú de los jueves y los domingos',
			},
			{
				name: 'Arroces de marisco',
				note: 'también al fuego de leña, con el socarrat de la paella',
			},
			{
				name: 'Fideuà',
				note: 'la otra manera de comer el arroz en casa, con fideos y marisco',
			},
		],
	},
	{
		title: 'De la brasa',
		items: [
			{
				name: 'Chuletón de ternera',
				note: 'el corte que más repiten los habituales, a la parrilla',
			},
			{ name: 'Entrecot', note: 'a la brasa, como segundo del menú del día' },
			{ name: 'Cordero y conejo', note: 'asados a la brasa, al estilo de la casa' },
		],
	},
	{
		title: 'De la plancha',
		items: [
			{
				name: 'Pulpo a la plancha',
				note: 'uno de los platos que más elogian las reseñas',
			},
			{ name: 'Sepia a la plancha', note: 'la otra especialidad de la casa' },
			{ name: 'Bocadillo de sepia', note: 'el clásico de barra, para quien viene a media mañana' },
		],
	},
	{
		title: 'Menús',
		items: [
			{
				name: 'Menú del día',
				note: 'primero, segundo, postre, bebida, pan, ensalada y café · 9 €',
			},
			{
				name: 'Menú de fin de semana',
				note: 'con paella valenciana a la leña los jueves y domingos · 15 €',
			},
			{
				name: 'Carajillo de ron quemado',
				note: 'servido en vaso de barro, la firma de la casa para terminar',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Monte Cristina?',
		a: 'En la Urbanización Monte Cristina, 2, en el término de Borriol (Castellón), a la altura del kilómetro 16 de la carretera de Castellón a Alcora. La ficha de Google marca las coordenadas 40.0309, -0.1485012 y hay acceso en coche hasta la puerta.',
	},
	{
		q: '¿Qué días hacen paella a la leña?',
		a: 'La casa anuncia paella valenciana a la leña los jueves y los domingos, dentro del menú de fin de semana. El resto de días la carta mantiene arroces y fideuàs, y las carnes a la brasa se sirven todos los días.',
	},
	{
		q: '¿Cuánto cuesta el menú del día?',
		a: 'Según la web del restaurante, el menú diario cuesta 9 € e incluye primero, segundo, postre, una bebida, pan, ensalada y café. El menú de fin de semana cuesta 15 €. Conviene confirmar el precio al llamar, porque la carta cambia con la temporada.',
	},
	{
		q: '¿Hace falta reservar?',
		a: 'No hay reserva online: se llama al 643 22 11 68. Las reseñas coinciden en que en fin de semana y en fechas señaladas conviene reservar, sobre todo si se quiere paella, porque el comedor y la terraza se llenan.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'La ficha de Google indica aseos adaptados y asientos para sillas de ruedas. Los clientes explican que se puede subir con el coche un poco más arriba para entrar sin escalones. Hay además una zona para que jueguen los niños.',
	},
	{
		q: '¿Hay terraza y sitio para grupos?',
		a: 'Sí. El restaurante tiene terraza cubierta y descubierta bajo las moreras, además de un comedor rústico con chimenea para el invierno. Es habitual ver mesas grandes de familia y de amigos, y la casa admite grupos con reserva previa.',
	},
];
