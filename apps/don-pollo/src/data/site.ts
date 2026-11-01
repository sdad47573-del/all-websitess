/**
 * Datos de DON POLLO — C. la Sirena Varada, 41013 Sevilla.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Don Pollo», 37.3617984,-5.9677116,
 *   feature 0xd126e89f4a6b563:0x2b33cb67cc2234a1.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas,
 *   accesibilidad y galería: ficha pública de Google consultada en octubre de 2026.
 * - Carta y precios: las fotos de la carta publicadas en esa misma ficha (la
 *   pizarra del local y el tríptico impreso). Pueden haber cambiado.
 *
 * Lo que la ficha NO publica: página web propia, redes sociales, reservas ni
 * pedidos online. La web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'Don Pollo',
	fullName: 'DON POLLO',
	shortName: 'Don Pollo',
	mark: 'DP',
	street: 'C. la Sirena Varada',
	district: 'Sevilla',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41013',
	country: 'ES',
	siteUrl: 'https://don-pollo.vercel.app',
	geo: { lat: 37.3617984, lng: -5.9677116 },
	featureId: '0xd126e89f4a6b563:0x2b33cb67cc2234a1',
	placeId: 'ChIJY7Wm9IluEg0RoTQizGfLMys',
	plusCode: '8C9P926J+PW',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '955 09 52 78',
	phoneHref: 'tel:+34955095278',
	tagline: 'Pollo, kebab y pizza hasta las 2:00',
	description:
		'Don Pollo, en C. la Sirena Varada (41013 Sevilla). Pollo, empanados, kebab, pizzas, hamburguesas y papas asadas hasta las 2:00, con pedidos a domicilio.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Don+Pollo/@37.3617984,-5.9677116,17z/data=!4m6!3m5!1s0xd126e89f4a6b563:0x2b33cb67cc2234a1!8m2!3d37.3617984!4d-5.9677116!16s%2Fg%2F11bzz1v9jd?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3617984%2C-5.9677116',
	embed: 'https://maps.google.com/maps?q=37.3617984,-5.9677116&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3617984,-5.9677116',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.3,
	count: 51,
	label: '4,3',
};

/** Horario de la ficha: cocina de noche, todos los días menos el domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '21:00–02:00' },
	{ dia: 'Martes', horas: '21:00–02:00' },
	{ dia: 'Miércoles', horas: '21:00–02:00' },
	{ dia: 'Jueves', horas: '21:00–02:00' },
	{ dia: 'Viernes', horas: '21:00–02:00' },
	{ dia: 'Sábado', horas: '21:00–02:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que anuncia la carta y la ficha. */
export const SERVICIOS = [
	'Pollo',
	'Empanados',
	'Kebab',
	'Pizzas',
	'Papas asadas',
	'Pedidos a domicilio',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo, empanados y pepitos',
		text: 'El pollo es la casa: empanado, pepito, serranito o tortilla, casi todos con patatas y bebida. La carta que cuelga de la pared morada lo deja claro desde la puerta.',
	},
	{
		title: 'Pizzas de un solo tamaño',
		text: 'La carta las fija en 5 € —5,50 € con borde de queso— y ofrece veinte combinaciones: de la Margarita a la Don Pollo con beicon, pollo y champiñones.',
	},
	{
		title: 'Las papas asadas',
		text: 'Cuatro versiones numeradas, de la Nº4 con atún, alioli y jamón york (3,50 €) a la Nº1 con maíz, pollo, huevo y pimiento frito (6 €).',
	},
	{
		title: 'Cocina hasta las 2:00',
		text: 'Abre todas las noches de 21:00 a 2:00 y descansa el domingo. La carta anuncia reparto a domicilio con 1,50 € de recargo y un pedido mínimo de 10 €.',
	},
];

/** Solo lo que aparece en la carta fotografiada; los precios son los suyos. */
export const MENU = [
	{
		title: 'Pollo y empanados',
		items: [
			{
				name: 'Empanado de pollo',
				note: 'pollo, lechuga, tomate, patatas y bebida · 2,50 €',
			},
			{
				name: 'Pepito de pollo',
				note: 'pollo, lechuga, tomate y bebida · 2,50 €',
			},
			{
				name: 'Serranito de pollo',
				note: 'pollo, patatas, tortilla, pimiento, jamón y lechuga · 3,00 €',
			},
			{
				name: 'Tortilla',
				note: 'pollo, jamón york, queso, lechuga, tomate, patatas y beicón, con bebida · 3,50 €',
			},
			{
				name: 'Baguette',
				note: 'filete de pollo, lechuga, tomate, jamón york, queso y mahonesa · 4,00 €',
			},
		],
	},
	{
		title: 'Hamburguesas y perritos',
		items: [
			{
				name: 'Hamburguesa',
				note: 'beicon, huevo, lechuga, tomate y bebida · 3,00 €',
			},
			{
				name: 'Hamburguesa con queso',
				note: 'queso, beicon, lechuga, tomate y bebida · 2,80 €',
			},
			{
				name: 'Crujiente',
				note: 'con patatas fritas · 3,50 €',
			},
			{
				name: 'Hamburguesa de buey',
				note: '200 g, beicon, huevo, lechuga, tomate y bebida · 4,50 €',
			},
			{
				name: 'Perrito',
				note: '1,50 €',
			},
		],
	},
	{
		title: 'Pizzas, un solo tamaño',
		items: [
			{
				name: 'Don Pollo',
				note: 'tomate, beicon, jamón york, pollo, champiñones y queso · 5,00 €',
			},
			{
				name: 'Margarita',
				note: 'jamón york, tomate y queso · 5,00 €',
			},
			{
				name: 'Borde de queso',
				note: '5,50 €',
			},
			{
				name: 'Y veinte más',
				note: 'Mediterránea, Rápida, Cuatro, Sorrento, Sicilia, Diablo, Ranchera, Pobre, Especial, Fabulosa, Súper, Cerillo, Campesina, La Jitana, Yanira, Arabia, Diego, Nacho…',
			},
		],
	},
	{
		title: 'Kebab y papas asadas',
		items: [
			{
				name: 'Kebab',
				note: 'con patatas y bebida; diez variantes, también con arroz',
			},
			{
				name: 'Papa asada Nº1',
				note: 'maíz, huevo, pollo, queso, atún, jamón york, alioli, pimiento frito y tomate · 6,00 €',
			},
			{
				name: 'Papa asada Nº2',
				note: 'maíz, jamón york, huevo, tomate, alioli y queso · 4,50 €',
			},
			{
				name: 'Papa asada Nº3',
				note: 'maíz, queso, jamón york, atún, tomate y alioli · 4,00 €',
			},
			{
				name: 'Papa asada Nº4',
				note: 'maíz, alioli, tomate, atún y jamón york · 3,50 €',
			},
		],
	},
	{
		title: 'Para picar',
		items: [
			{
				name: 'Tapas',
				note: 'champiñón de la casa, nuggets, ensaladilla, patatas, alitas o lomo · 2,00 €',
			},
			{
				name: 'Sándwich',
				note: '2,50 €',
			},
			{
				name: 'Panini',
				note: 'queso y jamón york, o queso y beicón · 1,50 €',
			},
			{
				name: 'Bolitas de queso',
				note: 'con patatas · 2,50 €',
			},
		],
	},
];

/** Las tres reseñas que publica la ficha, tal cual, también las tibias. */
export const RESENAS = [
	{
		texto: 'Buena comida servicio rápido y precios muy buenos todo muy limpio lo recomiendo',
		valor: 5,
	},
	{
		texto: 'Bueno tiene un buen servicio de comida rápida el típico empanado del barrio',
		valor: 3,
	},
	{
		texto: 'No esta mal barato y rapido',
		valor: 2,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Don Pollo?',
		a: 'En la calle la Sirena Varada, 41013 Sevilla. El mapa de esta página abre las coordenadas exactas (37.3617984, -5.9677116) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 21:00 a 2:00 de lunes a sábado, con el domingo cerrado. El domingo 1 de noviembre la propia ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La carta de la ficha incluye pollo y empanados (empanado, pepito, serranito, tortilla, baguette), hamburguesas y perritos, pizzas de un solo tamaño, kebab, papas asadas numeradas, tapas, sándwiches, paninis y bolitas de queso.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La carta anuncia «Pedidos a domicilio» con un recargo de 1,50 € y un pedido mínimo de 10 €. La ficha no publica pedidos online: se piden por teléfono, en el 955 09 52 78.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Según la carta fotografiada, los paninis y perritos están en 1,50 €, las tapas en 2,00 €, las pizzas en 5 € (5,50 € con borde de queso) y las papas asadas van de 3,50 € a 6 €. Los precios pueden haber cambiado; confírmalos al pedir.',
	},
	{
		q: '¿Hay carta o pedidos online?',
		a: 'No consta. La ficha no enlaza página web propia ni redes sociales, y esta página es solo informativa: no permite pedir ni reservar. La carta completa está en las fotos de la ficha y en el local.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo marca un dato de accesibilidad: no hay aparcamiento adaptado para sillas de ruedas. No publica información sobre acceso, asientos ni aseos adaptados, así que conviene llamar antes si lo necesitas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 4,3 sobre 5 con 51 reseñas en el momento de consultar la ficha (octubre de 2026). Las opiniones destacan el servicio rápido, los precios, la limpieza y el empanado del barrio.',
	},
];
