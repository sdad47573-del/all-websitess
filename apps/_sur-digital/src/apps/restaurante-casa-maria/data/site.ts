/**
 * Datos de Restaurante Casa Maria — Camí Foyes Ferraes, s/n, 12110 l'Alcora,
 * Castellón.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Casa Maria», 40,0519488 /
 *   -0,1702011, feature 0xd5fe36864c51eb9:0xc6073760c7b77bf (categorías,
 *   teléfono, horario, nota, reseñas, accesibilidad y fotos del perfil).
 * - Reseñas publicadas en la ficha de Google.
 * - Fichas gastronómicas locales (menú del día, platos citados, terraza y
 *   celebraciones), que se usan solo como orientación.
 *
 * La ficha no publica una carta con precios: los platos se apoyan en lo que
 * citan las reseñas y en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Restaurante Casa Maria',
	shortName: 'Casa Maria',
	mark: 'CM',
	street: "Cam. Foyes Ferraes, s/n",
	city: "l'Alcora",
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	postalCode: '12110',
	country: 'ES',
	phoneDisplay: '964 36 78 35',
	phoneHref: 'tel:+34964367835',
	rating: 4.1,
	reviewsCount: 378,
	siteUrl: 'https://www.sur-digital.com/restaurante-casa-maria',
	geo: { lat: 40.0519488, lng: -0.1702011 },
	featureId: '0xd5fe36864c51eb9:0xc6073760c7b77bf',
	placeId: 'ChIJuR7FZGjjXw0Rv3d7DHZzYAw',
	cid: '891839677072111551',
	/** Categorías con las que Google describe el local. */
	categories: ['Restaurante de cocina española', 'Restaurante mediterráneo'],
	tagline: 'Comida casera de lunes a viernes en el polígono de l\'Alcora',
	description:
		"Restaurante Casa Maria, cocina casera española y mediterránea en el Camí Foyes Ferraes del polígono de l'Alcora (Castellón): desayunos, almuerzos y menú del día de lunes a viernes. 4,1 en Google con 378 reseñas. Tel. 964 36 78 35.",
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Casa+Maria/@40.0519488,-0.1702011,17z/data=!3m1!4b1!4m6!3m5!1s0xd5fe36864c51eb9:0xc6073760c7b77bf!8m2!3d40.0519488!4d-0.1702011!16s%2Fg%2F11dxs9xdb5',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.0519488%2C-0.1702011',
	embed: 'https://maps.google.com/maps?q=40.0519488,-0.1702011&z=17&hl=es&output=embed',
} as const;

/** Horario publicado en la ficha de Google: solo de lunes a viernes. */
export const HOURS = [
	{ day: 'Lunes', value: '08:00–17:00' },
	{ day: 'Martes', value: '08:00–17:00' },
	{ day: 'Miércoles', value: '08:00–17:00' },
	{ day: 'Jueves', value: '08:00–17:00' },
	{ day: 'Viernes', value: '08:00–17:00' },
	{ day: 'Sábado', value: 'Cerrado', closed: true },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseña publicada en la ficha de Google Maps. */
export const REVIEWS = [
	'Canelon de codillo, Fideua y tarda de queso casera al horno.',
];

/** Señas de identidad que constan en las fuentes públicas. */
export const SERVICIOS = [
	'Cocina casera',
	'Cocina española',
	'Cocina mediterránea',
	'Menú del día',
	'Almuerzos',
	'Desayunos',
	'Postres caseros',
	'Terraza',
	'Accesible',
];

export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Canelón de codillo', note: 'el plato que cita una reseña de Google' },
			{ name: 'Fideuá', note: 'con su punto de marisco, al horno o a la sartén' },
			{ name: 'Ensalada con ventresca', note: 'tomate, lechuga y aceite de oliva' },
			{ name: 'Pisto con huevo y jamón', note: 'verdura cocinada despacio, con huevo frito' },
		],
	},
	{
		title: 'Del horno y la brasa',
		items: [
			{ name: 'Cochinillo asado', note: 'el asado de las fotos, para las comidas de grupo' },
			{ name: 'Codillo asado', note: 'con su jugo, patatas y pimiento rojo' },
			{ name: 'Secreto a la plancha', note: 'una de las carnes de la casa, hecha a la plancha' },
			{ name: 'Berenjena frita con miel', note: 'en rodajas, crujiente y con semillas de girasol' },
		],
	},
	{
		title: 'El menú del día',
		items: [
			{ name: 'Primero y segundo', note: 'varias opciones para elegir cada día' },
			{ name: 'Pan y bebida', note: 'incluidos en el menú' },
			{ name: 'Postre casero', note: 'la tarta de queso al horno es la más citada' },
			{ name: 'Café', note: 'para cerrar la comida antes de volver al trabajo' },
		],
	},
	{
		title: 'Almuerzos y barra',
		items: [
			{ name: 'Bocadillos', note: 'para el almuerzo de media mañana' },
			{ name: 'Raciones', note: 'para compartir en la mesa o en la barra' },
			{ name: 'Tomate de la huerta', note: 'con aceite, para acompañar' },
			{ name: 'Menús de grupo', note: 'para comidas de empresa y celebraciones' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Tarta de queso al horno', note: 'casera, con un hilo de salsa de frutos rojos' },
			{ name: 'Postres de la casa', note: 'elaborados en cocina, no industriales' },
			{ name: 'Café y carajillo', note: 'para la sobremesa' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Casa Maria?',
		a: "En el Camí Foyes Ferraes, s/n, dentro del polígono industrial de l'Alcora (12110 Castellón). El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.",
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 08:00 a 17:00 y cierra sábados y domingos. Es un horario pensado para desayunos, almuerzos y comidas de mediodía, así que la cocina puede cerrar antes de las 17:00. Confirma por teléfono si vas a última hora.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'Se reserva por teléfono, en el 964 36 78 35. En días laborables el servicio es rápido y hay bastante rotación de mesas, pero si vais un grupo grande o queréis celebrar una comida conviene llamar con antelación.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina casera española y mediterránea: menú del día con primero, segundo, pan, bebida, postre y café, además de platos como el canelón de codillo, la fideuá, ensaladas con tomate de la huerta y postres caseros como la tarta de queso al horno. También hay almuerzos y bocadillos.',
	},
	{
		q: '¿Cuánto cuesta el menú?',
		a: 'La ficha de Google no publica el precio y esta web no lo inventa. Las fichas gastronómicas locales lo sitúan alrededor de 14,50 €, pero puede cambiar; llama al 964 36 78 35 para confirmar qué incluye y cuánto cuesta ese día.',
	},
	{
		q: '¿Se pueden celebrar comidas de grupo?',
		a: 'El local tiene un espacio amplio y admite reservas para grupos; las reseñas mencionan comidas de empresa y celebraciones familiares. Llama al 964 36 78 35 para acordar menú, número de comensales y hora.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, el restaurante dispone de terraza. Al estar en un polígono, es un espacio tranquilo para comer fuera cuando hace buen tiempo. Si quieres mesa en la terraza, pídela al reservar.',
	},
	{
		q: '¿Es accesible y se puede aparcar?',
		a: 'La ficha de Google marca acceso, aseo y asientos adaptados para sillas de ruedas. Está dentro del polígono, en una zona de naves con calles amplias, así que aparcar suele ser sencillo; confirma la entrada concreta al llamar.',
	},
];
