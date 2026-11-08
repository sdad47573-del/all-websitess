/**
 * Datos de «La Casa de los Calamares» — C. de Toledo, 81, 13003 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9947583, -3.9279847, feature
 *   0xd6bc3028cf106d7:0xd8027af82a9f2bd8 (nombre, dirección, categoría,
 *   teléfono, valoración, accesibilidad y Plus Code), consultada el 2 de
 *   noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento, entre ellas
 *   una de la carta de bebidas.
 *
 * Avisos importantes:
 * - Google lo clasifica como «Bar restaurante». La ficha no publica horario ni
 *   web propia.
 * - Los precios que aparecen en la sección de bebidas están copiados de la foto
 *   de la carta del perfil y pueden haber cambiado: se indican como referencia.
 * - La media es 3,7 sobre 5 con 115 reseñas.
 */

export const BUSINESS = {
	name: 'La Casa de los Calamares',
	fullName: 'La Casa de los Calamares',
	mark: 'LC',
	street: 'C. de Toledo, 81',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13003',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/la-casa-de-los-calamares',
	geo: { lat: 38.9947583, lng: -3.9279847 },
	featureId: '0xd6bc3028cf106d7:0xd8027af82a9f2bd8',
	placeId: 'ChIJ1wbxjALDaw0R2CufKvh6Atg',
	channel: '/g/11m7mg7t36',
	plusCode: '8CCRX3VC+WR Ciudad Real',
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	phone: '642 38 41 02',
	phoneHref: 'tel:+34642384102',
	tagline: 'Frituras, bocadillos de calamar y cañas en la calle de Toledo',
	description:
		'La Casa de los Calamares, bar restaurante en la calle de Toledo, 81, de Ciudad Real (13003). Frituras de pescado, bocadillos de calamar, sardinas, paella y tapas para acompañar la caña. 3,7 sobre 5 con 115 reseñas en Google.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Casa+de+los+Calamares/@38.9947583,-3.9279847,17z/data=!4m6!3m5!1s0xd6bc3028cf106d7:0xd8027af82a9f2bd8!8m2!3d38.9947583!4d-3.9279847!16s%2Fg%2F11m7mg7t36',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9947583%2C-3.9279847',
	embed: 'https://maps.google.com/maps?q=38.9947583,-3.9279847&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9947583%2C-3.9279847',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 3.7,
	count: 115,
	label: '3,7',
};

/** La ficha no publica horario: la tabla recoge lo que sí consta. */
export const HOURS = [
	{ day: 'Horario', value: 'No publicado en Google Maps' },
	{ day: 'Teléfono', value: '642 38 41 02' },
	{ day: 'Entrada y asientos', value: 'Adaptados para sillas de ruedas' },
	{ day: 'Comida', value: 'Frituras, bocadillos y tapas' },
];

export const HORARIO_AVISO =
	'La ficha de Google no publica horario de apertura, así que esta web no puede confirmar cuándo abre. Lo que sí marca: entrada y asientos adaptados para sillas de ruedas. Para horario, mesa o encargos, llama al 642 38 41 02.';

export const SERVICIOS = [
	'Bar restaurante',
	'Frituras de pescado',
	'Bocadillos de calamar',
	'Buenas tapas',
	'Cañas bien frías',
	'Para llevar',
	'Acceso adaptado',
	'Terraza en la calle',
];

export const HIGHLIGHTS = [
	{
		title: 'Fritura de verdad',
		text: 'Las fotos del perfil son casi todas la misma escena: el plato de fritura recién hecha con el gajo de limón al lado. Calamares a la andaluza, boquerones, cazón y sardinas, en platos de borde azul y sobre las mesas rojas de la barra.',
	},
	{
		title: 'El bocadillo de calamar',
		text: 'La barra de pan partida, los calamares en anillas asomando y nada más. Es lo que la casa anuncia en el nombre y lo que aparece en dos de las fotos del perfil. También hay boquerones fritos con limón para picar.',
	},
	{
		title: 'Caña Calatrava',
		text: 'La cerveza de la casa es Calatrava, de Ciudad Real, y sale bien fría: una de las reseñas lo dice tal cual, «cerveza muy fría y buenas tapas». En las fotos hay cañas, jarras y tinto de verano sobre la mesa roja.',
	},
	{
		title: '3,7 con 115 reseñas',
		text: 'La ficha le da 3,7 sobre 5 con 115 reseñas (2 de noviembre de 2026). Las destacadas alaban la fritura («Buenas frituras de pescado y buenas sardinas y Paco el mejor camarero»), la cerveza y el trato («Buena gente, buen lugar y buena atención»).',
	},
];

export const MENU = [
	{
		title: 'Frituras',
		items: [
			{
				name: 'Calamares a la andaluza',
				note: 'En anillas, rebozados y fritos, con limón aparte',
			},
			{
				name: 'Boquerones fritos',
				note: 'A la andaluza, con gajo de limón, en plato de borde azul',
			},
			{
				name: 'Fritura variada',
				note: 'Calamares, boquerones y cazón mezclados en el mismo plato',
			},
			{
				name: 'Sardinas',
				note: 'Las que nombra una de las reseñas junto a la fritura',
			},
		],
	},
	{
		title: 'Bocadillos',
		items: [
			{
				name: 'Bocadillo de calamares',
				note: 'Barra de pan partida con las anillas dentro, sin más añadidos',
			},
		],
	},
	{
		title: 'Para compartir',
		items: [
			{
				name: 'Paella de marisco',
				note: 'Con gambas grandes y limón, en la paella sobre la mesa',
			},
			{
				name: 'Sartén de la casa',
				note: 'Para picar entre varios, con palitos de pan, según la foto del perfil',
			},
		],
	},
	{
		title: 'Bebidas',
		items: [
			{
				name: 'Caña Calatrava',
				note: '1,60 € en barra y 1,80 € en mesa según la foto de la carta',
			},
			{
				name: 'Jarra de cerveza (1 litro)',
				note: '5,00 € en barra y 6,00 € en mesa, según esa misma foto',
			},
			{
				name: 'Tinto de verano',
				note: '2,50 € en barra; también con vermú, según la carta',
			},
			{
				name: 'Refrescos y cafés',
				note: 'Café desde 1,20 €; refrescos a 2,20 €, según la carta del perfil',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Casa de los Calamares?',
		a: 'En la calle de Toledo, 81, de Ciudad Real (13003), con Plus Code 8CCRX3VC+WR y coordenadas 38.9947583, -3.9279847. Está en la salida de la ciudad hacia Toledo, en una zona de bares con terraza en la acera. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El 642 38 41 02, el número publicado en la ficha del establecimiento. Es un móvil, así que sirve para preguntar horario, reservar mesa o encargar fritura. Esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google no publica horario de apertura: no hay ninguna franja con horas. Como los datos públicos no lo dicen, esta página no lo inventa. Para saber cuándo abre, llama al 642 38 41 02.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Frituras de pescado: calamares a la andaluza, boquerones fritos, cazón y sardinas. También bocadillo de calamar, paella de marisco con gambas y una sartén para compartir. Las reseñas hablan de «buenas frituras de pescado y buenas sardinas» y de «buenas tapas».',
	},
	{
		q: '¿Hay precios publicados?',
		a: 'La ficha no publica la carta, pero en el perfil hay una foto de la carta de bebidas con importes: caña a 1,60 € en barra y 1,80 € en mesa, jarra de litro a 5,00 € y 6,00 €, tinto de verano a 2,50 €. Esta web los copia como referencia y avisa de que pueden haber cambiado. La comida no tiene precios publicados.',
	},
	{
		q: '¿Se puede comer en terraza?',
		a: 'Las fotos del perfil están hechas en mesas rojas de barra y en la acera, con las cañas y los platos de fritura al sol. La ficha no detalla cuántas mesas hay fuera ni si la terraza está siempre montada.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no publica sistema de reservas ni web propia, así que no se puede confirmar desde aquí. Si vais un grupo grande, lo más seguro es llamar antes al 642 38 41 02.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso y asientos adaptados para sillas de ruedas. No publica información sobre aseo o aparcamiento adaptado, así que no se puede confirmar desde aquí.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '3,7 sobre 5 con 115 reseñas (consultado el 2 de noviembre de 2026). Las tres destacadas son buenas: «Buenas frituras de pescado y buenas sardinas y Paco el mejor camarero», «Cerveza muy fría y buenas tapas» y «Buena gente, buen lugar y buena atención».',
	},
	{
		q: '¿Esta web es del bar?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona reservas ni pedidos y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el propio bar.',
	},
];

export const LEGAL = {
	razonSocial: 'La Casa de los Calamares',
	actualizado: 'Noviembre de 2026',
};
