export const BUSINESS = {
	name: 'Kebab Hits',
	shortName: 'Hits',
	mark: 'KH',
	street: 'Av. Plutarco, 28, local 2',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/kebab-hits',
	geo: { lat: 36.7206864, lng: -4.4749905 },
	featureId: '0xd72f735e177d4c5:0x7d5d971fd68b422d',
	placeId: 'ChIJxdR34TX3cg0RLUKL1h-XXX0',
	phone: '',
	phoneHref: '',
	tagline: 'Kebab, durum y pizza turca en Teatinos',
	description:
		'Kebab Hits está en la avenida Plutarco, 28, local 2, en Teatinos-Universidad, Málaga. Kebab, rollo, durum y pizza turca; consulta la ficha de Google Maps para ver el horario actualizado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/kebab+hits/@36.7206864,-4.4749905,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f735e177d4c5:0x7d5d971fd68b422d!8m2!3d36.7206864!4d-4.4749905!16s%2Fg%2F11clwnqp0y?authuser=0&hl=es',
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=36.7206864%2C-4.4749905',
	reviews:
		`https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	embed: 'https://maps.google.com/maps?q=36.7206864,-4.4749905&z=17&hl=es&output=embed',
};

export const RATING = { value: 4.2, count: 663, label: '4,2' };

/** Horario semanal publicado en Google Maps, consultado en octubre de 2026. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–1:00' },
	{ dia: 'Martes', horas: '12:00–16:00 · 20:00–1:00' },
	{ dia: 'Miércoles', horas: '12:00–16:00 · 20:00–1:00' },
	{ dia: 'Jueves', horas: '12:00–16:00 · 20:00–1:00' },
	{ dia: 'Viernes', horas: '12:00–16:00 · 18:00–2:00' },
	{ dia: 'Sábado', horas: '12:00–16:00 · 18:00–2:00' },
	{ dia: 'Domingo', horas: '12:00–1:00' },
];

export const SERVICIOS = [
	'Kebab',
	'Rollo',
	'Durum',
	'Pizza turca',
	'Comida halal',
	'Para llevar',
];

export const MENU = [
	{
		title: 'Kebab y durum',
		items: [
			{ name: 'Rollo Kebab', note: 'Uno de los platos que menciona la descripción del establecimiento.' },
			{ name: 'Super Durum', note: 'Durum incluido entre las especialidades mencionadas por el local.' },
		],
	},
	{
		title: 'Pizza turca',
		items: [
			{ name: 'Pizza Turca', note: 'La ficha del establecimiento destaca también su pizza turca.' },
		],
	},
];

export const RESENAS = [
	{ texto: 'Muy limpios, trato amable, kebabs muy ricos.', valor: 5 },
	{ texto: 'Las patatas fritas están increíbles; crujientes y perfectas de sal.', valor: 5 },
	{ texto: 'Buena atención, buena comida y excelente picante.', valor: 4 },
];

export const FAQ = [
	{
		q: '¿Dónde está Kebab Hits?',
		a: 'En Av. Plutarco, 28, local 2, en Teatinos-Universidad, Málaga. El mapa de esta página abre la ubicación de la ficha de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Google Maps publica horarios distintos según el día. La tabla recoge el horario semanal consultado en octubre de 2026; puede cambiar en festivos y conviene confirmar la ficha antes de ir.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La descripción de la ficha menciona rollo kebab, Super Durum y pizza turca. Google clasifica el establecimiento como restaurante de comida rápida, kebab, halal y turco.',
	},
	{
		q: '¿Tiene teléfono o página web?',
		a: 'La ficha pública de Google consultada no muestra teléfono ni página web, así que no incluimos datos de contacto no verificados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha muestra 4,2 sobre 5 con 663 reseñas en Google en el momento de la consulta (octubre de 2026). La puntuación y el número de reseñas pueden cambiar.',
	},
	{
		q: '¿Hay precios publicados?',
		a: 'La descripción de Google menciona una carta variada y ofertas, pero no publica precios verificables. Por eso esta página no muestra importes.',
	},
];
