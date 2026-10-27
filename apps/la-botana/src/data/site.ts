/**
 * Dados de La Botana — Av. Duque de Loulé 1E (1050-085 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: La Botana, 38.7290014,-9.143702, feature
 *   0xd1f2d4472d40697:0x9f1ebd01ead8daf (nome, morada, categoria, telefone,
 *   nota e críticas).
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que a ficha NÃO publica: horário, site próprio, carta nem descrição da casa.
 * A própria ficha mostra as opções «Adicionar horário» e «Adicionar site», o que
 * confirma que nenhum dos dois está publicado. Por isso não há horário nem
 * preços em nenhum sítio desta web.
 */

export const BUSINESS = {
	name: 'La Botana',
	shortName: 'La Botana',
	mark: 'LB',
	street: 'Av. Duque de Loulé 1E',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1050-085',
	country: 'PT',
	phone: '+351 938 797 021',
	phoneHref: '+351938797021',
	rating: 4.7,
	reviewsCount: 201,
	siteUrl: 'https://la-botana.vercel.app',
	geo: { lat: 38.7290014, lng: -9.143702 },
	featureId: '0xd1f2d4472d40697:0x9f1ebd01ead8daf',
	placeId: 'ChIJlwbUckQtHw0Rr42tHtDr8Qk',
	/** Categoria com que a Google classifica o espaço. */
	category: 'Restaurante mexicano',
	tagline: 'Cozinha mexicana em Lisboa',
	description:
		'La Botana, restaurante mexicano na Av. Duque de Loulé 1E, em Lisboa. 4,7 sobre 5 no Google com 201 críticas. A ficha não publica horário; confirma por telefone.',
	hasPublicPhone: true,
	hasPublicWebsite: false,
	hasPublicHours: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Botana/@38.7290014,-9.143702,17z/data=!3m1!4b1!4m6!3m5!1s0xd1f2d4472d40697:0x9f1ebd01ead8daf!8m2!3d38.7290014!4d-9.143702!16s%2Fg%2F11tk22cyt4',
	cid: 'https://www.google.com/maps?cid=716613094829034927',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7290014%2C-9.143702',
	embed: 'https://maps.google.com/maps?q=38.7290014,-9.143702&z=17&hl=pt-PT&output=embed',
};

/**
 * A ficha não publica horário: mostra a opção «Adicionar horário». A tabela da
 * secção de visita explica isso mesmo em vez de inventar horas.
 */
export const HOURS = [{ day: 'Ficha de Google', value: 'Sem horário publicado' }];

/**
 * Señas de identidade: a categoria da ficha, o telefone publicado e o que
 * mostram as fotografias do perfil (a sala, os murais e os pratos mexicanos).
 * A ficha não publica horário, site nem carta, por isso nada disso aparece.
 */
export const SERVICOS = [
	'Cozinha mexicana',
	'Guacamole e tacos',
	'Margaritas',
	'Sala em dois pisos',
	'+351 938 797 021',
	'Avenidas Novas · Lisboa',
];

/**
 * A ficha não publica carta nem preços e a casa não tem site próprio. O que
 * segue vem das fotografias do perfil: os pratos à mesa e as bebidas. Não é
 * uma carta oficial e não se apresentam preços.
 */
export const MENU = [
	{
		title: 'Para partilhar',
		items: [
			{
				name: 'Guacamole com totopos',
				note: 'servido no molcajete de pedra, com jalapeño e abacate, nas fotografias',
			},
			{
				name: 'Nachos gratinados',
				note: 'com queijo derretido, tomate, coentros e natas, em duas das fotos',
			},
			{
				name: 'Totopos de milho',
				note: 'servidos em tigela ao lado do guacamole, na mesa fotografada',
			},
			{
				name: 'Molhos da casa',
				note: 'tigelas de molho vermelho ao lado dos tacos, nas fotografias',
			},
		],
	},
	{
		title: 'Tacos e burritos',
		items: [
			{
				name: 'Tacos de carne com ananás',
				note: 'tortilha de milho com carne, ananás, cebola roxa e molho vermelho',
			},
			{
				name: 'Burrito',
				note: 'cortado ao meio, com guacamole e totopos ao lado',
			},
			{
				name: 'Quesadilla',
				note: 'tortilha gratinada e cortada em triângulos, nas fotografias',
			},
			{
				name: 'Tostada',
				note: 'base crocante com carne e molhos, também na galeria',
			},
		],
	},
	{
		title: 'Bebidas',
		items: [
			{
				name: 'Margarita',
				note: 'copete com sal e uma rodela de lima seca, nas fotografias',
			},
			{
				name: 'Cerveja',
				note: 'a garrafa Corona Extra aparece na mesa do guacamole',
			},
			{
				name: 'Refrigerantes',
				note: 'na galeria também se vê uma cola e um sumo',
			},
			{
				name: 'Carta e preços',
				note: 'a ficha não publica carta; o que se vê são os pratos das fotografias',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica a La Botana?',
		a: 'Na Av. Duque de Loulé 1E, em Lisboa (1050-085), perto do Marquês de Pombal. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'A ficha de Google não publica nenhum horário: mostra a opção «adicionar horário», o que confirma que ainda não o indicou. Por isso esta página não dá horas. O telefone publicado é a forma de o confirmar antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: `O único contacto que publica a ficha é o telefone ${BUSINESS.phone}. Não há reservas nem encomendas em linha: a casa não tem site próprio nem plataforma associada, e a ficha convida a «adicionar site».`,
	},
	{
		q: 'Que comida se serve?',
		a: 'Cozinha mexicana, segundo a categoria da ficha. As fotografias do perfil mostram guacamole servido no molcajete com jalapeño, tacos de carne com ananás e cebola roxa, burrito com totopos, quesadilla, tostada, nachos gratinados e margaritas.',
	},
	{
		q: 'Tem site próprio ou carta online?',
		a: 'Não. A ficha de Google oferece a opção de acrescentar um site e outra de acrescentar horário, o que confirma que não existe nenhum dos dois publicado. Tão-pouco há carta online: o que se conhece são os pratos que a casa publica nas suas fotografias.',
	},
	{
		q: 'Como é o espaço por dentro?',
		a: 'As fotografias mostram uma sala em dois pisos, com mezanino de grade preta, lâmpadas de vime, plantas suspensas e chão de madeira. No bar há um mural de cores vivas com uma figura pré-hispânica e um dragão, e noutra parede uma caveira do Dia dos Mortos com flores de cempasúchil. As mesas são de mármore e há um banco corrido de veludo verde.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,7 sobre 5 com 201 críticas no Google, com base na ficha consultada.',
	},
];
