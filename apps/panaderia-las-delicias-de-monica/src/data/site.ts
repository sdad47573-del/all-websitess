/**
 * Datos de Panadería Las Delicias de Mónica — Mercado de Huelin, C. la Hoz
 * (Carretera de Cádiz, 29002 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Las Delicias de Mónica,
 *   36.702994,-4.4381767, feature 0xd72f779b07b5b51:0xe5a21a6760029671.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario,
 *   accesibilidad, descripción del negocio y fotos: ficha pública de Google
 *   (octubre de 2026).
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, página web,
 * correo ni redes sociales. El mostrador recoge solo lo que dice la
 * descripción del negocio y lo que se ve en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Panadería Las Delicias de Mónica',
	shortName: 'Las Delicias',
	mark: 'M',
	street: 'Mercado de Huelin, C. la Hoz',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29002',
	country: 'ES',
	phone: '600 25 89 07',
	phoneHref: 'tel:+34600258907',
	rating: 5,
	reviewsCount: 7,
	siteUrl: 'https://panaderia-las-delicias-de-monica.vercel.app',
	geo: { lat: 36.702994, lng: -4.4381767 },
	featureId: '0xd72f779b07b5b51:0xe5a21a6760029671',
	placeId: 'ChIJUVt7sHn3cg0RcZYCYGcaouU',
	googleCategory: 'Pastelería',
	tagline: 'Panadería, pastelería y bollería dentro del Mercado de Huelin',
	description:
		'Panadería Las Delicias de Mónica, en el Mercado de Huelin (C. la Hoz, 29002 Málaga). Pan, bollería, tartas de fruta y dulces por encargo. 5 sobre 5 en Google con 7 reseñas. Teléfono 600 25 89 07.',
	hoursSummary: 'Lunes a sábado, 8:00–15:00 · Domingo, cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panaderia+las+delicias+de+M%C3%B3nica/@36.702994,-4.4381767,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f779b07b5b51:0xe5a21a6760029671!8m2!3d36.702994!4d-4.4381767!16s%2Fg%2F11yp9v0xht?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.702994%2C-4.4381767',
	embed: 'https://maps.google.com/maps?q=36.702994,-4.4381767&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '8:00–15:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google (octubre de 2026). El domingo figura como cerrado; para el domingo 1 de noviembre, Día de Todos los Santos, la ficha avisa de que el horario podría ser diferente. Conviene llamar antes de ir.';

/** Reseñas destacadas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Muy buena calidad del pan y de los dulces a muy buen precio.',
	},
	{
		rating: 5,
		text: 'He comprado un tronco de navidad y es lo mejor que he probado',
	},
];

/** Lo que la descripción del negocio y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Bollería',
	'Encargos',
	'Tronco de navidad',
];

export const HIGHLIGHTS = [
	{
		title: 'Dentro del mercado',
		text: 'El puesto está en el Mercado de Huelin: rótulo negro, paredes blancas, el horno al fondo y el pan en la vitrina. Al lado se ve el puesto de Nicolás.',
	},
	{
		title: 'La vitrina',
		text: 'Éclairs de chocolate con nata, croissants rellenos, pasteles rosas glaseados, tartaletas de kiwi y mandarina y triángulos de almendra.',
	},
	{
		title: 'Los encargos',
		text: 'La descripción habla de encargos de panadería, pastelería y bollería. En las fotos hay una tarta de fruta con el nombre «Rafa» y troncos de chocolate.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Panadería',
		items: [
			{
				name: 'Hogazas y barras',
				note: 'En la vitrina del puesto, junto a los panes envasados y las bolsas de pan de molde.',
			},
			{
				name: 'Pan del día',
				note: 'Una de las reseñas lo resume así: «muy buena calidad del pan».',
			},
			{
				name: 'Panes envasados',
				note: 'Bolsas y piezas envasadas en el mostrador, en las fotos del perfil.',
			},
		],
	},
	{
		title: 'Bollería',
		items: [
			{
				name: 'Croissants rellenos',
				note: 'De crema pastelera, con caramelos de colores por encima en una de las bandejas.',
			},
			{
				name: 'Éclairs de chocolate',
				note: 'Bañados en chocolate y rellenos de nata, en bandeja dorada.',
			},
			{
				name: 'Pasteles glaseados',
				note: 'Rosas, con líneas de azúcar, apilados en la bandeja.',
			},
		],
	},
	{
		title: 'Pastelería',
		items: [
			{
				name: 'Tartas de fruta',
				note: 'Con fresa, kiwi, melocotón o mandarina sobre crema, en formato redondo y rectangular.',
			},
			{
				name: 'Tartas de cumpleaños',
				note: 'Por encargo; una de las fotos lleva una placa con el nombre «Rafa».',
			},
			{
				name: 'Troncos y dulces de chocolate',
				note: 'Troncos con nata, cuadrados de chocolate y triángulos de almendra.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Las Delicias de Mónica?',
		a: 'Dentro del Mercado de Huelin, en la calle la Hoz, en Carretera de Cádiz (29002 Málaga). Es un puesto del mercado, no un local a pie de calle; el mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 8:00 a 15:00 y el domingo figura como cerrado. Para el domingo 1 de noviembre, Día de Todos los Santos, la ficha avisa de que el horario podría ser diferente.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono, en el 600 25 89 07. La ficha de Google no publica página web, correo electrónico ni redes sociales.',
	},
	{
		q: '¿Hacen encargos?',
		a: 'Sí. La descripción del negocio habla de encargos de panadería, pastelería y bollería. En las fotos hay una tarta de fruta con una placa de cumpleaños y troncos de chocolate. El encargo se hace por teléfono o en el propio puesto; no hay pedidos online.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería y pastelería: hogazas y barras, pan envasado, croissants rellenos, éclairs de chocolate, pasteles glaseados, tartas de fruta, tartas de cumpleaños, troncos, cuadrados de chocolate y dulces de almendra. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Venden tronco de navidad?',
		a: 'Una de las reseñas de Google dice: «he comprado un tronco de navidad y es lo mejor que he probado». En las fotos hay troncos de chocolate con nata. Es un producto de temporada, así que conviene confirmar su disponibilidad por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica acceso para sillas de ruedas, aparcamiento adaptado y aseo adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5 sobre 5 con 7 reseñas en Google. Las dos que se citan en esta página son las destacadas de la ficha y ambas son de cinco estrellas.',
	},
	{
		q: '¿Se puede desayunar allí?',
		a: 'La ficha describe un puesto de panadería y pastelería dentro del mercado y no publica mesas, terraza ni servicio de cafetería. Esta página no afirma que haya sitio para sentarse; si lo necesitas, llama antes.',
	},
];
