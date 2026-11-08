/**
 * Datos de Kebab Byron — Agirre Lehendakaria Kalea, 36, Arizgoiti,
 * 48970 Basauri (Bizkaia).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Kebab Byron», 43.2372002,-2.8877564,
 *   feature 0xd4e4fa294f6b195:0xd3ab9a16f0e0008b.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, accesibilidad
 *   y reseñas: ficha pública de Google consultada el 1 de noviembre de 2026.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs), incluido el flyer del local, de donde salen
 *   el segundo teléfono, el reparto a domicilio, los menús y el «halal».
 *
 * La ficha no publica precios ni web propia. En la web no se copian los importes
 * del flyer: pueden estar desactualizados y la foto no es una fuente fiable para
 * publicarlos. Sí se citan los platos y los extras que aparecen en él.
 */

export const BUSINESS = {
	name: 'Kebab Byron',
	fullName: 'Kebab Byron · Bar Baserri',
	shortName: 'Byron',
	mark: 'BY',
	street: 'Agirre Lehendakaria Kalea, 36',
	district: 'Arizgoiti',
	city: 'Basauri',
	region: 'País Vasco',
	postalCode: '48970',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/kebab-byron',
	geo: { lat: 43.2372002, lng: -2.8877564 },
	featureId: '0xd4e4fa294f6b195:0xd3ab9a16f0e0008b',
	placeId: 'ChIJlbH2lKJPTg0RiwDg8Baaq9M',
	plusCode: '8CMV64P6+VV',
	googleCategory: 'Restaurante especializado en döner kebab',
	phone: '946 07 64 41',
	phoneHref: 'tel:+34946076441',
	phoneDelivery: '614 91 67 22',
	phoneDeliveryHref: 'tel:+34614916722',
	tagline: 'Döner kebab, durum y pizzas turcas en Basauri',
	description:
		'Kebab Byron, en Agirre Lehendakaria Kalea, 36 (Arizgoiti, 48970 Basauri, Bizkaia). Döner kebab halal de pollo, cordero o mixto, durum, pizzas turcas, platos y menús con patatas y refresco. Todos los días desde las 12:00, con reparto a domicilio.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Kebab+Byron/@43.2372002,-2.8877564,17z/data=!4m6!3m5!1s0xd4e4fa294f6b195:0xd3ab9a16f0e0008b!8m2!3d43.2372002!4d-2.8877564!16s%2Fg%2F11ssc3jmfc?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2372002%2C-2.8877564',
	embed: 'https://maps.google.com/maps?q=43.2372002,-2.8877564&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=43.2372002,-2.8877564',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 3.5,
	count: 63,
	label: '3,5',
};

/**
 * Horario que publica la ficha. El flyer del local dice que los viernes y los
 * sábados cierra a las 2:00; la ficha, a la 1:00.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–24:00' },
	{ dia: 'Martes', horas: '12:00–24:00' },
	{ dia: 'Miércoles', horas: '12:00–24:00' },
	{ dia: 'Jueves', horas: '12:00–24:00' },
	{ dia: 'Viernes', horas: '12:00–1:00' },
	{ dia: 'Sábado', horas: '12:00–1:00' },
	{ dia: 'Domingo', horas: '12:00–24:00' },
];

/** Aviso que acompaña al horario. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto, y el flyer del local anuncia el cierre de viernes y sábado a las 2:00. Llama antes si vas de madrugada.';

/** Lo que la ficha, el flyer y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Döner kebab',
	'Durum',
	'Pizzas turcas',
	'Halal',
	'Menús con patatas y refresco',
	'A domicilio',
	'Barra y mesas',
	'Acceso adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Kebab halal, de pollo o cordero',
		text: 'La ficha lo clasifica como restaurante especializado en döner kebab. El flyer del local lleva el sello halal y ofrece el kebab de pollo, de cordero o mixto, además de la versión con queso, la de falafel y la vegetal.',
	},
	{
		title: 'Durum, pizza turca y menús',
		text: 'La carta del local organiza los pedidos en kebab, pizza turca (lahmacun), durum y platos. Hay menús con patatas fritas y refresco, y extras como el queso o la ración extra de carne.',
	},
	{
		title: 'Barra, mesas y reparto',
		text: 'El local tiene una barra de madera curva con la carta colgada encima, mesa y sillas altas, y un comedor con mesas de mármol, sillas de metal y paredes rojas. El flyer anuncia servicio a domicilio con un segundo teléfono.',
	},
	{
		title: '3,5 sobre 5 con 63 reseñas',
		text: 'La ficha de Google le da 3,5 sobre 5 con 63 opiniones (noviembre de 2026). Entre las reseñas que se ven hay una que lo pone por las nubes: «el mejor durum que he comido jamás, ya sea de cordero, pollo o mixto».',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'El mejor durum que he comido jamás, ya sea de cordero, pollo o mixto.',
	},
];

/**
 * Lo que anuncia el flyer del local y lo que se reconoce en las fotos del
 * perfil. La ficha no publica precios y aquí tampoco se copian los del flyer.
 */
export const MENU = [
	{
		title: 'Kebab',
		items: [
			{ name: 'Kebab de pollo o cordero', note: 'el döner de siempre, servido en pan' },
			{ name: 'Kebab mixto', note: 'con pollo y cordero en el mismo pan' },
			{ name: 'Kebab con queso', note: 'con el queso fundido por encima de la carne' },
			{ name: 'Kebab de falafel', note: 'la versión vegetariana, con falafel y ensalada' },
		],
	},
	{
		title: 'Durum',
		items: [
			{ name: 'Durum de pollo o cordero', note: 'en tortilla de trigo, enrollado y a la plancha' },
			{ name: 'Durum con queso', note: 'gratinado por encima, como el de las fotos' },
			{ name: 'Durum especial', note: 'con carne, verdura y salsa, en el apartado de durum' },
			{ name: 'Durum con patatas', note: 'la opción de menú, con patatas fritas y refresco' },
		],
	},
	{
		title: 'Pizzas turcas y platos',
		items: [
			{ name: 'Pizza turca (lahmacun) con carne', note: 'la masa fina con carne picada y especias' },
			{ name: 'Lahmacun con ensalada', note: 'servida con lechuga, tomate y cebolla' },
			{ name: 'Plato kebab', note: 'con ensalada, patatas fritas, salsa y pan' },
			{ name: 'Plato degustación', note: 'para dos personas, con dos kebabs y guarnición' },
		],
	},
	{
		title: 'Menús y postres',
		items: [
			{ name: 'Menú kebab', note: 'con patatas fritas y refresco' },
			{ name: 'Menú durum', note: 'con patatas fritas y refresco' },
			{ name: 'Menú falafel', note: 'la versión vegetariana del menú' },
			{ name: 'Helados y postres', note: 'en el apartado de postres del flyer' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Kebab Byron?',
		a: 'En Agirre Lehendakaria Kalea, 36, barrio de Arizgoiti, 48970 Basauri (Bizkaia). La ficha de Google sitúa el local en las coordenadas 43.2372002, -2.8877564. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días desde las 12:00: de domingo a jueves hasta las 24:00 y los viernes y sábados hasta la 1:00. El flyer del local dice que esos dos días cierra a las 2:00, así que si vas de madrugada conviene llamar antes. La ficha también avisa de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el 946 07 64 41. El flyer del local añade el 614 91 67 22 para el servicio a domicilio. No hay web propia ni pedidos online, así que los encargos se hacen por teléfono.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'Sí. El flyer del local anuncia servicio a domicilio y da un teléfono propio para los repartos, el 614 91 67 22. La ficha no detalla la zona ni el importe mínimo, así que se pregunta al llamar.',
	},
	{
		q: '¿La carne es halal?',
		a: 'El flyer del restaurante lleva el sello halal, y la ficha lo clasifica como restaurante especializado en döner kebab. Si necesitas confirmar algún detalle, pregunta en el local al hacer el pedido.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Kebab de pollo, cordero o mixto, kebab con queso y de falafel, durum normal, con queso o especial, pizzas turcas (lahmacun) con carne o con ensalada, platos con patatas y pan, y menús con patatas fritas y refresco. También hay extras de queso y de carne.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. El flyer del local los lleva impresos, pero pueden cambiar: el importe se confirma al llamar o en la barra. Los menús incluyen patatas fritas y refresco.',
	},
	{
		q: '¿Se puede ir en silla de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas. No marca aseo ni aparcamiento adaptados. El local tiene barra con taburetes y mesas, así que si necesitas una mesa concreta coméntalo al llamar.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Las fotos del perfil muestran la fachada con el rótulo rojo de Byron y un banco en la acera, pero no mesas fuera. El servicio es de barra y comedor, con reparto a domicilio.',
	},
];

export const LEGAL = {
	razonSocial: 'Kebab Byron',
	actualizado: 'Noviembre de 2026',
};
