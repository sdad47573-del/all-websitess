// Carta de Sazón Teatinos.
// Generada a partir del menú digital del establecimiento (NordQR), el que enlaza su ficha de Google.
// Precios, tramos y descripciones son los que publica el local: confírmalos en el establecimiento.

export interface CartaItem {
	name: string;
	description?: string;
	price?: string;
	priceOptions?: { label: string; price: string }[];
	tags?: string[];
}

export interface CartaSection {
	id: string;
	name: string;
	icon: string;
	note?: string;
	items: CartaItem[];
}

/** Tramos de precio del menú digital: tapa, media y ración. */
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
				price: '2,90 €',
			},
			{
				name: 'Gilda de anchoa y queso',
				description: 'Aceituna, anchoa, piparra y queso',
				price: '2,20 €',
			},
			{
				name: 'Gilda doble boquerón',
				description: 'Doble boquerón y tres aceitunas',
				price: '2,20 €',
			},
			{
				name: 'Gilda de boquerón picante',
				description: 'Doble aceituna, piparra, boquerón y guindilla.',
				price: '2,20 €',
			},
			{
				name: 'Gilda de anchoa picante',
				description: 'Doble aceituna, anchoa, piparra y guindilla.',
				price: '2,20 €',
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
				price: '4,00 €',
			},
			{
				name: 'Pastela de pollo',
				description: 'Pastela de elaboración casera, con pollo y almendras',
				price: '4,50 €',
			},
			{
				name: 'Rollito de primavera',
				description:
					'Rollito de primavera casero, relleno de verduras y carne picada, acompañado de salsa agridulce',
				price: '2,50 €',
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
				priceOptions: [
					{ label: 'Tapa', price: '3,00 €' },
					{ label: 'Media', price: '5,80 €' },
					{ label: 'Ración', price: '7,50 €' },
				],
			},
			{
				name: 'Patatas bravas con salsa kimchi',
				price: '6,50 €',
			},
			{
				name: 'Torreznos de Soria',
				price: '7,50 €',
			},
			{
				name: 'Pincho de tortilla de patatas con cebolla',
				price: '3,00 €',
			},
			{
				name: 'Ensaladilla rusa con AOVE y ventresca',
				priceOptions: [
					{ label: 'Tapa', price: '3,00 €' },
					{ label: 'Media', price: '5,50 €' },
					{ label: 'Ración', price: '10,50 €' },
				],
			},
			{
				name: 'Flor de alcachofa con virutas de jamón ibérico y AOVE',
				price: '4,50 €',
			},
			{
				name: 'Brocheta de langostinos',
				price: '2,70 €',
			},
			{
				name: 'Boquerones en vinagre',
				priceOptions: [
					{ label: 'Tapa', price: '1,80 €' },
					{ label: 'Media', price: '3,50 €' },
					{ label: 'Ración', price: '6,50 €' },
				],
			},
			{
				name: 'Tortillita de camarón casera',
				price: '2,90 €',
			},
			{
				name: 'Gambas gabardina',
				priceOptions: [
					{ label: 'Tapa', price: '1,80 €' },
					{ label: 'Media', price: '3,50 €' },
					{ label: 'Ración', price: '6,50 €' },
				],
			},
			{
				name: 'Buñuelos de gamba blanca',
				priceOptions: [
					{ label: 'Tapa', price: '2,00 €' },
					{ label: 'Media', price: '3,80 €' },
					{ label: 'Ración', price: '5,80 €' },
				],
			},
			{
				name: 'Croquetas de rabo de toro',
				priceOptions: [
					{ label: 'Tapa', price: '3,00 €' },
					{ label: 'Media', price: '5,50 €' },
					{ label: 'Ración', price: '10,50 €' },
				],
			},
			{
				name: 'Croquetas de jamón ibérico',
				priceOptions: [
					{ label: 'Tapa', price: '3,00 €' },
					{ label: 'Media', price: '5,50 €' },
					{ label: 'Ración', price: '10,50 €' },
				],
			},
			{
				name: 'Croquetas de gambas al pil pil',
				priceOptions: [
					{ label: 'Tapa', price: '3,00 €' },
					{ label: 'Media', price: '5,50 €' },
					{ label: 'Ración', price: '10,50 €' },
				],
			},
			{
				name: 'Albóndigas en salsa de almendras',
				priceOptions: [
					{ label: 'Tapa', price: '2,80 €' },
					{ label: 'Media', price: '5,00 €' },
					{ label: 'Ración', price: '10,00 €' },
				],
			},
			{
				name: 'Choricítos a la sidra',
				priceOptions: [
					{ label: 'Tapa', price: '2,50 €' },
					{ label: 'Media', price: '4,50 €' },
					{ label: 'Ración', price: '8,50 €' },
				],
			},
			{
				name: 'Queso Payoyo',
				priceOptions: [
					{ label: 'Tapa', price: '2,50 €' },
					{ label: 'Media', price: '4,50 €' },
					{ label: 'Ración', price: '8,50 €' },
				],
			},
			{
				name: 'Chicharrones de Cádiz (con sal y limón)',
				priceOptions: [
					{ label: 'Tapa', price: '2,00 €' },
					{ label: 'Media', price: '4,50 €' },
					{ label: 'Ración', price: '8,50 €' },
				],
			},
			{
				name: 'Mini lomito ibérico',
				price: '2,00 €',
			},
			{
				name: 'Mini cresta',
				price: '2,00 €',
			},
			{
				name: 'Mini brioche de rabo de toro con salsa bull',
				price: '4,00 €',
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
				price: '8,00 €',
			},
			{
				name: 'Ensalada templada de queso de cabra',
				price: '8,50 €',
			},
			{
				name: 'Ensalada césar con pollo crujiente',
				price: '8,50 €',
			},
			{
				name: 'Tomate trinchado con ventresca',
				price: '8,50 €',
			},
			{
				name: 'Tomate con anchoas del cantábrico',
				price: '8,00 €',
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
				price: '6,50 €',
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
				price: '8,50 €',
			},
			{
				name: 'Cachopo asturiano con patatas y pimientos (Aprox 220gr)',
				price: '14,50 €',
			},
			{
				name: 'Cachopo asturiano con patatas y pimientos (Aprox 500gr)',
				price: '23,50 €',
			},
			{
				name: 'Costillar a la BBQ con patatas fritas (Aprox 550gr)',
				price: '18,50 €',
			},
			{
				name: 'Rabo de toro con patatas fritas',
				price: '17,50 €',
			},
			{
				name: 'Carrillada ibérica al PX con patatas',
				price: '16,00 €',
			},
			{
				name: 'Pata de pulpo a la parrilla con patatas baby',
				priceOptions: [
					{ label: '200 gr', price: '16,00 €' },
					{ label: '400 gr', price: '26,00 €' },
				],
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
				price: '17,50 €',
			},
			{
				name: 'Secreto ibérico (Aprox 300gr)',
				price: '15,50 €',
			},
			{
				name: 'Presa ibérica (Aprox 300gr)',
				price: '18,00 €',
			},
			{
				name: 'Churrasco de pollo',
				price: '8,50 €',
			},
			{
				name: 'Entraña a la parrilla con chimichurri',
				price: '14,50 €',
			},
			{
				name: 'Entrecot de vaca madurada (350gr)',
				price: '22,00 €',
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
				price: '5,00 €',
			},
			{
				name: 'Secreto ibérico (Aprox 80gr)',
				price: '5,50 €',
			},
			{
				name: 'Presa ibérica (Aprox 80gr)',
				price: '5,50 €',
			},
			{
				name: 'Pinchito de cordero',
				price: '4,50 €',
			},
			{
				name: 'Chorizo de Ardales a la parrilla con chimichurri casero',
				price: '3,00 €',
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
				price: '4,00 €',
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
				priceOptions: [
					{ label: 'Media', price: '8,00 €' },
					{ label: 'Entera', price: '14,00 €' },
				],
			},
			{
				name: 'Huevos rotos con rabo de toro',
				priceOptions: [
					{ label: 'Media', price: '9,50 €' },
					{ label: 'Entera', price: '17,50 €' },
				],
			},
			{
				name: 'Huevos rotos con chorizo',
				priceOptions: [
					{ label: 'Media', price: '7,00 €' },
					{ label: 'Entera', price: '12,00 €' },
				],
			},
			{
				name: 'Huevos rotos con chicharrones',
				priceOptions: [
					{ label: 'Media', price: '7,00 €' },
					{ label: 'Entera', price: '12,00 €' },
				],
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
				price: '13,50 €',
			},
			{
				name: 'Pollo serranito 350 gr',
				price: '14,50 €',
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
				price: '5,80 €',
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
				price: '13,50 €',
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
				price: '4,00 €',
			},
			{
				name: 'Mini burguer cabra',
				description: 'Con patatas (pan brioche, queso cabra y cebolla caramelizada)',
				price: '4,50 €',
			},
			{
				name: 'Carne extra mini',
				price: '1,50 €',
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
				price: '5,50 €',
			},
			{
				name: 'Brownie con nueces y helado de vainilla',
				price: '5,50 €',
			},
			{
				name: 'Torrija brioche caramelizada',
				price: '5,50 €',
			},
			{
				name: 'Croquetas de arroz con leche (4ud)',
				price: '6,00 €',
			},
		],
	},
];
