/**
 * Datos de Cinecom Santa Inés — C. Tamayo y Baus, 20
 * (Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Cinecom Santa Inés»,
 *   36.7261514,-4.466569, feature 0xd72f73bc4504d55:0x7130e2d24cf5f186.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, accesibilidad
 *   y reseñas: ficha pública de Google consultada en octubre de 2026.
 *
 * A pesar del nombre, la ficha NO lo clasifica como cine: es hamburguesería,
 * restaurante americano, cafetería, restaurante de comida rápida, pizzería y
 * restaurante. No publica cartelera, sesiones ni página web. La web no inventa
 * esos datos. Los platos que se citan son los que nombran las reseñas.
 */

export const BUSINESS = {
	name: 'Cinecom Santa Inés',
	fullName: 'Cinecom Santa Inés',
	shortName: 'Cinecom',
	mark: 'CS',
	street: 'C. Tamayo y Baus, 20',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/cinecom-santa-ines',
	geo: { lat: 36.7261514, lng: -4.466569 },
	featureId: '0xd72f73bc4504d55:0x7130e2d24cf5f186',
	placeId: 'ChIJVU1QxDv3cg0RhvH1TNLiMHE',
	plusCode: '8C8QPGGM+F9',
	googleCategory: 'Hamburguesería',
	phone: '951 02 44 84',
	phoneHref: 'tel:+34951024484',
	tagline: 'Hamburguesas, camperos y pizzas en Teatinos',
	description:
		'Cinecom Santa Inés, en la calle Tamayo y Baus, 20 (Teatinos-Universidad, 29010 Málaga). Hamburguesería y restaurante americano con camperos, kebabs, pizzas, raciones y desayunos, de lunes a domingo.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cinecom+Santa+In%C3%A9s/@36.7261514,-4.466569,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73bc4504d55:0x7130e2d24cf5f186!8m2!3d36.7261514!4d-4.466569!16s%2Fg%2F11cm0fgs8h?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7261514%2C-4.466569',
	embed: 'https://maps.google.com/maps?q=36.7261514,-4.466569&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7261514,-4.466569',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.2,
	count: 870,
	label: '4,2',
};

/** Horario que publica la ficha: desayunos y dos turnos de noche. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:00–12:00' },
	{ dia: 'Martes', horas: '8:00–12:00' },
	{ dia: 'Miércoles', horas: '8:00–12:00 · 20:00–24:00' },
	{ dia: 'Jueves', horas: '8:00–12:00 · 20:00–24:00' },
	{ dia: 'Viernes', horas: '8:00–12:00 · 20:00–24:00' },
	{ dia: 'Sábado', horas: '8:00–12:00 · 20:00–24:00' },
	{ dia: 'Domingo', horas: '8:00–12:00 · 20:00–24:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Hamburguesas',
	'Camperos',
	'Pepitos',
	'Serranitos',
	'Pizzas artesanas',
	'Papas asadas',
	'Desayunos',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'La pizarra manda',
		text: 'En la pared del local, una pizarra enorme enumera lo que se puede pedir: camperos, shawarma, delicias para compartir, pizzas artesanas, hamburguesas, combinaos, pepitos, papas asadas, platos combinados e infantiles.',
	},
	{
		title: 'Pizzas artesanas',
		text: 'La pizarra las anuncia como «pizzas artesanas» y una reseña las describe como «muy buenas y cargadas de contenido». Las raciones, según otra opinión, son «abundantes y ricas».',
	},
	{
		title: 'Desayunos hasta las 12',
		text: 'El local abre a las 8:00 y sirve desayunos hasta el mediodía. Una reseña destaca que son «muy baratos». En las fotos aparecen la tostada con tomate, el café con leche y la tortilla.',
	},
	{
		title: 'Un local de cine',
		text: 'El nombre se nota en la decoración: fotos de cine en la pared, un osito gigante, una cabina telefónica roja llena de bolas y mesas verdes. Es un local de barrio con guiños de sala de cine, no una sala de proyección.',
	},
];

/** Solo lo que nombran las reseñas y las categorías de la ficha. */
export const MENU = [
	{
		title: 'Hamburguesas y bocadillos',
		items: [
			{
				name: 'Hamburguesa',
				note: 'la ficha clasifica el local como hamburguesería y la pizarra del mural la incluye en la carta',
			},
			{
				name: 'Campero',
				note: 'la pizarra lo anuncia y una de las reseñas lo nombra: «el campero de pollo seco y sin sabor»',
			},
			{
				name: 'Pepito',
				note: 'aparece en la pizarra del local, junto a los combinaos y los serranitos',
			},
			{
				name: 'Serranito',
				note: 'la pizarra lo escribe en la lista de bocadillos de la casa',
			},
			{
				name: 'Shawarma',
				note: 'la pizarra lo coloca entre los camperos y las delicias para compartir',
			},
		],
	},
	{
		title: 'Pizzas y para compartir',
		items: [
			{
				name: 'Pizzas artesanas',
				note: '«pizzas muy buenas y cargadas de contenido», según una reseña; así las anuncia la pizarra',
			},
			{
				name: 'Papas asadas',
				note: 'la pizarra las destaca en un círculo y en la galería aparece una patata asada con jamón, maíz, aceitunas y salsa',
			},
			{
				name: 'Delicias para compartir',
				note: 'la pizarra agrupa bajo ese nombre las raciones; una reseña las describe como «abundantes y ricas»',
			},
		],
	},
	{
		title: 'Platos y desayunos',
		items: [
			{
				name: 'Platos combinados',
				note: 'la pizarra los anuncia junto a los combinaos y los menús infantiles',
			},
			{
				name: 'Combinados',
				note: 'la pizarra escribe «combinaos» entre las opciones de la casa',
			},
			{
				name: 'Menú infantil',
				note: 'la pizarra incluye «infantiles»; la ficha no publica ni el detalle ni el precio',
			},
			{
				name: 'Tostada con tomate',
				note: 'aparece en las fotos del desayuno, junto al café con leche',
			},
			{
				name: 'Tortilla',
				note: 'en la galería del local se ve una tortilla gruesa recién hecha',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Raciones abundantes y ricas, pizzas muy buenas y cargadas de contenido',
		valor: 4,
	},
	{
		texto: 'Además de camperos, hamburguesas y kebabs ponen desayunos muy baratos.',
		valor: 3,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cinecom Santa Inés?',
		a: 'En la calle Tamayo y Baus, 20, en el barrio de Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Es un cine?',
		a: 'No. A pesar del nombre, la ficha de Google lo clasifica como hamburguesería, restaurante americano, cafetería, restaurante de comida rápida, pizzería y restaurante. No publica cartelera, sesiones ni sala de proyección.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica desayunos de 8:00 a 12:00 todos los días. Miércoles, jueves, viernes, sábado y domingo vuelve a abrir de 20:00 a 24:00. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Las categorías de Google hablan de hamburguesería, restaurante americano, cafetería, comida rápida y pizzería. La pizarra del local anuncia camperos, shawarma, pizzas artesanas, hamburguesas, pepitos, serranitos, papas asadas, combinaos, platos combinados e infantiles. La carta completa y los precios no están publicados en Google.',
	},
	{
		q: '¿Hay menú infantil?',
		a: 'La pizarra del local incluye «infantiles» entre sus opciones, junto a los platos combinados y los combinaos. La ficha de Google no publica el detalle ni el precio del menú infantil; se consulta por teléfono.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Una de las reseñas destaca las «raciones abundantes» y los «desayunos muy baratos». Para saber precios y disponibilidad, lo mejor es llamar al 951 02 44 84.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. El local abre a las 8:00 y la ficha marca el cierre de la mañana a las 12:00. Una de las reseñas destaca los desayunos «muy baratos».',
	},
	{
		q: '¿Se puede reservar o pedir para llevar?',
		a: 'La ficha no publica reservas ni pedidos online. El único canal que aparece es el teléfono del local, el 951 02 44 84.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas, el aseo adaptado y los asientos adaptados. Indica que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,2 sobre 5 con 870 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian las raciones, las pizzas y los desayunos.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
