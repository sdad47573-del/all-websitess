/**
 * Dados do 8848 Restaurante e Snack Bar — Estrada de Benfica, 554B
 * (1500-107 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: 8848 Restaurante e Snack Bar,
 *   38.7508626,-9.1988931, feature 0xd1ecda1b5a759cb:0x3f775d016dcf1f70
 *   (morada, categoria, horário, nota, críticas e telefone).
 * - Críticas publicadas na mesma ficha.
 * - Ementa da casa exposta na rua, fotografada no perfil do Google Maps: pasta,
 *   risotto, bitoque e gyoza, com os preços em euros e IVA incluído.
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a casa não tem site próprio (a ficha aponta para um
 * Google Sites em edição) e não publica mais nada além da ementa da rua. Os
 * preços são os dessa ementa; os pratos que aparecem nas fotografias sem preço
 * na ementa ficam sem valor. A ficha não publica atributos de acessibilidade,
 * por isso nada é afirmado sobre o acesso ao espaço.
 */

export const BUSINESS = {
	name: '8848',
	legalName: '8848 Restaurante e Snack Bar',
	shortName: '8848',
	mark: '8848',
	street: 'Estrada de Benfica, 554B',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1500-107',
	country: 'PT',
	phone: '920 183 182',
	phoneHref: 'tel:+351920183182',
	rating: 4.8,
	reviewsCount: 24,
	siteUrl: 'https://restaurante-8848.vercel.app',
	geo: { lat: 38.7508626, lng: -9.1988931 },
	featureId: '0xd1ecda1b5a759cb:0x3f775d016dcf1f70',
	placeId: 'ChIJy1mntaHNHg0RcB_PbQFddz8',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante italiano',
	/** O que a casa anuncia na fachada. */
	ownSign: 'Restaurante e Snack Bar, com pasta, risotto, bitoque, gyoza e pratos nepaleses',
	tagline: 'Pasta, risotto e snacks em Benfica, Lisboa',
	description:
		'8848 Restaurante e Snack Bar, na Estrada de Benfica, 554B, em Lisboa. Pasta, risotto, bitoque, gyoza e panipuri, todos os dias das 11:00 às 23:30.',
	hasPublicPhone: true,
	/** A ficha aponta para um Google Sites em edição, não para um site público. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/8848+Restaurante+e+Snack+Bar/@38.7508626,-9.1988931,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ecda1b5a759cb:0x3f775d016dcf1f70!8m2!3d38.7508626!4d-9.1988931!16s%2Fg%2F11t608hy5t',
	cid: 'https://www.google.com/maps?cid=4573226207336669040',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7508626%2C-9.1988931',
	embed: 'https://maps.google.com/maps?q=38.7508626,-9.1988931&z=17&hl=pt-PT&output=embed',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '11:00–23:30' },
	{ day: 'Terça-feira', value: '11:00–23:30' },
	{ day: 'Quarta-feira', value: '11:00–23:30' },
	{ day: 'Quinta-feira', value: '11:00–23:30' },
	{ day: 'Sexta-feira', value: '11:00–23:30' },
	{ day: 'Sábado', value: '11:00–23:30' },
	{ day: 'Domingo', value: '11:00–23:30' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Ótimo restaurante, comida Nepalesa muito boa, o dono é muito simpático.',
	},
	{
		rating: 5,
		text: 'Muito bom excelente comida risotto e massas maravilhosas.',
	},
	{
		rating: 5,
		text: 'Love you, ótima comida e bom preço ☺️☺️👏👏👏 ótimo atendimento',
	},
];

/** O que a casa anuncia na fachada e nas ementas da rua. */
export const SERVICOS = [
	'Pasta',
	'Risotto',
	'Bitoque',
	'Gyoza',
	'Cozinha nepalesa',
	'Mesas na rua',
];

/**
 * Ementa da casa, com os preços que publica nos quadros da rua (em euros, IVA
 * incluído). Os petiscos que só aparecem nas fotografias da fachada ficam sem
 * preço, em vez de levar um valor inventado.
 */
export const MENU = [
	{
		title: 'Para começar',
		items: [
			{
				name: 'Mozzarella fresca com tomate e manjericão',
				note: 'salada de mozzarella e tomate, à moda da casa',
			},
			{
				name: 'Panipuri',
				note: 'bolinhas crocantes recheadas de batata, servidas com água de tamarindo e especiarias',
			},
			{
				name: 'Folhado de queijo da serra',
				note: 'massa folhada com queijo, para partilhar',
			},
		],
	},
	{
		title: 'Pasta',
		items: [
			{
				name: 'Gnocchi',
				price: '5,50 €',
				note: 'gnocchi com molho de tomate',
			},
			{
				name: 'Penne',
				price: '6,50 €',
				note: 'massa curta com molho de tomate',
			},
			{
				name: 'Tortellini',
				price: '6,50 €',
				note: 'massa recheada com molho de tomate',
			},
			{
				name: 'Spaghetti',
				price: '6,50 €',
				note: 'esparguete com molho de tomate',
			},
			{
				name: 'Tagliatelle',
				price: '6,50 €',
				note: 'fitas de massa fresca com molho de tomate',
			},
		],
	},
	{
		title: 'Risotto',
		items: [
			{
				name: 'Pomodora',
				price: '5,50 €',
				note: 'arroz cremoso com tomate',
			},
			{
				name: 'Porcini',
				price: '6,50 €',
				note: 'arroz cremoso com cogumelos porcini',
			},
			{
				name: 'Espinafres',
				price: '6,50 €',
				note: 'arroz cremoso com espinafres',
			},
			{
				name: 'Gorgonzola',
				price: '6,50 €',
				note: 'arroz cremoso com queijo gorgonzola',
			},
			{
				name: 'Legumes',
				price: '5,50 €',
				note: 'arroz cremoso com legumes da estação',
			},
		],
	},
	{
		title: 'Bitoque',
		items: [
			{
				name: 'Bitoque de vaca',
				price: '5,00 €',
				note: 'com batata frita, arroz, salada e ovo a cavalo',
			},
			{
				name: 'Bitoque de porco',
				price: '5,00 €',
				note: 'com batata frita, arroz, salada e ovo a cavalo',
			},
			{
				name: 'Bitoque de frango',
				price: '5,00 €',
				note: 'com batata frita, arroz, salada e ovo a cavalo',
			},
		],
	},
	{
		title: 'Gyoza',
		items: [
			{
				name: 'Gyoza de porco',
				price: '4,00 €',
				note: 'dez unidades de raviolis nepaleses ao vapor',
			},
			{
				name: 'Gyoza de frango',
				price: '4,00 €',
				note: 'dez unidades de raviolis nepaleses ao vapor',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o 8848 Restaurante e Snack Bar?',
		a: 'Na Estrada de Benfica, 554B, em Lisboa (1500-107), em Benfica. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre todos os dias, das 11:00 às 23:30, sem dia de fecho. É o horário que a casa publica na ficha de Google; convém confirmá-lo antes de ir, sobretudo em feriados.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'É um restaurante e snack bar com pasta e risotto italianos, bitoque português e gyoza nepaleses, além de panipuri e outros petiscos. A Google classifica a casa como restaurante italiano e as críticas falam da comida nepalesa e do risotto e das massas.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'Os preços da ementa da rua são baixos: pasta e risotto entre 5,50 e 6,50 euros, bitoque a 5 euros e dez gyoza a 4 euros. Os valores são os da ementa exposta pela casa, em euros e com IVA incluído.',
	},
	{
		q: 'A carta está completa nesta página?',
		a: 'Estão os pratos das ementas que a casa expõe na rua: pasta, risotto, bitoque e gyoza, com os respetivos preços, mais os petiscos que aparecem nas fotografias da fachada (mozzarella, panipuri e folhado de queijo). A casa não publica outra carta em linha.',
	},
	{
		q: 'Como se reserva?',
		a: 'A casa não tem página de reservas online. O contacto publicado na ficha de Google é o telefone 920 183 182.',
	},
	{
		q: 'Pode comer-se na rua?',
		a: 'Sim. As fotografias da fachada mostram mesas e cadeiras cor de laranja na calçada, à porta do restaurante, em frente à ementa exposta.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google não publica nenhum dado de acessibilidade sobre esta casa, nem sobre a entrada, nem sobre a sala. Por isso não afirmamos nada: convém ligar e perguntar antes de ir.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,8 sobre 5 com 24 críticas no Google. É um número pequeno de avaliações, mas as três críticas destacadas elogiam a comida nepalesa, o risotto, as massas, o atendimento e o preço.',
	},
];
