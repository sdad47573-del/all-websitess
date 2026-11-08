// Fuente única de verdad de los artículos del blog (índice + home).
// Orden: más reciente primero.
import { SEO_ARTICLES } from './SEO_ARTICLES';

export interface BlogPost {
	href: string;
	title: string;
	description: string;
	date: string;
	category: string;
	readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
	...SEO_ARTICLES.map(({ slug, title, description, date, category, readTime }) => ({
		href: `/blog/${slug}/`,
		title,
		description,
		date,
		category,
		readTime,
	})),
	{
		href: '/blog/procedimiento-sancionador/',
		title: 'Procedimiento sancionador: fases, plazos y cómo defender una multa',
		description:
			'El expediente sancionador de principio a fin: los principios que lo limitan, el acuerdo de iniciación, la fase de alegaciones y prueba, la caducidad y prescripción, y el orden de los argumentos de defensa.',
		date: '2026-09-21',
		category: 'Recursos administrativos',
		readTime: '8 min',
	},
	{
		href: '/blog/medidas-paterno-filiales/',
		title: 'Medidas paterno-filiales: los hijos se protegen igual sin estar casados',
		description:
			'Cuándo cabe el procedimiento de medidas paterno-filiales, qué medidas se piden, la intervención del Ministerio Fiscal, la filiación y el proceso paso a paso — para parejas de hecho e hijos no matrimoniales.',
		date: '2026-09-21',
		category: 'Derecho de Familia',
		readTime: '7 min',
	},
	{
		href: '/blog/liquidacion-gananciales-paso-a-paso/',
		title: 'Liquidación de gananciales: cómo se divide lo construido en común',
		description:
			'Qué es ganancial y qué privativo, el inventario y la valoración, la casa y las deudas, la disolución por divorcio y por muerte, los impuestos de la liquidación y qué pasa si no hay acuerdo.',
		date: '2026-09-21',
		category: 'Derecho de Familia',
		readTime: '8 min',
	},
	{
		href: '/blog/multas-penales-suspension-condenas/',
		title: 'Multa penal y suspensión de condenas: cómo funcionan de verdad',
		description:
			'Las cuotas diarias del Código Penal (2/5 del ingreso), el fraccionamiento y el impago, la suspensión de la pena con sus requisitos y la revocación por nuevo delito, y cómo distinguir la multa penal de la administrativa.',
		date: '2026-09-21',
		category: 'Derecho Penal',
		readTime: '8 min',
	},
	{
		href: '/blog/prorroga-estancia-y-renovacion/',
		title: 'Prórroga de estancia y renovación del TIE: los plazos que mantienen la residencia',
		description:
			'La prórroga de estancia de 90 días, el calendario de renovación de la tarjeta en 60 días, la justificación de la actividad por situación, el silencio negativo en extranjería y la autorización de retorno.',
		date: '2026-09-21',
		category: 'Extranjería',
		readTime: '8 min',
	},
	{
		href: '/blog/silencio-administrativo-positivo-negativo/',
		title: 'Silencio administrativo: positivo, negativo y cómo se gana',
		description:
			'Cuándo el silencio de la Administración es positivo y cuándo negativo, los plazos de resolución, cómo acreditarlo con certificación y las tres salidas: ejecutar la estimación, recurrir la desestimación o reclamar el daño por la demora.',
		date: '2026-09-21',
		category: 'Recursos administrativos',
		readTime: '7 min',
	},
	{
		href: '/blog/resolucion-contrato-incumplimiento/',
		title: 'Resolución del contrato por incumplimiento: cómo se sale de un contrato roto',
		description:
			'El art. 1124 CC paso a paso: incumplimiento esencial, el requerimiento fehaciente que decide el caso, la resolución extrajudicial y sus riesgos, la restitución de lo recibido y los daños del art. 1101.',
		date: '2026-09-21',
		category: 'Derecho Civil',
		readTime: '8 min',
	},
	{
		href: '/blog/reclamacion-responsabilidad-patrimonial/',
		title: 'Reclamación de responsabilidad patrimonial: cómo cobrar los daños de la Administración',
		description:
			'Qué es un daño indemnizable, el plazo de 1 año, la reclamación previa con silencio a los 6 meses, la cuantificación con pericial y los casos típicos: caídas en vía pública, demoras de licencias y obras que dañan fincas.',
		date: '2026-09-21',
		category: 'Recursos administrativos',
		readTime: '7 min',
	},
	{
		href: '/blog/danos-y-perjuicios-reclamacion/',
		title: 'Daños y perjuicios: cómo reclamar una indemnización civil',
		description:
			'Los requisitos del art. 1902 CC, quién responde realmente, la prueba que se salva y la que se pierde, los plazos de 1 y 5 años, la pericial y las vías: del burofax al pleito, con los casos típicos de vecinos y obras.',
		date: '2026-09-21',
		category: 'Derecho Civil',
		readTime: '8 min',
	},
	{
		href: '/blog/mutualidades-alternativas-reta/',
		title: 'Mutualidades alternativas al RETA: la reforma de la Ley 2/2026',
		description:
			'Quién puede estar fuera del RETA con una mutualidad de previsión social, qué exige la reforma de la Ley 2/2026 (prestaciones equivalentes, cobertura proporcional), cuotas y la comparación con el RETA de rendimientos reales en 2027.',
		date: '2026-09-21',
		category: 'Empresas',
		readTime: '8 min',
	},
	{
		href: '/blog/legalizacion-obras/',
		title: 'Legalización de obras paso a paso: la licencia de legalización',
		description:
			'Cómo legalizar una obra hecha sin licencia: qué obras son legalizables, el expediente paso a paso, la sanción que la acompaña, el régimen de fuera de ordenación y qué pasa si la obra no es compatible.',
		date: '2026-09-21',
		category: 'Urbanismo',
		readTime: '7 min',
	},
	{
		href: '/blog/okupas-ley-y-bulos/',
		title: 'Okupas en 2027: qué es ley y qué es bulo',
		description:
			'Allanamiento o usurpación: la frontera legal que decide el caso, las 48 horas del primer día, la vía penal y la civil, los plazos reales y la prevención que funciona en pisos vacíos.',
		date: '2026-09-21',
		category: 'Derecho Civil',
		readTime: '7 min',
	},
	{
		href: '/blog/bajas-laborales-2026-2027/',
		title: 'Bajas laborales 2026-2027: qué ha cambiado y tus derechos',
		description:
			'La baja por incapacidad temporal completa: cuánto se cobra por días, el parte digital, el límite de 365+180 días, la reserva del puesto y la impugnación del alta médica en 4 días hábiles.',
		date: '2026-09-21',
		category: 'Derecho Laboral',
		readTime: '7 min',
	},
	{
		href: '/blog/obra-sin-licencia-prescripcion/',
		title: 'Obra sin licencia: cuándo prescribe y cuándo toca demoler',
		description:
			'Los relojes de la obra ilegal: prescripción del restablecimiento a los 6 años, la orden de demolición que vive 5 años más, qué es legalizable y qué no, y el expediente de disciplina paso a paso.',
		date: '2026-09-21',
		category: 'Urbanismo',
		readTime: '8 min',
	},
	{
		href: '/blog/suelo-rustico-cordoba/',
		title: 'Construir en suelo rústico en Córdoba: qué permite la ley',
		description:
			'Vivienda vinculada a la explotación, naves, balsas y cerramientos en suelo no urbanizable: qué admite el planeamiento, cuándo autoriza la Junta y las segregaciones que no se pueden hacer.',
		date: '2026-09-21',
		category: 'Urbanismo',
		readTime: '8 min',
	},
	{
		href: '/blog/traspaso-de-bar-paso-a-paso/',
		title: 'Traspaso de un bar paso a paso: contrato, licencias e impuestos',
		description:
			'Cómo traspasar o comprar un bar sin heredar problemas: valoración, due diligence antes del dinero, contrato de traspaso, subrogación de trabajadores, licencias e impuestos del traspaso en Andalucía.',
		date: '2026-09-21',
		category: 'Empresas',
		readTime: '8 min',
	},
	{
		href: '/blog/alquilar-local-comercial-contrato/',
		title: 'Alquilar un local comercial: contrato, obras y salidas sin pleito',
		description:
			'Guía del arrendamiento de local comercial: duración y desistimiento, renta y gastos, obras, garantías y avales del administrador, traspaso y qué pasa cuando venden el local con el contrato dentro.',
		date: '2026-09-21',
		category: 'Empresas',
		readTime: '8 min',
	},
	{
		href: '/blog/pactos-de-socios-sl/',
		title: 'Pactos de socios en una SL: las cláusulas que evitan el pleito',
		description:
			'Qué debe regular un pacto de socios antes de firmar: mayorías y veto, dividendos, transmisión de participaciones, derecho de adquisición preferente, salidas y valoración — y qué pasa si no hay pacto.',
		date: '2026-09-21',
		category: 'Empresas',
		readTime: '7 min',
	},
	{
		href: '/blog/impagos-entre-empresas/',
		title: 'Impagos entre empresas: cómo reclamar una factura y cobrar de verdad',
		description:
			'La escalera completa para reclamar facturas impagadas entre empresas: prueba, burofax, intereses y costes de la Ley 3/2004, procedimiento monitorio paso a paso y qué hacer si el deudor entra en concurso.',
		date: '2026-09-21',
		category: 'Empresas',
		readTime: '8 min',
	},
	{
		href: '/blog/cuanto-cuesta-constituir-sl-2026/',
		title: 'Cuánto cuesta constituir una sociedad limitada (SL) en 2026',
		description:
			'Desglose real del coste de constituir una SL en 2026: notaría, Registro Mercantil, IAJD, la vía telemática de la Ley Crea y Crece, capital de 1 € o 3.000 € y los gastos del primer año que casi nadie presupuesta.',
		date: '2026-09-21',
		category: 'Empresas',
		readTime: '7 min',
	},
	{
		href: '/blog/licencia-obra-menor-declaracion-responsable/',
		title: 'Licencia de obra menor o declaración responsable: qué necesitas según la obra',
		description:
			'Qué obras se resuelven con declaración responsable y cuáles siguen necesitando licencia urbanística en Andalucía (LISTA): supuestos, documento exigible y qué pasa si te equivocas de vía.',
		date: '2026-09-15',
		category: 'Urbanismo',
		readTime: '8 min',
	},
	{
		href: '/blog/denuncia-violencia-genero/',
		title: 'Denuncia por violencia de género: cómo se pone y qué pasa después',
		description:
			'Dónde y cómo poner la denuncia, qué se declara y cómo prepararse, las medidas urgentes, el procedimiento de urgencia, la sentencia y la indemnización, paso a paso.',
		date: '2026-09-15',
		category: 'Violencia de género',
		readTime: '7 min',
	},
	{
		href: '/blog/errores-accidente-trafico/',
		title: 'Los 7 errores tras un accidente de tráfico que reducen tu indemnización',
		description:
			'No llamar a la policía, no ir al médico el mismo día, firmar el parte sin leer, interrumpir el tratamiento o aceptar la primera oferta: los errores que arruinan la indemnización y cómo evitarlos.',
		date: '2026-09-12',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
	},
	{
		href: '/blog/responsabilidad-administradores-sl/',
		title: 'Responsabilidad de los administradores de una SL: cuándo responde tu patrimonio',
		description:
			'Deudas de la empresa y patrimonio personal: el deber de instar el concurso a tiempo, las derivaciones de Hacienda y Seguridad Social, la pantalla societaria y cómo documentar decisiones para defenderse.',
		date: '2026-09-12',
		category: 'Empresas',
		readTime: '8 min',
	},
	{
		href: '/blog/seguro-cultivos-agroseguro/',
		title: 'Agroseguro: qué cubre el seguro de cultivos y cómo reclamar',
		description:
			'Líneas y plazos de contratación, declaración del siniestro, la tasación pericial contradictoria y la reclamación cuando la indemnización de Agroseguro no se corresponde con el daño real.',
		date: '2026-09-12',
		category: 'Seguros',
		readTime: '7 min',
	},
	{
		href: '/blog/orden-proteccion-medidas/',
		title: 'Orden de protección: cómo pedirla y qué medidas incluye',
		description:
			'Dónde y cómo solicitar la orden de protección, qué valora el juez, las medidas penales de alejamiento, las medidas civiles sobre hijos y vivienda, y qué hacer si la deniegan.',
		date: '2026-09-12',
		category: 'Violencia de género',
		readTime: '7 min',
	},
	{
		href: '/blog/derechos-del-detenido/',
		title: 'Derechos del detenido: qué hacer (y qué no) en una comisaría',
		description:
			'Los derechos de toda persona detenida en España: asistencia letrada efectiva, comunicaciones reservadas, plazos de 24 y 72 horas, Habeas Corpus y los errores que dañan la defensa.',
		date: '2026-09-12',
		category: 'Derecho Penal',
		readTime: '7 min',
	},
	{
		href: '/blog/alquilar-piso-malaga/',
		title: 'Alquilar piso en Málaga: los derechos del inquilino antes de firmar',
		description:
			'Contrato y fianza legal, actualización anual de la renta, prórroga forzosa de 5 años, garantías adicionales, devolución de la fianza y defensa frente al desahucio en Málaga.',
		date: '2026-09-12',
		category: 'Derecho Civil',
		readTime: '7 min',
	},
	{
		href: '/blog/tramites-legales-rute/',
		title: 'Abogado en Rute y la Subbética: qué trámites se resuelven cerca de casa',
		description:
			'Qué tramita el juzgado de paz de Rute, cuándo el asunto va al partido judicial de Lucena y qué servicios jurídicos se resuelven sin desplazarse a Córdoba. Herencias, divorcios, deudas y contratos agrarios.',
		date: '2026-09-12',
		category: 'El despacho',
		readTime: '6 min',
	},
	{
		href: '/blog/recurso-administrativo-guia/',
		title: 'Recurso administrativo: plazos y tipos para impugnar un acto de la Administración',
		description:
			'Cómo recurrir una multa, una denegación de extranjería o cualquier acto administrativo: plazos de 1 mes y 14 días, recurso de reposición y alzada, prueba y qué pasa si no resuelven.',
		date: '2026-09-12',
		category: 'Recursos administrativos',
		readTime: '7 min',
	},
	{
		href: '/blog/nacionalidad-espana-examen/',
		title: 'Nacionalidad española por residencia: requisitos, examen CCSE y qué hacer si te la deniegan',
		description:
			'Tiempos de residencia por país de origen, examen CCSE del Instituto Cervantes, DELE, documentación del expediente, plazos de resolución y recursos frente a la denegación.',
		date: '2026-09-12',
		category: 'Extranjería',
		readTime: '8 min',
	},
	{
		href: '/blog/complemento-nacimiento-adopcion/',
		title: 'Complemento de nacimiento y adopción: a quién corresponde y cómo reclamarlo',
		description:
			'El pago único de la Seguridad Social por nacimiento o adopción: requisitos de cotización, solicitud en 5 años, denegaciones habituales y la reclamación previa que recupera la prestación.',
		date: '2026-09-12',
		category: 'Seguridad Social',
		readTime: '6 min',
	},
	{
		href: '/blog/jubilacion-2027/',
		title: 'Jubilación 2027: la edad sube a 67 años (salvo 38,5 cotizados) y qué revisar antes',
		description:
			'El 1 de enero de 2027 termina el periodo transitorio: jubilación ordinaria a los 67 años (o 65 con 38 años y 6 meses cotizados). Tabla oficial, anticipada, parcial, activa y el complemento por hijos.',
		date: '2026-09-10',
		category: 'Seguridad Social',
		readTime: '8 min',
	},
	{
		href: '/blog/jornada-375-horas/',
		title: 'Jornada de 37,5 horas: estado real de la reforma y qué puedes reclamar hoy',
		description:
			'La jornada de 37,5 horas NO está en vigor: el Congreso tumbó el proyecto en septiembre de 2025. Lo que sí puedes exigir hoy: registro de jornada, horas extra reclamables y despido nulo por represalia.',
		date: '2026-09-10',
		category: 'Derecho Laboral',
		readTime: '7 min',
	},
	{
		href: '/blog/reforma-discapacidad-dependencia/',
		title: 'Reforma de discapacidad y dependencia: qué cambia y en qué te afecta',
		description:
			'El Senado aprobó la mayor reforma social del siglo: Estado al 50% de financiación, reconocimientos automáticos de discapacidad, atención temprana y plazos a la mitad. Y la diferencia entre discapacidad, dependencia e incapacidad.',
		date: '2026-09-10',
		category: 'Seguridad Social',
		readTime: '8 min',
	},
	{
		href: '/blog/reclamacion-pension-seguridad-social/',
		title: 'Reclamación de pensión: cómo reclamar a la Seguridad Social sin perder atrasos',
		description:
			'La solicitud previa, el silencio negativo a los 3 meses, las prestaciones reclamables (jubilación, incapacidad, viudedad, orfandad), los atrasos que se pierden al esperar y la demanda en 30 días ante el Juzgado de lo Social.',
		date: '2026-09-21',
		category: 'Seguridad Social',
		readTime: '8 min',
	},
	{
		href: '/blog/nueva-ley-prevencion-riesgos-laborales/',
		title: 'Nueva Ley de Prevención de Riesgos Laborales 2027: qué cambia y cómo prepararte',
		description:
			'La reforma de la Ley 31/1995 entra en vigor el 2 de enero de 2027: umbrales del servicio propio, riesgos psicosociales obligatorios, clima, desconexión digital y solvencia acreditada.',
		date: '2026-09-10',
		// Fusión: la prevención de riesgos es materia laboral (y el accidente de
		// trabajo ya vivía en 'Derecho Laboral'), así que formaba un hub de 1 guía.
		category: 'Derecho Laboral',
		readTime: '8 min',
	},
	{
		href: '/blog/sanidad-extranjeros-sin-residencia/',
		title: 'Sanidad para extranjeros sin residencia legal: cómo funciona desde el RD 180/2026',
		description:
			'El RD 180/2026 reconoce el acceso a la sanidad pública de las personas sin residencia legal: declaración responsable, documentos alternativos al padrón, plazos y qué hacer si te deniegan.',
		date: '2026-09-10',
		category: 'Extranjería',
		readTime: '8 min',
	},
	{
		href: '/blog/verifactu-facturacion-electronica/',
		title: 'Verifactu 2027: facturación electrónica obligatoria para autónomos y pymes',
		description:
			'Qué es Verifactu, quién está obligado desde el 1 de julio de 2027, qué debe cumplir tu software de facturación y las sanciones de hasta 50.000 € por no adaptarte.',
		date: '2026-09-10',
		category: 'Empresas',
		readTime: '7 min',
	},
	{
		href: '/blog/transparencia-retributiva/',
		title: 'Transparencia retributiva 2026: el derecho del trabajador a saber qué se cobra',
		description:
			'El registro retributivo obligatorio, la Directiva UE 2023/970 y qué puedes pedir como trabajador: información salarial, bandas, brechas y qué hacer si cobras menos por discriminación.',
		date: '2026-09-10',
		category: 'Derecho Laboral',
		readTime: '6 min',
	},
	{
		href: '/blog/novedades-pensiones-2027/',
		title: 'Novedades de las pensiones 2027: subidas, incapacidad permanente y qué revisar',
		description:
			'La revalorización por IPC de 2026 y 2027, los mínimos y máximos, el complemento de brecha de género y qué revisiones conviene hacer en la pensión de incapacidad permanente.',
		date: '2026-09-10',
		category: 'Seguridad Social',
		readTime: '7 min',
	},
	{
		href: '/blog/zonas-tensionadas-alquiler/',
		title: 'Zonas tensionadas y alquiler 2026: qué significa para Lucena y Córdoba',
		description:
			'Qué son las zonas tensionadas (Ley 12/2023), por qué Andalucía aún no ha declarado ninguna, el tope del IRAV que sí afecta a todos los alquileres y las reducciones del IRPF.',
		date: '2026-09-10',
		category: 'Derecho Civil',
		readTime: '7 min',
	},
	{
		href: '/blog/masc-negociacion-obligatoria/',
		title: 'El MASC: la negociación previa obligatoria antes de demandar',
		description:
			'Desde 2025, intentar una negociación (MASC) es obligatorio antes de la mayoría de demandas civiles y mercantiles: cómo se acredita y qué pasa si no se hace.',
		date: '2026-09-10',
		// 'Actualidad legal' era un cajón de sastre que no construía autoridad
		// temática: el MASC es requisito previo de las demandas civiles y
		// mercantiles, así que se archiva con el Derecho Civil.
		category: 'Derecho Civil',
		readTime: '6 min',
	},
	{
		href: '/blog/novedades-laborales-2026/',
		title: 'Novedades laborales 2026: el despido nulo en empresas con ayudas y más',
		description:
			'El RDL 7/2026 y sus prórrogas declaran nulos los despidos en empresas con ayudas; además, el registro de jornada se endurece y los permisos se amplían.',
		date: '2026-09-10',
		category: 'Derecho Laboral',
		readTime: '6 min',
	},
	{
		href: '/blog/reforma-ley-consumidores/',
		title: 'La reforma de la Ley de consumidores: más información, más desistimiento, más garantías',
		description:
			'La reforma del texto refundido de consumidores refuerza la información previa, el derecho de desistimiento (14 días, ampliable a 12 meses) y las garantías de 3 años.',
		date: '2026-09-10',
		category: 'Consumo y banca',
		readTime: '6 min',
	},
	{
		href: '/blog/reclamacion-deudas-monitorio/',
		title: 'Reclamación de deudas y procedimiento monitorio: recupera tu dinero',
		description:
			'Cómo reclamar una deuda impagada: el requerimiento fehaciente previo, el procedimiento monitorio paso a paso, la oposición del deudor y el embargo hasta el cobro.',
		date: '2026-09-10',
		category: 'Derecho Civil',
		readTime: '7 min',
	},
	{
		href: '/blog/desahucio-por-impago-lucena/',
		title: 'Desahucio por impago en Lucena: plazos y cómo defenderte',
		description:
			'Cómo funciona el desahucio por impago de alquiler: los plazos del juicio verbal, la enervación para evitar el desalojo, el lanzamiento y las opciones de defensa del inquilino.',
		date: '2026-09-10',
		category: 'Derecho Civil',
		readTime: '7 min',
	},
	{
		href: '/blog/custodia-compartida-cordoba/',
		title: 'Custodia compartida en Córdoba: cuándo se concede y cómo funciona',
		description:
			'Los criterios que aplican los juzgados de familia para conceder la custodia compartida, el reparto de tiempo habitual, la pensión de alimentos en este régimen y cómo modificarla.',
		date: '2026-09-10',
		category: 'Derecho de Familia',
		readTime: '7 min',
	},
	{
		href: '/blog/incapacidad-permanente/',
		title: 'Incapacidad permanente: grados, requisitos y cómo solicitarla',
		description:
			'Los cuatro grados de incapacidad y sus cuantías, los requisitos de cotización, cómo funciona el tribunal médico (EVI) y cómo reclamar una negativa del INSS.',
		date: '2026-09-10',
		category: 'Seguridad Social',
		readTime: '7 min',
	},
	{
		href: '/blog/tarjetas-revolving-usura/',
		title: 'Tarjetas revolving y usura: cuándo reclamar los intereses abusivos',
		description:
			'Cómo reclamar tu tarjeta revolving por intereses usurarios: qué dice la Ley de Usura de 1908 y la doctrina del Tribunal Supremo, cuánto puedes recuperar y cómo hacerlo.',
		date: '2026-09-10',
		category: 'Consumo y banca',
		readTime: '7 min',
	},
	{
		href: '/blog/denuncias-falsas/',
		title: 'Denuncias falsas: cómo defenderte si te acusan de un delito que no has cometido',
		description:
			'Qué hacer si te acusan falsamente de un delito: tus derechos como investigado, cómo recoger pruebas, el delito de acusación falsa (art. 456 CP) y cómo reclamar después.',
		date: '2026-09-10',
		category: 'Derecho Penal',
		readTime: '7 min',
	},
	{
		href: '/blog/crear-empresa-andalucia/',
		title: 'Cómo crear una empresa en Andalucía: SL vs autónomo, pasos y costes',
		description:
			'Autónomo o sociedad limitada: cómo elegir, los pasos para constituir una SL en Andalucía, los costes y tiempos reales y los errores más comunes al montar un negocio.',
		date: '2026-09-10',
		category: 'Empresas',
		readTime: '7 min',
	},
	{
		href: '/blog/clausula-suelo-irph/',
		title: 'Cláusula suelo e IRPH en Lucena y Córdoba: cómo reclamar',
		description:
			'Qué son la cláusula suelo y el IRPH, por qué la jurisprudencia los considera reclamables, cuánto puedes recuperar y cómo reclamar también los gastos hipotecarios.',
		date: '2026-09-10',
		// Fusión: 'Derecho bancario' tenía 1 guía y el resto de reclamaciones
		// bancarias (revolving, cláusulas) ya estaban en 'Consumo'.
		category: 'Consumo y banca',
		readTime: '7 min',
	},
	{
		href: '/blog/herencias-entre-hermanos/',
		title: 'Herencias entre hermanos: cómo evitar conflictos y repartir en paz',
		description:
			'Cómo repartir una herencia entre hermanos sin romper la familia: la legítima y sus tercios, las donaciones en vida, el cuaderno particional, la mediación y la vía judicial.',
		date: '2026-09-10',
		category: 'Herencias',
		readTime: '7 min',
	},
	{
		href: '/blog/baremo-lesiones-2026/',
		title: 'Baremo de accidentes de tráfico 2026: cómo calcular tu indemnización',
		description:
			'Cómo se calcula la indemnización con el baremo de tráfico: días de baja, secuelas, factores de corrección, plazos de reclamación y el pago de la aseguradora con intereses.',
		date: '2026-09-10',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
	},
	{
		href: '/blog/impuesto-sucesiones-andalucia/',
		title: 'Impuesto de sucesiones en Andalucía: bonificaciones, plazos y cómo pagar menos',
		description:
			'Quién paga el impuesto de sucesiones en Andalucía, el plazo de 6 meses y su prórroga, la bonificación del 99 % para hijos, cónyuge y padres, y las reducciones por vivienda y empresa familiar.',
		date: '2026-09-10',
		category: 'Herencias',
		readTime: '7 min',
	},
	{
		href: '/blog/accidente-laboral-cordoba/',
		title: 'Accidente laboral en Córdoba: pasos a seguir y prestaciones',
		description:
			'Qué hacer en las primeras 24 horas tras un accidente de trabajo, qué prestaciones cubre la mutua, cuándo procede el recargo del 30-50 % y la indemnización, y los plazos clave.',
		date: '2026-09-10',
		category: 'Derecho Laboral',
		readTime: '7 min',
	},
	{
		href: '/blog/despido-improcedente/',
		title: 'Despido improcedente en Lucena: tus derechos, plazos y cómo reclamar',
		description:
			'El plazo de 20 días hábiles, los tipos de despido, la indemnización, la papeleta de conciliación y la demanda: guía para trabajadores de Lucena y Córdoba.',
		date: '2026-09-10',
		category: 'Derecho Laboral',
		readTime: '7 min',
	},
	{
		href: '/blog/cuanto-cuesta-un-divorcio/',
		title: 'Cuánto cuesta un divorcio en Lucena: honorarios, plazos y pasos',
		description:
			'Honorarios de abogado y procurador, diferencias de coste y plazo entre mutuo acuerdo y contencioso, y qué debe incluir un presupuesto cerrado.',
		date: '2026-09-10',
		category: 'Derecho de Familia',
		readTime: '6 min',
	},
	{
		href: '/blog/contratos-lucena/',
		title: 'Contratos en Lucena: qué debe revisar un abogado antes de firmar',
		description:
			'Compraventas, alquileres, servicios y contratos mercantiles: qué cláusulas revisar antes de firmar, cómo actuar ante un incumplimiento y qué plazos tienes.',
		date: '2026-09-09',
		category: 'Derecho Civil',
		readTime: '6 min',
	},
	{
		href: '/blog/pension-de-alimentos/',
		title: 'Pensión de alimentos en Lucena y Córdoba: cómo se calcula y cómo reclamarla',
		description:
			'Cómo se calcula la pensión, hasta cuándo se paga, cómo se modifica y qué hacer si el otro progenitor no paga: guía con la práctica de los juzgados de familia.',
		date: '2026-09-09',
		category: 'Derecho de Familia',
		readTime: '7 min',
	},
	{
		href: '/blog/sergio-cruz-chacon-abogado/',
		title: 'Sergio Cruz Chacón, abogado en Lucena: quién soy y cómo trabajo',
		description:
			'Perfil profesional del titular del despacho: colegiado en el ICA de Lucena, más de 20 años de experiencia, oficinas en Lucena y Málaga y cómo concertar la primera consulta gratuita.',
		date: '2026-09-09',
		category: 'El despacho',
		readTime: '5 min',
	},
	{
		href: '/blog/reclamaciones-seguro-hogar/',
		title: 'Reclamar al seguro de hogar en Lucena y Córdoba: guía paso a paso',
		description:
			'Daños por agua, incendio, robo o vicios ocultos: plazos de comunicación, peritaje, discrepancias de valoración e intereses del artículo 20 LCS.',
		date: '2026-09-09',
		// Fusión: el seguro de hogar y los agroseguros comparten problemática (art.
		// 20 LCS, peritaje contradictorio), así que una sola categoría 'Seguros'
		// reúne las tres guías en vez de dos hubs de 1-2.
		category: 'Seguros',
		readTime: '6 min',
	},
	{
		href: '/blog/regimen-de-visitas/',
		title: 'Régimen de visitas en Lucena y Córdoba: tus derechos como padre o madre',
		description:
			'Qué dice la ley, cómo se fija el régimen típico, cómo se modifica y qué hacer si el otro progenitor incumple las visitas.',
		date: '2026-09-09',
		category: 'Derecho de Familia',
		readTime: '7 min',
	},
	{
		href: '/blog/testamento-online-cordoba/',
		title: 'Tipos de testamento en Córdoba: cerrado, ológrafo y online',
		description:
			'Qué tipos de testamento existen (abierto ante notario, cerrado y ológrafo), qué exige cada uno, cuánto cuesta hacer testamento en Córdoba y por qué el mancomunado no cabe en Andalucía.',
		date: '2026-09-09',
		category: 'Herencias',
		readTime: '7 min',
	},
	{
		href: '/blog/asistencia-violencia-genero/',
		title: 'Ayuda legal para víctimas de violencia de género en Córdoba: derechos y recursos',
		description:
			'Orden de protección, asistencia jurídica gratuita, teléfonos y recursos públicos en Córdoba y Lucena: qué hacer y a quién acudir si sufres violencia de género.',
		date: '2026-09-09',
		category: 'Violencia de género',
		readTime: '7 min',
	},
	{
		href: '/blog/reclamar-agroseguro/',
		title: 'Cómo reclamar a Agroseguro por pedrisco o helada en Lucena',
		description:
			'Plazos de comunicación del siniestro, peritaje contradictorio, reducciones por infraseguro e intereses del artículo 20 LCS: guía práctica para reclamar tu cosecha.',
		date: '2026-09-09',
		category: 'Seguros',
		readTime: '6 min',
	},
	{
		href: '/blog/reclamaciones-consumo-lucena/',
		title: 'Cláusulas suelo y tarjetas revolving en Lucena: cómo reclamar',
		description:
			'Cómo reclamar cláusulas suelo, tarjetas revolving con intereses usurarios y otras reclamaciones de consumo en Lucena y Córdoba, con las vías y los plazos.',
		date: '2026-09-09',
		category: 'Consumo y banca',
		readTime: '7 min',
	},
	{
		href: '/blog/divorcio-mutuo-acuerdo/',
		title: 'Divorcio de mutuo acuerdo en Lucena y Córdoba: plazos, documentación y pasos',
		description:
			'Guía práctica del divorcio de mutuo acuerdo en Andalucía: requisitos, convenio regulador, documentación, tiempos reales y diferencias con el contencioso.',
		date: '2026-09-03',
		category: 'Derecho de Familia',
		readTime: '6 min',
	},
	{
		href: '/blog/herencia-sin-testamento/',
		title: 'Herencia sin testamento en Córdoba: quién hereda y qué hacer paso a paso',
		description:
			'Qué dice la ley cuando alguien fallece sin testamento, quién tiene derecho a heredar, qué documentos necesitas y cómo se reparte la herencia.',
		date: '2026-09-03',
		category: 'Herencias',
		readTime: '7 min',
	},
	{
		href: '/blog/indemnizacion-accidente-trafico/',
		title: 'Cómo reclamar la indemnización por accidente de tráfico: guía 2026',
		description:
			'Los pasos tras un accidente de tráfico, cómo funciona el baremo de lesiones, qué plazo tiene la aseguradora para pagar y cuándo necesitas un abogado.',
		date: '2026-09-03',
		category: 'Accidentes de tráfico',
		readTime: '7 min',
	},
];