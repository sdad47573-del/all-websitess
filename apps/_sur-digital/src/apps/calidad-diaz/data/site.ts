/**
 * Datos de Calidad Díaz — Calle de Luis I, 56-58, Nave 6A, Villa de Vallecas,
 * 28031 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Calidad Díaz, 40.3755744,-3.6472687,
 *   feature 0xd4225a1dcfd3593:0x1f90dc4741c08fbc.
 * - Nombre, dirección, categorías, teléfono, valoración, reseñas y horario:
 *   ficha pública de Google consultada en octubre de 2026.
 * - Oferta (carne fresca, pollo, embutidos, croquetas, albóndigas, mollejas,
 *   huevos, reparto y pedidos por WhatsApp): resumen público del negocio en
 *   directorios de restauración, con testimonios de clientes.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: ningún precio. El local no publica tarifas y
 * las elaboraciones cambian con el día, así que la carta va sin importes y
 * remite al teléfono.
 */

export const BUSINESS = {
	name: 'Calidad Díaz',
	fullName: 'Calidad Díaz · pollería, carne fresca y comida para llevar en Villa de Vallecas',
	shortName: 'Calidad Díaz',
	mark: 'D',
	street: 'Calle de Luis I, 56-58, Nave 6A',
	neighbourhood: 'Villa de Vallecas',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	regionName: 'Comunidad de Madrid',
	postalCode: '28031',
	country: 'ES',
	phone: '669 65 24 95',
	phoneHref: '+34669652495',
	rating: 5,
	reviewsCount: 6,
	siteUrl: 'https://www.sur-digital.com/calidad-diaz',
	geo: { lat: 40.3755744, lng: -3.6472687 },
	featureId: '0xd4225a1dcfd3593:0x1f90dc4741c08fbc',
	placeId: 'ChIJkzX93KElQg0RvI_AQUfckB8',
	cid: '2274560010426027964',
	plusCode: '8CGR99G3+63',
	category: 'Pollería',
	tagline: 'Pollería y proveedor de hostelería en Villa de Vallecas',
	description:
		'Calidad Díaz, pollería y tienda de alimentación en la calle Luis I, 56-58, Nave 6A, Villa de Vallecas (28031 Madrid). Pollo fresco para asar, alitas, muslos, mollejas, croquetas, albóndigas, embutidos y huevos de corral, con reparto a domicilio. Abre de lunes a viernes las 24 horas y el sábado de 7:00 a 14:00. 5,0 sobre 5 en Google con 6 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Calidad+D%C3%ADaz/@40.3755744,-3.6472687,17z/data=!3m1!4b1!4m6!3m5!1s0xd4225a1dcfd3593:0x1f90dc4741c08fbc!8m2!3d40.3755744!4d-3.6472687!16s%2Fg%2F11g21rdt6_?authuser=0&hl=es&entry=ttu',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3755744%2C-3.6472687',
	embed: 'https://maps.google.com/maps?q=40.3755744,-3.6472687&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3755744,-3.6472687',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: 'Abierto 24 horas' },
	{ day: 'Martes', value: 'Abierto 24 horas' },
	{ day: 'Miércoles', value: 'Abierto 24 horas' },
	{ day: 'Jueves', value: 'Abierto 24 horas' },
	{ day: 'Viernes', value: 'Abierto 24 horas' },
	{ day: 'Sábado', value: '7:00–14:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Señales de identidad que constan en las categorías de la ficha. */
export const SERVICIOS = [
	'Pollería',
	'Carne fresca',
	'Comida para llevar',
	'Reparto a domicilio',
	'Artículos de hostelería',
];

/**
 * Oferta del local. Sin precios: el comercio no publica tarifas y las
 * elaboraciones cambian con el día.
 */
export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [
	{
		title: 'Pollo fresco',
		items: [
			{
				name: 'Pollo entero para asar',
				note: 'Entero, limpio y listo para el horno, como el que se ve en las fotos del local.',
			},
			{
				name: 'Alitas de pollo',
				note: 'La pieza más pedida: crudas para asar en casa o ya asadas, según el día.',
			},
			{
				name: 'Muslos y contramuslos',
				note: 'Al peso, para bandeja de horno o para la plancha.',
			},
			{
				name: 'Pechuga y pollo troceado',
				note: 'Cortado al momento según lo que pidas.',
			},
			{
				name: 'Mollejas',
				note: 'La pieza que más mencionan quienes buscan el sabor de la cocina de antes.',
			},
		],
	},
	{
		title: 'Carne y embutidos',
		items: [
			{
				name: 'Carne fresca',
				note: 'Ternera y cerdo en el mostrador, al peso.',
			},
			{
				name: 'Salchichas',
				note: 'De la casa, para plancha o cocido.',
			},
			{
				name: 'Hamburguesas',
				note: 'Preparadas en el local, listas para hacer a la plancha.',
			},
			{
				name: 'Embutidos',
				note: 'Surtido de despensa para completar la compra.',
			},
			{
				name: 'Huevos de corral',
				note: 'Por docenas, según disponibilidad.',
			},
		],
	},
	{
		title: 'Elaborados de casa',
		items: [
			{
				name: 'Croquetas',
				note: 'Receta casera; las reseñas las destacan como uno de los platos fuertes.',
			},
			{
				name: 'Albóndigas',
				note: 'Elaboradas a mano, comparables en las reseñas a las de un buen restaurante.',
			},
			{
				name: 'Platos preparados',
				note: 'Guisos y bandejas listas para llevar, con lo que haya ese día.',
			},
			{
				name: 'Paella',
				note: 'De pollo y verduras, en la bandeja que aparece en la galería.',
			},
			{
				name: 'Alitas asadas',
				note: 'Ya hechas, para comer sin cocinar.',
			},
		],
	},
	{
		title: 'Para hostelería',
		items: [
			{
				name: 'Suministro a bares y restaurantes',
				note: 'La ficha incluye la categoría de tienda de artículos de hostelería.',
			},
			{
				name: 'Bandejas y formatos a medida',
				note: 'Se preparan bandejas separadas por producto y presentaciones para congelar.',
			},
			{
				name: 'Pedidos por volumen',
				note: 'Cantidades y disponibilidad se confirman por teléfono.',
			},
			{
				name: 'Reparto a domicilio',
				note: 'En Villa de Vallecas y alrededores; zona y condiciones, por teléfono.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Calidad Díaz?',
		a: 'En la calle Luis I, 56-58, Nave 6A, en Villa de Vallecas, 28031 Madrid. El mapa de esta página lleva a la entrada y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha indica que abre de lunes a viernes las 24 horas, el sábado de 7:00 a 14:00 y que el domingo cierra. En festivos el horario puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pollo fresco (entero para asar, alitas, muslos, pechuga, mollejas), carne y embutidos, huevos de corral y elaborados de casa como croquetas, albóndigas, salchichas, hamburguesas, alitas asadas y paella. También suministra a bares y restaurantes.',
	},
	{
		q: '¿Hay precios publicados?',
		a: 'No. El local no publica tarifas y las elaboraciones cambian con el día, así que la carta de esta página va sin importes. El precio de cada producto y de las bandejas se consulta en el 669 65 24 95.',
	},
	{
		q: '¿Se puede pedir para llevar o a domicilio?',
		a: 'Sí. La ficha lo clasifica como pollería y comida a domicilio, y el negocio ofrece reparto. La zona, el importe mínimo y el horario de reparto se confirman llamando al 669 65 24 95; según las reseñas también se cierran pedidos por WhatsApp.',
	},
	{
		q: '¿Se puede pedir en bandejas para congelar?',
		a: 'Sí: en las reseñas los clientes cuentan que se preparan bandejas separadas por producto y presentaciones pensadas para congelar. Basta con pedirlo al hacer el encargo.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Según la información pública disponible, el local no dispone de acceso adaptado para sillas de ruedas. Si lo necesitas, el reparto a domicilio resuelve la compra sin desplazarse; se pide por teléfono.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '5,0 sobre 5 con 6 reseñas en Google, según la ficha consultada en octubre de 2026. Los comentarios destacan la calidad frente al supermercado, el trato del mostrador y las croquetas y albóndigas.',
	},
	{
		q: '¿Tiene web propia o redes sociales?',
		a: 'La ficha de Google no enlaza una web propia del negocio. Esta página es informativa y no es un canal oficial de pedidos; el teléfono y la ficha de Google son los canales que constan.',
	},
];
