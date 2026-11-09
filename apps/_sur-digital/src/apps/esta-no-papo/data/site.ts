/**
 * Dados da Está No Papo — Rua de São Miguel, 25
 * (1100-542 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Está No Papo, 38.7109465,-9.1293013,
 *   feature 0xd19310041dfad15:0xb4a68d11c4fc2ef2 (morada, categorias, horário,
 *   nota, críticas, telefone e acessibilidade).
 * - Ardósias à porta do estabelecimento, visíveis na fotografia da fachada do
 *   perfil de Google Maps: a lista de peixe, marisco e carne da casa e a
 *   mensagem «food made with heart & service with smile».
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a casa não publica preços — nem na ficha de Google
 * nem nas ardósias da rua —, por isso a carta indica os pratos e não os valores.
 * A descrição dos pratos segue a receita tradicional que consta nas ardósias.
 */

export const BUSINESS = {
	name: 'Está No Papo',
	shortName: 'Está No Papo',
	mark: 'P',
	street: 'Rua de São Miguel, 25',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-542',
	country: 'PT',
	phone: '934 111 869',
	phoneHref: 'tel:+351934111869',
	rating: 4.4,
	reviewsCount: 492,
	siteUrl: 'https://www.sur-digital.com/esta-no-papo',
	geo: { lat: 38.7109465, lng: -9.1293013 },
	featureId: '0xd19310041dfad15:0xb4a68d11c4fc2ef2',
	placeId: 'ChIJFa3fQQAxGQ0R8i78xBGNprQ',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante de cozinha tradicional portuguesa',
	/** O que está escrito à mão na porta do estabelecimento. */
	ownDescription: 'Food made with heart & service with smile',
	tagline: 'Tasca de bairro em Alfama, Lisboa',
	description:
		'Está No Papo, tasca de cozinha portuguesa na Rua de São Miguel, 25, em Alfama, Lisboa. Peixe grelhado, arrozes de marisco e carne na brasa, todos os dias das 12:30 às 23:30. 4,4 sobre 5 no Google com 492 críticas.',
	hasPublicPhone: true,
	/** A ficha de Google não indica site nem carta em linha. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Est%C3%A1+No+Papo/@38.7109465,-9.1293013,17z/data=!3m1!4b1!4m6!3m5!1s0xd19310041dfad15:0xb4a68d11c4fc2ef2!8m2!3d38.7109465!4d-9.1293013!16s%2Fg%2F1tfsp7s6',
	cid: 'https://www.google.com/maps?cid=13017246880419819250',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7109465%2C-9.1293013',
	embed: 'https://maps.google.com/maps?q=38.7109465,-9.1293013&z=17&hl=pt-PT&output=embed',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '12:30–23:30' },
	{ day: 'Terça-feira', value: '12:30–23:30' },
	{ day: 'Quarta-feira', value: '12:30–23:30' },
	{ day: 'Quinta-feira', value: '12:30–23:30' },
	{ day: 'Sexta-feira', value: '12:30–23:30' },
	{ day: 'Sábado', value: '12:30–23:30' },
	{ day: 'Domingo', value: '12:30–23:00' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Preço acessível dos hambúrgueres (menu com batatas e bebida) e boa sangria.',
	},
	{
		rating: 5,
		text: 'Tanto no restaurante como na entrega em casa, a comida é sempre impecável.',
	},
	{
		rating: 5,
		text: 'Pratos de muita qualidade, muito bons profissionais, o espaço simpático.',
	},
];

/** O que se vê na casa e nas ardósias da porta. */
export const SERVICOS = [
	'Cozinha portuguesa',
	'Peixe grelhado',
	'Arrozes de marisco',
	'Carne na brasa',
	'Mesas na rua',
	'Preços acessíveis',
];

/**
 * Pratos que constam nas ardósias à porta: peixe, marisco, arrozes e carne.
 * A casa não publica preços, por isso a carta não os mostra.
 */
export const MENU = [
	{
		title: 'Para começar',
		items: [
			{
				name: 'Caldo verde',
				note: 'couve, batata e chouriço',
			},
			{
				name: 'Rissois de camarão',
				note: 'fritos, a sair da cozinha',
			},
			{
				name: 'Salsichas grelhadas',
				note: 'na brasa, para partilhar',
			},
			{
				name: 'Gambas à lagareiro',
				note: 'alho, azeite e batata a murro',
			},
		],
	},
	{
		title: 'Do mar',
		items: [
			{
				name: 'Bacalhau à Lagareiro',
				note: 'grelhado, com batata a murro e azeite',
			},
			{
				name: 'Bacalhau à Brás',
				note: 'desfiado, com batata palha, ovo e azeitonas',
			},
			{
				name: 'Bacalhau com natas',
				note: 'gratinado no forno',
			},
			{
				name: 'Polvo à Lagareiro',
				note: 'grelhado, com batata a murro',
			},
			{
				name: 'Sardinhas grelhadas',
				note: 'na brasa, com pimento e salada',
			},
			{
				name: 'Robalo grelhado',
				note: 'inteiro, com batata e legumes',
			},
			{
				name: 'Dourada grelhada',
				note: 'inteira, com batata e legumes',
			},
			{
				name: 'Salmão grelhado',
				note: 'com acompanhamento do dia',
			},
			{
				name: 'Bife de atum grelhado',
				note: 'com batata e salada',
			},
		],
	},
	{
		title: 'Arrozes',
		items: [
			{
				name: 'Arroz de marisco',
				note: 'com camarão, amêijoas e mexilhão',
			},
			{
				name: 'Arroz de polvo',
				note: 'cozinhado no tacho',
			},
			{
				name: 'Arroz de camarão',
				note: 'com coentros',
			},
			{
				name: 'Arroz de lulas com camarão',
				note: 'com coentros',
			},
		],
	},
	{
		title: 'Da brasa',
		items: [
			{
				name: 'Bife à casa',
				note: 'com ovo, batata frita, arroz e salada',
			},
			{
				name: 'Bitoque',
				note: 'bife com ovo, batata e arroz',
			},
			{
				name: 'Frango à piri-piri',
				note: 'grelhado, com batata e salada',
			},
			{
				name: 'Secretos de porco',
				note: 'grelhados, com acompanhamento',
			},
			{
				name: 'Picanha grelhada',
				note: 'na brasa',
			},
			{
				name: 'Costeleta de novilho grelhada',
				note: 'na brasa',
			},
			{
				name: 'Carne de porco à alentejana',
				note: 'com amêijoas',
			},
			{
				name: 'Grelhado misto',
				note: 'para provar de tudo',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica a Está No Papo?',
		a: 'Na Rua de São Miguel, 25, em Alfama, Lisboa (1100-542). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre todos os dias às 12:30. De segunda a sábado fecha às 23:30 e ao domingo às 23:00. É o horário da ficha de Google; convém confirmá-lo antes de ir.',
	},
	{
		q: 'É preciso reservar?',
		a: 'A casa não publica reservas em linha e a sala é pequena, com poucas mesas. Para grupos, o mais seguro é ligar para o 934 111 869 antes de ir.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'A casa não publica preços — não há valores nem na ficha de Google nem nas ardósias da rua. As críticas falam de «preço acessível», mas o valor do dia confirma-se ao telefone ou à porta.',
	},
	{
		q: 'O que se come?',
		a: 'Peixe grelhado (bacalhau, sardinhas, robalo, dourada, salmão, atum), arrozes de marisco, polvo e camarão, e carne na brasa: bife à casa, bitoque, frango à piri-piri, secretos, picanha e porco à alentejana.',
	},
	{
		q: 'Fazem entrega em casa?',
		a: 'Sim, segundo as críticas: uma delas elogia a comida «tanto no restaurante como na entrega em casa». Os canais de entrega não constam da ficha, por isso o melhor é ligar e combinar.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google indica que não tem estacionamento acessível nem anel de indução magnética. Não confirma lugares para pessoas em cadeiras de rodas, e a sala é pequena; se precisares de garantias, liga antes.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,4 sobre 5 com 492 críticas no Google. As críticas destacadas falam da qualidade dos pratos, do atendimento, do espaço e do preço.',
	},
];
