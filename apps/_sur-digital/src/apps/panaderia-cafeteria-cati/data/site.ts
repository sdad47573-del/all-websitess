/**
 * Datos de Panadería cafetería Cati — C. Aben Mazarra, 37 (Nte. Sierra), 14006.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería cafetería Cati,
 *   37.8985944,-4.7742529, feature 0xd6cdfcaeff2a0ad:0xe4bc7aa1be577256.
 * - Nombre, teléfono principal, categoría, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 * - Número 37, «desde 1960», titular (Francisco Sierra Torres), segundo
 *   teléfono y correo: tarjeta del propio local que aparece en una de las
 *   fotos, y placa de la calle de la esquina.
 *
 * La ficha de Google escribe la dirección como «Nte. Sierra» y no da número;
 * la tarjeta del local y la placa dan C. Aben Mazarra, 37. Se muestran ambas.
 * La ficha no publica carta, precios, métodos de pago ni reparto: esta web no
 * los inventa. El surtido se apoya en los toldos, las fotos y las reseñas.
 */

export const BUSINESS = {
	name: 'Panadería cafetería Cati',
	shortName: 'Cati',
	mark: 'C',
	street: 'C. Aben Mazarra, 37',
	district: 'Nte. Sierra',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14006',
	country: 'ES',
	phone: '655 19 88 13',
	phoneHref: 'tel:+34655198813',
	cardPhone: '660 715 022',
	email: 'francosisierra7@hotmail.com',
	owner: 'Francisco Sierra Torres',
	founded: 1960,
	rating: 4.7,
	reviewsCount: 41,
	siteUrl: 'https://www.sur-digital.com/panaderia-cafeteria-cati',
	geo: { lat: 37.8985944, lng: -4.7742529 },
	featureId: '0xd6cdfcaeff2a0ad:0xe4bc7aa1be577256',
	placeId: 'ChIJraDy78rfbA0RVnJXvqF6vOQ',
	googleCategory: 'Panadería',
	tagline: 'Panadería, confitería y cafetería desde 1960',
	description:
		'Panadería cafetería Cati, en la calle Aben Mazarra, 37 (Nte. Sierra, 14006 Córdoba). Casa fundada en 1960: panadería, confitería, cafetería y ultramarinos en la misma esquina. Pan del día y desayunos desde las 6:30. De lunes a viernes de 6:30 a 15:00 y de 17:30 a 21:00; sábado de 7:15 a 15:00; domingo en dos turnos. 4,7 sobre 5 con 41 reseñas. Teléfono 655 19 88 13.',
	hoursSummary: 'L–V 6:30–15:00 y 17:30–21:00 · S 7:15–15:00 · D 7:15–15:00 y 17:30–21:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+cafeter%C3%ADa+Cati/@37.8985944,-4.7742529,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdfcaeff2a0ad:0xe4bc7aa1be577256!8m2!3d37.8985944!4d-4.7742529!16s%2Fg%2F11hz_51bm5?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJraDy78rfbA0RVnJXvqF6vOQ',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8985944%2C-4.7742529',
	embed: 'https://maps.google.com/maps?q=37.8985944,-4.7742529&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8985944,-4.7742529',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '6:30–15:00 · 17:30–21:00' },
	{ day: 'Sábado', value: '7:15–15:00' },
	{ day: 'Domingo', value: '7:15–15:00 · 17:30–21:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Entre semana abre a las 6:30 y sirve dos turnos, hasta las 15:00 y de 17:30 a 21:00; el sábado solo por la mañana y el domingo repite los dos turnos. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = ['Panadería', 'Confitería', 'Cafetería', 'Ultramarinos', 'Droguería'];

export const HIGHLIGHTS = [
	{
		title: 'Desde 1960',
		text: 'La tarjeta del local lo presenta como «Cafetería Cati Panadería» desde 1960, con Francisco Sierra Torres al frente.',
	},
	{
		title: 'La esquina entera',
		text: 'Los toldos reparten el negocio: panadería y confitería a un lado, alimentación, ultramarinos y droguería en la misma esquina.',
	},
	{
		title: 'Café y tostadas',
		text: 'Las reseñas hablan de la tostada y del café, y de un trato «casi familiar». Entre semana abre a las 6:30.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El mostrador',
		items: [
			{
				name: 'Pan del día',
				note: 'La vitrina de las fotos muestra barras y hogazas, con bolsas de picos y reges detrás. La ficha no publica precios.',
			},
			{
				name: 'Barras y baguettes',
				note: 'En el mostrador se ven barras de corte abierto y baguettes alineadas por tandas.',
			},
			{
				name: 'Picos y reges',
				note: 'Las bolsas de la vitrina son de picos y reges La Laurel. La ficha no detalla variedades ni importes.',
			},
		],
	},
	{
		title: 'La cafetería',
		items: [
			{
				name: 'Café',
				note: 'La taza de las fotos se sirve con Catunambú, «el café de Andalucía». También hay cartel de café con hielo y horchata.',
			},
			{
				name: 'Tostadas',
				note: '«Gran trato y gran tostada, muy ricas», dice una de las reseñas. La ficha no publica carta ni precios.',
			},
			{
				name: 'Desayunos',
				note: '«Un buen sitio para desayunar», resume otra reseña. Las mesas están dentro, junto a la entrada.',
			},
		],
	},
	{
		title: 'La tienda',
		items: [
			{
				name: 'Ultramarinos',
				note: 'Las estanterías de las fotos están llenas de conservas, aceites, snacks y bebidas.',
			},
			{
				name: 'Droguería',
				note: 'El toldo de la esquina anuncia droguería; el escaparate enseña limpieza y aseo.',
			},
			{
				name: 'Confitería',
				note: 'El toldo y la tarjeta citan la confitería. La ficha no publica catálogo ni precios de dulces.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cati?',
		a: 'En la calle Aben Mazarra, 37, en la zona de Nte. Sierra (14006 Córdoba). La ficha de Google escribe «Nte. Sierra» sin número; el 37 y el nombre de la vía aparecen en la tarjeta del local y en la placa de la esquina. El mapa abre el punto exacto y «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, de 6:30 a 15:00 y de 17:30 a 21:00; el sábado, de 7:15 a 15:00, y el domingo, de 7:15 a 15:00 y de 17:30 a 21:00. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha de Google es el 655 19 88 13. La tarjeta del local añade el 660 715 022 y el correo francosisierra7@hotmail.com. No figura web propia ni enlace a redes.',
	},
	{
		q: '¿Desde cuándo existe la casa?',
		a: 'La tarjeta del establecimiento indica «desde 1960» y presenta la casa como «Cafetería Cati Panadería». La ficha de Google no recoge esa fecha.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan del día, bollería y confitería, café y desayunos, y productos de ultramarinos y droguería. Los toldos de la esquina anuncian panadería, confitería, alimentación, ultramarinos y droguería. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Se puede desayunar allí?',
		a: 'Sí. Las fotos muestran mesas y sillas dentro del local y una taza de café; las reseñas citan la tostada y el desayuno. La ficha no publica la carta ni los precios.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. El domingo abre de 7:15 a 15:00 y vuelve por la tarde, de 17:30 a 21:00, según la ficha de Google. El sábado, en cambio, solo abre por la mañana.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. También indica que no hay aparcamiento accesible con silla de ruedas. No publica datos sobre el aseo.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 41 reseñas en Google. Entre las destacadas: «Gran trato y gran tostada, muy ricas, me recordaron a mi infancia», «Buen servicio, calidad en los productos y un trato casi familiar» y «Un buen sitio para desayunar».',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el local o por teléfono.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. Se consulta por teléfono.',
	},
	{
		q: '¿Quién regenta el negocio?',
		a: 'La tarjeta del local pone al frente a Francisco Sierra Torres. La ficha de Google solo publica el nombre comercial, Panadería cafetería Cati.',
	},
];
