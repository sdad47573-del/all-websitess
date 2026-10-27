/**
 * Dados de Aicha African food — Rua do Arco da Graça, 14
 * (1150-320 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Aicha African food, 38.7156505,-9.1377199,
 *   feature 0xd193317acbe1347:0x30f8830305d60d2e (morada, categoria, horário,
 *   nota, críticas e telefone).
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica site próprio, carta, preços,
 * descrição do espaço nem lista de serviços, e as críticas não chegam no
 * payload público. Por isso não há pratos nem preços em nenhum sítio: a secção
 * da cozinha apoia-se apenas na categoria com que a Google classifica a casa e
 * no horário publicado.
 */

export const BUSINESS = {
	name: 'Aicha African food',
	shortName: 'Aicha',
	mark: 'AF',
	street: 'Rua do Arco da Graça, 14',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1150-320',
	country: 'PT',
	phoneDisplay: '+351 920 063 381',
	phoneHref: 'tel:+351920063381',
	rating: 4.6,
	reviewsCount: 72,
	siteUrl: 'https://aicha-african-food.vercel.app',
	geo: { lat: 38.7156505, lng: -9.1377199 },
	featureId: '0xd193317acbe1347:0x30f8830305d60d2e',
	placeId: 'ChIJRxO-rBczGQ0RLg3WBQOD-DA',
	/** Categoria com que a Google classifica o espaço. */
	category: 'Restaurante africano',
	tagline: 'Cozinha africana em Lisboa',
	description:
		'Aicha African food, restaurante africano na Rua do Arco da Graça, 14 (1150-320 Lisboa). Aberto todos os dias das 11:00 às 22:00. 4,6 sobre 5 no Google com 72 críticas. Tel. +351 920 063 381.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Aicha+African+food/@38.7156505,-9.1377199,17z/data=!3m1!4b1!4m6!3m5!1s0xd193317acbe1347:0x30f8830305d60d2e!8m2!3d38.7156505!4d-9.1377199!16s%2Fg%2F11h425tng2',
	cid: 'https://www.google.com/maps?cid=3528714357050838318',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7156505%2C-9.1377199',
	embed: 'https://maps.google.com/maps?q=38.7156505,-9.1377199&z=17&hl=pt-PT&output=embed',
};

/**
 * Horário publicado na ficha de Google: todos os dias, das 11:00 às 22:00.
 * A própria ficha avisa que em feriados o horário pode ser diferente.
 */
export const HOURS = [
	{ day: 'Segunda-feira', value: '11:00–22:00' },
	{ day: 'Terça-feira', value: '11:00–22:00' },
	{ day: 'Quarta-feira', value: '11:00–22:00' },
	{ day: 'Quinta-feira', value: '11:00–22:00' },
	{ day: 'Sexta-feira', value: '11:00–22:00' },
	{ day: 'Sábado', value: '11:00–22:00' },
	{ day: 'Domingo', value: '11:00–22:00' },
];

/**
 * Señas de identidade que constam na ficha: a categoria com que a Google
 * classifica o espaço, o horário e o telefone. A ficha não lista serviços
 * (esplanada, take-away, opções vegetarianas…) nem acessibilidade, por isso
 * nada disso aparece aqui.
 */
export const SERVICOS = [
	'Restaurante africano',
	'Aberto todos os dias',
	'11:00–22:00',
	'Em Lisboa',
	'Telefone para contacto',
];

/**
 * A ficha não publica carta nem preços, e as críticas não estão disponíveis na
 * consulta pública. Esta secção reúne só o que a ficha diz: a cozinha, o
 * horário e o telefone.
 */
export const MENU = [
	{
		title: 'A cozinha',
		items: [
			{
				name: 'Cozinha africana',
				note: '«Restaurante africano» é a categoria com que a Google classifica a casa',
			},
			{
				name: 'Carta e preços',
				note: 'a ficha não publica carta nem preços; o mais direto é perguntar pelo telefone',
			},
		],
	},
	{
		title: 'Quando ir',
		items: [
			{
				name: 'Todos os dias, das 11:00 às 22:00',
				note: 'é o horário publicado na ficha de Google',
			},
			{
				name: 'Almoço e jantar',
				note: 'o horário cobre as duas refeições, sem fecho a meio do dia',
			},
		],
	},
	{
		title: 'Contacto',
		items: [
			{
				name: 'Telefone: +351 920 063 381',
				note: 'o único canal publicado na ficha',
			},
			{
				name: 'Reservas e encomendas',
				note: 'por telefone: a ficha não tem reserva online nem site próprio',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Aicha African food?',
		a: 'Na Rua do Arco da Graça, 14, em Lisboa (1150-320). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Está aberto todos os dias, das 11:00 às 22:00, sem fecho a meio do dia. É o horário que publica a ficha de Google, que avisa ainda que em feriados pode ser diferente; convém confirmar antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: 'Pelo telefone +351 920 063 381. A ficha de Google não tem reserva online nem site próprio, por isso o telefone é o único canal publicado.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'A Google classifica a casa como restaurante africano. A ficha não publica carta, pratos nem preços, por isso esta página não adianta nenhum: o melhor é perguntar pelo telefone ou ver as fotografias do perfil.',
	},
	{
		q: 'Tem site próprio ou carta online?',
		a: 'Não. A ficha de Google não tem ligação a nenhum site, e a carta não está publicada online. Esta página reúne apenas a informação pública da ficha: morada, horário, telefone e fotografias.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,6 sobre 5 com 72 críticas no Google, com base na ficha consultada.',
	},
];
