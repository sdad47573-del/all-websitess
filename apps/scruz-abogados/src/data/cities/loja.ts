import type { CityLanding } from './types';

/**
 * Loja (Granada), Tribunal de Instancia de Loja, partido judicial número 1.
 *
 * Loja es la plaza más occidental de las que atendemos en Granada y la más
 * cercana a la oficina de Lucena. Su partido alcanza a diecinueve municipios
 * que van del البارrio rural de Íllora a la costa de Algarinejo, así que las
 * consultas van desde el olivar y la almendra hasta el turismo de playa.
 */
export const Loja: CityLanding = {
	city: 'Loja',
	slug: 'loja',
	province: 'Granada',
	area: 'Vega de Loja y Señorío',
	tribunal: 'Tribunal de Instancia de Loja, partido judicial número 1 de Granada',
	municipios:
		'Loja, Íllora, Montefrío, Alhama de Granada, Zafarraya, Algarinejo, Zagra, Huétor Tájar, Moraleda de Zafayona, Arenas del Rey, Jayena, Játar, Salar, Santa Cruz del Comercio, Ventas de Huelma, Villanueva Mesía, Agrón, Cacín y Fornes',
	office: 'lucena',
	travel: 'una hora y veinte minutos desde la oficina de Lucena',
	sectors: 'olivar y almendra, agricultura de la Vega, turismo, industria agroalimentaria',
	matters: 'laboral agrario, herencias de fincas, familia, recursos administrativos, contratos',
	links: [
		{ label: 'Abogados en Baza', href: '/abogados-en-baza/', description: 'Baza y la Alpujarra granadina.' },
		{ label: 'Abogados en Santa Fe', href: '/abogados-en-santa-fe/', description: 'Santa Fe y la Vega de Granada.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Loja (Granada) | Laboral agrario y herencias',
	description:
		'Abogados para clientes de Loja y la Vega granadina: laboral agrario, herencias de fincas, familia y recursos. A 1h20 de Lucena. Primera consulta gratuita.',
	keywords:
		'abogado en Loja Granada, abogados Loja, laboral agrario Loja, herencias Loja, olivar Loja, familia Loja, Vega de Loja abogado',
	eyebrow: 'Asesoría jurídica en Loja y la Vega granadina',
	headline: 'Abogados para clientes de Loja y su partido',
	intro:
		'Loja es el partido judicial número 1 de Granada y alcanza a diecinueve municipios. Su economía es olivar, almendra y agricultura de la Vega, con una parte de turismo que llega hasta la costa de Algarinejo.',
	highlights: [
		'Contratos agrarios de olivar y almendra',
		'Herencias y particiones de fincas',
		'Familia y sucesiones',
		'Recursos contra sanciones administrativas',
	],
	sections: [
		{
			title: 'Diecinueve municipios, un solo órgano',
			content:
				'El partido de Loja es de los más extensos de Granada: desde el olivar de Íllora y Montefrío hasta la costa de Algarinejo. Esa variedad se nota en las consultas. Lo más repetido son los contratos agrarios, las herencias de fincas y olivares, y los expedientes administrativos.',
			points: [
				'Contratos de temporada en el olivar',
				'Partición de herencias con fincas y olivos',
				'Divorcios y modificación de medidas',
				'Recursos y sanciones administrativas',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Loja es el órgano de primera instancia y de instrucción del partido, y lo es desde el 2 de julio de 2025. Ahí van familia, herencias, civil e instrucción. Los asuntos sociales van a la Sección de lo Social del Tribunal de Instancia de Granada, no a Loja.',
		},
		{
			title: 'Hora y veinte desde Lucena',
			content:
				'No tenemos despacho abierto en Loja. Es la plaza de Granada más cercana a la oficina de Lucena, a una hora y veinte minutos por la A-318. La primera valoración puede hacerse en Lucena o por videollamada.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Loja?',
			answer:
				'No. Atendemos desde la oficina de Lucena, a una hora y veinte minutos por la A-318. La primera consulta es gratuita y puede hacerse en Lucena o por videollamada.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Loja?',
			answer:
				'Loja, Íllora, Montefrío, Alhama de Granada, Zafarraya, Algarinejo, Zagra, Huétor Tájar, Moraleda de Zafayona, Arenas del Rey, Jayena, Játar, Salar, Santa Cruz del Comercio, Ventas de Huelma, Villanueva Mesía, Agrón, Cacín y Fornes. Lo social se tramita en Granada capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Se revisan los documentos y se indican las opciones con su coste.',
		},
	],
};
