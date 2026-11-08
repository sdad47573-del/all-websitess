/**
 * Datos de Gastronomia Razonable, Asador De Pollos, Croquetería, Arrocería,
 * Comida Casera Para Llevar — C. Andrómeda, 48, 28938 Móstoles (Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: nombre completo del local,
 *   40.312041,-3.8612735, feature 0xd418c33e905fda3:0x973bee9e6a6fd513.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas,
 *   atributos y fotografías: ficha pública de Google consultada en octubre de
 *   2026.
 * - Carta y precios: cartel del local y etiquetas de la vitrina que aparecen en
 *   las fotos del perfil. La ficha no publica carta ni página web.
 *
 * Lo que no se publica: web propia, pedidos online, reparto a domicilio ni
 * datos de accesibilidad. La ficha solo marca que no hay aparcamiento ni
 * asientos adaptados. El precio del pollo asado no aparece en las fotos; los
 * torreznos llevan 2,50 €/ud. en el cartel y 3,00 €/ud. en la etiqueta de la
 * vitrina, una diferencia que la web explica en lugar de elegir un importe.
 */

export const BUSINESS = {
	name: 'Gastronomía Razonable',
	fullName:
		'Gastronomia Razonable, Asador De Pollos, Croquetería, Arrocería, Comida Casera Para Llevar',
	shortName: 'Gastronomía Razonable',
	mark: 'GR',
	street: 'C. Andrómeda, 48',
	district: 'Móstoles',
	city: 'Móstoles',
	region: 'Comunidad de Madrid',
	postalCode: '28938',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/gastronomia-razonable',
	geo: { lat: 40.312041, lng: -3.8612735 },
	featureId: '0xd418c33e905fda3:0x973bee9e6a6fd513',
	placeId: 'ChIJo_0F6TOMQQ0RE9Vvap7uO5c',
	plusCode: '8CGR846Q+RF',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '912 39 02 71',
	phoneHref: 'tel:+34912390271',
	tagline: 'Asador, croquetería y comida casera en Móstoles',
	description:
		'Gastronomía Razonable, en C. Andrómeda, 48 (28938 Móstoles). Asador de pollos, croquetería, arrocería y comida casera para llevar. Jueves a lunes, 9:30–16:30.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Gastronomia+Razonable,+Asador+De+Pollos,+Croqueter%C3%ADa,+Arrocer%C3%ADa,+Comida+Casera+Para+Llevar/@40.312041,-3.8612735,17z/data=!3m1!4b1!4m6!3m5!1s0xd418c33e905fda3:0x973bee9e6a6fd513!8m2!3d40.312041!4d-3.8612735!16s%2Fg%2F11c37t0kb7?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.312041%2C-3.8612735',
	embed: 'https://maps.google.com/maps?q=40.312041,-3.8612735&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.312041,-3.8612735',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 507,
	label: '4,7',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:30–16:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '9:30–16:30' },
	{ dia: 'Viernes', horas: '9:30–16:30' },
	{ dia: 'Sábado', horas: '9:30–16:30' },
	{ dia: 'Domingo', horas: '9:30–16:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha, el cartel y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Asador de pollos',
	'Croquetería',
	'Arrocería',
	'Comida casera',
	'Comida para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'Croquetería',
		text: 'Croquetas caseras hechas a mano y combinables: seis unidades por 4,50 €. El cartel lista 23 sabores, del jamón o el rabo de toro al cabrales con plátano, el pulpo a la gallega o el salmón ahumado con Philadelphia.',
	},
	{
		title: 'Asador de pollos',
		text: 'La casa se anuncia como asador de pollos y en el local se ven los pollos asados y las patatas. El cartel de las fotos no publica el precio del pollo: se pregunta por teléfono o al llegar.',
	},
	{
		title: 'Comida casera',
		text: 'La carta cambia cada semana: gazpacho, ensaladilla, tortilla de patata, empanada de pollo o atún, pisto, migas, albóndigas, rabo de toro, callos, fabada, carrillada y platos de pollo, entre otros.',
	},
	{
		title: 'Arrocería',
		text: 'La paella se sirve por raciones a 6,00 € los domingos, y el resto de días por encargo con un mínimo de cuatro personas. El arroz con bogavante cuesta 12,95 € y se pide para dos o más.',
	},
];

/** Platos y precios del cartel y de la vitrina del local. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'del asador; el precio no aparece en las fotos',
			},
		],
	},
	{
		title: 'Croquetería',
		items: [
			{
				name: '6 croquetas caseras',
				note: 'hechas a mano y combinables. Sabores: jamón, pollo, ropa vieja, bacon y queso, morcilla ibérica, rabo de toro, cabrales con plátano, boletus, gambas al ajillo, bacalao, pulpo a la gallega, cecina con puerros, gorgonzola con nueces, roquefort con dátiles, champiñón con jamón, queso idiazábal con avellanas, anchoas y pimientos de piquillo, mejicanas, Tía Justa, queso de cabra y cebolla caramelizada, mejillones, berenjena caramelizada con parmesano y salmón ahumado con queso Philadelphia.',
				price: '4,50 €',
			},
		],
	},
	{
		title: 'Gastronomía casera',
		items: [
			{ name: 'Salmorejo cordobés, cereza, mango o plátano', note: 'receta casera', price: '2,50 €' },
			{ name: 'Gazpacho andaluz', note: 'receta casera', price: '2,95 €' },
			{ name: 'Crema de calabaza, calabacín o champiñón', note: 'cremas caseras', price: '2,00 €' },
			{ name: 'Torreznos de Atienza', note: '2,50 €/ud. en el cartel; 3,00 €/ud. en la etiqueta de la vitrina' },
			{ name: 'Ensaladilla rusa', note: 'de la vitrina', price: '4,95 €' },
			{ name: 'Huevos rellenos de atún', note: 'de la vitrina', price: '3,95 €' },
			{ name: 'Patatas alioli', note: 'de la vitrina', price: '3,25 €' },
			{ name: 'Tortilla de patata', note: 'de la vitrina', price: '5,00 €' },
			{ name: 'Patatas revolconas', note: 'receta casera', price: '3,95 €' },
			{ name: 'Empanada de pollo o atún', note: 'empanada casera', price: '7,95 €' },
			{ name: 'Pimientos fritos', note: 'de la vitrina', price: '3,95 €' },
			{ name: 'Mousaka', note: 'receta casera', price: '4,50 €' },
			{ name: 'Pisto manchego', note: 'receta casera', price: '3,95 €' },
			{ name: 'Migas manchegas', note: 'receta casera', price: '4,50 €' },
			{ name: 'Ensalada campera', note: 'de la vitrina', price: '3,25 €' },
			{ name: 'Ensalada de pasta', note: 'de la vitrina', price: '3,95 €' },
			{
				name: 'Patatas con salsa holandesa y salmón ahumado',
				note: 'receta casera',
				price: '4,50 €',
			},
			{ name: 'Pechuga de pollo a la miel', note: 'receta casera', price: '4,50 €' },
		],
	},
	{
		title: 'Platos y guisos',
		items: [
			{ name: 'Pollo al Teriyaki', note: 'plato de pollo', price: '4,50 €' },
			{ name: 'Alitas barbacoa', note: 'plato de pollo', price: '4,60 €' },
			{ name: 'Fingers de pollo caseros', note: 'rebozado casero', price: '4,95 €' },
			{ name: 'Pechuga Villaroy', note: 'plato de pollo', price: '2,50 €' },
			{ name: 'Albóndigas en salsa', note: 'guiso', price: '4,75 €' },
			{ name: 'Albóndigas a la barbacoa', note: 'guiso', price: '4,75 €' },
			{ name: 'Filetes rusos con tomate', note: 'guiso', price: '4,75 €' },
			{ name: 'Espaguetis de sepia y gambas al ajillo', note: 'pasta', price: '4,95 €' },
			{
				name: 'Lasaña de pollo con champiñón o de ternera',
				note: 'pasta',
				price: '4,25 €',
			},
			{
				name: 'Tortellini a la carbonara, roquefort o boloñesa',
				note: 'pasta',
				price: '3,95 €',
			},
			{ name: 'Tallarines con verduras y salsa de soja', note: 'pasta', price: '3,95 €' },
			{ name: 'Rabo de toro', note: 'guiso', price: '7,50 €' },
			{ name: 'Magro en salsa con champiñones', note: 'guiso', price: '4,50 €' },
			{
				name: 'Solomillo al Pedro Ximénez, cabrales o pimienta',
				note: 'a elegir',
				price: '3,95 €' },
			{ name: 'Carrillada de ternera con salsa de higos', note: 'guiso', price: '6,95 €' },
			{ name: 'Costillar Jack Daniel’s', note: 'plato de carne', price: '7,50 €' },
			{ name: 'Callos a la madrileña o con garbanzos', note: 'guiso', price: '7,50 €' },
			{ name: 'Fabada asturiana', note: 'guiso', price: '6,95 €' },
			{ name: 'Arroz con bogavante', note: 'mínimo 2 personas', price: '12,95 €' },
			{
				name: 'Paella (ración)',
				note: 'domingos y resto de días por encargo, mínimo 4 personas',
				price: '6,00 €',
			},
		],
	},
	{
		title: 'Postres',
		items: [
			{
				name: 'Postre casero',
				note: 'tarta de queso, arroz con leche, tiramisú, tarta Oreo, tarta de queso y arándanos o tarta de la abuela',
				price: '2,50 €',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Ayer pedimos, croquetas ( obvio ) migas, pisto y filetes rusos con tomate.',
		valor: 5,
	},
	{
		texto: 'El pollo y las patatas buenisimos, pero sin duda lo mejor son las croquetas.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Gastronomía Razonable?',
		a: 'En la calle Andrómeda, 48, en Móstoles (28938 Madrid). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica un horario de 9:30 a 16:30 de jueves a lunes. Martes y miércoles figuran cerrados. El Día de Todos los Santos (domingo 1 de noviembre) la ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pollo asado, croquetas caseras, arroces y platos de comida casera para llevar: guisos, tortilla, empanada, ensaladilla, pastas, carnes y postres. La carta cambia cada semana.',
	},
	{
		q: '¿Cuántas croquetas entran en una ración?',
		a: 'El cartel anuncia seis unidades por 4,50 €, combinables entre los 23 sabores. Se pueden mezclar los sabores como se quiera.',
	},
	{
		q: '¿Qué sabores de croqueta hay?',
		a: 'Jamón, pollo, ropa vieja, bacon y queso, morcilla ibérica, rabo de toro, cabrales con plátano, boletus, gambas al ajillo, bacalao, pulpo a la gallega, cecina con puerros, gorgonzola con nueces, roquefort con dátiles, champiñón con jamón, queso idiazábal con avellanas, anchoas y pimientos de piquillo, mejicanas, Tía Justa, queso de cabra y cebolla caramelizada, mejillones, berenjena caramelizada con parmesano y salmón ahumado con queso Philadelphia.',
	},
	{
		q: '¿Cuánto cuesta el pollo asado?',
		a: 'La ficha y el cartel de las fotos no publican el precio del pollo asado. La casa se anuncia como asador de pollos y en el local se ven los pollos y las patatas, pero el importe hay que preguntarlo en el teléfono 912 39 02 71.',
	},
	{
		q: '¿Cómo funciona la paella?',
		a: 'La ración de paella cuesta 6,00 € y se sirve los domingos. El resto de días se hace por encargo con un mínimo de cuatro personas. El arroz con bogavante cuesta 12,95 € y se pide para dos o más.',
	},
	{
		q: '¿Los torreznos cuestan 2,50 € o 3,00 €?',
		a: 'Hay dos referencias en las fotos: el cartel marca 2,50 € por unidad y la etiqueta de la vitrina, 3,00 €. La web no elige por su cuenta; conviene confirmar el precio al pedir.',
	},
	{
		q: '¿La carta es fija?',
		a: 'No. El propio cartel avisa de que los platos varían todas las semanas. Esta página recoge los que aparecen en el cartel y la vitrina fotografiados en octubre de 2026, no una lista cerrada.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono en el 912 39 02 71 o en el propio local. La ficha no publica página web, pedido online ni una carta con todos los precios. No consta reparto a domicilio.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Ni la ficha de Google ni el cartel del local publican reparto a domicilio, zona de reparto ni pedido mínimo. Lo que aparece es la comida para llevar y el teléfono. Pregunta al llamar si necesitas entrega.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo marca que no hay aparcamiento adaptado ni asientos adaptados para sillas de ruedas. No publica datos sobre el acceso, el interior o los aseos. Si necesitas una condición concreta, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 507 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian el pollo, las patatas y, sobre todo, las croquetas.',
	},
];
