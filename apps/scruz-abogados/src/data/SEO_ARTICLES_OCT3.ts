/**
 * Décimo lote de contenido nuevo (oct 2026). Igual que los lotes anteriores de
 * `SEO_ARTICLES_SEO.ts`, `SEO_ARTICLES_OCT.ts` y `SEO_ARTICLES_OCT2.ts`, nace
 * del exporte de Google Search Console: consultas informativas con impresiones
 * y sin página dedicada. Este lote cubre amenazas y coacciones, conducir sin
 * permiso, pensión de alimentos para hijos mayores, modificación sustancial de
 * condiciones de trabajo, préstamo entre particulares, vicios de la
 * construcción, phishing y fraude bancario, y junta general de socios. Ninguna
 * crea categoría nueva.
 *
 * Cada artículo declara sus tres `relatedServices` para alimentar el enlazado
 * bidireccional de `blogInternalLinks.ts`: la entrada derivada hace que la
 * página de servicio enlace de vuelta a la guía, así que ninguna queda huérfana.
 * Reglas de forma: title ≤ 62, description ≤ 162 e intro > 150 caracteres.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_OCT3: SeoArticle[] = [
	{
		slug: 'delito-de-amenazas-y-coacciones',
		title: 'Delito de amenazas y coacciones: qué se castiga',
		description:
			'Qué se castiga como amenaza y como coacción, cuándo es delito leve o menos grave, cómo se denuncia y cómo se defiende el investigado.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'Amenazar o forzar a alguien con violencia puede ser delito, pero no cualquier discusión ni cualquier exigencia lo son. La gravedad, el medio empleado y el contexto marcan la frontera entre una falta civil, una sanción administrativa y un delito. Esa frontera decide el procedimiento y la pena.',
		sections: [
			{
				heading: 'Qué es el delito de amenazas',
				paragraphs: [
					'La amenaza es anunciar a otra persona un mal futuro que depende de la voluntad de quien amenaza: hacerle daño, a ella o a su familia, o causarle un perjuicio. Ese anuncio, con la seriedad y la concreción suficientes, puede constituir delito.',
					'El Código Penal distingue entre amenazas leves y graves según el mal con que se amenaza y las circunstancias. No es lo mismo una amenaza genérica que una dirigida a causar un daño serio y creíble.',
				],
			},
			{
				heading: 'Qué es el delito de coacciones',
				paragraphs: [
					'La coacción es impedir a otro hacer algo lícito o compelerle a hacer lo que no quiere, mediante violencia, intimidación o un abuso de poder. El elemento clave es que se doblega la voluntad ajena de forma efectiva.',
					'En el ámbito de pareja o familia, las coacciones se castigan con más severidad. También pueden solaparse con la violencia de género cuando concurren sus requisitos.',
				],
			},
			{
				heading: 'Cuándo es delito leve y cuándo es menos grave',
				paragraphs: [
					'La calificación depende de la gravedad del mal anunciado, de si hubo condiciones que la víctima debía cumplir y del contexto, como el ámbito doméstico o el ejercicio de funciones. La diferencia cambia la pena y el procedimiento.',
					'Muchos hechos que se celebran como delito leve terminan en una única vista rápida; otros exigen instrucción completa. Por eso conviene analizar bien la calificación antes de actuar.',
				],
			},
			{
				heading: 'Cómo se denuncia y qué se prueba',
				paragraphs: [
					'La denuncia se presenta en comisaría, en el juzgado o ante el Ministerio Fiscal. Se prueban los hechos con mensajes, audios, testigos, partes médicos si hubo lesiones y un relato fechado y coherente.',
					'Conservar las comunicaciones originales, sin borrarlas, es esencial: una captura suelta vale menos que el hilo completo. También lo es identificar a posibles testigos.',
				],
			},
			{
				heading: 'Cómo se defiende el investigado',
				paragraphs: [
					'La defensa examina la seriedad y credibilidad de la amenaza, la existencia de contexto y la calificación de los hechos. A veces lo que se denuncia como delito es un conflicto civil o una discusión sin entidad penal.',
					'También valora la posibilidad de reparar el daño o de alcanzar una conformidad razonable. Declarar sin asesoramiento suele cerrar opciones que después se echan de menos.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Denunciar sin prueba, borrar conversaciones o mezclar el conflicto penal con el civil debilita la posición. En el otro lado, responder a una amenaza con otra agrava la situación.',
					'Antes de actuar, conviene ordenar la prueba y aclarar qué se pretende: el cese de la conducta, una pena o, si hay daño, una indemnización. Cada objetivo pide una estrategia.',
				],
			},
		],
		checklist: [
			'Guarda los mensajes y audios originales.',
			'Haz un relato fechado de los hechos.',
			'Identifica testigos y posibles lesiones.',
			'Aclara qué quieres conseguir con la denuncia.',
			'No respondas con nuevas amenazas.',
		],
		faq: [
			{
				question: '¿Cuándo una amenaza es delito?',
				answer:
					'Cuando se anuncia un mal serio y creíble que depende de la voluntad de quien amenaza. La gravedad y el contexto determinan si es delito leve o menos grave.',
			},
			{
				question: '¿Qué diferencia hay entre amenazas y coacciones?',
				answer:
					'La amenaza anuncia un mal futuro; la coacción impide hacer algo lícito o fuerza a hacer lo que no se quiere, mediante violencia, intimidación o abuso de poder.',
			},
			{
				question: '¿Qué pruebas necesito si me amenazan?',
				answer:
					'Los mensajes, audios o testigos de lo ocurrido, con un relato fechado y coherente. Conservar las comunicaciones originales es más valioso que una captura suelta.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/blog/delito-de-hurto-y-robo', label: 'otros delitos contra el patrimonio' },
			{ path: '/blog/denuncias-falsas', label: 'defensa frente a denuncias falsas' },
		],
	},
	{
		slug: 'conduccion-sin-permiso',
		title: 'Conducir sin permiso: delito, sanción y consecuencias',
		description:
			'Cuándo conducir sin carnet es delito y cuándo solo una sanción administrativa, qué penas se aplican y qué cabe alegar en la defensa.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'Conducir sin carnet no siempre es delito: depende de si nunca se obtuvo el permiso o de si se perdió por decisión judicial. La diferencia cambia por completo las consecuencias, entre una multa administrativa y un proceso penal con posibles penas de prisión.',
		sections: [
			{
				heading: 'Delito o sanción administrativa',
				paragraphs: [
					'Si nunca se ha obtenido el permiso o si se ha perdido los puntos hasta quedarse sin él, la conducta puede ser delito contra la seguridad vial. En cambio, conducir con el permiso caducado o no llevar el carnet encima suele ser una infracción administrativa.',
					'También es delito conducir tras haber sido privado del permiso por una resolución judicial. La clave está en el título habilitante y en el motivo por el que falta.',
				],
			},
			{
				heading: 'Qué penas se aplican',
				paragraphs: [
					'El Código Penal castiga la conducción sin permiso con penas que pueden incluir prisión, multa y trabajos en beneficio de la comunidad. La reincidencia y las circunstancias agravan la respuesta penal.',
					'La privación del derecho a conducir puede añadirse cuando la persona llega a obtener el permiso en el futuro. El juez valora la gravedad y los antecedentes.',
				],
			},
			{
				heading: 'Cómo se prueba',
				paragraphs: [
					'El atestado de la policía o de la Guardia Civil y la consulta al registro de conductores acreditan la ausencia de permiso y su vigencia. La identificación del conductor y las circunstancias de la conducción se documentan en el mismo atestado.',
					'Revisar la fecha del hecho, la vigencia del permiso y si existía una resolución judicial de privación es esencial. Un error en esos datos cambia la calificación.',
				],
			},
			{
				heading: 'Cómo se defiende',
				paragraphs: [
					'La defensa comprueba la vigencia real del permiso, la posible caducidad frente a la pérdida definitiva y la existencia de autorización para conducir. También revisa la regularidad del atestado.',
					'En muchos casos lo que se atribuye como delito resulta ser una infracción administrativa, o al contrario. Precisar la calificación antes de declarar evita aceptar consecuencias mayores de las que corresponden.',
				],
			},
			{
				heading: 'Consecuencias añadidas',
				paragraphs: [
					'Además de la pena, conducir sin permiso puede dificultar la obtención del carnet, afectar al seguro y agravar la responsabilidad si se produce un accidente. El seguro puede repercutir el daño causado.',
					'En caso de siniestro, la aseguradora puede reclamar al conductor lo que haya pagado a terceros. Por eso conviene valorar todas las consecuencias, no solo la multa.',
				],
			},
			{
				heading: 'Errores que empeoran la situación',
				paragraphs: [
					'Declarar sin asesoramiento, no revisar la vigencia del permiso o ignorar una citación judicial son errores que agravan el caso. También lo es conducir de nuevo mientras el proceso está abierto.',
					'Ante una denuncia o una citación, lo primero es comprobar el estado del permiso y contar con defensa técnica. La calificación y la prueba deciden el resultado.',
				],
			},
		],
		checklist: [
			'Comprueba si el permiso está vigente o privado por el juez.',
			'Revisa el atestado y la fecha de los hechos.',
			'No conduzcas mientras el proceso esté abierto.',
			'Valora las consecuencias sobre el seguro.',
			'Consulta antes de declarar.',
		],
		faq: [
			{
				question: '¿Conducir sin carnet es siempre delito?',
				answer:
					'No. Depende del caso: puede ser delito si nunca se obtuvo el permiso o se perdió por decisión judicial, y puede ser una infracción administrativa si el permiso está caducado o no se lleva encima.',
			},
			{
				question: '¿Qué pena tiene conducir sin permiso?',
				answer:
					'Puede incluir prisión, multa y trabajos en beneficio de la comunidad, además de la privación del derecho a conducir. La reincidencia agrava la respuesta.',
			},
			{
				question: '¿Afecta al seguro conducir sin permiso?',
				answer:
					'Sí. La aseguradora puede reclamar al conductor lo que haya pagado a terceros tras un siniestro. Por eso conviene valorar también las consecuencias civiles.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/reclamacion-multas-trafico', label: 'reclamación de multas de tráfico' },
			{ path: '/blog/alcoholemia-conduccion-delito', label: 'otros delitos de tráfico' },
		],
	},
	{
		slug: 'pension-alimentos-hijos-mayores',
		title: 'Pensión de alimentos para hijos mayores de edad',
		description:
			'Hasta cuándo se paga la pensión de alimentos, qué pasa cuando el hijo cumple la mayoría de edad, cómo se modifica y cómo se reclama.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '7 min',
		intro: 'La mayoría de edad del hijo no extingue automáticamente la pensión de alimentos. Hay que distinguir entre la extinción de la patria potestad y el deber de alimentos, que puede continuar si el hijo sigue formándose y no tiene ingresos. El paso a la vida adulta es una fuente constante de conflictos.',
		sections: [
			{
				heading: 'Qué cambia al cumplir la mayoría de edad',
				paragraphs: [
					'Al cumplir los 18 años se extingue la patria potestad, pero no necesariamente la obligación de alimentos. Esta depende de que el hijo siga sin ingresos propios y en proceso de formación, y de que la convivencia no se haya roto de forma injustificada.',
					'Por eso la pensión no desaparece sola el día del cumpleaños: lo habitual es que continúe mientras el hijo estudia y carece de medios, y que se revise cuando cambian esas circunstancias.',
				],
			},
			{
				heading: 'Los requisitos para que continúe',
				paragraphs: [
					'Se valora la edad, la formación, el aprovechamiento académico, la búsqueda de empleo y la falta de recursos del hijo. Un estudiante que avanza en sus estudios y no tiene ingresos mantiene, en general, su derecho.',
					'En cambio, si el hijo tiene medios propios, ha terminado su formación y no busca empleo, o rompe la convivencia con el progenitor que paga, la obligación puede reducirse o extinguirse.',
				],
			},
			{
				heading: 'Cómo se solicita la extinción o el aumento',
				paragraphs: [
					'El progenitor que paga puede pedir la extinción o la reducción si el hijo ya no cumple los requisitos; el que convive con el hijo puede pedir su mantenimiento o su aumento. En ambos casos se tramita como modificación de medidas.',
					'Si hay acuerdo entre los progenitores, se presenta un nuevo convenio; si no lo hay, decide el juez con la prueba de la situación actual del hijo y de los ingresos de los padres.',
				],
			},
			{
				heading: 'Prueba y documentación',
				paragraphs: [
					'Se aportan matrículas, notas, certificados de estudios, justificantes de ingresos, extractos y prueba de la búsqueda de empleo. También se acreditan los ingresos de ambos progenitores.',
					'La prueba de que el hijo tiene ingresos o ha abandonado sus estudios sin causa es clave para la extinción. Sin ella, es difícil que el juez deje de reconocer los alimentos.',
				],
			},
			{
				heading: 'Cómo se reclama si no se paga',
				paragraphs: [
					'Si la pensión sigue vigente y no se paga, se puede reclamar por la vía civil mediante ejecución de la resolución que la fijó. Cuando el impago es reiterado, puede tener también consecuencias penales.',
					'Es importante no dejar de cumplir por cuenta propia mientras se discute la extinción: la vía correcta es el procedimiento de modificación, no la decisión unilateral.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Dejar de pagar sin resolución, mezclar la pensión con el deseo de que el hijo se independice o no documentar los ingresos del hijo son errores frecuentes que generan reclamaciones y retroactivos.',
					'Antes de actuar conviene revisar la sentencia o el convenio, la situación real del hijo y las pruebas disponibles, y decidir si lo que procede es pedir la extinción, la reducción o el mantenimiento.',
				],
			},
		],
		checklist: [
			'Revisa qué dice la sentencia o el convenio.',
			'Documenta los estudios y los ingresos del hijo.',
			'Valora si procede extinción, reducción o aumento.',
			'No dejes de pagar sin resolución.',
			'Presenta la modificación de medidas si hay desacuerdo.',
		],
		faq: [
			{
				question: '¿La pensión de alimentos se extingue a los 18 años?',
				answer:
					'No automáticamente. Se extingue la patria potestad, pero los alimentos pueden continuar si el hijo sigue formándose y sin ingresos. Para dejarla sin efecto hace falta una resolución.',
			},
			{
				question: '¿Puedo dejar de pagar si mi hijo ya no estudia?',
				answer:
					'No por cuenta propia. Debes solicitar la extinción o la reducción mediante la modificación de medidas; mientras la resolución siga vigente, la obligación se mantiene.',
			},
			{
				question: '¿Cómo se reclama si no se paga la pensión del hijo mayor?',
				answer:
					'Mediante la ejecución civil de la resolución que la fijó. Si el impago es reiterado, puede tener también consecuencias penales.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
			{ path: '/pension-de-alimentos', label: 'pensión de alimentos' },
			{ path: '/guarda-custodia', label: 'medidas sobre los hijos' },
		],
	},
	{
		slug: 'modificacion-sustancial-de-condiciones',
		title: 'Modificación sustancial de condiciones de trabajo',
		description:
			'Cuándo cabe modificar jornada, horario o salario, cómo debe comunicarlo la empresa, qué plazo tienes para impugnarlo y qué puedes reclamar.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'La empresa no puede cambiar a su antojo la jornada, el horario o el salario. La ley exige causas, un procedimiento y un preaviso, y da al trabajador un plazo para impugnar. Muchas modificaciones son legales si se tramitan bien, y muchas son nulas si se imponen de cualquier manera.',
		sections: [
			{
				heading: 'Qué es una modificación sustancial',
				paragraphs: [
					'Es un cambio de aspectos esenciales del contrato: jornada, horario, turnos, régimen de trabajo, funciones, salario o sistema de rendimiento. No es una modificación sustancial un ajuste menor que no altera esas condiciones.',
					'La frontera entre lo sustancial y lo accesorio es decisiva. Un cambio de una hora de entrada puede ser irrelevante o decisivo según el contrato y el convenio.',
				],
			},
			{
				heading: 'Causas y procedimiento que exige la ley',
				paragraphs: [
					'La empresa debe acreditar razones económicas, técnicas, organizativas o de producción, o bien causas relacionadas con el trabajador. También debe respetar el procedimiento y el preaviso previstos para cada tipo de modificación.',
					'La falta de causa o de procedimiento vicia la medida. Por eso conviene revisar la comunicación escrita, la causa invocada y el preaviso antes de decidir si se acepta o se impugna.',
				],
			},
			{
				heading: 'El plazo para impugnar',
				paragraphs: [
					'El trabajador perjudicado puede impugnar la decisión ante el juzgado en un plazo breve desde que la conoce. Dejar pasar ese plazo convierte la modificación en consentida.',
					'Si la impugnación prospera, la medida puede declararse injustificada y el trabajador recuperar sus condiciones anteriores, además de las diferencias económicas si las hubo.',
				],
			},
			{
				heading: 'Qué se puede reclamar',
				paragraphs: [
					'Se puede pedir que se deje sin efecto la modificación, el restablecimiento de las condiciones anteriores y la indemnización de los daños, incluidos los salarios o complementos dejados de percibir.',
					'Si la modificación afecta a la dignidad del trabajador, puede calificarse de nula y conllevar otras consecuencias. Cada caso exige analizar la causa y el modo en que se aplicó.',
				],
			},
			{
				heading: 'Modificación por descuelgue o convenio',
				paragraphs: [
					'Además de las modificaciones individuales, existen las colectivas y las que derivan de la aplicación de un convenio o de un acuerdo con la representación de los trabajadores. Su régimen y sus requisitos son distintos.',
					'Identificar si la modificación es individual o colectiva determina el procedimiento, las mayorías y las vías de impugnación. Confundirlas lleva a plantear mal la reclamación.',
				],
			},
			{
				heading: 'Errores que debilitan la posición',
				paragraphs: [
					'Aceptar por escrito sin comprender el alcance, seguir trabajando durante meses sin reclamar o firmar un acuerdo sin asesoramiento son errores que pueden hacer perder el derecho a impugnar.',
					'Ante una modificación, conviene pedir la causa por escrito, conservar la comunicación y consultar dentro de plazo. La prueba documental decide buena parte del caso.',
				],
			},
		],
		checklist: [
			'Pide la comunicación por escrito y con la causa.',
			'Comprueba el preaviso y el procedimiento.',
			'Anota la fecha para no perder el plazo.',
			'No firmes una aceptación sin asesoramiento.',
			'Reúne nóminas y contrato para cuantificar el cambio.',
		],
		faq: [
			{
				question: '¿Puede la empresa cambiar mi horario sin mi permiso?',
				answer:
					'Solo si existen causas legales y se respeta el procedimiento y el preaviso. Si no se cumplen, la modificación se puede impugnar ante el juzgado dentro de plazo.',
			},
			{
				question: '¿Cuánto tiempo tengo para impugnar la modificación?',
				answer:
					'El plazo es breve y se cuenta desde que conoces la decisión. Dejarlo pasar puede hacer que la modificación se considere consentida, así que conviene consultar cuanto antes.',
			},
			{
				question: '¿Qué puedo reclamar si la modificación es injustificada?',
				answer:
					'El restablecimiento de tus condiciones anteriores, las diferencias económicas dejadas de percibir y, en su caso, la indemnización de los daños causados.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'condiciones de trabajo' },
			{ path: '/despidos', label: 'reclamaciones laborales' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'prestamo-entre-particulares',
		title: 'Préstamo entre particulares: cómo reclamar el dinero',
		description:
			'Cómo reclamar un préstamo hecho a un particular, qué prueba sirve sin contrato, el interés y los plazos, y cómo actuar si no devuelve.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'Prestar dinero a un conocido sin documentarlo es una de las causas más frecuentes de pleitos difíciles: sin prueba, la deuda se convierte en una discusión de palabras. La transferencia, los mensajes y un reconocimiento de deuda marcan la diferencia entre cobrar y no cobrar.',
		sections: [
			{
				heading: 'Qué es el préstamo entre particulares',
				paragraphs: [
					'Es un contrato por el que una persona entrega dinero a otra con la obligación de devolverlo. No es una donación ni una inversión: genera una deuda exigible si se pactó su devolución.',
					'Si no se fijó plazo, la ley establece reglas para exigir el pago. Pero el problema habitual no es el derecho, sino la prueba de que el dinero se prestó y no se regaló.',
				],
			},
			{
				heading: 'Qué prueba sirve sin contrato',
				paragraphs: [
					'La transferencia bancaria con un concepto claro, los mensajes donde se reconoce la deuda, los correos y los testigos son las pruebas más útiles. Una transferencia sin explicación se puede discutir como pago de otra cosa.',
					'Un reconocimiento de deuda firmado por el deudor es la prueba más sólida. Si no existe, conviene obtenerlo por escrito antes de que la relación se rompa.',
				],
			},
			{
				heading: 'El interés y su límite',
				paragraphs: [
					'Si se pactó un interés, se aplica; si no, el préstamo se presume sin interés entre particulares. Un interés desproporcionado puede considerarse usurario y reducirse o anularse.',
					'Distinguir el interés remuneratorio del moratorio es importante, porque el retraso puede generar un recargo si se pactó o si la ley lo permite. Todo debe quedar claro por escrito.',
				],
			},
			{
				heading: 'Cómo se reclama',
				paragraphs: [
					'Primero se requiere el pago por un medio que deje constancia, como el burofax. Si no hay respuesta, se puede acudir al procedimiento monitorio, que es rápido para deudas documentadas, o a un juicio ordinario si hay discusión.',
					'La reclamación debe concretar el capital, los intereses y las fechas. Un cálculo ordenado evita que la demanda se desestime por defectos formales.',
				],
			},
			{
				heading: 'Plazos y prescripción',
				paragraphs: [
					'La acción para reclamar el préstamo tiene un plazo de prescripción que se cuenta desde que la deuda es exigible. Reclamar por escrito interrumpe ese plazo, así que conviene no dejar pasar el tiempo.',
					'Si el deudor reconoce la deuda, el plazo se reinicia. Conservar los acuses de cada reclamación es tan importante como la deuda misma.',
				],
			},
			{
				heading: 'Errores que cuestan el dinero',
				paragraphs: [
					'Entregar el dinero en efectivo sin testigos, no dejar constancia por escrito o esperar años para reclamar son los errores más graves. También lo es aceptar pagos parciales sin documentarlos.',
					'Antes de prestar, conviene dejar por escrito el importe, el plazo y las condiciones. Y si ya se prestó sin papeles, actuar pronto para obtener prueba y reclamar dentro de plazo.',
				],
			},
		],
		checklist: [
			'Reúne transferencias, mensajes y correos.',
			'Consigue un reconocimiento de deuda por escrito.',
			'Comprueba si pactasteis interés y plazo.',
			'Requiere el pago por burofax.',
			'No dejes pasar el plazo de prescripción.',
		],
		faq: [
			{
				question: '¿Puedo reclamar un préstamo sin contrato?',
				answer:
					'Sí, con otra prueba: transferencias con concepto, mensajes donde se reconoce la deuda y testigos. El reconocimiento de deuda firmado es la prueba más sólida.',
			},
			{
				question: '¿Cuánto tiempo tengo para reclamar el dinero prestado?',
				answer:
					'La deuda prescribe transcurrido un plazo desde que es exigible. Reclamar por escrito lo interrumpe, así que conviene hacerlo pronto y conservar los acuses.',
			},
			{
				question: '¿Qué es el procedimiento monitorio?',
				answer:
					'Es un procedimiento rápido para reclamar deudas dinerarias documentadas. Si el deudor no se opone, se despacha ejecución; si se opone, continúa como juicio ordinario o verbal.',
			},
		],
		relatedServices: [
			{ path: '/cobro-deudas-impagos', label: 'cobro de deudas' },
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
			{ path: '/incumplimiento-contrato', label: 'incumplimiento de obligaciones' },
		],
	},
	{
		slug: 'vicios-de-la-construccion-loe',
		title: 'Vicios de la construcción: reclamar a promotor y constructor',
		description:
			'Qué daños cubre la Ley de Ordenación de la Edificación, quién responde y durante cuánto tiempo, y cómo reclamar los vicios constructivos.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '8 min',
		intro: 'Grietas, humedades o fallos estructurales en una vivienda recién construida no se reclaman como un vicio oculto cualquiera: la Ley de Ordenación de la Edificación fija quién responde, por qué daños y durante cuánto tiempo. Identificar el tipo de vicio y el plazo es el primer paso para no perder la reclamación.',
		sections: [
			{
				heading: 'Qué es la Ley de Ordenación de la Edificación',
				paragraphs: [
					'Es la norma que establece las responsabilidades de quienes intervienen en el proceso de construcción: promotor, proyectista, constructor y director de obra, entre otros. Fija garantías y plazos de responsabilidad por los defectos de la edificación.',
					'No se aplica a cualquier obra ni a cualquier daño: exige que se trate de un edificio y de los defectos previstos. Por eso conviene comprobar el ámbito antes de reclamar por esta vía.',
				],
			},
			{
				heading: 'Los tipos de vicios y sus plazos',
				paragraphs: [
					'La ley distingue los defectos que afectan a la estructura y cimentación, los que afectan a la habitabilidad y los de acabado. A cada categoría le corresponde un plazo de responsabilidad distinto desde la recepción de la obra.',
					'Conocer la categoría del defecto y el plazo aplicable es decisivo. Un mismo síntoma puede responder a causas distintas y seguir plazos diferentes.',
				],
			},
			{
				heading: 'Quién responde de cada daño',
				paragraphs: [
					'La responsabilidad puede recaer en el promotor, el constructor, el proyectista o el director de obra, según el tipo de vicio y su origen. En algunos casos responden varios de forma solidaria.',
					'Por eso la reclamación debe identificar bien a los intervinientes y el papel de cada uno. Dirigirse solo contra el constructor cuando el problema nace del proyecto puede dejar la reclamación coja.',
				],
			},
			{
				heading: 'El seguro decenal y las garantías',
				paragraphs: [
					'La ley exige determinadas garantías y, en el caso de los daños estructurales, un seguro que cubra la responsabilidad durante diez años. Ese seguro es una pieza clave para cobrar si el constructor desaparece.',
					'Conviene localizar la póliza y la entidad aseguradora. Reclamar también al seguro acelera la reparación cuando el responsable directo no responde.',
				],
			},
			{
				heading: 'Cómo se reclama',
				paragraphs: [
					'El punto de partida es un informe técnico que determine el origen, la gravedad y la causa del defecto. Después se requiere a los responsables y, si no responden, se acude a la vía judicial.',
					'Comunicar los daños por escrito desde que aparecen, sin esperar a que se agraven, protege la reclamación y evita discusiones sobre el momento en que surgieron.',
				],
			},
			{
				heading: 'Errores que reducen las opciones',
				paragraphs: [
					'Dejar pasar el plazo, reparar sin documentar el estado original o reclamar solo a un interviniente son errores que limitan el cobro. También lo es aceptar una reparación provisional que no soluciona la causa.',
					'Antes de reparar, conviene documentar el daño y obtener un informe. Una reparación a ciegas puede destruir la prueba del vicio y comprometer la indemnización.',
				],
			},
		],
		checklist: [
			'Identifica el tipo de vicio y su plazo.',
			'Encarga un informe técnico del origen y la gravedad.',
			'Comprueba quién intervino en la obra.',
			'Localiza el seguro decenal y la aseguradora.',
			'No repares sin documentar antes el daño.',
		],
		faq: [
			{
				question: '¿Cuánto tiempo responde el constructor por los defectos?',
				answer:
					'Depende del tipo de vicio: la ley fija plazos distintos para los defectos estructurales, los de habitabilidad y los de acabado, contados desde la recepción de la obra.',
			},
			{
				question: '¿A quién debo reclamar los vicios constructivos?',
				answer:
					'Pueden responder el promotor, el constructor, el proyectista o el director de obra según el vicio y su origen, a veces de forma solidaria. Conviene identificar a todos antes de reclamar.',
			},
			{
				question: '¿Qué es el seguro decenal?',
				answer:
					'Es el seguro que cubre los daños estructurales de la edificación durante diez años. Permite reclamar la reparación aunque el constructor directo no responda.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
			{ path: '/urbanismo', label: 'obras y licencias' },
			{ path: '/responsabilidad-civil', label: 'responsabilidad civil por daños' },
		],
	},
	{
		slug: 'phishing-y-fraude-bancario',
		title: 'Phishing y fraude bancario: cómo reclamar el dinero',
		description:
			'Cómo actuar ante un fraude bancario o un phishing, qué debe reintegrar la entidad, cómo reclamar los cargos y qué plazos se manejan.',
		date: '2026-10-06',
		category: 'Consumo y banca',
		readTime: '7 min',
		intro: 'Un cargo no autorizado tras un mensaje falso o una llamada fraudulenta no es dinero perdido: la ley protege al cliente y, en la mayoría de los casos, obliga al banco a devolver el importe. Actuar rápido y por escrito marca la diferencia entre recuperar el dinero y asumirlo.',
		sections: [
			{
				heading: 'Qué es un fraude bancario y el phishing',
				paragraphs: [
					'El phishing es el engaño con el que alguien se hace pasar por el banco para conseguir claves o datos y realizar operaciones no autorizadas. El fraude bancario incluye también el uso fraudulento de la tarjeta o de la banca electrónica.',
					'Lo relevante para la reclamación es que la operación no fue autorizada por el cliente. Esa falta de autorización es la base del derecho a la devolución.',
				],
			},
			{
				heading: 'Qué debe hacer el cliente cuanto antes',
				paragraphs: [
					'Bloquear la tarjeta o el acceso, cambiar las claves y comunicar el fraude al banco de inmediato. Cuanto antes se notifica, antes se limita el daño y más sólida es la reclamación.',
					'Guardar toda la prueba es esencial: capturas de los mensajes, número desde el que llamaron, movimientos, correos y el justificante de la comunicación al banco.',
				],
			},
			{
				heading: 'La responsabilidad de la entidad',
				paragraphs: [
					'La normativa de servicios de pago obliga a la entidad a devolver al cliente las operaciones no autorizadas, salvo en supuestos de fraude o negligencia grave del usuario. La carga de probar esa negligencia recae, en principio, en el banco.',
					'Cuando el fraude se produce por una suplantación sofisticada, lo habitual es que la entidad tenga que asumir el importe. Negarse sin más no es una respuesta válida.',
				],
			},
			{
				heading: 'Cómo se reclama paso a paso',
				paragraphs: [
					'Se presenta una reclamación formal ante el banco por escrito, con los hechos, las fechas y la prueba. La entidad debe dar una respuesta motivada y, si es negativa, se puede acudir al Banco de España o al servicio de consumo.',
					'Si la vía administrativa no resuelve, queda la vía judicial. El plazo para reclamar y el momento de la notificación importan, así que conviene no demorar los pasos.',
				],
			},
			{
				heading: 'Prevención y buenas prácticas',
				paragraphs: [
					'Desconfiar de mensajes que piden claves o pin, no abrir enlaces recibidos por SMS y verificar siempre a través de la aplicación o de un teléfono oficial reduce el riesgo. Ningún banco legítimo pide datos sensibles por mensaje.',
					'Activar la verificación en dos pasos y revisar los movimientos con frecuencia ayuda a detectar a tiempo un acceso no autorizado.',
				],
			},
			{
				heading: 'Errores que debilitan la reclamación',
				paragraphs: [
					'Tardar en avisar, facilitar las claves tras ser engañado o admitir por escrito una negligencia que no existió debilitan la posición. También lo es aceptar una devolución parcial sin reclamar el resto.',
					'Ante un cargo sospechoso, lo primero es bloquear, comunicar por escrito y documentar. Reclamar el importe completo, con los intereses si procede, es el punto de partida.',
				],
			},
		],
		checklist: [
			'Bloquea la tarjeta o el acceso de inmediato.',
			'Comunica el fraude al banco por escrito.',
			'Guarda capturas, movimientos y el acuse.',
			'Presenta reclamación formal con los hechos.',
			'Acude al Banco de España si la respuesta es negativa.',
		],
		faq: [
			{
				question: '¿El banco tiene que devolverme el dinero de un fraude?',
				answer:
					'Con carácter general sí, cuando la operación no fue autorizada por el cliente, salvo fraude o negligencia grave del usuario. La carga de probar esa negligencia recae en la entidad.',
			},
			{
				question: '¿Qué pasa si di las claves tras un mensaje falso?',
				answer:
					'El engaño no elimina por sí solo la protección del cliente, pero el caso se analiza con cuidado. Conviene documentar cómo ocurrió y reclamar la devolución por escrito.',
			},
			{
				question: '¿Dónde reclamo si el banco no me devuelve el dinero?',
				answer:
					'Puedes acudir al Banco de España o al servicio de consumo y, si no se resuelve, a la vía judicial. Conserva toda la prueba y el acuse de la reclamación previa.',
			},
		],
		relatedServices: [
			{ path: '/reclamaciones-bancarias', label: 'reclamaciones bancarias' },
			{ path: '/consumo', label: 'derechos del consumidor' },
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
		],
	},
	{
		slug: 'junta-general-de-socios',
		title: 'Junta general de socios: convocatoria, acuerdos e impugnación',
		description:
			'Cómo se convoca y celebra la junta general de una sociedad, qué acuerdos adopta, qué mayorías se exigen y cómo se impugnan los acuerdos.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '8 min',
		intro: 'La junta general es el órgano donde los socios deciden el rumbo de la sociedad: cuentas, reparto de dividendos, nombramiento de administradores. Una convocatoria defectuosa o una mayoría mal calculada puede invalidar el acuerdo y abrir un pleito. Las formas importan tanto como el fondo.',
		sections: [
			{
				heading: 'Qué es la junta general y qué decide',
				paragraphs: [
					'Es el órgano de los socios. Aprueba las cuentas, decide el reparto de resultados, nombra y cesa administradores y adopta modificaciones estatutarias o estructurales, entre otras materias.',
					'Distingue entre la junta ordinaria, que se reúne dentro de los primeros meses del año para aprobar las cuentas, y la junta extraordinaria, que se convoca para asuntos concretos.',
				],
			},
			{
				heading: 'Cómo se convoca',
				paragraphs: [
					'La convocatoria debe cumplir las exigencias legales y estatutarias: la forma, la antelación y el contenido del orden del día. Un defecto en la convocatoria puede viciar los acuerdos que se adopten.',
					'Debe indicar claramente los asuntos a tratar para que los socios puedan prepararse. Los acuerdos que no figuran en el orden del día, salvo excepciones, pueden ser impugnables.',
				],
			},
			{
				heading: 'Constitución y mayorías',
				paragraphs: [
					'En la sociedad limitada, la constitución de la junta y las mayorías dependen del asunto: no es lo mismo aprobar las cuentas que modificar estatutos. También cuentan las previsiones de los estatutos, que pueden elevar las mayorías.',
					'Los porcentajes de capital presentes y votantes son el corazón del acta. Una mayoría mal calculada convierte en impugnable un acuerdo que en el fondo era válido.',
				],
			},
			{
				heading: 'El acta y su valor',
				paragraphs: [
					'El acta recoge el lugar, la fecha, los asistentes, el orden del día y los acuerdos con sus votaciones. Su redacción correcta es la prueba de lo sucedido y la base de la inscripción en el Registro Mercantil.',
					'Cuando el acta la levanta un notario, la constancia de los hechos gana fuerza. En sociedades con conflicto entre socios, la presencia notarial evita discusiones posteriores sobre lo aprobado.',
				],
			},
			{
				heading: 'Impugnación de acuerdos',
				paragraphs: [
					'Los acuerdos contrarios a la ley, a los estatutos o que lesionan el interés de la sociedad pueden impugnarse. El plazo y la legitimación dependen del tipo de impugnación.',
					'También pueden impugnarse los acuerdos adoptados sin el informe exigido o con defectos en la convocatoria o en las mayorías. La prueba y los plazos son determinantes.',
				],
			},
			{
				heading: 'Errores y conflictos frecuentes',
				paragraphs: [
					'Convocar por una vía que los estatutos no permiten, dejar asuntos fuera del orden del día, calcular mal las mayorías o no inscribir el acuerdo son los errores más habituales y la fuente de la mayoría de los litigios societarios.',
					'Antes de convocar, conviene revisar los estatutos y las mayorías exigidas y documentar todo el proceso. Un socio minoritario bien informado puede impugnar con éxito un acuerdo mal adoptado.',
				],
			},
		],
		checklist: [
			'Revisa la forma de convocatoria de los estatutos.',
			'Incluye todos los asuntos en el orden del día.',
			'Calcula bien las mayorías según la materia.',
			'Documenta el acta y las votaciones.',
			'Comprueba los plazos de impugnación.',
		],
		faq: [
			{
				question: '¿Qué mayoría hace falta para aprobar las cuentas?',
				answer:
					'Depende del asunto y de lo que prevean los estatutos. Aprobar cuentas y modificar estatutos no exigen la misma mayoría; por eso hay que comprobar cada caso antes de la junta.',
			},
			{
				question: '¿Puedo impugnar un acuerdo de la junta?',
				answer:
					'Sí, cuando es contrario a la ley, a los estatutos o lesiona el interés de la sociedad, o cuando se adopta con defectos de convocatoria o de mayorías. Los plazos son breves.',
			},
			{
				question: '¿Qué pasa si se adoptó un acuerdo sin estar en el orden del día?',
				answer:
					'Normalmente puede impugnarse, salvo los supuestos que la ley exceptúa. El orden del día debe permitir a los socios preparar la junta y decidir con conocimiento.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'servicios jurídicos para empresas' },
			{ path: '/empresas/constitucion-sociedades', label: 'sociedades y órganos de gobierno' },
			{ path: '/modificacion-estatutos-sociedad', label: 'modificación de estatutos' },
		],
	},
];
