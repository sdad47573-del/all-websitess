// Carta de Sazón Teatinos.
// Generada a partir del menú digital del establecimiento (NordQR), el que enlaza su ficha de Google.
// Platos y descripciones son los que publica el local: confírmalos en el establecimiento.

export interface CartaItem {
	name: string;
	description?: string;
	tags?: string[];
}

export interface CartaSection {
	id: string;
	name: string;
	icon: string;
	note?: string;
	items: CartaItem[];
}

/** Tamaños del menú digital: tapa, media y ración. */
export const PRICE_TIERS = ['Tapa', 'Media', 'Ración'];

export const CARTA: CartaSection[] = [
	{
		id: 'gildas',
		name: 'Gildas',
		icon: 'ri-restaurant-line',
		note: 'Nuestro clásico para abrir boca: encurtido, anchoa o boquerón y un buen aceite.',
		items: [
			{
				name: 'Gilda de alcachofa',
				description:
					'Alcachofa braseada, pimiento caramelizado y aceitunas envueltas en anchoa y boquerón',
			},
			{
				name: 'Gilda de anchoa y queso',
				description: 'Aceituna, anchoa, piparra y queso',
			},
			{
				name: 'Gilda doble boquerón',
				description: 'Doble boquerón y tres aceitunas',
			},
			{
				name: 'Gilda de boquerón picante',
				description: 'Doble aceituna, piparra, boquerón y guindilla.',
			},
			{
				name: 'Gilda de anchoa picante',
				description: 'Doble aceituna, anchoa, piparra y guindilla.',
			},
		],
	},
	{
		id: 'fuera-de-carta',
		name: 'Fuera de carta',
		icon: 'ri-magic-line',
		note: 'Sugerencias que van y vienen según temporada. Pregunta por lo que hay hoy.',
		items: [
			{
				name: 'Pan bao de langostino rebozado',
				description: 'Pan bao, langostino rebozado, salsa kimchi y wakame. Delicioso ¡¡',
			},
			{
				name: 'Pastela de pollo',
				description: 'Pastela de elaboración casera, con pollo y almendras',
			},
			{
				name: 'Rollito de primavera',
				description:
					'Rollito de primavera casero, relleno de verduras y carne picada, acompañado de salsa agridulce',
			},
		],
	},
	{
		id: 'tapas-y-raciones',
		name: 'Tapas y raciones',
		icon: 'ri-restaurant-2-line',
		items: [
			{
				name: 'Alitas de pollo con salsa BBQ coreana',
			},
			{
				name: 'Patatas bravas con salsa kimchi',
			},
			{
				name: 'Torreznos de Soria',
			},
			{
				name: 'Pincho de tortilla de patatas con cebolla',
			},
			{
				name: 'Ensaladilla rusa con AOVE y ventresca',
			},
			{
				name: 'Flor de alcachofa con virutas de jamón ibérico y AOVE',
			},
			{
				name: 'Brocheta de langostinos',
			},
			{
				name: 'Boquerones en vinagre',
			},
			{
				name: 'Tortillita de camarón casera',
			},
			{
				name: 'Gambas gabardina',
			},
			{
				name: 'Buñuelos de gamba blanca',
			},
			{
				name: 'Croquetas de rabo de toro',
			},
			{
				name: 'Croquetas de jamón ibérico',
			},
			{
				name: 'Croquetas de gambas al pil pil',
			},
			{
				name: 'Albóndigas en salsa de almendras',
			},
			{
				name: 'Choricítos a la sidra',
			},
			{
				name: 'Queso Payoyo',
			},
			{
				name: 'Chicharrones de Cádiz (con sal y limón)',
			},
			{
				name: 'Mini lomito ibérico',
			},
			{
				name: 'Mini cresta',
			},
			{
				name: 'Mini brioche de rabo de toro con salsa bull',
			},
		],
	},
	{
		id: 'ensaladas',
		name: 'Ensaladas',
		icon: 'ri-leaf-line',
		items: [
			{
				name: 'Aguacate a la parrilla',
			},
			{
				name: 'Ensalada templada de queso de cabra',
			},
			{
				name: 'Ensalada césar con pollo crujiente',
			},
			{
				name: 'Tomate trinchado con ventresca',
			},
			{
				name: 'Tomate con anchoas del cantábrico',
			},
		],
	},
	{
		id: 'tosta-de-solomillo',
		name: 'Tosta de solomillo',
		icon: 'ri-bread-line',
		items: [
			{
				name: 'Tosta de solomillo',
				description: 'Con queso brie, cebolla caramelizada y mermelada de pimientos',
			},
		],
	},
	{
		id: 'especialidades-de-la-casa',
		name: 'Especialidades de la casa',
		icon: 'ri-star-line',
		items: [
			{
				name: 'Lagrimitas de pollo con patatas fritas',
			},
			{
				name: 'Cachopo asturiano con patatas y pimientos (Aprox 220gr)',
			},
			{
				name: 'Cachopo asturiano con patatas y pimientos (Aprox 500gr)',
			},
			{
				name: 'Costillar a la BBQ con patatas fritas (Aprox 550gr)',
			},
			{
				name: 'Rabo de toro con patatas fritas',
			},
			{
				name: 'Carrillada ibérica al PX con patatas',
			},
			{
				name: 'Pata de pulpo a la parrilla con patatas baby',
			},
		],
	},
	{
		id: 'carnes-a-la-parrilla',
		name: 'Carnes a la parrilla',
		icon: 'ri-fire-line',
		note: 'Todas nuestras carnes vienen acompañadas de patatas fritas, boniatos fritos o ensalada.',
		items: [
			{
				name: 'Lagarto ibérico (Aprox 300gr)',
			},
			{
				name: 'Secreto ibérico (Aprox 300gr)',
			},
			{
				name: 'Presa ibérica (Aprox 300gr)',
			},
			{
				name: 'Churrasco de pollo',
			},
			{
				name: 'Entraña a la parrilla con chimichurri',
			},
			{
				name: 'Entrecot de vaca madurada (350gr)',
			},
		],
	},
	{
		id: 'mas-tapas',
		name: 'Más tapas',
		icon: 'ri-restaurant-line',
		items: [
			{
				name: 'Lagarto ibérico (Aprox 80gr)',
			},
			{
				name: 'Secreto ibérico (Aprox 80gr)',
			},
			{
				name: 'Presa ibérica (Aprox 80gr)',
			},
			{
				name: 'Pinchito de cordero',
			},
			{
				name: 'Chorizo de Ardales a la parrilla con chimichurri casero',
			},
		],
	},
	{
		id: 'pan-bao',
		name: 'Pan bao',
		icon: 'ri-bowl-line',
		items: [
			{
				name: 'Pan bao',
				description: 'De carrillada ibérica, cebolla morada encurtida y mayonesa de aguacate',
			},
		],
	},
	{
		id: 'echale-huevos',
		name: 'Échale huevos',
		icon: 'ri-restaurant-2-line',
		items: [
			{
				name: 'Huevos rotos con jamón ibérico',
			},
			{
				name: 'Huevos rotos con rabo de toro',
			},
			{
				name: 'Huevos rotos con chorizo',
			},
			{
				name: 'Huevos rotos con chicharrones',
			},
		],
	},
	{
		id: 'flamenquines',
		name: 'Flamenquines',
		icon: 'ri-restaurant-line',
		note: 'Acompañados de patatas y pimientos del padrón.',
		items: [
			{
				name: 'Presa ibérica y chedar 250gr',
			},
			{
				name: 'Pollo serranito 350 gr',
			},
		],
	},
	{
		id: 'lingote-brioche',
		name: 'Lingote brioche',
		icon: 'ri-bread-line',
		items: [
			{
				name: 'Lingote brioche',
				description:
					'De costilla asada a baja temperatura, bbq coreana, pepinillos y cebolla encurtida',
			},
		],
	},
	{
		id: 'hamburguesas',
		name: 'Hamburguesas',
		icon: 'ri-restaurant-line',
		items: [
			{
				name: 'Hamburguesa Sazón',
				description:
					'Pan brioche, 200gr de carne Black Angus, lechuga, cebolla, chedar y pepinillos) con patatas o boniatos',
			},
		],
	},
	{
		id: 'las-minis-50-g',
		name: 'Las minis (50 g)',
		icon: 'ri-restaurant-line',
		items: [
			{
				name: 'Mini burguer de buey',
				description: 'Con patatas (pan brioche, queso chedar, lechuga)',
			},
			{
				name: 'Mini burguer cabra',
				description: 'Con patatas (pan brioche, queso cabra y cebolla caramelizada)',
			},
			{
				name: 'Carne extra mini',
			},
		],
	},
	{
		id: 'postres',
		name: 'Postres',
		icon: 'ri-cake-3-line',
		items: [
			{
				name: 'Nuestra tarta de queso cremosa al horno',
			},
			{
				name: 'Brownie con nueces y helado de vainilla',
			},
			{
				name: 'Torrija brioche caramelizada',
			},
			{
				name: 'Croquetas de arroz con leche (4ud)',
			},
		],
	},
];
