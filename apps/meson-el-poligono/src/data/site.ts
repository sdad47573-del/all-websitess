/**
 * Datos de Mesón El Polígono — C. Segadores, 2, 13170 Miguelturra (Ciudad Real).
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bdcd12bd3de45:0x5dbc32ad836772c4, código
 * /g/11hbqck1h7).
 *
 * La ficha publica: «Mesón El Polígono», categorías «Bar restaurante» y «Bar de
 * brunch», teléfono 926 09 02 23, 4,7 sobre 5 con 259 reseñas y horario de
 * desayunos y comidas de lunes a sábado con el domingo cerrado. No publica carta
 * con precios.
 */

export const BUSINESS = {
	name: 'Mesón El Polígono',
	shortName: 'El Polígono',
	mark: 'MP',
	street: 'C. Segadores, 2',
	district: 'Polígono La Estrella',
	city: 'Miguelturra',
	region: 'Castilla-La Mancha',
	regionName: 'Castilla-La Mancha',
	postalCode: '13170',
	country: 'ES',
	siteUrl: 'https://meson-el-poligono.vercel.app',
	geo: { lat: 38.9699673, lng: -3.8996377 },
	featureId: '0xd6bdcd12bd3de45:0x5dbc32ad836772c4',
	plusCode: '8CCRX492+X4',
	category: 'Bar restaurante',
	categories: ['Bar restaurante', 'Bar de brunch'],
	phone: '926 09 02 23',
	phoneHref: '+34926090223',
	rating: 4.7,
	reviewsCount: 259,
	tagline: 'Desayunos, menú y tapas en el polígono',
	description:
		'Mesón El Polígono, bar restaurante en la calle Segadores, 2, Polígono La Estrella, 13170 Miguelturra (Ciudad Real). Desayunos, menú del día y tapas de lunes a sábado, con el domingo cerrado. Teléfono 926 09 02 23.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Mes%C3%B3n+El+Pol%C3%ADgono/@38.9699673,-3.8996377,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bdcd12bd3de45:0x5dbc32ad836772c4!8m2!3d38.9699673!4d-3.8996377!16s%2Fg%2F11hbqck1h7',
	reviews: 'https://www.google.com/maps/place/Mes%C3%B3n+El+Pol%C3%ADgono/@38.9699673,-3.8996377,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bdcd12bd3de45:0x5dbc32ad836772c4!8m2!3d38.9699673!4d-3.8996377!16s%2Fg%2F11hbqck1h7',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9699673%2C-3.8996377',
	embed: 'https://maps.google.com/maps?q=38.9699673,-3.8996377&z=17&hl=es&output=embed',
};

/** Horario que publica la ficha: de desayunos a la sobremesa, domingo cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '6:30–16:00' },
	{ dia: 'Martes', horas: '6:30–16:00' },
	{ dia: 'Miércoles', horas: '6:30–16:00' },
	{ dia: 'Jueves', horas: '6:30–16:00' },
	{ dia: 'Viernes', horas: '6:30–16:00' },
	{ dia: 'Sábado', horas: '6:30–16:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

export const HORARIO_AVISO =
	'La ficha abre de 6:30 a 16:00 de lunes a sábado y cierra los domingos. En festivos puede cambiar: la propia ficha avisa de que en el Día de Todos los Santos el local permanece cerrado.';

/** Lo que la ficha y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Bar restaurante',
	'Desayunos',
	'Menú del día',
	'Tapas y raciones',
	'Para llevar',
	'Domingo cerrado',
];

export const FAQ = [
	{
		q: '¿Dónde está Mesón El Polígono?',
		a: 'En la calle Segadores, 2, en el Polígono La Estrella de Miguelturra, 13170 Ciudad Real. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De 6:30 a 16:00 de lunes a sábado, con el domingo cerrado. Cubre desayunos, aperitivos y comidas, así que lo habitual es llegar por la mañana o a mediodía.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como bar restaurante y bar de brunch. Esta página nombra solo lo que aparece en las fotos del perfil y en las reseñas; no hay carta publicada con precios.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La ficha de Google no publica la carta ni el precio del menú. Para saber qué hay ese día y cuánto cuesta, lo mejor es llamar al 926 09 02 23 antes de ir.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no ofrece reservas online y esta web no las gestiona. Las mesas se piden en el local o por teléfono, en el 926 09 02 23.',
	},
	{
		q: '¿Tiene terraza o aparcamiento?',
		a: 'La ficha no detalla terraza. Al estar en un polígono industrial, lo normal es aparcar en la calle; esta página no afirma nada que la ficha no publique.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca entrada, aseo, aparcamiento y asientos accesibles para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma siete sobre cinco con 259 reseñas. En la ficha están todas, también las que puntúan por debajo, y son las que mandan.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha de Google no enlaza ninguna web del negocio. Esta página es informativa y no es un canal oficial de pedidos ni de reservas.',
	},
];

export const AVISO_FOTOS =
	'Imágenes alojadas en esta página y provenientes del perfil del establecimiento en Google Maps. Si tienes los derechos de alguna y quieres retirarla, avísanos y la borramos.';
