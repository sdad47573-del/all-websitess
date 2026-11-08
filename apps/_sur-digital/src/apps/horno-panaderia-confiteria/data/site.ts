/**
 * Datos de Horno panadería confitería — C. Hermano Juan Fernández, 29, Levante, 14014.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Horno panadería confiteria,
 *   37.8947672,-4.7536916, feature 0xd6cdf16a36afc35:0xe347e9970fb6e690.
 * - Nombre, dirección, categoría, valoración, reseñas y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Foto: galería del perfil de Google Maps del establecimiento.
 * - Barras, vienas, croissants, donuts, napolitanas, pan ecológico (centeno,
 *   integral y espelta) y pan para migas: pizarra de la puerta que aparece en
 *   esa foto. Empanadas y tartas: carteles de la ventana.
 *
 * La ficha no publica teléfono, horario, descripción, web, correo, redes,
 * carta con precios, métodos de pago ni reparto, y no muestra los textos de
 * las reseñas. Esta web no inventa ninguno de esos datos.
 */

export const BUSINESS = {
	name: 'Horno panadería confitería',
	shortName: 'Horno panadería',
	mark: 'H',
	street: 'C. Hermano Juan Fernández, 29',
	district: 'Levante',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14014',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.6,
	reviewsCount: 5,
	siteUrl: 'https://www.sur-digital.com/horno-panaderia-confiteria',
	geo: { lat: 37.8947672, lng: -4.7536916 },
	featureId: '0xd6cdf16a36afc35:0xe347e9970fb6e690',
	placeId: 'ChIJNfxqoxbfbA0RkOa2D5fpR-M',
	googleCategory: 'Panadería',
	tagline: 'Panadería y confitería en el Levante',
	description:
		'Horno panadería confitería, en la calle Hermano Juan Fernández, 29 (Levante, 14014 Córdoba). Panadería y confitería de barrio: barras, vienas, bollería, empanadas, tartas y pan 100% ecológico de centeno, integral y espelta, según su pizarra. 4,6 sobre 5 con 5 reseñas en Google. La ficha no publica teléfono ni horario.',
	hoursSummary: 'Horario no publicado en Google',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Horno+panader%C3%ADa+confiteria/@37.8947672,-4.7536916,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf16a36afc35:0xe347e9970fb6e690!8m2!3d37.8947672!4d-4.7536916!16s%2Fg%2F11ft9gn0_x?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJNfxqoxbfbA0RkOa2D5fpR-M',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8947672%2C-4.7536916',
	embed: 'https://maps.google.com/maps?q=37.8947672,-4.7536916&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8947672,-4.7536916',
};

/** La ficha no publica horario; la fila lo dice en vez de inventarlo. */
export const HOURS = [{ day: 'Horario', value: 'No publicado en Google' }];

export const HOURS_NOTE =
	'Google no publica el horario de este horno en su ficha (consultada en octubre de 2026). La web no lo inventa: confirma en la ficha o pásate antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Pan ecológico',
	'Bollería',
	'Empanadas',
];

export const HIGHLIGHTS = [
	{
		title: 'La pizarra de la puerta',
		text: 'Anuncia barras, vienas, croissants, donuts, napolitanas y pan 100% ecológico de centeno, integral y espelta.',
	},
	{
		title: 'Carteles de la ventana',
		text: 'La vitrina añade empanadas, pan para migas y tartas «distintos sabores y diseños» por encargo.',
	},
	{
		title: 'Datos que faltan',
		text: 'Google no publica teléfono ni horario de este horno; sí la dirección y una nota de 4,6 sobre 5 con 5 reseñas.',
	},
];

export const PIZARRA = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Barra',
				note: 'La pizarra de la entrada la anuncia junto a la viena. No se repiten los precios del cartel.',
			},
			{
				name: 'Viena',
				note: 'Aparece en la pizarra, en la oferta de la casa. Precio no publicado en la web.',
			},
			{
				name: 'Pan 100% ecológico',
				note: 'La pizarra cita tres harinas: centeno, integral y espelta.',
			},
			{
				name: 'Pan para migas',
				note: 'Lo anuncia un cartel de la ventana, pensado para hacer migas.',
			},
		],
	},
	{
		title: 'La confitería',
		items: [
			{
				name: 'Croissants, donuts y napolitanas',
				note: 'La pizarra los agrupa en una oferta de bollería. La ficha no publica catálogo.',
			},
			{
				name: 'Empanadas',
				note: 'Un cartel de la ventana las anuncia como «Empanadas Río Grande».',
			},
			{
				name: 'Tartas',
				note: 'Los carteles hablan de tartas con «distintos sabores y diseños», por encargo.',
			},
		],
	},
];

export const FICHA = [
	{ label: 'Dirección', value: 'C. Hermano Juan Fernández, 29 · Levante, 14014 Córdoba' },
	{ label: 'Categoría en Google', value: 'Panadería' },
	{ label: 'Valoración', value: '4,6 sobre 5 · 5 reseñas' },
	{ label: 'Teléfono', value: 'No publicado' },
	{ label: 'Horario', value: 'No publicado' },
	{ label: 'Precios', value: 'No publicados' },
	{ label: 'Web y redes', value: 'No publicadas' },
	{
		label: 'Accesibilidad',
		value: 'Sin aparcamiento adaptado; la ficha no detalla el acceso ni el aseo',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está este horno?',
		a: 'En la calle Hermano Juan Fernández, 29, en el distrito Levante (14014 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario, así que esta página no lo indica. Confirma en la ficha o pásate antes de ir.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha pública no incluye teléfono, web, correo ni redes sociales. Por ahora la única referencia publicada es la dirección y el mapa.',
	},
	{
		q: '¿Qué se vende?',
		a: 'Panadería y confitería. La pizarra de la puerta anuncia barras, vienas, croissants, donuts, napolitanas, pan 100% ecológico de centeno, integral y espelta, y pan para migas; los carteles de la ventana añaden empanadas y tartas. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Hacen pan ecológico?',
		a: 'La pizarra de la entrada anuncia «pan 100% ecológico» con centeno, integral y espelta. La ficha no da más detalles de elaboración ni de formatos.',
	},
	{
		q: '¿Sigue abierto?',
		a: 'La ficha de Google no lo marca como cerrado, pero tampoco publica horario ni teléfono, así que desde aquí no se puede confirmar la apertura. Consulta la ficha o pásate antes de ir.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No hay horario publicado, así que no se puede confirmar. La ficha de Google no marca días de apertura.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo indica que no hay aparcamiento accesible con silla de ruedas. No publica datos sobre el acceso al local ni sobre el aseo.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 5 reseñas en Google. En esta consulta la ficha muestra la nota, pero no los textos de las opiniones.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada.',
	},
];
