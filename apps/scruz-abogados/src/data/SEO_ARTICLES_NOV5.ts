/**
 * Quinto lote (nov 2026): derecho laboral y Seguridad Social.
 *
 * Huecos comprobados tras revisar las 50 guías ya publicadas en esas dos
 * categorías:
 *   - `reduccion-de-jornada-familiar`: hay guías de horario y de licencia
 *     familiar, pero ninguna de la reducción de jornada del art. 37.6 ET, que es
 *     la consulta más habitual de padres y cuidadores.
 *   - `erte-regulacion-empleo-temporal`: no había nada sobre suspensión del
 *     contrato ni sobre qué derechos conserva el trabajador afectado.
 *
 * No entra aquí el subsidio para mayores de 52: `subsidio-mayores-de-52-anos`
 * (SEO_ARTICLES_OCT) ya lo cubre, y una segunda guía solo habría repartido la
 * misma consulta entre dos URLs.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_NOV5: SeoArticle[] = [
	{
		slug: 'reduccion-de-jornada-familiar',
		title: 'Reducción de jornada por cuidado: requisitos y salario',
		description:
			'Cómo se pide la reducción de jornada para cuidar a un hijo o a un familiar, cuánto baja el salario, cómo se fija el horario y qué pasa si la empresa la niega.',
		date: '2026-11-03',
		category: 'Derecho Laboral',
		readTime: '8 min',
		intro: 'La reducción de jornada por cuidado de un hijo o de un familiar es un derecho, no un favor que conceda la empresa. Pero tiene límites, afecta al salario y a la cotización, y suele chocar con el horario que el empleador quiere imponer. Cómo se pide y cómo se documenta decide si se disfruta sin conflicto o si acaba en el juzgado.',
		sections: [
			{
				heading: 'Qué supuestos la permiten',
				paragraphs: [
					'El Estatuto de los Trabajadores reconoce la reducción de jornada por cuidado de menor de doce años, por cuidado de familiar —hasta segundo grado de consanguinidad o afinidad— que no pueda valerse por sí mismo y no desempeñe actividad retribuida, y por cuidado de hijo con cáncer u otra enfermedad grave.',
					'En el caso del menor, el derecho corresponde a ambos progenitores o a quien tenga su guarda y custodia. Si los dos trabajan para la misma empresa, esta puede limitar su ejercicio simultáneo por razones de funcionamiento, debidamente motivadas.',
				],
			},
			{
				heading: 'Cuánto se reduce y cuánto se cobra',
				paragraphs: [
					'La reducción debe estar entre un octavo y la mitad de la jornada, con la disminución proporcional del salario. No es una excedencia: el contrato sigue vivo, la antigüedad se mantiene y el puesto se conserva, pero el salario y las pagas se calculan sobre la jornada efectiva.',
					'La reducción afecta también a la cotización, aunque los periodos de reducción por cuidado de menor se computan como cotizados a jornada completa a efectos de determinadas prestaciones. Conviene revisar el caso concreto antes de asumir que no hay impacto en la futura pensión.',
				],
			},
			{
				heading: 'Cómo se solicita y qué debe contestar la empresa',
				paragraphs: [
					'La solicitud se presenta por escrito, con preaviso suficiente y acreditando la situación: libro de familia, certificado de nacimiento, informe médico o certificado de dependencia del familiar. Conviene indicar la jornada deseada, los días y el horario concreto que se propone.',
					'La empresa debe responder por escrito y, si no está de acuerdo con la concreción horaria, debe motivarlo y proponer una alternativa. El silencio o la negativa sin causa no bloquean el derecho: la discrepancia se resuelve por el procedimiento específico, con plazos breves.',
				],
			},
			{
				heading: 'Concreción horaria: la parte que más se pelea',
				paragraphs: [
					'La persona que reduce su jornada tiene derecho a fijar el horario dentro de su jornada ordinaria. La empresa puede oponerse si la concreción propuesta dificulta gravemente el funcionamiento, pero debe acreditarlo: no basta con alegar «necesidades organizativas».',
					'El conflicto se plantea ante el juzgado de lo social por la vía del procedimiento urgente, con un plazo de veinte días hábiles. Mientras se resuelve, la reducción sigue vigente en los términos solicitados, y la empresa no puede imponer un horario distinto por su cuenta.',
				],
			},
			{
				heading: 'Protección frente al despido y a la modificación de condiciones',
				paragraphs: [
					'Quien solicita o disfruta una reducción de jornada por cuidado está en una situación especialmente protegida: un despido por ese motivo es nulo, y la empresa debe acreditar una causa ajena al ejercicio del derecho. La carga de la prueba pesa sobre ella.',
					'También es nula la modificación de horario o de condiciones que se adopte como represalia. Documentar fechas —solicitud, respuesta, cambio de turno posterior— es lo que permite demostrar la conexión cuando el conflicto llega al juzgado.',
				],
			},
			{
				heading: 'Errores frecuentes y cuándo conviene asesorarse',
				paragraphs: [
					'Pedirla de palabra, aceptar un horario incompatible con el cuidado sin dejarlo por escrito o firmar una novación que la convierte en indefinida sin querer son los errores más caros. También lo es confundirla con la excedencia: son figuras distintas y la vuelta al puesto funciona de forma diferente.',
					'Si la empresa niega la reducción, impone un horario inviable o abre un expediente disciplinario después de la solicitud, hay que actuar con rapidez: los plazos del procedimiento son cortos y la prueba se construye en las primeras semanas.',
				],
			},
		],
		checklist: [
			'Solicita la reducción por escrito y con acuse de recibo.',
			'Acredita la situación con libro de familia o informe médico.',
			'Propón por escrito la jornada y el horario concretos.',
			'Guarda la respuesta de la empresa y sus motivos.',
			'No firmes cambios de contrato sin revisarlos antes.',
		],
		faq: [
			{
				question: '¿La reducción de jornada la concede la empresa o es un derecho?',
				answer:
					'Es un derecho legal si se cumplen los requisitos, no una concesión. La empresa puede discutir la concreción horaria con motivos organizativos acreditados, pero no negar la reducción en sí.',
			},
			{
				question: '¿Cuánto me bajará el sueldo?',
				answer:
					'El salario se reduce en proporción a la jornada que dejas de trabajar, incluidas las pagas extraordinarias. La cotización también se ajusta, aunque determinados periodos de cuidado se computan como jornada completa para ciertas prestaciones.',
			},
			{
				question: '¿Puedo pedirla si mi empresa dice que no hay vacante para ese horario?',
				answer:
					'La falta de vacante no es un motivo válido por sí sola: la empresa debe acreditar que la concreción propuesta dificulta gravemente su funcionamiento. Si insiste, la discrepancia se resuelve ante el juzgado de lo social por la vía urgente.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'jornada, horarios y contratos' },
			{ path: '/despidos', label: 'despido nulo y represalias' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'erte-regulacion-empleo-temporal',
		title: 'ERTE: causas, trámites y derechos del trabajador',
		description:
			'Qué es un ERTE, qué causas lo justifican, cómo se tramita el periodo de consultas y qué pasa con el salario, el paro y la vuelta al puesto de trabajo.',
		date: '2026-11-03',
		category: 'Derecho Laboral',
		readTime: '8 min',
		intro: 'Un ERTE no extingue contratos: los suspende o reduce la jornada. Eso cambia todo lo que el trabajador necesita saber —cobra prestación, conserva la antigüedad, tiene derecho a volver— y también lo que la empresa debe hacer para que sea válido. Un expediente mal tramitado se cae en el juzgado y arrastra las consecuencias.',
		sections: [
			{
				heading: 'Qué es y qué no es un ERTE',
				paragraphs: [
					'Es el procedimiento de regulación temporal de empleo: suspende el contrato o reduce la jornada durante un tiempo, con derecho a la prestación por desempleo. No es un despido, no rompe la relación laboral y no extingue la antigüedad.',
					'Tampoco es una decisión unilateral sin trámites: exige causa legal, comunicación a la autoridad laboral, periodo de consultas con la representación de los trabajadores y notificación individual. Sin esos pasos, la medida es impugnable.',
				],
			},
			{
				heading: 'Causas que lo justifican',
				paragraphs: [
					'Las causas son económicas, técnicas, organizativas o de producción, y de fuerza mayor. Las primeras exigen acreditar la situación con datos concretos —pérdidas, caída de pedidos, cambios de producción— y su relación con la medida; la fuerza mayor requiere un acontecimiento externo e imprevisible.',
					'La causa debe ser real y actual, no una previsión genérica. En la práctica, los expedientes se impugnan por falta de acreditación: la empresa alega crisis sin aportar cuentas, o reduce una plantilla que sigue haciendo horas extraordinarias.',
				],
			},
			{
				heading: 'El periodo de consultas y los plazos',
				paragraphs: [
					'Con carácter general, el periodo de consultas dura quince días, o treinta en empresas de cincuenta o más trabajadores. Se negocia con la representación legal de los trabajadores y, si no la hay, con una comisión designada por la plantilla.',
					'Durante la consulta deben entregarse la memoria explicativa y la documentación económica. Después, la empresa comunica la decisión a la autoridad laboral y notifica individualmente a cada trabajador afectado, con la causa, la duración y el porcentaje de reducción.',
				],
			},
			{
				heading: 'Qué cobra el trabajador durante el ERTE',
				paragraphs: [
					'En la suspensión, el trabajador pasa a la prestación por desempleo, con la base reguladora correspondiente y el consumo de sus cotizaciones. En la reducción de jornada, la prestación compensa la parte que se deja de trabajar.',
					'La empresa debe mantener el alta y la cotización en los términos legalmente previstos, y entregar la documentación necesaria para solicitar la prestación. Si no lo hace, el trabajador puede reclamar ante el SEPE y, en su caso, frente a la empresa.',
				],
			},
			{
				heading: 'Derecho a volver al puesto y límites de la medida',
				paragraphs: [
					'Al terminar el periodo, el trabajador tiene derecho a reincorporarse en las mismas condiciones anteriores: puesto, jornada, salario y antigüedad. La empresa debe comunicar la vuelta con antelación suficiente y no puede convertir el ERTE en un despido encubierto.',
					'También está limitado el uso de horas extraordinarias, nuevas contrataciones o externalizaciones mientras dure la medida en los supuestos y con el alcance que fija la ley. Estas obligaciones son una de las bases habituales de impugnación.',
				],
			},
			{
				heading: 'Si el ERTE es nulo o irregular',
				paragraphs: [
					'Si falta la causa, no se respeta el periodo de consultas o no se aporta la documentación, el trabajador puede impugnar la medida y pedir la nulidad o la improcedencia, con la readmisión o la indemnización que corresponda. Los plazos de caducidad son breves.',
					'Antes de demandar conviene reunir la comunicación individual, la memoria, las nóminas y los datos de la actividad de la empresa durante el periodo. Con esa base se decide si se impugna individualmente o de forma colectiva con el resto de la plantilla.',
				],
			},
		],
		checklist: [
			'Exige la comunicación individual por escrito.',
			'Revisa causa, duración y porcentaje de reducción.',
			'Conserva nóminas y documentación para la prestación.',
			'Comprueba si la empresa sigue contratando o haciendo horas extra.',
			'Consulta los plazos si vas a impugnar la medida.',
		],
		faq: [
			{
				question: '¿Un ERTE es un despido?',
				answer:
					'No. Suspende el contrato o reduce la jornada de forma temporal; la relación laboral continúa y el trabajador conserva antigüedad y derecho a volver al puesto en las mismas condiciones.',
			},
			{
				question: '¿Consumo paro durante el ERTE?',
				answer:
					'Sí, la prestación se cobra durante la suspensión o reducción y consume cotizaciones. La empresa debe facilitar la documentación para solicitar la prestación y mantener el alta.',
			},
			{
				question: '¿Puedo impugnar el ERTE si creo que no hay causa?',
				answer:
					'Sí. La falta de causa o los defectos de tramitación permiten impugnar la medida ante el juzgado de lo social, con plazos breves. Conviene revisar la documentación del expediente cuanto antes.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'impugnación de despidos y medidas colectivas' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
			{ path: '/reclamacion-pensiones', label: 'prestaciones de la Seguridad Social' },
		],
	},
];
