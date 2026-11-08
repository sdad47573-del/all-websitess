/**
 * Decimotercer lote de contenido nuevo (oct 2026). Igual que los lotes
 * anteriores (`SEO_ARTICLES_SEO.ts` y `SEO_ARTICLES_OCT*.ts`), nace del exporte
 * de Google Search Console: consultas informativas con impresiones y sin página
 * dedicada. Este lote cubre el quebrantamiento de condena, el acogimiento
 * familiar, los derechos de tanteo y retracto, la Inspección de Trabajo, el
 * visado de residencia y estancia, la portabilidad y permanencia en la
 * telefonía, los préstamos usurarios y la incapacidad temporal. Ninguna crea
 * categoría nueva.
 *
 * Cada artículo declara sus tres `relatedServices` para alimentar el enlazado
 * bidireccional de `blogInternalLinks.ts`: la entrada derivada hace que la
 * página de servicio enlace de vuelta a la guía, así que ninguna queda huérfana.
 * Reglas de forma: title ≤ 62, description ≤ 162 e intro > 150 caracteres.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_OCT6: SeoArticle[] = [
	{
		slug: 'quebrantamiento-de-condena',
		title: 'Quebrantamiento de condena: qué es y qué consecuencias tiene',
		description:
			'Qué se considera quebrantamiento de condena, qué penas prevé el Código Penal, cómo se castiga y qué hacer si te investigan por este delito.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'El quebrantamiento de condena castiga a quien incumple una pena, una medida cautelar o una orden de alejamiento impuesta por un juez. No hace falta cometer un nuevo delito: basta con saltarse la prohibición. Entender qué se considera incumplimiento y qué consecuencias tiene ayuda a evitar un problema penal añadido.',
		sections: [
			{
				heading: 'Qué es el quebrantamiento de condena',
				paragraphs: [
					'Es el delito que comete quien incumple una condena, una medida de seguridad o una medida cautelar. El Código Penal lo castiga con independencia de que el hecho que motivó la pena se haya producido o no.',
					'La clave está en el incumplimiento: no se exige causar un daño, sino desobedecer la resolución. Por eso es frecuente en condenas de alejamiento, trabajos en beneficio de la comunidad o privación del permiso de conducir.',
				],
			},
			{
				heading: 'Tipos de incumplimiento',
				paragraphs: [
					'Los supuestos más habituales son acercarse o comunicarse con la persona protegida, no comparecer en el juzgado cuando se está citado, no cumplir los trabajos en beneficio de la comunidad o conducir tras la retirada del carné.',
					'También se castiga el incumplimiento de medidas cautelares durante el proceso, no solo de la pena ya impuesta. Es decir, una orden de alejamiento provisional incumplida ya puede generar responsabilidad penal.',
				],
			},
			{
				heading: 'Cómo se castiga',
				paragraphs: [
					'La pena varía según qué se haya incumplido: puede ser multa, trabajos en beneficio de la comunidad o prisión, y en algunos casos se añade la privación de libertad para los incumplimientos más graves.',
					'Además, el incumplimiento puede agravar la situación procesal de la persona condenada y afectar a la suspensión de la pena. La defensa debe valorar si el incumplimiento fue consciente y si existía una justificación.',
				],
			},
			{
				heading: 'Quebrantamiento y violencia de género',
				paragraphs: [
					'En el ámbito de la violencia de género el quebrantamiento es especialmente frecuente: acercarse a la víctima o contactar con ella, aunque sea a iniciativa de la propia víctima, vulnera la orden dictada.',
					'El consentimiento de la persona protegida no excluye el delito: la orden es una obligación frente al juez. Solo el tribunal puede modificarla o dejarla sin efecto.',
				],
			},
			{
				heading: 'Qué hacer si te investigan',
				paragraphs: [
					'Es decisivo acudir cuanto antes a un abogado y revisar el contenido exacto de la resolución: distancia, forma de comunicación y duración. Muchas defensas giran en torno a si el contacto estaba realmente prohibido.',
					'También hay que valorar si existe error o si el incumplimiento se debió a una causa justificada. Aportar pruebas de la situación concreta mejora las opciones de la defensa.',
				],
			},
			{
				heading: 'Cómo se evita recaer',
				paragraphs: [
					'Conocer con precisión las prohibiciones y los plazos evita incumplimientos involuntarios. Conviene confirmar por escrito el alcance de la orden y las fechas de finalización.',
					'Cuando el cumplimiento resulta imposible, lo prudente es comunicarlo al juzgado y pedir su modificación, en lugar de decidir por cuenta propia que la orden ya no se aplica.',
				],
			},
		],
		checklist: [
			'Revisa el contenido exacto de la orden o la condena.',
			'Confirma las fechas de inicio y fin de la medida.',
			'No contactes con la persona protegida por ningún medio.',
			'Comunica al juzgado cualquier impedimento de cumplimiento.',
			'Contacta con un abogado si te investigan.',
		],
		faq: [
			{
				question: '¿Hace falta causar un daño para cometer quebrantamiento?',
				answer:
					'No. Basta con incumplir la pena o la medida ordenada por el juez. El delito se comete por el simple incumplimiento, sin necesidad de que se produzca un daño añadido.',
			},
			{
				question: 'Si la víctima me pide que la vea, ¿es delito igual?',
				answer:
					'Sí. La orden de alejamiento vincula frente al juez, no frente a la persona protegida. Su consentimiento no excluye el delito: solo el tribunal puede dejar la medida sin efecto.',
			},
			{
				question: '¿Qué pena tiene el quebrantamiento de condena?',
				answer:
					'Depende de lo incumplido: puede ser multa, trabajos en beneficio de la comunidad o prisión. En los casos más graves se añade privación de libertad y puede afectar a la suspensión de la pena.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/violencia-genero', label: 'violencia de género' },
			{ path: '/blog/derechos-del-detenido', label: 'derechos del detenido' },
		],
	},
	{
		slug: 'acogimiento-familiar',
		title: 'Acogimiento familiar: modalidades y cómo solicitarlo',
		description:
			'Qué es el acogimiento familiar, sus modalidades, la diferencia con la adopción y los pasos para constituirlo ante la autoridad competente.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '7 min',
		intro: 'El acogimiento familiar da un hogar temporal a menores que no pueden vivir con sus padres sin romper el vínculo con su familia de origen. Es una medida de protección, no una adopción: tiene su propio procedimiento, sus modalidades y sus límites. Conocerlos evita confundir acogimiento y adopción y ayuda a decidir el paso correcto.',
		sections: [
			{
				heading: 'Qué es el acogimiento familiar',
				paragraphs: [
					'Es una medida de protección por la que un menor es atendido en un entorno familiar distinto al suyo cuando sus padres no pueden cuidarlo de forma adecuada. La administración la constituye y la supervisa.',
					'La familia de origen mantiene su vínculo y, salvo que se prevea otra cosa, se trabaja para la reunificación. El acogimiento busca estabilidad para el menor sin extinguir los lazos con su familia biológica.',
				],
			},
			{
				heading: 'Modalidades',
				paragraphs: [
					'Puede ser en familia ajena o en familia extensa, según sea la familia de origen o una familia distinta. También se distingue por su duración: temporal, permanente o de urgencia para los primeros meses.',
					'La modalidad se ajusta a las necesidades del menor y a la previsión de retorno. Cambiar de modalidad exige una nueva resolución y valoración del caso.',
				],
			},
			{
				heading: 'Diferencias con la adopción',
				paragraphs: [
					'En la adopción se extingue el vínculo con la familia de origen y se crea uno nuevo con la familia adoptante. En el acogimiento el vínculo se mantiene y la medida es, en principio, revisable.',
					'La adopción requiere una resolución judicial y una valoración de idoneidad más estricta. El acogimiento puede constituirse por vía administrativa y suele tener una duración determinada.',
				],
			},
			{
				heading: 'Quién puede ser familia acogedora',
				paragraphs: [
					'Pueden serlo tanto la familia extensa como familias ajenas al menor, siempre que acrediten idoneidad, capacidad y estabilidad. La administración valora la situación personal, familiar y social.',
					'La valoración incluye entrevistas, informes y formación previa. No basta con la voluntad de acoger: hay que pasar el proceso de selección y aceptar la supervisión posterior.',
				],
			},
			{
				heading: 'Cómo se constituye',
				paragraphs: [
					'La administración competente en protección de menores dicta la resolución tras valorar la situación del menor. Según el caso, puede requerir el consentimiento de la familia o prescindir de él cuando existe riesgo.',
					'En determinados supuestos la medida necesita el refrendo judicial. La resolución fija la modalidad, la duración y las condiciones de relación con la familia de origen.',
				],
			},
			{
				heading: 'Derechos y obligaciones',
				paragraphs: [
					'Las personas acogedoras asumen la guarda y el cuidado diario del menor, pero no la representación legal ni la administración de sus bienes, que corresponden a quien ostente la patria potestad o tutela.',
					'Tienen derecho a la ayuda económica, a la formación y al apoyo técnico de la administración. También la obligación de colaborar y de informar sobre la evolución del menor.',
				],
			},
		],
		checklist: [
			'Diferencia acogimiento de adopción antes de decidir.',
			'Consulta la modalidad adecuada al caso.',
			'Prepara la acreditación de idoneidad y estabilidad.',
			'Revisa las condiciones de relación con la familia de origen.',
			'Pide apoyo técnico y la ayuda económica si corresponde.',
		],
		faq: [
			{
				question: '¿El acogimiento familiar equivale a una adopción?',
				answer:
					'No. En el acogimiento se mantiene el vínculo con la familia de origen y la medida es revisable. La adopción extingue ese vínculo y requiere resolución judicial con idoneidad más estricta.',
			},
			{
				question: '¿Puede acoger un menor un familiar directo?',
				answer:
					'Sí. Existe la modalidad de acogimiento en familia extensa, que incluye a abuelos, tíos u otros parientes. Deben acreditar idoneidad y estabilidad como cualquier familia acogedora.',
			},
			{
				question: '¿Qué derechos tiene la familia de origen?',
				answer:
					'Salvo que la resolución prevea otra cosa por riesgo, mantiene la relación con el menor y participa en el plan de reunificación. La administración puede fijar las condiciones de contacto.',
			},
		],
		relatedServices: [
			{ path: '/guarda-custodia', label: 'guarda y custodia' },
			{ path: '/tutela-legal', label: 'tutela y protección' },
			{ path: '/modificacion-medidas-paterno-filiales', label: 'medidas paterno-filiales' },
		],
	},
	{
		slug: 'derecho-de-retracto-y-tanteo',
		title: 'Retracto y tanteo: derechos de adquisición preferente',
		description:
			'Cuándo existen los derechos de tanteo y retracto, cómo se ejercen, los plazos y las consecuencias de no respetarlos en una compraventa.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'El tanteo y el retracto son derechos que permiten a ciertas personas adquirir un bien con preferencia frente a un tercero. Aparecen en herencias, arrendamientos, comunidades y compraventas, y su incumplimiento puede invalidar una operación ya cerrada. Conocer plazos y forma de ejercicio evita perder el derecho o comprar con el riesgo de perder el bien.',
	sections: [
		{
			heading: 'Qué son el tanteo y el retracto',
			paragraphs: [
				'El tanteo permite adquirir un bien antes de que se venda a un tercero, en igualdad de condiciones. El retracto permite adquirirlo después, sustituyendo al comprador cuando la venta se realizó sin respetar la preferencia.',
				'Son derechos de adquisición preferente: no obligan a vender, pero sí condicionan a quién puede venderse y en qué condiciones. Se conceden por ley o por pacto.',
			],
		},
		{
			heading: 'Cuándo nacen',
			paragraphs: [
				'Los supuestos más frecuentes son el retracto de comuneros, el de colindantes, el arrendaticio del inquilino, el de los copropietarios de una herencia y el del titular de un derecho de adquisición pactado en escritura.',
				'También existen el retracto legal en ventas de viviendas arrendadas y el tanteo en proindiviso. Cada uno tiene sus propios requisitos y su propio plazo.',
			],
		},
		{
			heading: 'Cómo se ejercen',
			paragraphs: [
				'El ejercicio se comunica de forma fehaciente al vendedor y, en el retracto, también al comprador. Es habitual requerirlo por notario para dejar constancia de la fecha y del contenido.',
				'El escrito debe identificar el bien, el derecho que se invoca y ofrecer el pago del precio. Un ejercicio mal planteado puede perderse, así que conviene revisar el título antes de actuar.',
			],
		},
		{
			heading: 'Plazos',
			paragraphs: [
				'Los plazos son breves y varían según el tipo de retracto: nueve días, un mes o hasta un año desde la inscripción o el conocimiento de la venta. Se cuentan con rigor y no admiten interrupción por negociaciones.',
				'Dejar pasar el plazo extingue la preferencia. Por eso, ante la sospecha de una venta, lo primero es reclamar la información y calcular el plazo con exactitud.',
			],
		},
		{
			heading: 'Consecuencias de no respetarlos',
			paragraphs: [
				'Si se vende ignorando el derecho de preferencia, el titular puede ejercer el retracto y colocarse en la posición del comprador. La operación puede deshacerse aunque haya tercero de por medio.',
				'El comprador que adquirió sin comprobar la preferencia asume ese riesgo. Acreditar la buena fe o el desconocimiento no evita el retracto cuando el derecho estaba inscrito.',
			],
		},
		{
			heading: 'Retracto en alquileres y herencias',
			paragraphs: [
				'En arrendamientos, el inquilino puede tener derecho de tanteo y retracto si se vende la vivienda, con las excepciones legales. En herencias, los copropietarios pueden retraer la cuota vendida por otro coheredero.',
				'En ambos casos conviene notificar la intención de vender y documentar el precio. Actuar con transparencia reduce el riesgo de que la venta se impugne después.',
			],
		},
		],
		checklist: [
			'Identifica qué derecho de preferencia existe.',
			'Reclama por escrito el precio y las condiciones de la venta.',
			'Comprueba el plazo exacto y su fecha de inicio.',
			'Comunica el ejercicio de forma fehaciente.',
			'Actúa antes de que prescriba la preferencia.',
		],
		faq: [
			{
				question: '¿Cuál es la diferencia entre tanteo y retracto?',
				answer:
					'El tanteo permite comprar antes de la venta a un tercero, en igualdad de condiciones. El retracto permite adquirir después, sustituyendo al comprador cuando no se respetó la preferencia.',
			},
			{
				question: '¿Qué plazo hay para ejercer el retracto?',
				answer:
					'Depende del supuesto: nueve días en algunos retractos de comuneros, un mes en otros o hasta un año desde la inscripción o el conocimiento. Son plazos breves y de cómputo estricto.',
			},
			{
				question: '¿Y si ya se vendió el bien a otra persona?',
				answer:
					'El titular del retracto puede colocarse en la posición del comprador y deshacer la operación. El comprador asume ese riesgo si adquirió sin comprobar los derechos de preferencia.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'derecho civil' },
			{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
			{ path: '/reparto-herencia', label: 'reparto de herencia' },
		],
	},
	{
		slug: 'inspeccion-de-trabajo',
		title: 'Inspección de Trabajo: qué revisa y cómo responde la empresa',
		description:
			'Qué comprueba la Inspección de Trabajo, cómo se desarrolla una visita, qué actas puede levantar y cómo puede defenderse la empresa.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'La Inspección de Trabajo vigila el cumplimiento de la normativa laboral y de seguridad social. Sus visitas pueden acabar en un requerimiento, un acta de infracción o incluso en un recargo de prestaciones. Saber qué revisa, cómo documenta sus actuaciones y qué opciones tiene la empresa evita reaccionar tarde o mal.',
	sections: [
		{
			heading: 'Qué es y qué comprueba',
			paragraphs: [
				'Es el órgano que vela por el cumplimiento de las normas laborales, de prevención de riesgos y de seguridad social. Puede actuar de oficio, por denuncia o por campañas sectoriales.',
				'Revisa contratos, jornada, salarios, altas y cotizaciones, prevención de riesgos y la situación de los trabajadores desplazados. También comprueba la regularidad de los contratos temporales y a tiempo parcial.',
			],
		},
		{
			heading: 'Cómo se desarrolla una visita',
			paragraphs: [
				'Los inspectores se identifican, pueden acceder al centro de trabajo y requerir documentación. La visita puede ser presencial, a distancia o mediante requerimiento de comparecencia.',
				'La empresa debe colaborar y aportar lo solicitado. La falta de colaboración o el obstruccionismo se sancionan de forma autónoma, incluso aunque no exista infracción de fondo.',
			],
		},
		{
			heading: 'Actas y requerimientos',
			paragraphs: [
				'La inspección puede limitarse a un requerimiento para corregir una irregularidad, o levantar un acta de infracción cuando aprecia incumplimiento. También puede proponer el recargo de prestaciones o la paralización de trabajos.',
				'El acta describe los hechos y la norma infringida y abre un plazo de alegaciones. Contestarla con pruebas y fundamentos jurídicos es la primera oportunidad de defensa.',
			],
		},
		{
			heading: 'Sanciones',
			paragraphs: [
				 'Las infracciones se clasifican en leves, graves y muy graves, con sanciones graduables según la negligencia, el daño causado y la reincidencia. Pueden alcanzar importes elevados en los supuestos más graves.',
				'Además de la multa, la infracción puede afectar a bonificaciones, contratos públicos o reputación. En materia de seguridad social se añaden las liquidaciones por cuotas.',
			],
		},
		{
			heading: 'Cómo responde la empresa',
			paragraphs: [
				'La empresa puede alegar ante el acta y, si se confirma la sanción, recurrir en vía administrativa y ante los tribunales. La clave está en la prueba: registro de jornada, nóminas, contratos y evaluaciones de riesgo.',
				'Una respuesta ordenada, con documentos fechados y bien conservados, reduce la sanción y evita que el problema se agrave en inspecciones posteriores.',
			],
		},
		{
			heading: 'Derechos del trabajador',
			paragraphs: [
				'El trabajador puede ser citado a declarar y tiene derecho a la confidencialidad de su denuncia. También puede reclamar ante la Inspección irregularidades de jornada, salario o seguridad.',
				'La colaboración del trabajador con la Inspección no puede justificar represalias por parte de la empresa. Las represalias, si existen, son a su vez denunciables.',
			],
		},
		],
		checklist: [
			'Ordena contratos, nóminas y registros de jornada.',
			'Documenta las evaluaciones de riesgos y la formación.',
			'Colabora con el inspector y guarda todas las comunicaciones.',
			'Contesta el acta con pruebas dentro de plazo.',
			'Valora el recurso administrativo y judicial si la sanción se confirma.',
		],
		faq: [
			{
				question: '¿Puede la Inspección entrar en la empresa sin avisar?',
				answer:
					'Sí. Puede realizar visitas presenciales sin cita previa identificándose correctamente. También puede citar a la empresa o al trabajador para comparecer y aportar documentación.',
			},
			{
				question: '¿Qué diferencia hay entre requerimiento y acta?',
				answer:
					'El requerimiento pide corregir una irregularidad sin sanción. El acta de infracción constata un incumplimiento y abre un procedimiento sancionador con posibilidad de alegaciones.',
			},
			{
				question: '¿Se puede recurrir una sanción de la Inspección?',
				answer:
					'Sí. Primero se alega contra el acta y, si se confirma, se recurre en vía administrativa y después ante la jurisdicción. La prueba documental es determinante.',
			},
		],
		relatedServices: [
			{ path: '/empresas/derecho-laboral', label: 'derecho laboral para empresas' },
			{ path: '/despidos', label: 'despidos' },
			{ path: '/contratos-laborales', label: 'contratos laborales' },
		],
	},
	{
		slug: 'visado-de-residencia-y-estancia',
		title: 'Visado de residencia y estancia: cuál pedir y cómo',
		description:
			'Diferencia entre visado de residencia y de estancia, tipos según el motivo, requisitos y qué hacer si te deniegan la solicitud de visado.',
		date: '2026-10-06',
		category: 'Extranjería',
		readTime: '8 min',
		intro: 'El visado autoriza la entrada en España y define qué se puede hacer después: estar de forma temporal o residir. Elegir el visado equivocado es uno de los errores más frecuentes y costosos, porque obliga a reiniciar el procedimiento. Conocer los tipos, los requisitos y los recursos disponibles ahorra tiempo y evita una denegación evitable.',
	sections: [
		{
			heading: 'Visado de estancia y visado de residencia',
			paragraphs: [
				'El visado de estancia permite permanecer en España por un tiempo limitado, sin ánimo de residir. El de residencia habilita a vivir aquí y suele abrir la puerta a la tarjeta de residencia posterior.',
				'La diferencia no es solo de duración: cambia la documentación, el consulado competente y las consecuencias de la denegación. Hay que elegir según el motivo real del traslado.',
			],
		},
		{
			heading: 'Tipos de visado',
			paragraphs: [
				'Existen visados de residencia por reagrupación familiar, por trabajo o actividad profesional, por estudios, por razones humanitarias, de residencia y trabajo por cuenta propia y el visado nómada digital, entre otros.',
				'Cada tipo tiene requisitos propios: medios económicos, contrato, título habilitante, alojamiento o seguro médico. Algunos se solicitan en el consulado y otros se vinculan a una autorización previa.',
			],
		},
		{
			heading: 'Requisitos generales',
			paragraphs: [
				'Con carácter general se exigen pasaporte válido, no estar en situación irregular en España, carecer de antecedentes penales, seguro médico y medios económicos suficientes para la estancia o residencia.',
				'También se exige abonar la tasa y presentar la solicitud con la documentación legalizada o apostillada cuando proceda. Un defecto de forma puede provocar el archivo o la denegación.',
			],
		},
		{
			heading: 'Cómo y dónde se solicita',
			paragraphs: [
				'La solicitud se presenta, por regla general, en el consulado o embajada española del país de residencia. Puede requerir cita previa y la presencia personal del solicitante para la entrega de huellas.',
				'Algunos visados necesitan una autorización de residencia previa tramitada en España. En esos casos conviene ordenar bien los pasos para no duplicar expedientes ni perder plazos.',
			],
		},
		{
			heading: 'Denegación y recursos',
			paragraphs: [
				'La denegación debe ser motivada. Ante ella cabe recurso de reposición ante el órgano que la dictó y, después, recurso contencioso-administrativo ante los tribunales.',
				'El plazo para recurrir es breve, así que hay que revisar cuanto antes el motivo de la denegación y reunir las pruebas que acrediten los requisitos discutidos.',
			],
		},
		{
			heading: 'Renovaciones y prórrogas',
			paragraphs: [
				'La estancia y la residencia se prorrogan o renuevan cumpliendo los requisitos vigentes en cada momento. Presentar la solicitud dentro de plazo evita entrar en situación irregular.',
				'Hay que acreditar el mantenimiento de las condiciones que justificaron la autorización inicial. Un cambio de circunstancias puede exigir otro tipo de autorización.',
			],
		},
		],
		checklist: [
			'Elige el visado según el motivo real del traslado.',
			'Reúne pasaporte, seguro y medios económicos.',
			'Legaliza o apostilla los documentos necesarios.',
			'Presenta la solicitud dentro de plazo con cita previa.',
			'Recurre la denegación dentro del plazo legal.',
		],
		faq: [
			{
				question: '¿Puedo trabajar con un visado de estancia?',
				answer:
					'Con carácter general no. El visado de estancia no habilita a trabajar: para ello se necesita un visado de residencia y trabajo o la autorización correspondiente.',
			},
			{
				question: '¿Qué pasa si me deniegan el visado?',
				answer:
					'Debe ser una resolución motivada y cabe recurso de reposición y, después, contencioso-administrativo. El plazo es breve, así que conviene revisar el motivo y aportar pruebas cuanto antes.',
			},
			{
				question: '¿Dónde se solicita el visado?',
				answer:
					'Por regla general en el consulado o embajada española del país de residencia, con cita previa. Algunos visados exigen una autorización previa tramitada en España.',
			},
		],
		relatedServices: [
			{ path: '/nacionalidad-extranjeria', label: 'nacionalidad y extranjería' },
			{ path: '/recursos-administrativos', label: 'recursos administrativos' },
			{ path: '/blog/prorroga-estancia-y-renovacion', label: 'prórroga de estancia' },
		],
	},
	{
		slug: 'portabilidad-y-permanencia-en-la-telefonia',
		title: 'Portabilidad y permanencia: tus derechos con la telefonía',
		description:
			'Cómo funciona la portabilidad, cuándo hay permanencia, qué compensación te deben y cómo reclamar ante la teleoperadora por un cobro indebido.',
		date: '2026-10-06',
		category: 'Consumo y banca',
		readTime: '6 min',
		intro: 'La portabilidad permite cambiar de operador conservando tu número, y la ley limita las permanencias y las penalizaciones. Pese a ello, siguen apareciendo cobros por permanencias dudosas, facturas infladas y bajas que no llegan. Conocer tus derechos y los cauces de reclamación es la mejor forma de recuperar lo cobrado de más.',
	sections: [
		{
			heading: 'Qué es la portabilidad',
			paragraphs: [
				'Es el derecho a cambiar de compañía conservando el número de teléfono. La operadora de destino tramita la solicitud y la de origen no puede impedir el cambio ni cobrar por él.',
				'La portabilidad debe ejecutarse en el plazo previsto, normalmente un día laborable para la telefonía móvil y algo más para la fija. Un retraso injustificado puede reclamarse.',
			],
		},
		{
			heading: 'La permanencia y sus límites',
			paragraphs: [
				'La permanencia obliga a mantener el contrato durante un tiempo a cambio de una ventaja, como un terminal subvencionado o un descuento. Debe constar por escrito, con su duración y su compensación.',
				'Una permanencia no informada o impuesta sin contrapartida real es impugnable. Tampoco puede prolongarse indefinidamente ni aplicarse a servicios que no la incluyan.',
			],
		},
		{
			heading: 'Compensación por incumplir la permanencia',
			paragraphs: [
				'La compensación debe ser proporcional al tiempo restante y al beneficio recibido, y estar incluida en el contrato. Si es desproporcionada o no estaba pactada, puede reclamarse.',
				'La empresa debe acreditar la existencia y el contenido de la permanencia. Sin prueba escrita, el cobro carece de base y suele ser reclamable con éxito.',
			],
		},
		{
			heading: 'Cobros indebidos y facturas',
			paragraphs: [
				'Son frecuentes los cobros por servicios no contratados, cambios de tarifa sin consentimiento, cargos duplicados y facturas posteriores a la baja. Todos son reclamables con la factura como prueba.',
				'La operadora debe entregar la factura detallada y responder a la reclamación. Si no lo hace, procede acudir a consumo o a los tribunales.',
			],
		},
		{
			heading: 'Cómo reclamar',
			paragraphs: [
				'El primer paso es reclamar por escrito al servicio de atención al cliente y pedir número de referencia. Si no contesta en el plazo legal o desestima sin motivar, se puede acudir a la oficina de consumo.',
				'Antes de demandar, es obligatorio intentar la reclamación previa ante la operadora. Guardar contratos, facturas y comunicaciones refuerza la posición.',
			],
		},
		{
			heading: 'Baja y cambio de operador',
			paragraphs: [
				'La baja no puede supeditarse a llamadas de retención ni a trámites añadidos. Basta con solicitarla por el canal previsto y confirmar la fecha de efectos.',
				'Tras la baja, la empresa debe devolver los importes cobrados de más y dejar de facturar. Si sigue cobrando, cabe reclamar la devolución con intereses.',
			],
		},
		],
		checklist: [
			'Guarda el contrato donde conste la permanencia.',
			'Reclama por escrito y pide número de referencia.',
			'Exige la factura detallada de los cargos discutidos.',
			'Acude a consumo si no contestan en plazo.',
			'Conserva toda la comunicación con la operadora.',
		],
		faq: [
			{
				question: '¿Pueden cobrarme por la portabilidad?',
				answer:
					'No. El cambio de operador conservando el número es gratuito y no puede impedirse. Solo cabría una compensación si existe una permanencia válidamente pactada.',
			},
			{
				question: '¿Qué hago si me cobran una permanencia que no pacté?',
				answer:
					'Reclama por escrito y exige el contrato donde conste. La empresa debe acreditar la permanencia y su compensación. Sin prueba escrita, el cobro es impugnable.',
			},
			{
				question: '¿Dónde reclamo si la operadora no responde?',
				answer:
					'Tras la reclamación previa a la operadora, puedes acudir a la oficina municipal o autonómica de consumo. Si no se resuelve, cabe la vía judicial.',
			},
		],
		relatedServices: [
			{ path: '/consumo', label: 'derecho del consumo' },
			{ path: '/nulidad-contrato', label: 'nulidad de contrato' },
			{ path: '/incumplimiento-contrato', label: 'incumplimiento de contrato' },
		],
	},
	{
		slug: 'prestamos-usurarios',
		title: 'Préstamos usurarios: cómo reclamar intereses abusivos',
		description:
			'Qué se considera un préstamo usurario, cómo se aplica la Ley Azcárate, qué se puede reclamar y qué plazos tienes para impugnarlo.',
		date: '2026-10-06',
		category: 'Consumo y banca',
		readTime: '7 min',
		intro: 'Un préstamo usurario es el que fija un interés notablemente superior al normal del dinero para el caso concreto. La ley permite anular el contrato y reclamar lo pagado de más, incluso años después de firmarlo. Identificar el carácter usurario y reaccionar a tiempo es la clave para recuperar intereses y comisiones.',
	sections: [
		{
			heading: 'Qué es un préstamo usurario',
			paragraphs: [
				'Es aquel en el que se estipula un interés notablemente superior al normal del dinero y manifiestamente desproporcionado con las circunstancias del caso. No hay una cifra fija: se compara con el interés medio del mercado.',
				'El juez valora el tipo aplicado frente a las estadísticas del Banco de España y el riesgo real del préstamo. Cuanto menor sea el plazo o el importe inicial, mayor peso tiene el abuso.',
			],
		},
		{
			heading: 'La Ley de Represión de la Usura',
			paragraphs: [
				'La conocida como Ley Azcárate declara nulos los contratos con interés usurario y obliga a devolver lo cobrado en exceso. Su aplicación es jurisprudencial y se adapta al mercado de cada momento.',
				'La nulidad alcanza al interés, de modo que el deudor solo devuelve el principal. Puede reclamarse además la devolución de cantidades ya pagadas por encima del capital.',
			],
		},
		{
			heading: 'Cómo se identifica el carácter usurario',
			paragraphs: [
				'Se compara el tipo del contrato con el interés medio aplicable a la misma clase de operación. Un indicio típico son los microcréditos y préstamos rápidos con tipos muy elevados.',
				'También influyen las comisiones y los gastos añadidos que encarecen el crédito. El análisis debe hacerse sobre el coste real, no solo sobre el interés nominal.',
			],
		},
		{
			heading: 'Qué se puede reclamar',
			paragraphs: [
				'La nulidad conlleva devolver solo el principal y que el acreedor no cobre intereses. Si ya se pagaron, procede la devolución de las cantidades abonadas que excedan del capital.',
				'Además pueden impugnarse cláusulas abusivas, comisiones y seguros vinculados. La reclamación se acumula con frecuencia con la de intereses de demora desproporcionados.',
			],
		},
		{
			heading: 'Plazos',
			paragraphs: [
				'La acción de nulidad del préstamo usurario no tiene un plazo corto de caducidad y puede ejercerse mientras el contrato siga produciendo efectos. En cambio, la restitución de cantidades sí exige reclamar sin demoras excesivas.',
				'Interrumpir la prescripción con requerimientos fehacientes es prudente. Documentar los pagos realizados facilita el cálculo de lo reclamable.',
			],
		},
		{
			heading: 'Reclamación extrajudicial y judicial',
			paragraphs: [
				'Es habitual comenzar con una reclamación extrajudicial a la entidad, con cálculo del exceso. Muchas se resuelven antes de juicio para evitar costes.',
				'Si no hay acuerdo, se demanda pidiendo la nulidad y la restitución. La prueba del tipo aplicado y de los pagos es el eje del procedimiento.',
			],
		},
		],
		checklist: [
			'Reúne el contrato y los cuadros de amortización.',
			'Compara el interés aplicado con el interés medio del mercado.',
			'Suma comisiones y gastos para ver el coste real.',
			'Reclama extrajudicialmente el exceso cobrado.',
			'Guarda los justificantes de todos los pagos.',
		],
		faq: [
			{
				question: '¿Cuándo se considera usurario un interés?',
				answer:
					'Cuando es notablemente superior al normal del dinero y desproporcionado para el caso concreto. No hay una cifra fija: se compara con el interés medio del mercado en el momento de firmar.',
			},
			{
				question: '¿Qué pasa si gano la nulidad del préstamo?',
				answer:
					'El contrato se anula, de modo que solo se debe el principal. Si ya pagaste intereses, procede la devolución de las cantidades que excedan del capital prestado.',
			},
			{
				question: '¿Caduca la acción para reclamar?',
				answer:
					'La nulidad del préstamo usurario puede ejercerse mientras el contrato siga produciendo efectos. Reclamar sin demora ayuda a evitar problemas de prescripción en la restitución.',
			},
		],
		relatedServices: [
			{ path: '/nulidad-contrato', label: 'nulidad de contrato' },
			{ path: '/reclamaciones-bancarias', label: 'reclamaciones bancarias' },
			{ path: '/consumo', label: 'derecho del consumo' },
		],
	},
	{
		slug: 'incapacidad-temporal',
		title: 'Incapacidad temporal: la baja médica paso a paso',
		description:
			'Qué es la incapacidad temporal, cuánto se cobra durante la baja, cómo se tramita y qué hacer si la mutua o el INSS te dan el alta.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '7 min',
		intro: 'La incapacidad temporal cubre la pérdida de ingresos por enfermedad o accidente mientras impide trabajar. Dura un tiempo limitado y exige partes de baja, confirmación y alta. Conocer cómo se calcula la prestación y qué opciones existen ante un alta discutida evita perder derechos o cobrar menos de lo que corresponde.',
	sections: [
		{
			heading: 'Qué es la incapacidad temporal',
			paragraphs: [
				'Es la situación que impide temporalmente trabajar por enfermedad común, accidente no laboral, accidente de trabajo o enfermedad profesional, y que requiere asistencia sanitaria.',
				'Su finalidad es sustituir rentas durante el periodo de curación. No es una incapacidad permanente: se presume temporal y revisable, sujeta a controles médicos.',
			],
		},
		{
			heading: 'Duración y prórrogas',
			paragraphs: [
				'La duración depende del proceso: 365 días prorrogables en enfermedad común y periodos distintos según el tipo de contingencia. Las prórrogas se conceden con partes de confirmación.',
				'Pasado el plazo inicial, el INSS valora la prórroga o la apertura de un expediente de incapacidad permanente. En algunos casos cabe la prórroga hasta los 545 días.',
			],
		},
		{
			heading: 'Cuánto se cobra',
			paragraphs: [
				'La base reguladora se calcula sobre las cotizaciones previas y el porcentaje crece con la duración: desde el 60 % hasta el 75 % en los supuestos más largos. En accidente de trabajo se aplica un porcentaje mayor desde el inicio.',
				'La prestación la paga la empresa en los primeros días en enfermedad común y después la entidad gestora o la mutua. Revisar los cálculos es imprescindible para detectar errores.',
			],
		},
		{
			heading: 'Baja, confirmación y alta',
			paragraphs: [
				'El médico emite el parte de baja, la empresa lo tramita y se expiden partes de confirmación mientras persiste la situación. El alta médica pone fin a la incapacidad temporal.',
				'Incumplir los reconocimientos médicos o no presentar los partes puede extinguir la prestación. También puede extinguirse por no acudir al llamamiento de la mutua.',
			],
		},
		{
			heading: 'Alta médica y desacuerdo',
			paragraphs: [
				'Si el alta se considera prematura, cabe manifestar el desacuerdo y solicitar la revisión. Si persistes enfermo y no puedes trabajar, puedes impugnarla ante el INSS y, después, ante los tribunales.',
				'Esa impugnación permite cobrar durante el trámite en determinadas condiciones y, en su caso, enlazar con la incapacidad permanente. Documentar el estado de salud es clave.',
			],
		},
		{
			heading: 'Qué revisar antes de reclamar',
			paragraphs: [
				'Comprueba los días, los porcentajes y la base reguladora aplicada frente a tu nómina. Los errores en la base son una causa frecuente de prestación reducida.',
				'Si detectas diferencias, reclama por escrito a la entidad y guarda toda la documentación médica y laboral. El plazo para reclamar importes es limitado.',
			],
		},
		],
		checklist: [
			'Conserva los partes de baja, confirmación y alta.',
			'Revisa la base reguladora y el porcentaje aplicado.',
			'Acude a los reconocimientos y llamamientos.',
			'Impugna el alta si la crees prematura.',
			'Reclama por escrito las diferencias detectadas.',
		],
		faq: [
			{
				question: '¿Cuánto se cobra estando de baja?',
				answer:
					'El porcentaje va del 60 % al 75 % de la base reguladora según la duración y la contingencia. En accidente de trabajo se aplica un porcentaje superior desde el primer día.',
			},
			{
				question: '¿Puedo recurrir un alta médica?',
				answer:
					'Sí. Si consideras que el alta es prematura, puedes manifestar el desacuerdo e impugnarla ante el INSS y, en su caso, ante los tribunales, aportando pruebas de tu estado de salud.',
			},
			{
				question: '¿Qué pasa si la empresa calcula mal la prestación?',
				answer:
					'Puedes reclamar por escrito a la entidad que paga la prestación y, si no se corrige, impugnarlo. Conviene comparar la base reguladora con las cotizaciones de tu nómina.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
			{ path: '/complemento-paternidad-maternidad', label: 'prestaciones por nacimiento' },
		],
	},
];
