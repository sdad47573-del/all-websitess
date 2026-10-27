/**
 * Dados de Taj Indian Cuisine — Av. Dom João II loja c
 * (2910-548 Setúbal, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Taj Indian Cuisine, 38.5302311,-8.8772029,
 *   feature 0xd1943b0b0e37373:0x53a2d547968ea36 (morada, categorias, horário,
 *   telefone, nota e críticas).
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica site próprio nem carta. As
 * categorias são as que a Google lista e os pratos que se descrevem são os que
 * aparecem nas fotografias do perfil.
 */

export const BUSINESS = {
	name: 'Taj Indian Cuisine',
	shortName: 'Taj',
	mark: 'T',
	street: 'Av. Dom João II loja c',
	city: 'Setúbal',
	region: 'Setúbal',
	regionName: 'Setúbal',
	postalCode: '2910-548',
	country: 'PT',
	phone: '+351 920 499 430',
	phoneHref: '+351920499430',
	rating: 4.5,
	reviewsCount: 141,
	siteUrl: 'https://taj-indian-cuisine.vercel.app',
	geo: { lat: 38.5302311, lng: -8.8772029 },
	featureId: '0xd1943b0b0e37373:0x53a2d547968ea36',
	placeId: 'ChIJc3PjsLBDGQ0RNupoeVQtOgU',
	/** Categorias com que a Google classifica o espaço. */
	categories: [
		'Restaurante indiano',
		'Restaurante asiático',
		'Restaurante especializado em döner kebab',
		'Hamburgueria',
		'Pizzaria',
		'Restaurante português',
		'Restaurante vegano',
	],
	category: 'Restaurante indiano',
	tagline: 'Cozinha indiana em Setúbal',
	description:
		'Taj Indian Cuisine, restaurante indiano na Av. Dom João II loja c, em Setúbal. Aberto todos os dias das 10:00 às 23:30. 4,5 sobre 5 no Google com 141 críticas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Taj+Indian+Cuisine/@38.5302311,-8.8772029,17z/data=!3m1!4b1!4m6!3m5!1s0xd1943b0b0e37373:0x53a2d547968ea36!8m2!3d38.5302311!4d-8.8772029!16s%2Fg%2F11kpgg7k32',
	cid: 'https://www.google.com/maps?cid=376663359676279350',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.5302311%2C-8.8772029',
	embed: 'https://maps.google.com/maps?q=38.5302311,-8.8772029&z=17&hl=pt-PT&output=embed',
};

/**
 * Horário publicado na ficha de Google: todos os dias, das 10:00 às 23:30.
 * A ficha assinala que em feriados o horário pode ser diferente.
 */
export const HOURS = [
	{ day: 'Segunda-feira', value: '10:00–23:30' },
	{ day: 'Terça-feira', value: '10:00–23:30' },
	{ day: 'Quarta-feira', value: '10:00–23:30' },
	{ day: 'Quinta-feira', value: '10:00–23:30' },
	{ day: 'Sexta-feira', value: '10:00–23:30' },
	{ day: 'Sábado', value: '10:00–23:30' },
	{ day: 'Domingo', value: '10:00–23:30' },
];

/**
 * Señas de identidade: as categorias que lista a ficha, o horário e o telefone.
 * A ficha não lista serviços, esplanada, take-away nem acessibilidade.
 */
export const SERVICOS = [
	'Cozinha indiana',
	'Cozinha asiática',
	'Kebab, hambúrgueres e pizza',
	'Cozinha vegana',
	'10:00–23:30 todos os dias',
	'Setúbal',
];

/**
 * A ficha não publica carta nem preços e o restaurante não tem site próprio.
 * O que segue são os pratos que aparecem nas fotografias do perfil da casa —
 * incluindo a página de carta fotografada — e as categorias da ficha. Não é
 * uma carta oficial e os preços da fotografia não se dão como atuais.
 */
export const MENU = [
	{
		title: 'Cozinha indiana',
		items: [
			{
				name: 'Frango tikka masala',
				note: 'num karahi com arroz e naan, nas fotografias do perfil',
			},
			{
				name: 'Chana masala',
				note: 'grão-de-bico em molho de especiarias, com arroz basmati, na galeria da casa',
			},
			{
				name: 'Caris de borrego',
				note: 'a carta fotografada lista curry, madras, karahi, palak, korma, vindaloo, jalfrezi, butter, rogan josh, mango e tikka masala',
			},
		],
	},
	{
		title: 'Pão e arroz',
		items: [
			{
				name: 'Naan de alho e coentros',
				note: 'cortado em triângulos, nas fotografias do perfil',
			},
			{
				name: 'Arroz basmati',
				note: 'servido com coentros, também na galeria da casa',
			},
			{
				name: 'Molhos e acompanhamentos',
				note: 'na mesa das fotografias aparecem molhos verdes e vermelhos em tacinhas de metal',
			},
		],
	},
	{
		title: 'Kebab, pizza e mais',
		items: [
			{
				name: 'Pizza',
				note: 'na galeria, com fiambre, milho, pimento e cogumelos',
			},
			{
				name: 'Kebab e hambúrgueres',
				note: 'a ficha classifica a casa também como restaurante de döner kebab e hamburgueria',
			},
			{
				name: 'Sobremesas e lassi',
				note: 'manga com waffle e três copos de lassi de manga, nas fotografias do perfil',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Taj Indian Cuisine?',
		a: 'Na Av. Dom João II, loja c, em Setúbal (2910-548). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Está aberto todos os dias, das 10:00 às 23:30. A ficha de Google assinala que em feriados o horário pode ser diferente, por isso convém confirmá-lo antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: `O contacto público da casa é o telefone ${BUSINESS.phone}, o que publica a ficha de Google. O letreiro da fachada mostra também o número +351 265 118 368. Não há reservas nem encomendas em linha: o restaurante não tem site próprio nem plataforma de reservas associada à ficha.`,
	},
	{
		q: 'Que comida se serve?',
		a: 'Cozinha indiana e asiática, com caris, naan, arroz basmati e pratos de borrego, além de kebab, hambúrgueres e pizza. A ficha classifica a casa como restaurante indiano, asiático, de döner kebab, hamburgueria, pizzaria, restaurante português e restaurante vegano. A oferta detalhada não está publicada em nenhum site.',
	},
	{
		q: 'Tem site próprio ou carta online?',
		a: 'Não. A ficha de Google oferece a opção de acrescentar um site, o que confirma que não existe nenhum publicado. Na galeria de fotografias da casa aparece uma página da carta de borrego, mas não está datada e os preços que mostra podem já não ser os atuais.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,5 sobre 5 com 141 críticas no Google, com base na ficha consultada.',
	},
];
