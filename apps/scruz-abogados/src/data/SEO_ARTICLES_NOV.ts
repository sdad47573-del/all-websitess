/**
 * Lote de contenido nuevo (nov 2026). Sigue el formato de `SEO_ARTICLES_OCT*.ts`:
 * guías de intención informativa que responden a consultas con impresiones y sin
 * página dedicada, y que refuerzan áreas ya cubiertas por el despacho (laboral,
 * herencias y contratos de vivienda).
 *
 * Las tres usan categorías existentes, así que su hub de `/blog/categoria/.../`
 * las recoge sin tocar `BLOG_CATEGORIES.ts`, y declaran tres `relatedServices`
 * cada una para que el enlazado de vuelta desde la página de servicio lo genere
 * `blogInternalLinks.ts` (ninguna queda huérfana).
 *
 * Reglas de forma (las comprueba `SEO_ARTICLES.test.ts`): 6 secciones, 5 puntos
 * de checklist, 3 preguntas frecuentes y 3 servicios relacionados por artículo.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_NOV: SeoArticle[] = [
	{
		slug: 'despido-por-bajo-rendimiento',
		title: 'Despido por bajo rendimiento: cuándo vale y cómo recurrirlo',
		description:
			'El bajo rendimiento rara vez justifica un despido por sí solo: qué exige el Estatuto, cómo se prueba, qué diferencia hay con el despido objetivo y cómo se impugna.',
		date: '2026-11-03',
		category: 'Derecho Laboral',
		readTime: '8 min',
		intro: 'El bajo rendimiento es una de las causas que más se alegan en una carta de despido y una de las que peor se documentan. No basta con que la empresa considere que trabajas poco: la ley exige comparar con un rendimiento debido, acreditarlo y respetar la forma del despido. Si te han despedido por este motivo, cómo se redactó la carta decide buena parte del resultado.',
		sections: [
			{
				heading: 'Qué exige la ley para despedir por bajo rendimiento',
				paragraphs: [
					'El Estatuto de los Trabajadores admite dos vías distintas. La disciplinaria (art. 54.2.e) exige una disminución continuada y voluntaria del rendimiento pactado; la objetiva (art. 52.d) cubre la ineptitud sobrevenida o la falta de adaptación a cambios técnicos u organizativos. Son causas diferentes, con requisitos y efectos económicos distintos.',
					'En ambos casos hay un elemento que la empresa debe construir: el término de comparación. El rendimiento se mide frente a lo que el puesto exige o frente a lo que el propio trabajador obtenía antes, no frente a la impresión del mando. Sin ese parámetro, la causa se cae aunque el resultado sea objetivamente bajo.',
				],
			},
			{
				heading: 'Disciplinario u objetivo: no son lo mismo',
				paragraphs: [
					'El despido disciplinario por bajo rendimiento exige voluntariedad y no da derecho a indemnización ni a preaviso, pero obliga a acreditar los hechos en la carta (art. 55). Si se elige esta vía y solo se prueba una ineptitud sobrevenida, el despido suele calificarse como improcedente.',
					'El despido objetivo requiere causa organizativa, técnica o de ineptitud, un preaviso de quince días y una indemnización de veinte días de salario por año trabajado, con el tope de doce mensualidades (art. 53). Para una situación realmente sobrevenida suele ser la vía correcta, aunque cueste más a la empresa.',
				],
			},
			{
				heading: 'Cómo se prueba el rendimiento bajo',
				paragraphs: [
					'La prueba útil son objetivos medibles fijados antes del conflicto: metas por escrito, evaluaciones periódicas, informes de productividad, registros de tareas, comparativas con compañeros del mismo puesto y advertencias previas que dieron al trabajador la oportunidad de corregir.',
					'Cuando el puesto no permite medir cantidad, se acude a indicadores cualitativos (errores reiterados, reclamaciones documentadas, incumplimiento de plazos) y, en puestos técnicos, a un informe pericial. Los correos internos y las actas de reunión valen más que la declaración del jefe en el juicio.',
				],
			},
			{
				heading: 'Los errores que convierten el despido en improcedente',
				paragraphs: [
					'Los más frecuentes: no comparar con ningún término, no haber fijado objetivos por escrito, medir solo el último mes, no haber advertido ni dado formación, y redactar una carta genérica. Cualquiera de ellos deja la causa sin sustento y traslada a la empresa la carga de demostrarla.',
					'También es un error despedir por rendimiento a quien ha denunciado acoso, está de baja, ha pedido reducción de jornada o ha reclamado sus derechos. En esos casos la calificación puede ser nula, con readmisión obligatoria y salarios de tramitación, no improcedente.',
				],
			},
			{
				heading: 'Qué se puede reclamar y en qué plazo',
				paragraphs: [
					'El plazo es de veinte días hábiles desde la fecha de efectos del despido (art. 59.3 del Estatuto). La presentación de la papeleta de conciliación ante el SMAC suspende el plazo, y sin ese trámite previo no se puede demandar (art. 65 de la Ley Reguladora de la Jurisdicción Social).',
					'Si el despido se declara improcedente, la empresa elige entre readmisión o indemnización de treinta y tres días por año trabajado, con el límite de veinticuatro mensualidades. Si se declara nulo, la readmisión es obligatoria y se suman los salarios de tramitación. El acuerdo en conciliación es una salida habitual y puede mejorarse cuando la causa está mal documentada.',
				],
			},
			{
				heading: 'Estrategia práctica antes de demandar',
				paragraphs: [
					'Primero se revisa la carta: fecha de efectos, hechos concretos, causa invocada y si se entregó copia al comité cuando el trabajador es representante. Después se reúne la documentación del rendimiento (objetivos, evaluaciones, correos, tareas) y se comprueba si la empresa siguió su propio protocolo interno.',
					'No conviene firmar un finiquito con renuncia a reclamar ni dejar pasar los veinte días esperando una respuesta. Con la papeleta presentada a tiempo se conserva el derecho y se abre una negociación que, en la mayoría de los casos, termina antes del juicio.',
				],
			},
		],
		checklist: [
			'Conserva la carta de despido y verifica la fecha de efectos.',
			'Reúne objetivos, evaluaciones y correos de los últimos meses.',
			'Comprueba si hubo advertencias o formación previas.',
			'No firmes un finiquito con renuncia a reclamar.',
			'Presenta la papeleta de conciliación dentro de los veinte días hábiles.',
		],
		faq: [
			{
				question: '¿Puede despedirme solo porque mi jefe cree que rindo poco?',
				answer:
					'No. La disminución debe ser continuada, medible y, en la vía disciplinaria, voluntaria. La empresa tiene que aportar un término de comparación y hechos concretos en la carta; sin ellos el despido es improcedente aunque el rendimiento fuera mejorable.',
			},
			{
				question: '¿Cuánto corresponde si el despido por bajo rendimiento es improcedente?',
				answer:
					'Treinta y tres días de salario por año trabajado, con prorrateo por meses de los periodos inferiores al año y el tope de veinticuatro mensualidades. La empresa puede optar por la readmisión; si el despido se declara nulo, la readmisión es obligatoria y se añaden los salarios de tramitación.',
			},
			{
				question: '¿Y si el bajo rendimiento viene de falta de formación o de medios?',
				answer:
					'Entonces no hay voluntariedad y la vía disciplinaria no se sostiene. Puede encajar en el despido objetivo por ineptitud o falta de adaptación, con indemnización y preaviso, y si el origen es una enfermedad o una discapacidad conviene revisar si concurre discriminación, porque cambiaría la calificación a nula.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'impugnación de despidos e indemnizaciones' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
			{ path: '/contratos-laborales', label: 'revisión de contratos y condiciones de trabajo' },
		],
	},
	{
		slug: 'heredar-vivienda-con-hipoteca',
		title: 'Heredar una casa con hipoteca: qué pasa con la deuda',
		description:
			'Si heredas una vivienda con hipoteca, la deuda va con la casa y no con tu patrimonio personal: aceptación a beneficio de inventario, subrogación y opciones reales.',
		date: '2026-11-03',
		category: 'Herencias',
		readTime: '8 min',
		intro: 'Una vivienda con hipoteca sigue siendo un bien útil para los herederos, pero llega con una carga que hay que mirar antes de aceptar. El banco no puede reclamar contra el patrimonio personal del heredero más allá de lo que recibe si la herencia se acepta a beneficio de inventario. Lo que decide la factura final es cómo se acepta, quién se queda la casa y qué se hace con el préstamo antes de repartir.',
		sections: [
			{
				heading: 'La deuda se hereda con los bienes, no con tu bolsillo',
				paragraphs: [
					'El heredero responde de las deudas del fallecido, pero el alcance depende de cómo acepte. Con la aceptación pura y simple responde también con sus propios bienes (art. 1003 del Código Civil); a beneficio de inventario, solo con los bienes que recibe de la herencia.',
					'Esa diferencia es la que evita que una hipoteca impagada acabe afectando al sueldo o a la casa del heredero. La aceptación a beneficio de inventario se formaliza ante notario y conviene decidirla antes de firmar cualquier documento de la sucesión, incluida la escritura de adjudicación.',
				],
			},
			{
				heading: 'Qué se debe al banco cuando fallece el titular',
				paragraphs: [
					'El préstamo no desaparece con el deudor. Lo habitual es que el banco ofrezca al heredero subrogarse en la hipoteca manteniendo las condiciones, o que exija el pago de lo pendiente si la operación se declaró vencida por fallecimiento, una cláusula que conviene revisar antes de aceptar.',
					'Si existía un seguro de vida o de amortización vinculado al préstamo, puede cubrir total o parcialmente la deuda. Reclamar esa cobertura es el primer paso cuando la póliza se contrató con la hipoteca y el siniestro está cubierto.',
				],
			},
			{
				heading: 'Aceptar a beneficio de inventario o renunciar',
				paragraphs: [
					'El inventario permite conocer el activo y el pasivo antes de responder: valor de la vivienda, hipoteca pendiente, otras deudas, IBI, comunidad y gastos de la propia sucesión. Si el pasivo supera al activo, la renuncia (art. 1008) evita heredar un problema, siempre que no perjudique a los acreedores del propio heredero.',
					'La renuncia se hace en escritura pública y es irrevocable. No es lo mismo que no aceptar todavía: mientras la herencia no se acepta ni se renuncia, el heredero no responde, pero el plazo para decidir no es indefinido y la vivienda puede deteriorarse mientras tanto.',
				],
			},
			{
				heading: 'Quién se queda la casa y cómo compensa al resto',
				paragraphs: [
					'Si hay varios herederos, la vivienda puede adjudicarse a uno solo con compensación en metálico a los demás, o venderse y repartir el precio. La partición debe valorar la casa por su valor real menos la carga hipotecaria que asume quien se la queda, no por el precio de la escritura original.',
					'Cuando hay herederos menores o con discapacidad, la adjudicación y la aceptación requieren autorización judicial o intervención del ministerio fiscal. La subrogación en el préstamo necesita además el consentimiento del banco, que puede exigir garantías o novar las condiciones.',
				],
			},
			{
				heading: 'Impuestos y gastos que llegan después',
				paragraphs: [
					'En Andalucía el impuesto de sucesiones está bonificado al 99 % para cónyuge, descendientes, ascendientes y parientes hasta el tercer grado, con una reducción propia de la base imponible de un millón de euros. Aun así hay que presentar la liquidación en plazo, aunque el resultado sea cero.',
					'Además se paga la plusvalía municipal, que solo se devenga si el suelo ha ganado valor, el IBI y la comunidad del periodo posterior al fallecimiento, la escritura de adjudicación y su inscripción. Son gastos que conviene restar antes de decidir si la casa compensa como adjudicación.',
				],
			},
			{
				heading: 'Errores caros al heredar una vivienda con hipoteca',
				paragraphs: [
					'Aceptar sin inventario y sin conocer la deuda pendiente, dejar de pagar la hipoteca mientras se reparte la herencia o repartir el valor de la casa sin descontar la carga son los errores que más caro salen. La ejecución hipotecaria no se detiene porque los herederos estén discutiendo.',
					'También se pasa por alto el seguro vinculado, la posible revisión de las condiciones del préstamo y el plazo de presentación del impuesto. Ordenar la sucesión con la documentación del banco delante evita que la herencia se convierta en una deuda que nadie firmó.',
				],
			},
		],
		checklist: [
			'Pide al banco el saldo y las condiciones del préstamo.',
			'Comprueba si hay seguro de vida o de amortización.',
			'Decide la aceptación (a beneficio de inventario o pura) antes de firmar.',
			'Valora la casa descontando la hipoteca pendiente.',
			'Presenta el impuesto de sucesiones aunque la cuota sea cero.',
		],
		faq: [
			{
				question: '¿Tengo que pagar la hipoteca de mi padre si no puedo asumirla?',
				answer:
					'No con tu patrimonio personal si aceptas a beneficio de inventario, porque solo respondes con los bienes heredados. Si la deuda supera el valor de la casa, puedes renunciar a la herencia en escritura pública; si ya la aceptaste sin inventario, conviene revisar la situación con un abogado antes de que el banco reclame.',
			},
			{
				question: '¿El banco puede quedarse la casa sin pasar por el juzgado?',
				answer:
					'La ejecución hipotecaria se tramita por la vía judicial, con subasta y posibilidad de defensa. Lo que sí puede hacer el banco es no aceptar la subrogación del heredero si no cumple sus condiciones de solvencia, y exigir el pago de la deuda pendiente cuando el préstamo se declaró vencido.',
			},
			{
				question: '¿Se paga impuesto de sucesiones por heredar una casa hipotecada?',
				answer:
					'Sí, se declara por el valor real del inmueble menos las cargas que lo gravan, como la hipoteca pendiente. En Andalucía la cuota suele quedar en cero para familiares directos por la bonificación del 99 %, pero la autoliquidación se presenta igualmente dentro del plazo legal.',
			},
		],
		relatedServices: [
			{ path: '/herencias-testamentos', label: 'herencias, aceptación y partición' },
			{ path: '/reparto-herencia', label: 'reparto de la vivienda entre herederos' },
			{ path: '/impuestos-herencia', label: 'impuesto de sucesiones en Andalucía' },
		],
	},
	{
		slug: 'alquiler-con-opcion-de-compra',
		title: 'Alquiler con opción de compra: cláusulas y riesgos reales',
		description:
			'El alquiler con opción de compra fija hoy la renta y el precio de mañana: qué cláusulas son imprescindibles, cómo se computa la prima y qué pasa si no se ejerce.',
		date: '2026-11-03',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'El alquiler con opción de compra permite probar la vivienda y asegurar un precio de venta futuro. El problema aparece cuando el contrato no dice cómo se calcula la parte de la renta que se imputa al precio, qué ocurre si el propietario vende a un tercero o si la casa no está en condiciones de comprarse. La opción se paga: cuesta una prima y tiene plazo.',
		sections: [
			{
				heading: 'Qué es y qué no es una opción de compra',
				paragraphs: [
					'Es un derecho a comprar a un precio y en un plazo pactados, que se suma a un arrendamiento. No es una compraventa: no transmite la propiedad ni obliga a comprar, solo da la facultad de hacerlo. Quien paga la prima es el futuro comprador; quien la recibe se obliga a vender si la opción se ejerce.',
					'No debe confundirse con las arras, que son una garantía de una compraventa ya acordada, ni con el alquiler con derecho a compra en el que las rentas se descuentan sin plazo cerrado. La diferencia está en el plazo para ejercer, en la prima y en el precio cierto o determinable.',
				],
			},
			{
				heading: 'Cláusulas imprescindibles del contrato',
				paragraphs: [
					'El contrato necesita el plazo para ejercer y la forma de hacerlo (burofax o requerimiento notarial), el precio de compra o la fórmula para calcularlo, la prima y su naturaleza, y la parte de la renta que se imputa al precio si se ejerce.',
					'También deben constar el estado y las cargas de la vivienda, quién paga IBI, comunidad y obras, qué ocurre con la hipoteca del propietario y qué gastos e impuestos asume cada parte. Sin estas reglas, la opción se convierte en una discusión abierta cuando llega el momento de firmar.',
				],
			},
			{
				heading: 'La prima y la imputación de las rentas',
				paragraphs: [
					'La prima es el precio del derecho y se pierde si la opción no se ejerce, salvo que se pacte otra cosa o el incumplimiento sea del propietario. Su cuantía suele ser un porcentaje del precio y, si finalmente se compra, se descuenta del importe total.',
					'La imputación de las rentas solo existe si se pacta expresamente. Debe indicarse el porcentaje o importe de cada mensualidad que se descuenta del precio, con el límite acordado; en caso de no ejercer, esas cantidades no se devuelven. Es el punto que más reclamaciones genera cuando el contrato es un modelo copiado.',
				],
			},
			{
				heading: 'Hipoteca, embargo o venta a un tercero',
				paragraphs: [
					'Si el propietario vende la vivienda a otra persona antes de que se ejerza la opción, incumple el contrato, pero recuperar la casa del tercero depende de que la opción esté inscrita en el Registro de la Propiedad. Inscrita, es oponible; sin inscribir, el comprador protegido por la fe pública registral puede prevalecer.',
					'La hipoteca del vendedor y los embargos también condicionan la compra: hay que comprobar la nota simple antes de firmar y exigir que la cancelación de cargas se haga en el mismo acto de la escritura, o pactar una condición suspensiva con devolución de la prima.',
				],
			},
			{
				heading: 'Si la vivienda no se puede comprar',
				paragraphs: [
					'Falta de licencia de primera ocupación, exceso de edificabilidad, una herencia sin particionar o una sociedad titular con problemas son causas habituales de bloqueo. Si el vendedor no puede transmitir, la opción no desaparece: el comprador puede exigir la devolución de la prima y los daños causados.',
					'Por eso conviene incluir una condición suspensiva que describa qué documentación debe entregar el vendedor y qué ocurre si no la aporta en plazo. Una cláusula de devolución de la prima bien redactada es más eficaz que un litigio posterior.',
				],
			},
			{
				heading: 'Cómo salir del contrato sin perder lo pagado',
				paragraphs: [
					'Si se quiere comprar, hay que ejercer la opción dentro del plazo y por el medio pactado, sin esperar al último día. La notificación por burofax con acuse y texto suficiente es la prueba que evita discutir si el ejercicio fue válido.',
					'Si se decide no comprar, se pierde la prima salvo pacto en contrario, pero las rentas del arrendamiento se rigen por la ley de arrendamientos y deben devolverse si no se pactó su imputación. Y si el propietario incumple, cabe pedir la resolución, la devolución de la prima y la indemnización por los daños acreditados.',
				],
			},
		],
		checklist: [
			'Fija por escrito el plazo y la forma de ejercer la opción.',
			'Deja el precio cerrado o una fórmula de cálculo objetiva.',
			'Especifica la prima y qué parte de la renta se imputa al precio.',
			'Pide la nota simple y revisa hipotecas y cargas.',
			'Valora inscribir la opción en el Registro de la Propiedad.',
		],
		faq: [
			{
				question: '¿Qué pasa con la prima si no acabo comprando la casa?',
				answer:
					'Se pierde, porque es el precio del derecho y no una señal de la compraventa, salvo que el contrato prevea su devolución total o parcial. Sí se puede recuperar si el incumplimiento es del propietario o si la compra queda bloqueada por causas que el contrato ponga a su cargo.',
			},
			{
				question: '¿Hay que inscribir la opción de compra en el Registro?',
				answer:
					'Es muy recomendable. La opción es un derecho inscribible y, una vez inscrita, se puede oponer a quien compre después. Sin inscripción, si el propietario vende a un tercero de buena fe que inscribe, recuperar la vivienda se complica y la reclamación se limita a daños y perjuicios.',
			},
			{
				question: '¿Se descuentan las rentas del precio de compra?',
				answer:
					'Solo si el contrato lo dice y con el alcance pactado. Si no se pactó la imputación, las rentas son rentas del alquiler y no rebajan el precio. Conviene fijar el porcentaje o importe mensual imputable y el límite total, además de qué ocurre con esas cantidades si la opción no se ejerce.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'contratos y compraventas civiles' },
			{ path: '/alquiler-viviendas', label: 'arrendamientos de vivienda' },
			{ path: '/incumplimiento-contrato', label: 'reclamación por incumplimiento del contrato' },
		],
	},
];
