import type { CityLanding } from './types';

/**
 * Guadix (Granada), Tribunal de Instancia de Guadix, partido judicial número 2.
 *
 * Guadix es el segundo partido más extenso de Granada, con alrededor de treinta
 * municipios en la Vega alta y el Marquesado. Al stemming de la alpujarra se
 * añade una base industrial y un corredor logístico entre la costa y
 * Granada, que es lo que más consultas genera.
 */
export const Guadix: CityLanding = {
	city: 'Guadix',
	slug: 'guadix',
	province: 'Granada',
	area: 'Vega alta y Marquesado de Zenete',
	tribunal: 'Tribunal de Instancia de Guadix, partido judicial número 2 de Granada',
	municipios:
		'Guadix, Beas de Guadix, Benalúa, La Calahorra, Cogollos de Guadix, Cortes y Graena, Darro, Diezma, Dólar, Ferreira, Fonelas, Gor, Gorafe, Huélago, Huéneja, Jerez del Marquesado, La Peza, Lanteira, Marchal, Morelábor, Pedro Martínez, Polícar, Purullena, Valle del Zalabí y Villanueva de las Torres, entre otros',
	office: 'malaga',
	travel: 'unas dos horas y cuarto desde la oficina de Málaga',
	sectors: 'industria y logística, agricultura de la Vega alta, turismo, cerámica de La Calahorra',
	matters: 'laboral, familia, herencias, mercantil y empresas, administrativo',
	links: [
		{ label: 'Abogados en Baza', href: '/abogados-en-baza/', description: 'Baza y la Alpujarra granadina.' },
		{ label: 'Abogados en Huéscar', href: '/abogados-en-huescar/', description: 'Huéscar y el altiplano.' },
		{ label: 'Oficina de Málaga', href: '/abogados-en-malaga', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Guadix | Laboral, familia y empresas',
	description:
		'Abogados para clientes de Guadix y la Vega alta: laboral, familia, herencias y empresas. Primera consulta gratuita.',
	keywords:
		'abogado en Guadix, abogados Guadix, laboral Guadix, familia Guadix, herencias Guadix, empresas Guadix, La Calahorra abogado, Vega alta abogado, Marquesado de Zenete abogado',
	eyebrow: 'Asesoría jurídica en Guadix y la Vega alta',
	headline: 'Abogados para clientes de Guadix y la Vega alta',
	intro:
		'Guadix es el segundo partido judicial más extenso de Granada, con alrededor de treinta municipios. Su peso viene del corredor logístico entre la costa y la capital, y de una base industrial y agricultural que genera consultas de empresa.',
	highlights: [
		'Laboral en industria y logística',
		'Familia, custodias y herencias',
		'Mercantil y constitución de empresas',
		'Recursos contra expedientes administrativos',
	],
	sections: [
		{
			title: 'Treinta municipios y un corredor logístico',
			content:
				'El partido de Guadix abarca casi toda la Vega alta y el Marquesado de Zenete, desde La Calahorra hasta el Marquesado. Por eso las consultas no son solo de familia y herencias: también entran contratos de trabajo en la industria y la logística, constituciones de sociedades y consultas mercantiles.',
			points: [
				'Divorcios, custodias y herencias',
				'Contratos de trabajo y de empresa',
				'Expedientes y recursos administrativos',
				'Constitución de sociedades y contratos mercantiles',
				],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Guadix es el órgano de primera instancia y de instrucción del partido, desde el 2 de julio de 2025. Ahí van familia, herencias, civil e instrucción. Lo social va a la Sección de lo Social del Tribunal de Instancia de Granada.',
		},
		{
			title: 'Dos horas y cuarto',
			content:
				'No tenemos despacho abierto en Guadix. Está a unas dos horas y cuarto de la oficina de Málaga, y algo más cerca de Lucena. La primera valoración se hace por videollamada, y solo se viaja cuando el acto lo exige.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Guadix?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga. Atendemos desde Málaga, a unas dos horas y cuarto. La primera consulta es gratuita y se puede hacer por videollamada.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Guadix?',
			answer:
				'Alrededor de treinta municipios de la Vega alta y el Marquesado de Zenete, entre ellos Guadix, Beas de Guadix, La Calahorra, Cogollos de Guadix, Cortes y Graena, Darro, Diezma, Dólar, Ferreira, Fonelas, Gor, Huéneja, Jerez del Marquesado y La Peza. Lo social se tramita en Granada capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
			answer:
				'Sí, y es confidencial. Se revisan los documentos y se indican las opciones con su coste.',
		},
	],
};
