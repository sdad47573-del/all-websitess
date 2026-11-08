/**
 * Datos de La Catedral (Granja Diva) — Av. Dr. Mitjavila, 20, local 2,
 * AD500 Andorra la Vella.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: 42.5098606, 1.5317004, feature
 *   0x12a58ada9495efd1:0x4dd84c9280904a52 (nombre, dirección, categorías,
 *   horario, teléfono, web, nota de 4,5 con 101 reseñas, accesibilidad y
 *   atributo «se admiten perros»).
 * - Web oficial enlazada desde la ficha:
 *   https://sites.google.com/view/la-catedral-andorra/inici
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/. En una de ellas aparece la carta completa expuesta en
 *   la entrada: tapas, torrades, entrepans freds i calents, pizzes,
 *   hamburgueses, plats combinats, amanides i espàrrecs, con precios.
 *
 * Lo que el sitio NO inventa: los platos y precios son los de esa carta; los
 * servicios, los que constan en la ficha y en la web oficial.
 */

export const BUSINESS = {
	name: 'La Catedral (Granja Diva)',
	shortName: 'La Catedral',
	mark: 'C',
	street: 'Av. Dr. Mitjavila, 20, local 2',
	city: 'Andorra la Vella',
	region: 'Andorra la Vella',
	regionName: 'Andorra la Vella',
	parish: 'Andorra la Vella',
	postalCode: 'AD500',
	country: 'AD',
	phone: '+376 866 070',
	phoneHref: '+376866070',
	rating: 4.5,
	reviewsCount: 101,
	siteUrl: 'https://www.sur-digital.com/la-catedral',
	geo: { lat: 42.5098606, lng: 1.5317004 },
	featureId: '0x12a58ada9495efd1:0x4dd84c9280904a52',
	placeId: 'ChIJ0e-VlNqKpRIRUkqQgJJM2E0',
	cid: null,
	category: 'Bar restaurante · Cafetería',
	categories: ['Bar restaurante', 'Cafetería'],
	website: 'https://sites.google.com/view/la-catedral-andorra/inici',
	tagline: 'Bar, cafetería y granja · Andorra la Vella',
	description:
		'La Catedral (Granja Diva), bar restaurante y cafetería en la Av. Dr. Mitjavila 20, local 2, de Andorra la Vella. Tapes, pizzes, hamburgueses i amanides casolanes de 7:00 a 23:00, de lunes a sábado.',
	hasPublicWebsite: true,
	ownerDescription:
		'El nostre Bar / Cafeteria La Catedral és un racó familiar on trobaràs un assortiment de tapes, pizzes, hamburgueses, amanides, etc. Tot casolà i amb productes de molt bona qualitat, però sobretot, un ambient acollidor i familiar que amb el temps s’han convertit en la nostra identitat.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Catedral+(Granja+Diva)/@42.5098606,1.5317004,17z/data=!4m6!3m5!1s0x12a58ada9495efd1:0x4dd84c9280904a52!8m2!3d42.5098606!4d1.5317004!16s%2Fg%2F12qfbhr0j',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5098606%2C1.5317004',
	embed: 'https://maps.google.com/maps?q=42.5098606,1.5317004&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha: lunes a sábado, de 7:00 a 23:00. */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–23:00' },
	{ day: 'Martes', value: '7:00–23:00' },
	{ day: 'Miércoles', value: '7:00–23:00' },
	{ day: 'Jueves', value: '7:00–23:00' },
	{ day: 'Viernes', value: '7:00–23:00' },
	{ day: 'Sábado', value: '7:00–23:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Lo que sí consta en la ficha pública y en la web oficial. */
export const SERVICIOS = [
	'Bar cafetería',
	'Tapes i torrades',
	'Pizzes i hamburgueses',
	'Cuina casolana',
	'Terrassa',
	'7:00–23:00 · lunes a sábado',
];

/** Carta expuesta en la entrada del local, en catalán. */
export const MENU = [
	{
		title: 'Tapes',
		items: [
			{
				name: 'Llangostins al forn de la casa',
				note: 'Diez langostinos al horno, la tapa de la casa',
				price: '15,00 €',
			},
			{
				name: 'Pernil ibèric amb pa amb tomàquet',
				note: 'Jamón ibérico con pan con tomate',
				price: '15,00 €',
			},
			{
				name: 'Pernil gran reserva amb pa amb tomàquet',
				note: 'Jamón gran reserva con pan con tomate',
				price: '10,00 €',
			},
			{
				name: 'Formatge manxec amb pa amb tomàquet',
				note: 'Queso manchego con pan con tomate',
				price: '10,00 €',
			},
			{
				name: 'Botifarra de Burgos amb pa amb tomàquet',
				note: 'Morcilla de Burgos con pan con tomate',
				price: '9,50 €',
			},
			{
				name: 'Croquetons de pollastre',
				note: 'Cuatro croquetas de pollo',
				price: '7,50 €',
			},
			{
				name: 'Calamars a la romana',
				note: 'Calamares rebozados a la romana',
				price: '8,00 €',
			},
			{
				name: 'Alitas de pollo',
				note: 'Alitas de pollo de la casa',
				price: '8,00 €',
			},
			{
				name: 'Patates braves',
				note: 'Patatas en dados con salsa brava',
				price: '7,50 €',
			},
			{
				name: 'Ració de patates fregides',
				note: 'Ración de patatas fritas',
				price: '5,00 €',
			},
		],
	},
	{
		title: 'Torrades i entrepans',
		items: [
			{
				name: 'Torrada Diva',
				note: 'Hamburguesa de ternera, queso, bacon, cebolla, huevo frito y mayonesa',
				price: '9,00 €',
			},
			{
				name: 'Torrada de pernil ibèric',
				note: 'Jamón ibérico a la plancha',
				price: '13,00 €',
			},
			{
				name: 'Torrada de pebrots rostits i anxoves',
				note: 'Pimientos asados y anchoas',
				price: '9,00 €',
			},
			{
				name: 'Entrepà Diva',
				note: 'Lomo y jamón gran reserva a la plancha con mayonesa',
				price: '7,00 €',
			},
			{
				name: 'Entrepà de pernil ibèric',
				note: 'Jamón ibérico en bocadillo',
				price: '11,00 €',
			},
			{
				name: 'Entrepà de llom, formatge i bacó',
				note: 'Lomo, queso y bacon',
				price: '7,00 €',
			},
			{
				name: 'Entrepà de truita francesa amb bacó',
				note: 'Tortilla francesa con bacon',
				price: '6,00 €',
			},
			{
				name: 'Bikini',
				note: 'Jamón dulce y queso a la plancha',
				price: '4,00 €',
			},
			{
				name: 'Entrepà vegetal de pernil dolç i formatge',
				note: 'Jamón dulce, queso, lechuga y tomate',
				price: '7,00 €',
			},
		],
	},
	{
		title: 'Pizzes i hamburgueses',
		items: [
			{
				name: 'Pizza Margarita',
				note: 'Mozzarella, tomate en rodajas, queso y orégano',
				price: '15,00 €',
			},
			{
				name: 'Pizza Reina',
				note: 'Mozzarella, jamón dulce, champiñones y orégano',
				price: '15,00 €',
			},
			{
				name: 'Pizza Napolitana',
				note: 'Mozzarella, anchoas, alcaparras, olivas y orégano',
				price: '15,00 €',
			},
			{
				name: 'Pizza 4 Estacions',
				note: 'Mozzarella, jamón dulce, bacon, champiñones, alcachofas y olivas',
				price: '15,00 €',
			},
			{
				name: 'Pizza Diva Vegetal',
				note: 'Mozzarella, tomate, pimientos asados, cebolla y orégano',
				price: '15,00 €',
			},
			{
				name: 'Pizza de cabra',
				note: 'Mozzarella, queso de cabra, piñones, miel y orégano',
				price: '15,00 €',
			},
			{
				name: 'Hamburguesa Diva',
				note: 'Ternera, lechuga, tomate, cebolla, queso, bacon, huevo frito y mayonesa',
				price: '9,00 €',
			},
			{
				name: 'Hamburguesa Holandesa',
				note: 'Ternera, lechuga, tomate, cebolla, queso, bacon y mayonesa',
				price: '8,50 €',
			},
			{
				name: 'Hamburguesa de pollastre',
				note: 'Pollo, lechuga, tomate, cebolla, queso, bacon y mayonesa',
				price: '9,00 €',
			},
			{
				name: 'Hamburguesa Mexicana',
				note: 'Ternera o pollo, bacon, piparra, jalapeños y salsa picante',
				price: '9,00 €',
			},
		],
	},
	{
		title: 'Plats i amanides',
		items: [
			{
				name: 'Plats combinats (nº 1–5)',
				note: 'Bistec, lomo, hamburguesa, txistorra o morcilla de Burgos con patatas fritas y dos huevos fritos',
				price: '12,00 €',
			},
			{
				name: 'Dos ous ferrats amb bacó',
				note: 'Dos huevos fritos con bacon',
				price: '9,00 €',
			},
			{
				name: 'Amanida de formatge de cabra',
				note: 'Lechuga, tomate, cebolla, maíz, zanahoria, espárragos, nueces y queso de cabra',
				price: '13,00 €',
			},
			{
				name: 'Amanida de tonyina',
				note: 'Lechuga, tomate, cebolla, maíz, zanahoria, espárragos y atún',
				price: '13,00 €',
			},
			{
				name: 'Amanida mixta',
				note: 'Lechuga, tomate, cebolla, maíz, zanahoria y espárragos',
				price: '9,50 €',
			},
			{
				name: 'Espàrrecs amb tonyina',
				note: 'Espárragos con atún',
				price: '12,00 €',
			},
			{
				name: 'Espàrrecs amb maionesa',
				note: 'Espárragos con mayonesa',
				price: '10,00 €',
			},
			{
				name: 'Espàrrecs amb tonyina i pebrots del piquillo',
				note: 'Espárragos con atún y pimientos del piquillo',
				price: '13,00 €',
			},
		],
	},
];

export const MENU_NOTE =
	'Precios de la carta expuesta en la entrada del local, en euros. La carta puede cambiar y algunos extras se cobran aparte (el suplemento de queso, 0,50 €; el de patatas fritas en las hamburguesas, 2,50 €). Confirma disponibilidad y precio al pedir.';

export const FAQ = [
	{
		q: '¿Dónde está La Catedral (Granja Diva)?',
		a: 'En la Av. Dr. Mitjavila, 20, local 2, AD500 Andorra la Vella, en el centro de la capital. El local tiene terraza con sillas y sombrillas de la casa. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google publica de lunes a sábado, de 7:00 a 23:00. El domingo aparece cerrado. Al abrir a las 7:00 es una opción para el café y el desayuno, y la cocina sigue hasta la noche. En festivos puede cambiar; conviene llamar antes.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La carta se organiza en tapas, torrades, entrepans freds i calents, pizzes, hamburgueses, plats combinats, amanides y espàrrecs. La casa se define como un bar-cafetería familiar con cocina casolana: tapes, pizzes, hamburgueses y ensaladas.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Es una carta de precios populares: una ración de patatas fritas cuesta 5,00 €, las bravas 7,50 €, un bocadillo de lomo con queso y bacon 7,00 €, una hamburguesa 8,50–9,00 €, un plato combinado 12,00 € y las pizzas 15,00 €. Las ensaladas van de 9,50 a 13,00 €.',
	},
	{
		q: '¿Se puede comer en la terraza?',
		a: 'Sí. Las fotos del perfil muestran la terraza del local con sillas blancas y el logo de La Catedral, sombrillas y vistas a la montaña. No hay reservas de terraza en línea: se pregunta en el local o por teléfono.',
	},
	{
		q: '¿Cómo se pide?',
		a: 'El teléfono +376 866 070 es el canal directo que publica la ficha y la propia casa. No hay sistema de pedidos online en esta página. La web oficial enlazada desde Google también invita a llamar para hacer el pedido.',
	},
	{
		q: '¿Se puede ir con perro?',
		a: 'Sí. La ficha de Google marca «se admiten perros». Si el local está lleno, conviene preguntar en la barra o al camarero dónde sentarse con la mascota.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Google marca acceso para sillas de ruedas y asientos adaptados. En cambio, no consta aparcamiento adaptado. Si necesitas una mesa con condiciones concretas, llama antes.',
	},
	{
		q: '¿Tiene página web?',
		a: 'Sí. La ficha enlaza una web oficial en Google Sites (sites.google.com/view/la-catedral-andorra), desde donde también se puede llamar para pedir. Esta página es informativa y reproduce la carta y los datos públicos del local.',
	},
];
