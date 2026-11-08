/**
 * Datos de La Casa del Pollo — C. Tántalo, 12, Villaverde, 28021 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Casa del Pollo,
 *   40.352458,-3.681235, feature 0xd4226bfdf8fa9af:0x82520dcf4af10f5f.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas,
 *   accesibilidad y descripción: ficha pública de Google consultada en
 *   octubre de 2026.
 * - Carta y precios: cartel de la carta fotografiado en el local y publicado
 *   en la galería del perfil de Google Maps.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni redes sociales,
 * y no publica un servicio de reparto. No se prometen servicios que no consten.
 */

export const BUSINESS = {
	name: 'La Casa del Pollo',
	fullName: 'La Casa del Pollo · pollo asado y comida casera',
	shortName: 'La Casa',
	mark: 'P',
	street: 'C. Tántalo, 12',
	neighbourhood: 'Villaverde',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	regionName: 'Comunidad de Madrid',
	postalCode: '28021',
	country: 'ES',
	phone: '910 70 18 27',
	phoneHref: '+34910701827',
	rating: 4.7,
	reviewsCount: 293,
	siteUrl: 'https://www.sur-digital.com/la-casa-del-pollo',
	geo: { lat: 40.352458, lng: -3.681235 },
	featureId: '0xd4226bfdf8fa9af:0x82520dcf4af10f5f',
	placeId: 'ChIJr6mP378mQg0RXw_xSs8NUoI',
	cid: '9390583356987608927',
	plusCode: '8CGR9829+XG',
	category: 'Restaurante especializado en pollo',
	tagline: 'Pollo asado y comida casera para llevar en Villaverde',
	description:
		'La Casa del Pollo, restaurante especializado en pollo en la calle Tántalo 12, Villaverde, 28021 Madrid. Pollo asado, comida casera para llevar y una carta de platos de siempre. 4,7 sobre 5 en Google con 293 reseñas.',
	hasPublicWebsite: false,
	/** Descripción que publica el propio establecimiento en su ficha. */
	ownerDescription: 'Comida casera para llevar',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Casa+del+Pollo/@40.352458,-3.681235,17z/data=!3m1!4b1!4m6!3m5!1s0xd4226bfdf8fa9af:0x82520dcf4af10f5f!8m2!3d40.352458!4d-3.681235!16s%2Fg%2F1hc7_gx_9?authuser=0&hl=es&entry=ttu',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.352458%2C-3.681235',
	embed: 'https://maps.google.com/maps?q=40.352458,-3.681235&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.352458,-3.681235',
};

/**
 * Horario publicado en la ficha de Google. Abre de martes a domingo y cierra
 * los lunes. La ficha avisa de que en festivos el horario puede ser distinto.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '8:00–15:30' },
	{ day: 'Miércoles', value: '8:00–15:30' },
	{ day: 'Jueves', value: '8:00–15:30' },
	{ day: 'Viernes', value: '8:00–15:30' },
	{ day: 'Sábado', value: '8:00–15:30' },
	{ day: 'Domingo', value: '8:00–15:30' },
];

/**
 * Señales de identidad que sí constan en la ficha, en el rótulo del local y en
 * las reseñas: el pollo asado, la comida casera, el servicio para llevar, las
 * croquetas, el cocido de los lunes y el acceso adaptado.
 */
export const SERVICIOS = [
	'Pollo asado',
	'Comida casera',
	'Para llevar',
	'Croquetas caseras',
	'Cocido los lunes',
	'Acceso adaptado',
];

/**
 * Carta publicada en el cartel del local (foto del perfil de Google Maps).
 * Los precios son los del cartel; pueden cambiar, así que la web invita a
 * confirmarlos por teléfono.
 */
export const MENU = [
	{
		title: 'Pollo y patatas',
		items: [
			{ name: '1 pollo asado', price: '9,45 €', note: '1.900 / 1.300 g, entero y para compartir' },
			{ name: '1/2 pollo asado', price: '4,95 €', note: 'media pieza, con patatas si se quiere' },
			{ name: 'Pollo entero al ajillo', price: '12,50 €', note: 'por encargo' },
			{ name: 'Patatas fritas', price: '2,00 €', note: '1 persona · 2 personas 3,70 € · 3-4 personas 4,90 €' },
			{ name: 'Patatas ali-oli', price: '2,20 €', note: 'la guarnición que destaca una reseña' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Alitas de pollo', price: '5,00 €', note: '10 uds. · 5 uds. 2,60 €' },
			{
				name: 'Croquetas caseras de pollo o jamón',
				price: '3,20 €',
				note: '4 uds. 3,20 € · 6 uds. 4,50 € · 8 uds. 5,60 € · 10 uds. 6,80 € · 12 uds. 7,80 €',
			},
			{
				name: 'Empanadillas de atún',
				price: '2,40 €',
				note: '4 uds. 2,40 € · 6 uds. 3,30 € · 8 uds. 4,00 € · 10 uds. 4,50 € · 12 uds. 4,80 €',
			},
			{ name: 'Nuggets de pollo', price: '3,30 €', note: '12 uds.' },
			{ name: 'Fingers de pollo o mozzarella', price: '3,30 €', note: '10 uds.' },
			{ name: 'Bolitas de cheddar con jalapeño', price: '3,30 €', note: '10 uds.' },
			{ name: 'Mejillones tigre', price: '3,20 €', note: '4 uds. · 12 uds. 7,80 €' },
		],
	},
	{
		title: 'Primeros y cuchara',
		items: [
			{ name: 'Cocido completo', price: '5,00 €', note: 'todos los lunes' },
			{ name: 'Potaje de bacalao', price: '3,10 €', note: 'todos los viernes o por encargo' },
			{ name: 'Paella mixta', price: '6,20 €', note: 'por encargo' },
			{ name: 'Tortilla española', price: '4,90 €', note: 'de la carta de siempre' },
			{ name: 'Macarrones boloñesa', price: '2,30 €', note: 'plato de cuchara' },
			{ name: 'Ensaladilla rusa', price: '3,20 €', note: 'para empezar' },
			{ name: 'Pisto manchego', price: '3,20 €', note: 'verdura y tomate' },
			{ name: 'Gazpacho andaluz', price: '3,20 €', note: 'jarra de 1 litro' },
			{ name: 'Judías con jamón', price: '2,20 €', note: 'guiso de la casa' },
			{ name: 'Huevos rellenos', price: '2,80 €', note: 'de la vitrina' },
			{ name: 'Migas manchegas', price: '3,30 €', note: 'con torreznos' },
			{ name: 'Ensalada campera', price: '3,20 €', note: 'ensalada de la casa' },
		],
	},
	{
		title: 'Segundos',
		items: [
			{ name: 'Lasaña casera de pollo', price: '3,90 €', note: 'también de carne, 4,50 €' },
			{ name: 'Albóndigas en salsa española', price: '3,50 €', note: 'de carne' },
			{ name: 'Carrillada al Pedro Ximénez', price: '4,10 €', note: 'guiso de la casa' },
			{ name: 'Magro en salsa', price: '3,30 €', note: 'para mojar pan' },
			{ name: 'Pechuga Villaroy', price: '2,60 €', note: 'por unidad' },
			{ name: 'Pescado al horno', price: '3,10 €', note: 'según el día' },
			{ name: 'Costillas asadas barbacoa', price: '5,95 €', note: 'ración' },
			{ name: 'Bacalao con tomate', price: '4,20 €', note: 'guiso de bacalao' },
			{ name: 'Conejo a la cerveza con setas', price: '11,90 €', note: 'entero, por encargo' },
			{ name: 'Conejo al ajillo', price: '11,90 €', note: 'entero, por encargo' },
			{ name: 'Berenjenas rellenas con carne', price: '3,50 €', note: 'media ración' },
			{ name: 'Solomillos con setas', price: '3,90 €', note: 'sugerencia de la casa' },
			{ name: 'Callos con garbanzos', price: '3,30 €', note: 'sugerencia de la casa' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Profiteroles', price: '2,00 €', note: 'de la vitrina' },
			{ name: 'Natillas caseras', price: '2,00 €', note: 'hechas en casa' },
			{ name: 'Arroz con leche', price: '2,80 €', note: 'postre de cuchara' },
			{ name: 'Mousse de chocolate', price: '2,90 €', note: 'en vasito' },
			{ name: 'Tarta de queso con arándanos', price: '2,90 €', note: 'porción' },
			{ name: 'Tiramisú', price: '2,90 €', note: 'porción' },
		],
	},
	{
		title: 'Bebidas',
		items: [
			{ name: 'Lata de refresco o cerveza', price: '1,00 €', note: 'Coca-Cola, Fanta, Aquarius, Nestea o cerveza' },
			{ name: 'Coca-Cola 2 l', price: '2,20 €', note: 'botella grande' },
			{ name: 'Coca-Cola 0,5 l', price: '1,10 €', note: 'botella' },
			{ name: 'Fanta o Aquarius', price: '2,20 €', note: 'botella' },
			{ name: 'Cerveza', price: '1,70 €', note: 'botella' },
			{ name: 'Agua', price: '0,60 €', note: '0,5 l · 1,5 l 1,20 €' },
		],
	},
	{
		title: 'Ofertas fin de semana',
		items: [
			{ name: 'Oferta 1 · 1/4 de pollo + patatas', price: '4,95 €', note: 'para una persona' },
			{ name: 'Oferta 2 · 1/2 pollo + patatas + 4 croquetas', price: '10,15 €', note: 'para dos' },
			{
				name: 'Oferta 3 · 1 pollo + 4 croquetas + patatas o 2 pimientos + 4 empanadillas',
				price: '16,95 €',
				note: 'para compartir',
			},
			{
				name: 'Oferta 4 · 1 pollo + 12 alitas + patatas o 2 pimientos + 12 nuggets',
				price: '16,15 €',
				note: 'para grupo',
			},
		],
	},
];

/** Reseñas publicadas en la ficha de Google. */
export const RESENAS = [
	{
		texto: 'Pollo asado muy rico una papas alioli muy rica también excelente atención',
		valor: 5,
	},
	{
		texto: 'El pollo asado esta de 10 con arroz o con patatas con un buen trato.',
		valor: 5,
	},
	{
		texto: 'Buenísimo, cantidades más que razonables y precio 5,50 por un cocido estupendo!',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Casa del Pollo?',
		a: 'En la calle Tántalo, 12, en Villaverde, 28021 Madrid. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de martes a domingo, de 8:00 a 15:30, y cierra los lunes. La ficha avisa de que en festivos el horario puede cambiar, así que conviene confirmarlo por teléfono antes de desplazarse.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado, patatas fritas, croquetas caseras, empanadillas, alitas, cocido de los lunes, potaje de bacalao de los viernes, paella por encargo, guisos, postres caseros y una carta de primeros y segundos de toda la vida. La carta completa está en esta página, con los precios del cartel del local.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. El rótulo del local anuncia «Asados y comidas para llevar» y la ficha se describe como «comida casera para llevar». El canal que publica Google es el teléfono 910 70 18 27; llama para encargar el pollo o preguntar por los platos del día.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no lo indica. Google lo clasifica como restaurante especializado en pollo, no como servicio de reparto, así que la zona y la disponibilidad se confirman llamando al local.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no publica un sistema de reservas ni una web propia. El canal que sí consta es el teléfono 910 70 18 27; llama para mesa o para encargar comida.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La carta del local publica los precios: 9,45 € el pollo asado entero, 4,95 € el medio, 5,00 € el cocido completo de los lunes y 3,20 € las croquetas de cuatro unidades. Son los precios del cartel fotografiado; pueden cambiar, así que conviene confirmarlos por teléfono.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero no aparcamiento adaptado ni asientos adaptados. Si necesitas una condición concreta, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,7 sobre 5 con 293 reseñas en Google, según la ficha consultada en octubre de 2026.',
	},
	{
		q: '¿Tiene web propia o redes sociales?',
		a: 'La ficha de Google no enlaza ninguna web ni perfil social del local. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
];
