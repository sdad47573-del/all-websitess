/**
 * Datos de Panadería y Confitería La Esquinita — C. Eugenio Gross, 11
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Esquinita, 36.7236365,-4.4360159,
 *   feature 0xd72f77cd4e5b533:0x4e6f40919dd9ba08.
 * - Dirección, teléfono, valoración, reseñas, horario, accesibilidad,
 *   descripción del negocio y fotos: ficha pública de Google (octubre de 2026).
 *
 * Lo que la web NO inventa: la ficha no publica una carta con precios, página
 * web, correo, redes sociales ni métodos de pago. El mostrador recoge solo lo
 * que enumera la descripción del negocio y lo que se ve en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Panadería y Confitería La Esquinita',
	shortName: 'La Esquinita',
	mark: 'E',
	street: 'C. Eugenio Gross, 11',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '951 99 37 81',
	phoneHref: 'tel:+34951993781',
	rating: 4.6,
	reviewsCount: 37,
	siteUrl: 'https://panaderia-la-esquinita.vercel.app',
	geo: { lat: 36.7236365, lng: -4.4360159 },
	featureId: '0xd72f77cd4e5b533:0x4e6f40919dd9ba08',
	placeId: 'ChIJM7Xl1Hz3cg0RCLrZnZFAb04',
	googleCategory: 'Panadería',
	tagline: 'Panes especiales, tartas personalizadas y dulces caseros en Bailén-Miraflores',
	description:
		'Panadería y Confitería La Esquinita, en C. Eugenio Gross, 11 (Bailén-Miraflores, 29010 Málaga). Panes especiales, tartas personalizadas, cookies, saladitos y dulces caseros, también sin gluten, sin azúcar y sin lactosa. 4,6 sobre 5 en Google con 37 reseñas. Teléfono 951 99 37 81.',
	hoursSummary: 'L–V 7:30–21:00 · S y D 8:00–21:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+y+Confiter%C3%ADa+La+Esquinita/@36.7236365,-4.4360159,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f77cd4e5b533:0x4e6f40919dd9ba08!8m2!3d36.7236365!4d-4.4360159!16s%2Fg%2F11k4b70qw6?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7236365%2C-4.4360159',
	embed: 'https://maps.google.com/maps?q=36.7236365,-4.4360159&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:30–21:00' },
	{ day: 'Sábado', value: '8:00–21:00' },
	{ day: 'Domingo', value: '8:00–21:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google (octubre de 2026). Para el domingo 1 de noviembre, Día de Todos los Santos, la ficha avisa de que el horario podría ser diferente; conviene llamar antes de ir.';

/** Reseñas destacadas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Variedad de dulces y buenos precios',
	},
	{
		rating: 5,
		text: 'Pan fresco y en excelente calidad, buen precio, y muy buena atención.',
	},
	{
		rating: 5,
		text: 'Poco más puedo decir de la pastelería más concurrida durante estos últimos años.',
	},
];

/** Lo que la descripción del negocio y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Sin gluten',
	'Sin azúcar',
	'Sin lactosa',
	'Panes especiales',
	'Tartas personalizadas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan',
		text: 'La ficha enumera panes especiales: centeno, soja, espelta, 100% integral, de semillas y de molde, blanco o integral.',
	},
	{
		title: 'La confitería',
		text: 'Tartas personalizadas, cookies, galletitas y saladitos para celebraciones. Las fotos muestran tartas con temática, fondant y dedicatorias.',
	},
	{
		title: 'Opciones para todos',
		text: 'La descripción del negocio habla de productos sin gluten, sin azúcar, sin lactosa y normales. La ficha no detalla el protocolo de alérgenos.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Panadería',
		items: [
			{
				name: 'Centeno, soja y espelta',
				note: 'Los panes especiales que enumera la descripción del negocio.',
			},
			{
				name: '100% integral y de semillas',
				note: 'Otras dos variedades que cita la ficha, junto al pan de molde blanco e integral.',
			},
			{
				name: 'Pan del día',
				note: 'La ficha no publica una lista de panes por día; conviene preguntar en el mostrador.',
			},
		],
	},
	{
		title: 'Confitería',
		items: [
			{
				name: 'Tartas personalizadas',
				note: 'La ficha las anuncia. En las fotos hay tartas con temática de gimnasio, fondant azul y dedicatorias.',
			},
			{
				name: 'Cookies y galletitas',
				note: 'Productos caseros para celebraciones, según la descripción del negocio.',
			},
			{
				name: 'Saladitos',
				note: 'La ficha los incluye entre los productos para tus celebraciones.',
			},
		],
	},
	{
		title: 'Dulces y merienda',
		items: [
			{
				name: 'Pasteles individuales',
				note: 'En la vitrina, cada pieza con su etiqueta de precio.',
			},
			{
				name: 'Tartas de vitrina',
				note: 'Tartas enteras y porciones, como la de galleta Oreo o la cubierta de coco.',
			},
			{
				name: 'Bebidas',
				note: 'La descripción menciona bebidas junto a los dulces y el pan.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Esquinita?',
		a: 'En la calle Eugenio Gross, 11, en Bailén-Miraflores (29010 Málaga). El local hace esquina y el mapa de esta página abre la ubicación exacta; «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:30 a 21:00. El sábado y el domingo, de 8:00 a 21:00. Para el domingo 1 de noviembre, Día de Todos los Santos, la ficha avisa de que el horario podría ser diferente.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono, en el 951 99 37 81. La ficha de Google no publica página web, correo electrónico ni redes sociales.',
	},
	{
		q: '¿Hacen tartas personalizadas?',
		a: 'Sí. La descripción del negocio las anuncia y las fotos del perfil muestran tartas con temática de gimnasio, una tarta azul con detalles dorados y tartas con dedicatoria. El encargo se hace por teléfono o en el propio local; no hay pedidos online.',
	},
	{
		q: '¿Hay opciones sin gluten, sin azúcar o sin lactosa?',
		a: 'La ficha del negocio dice que trabaja productos «sin gluten, sin azúcar, sin lactosa, normal». No detalla el protocolo de alérgenos ni la contaminación cruzada, así que si eres celíaco o tienes una alergia, confírmalo por teléfono antes de comprar.',
	},
	{
		q: '¿Qué panes venden?',
		a: 'La descripción enumera panes especiales de centeno, soja, espelta, 100% integral y de semillas, además de pan de molde blanco e integral. La ficha no publica la disponibilidad de cada día ni los precios.',
	},
	{
		q: '¿Se puede merendar allí?',
		a: 'La ficha habla de «disfrutar de tu merienda ideal», pero no publica mesas, terraza ni servicio de cafetería, y las fotos muestran el mostrador y la vitrina. Esta página no afirma que haya sitio para sentarse; si lo necesitas, llama antes.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica acceso para sillas de ruedas. También marca que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 37 reseñas en Google. Las tres que se citan en esta página son las destacadas de la ficha y las tres son de cinco estrellas.',
	},
];
