/**
 * Jardim das Cerejas · dados do negócio
 *
 * Tudo o que aparece na web vive aqui. As fotografias são as dez do perfil
 * público do restaurante em Google Maps (ver `.maps-manifest.json`).
 */

export const BUSINESS = {
	name: 'Jardim das Cerejas',
	mark: 'JC',
	street: 'Calçada do Sacramento, 36',
	postalCode: '1200-394',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Distrito de Lisboa',
	country: 'PT',
	phone: '21 346 9308',
	phoneHref: 'tel:+351213469308',
	siteUrl: 'https://www.sur-digital.com/jardim-das-cerejas',
	featureId: '0xd19347f325a17d5:0x3ff841e4e402247b',
	placeId: 'ChIJ1RdaMn80GQ0ReyQC5ORB-D8',
	rating: 4.6,
	reviewsCount: 2210,
	geo: { lat: 38.7114464, lng: -9.1403093 },
};

const CID = '4609506669947397243';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Jardim+das+Cerejas/@38.7114464,-9.1403093,17z/data=!3m1!4b1!4m6!3m5!1s0xd19347f325a17d5:0x3ff841e4e402247b!8m2!3d38.7114464!4d-9.1403093!16s%2Fg%2F1tg36h6s',
	cid: `https://www.google.com/maps?cid=${CID}`,
	reviews: `https://www.google.com/maps?cid=${CID}`,
	embed:
		'https://www.google.com/maps?q=Jardim+das+Cerejas,Cal%C3%A7ada+do+Sacramento+36,1200-394+Lisboa&hl=pt-PT&z=17&output=embed',
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.7114464,-9.1403093',
};

export const HOURS = [
	{ day: 'Segunda-feira', value: '12:00–15:30 · 19:00–23:00' },
	{ day: 'Terça-feira', value: '12:00–15:30 · 19:00–23:00' },
	{ day: 'Quarta-feira', value: '12:00–15:30 · 19:00–23:00' },
	{ day: 'Quinta-feira', value: '12:00–15:30 · 19:00–23:00' },
	{ day: 'Sexta-feira', value: '12:00–15:30 · 19:00–23:00' },
	{ day: 'Sábado', value: '12:00–15:30 · 19:00–23:00' },
	{ day: 'Domingo', value: '12:00–15:30 · 19:00–23:00' },
];

export const SERVICOS = [
	'Buffet livre',
	'Cozinha 100% vegetal',
	'Almoço e jantar',
	'Todos os dias',
	'Cozinha caseira',
	'Chiado · Lisboa',
];

/** O que se repete nas travessas. O buffet muda todos os dias. */
export const BUFFET = [
	{
		icon: '01',
		title: 'Sopa do dia',
		text: 'Uma sopa diferente por dia, feita na casa, servida à mesa antes de se levantar para o buffet.',
	},
	{
		icon: '02',
		title: 'Seis pratos quentes',
		text: 'Curries, massas, gratinados e pratos de forno, sempre com arroz ou pão ao lado. Mudam ao longo da semana.',
	},
	{
		icon: '03',
		title: 'Dois frios e saladas',
		text: 'Grão-de-bico, azeitonas temperadas, legumes assados e folhas — a mesa que enche o prato primeiro.',
	},
];

export const MENU = [
	{
		title: 'Para começar',
		items: [
			{
				name: 'Sopa do dia',
				note: 'Legumes da estação passados na varinha, servida em tigela funda com azeite e ervas.',
			},
			{
				name: 'Pão, azeitonas e temperos',
				note: 'Pão da casa, azeitonas e molhos para abrir o apetite enquanto se escolhe o resto.',
			},
		],
	},
	{
		title: 'Buffet frio',
		items: [
			{
				name: 'Saladas da horta',
				note: 'Folhas, cenoura ralada, beterraba e tomate, com molhos feitos na casa.',
			},
			{
				name: 'Grão-de-bico e leguminosas',
				note: 'Temperado com ervas e azeite, um dos pratos que as críticas destacam.',
			},
			{
				name: 'Mezze e pastas de legumes',
				note: 'Pasta de grão, beringela assada e legumes em conserva, com pão para barrar.',
			},
		],
	},
	{
		title: 'Buffet quente',
		items: [
			{
				name: 'Curry de legumes com arroz',
				note: 'O prato que aparece em quase todos os pratos fotografados na ficha: molho amarelo e arroz solto.',
			},
			{
				name: 'Massas e gratinados',
				note: 'Massa com molho de tomate ou creme de legumes, gratinada no forno.',
			},
			{
				name: 'Pratos de forno',
				note: 'Batata, beringela e abóbora assadas, às vezes com crosta de pão ralado.',
			},
			{
				name: 'Estufados de leguminosas',
				note: 'Feijão, lentilhas e soja cozinhados devagar com tomate e especiarias.',
			},
		],
	},
	{
		title: 'Doçaria',
		items: [
			{
				name: 'Tortas e bolos da casa',
				note: 'Uma crítica fala de «torta com gosto de pizza»; a doçaria muda como o resto.',
			},
			{
				name: 'Fruta da estação',
				note: 'Cortada na hora, para fechar a refeição.',
			},
		],
	},
];

export const REVIEWS = [
	{
		rating: 5,
		text: 'Adoro voltar, comida deliciosa, boa quantidade, bom preço e ótimo serviço.',
	},
	{
		rating: 5,
		text: 'Sistema de buffet: 6 pratos quentes, 2 frios e variedade de saladas.',
	},
	{
		rating: 5,
		text: 'O molho da salada estava divino, assim como a sopa e a torta com gosto de pizza.',
	},
];

export const FAQ = [
	{
		q: 'O buffet é todo vegetal?',
		a: 'Sim. A casa anuncia-se na fachada como restaurante vegano e a ficha de Google classifica-a como restaurante vegano e vegetariano: não há carne, peixe, ovos nem laticínios no buffet. Se tens alguma intolerância, avisa a equipa antes de te servires.',
	},
	{
		q: 'Quanto custa o buffet?',
		a: 'O buffet tem um preço fixo por pessoa, com as bebidas à parte. A casa não publica os valores atualizados na ficha de Google e não tem site próprio, por isso o mais seguro é ligar para o 21 346 9308 e confirmar o preço do dia antes de ir.',
	},
	{
		q: 'É preciso reservar?',
		a: 'Não há reservas em linha. A sala é ampla, mas ao almoço enche com quem trabalha no Chiado; para grupos, o melhor é ligar antes e combinar a mesa por telefone.',
	},
	{
		q: 'Que horário tem?',
		a: 'Abre todos os dias, incluindo domingo: almoço das 12:00 às 15:30 e jantar das 19:00 às 23:00. É o horário publicado na ficha de Google; confirma por telefone em feriados.',
	},
	{
		q: 'Onde fica e como se chega?',
		a: 'Na Calçada do Sacramento, 36, entre o Largo de São Carlos e o Carmo, no Chiado. A pé são poucos minutos desde o metro de Baixa-Chiado (linhas azul e verde); de carro é difícil estacionar na zona.',
	},
	{
		q: 'Há opções sem glúten?',
		a: 'O buffet é vegetal, mas a cozinha não é exclusiva para celíacos: o pão e vários pratos levam glúten e as travessas são servidas com os mesmos utensílios. Se evitas glúten, fala com a equipa e confirma no local o que podes comer.',
	},
];
