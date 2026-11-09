/**
 * Datos de 1.º Direito — Parque Florestal de Monsanto, Campo de Rugby do Grupo
 * Desportivo de Direito, Alto da Boa Vista, 1500 Lisboa.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «1.º Direito», 38.7298681,-9.2048323,
 *   feature 0xd1ecde38a28c3b7:0x1935696663139b12 (dirección, teléfono, horario,
 *   categoría, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 */

export const BUSINESS = {
	name: '1.º Direito',
	shortName: '1.º Direito',
	mark: '1D',
	street: 'Parque Florestal de Monsanto · Campo de Rugby do Grupo Desportivo de Direito',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Portugal',
	postalCode: '1500',
	country: 'PT',
	phoneDisplay: '21 760 1592',
	phoneHref: 'tel:+351217601592',
	rating: 4.6,
	reviewsCount: 393,
	siteUrl: 'https://www.sur-digital.com/primeiro-direito',
	geo: { lat: 38.7298681, lng: -9.2048323 },
	featureId: '0xd1ecde38a28c3b7:0x1935696663139b12',
	placeId: 'ChIJt8MoiuPNHg0REpsTY2ZpNRk',
	cid: '1816473913183673106',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/1.%C2%BA+Direito/@38.7298681,-9.2048323,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ecde38a28c3b7:0x1935696663139b12!8m2!3d38.7298681!4d-9.2048323!16s%2Fg%2F11h0kz0l7l',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7298681%2C-9.2048323',
	embed: 'https://maps.google.com/maps?q=38.7298681,-9.2048323&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: solo comidas, de martes a domingo. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '12:45–15:00' },
	{ day: 'Miércoles', value: '12:45–15:00' },
	{ day: 'Jueves', value: '12:45–15:00' },
	{ day: 'Viernes', value: '12:45–15:00' },
	{ day: 'Sábado', value: '12:45–15:00' },
	{ day: 'Domingo', value: '12:45–15:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Estava tudo impecável, empregados, comida, musica... localização top.',
	'Ambiente rústico num chalé de madeira com terraço e vista para o campo de rugby.',
	'Almoço inserido num evento com 50 pessoas, servido em forma de buffet.',
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google clasifica el
 * local, lo que cuentan sus reseñas y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante de cocina tradicional portuguesa',
	'Chalé de madera',
	'Terraza sobre el campo de rugby',
	'Comidas de martes a domingo',
	'Reserva de mesa online',
	'Almuerzos de grupo y buffet',
	'Aparcamiento',
	'Accesible para sillas de ruedas',
];

/**
 * La ficha no publica carta: los platos salen de las fotos del perfil (sopa,
 * mesa de queijos e enchidos, buffet de doces) y de lo que cuentan las reseñas
 * sobre los almuerzos de grupo.
 */
export const MENU = [
	{
		title: 'De la cocina',
		items: [
			{ name: 'Sopa verde da casa', note: 'crema de verduras con crocante, en las fotos del perfil' },
			{ name: 'Cocina tradicional portuguesa', note: 'es la categoría con la que Google clasifica el restaurante' },
		],
	},
	{
		title: 'Mesa de queijos e enchidos',
		items: [
			{ name: 'Queijos portugueses', note: 'en las fotos del perfil' },
			{ name: 'Enchidos y jamón', note: 'en las fotos del perfil' },
			{ name: 'Pan, uvas y fruta seca', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Doces da casa',
		items: [
			{ name: 'Leite-creme queimado', note: 'en las fotos del perfil' },
			{ name: 'Merengues', note: 'en las fotos del perfil' },
			{ name: 'Bolo de chocolate', note: 'en las fotos del perfil' },
			{ name: 'Tarte de frutos vermelhos', note: 'en las fotos del perfil' },
			{ name: 'Fruta da estação', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Para grupos',
		items: [
			{
				name: 'Almuerzos de grupo',
				note: '«almoço inserido num evento com 50 pessoas, servido em forma de buffet», según una reseña',
			},
			{
				name: 'Menús de evento',
				note: 'se habla con el restaurante en el 21 760 1592',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está 1.º Direito?',
		a: 'Dentro del Parque Florestal de Monsanto, en Lisboa, junto al campo de rugby del Grupo Desportivo de Direito, en el Alto da Boa Vista (1500 Lisboa). El mapa de esta página lleva directo al chalé y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre solo al mediodía: de martes a domingo, de 12:45 a 15:00. Los lunes cierra y no hay servicio de cenas. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'Sí. La ficha de Google ofrece «Reservar mesa» y también se reserva por teléfono, en el 21 760 1592. Para grupos conviene llamar con antelación.',
	},
	{
		q: '¿Cómo se llega?',
		a: 'En coche, por los accesos del Parque Florestal de Monsanto hasta el Alto da Boa Vista; el restaurante está junto al campo de rugby del Grupo Desportivo de Direito. Su ficha de Google marca aparcamiento accesible para personas en sillas de ruedas. El botón «Cómo llegar» abre la ruta exacta.',
	},
	{
		q: '¿Qué se come?',
		a: 'Su ficha lo clasifica como restaurante de cocina tradicional portuguesa. Las reseñas destacan la comida, el servicio y el ambiente del chalé; una de ellas describe un almuerzo de grupo de 50 personas servido en buffet. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Se puede celebrar un almuerzo de grupo?',
		a: 'Sí, por lo que cuentan las reseñas: una describe «um almoço inserido num evento com 50 pessoas, servido em forma de buffet». Para eventos, menús de grupo y disponibilidad de fechas hay que hablar con el restaurante en el 21 760 1592.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Una reseña lo describe como «ambiente rústico num chalé de madeira com terraço e vista para o campo de rugby», y las fotos del perfil muestran la terraza y el comedor de madera.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca aparcamiento accesible, entrada accesible, asientos para personas en sillas de ruedas y aseo adaptado.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,6 sobre 5 con 393 reseñas. Las publicadas destacan el servicio, la comida, la música y la ubicación dentro de Monsanto.',
	},
];
