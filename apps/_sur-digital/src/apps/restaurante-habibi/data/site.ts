/**
 * Dados do Restaurante Habibi — R. Cavaleiro de Oliveira, 39D
 * (1170-088 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Restaurante Habibi, 38.7324005,-9.132439,
 *   feature 0xd19333d6e777d23:0x826f3a728c3f3147 (morada, categorias, horário,
 *   nota, críticas, telefone e descrição do próprio espaço).
 * - Críticas publicadas na mesma ficha.
 * - Carta e preços do menu de entrega da casa no Uber Eats e no Bolt Food, que
 *   servem da mesma morada: https://www.ubereats.com/pt/store/restaurante-habibi-syrian-cuisine/B0XGKKgKS7qXe2gDZanFVw
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha de Google não publica carta nem preços. A
 * carta que aparece aqui é a do menu de entrega da própria casa, com os preços
 * desse menu; a sala pode praticar outros valores e a oferta muda. Nada de
 * pratos, horários ou serviços que não estejam publicados.
 */

export const BUSINESS = {
	name: 'Restaurante Habibi',
	shortName: 'Habibi',
	mark: 'H',
	street: 'R. Cavaleiro de Oliveira, 39D',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1170-088',
	country: 'PT',
	phone: '21 813 1655',
	phoneHref: 'tel:+351218131655',
	rating: 4.9,
	reviewsCount: 1586,
	siteUrl: 'https://www.sur-digital.com/restaurante-habibi',
	geo: { lat: 38.7324005, lng: -9.132439 },
	featureId: '0xd19333d6e777d23:0x826f3a728c3f3147',
	placeId: 'ChIJI313bj0zGQ0RRzE_jHI6b4I',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante sírio · shawarma halal',
	/** Descrição que o próprio espaço publica na ficha, em português. */
	ownDescription: 'Comida de Médio Oriente & Shawarma (Halal)',
	tagline: 'Cozinha síria e shawarma halal, em Lisboa',
	description:
		'Restaurante Habibi, cozinha síria e shawarma halal na Rua Cavaleiro de Oliveira, 39D, em Lisboa. Aberto todos os dias das 12:00 às 22:30, exceto à segunda. 4,9 sobre 5 no Google com 1.586 críticas.',
	hasPublicPhone: true,
	/** A ficha não indica site próprio; a casa trabalha com telefone e entregas. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Habibi/@38.7324005,-9.132439,17z/data=!3m1!4b1!4m6!3m5!1s0xd19333d6e777d23:0x826f3a728c3f3147!8m2!3d38.7324005!4d-9.132439!16s%2Fg%2F11vkmb0n9g',
	cid: 'https://www.google.com/maps?cid=9398795210999148871',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7324005%2C-9.132439',
	embed: 'https://maps.google.com/maps?q=38.7324005,-9.132439&z=17&hl=pt-PT&output=embed',
	/** Menu de entrega da própria casa, na mesma morada. */
	ubereats:
		'https://www.ubereats.com/pt/store/restaurante-habibi-syrian-cuisine/B0XGKKgKS7qXe2gDZanFVw',
	bolt: 'https://food.bolt.eu/en/386-lisbon/p/78934-restaurante-habibi-syrian-cuisine/',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: 'Encerrado', closed: true },
	{ day: 'Terça-feira', value: '12:00–22:30' },
	{ day: 'Quarta-feira', value: '12:00–22:30' },
	{ day: 'Quinta-feira', value: '12:00–22:30' },
	{ day: 'Sexta-feira', value: '12:00–22:30' },
	{ day: 'Sábado', value: '12:00–22:30' },
	{ day: 'Domingo', value: '12:00–22:30' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Restaurante com bons preços, comida deliciosa e preparada na hora.',
	},
	{
		rating: 5,
		text: 'Opções de menu variadas e com ótimo preço.',
	},
	{
		rating: 5,
		text: 'Têm menus de entradas e prato bons para quem quer experimentar variadas coisas.',
	},
];

/** O que a ficha assinala e o que a casa anuncia. */
export const SERVICOS = [
	'Cozinha síria',
	'Shawarma halal',
	'Falafel',
	'Vegetariano',
	'Brunch',
	'Menu de almoço',
	'Entrega em casa',
];

/**
 * Carta do menu de entrega da casa (Uber Eats e Bolt Food), com os preços
 * publicados nesse menu. A sala pode ter outros valores.
 */
export const MENU = [
	{
		title: 'Menus completos',
		items: [
			{
				name: 'Menu Shawarma Arabi',
				price: '16,00 €',
				note: 'sanduíche de shawarma com batatas, molho de alho, pickles e pão muhammara tostado na grelha',
			},
			{
				name: 'Menu Falafel',
				price: '17,00 €',
				note: 'seis falafels, molho de iogurte com tahini e sumagre, fatoush, hommus e pão sírio',
			},
			{
				name: 'Menu Mujadara',
				price: '17,00 €',
				note: 'mujadara de burgul e lentilhas com cebola frita, laben bi-khiar, fatoush, baba ghanoush e pão sírio',
			},
			{
				name: 'Menu Moussaka',
				price: '17,00 €',
				note: 'moussaka de beringela, tomate, cebola e pimento no forno, com hommus, fatoush e arroz com aletria',
			},
			{
				name: 'Menu Dawoud Basha',
				price: '19,00 €',
				note: 'carne picada no forno com tomate e cebola, arroz branco com aletria, mutabal, tabbouleh e pão sírio',
			},
			{
				name: 'Menu Kibbeh',
				price: '19,00 €',
				note: 'kebbeh frito, sopa de lentilhas, tabbouleh, hommus e pão sírio',
			},
			{
				name: 'Menu Kabsah de frango',
				price: '20,00 €',
				note: 'kabsah de arroz fumado com pimento, passas e fruta seca, dois espetos de frango, baba ghanoush e fatoush',
			},
			{
				name: 'Menu Kabsah de borrego',
				price: '20,00 €',
				note: 'kabsah, salsa hamra, carne de borrego com temperos árabes, hommus, fatoush e pão sírio',
			},
		],
	},
	{
		title: 'Sanduíches',
		items: [
			{
				name: 'Shawarma',
				price: '8,00 €',
				note: 'frango de shawarma com molho de alho e pickles no pão sírio',
			},
			{
				name: 'Falafel',
				price: '8,00 €',
				note: 'falafel, hommus, salada, pickles e molho de tahini',
			},
			{
				name: 'Shish Tawook',
				price: '9,00 €',
				note: 'cubos de frango grelhado com molho de alho, pickles, tomate e alface',
			},
			{
				name: 'Kofta',
				price: '9,50 €',
				note: 'kofta com tomate, cebola, salsa e hommus',
			},
			{
				name: 'Zinger',
				price: '9,00 €',
				note: 'frango frito picante com coleslaw, molho cocktail, queijo e alface',
			},
			{
				name: 'Crispy',
				price: '9,00 €',
				note: 'filete de frango frito com coleslaw, molho cocktail e pickles',
			},
		],
	},
	{
		title: 'Para partilhar',
		items: [
			{
				name: 'Hommus',
				price: '8,50 €',
				note: 'grão-de-bico com tahini, servido com pão sírio',
			},
			{
				name: 'Baba Ghanoush',
				price: '8,50 €',
				note: 'beringela fumada com molho de romã, cebola, tomate, salsa e nozes',
			},
			{
				name: 'Mutabal',
				price: '8,50 €',
				note: 'beringela fumada com iogurte, tahini, alho e azeite',
			},
			{
				name: 'Muhammara',
				price: '8,50 €',
				note: 'pimento assado, tomate, cebola e alho com nozes, molho de romã e azeite',
			},
			{
				name: 'Labneh',
				price: '8,50 €',
				note: 'iogurte escorrido com hortelã seca e azeite',
			},
			{
				name: 'Yalanji',
				price: '8,50 €',
				note: 'cinco folhas de videira recheadas com arroz e legumes, em molho de romã',
			},
			{
				name: 'Batata harra',
				price: '8,50 €',
				note: 'batata frita em cubos com alho, tomate e azeite',
			},
			{
				name: 'Ful mudammas',
				price: '9,50 €',
				note: 'favas com grão-de-bico, limão, alho e azeite, com pickles e pão sírio',
			},
			{
				name: 'Fatteh de borrego',
				price: '11,50 €',
				note: 'carne estufada com pão estaladiço, molho de hommus e frutos secos tostados em manteiga',
			},
			{
				name: 'Kebbeh',
				price: '4,00 €',
				note: 'bolas de burgul recheadas com carne, cebola e nozes, fritas',
			},
			{
				name: 'Fatayer',
				price: '2,50 €',
				note: 'pastel de espinafres, de carne picada ou de tomate com sésamo negro',
			},
		],
	},
	{
		title: 'Saladas',
		items: [
			{
				name: 'Fatoush',
				price: '7,50 €',
				note: 'tomate, pepino, alface e cebola com vinagre, azeite, alho e hortelã, e pão frito por cima',
			},
			{
				name: 'Tabbouleh',
				price: '7,50 €',
				note: 'salsa picada, burgul e tomate com limão e azeite',
			},
		],
	},
	{
		title: 'Doces',
		items: [
			{
				name: 'Baklava',
				price: '5,00 €',
				note: 'dois pastéis de filo com pistácio',
			},
			{
				name: 'Warbat com creme',
				price: '5,00 €',
				note: 'triângulo de massa folhada tostado em manteiga, com queijo cremoso e pistácio',
			},
			{
				name: 'Halawet al-jbn',
				price: '5,00 €',
				note: 'dois rolos de sêmola e queijo com creme e pistácio',
			},
		],
	},
	{
		title: 'Bebidas',
		items: [
			{
				name: 'Ayran',
				price: '3,00 €',
				note: 'bebida de iogurte, ligeiramente salgada',
			},
			{
				name: 'Limonada',
				price: '3,00 €',
				note: 'limão espremido na hora, pouco doce',
			},
			{
				name: 'Sumo de tamarindo',
				price: '3,00 €',
				note: 'doce e ácido, para acompanhar a refeição',
			},
			{
				name: 'Água',
				price: '1,50 €',
				note: 'garrafa de água',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Restaurante Habibi?',
		a: 'Na Rua Cavaleiro de Oliveira, 39D, em Lisboa (1170-088). O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre todos os dias ao meio-dia e fecha às 22:30, exceto à segunda-feira, que está encerrado. É o horário que publica a ficha de Google; convém confirmá-lo antes de ir.',
	},
	{
		q: 'A comida é halal?',
		a: 'Sim. A ficha classifica a casa como restaurante halal e a descrição do próprio espaço apresenta «comida de Médio Oriente e shawarma (halal)». A especialidade é o shawarma sírio.',
	},
	{
		q: 'Há opções vegetarianas?',
		a: 'Sim, e são muitas: falafel, hommus, mutabal, baba ghanoush, muhammara, labneh, yalanji, ful mudammas, fatoush, tabbouleh, mujadara e moussaka. A Google chega a classificar a casa também como restaurante vegetariano.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'No menu de entrega da casa, as sanduíches vão dos 8,00 aos 9,50 euros, as entradas para partilhar dos 4,00 aos 11,50, as saladas são 7,50 e os menus completos vão dos 16,00 aos 20,00 euros. São os preços desse menu: na sala podem ser outros.',
	},
	{
		q: 'É preciso reservar?',
		a: 'A ficha de Google não tem reservas online. O caminho é ligar para o 21 813 1655. Para comer em casa, a casa tem menu de entrega no Uber Eats e no Bolt Food.',
	},
	{
		q: 'Serve pequeno-almoço ou brunch?',
		a: 'A Google assinala a casa com a etiqueta Brunch, mas o horário publicado começa ao meio-dia. Ao meio-dia já se serve a carta completa, com hommus, fatteh, falafel e shawarma.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,9 sobre 5 com 1.586 críticas no Google. As críticas destacadas falam de comida preparada na hora, bons preços e menus variados.',
	},
];
