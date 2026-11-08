/**
 * Noveno lote de contenido nuevo (oct 2026). Igual que los lotes anteriores de
 * `SEO_ARTICLES_SEO.ts` y `SEO_ARTICLES_OCT.ts`, nace del exporte de Google
 * Search Console: consultas informativas con impresiones y sin página dedicada.
 * Este lote cubre hurto y robo, nulidad matrimonial, residencia de familiares
 * de españoles, prestación por hijo a cargo, acoso sexual laboral, contrato de
 * agencia y distribución, licencia de primera ocupación e indemnización por
 * fallecimiento en accidente de tráfico. Ninguna crea categoría nueva.
 *
 * Cada artículo declara sus tres `relatedServices` para alimentar el enlazado
 * bidireccional de `blogInternalLinks.ts`: la entrada derivada hace que la
 * página de servicio enlace de vuelta a la guía, así que ninguna queda huérfana.
 * Reglas de forma: title ≤ 62, description ≤ 162 e intro > 150 caracteres.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_OCT2: SeoArticle[] = [
	{
		slug: 'delito-de-hurto-y-robo',
		title: 'Hurto y robo: diferencias, penas y cómo se defiende',
		description:
			'Diferencias entre hurto, robo con fuerza y robo con violencia, las penas según el valor de lo sustraído y cómo se defiende el investigado.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'Hurto y robo no son lo mismo, y la diferencia cambia por completo la pena y los derechos del investigado. La clave está en si hubo fuerza en las cosas o violencia sobre las personas, y en el valor de lo sustraído. Confundirlos es uno de los errores más caros en un procedimiento penal.',
		sections: [
			{
				heading: 'Qué es el hurto',
				paragraphs: [
					'El hurto es la sustracción de bienes muebles ajenos sin usar fuerza en las cosas ni violencia o intimidación sobre las personas. Tomar algo de un mostrador o de un descuido ajeno es, en principio, hurto.',
					'Su pena depende del valor de lo sustraído: si supera el umbral legal, se castiga con multa o prisión; si es inferior, puede ser un delito leve. Por eso la tasación del bien es tan importante.',
				],
			},
			{
				heading: 'Qué es el robo con fuerza',
				paragraphs: [
					'El robo con fuerza exige vencer una protección: romper una cerradura, escalar, forzar una ventana o usar cualquier medio para acceder al lugar. La fuerza en las cosas agrava la conducta y eleva la pena respecto al hurto.',
					'También es robo el uso de llaves falsas o de instrumentos para forzar el acceso. La diferencia con el hurto está en ese plus de fuerza sobre las cosas, no en el valor de lo sustraído.',
				],
			},
			{
				heading: 'Qué es el robo con violencia o intimidación',
				paragraphs: [
					'El robo con violencia o intimidación se produce cuando se emplea fuerza sobre las personas o se las amenaza para conseguir la sustracción. Es la modalidad más grave y la que mayores penas lleva aparejadas.',
					'Si además hay lesiones, se suman consecuencias por el daño causado a la persona. En estos casos, la defensa técnica y la reparación del daño son decisivas para el resultado.',
				],
			},
			{
				heading: 'Cómo se determina la pena',
				paragraphs: [
					'El valor de lo sustraído y el grado de ejecución condicionan la calificación y la pena. También influyen la reincidencia, la reparación del daño y la conformidad del investigado.',
					'La diferencia entre un delito leve y un delito menos grave puede depender de una tasación o de una circunstancia. Por eso conviene revisar el atestado y el valor probatorio de cada dato.',
				],
			},
			{
				heading: 'Cómo se defiende el investigado',
				paragraphs: [
					'La defensa examina la identificación del autor, la cadena de custodia de los efectos, el valor del bien y la calificación jurídica de los hechos. No es lo mismo un descuido que una sustracción con fuerza acreditada.',
					'También valora atenuantes, como la reparación del daño o el consumo de sustancias, y la posibilidad de una conformidad ventajosa. Una estrategia preparada antes de declarar cambia el desarrollo del caso.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Declarar sin asesoramiento, firmar documentos sin comprenderlos o aceptar una conformidad sin revisar la calificación son errores que cierran opciones. También lo es no conservar la prueba de que se devolvió el bien o se reparó el daño.',
					'Ante una detención o una citación por hurto o robo, lo primero es contactar con un abogado y no prestar declaración sin su presencia, salvo lo imprescindible para identificarse.',
				],
			},
		],
		checklist: [
			'Revisa el atestado y la calificación de los hechos.',
			'Comprueba el valor y la tasación del bien.',
			'Pide copia de la cadena de custodia de los efectos.',
			'Valora atenuantes y reparación del daño.',
			'No declares sin asistencia letrada.',
		],
		faq: [
			{
				question: '¿Cuál es la diferencia entre hurto y robo?',
				answer:
					'El hurto es la sustracción sin fuerza en las cosas ni violencia sobre las personas. El robo añade fuerza en las cosas o violencia o intimidación, y por eso tiene penas más graves.',
			},
			{
				question: '¿El valor de lo sustraído cambia la pena?',
				answer:
					'Sí. El valor del bien determina en buena medida la calificación, sobre todo en el hurto, y puede marcar la diferencia entre un delito leve y uno menos grave.',
			},
			{
				question: '¿Qué hago si me detienen por un robo?',
				answer:
					'Lo primero es contactar con un abogado y no prestar declaración sin su presencia. La defensa revisará la identificación, la prueba y la calificación antes de decidir la estrategia.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/blog/denuncias-falsas', label: 'defensa frente a denuncias falsas' },
			{ path: '/derecho-civil', label: 'responsabilidad civil por los daños' },
		],
	},
	{
		slug: 'nulidad-matrimonial',
		title: 'Nulidad matrimonial: causas y efectos frente al divorcio',
		description:
			'Cuándo procede la nulidad del matrimonio, sus causas, los efectos sobre bienes e hijos y en qué se diferencia del divorcio y la separación.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '7 min',
		intro: 'La nulidad matrimonial declara que el matrimonio nunca existió válidamente, con efectos distintos a los del divorcio. No es una vía para separarse más rápido ni más barato: exige una causa concreta y su prueba puede ser compleja. Elegir mal el procedimiento condiciona todo lo demás.',
		sections: [
			{
				heading: 'Qué es la nulidad matrimonial',
				paragraphs: [
					'La nulidad declara que el matrimonio es inválido desde su celebración, como si nunca hubiera producido efectos. No es lo mismo que el divorcio, que disuelve un matrimonio válido, ni que la separación, que solo suspende la convivencia.',
					'Se tramita por un procedimiento específico y exige acreditar una causa legal de nulidad. Sin esa causa, lo que corresponde es el divorcio, aunque la relación haya sido muy corta o conflictiva.',
				],
			},
			{
				heading: 'Causas de nulidad',
				paragraphs: [
					'Entre las causas están la falta de consentimiento, el error sobre la persona, la coacción o el miedo grave, la existencia de un vínculo matrimonial anterior no disuelto y los impedimentos no dispensados, como determinados parentescos o la edad legal.',
					'También puede plantearse la nulidad por matrimonio celebrado sin la forma exigida. Cada causa tiene su propia prueba y sus propios límites temporales, así que conviene analizarla con detalle.',
				],
			},
			{
				heading: 'Efectos sobre los bienes',
				paragraphs: [
					'La nulidad afecta al régimen económico del matrimonio y puede obligar a liquidar la situación patrimonial creada. Si uno de los cónyuges actuó de buena fe, la ley protege determinados derechos.',
					'La buena fe de cada cónyuge es clave: no es igual quien desconocía la causa de nulidad que quien la provocó. Ese dato influye en el reparto y en las compensaciones.',
				],
			},
			{
				heading: 'Efectos sobre los hijos',
				paragraphs: [
					'Los hijos no quedan desprotegidos por la nulidad: se adoptan medidas sobre custodia, alimentos y régimen de visitas atendiendo a su interés. Lo que cambia es la vía y, en su caso, la filiación respecto a uno de los cónyuges.',
					'El juez valora el interés superior del menor por encima de la posición de los adultos. Por eso las medidas sobre los hijos se adoptan con independencia de la causa de nulidad.',
				],
			},
			{
				heading: 'Diferencias con el divorcio y la separación',
				paragraphs: [
					'El divorcio disuelve el matrimonio válido y permite volver a casarse; la separación suspende la convivencia sin disolver el vínculo; la nulidad declara que el matrimonio nunca fue válido. Los efectos retroactivos son la nota que las distingue.',
					'Elegir el procedimiento correcto evita años de pleito. Cuando no hay causa de nulidad, insistir en ella solo alarga el conflicto y encarece el proceso.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Pedir la nulidad sin causa legal, confundirla con el divorcio o no documentar la causa son errores frecuentes. También lo es descuidar la liquidación de bienes y las medidas sobre los hijos.',
					'Antes de decidir la vía conviene revisar las fechas, los documentos y las circunstancias del matrimonio, y valorar si lo que procede es un divorcio con medidas acordadas.',
				],
			},
		],
		checklist: [
			'Identifica la causa legal de nulidad.',
			'Reúne pruebas del vínculo, los impedimentos o el consentimiento.',
			'Valora la buena fe de cada cónyuge.',
			'Plantea las medidas sobre los hijos.',
			'Compara la vía de la nulidad y la del divorcio.',
		],
		faq: [
			{
				question: '¿Puedo pedir la nulidad en lugar del divorcio?',
				answer:
					'Solo si existe una causa legal de nulidad acreditada. Si no la hay, el procedimiento correcto es el divorcio, aunque el matrimonio haya durado poco o la relación sea conflictiva.',
			},
			{
				question: '¿La nulidad deja a los hijos sin protección?',
				answer:
					'No. El juez adopta igualmente medidas sobre custodia, alimentos y visitas, atendiendo al interés superior del menor, con independencia de la causa de nulidad.',
			},
			{
				question: '¿Qué pasa con los bienes si se declara la nulidad?',
				answer:
					'Se liquida la situación patrimonial y se protege al cónyuge de buena fe. La buena o mala fe de cada uno influye en los derechos económicos que se reconocen.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
			{ path: '/liquidacion-gananciales', label: 'liquidación de bienes' },
			{ path: '/guarda-custodia', label: 'medidas sobre los hijos' },
		],
	},
	{
		slug: 'residencia-de-familiares-de-espanoles',
		title: 'Residencia de familiares de españoles: cómo se solicita',
		description:
			'Qué familiares de un español pueden residir en España, qué documentos se exigen, los plazos de resolución y qué cabe si se deniega.',
		date: '2026-10-06',
		category: 'Extranjería',
		readTime: '7 min',
		intro: 'El régimen de familiares de españoles es una de las vías de residencia más estables, pero no alcanza a cualquier pariente ni se resuelve solo con el parentesco. Exige acreditar la relación, la dependencia o la convivencia según el caso. Documentarlo bien desde el inicio evita denegaciones.',
		sections: [
			{
				heading: 'Qué es el régimen de familiares de españoles',
				paragraphs: [
					'Es el cauce que permite residir en España a determinados familiares de un ciudadano español, con unas condiciones más favorables que el régimen general de extranjería. No es una nacionalidad ni una autorización turística: es una residencia con vocación de estabilidad.',
					'El parentesco, la dependencia económica o la convivencia son los ejes del expediente. Qué se exige depende del tipo de familiar y de si vive con el español o en su país de origen.',
				],
			},
			{
				heading: 'Qué familiares pueden acogerse',
				paragraphs: [
					'El régimen cubre, con distintos requisitos, al cónyuge o pareja registrada, a los hijos menores o con discapacidad, a los hijos mayores dependientes y a los ascendientes a cargo del español. Cada supuesto tiene su propia documentación.',
					'No basta con ser pariente: hay que acreditar la relación y, cuando se exige, la dependencia económica o la convivencia. Un certificado de matrimonio sin prueba de convivencia puede no ser suficiente.',
				],
			},
			{
				heading: 'Documentación que se exige',
				paragraphs: [
					'Entre los documentos habituales están el certificado de nacimiento o de matrimonio, el libro de familia, los certificados de residencia del español, la prueba de medios económicos, el alojamiento y los seguros. Muchos deben estar legalizados o apostillados y traducidos.',
					'La vigencia de cada documento y la fecha de expedición importan. Un certificado caducado o mal traducido es causa frecuente de requerimiento y de retraso.',
				],
			},
			{
				heading: 'Cómo se solicita y plazos',
				paragraphs: [
					'La solicitud se presenta ante la autoridad competente, con la tasa y la documentación completa. Cuando se pide desde el país de origen, se tramita la residencia antes de viajar; cuando ya se está en España, se solicita la tarjeta correspondiente.',
					'El plazo de resolución y el silencio administrativo son claves: de ellos depende qué se puede hacer mientras se espera. Conviene saber si el procedimiento tiene silencio positivo o negativo antes de contar con una respuesta.',
				],
			},
			{
				heading: 'Mantenimiento y renovación',
				paragraphs: [
					'Una vez concedida, la autorización se mantiene mientras se conserven las circunstancias que la justificaron. Cambios como la ruptura de la pareja o la pérdida de dependencia pueden afectar a la situación.',
					'La tarjeta se renueva por periodos y exige seguir acreditando el vínculo y la residencia. No renovar a tiempo deja a la persona sin documentación válida y complica cualquier trámite.',
				],
			},
			{
				heading: 'Denegaciones y cómo reclamar',
				paragraphs: [
					'Las denegaciones suelen deberse a documentación incompleta, a falta de prueba de dependencia o convivencia, o a errores en la solicitud. Muchas se corrigen con la reclamación y la subsanación de defectos.',
					'Si la vía administrativa no resuelve, cabe acudir a la jurisdicción contenciosa. Revisar el expediente y corregir la causa de la denegación es más eficaz que repetir la solicitud sin cambios.',
				],
			},
		],
		checklist: [
			'Identifica el tipo de familiar y sus requisitos.',
			'Reúne certificados legalizados y traducidos.',
			'Comprueba la vigencia de cada documento.',
			'Revisa el silencio y los plazos del procedimiento.',
			'No dejes pasar la renovación de la tarjeta.',
		],
		faq: [
			{
				question: '¿Puedo residir en España por ser familiar de un español?',
				answer:
					'Sí, si encajas en uno de los supuestos del régimen de familiares de españoles y acreditas la relación y, cuando se exija, la dependencia o la convivencia. No basta con el parentesco por sí solo.',
			},
			{
				question: '¿Se puede solicitar desde el país de origen?',
				answer:
					'Sí. La residencia se puede tramitar antes de viajar o, si ya se está en España, solicitar la tarjeta correspondiente. En ambos casos la documentación debe estar completa y vigente.',
			},
			{
				question: '¿Qué pasa si se deniega la solicitud?',
				answer:
					'Cabe reclamación administrativa y, después, la vía judicial. Lo más eficaz es corregir la causa de la denegación, que suele ser documentación incompleta o falta de prueba del vínculo.',
			},
		],
		relatedServices: [
			{ path: '/nacionalidad-extranjeria', label: 'extranjería y nacionalidad' },
			{ path: '/recursos-administrativos', label: 'recurso frente a la denegación' },
			{ path: '/blog/arraigo-social-laboral-familiar', label: 'otras vías de regularización' },
		],
	},
	{
		slug: 'prestacion-por-hijo-a-cargo',
		title: 'Prestación por hijo a cargo: requisitos y cuantía',
		description:
			'Quién puede cobrar la asignación por hijo a cargo, los límites de ingresos, cómo se solicita, qué pasa con la discapacidad y cómo reclamarla.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '7 min',
		intro: 'La prestación por hijo a cargo es una asignación económica para familias con hijos que cumplen ciertos requisitos, especialmente cuando existe discapacidad. No es universal: depende de los ingresos y de la situación del menor. Conocer los límites evita solicitudes denegadas y prestaciones sin reclamar.',
		sections: [
			{
				heading: 'Qué es la prestación por hijo a cargo',
				paragraphs: [
					'Es una asignación económica de la Seguridad Social por cada hijo o menor acogido que cumpla los requisitos. Su importe y su acceso dependen de la edad, de la discapacidad y de los ingresos de la unidad familiar.',
					'A diferencia de otras prestaciones, no exige haber cotizado: es una prestación familiar. Eso sí, hay que acreditar la situación familiar y los recursos.',
				],
			},
			{
				heading: 'Requisitos y límites de ingresos',
				paragraphs: [
					'Se exige residir en España, tener a cargo al menor y no superar los límites de ingresos que fija la normativa, que varían según el número de hijos y la situación de discapacidad. Cuanto mayor es la discapacidad, más amplios son los límites.',
					'Los ingresos se computan por la unidad familiar y con reglas propias. Un cálculo incorrecto o la omisión de alguna renta puede dar lugar a una denegación, pero también a tener que devolver cantidades cobradas de más.',
				],
			},
			{
				heading: 'Cuantía y supuestos con discapacidad',
				paragraphs: [
					'La cuantía de la asignación depende de la edad del menor y, sobre todo, del grado de discapacidad. En los supuestos de discapacidad grave, el importe y el apoyo económico son significativamente mayores.',
					'El reconocimiento de la discapacidad debe acreditarse con la resolución correspondiente. Sin ese documento, no se puede aplicar el tramo que corresponde al menor.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'La solicitud se presenta por la vía electrónica habilitada, con los datos del menor, la documentación de la unidad familiar y la acreditación de ingresos. Conviene conservar el justificante de presentación.',
					'La administración puede requerir documentación adicional o la subsanación de defectos. Contestar a esos requerimientos dentro de plazo evita que el expediente se archive.',
				],
			},
			{
				heading: 'Mantenimiento y cambios',
				paragraphs: [
					'La prestación puede mantenerse mientras se cumplan los requisitos, pero hay que comunicar los cambios de ingresos, de composición familiar o de situación del menor. No comunicarlos puede generar un cobro indebido.',
					'El paso del menor de una franja de edad a otra o la revisión del grado de discapacidad pueden modificar la cuantía. Revisar la resolución periódicamente evita sorpresas.',
				],
			},
			{
				heading: 'Denegaciones y cómo reclamar',
				paragraphs: [
					'Las denegaciones más habituales se deben a superar los límites de ingresos, a la falta de acreditación de la discapacidad o a errores documentales. Muchas se corrigen con la reclamación previa y la prueba adecuada.',
					'Si la resolución es desfavorable, cabe reclamación previa y, después, la vía judicial. Aportar los certificados de ingresos y de discapacidad actualizados es la clave para revertirla.',
				],
			},
		],
		checklist: [
			'Comprueba los límites de ingresos de tu unidad familiar.',
			'Reúne certificados de discapacidad si procede.',
			'Presenta la solicitud con toda la documentación.',
			'Contesta los requerimientos dentro de plazo.',
			'Comunica cualquier cambio de situación.',
		],
		faq: [
			{
				question: '¿Cobran la prestación por hijo a cargo todas las familias?',
				answer:
					'No es universal. Depende de los ingresos de la unidad familiar y de la situación del menor, especialmente del grado de discapacidad, que amplía los límites y la cuantía.',
			},
			{
				question: '¿Es compatible con otras ayudas?',
				answer:
					'Puede ser compatible con otras prestaciones familiares y con ayudas de las comunidades autónomas, pero conviene revisar cada caso para no duplicar conceptos ni generar un cobro indebido.',
			},
			{
				question: '¿Qué pasa si me deniegan la prestación?',
				answer:
					'Cabe reclamación previa y, después, la vía judicial. La mayoría de las denegaciones se deben a ingresos mal calculados o a documentación incompleta, y se pueden corregir con prueba.',
			},
		],
		relatedServices: [
			{ path: '/complemento-paternidad-maternidad', label: 'prestaciones familiares' },
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/recursos-administrativos', label: 'reclamación y recursos' },
		],
	},
	{
		slug: 'acoso-sexual-en-el-trabajo',
		title: 'Acoso sexual en el trabajo: cómo se denuncia y se prueba',
		description:
			'Qué es el acoso sexual laboral, cómo se denuncia ante la empresa, la Inspección y el juzgado, qué se prueba y qué protección tiene la víctima.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'El acoso sexual en el trabajo no es un problema personal: es un incumplimiento grave de la empresa y un ataque a la dignidad de la persona. La víctima tiene vías internas, administrativas y judiciales, y no puede ser despedida ni represaliada por denunciarlo. La prueba es la parte más delicada.',
		sections: [
			{
				heading: 'Qué es el acoso sexual laboral',
				paragraphs: [
					'Es cualquier comportamiento verbal, no verbal o físico de naturaleza sexual no deseado por la víctima, que crea un entorno intimidante, hostil o humillante. No hace falta que haya un intercambio de favores ni una promesa de mejora.',
					'Se distingue del acoso por razón de sexo, que se basa en la pertenencia a un sexo, y del acoso laboral o mobbing, que no tiene naturaleza sexual. Las tres figuras se protegen, pero por vías y con pruebas distintas.',
				],
			},
			{
				heading: 'Cómo se denuncia dentro de la empresa',
				paragraphs: [
					'Lo primero es dejar constancia por escrito: correos, mensajes, testigos y un relato con fechas. La empresa debe tener un protocolo de actuación y activarlo con garantías para la víctima.',
					'Si la empresa no responde o no protege a la víctima, existe responsabilidad por su parte. Documentar cada comunicación es esencial para demostrar que se puso en su conocimiento.',
				],
			},
			{
				heading: 'La Inspección de Trabajo y la vía judicial',
				paragraphs: [
					'La Inspección de Trabajo puede comprobar los hechos y sancionar a la empresa por incumplir sus obligaciones de prevención. Se puede presentar denuncia con la documentación del caso.',
					'En la vía judicial, el procedimiento laboral protege especialmente a la víctima, con inversión de la carga de la prueba en determinados extremos y garantías frente a represalias. Un despido por denunciar el acoso puede ser nulo.',
				],
			},
			{
				heading: 'Qué se prueba y cómo',
				paragraphs: [
					'Se prueban los hechos: mensajes, correos, expresiones, testigos, informes médicos y psicológicos y el relato coherente de la víctima. La declaración de la víctima, con corroboraciones, tiene un valor importante.',
					'La pericial psicológica puede acreditar el daño causado. Cuanto más concreta y fechada sea la prueba, más sólida será la reclamación y la posible indemnización.',
				],
			},
			{
				heading: 'Protección de la víctima y represalias',
				paragraphs: [
					'La víctima tiene derecho a la protección de su salud y a que se adopten medidas mientras se investiga. Un cambio de condiciones, un traslado forzoso o un despido por haber denunciado pueden impugnarse.',
					'El despido o cualquier represalia por denunciar acoso se considera nulo y permite reclamar la readmisión y los salarios de tramitación. Conviene documentar la cronología para enlazar la denuncia con la represalia.',
				],
			},
			{
				heading: 'Errores que debilitan el caso',
				paragraphs: [
					'Callar y no documentar, borrar mensajes o dejar pasar el tiempo dificultan la prueba. También debilita el caso denunciar sin concretar los hechos, las fechas y las personas implicadas.',
					'Antes de denunciar conviene ordenar la prueba, escribir un relato fechado y buscar asesoramiento. La estrategia debe proteger tanto la reclamación como la situación laboral de la víctima.',
				],
			},
		],
		checklist: [
			'Documenta hechos, fechas y personas implicadas.',
			'Guarda mensajes, correos y testigos.',
			'Activa el protocolo de la empresa por escrito.',
			'Valora denunciar ante la Inspección de Trabajo.',
			'No te calles ante represalias o amenazas.',
		],
		faq: [
			{
				question: '¿Qué diferencia hay entre acoso sexual y acoso por razón de sexo?',
				answer:
					'El acoso sexual tiene naturaleza sexual y es no deseado por la víctima. El acoso por razón de sexo se basa en la pertenencia a un sexo y no tiene por qué ser de contenido sexual. Ambos están prohibidos.',
			},
			{
				question: '¿Pueden despedirme por denunciar acoso sexual?',
				answer:
					'No. El despido o cualquier represalia por haber denunciado el acoso se considera nulo, y permite reclamar la readmisión y los salarios de tramitación.',
			},
			{
				question: '¿Qué pruebas sirven en un caso de acoso sexual?',
				answer:
					'Mensajes, correos, testigos, informes médicos y psicológicos y un relato coherente y fechado de la víctima. La pericial psicológica ayuda a acreditar el daño causado.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'defensa frente a represalias' },
			{ path: '/contratos-laborales', label: 'asesoramiento laboral' },
			{ path: '/empresas/derecho-laboral', label: 'protocolos y prevención en la empresa' },
		],
	},
	{
		slug: 'contrato-de-agencia-y-distribucion',
		title: 'Contrato de agencia y distribución: claves y diferencias',
		description:
			'Qué regula el contrato de agencia y el de distribución, sus diferencias, la indemnización por clientela y las cláusulas que conviene revisar.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '8 min',
		intro: 'Agencia y distribución se parecen en la superficie, pero son figuras jurídicas distintas con consecuencias muy diferentes al terminar la relación. Una se apoya en la ley de agencia y genera indemnización por clientela; la otra depende casi por completo de lo pactado. Confundirlas es caro.',
		sections: [
			{
				heading: 'Qué es el contrato de agencia',
				paragraphs: [
					'En el contrato de agencia, una persona se obliga de forma continuada a promover actos u operaciones de comercio por cuenta de otra, de manera independiente y a cambio de una remuneración. No es un empleado, pero actúa de forma estable y por cuenta ajena en el resultado.',
					'La ley de agencia regula sus derechos y obligaciones, incluida la indemnización por clientela al terminar el contrato en determinados supuestos. Esa protección legal es una de sus señas de identidad.',
				],
			},
			{
				heading: 'Qué es el contrato de distribución',
				paragraphs: [
					'En el contrato de distribución, el distribuidor compra los productos y los revende por cuenta propia, asumiendo el riesgo de la reventa. Actúa en nombre propio, no como intermediario, y su margen es la diferencia entre compra y venta.',
					'La figura tiene menos regulación específica: casi todo depende del contrato y del derecho común. Por eso la calidad de las cláusulas es decisiva para proteger al distribuidor.',
				],
			},
			{
				heading: 'Diferencias prácticas entre ambas',
				paragraphs: [
					'El agente actúa por cuenta del principal y no compra el producto; el distribuidor lo compra y lo revende asumiendo el riesgo. El agente suele generar indemnización por clientela; el distribuidor, en general, no tiene ese derecho legal, salvo que se pacte.',
					'Esta diferencia marca la salida: terminar una agencia sin respetar el preaviso o la indemnización puede dar lugar a una reclamación importante. En la distribución, la protección está en lo que se haya firmado.',
				],
			},
			{
				heading: 'La indemnización por clientela',
				paragraphs: [
					'Cuando el agente ha captado clientes o los ha incrementado de forma notable, la ley puede reconocerle una indemnización por clientela al terminar el contrato, si se dan los requisitos y existe un perjuicio real.',
					'El importe tiene límites y depende de las circunstancias. Para reclamarla hay que acreditar la cartera de clientes aportada y el beneficio que sigue obteniendo el principal.',
				],
			},
			{
				heading: 'Cláusulas que conviene revisar',
				paragraphs: [
					'La duración, el preaviso, la zona o la clientela asignada, la exclusividad, las metas mínimas y la no competencia posterior son los puntos críticos. También lo son las causas de terminación y la liquidación final.',
					'Una cláusula de no competencia posterior a la terminación exige una compensación adecuada. Sin ella, puede no ser exigible. Revísala con cuidado antes de firmar.',
				],
			},
			{
				heading: 'Cómo terminar la relación sin pleito',
				paragraphs: [
					'Respetar el preaviso, documentar las entregas y las cuentas y liquidar las comisiones pendientes evita muchos conflictos. Si se pacta una indemnización, conviene fijar el modo de cálculo y el plazo de pago.',
					'Antes de firmar la terminación, revisa si te corresponde indemnización por clientela, comisiones pendientes o cualquier compensación pactada. Un finiquito firmado de prisa puede cerrar esas reclamaciones.',
				],
			},
		],
		checklist: [
			'Identifica si actúas como agente o distribuidor.',
			'Revisa duración, preaviso y exclusividad.',
			'Documenta la clientela aportada.',
			'Comprueba comisiones y liquidación pendientes.',
			'No firmes el finiquito sin revisar indemnizaciones.',
		],
		faq: [
			{
				question: '¿Cuál es la diferencia principal entre agencia y distribución?',
				answer:
					'El agente promueve operaciones por cuenta del principal y no compra el producto; el distribuidor compra y revende por cuenta propia, asumiendo el riesgo. De ahí salen derechos distintos al terminar.',
			},
			{
				question: '¿Cuándo se cobra la indemnización por clientela?',
				answer:
					'Se puede reconocer al agente cuando ha captado o incrementado de forma notable la clientela y la terminación le causa un perjuicio, siempre que se cumplan los requisitos legales.',
			},
			{
				question: '¿Una cláusula de no competencia posterior es válida?',
				answer:
					'Puede serlo si está bien delimitada y va acompañada de una compensación adecuada. Sin compensación, su exigibilidad es discutible, así que conviene revisarla antes de firmar.',
			},
		],
		relatedServices: [
			{ path: '/empresas/contratos-mercantiles', label: 'contratos mercantiles' },
			{ path: '/empresas', label: 'servicios jurídicos para empresas' },
			{ path: '/compraventas-empresas', label: 'negocios y carteras de clientes' },
		],
	},
	{
		slug: 'licencia-de-primera-ocupacion',
		title: 'Licencia de primera ocupación: qué es y cuándo se exige',
		description:
			'Qué es la licencia de primera ocupación, cuándo la exige el ayuntamiento, qué documentación hace falta y qué pasa si se ocupa sin tenerla.',
		date: '2026-10-06',
		category: 'Urbanismo',
		readTime: '7 min',
		intro: 'Terminar la obra no basta para usar legalmente la vivienda. La licencia de primera ocupación acredita que lo construido se ajusta a lo autorizado y que el inmueble es apto para su uso. Ocupar sin ella complica la contratación de suministros, la venta y la hipoteca.',
		sections: [
			{
				heading: 'Qué es la licencia de primera ocupación',
				paragraphs: [
					'Es la autorización municipal que certifica que la edificación se ha ejecutado conforme a la licencia concedida y que reúne las condiciones para ser ocupada. Con ella se pasa de la obra terminada al uso legal de lo construido.',
					'No es lo mismo que la licencia de obra: la de obra autoriza construir; la de primera ocupación autoriza usar lo construido. Puede haber terminado la obra y no obtener la de ocupación si algo no se ajusta a lo aprobado.',
				],
			},
			{
				heading: 'Cuándo se exige',
				paragraphs: [
					'Se exige para dar de alta los suministros y para inscribir y contratar el inmueble en condiciones normales. En la práctica, sin ella se bloquean la venta, la hipoteca y, muchas veces, los servicios básicos.',
					'La exigencia se centra en las obras nuevas y en las rehabilitaciones que cambian el uso, aunque la ordenanza local puede extenderla a otros supuestos. Conviene comprobar la normativa municipal antes de iniciar el trámite.',
				],
			},
			{
				heading: 'Documentación necesaria',
				paragraphs: [
					'Suele requerirse el certificado final de obra, los planos de lo ejecutado, la documentación del seguro decenal cuando procede, los certificados de eficiencia energética y de instalaciones, y el justificante del pago de tasas.',
					'La lista exacta depende del ayuntamiento y del tipo de obra. Presentar la documentación completa y actualizada evita requerimientos que retrasan meses la autorización.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'La solicitud se presenta en el ayuntamiento con la documentación técnica y la tasa correspondiente. Los servicios técnicos comprueban que lo construido coincide con lo autorizado y, si hay diferencias, pueden requerir su corrección.',
					'Si se detectan obras no autorizadas, el ayuntamiento puede exigir su regularización antes de conceder la primera ocupación. Ese es el punto donde un defecto pequeño se convierte en un expediente largo.',
				],
			},
			{
				heading: 'Qué pasa si se ocupa sin licencia',
				paragraphs: [
					'Ocupar una vivienda sin licencia de primera ocupación puede dar lugar a sanciones y a bloqueos administrativos. Además, en una compraventa el comprador puede exigirla, y su ausencia afecta al valor y a la financiación.',
					'La comunidad de propietarios y el ayuntamiento pueden requerir la regularización. Lo más eficaz es tramitarla antes de ocupar o, si ya se ocupó, poner la situación en regla cuanto antes.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'El error más común es dar de alta los suministros con documentación provisional y olvidar el trámite municipal. También lo es terminar la obra con modificaciones no incluidas en la licencia.',
					'Antes de vender o hipotecar, conviene comprobar que la licencia existe y que coincide con lo construido. Un certificado final de obra que no cuadra con lo autorizado retrasa toda la operación.',
				],
			},
		],
		checklist: [
			'Comprueba la ordenanza y el tipo de obra.',
			'Reúne certificado final de obra y planos.',
			'Adjunta certificados energéticos y de instalaciones.',
			'Presenta la solicitud con la tasa.',
			'No ocupes ni vendas sin la licencia.',
		],
		faq: [
			{
				question: '¿La licencia de primera ocupación es lo mismo que la de obra?',
				answer:
					'No. La de obra autoriza construir; la de primera ocupación certifica que lo construido se ajusta a lo autorizado y puede ser ocupado. Se tramitan en momentos distintos.',
			},
			{
				question: '¿Puedo vender una vivienda sin licencia de primera ocupación?',
				answer:
					'En la práctica la ausencia de licencia complica la venta y la financiación, y el comprador puede exigirla. Lo habitual es regularizar la situación antes de la operación.',
			},
			{
				question: '¿Qué documentación se exige para la licencia?',
				answer:
					'Normalmente el certificado final de obra, los planos de lo ejecutado, los certificados de instalaciones y eficiencia energética y el pago de tasas. La lista exacta depende del ayuntamiento.',
			},
		],
		relatedServices: [
			{ path: '/urbanismo', label: 'licencias y urbanismo' },
			{ path: '/recursos-administrativos', label: 'recurso frente a la denegación' },
			{ path: '/derecho-civil', label: 'compraventa e inmuebles' },
		],
	},
	{
		slug: 'indemnizacion-por-fallecimiento-accidente',
		title: 'Indemnización por fallecimiento en accidente de tráfico',
		description:
			'Cómo se indemniza a los familiares de una víctima de accidente de tráfico, quién puede reclamar, qué daños se incluyen y cómo se calcula.',
		date: '2026-10-06',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
		intro: 'Cuando un accidente causa la muerte, la indemnización no se limita a los gastos: compensa el daño sufrido por los familiares que dependían de la víctima. El baremo establece quién puede reclamar y cuánto, en función del parentesco y la convivencia. Reclamar bien evita perder derechos en un momento muy difícil.',
		sections: [
			{
				heading: 'Quién puede reclamar',
				paragraphs: [
					'El baremo llama a reclamar, por orden y según las circunstancias, al cónyuge o pareja, a los hijos, a los padres y a otros familiares que convivían o dependían de la víctima. No es una herencia: es una indemnización por el daño propio de cada perjudicado.',
					'La convivencia y la dependencia económica condicionan el acceso y el importe. Documentarlas con el padrón, la declaración de la renta y los justificantes de gastos es esencial.',
				],
			},
			{
				heading: 'Qué daños se indemnizan',
				paragraphs: [
					'Se indemniza el perjuicio personal básico por el fallecimiento y, además, los perjuicios particulares: el daño moral de cada familiar y el perjuicio económico para quien dependía de los ingresos de la víctima. También los gastos de sepelio y los derivados del siniestro.',
					'Cuando la víctima estaba trabajando, el denominado lucro cesante se cuantifica según sus ingresos y el tiempo previsible de dependencia. Es uno de los conceptos donde más se discute con la aseguradora.',
				],
			},
			{
				heading: 'Cómo se calcula',
				paragraphs: [
					'El baremo fija cantidades orientativas por el daño básico y las ajusta según el perjuicio particular, el número de perjudicados y las circunstancias económicas. A partir de ahí se construye el cálculo, que conviene detallar por conceptos.',
					'No aceptar la primera cifra global sin desglose es clave. Una reclamación bien cuantificada parte de los datos de la víctima y de cada familiar, no de una estimación al aire.',
				],
			},
			{
				heading: 'Plazos y reclamación al seguro',
				paragraphs: [
					'La reclamación se presenta al seguro del responsable y, si no hay acuerdo, ante el juzgado. El plazo varía según el tipo de acción y debe comprobarse cuanto antes, porque de ello depende no perder el derecho.',
					'La oferta del seguro no cierra la reclamación mientras no se acepte. Presentar la propuesta por escrito con el cálculo detallado y los documentos que la respaldan mejora la negociación.',
				],
			},
			{
				heading: 'Gastos y perjuicios añadidos',
				paragraphs: [
					'Además de la indemnización por el fallecimiento, se reclaman los gastos de sepelio, los desplazamientos, el tratamiento psicológico de los familiares y los gastos derivados de la pérdida de ingresos del hogar.',
					'Si el fallecimiento se produjo en un accidente laboral o in itinere, pueden abrirse otras vías frente a la empresa o la mutua. Conviene revisar todas las que concurran para no dejar indemnizaciones sin reclamar.',
				],
			},
			{
				heading: 'Errores que reducen la indemnización',
				paragraphs: [
					'Firmar un finiquito antes de conocer el alcance de los daños, aceptar la oferta sin desglose o no acreditar la dependencia económica son los errores más habituales. También lo es dejar pasar el plazo de reclamación.',
					'Lo correcto es ordenar la documentación de todos los perjudicados, calcular cada concepto y presentar una reclamación detallada antes de aceptar cualquier cantidad. En un caso así, la diferencia puede ser muy importante.',
				],
			},
		],
		checklist: [
			'Identifica a todos los perjudicados por el fallecimiento.',
			'Acredita la convivencia y la dependencia económica.',
			'Reúne documentación de ingresos de la víctima.',
			'Detalla los gastos de sepelio y tratamiento.',
			'No firmes sin una propuesta desglosada.',
		],
		faq: [
			{
				question: '¿Quién puede reclamar por un fallecimiento en accidente de tráfico?',
				answer:
					'El cónyuge o pareja, los hijos, los padres y otros familiares que dependían o convivían con la víctima, según el baremo. Cada perjudicado reclama su propio daño, no una herencia.',
			},
			{
				question: '¿Qué gastos se pueden reclamar además de la indemnización?',
				answer:
					'Los gastos de sepelio, los desplazamientos, el tratamiento psicológico de los familiares y los perjuicios económicos por la pérdida de ingresos del hogar, entre otros.',
			},
			{
				question: '¿Tengo que aceptar la oferta del seguro?',
				answer:
					'No. La oferta no cierra la reclamación mientras no se acepte. Conviene exigir un desglose por conceptos y comprobar que cubre todos los daños antes de firmar nada.',
			},
		],
		relatedServices: [
			{ path: '/indemnizaciones-trafico', label: 'indemnización por accidente de tráfico' },
			{ path: '/responsabilidad-civil', label: 'responsabilidad civil' },
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
		],
	},
];
