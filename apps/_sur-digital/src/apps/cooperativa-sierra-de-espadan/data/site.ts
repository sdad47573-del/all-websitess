/**
 * Datos de Cooperativa Sierra de Espadán — Pl. de la Fuente, 24,
 * 12414 Algimia de Almonacid (Castellón).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Cooperativa Sierra de Espadan»,
 *   39.9135611, -0.4426775, feature 0xd6077272736eb81:0xe7c1fb1655f380ce
 *   (dirección, teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Reapertura del bar restaurante: Ayuntamiento de Algimia de Almonacid,
 *   «Inauguración del bar restaurante Cooperativa» (19 de julio de 2018).
 * - Reseñas públicas de Google citadas en la sección de opiniones.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * No se publican precios ni una carta cerrada: el menú cambia a diario y la
 * casa no los ha confirmado. Se describen las familias de la carta.
 */

export const BUSINESS = {
	name: 'Cooperativa Sierra de Espadán',
	fullName: 'Cooperativa Agrícola Sierra de Espadán',
	shortName: 'La Cooperativa',
	mark: 'SE',
	street: 'Pl. de la Fuente, 24',
	landmark: 'Sierra de Espadán · Alto Palancia',
	city: 'Algimia de Almonacid',
	province: 'Castellón',
	region: 'Comunitat Valenciana',
	postalCode: '12414',
	country: 'ES',
	phoneDisplay: '617 02 59 14',
	phoneHref: 'tel:+34617025914',
	rating: 4.4,
	reviewsCount: 201,
	siteUrl: 'https://www.sur-digital.com/cooperativa-sierra-de-espadan',
	geo: { lat: 39.9135611, lng: -0.4426775 },
	featureId: '0xd6077272736eb81:0xe7c1fb1655f380ce',
	placeId: 'ChIJges2Jyd3YA0RzoDzVRb7wec',
	cid: '16699904966616383694',
	googleCats: ['Restaurante', 'Bar restaurante'],
	tagline: 'Cocina casera y terraza en la plaza de la Fuente',
	description:
		'Cooperativa Sierra de Espadán, bar restaurante en la plaza de la Fuente, 24, de Algimia de Almonacid (Castellón): cocina casera, menú del día, carnes a la brasa, tapas, bocadillos y terraza en la Sierra de Espadán. 4,4 en Google con 201 reseñas. Tel. 617 02 59 14.',
	openedYear: 2018,
};

const DEST = `${BUSINESS.geo.lat}%2C${BUSINESS.geo.lng}`;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cooperativa+Sierra+de+Espadan/@39.9135611,-0.4426775,17z/data=!3m1!4b1!4m6!3m5!1s0xd6077272736eb81:0xe7c1fb1655f380ce!8m2!3d39.9135611!4d-0.4426775!16s%2Fg%2F11gjw8k0_y?authuser=0&hl=es',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: `https://www.google.com/maps/dir/?api=1&destination=${DEST}`,
	embed: 'https://maps.google.com/maps?q=39.9135611,-0.4426775&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: abre todos los días, con el martes solo por la mañana. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–21:00' },
	{ day: 'Martes', value: '8:00–13:00' },
	{ day: 'Miércoles', value: '8:00–21:00' },
	{ day: 'Jueves', value: '8:00–21:00' },
	{ day: 'Viernes', value: '8:00–24:00' },
	{ day: 'Sábado', value: '8:00–24:00' },
	{ day: 'Domingo', value: '8:00–21:00' },
];

export const SERVICIOS = [
	'Cocina casera',
	'Menú del día',
	'Carnes a la brasa',
	'Tapas y raciones',
	'Bocadillos variados',
	'Terraza en la plaza',
	'Café y barra',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
];

/**
 * Carta. No hay carta con precios publicada: los apartados salen de la web y la
 * ficha del local, de las fotos del perfil y de las reseñas públicas.
 */
export const MENU = [
	{
		title: 'Menú del día',
		items: [
			{
				name: 'Primero, segundo y postre',
				note: 'cocina casera que cambia cada día; se consulta en la barra o por teléfono',
			},
			{
				name: 'Menú de fin de semana',
				note: 'los platos de siempre, con más tiempo para sentarse a la mesa',
			},
		],
	},
	{
		title: 'De cuchara',
		items: [
			{ name: 'Guisos de temporada', note: 'legumbres y guisos que se comen despacio' },
			{ name: 'Arroces', note: 'de la casa, con el punto de siempre' },
			{ name: 'Fideuà', note: 'uno de los platos que aparecen en las reseñas' },
		],
	},
	{
		title: 'A la brasa',
		items: [
			{
				name: 'Carne a la brasa con patatas',
				note: 'chuletas y carnes a la parrilla, uno de los platos de la casa',
			},
			{ name: 'Raciones para compartir', note: 'embutidos y platos de tabla para el centro' },
		],
	},
	{
		title: 'Barra y terraza',
		items: [
			{
				name: 'Bocadillos variados',
				note: '«variados y sabrosos», dicen en Google; para media mañana o para la terraza',
			},
			{ name: 'Tapas y raciones', note: 'embutidos de la tierra y platos de picoteo' },
			{ name: 'Café, cerveza y vino', note: 'la barra abre a las 8:00 y aguanta hasta la noche' },
		],
	},
];

export const REVIEWS = [
	{
		text: 'La fideuá estaba regular, lo demás muy bueno, la terraza increíble.',
		rating: 4,
	},
	{
		text: 'Bocadillos variados y sabrosos.',
		rating: 4,
	},
	{
		text: 'Buena atención, buen menú, volveremos seguro.',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Cooperativa Sierra de Espadán?',
		a: 'En la plaza de la Fuente, 24, en el centro de Algimia de Almonacid (Castellón), en la entrada del parque natural de la Sierra de Espadán. La ficha de Google marca las coordenadas 39.9135611, -0.4426775 y desde esta página puedes abrir la ruta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días a las 8:00. Lunes, miércoles, jueves y domingo cierra a las 21:00; el martes solo abre de 8:00 a 13:00; y los viernes y sábados alarga hasta las 24:00. En fiestas y puentes el horario puede cambiar.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. Es cocina casera de primero, segundo y postre, y cambia a diario, por eso no publicamos una carta cerrada: se consulta en el local o llamando al 617 02 59 14.',
	},
	{
		q: '¿Se puede ir solo a tomar algo?',
		a: 'Sí. Además del comedor hay barra y terraza con tapas, raciones, embutidos y bocadillos. También se puede tomar café o una cerveza sin comer.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, la terraza está en la plaza de la Fuente, con las montañas al fondo, y es una de las cosas que más destacan las reseñas. En verano y los fines de semana se llena, así que si vienes en grupo conviene avisar.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'Para tomar algo o comer del menú no hace falta reserva. Para grupos y comidas familiares es mejor llamar al 617 02 59 14 con antelación y confirmarlo con el local.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta, avisa al llamar.',
	},
	{
		q: '¿Cómo se llega?',
		a: 'Algimia de Almonacid está en la comarca del Alto Palancia, en la entrada del parque natural de la Sierra de Espadán. El bar está en la plaza de la Fuente, en el centro del casco urbano. Lo más sencillo es abrir la ruta en Google Maps desde esta página.',
	},
];
