/**
 * Tercer lote de contenido de nov 2026. Igual contrato que los anteriores:
 * 6 secciones, 5 puntos de checklist, 3 FAQ, 3 servicios relacionados y
 * categorías ya existentes (los hubs los recogen solos).
 *
 *   - `alquiler-de-habitaciones`: el blog cubría alquiler completo, temporada y
 *     zonas tensionadas, pero no el alquiler de una habitación, que es la
 *     fórmula dominante en el entorno universitario de Teatinos (Málaga).
 *   - `resenas-google-derecho-al-honor`: consulta creciente de empresas y
 *     autónomos, sin página que distinga opinión legítima de reseña ilícita.
 *   - `permiso-de-trabajo-cuenta-propia`: extranjería cubría residencia,
 *     arraigo y nacionalidad, pero no la autorización inicial para emprender.
 */
import type { SeoArticle } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES_NOV3: SeoArticle[] = [
	{
		slug: 'alquiler-de-habitaciones',
		title: 'Alquilar una habitación: contrato, fianza y límites legales',
		description:
			'Qué contrato se firma al alquilar una habitación, cómo se fija la renta, qué pasa con la fianza y cuándo el arrendador puede pedir la salida. Guía práctica.',
		date: '2026-11-03',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'Alquilar una habitación no es lo mismo que alquilar un piso, y la diferencia no es un detalle: cambia la ley aplicable, la fianza, la duración del contrato y hasta quién puede entrar en la vivienda. En zonas universitarias como Teatinos, la mayoría de los conflictos nace de contratos de una página que no dicen nada de lo importante.',
		sections: [
			{
				heading: 'Habitación o vivienda: qué contrato se firma',
				paragraphs: [
					'La ley de arrendamientos excluye expresamente la cesión de uso de una habitación cuando el arrendador tiene en esa vivienda su domicilio habitual. En ese caso el contrato es de otra naturaleza y su contenido depende casi por completo de lo pactado, así que la letra escrita pesa más.',
					'Cuando quien alquila la habitación no vive allí —un particular que alquila las habitaciones del piso o una empresa que explota el inmueble—, lo habitual es aplicar la ley de arrendamientos como arrendamiento de parte de una vivienda. Saber en qué supuesto estás decide la fianza, la duración y el derecho a prórroga.',
				],
			},
			{
				heading: 'Qué debe constar en el contrato',
				paragraphs: [
					'La habitación concreta y su mobiliario, las zonas comunes a las que se accede, la renta y la forma de pago, los suministros y gastos incluidos o repercutidos, la fianza, la duración y el preaviso para salir. Todo por escrito y con fecha, aunque la relación sea entre conocidos.',
					'También conviene un inventario con el estado de lo que hay en la habitación y en las zonas compartidas, y las normas de convivencia: visitas, ruido, limpieza y uso de la cocina. No son cláusulas decorativas: son la prueba cuando aparece el primer conflicto.',
				],
			},
			{
				heading: 'Renta, suministros y fianza',
				paragraphs: [
					'La renta es libre entre las partes, pero debe quedar claro si incluye luz, agua, internet y comunidad o si se reparte. Si se repercute, hay que decir cómo se calcula y con qué periodicidad, porque el recibo variable es la primera fuente de discusiones.',
					'La fianza legal equivale a una mensualidad de renta y debe depositarse conforme a la normativa autonómica. Si además se pide una garantía adicional, tiene que estar pactada por escrito. Al finalizar, la fianza se devuelve en el plazo pactado, con el descuento justificado de los daños acreditados.',
				],
			},
			{
				heading: 'Duración, prórroga y salida',
				paragraphs: [
					'Si se aplica la ley de arrendamientos, la duración mínima y la prórroga obligatoria protegen al inquilino, y el arrendador solo puede recuperar la vivienda por las causas legalmente previstas. En el alquiler de habitación en vivienda compartida, esa protección se matiza y el contrato gana peso.',
					'El inquilino puede desistir del contrato cumpliendo el preaviso pactado. Si no se pactó, hay que estar a la ley aplicable. Salir sin preaviso permite reclamar la renta de los meses de preaviso incumplidos, y quedarse sin pagar permite al arrendador resolver el contrato.',
				],
			},
			{
				heading: 'Convivencia: visitas, obras y cambio de cerradura',
				paragraphs: [
					'El arrendador no puede entrar en la habitación siempre que quiera: necesita aviso y consentimiento, salvo urgencia o resolución judicial. Tampoco puede cambiar la cerradura ni retirar pertenencias del inquilino para forzar una salida: eso puede acabar en un procedimiento civil e incluso penal.',
					'Las obras de conservación se avisan y se ejecutan en horario razonable. El inquilino no puede hacer obras que alteren la vivienda sin consentimiento, ni subarrendar la habitación sin autorización escrita si el contrato la exige.',
				],
			},
			{
				heading: 'Conflictos y salida: qué hacer',
				paragraphs: [
					'Ante impago, reunir el contrato, los justificantes y las comunicaciones de requerimiento. Ante daños o falta de devolución de la fianza, el inventario y las fotos fechadas son la prueba. Y si la salida se precipita, dejar constancia escrita del estado de la habitación el día de entrega.',
					'La vía más rápida suele ser el requerimiento escrito y la negociación del saldo; si no hay acuerdo, se acude a la reclamación judicial de cantidad. Con cantidades pequeñas conviene valorar el coste antes de litigar: la reclamación previa bien redactada resuelve más casos de los que parece.',
				],
			},
		],
		checklist: [
			'Firma un contrato con habitación, zonas comunes y duración.',
			'Haz inventario y fotos fechadas del estado inicial.',
			'Deja por escrito qué suministros incluye la renta.',
			'Confirma la fianza, su depósito y el plazo de devolución.',
			'Acuerda el preaviso para salir antes de mudarte.',
		],
		faq: [
			{
				question: '¿Cuánta fianza pueden pedirme por una habitación?',
				answer:
					'La fianza legal equivale a una mensualidad de renta. Cualquier cantidad adicional debe estar pactada por escrito como garantía y no puede confundirse con la renta de los últimos meses; conviene fijar también el plazo de devolución.',
			},
			{
				question: '¿Puede el dueño entrar en mi habitación sin avisar?',
				answer:
					'No, salvo urgencia o resolución judicial. Necesita avisar y contar con tu consentimiento, igual que para enseñar la habitación a otra persona. Cambiar la cerradura o retirar tus cosas para forzar la salida es ilícito.',
			},
			{
				question: '¿Me pueden echar antes de que acabe el contrato?',
				answer:
					'Depende del régimen aplicable y de lo pactado. Si se aplica la ley de arrendamientos, solo por las causas legalmente previstas; si el contrato es de habitación en vivienda del arrendador, manda lo escrito. Un preaviso y una causa válida son imprescindibles en ambos casos.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'contratos de arrendamiento y reclamaciones' },
			{ path: '/alquiler-viviendas', label: 'alquiler de vivienda y conflictos con inquilinos' },
			{ path: '/abogados-en-malaga', label: 'abogados en Málaga (Teatinos)' },
		],
	},
	{
		slug: 'resenas-google-derecho-al-honor',
		title: 'Reseñas en Google y derecho al honor: qué puedes reclamar',
		description:
			'Una reseña falsa o insultante en Google puede vulnerar tu honor. Qué es lícito, qué no, cómo se pide la retirada y qué indemnización cabe reclamar.',
		date: '2026-11-03',
		category: 'Derecho Civil',
		readTime: '7 min',
		intro: 'Una reseña de una estrella puede hacer más daño a un negocio que una campaña de publicidad. Pero no todo lo que molesta es ilegal: la crítica, incluso dura, está protegida. La frontera está en los hechos falsos, el insulto y el uso de datos personales, y saber dónde cae tu caso decide si la reclamación prospera.',
		sections: [
			{
				heading: 'Opinión frente a hecho: la línea que importa',
				paragraphs: [
					'Una opinión sobre el trato recibido o la calidad del servicio es expresión protegida, aunque sea injusta o exagerada. Un hecho concreto —que no se prestó el servicio, que se cobró dos veces, que se cometió un delito— puede ser falso y verificable, y ahí empieza el terreno de la reclamación.',
					'También importa el contexto: no es lo mismo una crítica a un restaurante que una acusación de estafa publicada con nombre y apellidos. La veracidad exigible crece cuando se imputan hechos delictivos o se ataca la reputación profesional.',
				],
			},
			{
				heading: 'Cuándo una reseña es ilícita',
				paragraphs: [
					'Es ilícita cuando contiene insultos o expresiones vejatorias innecesarias para la crítica, cuando imputa hechos falsos con desprecio por la verdad o cuando revela datos personales del titular o de sus empleados sin base jurídica.',
					'También lo es cuando la reseña no es una opinión de cliente sino un ataque coordinado o una extorsión: ofrecer retirarla a cambio de dinero o de un descuento es una conducta con relevancia penal. Guardar esas comunicaciones es clave.',
				],
			},
			{
				heading: 'Qué se puede pedir a Google',
				paragraphs: [
					'Google es un intermediario: no decide si la reseña es difamatoria, pero tiene procedimientos de notificación y retirada para contenidos ilícitos. Se puede reportar la reseña y, en casos de datos personales, ejercer los derechos de supresión ante la plataforma o la Agencia Española de Protección de Datos.',
					'Reclamar solo a Google rara vez resuelve el fondo. Lo habitual es pedir la retirada al autor si se le puede identificar y, si no, reclamar judicialmente para que se ordene retirar el contenido y se declare la intromisión.',
				],
			},
			{
				heading: 'Vía civil: honor, intimidad y propia imagen',
				paragraphs: [
					'La vía civil permite pedir el cese de la intromisión, la retirada del contenido, la publicación de la sentencia y una indemnización por el daño moral y patrimonial acreditado. Es la vía habitual para empresas y profesionales.',
					'La acción caduca a los cuatro años desde que se pudo ejercitar. Por eso conviene actuar pronto: las capturas, la URL, la fecha y el alcance de la difusión (visualizaciones, reseñas derivadas) son la prueba del daño, y se deterioran con el tiempo.',
				],
			},
			{
				heading: 'Vía penal: injurias y calumnias',
				paragraphs: [
					'Cuando se imputa un delito con conocimiento de su falsedad o con temerario desprecio a la verdad, cabe la calumnia; los insultos graves pueden ser injuria. Son delitos de querella, con plazos propios y con la libertad de expresión como límite.',
					'Antes de querellarse hay que valorar el coste, el tiempo y el efecto llamada: un procedimiento penal puede dar más visibilidad al contenido. En muchas empresas la vía civil con medidas cautelares de retirada es más rápida y más discreta.',
				],
			},
			{
				heading: 'Estrategia práctica antes de litigar',
				paragraphs: [
					'Primero, documentar: capturas con fecha, URL, perfil del autor y respuestas. Segundo, responder en público con datos, sin insultar, porque la respuesta mesurada reduce el impacto y sirve como prueba de la falsedad. Tercero, requerir la retirada de forma fehaciente.',
					'Si la reseña es una opinión legítima, la estrategia correcta es mejorar la atención y pedir reseñas reales, no litigar. Si es ilícita, la reclamación debe pedir el cese y la indemnización con prueba del daño, no solo la retirada: retirar sin declarar la ilicitud deja la puerta abierta a que vuelva.',
				],
			},
		],
		checklist: [
			'Guarda capturas fechadas, URL y perfil del autor.',
			'Distingue la opinión de los hechos falsos y acotados.',
			'Reporta la reseña a Google y guarda el número de gestión.',
			'Envía un requerimiento fehaciente al autor si está identificado.',
			'No respondas con insultos ni ofrezcas dinero por retirarla.',
		],
		faq: [
			{
				question: '¿Puedo obligar a Google a borrar una reseña negativa?',
				answer:
					'Solo si el contenido es ilícito o infringe derechos de protección de datos. Google no retira críticas por ser negativas o injustas. Para las que contienen insultos, hechos falsos o datos personales existe notificación y, si no se atiende, la vía judicial.',
			},
			{
				question: '¿Cuánto se puede reclamar por una reseña difamatoria?',
				answer:
					'No hay una cifra fija: depende de la gravedad de la imputación, la difusión, la relevancia pública del afectado y la prueba del daño. La indemnización se acredita con el impacto real (pérdida de clientes, reputación) y la sentencia puede ordenar además la retirada.',
			},
			{
				question: '¿Y si el autor es anónimo?',
				answer:
					'Se puede reclamar contra la plataforma para que identifique al autor mediante el procedimiento correspondiente y, mientras tanto, pedir la retirada del contenido. El anonimato no impide la reclamación, pero alarga el procedimiento.',
			},
		],
		relatedServices: [
			{ path: '/derecho-civil', label: 'honor, intimidad y reclamaciones civiles' },
			{ path: '/derecho-penal', label: 'injurias, calumnias y defensa penal' },
			{ path: '/empresas', label: 'protección jurídica de la empresa' },
		],
	},
	{
		slug: 'permiso-de-trabajo-cuenta-propia',
		title: 'Permiso de trabajo por cuenta propia: requisitos y pasos',
		description:
			'Cómo se solicita la autorización de residencia y trabajo por cuenta propia en España: plan de negocio, inversión, medios económicos y plazos del expediente.',
		date: '2026-11-03',
		category: 'Extranjería',
		readTime: '8 min',
		intro: 'Montar un negocio en España siendo extranjero exige una autorización distinta de la residencia: hay que acreditar que el proyecto es viable y que el solicitante puede sostenerlo. No basta con tener una idea ni con abrir un local: el expediente se decide sobre el plan, la inversión y los medios, y un proyecto genérico es la causa más frecuente de denegación.',
		sections: [
			{
				heading: 'Qué es y a quién va dirigida',
				paragraphs: [
					'Es la autorización inicial de residencia y trabajo por cuenta propia: habilita a residir en España y a desarrollar una actividad económica como autónomo. Se solicita antes de iniciar la actividad y se concede por un periodo inicial de un año, renovable.',
					'También la necesitan quienes ya están en España con otra autorización y quieren pasar a trabajar por cuenta propia, y los estudiantes que desean emprender tras terminar sus estudios, siempre que encajen en un supuesto habilitado. No es la vía del arraigo ni la de la residencia no lucrativa.',
				],
			},
			{
				heading: 'Requisitos que se examinan de verdad',
				paragraphs: [
					'Medios económicos suficientes para la manutención y alojamiento, proyecto de establecimiento o actividad con memoria que explique la inversión, el mercado y la viabilidad, y cumplimiento de los requisitos profesionales: colegiación cuando la actividad lo exige, titulación y licencias.',
					'Además, carecer de antecedentes penales en España y en los países de residencia de los últimos años, no encontrarse irregular en España y cumplir los requisitos sanitarios. La autorización se deniega por proyecto no acreditado, inversión insuficiente o actividad sin habilitación.',
				],
			},
			{
				heading: 'Documentación del expediente',
				paragraphs: [
					'Formulario oficial, pasaporte completo en vigor, certificado de antecedentes penales apostillado y traducido, certificado médico, memoria del proyecto con plan económico-financiero y acreditación de la inversión prevista y de los medios disponibles.',
					'Si la actividad requiere título o colegiación, se aporta la credencial o la solicitud en trámite. Si hay local, el contrato o la oferta y la licencia de actividad correspondiente. Traducciones juradas y apostillas se preparan antes de presentar: un defecto formal devuelve el expediente.',
				],
			},
			{
				heading: 'Plazos y silencio administrativo',
				paragraphs: [
					'El plazo legal de resolución es de tres meses desde la presentación. En extranjería el silencio es negativo salvo en los supuestos expresamente previstos, así que si no hay resolución en plazo, lo prudente es entender desestimada la solicitud y reaccionar.',
					'Los tiempos reales varían según la provincia y la carga de la oficina. Si el expediente se presenta desde el exterior, la autorización se comunica al consulado para la visa; si se presenta en España, se resuelve por la oficina de extranjería competente.',
				],
			},
			{
				heading: 'Qué hacer cuando se aprueba',
				paragraphs: [
					'Con la autorización, el alta en Hacienda (modelo censal) y el alta en el régimen de autónomos de la Seguridad Social, y la solicitud de la tarjeta de identidad de extranjero en el plazo de un mes. La actividad no debe empezar antes de tener la autorización.',
					'Si se presentó desde el exterior, el orden es otro: visa en el consulado, entrada en España y tarjeta. Equivocar el orden es un clásico que obliga a regularizar después, con el coste y el riesgo que eso supone.',
				],
			},
			{
				heading: 'Errores frecuentes y qué hacer si deniegan',
				paragraphs: [
					'Los errores más habituales: memoria copiada de otro proyecto, inversión no justificada con fondos propios o financiación, licencias que no se tienen y actividad que requiere colegiación sin colegiarse. También presentar con documentos caducados o sin traducción jurada.',
					'Frente a una denegación cabe recurso de reposición y, después, la vía contencioso-administrativa. Se estudia el informe de denegación y se subsana lo que sea subsanable: muchas resoluciones se revierten aportando la prueba de inversión o la licencia que faltaba.',
				],
			},
		],
		checklist: [
			'Prepara una memoria del proyecto con plan económico real.',
			'Acredita la inversión y los medios con documentos bancarios.',
			'Comprueba títulos, colegiación y licencias de la actividad.',
			'Reúne antecedentes penales apostillados y traducciones juradas.',
			'No inicies la actividad hasta tener la autorización.',
		],
		faq: [
			{
				question: '¿Cuánta inversión necesito para trabajar por cuenta propia?',
				answer:
					'No hay una cifra única: se valora la suficiencia de la inversión y de los medios para el proyecto concreto, no un mínimo fijo. Un plan realista, con presupuesto, financiación y previsión de ingresos, pesa más que una cifra alta sin justificar.',
			},
			{
				question: '¿Puedo solicitarlo estando ya en España?',
				answer:
					'Sí, si tu situación lo permite (por ejemplo, con una autorización vigente que habilite el cambio o desde un supuesto habilitado). Estar en situación irregular impide obtener la autorización por esta vía; en ese caso hay que valorar el arraigo u otra figura.',
			},
			{
				question: '¿Cuánto tarda la autorización?',
				answer:
					'El plazo legal es de tres meses, pero los tiempos reales dependen de la oficina y de la documentación. En extranjería el silencio es negativo, así que conviene controlar el plazo y reaccionar si no hay resolución.',
			},
		],
		relatedServices: [
			{ path: '/nacionalidad-extranjeria', label: 'extranjería y nacionalidad' },
			{ path: '/empresas', label: 'servicios jurídicos para empresas y autónomos' },
			{ path: '/empresas/constitucion-sociedades', label: 'constitución de sociedades' },
		],
	},
];
