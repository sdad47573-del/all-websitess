/**
 * Datos de Guisando Comida para Llevar — C. de la Era, 25, Málaga-Este.
 * Ficha pública de Google Maps consultada en octubre de 2026.
 * No se publican aquí horario semanal ni carta cerrada mientras no consten en la ficha.
 */

export const BUSINESS = {
	name: 'Guisando Comida para Llevar',
	shortName: 'Guisando',
	mark: 'G',
	street: 'C. de la Era, 25',
	district: 'Málaga-Este',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29016',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/guisando-comida-para-llevar',
	geo: { lat: 36.732814, lng: -4.4026979 },
	featureId: '0xd72f7d9ff400001:0x808c7913c8c7b65f',
	placeId: 'ChIJAQBA_9n3cg0RX7bHyBN5jIA',
	plusCode: '8C8QPHMW+4W',
	googleCategory: 'Arrocería',
	phone: '605 22 71 11',
	phoneHref: 'tel:+34605227111',
	secondaryPhone: '951 08 88 53',
	tagline: 'Arroces y comida para llevar en Málaga-Este',
	description:
		'Guisando Comida para Llevar, arrocería en C. de la Era, 25, Málaga-Este (29016 Málaga). El rótulo anuncia arroces, pollos asados, comida para llevar y catering. Consulta por teléfono la oferta y el horario.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Guisando+Comida+para+Llevar/@36.732814,-4.4026979,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7d9ff400001:0x808c7913c8c7b65f!8m2!3d36.732814!4d-4.4026979!16s%2Fg%2F11cn94h7mx?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=9262911659474138719',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.732814%2C-4.4026979',
	embed: 'https://maps.google.com/maps?q=36.732814,-4.4026979&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.732814,-4.4026979',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.4, count: 102, label: '4,4' };

/** No hay un horario semanal confirmado publicado en el bloque consultado. */
export const HORARIO = [];
export const HORARIO_AVISO =
	'El horario semanal no aparece confirmado en la información consultada. Comprueba la ficha de Google Maps o llama antes de desplazarte.';

export const SERVICIOS = [
	'Arroces',
	'Pollos asados',
	'Comida para llevar',
	'Congelados',
	'Frutas y verduras',
	'Catering',
];

export const HIGHLIGHTS = [
	{
		title: 'Arroces y pollos asados',
		text: 'La categoría de Google es arrocería y el rótulo de la fachada anuncia arroces y pollos asados.',
	},
	{
		title: 'Comida para llevar',
		text: 'El nombre del establecimiento y el rótulo exterior indican comida para llevar. Llama para consultar la oferta y hacer un encargo.',
	},
	{
		title: 'También catering',
		text: 'El rótulo anuncia catering, además de congelados, frutas y verduras. Confirma directamente los servicios disponibles.',
	},
];

/** La ficha no ofrece una carta completa; no se añaden platos ni precios no confirmados. */
export const MENU = [
	{
		title: 'Arroces y asador',
		items: [
			{
				name: 'Arroces',
				note: 'la especialidad de la casa según su categoría de arrocería; en las fotos aparece una paella preparada',
			},
			{
				name: 'Pollos asados',
				note: 'anunciados en el rótulo exterior del establecimiento',
			},
		],
	},
	{
		title: 'Cocina preparada',
		items: [
			{
				name: 'Croquetas y tortilla',
				note: 'mencionadas en una reseña pública de Google',
			},
			{
				name: 'Empanadas y fritos',
				note: 'productos que se aprecian en las fotografías del mostrador',
			},
		],
	},
];

/** Temas de las dos opiniones visibles al consultar la ficha pública. */
export const RESENAS = [
	{ texto: 'Una opinión destaca la paella, las croquetas y la tortilla.', valor: 5 },
	{ texto: 'Otra persona comenta que volverán a repetir.', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está Guisando Comida para Llevar?',
		a: 'En C. de la Era, 25, Málaga-Este, 29016 Málaga. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono que aparece en la ficha pública es 605 22 71 11. En el rótulo exterior también se lee el 951 08 88 53.',
	},
	{
		q: '¿Qué tipo de cocina ofrece?',
		a: 'Google clasifica el establecimiento como arrocería. El rótulo exterior anuncia arroces, pollos asados, comida para llevar y catering; las fotos muestran también paella, croquetas, tortilla y empanadas.',
	},
	{
		q: '¿Qué platos hay en la carta?',
		a: 'La ficha consultada no publica una carta completa ni precios. En las fotografías aparece una paella y una reseña menciona croquetas y tortilla. Llama para consultar la oferta disponible.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'No aparece un horario semanal confirmado en la información consultada. Comprueba el horario actualizado en Google Maps o llama antes de ir.',
	},
	{
		q: '¿Cuál es su valoración?',
		a: 'La ficha mostraba una valoración de 4,4 sobre 5 con 102 reseñas al consultarla en octubre de 2026. Puede cambiar con nuevas opiniones.',
	},
];
