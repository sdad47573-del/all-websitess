/**
 * Decimocuarto lote de contenido nuevo (oct 2026). Igual que los lotes
 * anteriores (`SEO_ARTICLES_SEO.ts` y `SEO_ARTICLES_OCT*.ts`), nace del exporte
 * de Google Search Console: consultas informativas con impresiones y sin página
 * dedicada. Este lote cubre el pacto de socios, la disolución y liquidación de
 * sociedades, las cláusulas abusivas, la garantía de productos, el fraude
 * fiscal, el positivo en drogas al volante, el seguro de hogar y la protección
 * internacional. Ninguna crea categoría nueva.
 *
 * Cada artículo declara sus tres `relatedServices` para alimentar el enlazado
 * bidireccional de `blogInternalLinks.ts`: la entrada derivada hace que la
 * página de servicio enlace de vuelta a la guía, así que ninguna queda huérfana.
 * Reglas de forma: title ≤ 62, description ≤ 162 e intro > 150 caracteres.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_OCT7: SeoArticle[] = [
	{
		slug: 'pacto-de-socios',
		title: 'Pacto de socios: cláusulas imprescindibles al crear una SL',
		description:
			'Qué es un pacto de socios, por qué es clave en una sociedad limitada, qué cláusulas no pueden faltar y cómo se hace cumplir ante los tribunales.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '7 min',
		intro: 'El pacto de socios regula cómo se toman las decisiones y cómo se sale de la sociedad cuando algo va mal. Los estatutos no bastan: casi todos los conflictos entre socios nacen por lo que no se pactó. Firmarlo al crear la SL es la forma más barata de evitar un litigio societario años después.',
		sections: [
			{
				heading: 'Qué es y para qué sirve',
				paragraphs: [
					'Es un contrato entre socios que ordena la relación interna de la sociedad: gobierno, mayorías, salida y resolución de conflictos. No se inscribe en el Registro, pero obliga a quienes lo firman.',
					'Los estatutos regulan la sociedad frente a terceros; el pacto de socios regula a los socios entre sí. Ambos pueden convivir y complementarse sin duplicarse.',
				],
			},
			{
				heading: 'Por qué es clave en una SL',
				paragraphs: [
					'En una sociedad limitada las decisiones se toman por mayorías, de modo que el socio minoritario puede quedar sin voz. El pacto equilibra ese poder con derechos de veto, información o salida.',
					'También evita bloqueos cuando los socios dejan de entenderse y uno quiere vender su participación. Sin reglas previas, la negociación se vuelve mucho más cara.',
				],
			},
			{
				heading: 'Cláusulas imprescindibles',
				paragraphs: [
					'Suelen incluirse reglas de mayorías reforzadas, derecho de adquisición preferente, prohibición de competencia, dedicación de los socios y mecanismos de valoración de la participación.',
					'También son habituales las cláusulas de arrastre y de acompañamiento, el vesting de los socios fundadores y las condiciones de entrada de nuevos inversores.',
				],
			},
			{
				heading: 'Salida de socios y valoración',
				paragraphs: [
					'El pacto debe fijar cómo se valora la participación cuando un socio quiere salir: múltiplos, valor contable, auditoría o un experto independiente. Sin criterio, el desacuerdo es casi seguro.',
					'Conviene prever plazos, forma de pago y qué ocurre en caso de fallecimiento, incapacidad o divorcio del socio. Estos supuestos son los que más litigios generan.',
				],
			},
			{
				heading: 'Cómo se hace cumplir',
				paragraphs: [
					'El pacto obliga contractualmente: su incumplimiento permite exigir la ejecución, pedir daños y perjuicios o activar las cláusulas de salida. No sustituye a los estatutos ante la sociedad.',
					'Muchas disputas se resuelven mediante arbitraje o mediación si así se pactó. Elegir el foro correcto y redactar bien la cláusula ahorra tiempo y costes.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'Los más comunes son copiar un modelo genérico, no adaptarlo al capital real, olvidar la valoración y firmar antes de tener claras las aportaciones de cada socio.',
					'También es un error dejarlo sin revisar cuando entra un inversor o cambia la composición del capital. El pacto debe actualizarse con la sociedad.',
				],
			},
		],
		checklist: [
			'Define mayorías y derechos de veto por escrito.',
			'Fija el método de valoración de la participación.',
			'Regula salida, fallecimiento y divorcio de socios.',
			'Incluye no competencia y dedicación.',
			'Revisa el pacto al entrar nuevos inversores.',
		],
		faq: [
			{
				question: '¿El pacto de socios sustituye a los estatutos?',
				answer:
					'No. Los estatutos regulan la sociedad frente a terceros y se inscriben; el pacto regula la relación entre los socios. Se complementan y conviene que sean coherentes entre sí.',
			},
			{
				question: '¿Se puede obligar a un socio a vender su parte?',
				answer:
					'Solo si se pactó. Las cláusulas de arrastre, acompañamiento o salida obligatoria permiten forzar la venta en los supuestos previstos. Sin pacto, no cabe imponerlo.',
			},
			{
				question: '¿Qué pasa si un socio incumple el pacto?',
				answer:
					'Se puede exigir su cumplimiento, reclamar daños y perjuicios o activar las cláusulas de salida. El pacto obliga como contrato, aunque no esté inscrito en el Registro.',
			},
		],
		relatedServices: [
			{ path: '/empresas/constitucion-sociedades', label: 'constitución de sociedades' },
			{ path: '/empresas/contratos-mercantiles', label: 'contratos mercantiles' },
			{ path: '/compraventas-empresas', label: 'compraventa de empresas' },
		],
	},
	{
		slug: 'disolucion-y-liquidacion-de-sociedad',
		title: 'Disolución y liquidación de una sociedad: cómo se hace',
		description:
			'Causas de disolución de una sociedad, diferencias con la liquidación, pasos del proceso, responsabilidad de los socios y consecuencias fiscales.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '8 min',
		intro: 'Disolver una sociedad no es lo mismo que liquidarla: la disolución abre el proceso y la liquidación lo cierra. Entre ambos pasos hay obligaciones registrales, fiscales y de responsabilidad que, si se ignoran, acaban afectando al patrimonio personal del socio. Ordenar bien el proceso evita sorpresas años después.',
		sections: [
			{
				heading: 'Disolución y liquidación: qué son',
				paragraphs: [
					'La disolución es la decisión de poner fin a la actividad y abre el periodo de liquidación. La sociedad conserva su personalidad jurídica, pero su objeto pasa a ser liquidar el patrimonio.',
					'La liquidación es el conjunto de operaciones para pagar deudas, cobrar créditos y repartir el remanente. Solo al terminar se produce la extinción con la cancelación registral.',
				],
			},
			{
				heading: 'Causas de disolución',
				paragraphs: [
					'Se disuelve por acuerdo de la junta, por el cumplimiento del plazo, por la conclusión del objeto o por la imposibilidad de lograrlo, entre otras causas.',
					'También se disuelve por pérdidas que reduzcan el patrimonio a la mitad del capital, salvo que se recupere o se amplíe. En ese caso, la junta debe decidir en el plazo legal.',
				],
			},
			{
				heading: 'Pasos del proceso',
				paragraphs: [
					'Se celebra junta, se nombran liquidadores, se forma el inventario y el balance inicial, se paga a los acreedores y se reparte el remanente. Después se elevan a público y se inscriben los acuerdos.',
					'La escritura de extinción exige el balance final y la cuota de liquidación de cada socio. La publicidad en el Boletín Oficial del Registro Mercantil es parte del trámite.',
				],
			},
			{
				heading: 'Responsabilidad de socios y administradores',
				paragraphs: [
					'Los administradores responden si no convocan la junta cuando la disolución es obligatoria o si incumplen las obligaciones del proceso. Su responsabilidad puede alcanzar las deudas sociales.',
					'Los socios responden limitadamente en la SL, pero pueden perder esa protección si se confunde el patrimonio social con el personal o si no se respeta el proceso de liquidación.',
				],
			},
			{
				heading: 'Consecuencias fiscales y registrales',
				paragraphs: [
					'La liquidación tiene efectos fiscales: hay que presentar las declaraciones correspondientes y tributar por el resultado. El reparto del remanente al socio puede generar renta en su IRPF.',
					'En lo registral, la cancelación de asientos pone fin a la sociedad. Un cambio de denominación o una nueva sociedad después no borran las obligaciones pendientes.',
				],
			},
			{
				heading: 'Disolución de hecho',
				paragraphs: [
					'Existe cuando la sociedad cesa en su actividad sin acordar formalmente la disolución. Es una situación de riesgo porque las deudas siguen generándose y la responsabilidad se agrava.',
					'Los acreedores pueden reclamar a la sociedad y a sus administradores. Regularizar la situación a tiempo evita que la inactividad se convierta en un problema personal.',
				],
			},
		],
		checklist: [
			'Confirma si existe causa legal de disolución.',
			'Convoca junta y nombra liquidador.',
			'Forma inventario y balance inicial.',
			'Paga acreedores antes de repartir el remanente.',
			'Inscribe la extinción y presenta las declaraciones fiscales.',
		],
		faq: [
			{
				question: '¿Puedo cerrar la SL sin liquidarla?',
				answer:
					'Formalmente no. Cesar la actividad sin disolver ni liquidar deja la sociedad viva y las deudas siguen generando responsabilidad para administradores y socios.',
			},
			{
				question: '¿Responden los socios de las deudas al disolver?',
				answer:
					'En la sociedad limitada la responsabilidad es limitada al capital. Pero se puede perder esa protección si se confunden patrimonios o se incumple el proceso de liquidación.',
			},
			{
				question: '¿Cuánto tarda la liquidación?',
				answer:
					'Depende del patrimonio y de las deudas pendientes. Hay trámites registrales y fiscales obligatorios; una liquidación ordenada puede resolverse en unos meses.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'asesoría de empresas' },
			{ path: '/empresas/constitucion-sociedades', label: 'constitución de sociedades' },
			{ path: '/cobro-deudas-impagos', label: 'cobro de deudas e impagos' },
		],
	},
	{
		slug: 'clausulas-abusivas-en-contratos',
		title: 'Cláusulas abusivas en contratos: cómo detectarlas y anularlas',
		description:
			'Qué es una cláusula abusiva, cómo se detecta en contratos de consumo, préstamos o alquiler, qué efectos tiene su nulidad y cómo reclamar.',
		date: '2026-10-06',
		category: 'Consumo y banca',
		readTime: '7 min',
		intro: 'Una cláusula abusiva es la que genera un desequilibrio importante en perjuicio del consumidor sin haber sido negociada ni explicada. Aparece en préstamos, seguros, contratos de móvil, gimnasios o alquileres. Detectarla a tiempo permite anularla y recuperar lo cobrado, aunque el contrato se firmara hace años.',
		sections: [
			{
				heading: 'Qué es una cláusula abusiva',
				paragraphs: [
					'Es la estipulación no negociada que, contra las exigencias de la buena fe, causa un desequilibrio relevante entre los derechos y obligaciones de las partes en perjuicio del consumidor.',
					'La ley contiene una lista de cláusulas nulas de pleno derecho. No importa que el consumidor las aceptara: la nulidad opera con independencia del consentimiento prestado.',
				],
			},
			{
				heading: 'Dónde aparecen con más frecuencia',
				paragraphs: [
					'Es habitual verlas en comisiones bancarias, gastos de formalización de hipotecas, cláusulas suelo, intereses de demora, renovaciones automáticas y penalizaciones por baja.',
					'También abundan en seguros vinculados, contratos de servicios con permanencia y reservas de plazas. Suelen estar en letra pequeña o remitidas a condiciones generales.',
				],
			},
			{
				heading: 'Cómo se detecta',
				paragraphs: [
					'Las señales típicas son la falta de información clara, el desequilibrio de deberes, la imposición de renuncias o la remisión a textos que el consumidor no pudo leer con antelación.',
					'El control de transparencia exige que la cláusula sea comprensible en su contenido y consecuencias económicas. Si no lo es, puede declararse abusiva aunque el precio esté pactado.',
				],
			},
			{
				heading: 'Efectos de la nulidad',
				paragraphs: [
					'La cláusula nula se tiene por no puesta: el contrato sigue vigente sin esa estipulación. El juez no puede moderar su contenido ni integrarla de forma que perjudique al consumidor.',
					'En la práctica implica la devolución de las cantidades cobradas al amparo de la cláusula, con sus intereses, y la eliminación de la obligación futura derivada de ella.',
				],
			},
			{
				heading: 'Cómo reclamar',
				paragraphs: [
					'Lo primero es reclamar por escrito a la empresa, identificar la cláusula y pedir su nulidad y la devolución. Guardar el contrato y los recibos de pago es imprescindible.',
					'Si no hay acuerdo, cabe acudir a consumo y, después, a los tribunales. En préstamos hipotecarios, la reclamación de gastos es un supuesto frecuente.',
				],
			},
			{
				heading: 'Control de transparencia',
				paragraphs: [
					'Antes de analizar el carácter abusivo, el juez comprueba si la cláusula superó el control de transparencia: claridad, información previa y comprensibilidad real.',
					'Una cláusula puede no ser abusiva en abstracto pero haber sido impuesta sin información suficiente. Ese doble filtro refuerza la posición del consumidor.',
				],
			},
		],
		checklist: [
			'Localiza las cláusulas de comisiones y penalizaciones.',
			'Comprueba si hubo información previa clara.',
			'Reclama por escrito la nulidad y la devolución.',
			'Guarda contrato, condiciones y recibos de pago.',
			'Acude a consumo o a los tribunales si no hay acuerdo.',
		],
		faq: [
			{
				question: '¿Puede anularse una cláusula que firmé y acepté?',
				answer:
					'Sí. La nulidad de las cláusulas abusivas opera con independencia del consentimiento. No importa que se firmaran: la norma las tiene por no puestas.',
			},
			{
				question: '¿Qué pasa con el contrato si anulan una cláusula?',
				answer:
					'El contrato continúa vigente sin esa estipulación. El juez no puede moderarla ni sustituirla de manera que perjudique al consumidor, y procede la devolución de lo cobrado.',
			},
			{
				question: '¿Cuánto tiempo tengo para reclamar una cláusula abusiva?',
				answer:
					'La acción de nulidad no tiene un plazo corto de caducidad y puede ejercerse mientras la cláusula siga produciendo efectos. La devolución de cantidades exige reclamar sin demoras excesivas.',
			},
		],
		relatedServices: [
			{ path: '/consumo', label: 'derecho del consumo' },
			{ path: '/nulidad-contrato', label: 'nulidad de contrato' },
			{ path: '/incumplimiento-contrato', label: 'incumplimiento de contrato' },
		],
	},
	{
		slug: 'garantia-de-productos-y-devoluciones',
		title: 'Garantía de productos y devoluciones: tus derechos',
		description:
			'Cuánto dura la garantía legal de un producto, qué cubre, cuándo puedes exigir la devolución y cómo reclamar si el vendedor se niega a repararlo.',
		date: '2026-10-06',
		category: 'Consumo y banca',
		readTime: '6 min',
		intro: 'Cuando un producto sale defectuoso, la ley reconoce al consumidor un plazo de garantía y unas opciones concretas: reparar, sustituir, rebajar el precio o resolver el contrato. Muchas tiendas intentan reducir estos derechos a una simple reparación o a la garantía del fabricante. Saber qué te corresponde evita perderlo.',
	sections: [
		{
			heading: 'Garantía legal y comercial',
			paragraphs: [
				'La garantía legal la impone la ley y la asume el vendedor, con independencia de la marca. La garantía comercial es un añadido voluntario del fabricante que no puede reducir la legal.',
				'Reclamar dentro de la garantía legal no cuesta nada al consumidor ni impide acudir al vendedor aunque exista garantía del fabricante. Se elige el camino más favorable.',
			],
		},
		{
			heading: 'Plazos',
			paragraphs: [
				'La garantía legal cubre los defectos que aparezcan en un plazo de varios años desde la entrega. La carga de probar el defecto es distinta según el momento: al principio se presume que ya existía.',
				'En productos técnicos conviene guardar la factura o el justificante de compra: es la prueba de la fecha de entrega y de que la compra fue a un vendedor profesional.',
			],
		},
		{
			heading: 'Qué cubre y qué no',
			paragraphs: [
				'Cubre defectos de origen, funcionamiento y concordancia con lo ofrecido. No cubre el desgaste normal, el mal uso, la pérdida o los daños por manipulación indebida.',
				'El defecto debe existir ya en el momento de la entrega o derivarse de un fallo de fabricación. Si el desconocimiento o el mal uso lo descarta la prueba, la reclamación puede decaer.',
			],
		},
		{
			heading: 'Devolución y rebaja de precio',
			paragraphs: [
				'El consumidor puede elegir entre reparación y sustitución. Solo si no resultan posibles o proporcionadas cabe la rebaja del precio o la resolución con devolución del importe.',
				'La reparación y la sustitución deben hacerse sin gastos para el consumidor y en un plazo razonable. Un retraso excesivo permite exigir las alternativas.',
			],
		},
		{
			heading: 'Cómo reclamar',
			paragraphs: [
				'Reclama al vendedor, no al fabricante, por escrito y con la factura. Pide la reparación o la sustitución, o la devolución si procede, y deja constancia de la fecha.',
				'Si la tienda se niega, acude a la oficina de consumo con la documentación. La reclamación previa por escrito suele ser requisito antes de la vía judicial.',
			],
		},
		{
			heading: 'Compras online y desistimiento',
			paragraphs: [
				'En compras a distancia existe además un derecho de desistimiento durante un plazo desde la recepción, sin necesidad de alegar defecto. Es un derecho distinto de la garantía.',
				'El vendedor debe informar del derecho y de las condiciones. Si no lo hace, el plazo de desistimiento se amplía, lo que refuerza la posición del consumidor.',
			],
		},
		],
		checklist: [
			'Guarda la factura y el justificante de compra.',
			'Reclama por escrito al vendedor y pide fecha.',
			'Elige reparación o sustitución si procede.',
			'No aceptes renuncias que limiten la garantía legal.',
			'Acude a consumo si la tienda se niega.',
		],
		faq: [
			{
				question: '¿Puede la tienda obligarme a usar la garantía del fabricante?',
				answer:
					'No. La garantía legal la asume el vendedor y no puede derivarte al fabricante en perjuicio de tus derechos. Puedes reclamar directamente a quien te vendió el producto.',
			},
			{
				question: '¿Tengo derecho a devolución si el producto es defectuoso?',
				answer:
					'Primero se ofrece reparación o sustitución. Si no son posibles o proporcionadas, puedes exigir la rebaja del precio o la resolución con devolución del importe pagado.',
			},
			{
				question: '¿Puedo devolver una compra online sin explicar por qué?',
				answer:
					'En compras a distancia existe un derecho de desistimiento dentro de un plazo desde la recepción, sin alegar defecto. Es distinto de la garantía por producto defectuoso.',
			},
		],
		relatedServices: [
			{ path: '/consumo', label: 'derecho del consumo' },
			{ path: '/incumplimiento-contrato', label: 'incumplimiento de contrato' },
			{ path: '/nulidad-contrato', label: 'nulidad de contrato' },
		],
	},
	{
		slug: 'fraude-fiscal-y-delito-contra-hacienda',
		title: 'Fraude fiscal: cuándo un impago se convierte en delito',
		description:
			'Cuándo el fraude fiscal es delito contra la Hacienda Pública, qué cuantías activan el tipo penal, qué consecuencias tiene y cómo regularizar.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '8 min',
		intro: 'No todo impago de impuestos es delito: la frontera entre la sanción administrativa y la responsabilidad penal depende de la cuantía, del medio empleado y de la intención. Una vez que la Agencia Tributaria traslada el caso a la vía penal, la defensa cambia por completo. Conocer el umbral y las opciones de regularización es determinante.',
	sections: [
		{
			heading: 'Qué es el delito contra la Hacienda Pública',
			paragraphs: [
				'Es el delito que castiga defraudar a la Hacienda Pública eludiendo el pago de tributos por alguno de los medios legalmente previstos, como la ocultación de ingresos o la utilización de facturas falsas.',
				'Se distingue de la simple infracción administrativa por la cuantía defraudada y por la concurrencia de una finalidad de elusión. El dolo, la intención de defraudar, es esencial.',
			],
		},
		{
			heading: 'Cuándo el impago es delito',
			paragraphs: [
				'La ley fija umbrales económicos que marcan la frontera entre la sanción tributaria y el delito. Superado el umbral, la conducta puede ser perseguible penalmente.',
				'Los medios comisivos típicos son la lleva de contabilidad falsa, el uso de facturas que no responden a operaciones reales y la omisión de ingresos relevantes. La prueba documental es el eje del caso.',
			],
		},
		{
			heading: 'Cuantías y umbrales',
			paragraphs: [
				'Existe un umbral general que se eleva a determinadas cantidades que la ley actualiza periódicamente. También son relevantes los umbrales ligados a subvenciones y ayudas públicas.',
				'Puede existir delito incluso con importes que, en apariencia, no parecen grandes si concurren agravantes o si la defraudación se repite en distintos ejercicios.',
			],
		},
		{
			heading: 'Regularización y exención de pena',
			paragraphs: [
				'Regularizar de forma completa y dentro del plazo legal puede evitar la responsabilidad penal. La clave es la voluntariedad, la espontaneidad y el pago íntegro de la deuda e intereses.',
				'La regularización posterior a una inspección abierta o a una denuncia no produce el mismo efecto. Actuar antes de que se inicie el procedimiento penal es decisivo.',
			],
		},
		{
			heading: 'Responsabilidad de administradores',
			paragraphs: [
				'Los administradores y quienes de hecho gestionan la empresa pueden responder penalmente si ordenaron o participaron en la defraudación. No ampara actuar a nombre de la sociedad como escudo.',
				'La llevanza de una contabilidad paralela o el uso de sociedades interpuestas agrava la posición. La trazabilidad de las decisiones es clave para la defensa.',
			],
		},
		{
			heading: 'Consecuencias penales',
			paragraphs: [
				'Las penas incluyen prisión y multa, y pueden añadirse inhabilitación y responsabilidad civil por la deuda. La cuantía y las agravantes determinan la extensión de la pena.',
				'Además, la Agencia Tributaria mantiene su propia reclamación. La defensa penal y la tributaria deben coordinarse para no perjudicarse mutuamente.',
			],
		},
		],
		checklist: [
			'Revisa las cuantías y el tributo afectado.',
			'Espera la regularización voluntaria y completa.',
			'Conserva la contabilidad y las facturas justificativas.',
			'Coordina la defensa penal y la tributaria.',
			'Busca asesoramiento antes de que llegue la inspección.',
		],
		faq: [
			{
				question: '¿A partir de qué cantidad es delito el fraude fiscal?',
				answer:
					'La ley fija umbrales económicos que marcan la frontera entre la sanción administrativa y el delito. Superado el umbral, la conducta puede perseguirse penalmente, con agravantes por repetición.',
			},
			{
				question: '¿Si regularizo evito la cárcel?',
				answer:
					'Sí, una regularización completa, voluntaria y dentro del plazo legal puede eximir de responsabilidad penal. Si ya hay inspección o denuncia abierta, el efecto desaparece.',
			},
			{
				question: '¿Responden los administradores personalmente?',
				answer:
					'Sí. Quienes ordenan o participan en la defraudación pueden responder penalmente, aunque actúen en nombre de la sociedad. La sociedad no actúa como escudo.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/recursos-administrativos', label: 'recursos administrativos' },
			{ path: '/empresas', label: 'asesoría de empresas' },
		],
	},
	{
		slug: 'drogotest-positivo-y-sanciones',
		title: 'Drogotest positivo: sanciones y cómo recurrirlo',
		description:
			'Qué sanciones conlleva dar positivo en drogas al volante, cómo se practica el test, los plazos de retirada del carnet y cómo impugnarlo.',
		date: '2026-10-06',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
		intro: 'Dar positivo en drogas al volante tiene consecuencias administrativas y, según el caso, penales. La prueba se practica con un test indiciario y su resultado puede impugnarse si no se respetaron los protocolos. Conocer cómo se practica y qué plazos se manejan es la base para defenderse con garantías.',
	sections: [
		{
			heading: 'Qué detecta el drogotest',
			paragraphs: [
				'El test indiciario analiza una muestra de saliva para detectar el consumo reciente de sustancias como cannabis, cocaína o anfetaminas. Un resultado positivo activa medidas cautelares sobre la conducción.',
				'El positivo indiciario se confirma con un análisis de laboratorio sobre una segunda muestra, que es la que tiene valor probatorio definitivo. La cadena de custodia es fundamental.',
			],
		},
		{
			heading: 'Sanciones administrativas',
			paragraphs: [
				'Dar positivo conlleva multa económica y la retirada de puntos del carnet. La cuantía y los puntos dependen de la vía por la que se tramite la denuncia.',
				'Si el positivo se produce en un control o tras un accidente, se añaden consecuencias sobre la responsabilidad civil y sobre las coberturas del seguro. El seguro puede repercutir en casos graves.',
			],
		},
		{
			heading: 'Cuándo hay delito penal',
			paragraphs: [
				'Conducir bajo la influencia de drogas que afecte a la capacidad se castiga como delito contra la seguridad vial si se pone en riesgo concreto a otros. No se exige un índice mínimo como en el alcohol.',
				'La influencia se acredita con el informe de los agentes, los síntomas observados y el análisis. La defensa se centra en discutir si existía realmente afectación de la conducción.',
			],
		},
		{
			heading: 'Cómo se practica la prueba',
			paragraphs: [
				'Los agentes pueden requerir la prueba a cualquier conductor por síntomas, en controles preventivos o tras un accidente. La negativa a someterse se sanciona con dureza, incluso penalmente.',
				'El protocolo exige informar al conductor, recoger dos muestras y garantizar su custodia. Un defecto en la cadena de custodia permite impugnar el resultado del laboratorio.',
			],
		},
		{
			heading: 'Cómo recurrir la multa',
			paragraphs: [
				'Frente a la denuncia administrativa cabe alegar en el plazo indicado y, después, recurso de alzada. La estrategia pasa por revisar el acta, la sintomatología y el análisis confirmatorio.',
				'Aportar pruebas de no consumo o de error del test, y controlar los plazos, es esencial. La defensa debe decidir si conviene discutir la influencia o la propia validez de la prueba.',
			],
		},
		{
			heading: 'Retirada de puntos y del carnet',
			paragraphs: [
				'Los positivos restan puntos y, cuando se agotan, se pierde la vigencia del permiso. La recuperación exige curso de sensibilización y, en su caso, examen.',
				'En la vía penal, el juez puede imponer la privación del derecho a conducir. Esa condena se anota y condiciona la recuperación posterior del carnet.',
			],
		},
		],
		checklist: [
			'No te niegues a la prueba: agrava la sanción.',
			'Pide copia del acta y del resultado.',
			'Comprueba la cadena de custodia de las muestras.',
			'Alega dentro del plazo de la denuncia.',
			'Valora la defensa penal si hubo influencia.',
		],
		faq: [
			{
				question: '¿Puedo negarme a hacer el drogotest?',
				answer:
					'No. La negativa a someterse a la prueba se sanciona con dureza, incluso penalmente. Es preferible realizarla y, después, impugnar el resultado por la vía legal.',
			},
			{
				question: '¿Un positivo en saliva es siempre delito?',
				answer:
					'No siempre. En la vía administrativa hay sanción y retirada de puntos. Para el delito penal se exige que las drogas afecten a la capacidad de conducir y generen riesgo.',
			},
			{
				question: '¿Cómo impugno el resultado del test?',
				answer:
					'Revisando el acta, el protocolo, la sintomatología y la cadena de custodia de la muestra de laboratorio. Un defecto en el procedimiento puede invalidar la prueba.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-multas-trafico', label: 'reclamación de multas' },
			{ path: '/indemnizaciones-trafico', label: 'indemnizaciones de tráfico' },
			{ path: '/derecho-penal', label: 'defensa penal' },
		],
	},
	{
		slug: 'seguro-de-hogar-y-reclamacion',
		title: 'Seguro de hogar: qué cubre y cómo reclamar al seguro',
		description:
			'Qué cubre un seguro de hogar, qué riesgos quedan fuera, cómo se reclama un siniestro y qué hacer si la aseguradora rechaza o paga de menos.',
		date: '2026-10-06',
		category: 'Seguros',
		readTime: '7 min',
		intro: 'El seguro de hogar cubre daños en la vivienda, en los bienes y, según la póliza, la responsabilidad frente a terceros. Las disputas nacen casi siempre por una cobertura que se creía contratada y no lo estaba, o por una indemnización inferior a lo esperado. Leer la póliza antes de reclamar evita falsas expectativas y refuerza la posición.',
	sections: [
		{
			heading: 'Qué cubre el seguro de hogar',
			paragraphs: [
				'Cubre daños por incendio, agua, robo, fenómenos atmosféricos y responsabilidad civil frente a terceros, según las coberturas contratadas. Incluye también el continente y, si se pacta, el contenido.',
				'La póliza puede cubrir la vivienda habitual y otros inmuebles. Es importante revisar si el capital asegurado corresponde al valor de reconstrucción real del inmueble.',
			],
		},
		{
			heading: 'Coberturas habituales y sus límites',
			paragraphs: [
				'Suelen fijarse sublímites para joyas, obras de arte, dinero o equipos electrónicos, y franquicias que el asegurado asume en cada siniestro. Ignorarlos lleva a reclamar por encima de lo pactado.',
				'Los fenómenos atmosféricos, el deterioro por falta de mantenimiento y los daños por humedad crónica quedan frecuentemente fuera. La definición exacta de cada cobertura está en las condiciones particulares.',
			],
		},
		{
			heading: 'Cómo declarar un siniestro',
			paragraphs: [
				'El siniestro debe comunicarse cuanto antes, con los daños y las circunstancias, y aportar la documentación que pida la aseguradora. El retraso injustificado puede perjudicar la reclamación.',
				'Conviene documentar con fotografías, presupuestos e informes periciales. La aseguradora puede designar a su propio perito y el asegurado puede designar el suyo.',
			],
		},
		{
			heading: 'Por qué rechaza el seguro',
			paragraphs: [
				'Los rechazos habituales se basan en que el daño no está cubierto, en la falta de mantenimiento, en una descripción inexacta del riesgo o en la infravaloración del capital asegurado.',
				'La regla de equidad y la proporcionalidad del capital pueden reducir la indemnización si la vivienda estaba asegurada por debajo de su valor real. Revisar el capital es clave al contratar.',
			],
		},
		{
			heading: 'Cómo reclamar',
			paragraphs: [
				'Si la aseguradora rechaza o paga de menos, cabe reclamar extrajudicialmente y, después, acudir al defensor del asegurado o a los tribunales. El informe de un perito propio suele ser decisivo.',
				'Es útil diferenciar entre la reclamación por el seguro y la reclamación de daños a un tercero responsable, que sigue una vía distinta. Ambas pueden acumularse según el caso.',
			],
		},
		{
			heading: 'Reclamación de daños a un tercero',
			paragraphs: [
				'Cuando el daño lo causa un tercero, por ejemplo una comunidad o un vecino, lo correcto es reclamar primero al seguro del responsable y valorar la acción civil directa si no responde.',
				'La elección entre reclamar al propio seguro o al responsable afecta a plazos y a la indemnización. Coordinar ambas vías evita duplicidades y pérdidas.',
			],
		},
		],
		checklist: [
			'Lee las coberturas, sublímites y franquicias.',
			'Comprueba que el capital asegurado es suficiente.',
			'Comunica el siniestro cuanto antes.',
			'Documenta los daños con fotos e informes.',
			'Reclama por escrito el importe que falta.',
		],
		faq: [
			{
				question: '¿El seguro de hogar cubre siempre los daños por agua?',
				answer:
					'Depende de la póliza. Suele cubrirse el daño repentino, pero no la humedad crónica ni el deterioro por falta de mantenimiento, que quedan fuera con frecuencia.',
			},
			{
				question: '¿Qué hago si el seguro paga menos de lo que corresponde?',
				answer:
					'Puedes reclamar por escrito con un informe pericial propio. Si no hay acuerdo, cabe acudir al defensor del asegurado o a los tribunales para reclamar la diferencia.',
			},
			{
				question: '¿Puedo reclamar al seguro del responsable?',
				answer:
					'Sí. Si el daño lo causó un tercero, puedes reclamar a su aseguradora y valorar la acción civil. Conviene coordinar esta vía con la reclamación a tu propio seguro.',
			},
		],
		relatedServices: [
			{ path: '/reclamaciones-seguros', label: 'reclamación de seguros' },
			{ path: '/consumo', label: 'derecho del consumo' },
			{ path: '/derecho-civil', label: 'derecho civil' },
		],
	},
	{
		slug: 'proteccion-internacional-asilo-y-refugio',
		title: 'Asilo y refugio: cómo pedir protección internacional',
		description:
			'Quién puede solicitar asilo o refugio en España, dónde se pide, qué ocurre durante la tramitación y qué hacer si deniegan la protección internacional.',
		date: '2026-10-06',
		category: 'Extranjería',
		readTime: '8 min',
		intro: 'La protección internacional ampara a quienes huyen de un conflicto o de una persecución y no pueden volver a su país. Su tramitación es independiente de los permisos de residencia y tiene reglas propias sobre plazos, documentación y derechos durante la espera. Presentar la solicitud bien y a tiempo marca la diferencia en un procedimiento complejo.',
	sections: [
		{
			heading: 'Qué es la protección internacional',
			paragraphs: [
				'Incluye el estatuto de refugiado y la protección subsidiaria. El primero ampara a quienes sufren persecución por motivos protegidos; la segunda, a quienes afrontarían un riesgo grave si volvieran a su país.',
				'Es una protección de carácter humanitario y no una autorización de residencia al uso. Su concesión depende de acreditar la necesidad de protección, no de motivos económicos.',
			],
		},
		{
			heading: 'Quién puede solicitarla',
			paragraphs: [
				'Cualquier persona extranjera presente en España o en la frontera que justifique el temor de persecución o el riesgo grave puede solicitarla, con independencia de su situación administrativa.',
				'Los menores no acompañados y las personas especialmente vulnerables tienen garantías reforzadas. La solicitud debe expresar los hechos de forma completa, clara y coherente.',
			],
		},
		{
			heading: 'Dónde y cómo se solicita',
			paragraphs: [
				'La solicitud se presenta en la oficina de extranjería, en los puestos fronterizos o en determinados centros habilitados. Incluye entrevista y relato de los hechos que motivan el temor.',
				'Conviene preparar pruebas documentales, informes de organizaciones y cualquier elemento que corrobore el relato. La coherencia entre relato y pruebas es decisiva.',
			],
		},
		{
			heading: 'Derechos durante la tramitación',
			paragraphs: [
				'Durante la tramitación se expide un documento que acredita la condición de solicitante, con acceso a asistencia sanitaria, jurídica y, según el caso, a medios de subsistencia.',
				'No implica la autorización automática para trabajar: existe una autorización específica sujeta a requisitos y plazos.',
			],
		},
		{
			heading: 'Denegación y recursos',
			paragraphs: [
				'La denegación debe ser motivada y cabe recurso ante la jurisdicción contencioso-administrativa. El plazo para recurrir es breve, así que conviene preparar el escrito con antelación.',
				'La vía de protección internacional no impide otras opciones de regularización por arraigo, si se cumplen los requisitos y los plazos.',
			],
		},
		{
			heading: 'Extranjería tras la resolución',
			paragraphs: [
				'Si se concede, se expide la autorización de residencia vinculada al estatuto. Si se deniega, hay que valorar el encaje con otras figuras: arraigo, residencia por circunstancias excepcionales o reagrupación.',
				'Planificar la estrategia migratoria después de la resolución evita quedar en situación irregular. La coordinación con el abogado desde el inicio del procedimiento es clave.',
			],
		},
		],
		checklist: [
			'Reúne pruebas que corroboren tu relato.',
			'Presenta la solicitud en el órgano competente.',
			'Guarda el documento de solicitante y sus renovaciones.',
			'Controla el plazo para recurrir una denegación.',
			'Valora otras vías de extranjería en paralelo.',
		],
		faq: [
			{
				question: '¿Necesito estar en situación regular para pedir asilo?',
				answer:
					'No. La protección internacional puede solicitarse con independencia de la situación administrativa. Lo determinante es acreditar el temor de persecución o el riesgo grave.',
			},
			{
				question: '¿Puedo trabajar mientras se tramita el asilo?',
				answer:
					'No de forma automática. El documento de solicitante da acceso a asistencia, pero la autorización de trabajo está sujeta a requisitos y plazos específicos que hay que cumplir.',
			},
			{
				question: '¿Qué pasa si me deniegan la protección internacional?',
				answer:
					'Cabe recurso ante la jurisdicción contencioso-administrativa, con un plazo breve. En paralelo, se pueden valorar otras vías como el arraigo o la residencia por circunstancias excepcionales.',
			},
		],
		relatedServices: [
			{ path: '/nacionalidad-extranjeria', label: 'nacionalidad y extranjería' },
			{ path: '/recursos-administrativos', label: 'recursos administrativos' },
			{ path: '/tutela-legal', label: 'tutela y protección' },
		],
	},
];
