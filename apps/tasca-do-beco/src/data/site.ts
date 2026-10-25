/**
 * A Tasca do Béco · dados do negócio
 *
 * Tudo o que aparece na web vive aqui. As cinco fotografias são as do perfil
 * público do restaurante em Google Maps (ver `.maps-manifest.json`), onde a
 * ficha aparece com o nome genérico «Traditional restaurant».
 */

export const BUSINESS = {
	name: 'A Tasca do Béco',
	mark: 'TB',
	street: "Calçada de Sant'Ana, 139",
	postalCode: '1150-306',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Distrito de Lisboa',
	country: 'PT',
	/** A ficha de Google não publica telefone nem site: a web não inventa nenhum. */
	phone: '',
	phoneHref: '',
	siteUrl: 'https://tasca-do-beco.vercel.app',
	featureId: '0xd1933750b3ac697:0x7dfa2dad140ae1ef',
	placeId: 'ChIJl8Y6C3UzGQ0R7-EKFK0t-n0',
	rating: 4.7,
	reviewsCount: 15,
	geo: { lat: 38.7169532, lng: -9.1387087 },
};

const CID = '9077618220307505647';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Traditional+restaurant/@38.7169532,-9.1387087,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933750b3ac697:0x7dfa2dad140ae1ef!8m2!3d38.7169532!4d-9.1387087!16s%2Fg%2F11stv331vz',
	cid: `https://www.google.com/maps?cid=${CID}`,
	reviews: `https://www.google.com/maps?cid=${CID}`,
	embed:
		'https://www.google.com/maps?q=38.7169532,-9.1387087&hl=pt-PT&z=18&output=embed',
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.7169532,-9.1387087',
};

/**
 * A ficha não tem horário publicado. Em vez de inventar um, a web diz isso
 * mesmo e manda confirmar no Google Maps antes de subir a calçada.
 */
export const HOURS = [{ day: 'Horário', value: 'Não publicado na ficha' }];

export const SERVICOS = [
	'Tasca de bairro',
	'Peixe na brasa',
	'Prato do dia',
	'Opções veganas',
	'Porções generosas',
	'Arroios · Lisboa',
];

/** Os três gestos da casa, como numa tasca de bairro. */
export const BUFFET = [
	{
		icon: '01',
		title: 'Senta-te',
		text: 'A sala é pequena e não há reservas em linha: entra-se, procura-se mesa e espera-se pela carta escrita à mão.',
	},
	{
		icon: '02',
		title: 'Peixe na brasa',
		text: 'Dourada, robalo e salmão passam pelo grelhador e chegam inteiros ao prato, com batata cozida e legumes.',
	},
	{
		icon: '03',
		title: 'Preço de tasca',
		text: 'Sopa a 2 €, pratos a 10 € e peixe entre 12 € e 14 €. É a ardósia da porta que manda, e muda todos os dias.',
	},
];

/**
 * Carta copiada da ardósia fotografada na porta em 8 de abril de 2026.
 * Onde a ardósia tem três colunas (meia dose, dose e dose dupla), o preço
 * aparece como intervalo.
 */
export const MENU = [
	{
		title: 'Sopa e prato do dia',
		items: [
			{
				name: 'Sopa do dia',
				note: 'Feita na casa; a da ardósia era de feijão e couve.',
				price: '2,00 €',
			},
			{
				name: 'Prato do dia',
				note: 'Muda todos os dias. No dia da fotografia, feijoada à transmontana.',
				price: '9–18 €',
			},
		],
	},
	{
		title: 'Peixe na brasa',
		items: [
			{
				name: 'Dourada grelhada',
				note: 'Inteira, com batata cozida e legumes. É o prato que as críticas destacam.',
				price: '12,00 €',
			},
			{
				name: 'Robalo grelhado',
				note: 'Na brasa, com o mesmo acompanhamento.',
				price: '12,00 €',
			},
			{
				name: 'Salmão assado na brasa',
				note: 'Posta, com batata e legumes.',
				price: '14,00 €',
			},
			{
				name: 'Misto de porco na brasa',
				note: 'Para quem não quer peixe: vários cortes de porco no grelhador.',
				price: '10,00 €',
			},
		],
	},
	{
		title: 'Carnes na brasa',
		items: [
			{
				name: 'Entremeada na brasa',
				note: 'Três tamanhos na ardósia: meia dose, dose e dose dupla.',
				price: '9–18 €',
			},
			{
				name: 'Febras de porco na brasa',
				note: 'Com batata e arroz ou salada.',
				price: '9–18 €',
			},
			{
				name: 'Costeletas de porco na brasa',
				note: 'Grelhadas, com acompanhamento.',
				price: '9–18 €',
			},
			{
				name: 'Espetadas de novilho na brasa',
				note: 'Também em meia dose ou dose dupla.',
				price: '9–18 €',
			},
		],
	},
	{
		title: 'Bitoques e alheiras',
		items: [
			{
				name: 'Alheira com ovo, batata e arroz',
				note: 'Alheira grelhada, ovo estrelado e os dois acompanhamentos.',
				price: '10,00 €',
			},
			{
				name: 'Bitoque com ovo',
				note: 'Batata, arroz e ovo por cima do bife.',
				price: '10,00 €',
			},
			{
				name: 'Hambúrguer com ovo',
				note: 'Servido com batata frita.',
				price: '10,00 €',
			},
		],
	},
	{
		title: 'Vegan',
		items: [
			{
				name: 'Salsichas de soja com batata e arroz',
				note: 'A secção vegan da ardósia, ao mesmo preço dos outros pratos.',
				price: '10,00 €',
			},
			{
				name: 'Alheira de soja com batata e arroz',
				note: 'Versão vegetal da alheira.',
				price: '10,00 €',
			},
			{
				name: 'Hambúrguer de soja com batata e arroz',
				note: 'Hambúrguer vegetal grelhado.',
				price: '10,00 €',
			},
			{
				name: 'Bitoque de seitan com batata e arroz',
				note: 'Seitan no lugar do bife.',
				price: '10,00 €',
			},
		],
	},
];

export const REVIEWS = [
	{
		rating: 5,
		author: 'Pedro, no Google',
		text: 'Restaurante tradicional que serve a comida em fontes abundantes. Muito sabroso.',
	},
	{
		rating: 5,
		author: 'Sandra T., no Google',
		text: 'Comida local boa, porções grandes. Recomendo.',
	},
	{
		rating: 5,
		author: 'David P., no Google',
		text: 'Um restaurante pequeno mas acolhedor. Os menus são baratos e o peixe é fresco. Uma pequena joia escondida dos turistas.',
	},
];

export const FAQ = [
	{
		q: 'Que horário tem a tasca?',
		a: 'A ficha de Google Maps não publica horário, a casa não tem site próprio nem telefone publicado. O mais prático é abrir a ficha no Google Maps e ver se está aberta antes de subir a Calçada de Sant\'Ana.',
	},
	{
		q: 'É preciso reservar?',
		a: 'Não há reservas em linha. É uma tasca de bairro, com poucas mesas, onde se entra e se espera por uma: para grupos maiores vale a pena chegar cedo.',
	},
	{
		q: 'O que se come?',
		a: 'Peixe grelhado na brasa — dourada, robalo, salmão — servido inteiro com batata e legumes, prato do dia, carnes na brasa, bitoques e sopa. A carta está escrita à mão na ardósia da porta e muda todos os dias.',
	},
	{
		q: 'Há opções veganas?',
		a: 'Sim. A ardósia tem uma secção «Vegan» com salsichas de soja, alheira de soja, hambúrguer de soja e bitoque de seitan, todos com batata e arroz, a 10 €.',
	},
	{
		q: 'Quanto custa uma refeição?',
		a: 'É uma casa de preços de bairro: a sopa custa 2 €, os pratos do dia e as carnes na brasa andam pelos 10 €, e o peixe entre 12 € e 14 €. São os valores da ardósia fotografada em abril de 2026; confirma no local.',
	},
	{
		q: 'Onde fica exatamente?',
		a: 'Na Calçada de Sant\'Ana, 139, em Arroios, com a porta verde e o número 139 por cima. Fica a poucos minutos a pé do metro de Martim Moniz e do Miradouro do Torel, numa das calçadas que sobem para o Campo dos Mártires da Pátria.',
	},
	{
		q: 'Porque é que no Google Maps aparece «Traditional restaurant»?',
		a: 'É o nome genérico com que a ficha está publicada no Google. Na porta, o letreiro e a ardósia dizem «A Tasca do Béco»: é o mesmo restaurante, na Calçada de Sant\'Ana, 139.',
	},
];
