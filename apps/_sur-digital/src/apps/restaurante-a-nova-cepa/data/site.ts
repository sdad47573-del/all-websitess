/**
 * Datos de Restaurante A Nova Cepa — Camiño do Penedo, 4 (36995 A Seara, Poio,
 * Pontevedra).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante A Nova Cepa»,
 *   42.4436971,-8.6918959, feature 0xd2f6e6f9fbc406b:0xbc21afa51983a116
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 *   Google da el código postal 36995 y el plus code sitúa el local en A Seara
 *   (Poio); el municipio no aparece en el campo de dirección de la ficha.
 * - Reseñas publicadas en esa ficha: arroz con bogavante, zamburiñas, raciones
 *   abundantes, buen servicio y buenos precios.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que la
 * sección de la carta resume lo que citan las reseñas y lo que muestran las
 * fotos del propio restaurante.
 */

export const BUSINESS = {
	name: 'Restaurante A Nova Cepa',
	shortName: 'A Nova Cepa',
	mark: 'NC',
	street: 'Camiño do Penedo, 4',
	city: 'A Seara',
	municipality: 'Poio',
	region: 'Pontevedra',
	regionName: 'Galicia',
	postalCode: '36995',
	country: 'ES',
	phoneDisplay: '986 77 09 13',
	phoneHref: 'tel:+34986770913',
	rating: 4.6,
	reviewsCount: 948,
	siteUrl: 'https://www.sur-digital.com/restaurante-a-nova-cepa',
	geo: { lat: 42.4436971, lng: -8.6918959 },
	featureId: '0xd2f6e6f9fbc406b:0xbc21afa51983a116',
	placeId: 'ChIJa0C8n29uLw0RFqGDGaWvIbw',
	cid: '13556309476994425110',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+A+Nova+Cepa/@42.4436971,-8.6918959,17z/data=!3m1!4b1!4m6!3m5!1s0xd2f6e6f9fbc406b:0xbc21afa51983a116!8m2!3d42.4436971!4d-8.6918959!16s%2Fg%2F1thfgqtm',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.4436971%2C-8.6918959',
	embed: 'https://maps.google.com/maps?q=42.4436971,-8.6918959&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: cierra los lunes. De martes a sábado sirve
 * comida de 13:00 a 17:00 y cena de 21:00 a 24:00; el domingo abre solo a
 * mediodía, de 12:00 a 18:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado' },
	{ day: 'Martes', value: '13:00–17:00 · 21:00–24:00' },
	{ day: 'Miércoles', value: '13:00–17:00 · 21:00–24:00' },
	{ day: 'Jueves', value: '13:00–17:00 · 21:00–24:00' },
	{ day: 'Viernes', value: '13:00–17:00 · 21:00–24:00' },
	{ day: 'Sábado', value: '13:00–17:00 · 21:00–24:00' },
	{ day: 'Domingo', value: '12:00–18:00' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Tiene un arroz con bogavante buenísimo y las zamburiñas con una salsa exquisita',
	},
	{ rating: 3, text: 'Buenos precios, raciones bastante abundantes y buen servicio.' },
	{
		rating: 5,
		text: 'Repetiremos seguro con ganas de probar algun pescadito( el arroz espectacular .',
	},
] as const;

/**
 * Categorías y servicios que constan: Google lo clasifica como restaurante,
 * restaurante mediterráneo y marisquería, marca acceso, aparcamiento, aseo y
 * asientos adaptados, y las reseñas hablan de arroz con bogavante, zamburiñas y
 * raciones abundantes.
 */
export const SERVICIOS = [
	'Restaurante y marisquería',
	'Cocina mediterránea',
	'Arroz con bogavante',
	'Marisco gallego',
	'Pescados a la plancha',
	'Carnes asadas',
	'Por encargo',
	'Terraza con vistas',
	'Salón social',
	'Local climatizado',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
	'Aseo adaptado',
	'Asientos adaptados',
] as const;

/**
 * Carta: la ficha no publica carta. Los platos salen de las reseñas publicadas
 * y de lo que muestran las fotos del perfil del restaurante.
 */
export const MENU = [
	{
		title: 'Arroces',
		items: [
			{ name: 'Arroz con bogavante', note: '«buenísimo» y «espectacular», según las reseñas' },
			{
				name: 'Paella de marisco',
				note: 'para una o dos personas, según la pizarra de la fachada',
			},
		],
	},
	{
		title: 'Entrantes y marisco',
		items: [
			{ name: 'Zamburiñas', note: '«con una salsa exquisita», en una reseña publicada' },
			{ name: 'Almejas', note: 'en la pizarra, junto a mejillones y navajas' },
			{ name: 'Pulpo', note: 'en la lista de entrantes de la pizarra' },
			{ name: 'Cigalas y percebes', note: 'en el apartado de mariscos de la pizarra' },
			{ name: 'Nécora y centollo', note: 'en el apartado de mariscos de la pizarra' },
		],
	},
	{
		title: 'Pescados',
		items: [
			{ name: 'Rape a la gallega', note: 'en la pizarra, también guisado y a la plancha' },
			{ name: 'Rodaballo a la gallega', note: 'en la pizarra, también a la plancha y frito' },
			{ name: 'Merluza a la romana', note: 'en la pizarra, también a la gallega y a la plancha' },
			{ name: 'Lenguado a la plancha', note: 'en la pizarra, también frito' },
			{ name: 'Caldeirada de la casa', note: 'en el apartado de pescados de la pizarra' },
		],
	},
	{
		title: 'Carnes',
		items: [
			{ name: 'Chuleta o filete', note: 'en el apartado de carnes de la pizarra' },
			{ name: 'Ternera asada', note: 'en la pizarra' },
			{ name: 'Cordero asado', note: 'en la pizarra' },
			{ name: 'Chuletillas de cordero', note: 'en la pizarra' },
		],
	},
	{
		title: 'Por encargo',
		items: [
			{ name: 'Lacón con grelos', note: 'en el apartado «por encargo» de la pizarra' },
			{ name: 'Caldo gallego', note: 'por encargo' },
			{ name: 'Capón de casa', note: 'por encargo' },
			{ name: 'Callos con garbanzos', note: 'por encargo' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está Restaurante A Nova Cepa?',
		a: 'En Camiño do Penedo, 4, en el 36995 A Seara (Poio, Pontevedra). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes, salvo festivos, como indica el cartel de la puerta. De martes a sábado sirve comida de 13:00 a 17:00 y cena de 21:00 a 24:00, y el domingo abre solo a mediodía, de 12:00 a 18:00. Es el horario que publica su ficha de Google y puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Lo que citan sus reseñas y anuncia su pizarra: arroz con bogavante, paella de marisco, zamburiñas, almejas, mejillones, navajas, pulpo, cigalas, percebes, nécoras y centollo, además de pescados como rape, rodaballo, merluza o caldeirada, carnes asadas y platos por encargo como lacón con grelos o caldo gallego.',
	},
	{
		q: '¿Hay terraza?',
		a: 'Sí. Las fotos del restaurante muestran una terraza cubierta con mesas vestidas y vistas a la ría de Pontevedra, además del comedor interior.',
	},
	{
		q: '¿Se puede comer por encargo?',
		a: 'La pizarra de la fachada anuncia platos por encargo: lacón con grelos, caldo gallego, capón de casa y callos con garbanzos. Se reservan por teléfono, en el 986 77 09 13.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 986 77 09 13. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,6 sobre 5 con 948 reseñas en Google. Las publicadas destacan el arroz con bogavante, las zamburiñas, las raciones abundantes y la relación calidad-precio.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
