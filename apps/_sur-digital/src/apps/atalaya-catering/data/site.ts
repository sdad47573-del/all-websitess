/**
 * Datos de Atalaya Catering — Carrer Garganes, 03590 Altea (Alicante).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Atalaya Catering Comidas para llevar a
 *   domicilio», 38.6030887,-0.0452091, feature 0xd62015a44572ce5:0xdf64f1d6bf1ea567.
 * - Nombre, dirección, teléfono, web, categorías, valoración, horario y reseñas:
 *   ficha pública de Google consultada el 1 de noviembre de 2026.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs).
 *
 * Lo que se ve en las fotos (cartel de la fachada, comedor, platos) se cita como
 * tal: la ficha no publica carta ni precios.
 */

export const BUSINESS = {
	name: 'Atalaya Catering',
	fullName: 'Atalaya Catering Comidas para llevar a domicilio',
	shortName: 'Atalaya Catering',
	mark: 'AC',
	street: 'Carrer Garganes',
	district: 'Altea',
	city: 'Altea',
	region: 'Comunidad Valenciana',
	postalCode: '03590',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/atalaya-catering',
	geo: { lat: 38.6030887, lng: -0.0452091 },
	featureId: '0xd62015a44572ce5:0xdf64f1d6bf1ea567',
	placeId: 'ChIJ5SxXRFoBYg0RZ6Uev9bxZN8',
	plusCode: '8CCXJX33+6W',
	googleCategory: 'Servicio de catering y restaurante mediterráneo',
	phone: '617 84 09 69',
	phoneHref: 'tel:+34617840969',
	phoneSign: '637 231 890',
	phoneSignHref: 'tel:+34637231890',
	email: 'atalaya-catering@gmail.com',
	web: 'https://atalayacatering.readyme.app/',
	tagline: 'Paellas, tapas y catering en Altea',
	description:
		'Atalaya Catering, en Carrer Garganes (03590 Altea, Alicante). Paellas y tapas para llevar, servicio a domicilio, catering para eventos y una sala propia con mesas. Abierto todos los días de 9:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Atalaya+Catering+Comidas+para+llevar+a+domicilio/@38.6030887,-0.0452091,17z/data=!3m1!4b1!4m6!3m5!1s0xd62015a44572ce5:0xdf64f1d6bf1ea567!8m2!3d38.6030887!4d-0.0452091!16s%2Fg%2F12qg2_s7n?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6030887%2C-0.0452091',
	embed: 'https://maps.google.com/maps?q=38.6030887,-0.0452091&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.6030887,-0.0452091',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4,
	count: 104,
	label: '4,0',
};

/** Horario que publica la ficha: el mismo todos los días. */
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
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de contar con el reparto.';

/** Lo que la ficha, el cartel de la fachada y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Servicio de catering',
	'Paellas para llevar',
	'Tapas',
	'A domicilio',
	'Cocina mediterránea',
	'Sala con mesas',
	'Eventos',
	'Desayunos',
];

export const HIGHLIGHTS = [
	{
		title: 'Paellas y tapas para llevar',
		text: 'El cartel de la puerta lo dice sin rodeos: «Paellas y tapas para llevar». Es lo que se ve en el escaparate de Carrer Garganes y lo que confirman las bandejas de marisco y los platos del perfil de Google.',
	},
	{
		title: 'También a domicilio',
		text: 'El mismo cartel añade «también con servicio a domicilio» y repite el teléfono. La ficha clasifica el local como servicio de catering y restaurante mediterráneo, así que el reparto y los encargos para casa son parte del negocio.',
	},
	{
		title: 'Una sala para eventos',
		text: 'Las fotos enseñan un comedor amplio con mesas de mantel marrón y servilleta crema, y una jornada con sillas de auditorio y cartel de «Feria de Eventos». El local se usa también para celebraciones y encuentros.',
	},
	{
		title: '4,0 sobre 5 con 104 reseñas',
		text: 'La ficha de Google le da 4,0 sobre 5 con 104 opiniones (noviembre de 2026). Las reseñas que se ven hablan de desayunos variados, comida casera y una relación calidad-precio muy buena.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Buen lugar para un variado desayuno; buena comida casera.',
		valor: 4,
	},
	{
		texto: 'Súper bien, relación calidad-precio inmejorable, buen servicio y buena atención.',
		valor: 5,
	},
];

/**
 * Lo que anuncia el cartel del local y lo que se reconoce en las fotos del
 * perfil. La ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Lo que anuncia el cartel',
		items: [
			{ name: 'Paellas para llevar', note: 'el cartel de la fachada las anuncia así, para recoger' },
			{ name: 'Tapas', note: 'junto a las paellas, en el mismo cartel de la puerta' },
			{ name: 'Servicio a domicilio', note: '«también con servicio a domicilio», añade el cartel' },
		],
	},
	{
		title: 'En las fotos del perfil',
		items: [
			{ name: 'Gambas y cigalas', note: 'bandeja de marisco con perejil y limón' },
			{ name: 'Ensalada de bogavante', note: 'con tomate cherry y huevo rallado' },
			{ name: 'Dátiles con bacon', note: 'brochetas de dátil envuelto en bacon' },
			{ name: 'Carne a la brasa', note: 'con patatas panadera y pimiento asado' },
		],
	},
	{
		title: 'Para celebraciones',
		items: [
			{ name: 'Catering para eventos', note: 'la ficha lo clasifica como servicio de catering' },
			{ name: 'Comedor con mesas', note: 'mantel marrón y servilleta color crema' },
			{ name: 'Jornadas y ferias', note: 'en las fotos aparece una «Feria de Eventos» en la sala' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Atalaya Catering?',
		a: 'En Carrer Garganes, 03590 Altea (Alicante). La ficha de Google sitúa el local en las coordenadas 38.6030887, -0.0452091, en plena calle Garganes. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica el mismo horario todos los días de la semana, de domingo a sábado: de 9:00 a 16:00. El día que se consultó la ficha (1 de noviembre) Google advertía de que el horario podría ser distinto por ser el Día de Todos los Santos, así que conviene llamar antes si vas a ir en festivo.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el 617 84 09 69. El cartel de la fachada, que se ve en una de las fotos del perfil, muestra el 637 231 890 y el correo atalaya-catering@gmail.com. Prueba con el de la ficha y, si no contesta, con el del cartel.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'El cartel de la puerta anuncia «paellas y tapas para llevar», y la ficha clasifica el local como servicio de catering y restaurante mediterráneo. En las fotos del perfil aparecen gambas y cigalas, una ensalada de bogavante, dátiles con bacon y carne a la brasa con patatas. No hay carta con todos los platos ni precios publicados.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'El cartel lo anuncia expresamente: «también con servicio a domicilio». Lo que no publica es el área de reparto ni el horario de entrega, así que lo práctico es llamar y preguntar por tu zona. En la puerta también hay una pegatina de Just Eat, otra vía si el local está dado de alta en la plataforma.',
	},
	{
		q: '¿Se puede comer en el local o es solo para llevar?',
		a: 'Hay una sala grande con mesas de mantel marrón, servilleta crema y copas puestas, que aparece en varias fotos del perfil. Además esa sala se usa para jornadas y eventos. La ficha no publica reservas de mesa, así que confirma por teléfono si quieres sentarte.',
	},
	{
		q: '¿Hacen catering para eventos?',
		a: 'Es su actividad principal: Google la clasifica como «servicio de catering». En las fotos del perfil hay una jornada con sillas de auditorio y un cartel de «Feria de Eventos», y el comedor aparece preparado para grupos. Para bodas, comidas de empresa o celebraciones hay que hablar con el local y pedir presupuesto.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Ni la ficha ni las fotos publican precios. Las reseñas hablan de una relación calidad-precio «inmejorable», pero el precio del menú, de las paellas o del catering solo se sabe preguntando por teléfono.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha enlaza atalayacatering.readyme.app, un sistema de pedidos de la plataforma Readyme. Esta página es informativa: reúne los datos y las fotos públicas del local y no gestiona pedidos.',
	},
];
