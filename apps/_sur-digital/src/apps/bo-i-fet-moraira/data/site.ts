/**
 * Datos de Bo i Fet Menjars Moraira — Carretera Moraira-Teulada 100F,
 * 03724 Moraira (Alicante).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Bo i Fet Menjars Moraira,
 *   38.6979806, 0.1338324, feature 0x129e063450e1ca73:0x98747fc2169f5ed0.
 *   Nombre, categorías (comida para llevar, pollo, cocina española), dirección,
 *   teléfono, nota (4,5 con 255 reseñas) y horario semanal.
 * - Ficha de Cylex y perfil de Facebook/Instagram: teléfono y cartel de
 *   paellas, arroz al horno y fideuà de cada día.
 *
 * Lo que el sitio NO inventa: el local no publica precios en la ficha, así que
 * la carta va sin importes y remite al teléfono.
 */

export const BUSINESS = {
	name: 'Bo i Fet Menjars Moraira',
	fullName: 'Bo i Fet Menjars Moraira · comida para llevar y pollo en Moraira',
	shortName: 'Bo i Fet',
	mark: 'BF',
	street: 'Ctra. Moraira-Teulada 100F',
	neighbourhood: 'Moraira',
	city: 'Teulada',
	cityAddress: 'Moraira',
	region: 'Comunidad Valenciana',
	regionName: 'Comunidad Valenciana',
	postalCode: '03724',
	country: 'ES',
	phone: '965 74 47 17',
	phoneHref: '+34965744717',
	rating: 4.5,
	reviewsCount: 255,
	siteUrl: 'https://www.sur-digital.com/bo-i-fet-moraira',
	geo: { lat: 38.6979806, lng: 0.1338324 },
	featureId: '0x129e063450e1ca73:0x98747fc2169f5ed0',
	placeId: 'ChIJc8rhUDQGnhIR0F6fFsJ_dJg',
	plusCode: '',
	category: 'Restaurante de comida para llevar',
	tagline: 'Pollo, paellas y cocina casera para llevar en Moraira',
	description:
		'Bo i Fet Menjars Moraira, comida para llevar en la Carretera Moraira-Teulada 100F, 03724 Moraira (Alicante). Pollo, paellas, arroz al horno y fideuà elaborados cada día con ingredientes de calidad. 4,5 sobre 5 en Google con 255 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bo+i+Fet+Menjars+Moraira/data=!4m7!3m6!1s0x129e063450e1ca73:0x98747fc2169f5ed0!8m2!3d38.6979806!4d0.1338324!16s%2Fg%2F11z4mnwjw!19sChIJc8rhUDQGnhIR0F6fFsJ_dJg?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=10985545862643408592',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6979806%2C0.1338324',
	embed: 'https://maps.google.com/maps?q=38.6979806,0.1338324&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.6979806,0.1338324',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–16:30' },
	{ day: 'Martes', value: '9:00–16:30' },
	{ day: 'Miércoles', value: '9:00–16:30' },
	{ day: 'Jueves', value: '9:00–16:30' },
	{ day: 'Viernes', value: '9:00–16:30' },
	{ day: 'Sábado', value: '9:00–16:00' },
	{ day: 'Domingo', value: '9:00–15:00' },
];

/** Señales de identidad que constan en la ficha y en las redes del local. */
export const SERVICIOS = [
	'Pollo',
	'Paellas para llevar',
	'Arroz al horno',
	'Fideuà',
	'Comida casera',
];

/**
 * Carta de los platos que el local publica en sus redes («paellas, arroz al
 * horno y fideuà de cada día»). Sin precios: no los publica.
 */
export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [
	{
		title: 'Arroces y fideuà',
		items: [
			{
				name: 'Paellas',
				note: 'Elaboradas cada día, para llevar.',
			},
			{
				name: 'Arroz al horno',
				note: 'Uno de los platos que el local anuncia a diario.',
			},
			{
				name: 'Fideuà',
				note: 'Fideo fino, también en la oferta diaria.',
			},
		],
	},
	{
		title: 'Cocina casera',
		items: [
			{
				name: 'Platos caseros del día',
				note: 'Variedad diaria, con ingredientes de calidad y elaboración propia.',
			},
			{
				name: 'Pollo',
				note: 'Del local, para llevar.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bo i Fet Menjars Moraira?',
		a: 'En la Carretera Moraira-Teulada 100F, 03724 Moraira (Alicante). El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google indica de lunes a viernes de 9:00 a 16:30, sábado de 9:00 a 16:00 y domingo de 9:00 a 15:00. En festivos puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo, paellas, arroz al horno y fideuà, según lo que el local prepare cada día, además de otros platos caseros. La oferta exacta del día se confirma por teléfono.',
	},
	{
		q: '¿Hay que encargar con antelación?',
		a: 'Para paellas grandes o encargos de varias raciones conviene llamar antes al 965 74 47 17, que es el número de reservas que publica el local.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha de Google lo clasifica como restaurante de comida para llevar. No consta servicio de sala en la ficha, así que lo habitual es recoger el pedido.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no publica reparto a domicilio y esta página no lo ofrece. El pedido se recoge en el local; si necesitas una entrega, se consulta al llamar.',
	},
	{
		q: '¿Se publican los precios?',
		a: 'No. El local no publica una carta con tarifas, así que aquí aparecen los platos sin importes. El precio se confirma en el 965 74 47 17.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,5 sobre 5 con 255 reseñas en Google, según la ficha consultada en octubre de 2026.',
	},
	{
		q: '¿Tiene página web o redes?',
		a: 'La ficha de Google no enlaza una web propia. El local tiene perfil de Facebook e Instagram (@boifetmenjars), donde publica el cartel del día. Esta web es informativa y no es un canal oficial de pedidos: el teléfono es el canal que consta.',
	},
];
