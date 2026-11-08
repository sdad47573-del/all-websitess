import type { CityLanding } from './types';

/**
 * Ogíjares (Granada), partido judicial de Granada.
 *
 * Ogíjares NO tiene juzgado propio: pertenece al partido de Granada, junto a
 * todo el Valle de Lecrín. Es el error más frecuente con esta plaza, porque su
 * tamaño y su peso turístico invitan a suponer lo contrario. Se atiende desde
 * la oficina de Málaga, que es la más cercana.
 */
export const Ogijares: CityLanding = {
	city: 'Ogíjares',
	slug: 'ogijares',
	province: 'Granada',
	area: 'Valle de Lecrín',
	tribunal: 'partido de Granada, sin juzgado propio en Ogíjares',
	municipios:
		'Ogíjares, que depende del partido de Granada junto al resto del Valle de Lecrín',
	office: 'malaga',
	travel: 'una hora y media desde la oficina de Málaga',
	sectors: 'turismo de la Alhambra, agricultura del Valle, hostelería, vivienda de segunda residencia',
	matters: 'turismo y alquiler, laboral estacional, propiedad horizontal, familia, herencias',
	links: [
		{ label: 'Abogados en Santa Fe', href: '/abogados-en-santa-fe/', description: 'Santa Fe y la Vega de Granada.' },
		{ label: 'Abogados en Guadix', href: '/abogados-en-guadix/', description: 'Guadix y la Vega alta.' },
		{ label: 'Oficina de Málaga', href: '/abogados-en-malaga', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Ogíjares y el Valle de Lecrín',
	description:
		'Abogados para clientes de Ogíjares: laboral estacional, propiedad horizontal, familia y herencias. Depende del partido de Granada. Consulta gratuita.',
	keywords:
		'abogado en Ogíjares, abogados Ogíjares, Valle de Lecrín abogado, laboral Ogíjares, propiedad horizontal Ogíjares, herencias Valle de Lecrín, Alhambra abogado Ogíjares',
	eyebrow: 'Asesoría jurídica en Ogíjares y el Valle de Lecrín',
	headline: 'Abogados para clientes de Ogíjares y el Valle de Lecrín',
	intro:
		'Ogíjares no tiene juzgado propio: depende del partido de Granada, igual que el resto del Valle de Lecrín. Su economía es turística, con la Alhambra como principal motor, y eso marca el tipo de consulta.',
	highlights: [
		'Contratos de temporada en hostelería y turismo',
		'Alquiler y vivienda de segunda residencia',
		'Propiedad horizontal en urbanizaciones del valle',
		'Familia, herencias y particiones',
	],
	sections: [
		{
			title: 'Ogíjares va a Granada, no a ningún otro sitio',
			content:
				'Es el dato que más confusiones genera: Ogíjares es un municipio grande, con peso turístico, y aun así no tiene tribunal propio. Su primera instancia, familia, civil e instrucción se sirven en Granada capital, junto a Lecrín, Pinos Genil y el resto del valle. Los asuntos sociales también van a Granada.',
			points: [
				'Contratos de temporada y liquidación',
				'Arrendamientos de vivienda y turismo',
				'Cuotas y juntas de urbanizaciones',
				'Partición de herencias',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El partido de Granada es el órgano competente para Ogíjares y el Valle de Lecrín. Ahí van familia, herencias, civil e instrucción. Es el mismo órgano que para la capital, y los asuntos sociales se tramitan en la Sección de lo Social del Tribunal de Instancia de Granada.',
		},
		{
			title: 'Una hora y media desde Málaga',
			content:
				'No tenemos despacho en Ogíjares. Atendemos desde la oficina de Málaga, a una hora y media, que es más cerca que Lucena. La primera valoración se puede hacer por videollamada; para firma, junta o vista en el valle se acuerda cita cerrada.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Ogíjares?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga, y no hay puerta abierta en Ogíjares. Atendemos desde Málaga, a una hora y media. La primera consulta es gratuita.',
		},
		{
			question: '¿Ogíjares tiene juzgado propio?',
			answer:
				'No. Ogíjares depende del partido de Granada, junto al resto del Valle de Lecrín. Familia, herencias, civil e instrucción se tramitan en Granada capital, y también los asuntos sociales.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Puede hacerse en Málaga o por videollamada, sin compromiso.',
		},
	],
};
