/**
 * Dados do Yak & Yeti (Lisbon) — Calçada de Santo André, 17
 * (1100-466 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Yak & Yeti (Lisbon), 38.7148918,-9.1315854,
 *   feature 0xd193389cb80abb3:0xe44f7441aecfc7e3 (morada, categoria, horário,
 *   nota, críticas, telefone, acessibilidade e descrição do próprio espaço).
 * - Críticas publicadas na mesma ficha.
 * - Carta com preços que a casa publica (PDF «Yak Yeti Menu», com a morada e o
 *   telefone da casa) e página da casa no TheFork, onde indica o preço médio.
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: os pratos e os valores são os da carta publicada
 * pela casa; quando um prato não tem preço na carta, aparece sem valor. A ficha
 * de Google só assinala um atributo de acessibilidade (não tem estacionamento
 * acessível), por isso nada mais é afirmado sobre o espaço.
 */

export const BUSINESS = {
	name: 'Yak & Yeti',
	legalName: 'Yak & Yeti (Lisbon)',
	shortName: 'Yak & Yeti',
	mark: 'Y&Y',
	street: 'Calçada de Santo André, 17',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-466',
	country: 'PT',
	phone: '21 822 0350',
	phoneHref: 'tel:+351218220350',
	rating: 4.7,
	reviewsCount: 2619,
	siteUrl: 'https://yak-yeti.vercel.app',
	geo: { lat: 38.7148918, lng: -9.1315854 },
	featureId: '0xd193389cb80abb3:0xe44f7441aecfc7e3',
	placeId: 'ChIJs6uAy4kzGQ0R48fPrkF0T-Q',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante nepalês, com cozinha indiana',
	/** Selo que a ficha mostra por baixo do nome. */
	badge: 'Opção acolhedora com pratos nepaleses e indianos',
	/** Descrição que o próprio espaço publica na ficha, em resumo. */
	ownDescription:
		'A cozinha do Nepal é simples e cheia de especiarias: o dal com arroz, o sag de espinafres, o masu em caril e o tarkali de legumes.',
	tagline: 'Cozinha nepalesa e indiana em Lisboa',
	description:
		'Yak & Yeti, restaurante nepalês e indiano na Calçada de Santo André, 17, na Mouraria, Lisboa. MoMo, thali, biryani e caris, todos os dias das 11:00 às 23:00.',
	hasPublicPhone: true,
	/** A ficha aponta para um Linktree com as páginas de reserva e de entrega. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Yak+%26+Yeti+(Lisbon)/@38.7148918,-9.1315854,17z/data=!3m1!4b1!4m6!3m5!1s0xd193389cb80abb3:0xe44f7441aecfc7e3!8m2!3d38.7148918!4d-9.1315854!16s%2Fg%2F11bxg9zv__',
	cid: 'https://www.google.com/maps?cid=16451495789262260195',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7148918%2C-9.1315854',
	embed: 'https://maps.google.com/maps?q=38.7148918,-9.1315854&z=17&hl=pt-PT&output=embed',
	/** Página da casa no TheFork: reservas e preço médio publicado. */
	thefork: 'https://www.thefork.pt/restaurante/yak-yeti-lisbon-r467591',
	/** Carta e entrega da própria casa. */
	ubereats: 'https://www.ubereats.com/pt/store/yak-%26-yeti-lisbon/xe7EG906Rm2c0N_P4oMigg',
	instagram: 'https://www.instagram.com/yakandyeti_lisbon/',
	/** O endereço que a ficha publica como site: um Linktree com as ligações da casa. */
	linktree: 'https://linktr.ee/yakandyetirestaurants',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '11:00–23:00' },
	{ day: 'Terça-feira', value: '11:00–23:00' },
	{ day: 'Quarta-feira', value: '11:00–23:00' },
	{ day: 'Quinta-feira', value: '11:00–23:00' },
	{ day: 'Sexta-feira', value: '11:00–23:00' },
	{ day: 'Sábado', value: '11:00–23:00' },
	{ day: 'Domingo', value: '11:00–23:00' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'No geral, muito boa relação qualidade/preço.',
	},
	{
		rating: 5,
		text: 'Comida deliciosa, relativamente acessível e ambiente acolhedor.',
	},
	{
		rating: 5,
		text: 'Pratos saborosos e atendimento excelente com preços razoáveis.',
	},
];

/** Categorias da ficha e o que a casa anuncia. */
export const SERVICOS = [
	'Cozinha nepalesa',
	'Cozinha indiana',
	'MoMo',
	'Thali',
	'Opções vegetarianas',
	'Entrega ao domicílio',
];

/**
 * Carta da casa, com os preços que o próprio restaurante publica no seu menu.
 * Cada valor corresponde a um prato da carta; os que não trazem preço aparecem
 * sem valor em vez de levar um número inventado.
 */
export const MENU = [
	{
		title: 'Entradas nepalesas',
		items: [
			{
				name: 'Samosa vegetariana',
				price: '5,00 €',
				note: 'duas unidades de massa folhada recheada de batata e ervilha',
			},
			{
				name: 'Aaloo dum',
				price: '5,00 €',
				note: 'batata cozida e salteada com especiarias nepalesas',
			},
			{
				name: 'Chana chatpat',
				price: '4,00 €',
				note: 'grão-de-bico temperado com lima, cebola e coentros',
			},
			{
				name: 'Bhujia chatpat',
				price: '4,00 €',
				note: 'mistura crocante de legumes e especiarias',
			},
			{
				name: 'Badam sadeko',
				price: '5,00 €',
				note: 'amêndoas marinadas com cebola, malagueta e limão',
			},
			{
				name: 'Aloo chips',
				price: '5,00 €',
				note: 'batata frita às rodelas, com especiarias',
			},
			{
				name: 'Papad',
				price: '1,00 €',
				note: 'uma folha fina de farinha de lentilha, para abrir a refeição',
			},
		],
	},
	{
		title: 'MoMo, sopas e thukpa',
		items: [
			{
				name: 'Chicken momo',
				price: '7,00 €',
				note: 'raviolis nepaleses de frango cozidos a vapor',
			},
			{
				name: 'Fried momo',
				price: '8,00 €',
				note: 'os mesmos raviolis, fritos, de frango ou vegetarianos',
			},
			{
				name: 'Chilli momo',
				price: '9,00 €',
				note: 'momo salteado com molho de malagueta, de frango ou vegetariano',
			},
			{
				name: 'Chicken thukpa',
				price: '8,00 €',
				note: 'sopa de noodles com frango e legumes',
			},
			{
				name: 'Veg thukpa',
				price: '6,00 €',
				note: 'a mesma sopa de noodles, só com legumes',
			},
			{
				name: 'Mix thukpa',
				price: '9,00 €',
				note: 'sopa de noodles com carne e legumes',
			},
			{
				name: 'Sopa de frango e cogumelos',
				price: '4,00 €',
				note: 'caldo leve com frango desfiado e cogumelos',
			},
			{
				name: 'Daal soup',
				price: '4,00 €',
				note: 'sopa de lentilhas amarelas com cominhos',
			},
		],
	},
	{
		title: 'Thali e especialidades do Nepal',
		items: [
			{
				name: 'Chicken thali set',
				price: '11,00 €',
				note: 'tabuleiro com caril de frango, dal, legumes, arroz e papad',
			},
			{
				name: 'Mutton thali set',
				price: '13,00 €',
				note: 'o mesmo tabuleiro, com caril de borrego',
			},
			{
				name: 'Pork chura',
				price: '12,00 €',
				note: 'porco com especiarias, servido com arroz',
			},
			{
				name: 'Alu phing/sha de frango ou porco',
				price: '13,00 €',
				note: 'batata com noodles de vidro e especiarias',
			},
			{
				name: 'Alu phing/sha de borrego',
				price: '15,00 €',
				note: 'a mesma receita, com borrego',
			},
			{
				name: 'Thentuk de frango ou porco',
				price: '11,00 €',
				note: 'noodles grossos em caldo, prato de conforto do Nepal',
			},
			{
				name: 'Thentuk vegetariano',
				price: '9,00 €',
				note: 'a versão sem carne, com legumes',
			},
			{
				name: 'Pork sukuti frito',
				price: '9,00 €',
				note: 'porco seco e frito, muito aromático',
			},
		],
	},
	{
		title: 'Do tandoor e caris',
		items: [
			{
				name: 'Chicken tandoori',
				price: '15,00 €',
				note: 'frango marinado em iogurte e especiarias, assado no forno de barro',
			},
			{
				name: 'Chicken tikka',
				price: '12,00 €',
				note: 'pedaços de frango marinados e grelhados',
			},
			{
				name: 'Lamb tikka',
				price: '15,00 €',
				note: 'borrego grelhado no tandoor',
			},
			{
				name: 'Sheesh kabaab',
				price: '13,00 €',
				note: 'espetadas de carne picada com ervas',
			},
			{
				name: 'Tandoori mix grill',
				price: '19,00 €',
				note: 'seleção de grelhados do tandoor, para partilhar',
			},
			{
				name: 'Palak paneer',
				price: '8,00 €',
				note: 'queijo fresco em creme de espinafres',
			},
			{
				name: 'Mutter paneer',
				price: '8,00 €',
				note: 'ervilhas e queijo fresco em molho de tomate e especiarias',
			},
			{
				name: 'Chana masala',
				price: '6,00 €',
				note: 'grão-de-bico em molho de tomate, gengibre e especiarias',
			},
			{
				name: 'Aaloo govi',
				price: '6,00 €',
				note: 'batata e couve-flor com cominhos e cúrcuma',
			},
			{
				name: 'Mix vegetables',
				price: '6,00 €',
				note: 'legumes da estação salteados com especiarias',
			},
			{
				name: 'Chicken chilli',
				price: '9,00 €',
				note: 'frango salteado com pimento e malagueta',
			},
			{
				name: 'Onion bhaji',
				price: '4,00 €',
				note: 'cebola em tempura de farinha de grão',
			},
		],
	},
	{
		title: 'Biryani, arroz e pães',
		items: [
			{
				name: 'Chicken biryani',
				price: '11,00 €',
				note: 'arroz basmati com frango, açafrão e especiarias',
			},
			{
				name: 'Lamb biryani',
				price: '14,00 €',
				note: 'o mesmo arroz, com borrego',
			},
			{
				name: 'Prawn biryani',
				price: '15,00 €',
				note: 'arroz basmati com camarão',
			},
			{
				name: 'Mix biryani',
				price: '16,00 €',
				note: 'arroz com carne e marisco, para partilhar',
			},
			{
				name: 'Plain rice',
				price: '3,00 €',
				note: 'arroz basmati branco',
			},
			{
				name: 'Jeera rice',
				price: '4,00 €',
				note: 'arroz basmati com cominhos',
			},
			{
				name: 'Plain naan',
				price: '2,00 €',
				note: 'pão do tandoor',
			},
			{
				name: 'Butter naan',
				price: '2,00 €',
				note: 'pão do tandoor com manteiga',
			},
			{
				name: 'Garlic naan',
				price: '3,00 €',
				note: 'pão do tandoor com alho e coentros',
			},
			{
				name: 'Cheese naan',
				price: '4,00 €',
				note: 'pão recheado de queijo',
			},
			{
				name: 'Cheese garlic naan',
				price: '5,00 €',
				note: 'pão com queijo e alho',
			},
			{
				name: 'Peshwari naan',
				price: '4,00 €',
				note: 'pão doce com coco e amêndoa',
			},
		],
	},
	{
		title: 'Chowmein e wok',
		items: [
			{
				name: 'Chicken chowmein',
				price: '8,00 €',
				note: 'noodles salteados com frango e legumes',
			},
			{
				name: 'Mix chowmein',
				price: '9,00 €',
				note: 'noodles com carne e legumes',
			},
			{
				name: 'Prawn chowmein',
				price: '10,00 €',
				note: 'noodles salteados com camarão',
			},
			{
				name: 'Veg fried rice',
				price: '7,00 €',
				note: 'arroz frito com legumes',
			},
			{
				name: 'Egg fried rice',
				price: '9,00 €',
				note: 'arroz frito com ovo',
			},
			{
				name: 'Mix fried rice',
				price: '9,00 €',
				note: 'arroz frito com carne e legumes',
			},
			{
				name: 'Spring roll',
				price: '4,00 €',
				note: 'rolinho primavera frito, com legumes',
			},
			{
				name: 'Mushroom 65',
				price: '8,00 €',
				note: 'cogumelos fritos com especiarias, entrada da casa',
			},
		],
	},
	{
		title: 'Bebidas',
		items: [
			{
				name: 'Mango lassi',
				price: '4,00 €',
				note: 'iogurte batido com manga',
			},
			{
				name: 'Nepali tea',
				price: '3,00 €',
				note: 'chá com leite e especiarias',
			},
			{
				name: 'Café',
				price: '1,00 €',
				note: 'expresso',
			},
			{
				name: 'Cerveja nepalesa',
				price: '4,00 €',
				note: 'garrafa de 33 cl',
			},
			{
				name: 'Sagres',
				price: '3,00 €',
				note: 'garrafa de 33 cl',
			},
			{
				name: 'Coca-Cola ou Zero',
				price: '3,00 €',
				note: 'garrafa de 33 cl',
			},
			{
				name: 'Água',
				price: '2,00 €',
				note: 'garrafa de 50 cl',
			},
			{
				name: 'Água com gás',
				price: '3,00 €',
				note: 'garrafa de 25 cl',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Yak & Yeti?',
		a: 'Na Calçada de Santo André, 17, em Lisboa (1100-466), na Mouraria, entre o Martim Moniz e a Graça. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre todos os dias às 11:00 e fecha às 23:00, sem dia de fecho. É o horário que a casa publica na ficha de Google; convém confirmá-lo antes de ir.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'Cozinha nepalesa e indiana. Da parte nepalesa vêm o momo, o thukpa, o thentuk, o alu phing e os thali; da indiana, os grelhados do tandoor, os caris, o biryani e os pães naan. A Google classifica a casa como restaurante nepalês.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'O preço médio que a casa indica no TheFork é de 15 euros por pessoa. Na carta, as entradas começam em 1 euro, os caris vegetarianos nos 6 euros, os thali nos 11 e o mix grill do tandoor fica em 19. Esta página cita os preços da carta da casa.',
	},
	{
		q: 'É preciso reservar?',
		a: 'Ao jantar é melhor reservar. A casa atende pelo 21 822 0350 e tem página de reservas no TheFork, com confirmação imediata.',
	},
	{
		q: 'Há opções vegetarianas?',
		a: 'Sim. O letreiro da casa diz «Vegetariano e Não Vegetariano» e a carta tem samosa, chana chatpat, badam sadeko, aloo dum, palak paneer, mutter paneer, chana masala, aaloo govi, mix vegetables, thukpa, momo e thali vegetarianos.',
	},
	{
		q: 'Serve para comer no local e para levar?',
		a: 'A sala tem mesas para comer no local e a casa também entrega ao domicílio pelo Uber Eats, onde publica a sua carta.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google indica apenas que a casa não tem estacionamento acessível a pessoas em cadeiras de rodas. Não publica informação sobre a entrada, os lugares na sala ou o WC, por isso não afirmamos nada sobre isso.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,7 sobre 5 com 2.619 críticas no Google. As críticas destacadas falam de boa relação qualidade/preço, comida saborosa e um ambiente acolhedor.',
	},
];
