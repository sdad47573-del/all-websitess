/**
 * Dados de Ks Restaurante e Café — R. Salvador Allende 27c
 * (2685-114 Sacavém, Portugal).
 *
 * Fontes públicas:
 * - Ficha de Google Maps fornecida: Ks Restaurante e Café, 38.7940633,-9.1106505,
 *   feature 0xd19331ddaa72e83:0x88b49196cf02a4b1 (morada, categoria, horário,
 *   nota e críticas).
 * - Descrição que o próprio espaço publica na ficha: «Doner Kebab sacavem».
 * - Fotografias do perfil do estabelecimento em Google Maps, descarregadas para
 *   src/assets/fotos/: a fachada, o interior, o logótipo, o folheto da casa e os
 *   pratos que se servem.
 *
 * O que o site NÃO inventa: a ficha não publica telefone, e-mail, site próprio,
 * carta nem preços, e as críticas não chegam na consulta pública. Por isso não
 * há preços nem telefone em nenhum sítio: os números e a carta de pizzas que
 * aparecem no folheto da galeria são de um folheto sem data, cujo site indicado
 * (www.kskebab.pt) já não resolve, e por isso não se apresentam como atuais.
 */

export const BUSINESS = {
	name: 'Ks Restaurante e Café',
	shortName: 'Ks',
	mark: 'KS',
	street: 'R. Salvador Allende 27c',
	city: 'Sacavém',
	region: 'Lisboa',
	regionName: 'Lisboa',
	postalCode: '2685-114',
	country: 'PT',
	/** A ficha não publica telefone. */
	phone: '',
	phoneHref: '',
	rating: 4.2,
	reviewsCount: 37,
	siteUrl: 'https://ks-restaurante-e-cafe.vercel.app',
	geo: { lat: 38.7940633, lng: -9.1106505 },
	featureId: '0xd19331ddaa72e83:0x88b49196cf02a4b1',
	placeId: 'ChIJgy6n2h0zGQ0RsaQCz5aRtIg',
	/** Categoria com que a Google classifica o espaço. */
	category: 'Restaurante especializado em döner kebab',
	/** Descrição que o próprio espaço publica na ficha. */
	ownDescription: 'Doner Kebab sacavem',
	tagline: 'Döner kebab e café em Sacavém',
	description:
		'Ks Restaurante e Café, restaurante de döner kebab na R. Salvador Allende 27c (2685-114 Sacavém). Aberto todos os dias das 5:00 às 22:00. 4,2 sobre 5 no Google com 37 críticas.',
	hasPublicPhone: false,
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Ks+Restaurante+e+Caf%C3%A9/@38.7940633,-9.1106505,17z/data=!3m1!4b1!4m6!3m5!1s0xd19331ddaa72e83:0x88b49196cf02a4b1!8m2!3d38.7940633!4d-9.1106505!16s%2Fg%2F11pcntfl5r',
	cid: 'https://www.google.com/maps?cid=9850658361870296241',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=pt-PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7940633%2C-9.1106505',
	embed: 'https://maps.google.com/maps?q=38.7940633,-9.1106505&z=17&hl=pt-PT&output=embed',
};

/**
 * Horário publicado na ficha de Google: todos os dias, das 5:00 às 22:00.
 * A ficha não indica exceções nem dias de fecho.
 */
export const HOURS = [
	{ day: 'Segunda-feira', value: '5:00–22:00' },
	{ day: 'Terça-feira', value: '5:00–22:00' },
	{ day: 'Quarta-feira', value: '5:00–22:00' },
	{ day: 'Quinta-feira', value: '5:00–22:00' },
	{ day: 'Sexta-feira', value: '5:00–22:00' },
	{ day: 'Sábado', value: '5:00–22:00' },
	{ day: 'Domingo', value: '5:00–22:00' },
];

/**
 * Señas de identidade: a categoria e o horário da ficha, e o que mostram as
 * fotografias do próprio perfil (kebab, frango grelhado, arroz, caril e café).
 * A ficha não lista serviços nem acessibilidade, por isso nada disso aparece.
 */
export const SERVICOS = [
	'Döner kebab',
	'Frango grelhado',
	'Arroz e caril',
	'Café',
	'Todos os dias · 5:00–22:00',
	'Em Sacavém',
];

/**
 * A ficha não publica carta nem preços. O que segue descreve a cozinha a partir
 * da categoria da ficha, da descrição do próprio espaço e das fotografias que a
 * casa tem na sua galeria.
 */
export const MENU = [
	{
		title: 'Kebab e grelhados',
		items: [
			{
				name: 'Döner kebab',
				note: '«Restaurante especializado em döner kebab» é a categoria da ficha de Google',
			},
			{
				name: 'Kebab no pão ou no prato',
				note: 'nas fotografias do perfil aparece servido com batata frita e salada',
			},
			{
				name: 'Frango grelhado com batata frita e salada',
				note: 'é um dos pratos que a casa publica na sua galeria',
			},
		],
	},
	{
		title: 'Arroz e caril',
		items: [
			{
				name: 'Arroz com frango',
				note: 'servido com limão e coentros, nas fotografias do perfil',
			},
			{
				name: 'Caril de frango',
				note: 'com gengibre em juliana e coentros, também na galeria da casa',
			},
		],
	},
	{
		title: 'Café',
		items: [
			{
				name: 'Café e pastelaria',
				note: 'a casa apresenta-se como «Restaurante e Café» e abre às 5:00',
			},
			{
				name: 'Carta e preços',
				note: 'a ficha não publica carta nem importos; o folheto da galeria não está datado',
			},
		],
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Ks Restaurante e Café?',
		a: 'Na R. Salvador Allende 27c, em Sacavém (2685-114), no distrito de Lisboa. O mapa desta página leva à porta e «Como chegar» abre as indicações no Google Maps.',
	},
	{
		q: 'Qual é o horário?',
		a: 'Está aberto todos os dias, das 5:00 às 22:00, sem dia de fecho indicado na ficha. É o horário que publica a Google; convém confirmá-lo antes de ir.',
	},
	{
		q: 'Como faço uma reserva ou encomenda?',
		a: 'A ficha de Google não publica telefone, e-mail nem site próprio, e mostra a opção de os adicionar: não existe um canal de reservas ou encomendas publicado. No folheto que a casa tem na sua galeria de fotografias aparecem dois números de telefone, mas o site que o mesmo folheto indica já não está ativo e o folheto não está datado, por isso não os damos aqui como o contacto atual.',
	},
	{
		q: 'Que comida se serve?',
		a: 'Döner kebab, frango grelhado com batata e salada, arroz com frango e caril, além do café. A categoria da ficha é «restaurante especializado em döner kebab», o próprio espaço descreve-se como «Doner Kebab sacavem» e o resto é o que mostram as suas fotografias. A ficha não publica carta nem preços.',
	},
	{
		q: 'Tem site próprio ou carta online?',
		a: 'Não. A ficha de Google não tem ligação a nenhum site e a carta não está publicada online. Esta página reúne apenas a informação pública da ficha: morada, horário e fotografias.',
	},
	{
		q: 'Que avaliação tem?',
		a: 'Tem 4,2 sobre 5 com 37 críticas no Google, com base na ficha consultada.',
	},
];
