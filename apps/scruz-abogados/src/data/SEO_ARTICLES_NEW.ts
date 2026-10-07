/**
 * Lotes de contenido nuevo (oct 2026) elegidos a partir del exporte de Google
 * Search Console (`google_search/Consultas.csv`): consultas con impresiones y
 * sin página dedicada, más la ampliación de clústeres ya cerrados. El primer
 * lote (8 guías) cubre testamentos, divorcio notarial, financiación de coche,
 * indemnización con baja laboral, incapacidad permanente y convenio regulador;
 * el segundo (8 guías) cubre capitulaciones, adopción, actos societarios,
 * seguro agrario integral, reclamación previa a la Seguridad Social, impugnación
 * de herencia, actualización de la renta y despido colectivo; y un tercero
 * (8 guías) cubre vida laboral, cancelación de antecedentes penales, acusación
 * particular, traspaso de negocio, residencia de mayores, lesiones fuera del
 * baremo, nacionalidad por residencia en Málaga y divorcio contencioso; y un
 * cuarto (8 guías) cubre tabla de jubilación, recurso de alzada y reposición,
 * desahucio por falta de pago, acoso laboral, certificado de últimas
 * voluntades, parejas de hecho, deudas de una sociedad limitada y despido nulo;
 * y un quinto (8 guías) cubre jubilación anticipada, despido objetivo, legítima
 * y desheredación, arras, SL o autónomo, reagrupación familiar, segunda
 * oportunidad y delito leve.
 *
 * Cada artículo declara sus tres `relatedServices` para alimentar el enlazado
 * bidireccional de `blogInternalLinks.ts`: la entrada derivada hace que la
 * página de servicio enlace de vuelta a la guía, así que ninguna queda huérfana.
 * Reglas de forma: title ≤ 62, description ≤ 162 e intro > 150 caracteres.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_NEW: SeoArticle[] = [
	{
		slug: 'tipos-de-testamento',
		title: 'Tipos de testamento: abierto, cerrado y ológrafo',
		description:
			'El testamento abierto, cerrado y ológrafo: cuándo conviene cada uno, qué exige la ley y por qué el testamento mancomunado no vale en Andalucía.',
		date: '2026-10-06',
		category: 'Herencias',
		readTime: '7 min',
		intro: 'Elegir el testamento adecuado evita que el reparto de la herencia dependa de la ley o acabe en un pleito entre herederos. Cada tipo tiene una forma, unos requisitos y un coste distintos, y no todos se pueden otorgar en cualquier parte de España.',
		sections: [
			{
				heading: 'Qué decide el tipo de testamento',
				paragraphs: [
					'El testamento es el documento con el que una persona ordena el destino de sus bienes para después de su muerte. El Código Civil permite varios tipos, y la diferencia no es formal: cada uno cambia quién lo redacta, cómo se prueba y qué margen de error admite.',
					'Elegir bien importa porque un testamento que no se ajusta al tipo que dice ser puede ser nulo. Cuando no hay testamento válido se aplica la sucesión intestada y la ley decide quién hereda.',
				],
			},
			{
				heading: 'El testamento abierto ante notario',
				paragraphs: [
					'Es el más habitual y el que recomienda prácticamente cualquier abogado. El testador expone su voluntad ante notario, que lo redacta conforme a la ley y lo autoriza. Se conoce su contenido desde el mismo momento y queda inscrito en el Registro General de Actos de Última Voluntad.',
					'Su ventaja es la seguridad jurídica: el notario asesora, el documento es difícil de impugnar y la familia localiza el testamento sin depender de papeles guardados en casa.',
				],
			},
			{
				heading: 'El testamento cerrado',
				paragraphs: [
					'En el testamento cerrado el testador entrega al notario un sobre con su última voluntad sin que este conozca el contenido. El notario lo autoriza y lo conserva cerrado, y solo se abre tras el fallecimiento, en presencia de las personas que la ley exige.',
					'Tiene sentido cuando se quiere mantener el contenido en secreto, pero se usa poco y obliga a cumplir estrictamente las formalidades. Cualquier defecto en el cierre o en su custodia puede comprometer su validez.',
				],
			},
			{
				heading: 'El testamento ológrafo',
				paragraphs: [
					'El testamento ológrafo es el escrito de puño y letra del propio testador, con firma y fecha. No necesita notario para su otorgamiento, pero sí para su validez posterior: debe ser protocolizado notarialmente en el plazo legal tras el fallecimiento.',
					'Es el tipo más frágil. Si se pierde, se rompe, no está bien fechado o hay dudas sobre la letra, quien quiera defenderlo tendrá que probarlo, y un heredero perjudicado puede impugnarlo con una pericial caligráfica.',
				],
			},
			{
				heading: 'El testamento mancomunado en Andalucía',
				paragraphs: [
					'El testamento mancomunado o de hermandad es el que dos personas otorgan en un mismo documento. Es habitual en algunos derechos forales, pero el Código Civil lo prohíbe con carácter general, y no cabe otorgarlo en Andalucía.',
					'Por eso, cuando se quiere decidir en pareja cómo se repartirá el patrimonio, la vía correcta no es un testamento conjunto, sino un testamento por cada cónyuge coordinado entre sí.',
				],
			},
			{
				heading: 'Cómo se formaliza y qué conviene revisar',
				paragraphs: [
					'El testamento abierto se otorga en notaría con el documento de identidad, los datos de la familia y la descripción de los bienes. Antes de firmar conviene revisar quién es heredero, qué pasa si algún heredero fallece antes, la designación de legados y la figura del albacea.',
					'Un testamento antiguo no caduca, pero puede quedar desactualizado: hijos que nacen, bienes que se compran, sociedades que se crean o un matrimonio posterior son motivos frecuentes para revisarlo o sustituirlo por uno nuevo.',
				],
			},
		],
		checklist: [
			'Decide si quieres testamento abierto, cerrado u ológrafo.',
			'Reúne el documento de identidad y los datos de herederos y bienes.',
			'Comprueba que tu voluntad no deja desprotegido a ningún heredero.',
			'Repasa la designación de legados y albacea.',
			'Guarda copia y consulta el Registro de Últimas Voluntades.',
		],
		faq: [
			{
				question: '¿Puedo hacer un testamento mancomunado con mi pareja en Andalucía?',
				answer:
					'No. El testamento mancomunado no cabe donde se aplica el Código Civil, y Andalucía no tiene un derecho foral propio que lo permita. Lo correcto es otorgar un testamento por cada cónyuge, coordinados entre sí.',
			},
			{
				question: '¿Qué testamento es mejor, el abierto o el ológrafo?',
				answer:
					'Depende de lo que busques. El abierto ante notario ofrece más seguridad jurídica y asesoramiento; el ológrafo, escrito a mano, solo se recomienda en casos muy concretos y exige protocolizarlo después.',
			},
			{
				question: '¿Caduca un testamento con los años?',
				answer:
					'El testamento no caduca por el paso del tiempo, pero puede quedar desactualizado. Si cambia la familia, el patrimonio o el matrimonio, conviene revisarlo y, si procede, otorgar uno nuevo, que revocará el anterior.',
			},
		],
		relatedServices: [
			{ path: '/herencias-testamentos', label: 'testamentos y herencias' },
			{ path: '/blog/testamento-online-cordoba', label: 'preparar el testamento en Córdoba' },
			{ path: '/derecho-civil', label: 'asesoramiento civil' },
		],
	},
	{
		slug: 'declaracion-de-herederos-sin-testamento',
		title: 'Declaración de herederos sin testamento: cómo se hace',
		description:
			'Quién hereda cuando no hay testamento, la declaración de herederos ante notario y el acta de notoriedad: requisitos, documentos y errores frecuentes.',
		date: '2026-10-06',
		category: 'Herencias',
		readTime: '7 min',
		intro: 'Cuando alguien fallece sin testamento, la ley decide quién hereda y hay que acreditarlo antes de repartir los bienes. La declaración de herederos es el documento que lo prueba y suele ser el primer trámite de una herencia en Córdoba y en el resto de Andalucía.',
		sections: [
			{
				heading: 'Quién hereda cuando no hay testamento',
				paragraphs: [
					'La sucesión intestada se activa cuando el fallecido no dejó testamento válido, cuando el testamento no cubre todos los bienes o cuando sus disposiciones no se pueden cumplir. En ese caso el Código Civil fija un orden que, en lo esencial, llama primero a los hijos y descendientes.',
					'Si no hay descendientes, heredan los padres y ascendientes; después, el cónyuge viudo; más tarde, los hermanos y sobrinos, y así sucesivamente hasta el Estado. Dentro de cada grupo hay reglas de proporción que conviene comprobar antes de repartir.',
				],
			},
			{
				heading: 'Declaración de herederos: notario o juzgado',
				paragraphs: [
					'La declaración de herederos se tramita por notario cuando los interesados están de acuerdo y el llamamiento es sencillo, o por el juzgado cuando hay conflicto, menores, personas con la capacidad modificada o herederos que no están localizables.',
					'Ambas vías buscan lo mismo: un documento oficial que declare quiénes son los herederos. Ese documento es el que permite después vender bienes, cancelar cuentas o pagar el impuesto de sucesiones.',
				],
			},
			{
				heading: 'El acta de notoriedad paso a paso',
				paragraphs: [
					'La vía notarial se resuelve mediante un acta de notoriedad. El notario comprueba la identidad del fallecido, la ausencia de testamento y el parentesco de quienes reclaman su condición de herederos, y levanta acta con la declaración.',
					'Para llegar a esa acta hay que explicar el parentesco con claridad, aportar los documentos y, en muchos casos, contar con testigos que conozcan la situación familiar. El notario puede además dirigirse al Registro de Actos de Última Voluntad.',
				],
			},
			{
				heading: 'Documentos que hay que aportar',
				paragraphs: [
					'Con carácter general: certificado de defunción, certificado de últimas voluntades, libro de familia o documentos que acrediten el parentesco, documentación de identidad de los interesados y datos de los bienes. Si hubo fallecimientos intermedios, hay que documentarlos también.',
					'Un error frecuente es olvidar a un heredero o acreditar mal el parentesco. El notario necesita reconstruir la línea familiar completa, no solo la de quien pide el acta.',
				],
			},
			{
				heading: 'Después de la declaración: partición e impuestos',
				paragraphs: [
					'Con la declaración de herederos se puede inventariar y partir la herencia. La partición reparte los bienes entre los herederos, y puede hacerse en escritura notarial o, si hay conflicto, en un procedimiento judicial.',
					'A partir de ahí corren los plazos fiscales del impuesto de sucesiones, que en Andalucía tiene particularidades y bonificaciones que conviene revisar antes de presentar la autoliquidación.',
				],
			},
			{
				heading: 'Errores y conflictos frecuentes',
				paragraphs: [
					'Los problemas más habituales son la aparición tardía de un testamento, la falta de acuerdo entre hermanos y los bienes que no figuran a nombre del fallecido. Cada uno se resuelve de forma distinta y algunos exigen acudir al juzgado.',
					'Cuando aparecen desacuerdos, conviene frenar el reparto y ordenar la documentación antes de firmar cualquier papel. Un reparto hecho mal puede ser muy difícil de deshacer después.',
				],
			},
		],
		checklist: [
			'Pide el certificado de últimas voluntades.',
			'Reúne la defunción y los documentos de parentesco.',
			'Comprueba todos los herederos por cada línea familiar.',
			'Elige notario o juzgado según exista acuerdo.',
			'No repartas bienes antes de tener la declaración.',
		],
		faq: [
			{
				question: '¿Cuánto tarda una declaración de herederos?',
				answer:
					'Depende de la vía y de la documentación. Si todos están de acuerdo y los papeles están completos, la vía notarial es más rápida; si hay conflicto o falta documentación, el procedimiento se alarga.',
			},
			{
				question: '¿Puedo vender una casa heredada antes de la declaración?',
				answer:
					'En la práctica necesitas acreditar que eres heredero. Sin testamento y sin declaración de herederos, la venta no se puede formalizar con normalidad, así que la declaración suele ser un paso previo.',
			},
			{
				question: '¿Qué pasa si no aparece ningún heredero?',
				answer:
					'Cuando no se localiza a ningún heredero, el Código Civil llama al Estado. Aun así, el procedimiento para declarar esa situación también exige acreditar la ausencia de parientes.',
			},
		],
		relatedServices: [
			{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
			{ path: '/blog/herencia-sin-testamento', label: 'quién hereda sin testamento' },
			{ path: '/disputas-herencias', label: 'conflictos entre herederos' },
		],
	},
	{
		slug: 'divorcio-ante-notario',
		title: 'Divorcio ante notario: cuándo es posible y cuándo no',
		description:
			'El divorcio notarial de mutuo acuerdo de la Ley 15/2015: requisitos, el límite de los hijos menores, qué incluye el acuerdo y cuándo hay que ir al juzgado.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '7 min',
		intro: 'Desde la Ley de Jurisdicción Voluntaria de 2015 es posible divorciarse ante notario sin pasar por el juzgado, pero solo en supuestos concretos. Saber si tu caso encaja ahorra tiempo y evita que un trámite notarial acabe devuelto al juzgado.',
		sections: [
			{
				heading: 'Qué es el divorcio ante notario',
				paragraphs: [
					'El divorcio ante notario es la vía que permite a dos cónyuges disolver su matrimonio de mutuo acuerdo ante un notario, sin demanda ni sentencia. Se apoya en la Ley 15/2015, de Jurisdicción Voluntaria, que trasladó ciertos asuntos al notario para descargar a los juzgados.',
					'No es una vía más rápida para cualquier caso: solo está prevista para los supuestos que la ley permite, y fuera de ellos el divorcio sigue necesitando al juez.',
				],
			},
			{
				heading: 'Requisitos: mutuo acuerdo y sin hijos menores',
				paragraphs: [
					'Los requisitos esenciales son dos. El primero es el acuerdo: ambos cónyuges deben querer el divorcio y aceptar las medidas que lo acompañan. El segundo afecta a los hijos: la ley reserva al juzgado los divorcios cuando hay hijos menores no emancipados o con la capacidad judicialmente modificada.',
					'Si los hijos son mayores de edad o emancipados, y no existe conflicto, la vía notarial es posible. Si hay hijos menores, el expediente debe ir al juzgado aunque los padres estén de acuerdo.',
				],
			},
			{
				heading: 'Qué se firma: el acuerdo y las medidas',
				paragraphs: [
					'El documento recoge la voluntad de divorciarse y las medidas que la acompañan: uso de la vivienda, alimentos cuando proceda, destino de los bienes comunes y liquidación del régimen económico si se pacta. Cuanto más claras queden las medidas, menos riesgo de conflicto posterior.',
					'Un acuerdo redactado de prisa suele olvidar situaciones reales: hipotecas, vehículos, sociedades o deudas comunes. Revisar esos puntos antes de firmar evita tener que volver a discutirlos más adelante.',
				],
			},
			{
				heading: 'Cuándo hay que ir al juzgado',
				paragraphs: [
					'Además de los casos con hijos menores, hay otras situaciones que llevan el asunto al juzgado: cuando no hay acuerdo sobre alguna medida, cuando existe violencia en la pareja o cuando hay que adoptar medidas que el notario no puede imponer.',
					'En esos supuestos, lo habitual es un divorcio de mutuo acuerdo ante el juez si hay pacto parcial, o un divorcio contencioso si no hay acuerdo en absoluto.',
				],
			},
			{
				heading: 'Ventajas, límites y costes',
				paragraphs: [
					'La vía notarial reduce pasos, suele ser más rápida que un procedimiento judicial y da a las partes más control sobre el contenido del acuerdo. A cambio, exige acuerdo total y no sirve para los supuestos que la ley reserva al juez.',
					'Los costes dependen de la notaría, de la complejidad del acuerdo y de si hay que liquidar bienes. Conviene pedir un presupuesto cerrado antes de iniciar el trámite.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'El error más caro es firmar un acuerdo sin revisar las consecuencias de cada cláusula. También es frecuente intentar la vía notarial con hijos menores o con un desacuerdo oculto que reaparece después.',
					'Antes de firmar conviene comprobar quién se queda con la vivienda, quién paga la hipoteca, cómo se liquidan los bienes comunes y qué ocurrirá si cambian las circunstancias.',
				],
			},
		],
		checklist: [
			'Confirma que el divorcio es de mutuo acuerdo.',
			'Comprueba si hay hijos menores o con capacidad modificada.',
			'Revisa las medidas: vivienda, bienes y deudas.',
			'Pide presupuesto notarial antes de empezar.',
			'Valora la liquidación de bienes por separado.',
		],
		faq: [
			{
				question: '¿Puedo divorciarme ante notario si tengo hijos menores?',
				answer:
					'No. Cuando hay hijos menores no emancipados o con la capacidad judicialmente modificada, la ley reserva el divorcio al juzgado. La vía notarial queda para los supuestos en que los hijos son mayores o emancipados y hay acuerdo.',
			},
			{
				question: '¿Es más barato el divorcio ante notario?',
				answer:
					'Puede serlo cuando el acuerdo es sencillo y no hay bienes que liquidar, porque se evitan pasos judiciales. Si hay patrimonio o medidas complejas, el coste se acerca al de la vía judicial.',
			},
			{
				question: '¿El divorcio notarial disuelve el matrimonio igual que una sentencia?',
				answer:
					'Sí. La escritura notarial produce los mismos efectos que la resolución judicial en cuanto a la disolución del vínculo, siempre que se cumplan los requisitos legales y se inscriba donde corresponde.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
			{ path: '/blog/divorcio-mutuo-acuerdo', label: 'divorcio de mutuo acuerdo' },
			{ path: '/blog/cuanto-cuesta-un-divorcio', label: 'cuánto cuesta un divorcio' },
		],
	},
	{
		slug: 'pension-compensatoria',
		title: 'Pensión compensatoria: cuándo se concede y cómo se fija',
		description:
			'Qué es la pensión compensatoria, qué desequilibrio exige el juez, cómo se calcula su importe y duración y cómo se modifica o extingue tras el divorcio.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '8 min',
		intro: 'La pensión compensatoria no es una pensión de alimentos ni un reparto automático: solo se concede cuando el divorcio deja a uno de los cónyuges en una situación económica peor que la que tenía durante el matrimonio. Entender cómo la valora el juez evita expectativas equivocadas.',
		sections: [
			{
				heading: 'Qué es y en qué se diferencia de los alimentos',
				paragraphs: [
					'La pensión compensatoria es la cantidad que un cónyuge puede deber al otro cuando la separación o el divorcio le produce un desequilibrio económico respecto a la situación que tenía casado. Se regula en el Código Civil y se fija en el convenio o en la sentencia.',
					'No debe confundirse con la pensión de alimentos de los hijos, que es otra cosa: los alimentos cubren lo necesario para los hijos y no dependen del desequilibrio entre los cónyuges.',
				],
			},
			{
				heading: 'El desequilibrio económico que exige la ley',
				paragraphs: [
					'La ley no concede la pensión por el simple hecho de haberse casado, sino por el desequilibrio que el divorcio genera. El juez valora la dedicación pasada a la familia, la edad, el estado de salud, la cualificación y las posibilidades reales de encontrar trabajo.',
					'Cuanto más patente es la pérdida de nivel de vida y más difícil la incorporación laboral, más fundamento tiene la pretensión. Si ambos cónyuges conservan una situación equivalente, lo normal es que no se conceda.',
				],
			},
			{
				heading: 'Cómo se fija la cuantía y la duración',
				paragraphs: [
					'La pensión puede fijarse como cantidad periódica, de forma temporal o incluso como capital único. Su importe intenta aproximar el nivel de vida que se ha perdido, no igualar patrimonios ni repartir ganancias.',
					'La duración es la gran pregunta. Puede ser indefinida o por un tiempo determinado, según la edad, la salud y las posibilidades de independencia económica del beneficiario. Un acuerdo voluntario entre las partes permite mucha más flexibilidad.',
				],
			},
			{
				heading: 'Prueba y documentación',
				paragraphs: [
					'Lo que decide el caso son los números: nóminas, declaraciones de la renta, cuentas, deudas, bienes y una descripción realista de la dedicación a la familia. La pericial económica puede ordenar todos esos datos y evitar discusiones sobre cifras sueltas.',
					'También importa documentar la carrera profesional de quien la pide: si dejó de trabajar para cuidar a la familia, si rechazó oportunidades o si hoy su acceso al empleo es limitado.',
				],
			},
			{
				heading: 'Modificación y extinción',
				paragraphs: [
					'La pensión no es inmutable. Puede modificarse si cambian de forma sustancial las circunstancias económicas de cualquiera de los cónyuges, y puede extinguirse por varios motivos: la convivencia estable con otra persona, la mejora notable de la situación o el acuerdo de las partes.',
					'Es importante saber que cobrar una pensión y convivir con una nueva pareja pueden chocar, porque la ley permite extinguirla cuando la convivencia es estable. Cada caso se valora con prueba concreta.',
				],
			},
			{
				heading: 'Errores y qué revisar antes de firmar',
				paragraphs: [
					'El error más frecuente es aceptar o pedir una cifra sin analizar la capacidad económica real de las partes. Otro es confundir la pensión compensatoria con la de alimentos de los hijos y mezclar ambas partidas en un mismo acuerdo.',
					'Antes de firmar conviene dejar por escrito cuándo puede revisarse la pensión, cómo se actualizará y qué ocurre si cambian los ingresos o la situación familiar.',
				],
			},
		],
		checklist: [
			'Documenta el nivel de vida durante el matrimonio.',
			'Reúne nóminas, renta y deudas de ambos cónyuges.',
			'Describe la dedicación familiar y la carrera laboral.',
			'Distingue la pensión compensatoria de los alimentos.',
			'Deja por escrito la revisión y la actualización.',
		],
		faq: [
			{
				question: '¿Se concede siempre la pensión compensatoria?',
				answer:
					'No. Solo cuando el divorcio produce un desequilibrio económico entre los cónyuges. Si ambos conservan una situación económica equivalente, el juez no tiene por qué concederla.',
			},
			{
				question: '¿Cuánto dura la pensión compensatoria?',
				answer:
					'Puede ser indefinida o temporal. La duración depende de la edad, la salud, la cualificación y las posibilidades de independencia económica del beneficiario, y también de lo que las partes pacten.',
			},
			{
				question: '¿Se pierde si empiezo a convivir con otra persona?',
				answer:
					'La convivencia estable con otra persona es una de las causas de extinción que la ley contempla. Si el derecho se fijó como vitalicio por acuerdo, su efecto puede ser distinto, así que conviene revisar cada caso.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
			{ path: '/pension-de-alimentos', label: 'pensión de alimentos de los hijos' },
			{ path: '/liquidacion-gananciales', label: 'liquidación de gananciales' },
		],
	},
	{
		slug: 'reclamar-financiacion-coche',
		title: 'Reclamar la financiación de un coche: intereses y comisiones',
		description:
			'Cómo revisar los intereses y las cláusulas de la financiación de un coche, reclamar comisiones y seguros vinculados y cómo actuar si llega el impago.',
		date: '2026-10-06',
		category: 'Consumo y banca',
		readTime: '7 min',
		intro: 'Comprar un coche financiado es habitual, pero pocas veces se lee con calma el contrato que se firma en el mostrador. Intereses altos, seguros vinculados y comisiones mal explicadas dan lugar a reclamaciones que suelen acabar bien si se documentan a tiempo.',
		sections: [
			{
				heading: 'Revisa el contrato antes de reclamar',
				paragraphs: [
					'El primer paso es leer el contrato de financiación completo: el coste total, el importe financiado, el número de cuotas, los seguros asociados y las comisiones. Muchos contratos mezclan la compra del vehículo con un préstamo distinto, y hay que identificar quién presta y quién cobra.',
					'Compara lo que se pagó con lo que decía la oferta comercial. Si el folleto anunciaba otro tipo o otra cuota, esa diferencia es prueba útil en una reclamación por falta de transparencia.',
				],
			},
			{
				heading: 'Intereses y cláusulas que se pueden discutir',
				paragraphs: [
					'Una financiación puede tener un interés elevado por sí mismo, y además recargos por impago, comisiones de apertura o cláusulas de vencimiento anticipado. Lo relevante no es solo el tipo, sino si la información fue clara y si el coste total estaba explicado.',
					'Cuando el consumidor no pudo comparar ni entender el coste real, una cláusula puede considerarse abusiva. Eso permite pedir su nulidad y, en su caso, la devolución de lo cobrado de más.',
				],
			},
			{
				heading: 'Seguros y productos vinculados',
				paragraphs: [
					'Es frecuente que la financiación venga con un seguro de vida, otro de protección de pagos o un plan de mantenimiento. Si se impusieron como condición para financiar, la venta vinculada puede denunciarse ante la entidad y ante los servicios de consumo.',
					'En varios casos se ha reclamado la devolución de esas primas. Revisa si el producto se presentó como obligatorio y si el consumidor pudo contratarlo por separado.',
				],
			},
			{
				heading: 'La reclamación paso a paso',
				paragraphs: [
					'Reúne contrato, cuadro de amortización, recibos, publicidad y comunicaciones con la financiera. Presenta primero una reclamación formal ante la entidad y, si no responde o no lo hace bien, ante el servicio de consumo y el Banco de España.',
					'Si la vía administrativa no resuelve, queda la vía judicial. La clave es cuantificar bien la pretensión: lo devuelto de más, los intereses y, en su caso, las comisiones.',
				],
			},
			{
				heading: 'Si llega el impago o el coche está en riesgo',
				paragraphs: [
					'Dejar de pagar puede llevar a la resolución del contrato y a la recuperación del vehículo, pero no elimina automáticamente la deuda. La recuperación debe seguir el procedimiento legal y no puede hacerse por la fuerza ni fuera de cauce.',
					'Si temes perder el coche, pide una liquidación actualizada, revisa las cláusulas de morosidad y valora un acuerdo por escrito con plazos, intereses y entrega del vehículo bien definidos.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'El error más común es reclamar de memoria, sin contrato ni recibos. También lo es firmar un acuerdo de pago sin comprobar los intereses o entregar el vehículo voluntariamente creyendo que con eso desaparece la deuda.',
					'Otro fallo es dejar pasar el tiempo: guarda toda la documentación desde la compra y actúa en cuanto detectes un cargo que no esperabas.',
				],
			},
		],
		checklist: [
			'Localiza contrato, cuadro de amortización y recibos.',
			'Compara la oferta comercial con lo que firmaste.',
			'Revisa los seguros y productos vinculados.',
			'Presenta la reclamación ante la entidad por escrito.',
			'Acude a consumo o al Banco de España si no responden.',
		],
		faq: [
			{
				question: '¿Se puede reclamar una financiación de coche ya pagada?',
				answer:
					'Sí, si existen cláusulas abusivas o falta de transparencia. Se puede pedir la nulidad de esas cláusulas y la devolución de las cantidades cobradas de más, con los intereses que correspondan.',
			},
			{
				question: '¿Pueden quitarme el coche sin juicio?',
				answer:
					'La recuperación del vehículo no puede hacerse por la fuerza. Debe seguir el procedimiento legal y, en muchos casos, pasar por una resolución que la ampare. No entregues el coche sin asesoramiento.',
			},
			{
				question: '¿Qué plazo tengo para reclamar?',
				answer:
					'Depende del tipo de acción. Las reclamaciones por cláusulas abusivas no caducan de la misma forma que otras, pero conviene actuar cuanto antes para no perder pruebas ni posiciones.',
			},
		],
		relatedServices: [
			{ path: '/consumo', label: 'reclamaciones de consumo' },
			{ path: '/reclamaciones-bancarias', label: 'reclamaciones a bancos y financieras' },
			{ path: '/derecho-civil', label: 'revisión de contratos' },
		],
	},
	{
		slug: 'indemnizacion-accidente-trafico-baja-laboral',
		title: 'Accidente de tráfico con baja laboral: qué indemnización hay',
		description:
			'Indemnización por accidente de tráfico con baja laboral: días impeditivos, compatibilidad con la prestación y cómo reclamar el lucro cesante al seguro.',
		date: '2026-10-06',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
		intro: 'Cuando un accidente de tráfico obliga a coger la baja, confluyen dos cosas: la prestación que paga la Seguridad Social o la mutua y la indemnización que debe el responsable. Bien planteadas, son compatibles; mal llevadas, es fácil cobrar de menos.',
		sections: [
			{
				heading: 'Baja laboral e indemnización: dos vías distintas',
				paragraphs: [
					'La baja laboral tras un accidente cubre la pérdida de ingresos mientras se está de baja y la asistencia sanitaria. La indemnización, en cambio, la paga el seguro del responsable por las lesiones, los días de incapacidad y las secuelas. Son dos mecanismos distintos y complementarios.',
					'Por eso no es cierto que cobrar la baja impida reclamar al seguro. Lo que hay que cuidar es no duplicar conceptos y dejar claro qué se reclama en cada vía.',
				],
			},
			{
				heading: 'Días impeditivos y días de baja',
				paragraphs: [
					'El baremo distingue los días que la lesión impide trabajar de los que no, y cada uno se valora con una cantidad distinta. Los informes médicos son los que fijan cuántos días fueron de curación impeditiva y cuántos de curación sin impedimento.',
					'Un error habitual es confundir los días de baja de la Seguridad Social con los del baremo. Pueden coincidir en parte, pero no son exactamente lo mismo, y una reclamación mal calculada se queda corta.',
				],
			},
			{
				heading: 'La compatibilidad con la prestación',
				paragraphs: [
					'La prestación por incapacidad temporal y la indemnización del seguro no se excluyen. La indemnización se calcula sobre el daño causado, con independencia de quién haya pagado la baja, aunque el juez puede tener en cuenta lo ya percibido para no indemnizar dos veces el mismo concepto.',
					'Si el accidente fue in itinere o en el trabajo, conviene revisar además las reglas del accidente laboral, porque pueden abrir vías propias frente a la empresa.',
				],
			},
			{
				heading: 'El lucro cesante y los gastos',
				paragraphs: [
					'Además de los días de curación y de las secuelas, la indemnización incluye los gastos de tratamiento, rehabilitación, desplazamientos y, en su caso, la pérdida de ingresos que la baja no cubre por completo. Todo eso se acredita con facturas y nóminas.',
					'Si el accidente obligó a contratar ayuda para tareas del hogar o redujo los ingresos de un autónomo, también hay que documentarlo para que forme parte de la reclamación.',
				],
			},
			{
				heading: 'Cómo se reclama al seguro',
				paragraphs: [
					'Primero se concreta el daño con informes médicos y un cálculo detallado; después se presenta la reclamación al seguro del responsable. Si la oferta es insuficiente o se niega el siniestro, la vía judicial decide la cantidad.',
					'Es importante no aceptar un alta o un pago rápido sin comprobar que las secuelas están estabilizadas: las secuelas que aparecen más adelante también pueden reclamarse, pero es mejor valorarlas antes de firmar.',
				],
			},
			{
				heading: 'Errores que reducen la indemnización',
				paragraphs: [
					'Aceptar una oferta baja, ocultar lesiones previas, dejar el tratamiento antes de la estabilización o firmar un finiquito sin revisar son errores caros. También lo es no acreditar los días impeditivos con informes claros.',
					'Un cálculo correcto y una reclamación ordenada suelen marcar la diferencia entre cobrar lo justo y quedarse por debajo de lo que corresponde.',
				],
			},
		],
		checklist: [
			'Guarda los partes de baja y los informes médicos.',
			'Anota los días impeditivos y de curación.',
			'Reúne las facturas de gastos y las nóminas.',
			'No firmes ofertas antes de estabilizar las secuelas.',
			'Revisa la vía laboral si el accidente fue in itinere.',
		],
		faq: [
			{
				question: '¿Puedo cobrar la baja y la indemnización del seguro a la vez?',
				answer:
					'Son dos vías distintas y compatibles. La baja cubre la pérdida de ingresos durante la incapacidad temporal y la indemnización compensa el daño. Eso sí, hay que evitar reclamar dos veces el mismo concepto.',
			},
			{
				question: '¿Cuentan los días de baja como días impeditivos?',
				answer:
					'No siempre coinciden. El baremo atiende a si la lesión impide trabajar, y eso se acredita con informes médicos. Los días de baja administrativa y los del baremo pueden solaparse en parte, pero no son lo mismo.',
			},
			{
				question: '¿Qué pasa si no estoy de alta como trabajador?',
				answer:
					'El alta laboral no determina la indemnización. Si no trabajas, se valoran los daños que acredites, como gastos y limitaciones, aunque el lucro cesante se calcula de otra forma.',
			},
		],
		relatedServices: [
			{ path: '/indemnizaciones-trafico', label: 'indemnización por accidente de tráfico' },
			{ path: '/accidente-laboral', label: 'accidente laboral o in itinere' },
			{ path: '/blog/baremo-lesiones-2026', label: 'cómo funciona el baremo de lesiones' },
		],
	},
	{
		slug: 'reclamar-incapacidad-permanente',
		title: 'Reclamar la incapacidad permanente: recurso y reclamación',
		description:
			'Qué hacer si te deniegan la incapacidad permanente: reclamación previa ante el INSS, informe médico, plazos y vía judicial. Revisa tu resolución con un abogado.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '8 min',
		intro: 'Una resolución que deniega o rebaja la incapacidad permanente no es el final del camino. Con un informe médico bien construido y una reclamación presentada en plazo, es posible darle la vuelta al expediente. El tiempo es el principal enemigo.',
		sections: [
			{
				heading: 'Por qué se deniega una incapacidad',
				paragraphs: [
					'La Seguridad Social valora las lesiones, las limitaciones y el trabajo que la persona puede desempeñar. Una denegación no suele deberse a que no haya lesiones, sino a que el informe del equipo de valoración las considera compatibles con una actividad.',
					'Los motivos más habituales son informes médicos antiguos o incompletos, pruebas que no describen bien el menoscabo o un historial leído sin el contexto laboral. Revisar la resolución con detalle es el primer paso.',
				],
			},
			{
				heading: 'La reclamación previa: el primer paso',
				paragraphs: [
					'Antes de acudir al juzgado hay que presentar una reclamación previa ante el organismo que denegó. En ese escrito se exponen los hechos, los errores de la valoración y las pretensiones, y se aportan las pruebas nuevas.',
					'Presentarla bien es decisivo, porque en muchas ocasiones la propia Seguridad Social corrige la resolución. Si no lo hace, la vía judicial queda abierta con las alegaciones ya preparadas.',
				],
			},
			{
				heading: 'La prueba médica que decide el caso',
				paragraphs: [
					'Los informes de los especialistas tienen que describir la limitación de forma funcional: qué puede y qué no puede hacer la persona en su vida diaria y en el trabajo. Un informe genérico que se limita a enumerar diagnósticos convence menos.',
					'Puede ser muy útil un informe pericial médico independiente que explique el grado de limitación y lo relacione con las tareas del puesto. Esa pericial suele marcar la diferencia en el juzgado.',
				],
			},
			{
				heading: 'El plazo y la vía judicial',
				paragraphs: [
					'Los plazos son cortos: la reclamación previa y la posterior demanda ante el Juzgado de lo Social tienen términos que no permiten dudas. Dejar pasar el plazo convierte una resolución discutible en definitiva.',
					'En la demanda se pide el grado que corresponda y, en su caso, los atrasos y la base reguladora correcta. Cuanto mejor documentada esté la reclamación previa, más sólida será la posición judicial.',
				],
			},
			{
				heading: 'Diferencia con la revisión de grado',
				paragraphs: [
					'Cuando ya se reconoció una incapacidad, otra situación distinta es pedir la revisión del grado porque la salud ha empeorado o ha cambiado la valoración. Ese cauce es diferente de impugnar una denegación inicial.',
					'Identificar si el caso es una denegación, una revisión o una reclamación de cantidad evita presentar el escrito equivocado y perder tiempo.',
				],
			},
			{
				heading: 'Errores que debilitan la reclamación',
				paragraphs: [
					'Acudir sin informe médico propio, basarse solo en el diagnóstico, dejar pasar los plazos o no relacionar las lesiones con el trabajo son los fallos más comunes. También lo es no revisar la base reguladora, que afecta a la cantidad final.',
					'Una reclamación ordenada no garantiza el resultado, pero multiplica las opciones frente a una respuesta improvisada al borde del plazo.',
				],
			},
		],
		checklist: [
			'Consigue copia completa de la resolución.',
			'Pide informes actualizados a los especialistas.',
			'Valora un informe pericial médico independiente.',
			'Relaciona las limitaciones con tu trabajo real.',
			'Presenta la reclamación previa dentro de plazo.',
		],
		faq: [
			{
				question: '¿Qué pasa si me deniegan la incapacidad permanente?',
				answer:
					'Puedes impugnarlo mediante la reclamación previa ante el organismo y, si no prospera, ante el Juzgado de lo Social. Es clave aportar informes médicos actuales que describan bien la limitación.',
			},
			{
				question: '¿Cuánto tiempo tengo para reclamar?',
				answer:
					'Los plazos son breves y dependen del tipo de resolución. Lo más seguro es calcularlos desde la notificación y presentar la reclamación cuanto antes, porque dejar pasar el término cierra la vía.',
			},
			{
				question: '¿Sirve un informe de mi médico de cabecera?',
				answer:
					'Ayuda, pero no suele bastar. Los informes de los especialistas y, sobre todo, una pericial médica que explique la repercusión funcional y laboral son los que mejor sostienen la reclamación.',
			},
		],
		relatedServices: [
			{ path: '/incapacidad-permanente', label: 'reclamación de incapacidad permanente' },
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/recursos-administrativos', label: 'recursos y reclamaciones' },
		],
	},
	{
		slug: 'modificacion-convenio-regulador',
		title: 'Modificar el convenio regulador: cuándo procede y cómo se pide',
		description:
			'Cuándo y cómo se modifica un convenio regulador: cambio de circunstancias, modificación de medidas, acuerdo o demanda y qué pasa con las pensiones.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '7 min',
		intro: 'Un convenio regulador no es intocable. Si cambian las circunstancias —un traslado, un despido, un nuevo destino de los hijos— se puede pedir su modificación, pero solo cuando el cambio es real y se acredita. Firmarlo sin prever esa posibilidad es el error más común.',
		sections: [
			{
				heading: 'Qué es el convenio regulador y cuándo se puede cambiar',
				paragraphs: [
					'El convenio regulador es el acuerdo que fija las medidas de la separación o el divorcio: custodia, alimentos, uso de la vivienda, visitas y, en su caso, la pensión compensatoria. Lo aprueba el juez y desde ese momento vincula a las partes.',
					'La ley permite modificarlo cuando se alteran de forma sustancial las circunstancias que se tuvieron en cuenta al aprobarlo. No basta con que la otra parte haya mejorado algo: el cambio tiene que justificar revisar la medida concreta.',
				],
			},
			{
				heading: 'El cambio de circunstancias que exige la ley',
				paragraphs: [
					'Los supuestos más habituales son el traslado de domicilio, un despido o una bajada de ingresos relevantes, el cambio de colegio o de necesidades de los hijos y la aparición de nuevos gastos. La modificación debe afectar a la medida que se quiere revisar.',
					'El juez no compara caprichos, sino situaciones documentadas. Un informe de vida laboral, las nóminas o un informe médico pueden sostener la petición; una simple queja sin prueba no suele ser suficiente.',
				],
			},
			{
				heading: 'Modificación de mutuo acuerdo o por desacuerdo',
				paragraphs: [
					'Cuando ambos progenitores están de acuerdo, la modificación se puede plantear de forma conjunta y con un nuevo convenio que sustituya al anterior. Es la vía más rápida y barata.',
					'Si no hay acuerdo, hay que acudir al juzgado mediante el procedimiento de modificación de medidas. La otra parte podrá oponerse y el juez decidirá con la prueba sobre la situación actual.',
				],
			},
			{
				heading: 'Qué medidas se pueden revisar',
				paragraphs: [
					'Se pueden revisar la custodia, el régimen de visitas, la pensión de alimentos, el uso de la vivienda familiar y la pensión compensatoria, entre otras. Cada una tiene su propia lógica y no todas se modifican a la vez.',
					'También se puede pedir el aumento o la extinción de los alimentos cuando cambian las necesidades del hijo o la capacidad del progenitor. Conviene aclarar qué se pide exactamente para no mezclar pretensiones.',
				],
			},
			{
				heading: 'Cómo se tramita',
				paragraphs: [
					'El punto de partida es un escrito que explique qué ha cambiado y qué medida nueva se propone, con los documentos que lo acreditan. Si hay acuerdo, se presenta el nuevo convenio; si no, se pide al juzgado que fije las medidas.',
					'El procedimiento no suspende por sí solo lo que está vigente: sigue habiendo que cumplir el convenio actual hasta que el juez o el acuerdo lo sustituyan, así que conviene no retrasar la petición si el cambio ya es real.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'Cortar la pensión o cambiar las visitas por cuenta propia antes de que el juez lo autorice genera problemas graves y puede perjudicar la propia posición. Lo mismo ocurre con firmar un acuerdo temporal sin saber si se podrá mantener.',
					'Antes de pedir la modificación conviene revisar el convenio actual, ordenar la documentación de ingresos y gastos y decidir con claridad qué medida se quiere cambiar y por qué.',
				],
			},
		],
		checklist: [
			'Identifica la medida que quieres modificar.',
			'Reúne pruebas del cambio de circunstancias.',
			'Comprueba si hay acuerdo con la otra parte.',
			'No dejes de cumplir el convenio vigente.',
			'Presenta la petición con un escrito claro.',
		],
		faq: [
			{
				question: '¿Se puede modificar el convenio sin ir al juez?',
				answer:
					'Sí, si ambos progenitores están de acuerdo. Se firma un nuevo convenio que sustituye al anterior y se presenta para su aprobación. Si no hay acuerdo, la vía es el juzgado mediante la modificación de medidas.',
			},
			{
				question: '¿Qué cambio justifica modificar la pensión de alimentos?',
				answer:
					'Un cambio sustancial en las necesidades del hijo o en la capacidad económica del progenitor obligado. Se acredita con documentación de ingresos, gastos y, en su caso, informes sobre la situación del menor.',
			},
			{
				question: '¿Puedo dejar de pagar mientras se resuelve?',
				answer:
					'No. Lo aprobado sigue vigente hasta que un acuerdo o una resolución lo sustituya. Dejar de cumplir por cuenta propia puede acarrear consecuencias y debilitar tu posición en el procedimiento.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
			{ path: '/modificacion-medidas-paterno-filiales', label: 'modificación de medidas' },
			{ path: '/guarda-custodia', label: 'guarda y custodia' },
		],
	},
	// ------------------------------------------------------------------
	// Segundo lote (oct 2026): consultas informativas sin página dedicada.
	// ------------------------------------------------------------------
	{
		slug: 'capitulaciones-matrimoniales',
		title: 'Capitulaciones matrimoniales: cuándo y cómo se otorgan',
		description:
			'Qué son las capitulaciones matrimoniales, cuándo conviene firmarlas antes o después de casarse, qué régimen económico eligen y cómo se otorgan.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '7 min',
		intro: 'Las capitulaciones matrimoniales permiten a los cónyuges decidir cómo se organizan sus bienes antes o durante el matrimonio. Son la vía para cambiar el régimen económico, proteger un patrimonio o separar lo que cada uno aporta, y deben otorgarse con forma solemne.',
		sections: [
			{
				heading: 'Qué son y qué se puede pactar',
				paragraphs: [
					'Son el acuerdo por el que los cónyuges fijan o modifican su régimen económico matrimonial. Permiten elegir entre gananciales y separación de bienes y concretar aspectos como la administración, las cargas o el destino de determinados bienes.',
					'No sirven para dejar sin derechos a los hijos ni para pactar cuestiones ajenas al matrimonio. Su contenido debe respetar los límites legales y las normas que no se pueden modificar por acuerdo.',
				],
			},
			{
				heading: 'Antes del matrimonio o después',
				paragraphs: [
					'Pueden otorgarse antes de casarse, en previsión de lo que ocurrirá, o durante el matrimonio para cambiar el régimen vigente. Otorgarlas antes evita que el régimen legal se aplique mientras no se firman.',
					'En el momento de la boda también se puede otorgar ante notario la elección de un régimen distinto. Lo importante es que exista acuerdo y que se documente con la forma que exige la ley.',
				],
			},
			{
				heading: 'Cambiar de gananciales a separación de bienes',
				paragraphs: [
					'El cambio de régimen es uno de los motivos más frecuentes, sobre todo cuando uno de los cónyuges tiene o prevé una actividad empresarial. Separar los patrimonios protege el negocio y los bienes privativos frente a las deudas.',
					'El cambio exige liquidar antes el régimen anterior, porque no se puede pasar a separación de bienes dejando sin repartir lo que ya era ganancial. Ese paso suele hacerse a la vez y con una liquidación ordenada.',
				],
			},
			{
				heading: 'Efectos frente a terceros y en el Registro',
				paragraphs: [
					'Las capitulaciones deben inscribirse en el Registro Civil y, si afectan a bienes concretos, también en el Registro de la Propiedad. Hasta que se publican, pueden no ser oponibles frente a determinados terceros.',
					'Este punto es clave cuando existen acreedores: un cambio de régimen mal ejecutado o no publicado puede ser discutido. Conviene revisar las cargas y las deudas antes de firmar.',
				],
			},
			{
				heading: 'Cuándo conviene otorgarlas',
				paragraphs: [
					'Son útiles cuando uno de los cónyuges emprende, cuando hay un patrimonio familiar que se quiere proteger, en segundas nupcias con hijos de relaciones anteriores o cuando se quiere limitar la administración de los bienes.',
					'También sirven para fijar cómo se repartirán ciertos bienes o para evitar conflictos futuros. La decisión debe tomarse con información sobre el régimen legal que se aplica si no se pacta nada.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'El error más común es cambiar de régimen sin liquidar el anterior o sin inscribir el documento. Otro es copiar un modelo genérico sin adaptarlo a la situación real de la pareja.',
					'Antes de firmar conviene comprobar qué bienes son privativos, qué deudas existen y cómo afectará el nuevo régimen a la vivienda y al negocio. Un documento a medida evita problemas difíciles de corregir.',
				],
			},
		],
		checklist: [
			'Decide si quieres gananciales o separación de bienes.',
			'Revisa bienes privativos, deudas y cargas.',
			'Liquida el régimen anterior si cambias.',
			'Inscribe las capitulaciones en el Registro Civil.',
			'Comprueba la publicidad de los bienes registrales.',
		],
		faq: [
			{
				question: '¿Se pueden firmar después de casados?',
				answer:
					'Sí. Las capitulaciones pueden otorgarse antes o durante el matrimonio. Si se otorgan después, cambian el régimen económico vigente, pero sin perjudicar los derechos ya adquiridos por terceros.',
			},
			{
				question: '¿Hay que liquidar los gananciales al pasar a separación de bienes?',
				answer:
					'Sí. No se puede cambiar de régimen dejando en el aire lo que ya era común. La liquidación del régimen anterior debe hacerse de forma ordenada y antes o a la vez que el cambio.',
			},
			{
				question: '¿Valen si no las inscribo?',
				answer:
					'La inscripción en el Registro Civil es necesaria para su plena eficacia frente a terceros. Sin publicidad, el cambio puede no ser oponible en determinadas situaciones, así que conviene inscribirlas.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'separación y divorcio' },
			{ path: '/liquidacion-gananciales', label: 'liquidación de gananciales' },
			{ path: '/derecho-civil', label: 'asesoramiento civil' },
		],
	},
	{
		slug: 'adopcion-expediente-idoneidad',
		title: 'Adopción: expediente, idoneidad y cómo se tramita',
		description:
			'Cómo funciona el expediente de adopción en España: propuesta y valoración de idoneidad, documentación, fases y qué decide el juez al final.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '8 min',
		intro: 'Adoptar no es un trámite único, sino un procedimiento con fases y valoraciones. La idoneidad y la propuesta administrativa pesan tanto como la resolución judicial, y preparar bien el expediente marca la diferencia.',
		sections: [
			{
				heading: 'Quién puede adoptar',
				paragraphs: [
					'La adopción exige que el adoptante sea idóneo, tenga una diferencia de edad mínima con el adoptado y cuente con la situación personal que la ley valora. El punto de partida es la solicitud ante la administración competente.',
					'No hay un perfil único: se valora la capacidad de atender las necesidades del menor, la estabilidad familiar y el proyecto educativo, entre otros factores.',
				],
			},
			{
				heading: 'La propuesta administrativa',
				paragraphs: [
					'El procedimiento se inicia con la solicitud y la instrucción del expediente por la entidad pública. Esa entidad valora a los solicitantes, elabora la propuesta de idoneidad y, más tarde, la propuesta de asignación de un menor.',
					'La propuesta no es un cheque en blanco: describe la capacidad de los solicitantes y sirve de base para la posterior decisión judicial.',
				],
			},
			{
				heading: 'La valoración de idoneidad',
				paragraphs: [
					'La idoneidad se acredita con entrevistas, informes psicológicos y sociales y el análisis de la documentación. Lo que se busca no es una familia perfecta, sino una capaz de dar respuesta a las necesidades del menor.',
					'Prepararse para esta fase significa ser transparente con la historia vital, la red de apoyo y las expectativas. Ocultar circunstancias relevantes suele complicar el expediente.',
				],
			},
			{
				heading: 'Documentación y fases',
				paragraphs: [
					'El expediente pide documentación personal, certificados, informes médicos y, cuando procede, antecedentes. Después de la valoración llega la fase de asignación y, finalmente, la vía judicial.',
					'Los tiempos dependen de la comunidad autónoma y del proyecto, no solo de la voluntad de los solicitantes. Conocer las fases ayuda a no confundir demora administrativa con denegación.',
				],
			},
			{
				heading: 'La adopción ante el juez',
				paragraphs: [
					'La propuesta de la entidad da paso al expediente judicial, que revisa el cumplimiento de los requisitos y el interés superior del menor. El juez constituye la adopción y sus efectos son plenos desde la resolución.',
					'La sentencia define el vínculo familiar y sus consecuencias en el nombre, la nacionalidad o la patria potestad, entre otras.',
				],
			},
			{
				heading: 'Errores y cómo prepararse',
				paragraphs: [
					'Los fallos más habituales son presentar la solicitud sin conocer el proceso, no documentar la red de apoyo o mantener expectativas rígidas sobre el perfil del menor. También lo es descuidar la parte jurídica del expediente.',
					'Un acompañamiento jurídico ordena la documentación, prepara las entrevistas y permite reaccionar con rapidez cuando falta algún requisito o se deniega la idoneidad.',
				],
			},
		],
		checklist: [
			'Reúne la documentación personal y médica.',
			'Documenta tu red de apoyo familiar.',
			'Prepárate para las entrevistas de idoneidad.',
			'Sigue las fases de la entidad pública.',
			'Revisa el expediente judicial con un abogado.',
		],
		faq: [
			{
				question: '¿Qué es la idoneidad y quién la valora?',
				answer:
					'Es la valoración de la capacidad de los solicitantes para adoptar. La realiza la entidad pública competente con entrevistas e informes, y se plasma en una propuesta que después revisa el juez.',
			},
			{
				question: '¿Cuánto tarda una adopción?',
				answer:
					'Depende de la comunidad autónoma y del proyecto. Los tiempos varían con la valoración, la asignación de un menor y el expediente judicial, así que no hay un plazo único.',
			},
			{
				question: '¿Puedo recurrir una denegación de idoneidad?',
				answer:
					'Sí. Una resolución que deniegue la idoneidad puede impugnarse por la vía administrativa y, en su caso, judicial, aportando prueba que responda a los motivos concretos de la denegación.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'familia y menores' },
			{ path: '/tutela-legal', label: 'tutela y protección de menores' },
			{ path: '/guarda-custodia', label: 'guarda y custodia' },
		],
	},
	{
		slug: 'actos-societarios',
		title: 'Actos societarios: cuáles se inscriben y cómo',
		description:
			'Qué actos societarios deben elevarse a público e inscribirse en el Registro Mercantil: nombramientos, cese de administradores, capital y estatutos.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '7 min',
		intro: 'Cada cambio en la vida de una sociedad, como un nuevo administrador, una ampliación de capital, un cambio de domicilio o de objeto, tiene que documentarse e inscribirse. Hacerlo bien evita que el cambio exista solo en el papel.',
		sections: [
			{
				heading: 'Qué es un acto societario',
				paragraphs: [
					'Es cualquier acuerdo o modificación de la sociedad que tiene relevancia frente a terceros: el cambio de administradores, la ampliación o reducción de capital, la modificación de estatutos, el cambio de domicilio o la transformación.',
					'Muchos de estos actos se adoptan en junta y deben documentarse con la forma que exige la ley para poder inscribirse.',
				],
			},
			{
				heading: 'Los que más se olvidan',
				paragraphs: [
					'El cese y el nombramiento de administradores es el más habitual y el que más consecuencias tiene: un administrador que cesa y no se inscribe puede seguir apareciendo como responsable frente a terceros.',
					'También se olvidan con frecuencia el cambio de domicilio social, la modificación del objeto social y las autorizaciones para que un administrador pueda contratar consigo mismo.',
				],
			},
			{
				heading: 'Forma: acuerdo, escritura e inscripción',
				paragraphs: [
					'Depende del acto. Muchos exigen elevarlo a escritura pública ante notario y, después, presentarlo en el Registro Mercantil dentro del plazo legal. Sin inscripción, el acto no es oponible frente a terceros de buena fe.',
					'La certificación del acuerdo, las cuentas y los estatutos vigentes suelen acompañar la escritura. La coherencia entre todos los documentos es lo que evita devoluciones.',
				],
			},
			{
				heading: 'Plazos y calificación registral',
				paragraphs: [
					'El Registro califica lo presentado y puede inscribirlo o suspender la inscripción por defectos. Si detecta un error, hay un plazo para subsanarlo; dejarlo pasar obliga a empezar de nuevo.',
					'Presentar tarde también tiene consecuencias: hay actos cuyo retraso puede generar responsabilidad o impedir que se reconozca su eficacia en la fecha pretendida.',
				],
			},
			{
				heading: 'Efectos de no inscribir',
				paragraphs: [
					'Mientras el acto no se inscribe, los terceros pueden seguir confiando en la información registral anterior. Eso afecta a la responsabilidad de los administradores, a la legitimación para actuar y a la financiación.',
					'En la práctica, un cambio no inscrito complica la venta de la sociedad, la firma de contratos y la propia defensa frente a reclamaciones.',
				],
			},
			{
				heading: 'Cómo organizarlo',
				paragraphs: [
					'Conviene llevar un calendario de las obligaciones societarias y revisar estatutos y pactos antes de cada junta. Documentar bien cada acuerdo permite inscribirlo sin incidencias.',
					'Cuando hay varios cambios a la vez, como administradores, capital y estatutos, lo más eficiente es coordinarlos en una misma escritura y una única presentación.',
				],
			},
		],
		checklist: [
			'Identifica el acto y su forma exigida.',
			'Certifica el acuerdo de la junta.',
			'Eleva a escritura pública si procede.',
			'Preséntalo en el Registro dentro de plazo.',
			'Subsana los defectos sin dejarlos pasar.',
		],
		faq: [
			{
				question: '¿Qué pasa si no inscribo el cese de un administrador?',
				answer:
					'Puede seguir apareciendo como responsable frente a terceros y complicar tanto la gestión como una futura venta. El cese debe documentarse e inscribirse para tener plena eficacia.',
			},
			{
				question: '¿Todos los acuerdos necesitan notario?',
				answer:
					'No todos, pero los que modifican estatutos, capital o administración suelen exigir escritura pública para su inscripción. Conviene revisar cada caso antes de firmar.',
			},
			{
				question: '¿Cuánto tarda la inscripción?',
				answer:
					'Depende del Registro y de si la documentación está completa. Si hay defectos, se abre un plazo de subsanación; cuanto mejor preparado esté el expediente, antes se inscribe.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'servicios jurídicos para empresas' },
			{ path: '/modificacion-estatutos-sociedad', label: 'modificación de estatutos' },
			{ path: '/compraventas-empresas', label: 'compraventa de empresas' },
		],
	},
	{
		slug: 'seguro-agrario-integral',
		title: 'Seguro agrario integral: qué cubre y cómo reclamar',
		description:
			'Qué cubre el seguro agrario integral frente al de cultivos, cómo funcionan los planes de Agroseguro y qué hacer para reclamar un siniestro.',
		date: '2026-10-06',
		category: 'Seguros',
		readTime: '7 min',
		intro: 'El seguro agrario no es una sola póliza. Cubrir la cosecha, la explotación o el patrimonio del titular son cosas distintas, y elegir mal o reclamar tarde puede dejar fuera buena parte del daño sufrido.',
		sections: [
			{
				heading: 'Seguro de cultivos, integral y de explotación',
				paragraphs: [
					'El seguro de cultivos cubre la producción agrícola frente a riesgos como el pedrisco, la helada o la sequía según la línea contratada. El seguro integral amplía la cobertura a la explotación: instalaciones, maquinaria, ganado o existencias.',
					'Elegir entre uno y otro depende de lo que se quiera proteger. Un cultivo asegurado no implica que las instalaciones lo estén, y viceversa.',
				],
			},
			{
				heading: 'Qué entra en la cobertura',
				paragraphs: [
					'Cada línea define los riesgos cubiertos, las producciones asegurables, las franquicias y los límites. Leer las condiciones particulares es imprescindible, porque ahí están las exclusiones que después justifica la aseguradora para reducir el pago.',
					'Los planes de Agroseguro combinan la contratación privada con el apoyo público, pero el contenido concreto cambia según la línea y la campaña.',
				],
			},
			{
				heading: 'El infraseguro y el valor asegurado',
				paragraphs: [
					'Declarar menos producción o menos valor del real es la causa más frecuente de recorte en la indemnización. Si el valor asegurado queda por debajo del real, la aseguradora puede aplicar la regla del infraseguro y pagar menos.',
					'Revisar el valor asegurado cada campaña, sobre todo tras cambios de superficie o de precios, evita quedarse corto cuando llega el siniestro.',
				],
			},
			{
				heading: 'Cómo se comunica el siniestro',
				paragraphs: [
					'El siniestro debe comunicarse en el plazo previsto, acreditando la superficie, la producción y el daño con la documentación que exige la póliza. Cuanto antes se avise, antes puede inspeccionarse el cultivo.',
					'Conviene conservar pruebas del estado de la parcela y no retirar ni transformar los restos antes de la peritación, salvo que el protocolo lo permita.',
				],
			},
			{
				heading: 'Peritación y disconformidad',
				paragraphs: [
					'La aseguradora valora el daño mediante sus peritos. Si la valoración es insuficiente, el asegurado puede pedir una segunda tasación o una pericial contradictoria y, más adelante, reclamar.',
					'Reunir un informe agronómico propio y fotografías fechadas refuerza la posición cuando se discute la causa o el alcance del daño.',
				],
			},
			{
				heading: 'Reclamación y retraso en el pago',
				paragraphs: [
					'Si la aseguradora no responde o paga menos de lo que corresponde, cabe reclamar extrajudicialmente y, si no hay acuerdo, acudir a los tribunales. El retraso en el pago puede generar intereses a favor del asegurado.',
					'Documentar cada comunicación y el cálculo del daño permite cuantificar con precisión lo que se reclama y evitar discusiones sobre cifras sueltas.',
				],
			},
		],
		checklist: [
			'Comprueba qué línea tienes contratada.',
			'Revisa valor asegurado y franquicias.',
			'Comunica el siniestro dentro de plazo.',
			'Conserva pruebas del daño antes de la peritación.',
			'Pide una pericial propia si la oferta no cuadra.',
		],
		faq: [
			{
				question: '¿Qué diferencia hay entre seguro de cultivos y seguro integral?',
				answer:
					'El de cultivos cubre la producción agrícola ante los riesgos de la línea contratada; el integral amplía la cobertura a la explotación, incluyendo instalaciones, maquinaria o ganado según la póliza.',
			},
			{
				question: '¿Qué pasa si aseguré menos de lo que valía la cosecha?',
				answer:
					'Puede aplicarse el infraseguro y reducirse la indemnización en proporción al valor declarado. Por eso conviene revisar el valor asegurado en cada campaña.',
			},
			{
				question: '¿Puedo reclamar si la aseguradora paga menos de lo que creo?',
				answer:
					'Sí. Puedes impugnar la valoración con una pericial propia y reclamar la diferencia. Si no hay acuerdo, queda la vía judicial.',
			},
		],
		relatedServices: [
			{ path: '/seguros-agrarios', label: 'reclamación de seguros agrarios' },
			{ path: '/blog/seguro-cultivos-agroseguro', label: 'seguro de cultivos y Agroseguro' },
			{ path: '/blog/reclamar-agroseguro', label: 'cómo reclamar a Agroseguro' },
		],
	},
	{
		slug: 'reclamacion-previa-seguridad-social',
		title: 'Reclamación previa a la Seguridad Social: cuándo y cómo',
		description:
			'Qué es la reclamación previa ante la Seguridad Social, cuándo hay que presentarla, qué documentación aportar y qué ocurre si no responden.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '7 min',
		intro: 'Antes de demandar a la Seguridad Social hay un trámite que no se puede saltar: la reclamación previa. Presentarla bien y en plazo es lo que abre la puerta al juzgado y, en muchas ocasiones, resuelve el asunto sin llegar a juicio.',
		sections: [
			{
				heading: 'Qué es y para qué sirve',
				paragraphs: [
					'La reclamación previa es el escrito con el que se impugna una resolución de la Seguridad Social antes de acudir al Juzgado de lo Social. Es obligatoria y agota la vía administrativa.',
					'Sirve para que el propio organismo revise su decisión con los argumentos y las pruebas del interesado. Muchas reclamaciones se estiman en esta fase.',
				],
			},
			{
				heading: 'Cuándo hay que presentarla',
				paragraphs: [
					'Se presenta cuando una resolución reconoce menos de lo pedido, deniega una prestación o fija mal una base o un periodo. También procede ante determinadas decisiones que afectan a la cotización o a las prestaciones.',
					'No es lo mismo que un recurso de alzada ni que una reclamación de cantidad: identificar bien el acto que se impugna evita presentar el escrito equivocado.',
				],
			},
			{
				heading: 'Plazos que no se pueden perder',
				paragraphs: [
					'Los plazos son breves y empiezan a contar desde la notificación. Dejarlos pasar convierte la resolución en firme y cierra la vía judicial, aunque el derecho pudiera tener fundamento.',
					'Cuando hay varias resoluciones encadenadas, conviene calcular cada plazo por separado y no esperar a la última.',
				],
			},
			{
				heading: 'Qué documentación aportar',
				paragraphs: [
					'Junto al escrito se aportan la resolución impugnada, la documentación médica o laboral, la vida laboral, las nóminas, los informes y todo lo que sostenga la pretensión. Cada afirmación debe poder probarse.',
					'Una reclamación genérica convence menos que una que detalla hechos, fechas y errores concretos de la resolución.',
				],
			},
			{
				heading: 'Silencio y respuesta',
				paragraphs: [
					'Si el organismo no responde, se entiende desestimada por silencio y queda abierta la vía judicial dentro del plazo previsto. Es importante conservar el justificante de presentación de la reclamación.',
					'Si responde estimando en parte, hay que valorar si lo reconocido cubre lo pedido o si conviene seguir litigando el resto.',
				],
			},
			{
				heading: 'Del expediente al juzgado',
				paragraphs: [
					'Cuando la reclamación no prospera, el siguiente paso es la demanda ante el Juzgado de lo Social. Las alegaciones ya planteadas sirven de base y las pruebas aportadas se convierten en el núcleo del caso.',
					'Ordenar el expediente desde el principio evita perder documentos y permite reaccionar con rapidez en cada fase.',
				],
			},
		],
		checklist: [
			'Identifica la resolución que impugnas.',
			'Calcula el plazo desde la notificación.',
			'Reúne informes, vida laboral y nóminas.',
			'Presenta la reclamación con hechos concretos.',
			'Guarda el justificante y sigue la respuesta.',
		],
		faq: [
			{
				question: '¿Es obligatoria la reclamación previa?',
				answer:
					'Sí. Para demandar a la Seguridad Social hay que presentarla antes. Sin ella, la demanda puede no admitirse, salvo los supuestos que la ley exceptúa.',
			},
			{
				question: '¿Qué pasa si no me contestan?',
				answer:
					'El silencio equivale a desestimación y abre la vía judicial dentro del plazo. Conserva el justificante de presentación para acreditar la fecha.',
			},
			{
				question: '¿Puedo aportar pruebas nuevas después?',
				answer:
					'Puedes aportarlas, sobre todo las posteriores a la resolución. Cuanto más completa esté la reclamación desde el principio, más sólida será la posición en el juzgado.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
			{ path: '/recursos-administrativos', label: 'recursos y reclamaciones' },
		],
	},
	{
		slug: 'impugnacion-de-herencia',
		title: 'Impugnar una herencia o un testamento: cuándo y cómo',
		description:
			'Cuándo se puede impugnar un testamento o una partición de herencia: nulidad, desheredamiento, legítima y la vía para reclamar lo que falta.',
		date: '2026-10-06',
		category: 'Herencias',
		readTime: '8 min',
		intro: 'No todo testamento o reparto es definitivo. Si el documento no respeta la legítima, se firmó en circunstancias dudosas o excluyó a un heredero sin causa, existe una vía para impugnarlo, pero el plazo y la prueba son decisivos.',
		sections: [
			{
				heading: 'Cuándo se puede impugnar',
				paragraphs: [
					'Un testamento puede impugnarse por defectos de forma, falta de capacidad del testador o vicios de la voluntad como el error, la violencia o el engaño. También por vulnerar las normas que protegen a los herederos forzosos.',
					'La partición, por su parte, se puede impugnar si se hizo mal, si omitió bienes o si perjudicó a un heredero. Son vías distintas y conviene identificar la que corresponde.',
				],
			},
			{
				heading: 'La legítima de los herederos forzosos',
				paragraphs: [
					'Los hijos y descendientes tienen derecho a una parte del patrimonio del fallecido que no se puede dejar de lado sin causa legal. Si el testamento los excluye sin fundamento, el perjudicado puede reclamar su legítima.',
					'También el cónyuge viudo tiene derechos que deben respetarse. Calcular correctamente qué corresponde exige valorar el caudal hereditario, las donaciones y las deudas.',
				],
			},
			{
				heading: 'Desheredamiento y pretericción',
				paragraphs: [
					'El desheredamiento exige una causa legal y su expresión en el testamento. Si no consta la causa o no es cierta, la desheredación puede no ser válida.',
					'La pretericción, dejar fuera a un heredero forzoso sin mencionarlo, tiene sus propias consecuencias y puede dar lugar a la anulación del testamento en determinados supuestos.',
				],
			},
			{
				heading: 'Vicios de la voluntad y capacidad',
				paragraphs: [
					'Que el testador no tuviera capacidad en el momento de otorgar el testamento, o que su voluntad estuviera viciada, es causa de nulidad. Probarlo suele exigir informes médicos, testimonio de testigos y el análisis de las circunstancias.',
					'La intervención de un notario no blinda el testamento frente a la impugnación, pero sí establece una presunción de validez que hay que desmontar con prueba sólida.',
				],
			},
			{
				heading: 'Cómo se impugna',
				paragraphs: [
					'La vía habitual es el procedimiento judicial, en el que se pide la nulidad del testamento o de la partición y la restitución de lo que corresponde al demandante. Antes conviene ordenar la documentación y, en su caso, intentar un acuerdo.',
					'Los plazos varían según el motivo de la impugnación y el momento del conocimiento del defecto, así que conviene actuar pronto y no dejar que se consolide el reparto.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'Firmar documentos en la partición sin revisarlos, aceptar una liquidación sin valorar bienes omitidos o dejar pasar el plazo son errores difíciles de corregir después. También lo es impugnar sin prueba suficiente.',
					'Un análisis previo de testamentos, donaciones y cuentas permite decidir si merece la pena litigar y con qué posibilidades.',
				],
			},
		],
		checklist: [
			'Consigue copia del testamento y de la partición.',
			'Reúne títulos de bienes y cuentas del fallecido.',
			'Comprueba la legítima que te corresponde.',
			'Identifica el motivo de la impugnación.',
			'Actúa dentro de plazo y con prueba.',
		],
		faq: [
			{
				question: '¿Se puede impugnar cualquier testamento?',
				answer:
					'No. La impugnación requiere un motivo legal: defecto de forma, falta de capacidad, vicio de la voluntad o vulneración de derechos como la legítima. Sin causa y sin prueba, la demanda no prospera.',
			},
			{
				question: '¿Y si no me mencionan en el testamento?',
				answer:
					'La omisión de un heredero forzoso puede tener consecuencias relevantes. Según el caso, puede dar lugar a la reclamación de la legítima o a la anulación, así que conviene revisarlo con un abogado.',
			},
			{
				question: '¿Cuánto tiempo tengo para reclamar?',
				answer:
					'Depende del motivo y del momento en que se conoce el problema. Algunos plazos son cortos y otros se vinculan a la partición, así que hay que analizar cada caso sin esperar.',
			},
		],
		relatedServices: [
			{ path: '/disputas-herencias', label: 'conflictos de herencia' },
			{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
			{ path: '/blog/herencia-sin-testamento', label: 'sucesión sin testamento' },
		],
	},
	{
		slug: 'actualizacion-renta-alquiler',
		title: 'Actualizar la renta del alquiler: cuándo y cuánto se puede',
		description:
			'Cómo se actualiza la renta de un alquiler de vivienda, qué índices se aplican, cuándo se puede subir y qué límites existen en zonas tensionadas.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'La subida del alquiler no depende de la voluntad del propietario. Hay que respetar la forma pactada, los índices aplicables y, en determinados casos, límites especiales. Actualizar la renta sin cumplir esos requisitos puede anular la subida.',
		sections: [
			{
				heading: 'Qué dice el contrato',
				paragraphs: [
					'La primera referencia es el contrato: si prevé una actualización anual, qué índice se aplica y en qué fecha. Sin cláusula válida, no cabe subir la renta por iniciativa unilateral del arrendador.',
					'Una cláusula genérica o confusa puede interpretarse de forma restrictiva, y los tribunales han anulado subidas que no respetaban lo pactado o la ley.',
				],
			},
			{
				heading: 'Los índices de referencia',
				paragraphs: [
					'La normativa ha ido cambiando el índice aplicable para actualizar la renta. Ya no basta con invocar el IPC: hay que comprobar qué referencia permite la ley en el momento de la revisión y qué sistemas existen para las actualizaciones anuales.',
					'El índice aplicable y su publicación oficial determinan el porcentaje máximo. Inventar un índice o aplicar el que más conviene es la causa más común de impugnación de la subida.',
				],
			},
			{
				heading: 'Zonas de mercado residencial tensionado',
				paragraphs: [
					'En determinadas zonas declaradas tensionadas existen límites a la actualización de la renta. Esas reglas pueden limitar la subida anual y condicionar cómo se revisan los contratos vigentes.',
					'Comprobar si la vivienda está en una zona tensionada es un paso previo antes de comunicar cualquier subida.',
				],
			},
			{
				heading: 'Forma y plazo de la subida',
				paragraphs: [
					'La actualización debe comunicarse de forma que quede constancia, normalmente por escrito, y en el plazo previsto. Aplicarla sin aviso o con efectos retroactivos genera disputas.',
					'La subida se aplica desde la fecha pactada, no desde cuando el propietario decide. Un error en la fecha puede obligar a devolver lo cobrado de más.',
				],
			},
			{
				heading: 'Rebajar, subir y negociar',
				paragraphs: [
					'El arrendador puede renunciar a la subida y el arrendatario puede negociar las condiciones. En épocas de incertidumbre es frecuente pactar actualizaciones moderadas a cambio de estabilidad en el contrato.',
					'Cualquier acuerdo que modifique la renta o la duración debe documentarse para evitar malentendidos y para que sea oponible frente a terceros.',
				],
			},
			{
				heading: 'Si no hay acuerdo',
				paragraphs: [
					'Si el inquilino considera que la subida no se ajusta a la ley o al contrato, puede negarse a pagarla y exigir que se corrija. El desacuerdo puede resolverse en la vía civil.',
					'Documentar el contrato, las comunicaciones y los índices aplicados es esencial para cualquiera de las dos partes.',
				],
			},
		],
		checklist: [
			'Revisa la cláusula de actualización del contrato.',
			'Comprueba el índice permitido y su fecha.',
			'Verifica si la vivienda está en zona tensionada.',
			'Comunica la subida por escrito y en plazo.',
			'Guarda los justificantes de la actualización.',
		],
		faq: [
			{
				question: '¿Puedo subir el alquiler cada año?',
				answer:
					'Solo si el contrato lo prevé y conforme al índice y los límites legales aplicables. La actualización no es automática ni libre: debe respetar la cláusula y la norma vigente.',
			},
			{
				question: '¿Se aplica el IPC siempre?',
				answer:
					'No. La referencia para actualizar la renta ha cambiado con la normativa y debe comprobarse en cada revisión. Aplicar un índice no permitido puede anular la subida.',
			},
			{
				question: '¿Qué pasa si la vivienda está en zona tensionada?',
				answer:
					'Existen límites específicos a la actualización de la renta. Antes de subirla hay que confirmar si la vivienda está en una zona declarada tensionada y qué reglas la afectan.',
			},
		],
		relatedServices: [
			{ path: '/alquiler-viviendas', label: 'problemas de alquiler' },
			{ path: '/blog/zonas-tensionadas-alquiler', label: 'zonas tensionadas de alquiler' },
			{ path: '/derecho-civil', label: 'arrendamientos y contratos' },
		],
	},
	{
		slug: 'despido-colectivo-ere',
		title: 'ERE y despido colectivo: umbrales, plazos y derechos',
		description:
			'Cómo funciona un despido colectivo o ERE: umbrales que lo activan, periodo de consultas, documentación y derechos de los trabajadores.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '8 min',
		intro: 'Cuando una empresa despide a un número importante de trabajadores por causas económicas, organizativas o de producción, no basta con la carta individual: se activa un procedimiento colectivo con reglas y garantías propias.',
		sections: [
			{
				heading: 'Qué es un despido colectivo',
				paragraphs: [
					'Es la extinción de contratos que, por su número y en un periodo determinado, supera los umbrales legales y obliga a seguir el procedimiento colectivo. A partir de ese punto, las reglas no son las de un despido individual.',
					'Los umbrales dependen del tamaño de la plantilla y del número de trabajadores afectados. Identificarlos bien es el primer paso para saber qué régimen se aplica.',
				],
			},
			{
				heading: 'Causas y prueba',
				paragraphs: [
					'Las causas habituales son económicas, organizativas, técnicas o de producción. La empresa debe acreditar la causa con documentación, no basta con invocarla en la comunicación.',
					'En las causas económicas se analizan las cuentas y la situación real; en las organizativas, la reorganización y su efecto en el empleo. La prueba es el punto que más se discute en los tribunales.',
				],
			},
			{
				heading: 'El periodo de consultas',
				paragraphs: [
					'El procedimiento incluye un periodo de consultas con la representación de los trabajadores, en el que se negocian medidas para evitar o reducir los despidos y paliar sus efectos.',
					'La buena fe y la entrega de información suficiente son requisitos. Un periodo de consultas vacío o meramente formal puede viciar todo el procedimiento.',
				],
			},
			{
				heading: 'Documentación y comunicación',
				paragraphs: [
					'La empresa debe entregar la memoria explicativa, la documentación económica y las medidas previstas. La falta de documentación relevante es una de las causas más frecuentes de nulidad.',
					'Los trabajadores afectados reciben la comunicación individual, pero el procedimiento colectivo se decide en el plano de la empresa.',
				],
			},
			{
				heading: 'Indemnización y derechos',
				paragraphs: [
					'La extinción da derecho a la indemnización legal, además del finiquito y la liquidación de conceptos. En los despidos colectivos por causas económicas hay reglas propias sobre la indemnización y su posible reposición.',
					'También pesan la prioridad de permanencia de determinados colectivos y los acuerdos alcanzados en el periodo de consultas.',
				],
			},
			{
				heading: 'Impugnación',
				paragraphs: [
					'Si no se respetan los umbrales, falta documentación o el procedimiento no es correcto, cabe impugnar. La consecuencia puede ser la nulidad o la improcedencia, con efectos muy distintos para la empresa y para el trabajador.',
					'Ordenar la documentación y actuar dentro de plazo es esencial: los despidos colectivos se litigan con prueba y plazos estrictos.',
				],
			},
		],
		checklist: [
			'Comprueba si se superan los umbrales.',
			'Revisa la causa y la memoria económica.',
			'Analiza el periodo de consultas.',
			'Verifica la documentación entregada.',
			'Actúa dentro de plazo si impugnas.',
		],
		faq: [
			{
				question: '¿Cuándo un despido es colectivo y no individual?',
				answer:
					'Depende del número de trabajadores afectados y del tamaño de la plantilla en un periodo de referencia. Superados los umbrales, se aplica el procedimiento colectivo con sus garantías.',
			},
			{
				question: '¿Qué papeles debe entregar la empresa?',
				answer:
					'La memoria con la causa, la documentación económica u organizativa que la sostiene y las medidas previstas. Su ausencia o insuficiencia puede determinar la nulidad del despido.',
			},
			{
				question: '¿Puedo impugnar si ya firmé el finiquito?',
				answer:
					'La firma del finiquito no siempre cierra la impugnación del despido, pero tiene consecuencias. Conviene revisar el documento con un abogado antes de dar por cerrada cualquier acción.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'impugnación de despidos' },
			{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
			{ path: '/contratos-laborales', label: 'contratos y relaciones laborales' },
		],
	},
	// ------------------------------------------------------------------
	// Tercer lote (oct 2026): temas informativos aún sin página dedicada.
	// ------------------------------------------------------------------
	{
		slug: 'vida-laboral-corregir-errores',
		title: 'Vida laboral: cómo pedirla y corregir errores de cotización',
		description:
			'Cómo pedir el informe de vida laboral, detectar periodos o bases erróneos y corregirlos para no perder prestaciones ni pensión.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '7 min',
		intro: 'El informe de vida laboral resume toda tu trayectoria de cotización, y de él dependen las prestaciones, la jubilación y la incapacidad. Un periodo que falta o una base mal anotada puede costar dinero durante años si no se corrige a tiempo.',
		sections: [
			{
				heading: 'Qué es y para qué sirve',
				paragraphs: [
					'El informe de vida laboral es el documento que acredita las empresas en las que has trabajado, los días cotizados y el régimen en el que lo hiciste. Lo emite la Tesorería General de la Seguridad Social y se obtiene por internet, por teléfono o presencialmente.',
					'Sirve para solicitar prestaciones, calcular la jubilación, acreditar la experiencia y comprobar que lo que la administración tiene de ti coincide con la realidad.',
				],
			},
			{
				heading: 'Cómo se pide',
				paragraphs: [
					'La vía más rápida es el servicio electrónico con identificación digital. También se puede pedir por teléfono o en una oficina, y existe un código para que un tercero autorizado lo consulte.',
					'Conviene descargarlo cada cierto tiempo y guardarlo: es la referencia con la que se comparan las cotizaciones cuando aparece un problema.',
				],
			},
			{
				heading: 'Errores más frecuentes',
				paragraphs: [
					'Los fallos habituales son periodos de trabajo que no aparecen, días de cotización incompletos, bases de cotización por debajo de lo que se cobró o empresas que no comunicaron la baja en plazo.',
					'También aparecen regímenes mezclados, como autónomo y general, o inscripciones que se solapan. Cada error tiene un efecto distinto en la prestación o en la pensión.',
				],
			},
			{
				heading: 'Cómo corregirlo',
				paragraphs: [
					'La corrección se pide a la Tesorería con la documentación que demuestre lo que falta: contratos, nóminas, certificados de empresa o pruebas de los pagos. Cuanto más antiguo es el error, más importante es reunir pruebas.',
					'A veces la administración corrige a la primera; otras veces hay que insistir y, si no hay respuesta, reclamar por la vía administrativa y judicial según el caso.',
				],
			},
			{
				heading: 'Efectos en prestaciones y pensiones',
				paragraphs: [
					'Un periodo sin cotizar puede reducir el porcentaje de la jubilación, acortar la prestación por desempleo o restar derechos en una incapacidad. Corregirlo antes de solicitar la prestación evita perder tiempo y dinero.',
					'Si la prestación ya se reconoció con datos erróneos, la corrección puede servir para pedir su revisión y los atrasos correspondientes.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'El más común es esperar a pedir la jubilación para revisar la vida laboral. También es un error tirar nóminas y contratos cuando la empresa cierra o cuando cambia el sistema de gestión.',
					'Guardar la documentación laboral y revisar la vida laboral cada pocos años es la forma más sencilla de evitar sorpresas en el momento crítico.',
				],
			},
		],
		checklist: [
			'Descarga tu informe de vida laboral.',
			'Compara periodos, días y bases con tus nóminas.',
			'Reúne contratos y certificados de empresa.',
			'Pide la corrección con pruebas.',
			'Revísalo antes de solicitar cualquier prestación.',
		],
		faq: [
			{
				question: '¿Dónde se pide la vida laboral?',
				answer:
					'Puedes obtenerla por internet con identificación digital, por teléfono o en una oficina de la Seguridad Social. El informe es gratuito y se descarga al momento por la vía electrónica.',
			},
			{
				question: '¿Puedo corregir una cotización antigua?',
				answer:
					'Sí, aunque cuanto más antigua sea más difícil es probarla. Los contratos, las nóminas y los certificados de empresa son las pruebas clave para acreditar el trabajo y los periodos.',
			},
			{
				question: '¿Afecta a mi jubilación?',
				answer:
					'Puede afectarla, tanto en el porcentaje como en el cálculo de la base reguladora. Por eso conviene revisarla y corregirla antes de solicitar la jubilación y no después.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/recursos-administrativos', label: 'recursos administrativos' },
			{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
		],
	},
	{
		slug: 'cancelacion-antecedentes-penales',
		title: 'Cancelar los antecedentes penales: cuándo y cómo se pide',
		description:
			'Qué son los antecedentes penales, cuándo se pueden cancelar y cómo solicitarlo: plazos según la pena, requisitos y efectos en la vida laboral.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'Tener antecedentes penales puede cerrar puertas de empleo, oposiciones o extranjería. La buena noticia es que no son para siempre: la ley permite cancelarlos cuando se cumplen los requisitos y transcurre el tiempo previsto.',
		sections: [
			{
				heading: 'Qué son los antecedentes penales',
				paragraphs: [
					'Son la inscripción de las condenas firmes en el Registro Central de Penados. No equivale a estar condenado hoy: refleja las penas que se impusieron y que aún no se han cancelado.',
					'Aparecen en el certificado de antecedentes penales que piden muchas empresas, la Administración y determinados trámites de extranjería.',
				],
			},
			{
				heading: 'Cuándo procede la cancelación',
				paragraphs: [
					'La cancelación no es automática. Requiere que se haya cumplido la pena o extinguido la responsabilidad, que no se haya delinquido de nuevo en un plazo que depende de la gravedad de la condena y, en muchos casos, que se hayan satisfecho las responsabilidades civiles.',
					'Los plazos son más largos cuanto más grave es la pena y se cuentan desde el cumplimiento o la extinción. Un delito nuevo interrumpe el plazo.',
				],
			},
			{
				heading: 'Requisitos y comprobaciones',
				paragraphs: [
					'Además del tiempo, la cancelación exige comprobar que no hay responsabilidades pendientes, como indemnizaciones o multas. Si no se abonaron, la cancelación puede denegarse aunque haya pasado el plazo.',
					'También hay que tener en cuenta las medidas de seguridad y, en su caso, el cumplimiento de las condiciones de una suspensión.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'La solicitud se presenta ante el Registro Central de Penados o por la vía electrónica, con los datos de la condena y la acreditación del cumplimiento. La resolución reconoce la cancelación y desaparece la anotación del certificado.',
					'Conviene comprobar el resultado pidiendo después un certificado de antecedentes para confirmar que ya no figura.',
				],
			},
			{
				heading: 'Efectos en empleo, oposiciones y extranjería',
				paragraphs: [
					'Unos antecedentes sin cancelar pueden impedir el acceso a determinados empleos, a la función pública o a ciertos permisos. En extranjería, la cancelación resulta especialmente relevante para solicitudes de residencia o nacionalidad.',
					'Una vez cancelados, la anotación no puede figurar en los certificados y no puede fundar por sí sola una denegación.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'Creer que los antecedentes desaparecen solos, esperar a tener una solicitud en marcha o presentar el escrito sin acreditar el pago de las responsabilidades civiles son los fallos más comunes.',
					'Ordenar la documentación de la condena y del cumplimiento permite presentar una solicitud completa y evitar denegaciones evitables.',
				],
			},
		],
		checklist: [
			'Pide tu certificado de antecedentes penales.',
			'Localiza la sentencia y la fecha de cumplimiento.',
			'Comprueba que no quedan responsabilidades civiles.',
			'Calcula el plazo de cancelación.',
			'Presenta la solicitud y verifica el resultado.',
		],
		faq: [
			{
				question: '¿Los antecedentes se cancelan solos?',
				answer:
					'No. La cancelación requiere solicitarla o, al menos, comprobar que concurren los requisitos. Hasta que se acuerda, la anotación sigue figurando en el certificado.',
			},
			{
				question: '¿Cuánto tiempo hay que esperar?',
				answer:
					'Depende de la gravedad de la pena impuesta: a penas más graves corresponden plazos más largos. El plazo se cuenta desde el cumplimiento o la extinción y se interrumpe si se comete un nuevo delito.',
			},
			{
				question: '¿Y si no pagué la indemnización?',
				answer:
					'Puede impedir la cancelación aunque haya pasado el tiempo. Conviene acreditar el pago o justificar la imposibilidad antes de solicitar la cancelación.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/blog/multas-penales-suspension-condenas', label: 'multas penales y suspensión de condenas' },
			{ path: '/blog/derechos-del-detenido', label: 'derechos desde la detención' },
		],
	},
	{
		slug: 'acusacion-particular',
		title: 'Acusación particular: qué es y cuándo conviene ejercerla',
		description:
			'Diferencia entre ser denunciante o acusación particular, qué derechos da personarse en un procedimiento penal y cuándo interesa hacerlo.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'Denunciar un delito no es lo mismo que ser parte en el proceso. La acusación particular permite defender los propios intereses dentro del procedimiento penal, pedir pruebas y reclamar la indemnización sin depender de la fiscalía.',
		sections: [
			{
				heading: 'Denunciante, perjudicado y acusación particular',
				paragraphs: [
					'El denunciante solo pone en conocimiento de la autoridad unos hechos. El perjudicado es quien sufre el daño, y la acusación particular es quien se persona en la causa para ejercer la acción penal y civil.',
					'Ser acusación particular exige designar abogado y procurador y comparecer con la forma prevista. No es automático con la denuncia.',
				],
			},
			{
				heading: 'Qué permite personarse',
				paragraphs: [
					'La acusación particular puede proponer pruebas, intervenir en las diligencias, formular acusación y pedir condena y responsabilidad civil. También puede recurrir determinadas resoluciones que perjudican sus intereses.',
					'Este papel es clave cuando el interés público y el del perjudicado no coinciden, o cuando se quiere reclamar una cantidad que la fiscalía no cubre.',
				],
			},
			{
				heading: 'Cuándo conviene',
				paragraphs: [
					'Interesa en delitos donde hay un daño económico o moral importante, en los que la prueba depende de la actividad de la parte o en los que se prevé una conformidad que no resuelve la indemnización.',
					'También en supuestos de violencia, estafa o denuncia falsa, donde la posición activa del perjudicado puede marcar la diferencia.',
				],
			},
			{
				heading: 'Cuándo puede no compensar',
				paragraphs: [
					'Personarse implica costes y esfuerzo. En asuntos leves, con poca relevancia económica o cuando la fiscalía ya defiende adecuadamente el interés del perjudicado, puede no merecer la pena.',
					'Antes de decidir conviene valorar el daño, la prueba disponible y el objetivo real: una condena, una indemnización o ambas.',
				],
			},
			{
				heading: 'Cómo se persona',
				paragraphs: [
					'Se presenta un escrito de personación ante el órgano que instruye el asunto, con la designación de abogado y procurador y la acreditación del perjudicado. A partir de ahí, la parte puede pedir diligencias y seguir el procedimiento.',
					'Cuanto antes se persone quien quiera intervenir, más posibilidades tendrá de influir en la investigación y en las pruebas.',
				],
			},
			{
				heading: 'Errores y desistimiento',
				paragraphs: [
					'Los errores más habituales son dejar pasar el momento procesal, no cuantificar bien el daño o desistir sin haber asegurado la indemnización. Una acusación particular mal planteada puede dejar la reparación fuera del proceso.',
					'Si se decide retirarla, conviene hacerlo con asesoramiento y comprobar que no se pierden derechos que ya se hayan reconocido.',
				],
			},
		],
		checklist: [
			'Valora el daño y el objetivo del procedimiento.',
			'Consulta el momento procesal para personarte.',
			'Designa abogado y procurador.',
			'Cuantifica la responsabilidad civil.',
			'Propón las pruebas que sostengan tu interés.',
		],
		faq: [
			{
				question: '¿Me puedo personar si solo denuncié?',
				answer:
					'Sí. La denuncia no te convierte en parte, pero puedes personarte después como acusación particular si lo haces en el momento procesal adecuado y acreditas tu condición de perjudicado.',
			},
			{
				question: '¿Necesito abogado y procurador?',
				answer:
					'Para ejercer la acusación particular sí, porque la intervención en el proceso penal exige asistencia letrada y representación. El denunciante, en cambio, puede no necesitarlas para la simple denuncia.',
			},
			{
				question: '¿Sirve para pedir la indemnización?',
				answer:
					'Sí. La acusación particular puede pedir condena y responsabilidad civil, y proponer prueba sobre los daños. La fiscalía no siempre cuantifica ni reclama la reparación completa.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa y acusación penal' },
			{ path: '/blog/denuncias-falsas', label: 'defensa frente a denuncias falsas' },
			{ path: '/derecho-civil', label: 'reclamación civil de daños' },
		],
	},
	{
		slug: 'despido-por-traspaso-de-negocio',
		title: 'Despido por traspaso de negocio: qué pasa con tu contrato',
		description:
			'Qué ocurre con los trabajadores cuando un negocio se traspasa, cuándo hay subrogación, quién responde y cómo defenderse de un despido.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'Cuando un negocio cambia de manos, el traspaso no debería dejar al trabajador en la calle por arte de magia. La subrogación, la antigüedad y la causa real del cese son las tres claves para saber si el despido se sostiene.',
		sections: [
			{
				heading: 'Qué es la subrogación',
				paragraphs: [
					'En determinados traspasos y contratas, el nuevo titular se coloca en la posición del anterior y asume los contratos de trabajo, con la antigüedad y las condiciones que ya existían.',
					'La subrogación no depende de un pacto entre las empresas: en los supuestos que la ley y el convenio prevén, el cambio de titularidad mantiene los derechos del trabajador.',
				],
			},
			{
				heading: 'Cuándo hay y cuándo no',
				paragraphs: [
					'Depende del tipo de traspaso, del sector y de lo que prevea el convenio. Un cambio de titularidad de la explotación no es lo mismo que el cierre y la apertura de un negocio distinto por otra empresa.',
					'Identificar si hay subrogación es el primer paso, porque cambia por completo quién responde y si el cese es legítimo.',
				],
			},
			{
				heading: 'Antigüedad y condiciones',
				paragraphs: [
					'Si hay subrogación, se conserva la antigüedad y las condiciones pactadas. Pretender que el trabajador empiece de cero con un contrato nuevo suele ser un intento de empeorar derechos sin causa.',
					'La documentación de la relación anterior, las nóminas y el contrato son las pruebas de lo que hay que mantener.',
				],
			},
			{
				heading: 'Los ceses que sí caben',
				paragraphs: [
					'El negocio puede extinguir contratos por causas reales, como un despido objetivo o colectivo justificado. Lo que no cabe es usar el traspaso como excusa para deshacerse de trabajadores con derechos.',
					'La carta debe explicar la causa y el procedimiento debe cumplirse. Un cese sin causa real puede ser improcedente o nulo.',
				],
			},
			{
				heading: 'Quién responde y a quién reclamo',
				paragraphs: [
					'En los supuestos de subrogación, el nuevo titular responde de las obligaciones laborales y, en determinados casos, la responsabilidad se extiende al anterior. Es importante dirigir la reclamación a quien legalmente corresponde.',
					'Reclamar solo contra la empresa equivocada puede hacer perder tiempo y posiciones.',
				],
			},
			{
				heading: 'Cómo defenderse',
				paragraphs: [
					'Reúne contrato, nóminas, la comunicación del cese y las pruebas del traspaso. Después, valora la conciliación y, si el despido no se ajusta a la ley, la demanda ante el Juzgado de lo Social dentro de plazo.',
					'No firmes un finiquito que declare una baja voluntaria si realmente hubo un despido: el documento puede condicionar la reclamación.',
				],
			},
		],
		checklist: [
			'Documenta el traspaso y los cambios de titular.',
			'Conserva contrato, nóminas y antigüedad.',
			'Comprueba si tu convenio prevé subrogación.',
			'Revisa la causa que alega la empresa.',
			'No firmes un finiquito sin asesorarte.',
		],
		faq: [
			{
				question: '¿Me pueden despedir por el traspaso?',
				answer:
					'El traspaso por sí solo no justifica un despido. Si el negocio cambia de manos, el trabajador pasa al nuevo titular cuando hay subrogación; un cese necesita su propia causa legal.',
			},
			{
				question: '¿Conservo la antigüedad?',
				answer:
					'En los supuestos de subrogación, sí. La antigüedad y las condiciones se mantienen, y el nuevo titular no puede imponer empezar de cero sin justificación.',
			},
			{
				question: '¿A quién reclamo?',
				answer:
					'Depende de si hay subrogación y de las reglas aplicables. En muchos casos responde el nuevo titular y, en determinados supuestos, también el anterior, así que conviene analizarlo antes de demandar.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'impugnación de despidos' },
			{ path: '/empresas/derecho-laboral', label: 'subrogación y asesoría para empresas' },
			{ path: '/blog/traspaso-de-bar-paso-a-paso', label: 'traspaso de un negocio paso a paso' },
		],
	},
	{
		slug: 'internamiento-residencia-mayores',
		title: 'Ingreso en residencia de mayores: derechos y control legal',
		description:
			'Cuándo es válido el ingreso en una residencia, qué exige el internamiento involuntario, quién decide y cómo se protege la voluntad del mayor.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '7 min',
		intro: 'Decidir el ingreso de un familiar en una residencia es difícil, y más cuando su voluntad no coincide con la de la familia. La ley exige respetar su capacidad, su opinión y, en ciertos casos, el control judicial.',
		sections: [
			{
				heading: 'Ingreso voluntario e involuntario',
				paragraphs: [
					'Cuando la persona conserva capacidad y decide libremente, el ingreso es voluntario y se rige por el contrato con la residencia. Si no puede decidir por sí misma, la situación cambia y entra en juego la protección legal.',
					'No todo deterioro cognitivo permite decidir por el mayor: hay que valorar su capacidad real y su voluntad.',
				],
			},
			{
				heading: 'La voluntad del residente',
				paragraphs: [
					'La persona mayor tiene derecho a que se respete su opinión en la medida de lo posible. Ocultarle el ingreso, engañarle o impedirle manifestar su voluntad puede invalidar la decisión.',
					'También cuenta lo que haya dejado por escrito, como un documento de instrucciones previas o una voluntad anticipada sobre su cuidado.',
				],
			},
			{
				heading: 'Cuándo hace falta autorización judicial',
				paragraphs: [
					'El internamiento de una persona que no puede decidir por sí misma por razón de enfermedad o discapacidad requiere, con carácter general, autorización judicial previa, salvo situaciones de urgencia que después deben regularizarse.',
					'La autorización protege al mayor: revisa que el internamiento sea necesario, adecuado y respetuoso con sus derechos.',
				],
			},
			{
				heading: 'Visitas, comunicación y derechos',
				paragraphs: [
					'El residente mantiene sus derechos a la comunicación, a las visitas y a la intimidad, con los límites que exija su propia protección. La familia puede interesarse por el centro antes de que se produzca el ingreso y participar en la decisión.',
					'Restringir visitas sin causa justificada o aislar al residente puede vulnerar derechos y ser objeto de reclamación.',
				],
			},
			{
				heading: 'El contrato con la residencia',
				paragraphs: [
					'El contrato debe concretar el servicio, el precio, las revisiones y las condiciones de salida. Conviene leer con atención las cláusulas sobre subidas, depósitos y causas de resolución.',
					'Documentar lo pactado y conservar las facturas y comunicaciones evita conflictos cuando cambian las necesidades del residente.',
				],
			},
			{
				heading: 'Conflictos entre familiares',
				paragraphs: [
					'Es frecuente que los familiares discrepen sobre el cuidado o sobre los gastos. La ley y, en su caso, el juez deciden cuando no hay acuerdo, atendiendo al interés de la persona mayor.',
					'Contar con asesoramiento antes de firmar evita decisiones apresuradas y protege tanto al residente como a quienes asumen el pago.',
				],
			},
		],
		checklist: [
			'Valora la capacidad y la voluntad del mayor.',
			'Comprueba si hace falta autorización judicial.',
			'Lee con detalle el contrato de la residencia.',
			'Documenta el acuerdo familiar y los gastos.',
			'Asegura el derecho a visitas y comunicación.',
		],
		faq: [
			{
				question: '¿Puedo llevar a mi familiar sin su consentimiento?',
				answer:
					'Depende de su capacidad. Si no puede decidir por sí misma, con carácter general hace falta autorización judicial previa, salvo urgencia justificada que después se regularice.',
			},
			{
				question: '¿Se puede visitar el centro antes de ingresar?',
				answer:
					'Sí. Interesarse por el centro, sus servicios y sus condiciones antes del ingreso es normal y recomendable, y ayuda a comparar opciones y a preparar la decisión.',
			},
			{
				question: '¿Qué pasa si no hay acuerdo en la familia?',
				answer:
					'Cuando los familiares discrepan, decide la ley y, si es necesario, el juez, siempre buscando el interés de la persona mayor. El asesoramiento previo ayuda a evitar decisiones precipitadas.',
			},
		],
		relatedServices: [
			{ path: '/tutela-legal', label: 'tutela y protección legal' },
			{ path: '/guarda-custodia', label: 'protección de la persona y su entorno' },
			{ path: '/derecho-civil', label: 'asesoramiento civil' },
		],
	},
	{
		slug: 'reclamar-lesiones-sin-baremo',
		title: 'Lesiones fuera del baremo: cuándo se puede reclamar más',
		description:
			'Qué daños no cubre el baremo de tráfico, cómo se valoran y cómo reclamar una indemnización mayor por lesiones o perjuicios no previstos.',
		date: '2026-10-06',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
		intro: 'El baremo valora las lesiones más habituales, pero no todas. Cuando aparecen secuelas que no encajan en sus tablas, o daños que no contempla, existe una vía para reclamar por el daño real, siempre con prueba técnica sólida.',
		sections: [
			{
				heading: 'Qué cubre el baremo',
				paragraphs: [
					'El baremo de tráfico valora los días de curación, las secuelas y el perjuicio personal según tablas. Es el sistema de referencia para calcular la indemnización tras un accidente.',
					'Pero sus tablas no agotan todos los daños posibles: hay perjuicios que no aparecen o que no encajan con las categorías previstas.',
				],
			},
			{
				heading: 'Qué se entiende por daños fuera del baremo',
				paragraphs: [
					'Se habla de reclamación al margen del baremo cuando existen secuelas no valoradas en las tablas, daños patrimoniales concretos que la póliza no cubre o consecuencias morales que exceden lo estandarizado.',
					'No es un atajo para pedir más por lo mismo, sino la vía para que el daño real y probado no quede sin compensar.',
				],
			},
			{
				heading: 'Cuándo es viable',
				paragraphs: [
					'La vía exige una base sólida: informes periciales que acrediten el daño, su relación con el accidente y su cuantificación. Sin prueba técnica, la pretensión se debilita.',
					'En la práctica se plantea con secuelas complejas, daños continuados o consecuencias que las tablas no contemplaron al redactarse.',
				],
			},
			{
				heading: 'Prueba y pericial',
				paragraphs: [
					'La pericial médica explica las secuelas y su efecto en la vida diaria; la pericial económica cuantifica el lucro cesante y los gastos. Ambas deben ser coherentes entre sí y con el resto del expediente.',
					'Guardar informes, facturas y una cronología de la evolución de las lesiones refuerza la reclamación.',
				],
			},
			{
				heading: 'Cómo se reclama',
				paragraphs: [
					'Primero se presenta la reclamación al seguro y, si la oferta no cubre el daño real, se acude a la vía judicial. La demanda debe concretar qué se reclama al margen del baremo y con qué prueba.',
					'Cuantificar bien y explicar por qué el daño no está cubierto por las tablas es lo que distingue una reclamación seria de una petición sin base.',
				],
			},
			{
				heading: 'Errores que debilitan la reclamación',
				paragraphs: [
					'Firmar el pago del seguro antes de estabilizar las secuelas, no reclamar los daños patrimoniales o renunciar a reclamar por creer que el baremo lo cierra todo son errores frecuentes.',
					'También lo es presentar una reclamación genérica sin una pericial que sostenga la diferencia frente al baremo.',
				],
			},
		],
		checklist: [
			'Reúne informes médicos y de secuelas.',
			'Identifica qué daños no cubre el baremo.',
			'Encarga pericial médica y económica si procede.',
			'No firmes el pago antes de estabilizar las secuelas.',
			'Cuantifica y motiva la reclamación.',
		],
		faq: [
			{
				question: '¿Se puede reclamar siempre por encima del baremo?',
				answer:
					'No. El baremo es la referencia general y la reclamación al margen exige motivar y probar daños que no quedan cubiertos por sus tablas. Sin prueba técnica sólida, la pretensión no prospera.',
			},
			{
				question: '¿Qué daños suelen reclamarse al margen?',
				answer:
					'Secuelas no valoradas, determinados daños patrimoniales y consecuencias morales que exceden lo estandarizado, siempre que se acrediten con informe pericial y se relacionen con el accidente.',
			},
			{
				question: '¿Hace falta ir a juicio?',
				answer:
					'No siempre. La reclamación se plantea primero al seguro, pero si la oferta no cubre el daño real, la vía judicial es la que permite discutir la indemnización con prueba.',
			},
		],
		relatedServices: [
			{ path: '/indemnizaciones-trafico', label: 'indemnización por accidente de tráfico' },
			{ path: '/blog/baremo-lesiones-2026', label: 'cómo funciona el baremo de lesiones' },
			{ path: '/blog/indemnizacion-accidente-trafico', label: 'reclamar la indemnización del seguro' },
		],
	},
	{
		slug: 'nacionalidad-por-residencia-malaga',
		title: 'Nacionalidad por residencia en Málaga: trámites y plazos',
		description:
			'Cómo solicitar la nacionalidad española por residencia en Málaga: requisitos, cita, documentación, plazos y qué hacer si te la deniegan.',
		date: '2026-10-06',
		category: 'Extranjería',
		readTime: '7 min',
		intro: 'La nacionalidad por residencia se decide caso a caso y, en Málaga, el volumen de expedientes marca los tiempos. Preparar bien el expediente y comprobar la residencia antes de presentarlo evita denegaciones y meses perdidos.',
		sections: [
			{
				heading: 'Requisitos de la residencia',
				paragraphs: [
					'El punto de partida es acreditar el tiempo de residencia legal exigido, que varía según el supuesto: por regla general diez años, con plazos más cortos para determinados orígenes y situaciones.',
					'Además hay que justificar buena conducta cívica e integración y superar las pruebas de conocimiento de español y de cultura cuando corresponden.',
				],
			},
			{
				heading: 'Documentación y cita',
				paragraphs: [
					'El expediente exige documentación de identidad, acreditación de la residencia, antecedentes penales de los países donde se ha vivido, medios de vida y la documentación familiar que se invoque.',
					'La presentación se ordena con cita y hay que revisar que cada documento esté vigente, traducido y legalizado cuando lo requiera.',
				],
			},
			{
				heading: 'Las pruebas CCSE y DELE',
				paragraphs: [
					'Según el caso, hay que superar el examen de conocimientos constitucionales y socioculturales y, si el español no es idioma oficial en el país de origen, la prueba de idioma.',
					'La inscripción y la preparación de estas pruebas forman parte del calendario y no deben dejarse para el final.',
				],
			},
			{
				heading: 'Plazos y seguimiento',
				paragraphs: [
					'El expediente se tramita por vía administrativa y después se resuelve por el Registro Civil. Los tiempos dependen de la carga de trabajo y de la documentación, así que conviene hacer seguimiento del estado.',
					'Un expediente incompleto produce requerimientos que alargan el procedimiento; la clave es presentarlo completo desde el principio.',
				],
			},
			{
				heading: 'Cómo se resuelve y se inscribe',
				paragraphs: [
					'La concesión se comunica al interesado y se inscribe en el Registro Civil. Desde ahí se puede solicitar el DNI y el pasaporte español.',
					'La denegación llega motivada y abre la vía del recurso o de una nueva solicitud si se subsanan los defectos.',
				],
			},
			{
				heading: 'Errores que retrasan el expediente',
				paragraphs: [
					'Los errores más habituales son acreditar mal el tiempo de residencia, presentar documentos caducados, no justificar la integración o descuidar las pruebas exigidas.',
					'Un repaso previo del expediente, con la documentación ordenada y traducida, es lo que más tiempo ahorra.',
				],
			},
		],
		checklist: [
			'Comprueba el tiempo de residencia exigido.',
			'Reúne documentación vigente y traducida.',
			'Inscríbete en las pruebas CCSE y DELE.',
			'Presenta el expediente completo.',
			'Haz seguimiento hasta la inscripción.',
		],
		faq: [
			{
				question: '¿Cuántos años de residencia necesito?',
				answer:
					'Con carácter general diez años, pero hay plazos más cortos para determinados supuestos, como nacidos en España, casados con español o nacionales de ciertos países. Conviene confirmar tu caso antes de presentar.',
			},
			{
				question: '¿Qué pruebas hay que superar?',
				answer:
					'El examen de conocimientos constitucionales y socioculturales y, cuando el español no es idioma oficial en tu país, la prueba de idioma. Ambas se inscriben con antelación.',
			},
			{
				question: '¿Qué pasa si me la deniegan?',
				answer:
					'La resolución debe estar motivada. Puedes recurrirla dentro de plazo o, si el problema es de documentación, volver a solicitar corrigiendo los defectos.',
			},
		],
		relatedServices: [
			{ path: '/nacionalidad-extranjeria', label: 'nacionalidad y extranjería' },
			{ path: '/blog/nacionalidad-espana-examen', label: 'el examen de nacionalidad paso a paso' },
			{ path: '/abogados-en-malaga', label: 'abogados en Málaga (Teatinos)' },
		],
	},
	{
		slug: 'divorcio-contencioso',
		title: 'Divorcio contencioso: fases, plazos y qué decide el juez',
		description:
			'Cómo funciona un divorcio contencioso: demanda, medidas provisionales, prueba y sentencia, y cómo se protegen los hijos y el patrimonio.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '8 min',
		intro: 'Cuando no hay acuerdo, el divorcio se resuelve ante el juez. El procedimiento tiene fases y reglas propias, y lo que se pide y se prueba en cada una condiciona la sentencia mucho más de lo que parece.',
		sections: [
			{
				heading: 'Qué es el divorcio contencioso',
				paragraphs: [
					'Es el divorcio que se tramita ante el juzgado cuando los cónyuges no alcanzan un acuerdo sobre las medidas o cuando uno de ellos no quiere divorciarse. Frente al mutuo acuerdo, aquí el juez decide tras valorar la prueba.',
					'En España el divorcio no exige causa ni un plazo de separación previa, pero sí una demanda y un procedimiento.',
				],
			},
			{
				heading: 'Demanda y medidas provisionales',
				paragraphs: [
					'La demanda fija lo que se pide: custodia, alimentos, uso de la vivienda, pensión compensatoria y liquidación de bienes. Junto con ella se pueden pedir medidas provisionales para ordenar la situación mientras dura el proceso.',
					'Las medidas provisionales son clave: determinan con quién viven los hijos, quién usa la vivienda y qué cantidades se pagan durante el litigio.',
				],
			},
			{
				heading: 'Los hijos: interés superior',
				paragraphs: [
					'Cuando hay hijos, el juez valora su interés por encima de las posiciones de los padres. El informe del equipo psicosocial y las pruebas sobre la relación familiar pesan mucho en la decisión final.',
					'Proponer medidas realistas y centradas en el menor suele ser más eficaz que una petición maximalista sin sustento.',
				],
			},
			{
				heading: 'Prueba y desarrollo',
				paragraphs: [
					'Cada parte propone prueba: documental, testifical, pericial y, en su caso, económica y psicológica. La discrepancia sobre ingresos, gastos o dedicación a la familia se resuelve con documentación.',
					'El procedimiento puede alargarse con incidentes y recursos, así que ordenar el material desde el principio ahorra tiempo y costes.',
				],
			},
			{
				heading: 'Sentencia y efectos',
				paragraphs: [
					'La sentencia fija las medidas definitivas, que sustituyen a las provisionales. Puede ser recurrida en apelación y, desde que es firme, produce efectos de cosa juzgada.',
					'Después pueden plantearse modificaciones si cambian sustancialmente las circunstancias, pero no revisar por revisar.',
				],
			},
			{
				heading: 'Errores que perjudican',
				paragraphs: [
					'Pedir medidas desproporcionadas, no acreditar ingresos, descuidar la prueba sobre los hijos o dejar la liquidación de bienes para el final son los errores más habituales.',
					'Documentar ingresos, gastos, dedicación familiar y relación con los hijos es lo que sostiene cualquier pretensión en el juicio.',
				],
			},
		],
		checklist: [
			'Define las medidas que vas a pedir.',
			'Reúne pruebas de ingresos y gastos.',
			'Documenta la relación con los hijos.',
			'Valora las medidas provisionales.',
			'Prepara la prueba con antelación.',
		],
		faq: [
			{
				question: '¿Hace falta una causa para divorciarse?',
				answer:
					'No. En España no se exige causa ni un tiempo mínimo de separación: basta la voluntad de no continuar el matrimonio. El contencioso se debe al desacuerdo sobre las medidas, no a la ruptura en sí.',
			},
			{
				question: '¿Qué son las medidas provisionales?',
				answer:
					'Son las que fija el juez mientras se tramita el divorcio: con quién viven los hijos, uso de la vivienda, alimentos y otras. Ordenan la situación hasta la sentencia definitiva.',
			},
			{
				question: '¿Cuánto dura un divorcio contencioso?',
				answer:
					'Depende del juzgado, de la complejidad y de la prueba. Los incidentes y recursos alargan el procedimiento, así que ordenar el material desde el principio ayuda a que avance.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
			{ path: '/blog/divorcio-mutuo-acuerdo', label: 'divorcio de mutuo acuerdo' },
			{ path: '/guarda-custodia', label: 'guarda y custodia' },
		],
	},
	// ------------------------------------------------------------------
	// Cuarto lote (oct 2026): tablas de jubilación, recursos administrativos,
	// desahucio por impago, acoso laboral, últimas voluntades, parejas de hecho,
	// deudas de una SL y despido nulo.
	// ------------------------------------------------------------------
	{
		slug: 'tabla-de-jubilacion-por-anos-cotizados',
		title: 'Tabla de jubilación: edad y años cotizados en 2026',
		description:
			'Cómo se combinan la edad y los años cotizados para jubilarse: las tablas de la Seguridad Social, los porcentajes de pensión y la jubilación anticipada.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '8 min',
		intro: 'La edad de jubilación y el porcentaje de pensión dependen de dos variables que se cruzan: los años que has cotizado y el año en que alcanzas la edad ordinaria. Conocer la tabla evita pedir la jubilación en el momento equivocado o jubilarse con menos pensión de la que correspondía.',
		sections: [
			{
				heading: 'Cómo se cruzan edad y cotización',
				paragraphs: [
					'Para jubilarse con el cien por cien de la base reguladora hay que alcanzar la edad ordinaria y acreditar un periodo mínimo de cotización. La reforma de 2011 sube ambos requisitos de forma escalonada hasta 2027.',
					'Eso significa que la misma persona puede jubilarse a edades distintas según haya cotizado más o menos años: cuanto mayor es la cotización, antes se llega a la edad ordinaria plena.',
				],
			},
			{
				heading: 'La tabla por años cotizados',
				paragraphs: [
					'La tabla cruza los años cotizados con el año de nacimiento. Con cotizaciones altas se accede a la edad plena antes; con cotizaciones menores se exige una edad más alta aunque se alcance el mínimo legal de días.',
					'Por eso dos personas nacidas el mismo año pueden jubilarse con años de diferencia: lo que marca el calendario no es solo la fecha de nacimiento, sino la carrera de cotización acreditada.',
				],
			},
			{
				heading: 'Los porcentajes de pensión',
				paragraphs: [
					'El porcentaje de la base reguladora crece con los años cotizados y se completa, con carácter general, a los 36 años y medio. Por debajo de ese número, cada año adicional suma puntos porcentuales a la pensión.',
					'Aquí se ve el doble efecto de cotizar más: se adelanta la edad de acceso y se eleva el porcentaje que se aplica a la base reguladora.',
				],
			},
			{
				heading: 'Jubilación anticipada',
				paragraphs: [
					'La jubilación anticipada voluntaria permite adelantar la edad con coeficientes reductores, que dependen de los años cotizados y del tiempo adelantado. La involuntaria exige causa acreditada y tiene coeficientes más suaves.',
					'En ambos casos hay que cumplir una cotización mínima y la reducción se aplica sobre la pensión de por vida, no solo hasta la edad ordinaria.',
				],
			},
			{
				heading: 'Cotizaciones que cuentan',
				paragraphs: [
					'Cuentan los años del régimen general y de autónomos, la cotización por el servicio militar y la social, los periodos de prestación por desempleo y las cotizaciones asimiladas, como determinadas excedencias o el cuidado de hijos.',
					'El cómputo puede incluir bases de distinto régimen, y por eso conviene revisar el informe de vida laboral antes de simular la jubilación.',
				],
			},
			{
				heading: 'Errores que conviene evitar',
				paragraphs: [
					'El más caro es jubilarse en cuanto se alcanza la edad mínima sin simular el efecto de esperar unos meses o de corregir cotizaciones que faltan. También lo es dejar de cotizar los últimos años, que son los que más peso tienen en la base reguladora.',
					'Pedir una simulación, revisar la vida laboral y valorar la jubilación parcial o anticipada antes de decidir suele marcar la diferencia en la cuantía final.',
				],
			},
		],
		checklist: [
			'Consulta la tabla por tu año de nacimiento.',
			'Averigua los años que tienes cotizados.',
			'Simula la pensión antes de solicitar.',
			'Valora esperar si te falta poco.',
			'Pide la jubilación con la documentación completa.',
		],
		faq: [
			{
				question: '¿Cuántos años hay que cotizar para cobrar el 100 %?',
				answer:
					'Con carácter general, 36 años y medio cotizados para aplicar el cien por cien a la base reguladora. Por debajo, el porcentaje baja de forma progresiva aunque se cumpla el mínimo para acceder a la pensión.',
			},
			{
				question: '¿Puedo jubilarme antes de la edad ordinaria?',
				answer:
					'Sí, con la jubilación anticipada voluntaria o involuntaria, cumpliendo la cotización mínima. En ambos casos se aplican coeficientes reductores que reducen la pensión de forma permanente.',
			},
			{
				question: '¿Dónde veo los años que tengo cotizados?',
				answer:
					'En el informe de vida laboral, que se obtiene por internet, por teléfono o en una oficina de la Seguridad Social. Conviene revisarlo antes de pedir la jubilación para detectar periodos que falten.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-jubilacion', label: 'reclamación de jubilación' },
			{ path: '/reclamacion-pensiones', label: 'reclamación de prestaciones' },
			{ path: '/blog/jubilacion-2027', label: 'la jubilación en 2027' },
		],
	},
	{
		slug: 'recurso-de-alzada-y-reposicion',
		title: 'Recurso de alzada y reposición: plazos y diferencias',
		description:
			'En qué se diferencian el recurso de alzada y el de reposición, cuándo procede cada uno, los plazos para interponerlos y qué pasa si la Administración no responde.',
		date: '2026-10-06',
		category: 'Recursos administrativos',
		readTime: '7 min',
		intro: 'Ante una resolución que no compartes, la primera vía es administrativa, y elegir mal el recurso o presentarlo fuera de plazo cierra la puerta a discutirla después en los tribunales. Alzada y reposición se parecen en el nombre y son muy distintos en la práctica.',
		sections: [
			{
				heading: 'En qué se diferencian',
				paragraphs: [
					'El recurso de alzada se interpone ante el superior jerárquico del órgano que dictó el acto y se resuelve por quien está por encima en la escala administrativa. El de reposición se plantea ante el mismo órgano que dictó el acto y lo resuelve él mismo.',
					'De ahí su nombre: la reposición pide al órgano que revise su propia decisión, mientras que la alzada busca una segunda mirada jerárquica.',
				],
			},
			{
				heading: 'Cuándo procede la alzada',
				paragraphs: [
					'La alzada es el recurso ordinario frente a resoluciones de órganos que no agotan la vía administrativa. Es la vía habitual frente a sanciones, denegaciones de prestaciones y actos de órganos intermedios.',
					'Cuando el acto es de un órgano superior que agota la vía administrativa, la alzada no cabe y la vía se abre directamente en lo contencioso-administrativo.',
				],
			},
			{
				heading: 'Cuándo procede la reposición',
				paragraphs: [
					'La reposición se reserva a actos que agotan la vía administrativa, como actos de ministros, consejeros o algunos órganos directivos. Es potestativa: se puede interponer o ir directamente al contencioso.',
					'En la práctica se usa cuando se quiere agotar la vía administrativa o se confía en que el propio órgano corrija un error material o de criterio.',
				],
			},
			{
				heading: 'Los plazos',
				paragraphs: [
					'El plazo general para interponer el recurso de alzada es de un mes si el acto es expreso y de tres meses si es presunto. Para el de reposición, un mes desde la notificación del acto expreso.',
					'Presentar fuera de plazo convierte el acto en firme y se pierde la oportunidad, salvo causas excepcionales que haya que acreditar.',
				],
			},
			{
				heading: 'Cómo se redacta',
				paragraphs: [
					'El escrito identifica el acto que se recurre, los hechos, los motivos de nulidad o anulabilidad y lo que se pide. Aportar prueba documental desde el primer momento refuerza mucho la posición.',
					'Conviene distinguir los defectos de fondo de los formales: un vicio de procedimiento puede anular la resolución aunque el fondo esté bien, y al revés.',
				],
			},
			{
				heading: 'Silencio y siguientes pasos',
				paragraphs: [
					'Si la Administración no resuelve, se aplica la regla del silencio: en la alzada suele ser negativo, mientras que en otros procedimientos el silencio puede ser positivo. Saber cuál rige es decisivo para calcular el siguiente paso.',
					'Agotada la vía administrativa, la resolución puede impugnarse ante la jurisdicción contencioso-administrativa dentro de los plazos legales.',
				],
			},
		],
		checklist: [
			'Comprueba si el acto agota la vía administrativa.',
			'Revisa el plazo antes de presentar.',
			'Identifica claramente el acto que recurres.',
			'Aporta la prueba con el escrito.',
			'Vigila el silencio y su sentido.',
		],
		faq: [
			{
				question: '¿Alzada y reposición son lo mismo?',
				answer:
					'No. La alzada la resuelve el superior jerárquico y la reposición el mismo órgano que dictó el acto. Se diferencian también en cuándo procede cada una y en si son obligatorias o potestativas.',
			},
			{
				question: '¿Cuánto plazo tengo para recurrir?',
				answer:
					'Con carácter general, un mes para el recurso de alzada frente a acto expreso y un mes para el de reposición. Si el acto es presunto, la alzada admite tres meses. Presentarlo tarde lo hace firme.',
			},
			{
				question: '¿Y si no me contestan?',
				answer:
					'Se aplica el silencio administrativo, que en la alzada suele ser negativo. Saber si el silencio es positivo o negativo determina qué recurso o demanda cabe después y en qué plazo.',
			},
		],
		relatedServices: [
			{ path: '/recursos-administrativos', label: 'recursos administrativos' },
			{ path: '/impugnacion-sanciones-administrativas', label: 'impugnación de sanciones' },
			{ path: '/blog/recurso-administrativo-guia', label: 'guía del recurso administrativo' },
		],
	},
	{
		slug: 'desahucio-por-falta-de-pago',
		title: 'Desahucio por falta de pago: plazos y defensa',
		description:
			'Cómo funciona el desahucio por impago del alquiler: requerimiento, MASC, demanda, plazos, enervación y reclamación de las rentas adeudadas al inquilino.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '8 min',
		intro: 'El impago de la renta es la causa más habitual de desahucio, y su tramitación está llena de plazos que, bien usados, permiten al inquilino pagar y seguir en la vivienda o, al arrendador, cobrar y recuperarla. Conocer el orden de los pasos evita perder derechos.',
		sections: [
			{
				heading: 'Cuándo procede',
				paragraphs: [
					'El desahucio por falta de pago se basa en el impago de la renta o de cantidades asimiladas, como gastos o suministros pactados como renta. No hace falta un impago prolongado: basta el incumplimiento que la ley y el contrato consideran causa.',
					'También puede fundarse en el impago de la fianza o de las cantidades que el contrato asimila a renta, según lo pactado.',
				],
			},
			{
				heading: 'Requerimiento y MASC',
				paragraphs: [
					'Antes de demandar suele ser necesario intentar la negociación previa obligatoria, el llamado MASC, que en arrendamientos pasa por un intento de conciliación o mediación previo documentado.',
					'Un requerimiento fehaciente de pago bien redactado fija la fecha y la cantidad adeudada, y sirve tanto para intentar el cobro como para preparar la demanda.',
				],
			},
			{
				heading: 'La demanda y el juicio',
				paragraphs: [
					'La demanda acumula el desahucio y la reclamación de rentas, y en ella se fija la cantidad debida y lo que se pide. El procedimiento es el del juicio verbal y tiene un cauce rápido con plazos cortos.',
					'En el acto del juicio se discuten el impago y las excepciones, y el juez dicta sentencia que puede ordenar el desalojo y condenar al pago.',
				],
			},
			{
				heading: 'Plazos y enervación',
				paragraphs: [
					'El inquilino puede enervar el desahucio, es decir, paralizarlo pagando lo debido, siempre que se cumplan los requisitos legales y no se haya enervado antes en ciertas condiciones. El plazo y la forma de pago son decisivos.',
					'También hay plazos para oponerse a la demanda y para preparar la prueba del pago o del acuerdo, que conviene documentar siempre.',
				],
			},
			{
				heading: 'Reclamación de rentas y daños',
				paragraphs: [
					'Junto al desalojo se reclaman las rentas vencidas y las que se devenguen hasta la entrega, además de los daños y los gastos cuando proceda. La liquidación debe apoyarse en el contrato y en los recibos.',
					'Si el inquilino no paga tras la sentencia, queda la vía de ejecución, con posible embargo de bienes o de la nómina según los casos.',
				],
			},
			{
				heading: 'La defensa del inquilino',
				paragraphs: [
					'El inquilino puede oponer defectos formales del requerimiento, del MASC o de la demanda, discutir la cantidad reclamada y alegar el pago o el acuerdo. También puede plantear la vulnerabilidad y pedir suspensión en los supuestos legales.',
					'Reunir recibos, transferencias y comunicaciones es la mejor forma de demostrar que se ha pagado lo reclamado y frenar el procedimiento.',
				],
			},
		],
		checklist: [
			'Documenta el impago y las cantidades debidas.',
			'Intenta el MASC previo por escrito.',
			'Guarda los justificantes de pago.',
			'Revisa los plazos para oponerte.',
			'Valora la enervación antes del juicio.',
		],
		faq: [
			{
				question: '¿Puedo evitar el desahucio pagando?',
				answer:
					'Sí, mediante la enervación: pagando lo adeudado en plazo y forma se puede paralizar el procedimiento, siempre que se cumplan los requisitos legales y no se haya enervado antes en los supuestos que lo impiden.',
			},
			{
				question: '¿Hay que intentar un acuerdo antes de demandar?',
				answer:
					'En materia de arrendamientos rige la negociación previa obligatoria (MASC), que exige acreditar un intento de conciliación o mediación antes de presentar la demanda de desahucio.',
			},
			{
				question: '¿Se pueden reclamar las rentas además del desalojo?',
				answer:
					'Sí. La demanda acumula el desahucio y la reclamación de las rentas vencidas y las que se devenguen hasta la entrega, más los daños y gastos cuando procedan.',
			},
		],
		relatedServices: [
			{ path: '/desahucio-por-impago', label: 'desahucio por impago' },
			{ path: '/alquiler-viviendas', label: 'alquiler de viviendas' },
			{ path: '/blog/masc-negociacion-obligatoria', label: 'el MASC antes de demandar' },
		],
	},
	{
		slug: 'acoso-laboral-mobbing',
		title: 'Acoso laboral o mobbing: cómo probarlo y reclamar',
		description:
			'Qué conductas constituyen acoso laboral, cómo se prueba el mobbing, las vías de reclamación ante la empresa, la Inspección y los tribunales, y cuándo es delito.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '8 min',
		intro: 'El acoso laboral no es un problema de mala relación entre compañeros: es un comportamiento reiterado que ataca la dignidad del trabajador y que, bien documentado, tiene consecuencias para quien lo ejerce y para la empresa. La prueba es lo que decide el caso.',
		sections: [
			{
				heading: 'Qué es el acoso laboral',
				paragraphs: [
					'El mobbing es un hostigamiento reiterado en el trabajo que busca aislar, humillar o forzar la salida del trabajador. No basta un episodio puntual: hace falta una conducta repetida y un efecto sobre la salud o la dignidad.',
					'Se distingue de un conflicto o de una presión laboral puntual, y también del acoso por razón de sexo o del acoso sexual, que tienen su propio tratamiento legal.',
				],
			},
			{
				heading: 'Cómo se prueba',
				paragraphs: [
					'La prueba se construye con correos, mensajes, testigos, partes médicos e informes psicológicos. El diario de los hechos, con fechas y descripciones concretas, es una de las herramientas más útiles.',
					'Los partes de baja y los informes de la mutua o de la sanidad pública documentan el daño a la salud, que es clave tanto para el despido como para la indemnización.',
				],
			},
			{
				heading: 'Vías de reclamación',
				paragraphs: [
					'La primera vía es interna, ante la empresa o los representantes de los trabajadores. Después se puede acudir a la Inspección de Trabajo, que puede sancionar y requerir medidas.',
					'En el ámbito judicial, el acoso puede dar lugar a una indemnización por daños y, si el trabajador dimite por la situación, a reclamar como si fuera un despido improcedente en los supuestos legales.',
				],
			},
			{
				heading: 'La vía penal',
				paragraphs: [
					'El Código Penal castiga el acoso laboral cuando se realiza con grave hostigamiento en el ámbito del trabajo, y también el acoso sexual o por razón de sexo en sus formas más graves.',
					'La vía penal exige una prueba sólida y se reserva para los casos de especial intensidad, porque la respuesta del derecho penal a estos hechos es limitada.',
				],
			},
			{
				heading: 'La empresa y la prevención',
				paragraphs: [
					'La normativa de prevención de riesgos obliga a la empresa a evaluar los riesgos psicosociales y a proteger la salud de su plantilla, no solo frente a los riesgos físicos. Ignorar el acoso puede ser una infracción grave.',
					'Los protocolos frente al acoso mal aplicados suelen ser la primera prueba de que la empresa conocía la situación y no actuó.',
				],
			},
			{
				heading: 'Errores que debilitan el caso',
				paragraphs: [
					'Denunciar tarde, no guardar los mensajes o irse sin documentar la situación son los errores más costosos. También lo es responder con conductas que aíslen aún más el caso de su origen.',
					'Actuar pronto, guardar la prueba y ponerse en manos de un abogado laboralista refuerza de forma decisiva la reclamación.',
				],
			},
		],
		checklist: [
			'Anota los hechos con fechas y detalles.',
			'Guarda correos, mensajes y testigos.',
			'Acude al médico por la salud.',
			'Comunica la situación por escrito.',
			'Denuncia sin dejar pasar el tiempo.',
		],
		faq: [
			{
				question: '¿Qué conductas son acoso laboral?',
				answer:
					'El hostigamiento reiterado que aísla, humilla o persigue al trabajador y afecta a su dignidad o a su salud. Un episodio puntual no suele ser mobbing, pero un patrón mantenido y probado sí.',
			},
			{
				question: '¿Cómo se prueba el mobbing?',
				answer:
					'Con correos y mensajes, testigos, un diario de los hechos y, sobre todo, partes médicos e informes psicológicos que acrediten el daño. La prueba documental desde el inicio es determinante.',
			},
			{
				question: '¿El acoso laboral es delito?',
				answer:
					'Puede serlo cuando se da un grave hostigamiento en el ámbito laboral o en formas agravadas como el acoso sexual. La vía penal exige prueba sólida y se reserva para los casos de mayor intensidad.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'defensa frente a despidos' },
			{ path: '/contratos-laborales', label: 'contratos y relaciones laborales' },
			{ path: '/blog/nueva-ley-prevencion-riesgos-laborales', label: 'prevención de riesgos psicosociales' },
		],
	},
	{
		slug: 'certificado-de-ultimas-voluntades',
		title: 'Certificado de últimas voluntades: qué es y cómo pedirlo',
		description:
			'Qué acredita el certificado de últimas voluntades, cómo y dónde se solicita, su coste y plazo, y por qué es imprescindible para tramitar una herencia.',
		date: '2026-10-06',
		category: 'Herencias',
		readTime: '7 min',
		intro: 'Antes de repartir una herencia hay que saber si el fallecido otorgó testamento y ante qué notario. El certificado de últimas voluntades responde a esa pregunta, y sin él no se puede continuar con la declaración de herederos ni con la escritura de adjudicación.',
		sections: [
			{
				heading: 'Qué acredita',
				paragraphs: [
					'El certificado de últimas voluntades informa de si la persona fallecida otorgó testamento, y en su caso del notario y la fecha. Lo expide el Registro General de Actos de Última Voluntad, dependiente del Ministerio de Justicia.',
					'Es un documento distinto del certificado de defunción y del de la última voluntad concreto, y suele pedirse junto con el certificado de nacimiento y el de matrimonio del causante.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'Se solicita por internet con identificación digital, en las oficinas de registro o en los registros civiles, aportando los datos del fallecido y el certificado de defunción. También puede solicitarse por representación.',
					'Es habitual que lo pida el notario o el abogado que tramita la herencia, porque forma parte de la documentación necesaria para continuar el expediente.',
				],
			},
			{
				heading: 'Plazos y coste',
				paragraphs: [
					'El certificado no se emite de inmediato: existe un plazo de espera desde el fallecimiento para asegurar que no aparezcan testamentos posteriores, y a partir de ahí se emite en un plazo breve.',
					'Tiene una tasa pública y un coste reducido. Pedirlo por adelantado evita retrasar el resto de trámites de la herencia.',
				],
			},
			{
				heading: 'Su papel en la herencia',
				paragraphs: [
					'Si el certificado revela que hay testamento, la herencia se tramita conforme a él ante el notario. Si no hay testamento, el certificado sirve para iniciar la declaración de herederos ab intestato.',
					'En ambos casos es un documento previo e imprescindible: sin él no se puede saber quién hereda ni con qué título.',
				],
			},
			{
				heading: 'Otros certificados que suelen pedirse',
				paragraphs: [
					'Junto al de últimas voluntades se solicitan el certificado de defunción, el de empadronamiento y, a veces, los seguros de vida o los contratos bancarios del fallecido, para completar el inventario.',
					'Reunir todos estos documentos al principio agiliza la partición y evita requerimientos sucesivos del notario.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'El error más habitual es creer que con el certificado de defunción ya se puede repartir la herencia, o pedir el de últimas voluntades cuando aún no ha pasado el plazo de espera y recibir una respuesta que no sirve.',
					'Otro error es dejarlo para el final y descubrir entonces que hay un testamento en otra notaría, lo que obliga a rehacer el reparto.',
				],
			},
		],
		checklist: [
			'Reúne los datos del fallecido.',
			'Pide el certificado de defunción.',
			'Espera el plazo antes de solicitar.',
			'Solicita el certificado de últimas voluntades.',
			'Si hay testamento, contacta con la notaría.',
		],
		faq: [
			{
				question: '¿Dónde se pide el certificado de últimas voluntades?',
				answer:
					'Se solicita al Registro General de Actos de Última Voluntad, por internet con identificación digital, en oficinas de registro o en registros civiles, aportando los datos del fallecido y el certificado de defunción.',
			},
			{
				question: '¿Cuánto tarda en emitirse?',
				answer:
					'Existe un plazo de espera desde el fallecimiento para garantizar que no aparezcan testamentos posteriores; transcurrido ese plazo, el certificado se emite en pocos días. Tiene una tasa pública reducida.',
			},
			{
				question: '¿Es obligatorio para tramitar la herencia?',
				answer:
					'Sí. Es imprescindible para saber si hay testamento y, si no lo hay, para iniciar la declaración de herederos. Sin él no se puede continuar la partición ni la escritura ante notario.',
			},
		],
		relatedServices: [
			{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
			{ path: '/impuestos-herencia', label: 'impuestos de la herencia' },
			{ path: '/blog/certificado-funerario-herencias', label: 'certificados para la herencia' },
		],
	},
	{
		slug: 'parejas-de-hecho',
		title: 'Parejas de hecho: régimen económico y derechos',
		description:
			'Qué es una pareja de hecho, cómo se acredita en Andalucía, el régimen económico entre sus miembros y los derechos en la ruptura, la pensión y la herencia.',
		date: '2026-10-06',
		category: 'Derecho de Familia',
		readTime: '8 min',
		intro: 'Sin estar casada, una pareja estable genera derechos y obligaciones que muchas veces se desconocen hasta que llega la ruptura o el fallecimiento. El régimen económico y la acreditación de la convivencia determinan qué se puede reclamar y qué no.',
		sections: [
			{
				heading: 'Qué es una pareja de hecho',
				paragraphs: [
					'La pareja de hecho es la unión estable de dos personas que conviven con vocación de permanencia sin estar casadas. No constituye un matrimonio y su régimen jurídico lo fijan, según el caso, la ley autonómica y los pactos que la pareja haya suscrito.',
					'Andalucía tiene su propia regulación, que exige inscripción en el registro y establece requisitos de convivencia y de empadronamiento.',
				],
			},
			{
				heading: 'El registro y la acreditación',
				paragraphs: [
					'Inscribirse en el registro de parejas de hecho facilita acreditar la convivencia y da acceso a determinados derechos, como ciertas prestaciones o permisos. Los dos miembros deben cumplir los requisitos y prestar su consentimiento.',
					'También se puede acreditar la pareja sin inscripción, pero probar la estabilidad y la convivencia es más difícil y suele requerir varios medios de prueba.',
				],
			},
			{
				heading: 'El régimen económico',
				paragraphs: [
					'Por defecto no existe una sociedad de gananciales ni un patrimonio común como en el matrimonio: cada miembro conserva lo suyo y los bienes adquiridos en común se rigen por las reglas de la copropiedad.',
					'La pareja puede regular su economía con un pacto o escritura, que es la vía más segura para ordenar qué ocurre con la vivienda, los bienes y las deudas.',
				],
			},
			{
				heading: 'Hijos y ruptura',
				paragraphs: [
					'Los hijos tienen los mismos derechos que en un matrimonio: ambos progenitores responden de su manutención y se decide la guarda y custodia y el régimen de visitas conforme al interés del menor, hayan estado casados sus padres o no.',
					'En la ruptura se reparten los bienes comunes según la copropiedad y se reclama, en su caso, la contribución a los gastos y a los hijos, pero no existe una pensión compensatoria como en el divorcio.',
				],
			},
			{
				heading: 'Pensión y herencia',
				paragraphs: [
					'La pareja de hecho acreditada puede acceder a la pensión de viudedad cumpliendo los requisitos de convivencia, ingresos y dependencia económica, y debe probar la existencia de la pareja con los medios que exige la ley.',
					'En la herencia no hay derechos legitimarios automáticos como para el cónyuge, así que, sin testamento a su favor, la pareja queda fuera de la sucesión salvo en los supuestos que la ley contempla.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'Confiar en que la convivencia basta para heredar o para cobrar una pensión es el error más común. Tampoco es buena idea dejar sin regular la vivienda y los bienes cuando hay aportaciones muy desiguales.',
					'Inscribirse en el registro, ordenar la economía con un pacto y hacer testamento son tres pasos sencillos que evitan la mayoría de los problemas.',
				],
			},
		],
		checklist: [
			'Valora inscribirte en el registro.',
			'Ordena la economía con un pacto.',
			'Guarda pruebas de la convivencia.',
			'Haz testamento si quieres proteger a tu pareja.',
			'Consulta antes de una ruptura.',
		],
		faq: [
			{
				question: '¿Cuánto tiempo hay que convivir para ser pareja de hecho?',
				answer:
					'Depende de la normativa aplicable y, en Andalucía, de los requisitos de la ley autonómica y de la inscripción. La inscripción en el registro es la forma más segura de acreditar la pareja estable.',
			},
			{
				question: '¿Hay gananciales entre parejas de hecho?',
				answer:
					'No por defecto. Cada miembro conserva sus bienes y los adquiridos en común se rigen por la copropiedad. Para regular la economía conviene suscribir un pacto o escritura ante notario.',
			},
			{
				question: '¿Puede heredar la pareja de hecho?',
				answer:
					'Sin testamento a su favor, en general no hereda como el cónyuge, porque no tiene derechos legitimarios automáticos. Hacer testamento es la forma más clara de proteger a la pareja.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'ruptura de pareja y familia' },
			{ path: '/guarda-custodia', label: 'guarda y custodia' },
			{ path: '/blog/medidas-paterno-filiales', label: 'medidas paterno-filiales' },
		],
	},
	{
		slug: 'deudas-de-una-sociedad-limitada',
		title: 'Quién responde de las deudas de una sociedad limitada',
		description:
			'Cuándo responde la sociedad limitada de sus deudas y cuándo alcanza a los socios o administradores: avales, levantamiento del velo y responsabilidad.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '8 min',
		intro: 'La responsabilidad limitada es la gran ventaja de la sociedad limitada: los socios no responden de las deudas sociales con su patrimonio. Pero ese límite tiene excepciones, y cuando se cruza, el patrimonio personal queda expuesto sin que muchos socios lo hayan previsto.',
		sections: [
			{
				heading: 'El límite de la responsabilidad',
				paragraphs: [
					'La sociedad limitada responde de sus deudas con todo su patrimonio, y los socios solo arriesgan lo que aportaron o lo que se comprometieron a aportar, salvo supuestos excepcionales.',
					'Esa separación entre patrimonio social y personal es la razón por la que la forma societaria limita el riesgo, pero exige cumplir las formalidades de constitución y de funcionamiento.',
				],
			},
			{
				heading: 'Deudas de la sociedad',
				paragraphs: [
					'Las deudas frente a proveedores, bancos, trabajadores o Hacienda son de la sociedad, no de los socios. El acreedor debe reclamar contra la sociedad y ejecutar sus bienes.',
					'Si la sociedad tiene patrimonio suficiente, la responsabilidad del socio no se activa, por mucho que las deudas crezcan.',
				],
			},
			{
				heading: 'Responsabilidad de los administradores',
				paragraphs: [
					'El administrador sí puede responder de las deudas cuando no convoca la disolución en plazo existiendo causa legal, o cuando no atiende diligentemente el cumplimiento de obligaciones societarias y fiscales.',
					'En esos casos puede quedar obligado a cubrir parte o la totalidad de las deudas por su gestión, además de responder de los daños que cause.',
				],
			},
			{
				heading: 'Levantamiento del velo',
				paragraphs: [
					'Cuando la sociedad se usa como pantalla para eludir obligaciones o en fraude de ley, los tribunales pueden levantar el velo y alcanzar el patrimonio de socios o administradores que se han prevalido de esa apariencia.',
					'Es una respuesta excepcional, pero muy presente en casos de confusión de patrimonios o de sociedades creadas para incumplir.',
				],
			},
			{
				heading: 'Avales y garantías personales',
				paragraphs: [
					'La vía más frecuente por la que un socio acaba respondiendo no es la ley, sino su propia firma: los avales, fianzas o garantías personales que firma ante un banco o un proveedor le obligan con todo su patrimonio.',
					'Antes de firmar cualquier garantía personal conviene medir el importe, las condiciones de ejecución y si hay bienes que queden fuera de la garantía.',
				],
			},
			{
				heading: 'Cómo protegerse',
				paragraphs: [
					'Mantener la contabilidad al día, convocar los órganos cuando corresponde, no confundir patrimonios y evitar avales indiscriminados son las mejores defensas. Cuando la sociedad entra en pérdidas, actuar a tiempo evita la responsabilidad posterior.',
					'Si las reclamaciones ya han empezado, revisar la actuación de los administradores y la documentación societaria marca la diferencia en la defensa.',
				],
			},
		],
		checklist: [
			'Revisa si el socio ha avalado personalmente.',
			'Comprueba que la contabilidad esté al día.',
			'Convoca los órganos societarios cuando toca.',
			'No confundas patrimonio social y personal.',
			'Actúa a tiempo ante pérdidas.',
		],
		faq: [
			{
				question: '¿Los socios responden de las deudas de la SL?',
				answer:
					'Con carácter general, no: responden solo hasta lo que aportaron o se comprometieron a aportar. La responsabilidad personal se activa en supuestos excepcionales o cuando el socio firmó un aval o garantía.',
			},
			{
				question: '¿Cuándo responde el administrador?',
				answer:
					'Puede responder cuando no convoca la disolución existiendo causa legal o cuando no actúa con la diligencia debida, quedando obligado a cubrir las deudas en los supuestos que la ley prevé.',
			},
			{
				question: '¿Qué es el levantamiento del velo?',
				answer:
					'Es la técnica con la que los tribunales alcanzan el patrimonio de socios o administradores cuando la sociedad se usa como pantalla para eludir obligaciones o en fraude de ley. Es una respuesta excepcional.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'asesoría de empresas' },
			{ path: '/empresas/constitucion-sociedades', label: 'constitución de sociedades' },
			{ path: '/blog/responsabilidad-administradores-sl', label: 'responsabilidad de administradores' },
		],
	},
	{
		slug: 'despido-nulo',
		title: 'Despido nulo: causas, efectos y cómo reclamarlo',
		description:
			'Qué es un despido nulo, qué causas lo provocan (discriminación, embarazo o represalia), sus efectos de readmisión y salarios, y cómo reclamarlo a tiempo.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '7 min',
		intro: 'El despido nulo es el más grave para la empresa: obliga a readmitir y a pagar los salarios dejados de percibir. Se reserva a los despidos que vulneran derechos fundamentales, y probar el indicio de discriminación es la clave del caso.',
		sections: [
			{
				heading: 'Qué es el despido nulo',
				paragraphs: [
					'El despido nulo es el que se declara por vulnerar derechos fundamentales o por incurrir en las causas que la ley sanciona con la máxima protección al trabajador. No se discute tanto la causa del despido como el móvil que lo provoca.',
					'Es distinto del procedente, que es un despido ajustado a derecho, y del improcedente, que puede serlo o no pero no vulnera derechos fundamentales.',
				],
			},
			{
				heading: 'Causas de nulidad',
				paragraphs: [
					'Son causas típicas el despido que vulnera la igualdad o la no discriminación, el que se produce por embarazo, por reducción de jornada por guarda legal, por el disfrute de permisos de conciliación, por represalia tras reclamar o denunciar, o por ejercer derechos fundamentales.',
					'También se declara nulo el despido de trabajadores con determinadas protecciones, como las relacionadas con la violencia de género o el acoso, en los supuestos legales.',
				],
			},
			{
				heading: 'Readmisión y salarios de tramitación',
				paragraphs: [
					'Declarado nulo el despido, la empresa debe readmitir al trabajador en las mismas condiciones y pagarle los salarios de tramitación desde el despido hasta la readmisión. La opción no la elige la empresa, a diferencia de lo que ocurre en el improcedente.',
					'Además, la vulneración del derecho fundamental puede dar lugar a una indemnización por daños morales, que se acumula a la readmisión y a los salarios.',
				],
			},
			{
				heading: 'Diferencia con improcedente y procedente',
				paragraphs: [
					'En el despido improcedente la empresa puede elegir entre readmitir o indemnizar, salvo representantes. En el nulo no hay elección: hay readmisión obligatoria con salarios. En el procedente, el despido es válido y no da derecho a nada.',
					'Acertar con la calificación es decisivo, porque de ella dependen las consecuencias y la estrategia de la reclamación.',
				],
			},
			{
				heading: 'Plazos y papeleta',
				paragraphs: [
					'El plazo para impugnar el despido es de 20 días hábiles desde su efectos, y se agota presentando la papeleta de conciliación. Dejar pasar el plazo convierte el despido en firme, sea cual sea su causa.',
					'Reunir desde el principio la prueba del móvil discriminatorio y de los hechos cercanos a la decisión es lo que sostiene la nulidad.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'El error más caro es no reaccionar dentro del plazo o firmar el finiquito sin reservas pensando que luego se podrá reclamar. También lo es no documentar la situación previa al despido.',
					'Consultar a un abogado laboralista de inmediato y conservar la prueba del indicio de discriminación son los dos pasos que más peso tienen.',
				],
			},
		],
		checklist: [
			'Identifica el posible móvil discriminatorio.',
			'Reúne pruebas del contexto previo.',
			'No firmes el finiquito sin asesorarte.',
			'Respeta el plazo de 20 días hábiles.',
			'Presenta la papeleta de conciliación.',
		],
		faq: [
			{
				question: '¿Qué efectos tiene un despido nulo?',
				answer:
					'La readmisión obligatoria en las mismas condiciones y el pago de los salarios de tramitación, más una posible indemnización por daños morales cuando se ha vulnerado un derecho fundamental.',
			},
			{
				question: '¿Cuánto tiempo tengo para reclamar?',
				answer:
					'Veinte días hábiles desde la fecha de efectos del despido, plazo que se agota presentando la papeleta de conciliación. Pasado ese plazo, el despido queda firme.',
			},
			{
				question: '¿El despido nulo siempre se readmite?',
				answer:
					'Sí. A diferencia del improcedente, donde la empresa puede optar por indemnizar, en el nulo la readmisión es obligatoria y se acompaña del pago de los salarios dejados de percibir.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'defensa frente a despidos' },
			{ path: '/contratos-laborales', label: 'contratos y relaciones laborales' },
			{ path: '/blog/despido-improcedente', label: 'despido improcedente' },
		],
	},
	// ------------------------------------------------------------------
	// Quinto lote (oct 2026): jubilación anticipada, despido objetivo, legítima
	// y desheredación, arras, SL o autónomo, reagrupación familiar, segunda
	// oportunidad y delito leve.
	// ------------------------------------------------------------------
	{
		slug: 'tabla-de-jubilacion-anticipada',
		title: 'Jubilación anticipada: tablas, coeficientes y edades',
		description:
			'Cómo funciona la jubilación anticipada voluntaria e involuntaria: edades, coeficientes reductores, cotización exigida y cuánto baja la pensión.',
		date: '2026-10-06',
		category: 'Seguridad Social',
		readTime: '8 min',
		intro: 'Adelantar la jubilación es posible, pero tiene un precio: cada año que se adelanta la edad ordinaria reduce la pensión mediante coeficientes que dependen de los años cotizados y de si el adelanto es voluntario o forzoso. Conocer la tabla evita jubilarse con más recorte del necesario.',
		sections: [
			{
				heading: 'Voluntaria e involuntaria',
				paragraphs: [
					'La jubilación anticipada voluntaria permite adelantar la edad por decisión propia, con coeficientes reductores. La involuntaria exige que el cese se haya producido por causa no imputable al trabajador, como un despido colectivo o una extinción por causas objetivas.',
					'La diferencia importa porque los coeficientes de la involuntaria son más suaves y porque cada vía exige requisitos y prueba distintos.',
				],
			},
			{
				heading: 'La edad y la cotización exigida',
				paragraphs: [
					'La edad mínima de acceso se ha ido elevando hasta 2027, igual que la edad ordinaria, y se exige un periodo mínimo de cotización que también crece por tramos. Sin ese mínimo no cabe la anticipada.',
					'En la involuntaria, además, hay que acreditar el cese involuntario y, cuando corresponde, la inscripción como demandante de empleo.',
				],
			},
			{
				heading: 'Los coeficientes reductores',
				paragraphs: [
					'Cada trimestre o año adelantado aplica un coeficiente que reduce la base reguladora. El porcentaje depende de los años cotizados: a más cotización, menor recorte por cada periodo adelantado.',
					'En la involuntaria los coeficientes son más bajos que en la voluntaria para el mismo adelanto, y también hay diferencias según la duración de la carrera de cotización.',
				],
			},
			{
				heading: 'Cuánto baja la pensión',
				paragraphs: [
					'La reducción se calcula sobre la pensión que habría correspondido a la edad ordinaria y se mantiene de por vida, no solo hasta alcanzar esa edad. Por eso conviene simular antes de decidir.',
					'Esperar unos meses, completar cotizaciones o valorar la jubilación parcial suele reducir el recorte de forma notable.',
				],
			},
			{
				heading: 'Jubilación parcial y relevo',
				paragraphs: [
					'La jubilación parcial permite compatibilizar pensión y trabajo a tiempo parcial y exige un contrato de relevo con otro trabajador. Es una alternativa a la anticipada que muchos desconocen.',
					'Sus requisitos de edad y cotización son propios y han cambiado con las últimas reformas, así que conviene comprobarlos antes de plantearla.',
				],
			},
			{
				heading: 'Errores y comprobaciones',
				paragraphs: [
					'El error más habitual es pedir la anticipada sin simular el efecto del coeficiente y sin revisar la vida laboral. También lo es confundir una extinción voluntaria con una involuntaria a efectos de la pensión.',
					'Revisar la cotización, pedir una simulación y documentar la causa del cese son los pasos que evitan una reducción mayor de la esperada.',
				],
			},
		],
		checklist: [
			'Comprueba tu edad y años cotizados.',
			'Simula la pensión antes de solicitarla.',
			'Acredita la causa del cese si es involuntaria.',
			'Valora la jubilación parcial.',
			'Documenta toda la cotización.',
		],
		faq: [
			{
				question: '¿Cuánto se reduce la pensión por anticiparla?',
				answer:
					'Depende de los años cotizados y del tiempo adelantado: a más cotización y menos adelanto, menor es el coeficiente. La reducción se aplica sobre la pensión y se mantiene de por vida.',
			},
			{
				question: '¿Qué diferencia hay entre voluntaria e involuntaria?',
				answer:
					'La voluntaria parte de una decisión propia; la involuntaria exige un cese por causa no imputable al trabajador. La involuntaria tiene coeficientes más suaves y requiere acreditar la causa.',
			},
			{
				question: '¿Puedo trabajar y cobrar parte de la pensión?',
				answer:
					'Sí, con la jubilación parcial, que permite compatibilizar pensión y trabajo a tiempo parcial y exige un contrato de relevo. Sus requisitos son distintos de los de la anticipada.',
			},
		],
		relatedServices: [
			{ path: '/reclamacion-jubilacion', label: 'reclamación de jubilación' },
			{ path: '/jubilacion-parcial', label: 'jubilación parcial' },
			{ path: '/blog/jubilacion-2027', label: 'la jubilación en 2027' },
		],
	},
	{
		slug: 'despido-objetivo',
		title: 'Despido objetivo: causas, indemnización y defensa',
		description:
			'Qué es un despido objetivo por causas económicas, técnicas, organizativas o de producción, su indemnización de veinte días y cómo impugnarlo.',
		date: '2026-10-06',
		category: 'Derecho Laboral',
		readTime: '8 min',
		intro: 'El despido objetivo se basa en causas económicas, técnicas, organizativas o de producción, o en la ineptitud o inadaptación del trabajador. Si la causa no se acredita, el despido se declara improcedente y la indemnización cambia por completo.',
		sections: [
			{
				heading: 'Qué es y en qué se diferencia',
				paragraphs: [
					'El despido objetivo es una extinción por causas tasadas en la ley, con una indemnización de veinte días por año trabajado y un máximo de doce mensualidades. No es un despido libre ni un simple ajuste de plantilla.',
					'Se distingue del disciplinario, que responde a un incumplimiento del trabajador, y del colectivo, que se tramita por el cauce del despido colectivo cuando afecta a varios.',
				],
			},
			{
				heading: 'Las causas económicas',
				paragraphs: [
					'La causa económica exige acreditar una situación de pérdidas o una disminución persistente de ingresos, con la documentación contable que lo demuestre. No basta con que la empresa gane menos de lo previsto.',
					'Los tribunales exigen que la medida sea razonable y proporcional: la empresa debe justificar por qué el despido concreto sirve para superar la situación.',
				],
			},
			{
				heading: 'Otras causas',
				paragraphs: [
					'Las causas técnicas, organizativas y de producción atienden a cambios en los medios, en la organización o en la demanda. Deben acreditarse con hechos objetivos y conectarse con el puesto suprimido.',
					'La ineptitud sobrevenida y la falta de adaptación son causas ligadas a la persona, con requisitos propios y límites, sobre todo cuando hay discapacidad.',
				],
			},
			{
				heading: 'La indemnización',
				paragraphs: [
					'La indemnización es de veinte días de salario por año trabajado, con prorrateo por meses y un tope de doce mensualidades. Es inferior a la del improcedente, que asciende a treinta y tres días.',
					'Poner la indemnización a disposición del trabajador junto con la carta es un requisito formal relevante, cuya falta puede afectar a la calificación del despido.',
				],
			},
			{
				heading: 'Forma y preaviso',
				paragraphs: [
					'La carta debe expresar la causa con suficiente concreción y entregarse con un preaviso de quince días, o compensarse con el salario correspondiente. Los defectos formales suelen dar lugar a improcedencia.',
					'Conviene conservar la carta, los finiquitos y la documentación de la empresa para comparar lo alegado con la realidad.',
				],
			},
			{
				heading: 'Cómo se impugna',
				paragraphs: [
					'El plazo para impugnar es de veinte días hábiles desde la fecha de efectos del despido, y se agota presentando la papeleta de conciliación. Si la causa no se prueba, el despido se declara improcedente.',
					'Reunir datos económicos, comparativas de plantilla y pruebas del puesto ayuda a discutir la causa alegada por la empresa.',
				],
			},
		],
		checklist: [
			'Guarda la carta de despido y el finiquito.',
			'Comprueba si la causa económica está probada.',
			'Revisa el preaviso y la indemnización.',
			'Respeta el plazo de veinte días hábiles.',
			'Documenta tu puesto y tus funciones.',
		],
		faq: [
			{
				question: '¿Cuánto se cobra por un despido objetivo?',
				answer:
					'Veinte días de salario por año trabajado, con prorrateo por meses y un máximo de doce mensualidades. En ningún caso es la indemnización de treinta y tres días del improcedente.',
			},
			{
				question: '¿Puede ser improcedente un despido objetivo?',
				answer:
					'Sí. Si la empresa no acredita la causa o incumple los requisitos de forma y preaviso, el despido se declara improcedente y la indemnización y las consecuencias cambian.',
			},
			{
				question: '¿Cuánto tiempo tengo para reclamar?',
				answer:
					'Veinte días hábiles desde los efectos del despido, plazo que se agota presentando la papeleta de conciliación ante el servicio correspondiente.',
			},
		],
		relatedServices: [
			{ path: '/despidos', label: 'defensa frente a despidos' },
			{ path: '/contratos-laborales', label: 'contratos y relaciones laborales' },
			{ path: '/blog/despido-improcedente', label: 'despido improcedente' },
		],
	},
	{
		slug: 'legitima-y-desheredacion',
		title: 'Legítima y desheredación: cuándo se puede desheredar',
		description:
			'Qué es la legítima de los hijos, cuánto les corresponde y en qué casos se puede desheredar a un heredero forzoso con causa legal.',
		date: '2026-10-06',
		category: 'Herencias',
		readTime: '8 min',
		intro: 'La legítima protege a determinados herederos frente a la libertad de testar: hay una parte de la herencia que no se puede repartir sin ellos salvo desheredación con causa legal. Conocer estos límites evita testamentos que acaban anulados o repartos mal hechos.',
		sections: [
			{
				heading: 'Qué es la legítima',
				paragraphs: [
					'La legítima es la porción de la herencia que la ley reserva a ciertos herederos, llamados legitimarios, con independencia de lo que diga el testamento. El testador puede ordenar el resto, pero no privarles de esa parte sin causa.',
					'En el derecho común, los hijos y descendientes son legitimarios, y el cónyuge viudo tiene su propio derecho en usufructo.',
				],
			},
			{
				heading: 'Cuánto corresponde a cada hijo',
				paragraphs: [
					'La legítima de los hijos es de dos tercios de la herencia: un tercio de legítima estricta, que se reparte por igual, y un tercio de mejora, que el testador puede asignar libremente entre descendientes.',
					'El tercio restante es de libre disposición. Esa estructura explica por qué un testamento puede favorecer a un hijo sin desheredar a los demás.',
				],
			},
			{
				heading: 'El usufructo del viudo',
				paragraphs: [
					'Además de la legítima de los hijos, el cónyuge viudo tiene derecho al usufructo de una parte de la herencia, que varía según los legitimarios que existan. Es un derecho distinto de la legítima, pero condiciona el reparto.',
					'Confundir ambos derechos es una de las causas más frecuentes de testamentos mal planificados.',
				],
			},
			{
				heading: 'Cuándo se puede desheredar',
				paragraphs: [
					'Solo se puede desheredar por las causas que la ley enumera y que el testamento debe expresar: haber negado alimentos, maltrato, injurias graves, haber atentado contra la vida o, en general, incumplir los deberes familiares.',
					'La causa debe ser cierta y probarse; si no se acredita, la desheredación se deja sin efecto y el desheredado recupera su legítima.',
				],
			},
			{
				heading: 'Causas y prueba',
				paragraphs: [
					'Las causas más habituales son el maltrato de obra o de palabra y la negativa injustificada a prestar alimentos. Su apreciación exige hechos concretos, no simples desavenencias o discusiones familiares.',
					'Una desheredación mal motivada se impugna con relativa facilidad, así que el testamento debe describir los hechos con precisión y apoyarse en pruebas.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'El error más común es creer que se puede dejar fuera a un hijo por voluntad propia sin causa legal. También lo es redactar la desheredación con generalidades que luego no se pueden probar.',
					'Planificar el testamento con asesoramiento y documentar las causas desde el principio evita que el reparto acabe en los tribunales.',
				],
			},
		],
		checklist: [
			'Identifica quiénes son los legitimarios.',
			'Calcula la legítima y la mejora.',
			'Comprueba el usufructo del viudo.',
			'Motiva la causa de desheredación.',
			'Reúne pruebas de los hechos.',
		],
		faq: [
			{
				question: '¿Puedo desheredar a un hijo sin motivo?',
				answer:
					'No. Solo se puede desheredar por alguna de las causas que enumera la ley, expresadas en el testamento y debidamente probadas. Sin causa acreditada, el desheredado conserva su legítima.',
			},
			{
				question: '¿Cuánto es la legítima de los hijos?',
				answer:
					'Dos tercios de la herencia: un tercio de legítima estricta que se reparte por igual y un tercio de mejora que el testador puede asignar entre descendientes. El otro tercio es de libre disposición.',
			},
			{
				question: '¿Qué pasa si la desheredación es injusta?',
				answer:
					'Se puede impugnar. Si la causa no se acredita en el procedimiento, la desheredación se deja sin efecto y el heredero forzoso recupera la legítima que le corresponde.',
			},
		],
		relatedServices: [
			{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
			{ path: '/disputas-herencias', label: 'disputas de herencia' },
			{ path: '/blog/tipos-de-testamento', label: 'tipos de testamento' },
		],
	},
	{
		slug: 'arras-compraventa-vivienda',
		title: 'Arras en la compraventa de vivienda: tipos y efectos',
		description:
			'Qué son las arras penitenciales, confirmatorias y penales, cuándo se devuelven el doble y qué pasa si una parte se echa atrás en la compra.',
		date: '2026-10-06',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'Entregar una señal al reservar una vivienda es habitual, pero no todas las arras tienen el mismo efecto: según cómo se pacten, su función cambia y con ella la consecuencia de que comprador o vendedor se eche atrás.',
		sections: [
			{
				heading: 'Qué son las arras',
				paragraphs: [
					'Las arras son la cantidad que una parte entrega a la otra al iniciar la compraventa, como señal o garantía. Su régimen no es automático: depende de lo que se haya pactado y del tipo de arras de que se trate.',
					'Existen tres tipos: penitenciales, confirmatorias y penales. Distinguirlos es esencial, porque las consecuencias de incumplir son muy distintas.',
				],
			},
			{
				heading: 'Arras penitenciales',
				paragraphs: [
					'Las arras penitenciales permiten desistir del contrato: si desiste el comprador, pierde la cantidad entregada; si desiste el vendedor, debe devolverla doblada. Es el tipo más habitual en la compraventa de vivienda entre particulares.',
					'Por eso conviene que el contrato diga con claridad si las arras son penitenciales, porque de ello depende que se pueda o no romper el acuerdo.',
				],
			},
			{
				heading: 'Confirmatorias y penales',
				paragraphs: [
					'Las arras confirmatorias son una señal del contrato ya perfeccionado y se descuentan del precio; si hay incumplimiento, se exige el cumplimiento o la resolución con indemnización de daños.',
					'Las penales fijan de antemano la indemnización por incumplimiento, sin sustituir la obligación de cumplir salvo pacto en contra.',
				],
			},
			{
				heading: 'Qué pasa si se incumple',
				paragraphs: [
					'Con arras penitenciales, el incumplidor se atiene a perder lo entregado o a devolverlo doblado, sin más indemnización. Con las confirmatorias, la parte que cumple puede exigir el cumplimiento forzoso o resolver con daños.',
					'La calificación de las arras puede discutirse en juicio si el contrato no es claro, lo que alarga el conflicto y encarece la reclamación.',
				],
			},
			{
				heading: 'Cómo se redactan',
				paragraphs: [
					'El contrato debe indicar el tipo de arras, el importe, el plazo para firmar la escritura y las condiciones de la operación. Una cláusula mal redactada genera dudas sobre la voluntad de las partes.',
					'Fijar por escrito qué ocurre en caso de no obtener financiación o de defectos en la vivienda evita conflictos posteriores.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'El error más común es entregar la señal sin contrato o con un documento que no aclara el tipo de arras. También lo es creer que siempre se recupera lo entregado si la compra no se cierra.',
					'Revisar el contrato antes de firmar y dejar claro el régimen de las arras es la mejor protección para ambas partes.',
				],
			},
		],
		checklist: [
			'Deja por escrito el tipo de arras.',
			'Fija el plazo para la escritura.',
			'Acuerda qué pasa sin financiación.',
			'Guarda el contrato y los justificantes.',
			'Revisa la vivienda antes de firmar.',
		],
		faq: [
			{
				question: '¿Qué pasa si me echo atrás tras dar las arras?',
				answer:
					'Depende del tipo pactado. Si son penitenciales, el comprador pierde la cantidad y el vendedor debe devolverla doblada. Si son confirmatorias, la otra parte puede exigir el cumplimiento o indemnización.',
			},
			{
				question: '¿Las arras descontan del precio?',
				answer:
					'Sí, en la compraventa las arras entregadas se descuentan del precio en el momento de la escritura. Su función es servir de señal y de garantía del acuerdo.',
			},
			{
				question: '¿Tengo que firmar un contrato para dar arras?',
				answer:
					'Es muy recomendable. Un contrato que fije el tipo de arras, el plazo y las condiciones evita discusiones sobre la voluntad de las partes y sobre las consecuencias del incumplimiento.',
			},
		],
		relatedServices: [
			{ path: '/incumplimiento-contrato', label: 'incumplimiento de contrato' },
			{ path: '/derecho-civil', label: 'asesoramiento civil' },
			{ path: '/blog/como-reclamar-incumplimiento-contrato', label: 'reclamar un incumplimiento' },
		],
	},
	{
		slug: 'sl-o-autonomo',
		title: 'Montar una SL o ser autónomo: qué conviene en 2026',
		description:
			'Ventajas y costes de constituir una sociedad limitada frente a darse de alta como autónomo: responsabilidad, impuestos, cuota y trámites.',
		date: '2026-10-06',
		category: 'Empresas',
		readTime: '8 min',
		intro: 'Elegir entre sociedad limitada y trabajo por cuenta propia condiciona la fiscalidad, la responsabilidad y los costes desde el primer día. La decisión no depende solo de los ingresos, sino de cuánto riesgo se asume y cómo se quiere crecer.',
		sections: [
			{
				heading: 'La diferencia esencial',
				paragraphs: [
					'El autónomo responde de sus deudas con todo su patrimonio personal, mientras que en una sociedad limitada la responsabilidad se limita, en principio, al capital aportado. Esa es la diferencia que más pesa cuando el negocio tiene riesgo.',
					'A cambio, la sociedad exige más formalidades, contabilidad y costes de mantenimiento que el trabajo por cuenta propia.',
				],
			},
			{
				heading: 'Cuándo conviene ser autónomo',
				paragraphs: [
					'El alta como autónomo es rápida y barata, y encaja en actividades con poco riesgo, inversión reducida y facturación moderada. La contabilidad es más sencilla y no requiere constituir una sociedad.',
					'Es una buena opción para empezar y cambiar luego, siempre que el nivel de riesgo personal sea asumible.',
				],
			},
			{
				heading: 'Cuándo conviene una SL',
				paragraphs: [
					'La sociedad limitada protege el patrimonio personal frente a las deudas del negocio y facilita la entrada de socios o inversores. También permite ordenar la retribución entre sueldo y dividendos.',
					'Cuando la actividad maneja volúmenes altos, tiene empleados o asume riesgos, la protección de la SL suele compensar sus costes.',
				],
			},
			{
				heading: 'Impuestos y cotizaciones',
				paragraphs: [
					'El autónomo tributa por el IRPF según sus rendimientos y cotiza por la cuota de autónomos según tramos de ingresos. La sociedad tributa por el Impuesto de Sociedades y sus socios, además, por los sueldos y dividendos que reciben.',
					'La comparación real exige sumar la fiscalidad de la sociedad y la de sus socios, no solo el tipo del Impuesto de Sociedades.',
				],
			},
			{
				heading: 'Costes y trámites',
				paragraphs: [
					'Constituir una SL implica notaría, registro, denominación social y, en su caso, aportación de capital, además de la contabilidad anual y las cuentas depositadas. El autónomo se da de alta y cumple sus obligaciones fiscales sin esa estructura.',
					'Estos costes son recurrentes y hay que valorarlos antes de decidir la forma jurídica.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'Constituir una SL solo por imagen y sin evaluar los costes, o quedarse de autónomo asumiendo un riesgo alto por ahorrar en gestión, son errores habituales.',
					'Lo prudente es calcular la fiscalidad y el riesgo de cada opción y revisar la decisión cuando el negocio cambie de tamaño.',
				],
			},
		],
		checklist: [
			'Mide el riesgo personal de la actividad.',
			'Compara la fiscalidad completa de cada opción.',
			'Calcula los costes anuales de mantener la SL.',
			'Valora la entrada de socios.',
			'Revisa la decisión si cambia el volumen.',
		],
		faq: [
			{
				question: '¿Es mejor una SL para pagar menos impuestos?',
				answer:
					'No necesariamente. Hay que sumar el Impuesto de Sociedades y la fiscalidad de los socios por sueldos y dividendos, además de los costes de mantenimiento. Depende del beneficio y de cómo se reparta.',
			},
			{
				question: '¿El autónomo responde con su patrimonio?',
				answer:
					'Sí. El trabajador por cuenta propia responde de las deudas de su actividad con todo su patrimonio, sin el límite que ofrece una sociedad limitada.',
			},
			{
				question: '¿Puedo empezar de autónomo y luego crear la SL?',
				answer:
					'Sí, es frecuente. Muchos negocios arrancan como autónomos y constituyen la sociedad cuando crece el volumen, el riesgo o se incorporan socios.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'asesoría de empresas' },
			{ path: '/empresas/constitucion-sociedades', label: 'constitución de sociedades' },
			{ path: '/blog/cuanto-cuesta-constituir-sl-2026', label: 'cuánto cuesta constituir una SL' },
		],
	},
	{
		slug: 'reagrupacion-familiar',
		title: 'Reagrupación familiar: requisitos y cómo se tramita',
		description:
			'Quién puede reagrupar, qué familiares entran, los requisitos de vivienda e ingresos y los plazos del expediente de reagrupación familiar.',
		date: '2026-10-06',
		category: 'Extranjería',
		readTime: '8 min',
		intro: 'La reagrupación familiar permite a quien reside legalmente en España traer a su cónyuge, hijos o ascendientes cumpliendo unos requisitos de vivienda, medios económicos y convivencia. Preparar bien el expediente evita denegaciones por defectos formales.',
		sections: [
			{
				heading: 'Quién puede reagrupar',
				paragraphs: [
					'Puede reagrupar quien tiene autorización de residencia renovada y acredita un periodo de residencia legal, entre otros requisitos. También debe demostrar medios económicos suficientes y una vivienda adecuada.',
					'El reagrupante asume el compromiso de atender las necesidades de los familiares que trae, lo que se valora en el expediente.',
				],
			},
			{
				heading: 'Qué familiares se pueden reagrupar',
				paragraphs: [
					'Es habitual reagrupar al cónyuge o pareja, a los hijos menores o con discapacidad y, en determinados supuestos, a los hijos mayores y a los ascendientes a cargo del reagrupante.',
					'Cada supuesto tiene requisitos propios de edad, dependencia y grado de discapacidad que conviene comprobar antes de presentar la solicitud.',
				],
			},
			{
				heading: 'Requisitos de vivienda e ingresos',
				paragraphs: [
					'La vivienda debe reunir las condiciones de habitabilidad y espacio que exige la normativa, acreditada con el informe correspondiente. Los ingresos deben superar el indicador público de renta de efectos múltiples (IPREM) en la proporción que corresponda.',
					'La estabilidad de los ingresos y su acreditación documental son determinantes para que la solicitud prospere.',
				],
			},
			{
				heading: 'Cómo se solicita',
				paragraphs: [
					'El procedimiento se inicia en la oficina de extranjería con la documentación del reagrupante y se continúa, una vez autorizada, con la solicitud de visado por el familiar en el consulado de su país.',
					'Reunir toda la documentación traducida y legalizada desde el principio evita requerimientos que alargan el expediente.',
				],
			},
			{
				heading: 'Plazos y renovaciones',
				paragraphs: [
					'La autorización de residencia por reagrupación se concede inicialmente por un periodo y se renueva si se mantienen los requisitos. Los familiares reagrupados obtienen su propia autorización.',
					'Es importante vigilar las fechas de renovación para no perder la situación legal.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'Las denegaciones suelen deberse a ingresos insuficientes, vivienda inadecuada o documentación defectuosa. También a no acreditar correctamente el vínculo familiar o la dependencia de los ascendientes.',
					'Preparar el expediente con antelación y revisar cada requisito antes de presentarlo mejora mucho las opciones de autorización.',
				],
			},
		],
		checklist: [
			'Comprueba tu residencia y periodo legal.',
			'Reúne los ingresos exigidos.',
			'Consigue el informe de vivienda.',
			'Acredita el vínculo familiar.',
			'Traduce y legaliza los documentos.',
		],
		faq: [
			{
				question: '¿Qué ingresos hay que acreditar para reagrupar?',
				answer:
					'Los ingresos deben superar el IPREM en la proporción que exige la normativa según el número de familiares. Además, deben ser estables y acreditarse documentalmente.',
			},
			{
				question: '¿Cuánto se tarda en resolver?',
				answer:
					'El plazo depende de la administración y de la complejidad del expediente. Una documentación completa y bien acreditada reduce los requerimientos y acorta los tiempos.',
			},
			{
				question: '¿Puedo reagrupar a mis padres?',
				answer:
					'En determinados supuestos sí, cuando están a cargo del reagrupante y se cumplen los requisitos de dependencia. Cada caso se valora con la documentación que acredite esa situación.',
			},
		],
		relatedServices: [
			{ path: '/nacionalidad-extranjeria', label: 'nacionalidad y extranjería' },
			{ path: '/blog/prorroga-estancia-y-renovacion', label: 'prórroga de estancia y renovación' },
			{ path: '/blog/nacionalidad-por-residencia-malaga', label: 'nacionalidad por residencia' },
		],
	},
	{
		slug: 'segunda-oportunidad',
		title: 'Ley de segunda oportunidad: cancelar deudas paso a paso',
		description:
			'Cómo funciona la ley de segunda oportunidad para cancelar deudas: requisitos, acuerdo extrajudicial de pagos, concurso y qué deudas se perdonan.',
		date: '2026-10-06',
		category: 'Consumo y banca',
		readTime: '8 min',
		intro: 'La segunda oportunidad permite a particulares y autónomos sobreendeudados cancelar las deudas que no pueden pagar tras un procedimiento ordenado. No es un perdón automático: hay que cumplir requisitos, intentar un acuerdo y pasar por el juez.',
		sections: [
			{
				heading: 'Qué es la segunda oportunidad',
				paragraphs: [
					'Es el mecanismo legal que permite a una persona física, deudora de buena fe, liberarse de las deudas que no puede asumir tras un procedimiento de insolvencia. Sustituye a la antigua idea de que las deudas acompañan de por vida.',
					'No borra todas las deudas ni permite ocultar bienes: exige actuar de buena fe y someterse a un orden legal.',
				],
			},
			{
				heading: 'Quién puede acogerse',
				paragraphs: [
					'Pueden acogerse las personas físicas, incluidas las que han sido autónomos, que acreditan insolvencia y han actuado de buena fe. La ley exige intentar un acuerdo de pago antes de acudir al concurso.',
					'La buena fe se aprecia con criterios objetivos, y su ausencia es la causa más habitual de que la exoneración se deniegue.',
				],
			},
			{
				heading: 'El acuerdo extrajudicial de pagos',
				paragraphs: [
					'El primer paso es intentar un acuerdo con los acreedores para reestructurar la deuda, con la intervención de un mediador concursal. Si se alcanza, el deudor cumple el plan y puede acceder a la exoneración.',
					'Si el acuerdo no prospera, el procedimiento desemboca en el concurso consecutivo.',
				],
			},
			{
				heading: 'El concurso consecutivo',
				paragraphs: [
					'En el concurso se liquidan los bienes del deudor y se ordenan los pagos según la prelación legal. Al final, si concurren los requisitos, se puede solicitar la exoneración del pasivo insatisfecho.',
					'Existe una vía con plan de pagos, que permite conservar algunos bienes cumpliendo un plan durante unos años.',
				],
			},
			{
				heading: 'Qué deudas se cancelan',
				paragraphs: [
					'La exoneración alcanza la mayor parte de las deudas, pero hay excepciones legales, como determinados créditos públicos o las deudas por responsabilidad extracontractual o alimentos, según los casos.',
					'El alcance exacto depende del tipo de procedimiento y de las circunstancias del deudor, por lo que conviene analizarlo con detalle.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'El error más común es pedir la exoneración sin haber intentado el acuerdo previo o sin acreditar la insolvencia y la buena fe. También lo es ocultar bienes o deudas, que puede hacer perder el beneficio.',
					'Ordenar las deudas, documentar la situación y seguir el procedimiento en su orden son imprescindibles para que la cancelación prospere.',
				],
			},
		],
		checklist: [
			'Haz una lista completa de tus deudas.',
			'Comprueba si actúas de buena fe.',
			'Intenta el acuerdo extrajudicial de pagos.',
			'Acredita tu insolvencia.',
			'No ocultes bienes ni deudas.',
		],
		faq: [
			{
				question: '¿Se cancelan todas las deudas?',
				answer:
					'No todas. La exoneración alcanza la mayor parte, pero quedan fuera determinados créditos por excepción legal, según el procedimiento y las circunstancias del deudor. Hay que analizar cada caso.',
			},
			{
				question: '¿Puedo acogerme si soy autónomo?',
				answer:
					'Sí. La segunda oportunidad está pensada también para autónomos y personas físicas que han desarrollado una actividad, siempre que acrediten insolvencia y buena fe.',
			},
			{
				question: '¿Hace falta ir a juicio?',
				answer:
					'El procedimiento pasa por el juez, pero primero se intenta un acuerdo de pagos extrajudicial. Si no se alcanza, el asunto continúa en el concurso consecutivo ante el juzgado.',
			},
		],
		relatedServices: [
			{ path: '/consumo', label: 'derecho de consumo' },
			{ path: '/cobro-deudas-impagos', label: 'deudas e impagos' },
			{ path: '/reclamaciones-bancarias', label: 'reclamaciones bancarias' },
		],
	},
	{
		slug: 'delito-leve',
		title: 'Delito leve: qué es y cómo se juzga',
		description:
			'Qué es un delito leve, en qué se diferencia de los delitos graves, cómo se tramita el juicio y qué consecuencias tiene para el investigado.',
		date: '2026-10-06',
		category: 'Derecho Penal',
		readTime: '7 min',
		intro: 'No todo ilícito penal se juzga igual: los delitos leves son las infracciones más leves del Código Penal y tienen un procedimiento más rápido, con reglas propias sobre denuncia, plazos y consecuencias. Distinguirlos evita errores al denunciar o al defenderse.',
		sections: [
			{
				heading: 'Qué es y qué no es',
				paragraphs: [
					'El delito leve es la infracción penal de menor gravedad, castigada con penas leves como multa o trabajos en beneficio de la comunidad. La antigua falta desapareció y su contenido se integró en esta categoría.',
					'No debe confundirse con las infracciones administrativas, que se tramitan ante la Administración y no ante el juez penal.',
				],
			},
			{
				heading: 'Ejemplos de delitos leves',
				paragraphs: [
					'Son delitos leves, entre otros, las lesiones que no requieren tratamiento médico, las amenazas y coacciones leves, el hurto de escasa cuantía o determinados daños de pequeño importe.',
					'La frontera con el delito menos grave depende de la gravedad del hecho, del resultado y del valor de lo sustraído.',
				],
			},
			{
				heading: 'Denuncia y plazos',
				paragraphs: [
					'El delito leve persigue con la denuncia de la persona ofendida, salvo los casos en que la ley permite la actuación de oficio. La denuncia se presenta ante la policía, el juzgado o el Ministerio Fiscal.',
					'Los plazos de prescripción son más cortos que en los delitos graves, y determinar el momento y la forma de denunciar es importante para no perder la acción.',
				],
			},
			{
				heading: 'El juicio de delito leve',
				paragraphs: [
					'El procedimiento es más ágil que el del juicio ordinario: se celebra ante el juez de instrucción o de violencia sobre la mujer y se resuelve en una vista con prueba y conclusiones.',
					'No exige la intervención de abogado y procurador en todos los supuestos, aunque contar con defensa técnica mejora la posición.',
				],
			},
			{
				heading: 'Consecuencias y antecedentes',
				paragraphs: [
					'La condena por delito leve puede conllevar multa, trabajos en beneficio de la comunidad, privación del derecho a conducir o localización permanente, según el caso.',
					'A efectos de antecedentes penales y de reincidencia, su tratamiento es más limitado que el de los delitos graves, pero no conviene ignorarlo.',
				],
			},
			{
				heading: 'Errores frecuentes',
				paragraphs: [
					'El error más habitual es dejar pasar el plazo para denunciar o no aportar pruebas del hecho. También lo es acudir a la vista sin preparar el relato y sin testigos.',
					'Documentar lo ocurrido, conservar pruebas y valorar la vía adecuada evita que el asunto quede sin respuesta.',
				],
			},
		],
		checklist: [
			'Comprueba la gravedad del hecho.',
			'Denuncia dentro de plazo.',
			'Reúne pruebas y testigos.',
			'Valora si hace falta abogado.',
			'Prepárate para la vista.',
		],
		faq: [
			{
				question: '¿Cuál es la diferencia con un delito menos grave?',
				answer:
					'El delito leve tiene menor gravedad y penas más suaves, y un procedimiento más rápido. La calificación depende del hecho, del resultado y del valor de lo sustraído o dañado.',
			},
			{
				question: '¿Necesito abogado para un delito leve?',
				answer:
					'No es obligatorio en todos los supuestos, pero contar con defensa técnica ayuda a preparar la prueba y a plantear la estrategia. En algunos casos conlleva consecuencias relevantes.',
			},
			{
				question: '¿Hay que denunciar para que se persiga?',
				answer:
					'Por regla general el delito leve persigue con la denuncia del ofendido, salvo los supuestos en que la ley permite actuar de oficio. Conviene denunciar dentro del plazo legal.',
			},
		],
		relatedServices: [
			{ path: '/derecho-penal', label: 'defensa penal' },
			{ path: '/blog/denuncias-falsas', label: 'defensa frente a denuncias falsas' },
			{ path: '/blog/multas-penales-suspension-condenas', label: 'multas penales y suspensión' },
		],
	},
];
