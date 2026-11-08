/**
 * Dados de Restaurante e Pastelaria Carmar — R. do Arco do Marquês de Alegrete 3
 * (1100-240 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Restaurante e Pastelaria Carmar,
 *   38.7141896,-9.136537, feature 0xd1933154b039e51:0xaea2b899df1e5a5d
 *   (morada, categoria, horário, telefone, nota e críticas).
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica site próprio nem carta, e não
 * detalha a oferta da pastelaria. Por isso não há preços, pratos concretos nem
 * horários de refeições que a ficha não confirme.
 */

export const BUSINESS = {
	name: 'Restaurante e Pastelaria Carmar',
	shortName: 'Carmar',
	mark: 'C',
	street: 'R. do Arco do Marquês de Alegrete 3',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-240',
	country: 'PT',
	phone: '+351 918 602 622',
	phoneHref: '+351918602622',
	rating: 3.4,
	reviewsCount: 48,
	siteUrl: 'https://www.sur-digital.com/carmar-restaurante-e-pastelaria',
	geo: { lat: 38.7141896, lng: -9.136537 },
	featureId: '0xd1933154b039e51:0xaea2b899df1e5a5d',
	placeId: 'ChIJUZ4DSxUzGQ0RXVoe35m4oq4',
	/** Categoria com que a Google classifica o espaço. */
	category: 'Restaurante português',
	tagline: 'Restaurante e pastelaria em Lisboa',
	description:
		'Restaurante e Pastelaria Carmar, restaurante português na R. do Arco do Marquês de Alegrete 3, em Lisboa. Aberto todos os dias das 7:00 às 22:00. 3,4 sobre 5 no Google com 48 críticas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+e+Pastelaria+Carmar/@38.7141896,-9.136537,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933154b039e51:0xaea2b899df1e5a5d!8m2!3d38.7141896!4d-9.136537!16s%2Fg%2F11j1cgsf8k',
	cid: 'https://www.google.com/maps?cid=12583823279839402589',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7141896%2C-9.136537',
	embed: 'https://maps.google.com/maps?q=38.7141896,-9.136537&z=17&hl=pt-PT&output=embed',
};

/**
 * Horário publicado na ficha de Google: todos os dias, das 7:00 às 22:00.
 * A ficha assinala que em feriados o horário pode ser diferente.
 */
export const HOURS = [
	{ day: 'Segunda-feira', value: '7:00–22:00' },
	{ day: 'Terça-feira', value: '7:00–22:00' },
	{ day: 'Quarta-feira', value: '7:00–22:00' },
	{ day: 'Quinta-feira', value: '7:00–22:00' },
	{ day: 'Sexta-feira', value: '7:00–22:00' },
	{ day: 'Sábado', value: '7:00–22:00' },
	{ day: 'Domingo', value: '7:00–22:00' },
];

/**
 * Señas de identidade: o que a ficha pública confirma. A ficha não lista
 * serviços, esplanada, take-away nem acessibilidade, por isso nada disso aparece.
 */
export const SERVICOS = [
	'Restaurante português',
	'Pastelaria',
	'7:00–22:00 todos os dias',
	'+351 918 602 622',
	'Lisboa',
];

/**
 * A ficha não publica carta nem preços e o restaurante não tem site próprio.
 * O que segue são os pratos que aparecem nas fotografias do perfil da casa e a
 * categoria com que a Google a classifica. Não são uma carta.
 */
export const MENU = [
	{
		title: 'Peixe e marisco',
		items: [
			{
				name: 'Peixe grelhado com batata cozida e salada',
				note: 'nas fotografias do perfil, servido com tomate e limão',
			},
			{
				name: 'Filete de peixe com cebola e alho',
				note: 'com batatas assadas e grelos salteados, também na galeria da casa',
			},
			{
				name: 'Amêijoas em azeite e alho',
				note: 'numa travessa de metal, nas fotografias do perfil',
			},
			{
				name: 'Sopa de marisco',
				note: 'com camarão e pão torrado, nas fotografias do perfil',
			},
		],
	},
	{
		title: 'Carnes',
		items: [
			{
				name: 'Bife com ovo a cavalo',
				note: 'com batata frita, arroz, salada e limão, nas fotografias do perfil',
			},
			{
				name: 'Entrecosto grelhado',
				note: 'servido com salada e arroz de feijão, na galeria da casa',
			},
			{
				name: 'Frango grelhado com batata frita',
				note: 'com salsicha e salada, na mesma mesa das fotografias',
			},
		],
	},
	{
		title: 'Cozinha e pastelaria',
		items: [
			{
				name: 'Cozinha portuguesa',
				note: '«Restaurante português» é a categoria com que a Google classifica a casa',
			},
			{
				name: 'Pastelaria da casa',
				note: 'o nome do estabelecimento anuncia pastelaria; a ficha não detalha a oferta',
			},
			{
				name: 'Sem carta nem preços publicados',
				note: 'a ficha de Google não publica carta, preços nem site próprio',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Restaurante e Pastelaria Carmar?',
		a: 'Na R. do Arco do Marquês de Alegrete 3, em Lisboa (1100-240). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Está aberto todos os dias, das 7:00 às 22:00. A ficha de Google assinala que em feriados o horário pode ser diferente, por isso convém confirmá-lo antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: `O contacto público da casa é o telefone ${BUSINESS.phone}, o único que publica a ficha de Google. Não há reservas nem encomendas em linha: o restaurante não tem site próprio nem plataforma de reservas associada à ficha.`,
	},
	{
		q: 'Que comida se serve?',
		a: 'A Google classifica a casa como restaurante português e o próprio nome anuncia restaurante e pastelaria. A ficha não publica carta, pratos nem preços, por isso esta página não adianta nenhum desses dados.',
	},
	{
		q: 'Tem site próprio ou carta online?',
		a: 'Não. A ficha de Google oferece a opção de acrescentar um site, o que confirma que não existe nenhum publicado. Esta página reúne apenas a informação pública da ficha: morada, horário, telefone e fotografias.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 3,4 sobre 5 com 48 críticas no Google, com base na ficha consultada.',
	},
];
