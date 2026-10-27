/**
 * Dados de Lahori Dera Tandoori Restaurant Halal — Largo Francisco Sanches 2A
 * (Almada, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Lahori Dera Tandoori Restaurant Halal,
 *   38.6519831,-9.1477682, feature 0xd19350ae5f8280b:0x244e95c4888f6468
 *   (morada, categoria, horário, telefone, nota e críticas).
 * - Código postal 2810-225: Largo Francisco Sanches, Almada, em OpenStreetMap
 *   (a ficha de Google não o publica).
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica site próprio nem carta. A
 * cozinha descreve-se a partir da categoria da ficha e das fotografias do perfil.
 */

export const BUSINESS = {
	name: 'Lahori Dera Tandoori Restaurant Halal',
	shortName: 'Lahori Dera',
	mark: 'LD',
	street: 'Largo Francisco Sanches 2A',
	city: 'Almada',
	region: 'Setúbal',
	regionName: 'Setúbal',
	postalCode: '2810-225',
	country: 'PT',
	phone: '+351 21 403 0626',
	phoneHref: '+351214030626',
	rating: 3.9,
	reviewsCount: 499,
	siteUrl: 'https://lahori-dera-tandoori.vercel.app',
	geo: { lat: 38.6519831, lng: -9.1477682 },
	featureId: '0xd19350ae5f8280b:0x244e95c4888f6468',
	placeId: 'ChIJCyj45Qo1GQ0RaGSPiMSVTiQ',
	/** Categoria com que a Google classifica o espaço. */
	category: 'Restaurante indiano',
	tagline: 'Cozinha indiana e tandoori em Almada',
	description:
		'Lahori Dera Tandoori Restaurant Halal, restaurante indiano no Largo Francisco Sanches 2A, em Almada. Aberto todos os dias das 11:00 às 23:00. 3,9 sobre 5 no Google com 499 críticas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Lahori+Dera+Tandoori+Restaurant+Halal/@38.6519831,-9.1477682,17z/data=!3m1!4b1!4m6!3m5!1s0xd19350ae5f8280b:0x244e95c4888f6468!8m2!3d38.6519831!4d-9.1477682!16s%2Fg%2F11c4b68g5v',
	cid: 'https://www.google.com/maps?cid=2616193104886064232',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6519831%2C-9.1477682',
	embed: 'https://maps.google.com/maps?q=38.6519831,-9.1477682&z=17&hl=pt-PT&output=embed',
};

/**
 * Horário publicado na ficha de Google: todos os dias, das 11:00 às 23:00.
 * A ficha assinala que em feriados o horário pode ser diferente.
 */
export const HOURS = [
	{ day: 'Segunda-feira', value: '11:00–23:00' },
	{ day: 'Terça-feira', value: '11:00–23:00' },
	{ day: 'Quarta-feira', value: '11:00–23:00' },
	{ day: 'Quinta-feira', value: '11:00–23:00' },
	{ day: 'Sexta-feira', value: '11:00–23:00' },
	{ day: 'Sábado', value: '11:00–23:00' },
	{ day: 'Domingo', value: '11:00–23:00' },
];

/**
 * Señas de identidade: a categoria da ficha, o nome da casa (tandoori e halal),
 * o horário e o telefone. A ficha não confirma esplanada, take-away, reservas
 * nem acessibilidade.
 */
export const SERVICOS = [
	'Cozinha indiana',
	'Tandoori',
	'Halal',
	'11:00–23:00 todos os dias',
	'+351 21 403 0626',
	'Laranjeiro · Almada',
];

/**
 * A ficha não publica carta nem preços e o restaurante não tem site próprio.
 * O que segue vem das fotografias do perfil da casa — incluindo duas páginas de
 * carta — e dos letreiros da fachada. Não é uma carta oficial e os preços das
 * fotografias não se dão como atuais.
 */
export const MENU = [
	{
		title: 'Tandoori e grelhados',
		items: [
			{
				name: 'Frango tandoori',
				note: 'no tabuleiro das fotografias, com especiarias e limão',
			},
			{
				name: 'Frango assado',
				note: 'a churrasqueira da casa anuncia «frango assado» na capa da carta',
			},
			{
				name: 'Seekh kebab',
				note: '7,50 € na carta fotografada, como entrada',
			},
			{
				name: 'Tikka de frango',
				note: '7,50 € na mesma carta, em pedaços',
			},
		],
	},
	{
		title: 'Cozinha indiana',
		items: [
			{
				name: 'Dal e caris',
				note: 'tigela de dal com manteiga e gengibre nas fotografias do perfil',
			},
			{
				name: 'Arroz amarelo',
				note: 'servido com legumes, no prato das fotografias',
			},
			{
				name: 'Naan e pão tandoori',
				note: 'cesto de naan nas fotografias; entre 1,00 € e 3,50 € na carta',
			},
			{
				name: 'Samosas e pakoras',
				note: '1,50 € e 4,50 € na carta fotografada',
			},
		],
	},
	{
		title: 'Pizzaria e kebab',
		items: [
			{
				name: 'Doner kebab',
				note: 'anunciado na capa da carta, ao lado da pizzaria e do frango assado',
			},
			{
				name: 'Pizza',
				note: 'a carta luminosa da pizzaria mostra pizzas a 4,50 €',
			},
			{
				name: 'Calzone',
				note: '4,50 € na mesma carta luminosa',
			},
			{
				name: 'Sobremesa khir',
				note: '1,00 € na carta, arroz doce com frutos secos',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Lahori Dera Tandoori Restaurant Halal?',
		a: 'No Largo Francisco Sanches, loja 2A, no Laranjeiro, em Almada (2810-225). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Está aberto todos os dias, das 11:00 às 23:00. A ficha de Google assinala que em feriados o horário pode ser diferente, por isso convém confirmá-lo antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: `O contacto público da ficha é o telefone ${BUSINESS.phone}. A capa da carta mostra ainda +351 933 086 965 e +351 920 593 719. Não há reservas nem encomendas em linha: o restaurante não tem site próprio nem plataforma de reservas associada.`,
	},
	{
		q: 'A comida é halal?',
		a: 'O nome da casa inclui «Halal» e a capa da carta leva o selo «100% HALAL». A ficha de Google classifica o espaço como restaurante indiano e não detalha certificações, por isso convém confirmar no local.',
	},
	{
		q: 'Que comida se serve?',
		a: 'Cozinha indiana e tandoori, com frango tandoori, frango assado, seekh kebab, dal, arroz, naan, samosas e pakoras. A casa anuncia também doner kebab, pizzaria e calzone. A ficha não publica a carta completa.',
	},
	{
		q: 'Tem site próprio ou carta online?',
		a: 'Não. A ficha de Google oferece a opção de acrescentar um site, o que confirma que não existe nenhum publicado. Na galeria de fotografias aparecem páginas da carta e a capa, mas não estão datadas e os preços que mostram podem já não ser os atuais.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 3,9 sobre 5 com 499 críticas no Google, com base na ficha consultada.',
	},
];
