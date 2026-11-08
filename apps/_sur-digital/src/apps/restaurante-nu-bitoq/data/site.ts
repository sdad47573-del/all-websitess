/**
 * Nu Bitoq · dados do negócio
 *
 * Tudo o que aparece na web vive aqui. As fotografias são as do perfil público
 * do restaurante em Google Maps (ver `.maps-manifest.json`); a carta segue o
 * menu de entrega publicado pela casa no Uber Eats.
 */

export const BUSINESS = {
	name: 'Nu Bitoq',
	mark: 'NB',
	street: 'Praceta 5 de Outubro, 9',
	postalCode: '2845-425',
	city: 'Amora',
	region: 'Setúbal',
	regionName: 'Distrito de Setúbal',
	country: 'PT',
	phone: '934 718 760',
	phoneHref: 'tel:+351934718760',
	siteUrl: 'https://www.sur-digital.com/restaurante-nu-bitoq',
	featureId: '0xd194b1a373d50a1:0xa086164a9bb5747',
	placeId: 'ChIJoVA9NxpLGQ0RR1e7qWRhCAo',
	rating: 4.5,
	reviewsCount: 371,
	geo: { lat: 38.6279678, lng: -9.1123781 },
};

const CID = '722934825165215559';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/RESTAURANTE+NU+BITOQ/@38.6279678,-9.1123781,17z/data=!3m1!4b1!4m6!3m5!1s0xd194b1a373d50a1:0xa086164a9bb5747!8m2!3d38.6279678!4d-9.1123781!16s%2Fg%2F11ty4mf5tk',
	cid: `https://www.google.com/maps?cid=${CID}`,
	reviews: `https://www.google.com/maps?cid=${CID}`,
	embed:
		'https://www.google.com/maps?q=38.6279678,-9.1123781&hl=pt-PT&z=17&output=embed',
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.6279678,-9.1123781',
};

export const HOURS = [
	{ day: 'Segunda-feira', value: 'Encerrado', closed: true },
	{ day: 'Terça-feira', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Quarta-feira', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Quinta-feira', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Sexta-feira', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Sábado', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Domingo', value: '12:00–15:00' },
];

export const SERVICOS = [
	'Especialidade em bitoques',
	'Cozinha portuguesa',
	'Reservas por telefone',
	'Entrega em casa',
	'Lugares acessíveis',
	'Amora · Seixal',
];

/** Os três gestos da casa. */
export const PASSOS = [
	{
		icon: '01',
		title: 'Escolhe o bitoque',
		text: 'Treze versões, todas servidas em frigideira: alcatra, lombo, javali, salmão, atum, beringela ou frango.',
	},
	{
		icon: '02',
		title: 'Escolhe o molho',
		text: 'Francesinha, holandês, caril, teriyaki ou ervas. É o molho que muda o prato, não a carne.',
	},
	{
		icon: '03',
		title: 'Vem com tudo',
		text: 'Ovo, batata e arroz fazem parte do prato. As entradas e os cocktails completam a mesa.',
	},
];

/**
 * Carta copiada do menu de entrega da casa (Uber Eats). Os preços podem
 * diferir dos do salão; a web diz isso ao cliente.
 */
export const MENU = [
	{
		title: 'Bitoq’s de alcatra',
		items: [
			{
				name: 'Bitoq Tripeiro com alcatra',
				note: 'Molho de francesinha, ovo, linguiça e batata palito.',
				price: '16,50 €',
			},
			{
				name: 'Bitoq Benedict com alcatra',
				note: 'Molho holandês, presunto, arroz, ovo e batata meia cana.',
				price: '16,50 €',
			},
			{
				name: 'Bitoq Goa com alcatra',
				note: 'Molho de caril, arroz, batata meia cana e ovo.',
				price: '16,50 €',
			},
			{
				name: 'Bitoq Asiático com alcatra',
				note: 'Molho teriyaki, arroz com furikake, ovo e batata meia cana.',
				price: '16,50 €',
			},
		],
	},
	{
		title: 'Bitoq’s de lombo e javali',
		items: [
			{
				name: 'Bitoq Benedict com lombo',
				note: 'Molho holandês, presunto, arroz, ovo e batata meia cana.',
				price: '21,50 €',
			},
			{
				name: 'Bitoq Goa com lombo',
				note: 'Molho de caril, arroz, batata meia cana e ovo.',
				price: '21,50 €',
			},
			{
				name: 'Bitoq Asiático com lombo',
				note: 'Molho teriyaki, arroz com furikake, ovo e batata meia cana.',
				price: '21,50 €',
			},
			{
				name: 'Bitoq Tropeiro com lombo',
				note: 'Molho de francesinha, ovo, linguiça e batata palito.',
				price: '21,50 €',
			},
			{
				name: 'Bitoq Alentejano com lombo de javali',
				note: 'Piso de ervas, batata em rodelas, arroz e ovo.',
				price: '21,50 €',
			},
		],
	},
	{
		title: 'Peixe, frango e vegetal',
		items: [
			{
				name: 'Bitoq Finório com salmão',
				note: 'Molho holandês, ovas de trufa, óleo de salsa, ovo e batata meia cana.',
				price: '17,50 €',
			},
			{
				name: 'Bitoq à Pescador com bife de atum',
				note: 'Molho de cebolada, salsa, batata doce, arroz e ovo.',
				price: '16,50 €',
			},
			{
				name: 'Bitoq da Horta com bife de beringela',
				note: 'Molho de natas e alho assado, teriyaki, arroz com furikake, ovo e batata meia cana.',
				price: '16,50 €',
			},
			{
				name: 'Bitoq Goa com frango',
				note: 'Molho de caril, arroz, batata meia cana e ovo.',
				price: '13,50 €',
			},
		],
	},
	{
		title: 'Entradas',
		items: [
			{
				name: 'Couvert',
				note: 'Pão, azeitonas temperadas e manteiga de alho.',
				price: '5,50 €',
			},
			{
				name: 'Ovos mexidos com farinheira',
				note: 'Enchido típico de sabor fumado, uma dose para partilhar.',
				price: '7,00 €',
			},
			{
				name: 'Ovos mexidos com batata frita, linguiça e presunto',
				note: 'Uma dose, para começar.',
				price: '8,00 €',
			},
			{
				name: 'Ovos mexidos com cogumelos e salmão',
				note: 'Com molho teriyaki.',
				price: '8,00 €',
			},
			{
				name: 'Ovos mexidos com linguiça e molho de francesinha',
				note: 'Uma dose.',
				price: '8,00 €',
			},
			{
				name: 'Pica-pau',
				note: 'Molho da casa.',
				price: '13,00 €',
			},
			{
				name: 'Gambas',
				note: 'Molho da casa.',
				price: '15,50 €',
			},
		],
	},
];

export const REVIEWS = [
	{
		rating: 5,
		text: 'Sobremesa bolo de chocolate e o crepe de pastel de nata uma delícia!',
	},
	{
		rating: 5,
		text: 'Tudo ótimo, boa decoração, boa comida, carne super tenra.',
	},
	{
		rating: 5,
		text: 'Pratos muito variados, abrindo um vasto leque de opções para todos os gostos.',
	},
];

export const FAQ = [
	{
		q: 'É preciso reservar?',
		a: 'A casa aceita reservas pelo 934 718 760, e ao jantar convém fazer: a sala enche e há menus para grupos. Também se pode aparecer sem reserva, mas o telefone é o caminho mais seguro.',
	},
	{
		q: 'Que horário tem?',
		a: 'De terça a sábado abre ao almoço (12:00–15:00) e ao jantar (19:00–23:00). Ao domingo só serve almoço e à segunda-feira está encerrado.',
	},
	{
		q: 'O que é um bitoque da casa?',
		a: 'É um bitoque servido dentro da frigideira, com molho, ovo, batata e arroz. A casa faz treze versões: alcatra, lombo, javali, salmão, atum, frango e beringela, com molhos que vão do holandês ao caril, passando pelo teriyaki e pela francesinha.',
	},
	{
		q: 'Há opções vegetarianas?',
		a: 'Sim: o Bitoq da Horta leva bife de beringela, molho de natas e alho assado, teriyaki, arroz com furikake, ovo e batata meia cana. Está na carta a 16,50 €.',
	},
	{
		q: 'Quanto custa comer aqui?',
		a: 'No menu de entrega, as entradas vão dos 5,50 € aos 15,50 € e os bitoques dos 13,50 € aos 21,50 €. São preços de entrega: no salão podem ser diferentes, por isso confirma no telefone ou na carta da mesa.',
	},
	{
		q: 'Fazem entregas em casa?',
		a: 'Sim, através do Uber Eats, com o menu e os preços publicados nessa plataforma. Para comer no salão, o contacto é o telefone 934 718 760.',
	},
	{
		q: 'Onde fica e há acesso para cadeiras de rodas?',
		a: 'Na Praceta 5 de Outubro, 9, em Amora (Seixal), no Bairro dos Corticeiros. A ficha de Google indica lugares para pessoas em cadeiras de rodas.',
	},
];
