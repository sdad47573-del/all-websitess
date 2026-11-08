/**
 * Datos de Panadería Cafetería Hermanos Marín — C. Robinson Crusoe, 13
 * (Teatinos-Universidad, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Cafetería Hermanos Marín,
 *   36.709864,-4.4638035, feature 0xd72f712336bd211:0x8b5bb74fbe0956b8.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google, consultada el 28 de octubre de 2026.
 * - Historia de la casa: descripción del titular en la ficha de Google
 *   (José María Marín, Comares, 1967).
 * - Fotografías: perfil del establecimiento en Google Maps.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, carta, precios ni
 * servicio a domicilio. Los productos citados son los que aparecen en las
 * reseñas, en el rótulo y en las fotografías del perfil; no se publican importes.
 */

export const BUSINESS = {
	name: 'Panadería Cafetería Hermanos Marín',
	displayName: 'Hermanos Marín',
	mark: 'HM',
	street: 'C. Robinson Crusoe, 13',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	phone: '672 75 19 21',
	phoneHref: 'tel:+34672751921',
	rating: 4.4,
	reviewsCount: 31,
	siteUrl: 'https://www.sur-digital.com/panaderia-cafeteria-hermanos-marin',
	geo: { lat: 36.709864, lng: -4.4638035 },
	featureId: '0xd72f712336bd211:0x8b5bb74fbe0956b8',
	placeId: 'ChIJEdJrMxL3cg0RuFYJvk-3W4s',
	googleCategory: 'Panadería',
	tagline: 'Panadería, pastelería y cafetería familiar en Teatinos',
	description:
		'Panadería Cafetería Hermanos Marín, en C. Robinson Crusoe, 13 (Teatinos-Universidad, 29006 Málaga). Pan artesano, bocadillos y café en una casa familiar desde 1967. Teléfono 672 75 19 21.',
	hoursSummary: 'Lunes a viernes, 7:00–22:00 · Fin de semana, 8:00–22:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Cafeter%C3%ADa+Hermanos+Mar%C3%ADn/@36.709864,-4.4638035,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f712336bd211:0x8b5bb74fbe0956b8!8m2!3d36.709864!4d-4.4638035!16s%2Fg%2F11t4h9_rpk?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.709864%2C-4.4638035',
	embed: 'https://maps.google.com/maps?q=36.709864,-4.4638035&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:00–22:00' },
	{ day: 'Sábado y domingo', value: '8:00–22:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Personal muy amable y cercano, bocadillos muy ricos y a buen precio!',
	},
	{
		rating: 5,
		text: 'Buen ambiente, pan artesano buenísimo, personal cercano y muy amable',
	},
];

/** Lo que la ficha, el rótulo y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Pan artesano',
	'Pastelería',
	'Bocadillos',
	'Café',
	'Para llevar',
	'Teatinos',
];

export const HIGHLIGHTS = [
	{
		number: '01',
		title: 'Desde 1967',
		text: 'La ficha cuenta que José María Marín empezó a repartir pan con ocho años por los caminos de Comares. De aquel oficio nació la casa familiar.',
	},
	{
		number: '02',
		title: 'Pan, café y bocadillos',
		text: 'El rótulo anuncia «Panadería · Pastelería» y la pizarra del local, «Cafetería Hermanos Marín». Las reseñas hablan del pan artesano y de los bocadillos.',
	},
	{
		number: '03',
		title: 'Todo el día',
		text: 'Abre de lunes a viernes de 7:00 a 22:00. El fin de semana empieza a las 8:00 y también cierra a las 22:00, según la ficha de Google.',
	},
];

/**
 * Productos que aparecen en las reseñas, el rótulo y las fotografías del perfil.
 * La ficha no publica carta ni precios, así que no se muestran importes.
 */
export const MENU = [
	{
		title: 'Del horno',
		kicker: 'Panadería',
		items: [
			{
				name: 'Pan artesano',
				note: 'una reseña de Google lo describe como «pan artesano buenísimo»',
			},
			{
				name: 'Pan del día',
				note: 'el mostrador y las estanterías del fondo aparecen llenos de piezas en las fotos del perfil',
			},
			{
				name: 'Pastelería',
				note: 'el rótulo de la fachada anuncia «Panadería · Pastelería»',
			},
		],
	},
	{
		title: 'De cafetería',
		kicker: 'Mostrador',
		items: [
			{
				name: 'Bocadillos',
				note: '«bocadillos muy ricos», en palabras de una reseña de la ficha',
			},
			{
				name: 'Café',
				note: 'la pizarra del local dice «Cafetería Hermanos Marín»',
			},
			{
				name: 'Desayunos y meriendas',
				note: 'las mesas altas y la barra aparecen en las fotos del perfil',
			},
		],
	},
	{
		title: 'Para llevar',
		kicker: 'En el mostrador',
		items: [
			{
				name: 'Pan y pasteles',
				note: 'las vitrinas del local muestran pan, bollería y pastelería',
			},
			{
				name: 'Bocadillos',
				note: 'se preparan en el mostrador; la ficha no anuncia reparto a domicilio',
			},
			{
				name: 'Bebidas',
				note: 'las neveras del fondo aparecen en las fotografías del perfil',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Hermanos Marín?',
		a: 'En la calle Robinson Crusoe, 13, en Teatinos-Universidad (29006 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:00 a 22:00. El sábado y el domingo, de 8:00 a 22:00. Es el horario publicado en la ficha de Google; conviene confirmarlo antes de ir, sobre todo en festivos.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 672 75 19 21. La panadería no publica página web propia ni un canal de pedidos por internet.',
	},
	{
		q: '¿Es panadería o cafetería?',
		a: 'Las dos cosas. Google la clasifica como panadería, el nombre incluye «Cafetería» y la pizarra del local dice «Cafetería Hermanos Marín». En el mostrador hay pan y pastelería, y las reseñas hablan de bocadillos y café.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Las reseñas citan el pan artesano y los bocadillos; el rótulo anuncia panadería y pastelería, y las fotos del perfil muestran vitrinas con pan y pasteles. La ficha no publica carta ni precios, así que esta página no cita productos concretos con importe.',
	},
	{
		q: '¿Desde cuándo existe la panadería?',
		a: 'La ficha cuenta que la tradición empezó en 1967, cuando José María Marín repartía pan con ocho años por los senderos y calles de Comares, en la provincia de Málaga. La familia sigue con el mismo oficio en Teatinos.',
	},
	{
		q: '¿Hacen reparto a domicilio o pedidos online?',
		a: 'No consta en la ficha ni en la información pública consultada. La web no anuncia reparto ni pedidos por internet; para consultar una compra, lo directo es llamar al 672 75 19 21.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas. No publica información sobre aparcamiento adaptado, aseo adaptado ni asientos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,4 sobre 5 con 31 reseñas en Google. Las dos opiniones destacadas elogian el trato, el pan artesano, los bocadillos y el ambiente.',
	},
];
