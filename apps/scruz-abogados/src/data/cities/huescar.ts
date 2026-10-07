import type { CityLanding } from './types';

/**
 * Huéscar (Granada), Tribunal de Instancia de Huéscar, partido judicial número 8.
 *
 * Huéscar es la plaza más oriental de las que atendemos y la más distante de
 * las dos oficinas. Su partido solo alcanza a seis municipios, todos del
 * altiplano granadino, y su economía es ganadera y de agricultura de secano.
 */
export const Huescar: CityLanding = {
	city: 'Huéscar',
	slug: 'huescar',
	province: 'Granada',
	area: 'Altiplano granadino',
	tribunal: 'Tribunal de Instancia de Huéscar, partido judicial número 8 de Granada',
	municipios: 'Huéscar, Castril, Castilléjar, Galera, Orce y Puebla de Don Fadrique',
	office: 'lucena',
	travel: 'unas dos horas y veinte minutos desde la oficina de Lucena',
	sectors: 'ganadería ovina, agricultura de secano, turismo rural, energías renovables',
	matters: 'laboral ganadero, herencias de fincas, familia, procedimientos administrativos, multas',
	links: [
		{ label: 'Abogados en Baza', href: '/abogados-en-baza/', description: 'Baza y la Alpujarra granadina.' },
		{ label: 'Abogados en Guadix', href: '/abogados-en-guadix/', description: 'Guadix y la Vega alta.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Huéscar | Ganadería y herencias',
	description:
		'Abogados para clientes de Huéscar y el altiplano granadino: laboral ganadero, herencias de fincas y familia. Primera consulta gratuita.',
	keywords:
		'abogado en Huéscar, abogados Huéscar, ganadería Huéscar, herencias Huéscar, altiplano granadino abogado, Castril abogado, Orce abogado, Puebla de Don Fadrique abogado',
	eyebrow: 'Asesoría jurídica en Huéscar y el altiplano',
	headline: 'Abogados para clientes de Huéscar y el altiplano granadino',
	intro:
		'Huéscar es la plaza más oriental y más distante que atendemos. Su partido solo alcanza a seis municipios, todos del altiplano, con una economía de ganadería ovina y agricultura de secano.',
	highlights: [
		'Contratos de ganadería ovina y trashumancia',
		'Herencias y particiones de fincas de secano',
		'Familia y sucesiones',
		'Recursos contra expedientes administrativos',
	],
	sections: [
		{
			title: 'Seis municipios en el altiplano',
			content:
				'El partido de Huéscar comprende Huéscar, Castril, Castilléjar, Galera, Orce y Puebla de Don Fadrique. Todos comparten una economía de ganadería y secano, y eso se traduce en un tipo de consulta muy concreto: contratos de trashumancia, herencias de fincas extensas y expedientes administrativos sobre montes y aguas.',
			points: [
				'Contratos de trashumancia y ganadería',
				'Partición de herencias de fincas de secano',
				'Divorcios y modificación de medidas',
				'Expedientes y recursos administrativos',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Huéscar es el órgano de primera instancia y de instrucción del partido, desde el 2 de julio de 2025. Ahí van familia, herencias, civil e instrucción. Lo social va a la Sección de lo Social del Tribunal de Instancia de Granada, a más de cien kilómetros.',
		},
		{
			title: 'Más de dos horas de distancia',
			content:
				'No hay despacho abierto en Huéscar. Es la plaza más lejana de las que atendemos, a unas dos horas y veinte minutos de Lucena. La primera valoración se hace íntegramente por videollamada, y solo se viaja si el acto lo exige.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Huéscar?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga, y no hay puerta abierta en Huéscar. Atendemos desde Lucena, a unas dos horas y veinte minutos. La primera consulta es gratuita y se hace por videollamada.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Huéscar?',
			answer:
				'Huéscar, Castril, Castilléjar, Galera, Orce y Puebla de Don Fadrique. Lo social se tramita en Granada capital, que está a más de cien kilómetros.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Con esta distancia, la videollamada es la vía normal y funciona bien.',
		},
	],
};
