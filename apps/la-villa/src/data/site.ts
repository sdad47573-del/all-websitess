/**
 * Dados do La Villa — Campo dos Mártires da Pátria, 40-41
 * (1150-317 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: La Villa, 38.7214133,-9.1402572, feature
 *   0xd19333cf7d9eac1:0xfa8075554fc1e67f (morada, categoria, horário, nota,
 *   críticas, telefone, acessibilidade, etiqueta «Aceita cães» e descrição do
 *   próprio espaço).
 * - Página de reservas da casa (DISH/eatbu): dados de contacto, horário,
 *   serviços, formas de pagamento e identificação fiscal do titular.
 * - Reportagem da NiT sobre a abertura do restaurante: pratos e composição da
 *   carta (entradas, pizzas, pastas, saladas e bebidas).
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha de Google não publica carta nem preços e a
 * casa não tem preços publicados em página própria. Por isso a carta aparece
 * aqui sem valores — os pratos são os que a casa e a imprensa descrevem, e o
 * preço médio é o que a ficha técnica da NiT indica. Nada de valores inventados.
 */

export const BUSINESS = {
	name: 'La Villa',
	shortName: 'La Villa',
	mark: 'LV',
	street: 'Campo dos Mártires da Pátria, 40-41',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1150-317',
	country: 'PT',
	phone: '21 050 8171',
	phoneHref: 'tel:+351210508171',
	email: 'lavillalisboa@gmail.com',
	rating: 4.6,
	reviewsCount: 2919,
	siteUrl: 'https://la-villa.vercel.app',
	geo: { lat: 38.7214133, lng: -9.1402572 },
	featureId: '0xd19333cf7d9eac1:0xfa8075554fc1e67f',
	placeId: 'ChIJwerZ9zwzGQ0Rf-bBT1V1gPo',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante italiano',
	/** Descrição que o próprio espaço publica na ficha, em resumo. */
	ownDescription: 'Um espaço acolhedor que combina tradição e modernidade à mesa.',
	tagline: 'Cozinha italiana no meio de um jardim, em Lisboa',
	description:
		'La Villa, restaurante italiano no Campo dos Mártires da Pátria, 40-41, em Lisboa. Pizzas no forno de lenha, massas caseiras e esplanada no jardim, todos os dias das 12:00 às 23:30.',
	hasPublicPhone: true,
	/** A ficha aponta para um site gerado automaticamente, sem carta. */
	hasPublicWebsite: false,
	/** Dados de identificação que a casa publica na sua página de reservas. */
	legal: {
		holder: 'Klodjan Taci',
		nif: '516010042',
	},
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Villa/@38.7214133,-9.1402572,17z/data=!3m1!4b1!4m6!3m5!1s0xd19333cf7d9eac1:0xfa8075554fc1e67f!8m2!3d38.7214133!4d-9.1402572!16s%2Fg%2F11q8tqmlkb',
	cid: 'https://www.google.com/maps?cid=18050556315771725439',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7214133%2C-9.1402572',
	embed: 'https://maps.google.com/maps?q=38.7214133,-9.1402572&z=17&hl=pt-PT&output=embed',
	/** Página da casa na plataforma de reservas que usa desde a abertura. */
	booking: 'https://lavilla-lisboa.eatbu.com/?lang=pt',
	instagram: 'https://www.instagram.com/lavilla.lisboa/',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '12:00–23:30' },
	{ day: 'Terça-feira', value: '12:00–23:30' },
	{ day: 'Quarta-feira', value: '12:00–23:30' },
	{ day: 'Quinta-feira', value: '12:00–23:30' },
	{ day: 'Sexta-feira', value: '12:00–23:30' },
	{ day: 'Sábado', value: '12:00–23:30' },
	{ day: 'Domingo', value: '12:00–23:30' },
];

/** Críticas publicadas na ficha de Google e na página de reservas da casa. */
export const REVIEWS = [
	{
		rating: 4,
		text: 'Excelente restaurante de comida italiana no meio de um jardim.',
	},
	{
		rating: 5,
		text: 'Ótimo ambiente, o salmão e a pasta sem glúten estavam ótimas.',
	},
	{
		rating: 5,
		text: 'A qualidade é sempre a mesma e o serviço é o melhor.',
	},
];

/** O que a ficha assinala e o que a casa anuncia na sua página. */
export const SERVICOS = [
	'Cozinha italiana',
	'Forno de lenha',
	'Massas caseiras',
	'Esplanada no jardim',
	'Aceita cães',
	'Takeaway',
	'Eventos privados',
];

/**
 * Pratos que a casa e a imprensa descrevem desde a abertura.
 * A ficha de Google não publica carta nem preços e a casa não os publica em
 * página própria, por isso aqui não se inventam valores.
 */
export const MENU = [
	{
		title: 'Para começar',
		items: [
			{
				name: 'Focaccia com burrata',
				note: 'focaccia da casa com burrata e enchidos, para abrir a mesa',
			},
			{
				name: 'Carpaccio de carne',
				note: 'com queijo grana panado e rúcula',
			},
			{
				name: 'Bruschetta',
				note: 'pão tostado com azeite e molho de manjericão',
			},
			{
				name: 'Beringela frita',
				note: 'com parmesão, fiambre, mozzarella e molho de tomate',
			},
		],
	},
	{
		title: 'Pizzas do forno de lenha',
		items: [
			{
				name: 'Acciuga',
				note: 'anchovas e cebola',
			},
			{
				name: 'Diavola',
				note: 'mozzarella e salame picante',
			},
			{
				name: 'Atlântida',
				note: 'frutos do mar',
			},
			{
				name: 'Cotto',
				note: 'fiambre e cogumelos',
			},
		],
	},
	{
		title: 'Massas caseiras',
		items: [
			{
				name: 'Linguine com porcini',
				note: 'parmesão, cogumelos porcini, trufa e presunto',
			},
			{
				name: 'Linguine de amêijoas',
				note: 'com casca de limão',
			},
			{
				name: 'Penne com pancetta',
				note: 'tomate e pecorino romano',
			},
			{
				name: 'Massa à bolonhesa',
				note: 'molho de carne, béchamel e parmesão',
			},
		],
	},
	{
		title: 'Saladas',
		items: [
			{
				name: 'Nizza',
				note: 'alface, ovo cozido, pimento, atum, anchovas, azeitonas e cebola roxa',
			},
			{
				name: 'Batata e tomate seco',
				note: 'batata cozida, cebola roxa e tomate seco',
			},
		],
	},
	{
		title: 'Para beber',
		items: [
			{
				name: 'Sangria de prosecco',
				note: 'com frutos vermelhos, ao copo ou em jarro de 1,5 litros',
			},
			{
				name: 'Lambrusco',
				note: 'tinto ou branco, ao copo',
			},
			{
				name: 'Cocktails',
				note: 'caipirinha, moscow mule, daiquiri, pina colada, margarita e aperol',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o La Villa?',
		a: 'No Campo dos Mártires da Pátria, 40-41, em Lisboa (1150-317), dentro do jardim e rodeado de árvores. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre todos os dias ao meio-dia e fecha às 23:30, sem dia de fecho. É o horário que publica a ficha de Google; convém confirmá-lo antes de ir.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'Cozinha italiana: pizzas no forno de lenha, massas caseiras, risotos, saladas e entradas para partilhar. A Google classifica a casa como restaurante italiano.',
	},
	{
		q: 'Tem esplanada?',
		a: 'Sim. A casa tem cerca de 200 lugares entre a sala e a esplanada, que fica entre as árvores do jardim do Campo dos Mártires da Pátria.',
	},
	{
		q: 'É preciso reservar?',
		a: 'Não é obrigatório, mas ajuda: a casa tem cerca de 200 lugares e enche ao jantar. Reserva-se pelo 21 050 8171 ou por e-mail para lavillalisboa@gmail.com.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'O preço médio indicado para a casa é de 10 a 20 euros por pessoa. A casa não publica a carta com preços na ficha de Google, por isso esta página não fixa valores: confirma na sala ou ao telefone.',
	},
	{
		q: 'Pode-se ir com cães?',
		a: 'Sim. A ficha de Google assinala a casa com a etiqueta «Aceita cães», e há esplanada no jardim.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha indica estacionamento, entrada, lugares e WC acessíveis a pessoas em cadeiras de rodas. O único ponto negativo é o anel de indução magnética, que a casa não tem.',
	},
	{
		q: 'Fazem takeaway e eventos?',
		a: 'Sim. A casa anuncia takeaway, eventos privados e festas de casamento, além de wi-fi gratuito e de uma zona para fumadores.',
	},
];
