/**
 * Lote de nov 2026 centrado en derecho laboral y Seguridad Social, tras revisar
 * las guías ya publicadas en esas dos categorías:
 *
 *   - `movilidad-geografica-traslado`: hay cambio de horario y modificación
 *     sustancial, pero nada sobre traslado definitivo, desplazamiento temporal,
 *     preaviso ni indemnización de 20 días.
 *   - `permiso-de-lactancia`: maternidad/paternidad y guarda legal están
 *     cubiertos; la lactancia y su acumulación en jornadas completas, no.
 *   - `cese-de-actividad-autonomos`: Seguridad Social del autónomo aparece en
 *     cuota, base imponible y falso autónomo, pero no la prestación por cese.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_NOV6: SeoArticle[] = [
	{
		slug: 'movilidad-geografica-traslado',
		title: 'Movilidad geográfica: traslado, preaviso y compensación',
		description:
			'Cuándo la empresa puede trasladarte, qué preaviso y compensación corresponden, en qué se diferencia del desplazamiento y cómo se impugna la decisión.',
		date: '2026-11-03',
		category: 'Derecho Laboral',
		readTime: '8 min',
		intro: 'Cambiar de centro de trabajo no es una decisión libre de la empresa: exige causa, forma y, según el caso, compensación o incluso tu derecho a extinguir el contrato con indemnización. Confundir un traslado con un desplazamiento temporal es el error que más dinero cuesta en ambos lados.',
		sections: [
			{
				heading: 'Traslado y desplazamiento no son lo mismo',
				paragraphs: [
					'El traslado es un cambio definitivo de centro de trabajo que obliga a cambiar de residencia. El desplazamiento es temporal: la ley lo presume cuando no supera los doce meses en un periodo de tres años, y por encima de ese límite hay que justificar la temporalidad.',
					'La diferencia decide las obligaciones. En el traslado hay preaviso, posibles compensaciones y derecho a rescindir el contrato con indemnización; en el desplazamiento se añaden gastos de viaje y estancia, y permisos para volver a casa.',
				],
			},
			{
				heading: 'Cuándo puede imponerlo la empresa',
				paragraphs: [
					'El traslado debe fundarse en razones económicas, técnicas, organizativas o de producción, o en contrataciones que lo justifiquen. No basta con abrir otra sede: hay que acreditar la conexión entre esa decisión y la necesidad de mover a una persona concreta.',
					'La empresa comunica el traslado por escrito con treinta días de preaviso y entrega copia a la representación de los trabajadores. Si el traslado es colectivo, se abre un periodo de consultas de quince días y se aplican umbrales por número de afectados.',
				],
			},
			{
				heading: 'Compensación de gastos y opción de salida',
				paragraphs: [
					'La ley no fija una cifra de compensación: se pacta en convenio o en el acuerdo con la empresa, y cubre los gastos propios y los de la familia que se desplaza. Si no hay pacto, se discute caso por caso, con facturas y presupuesto del traslado.',
					'Cuando el traslado es por causa económica, técnica, organizativa o de producción, el trabajador puede optar entre aceptarlo o extinguir el contrato con una indemnización de veinte días por año trabajado, con el tope legal. Ese derecho a elegir debe ejercerse en plazo y por escrito.',
				],
			},
			{
				heading: 'Desplazamiento temporal: gastos y permisos',
				paragraphs: [
					'En el desplazamiento la empresa abona los gastos de viaje y los de estancia, y el trabajador tiene derecho a un permiso de cuatro días laborables cada tres meses en el lugar de origen, salvo pacto distinto. Si el desplazamiento supera los tres meses, hay preaviso de cinco días.',
					'Los desplazamientos encadenados que superan los doce meses en tres años dejan de ser temporales. Documentar fechas, destino y duración es lo que permite reclamar la consideración de traslado y sus consecuencias.',
				],
			},
			{
				heading: 'Cómo se impugna',
				paragraphs: [
					'La decisión se impugna ante el juzgado de lo social por la vía del procedimiento ordinario, con un plazo de caducidad de veinte días hábiles desde la comunicación. Si el traslado es colectivo y no se respeta el periodo de consultas, la impugnación puede ser colectiva.',
					'En paralelo puede solicitarse la nulidad si la medida es represalia por exercer derechos, y reclamarse la compensación o la indemnización si se optó por extinguir. Antes de firmar cualquier aceptación, conviene revisar si se está renunciando a esa opción.',
				],
			},
			{
				heading: 'Casos típicos entre Lucena y Málaga',
				paragraphs: [
					'En un despacho con oficinas en dos provincias la pregunta aparece rápido: cambiar de Lucena a Málaga, o al revés, puede ser traslado si obliga a mudarse, y desplazamiento si es por semanas con vuelta al domicilio. La calificación no depende del nombre que le dé la empresa.',
					'Los errores más caros: aceptar de palabra, no pedir la comunicación escrita, no guardar los billetes y no comprobar el plazo de veinte días. En movilidad geográfica la prueba documental se construye antes de que llegue la reclamación.',
				],
			},
		],
		checklist: [
			'Exige la comunicación por escrito con fecha y causa.',
			'Comprueba el preaviso de 30 días y la copia a la representación.',
			'Distingue si obliga a mudarte o solo a desplazarte.',
			'Guarda gastos, billetes y presupuesto de la mudanza.',
			'Revisa el plazo de 20 días si vas a impugnar.',
		],
		faq: [
			{
				question: '¿Puede la empresa trasladarme sin mi permiso?',
				answer:
					'Sí, si acredita causa económica, técnica, organizativa o de producción y cumple el preaviso y la forma. No puede hacerlo como represalia ni sin justificar la medida, y en los traslados por esas causas puedes optar por extinguir con indemnización.',
			},
			{
				question: '¿Cuánto me tienen que pagar por el traslado?',
				answer:
					'No hay una cifra legal única: se aplica lo pactado en convenio o el acuerdo con la empresa, y debe cubrir los gastos del trabajador y de su familia. Sin pacto, se reclama con facturas y presupuesto; el juez valora la compensación según el caso.',
			},
			{
				question: '¿Cuánto plazo tengo para reclamar un traslado?',
				answer:
					'Veinte días hábiles desde la comunicación para impugnarlo ante el juzgado de lo social. Si lo que quieres es rescindir con la indemnización de veinte días por año, hay que ejercer esa opción en el plazo y por escrito.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'jornada, movilidad y contratos' },
			{ path: '/despidos', label: 'extinción e indemnizaciones' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'permiso-de-lactancia',
		title: 'Permiso de lactancia: cómo se disfruta y se acumula',
		description:
			'Duración del permiso de lactancia, quién puede pedirlo, cómo se acumula en jornadas completas, qué pasa a tiempo parcial y cómo se reclama si lo niegan.',
		date: '2026-11-03',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'El permiso de lactancia no es una hora para dar el pecho: es un derecho de ausencia del trabajo que también puede ejercer el otro progenitor y que, desde la reforma de 2023, puede acumularse en jornadas completas sin depender de lo que diga el convenio. Mal pedido, se pierde.',
		sections: [
			{
				heading: 'Qué reconoce la ley',
				paragraphs: [
					'El Estatuto de los Trabajadores reconoce una hora de ausencia diaria hasta que el menor cumpla nueve meses. Puede dividirse en dos fracciones —media hora al inicio y media al final— o sustituirse por una reducción de media hora con la misma finalidad.',
					'El permiso corresponde a ambos progenitores si los dos trabajan, y también en los supuestos de adopción, guarda con fines de adopción y acogimiento. La duración se incrementa proporcionalmente en los partos múltiples.',
				],
			},
			{
				heading: 'Acumulación en jornadas completas',
				paragraphs: [
					'La reforma de 2023 convirtió la acumulación en un derecho: la persona puede sustituir el permiso diario por jornadas completas de ausencia, sin que la empresa pueda negarlo por motivos organizativos genéricos. El número de días se calcula a partir de las horas que habrías disfrutado.',
					'El cómputo concreto depende de la jornada y de los días efectivos hasta los nueve meses. Conviene pedirlo por escrito con el cálculo detallado y las fechas, porque las discrepancias suelen estar en el número de días, no en el derecho.',
				],
			},
			{
				heading: 'Trabajo a tiempo parcial y turnos',
				paragraphs: [
					'En el trabajo a tiempo parcial el permiso se reduce en proporción a la jornada. En turnos rotativos o con jornadas irregulares, el derecho se adapta al horario efectivo, y la empresa no puede concentrarlo siempre en los días de más carga.',
					'Si la aplicación del permiso afecta a la organización, la solución es pactar la distribución por escrito, no suprimir el derecho. La negociación colectiva puede mejorar la duración y las condiciones, pero nunca empeorar el mínimo legal.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'La solicitud se presenta por escrito, con el libro de familia o el certificado de nacimiento, la fecha de inicio y la modalidad elegida: una hora diaria, dos fracciones, media hora de reducción o acumulación en jornadas completas. Guarda copia con acuse.',
					'La empresa puede pedir acreditación del hecho, pero no puede condicionar el permiso a una prueba imposible ni exigir que se disfrute en un horario que lo haga inútil. En caso de discrepancia, la vía es el juzgado de lo social.',
				],
			},
			{
				heading: 'Protección frente al despido',
				paragraphs: [
					'Quien solicita o disfruta el permiso de lactancia está en una situación protegida: un despido motivado por su ejercicio es nulo. La empresa debe acreditar una causa real y ajena al permiso, y la carga de la prueba se invierte con indicios suficientes.',
					'La protección alcanza también a la reducción de jornada por guarda legal y a la excedencia por cuidado. Mezclar figuras —pedir lactancia cuando lo que corresponde es reducción— retrasa el derecho y complica la reclamación.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'Pedirlo de palabra, aceptar que la empresa decida el horario, renunciar a la acumulación porque «no está en el convenio» o no comprobar el cómputo de días hasta los nueve meses son los fallos más habituales. También lo es no revisar si el convenio mejora el permiso.',
					'Si la empresa niega la acumulación o impone un horario incompatible, conviene reclamar por escrito y valorar la vía judicial sin esperar al final del permiso: el derecho se consume con el tiempo y la prueba se deteriora.',
				],
			},
		],
		checklist: [
			'Solicita el permiso por escrito y con acuse de recibo.',
			'Elige modalidad: hora diaria, fracciones o acumulación.',
			'Calcula los días de acumulación antes de firmar.',
			'Comprueba si el convenio mejora el mínimo legal.',
			'No aceptes un horario que haga inútil el permiso.',
		],
		faq: [
			{
				question: '¿Hasta cuándo dura el permiso de lactancia?',
				answer:
					'Hasta que el menor cumpla nueve meses. Se disfruta como una hora diaria, en dos fracciones o como reducción de media hora, y puede acumularse en jornadas completas.',
			},
			{
				question: '¿Puede pedirlo el padre?',
				answer:
					'Sí. El permiso corresponde a ambos progenitores si los dos trabajan, y también en adopción, guarda con fines de adopción y acogimiento. Si los dos trabajan en la misma empresa, puede limitarse el ejercicio simultáneo con motivación.',
			},
			{
				question: '¿La empresa puede negarse a acumularlo en días?',
				answer:
					'La acumulación en jornadas completas es un derecho desde la reforma de 2023, no una concesión del convenio. La empresa puede discutir el cálculo o la distribución, pero no suprimirla sin causa legal.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'permisos, jornada y contratos' },
			{ path: '/despidos', label: 'despido nulo por ejercicio de derechos' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'cese-de-actividad-autonomos',
		title: 'Cese de actividad del autónomo: requisitos y cuantía',
		description:
			'Cuándo cobra un autónomo la prestación por cese de actividad, qué cotizaciones exige, cuánto dura, cómo se solicita y qué pasa si la mutualidad la deniega.',
		date: '2026-11-03',
		category: 'Seguridad Social',
		readTime: '8 min',
		intro: 'Cerrar el negocio no da derecho automático a cobrar: el cese de actividad es la prestación por desempleo del autónomo y exige cotización previa, causa acreditada y estar al corriente de pago. Muchos autónomos descubren los requisitos cuando ya han cerrado y el plazo corre.',
		sections: [
			{
				heading: 'Qué es y quién puede solicitarlo',
				paragraphs: [
					'Es la prestación que protege al trabajador por cuenta propia cuando cesa su actividad. La cubre la mutualidad colaboradora a la que está adscrito el autónomo, no el SEPE, y requiere haber cotizado por esta contingencia.',
					'Pueden solicitarla quienes estén dados de alta en el RETA o en el régimen especial del mar y cesen total o parcialmente, siempre que cumplan los requisitos de cotización, causa y situación administrativa.',
				],
			},
			{
				heading: 'Cotizaciones y causa del cese',
				paragraphs: [
					'Se exigen al menos doce meses cotizados por cese de actividad dentro de los veinticuatro meses anteriores al cese. Además, hay que estar al corriente de las cuotas y acreditar la causa: económica, técnica, organizativa o de fuerza mayor, o el cese por resolución judicial o administrativa.',
					'En el cese voluntario con causa económica se exige acreditar una reducción relevante de ingresos o pérdidas, con cuentas y documentación. Sin esa prueba, la mutualidad deniega aunque el negocio haya cerrado de facto.',
				],
			},
			{
				heading: 'Cuantía y duración',
				paragraphs: [
					'La base reguladora se calcula sobre las bases de cotización de los últimos meses y la prestación se abona en un porcentaje decreciente: más alta en la primera fase y menor después. La duración depende de los meses cotizados, desde cuatro meses hasta dos años en los tramos más altos.',
					'Durante la prestación se mantiene la cotización a la Seguridad Social en los términos que fija la normativa, lo que importa para la jubilación. La prestación es incompatible con el trabajo por cuenta propia, salvo las excepciones legales.',
				],
			},
			{
				heading: 'Plazos y documentación',
				paragraphs: [
					'La solicitud se presenta en la mutualidad en los quince días hábiles siguientes al cese, con la baja en Hacienda y en la Seguridad Social, el modelo de cotización, las cuentas o la declaración de ingresos y la acreditación de la causa.',
					'Presentar fuera de plazo puede reducir o perder la prestación de los días transcurridos. Si el cese se produce por resolución judicial o administrativa, se aporta la resolución y se cuenta el plazo desde que es firme o se notifica.',
				],
			},
			{
				heading: 'Obligaciones durante la prestación',
				paragraphs: [
					'El beneficiario debe comunicar cualquier cambio que afecte al derecho: nueva actividad, ingresos, traslado al extranjero o modificación familiar. También debe cumplir las obligaciones de acreditación que fije la mutualidad, incluida la presentación periódica de documentación.',
					'No comunicar el inicio de una actividad genera cobros indebidos que se reclaman después con intereses, y puede afectar a prestaciones futuras. La buena fe documental es la mejor defensa frente a una revisión.',
				],
			},
			{
				heading: 'Si la deniegan o la suspenden',
				paragraphs: [
					'Las causas más frecuentes de denegación son no acreditar la causa económica, no reunir los doce meses cotizados por cese o tener cuotas pendientes. La mutualidad resuelve por escrito y contra esa resolución cabe reclamación previa y, después, demanda ante el juzgado de lo social.',
					'Antes de recurrir conviene revisar el informe de vida laboral, las bases de los últimos meses y la contabilidad del negocio. En esta prestación la prueba es contable, no testimonial: sin cuentas ordenadas, la causa económica no se sostiene.',
				],
			},
		],
		checklist: [
			'Comprueba 12 meses cotizados por cese en 24.',
			'Ponte al corriente de cuotas antes de solicitar.',
			'Ordena cuentas y declaraciones del último año.',
			'Presenta la solicitud en 15 días hábiles desde el cese.',
			'Comunica a la mutualidad cualquier nueva actividad.',
		],
		faq: [
			{
				question: '¿Cobro el paro si cierro mi negocio?',
				answer:
					'Solo si cumples los requisitos de la prestación por cese de actividad: doce meses cotizados por esa contingencia en los últimos veinticuatro, causa acreditada y estar al corriente. No es automático por darse de baja en autónomos.',
			},
			{
				question: '¿Cuánto dura la prestación por cese?',
				answer:
					'Depende de los meses cotizados: desde cuatro meses en el tramo mínimo hasta veinticuatro en el máximo. La cuantía se calcula sobre la base de cotización y decrece en la segunda fase.',
			},
			{
				question: '¿Dónde se solicita?',
				answer:
					'En la mutualidad colaboradora a la que estés adscrito, no en el SEPE, en los quince días hábiles siguientes al cese. Si te la deniegan, cabe reclamación previa y demanda ante el juzgado de lo social.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/empresas', label: 'servicios jurídicos para autónomos' },
			{ path: '/incapacidad-permanente', label: 'incapacidad y prestaciones' },
		],
	},
];
