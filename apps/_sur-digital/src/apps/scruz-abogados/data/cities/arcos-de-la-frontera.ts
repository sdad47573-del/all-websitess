import type { CityLanding } from './types';

/**
 * Arcos de la Frontera (Cádiz), Tribunal de Instancia de Arcos.
 *
 * Es la cabecera de la Sierra de Cádiz y pasó a Tribunal de Instancia el 1 de
 * julio de 2025. Su economía es ganadera y agrícola, con un peso importante del
 * turismo rural y del olivar, muy por debajo del de la costa.
 */
export const ArcosDeLaFrontera: CityLanding = {
	city: 'Arcos de la Frontera',
	slug: 'arcos-de-la-frontera',
	province: 'Cádiz',
	area: 'Sierra de Cádiz',
	tribunal: 'Tribunal de Instancia de Arcos de la Frontera',
	municipios: 'Arcos de la Frontera y los municipios de la Sierra de Cádiz que dependen de él',
	office: 'lucena',
	travel: 'una hora y cuarenta y cinco minutos desde la oficina de Lucena',
	sectors: 'ganadería, olivar, agricultura de secano, turismo rural',
	matters: 'laboral agrario, herencias de fincas, familia, administrativas, multas',
	links: [
		{ label: 'Abogados en Chiclana de la Frontera', href: '/abogados-en-chiclana-de-la-frontera/', description: 'Chiclana y la costa de la bahía.' },
		{ label: 'Abogados en San Fernando', href: '/abogados-en-san-fernando/', description: 'San Fernando y la bahía.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Arcos de la Frontera | Laboral y herencias',
	description:
		'Abogados para clientes de Arcos de la Frontera y la Sierra de Cádiz: laboral agrario, herencias de fincas y familia. Primera consulta gratuita.',
	keywords:
		'abogado en Arcos de la Frontera, abogados Arcos de la Frontera, laboral agrario Arcos, herencias Sierra de Cádiz, fincas Arcos de la Frontera, familias Arcos',
	eyebrow: 'Asesoría jurídica en Arcos de la Frontera',
	headline: 'Abogados para clientes de Arcos y la Sierra de Cádiz',
	intro:
		'Arcos es la cabecera de la Sierra de Cádiz: ganadería, olivar y agricultura de secano. El turismo rural existe, pero es de otro orden que en la costa, y las consultas también: fincas, contratos y herencias.',
	highlights: [
		'Contratos de ganadería y olivares',
		'Herencias y particiones de fincas',
		'Familia, sucesiones y testamentos',
		'Recursos contra multas y expedientes',
	],
	sections: [
		{
			title: 'La Sierra, no la costa',
			content:
				'El eje de la consulta en la Sierra es la propiedad rural: herencias de fincas y olivares, contratos de pastoreo y reparto de dosis. A eso se suman los expedientes administrativos sobre montes y caminos, que en esta zona pesan más que en la costa.',
			points: [
				'Contratos pastoriles y de arrendamiento de fincas',
				'Partición de herencias con fincas rusticas',
				'Familia y sucesiones',
				'Multas y expedientes administrativos',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Arcos de la Frontera, que lo es desde el 1 de julio de 2025, sirve a Arcos y a los municipios de la Sierra que dependen de él. Lo social va a la Sección de lo Social del Tribunal de Instancia de Cádiz.',
		},
		{
			title: 'Hora y cuarenta y cinco minutos',
			content:
				'No tenemos despacho en Arcos. Atendemos desde Lucena, a una hora y cuarenta y cinco minutos. La primera valoración se puede hacer por videollamada, y el desplazamiento se acuerda por escrito.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Arcos de la Frontera?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga. Atendemos desde Lucena, a una hora y cuarenta y cinco minutos. La primera consulta es gratuita.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Arcos?',
			answer:
				'Arcos de la Frontera y los municipios de la Sierra de Cádiz que dependen de él. Lo social se tramita en la Sección de lo Social del Tribunal de Instancia de Cádiz.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Puede hacerse en Lucena o por videollamada.',
		},
	],
};
