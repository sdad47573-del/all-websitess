/**
 * Datos de «Cafetería San José» — P.º Carlos Eraña, 4, 13004 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9810353, -3.9242805, feature
 *   0xd6bc33e58f3d6c9:0xed76bddbb3974f68 (nombre, dirección, categorías,
 *   valoración, horario, teléfono, accesibilidad y descripción del negocio).
 * - Fotografías del perfil del establecimiento en Google Maps, entre ellas una
 *   de la carta de raciones.
 *
 * Avisos importantes:
 * - La ficha publica la descripción escrita por la casa, pero no la carta: los
 *   platos de esta web salen de la foto de la carta y de las fotos del perfil.
 * - La foto de la carta está recortada por la derecha y la columna de precios
 *   queda a medias, así que aquí no se asigna un precio a cada ración.
 * - Cierra a las 24:00 de lunes a viernes; sábado y domingo figuran cerrados.
 * - Accesibilidad publicada: acceso, aparcamiento, aseo y asientos adaptados.
 */

export const BUSINESS = {
	name: 'Cafetería San José',
	fullName: 'Cafetería San José',
	mark: 'SJ',
	street: 'P.º Carlos Eraña, 4',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13004',
	country: 'ES',
	siteUrl: 'https://cafeteria-san-jose.vercel.app',
	geo: { lat: 38.9810353, lng: -3.9242805 },
	featureId: '0xd6bc33e58f3d6c9:0xed76bddbb3974f68',
	placeId: 'ChIJydbzWD7Daw0RaE-Xs9u9du0',
	channel: '/g/11c5st3f21',
	category: 'Bar de tapas',
	categories: ['Bar de tapas', 'Cafetería'],
	phone: '926 036 598',
	phoneHref: 'tel:+34926036598',
	tagline: 'Desayunos, tapas y raciones en Ciudad Real',
	description:
		'Cafetería San José, bar de tapas y cafetería en el Paseo Carlos Eraña, 4, de Ciudad Real (13004). Desayunos, café, tapas y raciones caseras, de lunes a viernes de 7:45 a 24:00. La ficha de Google le da 4,4 sobre 5 con 612 reseñas.',
	hasPublicWebsite: false,
	ownerDescription:
		'En Cafetería San José encontrarás un ambiente familiar y acogedor, ideal para desayunar, tomar un café o disfrutar de unas tapas y raciones caseras. Destacamos por nuestro trato cercano, servicio rápido y una excelente relación calidad-precio.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cafeter%C3%ADa+San+Jos%C3%A9./@38.9810353,-3.9242805,17z/data=!4m6!3m5!1s0xd6bc33e58f3d6c9:0xed76bddbb3974f68!8m2!3d38.9810353!4d-3.9242805!16s%2Fg%2F11c5st3f21',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9810353%2C-3.9242805',
	embed: 'https://maps.google.com/maps?q=38.9810353,-3.9242805&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9810353,-3.9242805',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.4,
	count: 612,
	label: '4,4',
};

/** Horario que publica la ficha: de lunes a viernes, hasta medianoche. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '7:45–24:00' },
	{ dia: 'Martes', horas: '7:45–24:00' },
	{ dia: 'Miércoles', horas: '7:45–24:00' },
	{ dia: 'Jueves', horas: '7:45–24:00' },
	{ dia: 'Viernes', horas: '7:45–24:00' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Lo mismo, con los nombres que espera el componente de visita. */
export const HOURS = HORARIO.map((row) => ({
	day: row.dia,
	value: row.horas,
	closed: row.closed,
}));

export const HORARIO_AVISO =
	'La ficha marca «24:00» como hora de cierre de lunes a viernes, es decir, la medianoche del mismo día. Sábado y domingo figuran cerrados. En festivos puede cambiar.';

export const SERVICIOS = [
	'Bar de tapas',
	'Cafetería',
	'Desayunos',
	'Raciones caseras',
	'Acceso adaptado',
	'Aparcamiento adaptado',
	'Aseo adaptado',
	'Asientos adaptados',
	'Cierra sábado y domingo',
];

export const HIGHLIGHTS = [
	{
		title: 'Abierto a las 7:45',
		text: 'La ficha abre el día a las 7:45 de lunes a viernes. Es el horario de quien pasa antes de trabajar: café, tostada, bocadillo, sándwich o tortilla, según lo que enseñan las fotos del perfil.',
	},
	{
		title: 'Raciones de carta',
		text: 'La foto de la carta muestra la lista de raciones de la casa: queso curado manchego, rejos, jabuguitos, croquetas caseras, solomillo «San José», magro con tomate y al ajillo, calamares, gambas al ajillo, orejas a la plancha, gachas y sepia.',
	},
	{
		title: 'Fin de semana cerrado',
		text: 'El horario publica de lunes a viernes, con sábado y domingo cerrados. Es el ritmo de siempre de una cafetería de barrio que vive de la oficina, del mostrador y de la gente de la zona.',
	},
	{
		title: 'Acceso adaptado',
		text: 'La ficha marca acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas. Es el dato que más se pregunta y el que la propia ficha del local se encarga de confirmar.',
	},
];

export const MENU = [
	{
		title: 'Raciones de la carta',
		items: [
			{ name: 'Queso curado manchego', note: 'Ración de queso de la tierra' },
			{ name: 'Rejos', note: 'Tiras de estómago a la plancha' },
			{ name: 'Jabuguitos ibéricos', note: 'Embutido de bellota' },
			{
				name: 'Croquetas caseras de jamón ibérico',
				note: 'Casetas, con jamón ibérico en la masa',
			},
			{
				name: 'Solomillo de cerdo «San José»',
				note: 'Con ajo y pimientos del piquillo',
			},
			{ name: 'Magro con tomate', note: 'Ración de magro de cerdo guisado' },
			{ name: 'Magro al ajillo', note: 'Salteado con ajo y perejil' },
			{ name: 'Calamares «San José»', note: 'Con cebolla y pimientos' },
			{ name: 'Calamares romana', note: 'Rebozados y fritos' },
			{ name: 'Gambas al ajillo', note: 'En cazuela de barro' },
			{ name: 'Orejas a la plancha', note: 'A la brasa de la plancha' },
			{ name: 'Gachas', note: 'Con harina de almortas' },
			{ name: 'Sepia', note: 'A la plancha, según temporada' },
		],
	},
	{
		title: 'De la barra y del desayuno',
		items: [
			{
				name: 'Bocadillo de tortilla',
				note: 'Tortilla de patata en pan de barra, de las fotos del perfil',
			},
			{
				name: 'Bocadillo de jamón',
				note: 'Con jamón y tomate, en pan de barra',
			},
			{
				name: 'Sándwich mixto y club',
				note: 'Con lechuga, tomate, huevo y atún',
			},
			{
				name: 'Tostada de gulas con jamón',
				note: 'Pan tostado, fritada de gulas y jamón en dados',
			},
			{
				name: 'Tostada de carne y cebolla',
				note: 'Lonchas de carne con cebolla caramelizada',
			},
			{
				name: 'Champiñones a la plancha',
				note: 'Con aceitunas y tomate con cebolleta',
			},
			{
				name: 'Calamares a la andaluza y chopitos',
				note: 'Fritos, con limón',
			},
			{
				name: 'Tortilla y café',
				note: 'El desayuno de la casa, como sale en la foto de la barra',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Cafetería San José?',
		a: 'En el Paseo Carlos Eraña, 4, de Ciudad Real (13004), en las coordenadas 38.9810353, -3.9242805. El local figura en Google Maps con la ficha /g/11c5st3f21 y la categoría de bar de tapas y cafetería. En esta página está el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, de 7:45 a 24:00, según la ficha de Google. El «24:00» es la medianoche del mismo día: no hay servicio de madrugada. Sábado y domingo figuran cerrados. En festivos puede cambiar, así que conviene llamar antes si vas en día señalado.',
	},
	{
		q: '¿Cierra los fines de semana?',
		a: 'Sí. La ficha publica horario solo de lunes a viernes y marca sábado y domingo como cerrados. Si buscas mesa un sábado, llama antes al 926 036 598: es la única forma de confirmar una apertura puntual.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'Al 926 036 598, el número publicado en la ficha del establecimiento. Sirve para preguntar por el menú del día, encargar raciones o reservar mesa. Esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Qué tipo de local es?',
		a: 'Google lo clasifica como bar de tapas y cafetería. La casa lo describe así en su ficha: «un ambiente familiar y acogedor, ideal para desayunar, tomar un café o disfrutar de unas tapas y raciones caseras», con trato cercano, servicio rápido y buena relación calidad-precio.',
	},
	{
		q: '¿Sirve desayunos?',
		a: 'Abre a las 7:45 y las fotos del perfil muestran desayunos de barra: bocadillo de tortilla, bocadillo de jamón, sándwich, tostadas, tortilla y café. La ficha no publica una carta de desayunos con precios, así que lo que hay cada mañana se pregunta en el mostrador.',
	},
	{
		q: '¿Qué raciones hay?',
		a: 'La foto de la carta del local lista queso curado manchego, rejos, jabuguitos ibéricos, croquetas caseras de jamón ibérico, solomillo de cerdo «San José» con ajo y pimientos del piquillo, magro con tomate, magro al ajillo, calamares «San José» con cebolla y pimientos, calamares romana, gambas al ajillo, orejas a la plancha, gachas de harina de almortas y sepia.',
	},
	{
		q: '¿Se pueden ver los precios?',
		a: 'Esta web no publica precios: la foto de la carta que hay en el perfil está recortada por la derecha y la columna de importes queda a medias, así que no se puede asignar un precio fiable a cada ración. Los importes que se leen en esa foto van de 10,00 a 15,00 €. Para el precio del día, llama al 926 036 598.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso adaptado, aparcamiento adaptado, aseo adaptado y asientos adaptados. Son los cuatro datos de accesibilidad que publica el propio establecimiento; si necesitas un detalle concreto (por ejemplo, el ancho de la puerta o una mesa alta), lo mejor es llamar antes.',
	},
	{
		q: '¿Se puede reservar o encargar para llevar?',
		a: 'La ficha no publica reservas online ni un servicio de reparto. El canal es el teléfono 926 036 598, donde se puede preguntar por mesa, por encargos de raciones o por la disponibilidad de un plato concreto.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,4 sobre 5 con 612 reseñas en el momento de crear esta página (noviembre de 2026). Es una media alta para un bar de barrio y con muchas opiniones, así que conviene leer las reseñas recientes para ver qué se valora más: el trato, la rapidez o las raciones.',
	},
	{
		q: '¿Esta web es del bar?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona reservas ni pedidos y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el mostrador.',
	},
];

export const LEGAL = {
	razonSocial: 'Cafetería San José',
	actualizado: 'Noviembre de 2026',
};
