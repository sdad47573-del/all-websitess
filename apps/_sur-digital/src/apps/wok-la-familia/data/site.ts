/**
 * Datos de Wok La Familia.
 * Colón de Larreátegui K., 8, Abando, 48001 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026
 * (nombre, categoría, dirección, teléfono, coordenadas y fotos). Los precios de
 * la carta están copiados de la fotografía del menú publicada en esa ficha; no
 * hay horario verificado, así que no se inventa.
 */

export const BUSINESS = {
	name: 'Wok La Familia',
	fullName: 'Wok La Familia',
	shortName: 'Wok La Familia',
	mark: 'W',
	street: 'Colón de Larreátegui K., 8',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48001',
	locality: 'Abando',
	country: 'ES',
	phone: '688 77 93 76',
	phoneHref: 'tel:+34688779376',
	whatsapp: 'https://wa.me/34688779376?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Wok%20La%20Familia.',
	siteUrl: 'https://www.sur-digital.com/wok-la-familia',
	googleCategory: 'Restaurante de comida asiática',
	tagline: 'Cocina wok en Abando, Bilbao',
	description:
		'Wok La Familia, restaurante de cocina asiática en Colón de Larreátegui K., 8 (Abando, 48001 Bilbao, Bizkaia). Arroces y tallarines al wok, sushi y menú especial. Teléfono 688 77 93 76.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Wok+La+Familia/@43.2629646,-2.9293028,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f10753da581:0x4ccc01abed4c7224!8m2!3d43.2629646!4d-2.9293028!16s%2Fg%2F11ffw4dq5w?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2629646%2C-2.9293028',
	embed: 'https://maps.google.com/maps?q=43.2629646,-2.9293028&z=17&hl=es&output=embed',
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
	'El horario no está publicado en la ficha pública que hemos consultado. Confírmalo en Google Maps o llamando al 688 77 93 76 antes de acercarte.';

export const MENU_NOTA =
	'Los precios están copiados de la fotografía de la carta publicada en el perfil del restaurante en Google Maps (consultada en noviembre de 2026) y pueden haber cambiado.';

/** Menú especial que anuncia el cartel de la carta de la ficha. */
export const MENU_ESPECIAL = {
	titulo: 'Menú especial',
	precio: '9,95 €',
	detalle: 'Primero, segundo (ración de 450 g) y bebida, según el cartel de la carta.',
};

const FOTO = (archivo: string, w: number, h: number) => ({
	src: `/wok-la-familia/fotos/${archivo}`,
	w,
	h,
});

export const MENU = [
	{
		titulo: 'Arroces y tallarines',
		platos: [
			{ nombre: 'Arroz frito tres delicias', precio: '6,50 €' },
			{ nombre: 'Arroz frito de la casa', precio: '6,50 €' },
			{ nombre: 'Arroz frito con verduras', precio: '6,50 €' },
			{ nombre: 'Arroz frito con pollo', precio: '5,50 €' },
			{ nombre: 'Tallarines con ternera', precio: '6,20 €' },
			{ nombre: 'Tallarines con pollo', precio: '5,30 €' },
			{ nombre: 'Tallarines con ternera y verduras', precio: '5,70 €' },
			{ nombre: 'Tallarines con pollo y verduras', precio: '7,00 €' },
		],
	},
	{
		titulo: 'Para picar y sushi',
		platos: [
			{ nombre: 'Ensalada de algas', precio: '2,80 €' },
			{ nombre: 'Rollito de primavera · 2 ud.', precio: '3,00 €' },
			{ nombre: 'Alitas de pollo frito · 6 ud.', precio: '3,50 €' },
			{ nombre: 'Rollitos de gambas', precio: '3,50 €' },
			{ nombre: 'Rollitos de pollo frito · 8 ud.', precio: '7,50 €' },
			{ nombre: 'Maki · 8 ud.', precio: '4,00 €' },
			{ nombre: 'California de salmón · 8 ud.', precio: '6,50 €' },
			{ nombre: 'Bao de pato asado con boletus · 3 ud.', precio: '4,20 €' },
		],
	},
];

export const PLATOS_DESTACADOS = [
	{
		nombre: 'Ternera con pimientos y piña',
		nota: 'Salteado de ternera con pimiento verde y rojo, piña y salsa, con arroz blanco al lado.',
		...FOTO('ternera.jpg', 1400, 897),
	},
	{
		nombre: 'Gambas en salsa',
		nota: 'Gambas salteadas con verduras en una salsa oscura, servidas en la bandeja caliente.',
		...FOTO('gambas.jpg', 1400, 1050),
	},
	{
		nombre: 'Cerdo con pimientos y arroz',
		nota: 'Trozos de cerdo con pimiento y zanahoria, acompañados de arroz blanco.',
		...FOTO('cerdo.jpg', 1400, 647),
	},
];

export const GALERIA = [
	{
		...FOTO('fachada.jpg', 1200, 900),
		alt: 'Fachada de Wok La Familia en la esquina de Colón de Larreátegui, Bilbao',
	},
	{
		...FOTO('comedor.jpg', 1200, 1600),
		alt: 'Comedor de Wok La Familia con mesas, sillas de madera y pared clara',
	},
	{
		...FOTO('mostrador.jpg', 900, 1996),
		alt: 'Mostrador y barra de Wok La Familia, con la nevera de bebidas al fondo',
	},
	{
		...FOTO('ternera.jpg', 1400, 897),
		alt: 'Salteado de ternera con pimientos y piña con arroz blanco de Wok La Familia',
	},
	{
		...FOTO('gambas.jpg', 1400, 1050),
		alt: 'Gambas salteadas en salsa oscura en bandeja de Wok La Familia',
	},
	{
		...FOTO('fideos.jpg', 1200, 1600),
		alt: 'Caja de fideos salteados para llevar de Wok La Familia',
	},
	{
		...FOTO('arroz.jpg', 1200, 1600),
		alt: 'Caja de arroz frito con verduras y pollo para llevar de Wok La Familia',
	},
	{
		...FOTO('cerdo.jpg', 1400, 647),
		alt: 'Cerdo con pimientos y arroz blanco de Wok La Familia',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Wok La Familia?',
		a: 'En Colón de Larreátegui K., 8, en el barrio de Abando de Bilbao (48001, Bizkaia), con el local acristalado en la esquina y el rótulo sobre la entrada.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Su ficha de Google lo clasifica como restaurante de comida asiática. La carta que aparece en las fotos del perfil combina arroces y tallarines al wok con platos para picar y sushi: arroz frito de la casa o tres delicias, tallarines con ternera o pollo, rollitos, alitas, maki y California de salmón.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'Los precios de esta web están copiados de la foto de la carta de su ficha pública: los arroces rondan los 5,50–6,50 €, los tallarines 5,30–7,00 € y el menú especial que anuncia el cartel cuesta 9,95 €. Pueden haber cambiado, así que confírmalos al 688 77 93 76.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'En las fotos del perfil aparecen platos servidos en cajas de cartón para llevar, así que el local prepara pedidos para recoger. Lo más rápido es llamar o escribir por WhatsApp para confirmarlo y encargarlo.',
	},
	{
		q: '¿Tiene horario publicado?',
		a: 'No lo hemos encontrado en la ficha pública que hemos consultado, así que no lo publicamos para no dar un dato falso. Llama al 688 77 93 76 o abre su ficha de Google antes de ir.',
	},
	{
		q: '¿De dónde salen las fotos?',
		a: 'Del perfil público del restaurante en Google Maps: fachada, comedor, mostrador y varios platos. Si eres el titular y quieres retirar alguna, basta con pedirlo.',
	},
];
