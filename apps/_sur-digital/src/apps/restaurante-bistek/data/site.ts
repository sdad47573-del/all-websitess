/**
 * Dados de Restaurante Bistek — Av. do Mediterrâneo
 * (1990-155 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Restaurante Bistek, 38.7631125,-9.0969726,
 *   feature 0xd1931814a298081:0xd9e07d87c73e5265 (morada, categorias, horário,
 *   telefone, nota, críticas e acessibilidade).
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica número de porta, site próprio,
 * carta, preços nem descrição do espaço, e as críticas não chegam na consulta
 * pública. A secção da cozinha apoia-se apenas nas nove categorias com que a
 * Google classifica a casa e no horário publicado.
 */

export const BUSINESS = {
	name: 'Restaurante Bistek',
	shortName: 'Bistek',
	mark: 'RB',
	/** A ficha publica a avenida mas não o número de porta. */
	street: 'Av. do Mediterrâneo',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1990-155',
	country: 'PT',
	phoneDisplay: '+351 21 894 3216',
	phoneHref: 'tel:+351218943216',
	rating: 3.8,
	reviewsCount: 339,
	siteUrl: 'https://www.sur-digital.com/restaurante-bistek',
	geo: { lat: 38.7631125, lng: -9.0969726 },
	featureId: '0xd1931814a298081:0xd9e07d87c73e5265',
	placeId: 'ChIJgYApSoExGQ0RZVI-x4d94Nk',
	/** Categorias com que a Google classifica o espaço. */
	categories: [
		'Restaurante',
		'Padaria',
		'Churrasqueira',
		'Loja de cerveja',
		'Pastelaria',
		'Queijaria',
		'Cafetaria',
		'Hamburgueria',
		'Marisqueira',
	],
	tagline: 'Restaurante, padaria e loja em Lisboa',
	description:
		'Restaurante Bistek, na Av. do Mediterrâneo (1990-155 Lisboa): restaurante, padaria, pastelaria, churrasqueira, hamburgueria, marisqueira, queijaria e loja de cerveja. Aberto de segunda a sábado. Tel. +351 21 894 3216.',
	hasPublicWebsite: false,
	hasPublicStreetNumber: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Bistek/@38.7631125,-9.0969726,17z/data=!3m1!4b1!4m6!3m5!1s0xd1931814a298081:0xd9e07d87c73e5265!8m2!3d38.7631125!4d-9.0969726!16s%2Fg%2F11b_3fknjs',
	cid: 'https://www.google.com/maps?cid=15699686323130356325',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7631125%2C-9.0969726',
	embed: 'https://maps.google.com/maps?q=38.7631125,-9.0969726&z=17&hl=pt-PT&output=embed',
};

/**
 * Horário publicado na ficha de Google: de segunda a sexta das 7:30 às 19:30,
 * sábado das 8:00 às 17:00 e domingo fechado.
 */
export const HOURS = [
	{ day: 'Segunda-feira', value: '7:30–19:30' },
	{ day: 'Terça-feira', value: '7:30–19:30' },
	{ day: 'Quarta-feira', value: '7:30–19:30' },
	{ day: 'Quinta-feira', value: '7:30–19:30' },
	{ day: 'Sexta-feira', value: '7:30–19:30' },
	{ day: 'Sábado', value: '8:00–17:00' },
	{ day: 'Domingo', value: 'Fechado', closed: true },
];

/**
 * As nove categorias com que a Google classifica a casa. É o retrato mais fiel
 * do que ali se vende: cozinha, padaria e pastelaria, churrasqueira, marisqueira,
 * hamburgueria, queijaria e loja de cerveja.
 */
export const SERVICOS = [
	'Restaurante',
	'Padaria e pastelaria',
	'Churrasqueira',
	'Marisqueira',
	'Hamburgueria',
	'Queijaria',
	'Loja de cerveja',
	'Cafetaria',
];

/**
 * A ficha não publica carta nem preços. Cada grupo abaixo corresponde a uma das
 * categorias com que a Google classifica o espaço, com a nota a dizê-lo: não há
 * aqui pratos, doses nem valores inventados.
 */
export const MENU = [
	{
		title: 'Cozinha',
		items: [
			{
				name: 'Restaurante',
				note: 'é a primeira das nove categorias com que a Google classifica a casa',
			},
			{
				name: 'Churrasqueira',
				note: 'a ficha marca também «restaurante especializado em barbacoa»',
			},
			{
				name: 'Marisqueira',
				note: 'categoria da ficha; não há carta publicada que a detalhe',
			},
			{
				name: 'Hamburgueria',
				note: 'categoria da ficha; confirma na loja o que há nesse dia',
			},
		],
	},
	{
		title: 'Padaria e pastelaria',
		items: [
			{
				name: 'Padaria',
				note: 'a ficha classifica o espaço como padaria',
			},
			{
				name: 'Pastelaria',
				note: 'também consta como pastelaria na ficha de Google',
			},
			{
				name: 'Cafetaria',
				note: 'abre às 7:30 de segunda a sexta: dá para o pequeno-almoço',
			},
		],
	},
	{
		title: 'Loja',
		items: [
			{
				name: 'Queijaria',
				note: 'categoria da ficha, a par de restaurante',
			},
			{
				name: 'Loja de cerveja',
				note: 'é a quinta categoria com que a Google descreve o espaço',
			},
			{
				name: 'Carta e preços',
				note: 'a ficha não publica carta nem importos; o telefone é o canal para perguntar',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Restaurante Bistek?',
		a: 'Na Av. do Mediterrâneo, em Lisboa (1990-155), no distrito de Lisboa. A ficha de Google não publica o número de porta, por isso o mapa desta página leva às coordenadas exatas do estabelecimento e «Como chegar» abre as indicações.',
	},
	{
		q: 'Qual é o horário?',
		a: 'De segunda a sexta das 7:30 às 19:30 e sábado das 8:00 às 17:00. Ao domingo está fechado. É o horário que publica a ficha de Google; convém confirmá-lo antes de ir, sobretudo em feriados.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: 'Pelo telefone +351 21 894 3216, que é o contacto publicado na ficha de Google. O espaço não tem site próprio nem reserva online.',
	},
	{
		q: 'O que se pode comprar ou comer?',
		a: 'A ficha classifica-o em nove categorias ao mesmo tempo: restaurante, padaria, churrasqueira, loja de cerveja, pastelaria, queijaria, cafetaria, hamburgueria e marisqueira. A ficha não publica carta, pratos nem preços, por isso esta página não adianta nenhum.',
	},
	{
		q: 'Tem esplanada ou take-away?',
		a: 'A ficha consultada não lista serviços desse tipo: só indica que tem lugares acessíveis a cadeiras de rodas. Não há informação publicada sobre esplanada nem sobre serviço de take-away.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 3,8 sobre 5 com 339 críticas no Google, com base na ficha consultada.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google indica que tem lugares acessíveis a cadeiras de rodas. Não indica estacionamento adaptado.',
	},
];
