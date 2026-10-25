/**
 * Dados do Restaurant ODAAN (Nepalese & Indian) — Beco dos Cavaleiros, 7,
 * loja 11 (1100-131 Lisboa, Portugal), na Mouraria.
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Restaurant ODAAN (Nepalese & Indian),
 *   38.7166648,-9.134534, feature 0xd193358d8f45b45:0x100a3f4f1553a14e
 *   (morada, categorias, horário, nota, críticas, telefone e acessibilidade).
 * - Críticas publicadas na mesma ficha.
 * - Ficha do restaurante no Tripadvisor (categorias, dietas e faixa de preço).
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a casa não publica carta com preços em linha nem
 * tem site próprio, por isso a secção da carta mostra só os pratos que aparecem
 * nas fotografias do perfil e que as críticas citam, sem valores. A ficha de
 * Google assinala apenas dois atributos de acessibilidade (sem entrada e sem
 * estacionamento acessíveis), e nada mais é afirmado sobre o espaço.
 */

export const BUSINESS = {
	name: 'ODAAN',
	legalName: 'Restaurant ODAAN (Nepalese & Indian)',
	shortName: 'ODAAN',
	mark: 'OD',
	street: 'Beco dos Cavaleiros, 7 · Loja 11',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-131',
	country: 'PT',
	phone: '920 102 037',
	phoneHref: 'tel:+351920102037',
	rating: 4.8,
	reviewsCount: 2917,
	siteUrl: 'https://restaurant-odaan.vercel.app',
	geo: { lat: 38.7166648, lng: -9.134534 },
	featureId: '0xd193358d8f45b45:0x100a3f4f1553a14e',
	placeId: 'ChIJRVv02FgzGQ0RTqFTFU8_ChA',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante indiano e nepalês',
	tagline: 'Cozinha nepalesa e indiana na Mouraria, em Lisboa',
	description:
		'Restaurant ODAAN, cozinha nepalesa e indiana no Beco dos Cavaleiros, 7, loja 11, na Mouraria, Lisboa. Momo, thali, panipuri e caris, de sexta a terça, das 11:00 às 23:00.',
	hasPublicPhone: true,
	/** A ficha não indica site nem carta em linha. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+ODAAN+(Nepalese+%26+Indian+)/@38.7166648,-9.134534,17z/data=!3m1!4b1!4m6!3m5!1s0xd193358d8f45b45:0x100a3f4f1553a14e!8m2!3d38.7166648!4d-9.134534!16s%2Fg%2F11rqsy_hr_',
	cid: 'https://www.google.com/maps?cid=1155805863266722126',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7166648%2C-9.134534',
	embed: 'https://maps.google.com/maps?q=38.7166648,-9.134534&z=17&hl=pt-PT&output=embed',
	/** Ficha da casa no Tripadvisor, onde publica categorias, dietas e preço. */
	tripadvisor:
		'https://www.tripadvisor.pt/Restaurant_Review-g189158-d23976748-Reviews-Restaurant_Odaan-Lisbon_Lisbon_District_Central_Portugal.html',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '11:00–23:00' },
	{ day: 'Terça-feira', value: '11:00–23:00' },
	{ day: 'Quarta-feira', value: 'Fechado', closed: true },
	{ day: 'Quinta-feira', value: 'Fechado', closed: true },
	{ day: 'Sexta-feira', value: '11:00–23:00' },
	{ day: 'Sábado', value: '11:00–23:00' },
	{ day: 'Domingo', value: '11:00–23:00' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Comida deliciosa, preços ótimos e atendimento perfeito :)',
	},
	{
		rating: 5,
		text: 'Um ótimo restaurante de cozinha nepalesa.',
	},
	{
		rating: 4,
		text: 'Recheio muito bom, molho muito bom mas a massa dos momes não era incrivel.',
	},
];

/** Categorias da ficha e do Tripadvisor, e o que as críticas destacam. */
export const SERVICOS = [
	'Cozinha nepalesa',
	'Cozinha indiana',
	'Momo',
	'Thali',
	'Opções vegetarianas',
	'Opções veganas',
];

/**
 * Pratos que aparecem nas fotografias do perfil de Google Maps e que as
 * críticas citam. A casa não publica carta com preços, por isso não se mostra
 * nenhum valor: um preço inventado seria pior do que a ausência de preço.
 */
export const MENU = [
	{
		title: 'Para começar',
		items: [
			{
				name: 'Momo ao vapor',
				note: 'raviolis nepaleses cozidos a vapor, servidos com o jhol (caldo) à parte — a casa serve-os numa travessa redonda',
			},
			{
				name: 'Panipuri',
				note: 'bolinhas de massa crocante recheadas de batata e servidas com água de tamarindo e especiarias',
			},
		],
	},
	{
		title: 'Thali nepalês',
		items: [
			{
				name: 'Thali da casa',
				note: 'tabuleiro de metal com arroz basmati, caril de carne, dal, legumes, espinafres, papad, salada e chutney',
			},
			{
				name: 'Thali de frango',
				note: 'a mesma composição, com frango grelhado e caril de frango',
			},
		],
	},
	{
		title: 'Caris e pães',
		items: [
			{
				name: 'Butter chicken',
				note: 'frango em molho de tomate e manteiga, com um fio de natas por cima',
			},
			{
				name: 'Caril de frango',
				note: 'servido em tacho de metal, para comer com arroz ou pão',
			},
			{
				name: 'Naan de alho',
				note: 'pão do tandoor com alho e coentros, servido na cestinha',
			},
			{
				name: 'Naan de queijo',
				note: 'pão do tandoor recheado de queijo',
			},
		],
	},
	{
		title: 'Arroz e acompanhamentos',
		items: [
			{
				name: 'Arroz basmati',
				note: 'arroz branco solto, para acompanhar os caris',
			},
			{
				name: 'Arroz frito',
				note: 'arroz salteado com legumes, ovo e cebola',
			},
			{
				name: 'Dal',
				note: 'sopa de lentilhas amarelas com especiarias, servida no thali',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Restaurant ODAAN?',
		a: 'No Beco dos Cavaleiros, 7, loja 11, em Lisboa (1100-131), na Mouraria, a poucos minutos a pé do Martim Moniz e do Intendente. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre de sexta-feira a terça-feira, das 11:00 às 23:00, e fecha à quarta e à quinta. É o horário que a casa publica na ficha de Google; convém confirmá-lo antes de ir, sobretudo em feriados.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'Cozinha nepalesa e indiana. A Google classifica a casa como restaurante indiano e nepalês e o Tripadvisor inclui-a nas duas cozinhas. Nas fotografias do perfil aparecem momo, thali, panipuri, butter chicken, naan e arroz frito.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'A casa não publica a carta com preços em linha, por isso esta página não cita valores. O Tripadvisor classifica o restaurante na faixa de preço mais baixa (€) e as críticas do Google falam de «preços ótimos».',
	},
	{
		q: 'Como se reserva?',
		a: 'A casa não tem página de reservas online. O contacto publicado na ficha de Google é o telefone 920 102 037, e a morada é a do Beco dos Cavaleiros, 7, loja 11.',
	},
	{
		q: 'Há opções vegetarianas, veganas e sem glúten?',
		a: 'O Tripadvisor assinala a casa como adequada a vegetarianos e com opções veganas e sem glúten. Nos thali e nos caris há pratos de legumes, dal e arroz; convém confirmar com a casa cada prato antes de pedir.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google indica que a casa não tem entrada acessível a pessoas em cadeiras de rodas nem estacionamento acessível. Não publica informação sobre a sala ou o WC, por isso não afirmamos nada sobre isso.',
	},
	{
		q: 'Serve para grupos?',
		a: 'A sala tem mesas corridas e as fotografias da ficha mostram grupos a partilhar travessas e thali. Sendo um espaço pequeno na Mouraria, convém ligar antes de ir com um grupo grande.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,8 sobre 5 com 2.917 críticas no Google. No Tripadvisor tem 4,9 sobre 5 com mais de 770 avaliações. As críticas destacadas falam da comida, do atendimento e dos preços.',
	},
];
