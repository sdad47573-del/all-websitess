/**
 * Datos de Chester — Plaça Príncep Benlloch, 2, AD500 Andorra la Vella.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: 42.5074574, 1.5221594, feature
 *   0x12a58ad36b004721:0x72a4e34509f5a132 (nombre, dirección, categorías,
 *   horario, teléfono, nota de 3,9 con 1.421 reseñas, atributos de
 *   accesibilidad y distintivo «Brunch»).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/. En la foto de la barra y en el papel de la mesa se leen
 *   la pizarra de la carta y parte de la carta impresa: frankfurts, tapas,
 *   bocadillos, hamburguesas, ensaladas y postres con sus precios.
 * - Ficha de Chester en andorra.com, que lo presenta como especialista en
 *   tapas, salchichas y bocadillos.
 *
 * Lo que el sitio NO inventa: no hay web propia en la ficha ni carta completa
 * publicada en línea. Solo se listan los platos y precios que aparecen en esas
 * fotografías; el resto de la carta se remite al local.
 */

export const BUSINESS = {
	name: 'Chester',
	shortName: 'Chester',
	mark: 'C',
	street: 'Plaça Príncep Benlloch, 2',
	city: 'Andorra la Vella',
	region: 'Andorra la Vella',
	regionName: 'Andorra la Vella',
	parish: 'Andorra la Vella',
	postalCode: 'AD500',
	country: 'AD',
	phone: '+376 864 333',
	phoneHref: '+376864333',
	rating: 3.9,
	reviewsCount: 1421,
	siteUrl: 'https://www.sur-digital.com/chester',
	geo: { lat: 42.5074574, lng: 1.5221594 },
	featureId: '0x12a58ad36b004721:0x72a4e34509f5a132',
	placeId: 'ChIJIUcAa9OKpRIRMqH1CUXjpHI',
	cid: null,
	category: 'Hamburguesería · Comida rápida',
	categories: ['Hamburguesería', 'Restaurante de comida rápida'],
	tagline: 'Frankfurts, tapas y burgers · Andorra la Vella',
	description:
		'Chester, frankfurts, tapas, bocadillos y hamburguesas en la Plaça Príncep Benlloch 2 de Andorra la Vella. Cocina abierta de 12:00 a 23:00 todos los días. 3,9 sobre 5 en Google con 1.421 reseñas.',
	hasPublicWebsite: false,
	ownerDescription: null,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Chester/@42.5074574,1.5221594,17z/data=!4m6!3m5!1s0x12a58ad36b004721:0x72a4e34509f5a132!8m2!3d42.5074574!4d1.5221594!16s%2Fg%2F11c5g_st7b',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5074574%2C1.5221594',
	embed: 'https://maps.google.com/maps?q=42.5074574,1.5221594&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: todos los días, de 12:00 a 23:00. */
export const HOURS = [
	{ day: 'Lunes', value: '12:00–23:00' },
	{ day: 'Martes', value: '12:00–23:00' },
	{ day: 'Miércoles', value: '12:00–23:00' },
	{ day: 'Jueves', value: '12:00–23:00' },
	{ day: 'Viernes', value: '12:00–23:00' },
	{ day: 'Sábado', value: '12:00–23:00' },
	{ day: 'Domingo', value: '12:00–23:00' },
];

/** Lo que sí consta en la ficha pública y en el cartel de la puerta. */
export const SERVICIOS = [
	'Frankfurts i salsitxes',
	'Tapas',
	'Hamburgueses',
	'Bocadillos',
	'Brunch',
	'Cocina abierta · 12:00–23:00',
];

/** Platos y precios que se leen en la pizarra de la barra y en la carta de papel. */
export const MENU = [
	{
		title: 'Frankfurts i entrepans',
		items: [
			{
				name: 'Frankfurt Clàssic',
				note: 'La salchicha de siempre, en pan crujiente',
			},
			{
				name: 'Frankfurt Medieval',
				note: 'El clásico hot dog alemán, con cebolla crujiente',
				price: '5,25 €',
			},
			{
				name: 'Llom',
				note: 'Escalopines de lomo de cerdo a la plancha, en bocadillo',
				price: '4,95 €',
			},
			{
				name: 'Entrepans de la casa',
				note: 'Barra de pan con embutidos y queso; la carta de la barra tiene más variedades',
			},
		],
	},
	{
		title: 'Hamburgueses',
		items: [
			{
				name: 'Hamburguesa «La Clàssica»',
				note: 'La de siempre, a la plancha',
			},
			{
				name: 'Hamburguesa de vedella 100 %',
				note: 'Carne de vacuno, hecha a la plancha',
			},
			{
				name: 'Hamburguesa vegetariana',
				note: 'La versión sin carne de la casa',
			},
		],
	},
	{
		title: 'Per picar',
		items: [
			{
				name: '«Ensaladilla» russa',
				note: 'Patata, zanahoria, judías, guisantes, atún, mayonesa y aceitunas',
				price: '3,85 €',
			},
			{
				name: 'Patates fregides',
				note: 'Para acompañar cualquier bocadillo o hamburguesa',
				price: '4,95 €',
			},
			{
				name: 'Patates braves',
				note: 'Patatas fritas en dados con salsa brava picante',
				price: '6,40 €',
			},
			{
				name: 'Croqueta de la casa',
				note: 'Blanca, de pollo, ternera y jamón (1 unidad)',
				price: '1,05 €',
			},
			{
				name: 'Croqueta de pernil ibèric',
				note: 'De jamón ibérico (1 unidad)',
				price: '1,05 €',
			},
			{
				name: '«Xupichups» de pollastre',
				note: 'Alitas de pollo fritas',
			},
			{
				name: '«Xupichups» agredolç',
				note: 'Alitas de pollo con salsa agridulce',
			},
			{
				name: '«Crujís» de pollastre',
				note: 'Pechuga de pollo rebozada y crujiente',
			},
			{
				name: 'Rotllets primavera',
				note: 'Cuatro unidades, de verduras y ternera',
			},
			{
				name: 'Pinxe de trió de salsitxes',
				note: 'Tres salchichas distintas en un pincho',
			},
		],
	},
	{
		title: 'Amanides i postres',
		items: [
			{
				name: 'Amanida verda',
				note: 'Lechuga, tomate, cebolla y aceitunas',
				price: '4,90 €',
			},
			{
				name: 'Amanida de pollastre amb salsa rosa',
				note: 'Con pollo y salsa rosa de la casa',
				price: '6,45 €',
			},
			{
				name: 'Amanida de tonyina',
				note: 'Con atún, huevo y aceitunas',
				price: '6,45 €',
			},
			{
				name: 'Coulant de xocolata',
				note: 'Con crema inglesa y nata',
				price: '4,05 €',
			},
			{
				name: 'Tiramisú',
				note: 'Postre de la casa',
				price: '4,05 €',
			},
			{
				name: 'Postres de l’àvia i merenga',
				note: 'El postre de la abuela con merengue',
				price: '4,05 €',
			},
		],
	},
];

export const MENU_NOTE =
	'Precios de la pizarra de la barra y de la carta de papel, en euros. Solo se indican los que aparecen en las fotografías del perfil: el resto de variedades y los precios al día están en la carta del local. La cocina permanece abierta todo el día, según el cartel de la puerta.';

export const FAQ = [
	{
		q: '¿Dónde está Chester?',
		a: 'En la Plaça Príncep Benlloch, 2, AD500 Andorra la Vella, en el centro de la capital andorrana. Ocupa dos arcos de piedra de la plaza, con terraza delante. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario de Chester?',
		a: 'La ficha de Google publica un horario de 12:00 a 23:00 todos los días, de lunes a domingo. El cartel de la puerta anuncia cocina abierta todo el día, así que se puede comer a cualquier hora dentro de ese intervalo. En festivos puede cambiar; conviene llamar antes.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Chester es especialista en tapas, salchichas y bocadillos, y también sirve hamburguesas, ensaladas y postres. En la pizarra de la barra aparecen frankfurts, el bocadillo de lomo, hamburguesas, patatas bravas, croquetas, alitas de pollo, ensaladas, coulant y tiramisú. Google le marca además el distintivo de brunch.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'Es una casa de precios populares: una croqueta cuesta 1,05 €, la ensaladilla rusa 3,85 €, una ración de patatas fritas 4,95 €, el bocadillo de lomo 4,95 €, el frankfurt Medieval 5,25 €, las patatas bravas 6,40 € y las ensaladas 6,45 €. Los postres están a 4,05 €.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. En las fotos del perfil se ve la terraza con mesas y sillas delante de los dos arcos de piedra de la fachada, en la misma plaza. En invierno el local aparece decorado con guirnaldas y luces.',
	},
	{
		q: '¿Hay que reservar mesa?',
		a: 'No hay reservas en línea ni web propia: el teléfono +376 864 333 es el canal directo. Es un local de tapas y comida rápida pensado para entrar sin reserva, aunque en hora punta puede haber espera.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados. En cambio, no consta aparcamiento adaptado. Si necesitas una mesa con condiciones concretas, llama antes.',
	},
	{
		q: '¿Qué se puede beber?',
		a: 'La barra tiene cerveza de grifo y una amplia colección de botellines, además de café y refrescos. En las fotos se ven los grifos de cerveza y las estanterías llenas de botellas, que forman parte de la decoración del local.',
	},
];
