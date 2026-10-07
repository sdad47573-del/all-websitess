import type { CityLanding } from './types';

/**
 * Baza (Granada), Tribunal de Instancia de Baza, partido judicial número 6.
 *
 * Baza es una de las plazas más extensas de Granada en superficie y una de las
 * más alejadas de las dos oficinas. Su partido alcanza a ocho municipios de la
 * Alpujarra granadina y la Vega alta, y su economía es ganadera y agrícola,
 * con un peso importante del melón y la alfalfa.
 */
export const Baza: CityLanding = {
	city: 'Baza',
	slug: 'baza',
	province: 'Granada',
	area: 'Alpujarra granadina y Vega alta',
	tribunal: 'Tribunal de Instancia de Baza, partido judicial número 6 de Granada',
	municipios:
		'Baza, Zújar, Caniles, Benamaurel, Freila, Cuevas del Campo, Cortes de Baza y Cúllar',
	office: 'lucena',
	travel: 'unas dos horas desde la oficina de Lucena',
	sectors: 'ganadería ovina, agricultura de regadío, melón y alfalfa, turismo de la Alpujarra',
	matters: 'laboral ganadero, herencias de fincas, familia, procedimientos administrativos, multas',
	links: [
		{ label: 'Abogados en Huéscar', href: '/abogados-en-huescar/', description: 'Huéscar y el altiplano granadino.' },
		{ label: 'Abogados en Guadix', href: '/abogados-en-guadix/', description: 'Guadix y la Vega alta.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Baza (Granada) | Ganadería y herencias',
	description:
		'Abogados para clientes de Baza y la Alpujarra granadina: laboral ganadero, herencias de fincas y familia. Primera consulta gratuita.',
	keywords:
		'abogado en Baza Granada, abogados Baza, laboral ganadero Baza, herencias Baza, Alpujarra granadina abogado, Zújar abogado, Caniles abogado, Baza familia abogado',
	eyebrow: 'Asesoría jurídica en Baza y la Alpujarra granadina',
	headline: 'Abogados para clientes de Baza y la Alpujarra granadina',
	intro:
		'Baza es una de las plazas más extensas de Granada y de las más alejadas de nuestras oficinas. Su partido alcanza a ocho municipios, con una economía de ganadería ovina y agricultura de regadío.',
	highlights: [
		'Contratos de ganadería y agricultura de regadío',
		'Herencias y particiones de fincas extensas',
		'Familia y sucesiones',
		'Recursos contra multas y expedientes',
	],
	sections: [
		{
			title: 'Ocho municipios y mucha tierra',
			content:
				'El partido de Baza alcanza a Baza, Zújar, Caniles, Benamaurel, Freila, Cuevas del Campo, Cortes de Baza y Cúllar. Con tantos municipios, la consulta típica combina dos cosas: la actividad ganadera y la tierra. Contratos de trashumancia, herencias de fincas grandes y expedientes administrativos.',
			points: [
				'Contratos de ganadería y trashumancia',
				'Partición de herencias con fincas extensas',
				'Divorcios y modificación de medidas',
				'Multas y expedientes administrativos',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Baza es el órgano de primera instancia y de instrucción del partido, desde el 2 de julio de 2025. Ahí van familia, herencias, civil e instrucción. Lo social va a la Sección de lo Social del Tribunal de Instancia de Granada.',
		},
		{
			title: 'Dos horas desde Lucena',
			content:
				'No hay despacho abierto en Baza. Es una de las plazas más alejadas que atendemos, a unas dos horas de Lucena. La primera valoración se hace por videollamada, y solo se viaja físicamente cuando el acto lo exige.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Baza?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga, y no hay puerta abierta en Baza. Atendemos desde Lucena, a unas dos horas. La primera consulta es gratuita y se puede hacer por videollamada.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Baza?',
			answer:
				'Baza, Zújar, Caniles, Benamaurel, Freila, Cuevas del Campo, Cortes de Baza y Cúllar. Lo social se tramita en Granada capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. No hace falta desplazarse para la primera valoración.',
		},
	],
};
