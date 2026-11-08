/**
 * Datos de La Sultana — C. del Lirio, 37, 13004 Ciudad Real.
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bc3f807ad06e1:0x443199b336073107, place id
 * ChIJ4QatB_jDaw0RBzEHNrOZMUQ, código /g/11x5l11m1n).
 *
 * La ficha publica: «La Sultana», categoría «Restaurante marroquí», teléfono
 * 643 89 94 42, 4,3 sobre 5 con 81 reseñas, horario de comidas y cenas con el
 * lunes cerrado, y los distintivos de negocio de propietarias mujeres y local
 * amable con las personas LGBTQ+. No publica carta con precios.
 */

export const BUSINESS = {
	name: 'La Sultana',
	shortName: 'La Sultana',
	mark: 'LS',
	street: 'C. del Lirio, 37',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	regionName: 'Castilla-La Mancha',
	postalCode: '13004',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/la-sultana',
	geo: { lat: 38.9887915, lng: -3.924412 },
	featureId: '0xd6bc3f807ad06e1:0x443199b336073107',
	placeId: 'ChIJ4QatB_jDaw0RBzEHNrOZMUQ',
	category: 'Restaurante marroquí',
	phone: '643 89 94 42',
	phoneHref: '+34643899442',
	rating: 4.3,
	reviewsCount: 81,
	tagline: 'Pastela, cuscús y tajines en el centro de Ciudad Real',
	description:
		'La Sultana, restaurante marroquí en la calle del Lirio, 37, 13004 Ciudad Real. Pastela, cuscús de pollo, tajines y té a la menta, con menú diario para comer o cenar. Lunes cerrado. Teléfono 643 89 94 42.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Sultana/@38.9887915,-3.924412,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3f807ad06e1:0x443199b336073107!8m2!3d38.9887915!4d-3.924412!16s%2Fg%2F11x5l11m1n?hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${'ChIJ4QatB_jDaw0RBzEHNrOZMUQ'}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9887915%2C-3.924412',
	embed: 'https://maps.google.com/maps?q=38.9887915,-3.924412&z=17&hl=es&output=embed',
};

/** Horario que publica la ficha: dos turnos de miércoles a domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '19:00–24:00 · solo cena' },
	{ dia: 'Miércoles', horas: '10:30–16:00 · 19:00–24:00' },
	{ dia: 'Jueves', horas: '10:30–16:00 · 19:00–24:00' },
	{ dia: 'Viernes', horas: '10:30–16:00 · 19:00–24:00' },
	{ dia: 'Sábado', horas: '10:30–16:00 · 19:00–24:00' },
	{ dia: 'Domingo', horas: '10:30–16:00 · 19:00–24:00' },
];

export const HORARIO_AVISO =
	'La ficha abre de 10:30 a 16:00 y de 19:00 a 24:00 de miércoles a domingo. Los martes solo por la noche, de 19:00 a 24:00, y los lunes cierra. En festivos puede cambiar: la propia ficha avisa de que en el Día de Todos los Santos el horario podría ser distinto.';

/** Lo que la ficha, las fotos y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Restaurante marroquí',
	'Menú diario',
	'Cafetería y bar',
	'Pastas sin gluten',
	'Negocio de propietarias mujeres',
	'Lunes cerrado',
];

/** Reseñas destacadas en la ficha, todas de cinco estrellas. */
export const RESENAS = [
	{
		quote: 'Pedimos pastela que estaba espectacular y cous cous de pollo, riquísimo.',
		rating: 5,
	},
	{
		quote: 'Estuve comiendo con unas amigas y la experiencia fue una pasada.',
		rating: 5,
	},
	{
		quote: 'Las raciones son abundantes y precios muy buenos.',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Sultana?',
		a: 'En la calle del Lirio, 37, 13004 Ciudad Real, en el centro. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De miércoles a domingo abre de 10:30 a 16:00 y de 19:00 a 24:00. Los martes solo sirve cena, de 19:00 a 24:00, y los lunes cierra. En festivos el horario puede variar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como restaurante marroquí. En sus fotos aparecen pastelas, cuscús, tajín de verduras con garbanzos, pastas marroquíes y té con hierbabuena; las reseñas que Google destaca citan la pastela y el cuscús de pollo. No hay carta publicada con precios.',
	},
	{
		q: '¿Hay menú diario?',
		a: 'El rótulo de la fachada anuncia menú diario. La ficha no publica ni el contenido ni el precio, así que se pregunta en el local o en el 643 89 94 42.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no ofrece reservas online y esta página no las gestiona. Las mesas se piden en el local o por teléfono, en el 643 89 94 42.',
	},
	{
		q: '¿Hay opciones sin gluten?',
		a: 'En la vitrina de pastas del local hay un cartel de «Sin Gluten» junto a una bandeja, y una de las fotos del perfil lo recoge. Al no publicarse carta ni alérgenos, conviene confirmarlo al pedir.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca aseo adaptado y aparcamiento adaptado para sillas de ruedas. De la entrada y de los asientos no publica nada, así que esta página no lo afirma.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma tres sobre cinco con 81 reseñas. Las tres que Google destaca son de cinco estrellas y hablan de la pastela, el cuscús, el trato y los precios; en la ficha están todas.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha de Google no enlaza ninguna web del negocio. Esta página es informativa y no es un canal oficial de pedidos ni de reservas.',
	},
];

export const AVISO_FOTOS =
	'Imágenes alojadas en esta página y provenientes del perfil del establecimiento en Google Maps. Si tienes los derechos de alguna y quieres retirarla, avísanos y la borramos.';
