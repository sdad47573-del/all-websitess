import type { CityLanding } from './types';

/**
 * Chiclana de la Frontera (Cádiz), Tribunal de Instancia de Chiclana.
 *
 * La comarca de la Bahía de Cádiz tiene un peso alto de turismo de playa, pesca
 * y agricultura, y eso genera dos bloques muy distintos de consultas: el laboral
 * estacional y la propiedad horizontal. La oficina está en Lucena, a unas dos
 * horas y cuarto, así que la página lo dice de frente.
 */
export const Chiclana: CityLanding = {
	city: 'Chiclana de la Frontera',
	slug: 'chiclana-de-la-frontera',
	province: 'Cádiz',
	area: 'Bahía de Cádiz',
	tribunal: 'Tribunal de Instancia de Chiclana de la Frontera',
	municipios: 'Chiclana de la Frontera, en la comarca de la Bahía de Cádiz',
	office: 'lucena',
	travel: 'unas dos horas y cuarto desde la oficina de Lucena',
	sectors: 'turismo de playa, pesca, agricultura, construcción, hostelería',
	matters: 'laboral estacional, propiedad horizontal, familia, herencias, multas',
	links: [
		{ label: 'Abogados en San Fernando', href: '/abogados-en-san-fernando/', description: 'San Fernando y la bahía.' },
		{ label: 'Abogados en Arcos de la Frontera', href: '/abogados-en-arcos-de-la-frontera/', description: 'La Sierra de Cádiz.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Chiclana de la Frontera | Laboral estacional',
	description:
		'Abogados para clientes de Chiclana de la Frontera: laboral estacional, propiedad horizontal, familia y multas. Consulta gratuita.',
	keywords:
		'abogado en Chiclana de la Frontera, abogados Chiclana, laboral estacional Chiclana, propiedad horizontal Chiclana, herencias Chiclana, multas Chiclana, Bahía de Cádiz abogado',
	eyebrow: 'Asesoría jurídica en Chiclana de la Frontera',
	headline: 'Abogados para clientes de Chiclana de la Frontera',
	intro:
		'Chiclana vive del turismo de playa, la pesca y la agricultura. Eso produce dos consultas muy distintas: el laboral estacional y la propiedad horizontal de las urbanizaciones de la bahía.',
	highlights: [
		'Contratos de temporada en hostelería y comercio',
		'Propiedad horizontal en urbanizaciones de la bahía',
		'Herencias y particiones',
		'Recursos contra multas municipales',
	],
	sections: [
		{
			title: 'Dos economías en un mismo municipio',
			content:
				'La primera es la turismo de playa: hostelería, comercio y contratos que empiezan y acaban con la temporada. La segunda es la agricultura y la pesca, con sus contratos y sus ayudas. A eso se suman las comunidades de propietarios de urbanizaciones, que funcionan casi como una administración propia.',
			points: [
				'Contratos de temporada y liquidación',
				'Cuotas, obras y juntas de propietarios',
				'Partición de herencias',
				'Recursos contra sanciones municipales',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Chiclana de la Frontera es el órgano de primera instancia del municipio y de su comarca. Ahí van familia, herencias, civil e instrucción. Los asuntos sociales van a la Sección de lo Social del Tribunal de Instancia de Cádiz, y los administrativos a lo Contencioso-Administrativo de la misma ciudad.',
		},
		{
			title: 'Más de dos horas de distancia',
			content:
				'No tenemos despacho en Chiclana y preferimos decirlo claro. La oficina está en Lucena, a unas dos horas y cuarto. La primera valoración se hace por videollamada o en Lucena, y solo se viaja cuando el acto lo exige.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Chiclana de la Frontera?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga, y no hay puerta abierta en Chiclana. Atendemos desde Lucena, a unas dos horas y cuarto. La primera consulta es gratuita y puede hacerse por videollamada.',
		},
		{
			question: '¿Qué juzgado corresponde a Chiclana?',
			answer:
				'El Tribunal de Instancia de Chiclana de la Frontera, para familia, herencias, civil e instrucción. Los juicios sociales van a la Sección de lo Social del Tribunal de Instancia de Cádiz.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Se revisan los documentos, se identifica la materia y el órgano competente, y se dan las opciones con su coste aproximado.',
		},
	],
};
