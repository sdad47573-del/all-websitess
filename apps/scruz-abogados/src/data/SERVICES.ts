import despidosImg from '@assets/abogado-de-despidos-min.png';
import extranjeriaImg from '@assets/abogado-especialistas-en-extranjeria-min.png';
import traficoImg from '@assets/abogados-de-accidentes-e-indemnizaciones-min-1.png';
import herenciasImg from '@assets/abogados-de-herencias-y-patrimonios-min.png';
import divorciosImg from '@assets/abogados-especialistas-en-divorcios-baratos-min.png';
import deudasImg from '@assets/abogados-especializados-en-deudas-e-impagos-min.png';
import bancoImg from '@assets/abogados-especializados-en-problemas-bancarios-min.png';
import empresasImg from '@assets/empresa.png';
import paternidadImg from '@assets/familia.png';
import generoImg from '@assets/mejor-abogado-violencia-de-genero-malaga-min.png';
import penalImg from '@assets/mejores-abogados-penales-min.png';
import incapacidadImg from '@assets/resfriado.png';
import laboralImg from '@assets/subiendo.png';

export const SERVICES = [
	{
		title: 'Indemnizaciones de Tráfico',
		description: 'Reclama la máxima compensación por tu accidente.',
		path: '/indemnizaciones-trafico',
		img: {
			...traficoImg,
			alt: 'Abogado especialista en indemnizaciones por accidentes de tráfico',
			title: 'Asesoría legal para obtener la máxima compensación tras un accidente',
		},
	},
	{
		title: 'Herencias y Testamentos',
		description: 'Gestionamos herencias y redactamos testamentos sin complicaciones.',
		path: '/herencias-testamentos',
		img: {
			...herenciasImg,
			alt: 'Asesoramiento legal en herencias y testamentos',
			title: 'Gestión de herencias y redacción de testamentos sin complicaciones',
		},
	},
	{
		title: 'Divorcios y Separaciones',
		description: 'Soluciones rápidas y justas en rupturas familiares.',
		path: '/divorcios-separaciones',
		img: {
			...divorciosImg,
			alt: 'Abogado experto en divorcios y separaciones',
			title: 'Soluciones legales rápidas y justas en casos de divorcio',
		},
	},
	{
		title: 'Cobro de deudas e Impagos',
		description: 'Recupera tu dinero de forma eficaz.',
		path: '/cobro-deudas-impagos',
		img: {
			...deudasImg,
			alt: 'Recuperación de deudas e impagos con respaldo legal',
			title: 'Recuperación eficaz de deudas con asesoramiento jurídico',
		},
	},
	{
		title: 'Reclamaciones Bancarias',
		description: 'Defiende tus derechos frente a bancos y productos abusivos.',
		path: '/reclamaciones-bancarias',
		img: {
			...bancoImg,
			alt: 'Asesoramiento en reclamaciones bancarias',
			title: 'Defensa de tus derechos frente a bancos y productos financieros',
		},
	},
	{
		title: 'Compraventas de Empresas',
		description: 'Seguridad y asesoramiento en operaciones mercantiles.',
		path: '/compraventas-empresas',
		img: {
			...empresasImg,
			alt: 'Abogado para compraventa de empresas',
			title: 'Asesoramiento legal en compraventas de empresas con seguridad jurídica',
		},
	},
	{
		title: 'Derecho Penal',
		description: 'Defensa y acusación en todo tipo de delitos.',
		path: '/derecho-penal',
		img: {
			...penalImg,
			alt: 'Representación legal en derecho penal',
			title: 'Defensa y acusación en todo tipo de delitos',
		},
	},
	{
		title: 'Nacionalidad y Extranjería',
		description: 'Tramitamos tu residencia, visado o nacionalidad.',
		path: '/nacionalidad-extranjeria',
		img: {
			...extranjeriaImg,
			alt: 'Asesoramiento en nacionalidad y extranjería',
			title: 'Tramitación de residencia, visado y nacionalidad',
		},
	},
	{
		title: 'Violencia de Género',
		description: 'Apoyo legal inmediato y protección a las víctimas.',
		path: '/violencia-genero',
		img: {
			...generoImg,
			alt: 'Asesoramiento legal para víctimas de violencia de género',
			title: 'Apoyo legal inmediato y protección para víctimas de violencia',
		},
	},
	{
		title: 'Despidos',
		description: 'Impugnamos despidos y reclamamos tu indemnización.',
		path: '/despidos',
		img: {
			...despidosImg,
			alt: 'Reclamación por despidos injustificados',
			title: 'Impugnación de despidos y reclamación de indemnizaciones',
		},
	},
	{
		title: 'Incapacidad Permanente',
		description: 'Consigue tu pensión por incapacidad laboral.',
		path: '/incapacidad-permanente',
		img: {
			...incapacidadImg,
			alt: 'Abogado especializado en incapacidad permanente',
			title: 'Asesoramiento para obtener tu pensión por incapacidad laboral',
		},
	},
	{
		title: 'Accidente Laboral',
		description: 'Reclamamos las prestaciones que te corresponden.',
		path: '/accidente-laboral',
		img: {
			...laboralImg,
			alt: 'Reclamación por accidente laboral',
			title: 'Reclamación de prestaciones tras accidente laboral',
		},
	},
	{
		title: 'Complemento de Paternidad o Maternidad',
		description: 'Te ayudamos a aumentar tu pensión.',
		path: '/complemento-paternidad-maternidad',
		img: {
			...paternidadImg,
			alt: 'Asesoramiento legal en complemento de pensiones por paternidad/maternidad',
			title: 'Asistencia legal para aumentar tu pensión por paternidad o maternidad',
		},
	},
];
