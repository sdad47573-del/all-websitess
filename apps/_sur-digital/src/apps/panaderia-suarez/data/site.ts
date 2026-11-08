/**
 * Datos de Panadería cafetería Suarez — Pl. de la Trinidad, Centro (14003 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: 37.882498,-4.7832049,
 *   feature 0xd6cdf003d561463:0x9b3f35dc4782eb24.
 * - Nombre, categoría, dirección y el dato de accesibilidad: ficha pública de
 *   Google.
 *
 * LÍMITES IMPORTANTES DE ESTA FICHA (es la más vacía de la serie):
 * - **No tiene fotos**: solo una referencia de Street View de la plaza.
 * - **No publica horario**: el bloque de horarios llega vacío.
 * - **No publica teléfono.**
 * - **No tiene reseñas ni valoración**: no hay media que mostrar.
 * - Tampoco publica descripción, carta, precios ni web propia.
 *
 * La web, por tanto, es tipográfica, sin galería ni banda de nota, y dice
 * expresamente lo que falta en lugar de rellenarlo.
 */

export const BUSINESS = {
	name: 'Panadería cafetería Suarez',
	shortName: 'Suarez',
	mark: 'S',
	street: 'Pl. de la Trinidad',
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14003',
	country: 'ES',
	phone: '',
	phoneHref: '',
	siteUrl: 'https://www.sur-digital.com/panaderia-suarez',
	geo: { lat: 37.882498, lng: -4.7832049 },
	featureId: '0xd6cdf003d561463:0x9b3f35dc4782eb24',
	googleCategory: 'Cafetería',
	tagline: 'Panadería y cafetería en la plaza de la Trinidad, Córdoba',
	description:
		'Panadería cafetería Suarez, en la plaza de la Trinidad (Centro, 14003 Córdoba). La ficha de Google no publica teléfono, horario, fotos ni reseñas: aquí solo está lo que consta.',
	hoursSummary: 'Horario no publicado en Google',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+cafeter%C3%ADa+Suarez/@37.882498,-4.7832049,17z/data=!4m6!3m5!1s0xd6cdf003d561463:0x9b3f35dc4782eb24!8m2!3d37.882498!4d-4.7832049!16s%2Fg%2F11yg49hfj3?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.882498%2C-4.7832049',
	embed: 'https://maps.google.com/maps?q=37.882498,-4.7832049&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.882498,-4.7832049',
};

/** La ficha no publica horario: se dice, no se rellena. */
export const HOURS = [{ day: 'Horario', value: 'No publicado en Google' }];

export const HOURS_NOTE =
	'Google no publica horario de este local: el bloque de horarios de la ficha está vacío. La ficha tampoco tiene teléfono, así que esta página no puede ofrecer ni una hora ni un número inventados. Para saber si está abierto hay que acercarse a la plaza de la Trinidad.';

/** Lo único que consta en la ficha, sin añadir catálogo. */
export const SERVICIOS = [
	'Cafetería',
	'Panadería',
	'Plaza de la Trinidad',
	'Centro · 14003',
	'Sin horario publicado',
];

export const HIGHLIGHTS = [
	{
		title: 'La plaza',
		text: 'Está en la plaza de la Trinidad, en pleno Centro de Córdoba (14003), junto a una de las iglesias más antiguas de la ciudad. La ficha no publica número de portal: el mapa abre el punto exacto que da Google para el local.',
	},
	{
		title: 'Dos oficios en el nombre',
		text: 'El nombre dice panadería y cafetería; Google, en cambio, la clasifica con una sola categoría: «Cafetería». No hay carta ni precios publicados, así que la web no promete desayunos, panes ni precios concretos.',
	},
	{
		title: 'Lo que no hay',
		text: 'La ficha no publica teléfono, horario, fotos ni reseñas, y en el momento de crear esta web no tiene ninguna valoración. Es lo que hay: en lugar de rellenar esos huecos con datos de otros locales, la página se queda con la dirección y el acceso.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería cafetería Suarez?',
		a: 'En la plaza de la Trinidad, en el Centro de Córdoba (14003). La ficha de Google no publica número de portal, así que esta web no lo inventa: el mapa abre el punto exacto que da Google y el botón «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario: el bloque de horarios está vacío. Esta página no lo inventa ni lo copia de otros locales de la plaza. Para saber si está abierto hay que acercarse.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'No hay teléfono publicado en la ficha, así que esta web no ofrece ningún número. Tampoco hay web propia, correo ni redes enlazadas.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El nombre anuncia panadería y cafetería, y Google la clasifica como «Cafetería». No publica carta, catálogo ni precios, y no tiene fotos con las que comprobarlo. Esta página no lo inventa: lo que haya se ve en el propio local.',
	},
	{
		q: '¿Tiene fotos la ficha de Google?',
		a: 'No. En el momento de crear esta web la ficha no muestra ninguna fotografía del negocio; solo hay una referencia de Street View de la plaza, que no es una imagen del local. Por eso esta página va sin galería y usa un cartel tipográfico propio.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Ninguna: la ficha no tiene reseñas publicadas, así que no hay media que mostrar. Esta web no la estima ni la sustituye por la de otro negocio.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo indica que el local tiene acceso para sillas de ruedas. No publica más detalles del interior ni información de aparcamiento.',
	},
];
