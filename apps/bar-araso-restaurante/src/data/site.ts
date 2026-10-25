/**
 * Datos de Bar Araso Restaurante — Erregeoiana Kalea, 3 (20305 Irun, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar Araso Restaurante»,
 *   43.3242387,-1.8371201, feature 0xd51a716d01fee71:0x8757edaa9826815d
 *   (dirección, teléfono, horario, categoría, nota, reseñas y accesibilidad).
 *   Google escribe la calle como «Erregeoiana K., 3»; aquí se despliega el
 *   «K.» como «Kalea», que es lo que significa en euskera.
 * - Descripción que el propio establecimiento publica en esa ficha:
 *   desayunos, variedad de pinchos, platos combinados, bocadillos y menú del día.
 * - Reseñas publicadas en esa ficha: menú casero con raciones grandes, tarta de
 *   queso, hamburguesa y bocatas.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que la
 * sección de la carta resume lo que anuncian su descripción y sus reseñas.
 */

export const BUSINESS = {
	name: 'Bar Araso Restaurante',
	shortName: 'Araso',
	mark: 'BA',
	street: 'Erregeoiana Kalea, 3',
	city: 'Irun',
	municipality: 'Irun',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20305',
	country: 'ES',
	phoneDisplay: '943 58 06 69',
	phoneHref: 'tel:+34943580669',
	rating: 4.3,
	reviewsCount: 62,
	siteUrl: 'https://bar-araso-restaurante.vercel.app',
	geo: { lat: 43.3242387, lng: -1.8371201 },
	featureId: '0xd51a716d01fee71:0x8757edaa9826815d',
	placeId: 'ChIJce4f0BanUQ0RXYEmmKrtV4c',
	cid: '9752524835046981981',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Araso+Restaurante/@43.3242387,-1.8371201,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a716d01fee71:0x8757edaa9826815d!8m2!3d43.3242387!4d-1.8371201!16s%2Fg%2F11ny5kh_9y',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3242387%2C-1.8371201',
	embed: 'https://maps.google.com/maps?q=43.3242387,-1.8371201&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: de lunes a viernes, de 7:00 a 17:00. Cierra
 * sábados y domingos, como corresponde a un bar de jornada laboral.
 */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–17:00' },
	{ day: 'Martes', value: '7:00–17:00' },
	{ day: 'Miércoles', value: '7:00–17:00' },
	{ day: 'Jueves', value: '7:00–17:00' },
	{ day: 'Viernes', value: '7:00–17:00' },
	{ day: 'Sábado', value: 'Cerrado' },
	{ day: 'Domingo', value: 'Cerrado' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Hemos comido el menú y estaba muy rico, comida casera y las raciones grandes.',
	},
	{ rating: 5, text: 'La tarta de queso no la probé, pero tenía una pinta exquisita.' },
	{ rating: 4, text: 'La hamburguesa fenomenal y los bocatas increíbles.' },
] as const;

/**
 * Categoría y servicios que constan: Google lo clasifica como restaurante, la
 * ficha marca acceso, aparcamiento y asientos adaptados, y su descripción
 * anuncia desayunos, pinchos, platos combinados, bocadillos y menú del día.
 */
export const SERVICIOS = [
	'Restaurante y taberna',
	'Desayunos',
	'Menú del día',
	'Comida casera',
	'Variedad de pinchos',
	'Platos combinados',
	'Bocadillos',
	'Raciones',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
	'Asientos adaptados',
] as const;

/**
 * Carta: la ficha no publica carta. Los platos salen de la descripción del
 * establecimiento, de las reseñas publicadas y de lo que muestran sus fotos.
 */
export const MENU = [
	{
		title: 'El menú del día',
		items: [
			{
				name: 'Menú del día',
				note: 'comida casera y raciones grandes, según las reseñas; cambia cada día',
			},
			{ name: 'Tarta de queso', note: 'citada en las reseñas y en la galería del bar' },
			{
				name: 'Helado con nata y frutos rojos',
				note: 'postre de la casa, en sus fotos',
			},
		],
	},
	{
		title: 'Platos combinados',
		items: [
			{
				name: 'Plato de lomo',
				note: '12,00 € · lomo adobado con patatas fritas, ensalada y dos huevos',
			},
			{
				name: 'Plato de pechuga',
				note: '12,00 € · pechugas de pollo con patatas fritas, ensalada y dos huevos',
			},
			{
				name: 'Plato churrasco',
				note: '12,50 € · churrasco de ternera con patatas fritas, ensalada y huevo frito',
			},
			{
				name: 'Plato cachopo',
				note: '13,25 € · cachopo de ternera con pimientos, patatas fritas, huevo frito y ensalada',
			},
		],
	},
	{
		title: 'Raciones y pintxos',
		items: [
			{ name: 'Rabas', note: '8,00 €, según su carta' },
			{ name: 'Croquetas', note: '8,00 €, según su carta' },
			{ name: 'Bravas', note: '6,00 €, según su carta' },
			{ name: 'Mini de cachopo', note: '3,50 € · con pimiento verde, según su carta' },
			{ name: 'Tortilla de patata', note: '3,00 € · el clásico pintxo, según su carta' },
		],
	},
	{
		title: 'Bocadillos y ensaladas',
		items: [
			{
				name: 'Bocadillo de cachopo, bacon, queso y pimientos',
				note: '8,00 €, según su carta',
			},
			{
				name: 'Bocadillo de lomo, queso, bacon y pimientos',
				note: '7,50 €, según su carta',
			},
			{ name: 'Bocadillo vegetal de atún', note: '7,00 €, según su carta' },
			{
				name: 'Ensalada de tomate',
				note: '10,00 € · tomate del país, ventresca, piparra y cebolla morada',
			},
			{ name: 'Ensalada mixta', note: '9,50 €, según su carta' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está Bar Araso Restaurante?',
		a: 'En Erregeoiana Kalea, 3, en el 20305 Irun (Gipuzkoa), en el edificio del Tanatorio Araso, con terraza en la entrada y aparcamiento. El mapa de esta página lleva directo al bar y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes, de 7:00 a 17:00, y cierra sábados y domingos. Es el horario que publica su ficha de Google y sigue la jornada laboral, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. El bar anuncia menú del día con comida casera, y sus reseñas destacan que las raciones son grandes. La ficha de Google no publica el precio del menú, así que el de hoy se consulta llamando al 943 58 06 69.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Según su descripción: desayunos, variedad de pinchos, platos combinados, bocadillos y menú del día. Su carta añade raciones como rabas, croquetas o bravas, platos combinados de lomo, pechuga, churrasco y cachopo, y ensaladas de tomate y mixta. Las reseñas destacan la tarta de queso.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La carta que aparece en sus fotos pone los platos combinados entre 12,00 y 13,25 €, los bocadillos entre 6,50 y 8,00 €, las raciones entre 6,00 y 8,00 €, los pintxos entre 3,00 y 3,50 € y las ensaladas entre 9,50 y 10,00 €. El precio del menú del día no consta en la ficha de Google.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí, el bar abre a las 7:00 de lunes a viernes y anuncia desayunos entre sus servicios.',
	},
	{
		q: '¿Se puede aparcar?',
		a: 'Sí. La ficha de Google marca aparcamiento adaptado para sillas de ruedas, además de acceso y asientos adaptados.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 58 06 69. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,3 sobre 5 con 62 reseñas en Google. Las publicadas hablan de comida casera, raciones grandes, una hamburguesa «fenomenal» y unos bocatas «increíbles».',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
