/**
 * Datos de Casa Carlos - Comida casera — C. Filigrana, 1, Puerto de la Torre
 * (29591 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Casa Carlos - Comida casera»,
 *   36.735966,-4.4800953, feature 0xd72f10c2802a0cb:0xddefddeff36d48f0.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas y
 *   galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales, carta, precios ni datos de accesibilidad. La web no inventa esos
 * datos: solo cita lo que dicen las reseñas y lo que muestran las fotos.
 */

export const BUSINESS = {
	name: 'Casa Carlos',
	fullName: 'Casa Carlos - Comida casera',
	shortName: 'Casa Carlos',
	mark: 'CC',
	street: 'C. Filigrana, 1',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29591',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/casa-carlos-comida-casera',
	geo: { lat: 36.735966, lng: -4.4800953 },
	featureId: '0xd72f10c2802a0cb:0xddefddeff36d48f0',
	placeId: 'ChIJy6ACKAzxcg0R8Eht8-_d790',
	plusCode: '8C8QPGP9+9X',
	googleCategory: 'Restaurante',
	phone: '633 20 81 61',
	phoneHref: 'tel:+34633208161',
	tagline: 'Comida casera en Puerto de la Torre',
	description:
		'Casa Carlos, en C. Filigrana, 1 (Puerto de la Torre, 29591 Málaga). Comida casera con raciones abundantes y buena relación calidad/precio, de lunes a viernes y domingos de 11:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Casa+Carlos+-+Comida+casera/@36.735966,-4.4800953,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f10c2802a0cb:0xddefddeff36d48f0!8m2!3d36.735966!4d-4.4800953!16s%2Fg%2F11fshmhlsr?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.735966%2C-4.4800953',
	embed: 'https://maps.google.com/maps?q=36.735966,-4.4800953&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.735966,-4.4800953',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 5,
	count: 26,
	label: '5,0',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:00–16:00' },
	{ dia: 'Martes', horas: '11:00–16:00' },
	{ dia: 'Miércoles', horas: '11:00–16:00' },
	{ dia: 'Jueves', horas: '11:00–16:00' },
	{ dia: 'Viernes', horas: '11:00–16:00' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: '11:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida casera',
	'Raciones abundantes',
	'Buen precio',
	'Trato familiar',
	'Para llevar',
	'Cocina de mediodía',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida casera',
		text: 'Es lo que da nombre al local y lo que repiten las reseñas: «Comida casera exquisita y buena relación calidad/precio», dice una de las destacadas.',
	},
	{
		title: 'Raciones abundantes',
		text: 'Una reseña lo resume así: «La comida espectacular a un muy buen precio con raciones abundantes». La ficha no publica la carta ni los platos del día.',
	},
	{
		title: 'Buena relación calidad/precio',
		text: 'Las tres reseñas destacadas coinciden en el precio: «muy buen precio», «buena relación calidad/precio» y «buenos precios». La ficha no publica importes.',
	},
	{
		title: 'La vitrina',
		text: 'Croquetas, empanadillas, ensaladilla rusa y tortilla de patatas esperan en el mostrador. Las fotos del perfil muestran también albóndigas en salsa, carne guisada con patatas, pimientos rellenos y ensalada mixta.',
	},
];

/** Solo los platos que aparecen en las fotos del local y en las reseñas. */
export const MENU = [
	{
		title: 'Del mostrador',
		items: [
			{
				name: 'Croquetas',
				note: 'en la bandeja de la vitrina, en una de las fotos del perfil',
			},
			{
				name: 'Empanadillas',
				note: 'en la vitrina, junto a las croquetas',
			},
			{
				name: 'Ensaladilla rusa',
				note: 'con naranja, aceitunas y cebolleta, en la bandeja de la galería',
			},
			{
				name: 'Tortilla de patatas',
				note: 'entera y en bocadillo, en las fotos del local; la ficha no publica precios',
			},
		],
	},
	{
		title: 'Platos de cuchara',
		items: [
			{
				name: 'Albóndigas en salsa',
				note: 'en cazuela de barro con salsa de tomate, en la galería del local',
			},
			{
				name: 'Carne guisada con patatas fritas',
				note: 'el guiso de carne en salsa que aparece en las fotos del perfil',
			},
			{
				name: 'Pimientos del piquillo rellenos',
				note: 'con salsa y lechuga, en una de las fotos del local',
			},
		],
	},
	{
		title: 'Ensaladas y bocadillos',
		items: [
			{
				name: 'Ensalada mixta',
				note: 'con atún, zanahoria, huevo duro y tomate, en la galería',
			},
			{
				name: 'Bocadillos',
				note: 'de tortilla, pimientos y atún, en las fotos del perfil',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'La comida espectacular a un muy buen precio con raciones abundantes.',
		valor: 5,
	},
	{
		texto: 'Comida casera exquisita y buena relación calidad/precio.',
		valor: 5,
	},
	{
		texto: 'Comida buenísima, trato super amable, y buenos precios.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Casa Carlos?',
		a: 'En la calle Filigrana, 1, en Puerto de la Torre (29591 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a viernes y el domingo, de 11:00 a 16:00, con el sábado cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Comida casera. La ficha lo lleva en el propio nombre y las reseñas lo confirman: «comida casera exquisita», «raciones abundantes» y «comida buenísima». La ficha no publica la carta ni los platos del día.',
	},
	{
		q: '¿Es caro?',
		a: 'Las tres reseñas destacadas coinciden en que la relación calidad/precio es buena: «muy buen precio», «buena relación calidad/precio» y «buenos precios». La ficha no publica la carta ni importes.',
	},
	{
		q: '¿Cómo se reserva o se pregunta por el menú?',
		a: 'El canal que publica la ficha es el teléfono: 633 20 81 61. No consta página web propia, red social ni sistema de reservas online.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad: no marca acceso, asientos ni aparcamiento adaptados. Conviene llamar antes si necesitas acceso para silla de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 5,0 sobre 5 con 26 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian la comida, las raciones, los precios y el trato.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
