/**
 * Datos de Comidas para llevar Hnos. López — Carrer la Pinta, ed. Maripaz,
 * local 1, 03710 Calp, Alicante.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Comidas para llevar Hnos. López,
 *   38.6424074, 0.0509559, feature 0x129dfe3b534c6ad3:0xd02748d16f802ebe.
 *   Nombre, categoría, dirección, teléfono, nota (4,4 con 154 reseñas) y
 *   horario (todos los días 10:00–15:00).
 * - Guía municipal de restaurantes de Calpe y listado de comercios del
 *   Ayuntamiento: «Pollos Hermanos López», calle La Pinta, asador y comida
 *   para llevar.
 * - Carteles del propio local fotografiados en su galería de Google (bloque
 *   «Diario», «Por encargo» y «Paellas»): de ahí sale la carta.
 *
 * Lo que el sitio NO inventa: el local no publica precios, así que la carta va
 * sin importes y remite al teléfono de encargos.
 */

export const BUSINESS = {
	name: 'Comidas para llevar Hnos. López',
	fullName: 'Comidas para llevar Hnos. López · asador de pollos y paellas en Calpe',
	shortName: 'Hnos. López',
	mark: 'HL',
	street: 'Carrer la Pinta, ed. Maripaz, local 1',
	neighbourhood: 'Calp',
	city: 'Calp',
	region: 'Comunidad Valenciana',
	regionName: 'Comunidad Valenciana',
	postalCode: '03710',
	country: 'ES',
	phone: '965 83 27 80',
	phoneHref: '+34965832780',
	rating: 4.4,
	reviewsCount: 154,
	siteUrl: 'https://www.sur-digital.com/hnos-lopez',
	geo: { lat: 38.6424074, lng: 0.0509559 },
	featureId: '0x129dfe3b534c6ad3:0xd02748d16f802ebe',
	placeId: 'ChIJ02pMUzv-nRIRvi6Ab9FIJ9A',
	plusCode: 'J3R2+X9 Calpe',
	category: 'Establecimiento de comida preparada',
	tagline: 'Asador de pollos y paellas para llevar en Calpe',
	description:
		'Comidas para llevar Hnos. López, asador de pollos y comida preparada en la calle La Pinta, edificio Maripaz, local 1, en Calp (03710 Alicante). Pollos asados, patatas, pimientos, calamares, croquetas y paellas por encargo, todos los días de 10:00 a 15:00. 4,4 sobre 5 en Google con 154 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Comidas+para+llevar+Hnos.+L%C3%B3pez/data=!4m7!3m6!1s0x129dfe3b534c6ad3:0xd02748d16f802ebe!8m2!3d38.6424074!4d0.0509559!16s%2Fg%2F11cns4rm_1!19sChIJ02pMUzv-nRIRvi6Ab9FIJ9A?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=14999037148336762558',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6424074%2C0.0509559',
	embed: 'https://maps.google.com/maps?q=38.6424074,0.0509559&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.6424074,0.0509559',
};

/** Horario publicado en la ficha de Google: todos los días, de 10:00 a 15:00. */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–15:00' },
	{ day: 'Martes', value: '10:00–15:00' },
	{ day: 'Miércoles', value: '10:00–15:00' },
	{ day: 'Jueves', value: '10:00–15:00' },
	{ day: 'Viernes', value: '10:00–15:00' },
	{ day: 'Sábado', value: '10:00–15:00' },
	{ day: 'Domingo', value: '10:00–15:00' },
];

/** Señales de identidad que constan en la ficha y en los carteles del local. */
export const SERVICIOS = [
	'Pollo asado',
	'Paellas para llevar',
	'Comida preparada',
	'Encargos por teléfono',
];

/**
 * Carta transcrita de los carteles del local («Diario», «Por encargo» y
 * «Paellas»). Sin precios: el asador no publica tarifas.
 */
export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollos asados',
				note: 'En los pinchos del horno, dorados y jugosos. Es el plato que da nombre a la casa.',
			},
			{
				name: 'Pimientos asados',
				note: 'Del cartel del día, para acompañar el pollo.',
			},
			{
				name: 'Patatas asadas',
				note: 'Por encargo, para completar una bandeja grande.',
			},
			{
				name: 'Conejos',
				note: 'Por encargo, al igual que el pollo.',
			},
			{
				name: 'Codillos de cerdo',
				note: 'Por encargo; se piden con antelación por teléfono.',
			},
			{
				name: 'Costillas de cerdo',
				note: 'Por encargo, para bandejas de fin de semana.',
			},
			{
				name: 'Aguja de cerdo',
				note: 'Por encargo, según disponibilidad del día.',
			},
		],
	},
	{
		title: 'Para acompañar',
		items: [
			{
				name: 'Patatas fritas',
				note: 'Del cartel diario; se hacen al momento.',
			},
			{
				name: 'Patatas alioli',
				note: 'Con alioli de la casa.',
			},
			{
				name: 'Calamares a la romana',
				note: 'Rebozados, para completar la bandeja.',
			},
			{
				name: 'Ensaladas',
				note: 'Según el día; se consulta al encargar.',
			},
			{
				name: 'Croquetas de jamón',
				note: 'Caseras, de las tres que ofrece el cartel.',
			},
			{
				name: 'Croquetas de pollo',
				note: 'Caseras, con el pollo del asador.',
			},
			{
				name: 'Croquetas de bacalao',
				note: 'Caseras, la tercera variedad del cartel.',
			},
			{
				name: 'Pan, bebidas frías y hielo',
				note: 'Disponibles a diario en el local.',
			},
		],
	},
	{
		title: 'Paellas para llevar',
		items: [
			{
				name: 'Paella mixta',
				note: 'Con marisco y carne, la más pedida.',
			},
			{
				name: 'Paella valenciana',
				note: 'Pollo, conejo y verduras, la receta de siempre.',
			},
			{
				name: 'Paella de verdura',
				note: 'Sin carne ni marisco.',
			},
			{
				name: 'Paella de pollo y verdura',
				note: 'Con el pollo del asador.',
			},
			{
				name: 'Arroz negro',
				note: 'Con sepia y su alioli.',
			},
			{
				name: 'Arroz a banda',
				note: 'De pescado, con caldo de la casa.',
			},
			{
				name: 'Fideuá mixta',
				note: 'Fideo fino con marisco y carne.',
			},
			{
				name: 'Fideuá de marisco',
				note: 'Solo marisco, para los amantes del fideo.',
			},
			{
				name: 'Otros arroces',
				note: 'El cartel invita a consultar otros arroces al encargar.',
			},
		],
	},
	{
		title: 'Por encargo',
		items: [
			{
				name: 'Bandejas para reuniones',
				note: 'Pollos, arroces y acompañamientos en la cantidad que haga falta.',
			},
			{
				name: 'Paellas grandes',
				note: 'Se cocinan al momento y se entregan en la paellera, listas para servir.',
			},
			{
				name: 'Tortillas',
				note: 'En molde redondo, como las de la galería; se piden con el resto del encargo.',
			},
			{
				name: 'Reservas y encargos',
				note: 'Todo se cierra por teléfono en el 96 583 27 80.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Hnos. López?',
		a: 'En la calle La Pinta, edificio Maripaz, local 1, en Calp (03710 Alicante), junto al rótulo azul del asador. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha indica apertura todos los días de la semana, de 10:00 a 15:00. En festivos puede cambiar, así que conviene confirmarlo por teléfono antes de acercarse.',
	},
	{
		q: '¿Qué se puede encargar?',
		a: 'Pollos asados, patatas fritas o alioli, pimientos asados, calamares a la romana, ensaladas y croquetas de jamón, pollo o bacalao. Por encargo hay codillos, costillas y aguja de cerdo, conejos, patatas asadas y paellas: mixta, valenciana, de verdura, de pollo y verdura, arroz negro, arroz a banda, fideuá mixta y de marisco.',
	},
	{
		q: '¿Hay que encargar la paella con antelación?',
		a: 'Sí. Las paellas, los codillos, las costillas y los conejos van en el apartado «por encargo» del cartel del local, así que se piden por teléfono antes de ir a recogerlos. El 96 583 27 80 es el número de reservas y encargos.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'No consta servicio de sala: el negocio se presenta como asador y comida para llevar, con rótulo de «to take away / para llevar». Lo habitual es recoger el pedido y comerlo en casa o en la playa.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no publica reparto a domicilio y esta página no lo ofrece. El pedido se recoge en el local; si necesitas una entrega, se consulta al llamar.',
	},
	{
		q: '¿Se publican los precios?',
		a: 'No. El asador no tiene carta con tarifas publicada, así que aquí aparece la relación de platos sin importes. El precio del pollo, de las bandejas y de cada paella se confirma en el 96 583 27 80.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,4 sobre 5 con 154 reseñas en Google, según la ficha consultada en octubre de 2026. Es uno de los asadores con más opiniones de Calpe.',
	},
	{
		q: '¿Tiene página web o redes?',
		a: 'La ficha de Google no enlaza una web propia. La guía municipal de Calpe apunta a una página de Facebook del asador. Esta web es informativa y no es un canal oficial de pedidos: el teléfono es el canal que consta.',
	},
];
