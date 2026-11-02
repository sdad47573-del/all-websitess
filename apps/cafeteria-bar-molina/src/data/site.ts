/**
 * Datos de «Cafetería-Bar Molina» — C. Morería, 7, 13002 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9851951, -3.9314919, feature
 *   0xd6bc36b5eb3b697:0x1bd6f70fd0db186a (nombre, dirección, categorías, teléfono,
 *   valoración, horario, accesibilidad y descripción del negocio), consultada el
 *   2 de noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento.
 *
 * Avisos importantes:
 * - La casa se describe en su ficha como «Comida casera y manchega».
 * - La ficha no publica carta, precios ni web propia. Los platos de esta web son
 *   los que nombran las reseñas y los que se ven en las fotos del perfil.
 * - Cierra a las 17:00 de lunes a sábado y el domingo figura cerrado: es un
 *   horario de comidas y aperitivo, no de cenas.
 */

export const BUSINESS = {
	name: 'Cafetería-Bar Molina',
	fullName: 'Cafetería-Bar Molina',
	mark: 'CM',
	street: 'C. Morería, 7',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13002',
	country: 'ES',
	siteUrl: 'https://cafeteria-bar-molina.vercel.app',
	geo: { lat: 38.9851951, lng: -3.9314919 },
	featureId: '0xd6bc36b5eb3b697:0x1bd6f70fd0db186a',
	placeId: 'ChIJl7azXmvDaw0Rahjb0A_31hs',
	channel: '/g/11cn6kn7zy',
	plusCode: 'X3P9+3C Ciudad Real',
	category: 'Restaurante de cocina castellana',
	categories: ['Restaurante de cocina castellana', 'Cafetería'],
	phone: '926 30 91 59',
	phoneHref: 'tel:+34926309159',
	tagline: 'Comida casera y manchega en la calle Morería',
	description:
		'Cafetería-Bar Molina, restaurante de cocina castellana y cafetería en la calle Morería, 7, de Ciudad Real (13002). Comida casera y manchega, tapas, arroces y guisos, de lunes a sábado de 9:00 a 17:00. La ficha de Google le da 4,4 sobre 5 con 482 reseñas.',
	hasPublicWebsite: false,
	ownerDescription: 'Comida casera y manchega',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cafeter%C3%ADa-Bar+Molina/@38.9851951,-3.9314919,17z/data=!4m6!3m5!1s0xd6bc36b5eb3b697:0x1bd6f70fd0db186a!8m2!3d38.9851951!4d-3.9314919!16s%2Fg%2F11cn6kn7zy',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9851951%2C-3.9314919',
	embed: 'https://maps.google.com/maps?q=38.9851951,-3.9314919&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9851951,-3.9314919',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 4.4,
	count: 482,
	label: '4,4',
};

/** Horario que publica la ficha: mediodía y tarde, sin cenas. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–17:00' },
	{ dia: 'Martes', horas: '9:00–17:00' },
	{ dia: 'Miércoles', horas: '9:00–17:00' },
	{ dia: 'Jueves', horas: '9:00–17:00' },
	{ dia: 'Viernes', horas: '9:00–17:00' },
	{ dia: 'Sábado', horas: '9:30–17:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Lo mismo, con los nombres que espera el componente de visita. */
export const HOURS = HORARIO.map((row) => ({
	day: row.dia,
	value: row.horas,
	closed: row.closed,
}));

export const HORARIO_AVISO =
	'La ficha publica de 9:00 a 17:00 de lunes a viernes, el sábado desde las 9:30 y el domingo cerrado. No hay servicio de cenas. En festivos puede cambiar.';

export const SERVICIOS = [
	'Comida casera',
	'Cocina manchega',
	'Cafetería',
	'Tapas y aperitivo',
	'Cocina castellana',
	'Brunch',
	'Acceso adaptado',
	'Asientos adaptados',
	'Cierra a las 17:00',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida casera y manchega',
		text: 'Es la descripción que publica la propia casa en su ficha de Google, y la que repiten las reseñas: guisos de cuchara, arroces y platos de siempre, cocinados como en casa. Google la clasifica como restaurante de cocina castellana y cafetería.',
	},
	{
		title: 'El aperitivo de la Morería',
		text: 'Una reseña lo dice tal cual: «Excelente lugar para tomar el aperitivo acompañado de buena gente y buenas tapas». La foto de la barra lo enseña: dos cañas, una tapa de carne con pan y una cazuela de salmorejo. La barra es la puerta de entrada; la comida, lo que se queda a la mesa.',
	},
	{
		title: 'Cocina de mediodía',
		text: 'El horario lo deja claro: de 9:00 a 17:00 de lunes a viernes y desde las 9:30 el sábado, con el domingo cerrado. Es una casa de desayuno, aperitivo y comida; por la noche está cerrada. En las fotos del perfil aparecen salmorejo, boquerones, torreznos, arroz negro, pescado y carne a la plancha.',
	},
	{
		title: 'Acceso adaptado',
		text: 'La ficha marca acceso y asientos adaptados para sillas de ruedas, y aclara que no hay aparcamiento adaptado. El local está en planta baja, según la propia dirección de Google.',
	},
];

export const MENU = [
	{
		title: 'Para el aperitivo',
		items: [
			{
				name: 'Tapas de la casa',
				note: '«Buenas tapas» para acompañar el aperitivo, según las reseñas; cambian cada día',
			},
			{
				name: 'Salmorejo',
				note: 'Con huevo y jamón picados por encima, servido en cuenco o en cazuela de barro',
			},
			{ name: 'Boquerones fritos', note: 'Con ensalada y gajo de limón' },
			{ name: 'Torreznos', note: 'Fritos y crujientes, para picar con la caña' },
		],
	},
	{
		title: 'De cuchara y de mesa',
		items: [
			{
				name: 'Albóndigas',
				note: 'En salsa, de la comida casera que anuncia la ficha',
			},
			{
				name: 'Arroz negro',
				note: 'Con calamar y alioli, servido en plato hondo',
			},
			{
				name: 'Arroz de la casa',
				note: 'Como el que pide una de las reseñas junto a las albóndigas',
			},
			{
				name: 'Pescado a la plancha',
				note: 'Con ensalada y limón, según la foto del perfil',
			},
			{
				name: 'Carne a la plancha',
				note: 'Servida en la barra con pan y una cazuela de salmorejo',
			},
		],
	},
	{
		title: 'Postres',
		items: [
			{
				name: 'Tarta helada de nata y chocolate',
				note: 'Con nata montada y un hilo de caramelo',
			},
			{
				name: 'Tarta de chocolate',
				note: 'De bizcocho, con salsa de chocolate caliente',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Cafetería-Bar Molina?',
		a: 'En la calle Morería, 7, de Ciudad Real (13002), en planta baja, con Plus Code X3P9+3C y coordenadas 38.9851951, -3.9314919. Está en el centro histórico de la ciudad, a un paso de la Plaza Mayor y de la calle Toledo. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De 9:00 a 17:00 de lunes a viernes y de 9:30 a 17:00 el sábado, según la ficha de Google. El domingo figura cerrado. Es un horario de desayuno, aperitivo y comida: no hay servicio de cenas. En festivos puede cambiar, así que llama antes si vas en fecha señalada.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No. La ficha marca el domingo como cerrado y el sábado con apertura más tardía, a las 9:30. Si buscas mesa un domingo, la casa no abre según los datos publicados; para confirmar una apertura puntual, llama al 926 30 91 59.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'Al 926 30 91 59, el número publicado en la ficha del establecimiento. Sirve para preguntar por el menú del día, reservar mesa o encargar una ración. Esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Comida casera y manchega: es la descripción que publica la propia casa. Google la clasifica como restaurante de cocina castellana y cafetería, y le añade la etiqueta «Brunch». Las reseñas hablan de tapas para el aperitivo, arroz, albóndigas, salmorejo y boquerones.',
	},
	{
		q: '¿Se puede tomar solo el aperitivo?',
		a: 'Sí. Una de las reseñas lo recomienda justo así: «Excelente lugar para tomar el aperitivo acompañado de buena gente y buenas tapas». La barra funciona desde primera hora y el local cierra a las 17:00, así que el aperitivo es de mediodía.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La ficha no publica el menú ni su precio. Por el tipo de casa y el horario es habitual que haya platos del día, pero esta web no lo afirma ni copia importes: se pregunta en el mostrador o en el 926 30 91 59.',
	},
	{
		q: '¿Se puede ver la carta o los precios?',
		a: 'Ni la ficha de Google ni esta web publican la carta: el establecimiento no la tiene colgada en su perfil. Los platos que aparecen aquí son los que nombran las reseñas y los que se ven en las fotos del perfil, sin precios. Para el precio del día, llama al 926 30 91 59.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso y asientos adaptados para sillas de ruedas. Lo que no tiene es aparcamiento adaptado. El local figura en planta baja, lo que ayuda, pero si necesitas un detalle concreto lo mejor es llamar antes de ir.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni una web propia. El canal es el teléfono 926 30 91 59, donde también se confirma el menú del día y la disponibilidad de mesa.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,4 sobre 5 con 482 reseñas (consultado el 2 de noviembre de 2026). Es una nota alta con muchas opiniones: las reseñas destacadas alaban el trato («muy buenos chicos, amables y buena comida, para repetir mucho») y las tapas del aperitivo.',
	},
	{
		q: '¿Esta web es del bar?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona reservas ni pedidos y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el propio local.',
	},
];

export const LEGAL = {
	razonSocial: 'Cafetería-Bar Molina',
	actualizado: 'Noviembre de 2026',
};
