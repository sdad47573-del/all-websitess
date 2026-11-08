/**
 * Dados do Restaurante da Sé — Cruzes da Sé, 31A
 * (1100-192 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Restaurante da Sé, 38.7095259,-9.1330113,
 *   feature 0xd193589cfef2d35:0x370967cb97ce55a3 (morada, categoria, horário,
 *   nota, críticas, telefone, acessibilidade e descrição do próprio espaço).
 * - Críticas publicadas na mesma ficha e noutras plataformas públicas.
 * - Página de reservas da casa no Resos: https://restaurante-da-se-1732222622.resos.com/booking
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha de Google não publica carta nem preços. A
 * casa publica a carta completa, com valores, na sua página do TheFork; as
 * referências a pratos que aparecem aqui vêm das críticas e dos excertos
 * públicos dessa carta, e os preços indicados são apenas os que estão
 * publicados. Nada de horários, serviços ou pratos inventados.
 */

export const BUSINESS = {
	name: 'Restaurante da Sé',
	shortName: 'da Sé',
	mark: 'S',
	street: 'Cruzes da Sé, 31A',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-192',
	country: 'PT',
	phone: '21 886 2886',
	phoneHref: 'tel:+351218862886',
	rating: 4.5,
	reviewsCount: 2421,
	siteUrl: 'https://www.sur-digital.com/restaurante-da-se',
	geo: { lat: 38.7095259, lng: -9.1330113 },
	featureId: '0xd193589cfef2d35:0x370967cb97ce55a3',
	placeId: 'ChIJNS3vz4k1GQ0Ro1XOl8tnCTc',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante de cozinha tradicional portuguesa',
	/** Descrição que o próprio espaço publica na ficha. */
	ownDescription: 'Eat. Drink. Love.',
	tagline: 'Cozinha portuguesa ao lado da Sé, em Alfama',
	description:
		'Restaurante da Sé, cozinha portuguesa na Cruzes da Sé, 31A, em Alfama, Lisboa. Aberto todos os dias das 10:30 às 23:30, com esplanada junto à catedral. 4,5 sobre 5 no Google com 2.421 críticas.',
	hasPublicPhone: true,
	/** A ficha não indica site próprio; reservas pela página do Resos. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+da+S%C3%A9/@38.7095259,-9.1330113,17z/data=!3m1!4b1!4m6!3m5!1s0xd193589cfef2d35:0x370967cb97ce55a3!8m2!3d38.7095259!4d-9.1330113!16s%2Fg%2F11r1v3_0pq',
	cid: 'https://www.google.com/maps?cid=3965815070999336355',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7095259%2C-9.1330113',
	embed: 'https://maps.google.com/maps?q=38.7095259,-9.1330113&z=17&hl=pt-PT&output=embed',
	/** Página de reservas da casa no Resos, a que a ficha de Google aponta. */
	reserve: 'https://restaurante-da-se-1732222622.resos.com/booking',
	/** Carta com preços publicada pela casa no TheFork. */
	menu: 'https://www.thefork.pt/restaurante/restaurante-da-se-r682389/menu',
	thefork: 'https://www.thefork.pt/restaurante/restaurante-da-se-r682389',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '10:30–23:30' },
	{ day: 'Terça-feira', value: '10:30–23:30' },
	{ day: 'Quarta-feira', value: '10:30–23:30' },
	{ day: 'Quinta-feira', value: '10:30–23:30' },
	{ day: 'Sexta-feira', value: '10:30–23:30' },
	{ day: 'Sábado', value: '10:30–23:30' },
	{ day: 'Domingo', value: '10:30–23:30' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 4,
		text: 'Sitio muito agradável boa comida excelente serviço.',
	},
	{
		rating: 5,
		text: 'Ambiente fantástico e bons preços, vale a pena!!',
	},
	{
		rating: 5,
		text: 'No geral, a nossa experiência no Restaurante Da Sé foi fantástica.',
	},
];

/** O que a ficha assinala e o que as críticas confirmam. */
export const SERVICOS = [
	'Cozinha portuguesa',
	'Esplanada junto à Sé',
	'Brunch',
	'Peixe na grelha',
	'Reservas online',
	'Lugares para cadeiras de rodas',
];

/**
 * Pratos que se repetem nas críticas, nas fotografias do perfil e nos excertos
 * públicos da carta. A ficha de Google não publica carta nem preços: os únicos
 * valores que aparecem são os que a própria casa publica no TheFork.
 */
export const MENU = [
	{
		title: 'Para começar',
		items: [
			{
				name: 'Pastéis de bacalhau',
				note: 'fritos de bacalhau servidos quentes, a entrada que abre a mesa',
			},
			{
				name: 'Bacalhau gratinado',
				note: 'na travessa de barro, com batata e nata, como sai da cozinha',
			},
			{
				name: 'Salada da casa',
				note: 'alface, cenoura e tomate, para acompanhar o peixe',
			},
		],
	},
	{
		title: 'Do mar',
		items: [
			{
				name: 'Paella de marisco',
				note: 'arroz com camarão, mexilhão e amêijoa, em travessa de ferro',
			},
			{
				name: 'Arroz de marisco',
				note: 'um dos pratos que as críticas destacam na casa',
			},
			{
				name: 'Sardinhas assadas',
				note: 'na grelha, com batata cozida, salada e limão',
			},
			{
				name: 'Polvo grelhado',
				note: 'grelhado, referido nas críticas pelo ponto',
			},
		],
	},
	{
		title: 'Da terra',
		items: [
			{
				name: 'Bife',
				note: 'grelhado, com puré de batata e tomate',
			},
			{
				name: 'Esparguete com camarão',
				note: 'a cozinha italiana também aparece na carta da casa',
			},
		],
	},
	{
		title: 'Para beber',
		items: [
			{
				name: 'Sangria',
				note: 'de vinho tinto com fruta, servida em jarro',
			},
			{
				name: 'Vinho da casa',
				note: 'português, a copo ou em garrafa',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Restaurante da Sé?',
		a: 'Na Cruzes da Sé, 31A, em Alfama, a poucos passos da catedral de Lisboa (1100-192). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'A ficha de Google indica que abre todos os dias, das 10:30 às 23:30, sem dia de fecho. Convém confirmar antes de ir, sobretudo em feriados.',
	},
	{
		q: 'É preciso reservar?',
		a: 'A casa tem reservas online pela página do Resos, que é a que a ficha de Google indica, e também atende pelo 21 886 2886. Em época alta, junto à Sé, vale a pena marcar.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'A Google classifica a casa como restaurante de cozinha tradicional portuguesa. Nas plataformas públicas aparece também como cozinha europeia e italiana. Na mesa: sardinhas na grelha, arroz de marisco, paella, polvo, bacalhau e bifes.',
	},
	{
		q: 'Tem esplanada?',
		a: 'Sim. As mesas saem para a calçada, debaixo das árvores, com toalhas de xadrez, e a fachada tem dois toldos com «Comida Portuguesa» e «Restaurante da Sé».',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'A carta com preços está publicada no TheFork, com um preço médio de 19 €. Dois valores que a casa tem publicados: os pastéis de bacalhau, 12,90 €, e a paella de marisco, 20,90 €. Esta página não inventa preços para os restantes pratos.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google indica que tem lugares para pessoas em cadeiras de rodas. Não publica informação sobre estacionamento adaptado.',
	},
	{
		q: 'Serve brunch ou pequeno-almoço?',
		a: 'A Google assinala a casa com a etiqueta Brunch e o horário começa às 10:30, por isso há uma mesa a meio da manhã além do almoço e do jantar.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,5 sobre 5 com 2.421 críticas no Google. As críticas destacadas falam de comida boa, serviço atencioso e ambiente agradável.',
	},
];
