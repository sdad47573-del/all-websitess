/**
 * Datos de Asador Delicias roly — C. Baleares, 49, Carabanchel (28019 Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador Delicias roly»,
 *   40.3919529,-3.7128939, feature 0xd4227b7fedf705f:0xce4f45034f10e99b.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas y
 *   fotografías: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta, menú del día,
 * precios del asador, reparto a domicilio ni pedidos online. Los platos y
 * precios de esta web son los de las etiquetas de la vitrina que aparecen en
 * las fotos del perfil. La ficha solo indica que no hay aparcamiento adaptado;
 * no confirma acceso para sillas de ruedas, así que la web no lo afirma.
 */

export const BUSINESS = {
	name: 'Asador Delicias roly',
	fullName: 'Asador Delicias roly',
	shortName: 'Delicias roly',
	mark: 'DR',
	street: 'C. Baleares, 49',
	district: 'Carabanchel',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28019',
	country: 'ES',
	siteUrl: 'https://asador-delicias-roly.vercel.app',
	geo: { lat: 40.3919529, lng: -3.7128939 },
	featureId: '0xd4227b7fedf705f:0xce4f45034f10e99b',
	placeId: 'ChIJX3Df_rcnQg0Rm-kQTwNFT84',
	plusCode: '8CGR97RP+QR',
	googleCategory: 'Establecimiento de comida preparada',
	phone: '915 65 24 34',
	phoneHref: 'tel:+34915652434',
	tagline: 'Pollo asado y comida casera en Carabanchel',
	description:
		'Asador Delicias roly, en C. Baleares, 49 (Carabanchel, 28019 Madrid). Pollo asado, guisos y comida casera para llevar. Todos los días de 10:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+Delicias+roly/@40.3919529,-3.7128939,17z/data=!3m1!4b1!4m6!3m5!1s0xd4227b7fedf705f:0xce4f45034f10e99b!8m2!3d40.3919529!4d-3.7128939!16s%2Fg%2F1z44b15c_?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3919529%2C-3.7128939',
	embed: 'https://maps.google.com/maps?q=40.3919529,-3.7128939&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3919529,-3.7128939',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.9,
	count: 167,
	label: '4,9',
};

/** Horario que publica la ficha: todos los días, de 10:00 a 16:00. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–16:00' },
	{ dia: 'Martes', horas: '10:00–16:00' },
	{ dia: 'Miércoles', horas: '10:00–16:00' },
	{ dia: 'Jueves', horas: '10:00–16:00' },
	{ dia: 'Viernes', horas: '10:00–16:00' },
	{ dia: 'Sábado', horas: '10:00–16:00' },
	{ dia: 'Domingo', horas: '10:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de un horario especial el Día de Todos los Santos (domingo 1 de noviembre). El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y las fotos del perfil permiten afirmar. */
export const SERVICIOS = [
	'Pollo asado',
	'Comida casera',
	'Guisos y cazuelas',
	'Paellas',
	'Ensaladas',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'El asador',
		text: 'La ficha lo define como asador de pollos. En las fotos del perfil se ve el asador lleno de pollos dorándose, en varias filas. La ficha no publica el precio del pollo: se pregunta en el local o por teléfono.',
	},
	{
		title: 'La vitrina del día',
		text: 'Bandejas de guisos, cremas, arroces y ensaladas con etiquetas escritas a mano. El contenido cambia cada jornada: los precios de esta página son los de las etiquetas fotografiadas en octubre de 2026.',
	},
	{
		title: 'La casa roja',
		text: 'La fachada de Baleares 49 está pintada de rojo y salpicada de ladrillos amarillos. El toldo morado anuncia «Comidas caseras Delicias Roly» y la puerta abierta deja ver el asador y la vitrina.',
	},
	{
		title: 'Para llevar',
		text: 'La ficha explica que cocinan platos caseros a diario para llevar. No publica reparto a domicilio, pedidos online ni una web propia: el teléfono 915 65 24 34 es el único canal que aparece.',
	},
];

/** Platos y precios que aparecen en las etiquetas de la vitrina. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'del asador; la ficha no publica el precio',
			},
		],
	},
	{
		title: 'De la vitrina',
		items: [
			{ name: 'Crema de verdura', note: 'etiqueta de la vitrina', price: '2,90 €' },
			{ name: 'Callos con garbanzos', note: 'etiqueta de la vitrina', price: '3,50 €' },
			{ name: 'Macarrones a la bolonesa', note: 'etiqueta de la vitrina', price: '3,50 €' },
			{ name: 'Cordón bleu', note: 'etiqueta de la vitrina', price: '2,20 €' },
			{ name: 'Albóndigas de ternera', note: 'etiqueta de la vitrina', price: '4,80 €' },
			{ name: 'Muslitos en pepitoria', note: 'etiqueta de la vitrina', price: '4,80 €' },
			{ name: 'Ensalada de pollo', note: 'etiqueta de la vitrina', price: '5,00 €' },
			{ name: 'Bacalao con tomate', note: 'en la vitrina; el precio no se lee en la foto' },
		],
	},
	{
		title: 'Arroces y cazuelas',
		items: [
			{ name: 'Paella', note: 'en la paellera de la vitrina; precio no publicado' },
			{ name: 'Guisos del día', note: 'el surtido cambia cada jornada' },
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Pedimos un pollo y croquetas y nos encantó todo y además es económico.',
		valor: 5,
	},
	{
		texto: 'Tanto mis padres como yo llevamos años yendo y la comida siempre está exquisita.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Delicias roly?',
		a: 'En la calle Baleares, 49, en el distrito de Carabanchel (28019 Madrid). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica un horario de 10:00 a 16:00 todos los días de la semana. Además avisa de un horario especial el Día de Todos los Santos (domingo 1 de noviembre). Conviene confirmarlo por teléfono antes de ir.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pollo asado y comida casera para llevar. En las fotos del perfil aparecen el asador con los pollos y una vitrina con crema de verdura, callos con garbanzos, macarrones a la bolonesa, cordón bleu, albóndigas de ternera, muslitos en pepitoria, bacalao con tomate, ensalada de pollo y paella.',
	},
	{
		q: '¿Cuánto cuesta el pollo asado?',
		a: 'La ficha de Google no publica el precio del pollo ni una carta con precios del asador. Las etiquetas de la vitrina sí muestran importes de otros platos, pero el pollo no aparece con precio en las fotos. Hay que preguntarlo en el teléfono 915 65 24 34.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La ficha no publica menú del día ni una carta completa, así que esta web no lo inventa. Lo que se ve en las fotos es el asador y las bandejas de la vitrina. Llama por teléfono para saber qué hay cada jornada.',
	},
	{
		q: '¿Los precios de la web son por ración o por peso?',
		a: 'Las etiquetas de la vitrina no indican peso ni tamaño de ración, así que los importes se muestran tal como aparecen, sin interpretarlos. Confirma en el local qué incluye cada precio.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'La ficha no publica reparto a domicilio, pedidos online ni reservas, y no consta página web propia ni red social. El único canal que aparece es el teléfono 915 65 24 34, así que cualquier pedido o consulta se hace por ahí.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo marca que no hay aparcamiento adaptado para sillas de ruedas. No publica datos sobre el acceso, el interior o los aseos, así que no se puede confirmar la accesibilidad del local. Si necesitas una condición concreta, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,9 sobre 5 con 167 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian el pollo, las croquetas, el precio y la constancia de la casa.',
	},
];
