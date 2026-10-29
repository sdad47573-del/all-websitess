/**
 * Datos de Panadería Cafetería Joyma — Sureste, 14010 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Cafeteria Joyma,
 *   C. Periodista José Luis de Córdoba, 37.8778159,-4.7609067,
 *   feature 0xd6d20799b271c83:0xd0330963597eaaa4.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas, horario,
 *   accesibilidad y descripción del negocio: ficha pública de Google
 *   (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con la
 * descripción publicada por el negocio, las reseñas y las fotos.
 */

export const BUSINESS = {
	name: 'Panadería Cafetería Joyma',
	shortName: 'Joyma',
	mark: 'J',
	street: 'C. Periodista José Luis de Córdoba',
	district: 'Sureste',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14010',
	country: 'ES',
	phone: '618 34 96 15',
	phoneHref: 'tel:+34618349615',
	rating: 4.6,
	reviewsCount: 57,
	siteUrl: 'https://panaderia-cafeteria-joyma.vercel.app',
	geo: { lat: 37.8778159, lng: -4.7609067 },
	featureId: '0xd6d20799b271c83:0xd0330963597eaaa4',
	placeId: 'ChIJgxwnm3kgbQ0RpKp-WWMJM9A',
	googleCategory: 'Panadería',
	tagline: 'Panadería y cafetería que abre a las 6:00',
	description:
		'Panadería Cafetería Joyma, en la calle Periodista José Luis de Córdoba (Sureste, 14010 Córdoba). Panadería y cafetería que abre a las 6:00: desayunos, teleras, barras, molletes, pan de horno de leña y migas por encargo. De lunes a viernes de 6:00 a 15:00; sábado y domingo cerrado. 4,6 sobre 5 con 57 reseñas. Teléfono 618 34 96 15.',
	hoursSummary: 'L–V 6:00–15:00 · sábado y domingo cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Cafeteria+Joyma/@37.8778159,-4.7609067,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d20799b271c83:0xd0330963597eaaa4!8m2!3d37.8778159!4d-4.7609067!16s%2Fg%2F11cmg1cwmv?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJgxwnm3kgbQ0RpKp-WWMJM9A',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8778159%2C-4.7609067',
	embed: 'https://maps.google.com/maps?q=37.8778159,-4.7609067&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8778159,-4.7609067',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '6:00–15:00' },
	{ day: 'Sábado', value: 'Cerrado', closed: true },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre de lunes a viernes de 6:00 a 15:00 y cierra sábados y domingos. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Cafetería',
	'Desayunos',
	'Pan de horno de leña',
	'Teleras',
	'Molletes',
	'Migas por encargo',
	'Terraza',
];

export const HIGHLIGHTS = [
	{
		title: 'Abre a las 6:00',
		text: 'La ficha de Google marca de lunes a viernes un horario de 6:00 a 15:00. «Abrimos bien temprano ofreciendo riquísimos desayunos», dice la descripción del negocio.',
	},
	{
		title: 'Pan de horno de leña',
		text: 'La descripción publicada añade teleras, barras, molletes, pan elaborado en horno de leña y migas por encargo.',
	},
	{
		title: 'Desayuno en la terraza',
		text: '«Café muy rico y la tostada bien de tamaño», cuenta una reseña. Otra destaca el trato: «Jose siempre simpático para los demás».',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El horno',
		items: [
			{
				name: 'Teleras',
				note: 'La descripción del negocio en Google las menciona junto a las barras y los molletes.',
			},
			{
				name: 'Barras',
				note: 'Pan del día, según la descripción publicada por el propio negocio.',
			},
			{
				name: 'Molletes',
				note: 'En las fotos se ve un mollete tostado con tomate y jamón. La ficha no publica precios.',
			},
			{
				name: 'Pan de horno de leña',
				note: 'La descripción de Google lo destaca expresamente. No detalla formatos ni precios.',
			},
		],
	},
	{
		title: 'El desayuno',
		items: [
			{
				name: 'Café',
				note: '«Café muy rico», dice una reseña. En las fotos se ven cafés con leche y solo, servidos en vaso.',
			},
			{
				name: 'Tostadas y molletes',
				note: '«La tostada bien de tamaño», cuenta otra reseña. En las fotos, con tomate rallado, jamón y aceite.',
			},
			{
				name: 'Desayunos',
				note: 'La descripción del negocio abre con «riquísimos desayunos». La ficha no publica carta ni precios.',
			},
		],
	},
	{
		title: 'Por encargo',
		items: [
			{
				name: 'Migas por encargo',
				note: 'La descripción de Google las anuncia «por encargo». No publica plazos ni precios.',
			},
			{
				name: 'Pan para llevar',
				note: 'Teleras, barras y molletes, según la descripción del negocio.',
			},
			{
				name: 'Encargos',
				note: 'No hay más datos publicados: se pregunta en el local o por teléfono.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Cafetería Joyma?',
		a: 'En la calle Periodista José Luis de Córdoba, en el distrito Sureste de Córdoba (14010). La ficha no publica número, así que el mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre de lunes a viernes de 6:00 a 15:00; sábado y domingo cierra. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono que publica la ficha de Google es el 618 34 96 15. No figuran web propia, correo ni redes sociales.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La descripción del negocio en Google anuncia desayunos, teleras, barras, molletes, pan elaborado en horno de leña y migas por encargo. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Hacen migas por encargo?',
		a: 'Sí, según la descripción publicada por el propio negocio en Google: «migas por encargo». La ficha no detalla plazos, cantidades ni precios; conviene llamar al 618 34 96 15.',
	},
	{
		q: '¿Hay pan de horno de leña?',
		a: 'La descripción del negocio lo menciona expresamente: «pan elaborado en horno de leña». No publica variedades ni precios.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. La ficha la clasifica como panadería y cafetería, y la descripción habla de «riquísimos desayunos». Las reseñas mencionan el café y las tostadas; en las fotos se ven cafés y molletes con tomate y jamón.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'En las fotos del perfil se ven mesas y sillas en la acera, junto al toldo del local, con clientes sentados. La ficha no detalla el número de mesas.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. También indica que no hay aparcamiento accesible para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 57 reseñas en Google, que la clasifica como panadería. Las reseñas destacan el café, las tostadas y el trato.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en la barra.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
