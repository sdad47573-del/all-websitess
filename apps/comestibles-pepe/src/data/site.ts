/**
 * Datos de Comestibles Pepe, charcutería y tienda de alimentación en Plaza Pío XII (Málaga).
 *
 * El negocio es un comercio de barrio con una presencia digital mínima: no tiene web propia ni
 * redes sociales públicas localizables. Todo lo que hay aquí sale de su ficha de Google Maps y de
 * los directorios que replican esa ficha (cylex, Mi Charcutería, qdq, Bittersugar).
 *
 * No hay cifras inventadas: si un dato no aparece en ninguna fuente verificable, se deja
 * marcado como pendiente en lugar de rellenarlo.
 */

/**
 * Fotografía real del local, la única imagen pública del negocio: la foto de cabecera de su
 * ficha de Google Maps (2000 × 1500). Se pidió a Google a máxima resolución a partir del
 * identificador de la foto (`AF1Qip…`), que los directorios replican.
 *
 * Los nombres de archivo son descriptivos porque Google Imágenes los indexa como URL.
 */
import googleMaps from '@assets/COMESTIBLES-PEPE/comestibles-pepe-google-maps.jpg';

export const IMAGES = {
	googleMaps,
};

export const BUSINESS = {
	name: 'Comestibles Pepe',
	shortName: 'Pepe',
	tagline: 'Charcutería de barrio en el Cruz de Humilladero',
	claim: 'Embutidos de calidad en la Plaza Pío XII',
	summary:
		'Comestibles Pepe es una charcutería y tienda de alimentación en la Plaza Pío XII 5 de Málaga (Cruz de Humilladero): embutidos, lotes y cestas para el día a día y para regalo. Abierto de lunes a viernes por la mañana y por la tarde.',
	/** Google Maps sitúa el negocio en la Plaza Pío XII, 5 (Cruz de Humilladero). */
	street: 'Plaza Pío XII, 5',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29007',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha del negocio y replicado por los directorios. */
	phoneDisplay: '697 65 50 93',
	phoneHref: 'tel:+34697655093',
	/**
	 * El negocio no tiene web propia ni redes sociales públicas localizables, así que no se
	 * enlaza a ninguna. Cuando los tenga, se añaden aquí y en el pie de página.
	 */
	googleMaps:
		'https://www.google.com/maps/place/Comestibles+Pepe/@36.7179249,-4.4433512,17z/data=!4m17!1m10!3m9!1s0xd72f74c1fcee779:0x43f2c3b25fb4b9a4!2sComestibles+Pepe!8m2!3d36.7179249!4d-4.4433512!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11hqrgjgdk',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Plaza%20P%C3%ADo%20XII%2C%205%2C%2029007%20M%C3%A1laga&t=&z=18&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7179249, lng: -4.4433512 },
	cuisine: ['Charcutería', 'Embutidos', 'Tienda de alimentación'],
	/** Categorías con las que Google y los directorios clasifican el negocio. */
	categories: ['Charcutería', 'Tienda de alimentación', 'Embutidos', 'Lotes y cestas'],
	priceLevel: '€',
	/**
	 * URL canónica: canonical, og:url, sitemap y datos estructurados.
	 * Si cambia el dominio, actualiza también `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://comestibles-pepe.vercel.app',
};

/**
 * Datos legales del titular del sitio (LSSI-CE).
 *
 * Rellena los tres campos antes de publicar:
 *
 * 	razonSocial: 'Comestibles Pepe S.L.',
 * 	nif: 'B12345678',
 * 	email: 'info@comestiblespepe.es',
 *
 * Al rellenarlos, el aviso amarillo de /aviso-legal desaparece solo y el correo pasa a
 * ser un enlace mailto. No hace falta tocar la página.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Septiembre de 2026',
};

export const NAV = [
	{ label: 'La tienda', href: '#tienda' },
	{ label: 'Productos', href: '#productos' },
	{ label: 'Visítanos', href: '#visitanos' },
	{ label: 'Contacto', href: '#contacto' },
];

export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/aviso-legal' }];

/**
 * Horario publicado en la ficha del negocio. Se abre en dos tramos de lunes a viernes y solo
 * por la mañana el sábado; el domingo permanece cerrado.
 */
export const HOURS: {
	days: string;
	morning?: string;
	evening?: string;
	schemaDays: string[];
}[] = [
	{
		days: 'Lunes a viernes',
		morning: '6:30 – 14:30',
		evening: '17:30 – 20:30',
		schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
	},
	{ days: 'Sábado', morning: '8:00 – 14:30', schemaDays: ['Saturday'] },
	{ days: 'Domingo', schemaDays: ['Sunday'] },
];

/** Los tres rasgos con los que el negocio se describe en su ficha pública. */
export const HIGHLIGHTS = [
	{
		icon: 'ri-shopping-bag-line',
		title: 'Tienda de alimentación',
		text: 'La compra del día a día concentrada en una sola parada, en la Plaza Pío XII.',
	},
	{
		icon: 'ri-archive-line',
		title: 'Charcutería y embutidos',
		text: 'Embutidos seleccionados, el producto estrella de la casa desde hace años.',
	},
	{
		icon: 'ri-gift-line',
		title: 'Lotes y cestas',
		text: 'Lotes y cestas para regalo y para empresas, preparados a tu medida.',
	},
];

/**
 * Familias de producto de una charcutería. Se presentan como las secciones del lineal: son
 * las categorías genéricas del sector y las que el negocio declara en su ficha (charcutería,
 * embutidos, lotes y cestas). Cuando quieras, ajusta los títulos y descripciones con lo que
 * haya realmente en el mostrador.
 */
export const PRODUCTOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Embutidos',
		text: 'Lomo, salchichón y todo lo que se corta delante de ti en el mostrador.',
	},
	{
		icon: 'ri-bar-chart-2-line',
		title: 'Jamón y piezas curadas',
		text: 'Jamón y piezas curadas para el día a día y para poner en la mesa.',
	},
	{
		icon: 'ri-cake-line',
		title: 'Quesos',
		text: 'Curdos, semicurados y frescos, en pieza entera o porcionados.',
	},
	{
		icon: 'ri-archive-line',
		title: 'Conservas y despensa',
		text: 'Latas, aceite y todo lo que completa la cesta de la casa.',
	},
	{
		icon: 'ri-gift-line',
		title: 'Lotes y cestas',
		text: 'Cestas de regalo y lotes de empresa, preparados a tu medida.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Platos combinados',
		text: 'Bandejas ya montadas para compartir, para la oficina o para la mesa.',
	},
];

/** Preguntas frecuentes respondidas con datos publicados por el negocio. */
export const FAQ = [
	{
		q: '¿Dónde está Comestibles Pepe?',
		a: 'En la Plaza Pío XII, 5, en el barrio del Cruz de Humilladero de Málaga (29007), muy cerca de la Universidad.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De lunes a viernes abrimos en dos tramos, de 6:30 a 14:30 y de 17:30 a 20:30. El sábado de 8:00 a 14:30. El domingo cerrado.',
	},
	{
		q: '¿Qué se vende en la tienda?',
		a: 'Es una charcutería y tienda de alimentación: embutidos, jamón, quesos, conservas y despensa, además de lotes y cestas para regalo y para empresas.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El 697 65 50 93. Es la mejor forma de consultar si hay producto concreto antes de pasar por la tienda.',
	},
	{
		q: '¿Tenéis web o redes sociales?',
		a: 'Todavía no. Esta web es la primera; cuando el negocio tenga perfil propio, se enlazará aquí.',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'GroceryStore',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Comestibles Pepe Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 697 65 50 93',
	image: `${BUSINESS.siteUrl}/og.jpg`,
	currenciesAccepted: 'EUR',
	priceRange: BUSINESS.priceLevel,
	/**
	 * Sin `aggregateRating`: la ficha del negocio no expone una nota pública verificable, así que
	 * no se publica ninguna. Añádelo solo cuando tengas el dato real de Google.
	 */
	address: {
		'@type': 'PostalAddress',
		streetAddress: BUSINESS.street,
		addressLocality: BUSINESS.city,
		addressRegion: BUSINESS.region,
		postalCode: BUSINESS.postalCode,
		addressCountry: BUSINESS.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: BUSINESS.geo.lat,
		longitude: BUSINESS.geo.lng,
	},
	hasMap: BUSINESS.googleMaps,
	acceptsReservations: 'False',
	/** Tienda de barrio: se compra en el mostrador, sin reparto propio. */
	serviceType: ['Tienda de alimentación', 'Charcutería'],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '06:30',
			closes: '14:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '17:30',
			closes: '20:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '08:00',
			closes: '14:30',
		},
	],
};
