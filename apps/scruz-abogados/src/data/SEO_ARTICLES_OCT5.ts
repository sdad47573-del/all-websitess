/**
 * Duodécimo lote de contenido nuevo (oct 2026). Igual que los lotes anteriores
 * (`SEO_ARTICLES_SEO.ts` y `SEO_ARTICLES_OCT*.ts`), nace del exporte de Google
 * Search Console: consultas informativas con impresiones y sin página dedicada.
 * Este lote cubre prisión provisional, despido disciplinario, fraude de ley en
 * contratos temporales, medianería y lindes, arrendamiento de temporada,
 * prestación por cuidado de menor con enfermedad grave, nacionalidad de los
 * hijos nacidos en España y seguro de decesos. Ninguna crea categoría nueva.
 *
 * Cada artículo declara sus tres `relatedServices` para alimentar el enlazado
 * bidireccional de `blogInternalLinks.ts`: la entrada derivada hace que la
 * página de servicio enlace de vuelta a la guía, así que ninguna queda huérfana.
 * Reglas de forma: title ≤ 62, description ≤ 162 e intro > 150 caracteres.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_OCT5: SeoArticle[] = [
	{
		slug: 'prision-provisional',
		title: 'Prisión provisional: cuándo se adopta y cómo se recurre',
		description:
			'Qué es la prisión provisional, cuándo la acuerda el juez, qué requisitos exige, cómo se recurre y qué papel tiene la fianza para evitarla.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'La prisión provisional es una medida cautelar, no una pena: se adopta durante el proceso y debe estar justificada. Entender sus requisitos y sus alternativas evita que se prolongue sin motivo. La defensa juega aquí un papel decisivo, a menudo en las primeras horas.',
		sections: [
			{
				heading: 'Qué es y qué no es',
				paragraphs: [
					'Es la privación de libertad acordada por el juez durante el proceso penal para asegurar sus fines. No es un anticipo de condena: la persona está investigada y se presume inocente hasta que exista sentencia firme.',
					'Su carácter es excepcional y debe adoptarse con motivación. Si no concurren los requisitos legales, la medida puede revocarse o sustituirse por otra menos gravosa.',
				],
			},
			{
				heading: 'Cuándo se puede acordar',
				paragraphs: [
					'La ley exige que existan indicios de un hecho delictivo grave, que la pena prevista supere ciertos límites y que concurra alguno de los fines: evitar la fuga, la destrucción de pruebas o la reiteración delictiva.',
					'No basta con la gravedad del hecho: el juez debe valorar las circunstancias personales, la arraigo, los antecedentes y el riesgo real. Una motivación genérica es impugnable.',
				],
			},
			{
				heading: 'Alternativas a la prisión',
				paragraphs: [
					'La ley prefiere medidas menos gravosas cuando son suficientes: comparecencia periódica, retirada del pasaporte, prohibición de salida, fianza o arresto domiciliario. La prisión es la última opción.',
					'La fianza es la vía habitual para evitarla cuando el riesgo se puede neutralizar económicamente. Proponer una alternativa concreta y acreditada mejora las opciones de la defensa.',
				],
			},
			{
				heading: 'Duración y prórroga',
				paragraphs: [
					'La prisión provisional tiene plazos máximos según la pena y la fase del proceso. Pasados esos plazos, debe levantarse o prorrogarse con una resolución motivada.',
					'Un proceso que se alarga puede hacer que la medida se mantenga más de lo razonable. Controlar los plazos y reclamar cuando se superan es parte esencial de la defensa.',
				],
			},
			{
				heading: 'Cómo se recurre',
				paragraphs: [
					'El auto que acuerda la prisión se puede recurrir en reforma y apelación, y pedir su revocación cuando cambian las circunstancias. También cabe solicitar la libertad con medidas alternativas.',
					'Aportar arraigo, domicilio, trabajo, vínculos familiares y comparecencias previas son argumentos que reducen el riesgo de fuga. La prueba de esas circunstancias es la clave.',
				],
			},
			{
				heading: 'Qué puede hacer la familia',
				paragraphs: [
					'La familia puede preparar la documentación de arraigo y contactar con un abogado cuanto antes. También puede interesarse por la prestación de la fianza si el juez la fija.',
					'Actuar rápido en las primeras horas evita que la medida se consolide. Cuanto antes se propongan alternativas documentadas, más margen tiene la defensa.',
				],
			},
		],
		checklist: [
			'Reúne pruebas de arraigo, domicilio y trabajo.',
			'Pide copia del auto y su motivación.',
			'Valora una alternativa con fianza.',
			'Controla los plazos máximos.',
			'Recurre en cuanto cambien las circunstancias.',
		],
		faq: [
			{
				question: '¿La prisión provisional es lo mismo que una condena?',
				answer:
					'No. Es una medida cautelar durante el proceso y no implica culpabilidad. La persona está investigada y se presume inocente hasta la sentencia firme.',
			},
			{
				question: '¿Se puede evitar la prisión provisional con una fianza?',
				answer:
					'En determinados supuestos sí. La fianza es una alternativa cuando el riesgo se puede neutralizar económicamente. La defensa propone medidas concretas y documentadas.',
			},
			{
				question: '¿Cuánto puede durar la prisión provisional?',
				answer:
					'Tiene plazos máximos según la pena y la fase del proceso. Si se superan, debe alzarse o prorrogarse con resolución motivada, y la defensa puede reclamar.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/blog/derechos-del-detenido', label: 'derechos desde la detención' },
			{ path: '/derecho-civil', label: 'responsabilidad civil' },
		],
	},
	{
		slug: 'despido-disciplinario',
		title: 'Despido disciplinario: causas y cómo impugnarlo',
		description:
			'Qué es el despido disciplinario, qué causas lo justifican, cómo debe comunicarse la carta y qué plazo tienes para impugnarlo.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'El despido disciplinario se basa en un incumplimiento grave y culpable del trabajador. Es el despido con la carta más delicada: si no se acredita la causa, la forma falla o la sanción es desproporcionada, puede declararse improcedente o nulo. El plazo para impugnarlo es corto.',
		sections: [
			{
				heading: 'Qué es el despido disciplinario',
				paragraphs: [
					'Es la extinción del contrato por decisión de la empresa fundada en un incumplimiento grave y culpable del trabajador. No es un despido por causas económicas u organizativas, que sigue otro cauce.',
					'La causa debe existir y acreditarse. La empresa no puede despedir disciplinariamente sin hechos concretos: el despido sin causa es improcedente.',
				],
			},
			{
				heading: 'Causas típicas',
				paragraphs: [
					'El Estatuto de los Trabajadores recoge supuestos como las faltas repetidas de asistencia, la indisciplina, la desobediencia, las ofensas, la transgresión de la buena fe o la disminución del rendimiento. Cada caso exige valorar la gravedad y la proporcionalidad.',
					'El convenio colectivo concreta y gradúa las faltas. La calificación depende de la norma aplicable y de las circunstancias, no solo de la etiqueta que ponga la empresa.',
				],
			},
			{
				heading: 'La carta de despido',
				paragraphs: [
					'La comunicación debe ser escrita, con los hechos y la fecha en que se produjeron, para que el trabajador pueda defenderse. Una carta vaga o sin fechas dificulta la defensa de la empresa y favorece la impugnación.',
					'Los defectos de forma pueden llevar a la improcedencia, aunque exista causa. Por eso la redacción de la carta y la prueba de los hechos son decisivas.',
				],
			},
			{
				heading: 'El plazo de 20 días y la conciliación',
				paragraphs: [
					'El trabajador tiene un plazo de veinte días hábiles para impugnar el despido, previa papeleta de conciliación. Es un plazo de caducidad: si se deja pasar, el despido se consolida.',
					'La conciliación es obligatoria y ofrece una oportunidad de acuerdo. Si no hay avenencia, se presenta la demanda ante el Juzgado de lo Social.',
				],
			},
			{
				heading: 'Indemnización y readmisión',
				paragraphs: [
					'Si el despido se declara improcedente, la empresa puede optar entre readmitir o indemnizar. Si se declara nulo, procede la readmisión y los salarios de tramitación.',
					'La nulidad se reserva para supuestos de discriminación o vulneración de derechos fundamentales, como represalias por reclamar. Documentar esas circunstancias es clave.',
				],
			},
			{
				heading: 'Errores que debilitan la defensa',
				paragraphs: [
					'Firmar la carta como “no conforme” sin leerla, no conservar la comunicación, borrar mensajes o dejar pasar el plazo son errores frecuentes. También lo es asistir a la conciliación sin preparar la prueba.',
					'Ante un despido disciplinario conviene reunir contratos, nóminas, partes, correos y testigos, y consultar dentro de plazo. La prueba de los hechos decide el resultado.',
				],
			},
		],
		checklist: [
			'Guarda la carta de despido y su fecha.',
			'Anota el plazo de 20 días hábiles.',
			'Reúne prueba de los hechos y de tu versión.',
			'Presenta la papeleta de conciliación.',
			'Valora si hubo represalia o discriminación.',
		],
		faq: [
			{
				question: '¿Qué diferencia hay con el despido objetivo?',
				answer:
					'El disciplinario se basa en un incumplimiento grave y culpable del trabajador; el objetivo, en causas económicas, técnicas, organizativas o de producción. La causa y la indemnización son distintas.',
			},
			{
				question: '¿Cuánto tiempo tengo para impugnar un despido disciplinario?',
				answer:
					'Veinte días hábiles desde la fecha del despido, previa papeleta de conciliación. Es un plazo de caducidad y no se puede recuperar si se deja pasar.',
			},
			{
				question: '¿Qué pasa si la carta no concreta los hechos?',
				answer:
					'Los defectos de forma pueden llevar a declarar el despido improcedente aunque exista causa. La carta debe describir los hechos y las fechas para permitir la defensa.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'impugnación de despidos' },
			{ path: '/contratos-laborales', label: 'asesoramiento laboral' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'fraude-de-ley-contratos-temporales',
		title: 'Fraude de ley en contratos temporales: cómo reclamar',
		description:
			'Cómo detectar el fraude de ley en los contratos temporales, qué consecuencias tiene, cómo se reclama y qué indemnización puede corresponder.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'Encadenar contratos temporales para cubrir una necesidad permanente es fraude de ley. Cuando se acredita, la relación puede considerarse indefinida, con las consecuencias que eso tiene al terminar. La clave está en la prueba de la realidad del puesto y del encadenamiento.',
	sections: [
		{
			heading: 'Qué es el fraude de ley en la contratación',
			paragraphs: [
				'Se produce cuando se usa una modalidad contractual temporal para cubrir una necesidad permanente de la empresa, o cuando se encadenan contratos sin causa real. La forma temporal no convierte en temporal lo que en realidad es un puesto estable.',
				'La ley limita el encadenamiento de contratos por obra o servicio y por circunstancias de la producción. Superados esos límites, la relación puede considerarse indefinida.',
			],
		},
		{
			heading: 'Señales que suelen aparecer',
			paragraphs: [
				'Cadenas de contratos temporales sucediéndose, siempre en el mismo puesto y con las mismas funciones; contratos por obra que no identifican una obra concreta; o llamamientos por temporadas que en realidad son continuos.',
				'La realidad del trabajo manda sobre el nombre del contrato. Revisar las funciones, las fechas y las interrupciones permite detectar si existía una necesidad permanente.',
			],
		},
		{
			heading: 'Consecuencias del fraude',
			paragraphs: [
				'La principal es la consideración de la relación como indefinida. Al cesar, el trabajador puede reclamar la improcedencia del despido y la indemnización correspondiente a un indefinido.',
				'Además, la empresa puede ser sancionada administrativamente por el uso fraudulento de la contratación temporal. Esa actuación puede tramitarse ante la Inspección de Trabajo.',
			],
		},
		{
			heading: 'Cómo se prueba',
			paragraphs: [
				'Se prueba con los propios contratos, las nóminas, los cuadrantes, los correos y los testigos. La continuidad en el mismo puesto y la ausencia de la causa invocada son el núcleo del caso.',
				'El informe de vida laboral y las comunicaciones de la empresa ayudan a reconstruir el encadenamiento. Cuanto más larga y continua sea la cadena, más sólida es la reclamación.',
			],
		},
		{
			heading: 'Cómo se reclama',
			paragraphs: [
				'Si la relación sigue viva, se puede reclamar el reconocimiento de la condición de indefinido. Si ya ha terminado, se impugna el cese como despido improcedente, previa conciliación.',
				'En ambos casos, el plazo y la vía son los del procedimiento laboral. Presentar la reclamación a tiempo y con prueba ordenada es esencial.',
			],
		},
		{
			heading: 'Errores que conviene evitar',
			paragraphs: [
				'Firmar finiquitos sin revisar, no conservar los contratos o dejar pasar los plazos son errores que dificultan la reclamación. También lo es no documentar las funciones realmente desempeñadas.',
				'Antes de reclamar conviene reunir todos los contratos y nóminas, ordenar el encadenamiento y precisar qué causa se invocaba y por qué no era real.',
			],
		},
		],
		checklist: [
			'Reúne todos los contratos y nóminas.',
			'Comprueba el encadenamiento y las interrupciones.',
			'Documenta las funciones que desempeñabas.',
			'Revisa la causa invocada en cada contrato.',
			'Reclama dentro de plazo y con conciliación previa.',
		],
		faq: [
			{
				question: '¿Cuándo se considera que hay fraude de ley?',
				answer:
					'Cuando se usa un contrato temporal para cubrir una necesidad permanente o se encadenan contratos sin causa real, superando los límites legales. Entonces la relación puede considerarse indefinida.',
			},
			{
				question: '¿Qué puedo reclamar si me han encadenado contratos?',
				answer:
					'El reconocimiento de la relación como indefinida y, si ya se ha producido el cese, la improcedencia del despido con la indemnización de un indefinido.',
			},
			{
				question: '¿Sirve la Inspección de Trabajo?',
				answer:
					'Sí. Puede comprobar el uso fraudulento de la contratación temporal y sancionar a la empresa, además de la reclamación judicial que pueda plantear el trabajador.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'contratos y modalidades' },
			{ path: '/despidos', label: 'impugnación del cese' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'medianeria-y-lindes',
		title: 'Medianería y lindes: conflictos entre fincas vecinas',
		description:
			'Qué es la medianería y cómo se resuelven los conflictos de lindes entre fincas vecinas: prueba, deslinde, cerramientos y reparaciones.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'Discutir dónde acaba una finca y empieza la vecina es tan antiguo como la propiedad. La medianería y los lindes generan pleitos porque casi nunca hay papeles claros. Los títulos, el catastro y los planos técnicos son lo que permite fijar la línea y repartir costes.',
		sections: [
			{
				heading: 'Qué es la medianería',
				paragraphs: [
					'La medianería es la pared o el elemento divisorio que pertenece en común a dos fincas y que sirve de separación. Se presume medianera la pared que divide dos edificios hasta que se prueba lo contrario.',
					'La medianería impone derechos y deberes: cada propietario puede usar el muro dentro de ciertos límites y debe contribuir a los gastos de conservación y reparación en la proporción que corresponda.',
				],
			},
			{
				heading: 'Cómo se prueban la medianería y los lindes',
				paragraphs: [
					'Se prueban con los títulos de propiedad, las escrituras, el catastro, los planos y las mediciones técnicas. Los signos externos, como el modo de construir o las señales en la finca, también se valoran.',
					'Un informe topográfico que fije las coordenadas y la superficie real es la prueba más objetiva. Las mediciones sobre el terreno permiten concretar la discordancia entre lo inscrito y lo poseído.',
				],
			},
			{
				heading: 'El deslinde entre fincas',
				paragraphs: [
					'Cuando los linderos no están claros, se puede pedir el deslinde para fijar la línea divisoria. Puede hacerse por acuerdo entre los propietarios o mediante un procedimiento judicial.',
					'El deslinde se apoya en los títulos y, cuando no bastan, en la posesión y en la prueba técnica. La operación concluye con la señalización de la línea y, si procede, con su inscripción.',
				],
			},
			{
				heading: 'Cerramientos y obras en el linde',
				paragraphs: [
					'Cerrar una finca no es libre: hay que respetar las distancias, las servidumbres y las reglas municipales. Una obra en el linde que invade la finca vecina o que causa daños puede impugnarse.',
					'Si el cerramiento se apoya en la pared medianera o altera el uso común, es necesaria la conformidad del vecino o, en su defecto, una resolución que lo ampare.',
				],
			},
			{
				heading: 'Gastos de reparación',
				paragraphs: [
					'Los gastos de conservación y reparación de la pared medianera se reparten conforme a las reglas aplicables. Quien quiere elevar el muro o hacer una obra que beneficia solo a una parte asume, con matices, el coste correspondiente.',
					'Reclamar la parte de gastos exige acreditar que la pared es medianera y que la reparación fue necesaria. Las facturas y el informe técnico respaldan la reclamación.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Alterar el linde por cuenta propia, construir sin respetar distancias o dar por hecho que la pared es propia sin prueba son errores que agravan el conflicto. También lo es no documentar el estado antes de una obra.',
					'Antes de actuar conviene revisar títulos, catastro y planos, y documentar con un técnico la situación real. La prueba objetiva es lo que evita que el pleito se convierta en un pulso de vecinos.',
				],
			},
		],
		checklist: [
			'Reúne títulos, escrituras y catastro.',
			'Encarga una medición técnica de los lindes.',
			'Documenta el estado antes de cualquier obra.',
			'Respeta distancias y servidumbres.',
			'Valora el deslinde si el linde no está claro.',
		],
		faq: [
			{
				question: '¿Cuándo una pared se presume medianera?',
				answer:
					'Se presume medianera la pared que divide dos edificios hasta que se demuestre lo contrario. Esa presunción se puede destruir con el título, el catastro o una prueba técnica.',
			},
			{
				question: '¿Cómo se fija el linde entre dos fincas?',
				answer:
					'Con los títulos y, si no bastan, con el deslinde, por acuerdo o por vía judicial, apoyado en la posesión y en una medición técnica.',
			},
			{
				question: '¿Quién paga la reparación de la pared medianera?',
				answer:
					'Los gastos de conservación y reparación se reparten conforme a las reglas aplicables. Quien hace una obra que beneficia solo a una parte asume, con matices, su coste.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'derechos reales y fincas' },
			{ path: '/responsabilidad-civil', label: 'responsabilidad por daños' },
			{ path: '/incumplimiento-contrato', label: 'conflictos entre propietarios' },
		],
	},
	{
		slug: 'arrendamiento-de-temporada',
		title: 'Arrendamiento de temporada: qué es y sus diferencias',
		description:
			'Qué es el arrendamiento de temporada, en qué se diferencia del de vivienda habitual, cómo se regula y qué límites y riesgos tiene.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'Alquilar por unos meses no siempre es un alquiler de temporada. Si el inquilino fija allí su residencia habitual, se aplica la Ley de Arrendamientos Urbanos, con su prórroga forzosa y sus protecciones. La diferencia cambia por completo la duración y la salida del contrato.',
	sections: [
		{
			heading: 'Qué es el arrendamiento de temporada',
			paragraphs: [
				'Es el arrendamiento de una vivienda para un uso distinto del de residencia permanente: estudios, trabajo temporal, vacaciones o una necesidad concreta y limitada en el tiempo. Su nota es la temporalidad real de la necesidad.',
				'No basta con firmar un contrato corto: si el inquilino vive allí de forma estable, el contrato se considera de vivienda habitual, con independencia de su nombre.',
			],
		},
		{
			heading: 'Diferencias con el alquiler de vivienda',
				paragraphs: [
					'El arrendamiento de vivienda habitual está protegido con prórroga forzosa y reglas sobre la renta y la duración; el de temporada se rige, en lo no pactado, por la voluntad de las partes y el Código Civil, y no tiene esa prórroga.',
					'La duración es la diferencia práctica más importante: en la vivienda, el inquilino puede permanecer más allá del plazo inicial; en la temporada, el contrato termina cuando concluye la necesidad que lo justificó.',
				],
			},
			{
				heading: 'Cómo se regula y qué se pacta',
				paragraphs: [
					'En lo no previsto, rigen el pacto y las normas generales. Conviene concretar la duración, la renta, la fianza, los suministros y qué ocurre si la necesidad se prolonga.',
					'La fianza y las garantías adicionales se pactan con más libertad. Documentar el estado del inmueble al entrar y al salir evita conflictos sobre los desperfectos.',
				],
			},
			{
				heading: 'Riesgos de usarlo mal',
				paragraphs: [
					'Utilizar la temporada para esquivar la protección de la vivienda habitual es una práctica que los tribunales corrigen: si el uso real es residencial, se aplican las normas de vivienda.',
					'También existe el riesgo de confundirlo con el alquiler turístico, que tiene su propia regulación autonómica y municipal. Son tres figuras distintas y mezclarlas genera sanciones.',
				],
			},
			{
				heading: 'Cómo reclamar si hay conflicto',
				paragraphs: [
					'Si el arrendador pretende terminar antes de tiempo o el inquilino se queda más allá de lo pactado, hay que revisar la naturaleza real del contrato. De ella depende si hay prórroga o no.',
					'La prueba del uso —empadronamiento, residencia, servicios— determina la calificación. Con esa prueba se puede reclamar la duración que corresponda y los daños.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Firmar un contrato de temporada sabiendo que será la vivienda habitual, no documentar el motivo de la temporalidad o mezclar suministros y fianza sin pacto son errores frecuentes.',
					'Antes de firmar conviene dejar claro por qué es temporal, cuánto durará y qué pasa al terminar. Lo que no se pacta se acaba litigando, y la calificación la decide el uso real.',
				],
			},
		],
		checklist: [
			'Deja por escrito el motivo de la temporalidad.',
			'Concreta duración, renta y fianza.',
			'Documenta el estado del inmueble al entrar.',
			'Revisa si el uso real es residencial.',
			'No lo confundas con el alquiler turístico.',
		],
		faq: [
			{
				question: '¿Qué diferencia hay entre temporada y vivienda habitual?',
				answer:
					'La vivienda habitual está protegida con prórroga forzosa y reglas sobre la renta y la duración; la temporada responde a una necesidad limitada en el tiempo y no tiene esa prórroga.',
			},
			{
				question: '¿Basta con firmar un contrato corto para que sea de temporada?',
				answer:
					'No. Lo que decide es el uso real: si el inquilino fija allí su residencia habitual, se aplican las normas de vivienda con independencia del nombre del contrato.',
			},
			{
				question: '¿Es lo mismo que un alquiler turístico?',
				answer:
					'No. El alquiler turístico tiene su propia regulación autonómica y municipal, con registro y límites. Son figuras distintas y mezclarlas puede generar sanciones.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'arrendamientos y contratos' },
			{ path: '/alquiler-viviendas', label: 'alquiler de viviendas' },
			{ path: '/blog/zonas-tensionadas-alquiler', label: 'límites al alquiler' },
		],
	},
	{
		slug: 'prestacion-por-cuidado-de-menor-enfermo',
		title: 'Cuidado de menor con enfermedad grave: prestación',
		description:
			'Quién puede cobrar la prestación por cuidado de menor con enfermedad grave, qué requisitos exige, cómo se solicita y cómo reclamarla.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '7 min',
		intro: 'Cuando un menor enferma gravemente, la ley reconoce una prestación para que quien lo cuida pueda reducir su jornada o dejar de trabajar. No es una ayuda automática: exige acreditar la enfermedad, el cuidado y los requisitos de cotización. Conocerlos permite no perderla por un defecto formal.',
	sections: [
		{
			heading: 'Qué es y a quién protege',
			paragraphs: [
				'Es una prestación económica que compensa la reducción de jornada o la cesación del trabajo de quien cuida de un menor afectado por una enfermedad grave. Busca que el cuidado no dependa de renunciar a todo sin red.',
				'Se dirige a los progenitores, adoptantes o acogedores que conviven y cuidan al menor. El vínculo y la convivencia deben acreditarse con el libro de familia y el certificado de convivencia.',
			],
		},
		{
			heading: 'Requisitos',
			paragraphs: [
				'El menor debe estar afectado por una de las enfermedades incluidas en el listado legal y requerir cuidado directo, continuo y permanente. La acreditación se hace con el informe médico correspondiente.',
				'Además, quien solicita debe cumplir los requisitos de cotización y no superar los límites de rentas, en su caso, y estar de alta o en situación asimilada. Cada supuesto tiene sus condiciones.',
			],
		},
		{
			heading: 'La reducción de jornada y la prestación',
				paragraphs: [
					'La prestación se articula con una reducción de la jornada de trabajo, con la correspondiente disminución de salario, o con el cese de la actividad en determinados supuestos. La cuantía se calcula sobre una base reguladora.',
					'La duración depende de la necesidad de cuidado y de la edad del menor, con reglas propias. Conviene revisar el periodo previsto y las prórrogas para no quedarse sin cobertura.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'Se presenta la solicitud con el informe médico, el libro de familia y la documentación de la empresa o del alta. La comunicación a la empresa y la reducción de jornada deben tramitarse de forma coordinada.',
					'Contestar a los requerimientos de la administración dentro de plazo evita que el expediente se archive. Conservar copia de todo lo presentado es imprescindible por si hay que reclamar.',
				],
			},
			{
				heading: 'Compatibilidad y obligaciones',
				paragraphs: [
					'La prestación puede ser compatible con otras situaciones de incapacidad y con determinados ingresos, con matices. Es importante comunicar los cambios para no generar un cobro indebido.',
					'El cuidado debe mantenerse durante todo el periodo. Si cambia la situación del menor o del cuidador, hay que comunicarlo y revisar la continuidad de la prestación.',
				],
			},
			{
				heading: 'Denegaciones y cómo reclamar',
				paragraphs: [
					'Las denegaciones suelen deberse a la falta de acreditación de la enfermedad, a defectos en el informe médico o al incumplimiento de requisitos de cotización. Muchas se corrigen con la reclamación previa.',
					'Si la resolución es desfavorable, cabe reclamación previa y, después, la vía judicial. La prueba médica actualizada y la documentación del cuidado son la clave.',
				],
			},
		],
		checklist: [
			'Comprueba que la enfermedad está en el listado legal.',
			'Reúne el informe médico y el libro de familia.',
			'Coordina la reducción de jornada con la empresa.',
			'Presenta la solicitud con toda la documentación.',
			'Reclama la denegación dentro de plazo.',
		],
		faq: [
			{
				question: '¿Quién puede solicitar esta prestación?',
				answer:
					'Los progenitores, adoptantes o acogedores que conviven y cuidan del menor con enfermedad grave incluida en el listado legal, siempre que cumplan los requisitos.',
			},
			{
				question: '¿Es compatible con trabajar?',
				answer:
					'La prestación se articula con una reducción de jornada o, en determinados supuestos, con el cese de la actividad, con sus reglas propias. Conviene revisar cada caso y comunicar los cambios.',
			},
			{
				question: '¿Qué pasa si me la deniegan?',
				answer:
					'Cabe reclamación previa y, después, la vía judicial. La mayoría de las denegaciones se corrigen con un informe médico actualizado y la documentación completa del cuidado.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/complemento-paternidad-maternidad', label: 'prestaciones familiares' },
			{ path: '/recursos-administrativos', label: 'reclamación y recursos' },
		],
	},
	{
		slug: 'nacionalidad-de-hijos-nacidos-en-espana',
		title: 'Nacionalidad de los hijos nacidos en España',
		description:
			'Cómo se determina la nacionalidad de los hijos nacidos en España, cuándo la tienen desde el nacimiento y cómo se acredita y solicita.',
		date: '2026-10-06',
		category: 'Extranjería',
		readTime: '7 min',
		intro: 'Nacer en España no da automáticamente la nacionalidad, pero sí la atribuye en supuestos muy concretos. La clave está en la nacionalidad de los padres y en la ley aplicable. Determinar si el hijo es español de origen o si debe optar o residir para obtenerla es el primer paso.',
	sections: [
		{
			heading: 'Qué dice la ley',
				paragraphs: [
					'La nacionalidad española de origen se atribuye por filiación, pero también en determinados supuestos por nacimiento en España. Es el caso de los hijos de padres extranjeros si al menos uno de ellos también nació en España, con las matizaciones legales.',
					'También se atribuye cuando los padres carecen de nacionalidad o cuando la legislación de su país no les transmite ninguna, entre otros supuestos. Cada caso debe analizarse con las leyes aplicables a los progenitores.',
				],
			},
			{
				heading: 'Español de origen u opción',
				paragraphs: [
					'Ser español de origen es distinto de optar a la nacionalidad o de adquirirla por residencia. En el primer caso, se tiene desde el nacimiento; en los otros, hay que cumplir requisitos y plazos.',
					'Los supuestos en que un hijo nacido en España puede optar a la nacionalidad se reservan a determinadas edades y circunstancias. Conviene comprobar cuál corresponde antes de iniciar el trámite.',
				],
			},
			{
				heading: 'Cómo se acredita',
				paragraphs: [
					'Se acredita con el certificado de nacimiento, el libro de familia y la documentación de los padres. El Registro Civil es la pieza central: la inscripción del nacimiento y la mención de la nacionalidad.',
					'Cuando los padres son extranjeros, hay que acreditar su nacionalidad y, en su caso, su propio nacimiento en España. La documentación debe estar legalizada o apostillada y traducida cuando proceda.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'La solicitud se presenta ante el Registro Civil competente con la documentación del menor y de los progenitores. En los supuestos de opción, existe un plazo que no conviene dejar pasar.',
					'La inscripción y la obtención de la documentación española permiten después solicitar el pasaporte y el DNI. Es importante conservar copia de todo el expediente.',
				],
			},
			{
				heading: 'Si no se cumple ningún supuesto',
				paragraphs: [
					'Cuando el hijo no es español de origen ni puede optar, queda la vía de la nacionalidad por residencia, con sus plazos y requisitos, o las autorizaciones de residencia correspondientes.',
					'En ese caso, conviene asegurar la situación de residencia del menor y planificar el trámite. La nacionalidad por residencia exige acreditar tiempo de residencia legal y buena conducta, entre otros requisitos.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'Dar por hecho que nacer en España da la nacionalidad, dejar pasar el plazo de la opción o presentar documentos sin legalizar son errores habituales que retrasan o frustran el trámite.',
					'Antes de iniciarlo conviene comprobar la nacionalidad de los padres, los supuestos aplicables y la documentación exigida. Una revisión previa ahorra requerimientos y meses de espera.',
				],
			},
		],
		checklist: [
			'Comprueba la nacionalidad de ambos progenitores.',
			'Identifica si es origen, opción o residencia.',
			'Reúne certificados legalizados y traducidos.',
			'Inscribe o corrige el nacimiento en el Registro Civil.',
			'No dejes pasar el plazo de la opción.',
		],
		faq: [
			{
				question: '¿Nacer en España da la nacionalidad española?',
				answer:
					'No automáticamente. La atribuye en supuestos concretos, como cuando al menos uno de los padres también nació en España o cuando el menor quedaría sin nacionalidad. Cada caso debe analizarse.',
			},
			{
				question: '¿Qué diferencia hay entre español de origen y por opción?',
				answer:
					'El español de origen lo es desde el nacimiento; la opción exige cumplir los supuestos y plazos legales. Es importante determinar qué vía corresponde antes de solicitar.',
			},
			{
				question: '¿Y si mi hijo no cumple ningún supuesto?',
				answer:
					'Queda la nacionalidad por residencia, con sus plazos y requisitos, además de asegurar la situación de residencia del menor. Conviene planificar el trámite con tiempo.',
			},
		],
		relatedServices: [
			{ path: '/nacionalidad-extranjeria', label: 'nacionalidad y extranjería' },
			{ path: '/recursos-administrativos', label: 'recurso frente a la denegación' },
			{ path: '/blog/nacionalidad-espana-examen', label: 'nacionalidad por residencia' },
		],
	},
	{
		slug: 'seguro-de-decesos',
		title: 'Seguro de decesos: qué cubre y cómo reclamar',
		description:
			'Qué cubre un seguro de decesos, cómo funciona el recobro, qué gastos entran y cómo reclamar a la aseguradora si deniega el siniestro.',
		date: '2026-10-06',
		category: 'Seguros',
		readTime: '7 min',
		intro: 'El seguro de decesos suele contratarse y olvidarse hasta que llega el momento de usarlo. Cubre el servicio funerario y, según la póliza, un recobro de gastos si los familiares lo contratan por su cuenta. Conocer las coberturas y los límites evita que la aseguradora pague menos de lo que corresponde.',
	sections: [
		{
			heading: 'Qué es el seguro de decesos',
			paragraphs: [
				'Es un seguro que garantiza la prestación del servicio funerario del asegurado o, en su caso, el reembolso de los gastos. A diferencia de un seguro de vida, no paga un capital a los beneficiarios, sino que cubre el servicio.',
				'La póliza determina las coberturas, los límites y las condiciones. Conviene revisar qué incluye el servicio —féretro, traslado, trámites— y qué gastos quedan fuera.',
			],
		},
		{
			heading: 'El servicio y el recobro',
				paragraphs: [
					'En el servicio directo, la aseguradora organiza y paga la funeraria con la que trabaja. En el recobro, los familiares contratan el servicio y la aseguradora reembolsa los gastos hasta el límite de la póliza.',
					'El recobro exige presentar facturas y justificantes y cumplir los requisitos y plazos de la póliza. Si el gasto supera la cobertura, la diferencia corre a cargo de los familiares.',
				],
			},
			{
				heading: 'Qué gastos suelen entrar',
				paragraphs: [
					'Suelen cubrirse los trámites funerarios, el féretro, el traslado y determinados servicios asociados. Es frecuente que existan límites por concepto y un límite total.',
					'Los gastos no previstos en la póliza o que excedan los límites no se reembolsan. Leer las condiciones antes de contratar el servicio evita sorpresas.',
				],
			},
			{
				heading: 'Cómo se reclama',
				paragraphs: [
					'Se comunica el fallecimiento a la aseguradora y se aporta la documentación: certificado de defunción, póliza y facturas. Después se presenta la solicitud de servicio o de recobro.',
					'Si la aseguradora deniega o paga menos de lo pactado, se puede reclamar por escrito y, si no se resuelve, acudir al servicio de consumo o a la vía judicial.',
				],
			},
			{
				heading: 'Denegaciones habituales',
				paragraphs: [
					'Las denegaciones se apoyan en el impago de la prima, en la falta de cobertura del gasto o en el incumplimiento de los plazos. Es importante revisar si la causa alegada es real y está en la póliza.',
					'La ausencia de declaración de circunstancias personales puede dar lugar a discusiones, pero no siempre justifica la negativa. La póliza y la documentación del siniestro son la base de la reclamación.',
				],
			},
			{
				heading: 'Errores que reducen el reembolso',
				paragraphs: [
					'Contratar el servicio sin avisar a la aseguradora, no guardar las facturas o aceptar un pago parcial sin revisar la póliza son errores frecuentes. También lo es dar la póliza por perdida y no reclamar.',
					'Antes de firmar la conformidad conviene comprobar los límites de la cobertura y sumar los gastos reales. Reclamar la diferencia cuando la aseguradora paga de menos es posible con prueba.',
				],
			},
		],
		checklist: [
			'Localiza la póliza y sus condiciones.',
			'Comprueba las coberturas y los límites.',
			'Avisa a la aseguradora del fallecimiento.',
			'Guarda todas las facturas del servicio.',
			'Revisa el pago antes de dar la conformidad.',
		],
		faq: [
			{
				question: '¿Qué cubre un seguro de decesos?',
				answer:
					'Garantiza el servicio funerario o su reembolso, según la póliza: trámites, féretro, traslado y servicios asociados, con los límites que fije el contrato.',
			},
			{
				question: '¿Cómo funciona el recobro de gastos?',
				answer:
					'Los familiares contratan el servicio y la aseguradora reembolsa los gastos hasta el límite de la póliza, previa presentación de facturas y justificantes.',
			},
			{
				question: '¿Qué hago si la aseguradora no paga lo que corresponde?',
				answer:
					'Reclama por escrito con la póliza y las facturas y, si no se resuelve, acude al servicio de consumo o a la vía judicial. Comprobar los límites de cobertura es el primer paso.',
			},
		],
		relatedServices: [
			{ path: '/reclamaciones-seguros', label: 'reclamaciones a la aseguradora' },
			{ path: '/consumo', label: 'derechos del consumidor' },
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
		],
	},
];
