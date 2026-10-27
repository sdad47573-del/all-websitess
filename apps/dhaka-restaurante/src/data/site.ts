/**
 * Datos de Dhaka Restaurante — R. do Benformoso 220
 * (1100-395 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Dhaka Restaurante, 38.7193909,-9.1349422,
 *   feature 0xd193385fb8cdd0d:0xabbe0b91999969ea (nome, morada, categoria,
 *   horário, telefone, nota e críticas).
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica site próprio nem carta. A
 * cozinha descreve-se a partir da categoria da ficha e das fotografias do perfil.
 */

export const BUSINESS = {
	name: 'Dhaka Restaurante',
	shortName: 'Dhaka',
	mark: 'DH',
	street: 'R. do Benformoso 220',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-395',
	country: 'PT',
	phone: '+351 920 492 645',
	phoneHref: '+351920492645',
	rating: 3.8,
	reviewsCount: 419,
	siteUrl: 'https://dhaka-restaurante.vercel.app',
	geo: { lat: 38.7193909, lng: -9.1349422 },
	featureId: '0xd193385fb8cdd0d:0xabbe0b91999969ea',
	placeId: 'ChIJDd2M-4UzGQ0R6mmZmZELvqs',
	/** Categorias com que a Google classifica o espaço. */
	category: 'Restaurante bangladesí',
	categories: ['Restaurante bangladesí', 'Restaurante bengalí'],
	tagline: 'Cozinha bangladesí na Mouraria',
	description:
		'Dhaka Restaurante, restaurante bangladesí na R. do Benformoso 220, em Lisboa. Aberto todos os dias das 9:00 às 24:00. 3,8 sobre 5 no Google com 419 críticas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Dhaka+Restaurante/@38.7193909,-9.1349422,17z/data=!3m1!4b1!4m6!3m5!1s0xd193385fb8cdd0d:0xabbe0b91999969ea!8m2!3d38.7193909!4d-9.1349422!16s%2Fg%2F11bwkbzzh9',
	cid: 'https://www.google.com/maps?cid=12375341546035833322',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7193909%2C-9.1349422',
	embed: 'https://maps.google.com/maps?q=38.7193909,-9.1349422&z=17&hl=pt-PT&output=embed',
};

/**
 * Horário publicado na ficha de Google: todos os dias, das 9:00 às 24:00.
 * A ficha assinala que em feriados o horário pode ser diferente.
 */
export const HOURS = [
	{ day: 'Segunda-feira', value: '9:00–24:00' },
	{ day: 'Terça-feira', value: '9:00–24:00' },
	{ day: 'Quarta-feira', value: '9:00–24:00' },
	{ day: 'Quinta-feira', value: '9:00–24:00' },
	{ day: 'Sexta-feira', value: '9:00–24:00' },
	{ day: 'Sábado', value: '9:00–24:00' },
	{ day: 'Domingo', value: '9:00–24:00' },
];

/**
 * Señas de identidade: as categorias da ficha, o que anunciam os letreiros
 * («comida tradicional indiana e bangladeshiana», «0% alcohol», selos HALAL) e
 * o horário e o telefone publicados.
 */
export const SERVICOS = [
	'Cozinha indiana e bangladeshiana',
	'Halal',
	'0% álcool',
	'9:00–24:00 todos os dias',
	'+351 920 492 645',
	'Mouraria · Lisboa',
];

/**
 * A ficha não publica carta nem preços e a casa não tem site próprio. O que
 * segue vem das fotografias do perfil — os pratos à mesa, a vitrina dos doces e
 * a lista afixada à porta do número 220, que não está datada. Por isso não se
 * apresentam preços como atuais.
 */
export const MENU = [
	{
		title: 'Cozinha bangladeshiana',
		items: [
			{
				name: 'Biryani',
				note: 'prato de arroz amarelo com carne, nas fotografias do perfil',
			},
			{
				name: 'Naan e pão',
				note: 'prato grande de naan cortado em triângulos, também nas fotografias',
			},
			{
				name: 'Samosa com molho',
				note: 'aparece com um molho vermelho numa tigela pequena',
			},
			{
				name: 'Legumes e grão',
				note: 'prato de legumes com grão-de-bico na mesa fotografada',
			},
		],
	},
	{
		title: 'Caris e marisco',
		items: [
			{
				name: 'Caris de camarão',
				note: 'a lista afixada à porta tem uma secção inteira de camarão (prawn)',
			},
			{
				name: 'Korma, makhani e rogan',
				note: 'preparos que a mesma lista repete em várias carnes e marisco',
			},
			{
				name: 'Dansak, patia e jalfrezi',
				note: 'também na lista: caris agridoces e picantes ao estilo das casas de caril',
			},
			{
				name: 'Caril de carne',
				note: 'servido com arroz branco numa das mesas das fotografias',
			},
		],
	},
	{
		title: 'Doces e bebidas',
		items: [
			{
				name: 'Jalebi',
				note: 'doces em espiral cor de laranja, na vitrina e numa travessa',
			},
			{
				name: 'Doces de leite',
				note: 'quadrados brancos na bandeja de baixo da vitrina',
			},
			{
				name: 'Bebida de leite',
				note: 'a caneca branca com palhinha das fotografias',
			},
			{
				name: 'Chá e refrigerantes',
				note: 'a casa anuncia «0% alcohol» no letreiro e tem garrafas na vitrina',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Dhaka Restaurante?',
		a: 'Na R. do Benformoso 220, na Mouraria, em Lisboa (1100-395). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'A ficha publica um horário contínuo: todos os dias, das 9:00 às 24:00. A própria ficha assinala que em feriados o horário pode ser diferente, por isso convém confirmá-lo antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: `O contacto público da ficha é o telefone ${BUSINESS.phone}. Não há reservas nem encomendas em linha: a casa não tem site próprio nem plataforma associada, e a ficha convida a «adicionar site».`,
	},
	{
		q: 'A comida é halal?',
		a: 'Os letreiros da porta levam o selo redondo com a palavra «HALAL», em português e em escrita árabe, ao lado do nome da casa. A ficha de Google não detalha certificações, por isso convém confirmar no local.',
	},
	{
		q: 'Que comida se serve?',
		a: 'Cozinha indiana e bangladeshiana, como anuncia o letreiro («comida tradicional indiana e bangladeshiana»). As fotografias mostram biryani, naan, samosa com molho, legumes com grão, caril de carne, jalebi e doces de leite. A lista afixada à porta inclui uma secção de caris de camarão com korma, makhani, rogan, dansak, patia e jalfrezi.',
	},
	{
		q: 'Vende álcool?',
		a: 'Não: o letreiro da porta anuncia «0% alcohol». Nas fotografias vê-se água, refrigerantes e uma bebida de leite, além do chá.',
	},
	{
		q: 'Tem site próprio ou carta online?',
		a: 'Não. A ficha de Google mostra a opção de adicionar um site, o que confirma que não existe nenhum publicado. A única lista que se vê é a que está afixada à porta do número 220, com secções de camarão e preços na ordem dos 9 a 11 €; essa lista não está datada, por isso não se apresenta aqui como a carta atual.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 3,8 sobre 5 com 419 críticas no Google, com base na ficha consultada.',
	},
];
