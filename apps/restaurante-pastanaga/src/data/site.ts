/**
 * Dados do Restaurante Pastanaga — Travessa dos Pescadores, 27
 * (1200-328 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Restaurante Pastanaga, 38.7089856,-9.1527157,
 *   feature 0xd193483b9cb0e55:0xe71ca0a9761d94d4 (morada, categorias, horário,
 *   nota, críticas, telefone, acessibilidade e descrição do próprio espaço).
 * - Críticas publicadas na mesma ficha.
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica carta nem preços, e o site
 * indicado na ficha (pastanaga.pt) remete para um Google Sites com acesso
 * restrito. Por isso a página não copia uma carta: reúne os pratos que se
 * repetem nas críticas públicas e deixa claro que a oferta muda.
 */

export const BUSINESS = {
	name: 'Restaurante Pastanaga',
	shortName: 'Pastanaga',
	mark: 'P',
	street: 'Travessa dos Pescadores, 27',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1200-328',
	country: 'PT',
	phone: '932 910 125',
	phoneHref: 'tel:+351932910125',
	rating: 4.8,
	reviewsCount: 925,
	siteUrl: 'https://restaurante-pastanaga.vercel.app',
	geo: { lat: 38.7089856, lng: -9.1527157 },
	featureId: '0xd193483b9cb0e55:0xe71ca0a9761d94d4',
	placeId: 'ChIJVQ7LuYM0GQ0R1JQddqmgHOc',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante de cozinha tradicional portuguesa',
	/** Descrição que o próprio espaço publica na ficha (traduzida do inglês). */
	ownDescription: 'A comida da Ana: diferente, única. Experimenta.',
	tagline: 'Cozinha portuguesa com tempero próprio, em Lisboa',
	description:
		'Restaurante Pastanaga, cozinha tradicional portuguesa na Travessa dos Pescadores, 27 (1200-328 Lisboa). Jantares de terça a domingo, com reserva pelo 932 910 125. 4,8 sobre 5 no Google com 925 críticas.',
	hasPublicPhone: true,
	/** A ficha indica pastanaga.pt, mas o domínio abre um Google Sites com acesso restrito. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Pastanaga/@38.7089856,-9.1527157,17z/data=!3m1!4b1!4m6!3m5!1s0xd193483b9cb0e55:0xe71ca0a9761d94d4!8m2!3d38.7089856!4d-9.1527157!16s%2Fg%2F11fx9b9454',
	cid: 'https://www.google.com/maps?cid=16653362171800818900',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7089856%2C-9.1527157',
	embed: 'https://maps.google.com/maps?q=38.7089856,-9.1527157&z=17&hl=pt-PT&output=embed',
	/** Página pública de reservas do restaurante no TheFork. */
	reserve: 'https://thefork.pt/restaurante/pastanaga-r728295',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '18:00–23:30' },
	{ day: 'Terça-feira', value: 'Encerrado', closed: true },
	{ day: 'Quarta-feira', value: '18:00–23:30' },
	{ day: 'Quinta-feira', value: '18:00–23:30' },
	{ day: 'Sexta-feira', value: '18:00–23:30' },
	{ day: 'Sábado', value: '18:00–23:30' },
	{ day: 'Domingo', value: '18:00–23:30' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Boa experiência, ambiente acolhedor e serviço simpático.',
	},
	{
		rating: 5,
		text: 'Simplesmente excelente, o acolhimento, o espaço, a decoração, a comida.',
	},
];

/** Sinais de identidade que constam na ficha e nas críticas. */
export const SERVICOS = [
	'Cozinha portuguesa',
	'Jantares',
	'Reserva recomendada',
	'Esplanada na travessa',
	'Lugares para cadeiras de rodas',
];

/**
 * Pratos que se repetem nas críticas e listas públicas do restaurante.
 * A ficha de Google não publica carta nem preços, por isso não se inventam valores.
 */
export const MENU = [
	{
		title: 'Para começar',
		items: [
			{
				name: 'Sopa de peixe',
				note: 'um dos pratos mais citados por quem já jantou aqui',
			},
			{
				name: 'Gambas ao alho',
				note: 'entrada que aparece nas críticas ao restaurante',
			},
		],
	},
	{
		title: 'Da cozinha',
		items: [
			{
				name: 'Lombo de pato com arroz',
				note: 'o prato que as críticas destacam como assinatura da casa',
			},
			{
				name: 'Atum',
				note: 'outro dos pratos referidos com frequência',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Restaurante Pastanaga?',
		a: 'Na Travessa dos Pescadores, 27, em Lisboa (1200-328). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre para jantar todos os dias exceto à terça-feira, das 18:00 às 23:30. É o horário que publica a ficha de Google; convém confirmá-lo antes de ir.',
	},
	{
		q: 'É preciso reservar?',
		a: 'A ficha de Google recomenda reservar, e o restaurante tem telefone e página pública de reservas. Podes ligar para o 932 910 125 ou reservar online pelo TheFork.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'A Google classifica a casa como restaurante de cozinha tradicional portuguesa. O próprio espaço resume a proposta como «a comida da Ana: diferente, única». As críticas falam de acolhimento, espaço, decoração e comida.',
	},
	{
		q: 'Há carta e preços publicados?',
		a: 'A ficha de Google não publica carta nem preços. Esta página reúne os pratos que as críticas citam — sopa de peixe, gambas ao alho, lombo de pato com arroz, atum — mas a oferta muda e não se inventam valores.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google indica que tem lugares para pessoas em cadeiras de rodas. O estacionamento acessível a pessoas em cadeiras de rodas não está disponível.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,8 sobre 5 com 925 críticas no Google. As críticas destacadas falam do acolhimento, do espaço, da decoração e da comida.',
	},
	{
		q: 'Que pratos se destacam?',
		a: 'Nas críticas e listas públicas repetem-se a sopa de peixe, as gambas ao alho, o lombo de pato com arroz e o atum. A carta muda com o mercado, por isso confirma o que há no dia ao reservar.',
	},
];
