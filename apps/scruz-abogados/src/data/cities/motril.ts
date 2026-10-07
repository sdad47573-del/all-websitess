import type { CityLanding } from './types';

/**
 * Motril (Granada), Tribunal de Instancia de Motril, partido judicial número 4.
 *
 * Motril es la capital de la Costa Tropical y una de las plazas más cercanas a
 * la oficina de Málaga de las que atendemos en Granada. Su partido alcanza a
 * catorce municipios, y es uno de los que pasó a Tribunal de Instancia el 31
 * de diciembre de 2025. La economía combina agricultura de regadío, agroindustria
 * y turismo de playa.
 */
export const Motril: CityLanding = {
	city: 'Motril',
	slug: 'motril',
	province: 'Granada',
	area: 'Costa Tropical',
	tribunal: 'Tribunal de Instancia de Motril, partido judicial número 4 de Granada',
	municipios:
		'Motril, Salobreña, Albondón, Albuñol, Gualchos, Ítrabo, Lújar, Molvízar, Polopos, Rubite, Sorvilán, Torrenueva Costa, Vélez de Benaudalla y Los Guájares',
	office: 'malaga',
	travel: 'una hora y cuarto desde la oficina de Málaga',
	sectors: 'agricultura de regadío, agroindustria, turismo de playa, pesca, hostelería',
	matters: 'laboral estacional, familia, herencias, urbanismo, multas',
	links: [
		{ label: 'Abogados en Almuñécar', href: '/abogados-en-almunecar/', description: 'Almuñécar y la costa.' },
		{ label: 'Abogados en Guadix', href: '/abogados-en-guadix/', description: 'Guadix y la Vega alta.' },
		{ label: 'Oficina de Málaga', href: '/abogados-en-malaga', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Motril | Laboral estacional y familia',
	description:
		'Abogados para clientes de Motril y la Costa Tropical: laboral estacional, familia, herencias, urbanismo y multas. A 1h15 de Málaga. Consulta gratuita.',
	keywords:
		'abogado en Motril, abogados Motril, laboral Motril, familia Motril, herencias Motril, Costa Tropical abogado, Salobreña abogado, urbanismo Motril',
	eyebrow: 'Asesoría jurídica en Motril y la Costa Tropical',
	headline: 'Abogados para clientes de Motril y la Costa Tropical',
	intro:
		'Motril es la capital de la Costa Tropical y una de las plazas más cercanas a la oficina de Málaga de las que atendemos en Granada. Su partido alcanza a catorce municipios, entre ellos Salobreña y Vélez de Benaudalla.',
	highlights: [
		'Contratos de temporada en agricultura y turismo',
		'Familia, custodias y herencias',
		'Urbanismo y licencias',
		'Recursos contra multas municipales',
	],
	sections: [
		{
			title: 'Catorce municipios entre el regadío y la playa',
			content:
				'El partido de Motril va del interior agrario de Lújar y Molvízar a la costa de Salobreña y Vélez de Benaudalla. El eje de la consulta es el trabajo: contratos de temporada en la agricultura y en la hostelería de la costa. Al lado, y con peso propio, los expedientes urbanísticos de una zona que sigue creciendo.',
			points: [
				'Contratos de temporada y Seguridad Social',
				'Divorcios, custodias y herencias',
				'Licencias de obra y planeamiento',
				'Multas y procedimientos administrativos',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Motril es el órgano de primera instancia y de instrucción del partido, desde el 31 de diciembre de 2025. Ahí van familia, herencias, civil e instrucción. Lo social va a la Sección de lo Social del Tribunal de Instancia de Granada.',
		},
		{
			title: 'Hora y cuarto desde Málaga',
			content:
				'No tenemos despacho abierto en Motril. Es una de las plazas más cercanas que atendemos, a una hora y cuarto de la oficina de Málaga. La consulta presencial es viable y la primera valoración es gratuita.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Motril?',
			answer:
				'No. Atendemos desde la oficina de Málaga, a una hora y cuarto, que es la más cercana de las dos. La primera consulta es gratuita y puede hacerse presencialmente o por videollamada.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Motril?',
			answer:
				'Motril, Salobreña, Albondón, Albuñol, Gualchos, Ítrabo, Lújar, Molvízar, Polopos, Rubite, Sorvilán, Torrenueva Costa, Vélez de Benaudalla y Los Guájares. Lo social se tramita en Granada capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Se revisan los documentos y se indican las opciones con su coste.',
		},
	],
};
