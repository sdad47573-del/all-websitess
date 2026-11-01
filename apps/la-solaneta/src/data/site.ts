/**
 * Datos de Restaurant La Solaneta Ristorante — Avinguda de la Cortinada,
 * CG-3, 33 (km 10 de la carretera general), AD300 La Cortinada, parroquia de
 * Ordino (Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Restaurant La Solaneta Ristorante»,
 *   42.5750521,1.5177382, feature 0x12af5f28ac17041d:0x75e9b527c111561f.
 * - Nombre, dirección, teléfono, categorías, valoración, horario y el atributo
 *   «Se admiten perros»: ficha pública de Google consultada el 1 de noviembre
 *   de 2026 (4,8 · 303 reseñas).
 * - Platos: la carta fotografiada en el perfil del local (antipasti, pastes y
 *   pizzes en catalán), sin copiar importes.
 */

export const BUSINESS = {
	name: 'La Solaneta',
	fullName: 'Restaurant La Solaneta Ristorante',
	shortName: 'La Solaneta',
	mark: 'LS',
	street: 'Avinguda de la Cortinada, CG-3, 33',
	district: 'La Cortinada',
	city: 'La Cortinada',
	region: 'Ordino',
	postalCode: 'AD300',
	country: 'AD',
	siteUrl: 'https://la-solaneta.vercel.app',
	geo: { lat: 42.5750521, lng: 1.5177382 },
	featureId: '0x12af5f28ac17041d:0x75e9b527c111561f',
	placeId: 'ChIJHQQXrChfrxIRH1YRwSe16XU',
	plusCode: 'HGG9+23 La Cortinada',
	googleCategory: 'Pizzería · Bar · Pizza para llevar · Restaurante',
	phone: '+376 722 922',
	phoneHref: 'tel:+376722922',
	tagline: 'Pizzería y restaurante en La Cortinada',
	description:
		'Restaurant La Solaneta Ristorante, en la Avinguda de la Cortinada, CG-3, 33, km 10 (AD300 La Cortinada, Ordino). Pizzas al horno, pasta y antipasti con terraza frente a la montaña. 4,8 sobre 5 con 303 reseñas en Google. Miércoles cerrado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+La+Solaneta+Ristorante/@42.5750521,1.5177382,17z/data=!4m6!3m5!1s0x12af5f28ac17041d:0x75e9b527c111561f!8m2!3d42.5750521!4d1.5177382!16s%2Fg%2F11mw88z_nt?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5750521%2C1.5177382',
	embed: 'https://maps.google.com/maps?q=42.5750521,1.5177382&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5750521,1.5177382',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.8,
	count: 303,
	label: '4,8',
};

/** Horario que publica la ficha: miércoles cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–23:00' },
	{ dia: 'Martes', horas: '9:30–16:30' },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '9:30–23:00' },
	{ dia: 'Viernes', horas: '9:30–23:00' },
	{ dia: 'Sábado', horas: '9:30–23:00' },
	{ dia: 'Domingo', horas: '9:30–23:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar en festivos; confírmalo por teléfono antes de ir.';

export const SERVICIOS = [
	'Pizzas al horno',
	'Pasta',
	'Antipasti',
	'Terraza',
	'Pizza para llevar',
	'Bar',
	'Se admiten perros',
	'Vistas a la montaña',
];

export const HIGHLIGHTS = [
	{
		title: 'Pizzas al horno',
		text: 'La carta fotografiada en el perfil es la de una pizzería de verdad: margarita, quatre formatges, napolitana, pepperoni, paysanne, pizza kebab, calzone o Palermo con tomate fresco y salmón. Base fina, horneada al momento y también para llevar.',
	},
	{
		title: 'Pasta y antipasti',
		text: 'Antes de la pizza hay antipasti (pa a l’agli, bruschetta, taula de formatges, patates braves, calamars a la romana) y una sección de pastes con lasaña bolonyesa, carbonara, pasta al forn o formatge blau. La carta está escrita en catalán, la lengua del país.',
	},
	{
		title: 'Terraza frente al valle',
		text: 'Las mesas de fuera dan al valle de Ordino, con el verde del bosque y las montañas al fondo. En las fotos del perfil se come la pizza en la terraza con el paisaje detrás y una botella de San Pellegrino en la mesa.',
	},
	{
		title: 'En la carretera de Ordino',
		text: 'El restaurante está en la Avenida de la Cortinada, en el kilómetro 10 de la carretera general CG-3, dentro del pueblo de La Cortinada (parroquia de Ordino). Es parada de paso hacia el valle y tiene el comedor en la planta baja del edificio de piedra, con el rótulo en la fachada.',
	},
];

/**
 * Platos de la carta fotografiada en el perfil del local. No se copian los
 * importes porque pueden haber cambiado desde que se tomó la foto.
 */
export const MENU = [
	{
		title: 'Antipasti',
		items: [
			{ name: 'Pa a l’agli', note: 'pan con ajo, hierbas y aceite de oliva' },
			{ name: 'Bruschetta', note: 'pan tostado con tomate, aceite y albahaca' },
			{ name: 'Taula de formatges', note: 'tabla de quesos para compartir' },
			{ name: 'Patates braves', note: 'con salsa brava y alioli' },
			{ name: 'Calamars a la romana', note: 'rebozados, para picar' },
			{ name: 'Croquetes de pollastre', note: 'caseras' },
		],
	},
	{
		title: 'Pastes',
		items: [
			{ name: 'Lasanya bolonyesa', note: 'la lasaña de la casa' },
			{ name: 'Carbonara', note: 'pasta, nata, bacon y huevo' },
			{ name: 'Pasta al forn', note: 'al horno, con bechamel y queso' },
			{ name: 'Formatge blau', note: 'pasta con salsa de queso azul' },
			{ name: 'Bolonyesa', note: 'pasta con salsa de carne' },
		],
	},
	{
		title: 'Pizzes',
		items: [
			{ name: 'Margarita', note: 'tomate, mozzarella y orégano' },
			{ name: 'Quatre formatges', note: 'mozzarella y cuatro quesos' },
			{ name: 'Napolitana', note: 'anchoas, alcaparras y mozzarella' },
			{ name: 'Pepperoni', note: 'tomate, mozzarella y pepperoni' },
			{ name: 'Paysanne', note: 'nata, bacon, cebolla y mozzarella' },
			{ name: 'Pizza kebab', note: 'kebab y cebolla, con mozzarella' },
			{ name: 'Calzone', note: 'pizza cerrada al horno, rellena' },
		],
	},
	{
		title: 'Postres y bar',
		items: [
			{ name: 'Postres de la casa', note: 'se preguntan en la mesa' },
			{ name: 'Café', note: 'para cerrar la comida' },
			{ name: 'Cervezas y refrescos', note: 'el local funciona también como bar' },
			{ name: 'Copas', note: 'la ficha lo clasifica como bar además de restaurante' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Solaneta?',
		a: 'En la Avinguda de la Cortinada, CG-3, 33, en el kilómetro 10 de la carretera general, AD300 La Cortinada, parroquia de Ordino (Principado de Andorra). La ficha de Google sitúa el local en la planta baja de un edificio de piedra, en las coordenadas 42.5750521, 1.5177382.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre el lunes de 12:00 a 23:00; el martes, de 9:30 a 16:30; y de jueves a domingo, de 9:30 a 23:00. El miércoles cierra todo el día. La ficha advierte de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 722 922. El local no tiene web propia ni reservas online, así que el teléfono es la vía para reservar mesa, preguntar por la carta o encargar una pizza para llevar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es una pizzería con cocina italiana: antipasti para empezar (pa a l’agli, bruschetta, patates braves, calamars a la romana), pastas (lasaña bolonyesa, carbonara, pasta al forn, formatge blau) y pizzas al horno, desde la margarita hasta la paysanne, la pizza kebab o el calzone.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. La terraza da al valle de Ordino, con las montañas y el bosque detrás, y es donde están hechas varias de las fotos del perfil. También hay comedor dentro, amplio, con suelo de madera y mesas separadas.',
	},
	{
		q: '¿Se puede ir con perro?',
		a: 'La ficha de Google incluye el atributo «Se admiten perros», así que el local acepta perros. Para saber si pueden estar en el comedor o solo en la terraza, lo mejor es preguntar al llegar o llamar antes.',
	},
	{
		q: '¿Hay pizza para llevar?',
		a: 'La ficha lo clasifica como «Pizza para llevar», así que se puede encargar y recoger. Los encargos se hacen por teléfono, en el +376 722 922.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. En el perfil hay una foto de la carta con los importes impresos, pero puede estar desactualizada: lo mejor es consultarlos al llamar o en el propio local.',
	},
	{
		q: '¿Se puede aparcar?',
		a: 'El restaurante está en la carretera general CG-3, en el pueblo de La Cortinada, y la ficha no da datos de aparcamiento propio. Al estar en el valle de Ordino, lo habitual es llegar en coche y aparcar en el pueblo.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del local. Esta web es informativa: reúne los datos y las fotos públicas del establecimiento y no gestiona reservas ni pedidos.',
	},
];

export const LEGAL = {
	razonSocial: 'Restaurant La Solaneta Ristorante',
	actualizado: 'Noviembre de 2026',
};
