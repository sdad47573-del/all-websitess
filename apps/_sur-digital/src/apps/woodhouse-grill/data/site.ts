/**
 * Datos de Woodhouse Grill.
 * C. Bruno Mauricio Zabala Kalea, Ibaiondo, 48003 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026
 * (nombre, dirección, teléfono, coordenadas y categoría). La ficha no publica
 * horario, carta ni valoración verificables, así que la web no los inventa:
 * remite a la ficha y al teléfono.
 */

export const BUSINESS = {
	name: 'Woodhouse Grill',
	fullName: 'Woodhouse Grill',
	shortName: 'Woodhouse',
	mark: 'W',
	street: 'C. Bruno Mauricio Zabala Kalea',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48003',
	locality: 'Ibaiondo',
	country: 'ES',
	phone: '643 01 10 03',
	phoneHref: 'tel:+34643011003',
	whatsapp: 'https://wa.me/34643011003?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Woodhouse%20Grill.',
	siteUrl: 'https://www.sur-digital.com/woodhouse-grill',
	googleCategory: 'Restaurante',
	tagline: 'Parrilla en Ibaiondo, Bilbao',
	description:
		'Woodhouse Grill, restaurante de parrilla en C. Bruno Mauricio Zabala Kalea (Ibaiondo, 48003 Bilbao, Bizkaia). Brochetas, pescado a la brasa y alitas según su ficha de Google Maps. Teléfono 643 01 10 03.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/WOODHOUSE+GRILL/@43.2568921,-2.9315968,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f97e3e5cee9:0xa792223eb1d8f1d2!8m2!3d43.2568921!4d-2.9315968!16s%2Fg%2F11js2thyjp?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2568921%2C-2.9315968',
	embed: 'https://maps.google.com/maps?q=43.2568921,-2.9315968&z=17&hl=es&output=embed',
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
	'El horario no está publicado en la ficha pública que hemos consultado. Confírmalo en Google Maps o llamando al 643 01 10 03 antes de acercarte.';

const FOTO = (archivo: string, w: number, h: number) => ({
	src: `/woodhouse-grill/fotos/${archivo}`,
	w,
	h,
});

export const PLATOS = [
	{
		nombre: 'Brochetas a la parrilla',
		nota: 'Brochetas de carne con pimiento, cebolla y zanahoria, servidas en bandeja para compartir.',
		...FOTO('brochetas.jpg', 1200, 1600),
	},
	{
		nombre: 'Pescado entero a la brasa',
		nota: 'Pescado entero a la parrilla con patatas, ensalada y una salsa blanca aparte.',
		...FOTO('pescado.jpg', 904, 881),
	},
	{
		nombre: 'Alitas de pollo',
		nota: 'Alitas adobadas y asadas, con limón, en bandeja de aluminio para llevar a la mesa.',
		...FOTO('alitas.jpg', 960, 1700),
	},
	{
		nombre: 'Bocadillo de carne y tortilla',
		nota: 'Pan con carne desmenuzada, tortilla y encurtidos, del tamaño de una comida entera.',
		...FOTO('bocadillo.jpg', 720, 720),
	},
	{
		nombre: 'Tortitas de maíz con carne',
		nota: 'Tortitas de maíz fritas y coronadas con carne y cebolla aliñada.',
		...FOTO('arepas.jpg', 1078, 1440),
	},
	{
		nombre: 'Plátano frito y tortilla',
		nota: 'Plátano maduro frito junto a una tortilla de patata y huevo, en la misma bandeja.',
		...FOTO('platano.jpg', 720, 694),
	},
];

export const GALERIA = [
	{
		...FOTO('fachada.jpg', 720, 649),
		alt: 'Fachada de Woodhouse Grill en la calle Bruno Mauricio Zabala, Bilbao, con el rótulo y los paneles de platos',
	},
	{
		...FOTO('brochetas.jpg', 1200, 1600),
		alt: 'Brochetas de carne con pimiento y cebolla en una bandeja de Woodhouse Grill',
	},
	{
		...FOTO('pescado.jpg', 904, 881),
		alt: 'Pescado entero a la parrilla con patatas y ensalada en Woodhouse Grill',
	},
	{
		...FOTO('alitas.jpg', 960, 1700),
		alt: 'Alitas de pollo asadas con limón en una bandeja de Woodhouse Grill',
	},
	{
		...FOTO('salteado.jpg', 1080, 1255),
		alt: 'Salteado de ternera con patatas, pimiento y cilantro de Woodhouse Grill',
	},
	{
		...FOTO('bocadillo.jpg', 720, 720),
		alt: 'Bocadillo de carne y tortilla de Woodhouse Grill, cortado por la mitad',
	},
	{
		...FOTO('arepas.jpg', 1078, 1440),
		alt: 'Tortitas de maíz fritas con carne y cebolla de Woodhouse Grill',
	},
	{
		...FOTO('platano.jpg', 720, 694),
		alt: 'Plátano frito y tortilla de patata en una bandeja de Woodhouse Grill',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Woodhouse Grill?',
		a: 'En la calle Bruno Mauricio Zabala, en el barrio de Ibaiondo de Bilbao (48003, Bizkaia). El local tiene el rótulo WOODHOUSE GRILL sobre la entrada y los platos anunciados en los paneles de la fachada.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Su ficha de Google lo clasifica como restaurante. En las fotos del perfil aparecen brochetas de carne, pescado entero a la parrilla, alitas de pollo, bocadillos, tortitas de maíz con carne y plátano frito con tortilla.',
	},
	{
		q: '¿Tiene horario publicado?',
		a: 'No lo hemos encontrado en la ficha pública que hemos consultado, así que no lo publicamos para no dar un dato falso. Llama al 643 01 10 03 o abre su ficha de Google para comprobarlo antes de ir.',
	},
	{
		q: '¿Cómo reservo o hago una consulta?',
		a: 'El teléfono del local es el 643 01 10 03, y también atiende por WhatsApp. Esta web no gestiona reservas ni pedidos: es informativa.',
	},
	{
		q: '¿Hay carta con precios en esta web?',
		a: 'No. No publicamos precios que no podamos verificar: la carta, los precios y el horario se consultan en el propio restaurante o por teléfono.',
	},
	{
		q: '¿De dónde salen las fotos?',
		a: 'Del perfil público del restaurante en Google Maps: fachada, brochetas, pescado, alitas y platos. Si eres el titular y quieres retirar alguna, basta con pedirlo.',
	},
];
