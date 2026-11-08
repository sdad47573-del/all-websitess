/**
 * Datos de «Restaurante Hostal Frasca» — Pl. Agustín Salido, 2, 13003 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9894818, -3.9259455, feature
 *   0xd6bc341f790c123:0xd6224d8914091a6b (nombre, dirección, categorías, teléfono,
 *   valoración, horario y accesibilidad), consultada el 2 de noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento.
 *
 * Avisos importantes:
 * - La ficha no publica carta, precios ni una web propia. Los platos de esta web
 *   son los que nombran las reseñas y los que se ven en las fotos del perfil.
 * - La ficha no publica alojamiento: aunque el nombre comercial diga «Hostal»,
 *   Google la clasifica como restaurante y bar de tapas, sin habitaciones ni
 *   tarifas. Esta web no las inventa.
 * - Cierra a la 1:00 de la madrugada de lunes a sábado; el domingo, a las 17:00.
 */

export const BUSINESS = {
	name: 'Restaurante Hostal Frasca',
	fullName: 'Restaurante Hostal Frasca',
	mark: 'RF',
	street: 'Pl. Agustín Salido, 2',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13003',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/restaurante-hostal-frasca',
	geo: { lat: 38.9894818, lng: -3.9259455 },
	featureId: '0xd6bc341f790c123:0xd6224d8914091a6b',
	placeId: 'ChIJI8GQ90HDaw0RaxoJFIlNItY',
	channel: '/g/12qhhwn96',
	plusCode: 'X3QF+QJ Ciudad Real',
	category: 'Restaurante',
	categories: ['Restaurante', 'Bar de tapas'],
	phone: '651 83 86 60',
	phoneHref: 'tel:+34651838660',
	tagline: 'Restaurante y bar de tapas en la Plaza Agustín Salido',
	description:
		'Restaurante Hostal Frasca, restaurante y bar de tapas en la Plaza Agustín Salido, 2, de Ciudad Real (13003). Tapas, raciones, tostas, bocadillos y hamburguesas, de lunes a sábado de 8:00 a 1:00 y los domingos hasta las 17:00. La ficha de Google le da 3,9 sobre 5 con 531 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Hostal+Frasca/@38.9894818,-3.9259455,17z/data=!4m6!3m5!1s0xd6bc341f790c123:0xd6224d8914091a6b!8m2!3d38.9894818!4d-3.9259455!16s%2Fg%2F12qhhwn96',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9894818%2C-3.9259455',
	embed: 'https://maps.google.com/maps?q=38.9894818,-3.9259455&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9894818,-3.9259455',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 3.9,
	count: 531,
	label: '3,9',
};

/** Horario que publica la ficha: abre a las 8:00 y cierra de madrugada. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:00–1:00' },
	{ dia: 'Martes', horas: '8:00–1:00' },
	{ dia: 'Miércoles', horas: '8:00–1:00' },
	{ dia: 'Jueves', horas: '8:00–1:00' },
	{ dia: 'Viernes', horas: '8:00–1:00' },
	{ dia: 'Sábado', horas: '8:00–1:00' },
	{ dia: 'Domingo', horas: '8:00–17:00' },
];

/** Lo mismo, con los nombres que espera el componente de visita. */
export const HOURS = HORARIO.map((row) => ({
	day: row.dia,
	value: row.horas,
	closed: row.closed,
}));

export const HORARIO_AVISO =
	'La ficha publica «8:00–1:00» de lunes a sábado: la 1:00 es ya la madrugada del día siguiente. El domingo cierra a las 17:00. En festivos puede cambiar.';

export const SERVICIOS = [
	'Restaurante',
	'Bar de tapas',
	'Brunch',
	'Tapas y raciones',
	'Tostas y bocadillos',
	'Hamburguesas',
	'Acceso adaptado',
	'Asientos adaptados',
	'Abierto hasta la 1:00',
];

export const MENU = [
	{
		title: 'De la plancha',
		items: [
			{
				name: 'Chorizo criollo a la plancha',
				note: 'Sobre rebanadas de pan, con patatas fritas, como sale en las fotos del perfil',
			},
			{
				name: 'Morcilla y lomo a la plancha',
				note: 'Bandeja de carnes con patatas para compartir',
			},
			{
				name: 'Carne a la plancha con guarnición',
				note: 'Con patatas fritas, tomate y pimiento verde',
			},
		],
	},
	{
		title: 'Sartén y cazuela',
		items: [
			{
				name: 'Migas con sardinas',
				note: 'Migas manchegas en cazuela de hierro, con sardinas y pan aparte',
			},
			{
				name: 'Torreznos',
				note: 'Los que una reseña cuenta como tapa de la casa, «que te invitan a repetir cerveza»',
			},
			{
				name: 'Tortilla de patata',
				note: 'En plato, con pan de barra',
			},
		],
	},
	{
		title: 'De la barra y del brunch',
		items: [
			{ name: 'Tostas', note: '«Muy buenas las tostas», según las reseñas' },
			{ name: 'Bocadillos', note: 'De la barra, para desayuno, merienda o cena' },
			{ name: 'Hamburguesas', note: '«Muy buenas las tostas, bocadillos y hamburguesas»' },
			{ name: 'Ensalada mixta', note: 'Con atún, tomate, aceitunas y maíz' },
			{ name: 'Brunch', note: 'Etiqueta que la ficha añade al restaurante' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Hostal Frasca?',
		a: 'En la Plaza Agustín Salido, 2, de Ciudad Real (13003), con Plus Code X3QF+QJ y coordenadas 38.9894818, -3.9259455. Está en el centro de la ciudad, en una plaza a pocos minutos de la Plaza Mayor. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días a las 8:00. De lunes a sábado cierra a la 1:00 de la madrugada, es decir, ya pasado el día, y el domingo cierra a las 17:00. La ficha no marca ningún día de descanso semanal. En festivos puede cambiar, así que llama antes si vas en fecha señalada.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí, pero con horario corto: de 8:00 a 17:00. El resto de la semana alarga hasta la 1:00 de la madrugada. Para una cena de domingo, la cocina ya está cerrada.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'Al 651 83 86 60, el número publicado en la ficha del establecimiento. Sirve para preguntar por el menú, reservar mesa o consultar la disponibilidad de un plato. Esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como restaurante y bar de tapas, y añade la etiqueta «Brunch». Las fotos del perfil enseñan migas con sardinas en cazuela, torreznos, chorizo criollo y morcilla a la plancha con patatas, tortilla, ensalada mixta y bocadillos; las reseñas hablan de «muy buenas tostas, bocadillos y hamburguesas» y de «abundantes raciones». No hay carta publicada con precios, así que el detalle del día se pregunta en el local o por teléfono.'
	},
	{
		q: '¿Se puede ver la carta o los precios?',
		a: 'Ni la ficha de Google ni esta web publican la carta: el establecimiento no la tiene colgada en su perfil. Los platos que aparecen aquí son los que nombran las reseñas y los que se ven en las fotos del perfil, sin precios. Para el precio del día, llama al 651 83 86 60.',
	},
	{
		q: '¿El hostal tiene habitaciones?',
		a: 'El toldo de la fachada anuncia «Hostal ★★ Frasca», así que el edificio es hostal y restaurante. Lo que publica la ficha de Google es solo la parte de restauración: no hay habitaciones, tarifas ni un teléfono distinto para el alojamiento. Esta web no inventa esos datos; si buscas habitación, pregunta en el 651 83 86 60.'
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas y asientos adaptados. Lo que no tiene es aparcamiento adaptado. Si necesitas un detalle concreto del local, lo más rápido es llamar antes de ir.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni una web propia. El canal es el teléfono 651 83 86 60, donde también se confirma el horario de cocina en una fecha concreta.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '3,9 sobre 5 con 531 reseñas (consultado el 2 de noviembre de 2026). Es una media con muchas opiniones, así que conviene leer las reseñas recientes: unas destacan las tapas y las raciones, y otras señalan lo que no les encajó.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona reservas, pedidos ni alojamiento, y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el propio local.',
	},
];

export const LEGAL = {
	razonSocial: 'Restaurante Hostal Frasca',
	actualizado: 'Noviembre de 2026',
};
