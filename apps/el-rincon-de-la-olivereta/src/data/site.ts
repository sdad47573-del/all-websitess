/**
 * Datos de Bar restaurante El Rincón de la Olivereta — Calle Villavieja
 * (Carrer Vilavella), 162, 12540 Vila-real, Castellón.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar restaurante El Rincón de la
 *   Olivereta», 39,9331945 / -0,1102545, feature
 *   0xd60073e0d44c8ef:0x83beefb63034624c (categorías, teléfono, horario, nota,
 *   reseñas, accesibilidad, descripción del local y fotos del perfil).
 * - Descripción del propio establecimiento en Google: reservas fuera de
 *   horario para cenas y comidas especiales en el 633 62 48 89.
 * - Instagram del local (@elrincondelaolivereta): dirección y horario de
 *   referencia.
 * - Reseñas publicadas en la ficha de Google.
 *
 * La ficha no publica una carta con precios: los platos se apoyan en lo que
 * citan las reseñas y en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Bar restaurante El Rincón de la Olivereta',
	shortName: 'El Rincón de la Olivereta',
	mark: 'RO',
	street: 'Calle Villavieja, 162',
	city: 'Vila-real',
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	postalCode: '12540',
	country: 'ES',
	phoneDisplay: '635 35 45 30',
	phoneHref: 'tel:+34635354530',
	reservationsDisplay: '633 62 48 89',
	reservationsHref: 'tel:+34633624889',
	rating: 4.5,
	reviewsCount: 266,
	siteUrl: 'https://el-rincon-de-la-olivereta.vercel.app',
	geo: { lat: 39.9331945, lng: -0.1102545 },
	featureId: '0xd60073e0d44c8ef:0x83beefb63034624c',
	placeId: 'ChIJ78hEDT4HYA0RTGI0MLbvvoM',
	cid: '9493288630315409996',
	instagram: 'https://www.instagram.com/elrincondelaolivereta/',
	/** Categorías con las que Google describe el local. */
	categories: [
		'Bar restaurante',
		'Cafetería',
		'Bocatería',
		'Bar de tapas',
		'Restaurante mediterráneo',
		'Restaurante valenciano',
	],
	tagline: 'Almuerzos, tapas y carajillos en Vila-real',
	description:
		'Bar restaurante El Rincón de la Olivereta, en la Calle Villavieja 162 de Vila-real (Castellón): almuerzos, bocadillos, tapas caseras, menú del día y carajillos. Abre de lunes a sábado. 4,5 en Google con 266 reseñas. Tel. 635 35 45 30.',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+restaurante+El+Rinc%C3%B3n+de+la+Olivereta/@39.9331945,-0.1102545,17z/data=!3m1!4b1!4m6!3m5!1s0xd60073e0d44c8ef:0x83beefb63034624c!8m2!3d39.9331945!4d-0.1102545!16s%2Fg%2F11ghfnvpn0',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=39.9331945%2C-0.1102545',
	embed: 'https://maps.google.com/maps?q=39.9331945,-0.1102545&z=17&hl=es&output=embed',
} as const;

/** Horario de la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: '08:00–17:00' },
	{ day: 'Martes', value: '08:00–17:00' },
	{ day: 'Miércoles', value: '08:00–17:00' },
	{ day: 'Jueves', value: '08:00–17:00' },
	{ day: 'Viernes', value: '08:00–17:00' },
	{ day: 'Sábado', value: '08:00–17:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Fui a probar la sepia y la verdad estaba buenísima...',
	'Ya tengo nuevo sitio para almorzar. Bocatas y tapas espectaculares. Enhorabuena.',
	'Se almuerza de maravilla, con menú variado, buenas cantidades y todo muy rico.',
];

/** Señas de identidad que constan en las fuentes públicas. */
export const SERVICIOS = [
	'Almuerzos',
	'Bocadillos',
	'Tapas caseras',
	'Menú del día',
	'Cafetería',
	'Comida para llevar',
	'Reservas',
	'Accesible',
];

export const MENU = [
	{
		title: 'El menú del día · 14 €',
		items: [
			{ name: 'Ensalada mixta de entrante', note: 'la que abre el menú en la pizarra' },
			{
				name: 'Macarrones boloñesa o crema de calabacín',
				note: 'primeros a elegir, con potaje de garbanzos o judías con jamón',
			},
			{
				name: 'Albóndigas, pollo al curry, lubina o cabracho',
				note: 'segundos a elegir, según la pizarra del día',
			},
			{ name: 'Pan, postre y café', note: 'incluidos, junto con una consumición' },
		],
	},
	{
		title: 'Los almuerzos',
		items: [
			{ name: 'La enterita con pincho moruno', note: 'el bocadillo más citado de la casa' },
			{ name: 'Bocadillo de calamares con alioli', note: 'de los que se piden a media mañana' },
			{ name: 'De panceta y pimiento asado', note: 'pan crujiente y producto de la tierra' },
			{ name: 'Especial de lomo', note: 'uno de los favoritos de la clientela' },
		],
	},
	{
		title: 'Tapas y raciones',
		items: [
			{ name: 'Sepia', note: 'a la plancha o guisada, según el día' },
			{ name: 'Oreja a la plancha', note: 'con pimentón, para compartir' },
			{ name: 'Xipirones', note: 'pequeños y bien fritos, para picar' },
			{ name: 'Patatas bravas', note: 'con alioli, de las que no fallan' },
		],
	},
	{
		title: 'Postres y sobremesa',
		items: [
			{ name: 'Flan con nata', note: 'de los postres caseros de la casa' },
			{ name: 'Postres caseros', note: 'repostería hecha en el propio local' },
			{ name: 'Carajillo', note: 'el que hace volver a más de uno' },
			{ name: 'Para llevar', note: 'pide por teléfono y recoge' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Rincón de la Olivereta?',
		a: 'En la Calle Villavieja (Carrer Vilavella), 162, en Vila-real (12540 Castellón). El mapa de esta página lleva directo al bar y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google marca de 08:00 a 17:00 de lunes a sábado y cierra los domingos. El Instagram del local publica un horario algo más corto (de 08:30 a 17:00 entre semana y hasta las 14:00 los sábados), así que llama antes si vas justo de tiempo.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'Sí. El teléfono del bar es el 635 35 45 30. Para cenas o comidas especiales fuera del horario habitual, el propio establecimiento indica el 633 62 48 89. El local es pequeño y se llena a la hora del almuerzo, así que reservar es recomendable.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina casera valenciana y mediterránea: almuerzos con bocadillos como la enterita con pincho moruno o el de calamares con alioli, tapas de sepia, xipirones, carrilleras y manitas de cerdo, platos de cuchara como lentejas o conejo guisado, menú del día y postres caseros.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'El menú del día cuesta 14 € e incluye entrante, primero, segundo, una consumición, pan, postre y café, según la pizarra publicada en la ficha de Google. Los almuerzos y las tapas se cobran aparte. La carta puede cambiar, así que confirma el precio al llamar.',
	},
	{
		q: '¿Hay opciones para llevar?',
		a: 'Sí, el local ofrece comida para llevar. Conviene llamar antes al 635 35 45 30 para confirmar disponibilidad y hora de recogida, sobre todo en las horas punta del almuerzo.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso, aseo y aparcamiento adaptados para sillas de ruedas, además de bucle magnético asistencial. Si necesitas una mesa concreta, avisa al reservar.',
	},
];
