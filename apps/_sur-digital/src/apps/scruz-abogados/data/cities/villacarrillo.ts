import type { CityLanding } from './types';

/**
 * Villacarrillo (Jaén), Tribunal de Instancia de Villacarrillo, partido número 7.
 *
 * Villacarrillo es la cabecera de la Sierra de Segura, la única plaza de Jaén
 * que atendemos. Su partido alcanza a los municipios de la Sierra, con una
 * economía de olivar de sierra, ganadería y turismo rural. Está a unas dos
 * horas de Lucena, así que se atiende desde allí y la primera consulta se hace
 * por videollamada.
 */
export const Villacarrillo: CityLanding = {
	city: 'Villacarrillo',
	slug: 'villacarrillo',
	province: 'Jaén',
	area: 'Sierra de Segura',
	tribunal: 'Tribunal de Instancia de Villacarrillo, partido judicial número 7 de Jaén',
	municipios:
		'Villacarrillo, Beas de Segura, Orcera, Segura de la Sierra, Siles, Arroyo del Ojanco, Hornos, Torres de Albanchez, Santisteban, Santillana, Montizón, Larva, Hinojares, Torres Albanchez, Fuentelespino de Haro, Santiago-Pontones y Venta del Maestre',
	office: 'lucena',
	travel: 'unas dos horas desde la oficina de Lucena',
	sectors: 'olivar de sierra, ganadería, turismo rural, pequeña empresa',
	matters: 'laboral agrario, herencias de fincas, familia, administrativo, multas',
	links: [
		{ label: 'Abogados en Huéscar', href: '/abogados-en-huescar/', description: 'Huéscar y el altiplano granadino.' },
		{ label: 'Abogados en Baza', href: '/abogados-en-baza/', description: 'Baza y la Alpujarra granadina.' },
		{ label: 'Oficina de Lucena', href: '/abogados-en-lucena', description: 'La oficina desde la que atendemos.' },
	],
	title: 'Abogado en Villacarrillo | Laboral agrario y herencias',
	description:
		'Abogados para clientes de Villacarrillo y la Sierra de Segura (Jaén): laboral agrario, herencias de fincas, familia y recursos. Primera consulta gratuita.',
	keywords:
		'abogado en Villacarrillo, abogados Villacarrillo, Sierra de Segura abogado, laboral agrario Villacarrillo, herencias Villacarrillo, Beas de Segura abogado, Segura de la Sierra abogado, olivar Villacarrillo',
	eyebrow: 'Asesoría jurídica en Villacarrillo y la Sierra de Segura',
	headline: 'Abogados para clientes de Villacarrillo y la Sierra de Segura',
	intro:
		'Villacarrillo es la cabecera de la Sierra de Segura, la única plaza de Jaén que atendemos. Su partido alcanza a una comarca entera de municipios con olivar de sierra, ganadería y turismo rural. Está a unas dos horas de Lucena.',
	highlights: [
		'Contratos del olivar de sierra y ganadería',
		'Herencias y particiones de fincas',
		'Familia, custodias y sucesiones',
		'Recursos contra expedientes administrativos',
	],
	sections: [
		{
			title: 'Una comarca entera bajo un tribunal',
			content:
				'El partido de Villacarrillo alcanza a toda la Sierra de Segura, desde Beas de Segura y Segura de la Sierra hasta los pueblos de la montaña. La consulta se repite en dos bloques: el laboral agrario, con el olivar de sierra y la ganadería, y la vía administrativa, por el peso de los expedientes de la Sierra de Segura como parque natural.',
			points: [
				'Contratos de temporada en el olivar',
				'Partición de herencias de fincas',
				'Divorcios y modificación de medidas',
				'Multas y expedientes administrativos',
			],
		},
		{
			title: 'Qué juzgado lleva tu caso',
			content:
				'El Tribunal de Instancia de Villacarrillo es el órgano de primera instancia y de instrucción del partido. Ahí van familia, herencias, civil e instrucción. Los asuntos sociales van a la Sección de lo Social del Tribunal de Instancia de Jaén, en la capital, a más de ciento veinte kilómetros.',
		},
		{
			title: 'Dos horas desde Lucena',
			content:
				'No tenemos despacho abierto en Villacarrillo. Está a unas dos horas de la oficina de Lucena. La primera valoración se hace por videollamada, sin necesidad de desplazarse, y solo se viaja físicamente cuando el acto lo exige.',
		},
	],
	faqs: [
		{
			question: '¿Hay oficina en Villacarrillo?',
			answer:
				'No. El despacho tiene oficinas en Lucena y Málaga, y no hay puerta abierta en Villacarrillo ni en la Sierra de Segura. Atendemos desde Lucena, a unas dos horas. La primera consulta es gratuita y se hace por videollamada.',
		},
		{
			question: '¿Qué municipios cubre el tribunal de Villacarrillo?',
			answer:
				'Villacarrillo, Beas de Segura, Orcera, Segura de la Sierra, Siles, Arroyo del Ojanco, Hornos, Torres de Albanchez, Santisteban, Santillana, Montizón, Larva, Hinojares, Fuentelespino de Haro, Santiago-Pontones y Venta del Maestre. Lo social se tramita en Jaén capital.',
		},
		{
			question: '¿La primera consulta es gratuita?',
				answer:
					'Sí, y es confidencial. Con esta distancia, la videollamada es la vía normal y funciona bien.',
		},
	],
};
