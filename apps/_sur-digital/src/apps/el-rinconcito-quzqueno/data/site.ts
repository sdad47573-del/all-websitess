/**
 * Datos de El Rinconcito Quzqueño — asador de pollos y comida para llevar y a
 * domicilio, C. de la Marquesa Viuda de Aldama, 44 (28100 Alcobendas, Madrid).
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026. De ahí
 * salen el nombre, la categoría (restaurante peruano), la dirección, el teléfono
 * y la valoración. La ficha consultada no incluye horario, carta ni precios, así
 * que esta web no los inventa y remite al teléfono del establecimiento.
 */

export const BUSINESS = {
	name: 'El Rinconcito Quzqueño',
	fullName: 'El Rinconcito Quzqueño · Asador de pollos y comida para llevar y a domicilio',
	shortName: 'Rinconcito Quzqueño',
	mark: 'R',
	street: 'C. de la Marquesa Viuda de Aldama, 44',
	district: 'Alcobendas',
	city: 'Alcobendas',
	region: 'Comunidad de Madrid',
	postalCode: '28100',
	country: 'ES',
	phone: '910 06 52 66',
	phoneHref: 'tel:+34910065266',
	siteUrl: 'https://www.sur-digital.com/el-rinconcito-quzqueno',
	geo: { lat: 40.5422926, lng: -3.6305267 },
	featureId: '0xd422d14bbddc329:0x8ccbd09407654fa8',
	googleCategory: 'Restaurante peruano',
	tagline: 'Asador de pollos y comida para llevar en Alcobendas',
	description:
		'El Rinconcito Quzqueño, asador de pollos y comida para llevar y a domicilio en la calle Marquesa Viuda de Aldama, 44, Alcobendas (Madrid).',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Rinconcito+Quzqueño+Asador+de+pollos+y+comida+para+llevar+y+a+domicilio/@40.5422926,-3.6305267,17z/data=!3m1!4b1!4m6!3m5!1s0xd422d14bbddc329:0x8ccbd09407654fa8!8m2!3d40.5422926!4d-3.6305267!16s%2Fg%2F11r90_qjlk?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.5422926%2C-3.6305267',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.5422926,-3.6305267',
	embed: 'https://maps.google.com/maps?q=40.5422926,-3.6305267&z=17&hl=es&output=embed',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.2,
	label: '4,2',
};

/** Lo que la ficha y el nombre del local permiten afirmar. */
export const SERVICIOS = [
	'Asador de pollos',
	'Comida para llevar',
	'Comida a domicilio',
	'Restaurante peruano',
	'Ceviche',
	'Pedidos por teléfono',
];

export const FAQ = [
	{
		q: '¿Dónde está El Rinconcito Quzqueño?',
		a: 'En la calle Marquesa Viuda de Aldama, 44, 28100 Alcobendas (Madrid). El botón «Cómo llegar» abre la ruta en Google Maps y el mapa de esta página señala la ubicación de la ficha.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono, en el 910 06 52 66. La ficha no publica web propia, pedidos online ni redes sociales, así que la llamada es el canal que consta.',
	},
	{
		q: '¿Hay comida a domicilio?',
		a: 'El nombre de la ficha incluye «comida para llevar y a domicilio». Conviene llamar para confirmar la zona de reparto, el importe mínimo y el tiempo de entrega.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es un asador de pollos y la ficha lo clasifica como restaurante peruano. La foto del perfil que hay en esta página es un ceviche con langostinos, cebolla roja, maíz, boniato y cancha. No hay carta publicada con el resto de platos.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'No consta en los datos de la ficha que se han usado para esta página. Llama al 910 06 52 66 antes de ir para confirmar que están abiertos.',
	},
	{
		q: '¿Tiene carta y precios?',
		a: 'Esta web no los publica porque la ficha consultada no los incluye. Pregunta por teléfono por los platos del día y por sus precios.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'La ficha consultada en noviembre de 2026 le da 4,2 sobre 5.',
	},
];
