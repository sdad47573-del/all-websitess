/**
 * Dados do BaniGala RESTAURANTE Lisbon — Rua do Benformoso, 230
 * (1100-084 Lisboa, Portugal), na Mouraria.
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: BaniGala RESTAURANTE Lisbon,
 *   38.7194493,-9.1349246, feature 0xd193387cb4fb8b3:0xa2ac2c072676766f
 *   (morada, categorias, horário, nota, críticas, telefone, acessibilidade e
 *   descrição do próprio espaço).
 * - Críticas publicadas na mesma ficha.
 * - Cartaz da casa, fotografado no perfil do Google Maps: «any dish in €5
 *   including 3 tandoori bread», com a lista de pratos e as bebidas.
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: os preços são os do cartaz da casa; os pratos e
 * doces que só aparecem nas fotografias ficam sem valor. A ficha assinala
 * lugares e WC acessíveis, mas não a entrada, e é isso que se diz.
 */

export const BUSINESS = {
	name: 'BaniGala',
	legalName: 'BaniGala RESTAURANTE Lisbon',
	shortName: 'BaniGala',
	mark: 'BG',
	street: 'Rua do Benformoso, 230',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-084',
	country: 'PT',
	phone: '939 201 733',
	phoneHref: 'tel:+351939201733',
	rating: 4.6,
	reviewsCount: 754,
	siteUrl: 'https://www.sur-digital.com/restaurante-banigala',
	geo: { lat: 38.7194493, lng: -9.1349246 },
	featureId: '0xd193387cb4fb8b3:0xa2ac2c072676766f',
	placeId: 'ChIJs7hPy4czGQ0Rb3Z2JgcsrKI',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante asiático e paquistanês',
	/** Descrição que o próprio espaço publica na ficha. */
	ownDescription: 'Restaurante halal.',
	tagline: 'Cozinha paquistanesa halal na Mouraria, em Lisboa',
	description:
		'BaniGala RESTAURANTE Lisbon, na Rua do Benformoso, 230, na Mouraria, Lisboa. Cozinha paquistanesa halal: biryani, caril, daal e tandoori por 5 €, todos os dias.',
	hasPublicPhone: true,
	/** A ficha não indica site próprio. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/BaniGala+RESTAURANTE+Lisbon/@38.7194493,-9.1349246,17z/data=!3m1!4b1!4m6!3m5!1s0xd193387cb4fb8b3:0xa2ac2c072676766f!8m2!3d38.7194493!4d-9.1349246!16s%2Fg%2F11kq58hv2c',
	cid: 'https://www.google.com/maps?cid=11721792339360249455',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7194493%2C-9.1349246',
	embed: 'https://maps.google.com/maps?q=38.7194493,-9.1349246&z=17&hl=pt-PT&output=embed',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '09:15–23:30' },
	{ day: 'Terça-feira', value: '09:15–23:30' },
	{ day: 'Quarta-feira', value: '09:15–23:30' },
	{ day: 'Quinta-feira', value: '09:15–23:30' },
	{ day: 'Sexta-feira', value: '09:15–23:30' },
	{ day: 'Sábado', value: '09:15–23:30' },
	{ day: 'Domingo', value: '09:15–23:30' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Comida muito boa, doses generosas e empregados muito simpáticos e disponíveis.',
	},
	{
		rating: 5,
		text: 'Restaurante típico com muito bom preço.',
	},
];

/** Categorias da ficha e o que a casa anuncia. */
export const SERVICOS = [
	'Cozinha paquistanesa',
	'Cozinha asiática',
	'Halal',
	'Biryani',
	'Tandoori',
	'Doces da casa',
];

/**
 * Cartaz da casa, com os preços que publica: qualquer prato por 5 €, com três
 * pães do tandoor incluídos. As bebidas e os doces vêm no mesmo cartaz.
 */
export const MENU = [
	{
		title: 'Cada prato, 5 €',
		items: [
			{
				name: 'Chicken biryani',
				price: '5,00 €',
				note: 'arroz com frango e especiarias, com três pães do tandoor incluídos',
			},
			{
				name: 'Chicken curry',
				price: '5,00 €',
				note: 'caril de frango, com três pães do tandoor incluídos',
			},
			{
				name: 'Mutton curry',
				price: '5,00 €',
				note: 'caril de borrego, com três pães do tandoor incluídos',
			},
			{
				name: 'Daal maash',
				price: '5,00 €',
				note: 'lentilhas brancas temperadas, com três pães do tandoor incluídos',
			},
			{
				name: 'Daal chana',
				price: '5,00 €',
				note: 'grão-de-bico em caril, com três pães do tandoor incluídos',
			},
			{
				name: 'Mix vegetables',
				price: '5,00 €',
				note: 'legumes salteados com especiarias, com três pães do tandoor incluídos',
			},
		],
	},
	{
		title: 'Do tandoor',
		items: [
			{
				name: 'Frango tandoori',
				note: 'frango marinado e assado no tandoor, como se vê nas fotografias da casa',
			},
			{
				name: 'Pão do tandoor',
				note: 'três pães incluídos em cada prato da carta',
			},
		],
	},
	{
		title: 'Bebidas',
		items: [
			{
				name: 'Chá com leite',
				price: '0,50 €',
				note: 'chá preto com leite, ao estilo do subcontinente',
			},
			{
				name: 'Café (expresso)',
				price: '0,50 €',
				note: 'expresso',
			},
			{
				name: 'Café',
				price: '1,00 €',
				note: 'café com leite',
			},
			{
				name: 'Lassi',
				price: '1,00 €',
				note: 'iogurte batido, servido fresco',
			},
			{
				name: 'Coca-Cola ou Zero',
				price: '1,00 €',
				note: 'lata',
			},
			{
				name: 'Pepsi',
				price: '1,00 €',
				note: 'lata',
			},
			{
				name: 'Água 0,5 L',
				price: '0,50 €',
				note: 'garrafa pequena',
			},
			{
				name: 'Água 1,5 L',
				price: '1,00 €',
				note: 'garrafa grande',
			},
		],
	},
	{
		title: 'Doces',
		items: [
			{
				name: 'Doces mistos',
				note: 'doces da casa à venda ao quilograma, na vitrine da entrada',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o BaniGala?',
		a: 'Na Rua do Benformoso, 230, em Lisboa (1100-084), na Mouraria, entre o Martim Moniz e o Intendente. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre todos os dias, das 09:15 às 23:30, sem dia de fecho. É o horário que a casa publica na ficha de Google; convém confirmá-lo antes de ir, sobretudo em feriados.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'Cozinha paquistanesa e asiática, como a Google classifica a casa: biryani, caris de frango e de borrego, lentilhas, grão-de-bico, legumes, frango tandoori e pão do tandoor. A casa descreve-se na ficha como restaurante halal.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'O cartaz da casa diz «any dish in €5 including 3 tandoori bread»: qualquer prato da lista custa 5 euros e vem com três pães do tandoor. As bebidas vão dos 0,50 aos 1 euro. Os doces são vendidos ao quilograma.',
	},
	{
		q: 'A comida é halal?',
		a: 'Sim. É a própria casa que o indica na ficha de Google, onde se descreve como «Halal Resturant».',
	},
	{
		q: 'Há opções vegetarianas?',
		a: 'Sim: daal maash (lentilhas), daal chana (grão-de-bico) e mix vegetables, cada um por 5 euros e com três pães do tandoor incluídos.',
	},
	{
		q: 'É preciso reservar?',
		a: 'A casa não tem página de reservas online. O contacto publicado na ficha é o telefone 939 201 733, que também aparece no cartaz da casa como número de chamadas e WhatsApp.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google assinala lugares para pessoas em cadeiras de rodas e um WC acessível. Não indica nada sobre a entrada nem sobre estacionamento, por isso nada afirmamos sobre isso.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,6 sobre 5 com 754 críticas no Google. As críticas destacadas falam da comida, das doses generosas, do atendimento e do preço.',
	},
];
