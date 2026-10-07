import type { CityLanding } from './types';

/**
 * Córdoba capital, Tribunal de Instancia de Córdoba.
 *
 * Es el partido judicial nº 8 de la provincia y uno de los que pasó a Tribunal
 * de Instancia el 31 de diciembre de 2025. Es la capital de provincia, así que
 * concentra todos los órganos especializados que en las cabeceras menores
 * Sección de lo Social, lo Mercantil, lo Contencioso-Administrativo y la Audiencia
 * Provincial. A una hora de Lucena, se atiende desde la oficina de Lucena.
 */
export const Cordoba: CityLanding = {
	city: 'Córdoba',
	slug: 'cordoba',
	province: 'Córdoba',
	area: 'Córdoba capital',
	tribunal: 'Tribunal de Instancia de Córdoba y la Audiencia Provincial, con todas las secciones de la capital',
	municipios: 'Córdoba capital y los municipios que dependen de su partido judicial',
	office: 'lucena',
	travel: 'una hora desde la oficina de Lucena por la A-4',
	sectors: 'servicios y administración, turismo, comercio, agroindustria, construcción',
	matters: 'familia, civil, laboral, contencioso-administrativo, mercantil, penal',
	links: [
		{ label: 'Abogados en Puente Genil', href: '/abogados-en-puente-genil/', description: 'Puente Genil y la Subbética.' },
		{ label: 'Abogados en Rute', href: '/abogados-en-rute/', description: 'Rute y la Subbética.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Córdoba capital | Familia y laboral',
	description:
		'Abogados para clientes de Córdoba capital: familia, laboral, contencioso-administrativo y mercantil. Consulta gratuita.',
	keywords:
		'abogado en Córdoba capital, abogados Córdoba, familia Córdoba, laboral Córdoba, contencioso administrativo Córdoba, mercantil Córdoba, abogado testamentos Córdoba, penal Córdoba',
	eyebrow: 'Asesoría jurídica en Córdoba capital',
	headline: 'Abogados para clientes de Córdoba capital',
	intro:
		'Córdoba capital concentra todos los órganos especializados de la provincia: la Sección de lo Social, lo Mercantil, lo Contencioso-Administrativo y la Audiencia Provincial. Está a una hora de Lucena por la A-4, así que se atiende desde la oficina de Lucena.',
	highlights: [
		'Familia, custodias y herencias',
		'Laboral ante la Sección de lo Social de Córdoba',
		'Contencioso-administrativo y recursos',
		'Mercantil y constitución de sociedades',
	],
	sections: [
		{
			title: 'Donde está todo lo especializado',
			content:
				'La diferencia con una cabecera de partido menor es que en Córdoba capital se tramitan directamente los órganos especializados de la provincia: lo Social, lo Mercantil y lo Contencioso-Administrativo. Para consultas de familia, civil o mercantil, casi siempre compensa empezar en la capital antes que en un partido de la comarca.',
			points: [
				'Divorcios, custodias, herencias y testamentos',
				'Reclamaciones laborales ante la Sección de lo Social',
				'Recursos contra actos administrativos',
				'Constitución y defensa de sociedades',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'En Córdoba capital está el Tribunal de Instancia de Córdoba, que lo es desde el 31 de diciembre de 2025, y la Audiencia Provincial. Lo civil, familia e instrucción se sirven en el Tribunal de Instancia. Lo social, en la Sección de lo Social; lo mercantil, en su sección; y lo administrativo, en la Sala de lo Contencioso-Administrativo, todas en la ciudad.',
		},
		{
			title: 'Una hora por la A-4',
			content:
				'No tenemos despacho abierto en Córdoba capital. Está a una hora por la A-4 desde la oficina de Lucena, así que la consulta presencial es perfectamente viable y la primera valoración es gratuita.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Córdoba capital?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga, y no hay puerta abierta en Córdoba capital. Atendemos desde Lucena, a una hora por la A-4. La primera consulta es gratuita.',
		},
		{
			question: '¿Dónde se tramita un juicio social en Córdoba?',
			answer:
				'En la Sección de lo Social del Tribunal de Instancia de Córdoba, no en los juzgados de primera instancia de cada pueblo. Lo mercantil y lo contencioso-administrativo también se tramitan en la capital, en sus respectivas secciones y salas.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Se revisan los documentos, se identifica la materia y el órgano competente, y se dan las opciones con su coste.',
		},
	],
};
