/**
 * Dados do Restaurante Das Marias — Rua Cidade de Tete, 31
 * (1800-128 Lisboa, Portugal), junto ao aeroporto.
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Restaurante Das Marias,
 *   38.7639682,-9.1264268, feature 0xd1933ce1376c1ab:0x28f266cb78a81325
 *   (morada, categorias, horário, nota, críticas, telefone, acessibilidade e
 *   descrição do próprio espaço).
 * - Críticas publicadas na mesma ficha.
 * - Carta da casa, fotografada no perfil do Google Maps: prato do dia,
 *   grelhados, peixe, pratos vegetarianos e vegano, com os preços.
 * - Fotografias do perfil do estabelecimento no Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: os preços são os da carta fotografada; os pratos que
 * só aparecem nas críticas ou nas fotografias ficam sem valor. A ficha assinala
 * estacionamento, entrada e lugares acessíveis, e é só isso que se afirma sobre
 * a acessibilidade.
 */

export const BUSINESS = {
	name: 'Das Marias',
	legalName: 'Restaurante Das Marias',
	shortName: 'Das Marias',
	mark: 'DM',
	street: 'Rua Cidade de Tete, 31',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1800-128',
	country: 'PT',
	phone: '938 073 520',
	phoneHref: 'tel:+351938073520',
	rating: 4.5,
	reviewsCount: 236,
	siteUrl: 'https://restaurante-das-marias.vercel.app',
	geo: { lat: 38.7639682, lng: -9.1264268 },
	featureId: '0xd1933ce1376c1ab:0x28f266cb78a81325',
	placeId: 'ChIJq8F2E84zGQ0RJROoeMtm8ig',
	/** Como a Google classifica a casa. */
	googleBlurb: 'Restaurante, restaurante de pequenos-almoços e café',
	/** Descrição que o próprio espaço publica na ficha. */
	ownDescription: 'Comida tradicional portuguesa.',
	tagline: 'Comida tradicional portuguesa junto ao aeroporto, em Lisboa',
	description:
		'Restaurante Das Marias, na Rua Cidade de Tete, 31, em Lisboa, perto do aeroporto. Prato do dia, grelhados, peixe e vegetariano, todos os dias ao almoço.',
	hasPublicPhone: true,
	/** A ficha não indica site próprio. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Das+Marias/@38.7639682,-9.1264268,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933ce1376c1ab:0x28f266cb78a81325!8m2!3d38.7639682!4d-9.1264268!16s%2Fg%2F11pxnm5btj',
	cid: 'https://www.google.com/maps?cid=2950533729969771301',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7639682%2C-9.1264268',
	embed: 'https://maps.google.com/maps?q=38.7639682,-9.1264268&z=17&hl=pt-PT&output=embed',
};

/** Horário publicado na ficha de Google. */
export const HOURS = [
	{ day: 'Segunda-feira', value: '09:00–15:00 · 18:00–21:00' },
	{ day: 'Terça-feira', value: '09:00–15:00 · 18:00–21:00' },
	{ day: 'Quarta-feira', value: '09:00–15:00 · 18:00–21:00' },
	{ day: 'Quinta-feira', value: '09:00–15:00 · 18:00–21:00' },
	{ day: 'Sexta-feira', value: '09:00–15:00' },
	{ day: 'Sábado', value: '09:00–15:00' },
	{ day: 'Domingo', value: '09:00–15:00' },
];

/** Críticas publicadas na ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Preço muito acessível (menu sopa + prato + bebida + sobremesa + café 9eur).',
	},
	{
		rating: 5,
		text: 'O Restaurante é perto do aeroporto, comida deliciosa, ótimo atendimento.',
	},
	{
		rating: 3,
		text: 'Éramos 5 e comemos carne porco alentejana e arroz de tomate com peixe espada.',
	},
];

/** Categorias da ficha e o que a casa serve. */
export const SERVICOS = [
	'Comida portuguesa',
	'Prato do dia',
	'Grelhados',
	'Peixe fresco',
	'Pequenos-almoços',
	'Opções vegetarianas',
];

/**
 * Carta da casa, com os preços que publica no cartão verde que está nas mesas.
 * Os pratos que só aparecem nas críticas e nas fotografias ficam sem preço.
 */
export const MENU = [
	{
		title: 'Prato do dia',
		items: [
			{
				name: 'Prato do dia, de carne ou de peixe',
				price: '9,00 €',
				note: 'inclui sopa, prato principal, bebida, sobremesa e café — no dia de peixe o menu é de 10 euros',
			},
		],
	},
	{
		title: 'Grelhados ao momento',
		items: [
			{
				name: 'Bife de vitela',
				price: '12,00 €',
				note: 'grelhado na hora, com tudo incluído, como indica a carta',
			},
			{
				name: 'Bife de frango',
				price: '12,00 €',
				note: 'frango grelhado, com tudo incluído',
			},
			{
				name: 'Piano',
				price: '15,00 €',
				note: 'corte de vaca grelhado, com tudo incluído',
			},
			{
				name: 'Grelhada mista',
				price: '15,00 €',
				note: 'seleção de carnes grelhadas, para partilhar',
			},
			{
				name: 'Costeleta de novilho',
				price: '15,00 €',
				note: 'costeleta grelhada, com tudo incluído',
			},
		],
	},
	{
		title: 'Peixe',
		items: [
			{
				name: 'Bacalhau à casa',
				price: '15,00 €',
				note: 'o bacalhau como as Marias o fazem, com tudo incluído',
			},
			{
				name: 'Dourada',
				price: '15,00 €',
				note: 'grelhada, com tudo incluído',
			},
			{
				name: 'Robalo',
				price: '15,00 €',
				note: 'grelhado, com tudo incluído',
			},
		],
	},
	{
		title: 'Vegetariano e vegano',
		items: [
			{
				name: 'Omelete de cogumelos',
				price: '10,00 €',
				note: 'com tudo incluído, como indica a carta',
			},
			{
				name: 'Hambúrguer vegano',
				price: '12,00 €',
				note: 'prato vegano com tudo incluído',
			},
		],
	},
	{
		title: 'Da cozinha das Marias',
		items: [
			{
				name: 'Espetadas',
				note: 'espetadas de carne na grelha, com arroz e batata frita — como se vê nas fotografias da casa',
			},
			{
				name: 'Carne de porco à alentejana',
				note: 'citada numa das críticas do Google, servida com batata e amêijoas',
			},
			{
				name: 'Arroz de tomate com peixe espada',
				note: 'o arroz que a mesma crítica pediu, com peixe espada',
			},
			{
				name: 'Peixe grelhado com legumes',
				note: 'peixe na grelha com brócolos e batata a murro, como nas fotografias',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Restaurante Das Marias?',
		a: 'Na Rua Cidade de Tete, 31, em Lisboa (1800-128), na Encarnação, a poucos minutos do aeroporto. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre todos os dias para almoço, das 09:00 às 15:00. De segunda a quinta também abre ao jantar, das 18:00 às 21:00; à sexta, sábado e domingo só serve almoço. É o horário que a casa publica na ficha de Google, por isso convém confirmá-lo antes de ir.',
	},
	{
		q: 'Que cozinha se serve?',
		a: 'Comida tradicional portuguesa, como a própria casa se descreve na ficha: prato do dia, grelhados de carne e peixe, bacalhau, dourada, robalo e pratos vegetarianos e veganos. A Google classifica-a também como restaurante de pequenos-almoços e café.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'O prato do dia custa 9 euros (10 euros no dia de peixe) e inclui sopa, prato principal, bebida, sobremesa e café. Na carta, os grelhados vão dos 12 aos 15 euros, o peixe custa 15, a omelete de cogumelos 10 e o hambúrguer vegano 12, sempre com tudo incluído.',
	},
	{
		q: 'Serve pequenos-almoços?',
		a: 'Sim. A Google classifica a casa como restaurante que serve pequenos-almoços e café, e abre às 09:00 todos os dias. A sala tem uma vitrine de pastelaria junto ao balcão, como se vê nas fotografias.',
	},
	{
		q: 'É preciso reservar?',
		a: 'A casa não tem página de reservas online. O contacto publicado na ficha de Google é o telefone 938 073 520.',
	},
	{
		q: 'O espaço é acessível?',
		a: 'A ficha de Google assinala estacionamento acessível, entrada acessível e lugares para pessoas em cadeiras de rodas. É o que a ficha indica; não publica mais detalhes sobre a sala ou o WC.',
	},
	{
		q: 'Fica longe do aeroporto?',
		a: 'Fica perto: a Rua Cidade de Tete, 31, na Encarnação, está a poucos minutos de carro do Aeroporto Humberto Delgado. Uma das críticas destaca precisamente a localização perto do aeroporto.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,5 sobre 5 com 236 críticas no Google. As críticas destacadas falam do preço do menu, da comida e do atendimento.',
	},
];
