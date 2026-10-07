import type { CityLanding } from './types';

/**
 * Santa Fe (Granada), Tribunal de Instancia de Santa Fe.
 *
 * Santa Fe es la puerta de la Vega de Granada. Su partido judicial alcanza a
 * doce municipios del área metropolitana del sur, y es el más cercano a la
 * oficina de Málaga de los que atendemos en Granada, así que se atiende desde
 * Málaga y no desde Lucena.
 */
export const SantaFe: CityLanding = {
	city: 'Santa Fe',
	slug: 'santa-fe',
	province: 'Granada',
	area: 'Vega de Granada',
	tribunal: 'Tribunal de Instancia de Santa Fe',
	municipios:
		'Santa Fe, Alhendín, Chauchina, Cijuela, Cúllar Vega, Escúzar, Fuente Vaqueros, Las Gabias, Láchar, La Malahá, Vegas del Genil y Villa de Otura',
	office: 'malaga',
	travel: 'una hora y cuarenta minutos desde la oficina de Málaga',
	sectors: 'agricultura de la Vega, industria agroalimentaria, vivienda y promoción inmobiliaria',
	matters: 'laboral agrario, urbanismo y licencias, familia, herencias, comunidades de propietarios',
	links: [
		{ label: 'Abogados en Ogíjares', href: '/abogados-en-ogijares/', description: 'Ogíjares y el Valle de Lecrín.' },
		{ label: 'Abogados en Guadix', href: '/abogados-en-guadix/', description: 'Guadix y la Vega alta.' },
		{ label: 'Oficina de Málaga', href: '/abogados-en-malaga', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Santa Fe | Laboral agrario y urbanismo',
	description:
		'Abogados para clientes de Santa Fe y la Vega de Granada: laboral agrario, urbanismo, propiedad horizontal, familia y herencias. Primera consulta gratuita.',
	keywords:
		'abogado en Santa Fe Granada, abogados Santa Fe, laboral agrario Santa Fe, urbanismo Santa Fe, propiedad horizontal Santa Fe, herencias Santa Fe, Vega de Granada abogado',
	eyebrow: 'Asesoría jurídica en Santa Fe y la Vega',
	headline: 'Abogados para clientes de Santa Fe y la Vega de Granada',
	intro:
		'Santa Fe es la puerta de la Vega: agricultura intensiva, industria agroalimentaria y un crecimiento urbanístico que ha multiplicado las licencias de obra. Su partido judicial alcanza a doce municipios del área metropolitana del sur.',
	highlights: [
		'Contratos agrarios de la Vega',
		'Licencias de obra y urbanismo',
		'Propiedad horizontal en promoción nueva',
		'Familia, herencias y particiones',
	],
	sections: [
		{
			title: 'Agricultura y hormigón, los dos motores',
			content:
				'La Vega es tierra de regadío: lo que produce son contratos agrarios, altas en el régimen especial de la Seguridad Social y consultas sobre fincas de regadío. Al lado, el boom urbanístico ha generado licencias, obras y comunidades de propietarios en urbanizaciones nuevas, que traen sus propios conflictos de cuotas y de reparto de gastos.',
			points: [
				'Contratos de temporada en la Vega',
				'Licencias urbanísticas y disciplina de obras',
				'Cuotas y juntas de urbanizaciones',
				'Partición de herencias',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Santa Fe sirve a los doce municipios de su partido: Santa Fe, Alhendín, Chauchina, Cijuela, Cúllar Vega, Escúzar, Fuente Vaqueros, Las Gabias, Láchar, La Malahá, Vegas del Genil y Villa de Otura. Lo social va a la Sección de lo Social del Tribunal de Instancia de Granada, no a Santa Fe.',
		},
		{
			title: 'Una hora y cuarenta minutos',
			content:
				'No tenemos despacho en Santa Fe. Atendemos desde la oficina de Málaga, a una hora y cuarenta minutos, que es más cerca que Lucena. La primera valoración puede hacerse por videollamada, y el desplazamiento se acuerda cuando el acto lo exige.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Santa Fe?',
			answer:
				'No. Atendemos desde la oficina de Málaga, a una hora y cuarenta minutos, que es la más cercana de las dos. La primera consulta es gratuita y puede hacerse por videollamada.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Santa Fe?',
			answer:
				'Santa Fe, Alhendín, Chauchina, Cijuela, Cúllar Vega, Escúzar, Fuente Vaqueros, Las Gabias, Láchar, La Malahá, Vegas del Genil y Villa de Otura. Lo social se tramita en Granada capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Se revisan los documentos, se identifica la materia y el órgano competente, y se dan las opciones con su coste.',
		},
	],
};
