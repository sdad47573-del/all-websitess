/**
 * Datos de Panadería confitería El Cautivo — Av. de Carlos Haya, 192
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería confitería El Cautivo,
 *   36.7248169,-4.4566425, feature 0xd72f715d02f4395:0x8c48b19c4381d89a.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web ni
 * métodos de pago. El mostrador recoge solo lo que muestran las fotos del
 * perfil, sin importes.
 */

export const BUSINESS = {
	name: 'Panadería confitería El Cautivo',
	shortName: 'El Cautivo',
	mark: 'C',
	street: 'Av. de Carlos Haya, 192',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '951 73 15 16',
	phoneHref: 'tel:+34951731516',
	rating: 4.7,
	reviewsCount: 23,
	siteUrl: 'https://www.sur-digital.com/panaderia-confiteria-el-cautivo',
	geo: { lat: 36.7248169, lng: -4.4566425 },
	featureId: '0xd72f715d02f4395:0x8c48b19c4381d89a',
	placeId: 'ChIJlUMv0BX3cg0RmtiBQ5yxSIw',
	googleCategory: 'Panadería',
	tagline: 'Panadería y confitería en Carlos Haya',
	description:
		'Panadería confitería El Cautivo, en Av. de Carlos Haya, 192 (Bailén-Miraflores, 29010 Málaga). Pan y dulces de obrador. Teléfono 951 73 15 16. 4,7 sobre 5 en Google.',
	hoursSummary: 'L–J 8:30–15:00 y 17:00–20:00 · V 8:30–15:00 · S 9:00–14:00 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+confiter%C3%ADa+El+Cautivo/@36.7248169,-4.4566425,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f715d02f4395:0x8c48b19c4381d89a!8m2!3d36.7248169!4d-4.4566425!16s%2Fg%2F11bxdn12d1?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=10108524648338675866',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7248169%2C-4.4566425',
	embed: 'https://maps.google.com/maps?q=36.7248169,-4.4566425&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7248169,-4.4566425',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a jueves', value: '8:30–15:00 · 17:00–20:00' },
	{ day: 'Viernes', value: '8:30–15:00' },
	{ day: 'Sábado', value: '9:00–14:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) podría ser diferente; conviene llamar antes de ir.';

/** Lo que anuncian el rótulo y el toldo de la fachada. */
export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Comestibles',
	'Charcutería',
	'Congelados',
	'Fruta',
	'Hielo',
];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y confitería',
		text: 'El toldo de la fachada anuncia panadería y confitería, y en el mostrador hay bizcocho, pasteles de chocolate y dulces envasados.',
	},
	{
		title: 'La tienda',
		text: 'El rótulo suma comestibles, charcutería y congelados. Dentro hay un expositor de fruta y quesos envasados de la comarca.',
	},
	{
		title: 'El hielo',
		text: 'El escaparate anuncia venta de cubitos de hielo, junto al cartel de la panadería.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Bizcocho',
				note: 'En las fotos del perfil, cortado en porciones sobre papel de horno.',
			},
			{
				name: 'Pasteles de chocolate',
				note: 'En el mostrador, junto a otros dulces.',
			},
			{
				name: 'Pan y confitería',
				note: 'Lo que anuncia el toldo de la fachada. La ficha no publica surtido ni precios.',
			},
		],
	},
	{
		title: 'La tienda',
		items: [
			{
				name: 'Quesos',
				note: 'Envasados al vacío, de la marca Santa María del Cerro (Villanueva de la Concepción).',
			},
			{
				name: 'Fruta',
				note: 'En el expositor: plátanos, naranjas, mandarinas, limones, manzanas, kiwis y melón.',
			},
			{
				name: 'Charcutería y congelados',
				note: 'Anunciados en el rótulo de la fachada.',
			},
		],
	},
	{
		title: 'Dulces envasados',
		items: [
			{ name: 'Mantecados', note: 'Cajas de mantecados en las fotos del perfil.' },
			{
				name: 'Roscos',
				note: 'Envueltos en papel, junto a los mantecados.',
			},
			{
				name: 'Dulces de la Alpujarra',
				note: 'Productos envasados de la Alpujarra en el mostrador.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería confitería El Cautivo?',
		a: 'En la avenida de Carlos Haya, 192, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 8:30 a 15:00 y de 17:00 a 20:00. El viernes abre solo por la mañana, de 8:30 a 15:00; el sábado, de 9:00 a 14:00, y el domingo cierra. El 1 de noviembre (Día de Todos los Santos) el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 951 73 15 16. La ficha de Google no publica página web propia, correo electrónico ni redes sociales, así que el contacto es en el local o por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero no aparcamiento adaptado. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El toldo anuncia panadería y confitería, y el rótulo suma comestibles, charcutería y congelados. En las fotos del perfil aparecen bizcocho, pasteles de chocolate, mantecados y roscos envasados, quesos de la comarca, fruta y hielo. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Venden fruta y otros productos de tienda?',
		a: 'Sí. En el local hay un expositor con plátanos, naranjas, mandarinas, limones, manzanas, kiwis, melón y sandía, además de quesos envasados y productos de comestibles. El rótulo de la fachada anuncia comestibles, charcutería y congelados.',
	},
	{
		q: '¿Venden hielo?',
		a: 'El escaparate tiene un cartel de «Hielo - venta de cubitos». La ficha de Google no publica precios ni formatos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 23 reseñas en Google, que la clasifica como panadería.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
