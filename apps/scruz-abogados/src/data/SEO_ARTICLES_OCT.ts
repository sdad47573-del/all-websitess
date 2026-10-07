/**
 * Octavo lote de contenido nuevo (oct 2026). Igual que los lotes anteriores de
 * `SEO_ARTICLES_SEO.ts`, nace del exporte de Google Search Console: consultas
 * informativas con impresiones y sin página dedicada. Este lote cubre estafa,
 * mediación familiar, servidumbre de paso, responsabilidad por mascotas,
 * subsidio de mayores de 52 años, viviendas de uso turístico, preconcurso de
 * acreedores y teletrabajo. Ninguna crea categoría nueva.
 *
 * Cada artículo declara sus tres `relatedServices` para alimentar el enlazado
 * bidireccional de `blogInternalLinks.ts`: la entrada derivada hace que la
 * página de servicio enlace de vuelta a la guía, así que ninguna queda huérfana.
 * Reglas de forma: title ≤ 62, description ≤ 162 e intro > 150 caracteres.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_OCT: SeoArticle[] = [
	{
		slug: 'delito-de-estafa',
		title: 'Delito de estafa: modalidades y cómo se defiende',
		description:
			'Qué es el delito de estafa, sus modalidades más habituales, cuándo se archiva una denuncia y cómo se defiende el investigado en el procedimiento.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '8 min',
		intro: 'La estafa es uno de los delitos más denunciados y, a la vez, uno de los que más denuncias terminan archivadas. La clave está en el engaño bastante y en el perjuicio: sin esos elementos, el conflicto puede ser civil y no penal. Distinguirlo a tiempo ahorra años de procedimiento.',
		sections: [
			{
				heading: 'Qué es el delito de estafa',
				paragraphs: [
					'La estafa exige un engaño previo que induce a error a otra persona y la lleva a realizar un acto de disposición económico en perjuicio propio o ajeno. No basta con que alguien no pague o incumpla un contrato: hace falta ese engaño y un ánimo de lucro.',
					'El Código Penal castiga la estafa con penas que dependen de la cuantía del perjuicio. Cuanto mayor es la cantidad defraudada, más grave es la calificación y mayor la pena prevista.',
				],
			},
			{
				heading: 'Modalidades más habituales',
				paragraphs: [
					'Entre las más frecuentes están la estafa informática o a través de internet, la inmobiliaria, con viviendas ya vendidas o alquileres cobrados por adelantado, la de falsos préstamos o inversiones y las estructuras piramidales. Cada una tiene su forma de engaño y su prueba típica.',
					'También son habituales las estafas entre particulares disfrazadas de negocio o de relación comercial. En estos casos, la frontera con el incumplimiento contractual es fina y conviene analizarla con el contrato delante.',
				],
			},
			{
				heading: 'Cuándo se archiva una denuncia por estafa',
				paragraphs: [
					'Muchas denuncias se archivan porque el asunto es en realidad un conflicto civil: un impago, un negocio que salió mal o una promesa incumplida sin engaño previo. Si no hay dolo desde el principio, no hay estafa penal.',
					'El juzgado valora los mensajes, los contratos, los pagos y el modo de comportarse del investigado. Cuanto más se acredite que había un plan engañoso desde el principio, más sólida es la acusación.',
				],
			},
			{
				heading: 'Cómo se defiende el investigado',
				paragraphs: [
					'La defensa se apoya en la ausencia de engaño y de ánimo de lucro, en la existencia de una relación contractual real y en la falta de prueba del perjuicio. También en la calificación civil del conflicto.',
					'Es decisivo revisar el atestado, las declaraciones y la documentación antes de prestar declaración. Una estrategia preparada desde el inicio cambia el desarrollo del caso.',
				],
			},
			{
				heading: 'Reparación del daño y responsabilidad civil',
				paragraphs: [
					'En el proceso penal se puede exigir la devolución de lo defraudado y la indemnización de los perjuicios. La reparación del daño antes del juicio puede atenuar la pena y favorece una salida pactada.',
					'Aunque el asunto acabe en la vía civil, el perjudicado conserva su derecho a reclamar la cantidad entregada. La elección de una u otra vía conviene valorarla con la prueba disponible.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Denunciar sin prueba del engaño, borrar mensajes o confundir una deuda con una estafa son errores que llevan al archivo o, en el otro lado, a pasar por alto una defensa sólida. También lo es dejar pasar el plazo de denuncia.',
					'Antes de actuar conviene reunir toda la documentación, ordenar la cronología y aclarar qué se reclama: la devolución, una indemnización o ambas cosas.',
				],
			},
		],
		checklist: [
			'Guarda contratos, mensajes y justificantes de pago.',
			'Ordena la cronología del engaño y del perjuicio.',
			'Comprueba si hay engaño previo o solo incumplimiento.',
			'Valora la vía penal y la civil por separado.',
			'No borres conversaciones ni comprobantes.',
		],
		faq: [
			{
				question: '¿Cuál es la diferencia entre estafa y deuda?',
				answer:
					'La estafa exige un engaño previo y un ánimo de lucro que llevan a la víctima a entregar su dinero. Si solo hay un impago o un incumplimiento sin engaño, el conflicto es civil y se reclama por otra vía.',
			},
			{
				question: '¿Qué pruebas necesito para denunciar una estafa?',
				answer:
					'Mensajes, correos, contratos, transferencias, publicidad y cualquier documento que acredite el engaño y la entrega de dinero. La cronología es clave para demostrar que el engaño fue previo.',
			},
			{
				question: '¿Puedo reclamar el dinero si el condenado no lo devuelve?',
				answer:
					'Sí. La responsabilidad civil derivada del delito permite exigir la devolución y la indemnización. Si no se cobra en el proceso penal, queda la ejecución de esa condena civil.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/blog/denuncias-falsas', label: 'defensa frente a denuncias falsas' },
			{ path: '/derecho-civil', label: 'reclamación civil del dinero' },
		],
	},
	{
		slug: 'mediacion-familiar',
		title: 'Mediación familiar: qué resuelve y cuándo conviene',
		description:
			'Qué conflictos resuelve la mediación familiar, cómo se desarrolla, si es obligatoria, qué acuerdos alcanza y cuándo conviene acudir a ella en un divorcio.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '7 min',
		intro: 'La mediación familiar permite a los progenitores o cónyuges alcanzar sus propios acuerdos con la ayuda de un tercero neutral. No sustituye al abogado ni al juez, pero evita muchos pleitos, reduce costes y protege a los hijos del conflicto. No siempre es la vía adecuada.',
		sections: [
			{
				heading: 'Qué es la mediación familiar',
				paragraphs: [
					'Es un procedimiento voluntario en el que un mediador imparcial ayuda a las partes a dialogar y a construir acuerdos sobre las cuestiones que les enfrentan. El mediador no decide ni impone: facilita la comunicación y ordena las propuestas.',
					'Se rige por los principios de voluntariedad, confidencialidad, imparcialidad y neutralidad. Lo que se habla en la mediación no se puede usar después en el juzgado como prueba, lo que favorece un diálogo sincero.',
				],
			},
			{
				heading: 'Qué conflictos resuelve',
				paragraphs: [
					'Resuelve o encauza las cuestiones típicas de una ruptura: custodia, régimen de visitas, pensión de alimentos, uso de la vivienda y reparto de bienes. También conflictos entre progenitores ya separados, como cambios de medidas o desacuerdos sobre los hijos.',
					'Puede servir asimismo para conflictos familiares más amplios, como desacuerdos entre hermanos por una herencia o sobre el cuidado de un familiar mayor.',
				],
			},
			{
				heading: 'Cómo se desarrolla el proceso',
				paragraphs: [
					'El proceso empieza con una sesión informativa y continúa con varias reuniones conjuntas o separadas. El mediador ayuda a identificar los intereses de cada parte y a buscar soluciones que ambas puedan sostener.',
					'Si se alcanza un acuerdo, se recoge por escrito y se presenta para su aprobación. Ese documento puede incorporarse al convenio regulador o al procedimiento de modificación de medidas.',
				],
			},
			{
				heading: '¿Es obligatoria la mediación?',
				paragraphs: [
					'En el ámbito familiar, la mediación no es una imposición general, pero algunos procedimientos exigen acreditar que se ha intentado un acercamiento previo. La ley ha ido reforzando los mecanismos de negociación antes de demandar.',
					'En la práctica, proponer la mediación suele mejorar la posición de quien la plantea, porque demuestra voluntad de acuerdo y deja al otro lado la carga de rechazarla sin motivo.',
				],
			},
			{
				heading: 'El acuerdo de mediación y su valor',
				paragraphs: [
					'Un acuerdo bien redactado concreta obligaciones, plazos y forma de pago, y prevé qué ocurre si cambian las circunstancias. Cuanto más detallado, menos margen de interpretación y de conflicto posterior.',
					'El acuerdo no sustituye el asesoramiento jurídico: conviene revisarlo con un abogado antes de firmarlo, para comprobar que es viable y que protege los intereses de cada parte y de los hijos.',
				],
			},
			{
				heading: 'Cuándo no conviene o no cabe',
				paragraphs: [
					'La mediación no es adecuada cuando existe violencia, intimidación o una desigualdad grave entre las partes. En esos casos, el diálogo puede poner en riesgo a la parte más débil y lo prioritario es la protección.',
					'Tampoco sirve cuando una de las partes no tiene voluntad de acuerdo. Forzar una mediación sin disposición real solo alarga el conflicto y consume tiempo.',
				],
			},
		],
		checklist: [
			'Solicita la sesión informativa previa.',
			'Identifica las cuestiones que queréis resolver.',
			'Reúne documentación de ingresos y gastos.',
			'Revisa el acuerdo con un abogado antes de firmar.',
			'Valora si hay violencia o desequilibrio.',
		],
		faq: [
			{
				question: '¿La mediación familiar es obligatoria?',
				answer:
					'No es una imposición general, pero algunos procedimientos exigen acreditar un intento de negociación previa. En la práctica, proponerla mejora la posición de quien la plantea.',
			},
			{
				question: '¿Qué pasa si no llegamos a un acuerdo?',
				answer:
					'Nada de lo tratado en la mediación se puede usar como prueba en el juzgado. Cada parte queda en la misma posición y puede seguir con la vía judicial si lo considera necesario.',
			},
			{
				question: '¿El acuerdo de mediación es vinculante?',
				answer:
					'Por sí solo no es ejecutable como una sentencia, pero se puede incorporar al convenio regulador o a un procedimiento para que el juez lo apruebe y le dé fuerza.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
			{ path: '/guarda-custodia', label: 'guarda y custodia' },
			{ path: '/blog/modificacion-convenio-regulador', label: 'modificación del convenio regulador' },
		],
	},
	{
		slug: 'servidumbre-de-paso',
		title: 'Servidumbre de paso: cómo se reclama y cómo se extingue',
		description:
			'Qué es una servidumbre de paso, cómo se constituye y se prueba, qué ocurre con los caminos en fincas rústicas y cómo se reclama o se extingue.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'La servidumbre de paso permite cruzar una finca ajena para acceder a la propia. En el medio rural es una fuente constante de conflictos, sobre todo cuando el camino no está documentado. Saber cómo se constituye y cómo se prueba evita discusiones que se pierden por falta de papel.',
		sections: [
			{
				heading: 'Qué es una servidumbre de paso',
				paragraphs: [
					'Es un derecho real que grava una finca, la sirviente, en beneficio de otra, la dominante, para permitir el acceso a través de ella. El titular de la finca dominante puede pasar, y el de la sirviente debe tolerarlo sin que el paso se convierta en propiedad.',
					'No es una propiedad ni un alquiler: es una carga que acompaña a las fincas y que pasa con ellas cuando se venden. Por eso debe constar en el Registro para que se oponga a terceros.',
				],
			},
			{
				heading: 'Cómo se constituye y se prueba',
				paragraphs: [
					'Puede constituirse por acuerdo entre los propietarios, por disposición del vendedor o del testador, o por ley en los casos de finca enclavada. Cuando hay acuerdo, conviene documentarlo en escritura e inscribirlo en el Registro de la Propiedad.',
					'Si no hay documento, la prueba se complica: se recurre a testigos, fotografías antiguas, planos, catastro y al uso continuado durante años. La falta de título es la causa más frecuente de pleitos perdidos.',
				],
			},
			{
				heading: 'Servidumbres y caminos en fincas rústicas',
				paragraphs: [
					'En el medio rural, el paso suele ejercerse por caminos que llevan años usándose. Ese uso, por sí solo, no siempre crea servidumbre: hace falta acreditar el título o, en su caso, cumplir los requisitos de la usucapión.',
					'Cuando una finca queda sin salida a camino público, la ley permite reclamar el paso necesario. En ese caso hay que fijar por dónde pasa, con qué anchura y con qué indemnización para la finca gravada.',
				],
			},
			{
				heading: 'Cómo se reclama y qué se pide',
				paragraphs: [
					'Quien tiene derecho al paso puede pedir su reconocimiento, que se concrete el trazado y la anchura y que se retiren los obstáculos. Si el vecino lo impide, la vía civil busca declarar el derecho y restablecerlo.',
					'La demanda suele apoyarse en planos, informes técnicos, títulos y prueba del uso. Un levantamiento del trazado y una descripción clara del paso pedido facilitan que la sentencia sea ejecutable.',
				],
			},
			{
				heading: 'Extinción y modificaciones',
				paragraphs: [
					'La servidumbre se extingue, entre otros motivos, por reunirse en una misma persona la propiedad de las dos fincas, por el no uso durante el plazo legal o por renuncia del titular. También puede modificarse si cambian las necesidades o el trazado.',
					'Cuando el trazado se hace muy gravoso para la finca sirviente, cabe pedir su variación a cambio de una indemnización. Es una salida habitual cuando el paso impide el uso normal de la finca.',
				],
			},
			{
				heading: 'Errores y conflictos frecuentes',
				paragraphs: [
					'El error más común es dar por hecho un derecho que no está documentado. También lo es cerrar el paso por cuenta propia, ampliar su anchura sin título o entender que el uso prolongado crea por sí mismo la servidumbre.',
					'Antes de reclamar o de oponerse conviene revisar el título, el Registro y el catastro, y documentar el uso real. Una fotografía aérea o un informe técnico vale más que un conflicto de vecinos.',
				],
			},
		],
		checklist: [
			'Revisa el título y el Registro de la Propiedad.',
			'Comprueba el catastro y los planos antiguos.',
			'Documenta el trazado y el uso real del paso.',
			'No modifiques el paso por tu cuenta.',
			'Considera el paso necesario si la finca no tiene salida.',
		],
		faq: [
			{
				question: '¿Puede nacer una servidumbre por uso continuado?',
				answer:
					'El uso continuado puede servir para adquirir la servidumbre si concurren los requisitos de la usucapión, pero no siempre basta. Lo más seguro es contar con un título o acreditar el paso necesario.',
			},
			{
				question: '¿Qué hago si mi finca no tiene salida a camino público?',
				answer:
					'Cuando una finca queda enclavada, la ley permite reclamar un paso necesario por la finca vecina, fijando su trazado, anchura y la indemnización que corresponda.',
			},
			{
				question: '¿Cómo se extingue una servidumbre de paso?',
				answer:
					'Se extingue, entre otros supuestos, por reunirse la propiedad de las dos fincas en una misma persona, por el no uso durante el plazo legal o por renuncia. Cada caso debe comprobarse con el título y el Registro.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'conflictos entre fincas y vecinos' },
			{ path: '/incumplimiento-contrato', label: 'incumplimiento de acuerdos' },
			{ path: '/responsabilidad-civil', label: 'responsabilidad civil' },
		],
	},
	{
		slug: 'responsabilidad-por-mascotas',
		title: 'Responsabilidad por mascotas: daños y cómo reclamarlos',
		description:
			'Quién responde cuando un perro u otro animal causa daños, qué se acredita, qué cobertura tiene el seguro y cómo reclamar la indemnización.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'Una mordedura, un atropello causado por un animal suelto o daños en un cultivo generan una reclamación con reglas propias. El propietario o el poseedor del animal responden de los daños, y el seguro de responsabilidad civil del hogar puede cubrirlos. Documentarlo bien marca la diferencia.',
		sections: [
			{
				heading: 'Quién responde de los daños de un animal',
				paragraphs: [
					'Con carácter general responde quien tiene el animal bajo su posesión o propiedad, aunque se le escape o extravíe. La responsabilidad es objetiva: no hace falta demostrar culpa, sino la relación entre el animal y el daño.',
					'Si hay varias personas implicadas, como quien lo cuida o quien lo suelta, puede responder también quien tuvo la posesión en el momento. Identificar al responsable real es el primer paso de la reclamación.',
				],
			},
			{
				heading: 'Qué daños se pueden reclamar',
				paragraphs: [
					'Se reclaman los daños personales, como lesiones, gastos médicos y secuelas, y los daños materiales, como ropa, vehículos o instalaciones. También pueden reclamarse los perjuicios derivados, como días de baja o gastos de tratamiento.',
					'En el ámbito rural, es frecuente reclamar daños en cultivos o en ganado causados por animales sueltos. Esos daños se acreditan con informes y valoraciones del perjuicio.',
				],
			},
			{
				heading: 'La prueba del daño y del animal',
				paragraphs: [
					'Hay que acreditar que el animal causó el daño y quién es su responsable. Partes médicos, fotografías, testigos, el parte de la policía local y, si existe, el registro del animal ayudan a identificar ambas cosas.',
					'Un informe médico o veterinario que describa el daño y su causa es muy útil. Cuanto antes se recopile, menos margen habrá para discutir los hechos.',
				],
			},
			{
				heading: 'El seguro de responsabilidad civil',
				paragraphs: [
					'Muchos seguros de hogar incluyen responsabilidad civil por mascotas, y existen pólizas específicas para determinadas razas o actividades. El seguro del responsable puede cubrir la indemnización, total o parcialmente.',
					'Conviene comprobar la cobertura, los límites y si el siniestro está excluido. No siempre cubre los daños causados por animales usados en actividades concretas ni los derivados de un incumplimiento grave.',
				],
			},
			{
				heading: 'Cómo se reclama',
				paragraphs: [
					'El primer paso es comunicar el daño al responsable y a su seguro, con la documentación del siniestro y una valoración de los daños. Si no hay acuerdo, se puede acudir a la vía civil.',
					'Reclamar ante el seguro del responsable y ante el propio seguro, si se tiene, son vías compatibles. Lo importante es no aceptar una indemnización sin comprobar que cubre todos los daños.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'No documentar el daño, no identificar al responsable o firmar un finiquito antes de conocer el alcance de las lesiones son errores que reducen la indemnización. También lo es dejar pasar el tiempo sin reclamar.',
					'Si el animal es propio y ha causado daños, revisar la póliza y comunicar el siniestro cuanto antes evita que el seguro se niegue a cubrirlo por falta de aviso tempestivo.',
				],
			},
		],
		checklist: [
			'Identifica al propietario o poseedor del animal.',
			'Documenta el daño con fotos y partes médicos.',
			'Recoge testigos y datos del seguro.',
			'Solicita una valoración de los daños.',
			'No firmes un finiquito antes de estabilizar las lesiones.',
		],
		faq: [
			{
				question: '¿Responde el dueño aunque el perro se haya escapado?',
				answer:
					'Sí. La responsabilidad del propietario o poseedor se mantiene aunque el animal se escape o se extravíe, y es objetiva: no hace falta demostrar culpa, solo el daño causado.',
			},
			{
				question: '¿Lo cubre el seguro del hogar?',
				answer:
					'Muchos seguros de hogar incluyen responsabilidad civil por mascotas, aunque con límites y exclusiones. Conviene revisar la póliza y comprobar si el siniestro está cubierto.',
			},
			{
				question: '¿Qué puedo reclamar si me muerde un perro?',
				answer:
					'Los gastos médicos, los días de baja, las secuelas y los daños materiales. Todo se acredita con partes médicos, facturas y una valoración de las lesiones.',
			},
		],
		relatedServices: [
			{ path: '/responsabilidad-civil', label: 'responsabilidad civil por daños' },
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
			{ path: '/incumplimiento-contrato', label: 'incumplimiento de obligaciones' },
		],
	},
	{
		slug: 'subsidio-mayores-de-52-anos',
		title: 'Subsidio de mayores de 52 años: requisitos y cómo pedirlo',
		description:
			'Requisitos del subsidio para mayores de 52 años, rentas que se tienen en cuenta, compatibilidad con el trabajo, cotización y cómo recurrir una negativa.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '8 min',
		intro: 'El subsidio para mayores de 52 años es la última red de protección antes de la jubilación para quien agota su prestación por desempleo. Es compatible con ciertos trabajos y cotiza para la jubilación, pero exige acreditar carencia de rentas de forma muy estricta. Los requisitos se comprueban una y otra vez.',
		sections: [
			{
				heading: 'Qué es el subsidio para mayores de 52 años',
				paragraphs: [
					'Es una prestación asistencial para personas desempleadas que han agotado la prestación contributiva y que, por su edad, tienen difícil reincorporarse al mercado. Se mantiene hasta que se accede a la jubilación si se siguen cumpliendo los requisitos.',
					'A diferencia de la prestación contributiva, no depende de cotizaciones propias para su duración, pero exige acreditar que no se superan los límites de rentas y que se sigue buscando empleo.',
				],
			},
			{
				heading: 'Requisitos generales',
				paragraphs: [
					'Hay que estar en situación legal de desempleo, haber agotado la prestación por desempleo, tener la edad mínima que la ley exige y acreditar las responsabilidades familiares o la carencia de rentas según el caso. También hay que suscribir el compromiso de actividad.',
					'El plazo para solicitarlo es breve desde que se cumple la situación protegida. Dejarlo pasar puede suponer perder meses de subsidio que ya no se recuperan.',
				],
			},
			{
				heading: 'Las rentas que se tienen en cuenta',
				paragraphs: [
					'La administración computa las rentas de la unidad familiar, no solo las de la persona solicitante. Se incluyen rendimientos del trabajo, del capital, actividades económicas y, con matices, determinadas prestaciones.',
					'Por eso, un ingreso pequeño de otro miembro del hogar puede hacer que se deniegue. Revisar las rentas de todos antes de solicitar evita una denegación evitable.',
				],
			},
			{
				heading: 'Compatibilidad con el trabajo',
				paragraphs: [
					'El subsidio es compatible con determinados trabajos, siempre que no se superen los límites de rentas y que se comuniquen los cambios. Trabajar no siempre supone perderlo, pero sí puede reducir o suspender el cobro.',
					'Trabajar por cuenta ajena a tiempo completo, o por cuenta propia, tiene efectos distintos. Conviene comunicar cada cambio y comprobar cómo afecta al subsidio antes de darse de alta.',
				],
			},
			{
				heading: 'La cotización y sus efectos',
				paragraphs: [
					'Durante el subsidio para mayores de 52 años, la administración cotiza por la jubilación, lo que ayuda a mantener y mejorar la futura pensión. Esa cotización es una de las razones por las que este subsidio es tan importante.',
					'El tiempo de cobro del subsidio también tiene efectos sobre la jubilación anticipada o la ordinaria. Conviene revisarlo con la vida laboral delante para planificar la recta final de la carrera profesional.',
				],
			},
			{
				heading: 'Denegaciones y cómo reclamar',
				paragraphs: [
					'Las denegaciones más habituales se deben a rentas mal calculadas, a no haber consumido el plazo exigido, a errores en la solicitud o a la falta de documentación. Muchas se corrigen con la reclamación previa.',
					'Si la resolución es desfavorable, cabe reclamación previa y, después, la vía judicial. La prueba de las rentas y de las responsabilidades familiares es la clave para darle la vuelta.',
				],
			},
		],
		checklist: [
			'Comprueba el plazo desde que agotaste la prestación.',
			'Revisa las rentas de toda la unidad familiar.',
			'Reúne los documentos de responsabilidades familiares.',
			'Comunica cualquier trabajo o cambio de rentas.',
			'Reclama la denegación dentro de plazo.',
		],
		faq: [
			{
				question: '¿Hasta cuándo se puede cobrar el subsidio de mayores de 52 años?',
				answer:
					'Se mantiene mientras se cumplan los requisitos y se acredite la carencia de rentas, y suele prolongarse hasta el acceso a la jubilación. Cada renovación exige volver a justificar la situación.',
			},
			{
				question: '¿Se puede trabajar y cobrar el subsidio?',
				answer:
					'Es compatible con determinados trabajos siempre que no se superen los límites de rentas y se comuniquen los cambios. Según el tipo de trabajo, puede suspenderse o reducirse.',
			},
			{
				question: '¿Cotiza para la jubilación mientras cobro el subsidio?',
				answer:
					'Sí. Durante este subsidio la administración cotiza por la jubilación, lo que contribuye a mantener la futura pensión y hay que tener en cuenta al planificar la edad de retiro.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/recursos-administrativos', label: 'reclamación y recursos' },
			{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
		],
	},
	{
		slug: 'viviendas-de-uso-turistico',
		title: 'Viviendas de uso turístico: licencia y límites en Andalucía',
		description:
			'Qué exige Andalucía para una vivienda de uso turístico, la licencia y el registro, los límites municipales y qué pasa si se alquila sin autorización.',
		date: '2026-10-06',
		category: 'Urbanismo',
		readTime: '7 min',
		intro: 'Alquilar un piso por días es una actividad regulada, no un simple alquiler. Andalucía exige inscribir la vivienda en un registro y los ayuntamientos pueden limitar dónde se permite. Alquilar sin cumplir los requisitos expone a sanciones y a tener que cerrar.',
		sections: [
			{
				heading: 'Qué es una vivienda de uso turístico',
				paragraphs: [
					'Es la vivienda que se cede de forma habitual y con fines turísticos, por días o semanas, a cambio de un precio. La habitualidad y la finalidad turística son las notas que la distinguen del arrendamiento de vivienda para residencia permanente.',
					'La vía corta, con estancias de días, se rige por la normativa de turismo de la comunidad, no por la Ley de Arrendamientos Urbanos. Confundir ambas regulaciones es el origen de muchas sanciones.',
				],
			},
			{
				heading: 'La licencia y el registro en Andalucía',
				paragraphs: [
					'La comunidad exige que la vivienda se declare responsablemente y se inscriba en el registro de viviendas de uso turístico. Sin esa inscripción, la actividad no se puede publicitar ni ejercer legalmente.',
					'Además, hay que cumplir los requisitos de habitabilidad, de seguridad y de información al huésped. La inscripción puede decaer si cambian las condiciones o si se incumplen las obligaciones.',
				],
			},
			{
				heading: 'Los límites municipales',
				paragraphs: [
					'Los ayuntamientos pueden aprobar planes y ordenanzas que limiten las viviendas de uso turístico por zonas o incluso prohibirlas en determinadas áreas, sobre todo en cascos históricos con presión de alquiler.',
					'Antes de comprar o alquilar para uso turístico hay que comprobar el planeamiento y las limitaciones vigentes. Una licencia concedida antes de un cambio normativo puede quedar sin efecto con el tiempo.',
				],
			},
			{
				heading: 'Obligaciones de quien alquila',
				paragraphs: [
					'Quien explota la vivienda debe mantener la inscripción, comunicar los datos de los huéspedes, cumplir las normas de seguridad y de protección de datos y respetar las reglas de la comunidad de propietarios y del ayuntamiento.',
					'También debe atender sus obligaciones fiscales y de consumo. Ocultar la actividad o limitarse a publicarla sin registro agrava las consecuencias si se detecta.',
				],
			},
			{
				heading: 'Qué pasa si se alquila sin autorización',
				paragraphs: [
					'Alquilar sin cumplir los requisitos puede dar lugar a sanciones administrativas, al cese de la actividad y a la retirada de la vivienda del registro. La cuantía depende de la infracción y se agrava si es reiterada.',
					'Además, la comunidad de propietarios puede oponerse si los estatutos lo prevén, y el ayuntamiento puede ordenar el cese. Recuperar la actividad legal después exige regularizar todo el expediente.',
				],
			},
			{
				heading: 'Errores y conflictos frecuentes',
				paragraphs: [
					'El error más común es creer que basta con publicar la vivienda en una plataforma. También lo es ignorar las limitaciones del ayuntamiento o los estatutos de la comunidad, o no actualizar el registro cuando cambian las condiciones.',
					'Antes de empezar, conviene comprobar la normativa aplicable, el planeamiento y la situación de la comunidad. Un alquiler turístico mal planteado cuesta más cerrarlo que regularizarlo a tiempo.',
				],
			},
		],
		checklist: [
			'Comprueba el planeamiento y las ordenanzas locales.',
			'Inscribe la vivienda en el registro turístico.',
			'Revisa los estatutos de la comunidad.',
			'Asegura los requisitos de habitabilidad y seguridad.',
			'Cumple las obligaciones fiscales y de datos.',
		],
		faq: [
			{
				question: '¿Puedo alquilar mi piso por días sin registrarlo?',
				answer:
					'No. La actividad turística está regulada y exige la inscripción en el registro correspondiente. Alquilar sin cumplir los requisitos expone a sanciones y al cese de la actividad.',
			},
			{
				question: '¿Puede el ayuntamiento prohibir las viviendas turísticas?',
				answer:
					'Sí. Los municipios pueden limitar o prohibir las viviendas de uso turístico en determinadas zonas mediante su planeamiento y sus ordenanzas. Conviene comprobarlo antes de invertir.',
			},
			{
				question: '¿Y si la comunidad de propietarios se opone?',
				answer:
					'Si los estatutos limitan o prohíben la actividad turística, la comunidad puede oponerse y exigir su cese. Antes de alquilar conviene revisar los estatutos y los acuerdos de la junta.',
			},
		],
		relatedServices: [
			{ path: '/urbanismo', label: 'licencias y actividad urbanística' },
			{ path: '/recursos-administrativos', label: 'recursos frente a sanciones' },
			{ path: '/derecho-civil', label: 'conflictos de comunidad y arrendamientos' },
		],
	},
	{
		slug: 'preconcurso-de-acreedores',
		title: 'Preconcurso de acreedores: cómo negociar antes de la quiebra',
		description:
			'Qué es el preconcurso, cuándo conviene comunicarlo al juzgado, qué protección da frente a embargos y cómo se negocia con Hacienda y acreedores.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '8 min',
		intro: 'Cuando una empresa no puede pagar sus deudas, el preconcurso es la última oportunidad de negociar antes de entrar en concurso. Comunica al juzgado la situación y activa protección frente a ejecuciones mientras se busca un acuerdo. Mal usado, solo retrasa lo inevitable.',
		sections: [
			{
				heading: 'Qué es el preconcurso',
				paragraphs: [
					'Es el periodo en el que el deudor comunica al juzgado que está negociando con sus acreedores para alcanzar un acuerdo de refinanciación, un acuerdo extrajudicial de pagos o la adhesión a uno ya existente. No es todavía un concurso, pero abre un paréntesis protegido.',
					'Durante ese tiempo, la empresa puede seguir operando bajo ciertas condiciones y gana unos meses para reordenar su situación. Pasado el plazo sin acuerdo, lo normal es entrar en concurso.',
				],
			},
			{
				heading: 'Cuándo conviene iniciarlo',
				paragraphs: [
					'Conviene plantearlo cuando todavía hay margen real de negociación y un plan de viabilidad creíble. Si la empresa está ya quebrada o no hay acuerdo posible, prolongar el preconcurso solo acumula intereses y deteriora el patrimonio.',
					'También conviene anticiparse al incumplimiento de obligaciones con Hacienda y la Seguridad Social, porque el retraso limita las opciones y agrava la responsabilidad del administrador.',
				],
			},
			{
				heading: 'La protección frente a los embargos',
				paragraphs: [
					'La comunicación del preconcurso suspende determinadas ejecuciones y embargos, lo que permite negociar sin que los acreedores ejecuten por separado. No detiene todas las reclamaciones, pero frena las más urgentes.',
					'Es crucial entender qué se paraliza y qué no, y hacerlo constar en los procedimientos abiertos. Una ejecución no incluida en la protección puede seguir adelante.',
				],
			},
			{
				heading: 'La negociación con acreedores y Hacienda',
				paragraphs: [
					'La clave es presentar un plan realista: qué se puede pagar, en qué plazos y con qué garantías. Los acuerdos de refinanciación pueden incluir quitas, esperas y conversiones de deuda, respetando las mayorías legales.',
					'Con Hacienda y la Seguridad Social, la negociación tiene reglas propias y límites. Conviene ordenar las deudas públicas y privadas y priorizar las que pueden hacer inviable el acuerdo.',
				],
			},
			{
				heading: 'Salir del preconcurso o entrar en concurso',
				paragraphs: [
					'Si se alcanza un acuerdo, la empresa continúa su actividad con la deuda reordenada. Si no se logra, lo habitual es solicitar el concurso de acreedores dentro del plazo legal para no agravar la responsabilidad.',
					'Entrar en concurso a tiempo protege al administrador frente a la responsabilidad por no instar el concurso. Retrasarlo cuando ya era obligatorio es una de las causas de condena más frecuentes.',
				],
			},
			{
				heading: 'Errores que empeoran la situación',
				paragraphs: [
					'Seguir pagando a unos acreedores y no a otros, ocultar deuda, no llevar contabilidad o usar el preconcurso para ganar tiempo sin negociar son errores que ahondan el problema. También lo es no documentar la situación real de la empresa.',
					'Antes de comunicar el preconcurso conviene tener un diagnóstico de la situación, un plan y un calendario. La improvisación suele cerrar la salida negociada.',
				],
			},
		],
		checklist: [
			'Haz un diagnóstico de deudas y tesorería.',
			'Ordena acreedores públicos y privados.',
			'Prepara un plan de viabilidad realista.',
			'Comunica el preconcurso al juzgado en plazo.',
			'Valora el concurso antes de agotar el plazo.',
		],
		faq: [
			{
				question: '¿El preconcurso evita el concurso?',
				answer:
					'No siempre. Es un espacio para negociar un acuerdo que permita continuar; si no se alcanza dentro del plazo, lo habitual es entrar en concurso de acreedores.',
			},
			{
				question: '¿Qué pasa si sigo pagando a unos acreedores y a otros no?',
				answer:
					'Pagar de forma selectiva puede agravar la situación y comprometer la responsabilidad del administrador. Lo correcto es ordenar las deudas y negociar un plan único y documentado.',
			},
			{
				question: '¿Cuándo responde el administrador de las deudas?',
				answer:
					'Puede responder si, conociendo la situación de insolvencia, no insta el concurso en el plazo legal. Anticiparse con el preconcurso y, si falla, solicitar el concurso a tiempo reduce ese riesgo.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'servicios jurídicos para empresas' },
			{ path: '/cobro-deudas-impagos', label: 'deudas e impagos' },
			{ path: '/blog/responsabilidad-administradores-sl', label: 'responsabilidad de los administradores' },
		],
	},
	{
		slug: 'teletrabajo-y-gastos',
		title: 'Teletrabajo: gastos, desconexión y control horario',
		description:
			'Qué gastos debe compensar la empresa en teletrabajo, cómo se controla la jornada, qué pasa con la desconexión digital y cómo reclamar condiciones.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'Teletrabajar no es un favor ni un privilegio sin reglas: la ley obliga a un acuerdo escrito, a compensar los gastos y a respetar la desconexión digital. Muchos conflictos nacen de acuerdos verbales que nadie revisa hasta que llega el despido o la reclamación.',
		sections: [
			{
				heading: 'El teletrabajo y su marco legal',
				paragraphs: [
					'El teletrabajo se apoya en el acuerdo entre empresa y persona trabajadora, que debe constar por escrito y recoger las condiciones: porcentaje de presencialidad, medios, horario y gastos. Sin acuerdo, la relación puede seguir siendo presencial a efectos legales.',
					'El acuerdo se puede modificar y la empresa puede exigir la vuelta a la presencialidad si el pacto lo permite. Por eso conviene leer bien qué se firmó antes de dar por hechas las condiciones.',
				],
			},
			{
				heading: 'Gastos que debe compensar la empresa',
				paragraphs: [
					'La empresa tiene que dotar de medios y compensar los gastos del teletrabajo: equipos, conexión, suministros y consumo derivado de trabajar desde casa. La compensación puede ser una cantidad fija o el reembolso de gastos reales.',
					'Si no se compensa, se puede reclamar. Conviene guardar facturas de conexión, electricidad y equipos, y dejar constancia por escrito de que asumes gastos que corresponden a la empresa.',
				],
			},
			{
				heading: 'Control horario y disponibilidad',
				paragraphs: [
					'El teletrabajo no elimina el registro de jornada: la empresa debe respetar los límites de jornada y descanso y controlar el tiempo de trabajo de forma proporcionada. El control no puede invadir la intimidad del domicilio.',
					'La disponibilidad permanente no es exigible. Fuera del horario pactado, no hay obligación de estar conectado, y reclamar por esa exigencia es posible si se documenta.',
				],
			},
			{
				heading: 'La desconexión digital',
				paragraphs: [
					'La desconexión digital protege el derecho a no atender comunicaciones de trabajo fuera del horario. La empresa debe fijar un protocolo y respetar los tiempos de descanso, y no puede sancionar por no responder a un mensaje a deshoras.',
					'Para defenderlo hay que documentar los mensajes y su horario. Si la exigencia de disponibilidad es sistemática, puede afectar a la jornada y dar lugar a una reclamación.',
				],
			},
			{
				heading: 'Volver al trabajo presencial',
				paragraphs: [
					'La vuelta al trabajo presencial debe seguir lo pactado en el acuerdo de teletrabajo o, en su defecto, el régimen aplicable. Un cambio unilateral de las condiciones puede impugnarse si altera derechos.',
					'La empresa debe dar un preaviso razonable y respetar las condiciones que justificaron el teletrabajo. Documentar la orden de vuelta y sus motivos permite reclamar si es improcedente.',
				],
			},
			{
				heading: 'Cómo reclamar condiciones',
				paragraphs: [
					'Reúne el acuerdo de teletrabajo, las nóminas, los justificantes de gastos y las comunicaciones sobre horarios y disponibilidad. Presenta por escrito lo que reclamas: compensación, respeto de la jornada o desconexión.',
					'Si la empresa no responde, caben la vía de la Inspección de Trabajo y la judicial. La prueba documental es lo que sostiene la reclamación y evita que se convierta en una discusión sin base.',
				],
			},
		],
		checklist: [
			'Firma un acuerdo de teletrabajo por escrito.',
			'Guarda facturas de conexión y suministros.',
			'Anota los horarios y las comunicaciones fuera de jornada.',
			'Reclama la compensación de gastos por escrito.',
			'Documenta cualquier cambio de condiciones.',
		],
		faq: [
			{
				question: '¿Estoy obligado a pagar la luz y la conexión si teletrabajo?',
				answer:
					'No: la empresa debe dotar de medios y compensar los gastos del teletrabajo. Puede hacerlo con una cantidad fija o reembolsando los gastos, pero no puede trasladarlos al trabajador.',
			},
			{
				question: '¿Pueden exigirme que esté disponible fuera de horario?',
				answer:
					'No. La desconexión digital protege el derecho a no atender comunicaciones fuera de la jornada. La disponibilidad permanente no es exigible y se puede reclamar si se impone.',
			},
			{
				question: '¿Me pueden obligar a volver a la oficina?',
				answer:
					'Depende de lo pactado en el acuerdo de teletrabajo y del régimen aplicable. Un cambio unilateral puede impugnarse si altera las condiciones; la empresa debe respetar el acuerdo y avisar con antelación.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'condiciones de trabajo' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
			{ path: '/despidos', label: 'reclamaciones laborales' },
		],
	},
];
