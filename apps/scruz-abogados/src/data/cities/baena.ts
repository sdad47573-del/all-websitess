import type { CityLanding } from './types';

/**
 * Baena (Córdoba), partido judicial nº 4: Baena, Luque y Valenzuela.
 *
 * Baena es la Denominación de Origen del aceite de oliva de la Subbética y su
 * partido es de los más pequeños de la provincia: solo tres municipios. Está a
 * unos 30 minutos de Lucena, así que se atiende desde la oficina de Lucena.
 */
export const Baena: CityLanding = {
	city: 'Baena',
	slug: 'baena',
	province: 'Córdoba',
	area: 'Subbética y Alto Guadalquivir',
	tribunal: 'Tribunal de Instancia de Baena, partido judicial número 4 de Córdoba',
	municipios: 'Baena, Luque y Valenzuela',
	office: 'lucena',
	travel: 'unos 30 minutos desde la oficina de Lucena',
	sectors: 'Denominación de Origen del aceite de oliva, turismo rural, industria auxiliar',
	matters: 'reclamaciones de la PAC, contratos del olivar, herencias de fincas, familia, multas',
	links: [
		{ label: 'Abogados en Cabra', href: '/abogados-en-cabra/', description: 'Cabra y la Subbética occidental.' },
		{ label: 'Abogados en Rute', href: '/abogados-en-rute/', description: 'Rute y la Subbética.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Baena (Córdoba) | Olivar y herencias',
	description:
		'Abogados para clientes de Baena, Luque y Valenzuela: laboral agrario, herencias de fincas y familia. Consulta gratuita.',
	keywords:
		'abogado en Baena, abogados Baena, Baena Córdoba abogado, laboral agrario Baena, herencias Baena, DO Baena abogado, Luque abogado, Valenzuela Baena abogado',
	eyebrow: 'Asesoría jurídica en Baena y el Alto Guadalquivir',
	headline: 'Abogados para clientes de Baena, Luque y Valenzuela',
	intro:
		'Baena es cabeza de uno de los partidos más pequeños de Córdoba: solo alcanza a Baena, Luque y Valenzuela. Su economía es el olivar y el aceite, y está a unos 30 minutos de la oficina de Lucena.',
	highlights: [
		'Reclamaciones de ayudas de la PAC',
		'Herencias y particiones de fincas',
		'Familia, custodias y sucesiones',
		'Marcas y denominaciones de origen del aceite',
	],
	sections: [
		{
			title: 'Un partido de tres municipios',
			content:
				'Lo que define la consulta en Baena es el aceite: es la Denominación de Origen de la Subbética, y buena parte del asunto es de cofradías y cosechas. A eso se suman las herencias de fincas, que en esta comarca son casi siempre de olivar, y las reclamaciones de ayudas de la PAC. El partido solo tiene tres municipios, así que el seguimiento no se complica: todo pasa por el mismo órgano.',
			points: [
				'Contratos de temporada en el olivar',
				'Partición de herencias de fincas olivareras',
				'Divorcios y modificación de medidas',
				'Constitución de sociedades y consultas mercantiles',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Baena es el órgano de primera instancia y de instrucción del partido. Ahí van familia, herencias, civil e instrucción. Los asuntos sociales no van a Baena: van a la Sección de lo Social del Tribunal de Instancia de Córdoba, en la capital.',
		},
		{
			title: 'Treinta minutos de Lucena',
			content:
				'No tenemos despacho abierto en Baena, pero la distancia es corta: unos 30 minutos desde la oficina de Lucena. La consulta presencial es lo habitual y la primera valoración es gratuita. También se puede hacer por videollamada.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Baena?',
			answer:
				'No tenemos despacho abierto en Baena, Luque ni Valenzuela. La oficina está en Lucena, a unos 30 minutos. La primera consulta es gratuita y puede hacerse presencialmente o por videollamada.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Baena?',
			answer:
				'Baena, Luque y Valenzuela. Es el partido judicial número 4 de Córdoba y solo comprende esos tres municipios. Los juicios sociales van a Córdoba capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Se revisan los documentos, se identifica la materia y el órgano competente, y se dan las opciones con su coste.',
		},
	],
};
