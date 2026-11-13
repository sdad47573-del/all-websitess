/**
 * Datos de Wok House.
 * Goienkale, 41, Ibaiondo, 48005 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026
 * (nombre, dirección, teléfono, coordenadas, categoría y fotos). El folleto de
 * la ficha anuncia «comida rápida para llevar» con tallarines, arroz, sushi,
 * kuotie, rollos y pan chino. No hay horario ni carta con precios legibles, así
 * que no se inventan.
 */

export const BUSINESS = {
	name: 'Wok House',
	fullName: 'Wok House',
	shortName: 'Wok House',
	mark: 'W',
	street: 'Goienkale, 41',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48005',
	locality: 'Ibaiondo',
	country: 'ES',
	phone: '747 41 63 22',
	phoneHref: 'tel:+34747416322',
	whatsapp: 'https://wa.me/34747416322?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Wok%20House.',
	siteUrl: 'https://www.sur-digital.com/wok-house',
	googleCategory: 'Restaurante de comida asiática',
	tagline: 'Comida para llevar en Ibaiondo, Bilbao',
	description:
		'Wok House, restaurante de comida asiática para llevar en Goienkale, 41 (Ibaiondo, 48005 Bilbao, Bizkaia). Tallarines, arroz, sushi, kuotie, rollos y pan chino. Teléfono 747 41 63 22.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Wok+House/@43.2570807,-2.9224962,16z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f1ced85cc5b:0x80a474c35c93c1e5!8m2!3d43.2570807!4d-2.9224962!16s%2Fg%2F11j10v1p2y?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2570807%2C-2.9224962',
	embed: 'https://maps.google.com/maps?q=43.2570807,-2.9224962&z=17&hl=es&output=embed',
};

/**
 * Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía
 * hasta confirmarla, y la web no la muestra mientras esté a null.
 */
export const RATING: { value: number | null; count: number | null; label: string } = {
	value: null,
	count: null,
	label: '',
};

/** Horario publicado: no lo hay verificado, así que no se inventa. */
export const HOURS: { days: string; hours: string }[] = [];

export const HORARIO_NOTA =
	'El horario no está publicado en la ficha pública que hemos consultado. Confírmalo en Google Maps o llamando al 747 41 63 22 antes de acercarte.';

export const CARTA_NOTA =
	'Estas son las familias de platos que anuncia el folleto del local («comida rápida para llevar»). No publicamos una carta con precios porque el cartel de las fotos no se lee con garantías: pregunta por teléfono o en el mostrador.';

const FOTO = (archivo: string, w: number, h: number) => ({
	src: `/wok-house/fotos/${archivo}`,
	w,
	h,
});

export const MENU = [
	{
		titulo: 'Al wok',
		platos: [
			{ nombre: 'Tallarines', nota: 'Salteados al wok, servidos en caja para llevar.' },
			{ nombre: 'Arroz', nota: 'Arroz frito con verdura y huevo, también en caja.' },
		],
	},
	{
		titulo: 'Para completar',
		platos: [
			{ nombre: 'Sushi', nota: 'Piezas de sushi entre las opciones del folleto.' },
			{ nombre: 'Kuotie', nota: 'Empanadillas chinas a la plancha.' },
			{ nombre: 'Rollos', nota: 'Rollitos fritos, para picar mientras llega el resto.' },
			{ nombre: 'Pan chino', nota: 'Pan chino frito, en la línea de los acompañamientos de la casa.' },
		],
	},
];

export const GALERIA = [
	{
		...FOTO('fachada.jpg', 1200, 1600),
		alt: 'Fachada de Wok House en Goienkale, Bilbao, con el rótulo HOUSE y la carta en fotos',
	},
	{
		...FOTO('letrero.jpg', 675, 900),
		alt: 'Rótulo de neón WOK sobre la fachada de Wok House',
	},
	{
		...FOTO('interior.jpg', 1200, 1600),
		alt: 'Interior de Wok House con mesas altas de madera y taburetes',
	},
	{
		...FOTO('arroz.jpg', 1200, 1600),
		alt: 'Arroz frito con pollo y verdura en un plato de Wok House',
	},
	{
		...FOTO('pollo.jpg', 1200, 1600),
		alt: 'Trozos de pollo frito en caja de cartón de Wok House',
	},
	{
		...FOTO('tallarines.jpg', 1200, 1600),
		alt: 'Tallarines con verdura y huevo en caja para llevar de Wok House',
	},
	{
		...FOTO('caja.jpg', 1200, 1600),
		alt: 'Caja de arroz con alitas de pollo, salsas y una bebida de Wok House',
	},
	{
		...FOTO('pan-chino.jpg', 1080, 1920),
		alt: 'Pan chino frito sobre papel de aluminio en Wok House',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Wok House?',
		a: 'En Goienkale, 41, en Bilbao (48005, Bizkaia), con la fachada de piedra y el rótulo HOUSE sobre la entrada.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Su folleto lo presenta como comida rápida para llevar y anuncia tallarines, arroz, sushi, kuotie, rollos, pan chino y mucho más. En las fotos de la ficha aparecen arroz frito con pollo, pollo frito, tallarines y pan chino frito en cajas de cartón.',
	},
	{
		q: '¿Los platos son para llevar?',
		a: 'Sí: el folleto dice «comida rápida para llevar» y en las fotos los platos salen en cajas de cartón con palillos. El local también tiene mesas altas y taburetes para comer allí.',
	},
	{
		q: '¿Tiene carta con precios en esta web?',
		a: 'No. El cartel de precios que aparece en una foto de la ficha no se lee con garantías, así que no publicamos cifras que puedan ser falsas. Pregunta por teléfono o en el mostrador.',
	},
	{
		q: '¿Cómo pido o reservo?',
		a: 'Llama al 747 41 63 22 o escribe por WhatsApp. Esta web es informativa: no gestiona pedidos ni reservas.',
	},
	{
		q: '¿De dónde salen las fotos?',
		a: 'Del perfil público del restaurante en Google Maps: fachada, rótulo, interior y varias cajas de comida. Si eres el titular y quieres retirar alguna, basta con pedirlo.',
	},
];
