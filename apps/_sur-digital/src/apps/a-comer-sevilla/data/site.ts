/**
 * Datos de A Comer Sevilla — C. Padre Damián, 15, Loc C (41011 Sevilla).
 * Ficha pública de Google Maps consultada en octubre de 2026.
 *
 * La ficha no publica carta ni precios. La web se apoya en la descripción del
 * negocio, las reseñas y las fotografías del propio establecimiento.
 */

export const BUSINESS = {
	name: 'A Comer Sevilla',
	shortName: 'A Comer',
	mark: 'AC',
	street: 'C. Padre Damián, 15, Loc C',
	district: 'Sevilla',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41011',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/a-comer-sevilla',
	geo: { lat: 37.3739282, lng: -5.9998496 },
	featureId: '0xd126dd48b0cbf1f:0x5a1bf1a31e33b050',
	placeId: 'ChIJH78Mi9RtEg0RULAzHqPxG1o',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '954 03 75 94',
	phoneHref: 'tel:+34954037594',
	tagline: 'Comida casera diaria para llevar en Sevilla',
	description:
		'A Comer Sevilla, comida casera diaria en C. Padre Damián, 15, Loc C (41011 Sevilla). Cocina tradicional de abuelos a nietos, para disfrutar en casa o en el trabajo. Consulta el menú del día por teléfono.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/A+Comer+Sevilla/@37.3739282,-5.9998496,17z/data=!3m1!4b1!4m6!3m5!1s0xd126dd48b0cbf1f:0x5a1bf1a31e33b050!8m2!3d37.3739282!4d-5.9998496!16s%2Fg%2F11jdz3ylb2',
	cid: 'https://www.google.com/maps?cid=115704785200534817122',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3739282%2C-5.9998496',
	embed: 'https://maps.google.com/maps?q=37.3739282,-5.9998496&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3739282,-5.9998496',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.8, count: 56, label: '4,8' };

/** Horario publicado: solo mediodía, de lunes a sábado. */
export const HORARIO = [
	{ day: 'Lunes a sábado', value: '11:00 – 15:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];
export const HORARIO_AVISO =
	'La ficha marca servicio de 11:00 a 15:00 de lunes a sábado y cierre los domingos. En festivos el horario puede variar: conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Comida casera diaria',
	'Para llevar',
	'Cocina tradicional',
	'Raciones generosas',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina de siempre',
		text: 'El negocio se presenta en Google como cocina tradicional que «ha pasado de abuelos a nietos», con el objetivo de no perder las costumbres de siempre.',
	},
	{
		title: 'Comida a diario',
		text: 'Preparan su comida cada día para que puedas comer «con el buen sabor de siempre» en casa o en el lugar de trabajo.',
	},
	{
		title: 'Raciones y precio',
		text: `Las reseñas destacan las raciones generosas, la calidad de la materia prima y unos precios económicos. La ficha marca ${RATING.label} sobre 5 con ${RATING.count} reseñas.`,
	},
];

/**
 * La ficha no publica carta: se describen el servicio y los platos que se vean
 * en las fotografías del propio local.
 */
export const MENU = [
	{
		title: 'Lo que ofrece',
		items: [
			{
				name: 'Comida casera del día',
				note: 'el negocio cocina a diario siguiendo recetas tradicionales de familia',
			},
			{
				name: 'Raciones para llevar',
				note: 'las reseñas destacan que son generosas y con buena materia prima',
			},
			{
				name: 'Para casa o el trabajo',
				note: 'la presentación del negocio habla de comer en casa o en el lugar de trabajo; las condiciones se consultan por teléfono',
			},
		],
	},
	{
		title: 'En la vitrina',
		items: [
			{
				name: 'Ensaladilla de marisco',
				note: 'una de las bandejas que aparecen en las fotos del perfil',
			},
			{
				name: 'Garbanzos con carne',
				note: 'guiso de cuchara fotografiado en la vitrina',
			},
			{
				name: 'Bacalao con guisantes',
				note: 'pescado preparado al horno, según las fotos',
			},
			{
				name: 'Albóndigas en salsa',
				note: 'junto a otros guisos en la vitrina',
			},
			{
				name: 'Tortilla de patata',
				note: 'en las fotografías publicadas por el local',
			},
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{
		texto: '«Comida casera buenísima, se nota la buena materia prima y la mano del cocinero.»',
		valor: 5,
	},
	{ texto: '«Raciones generosas y con buen género.»', valor: 5 },
	{ texto: '«Los sabores son impresionantes y los precios muy económicos.»', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está A Comer Sevilla?',
		a: 'En la calle Padre Damián, 15, local C, 41011 Sevilla. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 954 03 75 94. Llama para consultar el menú del día y encargar.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha marca de 11:00 a 15:00 de lunes a sábado; los domingos cierra. En festivos el horario puede cambiar, así que conviene confirmarlo al llamar.',
	},
	{
		q: '¿Hay carta o menú publicado?',
		a: 'La ficha no publica carta ni precios, y esta web no los inventa. Se cocina a diario, así que el menú se pregunta por teléfono.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar y el negocio habla de disfrutar la comida en casa o en el trabajo. La ficha no describe servicio de mesa.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La presentación del negocio menciona comer en casa o en el lugar de trabajo, pero la ficha no detalla zonas ni condiciones de reparto. Pregúntalo al llamar.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca acceso para sillas de ruedas. En cambio, indica que no hay aparcamiento adaptado ni asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas, que elogian el sabor casero, las raciones y el precio.`,
	},
];
