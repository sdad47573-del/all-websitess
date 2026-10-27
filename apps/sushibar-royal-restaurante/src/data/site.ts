/**
 * Dados de Sushibar Royal Restaurante — Av. 5 de Outubro 32
 * (2615-063 Alverca do Ribatejo, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Sushibar Royal Restaurante,
 *   38.9016023,-9.0386817, feature 0xd1928c6c2795fe3:0x341c979bba19db41
 *   (morada, categoria, horário, telefone, nota e críticas).
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica site próprio nem carta. A
 * cozinha descreve-se a partir da categoria da ficha e das fotografias do perfil.
 */

export const BUSINESS = {
	name: 'Sushibar Royal Restaurante',
	shortName: 'Sushibar Royal',
	mark: 'SR',
	street: 'Av. 5 de Outubro 32',
	city: 'Alverca do Ribatejo',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '2615-063',
	country: 'PT',
	phone: '+351 21 193 0735',
	phoneHref: '+351211930735',
	rating: 4.1,
	reviewsCount: 427,
	siteUrl: 'https://sushibar-royal-restaurante.vercel.app',
	geo: { lat: 38.9016023, lng: -9.0386817 },
	featureId: '0xd1928c6c2795fe3:0x341c979bba19db41',
	placeId: 'ChIJ4195wsYoGQ0RQdsZupuXHDQ',
	/** Categoria com que a Google classifica o espaço. */
	category: 'Restaurante de cozinha pan-asiática',
	tagline: 'Cozinha pan-asiática em Alverca',
	description:
		'Sushibar Royal Restaurante, cozinha pan-asiática na Av. 5 de Outubro 32, em Alverca do Ribatejo. De quarta a segunda, 12:00–15:00 e 19:00–23:00; fecha às terças.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sushibar+Royal+Restaurante/@38.9016023,-9.0386817,17z/data=!3m1!4b1!4m6!3m5!1s0xd1928c6c2795fe3:0x341c979bba19db41!8m2!3d38.9016023!4d-9.0386817!16s%2Fg%2F11c2p3jh_7',
	cid: 'https://www.google.com/maps?cid=360999682316672171',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9016023%2C-9.0386817',
	embed: 'https://maps.google.com/maps?q=38.9016023,-9.0386817&z=17&hl=pt-PT&output=embed',
};

/**
 * Horário publicado na ficha de Google: de quarta a segunda, das 12:00 às 15:00
 * e das 19:00 às 23:00. À terça-feira está fechado. Em feriados pode variar.
 */
export const HOURS = [
	{ day: 'Segunda-feira', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Terça-feira', value: 'Fechado', closed: true },
	{ day: 'Quarta-feira', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Quinta-feira', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Sexta-feira', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Sábado', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Domingo', value: '12:00–15:00 · 19:00–23:00' },
];

/**
 * Señas de identidade: a categoria da ficha, o serviço de almoço e jantar, o
 * dia de fecho e a localidade. A ficha não confirma esplanada, take-away,
 * reservas nem acessibilidade.
 */
export const SERVICOS = [
	'Cozinha pan-asiática',
	'Sushi',
	'Almoços e jantares',
	'12:00–15:00 · 19:00–23:00',
	'Fecha às terças',
	'Alverca do Ribatejo',
];

/**
 * A ficha não publica carta nem preços e o restaurante não tem site próprio.
 * O que segue vem das fotografias do perfil da casa — incluindo a página de
 * carta fotografada — e da categoria da ficha. Não é uma carta oficial e os
 * preços da fotografia não se dão como atuais.
 */
export const MENU = [
	{
		title: 'Sushi e sashimi',
		items: [
			{
				name: 'Nigiri de salmão',
				note: 'na galeria da casa e na caixa de takeaway das fotografias',
			},
			{
				name: 'Uramaki crocante',
				note: 'com molho por cima, no prato das fotografias do perfil',
			},
			{
				name: 'Maki misto e maki skin',
				note: 'T16 e T17 da carta fotografada na galeria',
			},
			{
				name: 'Sashimi',
				note: 'no prato de sushi das fotografias, com salmão e atum',
			},
		],
	},
	{
		title: 'Tepan yaki e espetadas',
		items: [
			{
				name: 'Arroz tepan yaki',
				note: 'T1 da carta fotografada, com 2,00 € na fotografia',
			},
			{
				name: 'Tepan yaki de gambas, frango e vaca',
				note: 'T11, T12 e T15 da carta fotografada',
			},
			{
				name: 'Espetadas de frango',
				note: 'T7 da carta, também nas fotografias do perfil',
			},
			{
				name: 'Espetada de gambas e vaca',
				note: 'T13 da carta fotografada',
			},
		],
	},
	{
		title: 'Entradas e pratos',
		items: [
			{
				name: 'Sopa de miso',
				note: 'T2 da carta fotografada, com 2,00 € na fotografia',
			},
			{
				name: 'Tempura de gambas',
				note: 'T9 da carta fotografada na galeria',
			},
			{
				name: 'Pato crocante',
				note: 'fatiado com legumes, nas fotografias do perfil',
			},
			{
				name: 'Panado de frango com amêndoas',
				note: 'T14 da carta, na galeria da casa',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Sushibar Royal Restaurante?',
		a: 'Na Av. 5 de Outubro 32, em Alverca do Ribatejo (2615-063), no distrito de Lisboa. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Abre de quarta a segunda, das 12:00 às 15:00 e das 19:00 às 23:00. À terça-feira está fechado. A ficha de Google assinala que em feriados o horário pode ser diferente, por isso convém confirmá-lo antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: `O contacto público da casa é o telefone ${BUSINESS.phone}, o único que publica a ficha de Google. Não há reservas nem encomendas em linha: o restaurante não tem site próprio nem plataforma de reservas associada à ficha.`,
	},
	{
		q: 'Que comida se serve?',
		a: 'Cozinha pan-asiática: sushi, sashimi, maki, tepan yaki, tempura, espetadas e pratos de frango, porco, vaca e pato. A ficha classifica a casa como restaurante de cozinha pan-asiática, mas não publica a carta completa.',
	},
	{
		q: 'Tem site próprio ou carta online?',
		a: 'Não. A ficha de Google oferece a opção de acrescentar um site, o que confirma que não existe nenhum publicado. Na galeria de fotografias aparece uma página da carta, mas não está datada e os preços que mostra podem já não ser os atuais.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,1 sobre 5 com 427 críticas no Google, com base na ficha consultada.',
	},
];
