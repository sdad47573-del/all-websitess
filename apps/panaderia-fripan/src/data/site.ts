/**
 * Datos de Panadería Fripan — C. Ing. Ribera, 10 (14013 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: Panadería Fripan, 37.8460464,-4.7989501,
 *   feature 0xd6d20da626f051f:0x7f9a3c2d76d538ef.
 * - Nombre, categoría, dirección, teléfono, valoración, reseñas y fotos: ficha
 *   pública de Google.
 *
 * Lo que la web NO inventa: la ficha no publica horario, carta, precios, web
 * propia ni datos de accesibilidad, y no confirma venta directa al público. La
 * web no afirma nada de eso. Las fotos son las de la galería del establecimiento
 * en Google Maps y los textos se limitan a lo que muestran.
 */

export const BUSINESS = {
	name: 'Panadería Fripan',
	shortName: 'Fripan',
	mark: 'F',
	street: 'C. Ing. Ribera, 10',
	district: 'Córdoba',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14013',
	country: 'ES',
	phone: '957 42 17 13',
	phoneHref: 'tel:+34957421713',
	rating: 3.7,
	reviewsCount: 33,
	siteUrl: 'https://panaderia-fripan.vercel.app',
	geo: { lat: 37.8460464, lng: -4.7989501 },
	featureId: '0xd6d20da626f051f:0x7f9a3c2d76d538ef',
	placeId: 'ChIJHwVvYtogbQ0R7zjVdi08mn8',
	googleCategory: 'Panadería',
	tagline: 'Panadería y bollería en la calle Ingeniero Ribera, Córdoba',
	description:
		'Panadería Fripan, en C. Ing. Ribera, 10 (14013 Córdoba). Bollería y pan de obrador: muffins, croissants, donuts glaseados, panecillos y pan envasado. 3,7 sobre 5 en Google.',
	/** La ficha no publica horario: la web lo dice en lugar de inventarlo. */
	hoursSummary: 'Horario no publicado en Google',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Fripan/@37.8460464,-4.7989501,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d20da626f051f:0x7f9a3c2d76d538ef!8m2!3d37.8460464!4d-4.7989501!16s%2Fg%2F1q5br86w0?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8460464%2C-4.7989501',
	embed: 'https://maps.google.com/maps?q=37.8460464,-4.7989501&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8460464,-4.7989501',
};

/** La ficha de Google no publica horario de apertura. */
export const HOURS = [{ day: 'Horario', value: 'No publicado en Google' }];

export const HOURS_NOTE =
	'La ficha pública de Google no indica horario de apertura, ni siquiera los días de la semana. Esta página no lo estima: para saber cuándo está abierto, llama al 957 42 17 13 antes de acercarte.';

/** Lo que la ficha declara y lo que se ve en sus fotos. */
export const SERVICIOS = [
	'Panadería',
	'Bollería',
	'Muffins',
	'Croissants',
	'Donuts glaseados',
	'Pan envasado',
];

export const HIGHLIGHTS = [
	{
		title: 'La bollería',
		text: 'En las fotos hay bandejas y bandejas: muffins de chocolate, de frutos rojos y de arándanos, croissants de hojaldre, panecillos rosas con virutas blancas y bollos de chocolate blanco con pepitas.',
	},
	{
		title: 'Los donuts',
		text: 'Los donuts glaseados en amarillo, con la línea blanca en zigzag, aparecen empaquetados de dos en dos y también en bolsas de papel. Al lado, rosquillas rebozadas en azúcar.',
	},
	{
		title: 'La nave',
		text: 'Una de las fotos es la puerta de la nave: pared blanca, toldo azul, contenedor verde y un camión al fondo. El cartel de la pared dice «Artesana del Horno · sabor y calidad a tu mesa».',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Fripan?',
		a: 'En la calle Ingeniero Ribera, 10 (14013 Córdoba). El mapa de esta página abre la ubicación exacta de la ficha y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario: no aparece ni un solo día con su franja. Por eso esta web no lo indica. Para confirmarlo, llama al 957 42 17 13.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Lo que muestran las fotos de la ficha: muffins de chocolate, frutos rojos y arándanos; croissants; donuts glaseados empaquetados; panecillos rosas y de chocolate blanco; dulces de coco; panecillos con semillas y bolsas de pan envasado. La ficha no publica catálogo ni precios.',
	},
	{
		q: '¿Es tienda abierta al público o un obrador?',
		a: 'La ficha solo declara la categoría «Panadería», y una de sus fotos es la puerta de una nave industrial con un camión al lado. No hay información publicada sobre atención al público ni sobre reparto, así que esta página no lo afirma: si quieres comprar, llama antes.',
	},
	{
		q: '¿Hacen encargos o reparten?',
		a: 'No hay datos publicados. La foto del camión junto a la nave sugiere movimiento de mercancía, pero la ficha no detalla reparto ni encargos, y esta web no lo da por hecho. Se consulta por teléfono.',
	},
	{
		q: '¿Tiene página web o carta con precios?',
		a: 'No. La ficha de Google no enlaza ninguna web propia ni publica carta ni precios, así que esta página no los reproduce ni los estima.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '3,7 sobre 5 con 33 reseñas, según la ficha pública. Es una media con opiniones variadas; esta web no reproduce sus textos, pero se leen enteros en el enlace a Google.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información de accesibilidad. La foto de la entrada muestra una nave a pie de calle, en suelo de hormigón, sin más datos oficiales. Si necesitas un acceso concreto, llama antes.',
	},
];
