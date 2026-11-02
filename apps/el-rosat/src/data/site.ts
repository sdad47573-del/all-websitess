/**
 * Datos de Restaurante Snack Bar El Rosat — Carrer Sant Jordi, 1,
 * AD200 Pas de la Casa, parroquia de Encamp (Andorra).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: 42.54223, 1.73361, feature
 *   0x12af7d8b5b3afd49:0x13606cd99bbe433b (nombre, dirección, categoría,
 *   horario, teléfono, nota de 4,4 con 440 reseñas y atributo «se admiten
 *   perros»).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 * - La carta que el local tiene expuesta en la puerta (fotografía del perfil):
 *   platos combinados, bocadillos, americanos, burgers, kebabs, paninis,
 *   galettes de trigo sarraceno, crêpes y postres. Es una carta en francés,
 *   como corresponde a un local de Pas de la Casa.
 *
 * Lo que el sitio NO inventa: no hay web propia ni carta publicada en línea,
 * así que los platos y precios son los del cartel de la puerta y pueden
 * cambiar. No se prometen servicios que no consten en la ficha.
 */

export const BUSINESS = {
	name: 'Restaurante Snack Bar El Rosat',
	shortName: 'El Rosat',
	mark: 'R.',
	street: 'Carrer Sant Jordi, 1',
	city: 'Pas de la Casa',
	region: 'Encamp',
	regionName: 'Encamp',
	parish: 'Encamp',
	postalCode: 'AD200',
	country: 'AD',
	phone: '+376 855 464',
	phoneHref: '+376855464',
	rating: 4.4,
	reviewsCount: 440,
	siteUrl: 'https://el-rosat.vercel.app',
	geo: { lat: 42.54223, lng: 1.73361 },
	featureId: '0x12af7d8b5b3afd49:0x13606cd99bbe433b',
	placeId: 'ChIJSf06W4t9rxIRO0O-m9lsYBM',
	cid: null,
	category: 'Restaurante · Snack bar',
	categories: ['Restaurante', 'Snack bar'],
	tagline: 'Snack bar de montaña · Pas de la Casa',
	description:
		'Restaurante Snack Bar El Rosat, en Carrer Sant Jordi 1, Pas de la Casa (Andorra). Abre todos los días de 8:00 a 19:00, con servicio non-stop, y tiene 4,4 sobre 5 en Google con 440 reseñas.',
	hasPublicWebsite: false,
	ownerDescription: null,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/RESTAURANT+SNACK+BAR+EL+ROSAT+%7C+Pas+de+la+Casa/@42.54223,1.73361,17z/data=!4m6!3m5!1s0x12af7d8b5b3afd49:0x13606cd99bbe433b!8m2!3d42.54223!4d1.73361!16s%2Fg%2F1pp2xbj0w',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.54223%2C1.73361',
	embed: 'https://maps.google.com/maps?q=42.54223,1.73361&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: todos los días, de 8:00 a 19:00. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–19:00' },
	{ day: 'Martes', value: '8:00–19:00' },
	{ day: 'Miércoles', value: '8:00–19:00' },
	{ day: 'Jueves', value: '8:00–19:00' },
	{ day: 'Viernes', value: '8:00–19:00' },
	{ day: 'Sábado', value: '8:00–19:00' },
	{ day: 'Domingo', value: '8:00–19:00' },
];

/** Lo que sí consta en la ficha pública. */
export const SERVICIOS = [
	'Snack bar · restaurante',
	'Abierto de 8:00 a 19:00',
	'Servicio non-stop',
	'Todos los días',
	'Se admiten perros',
	'Carrer Sant Jordi, 1',
];

/** Carta de la puerta, en francés. Precios con IGI incluido. */
export const MENU = [
	{
		title: 'Platos combinados',
		items: [
			{
				name: 'Salade de poulet',
				note: 'Ensalada de pollo, con patatas fritas de la casa',
				price: '16,00 €',
			},
			{
				name: 'Salade de gésiers',
				note: 'Ensalada de mollejas de pato confitadas',
				price: '16,50 €',
			},
			{
				name: 'Salade de chèvre chaud',
				note: 'Ensalada de queso de cabra caliente',
				price: '16,50 €',
			},
			{
				name: 'Wrap poulet ou saumon',
				note: 'Wrap de pollo o de salmón',
				price: '13,00 €',
			},
			{
				name: 'Omelette sur billig',
				note: 'Tortilla con jamón o bacon y tomate fresco',
				price: '10,00 €',
			},
			{
				name: 'Steak haché (250 g)',
				note: 'Carne picada a la plancha con patatas',
				price: '16,50 €',
			},
			{
				name: 'Assiette de kebab',
				note: 'Plato de kebab con ensalada y patatas',
				price: '17,50 €',
			},
			{
				name: 'Entrecôte de bœuf',
				note: 'Entrecot de buey a la plancha',
				price: '18,50 €',
			},
		],
	},
	{
		title: 'Bocadillos y paninis',
		items: [
			{
				name: 'Jambon blanc, saucisson, chorizo ou jambon de pays',
				note: 'Jamón blanco, salchichón, chorizo o jamón del país',
				price: '6,00 €',
			},
			{
				name: 'Jambon fromage',
				note: 'Jamón y queso',
				price: '6,50 €',
			},
			{
				name: 'Bagnat thon, poulet ou végétarien',
				note: 'Bocadillo bagnat de atún, pollo o vegetariano',
				price: '6,00 €',
			},
			{
				name: 'Hot dog',
				note: 'Con o sin queso',
				price: '6,50 €',
			},
			{
				name: 'Sandwich omelette, pain tomate',
				note: 'Tortilla y pan con tomate',
				price: '7,50 €',
			},
			{
				name: 'Croque « le délicieux »',
				note: 'Sándwich tostado con bechamel y queso',
				price: '7,00 €',
			},
			{
				name: 'Les paninis',
				note: 'Jamón y queso, bacon y queso, pollo al curry, salmón ahumado, tres quesos, chèvre-miel, Nutella o Nutella-plátano',
				price: '6,50 €',
			},
		],
	},
	{
		title: 'Burgers y americanos',
		items: [
			{
				name: "L'original",
				note: 'Steak con patatas fritas',
				price: '9,00 €',
			},
			{
				name: 'Le super',
				note: 'Steak, patatas, ensalada, tomate y cebolla confitada de la casa',
				price: '10,00 €',
			},
			{
				name: 'Le méga',
				note: 'Como el super, con queso',
				price: '11,50 €',
			},
			{
				name: 'Le royal',
				note: 'Como el super, con queso y huevo',
				price: '12,80 €',
			},
			{
				name: 'Le cheese-burger',
				note: 'Con patatas fritas de la casa',
				price: '11,00 €',
			},
			{
				name: 'Le chicken-burger',
				note: 'Pollo crujiente con patatas fritas de la casa',
				price: '11,00 €',
			},
			{
				name: 'Le 2500',
				note: 'Hamburguesa de buey o de pollo, con patatas',
				price: '12,00 €',
			},
			{
				name: 'Le kebab',
				note: 'Kebab en pan o en galette, con patatas de la casa',
				price: '10,00 € / 11,50 €',
			},
		],
	},
	{
		title: 'Galettes, crêpes y postres',
		items: [
			{
				name: 'Galette complète',
				note: 'Trigo sarraceno con jamón, huevo y queso',
				price: '11,00 €',
			},
			{
				name: 'Galette chèvre miel',
				note: 'Trigo sarraceno con queso de cabra y miel',
				price: '10,00 €',
			},
			{
				name: 'Galette norvégienne',
				note: 'Trigo sarraceno con salmón ahumado',
				price: '11,00 €',
			},
			{
				name: 'Crêpe banane chocolat',
				note: 'También de caramel y mantequilla salada, o flambeada',
				price: '4,80 €',
			},
			{
				name: 'Panini nutella',
				note: 'o panini de plátano y Nutella',
				price: '4,50 €',
			},
			{
				name: 'Mousse au chocolat',
				note: 'Postre de la casa',
				price: '4,00 €',
			},
			{
				name: 'Menu enfant',
				note: 'Menores de 10 años: crêpe de jamón, salchicha o steak con patatas, postre y bebida',
				price: '9,50 €',
			},
		],
	},
];

/** Precios y condiciones que aparecen al pie de la carta. */
export const MENU_NOTE =
	'Precios de la carta expuesta en la puerta del local, con el IGI del 4,5 % incluido. Aceptan tarjeta a partir de 15 € y no admiten ticket restaurante ni cheque. La carta puede cambiar por temporada: confirma por teléfono si buscas un plato concreto.';

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Snack Bar El Rosat?',
		a: 'En el Carrer Sant Jordi, 1, AD200 Pas de la Casa, parroquia de Encamp (Andorra). Está en el centro de la localidad, a pocos metros de la frontera hispano-andorrana y de las pistas de Grandvalira. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario de El Rosat?',
		a: 'La ficha de Google publica un horario de 8:00 a 19:00 todos los días de la semana, de lunes a domingo. La carta anuncia servicio non-stop, así que se puede comer a cualquier hora dentro de ese horario. En temporada de esquí los horarios pueden ampliarse o cambiar en festivos; conviene llamar antes.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La carta de la puerta se organiza en platos combinados (ensaladas, wrap, omelette, steak, kebab y entrecot), bocadillos y paninis, americanos y burgers, kebabs, galettes de trigo sarraceno, crêpes dulces y postres. Hay también un menú infantil para menores de 10 años por 9,50 €.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'Los precios van de 3,50 € de una crêpe de azúcar a 18,50 € del entrecot de buey. Los bocadillos cuestan 6,00–7,50 €, los burgers 11,00–12,80 €, los paninis 6,50 € y los platos combinados 10,00–18,50 €. El IGI del 4,5 % ya está incluido en esos importes.',
	},
	{
		q: '¿Se puede ir con perro?',
		a: 'Sí. La ficha de Google del establecimiento marca «se admiten perros», así que se puede entrar con mascota. Si el local está lleno, conviene preguntar en la barra dónde sentarse con el perro.',
	},
	{
		q: '¿Hay que reservar mesa?',
		a: 'No hay reservas en línea ni web propia: el teléfono +376 855 464 es el canal directo. Es un snack bar de servicio continuo, pensado para entrar sin reserva, pero en plena temporada de esquí puede haber cola a la hora punta del mediodía.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La carta indica que se acepta tarjeta de crédito a partir de 15 € de mínimo. Para importes menores, lo mejor es llevar efectivo. Tampoco admiten ticket restaurante ni cheque.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. En las fotos del perfil se ve una terraza cerrada con valla de madera delante del local: con nieve en invierno y abierta en verano. Forma parte del espacio del bar, no de la vía pública.',
	},
];
