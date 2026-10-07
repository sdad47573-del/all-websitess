// Datos de los servicios (texto + ruta). Los iconos de las cuatro tarjetas del
// hero NO viven aquí: solo esos cuatro se pintan con imagen y tener `img` en
// cada entrada obligaba a importar 13 imágenes de las que 9 no se renderizaban
// nunca (acababan como PNG huérfanos en dist). Los iconos se montan en
// `data.ts` (`HERO_SERVICE_ICONS`), que es quien construye las tarjetas.
export const SERVICES = [
	{
		title: 'Derecho Civil',
		description: 'Contratos, responsabilidad civil, consumo y seguros.',
		path: '/derecho-civil',
	},
	{
		title: 'Indemnizaciones de Tráfico',
		description: 'Reclama la máxima compensación por tu accidente.',
		path: '/indemnizaciones-trafico',
	},
	{
		title: 'Herencias y Testamentos',
		description: 'Gestionamos herencias y redactamos testamentos sin complicaciones.',
		path: '/herencias-testamentos',
	},
	{
		title: 'Divorcios y Separaciones',
		description: 'Soluciones rápidas y justas en rupturas familiares.',
		path: '/divorcios-separaciones',
	},
	{
		title: 'Liquidación de Gananciales',
		description: 'Inventario, valoración y reparto de la sociedad de gananciales.',
		path: '/liquidacion-gananciales',
	},
	{
		title: 'Cobro de deudas e Impagos',
		description: 'Recupera tu dinero de forma eficaz.',
		path: '/cobro-deudas-impagos',
	},
	{
		title: 'Reclamaciones Bancarias',
		description: 'Defiende tus derechos frente a bancos y productos abusivos.',
		path: '/reclamaciones-bancarias',
	},
	{
		title: 'Consumo',
		description: 'Reclamaciones de consumo, cláusulas abusivas y revolving.',
		path: '/consumo',
	},
	{
		title: 'Compraventas de Empresas',
		description: 'Seguridad y asesoramiento en operaciones mercantiles.',
		path: '/compraventas-empresas',
	},
	{
		title: 'Empresas y Mercantil',
		description: 'Departamento jurídico externo para autónomos y empresas: cuota mensual o precio cerrado.',
		path: '/empresas',
	},
	{
		title: 'Constitución de Sociedades',
		description: 'Constituye tu SL con presupuesto cerrado y socios protegidos desde el primer día.',
		path: '/empresas/constitucion-sociedades',
	},
	{
		title: 'Contratos Mercantiles',
		description: 'Contratos de negocio revisados y redactados: con clientes, proveedores y socios.',
		path: '/empresas/contratos-mercantiles',
	},
	{
		title: 'Derecho Laboral de Empresa',
		description: 'Contratación, despidos y sanciones vistos desde la empresa.',
		path: '/empresas/derecho-laboral',
	},
	{
		title: 'Protección de Datos y RGPD',
		description: 'RGPD, Verifactu y videovigilancia adaptados a tu negocio.',
		path: '/empresas/proteccion-de-datos',
	},
	{
		title: 'Derecho Penal',
		description: 'Defensa y acusación en todo tipo de delitos.',
		path: '/derecho-penal',
	},
	{
		title: 'Nacionalidad y Extranjería',
		description: 'Tramitamos tu residencia, visado o nacionalidad.',
		path: '/nacionalidad-extranjeria',
	},
	{
		title: 'Violencia de Género',
		description: 'Apoyo legal inmediato y protección a las víctimas.',
		path: '/violencia-genero',
	},
	{
		title: 'Despidos',
		description: 'Impugnamos despidos y reclamamos tu indemnización.',
		path: '/despidos',
	},
	{
		title: 'Incapacidad Permanente',
		description: 'Consigue tu pensión por incapacidad laboral.',
		path: '/incapacidad-permanente',
	},
	{
		title: 'Accidente Laboral',
		description: 'Reclamamos las prestaciones que te corresponden.',
		path: '/accidente-laboral',
	},
	{
		title: 'Complemento de Paternidad o Maternidad',
		description: 'Te ayudamos a aumentar tu pensión.',
		path: '/complemento-paternidad-maternidad',
	},
	{
		title: 'Guarda y Custodia y Medidas Paterno-Filiales',
		description: 'Custodia, régimen de visitas y pensión de alimentos.',
		path: '/guarda-custodia',
	},
	{
		title: 'Recursos Administrativos',
		description: 'Recursos y defensa frente a sanciones de la Administración.',
		path: '/recursos-administrativos',
	},
	{
		title: 'Seguros Agrarios',
		description: 'Reclamaciones por siniestros en explotaciones agrarias.',
		path: '/seguros-agrarios',
	},
	{
		title: 'Urbanismo',
		description: 'Licencias, disciplina urbanística, sanciones y suelo rústico.',
		path: '/urbanismo',
	},
];
