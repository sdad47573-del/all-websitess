/**
 * Datos de La Terrasse Lucien — Av. d'Encamp, 25, Pas de la Casa (AD200).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «La Terrasse Lucien», 42.5405832,1.7337715,
 *   feature 0x12af7d65ff0891f5:0x98660615845dde56.
 * - Nombre, dirección, teléfono, categorías, valoración, horario y accesibilidad:
 *   respuesta pública de la ficha de Google consultada el 1 de noviembre de 2026
 *   (4,2 · 419 reseñas).
 *
 * Avisos importantes:
 * - Google la clasifica como «Restaurante francés» y «Restaurante». La ficha no
 *   publica carta ni precios: la web no los inventa.
 * - Abre todos los días de 10:00 a 22:00. La ficha avisa de que el Día de Todos
 *   los Santos (1 de noviembre) el horario podría ser distinto.
 */

export const BUSINESS = {
	name: "La Terrasse Lucien",
	fullName: "La Terrasse Lucien",
	shortName: "La Terrasse Lucien",
	mark: "L",
	street: "Av. d'Encamp, 25",
	district: "Pas de la Casa",
	city: "Pas de la Casa",
	region: "Andorra",
	postalCode: "AD200",
	country: "AD",
	siteUrl: "https://www.sur-digital.com/la-terrasse-lucien",
	geo: { lat: 42.5405832, lng: 1.7337715 },
	featureId: "0x12af7d65ff0891f5:0x98660615845dde56",
	placeId: "ChIJ9ZEI_2V9rxIRVt5dhBUGZpg",
	googleCategory: "Restaurante francés",
	phone: "+376 856 528",
	phoneHref: "tel:+376856528",
	tagline: "Restaurante francés en Pas de la Casa",
	description:
		"La Terrasse Lucien, en la Av. d'Encamp, 25, de Pas de la Casa (AD200), Andorra. Restaurante francés con 4,2 sobre 5 y 419 reseñas en Google. Abre todos los días de 10:00 a 22:00. Teléfono +376 856 528.",
};

export const MAPS = {
	place:
		"https://www.google.com/maps/place/La+Terrasse+Lucien/@42.5405832,1.7337715,17z/data=!4m6!3m5!1s0x12af7d65ff0891f5:0x98660615845dde56!8m2!3d42.5405832!4d1.7337715!16s%2Fg%2F11gxssq67r?authuser=0&hl=es&entry=ttu",
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: "https://www.google.com/maps/dir/?api=1&destination=42.5405832%2C1.7337715",
	embed: "https://maps.google.com/maps?q=42.5405832,1.7337715&z=17&hl=es&output=embed",
	streetView: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5405832,1.7337715",
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.2,
	count: 419,
	label: "4,2",
};

/** Horario que publica la ficha: todos los días de 10:00 a 22:00. */
export const HORARIO = [
	{ dia: "Lunes", horas: "10:00–22:00" },
	{ dia: "Martes", horas: "10:00–22:00" },
	{ dia: "Miércoles", horas: "10:00–22:00" },
	{ dia: "Jueves", horas: "10:00–22:00" },
	{ dia: "Viernes", horas: "10:00–22:00" },
	{ dia: "Sábado", horas: "10:00–22:00" },
	{ dia: "Domingo", horas: "10:00–22:00" },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	"La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto.";

export const SERVICIOS = [
	"Restaurante francés",
	"Pas de la Casa",
	"Abierto de 10:00 a 22:00",
	"Acceso para sillas de ruedas",
	"4,2 en Google",
];

export const HIGHLIGHTS = [
	{
		title: "Cocina francesa",
		text: "Google la clasifica como «Restaurante francés». La ficha no publica carta ni precios, así que el detalle de los platos se consulta por teléfono o en el local.",
	},
	{
		title: "Abierto todo el día",
		text: "Abre de 10:00 a 22:00 todos los días de la semana, según la ficha de Google.",
	},
	{
		title: "En Pas de la Casa",
		text: "Está en la Av. d'Encamp, 25, en Pas de la Casa (AD200), en la zona de esquí y tiendas de la parroquia de Encamp.",
	},
	{
		title: "419 opiniones",
		text: "La ficha reúne 419 reseñas con una media de 4,2 sobre 5 (noviembre de 2026). Es una muestra amplia, con opiniones de todo tipo.",
	},
];

export const FAQ = [
	{
		q: "¿Dónde está La Terrasse Lucien?",
		a: "En la Av. d'Encamp, 25, en Pas de la Casa (AD200), Andorra. El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.",
	},
	{
		q: "¿Qué horario tiene?",
		a: "Según la ficha de Google, abre todos los días de 10:00 a 22:00. La ficha advierte de que en festivos —por ejemplo el Día de Todos los Santos— el horario podría ser distinto.",
	},
	{
		q: "¿A qué teléfono se llama?",
		a: "El teléfono público de la ficha es el +376 856 528. Es la vía para preguntar por la carta, reservar o confirmar el horario un día concreto; esta web no gestiona reservas ni pedidos.",
	},
	{
		q: "¿Qué tipo de cocina tiene?",
		a: "Google la clasifica como «Restaurante francés» y «Restaurante». La ficha no publica carta ni precios.",
	},
	{
		q: "¿Es accesible?",
		a: "Google marca el acceso para sillas de ruedas. La ficha no publica más datos de accesibilidad.",
	},
	{
		q: "¿Cuál es la valoración en Google?",
		a: "4,2 sobre 5 con 419 reseñas (consultado el 1 de noviembre de 2026).",
	},
	{
		q: "¿Esta web es del restaurante?",
		a: "No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona reservas ni pedidos y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.",
	},
];

export const LEGAL = {
	razonSocial: "La Terrasse Lucien",
	actualizado: "Noviembre de 2026",
};
