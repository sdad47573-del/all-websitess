import type { CityLanding } from './types';

/**
 * San Fernando (Cádiz), Tribunal de Instancia de San Fernando.
 *
 * Es la capital de la Bahía de Cádiz y el único de los tres partidos de la zona
 * con Sección Civil e de Instrucción propia. Su economía es doble: la/admin
 * publica y la industria naval por un lado, el comercio y la pesca por otro.
 */
export const SanFernando: CityLanding = {
	city: 'San Fernando',
	slug: 'san-fernando',
	province: 'Cádiz',
	area: 'Bahía de Cádiz',
	tribunal: 'Tribunal de Instancia de San Fernando, con Sección Civil e de Instrucción',
	municipios: 'San Fernando y los municipios de la Bahía de Cádiz que dependen de él',
	office: 'lucena',
	travel: 'unas dos horas y diez minutos desde la oficina de Lucena',
	sectors: 'industria naval, administración pública, comercio, pesca, hostelería',
	matters: 'laboral, familia, herencias, contencioso-administrativo, penal',
	links: [
		{ label: 'Abogados en Chiclana de la Frontera', href: '/abogados-en-chiclana-de-la-frontera/', description: 'Chiclana y la costa de la bahía.' },
		{ label: 'Abogados en El Puerto de Santa María', href: '/abogados-en-el-puerto-de-santa-maria/', description: 'La otra ciudad grande de la bahía.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en San Fernando | Laboral, familia y contencioso',
	description:
		'Abogados para clientes de San Fernando: laboral, familia, herencias, contencioso-administrativo y penal. Primera consulta gratuita por videollamada.',
	keywords:
		'abogado en San Fernando Cádiz, abogados San Fernando, laboral San Fernando Cádiz, familia San Fernando, herencias San Fernando, contencioso administrativo San Fernando, Bahía de Cádiz abogado',
	eyebrow: 'Asesoría jurídica en San Fernando',
	headline: 'Abogados para clientes de San Fernando',
	intro:
		'San Fernando es la capital de la Bahía de Cádiz y tiene dos economías: la industria naval y la administración pública por un lado, el comercio y la pesca por otro. Es, además, uno de los tres partidos de la zona con Sección propia.',
	highlights: [
		'Laboral en la industria naval y el sector público',
		'Familia, custodias y herencias',
		'Contencioso-administrativo y recursos',
		'Defensa penal',
	],
	sections: [
		{
			title: 'Un partido con Sección Civil e Instrucción',
			content:
				'San Fernando es de los pocos partidos de la Bahía con Sección Civil e de Instrucción propia, lo que concentra aquí buena parte de los asuntos civiles y penales de la zona. La consulta más frecuente sigue siendo laboral: contratos en la naval, en el comercio y en la administración.',
			points: [
				'Contratos y Convenios en la industria naval',
				'Divorcios, custodias y herencias',
				'Recursos contra actos administrativos',
				'Asistencia en audiencias y pleitos',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de San Fernando, con Sección Civil e de Instrucción, sirve a San Fernando y a los municipios de la bahía que dependen de él. Lo social va a la Sección de lo Social del Tribunal de Instancia de Cádiz, y lo contencioso-administrativo a su sala correspondiente.',
		},
		{
			title: 'Más de dos horas de distancia',
			content:
				'No hay despacho abierto en San Fernando. Atendemos desde Lucena, a unas dos horas y diez minutos. La primera consulta se hace por videollamada o en Lucena; los desplazamientos se acuerdan cuando el acto lo exige.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en San Fernando?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga, y no hay puerta abierta en San Fernando. Atendemos desde Lucena, a unas dos horas y diez minutos. La primera consulta es gratuita.',
		},
		{
			question: '¿Qué juzgado corresponde a San Fernando?',
			answer:
				'El Tribunal de Instancia de San Fernando, con Sección Civil e de Instrucción. Lo social va a la Sección de lo Social del Tribunal de Instancia de Cádiz.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Puede hacerse por videollamada sin necesidad de desplazarse.',
		},
	],
};
