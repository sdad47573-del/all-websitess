/**
 * Dados de Food Garden Restaurant — R. do Benformoso 115
 * (1100-083 Lisboa, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: FOOD GARDEN RESTAURANT, 38.7180413,-9.1351735,
 *   feature 0xd1933a0ea302be1:0x7f4ce0f223633368 (morada, categoria, horário,
 *   telefone, nota e críticas).
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/.
 *
 * O que o site NÃO inventa: a ficha não publica site próprio nem carta. A
 * cozinha descreve-se a partir da categoria da ficha e das fotografias do perfil.
 */

export const BUSINESS = {
	name: 'Food Garden Restaurant',
	shortName: 'Food Garden',
	mark: 'FG',
	street: 'R. do Benformoso 115',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '1100-083',
	country: 'PT',
	phone: '+351 920 451 853',
	phoneHref: '+351920451853',
	rating: 3.3,
	reviewsCount: 56,
	siteUrl: 'https://www.sur-digital.com/food-garden-restaurant',
	geo: { lat: 38.7180413, lng: -9.1351735 },
	featureId: '0xd1933a0ea302be1:0x7f4ce0f223633368',
	placeId: 'ChIJ4Ssw6qAzGQ0RaDNjI_LgTH8',
	/** Categoria com que a Google classifica o espaço. */
	category: 'Restaurante bangladesí',
	tagline: 'Cozinha bangladesí na Mouraria',
	description:
		'Food Garden Restaurant, restaurante bangladesí na R. do Benformoso 115, em Lisboa. Aberto todos os dias das 8:00 às 23:30. 3,3 sobre 5 no Google com 56 críticas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/FOOD+GARDEN+RESTAURANT/@38.7180413,-9.1351735,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933a0ea302be1:0x7f4ce0f223633368!8m2!3d38.7180413!4d-9.1351735!16s%2Fg%2F11svzxr5k9',
	cid: 'https://www.google.com/maps?cid=6797310513731105530',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7180413%2C-9.1351735',
	embed: 'https://maps.google.com/maps?q=38.7180413,-9.1351735&z=17&hl=pt-PT&output=embed',
};

/**
 * Horário publicado na ficha de Google: todos os dias, das 8:00 às 23:30.
 * A ficha assinala que em feriados o horário pode ser diferente.
 */
export const HOURS = [
	{ day: 'Segunda-feira', value: '8:00–23:30' },
	{ day: 'Terça-feira', value: '8:00–23:30' },
	{ day: 'Quarta-feira', value: '8:00–23:30' },
	{ day: 'Quinta-feira', value: '8:00–23:30' },
	{ day: 'Sexta-feira', value: '8:00–23:30' },
	{ day: 'Sábado', value: '8:00–23:30' },
	{ day: 'Domingo', value: '8:00–23:30' },
];

/**
 * Señas de identidade: a categoria da ficha, o horário contínuo, o telefone e a
 * zona onde fica. A ficha não confirma esplanada, take-away, reservas nem
 * acessibilidade.
 */
export const SERVICOS = [
	'Cozinha bangladesí',
	'Cozinha do sul da Ásia',
	'Grill e cozinha indiana',
	'8:00–23:30 todos os dias',
	'+351 920 451 853',
	'Mouraria · Lisboa',
];

/**
 * A ficha não publica carta nem preços e o restaurante não tem site próprio.
 * O que segue vem das fotografias do perfil da casa — incluindo duas cartas
 * fotografadas — e da categoria da ficha. Não é uma carta oficial e os preços
 * das fotografias não se dão como atuais.
 */
export const MENU = [
	{
		title: 'Caris de frango',
		items: [
			{
				name: 'Chicken curry / caril de frango',
				note: '6,50 € na carta fotografada, descrito como pouco picante',
			},
			{
				name: 'Chicken korma',
				note: '7,50 € na mesma carta, com coco, iogurte e natas',
			},
			{
				name: 'Chicken saag',
				note: '7,50 €, com espinafres, na carta da galeria',
			},
			{
				name: 'Chicken vindaloo e chicken madras',
				note: '6,95 € e 6,50 €, os mais picantes da carta de frango',
			},
		],
	},
	{
		title: 'Biryani e arroz',
		items: [
			{
				name: 'Chicken biryani',
				note: '7,95 € na carta fotografada na galeria',
			},
			{
				name: 'Beef / meat biryani',
				note: '8,95 €; o prato de biryani das fotografias é deste tipo',
			},
			{
				name: 'Prawn biryani e vegetable biryani',
				note: '9,50 € e 6,50 € na mesma carta',
			},
			{
				name: 'Pelau rice',
				note: '3,00 €, arroz servido à parte',
			},
		],
	},
	{
		title: 'Entradas, pão e doces',
		items: [
			{
				name: 'Samosas',
				note: '1,50 € na carta; aparecem nos pratos das fotografias',
			},
			{
				name: 'Chicken pakora e sheek kebab',
				note: '2,95 € e 3,20 € na carta fotografada',
			},
			{
				name: 'Naan, chapati e poori',
				note: 'entre 1,70 € e 2,50 € na carta',
			},
			{
				name: 'Jalebi',
				note: 'doce em espiral das fotografias do perfil',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Food Garden Restaurant?',
		a: 'Na R. do Benformoso 115, em Lisboa (1100-083), na Mouraria. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Está aberto todos os dias, das 8:00 às 23:30. A ficha de Google assinala que em feriados o horário pode ser diferente, por isso convém confirmá-lo antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: `O contacto público da casa é o telefone ${BUSINESS.phone}, o único que publica a ficha de Google. Não há reservas nem encomendas em linha: o restaurante não tem site próprio nem plataforma de reservas associada à ficha.`,
	},
	{
		q: 'Que comida se serve?',
		a: 'Cozinha bangladesí e indiana: caris de frango, biryani, samosas, pakoras, kebab, pão naan e pratos vegetarianos, além de doces como o jalebi. O letreiro da fachada anuncia «Grill and indian restaurant» e mostra o símbolo halal; a ficha classifica a casa como restaurante bangladesí.',
	},
	{
		q: 'Tem site próprio ou carta online?',
		a: 'Não. A ficha de Google oferece a opção de acrescentar um site, o que confirma que não existe nenhum publicado. Na galeria de fotografias aparecem duas cartas, mas não estão datadas e os preços que mostram podem já não ser os atuais.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 3,3 sobre 5 com 56 críticas no Google, com base na ficha consultada.',
	},
];
