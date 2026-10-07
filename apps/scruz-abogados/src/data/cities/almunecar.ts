import type { CityLanding } from './types';

/**
 * Almuñécar (Granada), Tribunal de Instancia de Almuñécar, partido número 9.
 *
 * Almuñécar es el partido judicial más pequeño de Granada: solo alcanza a
 * cuatro municipios. Su economía es turística, con un peso muy alto de la
 * vivienda de veraneo y el alquiler, y eso marca el tipo de consulta.
 */
export const Almunecar: CityLanding = {
	city: 'Almuñécar',
	slug: 'almunecar',
	province: 'Granada',
	area: 'Costa Tropical',
	tribunal: 'Tribunal de Instancia de Almuñécar, partido judicial número 9 de Granada',
	municipios: 'Almuñécar, Jete, Lentegí y Otívar',
	office: 'malaga',
	travel: 'una hora y veinte minutos desde la oficina de Málaga',
	sectors: 'turismo de playa, vivienda de veraneo, hostelería, pesca, comercio local',
	matters: 'alquiler y vivienda, laboral estacional, propiedad horizontal, familia, multas',
	links: [
		{ label: 'Abogados en Motril', href: '/abogados-en-motril/', description: 'Motril y el resto de la Costa Tropical.' },
		{ label: 'Abogados en Torrox', href: '/abogados-en-torrox/', description: 'La Axarquía malagueña, al otro lado de la costa.' },
		{ label: 'Oficina de Málaga', href: '/abogados-en-malaga', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Almuñécar | Alquiler, vivienda y laboral',
	description:
		'Abogados para clientes de Almuñécar y la Costa Tropical: alquiler y vivienda, laboral estacional, familia y multas. Consulta gratuita.',
	keywords:
		'abogado en Almuñécar, abogados Almuñécar, alquiler Almuñécar, laboral Almuñécar, propiedad horizontal Almuñécar, familia Almuñécar, Costa Tropical abogado, vivienda Almuñécar',
	eyebrow: 'Asesoría jurídica en Almuñécar',
	headline: 'Abogados para clientes de Almuñécar',
	intro:
		'Almuñécar es el partido judicial más pequeño de Granada: solo cuatro municipios. Su economía es turística, con un peso alto de la vivienda de veraneo y el alquiler, y por eso las consultas giran alrededor del trabajo y de la vivienda.',
	highlights: [
		'Arrendamientos de temporada y vivienda habitual',
		'Contratos de temporada en hostelería y turismo',
		'Propiedad horizontal en urbanizaciones',
		'Familia, herencias y multas',
	],
	sections: [
		{
			title: 'Cuatro municipios, un solo tribunal',
			content:
				'Almuñécar, Jete, Lentegí y Otívar dependen del Tribunal de Instancia de Almuñécar, que lo es desde el 2 de julio de 2025. Teniendo en cuenta lo turístico del municipio, dos bloques dominan la consulta: el laboral de temporada y todo lo que rodea la vivienda, el alquiler y la comunidad de propietarios.',
			points: [
				'Contratos de temporada y liquidación',
				'Arrendamientos y vivienda de veraneo',
				'Cuotas y juntas de urbanizaciones',
				'Divorcios, herencias y multas',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Almuñécar es el órgano de primera instancia y de instrucción del partido. Ahí van familia, herencias, civil e instrucción. Los asuntos sociales no van allí: van a la Sección de lo Social del Tribunal de Instancia de Granada.',
		},
		{
			title: 'Hora y veinte desde Málaga',
			content:
				'No hay despacho abierto en Almuñécar, pero está a una hora y veinte minutos de la oficina de Málaga. La consulta presencial es perfectamente viable y la primera valoración es gratuita.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Almuñécar?',
			answer:
				'No. Atendemos desde la oficina de Málaga, a una hora y veinte minutos. La primera consulta es gratuita y puede hacerse presencialmente o por videollamada.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Almuñécar?',
			answer:
				'Almuñécar, Jete, Lentegí y Otívar. Es el partido judicial más pequeño de Granada. Lo social se tramita en Granada capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Se revisan los documentos y se indican las opciones con su coste.',
		},
	],
};
