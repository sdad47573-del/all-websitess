/**
 * Datos de Xing Yuan.
 * Fernández del Campo K., 6, Abando, 48010 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026
 * (nombre, categoría, dirección, teléfono y coordenadas). No hay horario,
 * carta ni valoración verificados, así que la web no los inventa: remite a
 * la ficha y al teléfono.
 */

export const BUSINESS = {
	name: 'Xing Yuan',
	fullName: 'Xing Yuan · 兴源食府',
	shortName: 'Xing Yuan',
	mark: 'X',
	street: 'Fernández del Campo K., 6',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48010',
	locality: 'Abando',
	country: 'ES',
	phone: '944 71 95 17',
	phoneHref: 'tel:+34944719517',
	siteUrl: 'https://www.sur-digital.com/xing-yuan',
	googleCategory: 'Restaurante de cocina mandarina',
	tagline: 'Cocina mandarina en Abando, Bilbao',
	description:
		'Xing Yuan, restaurante de cocina mandarina en Fernández del Campo K., 6 (Abando, 48010 Bilbao, Bizkaia). Teléfono 944 71 95 17 y ficha en Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Xing+Yuan/@43.2584583,-2.9331427,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f8289436973:0x29ea4d84911cc042!8m2!3d43.2584583!4d-2.9331427!16s%2Fg%2F11h8n0qyww?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2584583%2C-2.9331427',
	embed: 'https://maps.google.com/maps?q=43.2584583,-2.9331427&z=17&hl=es&output=embed',
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
	'El horario no está publicado en la ficha pública que hemos consultado. Confírmalo en Google Maps o llamando al 944 71 95 17 antes de acercarte.';

const FOTO = (archivo: string, w: number, h: number) => ({
	src: `/xing-yuan/fotos/${archivo}`,
	w,
	h,
});

export const PLATOS = [
	{
		nombre: 'Fideos de arroz salteados',
		nota: 'Fideos de arroz finos al wok con verdura y carne, en la línea de la cocina del norte de China.',
		...FOTO('xing-yuan-apaisada-02.jpg', 1600, 900),
	},
	{
		nombre: 'Gamba rebozada',
		nota: 'Gamba rebozada y salteada con ajo y cebolleta, servida sobre hoja de plátano.',
		...FOTO('xing-yuan-apaisada-03.jpg', 1600, 1200),
	},
	{
		nombre: 'Tallarines con verduras',
		nota: 'Tallarines gruesos salteados con cebolla, pimiento y salsa de soja.',
		...FOTO('xing-yuan-apaisada-09.jpg', 1600, 1200),
	},
	{
		nombre: 'Berenjena en salsa',
		nota: 'Berenjena cocinada con salsa de soja y ajo, con la piel a la vista.',
		...FOTO('xing-yuan-vertical-10.jpg', 1600, 2133),
	},
	{
		nombre: 'Sopa agripicante',
		nota: 'Sopa con huevo, setas y un punto de picante, servida en cuenco grande para compartir.',
		...FOTO('xing-yuan-vertical-04.jpg', 1600, 2133),
	},
	{
		nombre: 'Rollitos de primavera',
		nota: 'Rollitos crujientes con semillas de sésamo, para empezar o para picar entre varios.',
		...FOTO('xing-yuan-vertical-07.jpg', 1600, 2133),
	},
];

export const GALERIA = [
	{
		...FOTO('xing-yuan-01.jpg', 1200, 900),
		alt: 'Fachada de Xing Yuan en Fernández del Campo, Bilbao, con el rótulo Xing Yuan · 兴源食府',
	},
	{
		...FOTO('xing-yuan-vertical-06.jpg', 1600, 2133),
		alt: 'Comedor de Xing Yuan con barra, mesas vestidas y lámparas cálidas',
	},
	{
		...FOTO('xing-yuan-apaisada-09.jpg', 1600, 1200),
		alt: 'Tallarines gruesos salteados con verdura en un plato de Xing Yuan',
	},
	{
		...FOTO('xing-yuan-apaisada-03.jpg', 1600, 1200),
		alt: 'Gamba rebozada con ajo y cebolleta en un plato de Xing Yuan',
	},
	{
		...FOTO('xing-yuan-vertical-04.jpg', 1600, 2133),
		alt: 'Sopa agripicante en cuenco azul de Xing Yuan',
	},
	{
		...FOTO('xing-yuan-vertical-05.jpg', 1600, 2133),
		alt: 'Robot camarero con bandeja en el comedor de Xing Yuan',
	},
	{
		...FOTO('xing-yuan-vertical-07.jpg', 1600, 2133),
		alt: 'Rollitos de primavera con sésamo en Xing Yuan',
	},
	{
		...FOTO('xing-yuan-vertical-10.jpg', 1600, 2133),
		alt: 'Berenjena en salsa de soja de Xing Yuan',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Xing Yuan?',
		a: 'En Fernández del Campo K., 6, en el barrio de Abando de Bilbao (48010, Bizkaia). El local está en ese número, con el rótulo Xing Yuan · 兴源食府 sobre la fachada.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Su ficha de Google lo clasifica como restaurante de cocina mandarina. En las fotos de la ficha aparecen fideos y tallarines salteados, gamba rebozada, sopa agripicante, rollitos de primavera y berenjena en salsa.',
	},
	{
		q: '¿Cómo reservo o pregunto por el horario?',
		a: 'Por teléfono en el 944 71 95 17 o desde la ficha de Google Maps. El horario no está publicado en la ficha que hemos consultado, así que conviene llamar antes de ir.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Sí: las fotos de la ficha muestran un comedor con mesas y servicio en sala. También aparece un robot camarero que lleva las bandejas entre las mesas.',
	},
	{
		q: '¿Tiene carta con precios en esta web?',
		a: 'No. No publicamos precios que no podamos verificar: la carta, los precios y el horario se consultan en el propio restaurante o en su ficha de Google.',
	},
	{
		q: '¿De dónde salen las fotos?',
		a: 'Del perfil público del restaurante en Google Maps: fachada, comedor y varios platos. Si eres el titular y quieres retirar alguna, basta con pedirlo.',
	},
];
