/**
 * Lotes sexto y séptimo de contenido nuevo (oct 2026). Salen del exporte de
 * Google Search Console (`google_search/Consultas.csv`): consultas con
 * impresiones informativas y sin página dedicada dentro de los clústeres que
 * ya existen (herencias, civil, laboral, extranjería, penal, tráfico, consumo,
 * empresa y Seguridad Social). Ninguna crea categoría nueva.
 *
 * Cada artículo declara sus tres `relatedServices` para alimentar el enlazado
 * bidireccional de `blogInternalLinks.ts`: la entrada derivada hace que la
 * página de servicio enlace de vuelta a la guía, así que ninguna queda huérfana.
 * Reglas de forma: title ≤ 62, description ≤ 162 e intro > 150 caracteres.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_SEO: SeoArticle[] = [
	{
		slug: 'cuota-viudal-usufructuaria',
		title: 'Usufructo del cónyuge viudo: la cuota viudal en Andalucía',
		description:
			'Qué es la cuota viudal usufructuaria, cómo se calcula según los hijos, cómo se conmuta por dinero o bienes y qué pasa si el viudo renuncia.',
		date: '2026-10-06',
		category: 'Herencias',
		readTime: '7 min',
		intro: 'Cuando fallece un cónyuge, el superviviente no hereda como un hijo más: la ley le reserva el usufructo de una parte de la herencia. Saber cómo se calcula esa cuota y cómo se convierte en dinero o en bienes evita conflictos con los hijos y con el resto de herederos.',
		sections: [
			{
				heading: 'Qué es la cuota viudal usufructuaria',
				paragraphs: [
					'La cuota viudal es el derecho que el Código Civil reconoce al cónyuge que sobrevive cuando concurre con otros herederos. No es una propiedad sobre los bienes, sino un usufructo: el viudo puede usar y disfrutar de una parte de la herencia, pero no puede disponer de ella como si fuera suya.',
					'Su finalidad es proteger al cónyuge que compartió su vida con el fallecido y suele tener menos recursos. Por eso la ley la configura como un derecho que se calcula sobre el valor de los bienes y que se ajusta según quiénes sean los demás herederos.',
				],
			},
			{
				heading: 'Cómo se calcula según quién concurre',
				paragraphs: [
					'La proporción depende de quién herede junto al viudo. Si concurre con hijos o descendientes, el usufructo alcanza una parte de la herencia; si no hay descendientes pero sí ascendientes, la proporción cambia; y si no concurre con nadie de esos grupos, el usufructo se extiende a una parte mayor.',
					'El cálculo se hace sobre el valor líquido de la herencia, es decir, descontando las deudas antes de fijar la cuota. Por eso es imprescindible inventariar bien los bienes y las cargas antes de hablar de porcentajes.',
				],
			},
			{
				heading: 'La conmutación: cambiar usufructo por algo concreto',
				paragraphs: [
					'El viudo puede pedir que su usufructo se convierta en otra cosa: una renta vitalicia, un capital en dinero o un lote de bienes concretos. Esa operación se llama conmutación y permite evitar que la viuda o el viudo tenga que administrar bienes compartidos con los hijos.',
					'La conmutación puede acordarse entre todos los interesados o pedirse al juez cuando hay desacuerdo. Bien planteada, es la vía más habitual para cerrar una herencia sin dejar bienes en mano común durante años.',
				],
			},
			{
				heading: 'Derechos y límites del usufructuario',
				paragraphs: [
					'Quien ostenta el usufructo puede usar los bienes y percibir sus frutos, pero debe conservarlos y no puede venderlos ni hipotecarlos como propietario. Si los bienes producen rentas, esas rentas son del usufructuario durante el tiempo del usufructo.',
					'Frente a terceros, el usufructo puede inscribirse en el Registro de la Propiedad. Esa publicidad protege al viudo y también avisa a quien quiera comprar: el comprador adquiere la nuda propiedad, es decir, la propiedad sin el disfrute.',
				],
			},
			{
				heading: 'Qué pasa si el viudo renuncia',
				paragraphs: [
					'El viudo puede renunciar a la cuota viudal. Si lo hace, esa parte se reparte conforme a las reglas de la sucesión, lo que en la práctica suele beneficiar a los hijos o a los demás herederos.',
					'La renuncia debe hacerse con conocimiento de causa y por escrito, porque una vez aceptada la herencia no siempre se puede dar marcha atrás. Conviene revisar antes si compensa renunciar o si es mejor conmutar el usufructo.',
				],
			},
			{
				heading: 'Errores frecuentes al cerrar una herencia',
				paragraphs: [
					'El error más común es repartir los bienes sin calcular la cuota del viudo, y descubrir después que había un derecho que nadie había tenido en cuenta. También es frecuente confundir el usufructo con la propiedad y vender o hipotecar bienes que no se pueden vender solos.',
					'Antes de firmar cualquier partición conviene identificar a todos los herederos, valorar los bienes y decidir cómo se resuelve la cuota viudal: manteniendo el usufructo, conmutándolo o renunciando a él.',
				],
			},
		],
		checklist: [
			'Identifica a todos los herederos y al cónyuge viudo.',
			'Haz inventario de bienes y deudas de la herencia.',
			'Calcula la cuota viudal según los herederos.',
			'Valora conmutar el usufructo por dinero o bienes.',
			'Decide si conviene renunciar antes de firmar.',
		],
		faq: [
			{
				question: '¿El cónyuge viudo hereda en propiedad o solo el usufructo?',
				answer:
					'Con carácter general recibe un usufructo, no la propiedad de los bienes. Eso significa que puede usar y disfrutar de una parte de la herencia, pero no venderla ni disponer de ella como dueño.',
			},
			{
				question: '¿Se puede convertir el usufructo en dinero?',
				answer:
					'Sí, mediante la conmutación. Puede acordarse entre los herederos o pedirse al juez, y permite sustituir el usufructo por una renta, un capital o un lote de bienes concretos.',
			},
			{
				question: '¿Qué pasa si el viudo renuncia a su cuota?',
				answer:
					'La parte correspondiente se reparte conforme a las reglas de la sucesión, lo que normalmente favorece a los hijos u otros herederos. La renuncia debe hacerse por escrito y con conocimiento de sus efectos.',
			},
		],
		relatedServices: [
			{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
			{ path: '/disputas-herencias', label: 'conflictos entre herederos' },
			{ path: '/derecho-civil', label: 'asesoramiento civil' },
		],
	},
	{
		slug: 'impugnar-acuerdos-junta-propietarios',
		title: 'Impugnar un acuerdo de la junta de propietarios',
		description:
			'Cuándo se puede impugnar un acuerdo de la comunidad de propietarios, los plazos según el motivo, quién está legitimado y qué se pide al juez.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'No todo lo que aprueba una junta de vecinos es válido. Un acuerdo contrario a la ley, a los estatutos o que perjudica injustamente a un propietario se puede impugnar, pero los plazos son cortos y dependen del motivo. Dejar pasar el tiempo convierte el acuerdo en definitivo.',
		sections: [
			{
				heading: 'Qué acuerdos se pueden impugnar',
				paragraphs: [
					'La Ley de Propiedad Horizontal distingue tres grandes motivos de impugnación: los acuerdos contrarios a la ley, los contrarios a los estatutos de la comunidad y los que resultan gravemente perjudiciales para algún propietario o se adoptan sin respetar las reglas de convocatoria y mayoría.',
					'No cualquier desacuerdo sirve. Que la decisión no guste no basta: hay que identificar qué norma se ha infringido o en qué se perjudica de forma injustificada al propietario que reclama.',
				],
			},
			{
				heading: 'Los plazos según el motivo',
				paragraphs: [
					'Los plazos cambian según la causa. Los acuerdos contrarios a la ley tienen un plazo más corto que los contrarios a los estatutos o los perjudiciales, y el cómputo arranca desde la fecha de la junta o desde que el propietario conoce el acuerdo.',
					'Como son plazos de caducidad, no se interrumpen por negociar ni por reclamar de palabra. Por eso lo primero que hay que hacer al recibir un acuerdo dudoso es comprobar la fecha y el plazo aplicable.',
				],
			},
			{
				heading: 'Quién puede impugnar',
				paragraphs: [
					'Puede impugnar cualquier propietario que no votó a favor del acuerdo, así como quienes no asistieron a la junta. También pueden hacerlo los propietarios a quienes perjudica directamente la decisión, aunque hubieran estado presentes.',
					'Junto al propietario pueden actuar quienes tengan un interés legítimo, como un titular de un derecho sobre el inmueble. Conviene acreditar la titularidad y la posición en la que se impugna.',
				],
			},
			{
				heading: 'La junta y el acta como prueba',
				paragraphs: [
					'El acta de la junta es la pieza clave: en ella consta la convocatoria, el orden del día, los asistentes, las mayorías y el contenido del acuerdo. Un vicio en la convocatoria o en el cómputo de las mayorías puede por sí solo justificar la impugnación.',
					'Si no hubo acta o está incompleta, hay que reunir los correos, los buzones, los recibos y los testimonios de los vecinos para reconstruir qué se aprobó y cómo.',
				],
			},
			{
				heading: 'Cómo se impugna y qué se pide',
				paragraphs: [
					'La impugnación se plantea mediante demanda ante el juzgado, pidiendo la nulidad del acuerdo y, si procede, la adopción de medidas para restablecer la situación anterior. El juez puede declarar el acuerdo nulo o dejarlo sin efecto.',
					'Antes de demandar conviene intentar un acuerdo en el seno de la comunidad o, si existe, acudir a un procedimiento de mediación. Si hay acuerdo entre los propietarios, se puede revocar o corregir el acuerdo en una nueva junta.',
				],
			},
			{
				heading: 'Errores que debilitan la impugnación',
				paragraphs: [
					'El error más grave es dejar correr el plazo. También debilita el caso acudir sin el acta, sin acreditar cómo se votó o sin concretar qué cláusula o norma se ha infringido.',
					'No conviene mezclar la impugnación con conflictos de convivencia ni con deudas de comunidad ajenas al acuerdo. Cuanto más concreto y documentado esté el motivo, más opciones hay de que prospere.',
				],
			},
		],
		checklist: [
			'Consigue copia del acta y de la convocatoria.',
			'Comprueba la fecha y el plazo de impugnación.',
			'Identifica el motivo: ley, estatutos o perjuicio.',
			'Acredita que no votaste a favor.',
			'Valora la mediación antes de demandar.',
		],
		faq: [
			{
				question: '¿Cuánto tiempo tengo para impugnar un acuerdo de la junta?',
				answer:
					'Depende del motivo. Los acuerdos contrarios a la ley tienen un plazo más breve que los contrarios a los estatutos o los gravemente perjudiciales. Como son plazos de caducidad, conviene comprobarlos de inmediato.',
			},
			{
				question: '¿Puedo impugnar si no asistí a la junta?',
				answer:
					'Sí. Quienes no asistieron y no votaron a favor pueden impugnar el acuerdo, igual que quienes votaron en contra. Lo importante es acreditar la titularidad y el motivo de la impugnación.',
			},
			{
				question: '¿Sirve de algo quejarme en la siguiente junta?',
				answer:
					'La comunidad puede revocar o corregir el acuerdo en una junta posterior, pero esa posibilidad no amplía el plazo de impugnación judicial. Si se acerca el vencimiento, no conviene esperar a la próxima reunión.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'conflictos de comunidad y vecindad' },
			{ path: '/urbanismo', label: 'obras y licencias de la comunidad' },
			{ path: '/cobro-deudas-impagos', label: 'reclamación de cuotas impagadas' },
		],
	},
	{
		slug: 'vicios-ocultos-vivienda',
		title: 'Vicios ocultos en la compraventa de una vivienda',
		description:
			'Qué son los vicios ocultos, la diferencia con el defecto aparente, cómo se reclama al vendedor y qué pruebas y plazos conviene tener en cuenta.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'Comprar una vivienda y descubrir semanas después humedades, una instalación defectuosa o un problema estructural es más frecuente de lo que parece. La ley protege al comprador frente a los defectos ocultos, pero solo si el vicio existía antes de la venta y no era visible. La prueba es lo que decide.',
		sections: [
			{
				heading: 'Qué es un vicio oculto',
				paragraphs: [
					'Un vicio oculto es un defecto que existía en el momento de la venta, que no se veía en una revisión normal y que hace que la cosa no sirva para el uso previsto o reduce tanto su valor que el comprador no la habría comprado en esas condiciones.',
					'La clave es que sea oculto y anterior a la venta. Si el defecto se veía a simple vista o el comprador conocía el problema, no hay vicio oculto que reclamar, porque se entiende que lo asumió al comprar.',
				],
			},
			{
				heading: 'Diferencia con el defecto aparente y con el vicio de la finca',
				paragraphs: [
					'El vendedor responde de los vicios ocultos, pero no de los defectos que se ven en el contrato o en una visita normal. Tampoco basta con que algo se deteriore después de la compra: hay que probar que el origen estaba ya antes.',
					'También hay que distinguir entre el vicio oculto de la compraventa y el defecto constructivo frente al promotor o la constructora, que se rige por la Ley de Ordenación de la Edificación. La vía y el responsable son distintos.',
				],
			},
			{
				heading: 'Cómo se reclama al vendedor',
				paragraphs: [
					'El comprador puede pedir la reparación del defecto, una rebaja del precio o la resolución de la compraventa, según la gravedad del vicio. Lo primero es comunicar el problema por escrito al vendedor, con una descripción clara y una petición concreta.',
					'Si hay plazo, el requerimiento fehaciente deja constancia de la reclamación y de la fecha. Conviene conservar el contrato, las fotos, los informes y toda la correspondencia con el vendedor y con la inmobiliaria.',
				],
			},
			{
				heading: 'La prueba técnica',
				paragraphs: [
					'Un peritaje independiente que determine el origen, la antigüedad y el coste de la reparación es la prueba que más pesa. Sin informe, es fácil que la discusión se convierta en un pulso de afirmaciones.',
					'El informe debe explicar si el defecto se podía detectar a simple vista y si existía antes de la venta. Cuanto más concreta y razonada sea la conclusión, menos margen le deja a la parte contraria.',
				],
			},
			{
				heading: 'Plazos y pérdida del derecho',
				paragraphs: [
					'Las acciones por vicios ocultos están sujetas a plazos y caducan si no se ejercitan a tiempo. Por eso no conviene demorar la reclamación esperando a que el problema se agrave o a que mejore la relación con el vendedor.',
					'Además, si se entrega la vivienda y se acepta sin reservas, o si se realizan reformas que alteran el estado en que se recibió, la reclamación se complica. Lo mejor es documentar el estado inicial cuanto antes.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Firmar la escritura sin haber revisado la vivienda, reformar sin documentar el estado original o reclamar solo de palabra son errores que luego se pagan caros. También lo es aceptar una reparación que no soluciona la causa del problema.',
					'Antes de comprar, una revisión técnica previa y una lectura atenta del contrato y de la nota simple reducen mucho el riesgo. Y si el defecto ya existe, actuar con prueba y por escrito es la mejor defensa.',
				],
			},
		],
		checklist: [
			'Revisa la vivienda antes de firmar la escritura.',
			'Documenta el estado con fotos y fecha.',
			'Encarga un peritaje independiente.',
			'Comunica el defecto por escrito al vendedor.',
			'No reformes sin documentar el problema.',
		],
		faq: [
			{
				question: '¿Cuánto tiempo tengo para reclamar por vicios ocultos?',
				answer:
					'La reclamación está sujeta a plazos que se cuentan desde la entrega o desde que se conoce el defecto, según el caso. Al ser plazos de caducidad, conviene actuar cuanto antes y con prueba técnica.',
			},
			{
				question: '¿Sirve el informe del seguro del hogar?',
				answer:
					'Puede ser útil como primer indicio, pero normalmente no basta. Un peritaje independiente que determine el origen y la antigüedad del defecto es la prueba que mejor sostiene la reclamación.',
			},
			{
				question: '¿Puedo reclamar también a la inmobiliaria?',
				answer:
					'Depende de su papel en la venta y de la información que facilitara. Si ocultó datos o incumplió sus deberes de información, puede responder junto al vendedor, pero hay que valorar cada caso.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
			{ path: '/incumplimiento-contrato', label: 'incumplimiento de contrato' },
			{ path: '/responsabilidad-civil', label: 'responsabilidad civil por daños' },
		],
	},
	{
		slug: 'reclamar-salarios-impagados',
		title: 'Salarios impagados: cómo reclamar a la empresa y al FOGASA',
		description:
			'Cómo reclamar nóminas impagadas: el interés por mora, la papeleta de conciliación, el plazo de un año y qué cubre el FOGASA si la empresa no paga.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'Que la empresa no pague a tiempo es un incumplimiento que el trabajador no tiene por qué soportar. La ley fija un interés por mora, un plazo para reclamar y un fondo que responde cuando la empresa no puede pagar. Conocer esos mecanismos evita perder salarios ya trabajados.',
		sections: [
			{
				heading: 'Qué se puede reclamar y qué no',
				paragraphs: [
					'Se reclaman los salarios vencidos y no pagados, las pagas extraordinarias, las horas extra y cualquier concepto salarial reconocido. No se reclama, en cambio, una cantidad futura que todavía no se ha devengado ni una mejora que nunca se pactó.',
					'Es importante distinguir el salario de las indemnizaciones. La indemnización por despido o los daños y perjuicios van por otra vía y se reclaman de forma separada.',
				],
			},
			{
				heading: 'El interés por mora',
				paragraphs: [
					'El Estatuto de los Trabajadores impone un interés por mora cuando el salario se paga tarde, que es un recargo sobre la cantidad adeudada y no suplanta a la deuda principal. Devengarlo exige, en la práctica, reclamar de forma expresa esas cantidades.',
					'Calcular bien el periodo de retraso y las cantidades que devengan intereses es parte del escrito de reclamación. Un cálculo ordenado evita que la empresa discuta cifras globales sin detalle.',
				],
			},
			{
				heading: 'La papeleta de conciliación, paso previo',
				paragraphs: [
					'Antes de demandar hay que presentar la papeleta de conciliación ante el servicio de mediación correspondiente. Es un trámite previo obligatorio y, además, una oportunidad de cobrar sin pleito, porque en la conciliación la empresa puede reconocer la deuda.',
					'Del resultado de la conciliación depende que se pueda seguir con la demanda. Si la empresa no comparece o no hay acuerdo, se abre la vía judicial sin más.',
				],
			},
			{
				heading: 'El plazo de un año',
				paragraphs: [
					'Las cantidades salariales prescriben al año desde el día en que debieron cobrarse. Es decir, cada nómina impagada tiene su propio plazo, y lo que prescribe es la cantidad concreta, no toda la deuda de golpe.',
					'Un descuido habitual es reclamar solo la última nómina y perder las anteriores. Conviene revisar las nóminas y los justificantes bancarios de todos los meses para no dejar cantidades fuera.',
				],
			},
			{
				heading: 'El FOGASA cuando la empresa no paga',
				paragraphs: [
					'El Fondo de Garantía Salarial responde de parte de los salarios y de las indemnizaciones cuando la empresa es insolvente o entra en concurso. No cubre el total, sino los límites que marca la ley, y solo cuando la empresa no puede hacer frente a la deuda.',
					'Para pedir su intervención hace falta acreditar que el salario es firme y que la empresa no paga, normalmente con el acta de conciliación o con la resolución judicial. El trámite tiene sus propios plazos, así que no conviene dejarlo para el final.',
				],
			},
			{
				heading: 'Errores frecuentes del trabajador',
				paragraphs: [
					'Seguir trabajando mes tras mes sin reclamar por escrito, pedir la deuda solo por WhatsApp o firmar un finiquito con renuncia expresa son errores que dificultan mucho la reclamación posterior. También lo es no ordenar las nóminas por fechas.',
					'Lo correcto es reclamar por escrito lo antes posible, conservar el acuse y comprobar mes a mes qué está pendiente. Si la empresa empieza a impagar, ese es el momento de actuar, no el de esperar a que se resuelva sola.',
				],
			},
		],
		checklist: [
			'Reúne nóminas y justificantes bancarios.',
			'Haz una lista de meses y cantidades pendientes.',
			'Reclama por escrito el pago de inmediato.',
			'Presenta la papeleta de conciliación.',
			'No firmes un finiquito con renuncia.',
		],
		faq: [
			{
				question: '¿Cuánto tiempo tengo para reclamar salarios impagados?',
				answer:
					'Las cantidades salariales prescriben al año desde que debieron cobrarse. Cada mensualidad tiene su propio plazo, así que conviene reclamar todas las que estén pendientes y no solo la última.',
			},
			{
				question: '¿Puedo reclamar sin abogado?',
				answer:
					'En reclamaciones de cantidad no es obligatorio abogado en todos los casos, pero contar con asistencia técnica ayuda a calcular intereses, ordenar la prueba y tramitar la conciliación sin cometer errores de plazo.',
			},
			{
				question: '¿Qué pasa si la empresa cierra?',
				answer:
					'Si la empresa es insolvente o entra en concurso, el FOGASA puede responder de parte de los salarios e indemnizaciones dentro de los límites legales. Hay que acreditar la deuda y seguir su procedimiento.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'reclamaciones laborales' },
			{ path: '/contratos-laborales', label: 'asesoramiento laboral' },
			{ path: '/cobro-deudas-impagos', label: 'reclamación de deudas' },
		],
	},
	{
		slug: 'reduccion-jornada-guarda-legal',
		title: 'Reducción de jornada por guarda legal del menor',
		description:
			'Cómo pedir la reducción de jornada por cuidado de hijo, entre qué proporciones se mueve, cómo se fija el horario y qué ocurre si la empresa la deniega.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'La reducción de jornada por cuidado de hijo permite conciliar sin renunciar al puesto. Es un derecho, no un favor, pero tiene requisitos de edad del menor, límites de proporción y reglas sobre el horario que la empresa no puede decidir sola. Conocerlos evita una denegación improcedente.',
		sections: [
			{
				heading: 'Quién tiene derecho a la reducción',
				paragraphs: [
					'La reducción por guarda legal protege a quien cuida directamente de un menor, y también a quien cuida de un familiar que no puede valerse por sí mismo. El derecho está pensado para el cuidado real y directo, y exige acreditar tanto la situación como el parentesco.',
					'La ley fija una edad máxima del menor para esta reducción, que conviene comprobar en el momento de solicitarla, porque el derecho no se mantiene indefinidamente y decae cuando el hijo supera esa edad.',
				],
			},
			{
				heading: 'Entre qué proporciones se mueve',
				paragraphs: [
					'La reducción se mueve entre un mínimo y un máximo de la jornada, con la correspondiente disminución proporcional del salario. No es un permiso retribuido ni una excedencia: se trabaja menos y se cobra en proporción.',
					'La concreción horaria permite elegir el tramo de jornada que se reduce. Si empresa y trabajador no se ponen de acuerdo, el conflicto se resuelve por la vía prevista para las discrepancias, sin que la empresa pueda imponer horarios que hagan imposible el cuidado.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'La solicitud se presenta por escrito, con una antelación razonable y concretando la fecha de inicio, el porcentaje de reducción y el horario pretendido. Dejar constancia de la petición protege al trabajador frente a una respuesta tardía o a un despido.',
					'Conviene acompañar la documentación que acredite la situación: libro de familia, certificado del centro o, en su caso, informe sobre la dependencia del familiar. La carga de justificar el derecho es de quien lo ejercita.',
				],
			},
			{
				heading: 'Silencio de la empresa y conflictos',
				paragraphs: [
					'Si la empresa no responde, el derecho no desaparece. La actuación de la empresa puede impugnarse y, mientras tanto, el trabajador debe poder ejercer su derecho conforme a lo solicitado si cumple los requisitos.',
					'Si la empresa deniega la concreción horaria, existe un procedimiento específico y rápido para resolver la discrepancia. Acudir tarde o sin prueba debilita la posición, así que conviene documentar cada paso.',
				],
			},
			{
				heading: 'Protección frente al despido',
				paragraphs: [
					'El ejercicio de la reducción de jornada por guarda legal está protegido. Un despido o una represalia por haber solicitado el derecho puede ser nulo, con las consecuencias que eso tiene para la empresa.',
					'Para que esa protección opere, hay que poder acreditar que la medida se adoptó por el ejercicio del derecho. La fecha de la solicitud y la reacción posterior de la empresa son pruebas relevantes.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Pedir la reducción de palabra, no concretar el horario o aceptar una reducción menor para evitar conflictos son errores que luego cuesta corregir. También lo es no documentar el cuidado real del menor.',
					'Antes de solicitar la reducción conviene comprobar la edad del hijo, la proporción que interesa y el horario viable, y presentar la petición por escrito con toda la documentación.',
				],
			},
		],
		checklist: [
			'Comprueba la edad del menor o la situación del familiar.',
			'Concreta el porcentaje de reducción y el horario.',
			'Presenta la solicitud por escrito y con acuse.',
			'Adjunta libro de familia o certificado médico.',
			'No dejes sin respuesta una denegación.',
		],
		faq: [
			{
				question: '¿La empresa puede negarse a la reducción de jornada?',
				answer:
					'Es un derecho del trabajador, no una concesión discrecional. La empresa puede discutir la concreción horaria, pero no impedir la reducción si se cumplen los requisitos. Una denegación sin causa puede impugnarse.',
			},
			{
				question: '¿Cuánto se cobra con la jornada reducida?',
				answer:
					'El salario se reduce en la misma proporción que la jornada. La reducción es una disminución de horas y de retribución, no un permiso retribuido.',
			},
			{
				question: '¿Me pueden despedir mientras tengo la jornada reducida?',
				answer:
					'El ejercicio de este derecho está protegido. Un despido por haber solicitado o disfrutado la reducción puede ser nulo. Para defenderlo es clave acreditar las fechas y la relación entre la solicitud y la decisión de la empresa.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'condiciones de trabajo' },
			{ path: '/despidos', label: 'defensa frente al despido' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'excedencia-laboral',
		title: 'Excedencia laboral: tipos, duración y reserva del puesto',
		description:
			'Qué tipos de excedencia existen, en cuáles se reserva el puesto de trabajo, cómo se solicita y qué ocurre con la antigüedad y la vuelta a la empresa.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'La excedencia permite suspender el contrato durante un tiempo sin renunciar al vínculo laboral. La gran diferencia entre tipos está en si se reserva el puesto de trabajo o solo un derecho preferente a volver. Confundirlos lleva a decisiones difíciles de revertir.',
		sections: [
			{
				heading: 'Qué es la excedencia y qué no',
				paragraphs: [
					'La excedencia suspende el contrato: no se trabaja ni se cobra, pero el vínculo laboral no se extingue. No es una baja voluntaria, aunque en algunos casos el trabajador puede acabar renunciando si no se respetan sus derechos de reincorporación.',
					'A diferencia de la reducción de jornada, la excedencia interrumpe por completo la prestación de servicios. Por eso conviene decidirla con cuidado y por escrito.',
				],
			},
			{
				heading: 'La excedencia voluntaria',
				paragraphs: [
					'La excedencia voluntaria exige una antigüedad mínima en la empresa y un periodo previo sin haberla disfrutado. En este tipo no se reserva el puesto de trabajo, pero sí se conserva un derecho preferente a volver si existe una vacante igual o similar.',
					'Su duración tiene un mínimo y un máximo, y la empresa puede exigir el cumplimiento de los requisitos. El trabajador conviene que solicite por escrito y guarde la respuesta.',
				],
			},
			{
				heading: 'La excedencia por cuidado de hijo',
				paragraphs: [
					'La excedencia por cuidado de hijo o de menor acogido o adoptado es un derecho de duración amplia y con reserva del puesto de trabajo durante una primera etapa. Es una de las figuras que mejor protege la vuelta a la empresa.',
					'Durante el periodo con reserva, el trabajador conserva su puesto y su antigüedad. Con posterioridad, la reserva pasa a ser un derecho preferente, así que el momento de solicitar la reincorporación importa.',
				],
			},
			{
				heading: 'La excedencia por cuidado de familiar',
				paragraphs: [
					'Existe también la excedencia para cuidar de un familiar que, por edad, accidente, enfermedad o discapacidad, no pueda valerse por sí mismo y no desempeñe actividad retribuida. Aquí también se reserva el puesto durante un primer tramo.',
					'Para acreditarla hay que documentar la situación del familiar y el cuidado directo. La empresa puede comprobar esos extremos, así que conviene no dejarlo a medias.',
				],
			},
			{
				heading: 'Antigüedad y efectos durante la excedencia',
				paragraphs: [
					'En la excedencia con reserva de puesto, el tiempo cuenta a efectos de antigüedad, lo que influye en la promoción y en la indemnización futura. En la voluntaria, en cambio, ese cómputo no siempre es igual, y conviene revisarlo antes de solicitarla.',
					'El trabajador no cobra salario ni prestación por el hecho de estar en excedencia, salvo que acceda a una prestación por desempleo o a otra situación protegida. Planificar los ingresos durante ese periodo es imprescindible.',
				],
			},
			{
				heading: 'Errores frecuentes al pedirla o volver',
				paragraphs: [
					'Solicitar la excedencia de palabra, no respetar el plazo de reincorporación o pedir la vuelta fuera de plazo son errores que pueden costar el puesto. También lo es creer que la excedencia voluntaria garantiza volver al mismo puesto.',
					'Antes de solicitarla, conviene comprobar la antigüedad, documentar el motivo y dejar claro por escrito la fecha de inicio y de reincorporación. Y al volver, pedir la reincorporación con antelación y acuse.',
				],
			},
		],
		checklist: [
			'Elige el tipo de excedencia según tu objetivo.',
			'Comprueba la antigüedad y los requisitos.',
			'Presenta la solicitud por escrito y con acuse.',
			'Documenta el cuidado del hijo o familiar.',
			'Solicita la reincorporación dentro de plazo.',
		],
		faq: [
			{
				question: '¿En todas las excedencias se reserva el puesto de trabajo?',
				answer:
					'No. Los derechos de cuidado reservan el puesto durante un primer tramo; la excedencia voluntaria, en cambio, no reserva el puesto, solo un derecho preferente a volver si hay vacante.',
			},
			{
				question: '¿La excedencia cuenta como antigüedad?',
				answer:
					'En la excedencia con reserva de puesto, el periodo computa a efectos de antigüedad. En la voluntaria el cálculo puede ser distinto, así que conviene comprobarlo antes de solicitarla.',
			},
			{
				question: '¿Qué pasa si no pido la vuelta a tiempo?',
				answer:
					'Pedir la reincorporación fuera del plazo previsto puede afectar a tu derecho a volver. Conviene controlar fechas y solicitar la reincorporación por escrito con antelación suficiente.',
			},
		],
		relatedServices: [
			{ path: '/contratos-laborales', label: 'asesoramiento laboral' },
			{ path: '/despidos', label: 'reclamaciones laborales' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		],
	},
	{
		slug: 'falso-autonomo',
		title: 'Falso autónomo: señales y cómo reclamar la laboralidad',
		description:
			'Cuándo un autónomo es en realidad un trabajador por cuenta ajena, qué indicios se valoran, cómo se reclama y qué derechos se recuperan.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'Estar dado de alta como autónomo no convierte en empresario a quien trabaja bajo las órdenes de otro. Si concurren las notas de dependencia y ajenidad, la relación es laboral, y esa calificación abre derechos como vacaciones, indemnización o desempleo.',
		sections: [
			{
				heading: 'Qué es el falso autónomo',
				paragraphs: [
					'El falso autónomo es quien figura dado de alta en el régimen de trabajadores por cuenta propia, pero presta sus servicios de forma dependiente y por cuenta ajena, igual que un empleado. Lo determinante no es la etiqueta del alta, sino cómo se desarrolla el trabajo.',
					'La calificación no depende de lo que digan las facturas o el contrato, sino de la realidad de la prestación. Por eso los indicios que se valoran son los hechos, no las formas.',
				],
			},
			{
				heading: 'Indicios que se valoran',
				paragraphs: [
					'Se valora si el trabajador cumple un horario, si trabaja en las instalaciones de la empresa, si usa sus medios, si no puede rechazar encargos o si solo presta servicios para un cliente. Cuanto más se parece la relación a un empleo, más sólida es la calificación laboral.',
					'También pesan la retribución fija, el control del trabajo, la formación impartida por la empresa y la integración en su organización. Ninguno de estos indicios por sí solo decide, pero el conjunto sí.',
				],
			},
			{
				heading: 'Cómo se reclama la laboralidad',
				paragraphs: [
					'La calificación laboral se plantea normalmente mediante demanda tras la correspondiente reclamación. En el procedimiento se pide que se declare la naturaleza laboral de la relación y, con ella, los derechos que correspondan.',
					'La prueba es el eje del caso: correos, mensajes, control horario, facturas, testigos y cualquier documento que muestre la dependencia y la ajenidad. Cuanto más ordenada esté la prueba, mejor.',
				],
			},
			{
				heading: 'Qué se recupera si se reconoce la relación laboral',
				paragraphs: [
					'Reconocida la laboralidad, el trabajador puede reclamar diferencias salariales, vacaciones, pagas, indemnización por despido y, en su caso, prestación por desempleo. También el alta y la cotización por el tiempo trabajado.',
					'La empresa, además, puede afrontar sanciones y recargos por las cuotas no ingresadas. Por eso estas reclamaciones no se limitan a una cantidad: cambian la situación administrativa de las dos partes.',
				],
			},
			{
				heading: 'Riesgos de ser falso autónomo',
				paragraphs: [
					'El falso autónomo pierde la protección del trabajo dependiente: no tiene vacaciones pagadas, no cotiza por desempleo y afronta los gastos y las bajas como un autónomo. Cuando la relación se rompe, queda sin red.',
					'Esa falta de protección es la razón por la que la ley mira con rigor estas situaciones y permite recuperar la calificación. La clave es actuar antes de que prescriban las cantidades y de que se pierda la prueba.',
				],
			},
			{
				heading: 'Errores que debilitan la reclamación',
				paragraphs: [
					'Firmar facturas que describen una autonomía que no existe, no conservar los encargos y los correos o dejar de prestar servicios sin documentarlo son errores que se vuelven en contra. También lo es reclamar solo de palabra.',
					'Antes de reclamar conviene reunir toda la documentación que refleje la realidad del trabajo y comprobar los plazos. Una reclamación ordenada tiene muchas más opciones de prosperar.',
				],
			},
		],
		checklist: [
			'Reúne facturas, correos y mensajes.',
			'Documenta horarios, instrucciones y control.',
			'Comprueba si trabajas solo para un cliente.',
			'Valora las cantidades y los plazos.',
			'Presenta la reclamación con prueba ordenada.',
		],
		faq: [
			{
				question: '¿Cómo sé si soy falso autónomo?',
				answer:
					'Si trabajas con horario, sigues instrucciones, usas los medios de la empresa, no puedes rechazar encargos o dependes de un solo cliente, puede concurrir laboralidad aunque estés dado de alta como autónomo. Lo valora el conjunto de indicios.',
			},
			{
				question: '¿Qué puedo reclamar si me reconocen la relación laboral?',
				answer:
					'Puedes reclamar diferencias salariales, vacaciones, pagas, indemnización por despido y, en su caso, prestación por desempleo, además del alta y la cotización por el tiempo trabajado.',
			},
			{
				question: '¿Necesito pruebas para reclamar?',
				answer:
					'Sí, la prueba es decisiva. Correos, mensajes, control horario, facturas y testigos permiten reconstruir cómo se prestaba el trabajo y son la base para que se reconozca la laboralidad.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'reclamaciones laborales' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
			{ path: '/accidente-laboral', label: 'accidente de trabajo' },
		],
	},
	{
		slug: 'arraigo-social-laboral-familiar',
		title: 'Arraigo social, laboral y familiar: cómo se solicita',
		description:
			'Qué tipos de arraigo existen para regularizar la situación en España, qué se acredita en cada uno, cuánto tiempo se exige y cómo se presenta.',
		date: '2026-10-06',
		category: 'Extranjería',
		readTime: '7 min',
		intro: 'El arraigo es la vía que permite regularizar la situación de quien ya vive en España y acredita un vínculo con el país. Existen varios tipos, cada uno con sus requisitos de tiempo, de medios y de documentación. Elegir bien el que corresponde es la mitad del expediente.',
		sections: [
			{
				heading: 'Qué es el arraigo y para qué sirve',
				paragraphs: [
					'El arraigo es una autorización de residencia que se concede a personas que se encuentran en España y acreditan un tiempo de permanencia y un vínculo social, laboral o familiar. No sustituye a la nacionalidad ni a otras autorizaciones, pero permite residir y trabajar legalmente.',
					'A diferencia de la residencia obtenida desde el país de origen, el arraigo se solicita desde España y valora la integración real de la persona en su entorno.',
				],
			},
			{
				heading: 'Arraigo social',
				paragraphs: [
					'El arraigo social exige acreditar un tiempo de permanencia en España, medios económicos suficientes y, en la mayoría de los casos, vínculos familiares o un informe de integración. El tiempo y los medios son los dos pilares del expediente.',
					'La documentación suele incluir el padrón histórico, los certificados de convivencia, la prueba de ingresos y el informe de la comunidad o del ayuntamiento. Un expediente incompleto es la causa más común de denegación.',
				],
			},
			{
				heading: 'Arraigo laboral',
				paragraphs: [
					'El arraigo laboral se apoya en la relación laboral: se acredita haber trabajado un determinado periodo, normalmente mediante resolución que reconozca la relación o mediante la documentación que acredite la actividad.',
					'La prueba de la relación laboral es exigente. Por eso conviene reunir contratos, nóminas, vida laboral y, si existe, la resolución del procedimiento que declare el trabajo y su duración.',
				],
			},
			{
				heading: 'Arraigo familiar',
				paragraphs: [
					'El arraigo familiar se basa en el vínculo con un familiar español o residente: hijos, padres, cónyuge o pareja registrada. El parentesco y la dependencia deben acreditarse con documentación oficial.',
					'Este tipo suele tener requisitos de tiempo más flexibles que los demás, pero exige probar de forma sólida el vínculo familiar y la situación del familiar de referencia.',
				],
			},
			{
				heading: 'Cómo se presenta el expediente',
				paragraphs: [
					'La solicitud se presenta ante la autoridad competente con la tasa correspondiente y la documentación completa. Antes de presentar hay que comprobar el tiempo exigido, los medios, los certificados y la vigencia de cada documento.',
					'El plazo de resolución y el silencio administrativo son cuestiones clave en extranjería, porque de ellos depende qué se puede hacer mientras se espera. Conviene saber si el silencio es positivo o negativo en el procedimiento concreto.',
				],
			},
			{
				heading: 'Errores y denegaciones frecuentes',
				paragraphs: [
					'La falta de prueba del tiempo de permanencia, los medios insuficientes o mal acreditados y los certificados caducados son las causas más habituales de denegación. También lo es presentar un tipo de arraigo que no corresponde.',
					'Si el expediente se deniega, cabe recurso administrativo y, después, la vía judicial. Actuar dentro de plazo y con la documentación corregida es lo que permite darle la vuelta.',
				],
			},
		],
		checklist: [
			'Acredita el tiempo de permanencia con padrón.',
			'Comprueba los medios económicos exigidos.',
			'Reúne el vínculo familiar o el informe de integración.',
			'Revisa la vigencia de cada documento.',
			'Calcula el plazo y el silencio del procedimiento.',
		],
		faq: [
			{
				question: '¿Cuánto tiempo hay que estar en España para el arraigo social?',
				answer:
					'La ley exige un periodo de permanencia que hay que acreditar, normalmente con el padrón histórico y certificados de convivencia. Además se requieren medios económicos y, según el caso, vínculo familiar o informe de integración.',
			},
			{
				question: '¿Puedo trabajar con una autorización de arraigo?',
				answer:
					'La autorización de arraigo suele habilitar para residir y trabajar. Conviene comprobar en la resolución las condiciones concretas, porque el alcance puede variar según el tipo de arraigo.',
			},
			{
				question: '¿Qué pasa si me deniegan el arraigo?',
				answer:
					'Cabe recurso administrativo y, si no prospera, la vía judicial. Lo más eficaz es corregir el defecto que motivó la denegación y presentar la reclamación dentro de plazo.',
			},
		],
		relatedServices: [
			{ path: '/nacionalidad-extranjeria', label: 'extranjería y nacionalidad' },
			{ path: '/recursos-administrativos', label: 'recurso frente a la denegación' },
			{ path: '/blog/prorroga-estancia-y-renovacion', label: 'renovaciones y prórrogas' },
		],
	},
	{
		slug: 'alcoholemia-conduccion-delito',
		title: 'Alcoholemia al volante: delito, sanción y consecuencias',
		description:
			'Diferencia entre la sanción administrativa y el delito de alcoholemia, qué tasas se manejan, qué pruebas hay y cómo se defiende el conductor.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'Dar positivo tras beber no siempre es igual: si se supera el límite legal, la conducta deja de ser una simple multa y se convierte en delito contra la seguridad vial. Distinguir la vía administrativa de la penal y saber qué se prueba evita aceptar consecuencias mayores de las que corresponden.',
		sections: [
			{
				heading: 'Sanción administrativa o delito',
				paragraphs: [
					'La conducción con alcohol tiene dos vías. La primera es administrativa: una multa y la pérdida de puntos cuando se supera el límite permitido. La segunda es penal, cuando se conduce superando el límite que el Código Penal castiga o cuando la capacidad para conducir está claramente afectada.',
					'La frontera entre ambas no depende de cómo te sientas, sino de la tasa y de la valoración de la conducción. Por eso conviene conocer qué midió el test y con qué pruebas.',
				],
			},
			{
				heading: 'Las tasas y cómo se miden',
				paragraphs: [
					'La medición se hace con un etilómetro o alcoholímetro y, en la vía penal, con la prueba de aire espirado o de sangre que confirma el resultado. Las tasas se expresan en miligramos por litro de aire o en gramos por litro de sangre, con límites distintos para los conductores profesionales y noveles.',
					'La segunda medición o la prueba de contraste son garantías del conductor. Pedir que se realicen correctamente y que se documenten es un derecho, y su ausencia puede afectar al valor probatorio.',
				],
			},
			{
				heading: 'Negarse a soplar',
				paragraphs: [
					'Negarse a someterse a la prueba no evita consecuencias: la ley castiga específicamente esa negativa. Además, la negativa complica la defensa, porque deja sin datos el estado real del conductor.',
					'Lo recomendable es practicar la prueba y, si se discrepa del resultado, solicitar la prueba de contraste y hacer constar en el acta lo que ocurrió. La prueba se prepara desde el primer momento.',
				],
			},
			{
				heading: 'Cómo se defiende un caso de alcoholemia',
				paragraphs: [
					'La defensa revisa la legalidad de la parada y de la prueba, el procedimiento de medición, el valor probatorio del resultado y las circunstancias de la conducción. Un error en la cadena de custodia o en la segunda medición puede restar valor a la prueba.',
					'También se valora la situación procesal del conductor: si es investigado, si comparece y qué pruebas puede aportar. Cada caso exige una estrategia distinta, y no conviene aceptar una conformidad sin revisar el atestado.',
				],
			},
			{
				heading: 'Consecuencias: penas y efectos',
				paragraphs: [
					'El delito contra la seguridad vial por alcohol puede llevar multa, trabajos en beneficio de la comunidad y, según el caso, privación del derecho a conducir. Las circunstancias y los antecedentes influyen en la pena.',
					'Además de las penas, el impacto administrativo sobre el permiso de conducir y el historial del conductor es relevante. Conviene valorar las consecuencias completas, no solo la multa.',
				],
			},
			{
				heading: 'Errores que empeoran la situación',
				paragraphs: [
					'Negarse a soplar, firmar el atestado sin leerlo, aceptar una conformidad sin asesoramiento o no pedir la prueba de contraste son errores que reducen las opciones de defensa. También lo es comparecer sin preparar la prueba.',
					'Ante un positivo, lo sensato es guardar toda la documentación, anotar lo ocurrido y consultar cuanto antes. Las primeras decisiones son las que más condicionan el resultado.',
				],
			},
		],
		checklist: [
			'Comprueba la tasa y la prueba realizada.',
			'Pide la prueba de contraste si discrepas.',
			'No te niegues a someterte a la prueba.',
			'Guarda el atestado y las actas.',
			'Consulta antes de firmar una conformidad.',
		],
		faq: [
			{
				question: '¿Cuándo una alcoholemia es delito y no solo multa?',
				answer:
					'Depende de la tasa alcanzada y de si la capacidad para conducir estaba claramente afectada. Superar el límite que fija el Código Penal convierte la conducta en delito contra la seguridad vial.',
			},
			{
				question: '¿Qué pasa si me niego a soplar?',
				answer:
					'La negativa está castigada específicamente y complica la defensa, porque impide conocer el estado real del conductor. Lo recomendable es someterse a la prueba y solicitar la de contraste si se discrepa.',
			},
			{
				question: '¿Puedo recurrir el positivo?',
				answer:
					'Si la multa es administrativa, cabe recurso por la vía correspondiente. Si el caso es penal, la defensa se centra en la validez de la prueba y en las circunstancias. En ambos casos conviene revisar el procedimiento con detalle.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/reclamacion-multas-trafico', label: 'reclamación de multas de tráfico' },
			{ path: '/blog/derechos-del-detenido', label: 'derechos ante la detención' },
		],
	},
	{
		slug: 'violencia-domestica',
		title: 'Violencia doméstica: qué es y cómo se diferencia',
		description:
			'La violencia doméstica en el ámbito familiar, sus diferencias con la violencia de género, las medidas de protección y cómo se defiende cada parte.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'No toda la violencia en el ámbito familiar es violencia de género, y la diferencia tiene consecuencias legales, procesales y de protección. La violencia doméstica cubre agresiones entre miembros de una misma familia —padres, hijos, hermanos— y se tramita con reglas propias.',
		sections: [
			{
				heading: 'Qué se entiende por violencia doméstica',
				paragraphs: [
					'La violencia doméstica es la ejercida entre personas unidas por un vínculo familiar o de convivencia, como padres e hijos, hermanos o quienes conviven en el mismo domicilio. El Código Penal la castiga con un tipo específico cuando la agresión se produce en ese contexto.',
					'No requiere una relación de pareja ni una diferencia de sexo entre agresor y víctima. Esa es precisamente una de sus diferencias con la violencia de género, que se define por el contexto de dominación del hombre sobre la mujer.',
				],
			},
			{
				heading: 'Diferencias con la violencia de género',
				paragraphs: [
					'La violencia de género, según la ley, es la que se ejerce sobre la mujer por parte de su cónyuge, ex pareja o quien haya estado ligado por una relación análoga, como manifestación de la discriminación y la dominación. Tiene su propia ley de protección y sus tribunales especializados.',
					'La violencia doméstica, en cambio, alcanza las agresiones dentro de la familia sin ese componente de género. La calificación determina el procedimiento, las medidas que se pueden pedir y los recursos disponibles.',
				],
			},
			{
				heading: 'Cómo se denuncia y qué medidas se piden',
				paragraphs: [
					'La denuncia puede presentarse en comisaría, en el juzgado o directamente ante el Ministerio Fiscal. A partir de ahí se activan las medidas de protección que el juez considere necesarias para la víctima y, si hay menores, para los hijos.',
					'Entre esas medidas pueden estar el alejamiento, la prohibición de comunicación, la atribución de la vivienda o las medidas civiles sobre los hijos. Cuanto más clara esté la situación de riesgo, más rápidas son las medidas.',
				],
			},
			{
				heading: 'El proceso penal y la posición del investigado',
				paragraphs: [
					'El procedimiento penal busca esclarecer los hechos y, si procede, imponer una pena. El investigado cuenta con derechos desde el primer momento: asistencia letrada, información de la acusación, prueba y presunción de inocencia.',
					'La defensa revisa la calificación del hecho, las pruebas y las declaraciones. No es lo mismo una discusión descontextualizada que una agresión acreditada, y la diferencia es decisiva.',
				],
			},
			{
				heading: 'Consecuencias civiles y familiares',
				paragraphs: [
					'Además de las penas, la violencia doméstica puede afectar a la custodia, al régimen de visitas y a las medidas sobre la vivienda. También puede dar lugar a responsabilidad civil por los daños causados.',
					'Cuando hay hijos menores, el interés superior del menor guía las decisiones. Por eso las medidas civiles se pueden adoptar junto con las penales y revisarse después.',
				],
			},
			{
				heading: 'Asistencia jurídica y protección de la víctima',
				paragraphs: [
					'Las víctimas de violencia doméstica y de género pueden acceder a la asistencia jurídica gratuita y a recursos públicos de protección. Existen teléfonos y servicios de atención que orientan antes y después de denunciar.',
					'Documentar los hechos, conservar partes médicos, mensajes y testigos y pedir asesoramiento cuanto antes mejora la protección. La víctima no tiene que pasar por el proceso en soledad.',
				],
			},
		],
		checklist: [
			'Guarda partes médicos y pruebas de los hechos.',
			'Denuncia y solicita medidas de protección.',
			'Consulta si procede la asistencia jurídica gratuita.',
			'Pide medidas civiles si hay menores.',
			'No te enfrentes sola al procedimiento.',
		],
		faq: [
			{
				question: '¿Qué diferencia hay entre violencia doméstica y de género?',
				answer:
					'La violencia de género es la que ejerce un hombre sobre una mujer con la que tiene o tuvo una relación de pareja, como manifestación de dominación. La doméstica cubre agresiones en el ámbito familiar, como entre padres e hijos o hermanos, sin ese componente de género.',
			},
			{
				question: '¿Dónde se denuncia la violencia doméstica?',
				answer:
					'Puede denunciarse en comisaría, en el juzgado o ante el Ministerio Fiscal. A partir de la denuncia se pueden solicitar medidas de protección penales y civiles según el riesgo.',
			},
			{
				question: '¿Qué derechos tiene el investigado?',
				answer:
					'Tiene derecho a asistencia letrada, a conocer la acusación, a proponer prueba y a la presunción de inocencia. La defensa revisa la calificación de los hechos y las pruebas desde el primer momento.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/violencia-genero', label: 'asistencia por violencia de género' },
			{ path: '/guarda-custodia', label: 'medidas sobre los hijos' },
		],
	},
	{
		slug: 'indemnizacion-siniestro-total',
		title: 'Indemnización por siniestro total: valor venal y reparación',
		description:
			'Cómo se indemniza un coche siniestrado, la diferencia entre reparar y declarar siniestro total, el valor venal y cómo discutir la oferta del seguro.',
		date: '2026-10-06',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
		intro: 'Cuando el coche queda inservible tras un accidente, la aseguradora suele ofrecer el valor del vehículo antes del siniestro y quedarse con el coche. Esa oferta no siempre es correcta: hay que comprobar cómo se ha valorado y qué parte de esa cifra se puede discutir.',
		sections: [
			{
				heading: 'Siniestro total: qué significa',
				paragraphs: [
					'Se habla de siniestro total cuando el coste de reparar el vehículo supera el valor que tenía antes del accidente. En ese caso, la indemnización no se calcula por la factura de reparación, sino por el valor del vehículo.',
					'No es una decisión que la aseguradora pueda tomar a la ligera: se apoya en un peritaje que compara coste de reparación y valor venal. Si ese peritaje está mal hecho, la oferta también.',
				],
			},
			{
				heading: 'El valor venal del vehículo',
				paragraphs: [
					'El valor venal es el precio de mercado del coche justo antes del siniestro, teniendo en cuenta su antigüedad, kilometraje, estado y equipamiento. No es el valor de compra ni el valor de reposición de un coche nuevo equivalente.',
					'Las guías de valoración orientan, pero no son la única prueba. Facturas de mantenimiento, fotos, anúncios de vehículos similares y un informe pericial propio pueden acreditar que el valor real era superior.',
				],
			},
			{
				heading: 'Reparación frente a siniestro total',
				paragraphs: [
					'Si el coste de reparación no supera el valor del vehículo, la indemnización cubre esa reparación y el coche se repara. Si lo supera, se indemniza el valor del vehículo y, según el caso, se deduce el valor del salvamento o restos.',
					'El propietario puede quedarse con el coche siniestrado, normalmente renunciando a una parte de la indemnización. Conviene valorar si compensa repararlo por cuenta propia antes de aceptar esa opción.',
				],
			},
			{
				heading: 'Daños personales y gastos añadidos',
				paragraphs: [
					'El siniestro total del vehículo no agota la reclamación. Si hubo lesiones, se reclaman por el baremo; y además se pueden reclamar gastos como la grúa, el estacionamiento, el taxi o el alquiler de un vehículo sustitutivo durante un tiempo razonable.',
					'También pueden reclamarse los daños a objetos transportados o los perjuicios ligados a la pérdida del vehículo. Todo se acredita con facturas y con la documentación del siniestro.',
				],
			},
			{
				heading: 'Cómo discutir la oferta del seguro',
				paragraphs: [
					'Si la oferta es baja, no hay que firmar el finiquito. Se puede pedir el informe pericial completo, aportar la valoración propia y negociar antes de acudir a la vía judicial.',
					'El plazo para reclamar y el momento de firmar son decisivos: aceptar una cantidad y firmar el acuerdo puede cerrar la reclamación por más que después aparezcan daños o gastos.',
				],
			},
			{
				heading: 'Errores que reducen la indemnización',
				paragraphs: [
					'Firmar el finiquito antes de valorar las lesiones, aceptar el valor venal sin comprobarlo o no documentar los gastos son los errores más habituales. También lo es reparar el coche por cuenta propia sin conservar la prueba del estado anterior.',
					'Lo correcto es hacer fotos, guardar todos los justificantes y no aceptar la primera oferta sin revisarla. Un informe pericial independiente suele cambiar el resultado de la negociación.',
				],
			},
		],
		checklist: [
			'Reúne el peritaje y el informe del siniestro.',
			'Comprueba el valor venal del vehículo.',
			'Guarda facturas de mantenimiento y mejoras.',
			'Documenta grúa, taxis y vehículo de sustitución.',
			'No firmes el finiquito sin revisar la oferta.',
		],
		faq: [
			{
				question: '¿Qué es el valor venal de un coche?',
				answer:
					'Es el precio de mercado del vehículo justo antes del siniestro, según su antigüedad, kilometraje, estado y equipamiento. No coincide con el precio de compra ni con el de un coche nuevo.',
			},
			{
				question: '¿Puedo reparar el coche aunque lo declaren siniestro total?',
				answer:
					'Es posible repararlo por cuenta propia, normalmente quedándote con el vehículo y renunciando a una parte de la indemnización. Conviene valorar antes si la reparación compensa.',
			},
			{
				question: '¿Puedo reclamar gastos además del valor del coche?',
				answer:
					'Sí. Se pueden reclamar la grúa, el estacionamiento, el vehículo de sustitución durante un tiempo razonable, los daños a objetos transportados y, si hubo lesiones, la indemnización por daños personales.',
			},
		],
		relatedServices: [
			{ path: '/indemnizaciones-trafico', label: 'indemnización por accidente de tráfico' },
			{ path: '/blog/indemnizacion-accidente-trafico', label: 'reclamar la indemnización de tráfico' },
			{ path: '/responsabilidad-civil', label: 'responsabilidad civil' },
		],
	},
	{
		slug: 'accidente-animales-caza',
		title: 'Accidente con animal de caza: quién paga y cómo reclamar',
		description:
			'Quién responde de un accidente causado por un animal de caza, el papel del titular del coto y del Consorcio, y cómo reclamar los daños.',
		date: '2026-10-06',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
		intro: 'Cruzarse con un jabalí o un ciervo en la carretera es un siniestro con reglas propias: no responde el seguro del vehículo como en un choque entre coches. Determinar quién responde y qué se puede reclamar depende de la vía y de la titularidad del coto.',
		sections: [
			{
				heading: 'Por qué no es una reclamación normal',
				paragraphs: [
					'En un accidente con un animal de caza no hay un conductor contrario al que reclamar. La responsabilidad se busca en el titular del aprovechamiento cinegético o, en determinados supuestos, en el Consorcio de Compensación de Seguros.',
					'Por eso el siniestro se tramita por una vía distinta a la de un accidente entre vehículos, con reglas y plazos específicos que conviene conocer desde el primer momento.',
				],
			},
			{
				heading: 'Quién responde según la vía',
				paragraphs: [
					'La responsabilidad depende de si el accidente se produce en una carretera convencional o en una vía de alta capacidad, y de si el animal procede de un coto de caza o de un espacio sin aprovechamiento cinegético.',
					'En los supuestos en que la ley atribuye la responsabilidad al titular del coto o a su seguro, se reclama a él. Cuando la vía y las circunstancias lo permiten, entra el Consorcio de Compensación de Seguros como mecanismo de cobertura.',
				],
			},
			{
				heading: 'Qué se puede reclamar',
				paragraphs: [
					'Se reclaman los daños del vehículo, los gastos asociados al siniestro y, si hubo lesiones, la indemnización por daños personales conforme al baremo. También pueden reclamarse los perjuicios causados por la inmovilización del vehículo.',
					'A diferencia del seguro voluntario del coche, que puede cubrir el daño propio, esta reclamación busca que responda quien debe hacerlo por ley. Por eso conviene no cerrar el expediente con el propio seguro sin valorar la vía del responsable.',
				],
			},
			{
				heading: 'La prueba del accidente',
				paragraphs: [
					'El atestado de la Guardia Civil o de la policía local es esencial: identifica el lugar, la vía, el animal y las circunstancias. También son relevantes las fotos, los testigos y el parte de urgencias si hubo heridos.',
					'Acreditar la presencia del animal y el punto kilométrico ayuda a identificar el coto o la administración responsable. Cuanto antes se recopile esa información, más fácil es la reclamación.',
				],
			},
			{
				heading: 'Plazos y vía de reclamación',
				paragraphs: [
					'La reclamación frente al responsable o frente al Consorcio sigue sus propios trámites y plazos. No hacerlos valer a tiempo puede suponer perder la indemnización.',
					'Primero se presenta la reclamación con la documentación del siniestro; si no se atiende o la oferta es insuficiente, queda la vía judicial. Un informe de valoración de daños bien hecho respalda la reclamación.',
				],
			},
			{
				heading: 'Errores que arruinan la reclamación',
				paragraphs: [
					'No llamar a la Guardia Civil, abandonar el lugar sin atestado, reparar el coche sin dejar constancia del daño o dejar pasar el plazo son errores que dejan la reclamación sin base. También lo es conformarse con lo que pague el propio seguro.',
					'Lo recomendable es documentar el siniestro en el momento, conservar todos los justificantes y reclamar por la vía correcta sin demora.',
				],
			},
		],
		checklist: [
			'Llama a la Guardia Civil y pide el atestado.',
			'Fotografía el lugar, el animal y los daños.',
			'Anota el punto kilométrico y la vía.',
			'Guarda partes médicos si hubo heridos.',
			'Reclama al responsable o al Consorcio en plazo.',
		],
		faq: [
			{
				question: '¿Quién paga si un jabalí causa un accidente?',
				answer:
					'Depende de la vía y de si el animal procede de un coto de caza. Puede responder el titular del aprovechamiento cinegético o el Consorcio de Compensación de Seguros en los supuestos que la ley prevé.',
			},
			{
				question: '¿Me lo cubre mi seguro de coche?',
				answer:
					'El seguro voluntario puede cubrir el daño propio, pero eso no impide reclamar al responsable legal. Conviene valorar ambas vías antes de cerrar el expediente con la propia aseguradora.',
			},
			{
				question: '¿Qué documentos necesito para reclamar?',
				answer:
					'El atestado, las fotos del lugar y del vehículo, el parte de daños, los partes médicos si hubo heridos y los justificantes de gastos. La prueba del punto y de la vía ayuda a identificar al responsable.',
			},
		],
		relatedServices: [
			{ path: '/indemnizaciones-trafico', label: 'indemnización por accidente' },
			{ path: '/responsabilidad-civil', label: 'responsabilidad civil' },
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
		],
	},
	{
		slug: 'reclamar-vuelo-cancelado',
		title: 'Vuelo cancelado o retrasado: cómo reclamar la indemnización',
		description:
			'Cuándo la aerolínea debe indemnizar por cancelación o gran retraso, qué gastos cubre, cómo reclamar y qué plazos se manejan en España.',
		date: '2026-10-06',
		category: 'Consumo y banca',
		readTime: '7 min',
		intro: 'Una cancelación o un retraso largo no se resuelve solo con un vale o una disculpa. El reglamento europeo reconoce una compensación económica y el reembolso de gastos, pero no en todos los supuestos. Saber cuándo se tiene derecho evita reclamar en vano o renunciar a lo que corresponde.',
		sections: [
			{
				heading: 'Cuándo hay derecho a indemnización',
				paragraphs: [
					'El Reglamento europeo protege a los pasajeros ante cancelaciones, retrasos prolongados y denegación de embarque. Cuando concurren los supuestos previstos, la aerolínea debe compensar económicamente al pasajero, además de ofrecer asistencia.',
					'No hay derecho ilimitado: existen circunstancias extraordinarias que eximen a la compañía, como determinados fenómenos meteorológicos, huelgas ajenas a la empresa o restricciones del tráfico aéreo.',
				],
			},
			{
				heading: 'La compensación económica',
				paragraphs: [
					'El importe de la compensación depende de la distancia del vuelo y de la duración del retraso a la llegada. La norma fija tramos, de modo que un mismo retraso puede dar lugar a cantidades distintas según la ruta.',
					'La compensación se suma a otras soluciones: el reembolso del billete o el transporte alternativo, según el caso. La aerolínea no puede compensar una cosa con otra sin el acuerdo del pasajero.',
				],
			},
			{
				heading: 'Gastos que cubre la aerolínea',
				paragraphs: [
					'Cuando la situación obliga a esperar, la compañía debe procurar asistencia: comida, bebida, alojamiento y transporte entre el aeropuerto y el hotel cuando sea necesario. Esa obligación se aplica con independencia de la causa de la incidencia.',
					'Si el pasajero adelanta esos gastos, puede reclamar su reembolso con facturas y justificantes. Guardar todos los tickets es imprescindible para recuperar el dinero.',
				],
			},
			{
				heading: 'Cómo se reclama',
				paragraphs: [
					'El primer paso es reclamar por escrito a la aerolínea, indicando el vuelo, la incidencia y la cantidad que se solicita, y adjuntando la documentación. Conviene conservar copia y el acuse de la reclamación.',
					'Si la compañía no responde o rechaza la reclamación sin motivo, se puede acudir a la autoridad de consumo o a la Agencia Estatal de Seguridad Aérea. Y si sigue sin resolverse, queda la vía judicial.',
				],
			},
			{
				heading: 'Plazos y reclamaciones por internet',
				paragraphs: [
					'En España las reclamaciones por estas incidencias tienen un plazo amplio, pero conviene no dilatarlas para no perder pruebas. Los servicios que prometen recuperar el dinero a cambio de un porcentaje pueden restar buena parte de la compensación.',
					'Reclamar por cuenta propia o con asesoramiento es perfectamente posible, y en muchos casos más rentable. Lo importante es que la reclamación sea concreta y esté bien documentada.',
				],
			},
			{
				heading: 'Errores que hacen perder la compensación',
				paragraphs: [
					'Aceptar un vale sin reservas, no pedir la hoja de reclamación, no guardar los justificantes o firmar un acuerdo de renuncia son errores que cierran la puerta a la compensación. También lo es esperar demasiado para reclamar.',
					'Ante una cancelación o un retraso, lo primero es documentar todo y pedir asistencia a la compañía. Después, reclamar por escrito con la cantidad y los gastos bien calculados.',
				],
			},
		],
		checklist: [
			'Guarda la tarjeta de embarque y el billete.',
			'Pide asistencia a la aerolínea en el aeropuerto.',
			'Conserva tickets de comida, hotel y transporte.',
			'Reclama por escrito con acuse de recibo.',
			'Acude a consumo o a AESA si no responden.',
		],
		faq: [
			{
				question: '¿Siempre hay derecho a indemnización por un vuelo cancelado?',
				answer:
					'No siempre. La compensación se reconoce en los supuestos que prevé el reglamento, salvo que concurran circunstancias extraordinarias que eximan a la aerolínea. Además, la compañía debe ofrecer reembolso o transporte alternativo.',
			},
			{
				question: '¿Cuánto me tienen que pagar?',
				answer:
					'El importe depende de la distancia del vuelo y de la duración del retraso a la llegada. La norma fija tramos, así que la cantidad varía según la ruta.',
			},
			{
				question: '¿Puedo reclamar los gastos de hotel?',
				answer:
					'Sí. Cuando la incidencia obliga a pernoctar, la aerolínea debe procurar alojamiento y transporte, y el pasajero puede reclamar el reembolso de esos gastos con facturas.',
			},
		],
		relatedServices: [
			{ path: '/consumo', label: 'reclamaciones de consumo' },
			{ path: '/reclamaciones-bancarias', label: 'reclamaciones de cobros indebidos' },
			{ path: '/derecho-civil', label: 'reclamaciones civiles' },
		],
	},
	{
		slug: 'contrato-de-franquicia',
		title: 'Contrato de franquicia: qué revisar antes de firmar',
		description:
			'Qué regula el contrato de franquicia, la información que debe entregar el franquiciador antes de firmar, las cláusulas clave y cómo salir sin perderlo todo.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '8 min',
		intro: 'Abrir una franquicia parece un camino con menos riesgo que emprender solo, pero el contrato decide casi todo: cuotas, territorialidad, duración, suministros y salida. Muchos pleitos nacen de haber firmado sin entender qué se estaba comprando realmente.',
		sections: [
			{
				heading: 'Qué es un contrato de franquicia',
				paragraphs: [
					'En la franquicia, el franquiciador permite al franquiciado explotar su marca y su modelo de negocio a cambio de una contraprestación, siguiendo sus métodos y con su apoyo. No es una simple compraventa ni un contrato de trabajo.',
					'El franquiciado es un empresario independiente: asume el riesgo y la inversión, aunque opere bajo una marca conocida. Esa independencia es clave para entender quién responde de las deudas y de los resultados.',
				],
			},
			{
				heading: 'La información previa obligatoria',
				paragraphs: [
					'Antes de firmar, el franquiciador debe entregar información precontractual con una antelación mínima: datos de la empresa, características de la marca, estructura y extensión de la red, y condiciones básicas del contrato. Es un derecho del franquiciado.',
					'Pedir esa documentación por escrito y estudiarla evita sorpresas. Si el franquiciador la niega o la entrega a medias, es una señal de alarma que conviene valorar antes de comprometer dinero.',
				],
			},
			{
				heading: 'Las cláusulas que hay que revisar',
				paragraphs: [
					'Los puntos críticos son las cuotas de entrada y las periódicas, el canon de publicidad, la exclusividad de suministros, la territorialidad y la duración del contrato con sus prórrogas. Cada una afecta directamente a la rentabilidad del negocio.',
					'También importan las cláusulas de no competencia, la cesión del contrato, el control del franquiciador y el régimen de responsabilidad. Conviene pedir que se concreten por escrito los compromisos de formación y de soporte.',
				],
			},
			{
				heading: 'Obligaciones y responsabilidad',
				paragraphs: [
					'El franquiciado responde de la explotación de su negocio y de sus deudas, aunque la marca sea del franquiciador. No debe confundirse la imagen de la red con una garantía de resultados: el franquiciador informa, pero no asegura la rentabilidad.',
					'El franquiciador, por su parte, responde de permitir el uso de la marca y de cumplir con sus obligaciones de apoyo y, en su caso, de respetar la territorialidad pactada. Incumplir esa exclusividad puede dar lugar a indemnización.',
				],
			},
			{
				heading: 'La salida del contrato',
				paragraphs: [
					'La duración, las prórrogas y las causas de resolución condicionan la salida. Algunos contratos fijan indemnizaciones altas por terminación anticipada o impiden recuperar el local cuando no se renueva.',
					'Antes de firmar conviene aclarar qué pasa si el negocio no funciona, si se puede vender la franquicia a un tercero y qué llevará el franquiciado cuando la relación acabe. Esas respuestas deben estar en el contrato, no en conversaciones.',
				],
			},
			{
				heading: 'Errores que cuestan dinero',
				paragraphs: [
					'Firmar sin leer la información precontractual, aceptar suministros impuestos a precios altos o no fijar la territorialidad son errores difíciles de corregir después. También lo es confiar en proyecciones verbales de ingresos que no están por escrito.',
					'Antes de invertir, conviene comparar varias ofertas, revisar la red real de franquiciados y hacer revisar el contrato por un abogado. Ese trabajo previo vale menos que una sola cláusula mal aceptada.',
				],
			},
		],
		checklist: [
			'Pide la información precontractual por escrito.',
			'Revisa cuotas, canon y exclusividad de suministros.',
			'Comprueba territorialidad y duración.',
			'Aclarar las causas de salida y la renovación.',
			'Haz revisar el contrato antes de firmarlo.',
		],
		faq: [
			{
				question: '¿Qué información debe dar el franquiciador antes de firmar?',
				answer:
					'Debe entregar información precontractual con antelación sobre la empresa, la marca, la red y las condiciones básicas del contrato. Si no la facilita o la entrega incompleta, conviene valorar la operación con cautela.',
			},
			{
				question: '¿Puedo reclamar si el negocio no es rentable?',
				answer:
					'Ser franquiciado no garantiza rentabilidad. Solo se puede reclamar si el franquiciador incumplió sus obligaciones, ocultó información relevante o faltó a sus compromisos de marca, territorialidad o apoyo.',
			},
			{
				question: '¿Puedo vender la franquicia a otra persona?',
				answer:
					'Depende de lo que fije el contrato. Muchos exigen autorización del franquiciador y el cumplimiento de condiciones. Conviene dejar claro por escrito el procedimiento de cesión antes de firmar.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'servicios jurídicos para empresas' },
			{ path: '/empresas/contratos-mercantiles', label: 'contratos mercantiles' },
			{ path: '/compraventas-empresas', label: 'compraventa de negocios' },
		],
	},
	{
		slug: 'registro-de-marca',
		title: 'Registrar una marca: pasos, clases y protección',
		description:
			'Cómo registrar una marca en la OEPM, qué protege el nombre comercial, las clases de Niza, la vigencia y qué hacer frente a un uso no autorizado.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '8 min',
		intro: 'El nombre con el que vendes es un activo, y sin registrar no lo proteges. Registrar la marca permite impedir que otros la usen, defender tu posición en el mercado y cerrar acuerdos con seguridad. El registro no es complicado, pero sí conviene hacerlo bien desde el principio.',
		sections: [
			{
				heading: 'Qué protege una marca',
				paragraphs: [
					'La marca protege el signo que distingue tus productos o servicios de los de la competencia: puede ser un nombre, un logotipo, un eslogan o una combinación. El registro concede un derecho exclusivo sobre ese signo para los productos y servicios para los que se pide.',
					'Junto a la marca existe el nombre comercial, que protege la denominación con la que se identifica una empresa en el tráfico. Ambos se registran ante la Oficina Española de Patentes y Marcas y son derechos distintos.',
				],
			},
			{
				heading: 'Comprobar que está libre',
				paragraphs: [
					'Antes de solicitar el registro hay que comprobar que el signo no esté ya registrado ni resulte confundible con otro anterior. Una búsqueda de antecedentes evita invertir tiempo y dinero en una marca que será rechazada o que chocará con un tercero.',
					'La búsqueda se hace en la base de datos de la OEPM y conviene ampliarla a marcas europeas e internacionales si el negocio opera fuera de España. La similitud gráfica o fonética cuenta, no solo la coincidencia exacta.',
				],
			},
			{
				heading: 'Las clases de Niza y para qué se pide',
				paragraphs: [
					'El registro se solicita por clases de productos y servicios según la clasificación de Niza. Para cada clase hay que describir qué protege la marca; pedir clases que no se usan encarece el registro y no aporta seguridad real.',
					'Lo habitual es registrar las clases en las que se opera hoy y las previsibles a corto plazo. Ampliar después es posible, pero implica un nuevo trámite y coste.',
				],
			},
			{
				heading: 'El procedimiento ante la OEPM',
				paragraphs: [
					'La solicitud se presenta ante la OEPM con el signo, las clases y los datos del solicitante. A partir de ahí el organismo examina la solicitud, publica la marca y concede un plazo para que terceros puedan oponerse.',
					'Si no hay oposición o esta no prospera, la marca se concede. Si hay defectos, se requiere su subsanación; conviene atender los requerimientos dentro de plazo para no perder la solicitud.',
				],
			},
			{
				heading: 'Vigencia y renovación',
				paragraphs: [
					'La marca se concede por un periodo de diez años y puede renovarse indefinidamente pagando la tasa correspondiente. Además, existe un deber de uso: si la marca no se usa durante un tiempo, un tercero puede solicitar su caducidad.',
					'Documentar el uso real de la marca —facturas, publicidad, etiquetas— es una forma sencilla de proteger el registro frente a una caducidad por falta de uso.',
				],
			},
			{
				heading: 'Qué hacer si alguien usa tu marca',
				paragraphs: [
					'El titular puede oponerse a registros posteriores que resulten confundibles y reclamar frente a quien use su marca sin autorización. El primer paso suele ser un requerimiento y, si no cesa el uso, la vía judicial.',
					'Una buena estrategia de marca incluye vigilar las solicitudes parecidas y actuar rápido. Cuanto antes se reacciona, menos se consolida el uso ajeno.',
				],
			},
		],
		checklist: [
			'Haz una búsqueda de antecedentes.',
			'Elige las clases de Niza adecuadas.',
			'Presenta la solicitud ante la OEPM.',
			'Vigila las marcas parecidas publicadas.',
			'Documenta el uso real de la marca.',
		],
		faq: [
			{
				question: '¿Cuánto dura una marca registrada?',
				answer:
					'El registro se concede por diez años y puede renovarse indefinidamente pagando la tasa. Eso sí, la marca debe usarse realmente para evitar que un tercero solicite su caducidad.',
			},
			{
				question: '¿Qué diferencia hay entre marca y nombre comercial?',
				answer:
					'La marca distingue productos o servicios, y el nombre comercial identifica a la empresa en el tráfico. Son derechos distintos y se pueden registrar por separado ante la OEPM.',
			},
			{
				question: '¿Qué hago si alguien usa mi marca sin permiso?',
				answer:
					'Como titular puedes oponerte a registros confundibles y reclamar frente al uso no autorizado. Lo habitual es empezar con un requerimiento y, si el uso no cesa, acudir a la vía judicial.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'servicios jurídicos para empresas' },
			{ path: '/modificacion-estatutos-sociedad', label: 'actos societarios y denominación' },
			{ path: '/empresas/proteccion-de-datos', label: 'protección de datos y activos' },
		],
	},
	{
		slug: 'ingreso-minimo-vital',
		title: 'Ingreso Mínimo Vital: requisitos y cómo reclamarlo',
		description:
			'Quién puede cobrar el Ingreso Mínimo Vital, qué requisitos se exigen, cómo se solicita, con qué es compatible y cómo recurrir una denegación.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '7 min',
		intro: 'El Ingreso Mínimo Vital es una prestación no contributiva pensada para hogares con recursos insuficientes. Sus requisitos se centran en la unidad de convivencia, los ingresos y el patrimonio, y una denegación no siempre es definitiva: muchas se corrigen con la documentación adecuada.',
		sections: [
			{
				heading: 'Qué es el Ingreso Mínimo Vital',
				paragraphs: [
					'El Ingreso Mínimo Vital es una prestación económica que garantiza un nivel mínimo de renta a los hogares que se encuentran por debajo del umbral establecido. No es una ayuda puntual, sino un derecho que se reconoce y se mantiene mientras se cumplan los requisitos.',
					'Se calcula teniendo en cuenta la composición del hogar y sus ingresos, y puede complementar otros ingresos que no alcancen ese mínimo. Es compatible con determinadas rentas de trabajo.',
				],
			},
			{
				heading: 'Requisitos principales',
				paragraphs: [
					'Los puntos que se examinan son la situación de necesidad económica, la composición de la unidad de convivencia, la edad y la residencia legal en España. También se valora el patrimonio, con un límite que varía según el hogar.',
					'La unidad de convivencia es decisiva: no es lo mismo vivir solo que compartir domicilio con hijos u otras personas. Definirla bien y acreditarla con el padrón y los documentos de cada miembro es el primer paso.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'La solicitud se presenta por la vía electrónica habilitada por la Seguridad Social, con los datos de todos los miembros del hogar y la documentación que acredite ingresos, patrimonio, vivienda y situación familiar.',
					'Es frecuente que la administración pida documentación adicional o requiera la subsanación de defectos. Contestar a esos requerimientos dentro de plazo evita que se archive el expediente por una cuestión formal.',
				],
			},
			{
				heading: 'Compatibilidad y mantenimiento',
				paragraphs: [
					'El Ingreso Mínimo Vital es compatible con los rendimientos del trabajo hasta ciertos límites, y está diseñado para no desincentivar la búsqueda de empleo. Cobrar una nómina no elimina automáticamente la prestación, pero puede reducir su importe.',
					'También pueden variar otras prestaciones del hogar si cambia la composición familiar o los ingresos. Por eso conviene comunicar a la administración cada cambio relevante para no recibir cantidades indebidas.',
				],
			},
			{
				heading: 'Revisión y denegaciones',
				paragraphs: [
					'Si la resolución deniega la prestación, reduce su importe o solicita devolver cantidades, cabe reclamación previa y, después, la vía judicial. Los motivos más habituales de denegación son ingresos mal valorados, patrimonio por encima del límite o unidad de convivencia mal definida.',
					'La prueba es clave: nóminas, rentas, extractos, certificados de convivencia y gastos. Aportar todo de forma ordenada permite corregir muchas denegaciones sin llegar al juzgado.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'No declarar bien a los miembros del hogar, olvidar ingresos irregulares o no comunicar cambios son los fallos que más problemas generan. También lo es dejar sin contestar un requerimiento de subsanación.',
					'Antes de solicitar, conviene reunir la documentación de todos los miembros y comprobar los límites de ingresos y patrimonio. Y si la resolución no es favorable, revisarla con detalle antes de renunciar.',
				],
			},
		],
		checklist: [
			'Define bien la unidad de convivencia.',
			'Reúne ingresos, patrimonio y gastos de todo el hogar.',
			'Presenta la solicitud por la vía electrónica.',
			'Contesta los requerimientos dentro de plazo.',
			'Revisa la resolución y valora la reclamación previa.',
		],
		faq: [
			{
				question: '¿El Ingreso Mínimo Vital es compatible con trabajar?',
				answer:
					'Sí, es compatible con los rendimientos del trabajo dentro de determinados límites, aunque el importe puede ajustarse en función de los ingresos del hogar.',
			},
			{
				question: '¿Qué pasa si me deniegan el Ingreso Mínimo Vital?',
				answer:
					'Cabe reclamación previa y, después, la vía judicial. Muchas denegaciones se deben a una mala valoración de los ingresos, el patrimonio o la unidad de convivencia, y se corrigen con la documentación adecuada.',
			},
			{
				question: '¿Tengo que comunicar cambios en mi situación?',
				answer:
					'Sí. Cambios en la composición del hogar, en los ingresos o en el patrimonio pueden afectar a la prestación. Comunicarlos evita recibir cantidades indebidas y tener que devolverlas después.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/recursos-administrativos', label: 'reclamación y recursos' },
			{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
		],
	},
];
