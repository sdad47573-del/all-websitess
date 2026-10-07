import type { CityLanding } from './types';

/**
 * Montilla (Córdoba), partido judicial nº 11.
 *
 * Montilla es la capital de la Campiña y cabeza de la Denominación de Origen
 * del vino Montilla-Moriles. Su partido alcanza a nueve municipios, la mayoría
 * de la provincia en número de municipios. A
 * 25 minutos de Lucena, se atiende desde la oficina de Lucena.
 */
export const Montilla: CityLanding = {
	city: 'Montilla',
	slug: 'montilla',
	province: 'Córdoba',
	area: 'Campiña Sur',
	tribunal: 'Tribunal de Instancia de Montilla, partido judicial número 11 de Córdoba',
	municipios:
		'Montilla, Fernán-Núñez, La Guijarrosa, Montalbán de Córdoba, Montemayor, La Rambla, San Sebastián de los Ballesteros, Santaella y La Victoria',
	office: 'lucena',
	travel: 'unos 25 minutos desde la oficina de Lucena',
	sectors: 'viñedo y vino Montilla-Moriles, industria vitivinícola, olivar, comercio local',
	matters: 'laboral del viñedo, contratos de la vendimia, herencias de fincas, familia, multas',
	links: [
		{ label: 'Abogados en Cabra', href: '/abogados-en-cabra/', description: 'Cabra y la Subbética occidental.' },
		{ label: 'Abogados en Rute', href: '/abogados-en-rute/', description: 'Rute y la Subbética.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Montilla | Viñedo, herencias y laboral',
	description:
		'Abogados para clientes de Montilla y la Campiña Sur: laboral agrario, herencias de fincas, familia y contratos. A 25 minutos de Lucena. Consulta gratuita.',
	keywords:
		'abogado en Montilla, abogados Montilla, Montilla Córdoba abogado, laboral Montilla, herencias Montilla, vino Montilla abogado, Fernán-Núñez abogado, La Rambla abogado',
	eyebrow: 'Asesoría jurídica en Montilla y la Campiña Sur',
	headline: 'Abogados para clientes de Montilla y la Campiña Sur',
	intro:
		'Montilla es la capital de la Campiña y cabeza de la Denominación de Origen del vino Montilla-Moriles. Su partido alcanza a nueve municipios. Está a 25 minutos de la oficina de Lucena.',
	highlights: [
		'Contratos del viñedo y del vino',
		'Herencias y particiones de fincas',
		'Familia, custodias y sucesiones',
		'Bodegas, elaboraciones y fiscalidad vitivinícola',
	],
	sections: [
		{
			title: 'Nueve municipios en la Campiña Sur',
			content:
				'Montilla, Fernán-Núñez, La Rambla, Montemayor y el resto de su partido dependen del número 11 de Córdoba. El eje de la consulta es el viñedo y el olivar, con sus contratos de temporada y sus herencias de fincas. También entran las consultas de familia y de empresas.',
			points: [
				'Contratos de la vendimia y la temporada estacional',
				'Partición de herencias de fincas',
				'Divorcios y modificación de medidas',
				'Constitución de sociedades y consultas mercantiles',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Montilla es el órgano de primera instancia y de instrucción del partido. Ahí van familia, herencias, civil e instrucción. Los asuntos sociales van a la Sección de lo Social del Tribunal de Instancia de Córdoba.',
		},
		{
			title: 'Veinticinco minutos',
			content:
				'No hay despacho abierto en Montilla, pero está a 25 minutos de la oficina de Lucena. Es una de las distancias más cortas de las que atendemos, así que la consulta presencial es lo habitual.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Montilla?',
			answer:
				'No tenemos despacho abierto en Montilla ni en su partido. La oficina está en Lucena, a unos 25 minutos. La primera consulta es gratuita.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Montilla?',
			answer:
				'Montilla, Fernán-Núñez, La Guijarrosa, Montalbán de Córdoba, Montemayor, La Rambla, San Sebastián de los Ballesteros, Santaella y La Victoria. Los juicios sociales van a Córdoba capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Puede hacerse en Lucena o por videollamada.',
		},
	],
};
