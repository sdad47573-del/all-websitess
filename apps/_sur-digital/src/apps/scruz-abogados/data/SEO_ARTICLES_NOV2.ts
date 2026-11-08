/**
 * Segundo lote de contenido de nov 2026. Mismo contrato que el resto de lotes
 * (`SEO_ARTICLES_OCT*.ts`, `SEO_ARTICLES_NOV.ts`): guías de intención
 * informativa sacadas de los huecos del exporte de Search Console.
 *
 *   - `heredar-con-testamento`: la web solo tenía la vía SIN testamento. La
 *     consulta "herencias con testamento córdoba" llega con impresiones y
 *     posición lejana porque no había página que la respondiera.
 *   - `tarifa-plana-abogados`: "tarifa plana de abogados en córdoba" aparecía
 *     con 29 impresiones y ninguna página de honorarios que la explicara.
 *   - `justicia-gratuita`: consulta recurrente del despacho y sin artículo,
 *     pese a ser la primera pregunta de muchos clientes potenciales.
 *
 * Categorías existentes (los hubs de `/blog/categoria/` las recogen solos) y
 * tres `relatedServices` por guía para el enlazado de vuelta.
 *
 * Forma: 6 secciones, 5 puntos de checklist, 3 FAQ y 3 servicios relacionados.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_NOV2: SeoArticle[] = [
	{
		slug: 'heredar-con-testamento',
		title: 'Heredar con testamento: pasos, documentos y plazos',
		description:
			'Qué hacer al heredar con testamento: documentos, certificado de últimas voluntades, aceptación, reparto entre herederos e impuestos en Andalucía.',
		date: '2026-11-03',
		category: 'Herencias',
		readTime: '8 min',
		intro: 'Tener testamento no evita el papeleo: lo ordena. El testamento dice quién hereda y en qué proporción, pero la herencia no se reparte sola, no se inscribe sola y no se declara sola. Estos son los pasos reales, los documentos que hay que reunir y los plazos que se pierden por esperar a que «lo arreglen los hermanos».',
		sections: [
			{
				heading: 'Qué resuelve el testamento y qué queda por hacer',
				paragraphs: [
					'El testamento designa herederos, fija legados y puede nombrar albacea o contador-partidor. Lo que no hace es transferir los bienes: para eso hace falta aceptar la herencia, formalizar la partición y, si hay inmuebles, otorgar escritura e inscribirla en el Registro.',
					'La legítima limita la libertad del testador: los hijos y, en su caso, el cónyuge tienen derecho a una porción que no puede desconocerse sin causa legal. Revisar el testamento con la ley delante evita que un heredero descubra tarde que su cuota no es la que le contaron.',
				],
			},
			{
				heading: 'Documentos que hay que reunir',
				paragraphs: [
					'El punto de partida es el certificado de defunción, el certificado de últimas voluntades (que dice si hay testamento y ante qué notario) y la copia autorizada del testamento. Sin el de últimas voluntades no se puede saber si el fallecido otorgó uno posterior, así que se pide siempre.',
					'Después llega la documentación de los bienes: escrituras y notas simples de los inmuebles, certificados bancarios y saldos, participaciones societarias, vehículos, la última declaración del IRPF y el IBI del año en curso. Con ese inventario se decide si la herencia se acepta, se acepta a beneficio de inventario o se renuncia.',
				],
			},
			{
				heading: 'Aceptar la herencia: pura, a beneficio de inventario o renuncia',
				paragraphs: [
					'La aceptación pura y simple hace responder de las deudas del fallecido también con el patrimonio propio. La aceptación a beneficio de inventario limita esa responsabilidad a los bienes heredados y se formaliza ante notario, con inventario previo.',
					'Si el pasivo supera al activo, la renuncia es una salida legítima y se hace en escritura pública. Conviene decidir antes de ocupar la vivienda o disponer de dinero de la herencia, porque los actos de disposición pueden entenderse como aceptación tácita.',
				],
			},
			{
				heading: 'Reparto entre herederos y escritura de partición',
				paragraphs: [
					'Si los herederos están de acuerdo, se firma el cuaderno particional y la escritura de adjudicación: cada uno recibe sus bienes, con compensaciones en metálico cuando la cosa no se puede dividir. Si no hay acuerdo, cualquier coheredero puede pedir la división judicial de la herencia.',
					'Cuando hay menores o personas con discapacidad entre los herederos, la partición necesita autorización judicial o intervención del ministerio fiscal. Y si la vivienda estaba hipotecada, hay que resolver quién asume el préstamo y con el consentimiento del banco.',
				],
			},
			{
				heading: 'Impuestos y gastos que no desaparecen',
				paragraphs: [
					'En Andalucía el impuesto de sucesiones está bonificado al 99 % para cónyuge, descendientes, ascendientes y parientes hasta el tercer grado, con una reducción propia de la base imponible de un millón de euros. Aun así, la autoliquidación se presenta dentro del plazo legal, aunque la cuota resultante sea cero.',
					'Se suman la plusvalía municipal, que solo se devenga si el suelo ha ganado valor, el IBI y la comunidad del periodo posterior al fallecimiento, la propia escritura de partición y su inscripción. Todos esos gastos se restan al valor del activo antes de decidir qué adjudica cada heredero.',
				],
			},
			{
				heading: 'Errores y plazos que se pierden',
				paragraphs: [
					'Los más caros: repartir de palabra y dejar la escritura para después, no pedir el certificado de últimas voluntades, olvidar bienes en el inventario y no presentar el impuesto de sucesiones en plazo (seis meses, prorrogables otros seis si se solicita antes de que termine).',
					'También se pierde tiempo cuando un heredero ocupa la vivienda y los demás esperan: la ocupación no reparte nada y complica la venta. Ordenar la herencia con el inventario cerrado y las cuotas aprobadas por escrito evita que un trámite de semanas acabe en un litigio de años.',
				],
			},
		],
		checklist: [
			'Pide el certificado de últimas voluntades y la copia del testamento.',
			'Haz inventario de bienes y deudas antes de aceptar.',
			'Decide si aceptas a beneficio de inventario o renuncias.',
			'Presenta el impuesto de sucesiones dentro de los seis meses.',
			'Firma la partición por escrito e inscribe los inmuebles.',
		],
		faq: [
			{
				question: '¿Puedo heredar sin escritura de partición?',
				answer:
					'Puedes aceptar la herencia y pagar el impuesto sin haber repartido, pero la titularidad registral de los inmuebles sigue a nombre del fallecido hasta que se otorgue e inscriba la escritura. Sin ella no podrás vender ni hipotecar tu parte con normalidad.',
			},
			{
				question: '¿Qué pasa si el testamento reparte la herencia de forma desigual?',
				answer:
					'El testador puede favorecer a unos herederos dentro de los límites de la legítima. Si el reparto la vulnera, los legitimarios pueden reclamar su porción mediante la acción correspondiente, con plazos que dependen del caso. Conviene revisar el testamento antes de firmar la partición.',
			},
			{
				question: '¿Cuánto se paga de impuesto de sucesiones en Andalucía?',
				answer:
					'Para cónyuge, descendientes, ascendientes y parientes hasta el tercer grado la cuota suele quedar en cero por la bonificación del 99 % y la reducción de un millón de euros de la base imponible. Fuera de esos grupos cambia, y en todo caso la autoliquidación se presenta en plazo.',
			},
		],
		relatedServices: [
			{ path: '/herencias-testamentos', label: 'tramitación de herencias con testamento' },
			{ path: '/reparto-herencia', label: 'reparto y partición entre herederos' },
			{ path: '/impuestos-herencia', label: 'impuesto de sucesiones en Andalucía' },
		],
	},
	{
		slug: 'tarifa-plana-abogados',
		title: 'Tarifa plana de abogados: qué incluye y cuándo compensa',
		description:
			'Cómo funciona una tarifa plana legal para autónomos y empresas: qué cubre, qué queda fuera, la letra pequeña del «ilimitado» y cuándo sale mejor pagar por caso.',
		date: '2026-11-03',
		category: 'Empresas',
		readTime: '7 min',
		intro: 'Las cuotas mensuales de abogado se han vuelto habituales entre autónomos y pequeñas empresas, pero no todas cubren lo mismo ni «ilimitado» significa ilimitado. Antes de firmar conviene saber qué entra en la cuota, qué se factura aparte y en qué momento el precio fijo deja de ser una ventaja.',
		sections: [
			{
				heading: 'Qué es una tarifa plana legal',
				paragraphs: [
					'Es un contrato de servicios jurídicos con precio periódico: una cuota mensual o anual a cambio de un catálogo de actuaciones —consultas, revisión de contratos, reclamaciones extrajudiciales— durante un periodo determinado.',
					'No es lo mismo que un seguro jurídico ni que la asistencia de un abogado de oficio: aquí el despacho asume la defensa de la empresa con un límite de alcance y de uso que debe estar escrito. Tampoco equivale a un presupuesto cerrado por asunto, que se paga una vez.',
				],
			},
			{
				heading: 'Qué suele entrar y qué se factura aparte',
				paragraphs: [
					'Lo habitual es que la cuota incluya consultas, revisión de contratos mercantiles, requerimientos, reclamaciones de cantidad sin juicio y asesoramiento laboral preventivo. En empresas con plantilla, también los despidos consultivos o la preparación de documentos.',
					'Quedan fuera casi siempre los procedimientos judiciales, las tasas, el procurador, los peritos, los desplazamientos y las actuaciones ante organismos fuera de la provincia. Ahí aparece el coste real: la cuota no suele cubrir el litigio, y ese gasto se presupuesta aparte.',
				],
			},
			{
				heading: 'De qué depende el precio',
				paragraphs: [
					'El importe se calcula por volumen de trabajo esperado: número de trabajadores, facturación, número de contratos al mes y si hay departamento propio. También influye el sector, porque no genera la misma carga un comercio que una empresa con licitaciones o con personal en varias provincias.',
					'Pide que el criterio esté por escrito y que la cuota no cambie sin aviso. Una tarifa que sube cada vez que la empresa crece, sin fórmula pactada, acaba costando más que el asesoramiento puntual que venía a sustituir.',
				],
			},
			{
				heading: 'La letra pequeña del «ilimitado»',
				paragraphs: [
					'Los contratos con «consultas ilimitadas» suelen incluir una cláusula de uso razonable o un umbral de horas mensuales. Es legítimo, pero debe estar claro: qué pasa al superarlo, si se factura por hora y a qué precio, y si las consultas no consumidas se acumulan.',
					'También importan la permanencia y la penalización por salir antes, los tiempos de respuesta comprometidos, quién es el abogado responsable y qué ocurre si el despacho tiene un conflicto de interés con la otra parte. Sin esas respuestas por escrito, la cuota barata sale caro.',
				],
			},
			{
				heading: 'Cuándo compensa y cuándo no',
				paragraphs: [
					'Compensa cuando el uso es recurrente y previsible: una empresa que firma contratos cada mes, que tiene rotación de personal o que necesita respuesta rápida sin abrir un presupuesto cada vez. También cuando el coste de una consulta puntual frena las decisiones que deberían consultarse.',
					'No compensa si el negocio apenas tiene conflictos: ahí el presupuesto cerrado por asunto es más barato y más transparente. Y nunca compensa si la cuota se percibe como un seguro para litigar: los juicios seguirán facturándose aparte.',
				],
			},
			{
				heading: 'Cómo elegir y qué exigir por escrito',
				paragraphs: [
					'Antes de firmar, pide el alcance detallado (qué actuaciones, cuántas, con qué límite), el plazo de respuesta comprometido, la forma de facturar los extras y las condiciones de salida. Comprueba también que el despacho tiene seguro de responsabilidad civil y que el abogado asignado conoce el sector.',
					'Y compara con números: suma lo que pagarías en un año de cuota frente a las tres o cuatro actuaciones que realmente vas a necesitar. Si la diferencia es pequeña, la tranquilidad de tener a alguien disponible justifica la cuota; si es grande, no.',
				],
			},
		],
		checklist: [
			'Pide el catálogo de actuaciones incluidas y sus límites.',
			'Comprueba qué se factura aparte (juicios, tasas, procurador).',
			'Revisa permanencia, preaviso y penalización de salida.',
			'Confirma el tiempo de respuesta y el abogado asignado.',
			'Compara la cuota anual con los asuntos que usas de verdad.',
		],
		faq: [
			{
				question: '¿La tarifa plana cubre los juicios?',
				answer:
					'Casi nunca. Lo habitual es que la cuota incluya consultas, contratos y reclamaciones extrajudiciales, y que el procedimiento judicial se presupueste aparte, junto con tasas, procurador y peritos. Debe constar por escrito antes de firmar.',
			},
			{
				question: '¿Puedo cambiar de abogado si tengo tarifa plana?',
				answer:
					'Sí, la relación es libre y el contrato debe prever cómo se sale. Revisa el preaviso y si hay penalización por baja anticipada, y pide la devolución de la documentación del expediente, que es tuya.',
			},
			{
				question: '¿Es mejor la tarifa plana o pagar por caso?',
				answer:
					'Depende del uso: con contratos, personal y consultas frecuentes la cuota suele salir mejor; con pocos conflictos al año, el presupuesto cerrado por asunto es más barato y más transparente. Compara el coste anual con las actuaciones reales.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'servicios jurídicos para empresas y autónomos' },
			{ path: '/empresas/contratos-mercantiles', label: 'revisión de contratos mercantiles' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral preventiva' },
		],
	},
	{
		slug: 'justicia-gratuita-requisitos',
		title: 'Justicia gratuita: requisitos, cómo pedirla y qué cubre',
		description:
			'Quién tiene derecho a la justicia gratuita, qué ingresos se tienen en cuenta, cómo se solicita y qué gastos cubre: abogado, procurador, tasas y periciales.',
		date: '2026-11-03',
		category: 'Recursos administrativos',
		readTime: '7 min',
		intro: 'La justicia gratuita no es «un abogado barato»: es el derecho a que el Estado pague abogado, procurador y determinados gastos cuando no puedes asumirlos. Tiene requisitos económicos, un procedimiento propio y unos límites que conviene conocer antes de pedirla, porque solicitarla mal retrasa la designación y puede hacerte perder plazos del caso.',
		sections: [
			{
				heading: 'Qué cubre realmente',
				paragraphs: [
					'Cubre la defensa y representación por abogado y procurador, la exención de tasas judiciales y de depósitos para recurrir, las inserciones gratuitas de anuncios en el Boletín Oficial y determinadas actuaciones periciales cuando el juez las autoriza.',
					'No cubre una condena en costas a favor de la otra parte, ni los gastos que no estén previstos en la ley. Tampoco convierte el proceso en gratis para todo: si el beneficiario mejora de fortuna durante el procedimiento, debe comunicarlo y puede acabar pagando parte de lo adelantado.',
				],
			},
			{
				heading: 'Requisitos económicos: qué ingresos se miran',
				paragraphs: [
					'Se valoran los recursos e ingresos de la unidad familiar, con umbrales que se actualizan cada año y que se amplían según el número de miembros y de hijos. No es solo el salario: cuentan también pensiones, alquileres y rendimientos del capital.',
					'La vivienda habitual y el ajuar no se computan como recursos, pero sí las propiedades que no constituyen vivienda habitual y los bienes que generan rentas. Por eso la solicitud se acompaña de nóminas, certificados de prestaciones, declaración del IRPF y certificado de empadronamiento.',
				],
			},
			{
				heading: 'Cómo se solicita, paso a paso',
				paragraphs: [
					'La solicitud se presenta en el Colegio de Abogados del lugar donde se va a tramitar el asunto, con el formulario oficial y la documentación económica. El Colegio comprueba los requisitos y, si se reconoce el derecho, designa abogado y procurador de oficio.',
					'Mientras se resuelve, la designación provisional permite contar con letrado para los trámites urgentes, como una detención o un plazo que vence. Ese es el motivo de presentar la solicitud cuanto antes: no se puede pedir justicia gratuita «después» para una actuación que ya se hizo.',
				],
			},
			{
				heading: 'Casos que la reconocen sin mirar ingresos',
				paragraphs: [
					'La ley reconoce el derecho con independencia de los recursos en supuestos concretos: víctimas de violencia de género, de terrorismo, de trata, menores y personas con discapacidad que requieren protección, y quienes se defienden en determinados procedimientos por su condición de víctima.',
					'También se reconoce a las entidades de utilidad pública y, en ciertos casos, a los trabajadores en procedimientos laborales. Acreditarlo es distinto a pedirlo: hace falta documentación que pruebe esa condición, no solo indicarla en el formulario.',
				],
			},
			{
				heading: 'Qué pasa si te la deniegan',
				paragraphs: [
					'La denegación es una resolución recurrible. Antes de recurrir conviene revisar si el cálculo de ingresos incluyó partidas que no debía o si falta documentación justificativa: muchos rechazos se corrigen aportando documentos y no litigando.',
					'Si el derecho se deniega definitivamente, el abogado designado puede seguir el asunto cobrando sus honorarios, y el beneficiario asume las tasas. Por eso, cuando el umbral económico está cerca, conviene simular el cómputo antes de solicitar.',
				],
			},
			{
				heading: 'Justicia gratuita y abogado de confianza',
				paragraphs: [
					'Con carácter general no se puede elegir abogado: se designa por turno. Sí se puede cambiar de letrado por causas tasadas —discrepancias, incompatibilidad o pérdida de confianza justificada— y solicitarlo de nuevo si el designado no puede asumir el caso por conflicto de interés.',
					'Es importante entender que la relación con el abogado es la misma que en un encargo privado: el secreto profesional, la obligación de informar y el deber de defender el caso no dependen de quién pague. Lo que cambia es el origen de los honorarios, no el estándar de trabajo.',
				],
			},
		],
		checklist: [
			'Comprueba si cumples el umbral de ingresos antes de solicitar.',
			'Reúne nóminas, prestaciones, IRPF y certificado de empadronamiento.',
			'Presenta la solicitud en el Colegio de Abogados competente.',
			'Pide la designación provisional si hay un plazo urgente.',
			'Si te la deniegan, revisa el cálculo antes de recurrir.',
		],
		faq: [
			{
				question: '¿Puedo pedir justicia gratuita si tengo casa en propiedad?',
				answer:
					'La vivienda habitual no se computa como recurso, así que tener casa no impide el derecho por sí solo. Sí cuentan otras propiedades que no sean vivienda habitual y las rentas que generen, junto con los ingresos de la unidad familiar.',
			},
			{
				question: '¿Cuánto tarda en resolverse?',
				answer:
					'Depende del Colegio y de si la documentación está completa; los plazos varían. Por eso se presenta con toda la documentación económica a la vez: un requerimiento de subsanación retrasa la designación justo cuando el caso tiene fechas.',
			},
			{
				question: '¿La justicia gratuita cubre un divorcio?',
				answer:
					'Sí, si se cumplen los requisitos económicos, cubre el procedimiento de familia completo: abogado y procurador. No cubre los costes de una condena a favor de la otra parte ni los gastos no previstos en la ley.',
			},
		],
		relatedServices: [
			{ path: '/servicios', label: 'todos los servicios del despacho' },
			{ path: '/recursos-administrativos', label: 'recursos y reclamaciones ante la Administración' },
			{ path: '/divorcios-separaciones', label: 'divorcios y separaciones' },
		],
	},
];
