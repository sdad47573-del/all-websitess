/**
 * Datos de Cuina de Dos (C/ Sant Nicolau, 6 · 03720 Benissa, Alicante).
 *
 * Fuentes públicas consultadas el 12 de noviembre de 2026:
 * - Ficha de Google Maps: 38.7155316, 0.0493814, feature
 *   0x129e01132e9d8123:0xfce567263e45e801. De ahí salen el nombre, la
 *   dirección (C/ Sant Nicolau, 6, 03720 Benissa, Alicante), el teléfono
 *   965 73 07 89, la categoría «Bar restaurante», la nota 4,7 sobre 5 y el
 *   horario del día consultado (jueves 13:30–16:00 y 19:30–23:00).
 * - Portal de Turismo de Benissa: día de descanso lunes y martes, capacidad
 *   (72 plazas dentro y 20 fuera), acceso PMR, opciones veganas y sin gluten,
 *   precio medio 20–25 €, WhatsApp 655 060 358 y correo cuinadedos@gmail.com.
 * - Carta publicada en carta.menu (actualización del 23/10/2026): menú del día
 *   14 €, pulpo en tempura 14 €, parpatana de atún rojo 20 €, pan y bebidas.
 * - Entrevista en Dania Gastronómica (2023): cocina de temporada, picaeta para
 *   compartir, pescado de la lonja de Calp y cordero de pastores de Benissa.
 *
 * Lo que esta web NO inventa: Google solo muestra el horario del día
 * consultado; la semana se completa con el portal de turismo y la carta
 * publicada, y se avisa de que conviene confirmar por teléfono. No hay número
 * de reseñas verificable en la vista pública consultada.
 */

export const BUSINESS = {
	name: 'Cuina de Dos',
	fullName: 'Cuina de Dos',
	shortName: 'Cuina de Dos',
	mark: 'CD',
	street: 'C/ Sant Nicolau, 6',
	district: 'Centro',
	neighbourhood: 'Centro',
	city: 'Benissa',
	cityAddress: 'Benissa',
	region: 'Comunidad Valenciana',
	regionName: 'Benissa · Marina Alta',
	postalCode: '03720',
	country: 'ES',
	phone: '965 73 07 89',
	phoneHref: 'tel:+34965730789',
	whatsapp: '655 060 358',
	email: 'cuinadedos@gmail.com',
	rating: 4.7,
	reviewsCount: 0,
	siteUrl: 'https://www.sur-digital.com/cuina-de-dos',
	geo: { lat: 38.7155316, lng: 0.0493814 },
	featureId: '0x129e01132e9d8123:0xfce567263e45e801',
	placeId: '',
	plusCode: 'P28X+6Q Benissa',
	category: 'Bar restaurante',
	tagline: 'Cocina de temporada y picaeta para compartir',
	description:
		'Bar restaurante en el centro de Benissa (Alicante) con cocina de temporada, picaeta para compartir y menú del día. Web informativa no oficial.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cuina+de+Dos/@38.7155316,0.0493814,17z/data=!3m1!4b1!4m6!3m5!1s0x129e01132e9d8123:0xfce567263e45e801!8m2!3d38.7155316!4d0.0493814!16s%2Fg%2F11c1q7rjzk?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Cuina+de+Dos/@38.7155316,0.0493814,17z/data=!3m1!4b1!4m6!3m5!1s0x129e01132e9d8123:0xfce567263e45e801!8m2!3d38.7155316!4d0.0493814!16s%2Fg%2F11c1q7rjzk?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7155316%2C0.0493814',
	embed: 'https://maps.google.com/maps?q=38.7155316,0.0493814&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.7155316,0.0493814',
};

export const HOURS: { day: string; value: string; closed?: boolean }[] = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '13:00–16:00' },
	{ day: 'Jueves', value: '13:30–16:00 y 19:30–23:00' },
	{ day: 'Viernes', value: '13:30–16:00' },
	{ day: 'Sábado', value: '13:30–16:00' },
	{ day: 'Domingo', value: '13:30–16:00' },
];

export const SERVICIOS: string[] = [
	'Cocina de temporada',
	'Picaeta para compartir',
	'Menú del día',
	'Terraza',
	'Opciones sin gluten',
	'Opciones veganas',
	'Acceso PMR',
];

export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [];

export const FAQ: { q: string; a: string }[] = [];
