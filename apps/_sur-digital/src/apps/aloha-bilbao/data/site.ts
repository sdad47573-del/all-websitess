/**
 * Datos de ALOHA Bilbao.
 * Colón de Larreátegui K., 15, Abando, 48001 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps y directorios del restaurante
 * consultados en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'ALOHA Bilbao',
	fullName: 'ALOHA Bilbao',
	shortName: 'ALOHA Bilbao',
	mark: 'A',
	street: 'Colón de Larreátegui K., 15',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48001',
	locality: 'Abando',
	district: 'Abando',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/aloha-bilbao',
	geo: { lat: 43.2628218, lng: -2.9297298 },
	featureId: '0xd4e4f8271dd9925:0xaee874c7dc74a935',
	googleCategory: 'Restaurante de comida saludable',
	phone: '946 29 20 99',
	phoneHref: 'tel:+34946292099',
	tagline: 'Poké, ensaladas, wraps y comida saludable en Abando, Bilbao',
	description:
		'ALOHA Bilbao, restaurante de poké, ensaladas, wraps y comida saludable en Colón de Larreátegui K., 15 (Abando, 48001 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/ALOHA+Bilbao+-+Pok%C3%A9,+ensaladas,+wraps+%26+comida+saludable/@43.2628218,-2.9297298,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f8271dd9925:0xaee874c7dc74a935!8m2!3d43.2628218!4d-2.9297298!16s%2Fg%2F11j3rz9y4w?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2628218%2C-2.9297298',
	embed: 'https://maps.google.com/maps?q=43.2628218,-2.9297298&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=43.2628218,-2.9297298',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};

/**
 * Horario de los directorios del restaurante (coinciden el de 2017 y el de
 * agosto de 2026). No lo he leído en la ficha de Google en esta sesión, así que
 * la web lo atribuye a esos directorios y pide confirmarlo por teléfono.
 */
export const HORARIO = [
	{ day: 'Lunes', horas: '12:00–22:30' },
	{ day: 'Martes', horas: '12:00–22:30' },
	{ day: 'Miércoles', horas: '12:00–22:30' },
	{ day: 'Jueves', horas: '12:00–22:30' },
	{ day: 'Viernes', horas: '12:00–23:30' },
	{ day: 'Sábado', horas: '12:00–23:30' },
	{ day: 'Domingo', horas: '12:00–22:30' },
];

/** La ficha no publica reseñas con texto que hayamos podido leer. */
export const RESENAS: { texto: string; valor: number }[] = [];

export const FAQ = [
	{
		q: '¿Dónde está ALOHA Bilbao?',
		a: 'En el número 15 de Colón de Larreátegui K., en Abando (48001 Bilbao, Bizkaia), a unos minutos andando de la estación de Bilbao-Abando. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según los directorios del restaurante, abre todos los días: de lunes a jueves y el domingo de 12:00 a 22:30, y viernes y sábado de 12:00 a 23:30. Puede cambiar en festivos, así que conviene confirmarlo llamando al 946 29 20 99.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Poké bowls, ensaladas y wraps. El local permite montar el bowl a tu gusto con base, proteína, toppings y salsa.',
	},
	{
		q: '¿Hay opciones veganas o sin gluten?',
		a: 'La web de ALOHA indica opciones veganas y sin gluten en sus cartas. El local no publica el detalle de alérgenos, así que consúltalo al pedir.',
	},
	{
		q: '¿Se puede pedir para llevar o a domicilio?',
		a: 'El restaurante ofrece recogida en el local y reparto a través de las apps de entrega habituales. Para concretar un pedido o un encargo, llama al 946 29 20 99.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no publica sistema de reservas. Para grupos o fechas concretas, lo más directo es llamar al 946 29 20 99.',
	},
];
