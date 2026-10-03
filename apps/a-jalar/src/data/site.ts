/**
 * Datos de A JALAR, kebab artesanal de Málaga en Teatinos-Universidad.
 *
 * Toda la información procede de fuentes públicas del propio negocio: su ficha de Google
 * Business Profile (dirección, teléfono, valoración, coordenadas), su Instagram y Facebook
 * (@ajalarnaturalfood), la ficha de Glovo/Uber Eats donde se reparten a domicilio y las
 * reseñas públicas que el local cita en sus redes.
 *
 * No hay cifras inventadas: cada bloque de datos apunta a su fuente. Si algún dato cambia
 * (carta, precios, horario), se edita solo aquí.
 */

/**
 * Fotografías reales del negocio.
 *
 * - `a-jalar-entrada.jpg` / `a-jalar-local.jpg`: foto de la fachada y del interior del local.
 * - `*-facebook-*.jpg`: fotos publicadas por el propio local en su página de Facebook.
 * - El resto: fotos de producto de la carta (rollos, media lunas, bandejas, campers…).
 *
 * Los nombres de archivo son descriptivos porque Google Imágenes los indexa como URL.
 */
import logo from '../assets/fotos/a-jalar-logo.png';
import logoOscuro from '../assets/fotos/a-jalar-logo-oscuro.png';
import entrada from '../assets/fotos/a-jalar-entrada.jpg';
import local from '../assets/fotos/a-jalar-local.jpg';
import facebook1 from '../assets/fotos/a-jalar-facebook-1.jpg';
import facebook2 from '../assets/fotos/a-jalar-facebook-2.jpg';
import facebook3 from '../assets/fotos/a-jalar-facebook-3.jpg';
import rolloPollo from '../assets/fotos/a-jalar-rollo-pollo.jpg';
import mediaLunaPollo from '../assets/fotos/a-jalar-media-luna-pollo.jpg';
import bandejaPollo from '../assets/fotos/a-jalar-bandeja-pollo.jpg';
import camperoPollo from '../assets/fotos/a-jalar-campero-pollo.jpg';
import baguettePollo from '../assets/fotos/a-jalar-baguette-pollo.jpg';
import chickenFingers from '../assets/fotos/a-jalar-chicken-fingers.jpg';
import hamburguesaTernera from '../assets/fotos/a-jalar-hamburguesa-ternera.jpg';
import patatasFritas from '../assets/fotos/a-jalar-patatas-fritas.jpg';

export const IMAGES = {
	/**
	 * Logotipo oficial (monograma AJ + wordmark "A JALAR · KEBAB ARTESANAL") sobre fondo
	 * transparente. El wordmark de marca es blanco, así que la versión para fondos claros
	 * (`logoOscuro`) recolorea solo el texto y deja intacto el "AJ" blanco del Badge naranja.
	 */
	logo,
	logoOscuro,
	/** Foto de la entrada al local, usada como fondo del hero de la portada. */
	entrada,
	/** Foto del interior del local, en la tarjeta junto al titular del hero. */
	local,
	facebook1,
	facebook2,
	facebook3,
	rolloPollo,
	mediaLunaPollo,
	bandejaPollo,
	camperoPollo,
	baguettePollo,
	chickenFingers,
	hamburguesaTernera,
	patatasFritas,
};

export const BUSINESS = {
	name: 'A JALAR',
	shortName: 'A Jalar',
	tagline: 'Kebab artesanal, carne fresca preparada a diario',
	claim: 'Donde comer bien es natural',
	summary:
		'A JALAR es un kebab artesanal en la Av. de Lope de Vega 23 (Teatinos, Málaga): rollos, media lunas y campers hechos con carne fresca preparada cada día, verduras frescas y pan casero. Reparto a domicilio por Glovo.',
	street: 'Avenida de Lope de Vega, 23',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	// La ficha de Google Business da 29010; Uber Eats muestra 29190 para la misma dirección.
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha de Google Business y Facebook del local. */
	phoneDisplay: '951 66 03 29',
	phoneHref: 'tel:+34951660329',
	instagram: 'https://www.instagram.com/ajalar_naturalfood/',
	facebook: 'https://www.facebook.com/ajalarnaturalfood/',
	/** Reparto a domicilio: el local lo anuncia en sus redes. */
	delivery: 'Glovo',
	deliveryUrl: 'https://glovoapp.com/es/es/malaga/',
	uberEatsUrl: 'https://www.ubereats.com/es/store/a-jalar/4SWTyiUHUIe-BK-zXIQt9A',
	googleMaps:
		'https://www.google.com/maps/place/A+JALAR/@36.7308448,-4.4870576,15z/data=!4m10!1m2!2m1!1sRestaurantes!3m6!1s0xd72f725523d67f1:0x627cf3c29fd6be5!8m2!3d36.7308448!4d-4.4690332!15sCgxSZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgEWZG9uZXJfa2ViYWJfcmVzdGF1cmFudJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyMHhTMkpIV2pWaVNHaFBZa1pPVFZVeVRsTlZNVkpUWkhreGFXTkhZeEFC4AEA-gEECAAQSA!16s%2Fg%2F11xh4w9_pp',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20de%20Lope%20de%20Vega%2C%2023%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7308448, lng: -4.4690332 },
	cuisine: ['Kebab', 'Cocina de Oriente Medio', 'Hamburguesas', 'Comida halal'],
	/** Precio orientativo por persona que el propio local publica en sus redes. */
	priceLevel: '€€',
	priceRange: '10-15 € por persona',
	/**
	 * Valoración media y número de reseñas de la ficha de Google Business Profile.
	 * Se publica como `aggregateRating` en el JSON-LD: es el dato que más pesa en el SEO local.
	 */
	rating: { value: 4.1, count: 238, bestRating: 5 },
	/**
	 * URL canónica del sitio: canonical, og:url, sitemap y datos estructurados.
	 * Si cambia el dominio, actualiza también `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://a-jalar.vercel.app',
};

/**
 * Datos legales del titular del sitio (LSSI-CE).
 *
 * Rellena los tres campos antes de publicar:
 *
 * 	razonSocial: 'A JALAR S.L.',
 * 	nif: 'B12345678',
 * 	email: 'info@ajalar.es',
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
	{ label: 'El kebab', href: '#kebab' },
	{ label: 'Carta', href: '#carta' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Contacto', href: '#contacto' },
];

export const PAGE_NAV = [
	{ label: 'Carta completa', href: '/carta' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

/**
 * Horario publicado por el propio local: martes a domingo, siempre por la tarde/noche.
 * Los lunes no se indica apertura, por lo que el local los toma como día de descanso.
 */
export const HOURS: { days: string; hours: string; schemaDays: string[] }[] = [
	{ days: 'Lunes', hours: 'Cerrado', schemaDays: ['Monday'] },
	{
		days: 'Martes a jueves',
		hours: '19:00 – 24:00',
		schemaDays: ['Tuesday', 'Wednesday', 'Thursday'],
	},
	{ days: 'Viernes y sábado', hours: '19:00 – 01:00', schemaDays: ['Friday', 'Saturday'] },
	{ days: 'Domingo', hours: '19:00 – 24:00', schemaDays: ['Sunday'] },
];

/** Los cuatro pilares con los que el negocio se describe en sus propias redes. */
export const HIGHLIGHTS = [
	{
		icon: 'ri-fire-line',
		title: 'Carne fresca, diario',
		text: 'Carne preparada a diario y rollos armados pieza a pieza, como anuncia el propio local.',
	},
	{
		icon: 'ri-bread-line',
		title: 'Pan casero',
		text: 'Pan casero y wrap enrollado al momento: el rollo se monta cuando tú lo pides.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Verduras frescas',
		text: 'Verdura fresca de temporada y las salsas que tú elijas, sin atajos.',
	},
	{
		icon: 'ri-bike-line',
		title: 'A domicilio',
		text: 'El mismo kebab casero en tu casa, pedido a domicilio a través de Glovo.',
	},
];

/**
 * Carta publicada por el negocio en su canal de reparto (Uber Eats).
 * Los precios son los de ese canal y pueden variar: prevalecen siempre los del local.
 */
export const MENU_SECTIONS: {
	title: string;
	items: { name: string; price: string; description?: string; image?: ImageMetadata }[];
}[] = [
	{
		title: 'Rollos',
		items: [
			{
				name: 'Rollo de pollo',
				price: '11,00 €',
				description: 'Pan artesano enrollado con pollo macerado, ingredientes y salsas a elegir.',
				image: rolloPollo,
			},
			{
				name: 'Rollo de ternera',
				price: '12,35 €',
				description: 'La misma combi con ternera premium del propio local.',
			},
			{
				name: 'Rollo mixto',
				price: '12,35 €',
				description: 'La combinación de pollo macerado y ternera premium, el más pedido.',
			},
		],
	},
	{
		title: 'Media lunas',
		items: [
			{
				name: 'Media luna de pollo',
				price: '7,80 €',
				description: 'La media luna clásica, recién hecha y con el pollo de toda la casa.',
				image: mediaLunaPollo,
			},
			{ name: 'Media luna mixta', price: '9,75 €' },
			{ name: 'Media luna de ternera', price: '9,75 €' },
		],
	},
	{
		title: 'Camperos',
		items: [
			{
				name: 'Campero de pollo',
				price: '9,00 €',
				description: 'Pan de campero artesanal con pollo macerado y los ingredientes que elijas.',
				image: camperoPollo,
			},
			{ name: 'Campero de ternera', price: '11,00 €' },
			{ name: 'Campero mixto', price: '11,00 €' },
		],
	},
	{
		title: 'Bandejas',
		items: [
			{
				name: 'Bandeja de pollo',
				price: '9,75 €',
				description: 'El rollo-desde abierto y acompañante a elegir para compartir.',
				image: bandejaPollo,
			},
			{ name: 'Bandeja mixta', price: '11,00 €' },
			{ name: 'Bandeja de ternera', price: '11,00 €' },
		],
	},
	{
		title: 'Baguettes y hamburguesas',
		items: [
			{
				name: 'Baguette de pollo',
				price: '10,40 €',
				description: 'El rollo servido en pan baguette, crujiente por fuera.',
				image: baguettePollo,
			},
			{
				name: 'Hamburguesa de ternera con patatas',
				price: 'a consultar',
				description: 'Ternera, queso y patatas fritas. Precio actualizado en el local.',
				image: hamburguesaTernera,
			},
		],
	},
	{
		title: 'Complementos',
		items: [
			{
				name: 'Chicken fingers',
				price: '8,40 €',
				description: 'Tiras de pollo crujientes con salsa de la casa.',
				image: chickenFingers,
			},
			{
				name: 'Patatas fritas (ración)',
				price: '3,25 €',
				description: 'Patatas crujientes, con sal o con las salsas que prefieras.',
				image: patatasFritas,
			},
		],
	},
];

/** Platos con foto propia: son los que se usan en la galería y en la portada. */
export const PLATO_IMAGES = [
	{ src: IMAGES.rolloPollo, alt: 'Rollo de pollo de A Jalar, kebab artesanal en Málaga' },
	{ src: IMAGES.bandejaPollo, alt: 'Bandeja de A Jalar, kebab casero en Teatinos (Málaga)' },
	{ src: IMAGES.camperoPollo, alt: 'Campero de A Jalar, pan artesanal con pollo' },
	{ src: IMAGES.mediaLunaPollo, alt: 'Media luna de A Jalar en la Av. de Lope de Vega, Málaga' },
	{ src: IMAGES.chickenFingers, alt: 'Chicken fingers de A Jalar, Teatinos-Universidad' },
	{ src: IMAGES.baguettePollo, alt: 'Baguette de pollo de A Jalar, Málaga' },
];

/** Fotos del local y de sus redes para la galería. */
export const LOCAL_GALLERY = [
	{ src: IMAGES.facebook1, alt: 'A JALAR, kebab artesanal en Teatinos-Universidad (Málaga)' },
	{ src: IMAGES.facebook3, alt: 'Platos de A JALAR, kebab artesanal en Málaga' },
];

/** Preguntas frecuentes respondidas con datos publicados por el negocio. */
export const FAQ = [
	{
		q: '¿Dónde está A Jalar?',
		a: 'En la Avenida de Lope de Vega 23, en el barrio de Teatinos-Universidad de Málaga (29010), a pocos metros de la Ciudad de la Justicia.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abrimos de martes a domingo por la tarde: de martes a jueves y domingo de 19:00 a 24:00, y viernes y sábado de 19:00 a 01:00. Los lunes Permanecemos cerrados.',
	},
	{
		q: '¿Qué diferencia hay entre el rollo y la media luna?',
		a: 'Los dos usan el mismo pan artesanal y la misma carne, pero el rollo va enrollado y la media luna es la versión plana y crujiente. También hay camperos (pan de campero), bandejas para compartir y baguettes.',
	},
	{
		q: '¿Cuál es la diferencia entre pollo y ternera?',
		a: 'El pollo va macerado con receta propia y la ternera es premium. El pedido «mixto» combina ambos y es el más solicitado del local.',
	},
	{
		q: '¿Hacés reparto a domicilio?',
		a: 'Sí. El reparto se realiza a través de Glovo y también está disponible en Uber Eats. El precio habitual está entre 10 y 15 € por persona.',
	},
	{
		q: '¿Cómo contacto con el local?',
		a: 'Por teléfono en el 951 66 03 29. También puedes escribirnos por Instagram en @ajalarnaturalfood.',
	},
	{
		q: '¿Es comida halal?',
		a: 'Sí, A Jalar es un kebab halal: toda la carne se prepara respetando el ritual islámico y sin porcine.',
	},
];

/** Frases del propio local, para la portada y las reseñas. */
export const TESTIMONIOS = [
	{
		text: 'Carne fresca preparada a diario, verduras frescas y pan casero. Así empiezan nuestro kebab de ternera.',
		author: 'A JALAR',
		role: 'Facebook',
		icon: 'ri-facebook-circle-line',
	},
	{
		text: 'Kebab gigante, riquísimo y súper completo. Uno de los kebab más curiosos de Málaga.',
		author: 'Kebab Andrómeda',
		role: 'Recomendación en Instagram',
		icon: 'ri-instagram-line',
	},
	{
		text: 'Pollo marinado pieza a pieza, con receta propia. Un proceso cuidado que se nota en cada kebab.',
		author: 'A JALAR',
		role: 'Instagram',
		icon: 'ri-instagram-line',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'A JALAR kebab Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 951 66 03 29',
	image: `${BUSINESS.siteUrl}/og.jpg`,
	currenciesAccepted: 'EUR',
	priceRange: BUSINESS.priceRange,
	servesCuisine: BUSINESS.cuisine,
	areaServed: [{ '@type': 'City', name: 'Málaga' }],
	/** Datos de Google Business Profile: es el bloque que más pesa en el SEO local. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating.value,
		reviewCount: BUSINESS.rating.count,
		bestRating: BUSINESS.rating.bestRating,
		worstRating: 1,
	},
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
	sameAs: [BUSINESS.instagram, BUSINESS.facebook],
	acceptsReservations: 'False',
	/** Se atiende en mostrador y se reparte a domicilio (a través de Glovo y Uber Eats). */
	serviceType: ['Restaurante', 'Comida para llevar', 'Reparto a domicilio'],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
			opens: '19:00',
			closes: '24:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Friday', 'Saturday'],
			opens: '19:00',
			closes: '01:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Sunday'],
			opens: '19:00',
			closes: '24:00',
		},
	],
};
