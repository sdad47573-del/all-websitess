/**
 * Datos de Asador De Pollos Rosa La Colonia Santa Inés — C. Navarro Ledesma, 90,
 * Teatinos-Universidad (29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador De Pollos Rosa La Colonia Santa Inés.»,
 *   36.7250021,-4.4681361, feature 0xd72f7398bc10b3f:0x9c3f4c20bc04a969.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en noviembre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La
 * web no inventa esos datos. Los platos que se citan son los que nombran la
 * descripción del negocio y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Asador de Pollos Rosa',
	fullName: 'Asador De Pollos Rosa La Colonia Santa Inés.',
	shortName: 'Rosa',
	mark: 'R',
	street: 'C. Navarro Ledesma, 90',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/asador-de-pollos-rosa',
	geo: { lat: 36.7250021, lng: -4.4681361 },
	featureId: '0xd72f7398bc10b3f:0x9c3f4c20bc04a969',
	placeId: 'ChIJPwvBizn3cg0RaakEvCBMP5w',
	plusCode: '8C8QPGGJ+2P',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '951 46 32 66',
	phoneHref: 'tel:+34951463266',
	tagline: 'Pollos asados tradicionales en Teatinos',
	description:
		'Asador de Pollos Rosa, en C. Navarro Ledesma, 90 (Teatinos-Universidad, 29010 Málaga). Pollos asados tradicionales, patatas, croquetas y pimientos fritos, todos los días de 9:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+De+Pollos+Rosa+La+Colonia+Santa+In%C3%A9s./@36.7250021,-4.4681361,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7398bc10b3f:0x9c3f4c20bc04a969!8m2!3d36.7250021!4d-4.4681361!16s%2Fg%2F11fxwnhln3?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7250021%2C-4.4681361',
	embed: 'https://maps.google.com/maps?q=36.7250021,-4.4681361&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7250021,-4.4681361',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 517,
	label: '4,6',
};

/** Horario que publica la ficha: todos los días, solo mediodía. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–16:00' },
	{ dia: 'Martes', horas: '9:00–16:00' },
	{ dia: 'Miércoles', horas: '9:00–16:00' },
	{ dia: 'Jueves', horas: '9:00–16:00' },
	{ dia: 'Viernes', horas: '9:00–16:00' },
	{ dia: 'Sábado', horas: '9:00–16:00' },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'El horario puede cambiar en festivos o por vacaciones; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollos asados',
	'Patatas fritas',
	'Pimientos fritos',
	'Croquetas',
	'Cocina tradicional',
	'Para llevar',
	'Acceso para sillas de ruedas',
	'Asientos adaptados',
	'Aparcamiento y aseo adaptados',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'La descripción de la ficha lo dice en cuatro palabras: «Asador de pollos exquisitos tradicional». Las reseñas lo confirman: «los pollos están muy bien asados».',
	},
	{
		title: 'Cuatro menús',
		text: 'El cartel de ofertas del local anuncia el Menú Normal por 16 €, el Menú Ensalada por 18,50 €, el Menú Súper por 22 € y el Menú Individual por 8 €. Todos incluyen pollo, patatas y pan o bebida.',
	},
	{
		title: 'Patatas y pimientos',
		text: 'Las tres reseñas destacadas nombran las patatas, y una añade: «aparte de la patata tienen pimientos fritos». Son los acompañamientos de la casa.',
	},
	{
		title: 'La vitrina',
		text: 'Junto al asador, la vitrina del local muestra ensaladilla, guisos, tortilla de patatas, ensaladas y botellas de ajoblanco y gazpacho. También hay croquetas, según las reseñas.',
	},
];

/** Solo lo que nombran la descripción del negocio y las reseñas. */
export const MENU = [
	{
		title: 'Los menús del cartel',
		items: [
			{
				name: 'Menú Normal',
				price: '16,00 €',
				note: 'bebida de 2 litros, ración de patatas, 1 pollo y pan',
			},
			{
				name: 'Menú Ensalada',
				price: '18,50 €',
				note: 'bebida de 2 litros, ración de patatas, ensalada, 1 pollo y pan',
			},
			{
				name: 'Menú Súper',
				price: '22,00 €',
				note: 'bebida de 2 litros, ración de patatas grandes, pollo y medio y pan',
			},
			{
				name: 'Menú Individual',
				price: '8,00 €',
				note: 'lata de refresco, media ración de patatas y medio pollo',
			},
		],
	},
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'el plato que da nombre a la casa; las reseñas lo describen como «muy bien asado»',
			},
			{
				name: 'Patatas fritas',
				note: 'el acompañamiento que nombran las tres reseñas destacadas',
			},
			{
				name: 'Pimientos fritos',
				note: '«aparte de la patata tienen pimientos fritos», dice una de las reseñas',
			},
			{
				name: 'Croquetas',
				note: 'aparecen en una de las reseñas, junto al pollo y las patatas',
			},
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{
				name: 'Ensaladilla',
				note: 'en tarrinas, en la vitrina del local según las fotos del perfil',
			},
			{
				name: 'Tortilla de patatas',
				note: 'en la vitrina de la ficha, junto a los guisos',
			},
			{
				name: 'Guisos y ensaladas',
				note: 'las bandejas y tarrinas que muestra la galería del local',
			},
			{
				name: 'Ajoblanco y gazpacho',
				note: 'botellas preparadas en la vitrina, en las fotos del perfil',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Compre pollo,patatas y croquetas y todo buenísimo.',
		valor: 5,
	},
	{
		texto: 'El pollo súper rico y aparte de la patata tienen pimientos fritos',
		valor: 5,
	},
	{
		texto: 'Los pollos están muy bien asados y las patatas fritas deliciosas.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador de Pollos Rosa?',
		a: 'En la calle Navarro Ledesma, 90, en Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica todos los días de la semana, de 9:00 a 16:00, sin día de cierre. En festivos o vacaciones puede cambiar.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo presenta como «Asador de pollos exquisitos tradicional» y las reseñas nombran el pollo asado, las patatas fritas, los pimientos fritos y las croquetas. La ficha no publica la carta completa ni los precios.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante especializado en pollo y de comida para llevar, y marca asientos adaptados. La ficha no detalla servicio de mesa ni terraza; conviene preguntar por teléfono.',
	},
	{
		q: '¿Cómo se encarga la comida?',
		a: 'El canal que publica la ficha es el teléfono: 951 46 32 66. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Las reseñas hablan de pollo, patatas, pimientos y croquetas, pero no citan precios. La disponibilidad y el precio se consultan por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca acceso y asientos adaptados, aparcamiento adaptado, aseo adaptado y bucle magnético asistencial. No publica más datos sobre el interior.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,6 sobre 5 con 517 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian el pollo, las patatas, los pimientos y las croquetas.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
