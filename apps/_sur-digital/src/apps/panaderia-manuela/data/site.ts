/**
 * Datos de Panadería Manuela Martín Vargas — Pl. de Vista Alegre, 1, Poniente Sur
 * (14004 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: 37.8772419,-4.7910638,
 *   feature 0xd6d20a19592b05d:0xac75868f8304f985.
 * - Nombre, categoría, dirección, teléfono, valoración, reseñas y el dato de
 *   accesibilidad: ficha pública de Google.
 *
 * LÍMITES IMPORTANTES DE ESTA FICHA:
 * - **No tiene fotos**: la respuesta de detalle solo trae una referencia de
 *   Street View de la plaza, ninguna imagen del negocio. La web va sin galería.
 * - **No publica horario**: el bloque de horarios llega vacío, así que no se
 *   inventa ninguno y se dice expresamente.
 * - Tampoco publica descripción, carta, precios ni web propia.
 */

export const BUSINESS = {
	name: 'Panadería Manuela Martín Vargas',
	shortName: 'Manuela Martín Vargas',
	mark: 'M',
	street: 'Pl. de Vista Alegre, 1',
	district: 'Poniente Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14004',
	country: 'ES',
	phone: '957 27 38 03',
	phoneHref: 'tel:+34957273803',
	rating: 3,
	reviewsCount: 1,
	siteUrl: 'https://www.sur-digital.com/panaderia-manuela',
	geo: { lat: 37.8772419, lng: -4.7910638 },
	featureId: '0xd6d20a19592b05d:0xac75868f8304f985',
	placeId: 'ChIJXbCSlaEgbQ0RhfkEg4-Gdaw',
	googleCategory: 'Panadería',
	tagline: 'Panadería en la plaza de Vista Alegre, Córdoba',
	description:
		'Panadería Manuela Martín Vargas, en Pl. de Vista Alegre, 1 (Poniente Sur, 14004 Córdoba). Teléfono 957 27 38 03. La ficha de Google no publica horario ni fotos.',
	hoursSummary: 'Horario no publicado en Google',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Manuela+Mart%C3%ADn+Vargas/@37.8772419,-4.7910638,17z/data=!4m6!3m5!1s0xd6d20a19592b05d:0xac75868f8304f985!8m2!3d37.8772419!4d-4.7910638!16s%2Fg%2F1tcv7nwx?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8772419%2C-4.7910638',
	embed: 'https://maps.google.com/maps?q=37.8772419,-4.7910638&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8772419,-4.7910638',
};

/**
 * La ficha no publica horario. En vez de rellenar la tabla con horas inventadas,
 * se deja una sola fila que lo dice, y la nota remite al teléfono.
 */
export const HOURS = [{ day: 'Horario', value: 'No publicado en Google' }];

export const HOURS_NOTE =
	'Google no publica horario de esta panadería: el bloque de horarios de la ficha está vacío. Esta página no lo inventa ni lo copia de otros comercios. Para saber si está abierta, lo más fiable es llamar al 957 27 38 03 o pasarse por la plaza.';

/** Lo que consta en la ficha, sin añadir catálogo que no publica. */
export const SERVICIOS = [
	'Panadería',
	'Plaza de Vista Alegre',
	'Poniente Sur · 14004',
	'Teléfono 957 27 38 03',
	'Sin horario publicado',
];

export const HIGHLIGHTS = [
	{
		title: 'El nombre',
		text: 'La ficha la registra como «Panadería Manuela Martín Vargas», con una sola categoría: «Panadería». No es un nombre comercial de fantasía, sino el de la persona que da nombre al negocio, y así se anuncia en Google.',
	},
	{
		title: 'La plaza',
		text: 'Está en el número 1 de la plaza de Vista Alegre, en el barrio de Poniente Sur (14004 Córdoba). Es una dirección de plaza, no de calle: el mapa de esta página abre el punto exacto que da Google para el local.',
	},
	{
		title: 'El teléfono',
		text: 'La ficha publica el 957 27 38 03, y es el único canal de contacto que consta. Sirve para lo que la web no puede resolver: horario real, encargos, qué hay ese día o si abren en festivo.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Manuela Martín Vargas?',
		a: 'En la plaza de Vista Alegre, 1, en el barrio de Poniente Sur de Córdoba (14004). El mapa de esta página abre la ubicación de la ficha y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario: el bloque de horarios está vacío. Esta página no lo inventa. Para confirmarlo, llama al 957 27 38 03 o pasa por el local.',
	},
	{
		q: '¿Cómo se contacta?',
		a: 'Por teléfono, en el 957 27 38 03, que es el número publicado en la ficha. No hay web propia, correo ni redes enlazadas, y esta página no tiene formulario.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha solo la clasifica como «Panadería»: no publica carta, catálogo ni precios, y no tiene fotos con las que comprobarlo. Esta web no lo inventa; se pregunta por teléfono o en el mostrador.',
	},
	{
		q: '¿Tiene fotos la ficha de Google?',
		a: 'No. En el momento de crear esta web la ficha no muestra ninguna fotografía del negocio: solo hay una referencia de Street View de la plaza, que no es una foto del local. Por eso esta página no incluye galería y usa un cartel tipográfico propio.',
	},
	{
		q: '¿Hacen encargos o tartas por encargo?',
		a: 'No hay información publicada sobre encargos. La ficha no detalla servicios, plazos ni precios. Cualquier encargo se habla directamente por teléfono.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '3,0 sobre 5 con una sola reseña. Con una única opinión la media no describe el negocio: es solo eso, una reseña. Esta web no reproduce su texto; se lee entera en Google.',
	},
	{
		q: '¿Es accesible o tiene aparcamiento?',
		a: 'La ficha de Google solo indica que no hay aparcamiento adaptado para sillas de ruedas; no publica información sobre el acceso al local. Si necesitas un acceso concreto, llama antes al 957 27 38 03.',
	},
];
