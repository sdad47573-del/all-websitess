import type { CityLanding } from './types';

/**
 * Priego de Córdoba, partido judicial nº 9: Priego de Córdoba, Almedinilla,
 * Carcabuey y Fuente-Tójar.
 *
 * Priego es la capital de la Sierra de Córdoba y su partido alcanza a cuatro
 * municipios, todos de sierra. La economía es el turismo rural, la agricultura
 * y la artesanía. Está a unos 40 minutos de la oficina de Lucena.
 */
export const PriegoDeCordoba: CityLanding = {
	city: 'Priego de Córdoba',
	slug: 'priego-de-cordoba',
	province: 'Córdoba',
	area: 'Sierra de Córdoba',
	tribunal: 'Tribunal de Instancia de Priego de Córdoba, partido judicial número 9 de Córdoba',
	municipios: 'Priego de Córdoba, Almedinilla, Carcabuey y Fuente-Tójar',
	office: 'lucena',
	travel: 'unos 40 minutos desde la oficina de Lucena',
	sectors: 'turismo rural, agricultura de sierra, artesanía, hostelería y comercio local',
	matters: 'turismo y alquiler, laboral estacional, herencias de fincas, familia, multas',
	links: [
		{ label: 'Abogados en Rute', href: '/abogados-en-rute/', description: 'Rute y la Subbética.' },
		{ label: 'Abogados en Cabra', href: '/abogados-en-cabra/', description: 'Cabra y la Subbética occidental.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Priego de Córdoba | Turismo rural y herencias',
	description:
		'Abogados para clientes de Priego de Córdoba, Almedinilla, Carcabuey y Fuente-Tójar: laboral estacional, herencias, familia y alquiler. A 40 minutos de Lucena.',
	keywords:
		'abogado en Priego de Córdoba, abogados Priego de Córdoba, laboral Priego, herencias Priego, alquiler Priego de Córdoba, Almedinilla abogado, Carcabuey abogado, Sierra de Córdoba abogado',
	eyebrow: 'Asesoría jurídica en Priego de Córdoba y la Sierra',
	headline: 'Abogados para clientes de Priego de Córdoba y su comarca',
	intro:
		'Priego de Córdoba es la capital de la Sierra y cabeza de un partido de cuatro municipios: Priego, Almedinilla, Carcabuey y Fuente-Tójar. Su economía es el turismo rural y la agricultura de sierra. Está a 40 minutos de la oficina de Lucena.',
	highlights: [
		'Contratos estacionales de hostelería y turismo',
		'Arrendamientos y vivienda de uso turístico',
		'Herencias y particiones de fincas',
		'Familia y procedimientos administrativos',
	],
	sections: [
		{
			title: 'Un partido de cuatro municipios de sierra',
			content:
				'Priego de Córdoba, Almedinilla, Carcabuey y Fuente-Tójar dependen del partido judicial número 9. Aquí la consulta gira en torno a tres cosas: el trabajo estacional del turismo, el alquiler de vivienda de uso turístico y las herencias de fincas de sierra, que suelen ser el motivo de volver a la comarca.',
			points: [
				'Contratos de temporada en hostelería',
				'Arrendamientos de vivienda de uso turístico',
				'Partición de herencias de fincas',
				'Expedientes y recursos administrativos',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Priego de Córdoba es el órgano de primera instancia y de instrucción del partido. Ahí van familia, herencias, civil e instrucción. Los asuntos sociales van a la Sección de lo Social del Tribunal de Instancia de Córdoba, no a Priego.',
		},
		{
			title: 'Cuarenta minutos de Lucena',
			content:
				'No tenemos despacho abierto en Priego ni en el resto de su partido. Está a unos 40 minutos de la oficina de Lucena. La primera valoración puede hacerse por videollamada, y la consulta presencial se acuerda por escrito.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Priego de Córdoba?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga, y no hay puerta abierta en Priego. Atendemos desde Lucena, a unos 40 minutos. La primera consulta es gratuita.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Priego de Córdoba?',
			answer:
				'Priego de Córdoba, Almedinilla, Carcabuey y Fuente-Tójar. Es el partido judicial número 9 de Córdoba. Los juicios sociales van a Córdoba capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Puede hacerse en Lucena o por videollamada, sin compromiso.',
		},
	],
};
