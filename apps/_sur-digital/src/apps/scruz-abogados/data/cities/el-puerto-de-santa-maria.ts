import type { CityLanding } from './types';

/**
 * El Puerto de Santa María (Cádiz), Tribunal de Instancia propio.
 *
 * Es una de las plazas con más peso turístico de la Bahía y uno de los partidos
 * que pasaron a Tribunal de Instancia el 31 de diciembre de 2025. Su economía
 * mezcla turismo, industria vitivinícola y el comercio del centro histórico.
 */
export const ElPuertoDeSantaMaria: CityLanding = {
	city: 'El Puerto de Santa María',
	slug: 'el-puerto-de-santa-maria',
	province: 'Cádiz',
	area: 'Bahía de Cádiz',
	tribunal: 'Tribunal de Instancia de El Puerto de Santa María',
	municipios: 'El Puerto de Santa María, en la comarca de la Bahía de Cádiz',
	office: 'lucena',
	travel: 'unas dos horas desde la oficina de Lucena',
	sectors: 'turismo, industria vinícola, comercio del centro histórico, hostelería, pesquerías',
	matters: 'propiedad horizontal, laboral estacional, familia, herencias, multas',
	links: [
		{ label: 'Abogados en San Fernando', href: '/abogados-en-san-fernando/', description: 'San Fernando y la bahía.' },
		{ label: 'Abogados en Chiclana de la Frontera', href: '/abogados-en-chiclana-de-la-frontera/', description: 'Chiclana y la costa.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en El Puerto de Santa María | Propiedad horizontal',
	description:
		'Abogados para clientes de El Puerto de Santa María: propiedad horizontal, laboral estacional, familia y multas. Consulta gratuita.',
	keywords:
		'abogado El Puerto de Santa María, abogados El Puerto de Santa María, propiedad horizontal El Puerto, laboral El Puerto de Santa María, herencias El Puerto, turismo El Puerto de Santa María',
	eyebrow: 'Asesoría jurídica en El Puerto de Santa María',
	headline: 'Abogados para clientes de El Puerto de Santa María',
	intro:
		'El Puerto de Santa María mezcla turismo, industria del vino y el comercio de un centro histórico muy transitado. Es además uno de los partidos que pasó a Tribunal de Instancia a finales de 2025.',
	highlights: [
		'Propiedad horizontal en edificios del centro y de fuera de él',
		'Laboral estacional en hostelería y turismo',
		'Herencias, particiones ytestamentos',
		'Recursos contra multas y ordenanzas municipales',
	],
	sections: [
		{
			title: 'Turismo, vino y comercio histórico',
			content:
				'El centro histórico atrae visitas todo el año y la costa añade una temporada de verano fuerte. El vino tiene su propio peso en las consultas de empresa, y el comercio del centro arrastra buena parte de los litigios de propiedad horizontal.',
			points: [
				'Cuotas y obras en comunidades',
				'Contratos de temporada y finiquitos',
				'Testamentos y particiones',
				'Recursos contra ordenanzas municipales',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de El Puerto de Santa María es el órgano de primera instancia del municipio, y lo es desde el 31 de diciembre de 2025. Ahí van familia, herencias, civil e instrucción. Lo social va a la Sección de lo Social del Tribunal de Instancia de Cádiz.',
		},
		{
			title: 'Dos horas desde Lucena',
			content:
				'No tenemos despacho en El Puerto de Santa María. Atendemos desde la oficina de Lucena, a unas dos horas. La primera valoración se puede hacer por videollamada, y el desplazamiento se acuerda por escrito cuando el acto lo requiere.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en El Puerto de Santa María?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga. Atendemos desde Lucena, a unas dos horas. La primera consulta es gratuita y puede hacerse por videollamada.',
		},
		{
			question: '¿Qué juzgado corresponde a El Puerto de Santa María?',
			answer:
				'El Tribunal de Instancia de El Puerto de Santa María, que lo es desde el 31 de diciembre de 2025. Lo social se tramita en la Sección de lo Social del Tribunal de Instancia de Cádiz.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Se revisan los documentos y se indican las opciones con su coste.',
		},
	],
};
