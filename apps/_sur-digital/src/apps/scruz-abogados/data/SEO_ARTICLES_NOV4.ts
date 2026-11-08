/**
 * Cuarto lote de nov 2026. Tres huecos con demanda real y sin guía propia:
 *
 *   - `plusvalia-municipal-reclamacion`: el blog trata la herencia y la
 *     compraventa, pero no el impuesto que llega después en ambos casos, que es
 *     además el tributo municipal que más consultas genera.
 *   - `monitorio-reclamacion-deudas`: hay guías de impagos entre empresas, pero
 *     ninguna explica el cauce procesal para cobrar sin juicio ordinario.
 *   - `tutela-curatela-discapacidad`: la reforma de 2021 cambió por completo el
 *     sistema de apoyos y no había nada publicado sobre curatela ni poderes
 *     preventivos, pese a ser consulta habitual de familia.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_NOV4: SeoArticle[] = [
	{
		slug: 'plusvalia-municipal-reclamacion',
		title: 'Plusvalía municipal: cuándo se paga y cómo reclamarla',
		description:
			'Cuándo nace la plusvalía municipal al vender o heredar, cómo se calcula con las dos fórmulas vigentes y cómo reclamar una liquidación que no corresponde.',
		date: '2026-11-03',
		category: 'Herencias',
		readTime: '8 min',
		intro: 'La plusvalía municipal es el impuesto que más sorpresas da después de vender o heredar: llega semanas más tarde, lo gira el ayuntamiento y no siempre se debe. Desde la reforma de 2021 hay dos formas de calcularlo y una regla que lo cambia todo: si el suelo no se ha revalorizado, no hay impuesto que pagar.',
		sections: [
			{
				heading: 'Qué grava y cuándo nace la obligación',
				paragraphs: [
					'Grava el incremento de valor de los terrenos de naturaleza urbana que se pone de manifiesto cuando se transmite la propiedad: una venta, una donación o una herencia. El impuesto corresponde al ayuntamiento del municipio donde está el inmueble y se liquida por la transmisión, no por el contrato privado.',
					'No se devenga en cualquier cambio registral: solo cuando hay una transmisión real del terreno. Una escritura de adjudicación de herencia, una compraventa o una donación sí lo generan; una hipoteca, una segregación sin transmisión o un cambio de titularidad catastral sin negocio jurídico, en principio no.',
				],
			},
			{
				heading: 'Las dos fórmulas y la regla que decide',
				paragraphs: [
					'Desde el real decreto-ley de 2021 conviven dos métodos. El objetivo aplica unos coeficientes anuales al valor catastral del suelo según los años de tenencia; el real compara el valor de transmisión con el de adquisición y grava la diferencia. El contribuyente puede elegir el que resulte menor.',
					'Y por encima de ambos rige la regla fijada por el Tribunal Constitucional: si no existe incremento de valor del terreno, no hay hecho imponible y no se puede girar el impuesto. Comprobarlo exige los títulos de adquisición y de transmisión, no solo el recibo catastral.',
				],
			},
			{
				heading: 'Quién paga y qué bonificaciones existen',
				paragraphs: [
					'En las transmisiones onerosas es sujeto pasivo quien transmite; en las mortis causa, quien recibe. En las donaciones la regla varía según el caso y conviene revisarla antes de firmar, porque de ella depende quién recibe la liquidación.',
					'Muchos ayuntamientos aprueban una bonificación de hasta el 95 % en las transmisiones mortis causa de la vivienda habitual del fallecido a favor de herederos y legatarios, con requisitos propios. No es automática: hay que solicitarla y acreditar el cumplimiento de las condiciones en el plazo de la autoliquidación.',
				],
			},
			{
				heading: 'Plazos: 30 días para vender, 6 meses para heredar',
				paragraphs: [
					'En las transmisiones onerosas y en las donaciones el plazo para presentar la autoliquidación es de 30 días hábiles desde la formalización. En las herencias el plazo es de seis meses desde el fallecimiento, prorrogable otros seis si se solicita dentro del primer plazo.',
					'Presentar tarde no elimina la deuda: añade recargos e intereses. Y no presentar tampoco impide que el ayuntamiento liquide después, con la comprobación correspondiente. Si el inmueble se vendió o heredó hace meses y no hay notificación, conviene comprobar la situación antes de que llegue el requerimiento.',
				],
			},
			{
				heading: 'Cómo revisar y reclamar una liquidación',
				paragraphs: [
					'Lo primero es pedir el expediente y comprobar cuatro datos: la fecha de devengo, el valor catastral del suelo aplicado, los coeficientes usados y si se acreditó o no el incremento real. Un error en cualquiera de ellos cambia la cuota.',
					'Contra la liquidación cabe recurso de reposición ante el propio ayuntamiento en el plazo de un mes y, después, reclamación económico-administrativa. Si ya pagaste y la liquidación era incorrecta, cabe la devolución de ingresos indebidos, con un plazo de cuatro años desde el ingreso. Y si se aplicó el método objetivo cuando el real arrojaba una cuota menor, procede instar la rectificación.',
				],
			},
			{
				heading: 'Errores que cuestan dinero',
				paragraphs: [
					'Pagar sin comprobar si hubo incremento real; no solicitar la bonificación mortis causa por desconocerla; confundir la plusvalía municipal con la ganancia patrimonial del IRPF, que es otra figura y se declara aparte; o dar por buenos los coeficientes sin verificar que corresponden al año de la transmisión.',
					'También es un error habitual firmar la venta sin haber previsto quién asume la plusvalía y sin calcularla, algo que en una compraventa con margen estrecho puede llevarse buena parte del beneficio. Revisar la cuota antes de firmar es más barato que reclamar después.',
				],
			},
		],
		checklist: [
			'Comprueba si el suelo se ha revalorizado antes de pagar.',
			'Pide el expediente con coeficientes y valores catastrales.',
			'Compara el método objetivo con el real y elige el menor.',
			'Revisa si tu ayuntamiento bonifica las herencias.',
			'Respeta los 30 días hábiles o los 6 meses según el caso.',
		],
		faq: [
			{
				question: '¿Tengo que pagar plusvalía si vendo la casa más barata de lo que la compré?',
				answer:
					'En principio no, porque no hay incremento de valor del terreno. Hay que acreditarlo con los títulos de adquisición y transmisión y, si el ayuntamiento gira la liquidación, reclamarla dentro de plazo. No basta con decirlo: hay que documentarlo.',
			},
			{
				question: '¿Cuánto tiempo tengo para reclamar una plusvalía mal calculada?',
				answer:
					'Un mes para el recurso de reposición desde la notificación y, si ya pagaste, cuatro años para solicitar la devolución de ingresos indebidos. Pasados esos plazos la reclamación se complica mucho.',
			},
			{
				question: '¿La plusvalía se paga también al heredar?',
				answer:
					'Sí, si el terreno se ha revalorizado, aunque muchos ayuntamientos aplican una bonificación de hasta el 95 % cuando se transmite la vivienda habitual del fallecido a herederos. Esa bonificación debe solicitarse y cumplir requisitos municipales.',
			},
		],
		relatedServices: [
			{ path: '/impuestos-herencia', label: 'impuestos de la herencia' },
			{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
			{ path: '/derecho-civil', label: 'compraventa y contratos' },
		],
	},
	{
		slug: 'monitorio-reclamacion-deudas',
		title: 'Proceso monitorio: cómo reclamar una deuda sin juicio',
		description:
			'Cómo funciona el proceso monitorio para cobrar una deuda impagada: documentos que sirven, plazo de 20 días, oposición del deudor y ejecución si no paga.',
		date: '2026-11-03',
		category: 'Empresas',
		readTime: '7 min',
		intro: 'Cobrar una factura impagada no exige demandar como en un juicio completo. El proceso monitorio permite pedir al juzgado que requiera de pago al deudor con un documento que acredite la deuda, y si no responde, se abre directamente la ejecución. Es rápido, barato y, bien planteado, resuelve la mayoría de los impagos sin vista.',
		sections: [
			{
				heading: 'Qué es y qué deudas admite',
				paragraphs: [
					'Sirve para reclamar deudas dinerarias, líquidas, vencidas y exigibles, documentadas, de cuantía no superior a 250.000 euros. El cauce es escrito y no hay juicio ni vista en esta fase: el juzgado requiere al deudor para que pague o se oponga.',
					'Es la vía natural para facturas impagadas entre empresas, préstamos entre particulares, alquileres vencidos, honorarios y compraventas con entrega acreditada. Quedan fuera las deudas ilíquidas o las que exigen una discusión compleja de fondo.',
				],
			},
			{
				heading: 'Qué documento sirve para acreditar la deuda',
				paragraphs: [
					'No se exige un contrato firmado ni una sentencia: basta un documento del que resulte la deuda, aunque sea factura, albarán, presupuesto aceptado, correo o mensaje donde se reconoce el importe. La ley no pide prueba plena en esta fase, sino un principio de prueba documental.',
					'Cuanto más sólida sea la cadena —pedido, entrega, factura, reclamación y respuesta—, menos margen tendrá el deudor para oponerse con éxito. En la práctica, la mayoría de los monitorios se pierden por documentación desordenada, no por falta de derecho.',
				],
			},
			{
				heading: 'Dónde se presenta y qué cuesta',
				paragraphs: [
					'Es competente el juzgado del domicilio del deudor, o el del lugar donde deba cumplirse la obligación si se pactó. Para cuantías inferiores a 2.000 euros no hacen falta abogado ni procurador; por encima, sí, y conviene valorarlo porque también se repercute en costas si se gana.',
					'Las personas jurídicas pueden estar sujetas a tasa judicial, y hay que sumar los honorarios de abogado y procurador. Aun así, frente a un impago cierto, el monitorio suele ser la opción más económica: la alternativa es un juicio declarativo con más coste y más tiempo.',
				],
			},
			{
				heading: 'El requerimiento y los 20 días',
				paragraphs: [
					'Admitida la petición, el juzgado requiere al deudor para que pague en el plazo de 20 días hábiles o se oponga por escrito. Si paga, el procedimiento termina; si no hace nada, se dicta auto de título ejecutivo y se abre la ejecución.',
					'La oposición debe presentarse en plazo y con fundamento: pago, compensación, prescripción, falta de legitimación o discrepancia sobre la deuda. No basta con no contestar, y una oposición genérica puede rechazarse, pero si prospera el asunto pasa a juicio verbal u ordinario según la cuantía.',
				],
			},
			{
				heading: 'Si no paga: ejecución y embargo',
				paragraphs: [
					'Con el título ejecutivo se pide la ejecución y el juzgado investiga bienes: cuentas bancarias, nóminas, vehículos, inmuebles o créditos frente a terceros. El embargo tiene límites legales de inembargabilidad, pero alcanza salarios y cuentas por encima del mínimo.',
					'La ejecución no es automática: hay que instarla y aportar los datos del patrimonio del deudor que se conozcan. Cuanto mejor sea esa información, más rápido se cobra. Y si aparece una insolvencia real, hay que valorar el concurso o asumir que la deuda es incobrable.',
				],
			},
			{
				heading: 'Errores frecuentes y alternativas',
				paragraphs: [
					'Los errores más caros: reclamar una cantidad mal calculada —intereses y costas incluidos—, presentar documentación que no identifica al deudor, dejar pasar la prescripción o ignorar una oposición hasta que el asunto pasa a juicio sin pruebas preparadas.',
					'Antes de presentar, conviene un requerimiento fehaciente que interrumpa la prescripción y abra la puerta a un acuerdo de pago. Si el deudor es solvente y la deuda está clara, el monitorio suele cobrar sin más; si hay conflicto real sobre el fondo, a veces compensa plantear directamente el juicio que corresponda.',
				],
			},
		],
		checklist: [
			'Reúne factura, entrega y reclamación previa por escrito.',
			'Comprueba que la deuda es líquida, vencida y exigible.',
			'Calcula intereses y costas antes de fijar la cuantía.',
			'Identifica el domicilio correcto del deudor.',
			'Valora la solvencia antes de gastar en ejecución.',
		],
		faq: [
			{
				question: '¿Puedo reclamar sin contrato firmado?',
				answer:
					'Sí, si aportas documentos de los que resulte la deuda: facturas, albaranes, presupuestos aceptados o mensajes donde se reconoce el importe. El juzgado no exige prueba plena en esta fase, pero la documentación debe identificar la deuda y al deudor.',
			},
			{
				question: '¿Qué pasa si el deudor se opone?',
				answer:
					'El monitorio se transforma en juicio verbal u ordinario según la cuantía y allí se discute el fondo con prueba. Por eso conviene preparar desde el principio la documentación que demuestre la entrega y el impago.',
			},
			{
				question: '¿Cuánto tarda en cobrarse?',
				answer:
					'Depende del juzgado y de si hay oposición. Sin oposición, entre el requerimiento y el título ejecutivo suelen pasar semanas; con embargo, meses. Si hay oposición, se añade el tiempo del juicio correspondiente.',
			},
		],
		relatedServices: [
			{ path: '/empresas', label: 'reclamación de impagos para empresas' },
			{ path: '/blog/impagos-entre-empresas', label: 'impagos entre empresas' },
			{ path: '/derecho-civil', label: 'reclamaciones civiles de cantidad' },
		],
	},
	{
		slug: 'tutela-curatela-discapacidad',
		title: 'Tutela y curatela: quién decide y cómo se pide',
		description:
			'Qué apoyos existen tras la reforma de 2021, cuándo procede la curatela, cuándo la tutela y cómo se solicita el nombramiento ante el juzgado.',
		date: '2026-11-03',
		category: 'Derecho de Familia',
		readTime: '8 min',
		intro: 'Desde 2021 nadie es «incapacitado» en España: la ley sustituyó ese sistema por apoyos que respetan la voluntad de la persona. Pero la reforma no ha eliminado la curatela ni la tutela, y sigue habiendo que decidir quién administra, quién firma y ante quién responde quien ayuda. Entender esa diferencia evita pleitos familiares y actos nulos.',
		sections: [
			{
				heading: 'Qué cambió con la reforma de 2021',
				paragraphs: [
					'La ley 8/2021 eliminó la incapacitación judicial y la patria potestad prorrogada como figuras generales. La persona conserva su capacidad jurídica y el juzgado, cuando hace falta, establece medidas de apoyo para que pueda ejercerla en igualdad de condiciones.',
					'El cambio de enfoque importa en la práctica: ya no se trata de decidir «por» la persona, sino de apoyarla para que decida. Los actos que se hagan sin ese apoyo, cuando era necesario, pueden impugnarse; y quien apoya no puede sustituir la voluntad sin más.',
				],
			},
			{
				heading: 'La curatela: el apoyo general',
				paragraphs: [
					'Es la medida principal para personas adultas que necesitan asistencia estable. El curador no representa a la persona en todos los actos: interviene en los que la resolución judicial determine, según el grado de necesidad, y siempre buscando la voluntad y las preferencias del afectado.',
					'Puede recaer en un familiar, en otra persona idónea o en una entidad sin ánimo de lucro. El nombramiento conlleva obligaciones: rendir cuentas, actuar con diligencia y solicitar autorización judicial para actos relevantes, como la venta de la vivienda o el cobro de indemnizaciones importantes.',
				],
			},
			{
				heading: 'La tutela: cuándo sigue existiendo',
				paragraphs: [
					'La tutela se mantiene para menores no emancipados sin patria potestad y, en el caso de adultos, solo de forma excepcional, cuando la curatela no resulte suficiente para la situación concreta. No es la figura por defecto ni se solicita por comodidad de la familia.',
					'El tutor representa a la persona en los actos que la ley y la resolución señalan, y su actuación está sometida a control judicial. Si un adulto puede decidir con apoyo, la tutela no procede: pedirla cuando basta la curatela suele acabar en denegación.',
				],
			},
			{
				heading: 'Poderes preventivos y autocuratela',
				paragraphs: [
					'Antes de que aparezca la necesidad, cualquier persona puede otorgar un poder notarial preventivo para que otra la represente si pierde discernimiento, y designar en escritura pública quién quiere que sea su curador y cómo debe actuar. Es la vía más respetuosa con la voluntad propia.',
					'Estos documentos se inscriben en el Registro Civil y permiten evitar en muchos casos el procedimiento judicial. También pueden incluir instrucciones sobre salud, residencia o administración. Hacerlo a tiempo ahorra conflictos y protege la autonomía de la persona.',
				],
			},
			{
				heading: 'Cómo se solicita el nombramiento',
				paragraphs: [
					'Pueden solicitarlo la propia persona, su cónyuge o pareja, sus descendientes, ascendientes o hermanos, y también el Ministerio Fiscal. El procedimiento es de jurisdicción voluntaria, con informe médico, exploración del afectado y audiencia de los interesados.',
					'El juzgado valora la situación real y las preferencias de la persona antes de resolver. Si hay urgencia —riesgo patrimonial, necesidad de una decisión médica o de cobrar una prestación— se pueden pedir medidas provisionales mientras se tramita el expediente.',
				],
			},
			{
				heading: 'Conflictos y obligaciones del apoyo',
				paragraphs: [
					'Los conflictos más frecuentes son entre hermanos por la administración del patrimonio, por el uso de la vivienda familiar o por la rendición de cuentas. La clave es documentar cada decisión y no confundir el apoyo con la titularidad de los bienes: el patrimonio sigue siendo de la persona.',
					'Vender un inmueble, aceptar una herencia o disponer de dinero relevante exige autorización judicial cuando la ley lo impone. Hacerlo sin ella puede invalidar el acto y generar responsabilidad al curador. Antes de firmar nada en nombre de otra persona, conviene revisar la resolución y sus límites.',
				],
			},
		],
		checklist: [
			'Revisa la resolución judicial y los actos que permite.',
			'Documenta la voluntad y las preferencias de la persona.',
			'Pide autorización judicial antes de vender o disponer.',
			'Rinde cuentas de la administración en plazo.',
			'Valora un poder preventivo si aún hay discernimiento.',
		],
		faq: [
			{
				question: '¿Se sigue incapacitando a alguien en España?',
				answer:
					'No. Desde la reforma de 2021 la incapacitación desapareció y se sustituye por medidas de apoyo que respetan la capacidad jurídica de la persona. El juzgado puede nombrar curador o, excepcionalmente, tutor.',
			},
			{
				question: '¿Qué diferencia hay entre tutor y curador?',
				answer:
					'El curador asiste a la persona en los actos que la resolución concreta y no la sustituye en todo. El tutor representa de forma más amplia y se reserva para menores sin patria potestad y para supuestos excepcionales en adultos.',
			},
			{
				question: '¿Puedo decidir quién me representará en el futuro?',
				answer:
					'Sí, mediante un poder preventivo o una autocuratela otorgados en escritura pública, designando a la persona y las instrucciones. Se inscriben en el Registro Civil y suelen evitar el procedimiento judicial.',
			},
		],
		relatedServices: [
			{ path: '/divorcios-separaciones', label: 'familia y conflictos familiares' },
			{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
			{ path: '/derecho-civil', label: 'capacidad y actos jurídicos' },
		],
	},
];
