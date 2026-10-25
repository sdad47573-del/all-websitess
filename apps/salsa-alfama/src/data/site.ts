/**
 * Salsa · dados do negócio
 *
 * Tudo o que aparece na web vive aqui. As fotografias são as do perfil público
 * do restaurante em Google Maps (ver `.maps-manifest.json`). A carta das
 * entradas segue a página de menu fotografada nesse mesmo perfil.
 */

export const BUSINESS = {
	name: 'Salsa',
	mark: 'S',
	street: 'Rua das Escolas Gerais, 57',
	postalCode: '1100-218',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Distrito de Lisboa',
	country: 'PT',
	phone: '21 886 0883',
	phoneHref: 'tel:+351218860883',
	siteUrl: 'https://salsa-alfama.vercel.app',
	featureId: '0xd19347674c49e7d:0xf7c26d8ec3010ac3',
	placeId: 'ChIJfZ7EdHY0GQ0RwwoBw45twvc',
	rating: 4.6,
	reviewsCount: 867,
	geo: { lat: 38.7128014, lng: -9.1291244 },
};

const CID = '17852952332774476483';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Salsa/@38.7128014,-9.1291244,17z/data=!3m1!4b1!4m6!3m5!1s0xd19347674c49e7d:0xf7c26d8ec3010ac3!8m2!3d38.7128014!4d-9.1291244!16s%2Fg%2F11b7svhn52',
	cid: `https://www.google.com/maps?cid=${CID}`,
	reviews: `https://www.google.com/maps?cid=${CID}`,
	embed:
		'https://www.google.com/maps?q=38.7128014,-9.1291244&hl=pt-PT&z=18&output=embed',
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.7128014,-9.1291244',
};

export const HOURS = [
	{ day: 'Segunda-feira', value: 'Encerrado', closed: true },
	{ day: 'Terça-feira', value: '12:00–23:00' },
	{ day: 'Quarta-feira', value: '12:00–23:00' },
	{ day: 'Quinta-feira', value: '12:00–23:00' },
	{ day: 'Sexta-feira', value: '12:00–23:00' },
	{ day: 'Sábado', value: '12:00–23:00' },
	{ day: 'Domingo', value: '12:00–23:00' },
];

export const SERVICOS = [
	'Cozinha portuguesa',
	'Entradas para partilhar',
	'Bar',
	'Vista sobre Alfama',
	'Elétrico 28 à porta',
	'Alfama · Lisboa',
];

/** Os três gestos da casa. */
export const PASSOS = [
	{
		icon: '01',
		title: 'Entra pelo azulejo',
		text: 'A fachada é forrada a azulejo e o letreiro vermelho do Salsa marca a porta, na Rua das Escolas Gerais.',
	},
	{
		icon: '02',
		title: 'Partilha as entradas',
		text: 'Gyōza, edamame, karaage ou chahan para abrir a mesa, enquanto se escolhe o peixe e o bacalhau.',
	},
	{
		icon: '03',
		title: 'Fica para o bar',
		text: 'É restaurante e bar: a janela dá para os telhados de Alfama e para o Tejo, e a casa fica aberta até às 23:00.',
	},
];

/**
 * Entradas com preços da página de menu do perfil de Google Maps.
 * Os pratos principais não têm preço publicado: a casa não os divulga em linha.
 */
export const MENU = [
	{
		title: 'Entradas',
		items: [
			{
				name: 'Gyōza',
				note: 'Vegetal ou de frango, na chapa.',
				price: '3,99 €',
			},
			{
				name: 'Edamame',
				note: 'Vagens de soja cozidas e temperadas com sal.',
				price: '2,99 €',
			},
			{
				name: 'Karaage',
				note: 'Frango sem osso marinado, com molho especial, frito.',
				price: '4,99 €',
			},
			{
				name: 'Chahan',
				note: 'Vegetal, frango ou bacon de porco, salteado com arroz, ovo e cenoura.',
				price: '4,49 €',
			},
			{
				name: 'Chasu',
				note: 'Barriga de porco cozinhada em molho especial, com alho-francês e cebolinho.',
				price: '3,99 €',
			},
			{
				name: 'Sonomono',
				note: 'Pepino marinado em molho especial, com sementes de sésamo.',
				price: '2,49 €',
			},
		],
	},
	{
		title: 'Da cozinha portuguesa',
		items: [
			{
				name: 'Sopa de legumes',
				note: 'A entrada que aparece nas críticas, servida em prato fundo.',
			},
			{
				name: 'Bacalhau à Brás',
				note: 'Bacalhau desfiado com batata palha, cebola e ovo.',
			},
			{
				name: 'Bacalhau assado',
				note: 'No forno, com batata e legumes.',
			},
			{
				name: 'Arroz de polvo',
				note: 'Arrozinho de polvo; uma crítica fala dele como prato principal.',
			},
		],
	},
	{
		title: 'Do mar',
		items: [
			{
				name: 'Massa com camarão e amêijoa',
				note: 'Fettuccine salteada com camarão, amêijoa e mexilhão, como na fotografia da casa.',
			},
		],
	},
	{
		title: 'Para beber',
		items: [
			{
				name: 'Vinho da casa',
				note: 'Branco ou tinto, ao copo ou ao jarro.',
			},
			{
				name: 'Cocktails do bar',
				note: 'A casa é restaurante e bar: também se bebe ao balcão.',
			},
		],
	},
];

export const REVIEWS = [
	{
		rating: 5,
		text: 'Excelente restaurante, bom serviço e boa localização.',
	},
	{
		rating: 5,
		text: 'Escolhemos uma sopa de legumes, um bacalhau à Brás e um bacalhau assado.',
	},
	{
		rating: 3,
		text: 'O prato principal foi um arroz de polvo, que estava ok, mas nada excecional.',
	},
];

export const FAQ = [
	{
		q: 'Onde fica o Salsa?',
		a: 'Na Rua das Escolas Gerais, 57, em Alfama. Está a poucos passos do Miradouro das Portas do Sol e da Igreja de São Vicente de Fora, e o elétrico 28 passa à porta.',
	},
	{
		q: 'Que horário tem?',
		a: 'Abre de terça-feira a domingo, das 12:00 às 23:00, sem fechar para o almoço. À segunda-feira está encerrado.',
	},
	{
		q: 'É preciso reservar?',
		a: 'A casa atende reservas por telefone (21 886 0883). Em Alfama, ao almoço e ao jantar, a sala enche; para grupos vale a pena ligar antes.',
	},
	{
		q: 'O que se come?',
		a: 'Cozinha portuguesa com entradas de influência asiática. Há sopa de legumes, bacalhau à Brás, bacalhau assado, arroz de polvo e massa de marisco, além de gyōza, edamame, karaage, chahan, chasu e sonomono.',
	},
	{
		q: 'Quanto custam as entradas?',
		a: 'As entradas vão dos 2,49 € do sonomono aos 4,99 € do karaage. Os pratos principais não têm preço publicado em linha: confirma na carta da mesa ou por telefone.',
	},
	{
		q: 'Tem vista?',
		a: 'As janelas da sala dão para os telhados de Alfama e para o Tejo. É também um bar, por isso se pode ficar só para uma bebida.',
	},
	{
		q: 'É acessível a cadeiras de rodas?',
		a: 'A ficha de Google indica lugares para pessoas em cadeiras de rodas, mas não estacionamento acessível. A rua é estreita e íngreme, típica de Alfama.',
	},
];
