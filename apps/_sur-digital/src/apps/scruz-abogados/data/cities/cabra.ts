import type { CityLanding } from './types';

/**
 * Cabra (Córdoba), partido judicial nº 10: Cabra, Doña Mencía, Nueva Carteya y
 * Zuheros.
 *
 * Cabra es la capital de la Subbética occidental. Su partido alcanza a cuatro
 * municipios, entre ellos Zuheros, con el monasterio de La Valtieva. La
 * economía es el queso de cabra, el olivar y el turismo rural.
 */
export const Cabra: CityLanding = {
	city: 'Cabra',
	slug: 'cabra',
	province: 'Córdoba',
	area: 'Subbética occidental',
	tribunal: 'Tribunal de Instancia de Cabra, partido judicial número 10 de Córdoba',
	municipios: 'Cabra, Doña Mencía, Nueva Carteya y Zuheros',
	office: 'lucena',
	travel: 'unos 30 minutos desde la oficina de Lucena',
	sectors: 'quesería de cabra, turismo rural, olivar y aceite, hostelería',
	matters: 'alquiler turístico, laboral de la quesería, herencias de fincas, familia, multas',
	links: [
		{ label: 'Abogados en Baena', href: '/abogados-en-baena/', description: 'Baena, Luque y Valenzuela.' },
		{ label: 'Abogados en Rute', href: '/abogados-en-rute/', description: 'Rute y la Subbética.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Cabra (Córdoba) | Herencias y laboral',
	description:
		'Abogados para clientes de Cabra, Doña Mencía, Nueva Carteya y Zuheros: laboral agrario, herencias y familia. Consulta gratuita.',
	keywords:
		'abogado en Cabra, abogados Cabra, Cabra Córdoba abogado, herencias Cabra, laboral Cabra, Doña Mencía abogado, Zuheros abogado, Nueva Carteya abogado',
	eyebrow: 'Asesoría jurídica en Cabra y la Subbética occidental',
	headline: 'Abogados para clientes de Cabra y su comarca',
	intro:
		'Cabra es la capital de la Subbética occidental y cabeza de un partido de cuatro municipios, entre ellos Zuheros. Su economía es el queso de cabra, el olivar y el turismo rural. Está a unos 30 minutos de la oficina de Lucena.',
	highlights: [
		'Alquiler de vivienda con fines turísticos',
		'Herencias y particiones de fincas',
		'Familia, custodias y sucesiones',
		'Quesería y producto con denominación de origen',
	],
	sections: [
		{
			title: 'Cuatro municipios, un solo tribunal',
			content:
				'En Cabra conviven dos economías muy distintas. La primera es la quesería y la agricultura de la Subbética occidental, con sus contratos de temporada. La segunda es el turismo de la comarca, con el monasterio de La Valtieva en Zuheros y el tirón de los pueblos de la Sierra. Y hay una tercera: mucha gente vuelve a heredar la casa de la familia.',
			points: [
				'Contratos de temporada en quesería y olivar',
				'Partición de herencias de fincas',
				'Divorcios y modificación de medidas',
				'Constitución de sociedades y consultas mercantiles',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Cabra es el órgano de primera instancia y de instrucción del partido. Ahí van familia, herencias, civil e instrucción. Los asuntos sociales van a la Sección de lo Social del Tribunal de Instancia de Córdoba, no a Cabra.',
		},
		{
			title: 'Treinta minutos de Lucena',
			content:
				'No hay despacho abierto en Cabra ni en el resto de su partido, pero la distancia es corta: unos 30 minutos desde la oficina de Lucena. La consulta presencial es lo habitual y la primera valoración es gratuita.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Cabra?',
			answer:
				'No tenemos despacho abierto en Cabra, Doña Mencía, Nueva Carteya ni Zuheros. La oficina está en Lucena, a unos 30 minutos. La primera consulta es gratuita.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Cabra?',
			answer:
				'Cabra, Doña Mencía, Nueva Carteya y Zuheros. Es el partido judicial número 10 de Córdoba. Los juicios sociales van a Córdoba capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Puede hacerse en Lucena o por videollamada, sin compromiso.',
		},
	],
};
