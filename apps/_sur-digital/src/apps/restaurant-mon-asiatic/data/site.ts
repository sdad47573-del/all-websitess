/**
 * Datos de Restaurant Món Asiàtic — Carrer Santa Anna, 10,
 * AD700 Escaldes-Engordany (Andorra).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 42.509151, 1.5417669, feature
 *   0x12a5f558265557b1:0x63183f109164384f (nombre, dirección, categoría, horario,
 *   teléfono, valoración, atributos de accesibilidad y descripción del negocio).
 * - Fotografías del perfil del establecimiento en Google Maps.
 *
 * La ficha no publica carta con precios ni web propia: esta web no inventa
 * importes.
 */

export const BUSINESS = {
	name: 'Restaurant Món Asiàtic',
	fullName: 'RESTAURANT MÓN ASIÀTIC',
	mark: 'MA',
	street: 'Carrer Santa Anna, 10',
	city: 'Escaldes-Engordany',
	parish: 'Escaldes-Engordany',
	postalCode: 'AD700',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/restaurant-mon-asiatic',
	geo: { lat: 42.509151, lng: 1.5417669 },
	featureId: '0x12a5f558265557b1:0x63183f109164384f',
	placeId: 'ChIJsVdVJlj1pRIRTzhkkRA_GGM',
	channel: '/g/11vbc3mfzt',
	category: 'Restaurante asiático',
	categories: ['Restaurante asiático'],
	phone: '+376 845 394',
	phoneHref: 'tel:+376845394',
	tagline: 'Restaurante asiático en Escaldes-Engordany',
	description:
		'Restaurant Món Asiàtic, restaurante asiático en la calle Santa Anna, 10, de Escaldes-Engordany (AD700). Cocina a la carta recién hecha y menús de mediodía, en un comedor para 60 o 70 comensales. Abre los jueves, viernes y sábados de 13:00 a 16:00 y de 20:00 a 23:00. La ficha de Google le da 4,7 sobre 5 con 141 reseñas.',
	hasPublicWebsite: false,
	ownerDescription:
		'Somos un restaurante asiático ubicada a la parroquia de Escaldes-Engordany Andorra, cabe unos 60 a 70 comenzales. Ofrecemos platos a la carta donde puedes probar comida recién hecha y casera. Además disponemos menús a los martes, jueves y viernes al mediodía.\nTanto el local y el trato al cliente es muy transparente, agradable y familiar.\n!Visítanos¡ Son todos bienvenidos.',
	/** Rótulo de la fachada, con los dos teléfonos que aparecen pintados. */
	signPhones: ['845 394', '841 668'],
	signTagline: 'cuina casolana',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+M%C3%B3n+Asi%C3%A0tic/@42.509151,1.5417669,17z/data=!4m6!3m5!1s0x12a5f558265557b1:0x63183f109164384f!8m2!3d42.509151!4d1.5417669!16s%2Fg%2F11vbc3mfzt',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.509151%2C1.5417669',
	embed: 'https://maps.google.com/maps?q=42.509151,1.5417669&z=17&hl=es&output=embed',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.7,
	count: 141,
	label: '4,7',
};

/** Horario que publica la ficha: jueves a sábado, mediodía y noche. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado' },
	{ day: 'Martes', value: 'Cerrado' },
	{ day: 'Miércoles', value: 'Cerrado' },
	{ day: 'Jueves', value: '13:00–16:00 · 20:00–23:00' },
	{ day: 'Viernes', value: '13:00–16:00 · 20:00–23:00' },
	{ day: 'Sábado', value: '13:00–16:00 · 20:00–23:00' },
	{ day: 'Domingo', value: 'Cerrado' },
];

/** Lo que sí consta en la ficha de Google. */
export const SERVICIOS = [
	'Restaurante asiático',
	'Cocina a la carta',
	'Menús de mediodía',
	'60–70 comensales',
	'Trato familiar',
	'Acceso adaptado',
];

/** Platos que se ven en las fotos y menús que anuncia la casa, sin precios. */
export const CARTA: {
	title: string;
	items: { name: string; note: string; price?: string }[];
}[] = [
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Rollitos de primavera',
				note: 'fritos y crujientes, servidos con lechuga y cuenco de salsa agridulce',
			},
			{
				name: 'Dim sum al vapor',
				note: 'canastilla de bambú con empanadillas rellenas sobre hoja de col',
			},
			{
				name: 'Gyozas y samosas',
				note: 'empanadillas a la plancha con semillas de sésamo y triángulos fritos con salsa picante',
			},
			{
				name: 'Tempura',
				note: 'verduras y gambas rebozadas, con salsa de soja para mojar',
			},
		],
	},
	{
		title: 'Del wok',
		items: [
			{
				name: 'Salteado de carne con brócoli',
				note: 'tiras de carne con brócoli, cebolla y salsa brillante, con arroz o fideos al lado',
			},
			{
				name: 'Tallarines con pollo',
				note: 'fideos salteados con pollo, zanahoria, cebolla y pimiento',
			},
			{
				name: 'Sopa de fideos con bok choy',
				note: 'caldo oscuro con fideos, verduras y dos medios bok choy',
			},
		],
	},
	{
		title: 'Menús y carta',
		items: [
			{
				name: 'Menús de mediodía',
				note: 'la casa los anuncia «a los martes, jueves y viernes al mediodía»',
			},
			{
				name: 'Platos a la carta',
				note: '«comida recién hecha y casera», según la descripción del restaurante',
			},
			{
				name: 'Cuina casolana',
				note: 'lo que se lee en el rótulo dorado de la fachada, junto al nombre del restaurante',
			},
		],
	},
];

export const CARTA_NOTE =
	'La ficha de Google no publica la carta ni los precios. Lo que aparece aquí es lo que muestran las fotografías del perfil y lo que anuncia la propia casa; para conocer la oferta completa y los importes, llama al +376 845 394.';

export const FAQ = [
	{
		q: '¿Dónde está Restaurant Món Asiàtic?',
		a: 'En la calle Santa Anna, 10, de Escaldes-Engordany (AD700), en Andorra. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre jueves, viernes y sábado, en dos turnos: de 13:00 a 16:00 y de 20:00 a 23:00. Lunes, martes, miércoles y domingo figuran como cerrados en la ficha de Google.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La descripción del restaurante anuncia menús «a los martes, jueves y viernes al mediodía». La ficha marca el martes como cerrado, así que esa parte no cuadra: conviene llamar al +376 845 394 antes de ir un martes.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'En las fotos del perfil aparecen rollitos de primavera, dim sum al vapor, gyozas, samosas, tempura, un salteado de carne con brócoli, tallarines con pollo y sopa de fideos con bok choy. La carta completa no está publicada.',
	},
	{
		q: '¿La cocina es casera?',
		a: 'La propia casa lo dice en su ficha: «Ofrecemos platos a la carta donde puedes probar comida recién hecha y casera». El rótulo de la fachada añade «cuina casolana».',
	},
	{
		q: '¿Cuántas mesas tiene?',
		a: 'Según la descripción del restaurante, el comedor admite «unos 60 a 70 comenzales». Las fotos muestran dos salas: una con mesas negras y un mural de flor roja, y otra con mesas de mármol amarillo, sillas de bistró y paredes de ladrillo y madera.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha de Google no la publica, así que esta página no da importes. Los precios se consultan por teléfono o en el local.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado y que no dispone de bucle magnético asistencial. Si necesitas una condición concreta, llama antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No consta un sistema de reservas ni una web propia. La ficha solo publica el teléfono +376 845 394, que es la vía para preguntar por mesa.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 141 reseñas en el momento de consultarla (noviembre de 2026).',
	},
];
