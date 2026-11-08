/**
 * Datos de Panadería La Placita de Nieves y Cintia — Pl. Monseñor Bocanegra, 18
 * (Bailén-Miraflores, 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería La Placita de Nieves y Cintia,
 *   36.729959,-4.4404614, feature 0xd72f70073869b6b:0x50b6daef52ee3934.
 * - Dirección, categorías, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento, si la hay.
 *
 * Lo que la web NO inventa: la ficha no publica descripción del negocio, carta
 * ni precios. La sección del mostrador recoge solo lo que citan las reseñas
 * (dulces y bocadillos) y lo que muestran las fotos disponibles.
 */

export const BUSINESS = {
	name: 'Panadería La Placita de Nieves y Cintia',
	shortName: 'La Placita',
	mark: 'P',
	street: 'Pl. Monseñor Bocanegra, 18',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	phone: '952 28 98 89',
	phoneHref: 'tel:+34952289889',
	rating: 5,
	reviewsCount: 8,
	siteUrl: 'https://www.sur-digital.com/panaderia-la-placita',
	geo: { lat: 36.729959, lng: -4.4404614 },
	featureId: '0xd72f70073869b6b:0x50b6daef52ee3934',
	placeId: 'ChIJa5uGcwD3cg0RNDnuUu_atlA',
	googleCategory: 'Panadería y tienda de alimentación',
	tagline: 'Panadería y tienda de alimentación en Bailén-Miraflores',
	description:
		'Panadería La Placita de Nieves y Cintia, en Pl. Monseñor Bocanegra, 18 (Bailén-Miraflores, 29011 Málaga). Panadería y tienda de alimentación de barrio. Teléfono 952 28 98 89. 5 sobre 5 en Google.',
	hoursSummary: 'L–V 7:30–14:00 y 17:00–20:00 · S–D 8:00–14:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+La+Placita+de+Nieves+y+Cintia/@36.729959,-4.4404614,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70073869b6b:0x50b6daef52ee3934!8m2!3d36.729959!4d-4.4404614!16s%2Fg%2F11nbwxg7wl?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=5816696820307560756',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.729959%2C-4.4404614',
	embed: 'https://maps.google.com/maps?q=36.729959,-4.4404614&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.729959,-4.4404614&heading=198.15',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:30–14:00 · 17:00–20:00' },
	{ day: 'Sábado y domingo', value: '8:00–14:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) figura con horario especial; conviene llamar antes de ir.';

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Los dulces son del día a día y hacer unos bocadillos muy ricos.',
	},
	{
		rating: 5,
		text: 'Sois maravillosas chicas!!',
	},
	{
		rating: 5,
		text: '¡Enhorabuena por vuestro trabajo y por mantener esa esencia tan especial!',
	},
];

/** Lo que la ficha y las reseñas permiten afirmar. */
export const HIGHLIGHTS = [
	{
		title: 'Los dulces',
		text: 'Una reseña dice que «los dulces son del día a día». La ficha no publica surtido ni precios, así que no hay carta que copiar.',
	},
	{
		title: 'Los bocadillos',
		text: 'La misma reseña habla de «hacer unos bocadillos muy ricos». Es lo único que la ficha dice de la comida salada.',
	},
	{
		title: 'La casa',
		text: 'El nombre del negocio es La Placita de Nieves y Cintia. Las reseñas hablan de «maravillosas chicas» y de mantener «esa esencia tan especial».',
	},
];

/** Las dos actividades que declara la ficha de Google. */
export const OFERTA = [
	{
		title: 'Panadería',
		text: 'Es la categoría principal de la ficha. Los dulces y los bocadillos son lo que citan las reseñas; no hay carta publicada.',
	},
	{
		title: 'Tienda de alimentación',
		text: 'La ficha la clasifica también como tienda de alimentación, además de panadería.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería La Placita de Nieves y Cintia?',
		a: 'En la plaza Monseñor Bocanegra, 18, en el barrio de Bailén-Miraflores (29011 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:30 a 14:00 y de 17:00 a 20:00; el sábado y el domingo, de 8:00 a 14:00. El 1 de noviembre figura con horario especial en Google, así que conviene llamar antes de ir.',
	},
	{
		q: '¿Quiénes son Nieves y Cintia?',
		a: 'Es el nombre con el que se anuncia la panadería. La ficha no publica más datos sobre las personas que la atienden; las reseñas hablan de «maravillosas chicas».',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y tienda de alimentación. Las reseñas citan los dulces y los bocadillos, pero no hay carta, surtido ni precios publicados, así que esta web no los inventa.',
	},
	{
		q: '¿Cómo se puede contactar?',
			a: 'El teléfono de la ficha es el 952 28 98 89. No publica página web ni correo electrónico.',
	},
	{
		q: '¿Tiene fotos la ficha?',
			a: 'No: la ficha pública no incluye fotos del perfil. Las imágenes de esta página son vistas de Google Street View de la plaza Monseñor Bocanegra, donde está el local.',
	},
	{
		q: '¿Es accesible?',
			a: 'La ficha de Google indica acceso para sillas de ruedas. No publica información sobre aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
			a: 'Tiene 5 sobre 5 con 8 reseñas en Google. Las tres que se citan en esta página son de cinco estrellas.',
	},
];
