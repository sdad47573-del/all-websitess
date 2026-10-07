/**
 * Undécimo lote de contenido nuevo (oct 2026). Igual que los lotes anteriores
 * (`SEO_ARTICLES_SEO.ts`, `SEO_ARTICLES_OCT.ts`, `SEO_ARTICLES_OCT2.ts` y
 * `SEO_ARTICLES_OCT3.ts`), nace del exporte de Google Search Console: consultas
 * informativas con impresiones y sin página dedicada. Este lote cubre usucapión,
 * atribución de la vivienda familiar, delito de lesiones, apropiación indebida,
 * contrato a tiempo parcial, periodo de prueba, accidente de moto y viajes
 * combinados. Ninguna crea categoría nueva.
 *
 * Cada artículo declara sus tres `relatedServices` para alimentar el enlazado
 * bidireccional de `blogInternalLinks.ts`: la entrada derivada hace que la
 * página de servicio enlace de vuelta a la guía, así que ninguna queda huérfana.
 * Reglas de forma: title ≤ 62, description ≤ 162 e intro > 150 caracteres.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_OCT4: SeoArticle[] = [
	{
		slug: 'usucapion-prescripcion-adquisitiva',
		title: 'Usucapión: cómo se adquiere una finca por el uso',
		description:
			'Qué es la usucapión, qué plazos y requisitos exige, cómo se prueba la posesión continuada y cómo se defiende frente a quien la reclama.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'Poseer una finca durante años, de forma pacífica y como dueño, puede acabar convirtiendo esa posesión en propiedad. Es la usucapión, y en el medio rural es una fuente constante de conflictos por caminos, lindes y parcelas. No basta con usar el terreno: hay que probar una posesión concreta durante el plazo legal.',
		sections: [
			{
				heading: 'Qué es la usucapión',
				paragraphs: [
					'La usucapión o prescripción adquisitiva permite adquirir la propiedad por la posesión continuada durante el tiempo y con las condiciones que fija la ley. No es un favor ni una sanción: es un modo de adquirir reconocido en el Código Civil.',
					'Se distingue de la simple ocupación y del arrendamiento. Quien usa la finca como inquilino, con permiso o por tolerancia del dueño, no está poseyendo como propietario y, en principio, no puede usucapir.',
				],
			},
			{
				heading: 'Requisitos de la posesión',
				paragraphs: [
					'La posesión debe ser en concepto de dueño, pública, pacífica e ininterrumpida. Es decir, quien la invoca debe comportarse como titular, sin violencia ni clandestinidad, y sin actos del dueño que la interrumpan.',
					'El pago de contribuciones, el cerramiento de la finca, el cultivo y la explotación son indicios de esa posesión en concepto de dueño. Documentarlos ayuda a sostener la pretensión.',
				],
			},
			{
				heading: 'Los plazos según el tipo',
				paragraphs: [
					'La ley fija plazos distintos para bienes muebles e inmuebles, y también según se posea de buena o de mala fe. Cuanto más larga es la posesión, más sólida es la posición, pero el plazo concreto debe comprobarse en cada caso.',
					'El cómputo puede verse afectado por la interrupción de la posesión, por reclamaciones del titular o por la inscripción registral del dueño. Cada interrupción obliga a revisar desde cuándo se cuenta de nuevo.',
				],
			},
			{
				heading: 'Cómo se prueba la posesión',
				paragraphs: [
					'Se prueba con la escritura, si existe, el catastro, los recibos de contribución, la cartografía histórica, las fotografías aéreas y los testimonios. La prueba debe cubrir el tiempo exigido, no solo el momento actual.',
					'Un informe técnico que describa los linderos y el uso del terreno durante años es muy útil. Cuanto más continuada y documentada esté la posesión, menos margen queda para discutirla.',
				],
			},
			{
				heading: 'Cómo se reconoce y se inscribe',
				paragraphs: [
					'El reconocimiento puede lograrse por acuerdo entre las partes o mediante un procedimiento judicial. En muchos casos se tramita como un expediente de dominio para inscribir la finca a nombre de quien la posee.',
					'La inscripción en el Registro de la Propiedad da publicidad y protección frente a terceros. Sin ella, la situación es más frágil frente a quien aparezca como titular registral.',
				],
			},
			{
				heading: 'Errores y defensas frente a la usucapión',
				paragraphs: [
					'El error más común es creer que el simple paso del tiempo basta. También lo es presentar como propia una posesión que empezó con permiso del dueño o que fue interrumpida.',
					'Frente a una pretensión de usucapión, se alega la falta de alguno de sus requisitos, la interrupción de la posesión o la posesión en otro concepto. La prueba registral y documental del titular es clave.',
				],
			},
		],
		checklist: [
			'Reúne catastro, recibos y escrituras.',
			'Documenta la posesión durante todo el plazo.',
			'Comprueba si hubo interrupciones.',
			'Acredita que la posesión fue en concepto de dueño.',
			'Valora el expediente de dominio para inscribir.',
		],
		faq: [
			{
				question: '¿Cuántos años hay que poseer una finca para ser dueño?',
				answer:
					'Depende del tipo de bien y de si la posesión es de buena o de mala fe. Los plazos son distintos y deben comprobarse en cada caso, contando las posibles interrupciones.',
			},
			{
				question: '¿Sirve poseer la finca con permiso del dueño?',
				answer:
					'No para usucapir. La posesión debe ser en concepto de dueño; si se posee como inquilino, con permiso o por mera tolerancia, falta ese requisito.',
			},
			{
				question: '¿Cómo se inscribe una finca usucapida?',
				answer:
					'Mediante acuerdo entre las partes o por un procedimiento judicial, habitualmente un expediente de dominio. La inscripción da publicidad y protege frente a terceros.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'derechos reales y fincas' },
			{ path: '/incumplimiento-contrato', label: 'conflictos entre propietarios' },
			{ path: '/responsabilidad-civil', label: 'responsabilidad civil' },
		],
	},
	{
		slug: 'atribucion-de-la-vivienda-familiar',
		title: 'Atribución de la vivienda familiar tras el divorcio',
		description:
			'Quién se queda en la vivienda familiar tras la separación, qué valora el juez con y sin hijos, cuánto dura la atribución y qué hacer con la hipoteca.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '7 min',
		intro: 'Decidir quién se queda en la casa es uno de los puntos más conflictivos de una ruptura. La ley protege a los hijos, pero también existen reglas cuando no los hay. La atribución del uso no cambia la propiedad ni, por sí sola, quién paga la hipoteca, y confundir esas cosas genera problemas.',
		sections: [
			{
				heading: 'Qué es la atribución del uso de la vivienda',
				paragraphs: [
					'Es la decisión sobre quién puede seguir ocupando la vivienda familiar tras la ruptura. No reparte la propiedad ni resuelve a quién pertenece el inmueble: solo regula su uso mientras se mantiene esa situación.',
					'La vivienda familiar es la que sirvió de residencia habitual de la familia, con independencia de a quién pertenezca. Ese carácter es el que activa las reglas de protección.',
				],
			},
			{
				heading: 'Cuándo hay hijos: el interés del menor',
				paragraphs: [
					'Si hay hijos menores, la ley atribuye el uso a quien tenga la guarda y custodia, o a ambos si la custodia es compartida, buscando su estabilidad. El interés del menor es el criterio que pesa por encima de todo.',
					'Solo de forma excepcional se priva a los hijos del uso de la vivienda, y siempre por causa justificada. El juez valora las circunstancias de cada familia antes de decidir.',
				],
			},
			{
				heading: 'Cuándo no hay hijos',
				paragraphs: [
					'Cuando no hay hijos, la atribución se decide a falta de acuerdo valorando las circunstancias: quién tiene más necesidad, la duración del matrimonio, la dedicación a la familia, los medios de cada uno y la posibilidad de acceder a otra vivienda.',
					'La atribución puede ser temporal y debe revisarse si cambian las circunstancias. Un uso indefinido sin justificación puede impugnarse.',
				],
			},
			{
				heading: 'Qué pasa con la hipoteca y los gastos',
				paragraphs: [
					'La atribución del uso no exime automáticamente del pago de la hipoteca a quien figura como titular. Si el préstamo es de ambos, el banco puede reclamar a los dos, con independencia de quién ocupa la casa.',
					'Es habitual que el convenio regule quién paga la hipoteca, los gastos y los suministros, y que prevea la liquidación del inmueble. Sin ese pacto, la discusión se traslada al juzgado.',
				],
			},
			{
				heading: 'Duración y modificación',
				paragraphs: [
					'La atribución puede fijarse por un tiempo determinado o hasta que se liquide el patrimonio o cambien las circunstancias. El juez puede revisarla si la situación familiar o económica se altera.',
					'El traslado de la familia, la independencia de los hijos o la mejora económica de alguna parte son motivos habituales para pedir la revisión. Hacerlo a tiempo evita que la situación se consolide.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Confundir la atribución del uso con la propiedad, dejar de pagar la hipoteca por cuenta propia o permitir que la atribución impida vender el inmueble son errores frecuentes. También lo es firmar un convenio sin prever la salida futura.',
					'Antes de acordar la vivienda conviene decidir qué pasará con la hipoteca, con los gastos y con la venta o adjudicación del inmueble. Lo que no se pacta, se acaba litigando.',
				],
			},
		],
		checklist: [
			'Comprueba el título y la titularidad de la vivienda.',
			'Define la atribución del uso y su duración.',
			'Aclara quién paga la hipoteca y los gastos.',
			'Prevé la liquidación o venta del inmueble.',
			'Revisa la atribución si cambian las circunstancias.',
		],
		faq: [
			{
				question: '¿Quién se queda en la casa tras el divorcio?',
				answer:
					'Si hay hijos menores, se protege su estabilidad y suele atribuirse el uso a quien tenga la custodia. Sin hijos, se decide por acuerdo o por las circunstancias de cada parte.',
			},
			{
				question: '¿La atribución del uso me hace dueño de la casa?',
				answer:
					'No. La atribución solo regula quién puede ocuparla mientras se mantiene esa situación; no cambia la propiedad ni el régimen de titularidad.',
			},
			{
				question: '¿Quién paga la hipoteca si ya no vivo en la casa?',
				answer:
					'La obligación frente al banco no desaparece por dejar de ocupar la vivienda: si el préstamo es de ambos, responde cada uno. Conviene regular en el convenio quién paga y cómo se liquida el inmueble.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
			{ path: '/guarda-custodia', label: 'guarda y custodia' },
			{ path: '/liquidacion-gananciales', label: 'liquidación de gananciales' },
		],
	},
	{
		slug: 'delito-de-lesiones',
		title: 'Delito de lesiones: grados, penas e indemnización',
		description:
			'Diferencia entre lesiones leves y graves, cómo se acreditan, las penas según el resultado y cómo reclamar la indemnización por las secuelas.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'Una agresión con resultado de lesiones se castiga en función del daño causado, y de ese mismo daño nace la indemnización para la víctima. El parte de lesiones, la asistencia médica y la pericial son las piezas que determinan tanto la pena como la compensación. Perder el rastro médico es el peor error.',
		sections: [
			{
				heading: 'Qué es el delito de lesiones',
				paragraphs: [
					'El delito de lesiones castiga causar a otra persona un menoscabo de su integridad corporal o de su salud física o mental. La conducta puede cometerse por cualquier medio y no exige un resultado permanente.',
					'No toda agresión es el mismo delito: la calificación depende del resultado, de la gravedad y de las circunstancias en que se produce. La misma conducta puede ser delito leve o grave según el daño.',
				],
			},
			{
				heading: 'Lesiones leves, menos graves y graves',
				paragraphs: [
					'La ley distingue según la necesidad de tratamiento médico o quirúrgico y según el resultado: la pérdida de un órgano, una deformidad o una enfermedad grave. A mayor resultado, mayor calificación y pena.',
					'Cuando la agresión se produce en el ámbito familiar o de género, la calificación se agrava con independencia del daño físico. El contexto cambia el tipo penal aplicable.',
				],
			},
			{
				heading: 'Cómo se acreditan las lesiones',
				paragraphs: [
					'El parte de lesiones y la historia clínica son la base, pero no bastan para fijar las secuelas. Suele ser necesaria una pericial médica forense y, en algunos casos, un informe médico independiente.',
					'Fotografías de las lesiones, partes de baja, informes de rehabilitación y pruebas de seguimiento completan el cuadro. Todo debe quedar documentado desde las primeras horas.',
				],
			},
			{
				heading: 'Penas y circunstancias',
				paragraphs: [
					'La pena depende de la calificación y de las circunstancias: el uso de armas, el ensañamiento, el parentesco o la violencia de género pueden agravarla. También la reparación del daño puede atenuarla.',
					'El autor puede enfrentarse a prisión, multa o trabajos en beneficio de la comunidad. La conformidad y la reparación temprana permiten muchas veces un resultado más favorable.',
				],
			},
			{
				heading: 'La indemnización por las secuelas',
				paragraphs: [
					'La víctima puede reclamar la indemnización derivada del delito: días de curación, secuelas, gastos médicos y perjuicios. Ese cálculo se apoya en la pericial y en las facturas.',
					'La indemnización se puede ejercitar en el propio proceso penal o reservar la vía civil. En ambos casos, la prueba del daño es lo que sostiene la cantidad reclamada.',
				],
			},
			{
				heading: 'Errores que reducen las opciones',
				paragraphs: [
					'No acudir al médico, abandonar el tratamiento antes de la estabilización o no conservar los partes son errores que dificultan fijar las secuelas. También lo es aceptar una conformidad sin conocer el alcance real de las lesiones.',
					'Lo correcto es recibir asistencia, conservar toda la documentación médica y no aceptar un acuerdo sin una valoración clara del daño y de sus consecuencias.',
				],
			},
		],
		checklist: [
			'Recibe asistencia médica y guarda el parte de lesiones.',
			'Fotografía las lesiones desde el primer día.',
			'Conserva partes de baja e informes de seguimiento.',
			'No abandones el tratamiento antes de estabilizar.',
			'Valora la pericial antes de aceptar un acuerdo.',
		],
		faq: [
			{
				question: '¿Qué diferencia hay entre lesiones leves y graves?',
				answer:
					'Depende del resultado y de la necesidad de tratamiento médico o quirúrgico. A mayor resultado (deformidad, pérdida de órgano o enfermedad grave), mayor es la calificación y la pena.',
			},
			{
				question: '¿Cómo se reclama la indemnización por las lesiones?',
				answer:
					'Se puede ejercitar dentro del proceso penal o reservar la vía civil. La cuantía se calcula con la pericial, los días de curación, las secuelas y los gastos acreditados.',
			},
			{
				question: '¿Y si la agresión fue en el ámbito familiar?',
				answer:
					'El contexto familiar o de género agrava la calificación con independencia del daño físico, y abre medidas de protección específicas para la víctima.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal y acusación' },
			{ path: '/violencia-genero', label: 'asistencia por violencia de género' },
			{ path: '/derecho-civil', label: 'reclamación de la indemnización' },
		],
	},
	{
		slug: 'apropiacion-indebida',
		title: 'Apropiación indebida: cuándo es delito y cómo defenderse',
		description:
			'Qué diferencia la apropiación indebida del mero impago, cuándo es delito, cómo se prueba el apoderamiento y cómo se defiende el investigado.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'Recibir dinero o bienes para un fin concreto y quedárselos puede ser apropiación indebida, pero no todo impago lo es. La frontera entre el delito y el conflicto civil depende de si existía la obligación de devolver o destinar y de la intención de quedárselo. Distinguirlo evita denuncias que acaban archivadas.',
		sections: [
			{
				heading: 'Qué es la apropiación indebida',
				paragraphs: [
					'La apropiación indebida consiste en recibir legalmente dinero, bienes o efectos con la obligación de devolverlos o destinarlos a un fin, y quedárselos o darles un destino distinto, con ánimo de lucro.',
					'La clave es que la posesión inicial es legítima: se recibió algo que debía devolverse o aplicarse a un objetivo concreto. Si desde el principio hubo engaño, la figura puede ser la estafa.',
				],
			},
			{
				heading: 'Diferencia con el impago y con la estafa',
				paragraphs: [
					'No todo impago es apropiación indebida: si la obligación era pagar una deuda, el conflicto es civil. La figura penal exige que se recibiera algo con la obligación de devolverlo o destinarlo y que se dispusiera de ello.',
					'Frente a la estafa, la diferencia está en el momento del engaño. En la apropiación, la entrega es legítima y el abuso viene después; en la estafa, el engaño precede a la entrega.',
				],
			},
			{
				heading: 'Supuestos habituales',
				paragraphs: [
					'Aparece en la gestión de dinero ajeno, en encargos de venta, en administraciones de bienes, en cantidades entregadas para un fin concreto y en relaciones societarias. Cada supuesto exige analizar de dónde vino el dinero y qué se pactó.',
					'En el ámbito societario, la administración desleal es una figura próxima que también puede concurrir. La calificación correcta depende de si el administrador tenía facultades y de cómo las usó.',
				],
			},
			{
				heading: 'Cómo se prueba',
				paragraphs: [
					'Se prueba con el contrato o el encargo, los justificantes de entrega, los movimientos bancarios y la contabilidad. El punto central es acreditar que existía la obligación de devolver o destinar y que no se cumplió.',
					'Los mensajes y correos donde se reconoce el encargo y la deuda son muy valiosos. Cuanto más clara esté la finalidad del dinero, más sólida es la acusación.',
				],
			},
			{
				heading: 'Cómo se defiende el investigado',
				paragraphs: [
					'La defensa niega el ánimo de lucro, acredita el destino dado a los fondos o sostiene que el conflicto es civil y no penal. También revisa los plazos y la calificación de los hechos.',
					'Restituir lo debido o justificar en qué se empleó el dinero puede cambiar el resultado. No hacerlo refuerza la apariencia de apoderamiento.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Denunciar sin acreditar el encargo, borrar mensajes o confundir un impago con un delito son errores que llevan al archivo. En el otro lado, disponer de fondos ajenos sin documentar el destino agrava la posición.',
					'Antes de actuar conviene reunir toda la documentación, ordenar los movimientos y determinar con claridad si existía una obligación de devolver o destinar. De eso depende la vía correcta.',
				],
			},
		],
		checklist: [
			'Reúne el contrato o el encargo y los justificantes.',
			'Ordena los movimientos bancarios.',
			'Comprueba si existía obligación de devolver o destinar.',
			'Distingue si el engaño fue previo o posterior.',
			'Valora restituir antes de litigar.',
		],
		faq: [
			{
				question: '¿Cuál es la diferencia con la estafa?',
				answer:
					'En la apropiación indebida la entrega es legítima y el abuso ocurre después; en la estafa, el engaño precede a la entrega y es lo que motiva el desplazamiento patrimonial.',
			},
			{
				question: '¿Un impago puede ser apropiación indebida?',
				answer:
					'No por sí solo. Si la obligación era pagar una deuda, es un conflicto civil. La figura penal exige haber recibido algo con la obligación de devolverlo o destinarlo y disponer de ello con ánimo de lucro.',
			},
			{
				question: '¿Qué pruebas son decisivas?',
				answer:
					'El encargo o contrato, los justificantes de entrega, los movimientos bancarios y las comunicaciones donde se reconoce la obligación. Acreditar la finalidad del dinero es clave.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/blog/delito-de-estafa', label: 'otros delitos económicos' },
			{ path: '/derecho-civil', label: 'reclamación civil del dinero' },
		],
	},
	{
		slug: 'contrato-a-tiempo-parcial',
		title: 'Contrato a tiempo parcial: horas y derechos',
		description:
			'Cómo funciona el contrato a tiempo parcial, las horas complementarias, su límite, la jornada mínima y cómo reclamar si se superan o no se cobran.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'El contrato a tiempo parcial no es un contrato de segunda: tiene sus propias reglas sobre jornada mínima, horas complementarias y registro. Muchos abusos nacen de trabajar más horas de las pactadas sin que aparezcan en nómina. Conocer los límites permite reclamar lo que corresponde.',
		sections: [
			{
				heading: 'Qué es el contrato a tiempo parcial',
				paragraphs: [
					'Es el contrato en el que se pacta una jornada inferior a la de un trabajador a tiempo completo comparable. Debe constar por escrito el número de horas al día, semana, mes o año y su distribución.',
					'El contrato se puede celebrar por tiempo indefinido o temporal, pero siempre con la jornada concretada. La falta de concreción de la jornada es uno de los defectos más habituales.',
				],
			},
			{
				heading: 'Las horas complementarias',
				paragraphs: [
					'Las horas complementarias son las que se añaden a la jornada pactada. Su número tiene un límite legal y deben pactarse por escrito; además, el trabajador puede aceptarlas o no, con matices.',
					'De las horas complementarias se distingue el trabajo a tiempo completo ocasional y las horas extraordinarias. Confundir esas figuras dificulta el cálculo del salario y de la cotización.',
				],
			},
			{
				heading: 'Jornada mínima y registro',
				paragraphs: [
					'Existe una jornada mínima por debajo de la cual no se puede contratar, para evitar el uso fraudulento del contrato a tiempo parcial. Esa jornada puede variar en la práctica según el convenio.',
					'El registro de jornada es obligatorio también en estos contratos. Sin registro, muchas horas complementarias no se pueden acreditar y el trabajador se ve perjudicado.',
				],
			},
			{
				heading: 'Salario, cotización y días de vacaciones',
				paragraphs: [
					'El salario se reduce en proporción a la jornada, salvo los conceptos no ligados al tiempo trabajado. Las vacaciones y los días festivos también se calculan de forma proporcional.',
					'La cotización se ajusta a las horas trabajadas, lo que afecta a la futura prestación y a la jubilación. Por eso conviene revisar que la vida laboral refleje las horas reales.',
				],
			},
			{
				heading: 'Cómo reclamar si se superan las horas',
				paragraphs: [
					'Trabajar más horas de las pactadas sin que se abonen obliga a reclamar las diferencias salariales y a corregir el registro. Se reúnen nóminas, cuadrantes, mensajes y testigos.',
					'Si la jornada real es superior a la pactada de forma continuada, puede impugnarse el contrato y reclamar las diferencias, además de la posible conversión a tiempo completo en determinados supuestos.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Aceptar de palabra más horas, no comprobar la nómina o no reclamar por escrito son errores que consolidan el abuso. También lo es no revisar la vida laboral para detectar horas no cotizadas.',
					'Antes de reclamar conviene documentar la jornada real, compararla con la pactada y calcular las diferencias. La prueba del exceso de horas es lo que sostiene la reclamación.',
				],
			},
		],
		checklist: [
			'Comprueba la jornada pactada por escrito.',
			'Suma las horas realmente trabajadas.',
			'Revisa nóminas y registro de jornada.',
			'Comprueba la vida laboral y las cotizaciones.',
			'Reclama por escrito las diferencias.',
		],
		faq: [
			{
				question: '¿Cuántas horas complementarias puedo hacer?',
				answer:
					'La ley fija un límite en proporción a la jornada pactada y exige pactarlas por escrito. Se distinguen de las horas extraordinarias y del trabajo a tiempo completo ocasional.',
			},
			{
				question: '¿Puedo rechazar las horas complementarias?',
				answer:
					'Depende de lo pactado y del tipo de horas. En general el trabajador tiene margen para aceptarlas o no, con matices, y el pacto debe constar por escrito.',
			},
			{
				question: '¿Qué hago si trabajo más horas de las que figuran en nómina?',
				answer:
					'Documenta la jornada real con cuadrantes, mensajes y testigos, y reclama por escrito las diferencias salariales. Si el exceso es continuado, puede impugnarse el contrato.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'condiciones de trabajo' },
			{ path: '/despidos', label: 'reclamaciones laborales' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'periodo-de-prueba',
		title: 'Periodo de prueba: qué permite y qué no',
		description:
			'Qué duración puede tener el periodo de prueba, qué permite a la empresa y al trabajador, cómo se pacta y cuándo puede ser abusivo o nulo.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '6 min',
		intro: 'El periodo de prueba permite a las partes comprobar si la relación funciona antes de consolidarla. Durante ese tiempo el contrato puede resolverse con más facilidad, pero no es un cheque en blanco: tiene límites de duración, debe pactarse y no puede usarse para vulnerar derechos.',
		sections: [
			{
				heading: 'Qué es el periodo de prueba',
				paragraphs: [
					'Es la etapa inicial del contrato en la que cualquiera de las partes puede resolver la relación sin causa y sin indemnización, dentro de los límites pactados. Sirve para probar la idoneidad del puesto y del trabajador.',
					'No es obligatorio: solo existe si se pacta por escrito. Sin pacto, la relación es plena desde el primer día y la empresa no puede resolver libremente.',
				],
			},
			{
				heading: 'Duración y límites',
				paragraphs: [
					'La duración del periodo de prueba depende del tipo de contrato y puede verse reducida por el convenio colectivo. En puestos de alta responsabilidad los periodos pactados suelen ser más largos, siempre dentro de lo que permite la ley.',
					'Un periodo de prueba desproporcionado o que supere el máximo legal es nulo en la parte que exceda. También lo es el que se pacta para impedir el ejercicio de derechos.',
				],
			},
			{
				heading: 'Cómo debe pactarse',
				paragraphs: [
					'Debe constar por escrito en el contrato con su duración concreta. Un pacto verbal o una cláusula genérica dificultan su aplicación y pueden hacerlo inoperante.',
					'El periodo de prueba debe reflejar las condiciones reales del puesto. Pactarlo para un puesto distinto del que se desempeña o para encadenar contratos es una práctica que los tribunales han corregido.',
				],
			},
			{
				heading: 'Qué pasa durante la prueba',
				paragraphs: [
					'El trabajador tiene los mismos derechos que cualquier otro: salario, vacaciones, prevención de riesgos y protección frente a la discriminación. El periodo de prueba no suspende esos derechos.',
					'El desistimiento durante la prueba no exige causa, pero no puede encubrir una discriminación ni vulnerar derechos fundamentales. Si el cese responde a un motivo prohibido, puede impugnarse.',
				],
			},
			{
				heading: 'Cómputo y situaciones especiales',
				paragraphs: [
					'El periodo de prueba puede interrumpirse en determinadas situaciones, como la incapacidad temporal, según lo pactado y lo que prevea el convenio. Esto debe revisarse para saber si sigue corriendo.',
					'En los contratos temporales y en los encadenamientos, el periodo de prueba tiene reglas propias. Pactar uno nuevo en cada contrato consecutivo puede ser abusivo.',
				],
			},
			{
				heading: 'Errores y usos abusivos',
				paragraphs: [
					'Usar el periodo de prueba para cubrir necesidades temporales, para evitar indemnizaciones o para discriminar son prácticas que los tribunales corrigen. También lo es pactarlo sin escrito.',
					'Si te cesan durante la prueba, comprueba si el periodo estaba bien pactado y si la decisión responde a una causa prohibida. En ese caso, el cese puede impugnarse como despido.',
				],
			},
		],
		checklist: [
			'Comprueba que el periodo consta por escrito.',
			'Revisa su duración frente a la ley y el convenio.',
			'Confirma que se ajusta al puesto real.',
			'Guarda la comunicación del cese.',
			'Valora si hubo discriminación o causa prohibida.',
		],
		faq: [
			{
				question: '¿Pueden despedirme sin causa durante el periodo de prueba?',
				answer:
					'Si el periodo está bien pactado, cualquiera de las partes puede resolver la relación sin causa ni indemnización. Pero el cese no puede encubrir una discriminación ni vulnerar derechos fundamentales.',
			},
			{
				question: '¿Cuánto puede durar el periodo de prueba?',
				answer:
					'Depende del tipo de contrato y de lo que prevea el convenio, con los máximos que fija la ley. Un periodo desproporcionado o superior al máximo es nulo en la parte que exceda.',
			},
			{
				question: '¿El periodo de prueba se pacta siempre?',
				answer:
					'No. Solo existe si se pacta por escrito en el contrato. Sin pacto, la relación es plena desde el primer día y no cabe resolverla libremente.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'contratos y condiciones' },
			{ path: '/despidos', label: 'impugnación del cese' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'accidente-de-moto',
		title: 'Accidente de moto: indemnización y pasos a seguir',
		description:
			'Qué hacer tras un accidente de moto, cómo se calcula la indemnización por lesiones, quién responde y qué errores reducen la reclamación.',
		date: '2026-10-06',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
		intro: 'En un accidente de moto las lesiones suelen ser más graves y la discusión sobre la responsabilidad, más intensa. La ausencia de carrocería protege poco, y el reparto de culpas decide la indemnización. Documentar el siniestro y las lesiones desde el primer momento es decisivo.',
		sections: [
			{
				heading: 'Qué hacer en las primeras horas',
				paragraphs: [
					'Llamar a las emergencias y a la policía, no mover la moto más de lo necesario y hacer fotografías del lugar, de los vehículos y de los daños. Recoger los datos del otro conductor, testigos y partes.',
					'Acudir a un centro médico aunque las lesiones parezcan leves es fundamental: muchas secuelas aparecen después. El parte de urgencias es el punto de partida de la reclamación.',
				],
			},
			{
				heading: 'Cómo se determina la responsabilidad',
				paragraphs: [
					'El atestado y la reconstrucción del accidente determinan quién causó el siniestro y en qué proporción. En moto son frecuentes los supuestos de no respetar la prioridad, giros indebidos o alcances.',
					'La culpa exclusiva de la víctima o la concurrencia de culpas reducen la indemnización. Por eso la reconstrucción técnica del siniestro es una pieza clave de la reclamación.',
				],
			},
			{
				heading: 'Cómo se calcula la indemnización',
				paragraphs: [
					'Se aplica el baremo de tráfico: días de baja impeditivos y no impeditivos, secuelas físicas y psíquicas, y factores de corrección. Las lesiones de moto suelen incluir secuelas en extremidades y columna.',
					'Además se reclaman los daños materiales de la moto, el equipamiento, el casco y los gastos derivados. Todo se acredita con facturas e informes.',
				],
			},
			{
				heading: 'El papel del seguro y del Consorcio',
				paragraphs: [
					'La reclamación se dirige contra el seguro del responsable. Si el vehículo no está asegurado o se dio a la fuga, puede entrar el Consorcio de Compensación de Seguros.',
					'El seguro propio del motociclista puede cubrir daños propios y ciertas coberturas, pero no sustituye la reclamación al responsable. Valorar ambas vías evita perder derechos.',
				],
			},
			{
				heading: 'Secuelas y estabilización',
				paragraphs: [
					'No conviene aceptar una oferta antes de que las lesiones se estabilicen. Las secuelas que aparecen o se agravan después pueden reclamarse, pero es más difícil si ya se firmó un finiquito.',
					'La pericial médica determina el alcance definitivo y las limitaciones. Ese informe marca la diferencia entre una oferta baja y la indemnización completa.',
				],
			},
			{
				heading: 'Errores que reducen la indemnización',
				paragraphs: [
					'No llamar a la policía, no ir al médico el mismo día, reparar la moto sin documentar los daños o aceptar la primera oferta son errores habituales. También lo es interrumpir el tratamiento.',
					'Un equipamiento adecuado y su documentación ayudan a acreditar las lesiones de moto. Conservar casco, ropa y guantes dañados sirve como prueba.',
				],
			},
		],
		checklist: [
			'Llama a emergencias y a la policía.',
			'Fotografía el lugar, la moto y los daños.',
			'Acude al médico aunque parezca leve.',
			'Guarda el casco y el equipamiento dañado.',
			'No firmes antes de estabilizar las lesiones.',
		],
		faq: [
			{
				question: '¿Cómo se calcula la indemnización de un accidente de moto?',
				answer:
					'Se aplica el baremo: días de baja, secuelas físicas y psíquicas y factores de corrección, además de los daños materiales y gastos. La pericial médica fija el alcance de las secuelas.',
			},
			{
				question: '¿Qué pasa si el otro vehículo no está asegurado?',
				answer:
					'Puede intervenir el Consorcio de Compensación de Seguros. Conviene documentar el siniestro y dirigir la reclamación por la vía correcta.',
			},
			{
				question: '¿Y si la culpa es compartida?',
				answer:
					'La concurrencia de culpas reduce la indemnización en proporción. Por eso la reconstrucción técnica del accidente es clave para defender la posición propia.',
			},
		],
		relatedServices: [
			{ path: '/indemnizaciones-trafico', label: 'indemnización por accidente' },
			{ path: '/blog/baremo-lesiones-2026', label: 'cómo funciona el baremo' },
			{ path: '/accidente-laboral', label: 'accidente laboral o in itinere' },
		],
	},
	{
		slug: 'viajes-combinados',
		title: 'Viajes combinados: cómo reclamar si el viaje falla',
		description:
			'Qué protege la ley en un viaje combinado, cuándo puedes cancelar o reclamar, la responsabilidad del organizador y cómo reclamar los daños.',
		date: '2026-10-06',
		category: 'Consumo y banca',
		readTime: '7 min',
		intro: 'Un viaje contratado con vuelo, hotel y traslados incluidos es un viaje combinado, y tiene una protección reforzada frente al simple vuelo suelto. La ley obliga al organizador a responder del conjunto y permite reclamar cancelaciones, cambios y sobrecostes. Saber cómo se articula evita perder dinero.',
		sections: [
			{
				heading: 'Qué es un viaje combinado',
				paragraphs: [
					'Es la combinación de al menos dos servicios de viaje, como transporte y alojamiento, vendidos por un mismo organizador o por un mismo precio o factura. Esa combinación es la que activa la protección legal.',
					'A diferencia de comprar cada servicio por separado, aquí hay un responsable del conjunto. Cuando algo falla, el organizador responde con independencia de quién prestó el servicio defectuoso.',
				],
			},
			{
				heading: 'Antes de viajar: información y cambios',
				paragraphs: [
					'El organizador debe entregar información clara sobre itinerario, precios, condiciones y derechos antes de contratar. Los cambios en elementos esenciales del viaje dan derecho al viajero a aceptarlos o a resolver el contrato.',
					'El aumento de precio solo cabe en los supuestos y con los límites que la ley permite, con preaviso y derecho a cancelar. Un recargo sin base puede impugnarse.',
				],
			},
			{
				heading: 'Cancelación y derecho de desistimiento',
				paragraphs: [
					'El viajero puede cancelar el viaje en determinadas condiciones, asumiendo una penalización que debe estar prevista y ser razonable. Si la cancelación es por causas imputables al organizador, la devolución es distinta.',
					'Cuando la cancelación se debe a circunstancias extraordinarias en el destino, el viajero puede resolver el contrato sin penalización. Documentar la causa es esencial.',
				],
			},
			{
				heading: 'Responsabilidad del organizador',
				paragraphs: [
					'El organizador responde de la correcta ejecución del viaje y de los daños causados por los servicios incluidos. Si algo no se presta, debe ofrecer solución o compensación adecuada.',
					'Si el viajero contrata servicios adicionales por su cuenta por un fallo del organizador, puede reclamar los gastos necesarios. Guardar facturas y justificantes permite recuperar esos importes.',
				],
			},
			{
				heading: 'Cómo se reclama',
				paragraphs: [
					'El primer paso es comunicar el problema al organizador durante el viaje y dejar constancia por escrito. Después se presenta una reclamación formal con la documentación y el cálculo de los daños.',
					'Si la empresa no responde o rechaza la reclamación, se puede acudir al servicio de consumo. La prueba del fallo, del sobrecoste y de los daños determina la reclamación.',
				],
			},
			{
				heading: 'Errores que debilitan la reclamación',
				paragraphs: [
					'No reclamar en el destino, no guardar facturas o aceptar un cambio sustancial sin reservas debilitan la posición. También lo es confundir el viaje combinado con la contratación de servicios sueltos.',
					'Antes de aceptar una compensación, conviene comprobar que cubre los daños reales. Una oferta sin detalle puede dejar fuera gastos y perjuicios que sí corresponden.',
				],
			},
		],
		checklist: [
			'Comprueba si es un viaje combinado.',
			'Revisa la información y las condiciones antes de pagar.',
			'Reclama el problema durante el viaje por escrito.',
			'Guarda facturas de gastos adicionales.',
			'Presenta reclamación formal con la documentación.',
		],
		faq: [
			{
				question: '¿Cuándo un viaje se considera combinado?',
				answer:
					'Cuando combina al menos dos servicios de viaje, como transporte y alojamiento, vendidos por un mismo organizador o por un mismo precio o factura. Eso activa la protección legal reforzada.',
			},
			{
				question: '¿Puedo cancelar un viaje combinado y que me devuelvan el dinero?',
				answer:
					'Depende del momento y de la causa. En determinadas circunstancias extraordinarias en el destino se puede resolver sin penalización; en otros casos, la cancelación conlleva una penalización prevista y razonable.',
			},
			{
				question: '¿Quién responde si el hotel no es el contratado?',
				answer:
					'El organizador del viaje combinado responde de la correcta ejecución y debe ofrecer una solución o compensación adecuada con independencia de quién prestó el servicio.',
			},
		],
		relatedServices: [
			{ path: '/consumo', label: 'reclamaciones de consumo' },
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
			{ path: '/reclamaciones-bancarias', label: 'reclamación de pagos y reembolsos' },
		],
	},
];
