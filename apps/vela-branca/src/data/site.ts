/**
 * Dados do Near Me Vela Branca — R. dos Correeiros, 112
 * (1100-571 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Near Me Vela Branca, 38.7113183,-9.1374131,
 *   feature 0xd193478f9016511:0x91532c03e916323b (morada, categorias, horário,
 *   nota, críticas, telefone, acessibilidade e descrição do próprio espaço).
 * - Críticas publicadas na mesma ficha.
 * - Página da casa no TheFork: preço médio, pratos e preços publicados.
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha de Google não publica carta nem preços e a
 * casa não tem site próprio. Os pratos vêm da descrição do próprio espaço, das
 * críticas e dos excertos públicos da carta no TheFork; os preços só aparecem
 * quando estão publicados. Nada de valores ou serviços inventados.
 */

export const BUSINESS = {
	name: 'Vela Branca',
	legalName: 'Near Me Vela Branca',
	shortName: 'Vela Branca',
	mark: 'VB',
	street: 'R. dos Correeiros, 112',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-571',
	country: 'PT',
	phone: '920 038 770',
	phoneHref: 'tel:+351920038770',
	rating: 4.6,
	reviewsCount: 2436,
	siteUrl: 'https://vela-branca.vercel.app',
	geo: { lat: 38.7113183, lng: -9.1374131 },
	featureId: '0xd193478f9016511:0x91532c03e916323b',
	placeId: 'ChIJEWUB-Xg0GQ0ROzIW6QMsU5E',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante de cozinha tradicional portuguesa e marisqueira',
	/** Descrição que o próprio espaço publica na ficha, em resumo traduzido. */
	ownDescription:
		'Cozinha portuguesa com ingredientes frescos e locais, no centro de Lisboa, com a paella de marisco e as sardinhas grelhadas como pratos de destaque.',
	tagline: 'Cozinha portuguesa e peixe fresco na Baixa, em Lisboa',
	description:
		'Vela Branca, restaurante de cozinha portuguesa e marisqueira na Rua dos Correeiros, 112, na Baixa de Lisboa. Peixe fresco, paella de marisco e brunch, todos os dias das 12:00 às 23:00.',
	hasPublicPhone: true,
	/** A ficha não indica site próprio. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Vela+Branca/@38.7113183,-9.1374131,17z/data=!3m1!4b1!4m6!3m5!1s0xd193478f9016511:0x91532c03e916323b!8m2!3d38.7113183!4d-9.1374131!16s%2Fg%2F11b8z016rd',
	cid: 'https://www.google.com/maps?cid=10471761953873605179',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7113183%2C-9.1374131',
	embed: 'https://maps.google.com/maps?q=38.7113183,-9.1374131&z=17&hl=pt-PT&output=embed',
	/** Página da casa no TheFork, onde publica a carta com preços e as reservas. */
	thefork: 'https://www.thefork.pt/restaurante/near-me-vela-branca-r835532',
	menu: 'https://www.thefork.pt/restaurante/near-me-vela-branca-r835532/menu',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '12:00–23:00' },
	{ day: 'Terça-feira', value: '12:00–23:00' },
	{ day: 'Quarta-feira', value: '12:00–23:00' },
	{ day: 'Quinta-feira', value: '12:00–23:00' },
	{ day: 'Sexta-feira', value: '12:00–23:00' },
	{ day: 'Sábado', value: '12:00–23:00' },
	{ day: 'Domingo', value: '12:00–23:00' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 4,
		text: 'Boa comida, preços bons, condizentes com a região.',
	},
	{
		rating: 4,
		text: 'Quase todos os funcionários atendem bem, os pratos com bacalhau são ótimos.',
	},
	{
		rating: 5,
		text: 'Lugar aconchegante, diferente dos restaurantes «pega turista» da Rua Augusta.',
	},
];

/** O que a ficha assinala e o que a casa anuncia. */
export const SERVICOS = [
	'Cozinha portuguesa',
	'Marisqueira',
	'Peixe fresco',
	'Paella de marisco',
	'Brunch',
	'Almoço e jantar',
];

/**
 * Pratos que a casa descreve na ficha, que aparecem nas fotografias do perfil e
 * que se repetem nas críticas. Os preços só aparecem quando estão publicados na
 * carta da casa no TheFork.
 */
export const MENU = [
	{
		title: 'Para começar',
		items: [
			{
				name: 'Gambas ao alho',
				note: 'salteadas em azeite e alho, servidas na frigideira',
			},
			{
				name: 'Mexilhões à marinera',
				note: 'abertos em vinho branco, com limão e ervas',
			},
		],
	},
	{
		title: 'Do mar',
		items: [
			{
				name: 'Paella de marisco',
				note: 'arroz com camarão e mexilhão, em travessa — um dos pratos que a casa destaca',
			},
			{
				name: 'Sardinhas grelhadas',
				note: 'na grelha, com batata assada e salada',
			},
			{
				name: 'Arroz de polvo',
				note: 'um dos pratos que as críticas citam',
			},
			{
				name: 'Polvo à lagareiro',
				note: 'grelhado, com batata e azeite',
			},
			{
				name: 'Bacalhau',
				note: 'os pratos com bacalhau são os que as críticas destacam',
			},
			{
				name: 'Mariscada',
				note: 'amêijoas e mexilhões com peixe na grelha, para partilhar',
			},
		],
	},
	{
		title: 'Para acompanhar',
		items: [
			{
				name: 'Batatas fritas',
				price: '3,90 €',
				note: 'a acompanhar o peixe ou para a mesa toda',
			},
			{
				name: 'Salada mista',
				price: '4,90 €',
				note: 'alface e tomate, com azeite e vinagre',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Vela Branca?',
		a: 'Na Rua dos Correeiros, 112, em Lisboa (1100-571), na Baixa, a poucos passos da Rua Augusta. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre todos os dias ao meio-dia e fecha às 23:00, sem dia de fecho. É o horário que publica a ficha de Google; convém confirmá-lo antes de ir.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'Cozinha portuguesa com vocação de marisqueira: peixe na grelha, sardinhas, bacalhau, polvo, arroz de marisco e paella. A Google classifica a casa como restaurante de cozinha tradicional portuguesa e marisqueira.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'O preço médio indicado na página da casa no TheFork é de 24 euros por pessoa. Esta página só mostra os valores que a casa tem publicados — as batatas fritas (3,90 €) e a salada mista (4,90 €) — e não inventa preços para o resto da carta.',
	},
	{
		q: 'É preciso reservar?',
		a: 'A casa atende reservas pelo 920 038 770 e tem página de reservas no TheFork. Na Baixa, ao lado da Rua Augusta, a sala enche ao almoço e ao jantar.',
	},
	{
		q: 'Tem mesas na rua?',
		a: 'Sim. As fotografias da casa mostram mesas na Rua dos Correeiros, à porta do restaurante, e também uma sala interior com arcos de pedra.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google indica que a casa não tem estacionamento acessível a pessoas em cadeiras de rodas. Não publica informação sobre entrada, lugares na sala ou WC adaptados.',
	},
	{
		q: 'Serve brunch?',
		a: 'A Google assinala a casa com a categoria de restaurante de brunch, e o horário começa ao meio-dia. Ao meio-dia já se serve a carta de almoço.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,6 sobre 5 com 2.436 críticas no Google. As críticas destacadas falam de comida boa, preços adequados à zona e de um lugar aconchegante.',
	},
];
