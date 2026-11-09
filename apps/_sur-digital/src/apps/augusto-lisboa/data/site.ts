/**
 * Dados de Augusto Lisboa — Rua de Santa Marinha, 26
 * (1100-491 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Augusto Lisboa, 38.7144253,-9.1302073,
 *   feature 0xd193389e1321eb7:0x17eb750a56e10024 (morada, categorias, horário,
 *   nota, críticas, acessibilidade e descrição do próprio espaço).
 * - Críticas publicadas na mesma ficha.
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas
 *   para src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica telefone, e-mail, site próprio,
 * carta completa nem preços. A Google mostra «Adicionar telefone» e
 * «Adicionar Website». A secção da cozinha apoia-se apenas na descrição do
 * espaço e nas críticas.
 */

export const BUSINESS = {
	name: 'Augusto Lisboa',
	shortName: 'Augusto',
	mark: 'A',
	street: 'Rua de Santa Marinha, 26',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-491',
	country: 'PT',
	/** A ficha não publica telefone. */
	phone: '',
	phoneHref: '',
	rating: 4.8,
	reviewsCount: 3577,
	siteUrl: 'https://www.sur-digital.com/augusto-lisboa',
	geo: { lat: 38.7144253, lng: -9.1302073 },
	featureId: '0xd193389e1321eb7:0x17eb750a56e10024',
	placeId: 'ChIJtx4y4YkzGQ0RJADhVgp16xc',
	/** Frase com que a Google descreve o espaço. */
	googleBlurb: 'Restaurante descontraído com brunch e café',
	/** Descrição que o próprio espaço publica na ficha (traduzida do inglês). */
	ownDescription:
		'Café de especialidade e brunch durante todo o dia. Comida caseira com ingredientes locais e de qualidade: torradas de pão de massa-mãe, tábuas portuguesas, gelado artesanal e banana bread.',
	tagline: 'Brunch e café de especialidade em Lisboa',
	description:
		'Augusto Lisboa, café de brunch na Rua de Santa Marinha, 26 (1100-491 Lisboa). Café de especialidade, brunch todo o dia e comida caseira com ingredientes locais. 4,8 sobre 5 no Google com 3.577 críticas.',
	/** A ficha não publica telefone nem site. */
	hasPublicPhone: false,
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Augusto+Lisboa/@38.7144253,-9.1302073,17z/data=!3m1!4b1!4m6!3m5!1s0xd193389e1321eb7:0x17eb750a56e10024!8m2!3d38.7144253!4d-9.1302073!16s%2Fg%2F11clswhyyx',
	cid: 'https://www.google.com/maps?cid=1723599969667055652',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7144253%2C-9.1302073',
	embed: 'https://maps.google.com/maps?q=38.7144253,-9.1302073&z=17&hl=pt-PT&output=embed',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '8:30–16:00' },
	{ day: 'Terça-feira', value: '8:30–16:00' },
	{ day: 'Quarta-feira', value: '8:30–16:00' },
	{ day: 'Quinta-feira', value: '8:30–16:00' },
	{ day: 'Sexta-feira', value: '8:30–16:00' },
	{ day: 'Sábado', value: '8:30–17:00' },
	{ day: 'Domingo', value: '8:30–17:00' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 5, text: 'Espaço muito bem decorado, pessoas simpáticas e boa comida.' },
	{
		rating: 5,
		text: 'Opções para quem tem alergia a ovo (eles aceitam mudança no prato).',
	},
	{
		rating: 5,
		text: 'Lugar lindo, tem outro localizado em Belém que é uma delícia.',
	},
];

/** Sinais de identidade que constam na ficha e nas críticas. */
export const SERVICOS = [
	'Restaurante de brunch',
	'Café de especialidade',
	'Pequenos-almoços',
	'Almoço',
	'Comida caseira',
	'Opções para alergia ao ovo',
];

export const MENU = [
	{
		title: 'O brunch',
		items: [
			{
				name: 'Torradas de pão de massa-mãe',
				note: 'a própria ficha cita «sourdough bread toasts»',
			},
			{
				name: 'Tábuas portuguesas',
				note: 'também entre o que o espaço descreve na ficha',
			},
			{
				name: 'Banana bread',
				note: 'citado na descrição do próprio local',
			},
			{
				name: 'Gelado artesanal',
				note: '«homemade ice cream», na ficha do estabelecimento',
			},
		],
	},
	{
		title: 'O café',
		items: [
			{
				name: 'Café de especialidade',
				note: '«specialty coffee», é a primeira coisa que destaca a ficha',
			},
			{
				name: 'Brunch todo o dia',
				note: '«brunch all day-long», acrescenta o próprio espaço',
			},
			{
				name: 'Comida caseira',
				note: '«delicious, homemade food», em palavras do local',
			},
			{
				name: 'Ingredientes locais',
				note: 'a ficha fala de «high-quality and local ingredients»',
			},
		],
	},
	{
		title: 'A casa',
		items: [
			{
				name: 'Espaço bem decorado',
				note: '«espaço muito bem decorado», diz uma crítica',
			},
			{
				name: 'Equipa simpática',
				note: '«pessoas simpáticas», na mesma crítica',
			},
			{
				name: 'Opções para alergias',
				note: 'uma crítica destaca as opções sem ovo e a troca de prato',
			},
			{
				name: 'Também em Belém',
				note: 'uma crítica menciona outro espaço em Belém',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Augusto Lisboa?',
		a: 'Na Rua de Santa Marinha, 26, em Lisboa (1100-491). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre de segunda a sexta das 8:30 às 16:00, e aos sábados e domingos das 8:30 às 17:00. É o horário que publica a ficha de Google; convém confirmá-lo antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou falo com o espaço?',
		a: 'A ficha de Google não publica telefone, e-mail nem site próprio, por isso não existe um canal de reservas publicado. A única informação pública é a própria ficha, com morada, horário, fotografias e críticas.',
	},
	{
		q: 'O que se pode comer?',
		a: 'O espaço descreve café de especialidade e brunch todo o dia, com comida caseira e ingredientes locais: torradas de pão de massa-mãe, tábuas portuguesas, gelado artesanal e banana bread. Não há carta completa nem preços publicados na ficha.',
	},
	{
		q: 'Há opções para alergias ou restrições?',
		a: 'Uma das críticas destaca que há opções para quem tem alergia a ovo e que aceitam mudanças no prato. Como não há carta publicada, o mais seguro é confirmar no local.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google indica que não tem entrada acessível a pessoas em cadeiras de rodas nem estacionamento acessível.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,8 sobre 5 com 3.577 críticas no Google. As críticas destacadas falam do espaço decorado, da simpatia da equipa, da comida e das opções para alergias.',
	},
	{
		q: 'Há outro Augusto Lisboa?',
		a: 'Uma das críticas menciona outro espaço em Belém. A ficha consultada é a da Rua de Santa Marinha, 26, por isso confirma qual queres visitar antes de ir.',
	},
];
