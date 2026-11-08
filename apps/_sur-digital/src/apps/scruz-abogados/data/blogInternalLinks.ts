// Fuente única de verdad: enlaces internos contextuales de cada artículo del blog
// a las páginas de servicio relacionadas (refuerzan la relevancia tópica).
// Clave = nombre del archivo .astro del artículo (slug), sin extensión.
// La inversa (SERVICE_BLOG_POSTS, más abajo) se deriva automáticamente de este mapa,
// garantizando que el enlazado bidireccional nunca se desincronice.
import { BLOG_POSTS } from './BLOG_POSTS';
import { SEO_ARTICLES } from './SEO_ARTICLES';

export interface RelatedServiceLink {
	path: string; // ruta del servicio (con / inicial, sin barra final)
	label: string; // texto del enlace contextual
}

export const BLOG_RELATED_SERVICES: Record<string, RelatedServiceLink[]> = {
	...Object.fromEntries(SEO_ARTICLES.map(({ slug, relatedServices }) => [slug, relatedServices])),
	'errores-accidente-trafico': [
		{ path: '/indemnizaciones-trafico', label: 'reclamación de la indemnización de tráfico' },
		{ path: '/accidente-laboral', label: 'accidente de trabajo o in itinere' },
		{ path: '/derecho-civil', label: 'responsabilidad civil por daños' },
	],
	'responsabilidad-administradores-sl': [
		{ path: '/empresas', label: 'servicios jurídicos para empresas' },
		{ path: '/empresas/contratos-mercantiles', label: 'contratos mercantiles y pactos de socios' },
		{ path: '/compraventas-empresas', label: 'compraventa de empresas' },
		{ path: '/cobro-deudas-impagos', label: 'cobro de deudas e impagos' },
	],
	'seguro-cultivos-agroseguro': [
		{ path: '/seguros-agrarios', label: 'reclamación a Agroseguro' },
		{ path: '/derecho-civil', label: 'contratos y reclamaciones civiles' },
		{ path: '/consumo', label: 'reclamaciones al seguro y de consumo' },
	],
	'orden-proteccion-medidas': [
		{ path: '/violencia-genero', label: 'asistencia legal por violencia de género' },
		{ path: '/guarda-custodia', label: 'custodia de los hijos' },
		{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
	],
	'derechos-del-detenido': [
		{ path: '/derecho-penal', label: 'defensa penal desde el primer momento' },
		{ path: '/recursos-administrativos', label: 'recursos contra multas y sanciones' },
		{ path: '/derecho-civil', label: 'responsabilidad civil por daños' },
	],
	'alquilar-piso-malaga': [
		{ path: '/abogados-en-malaga', label: 'abogados en Málaga (Teatinos)' },
		{ path: '/ubicaciones', label: 'nuestras oficinas en Málaga y Lucena' },
		{ path: '/derecho-civil', label: 'contratos y reclamaciones civiles' },
		{ path: '/cobro-deudas-impagos', label: 'reclamación de deudas e impagos' },
	],
	'tramites-legales-rute': [
		{ path: '/abogados-en-rute', label: 'abogados en Rute y la Subbética' },
		{ path: '/ubicaciones', label: 'todas las ubicaciones del despacho' },
		{ path: '/herencias-testamentos', label: 'herencias y partición de fincas' },
	],
	'procedimiento-sancionador': [
		{ path: '/recursos-administrativos', label: 'recursos y defensa ante la Administración' },
		{ path: '/blog/silencio-administrativo-positivo-negativo', label: 'cómo se cuentan los plazos del expediente' },
		{ path: '/blog/recurso-administrativo-guia', label: 'recursos contra la resolución que sanciona' },
	],
	'medidas-paterno-filiales': [
		{ path: '/guarda-custodia', label: 'guarda y custodia y medidas paterno-filiales' },
		{ path: '/blog/pension-de-alimentos', label: 'cómo se calcula la pensión de alimentos' },
		{ path: '/blog/regimen-de-visitas', label: 'el régimen de comunicación y estancias' },
	],
	'liquidacion-gananciales-paso-a-paso': [
		{ path: '/liquidacion-gananciales', label: 'la gestión profesional de la liquidación de gananciales' },
		{ path: '/divorcios-separaciones', label: 'el proceso de divorcio de mutuo acuerdo o contencioso' },
		{ path: '/herencias-testamentos', label: 'cuando la sociedad se disuelve por muerte' },
		{ path: '/blog/custodia-compartida-cordoba', label: 'el uso de la vivienda cuando hay hijos' },
		{ path: '/blog/medidas-paterno-filiales', label: 'las medidas de los hijos sin matrimonio previo' },
	],
	'reclamacion-pension-seguridad-social': [
		{ path: '/incapacidad-permanente', label: 'la incapacidad permanente y su reclamación específica' },
		{ path: '/complemento-paternidad-maternidad', label: 'el complemento de paternidad y maternidad' },
		{ path: '/blog/silencio-administrativo-positivo-negativo', label: 'cómo funciona el silencio administrativo' },
		{ path: '/blog/bajas-laborales-2026-2027', label: 'las prestaciones durante la baja laboral' },
	],
	'multas-penales-suspension-condenas': [
		{ path: '/derecho-penal', label: 'defensa penal y ejecución de condenas' },
		{ path: '/recursos-administrativos', label: 'si tu multa es administrativa, no penal' },
		{ path: '/blog/derechos-del-detenido', label: 'los derechos desde la detención' },
	],
	'prorroga-estancia-y-renovacion': [
		{ path: '/nacionalidad-extranjeria', label: 'extranjería y nacionalidad' },
		{ path: '/blog/silencio-administrativo-positivo-negativo', label: 'qué significa el silencio en tu expediente' },
		{ path: '/blog/nacionalidad-espana-examen', label: 'el camino a la nacionalidad española' },
	],
	'silencio-administrativo-positivo-negativo': [
		{ path: '/recursos-administrativos', label: 'recursos y reclamaciones a la Administración' },
		{ path: '/urbanismo', label: 'el silencio en las licencias urbanísticas' },
		{ path: '/blog/reclamacion-responsabilidad-patrimonial', label: 'reclamar el daño que causó la demora' },
	],
	'resolucion-contrato-incumplimiento': [
		{ path: '/derecho-civil', label: 'contratos y responsabilidad civil' },
		{ path: '/cobro-deudas-impagos', label: 'si lo que quieres es el dinero y no cerrar la relación' },
		{ path: '/blog/contratos-lucena', label: 'qué revisar antes de firmar el próximo contrato' },
	],
	'reclamacion-responsabilidad-patrimonial': [
		{ path: '/recursos-administrativos', label: 'recursos y reclamaciones a la Administración' },
		{ path: '/urbanismo', label: 'los daños ligados a licencias y obras públicas' },
		{ path: '/blog/recurso-administrativo-guia', label: 'los plazos del recurso que protege la indemnización' },
	],
	'danos-y-perjuicios-reclamacion': [
		{ path: '/derecho-civil', label: 'responsabilidad civil y contratos' },
		{ path: '/blog/reclamacion-responsabilidad-patrimonial', label: 'si el daño lo causó la Administración' },
		{ path: '/blog/impagos-entre-empresas', label: 'cuando el responsable entra en concurso' },
	],
	'mutualidades-alternativas-reta': [
		{ path: '/empresas', label: 'servicios jurídicos para empresas y autónomos' },
		{ path: '/blog/cuanto-cuesta-constituir-sl-2026', label: 'la alternativa de la sociedad limitada' },
		{ path: '/blog/jubilacion-2027', label: 'cómo queda la jubilación con el nuevo sistema' },
	],
	'legalizacion-obras': [
		{ path: '/urbanismo', label: 'licencias, disciplina y legalización urbanística' },
		{ path: '/recursos-administrativos', label: 'recursos contra la denegación de la legalización' },
		{ path: '/blog/obra-sin-licencia-prescripcion', label: 'los plazos de la obra sin licencia' },
	],
	'okupas-ley-y-bulos': [
		{ path: '/derecho-civil', label: 'recuperación de la posesión y protección civil' },
		{ path: '/blog/desahucio-por-impago-lucena', label: 'el desahucio cuando alegan ser inquilinos' },
		{ path: '/blog/alquilar-piso-malaga', label: 'el alquiler formal como prevención' },
	],
	'bajas-laborales-2026-2027': [
		{ path: '/incapacidad-permanente', label: 'cuando la baja acaba en incapacidad permanente' },
		{ path: '/despidos', label: 'el despido durante la reserva del puesto' },
		{ path: '/accidente-laboral', label: 'la baja por accidente de trabajo y el recargo de prestaciones' },
	],
	'obra-sin-licencia-prescripcion': [
		{ path: '/urbanismo', label: 'licencias de obra y disciplina urbanística' },
		{ path: '/recursos-administrativos', label: 'recursos contra la resolución del expediente' },
		{ path: '/blog/licencia-obra-menor-declaracion-responsable', label: 'licencia de obra menor y declaración responsable' },
	],
	'suelo-rustico-cordoba': [
		{ path: '/urbanismo', label: 'suelo rústico y urbanismo en la comarca' },
		{ path: '/recursos-administrativos', label: 'recursos contra denegaciones y autorizaciones' },
		{ path: '/herencias-testamentos', label: 'reparto y división de fincas rústicas heredadas' },
	],
	'licencia-obra-menor-declaracion-responsable': [
		{ path: '/urbanismo', label: 'licencias de obra y disciplina urbanística' },
		{ path: '/recursos-administrativos', label: 'recurso contra la denegación de la licencia' },
		{ path: '/derecho-civil', label: 'conflictos de propiedad y vecindad' },
	],
	'recurso-administrativo-guia': [
		{ path: '/recursos-administrativos', label: 'recursos contra multas y actos administrativos' },
		{ path: '/urbanismo', label: 'licencias de obra y disciplina urbanística' },
		{ path: '/nacionalidad-extranjeria', label: 'denegaciones de extranjería y nacionalidad' },
		{ path: '/consumo', label: 'reclamaciones de consumo' },
	],
	'nacionalidad-espana-examen': [
		{ path: '/nacionalidad-extranjeria', label: 'nacionalidad española y extranjería' },
		{ path: '/recursos-administrativos', label: 'recurso contra la denegación' },
		{ path: '/complemento-paternidad-maternidad', label: 'prestaciones familiares de la Seguridad Social' },
	],
	'complemento-nacimiento-adopcion': [
		{ path: '/complemento-paternidad-maternidad', label: 'prestación por nacimiento y adopción' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
		{ path: '/recursos-administrativos', label: 'reclamación previa y recursos administrativos' },
	],
	'accidente-laboral-cordoba': [
		{ path: '/accidente-laboral', label: 'reclamación de accidente laboral' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente tras accidente' },
		{ path: '/despidos', label: 'despido e indemnizaciones laborales' },
		{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
	],
	'asistencia-violencia-genero': [
		{ path: '/violencia-genero', label: 'asistencia legal por violencia de género' },
		{ path: '/guarda-custodia', label: 'custodia de los hijos' },
		{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
	],
	'denuncia-violencia-genero': [
		{ path: '/violencia-genero', label: 'asistencia legal por violencia de género' },
		{ path: '/guarda-custodia', label: 'custodia de los hijos' },
		{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
	],
	'baremo-lesiones-2026': [
		{ path: '/indemnizaciones-trafico', label: 'indemnización por accidente de tráfico' },
		{ path: '/accidente-laboral', label: 'accidente laboral' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
	],
	'clausula-suelo-irph': [
		{ path: '/reclamaciones-bancarias', label: 'reclamación de cláusula suelo' },
		{ path: '/consumo', label: 'reclamaciones de consumo' },
		{ path: '/derecho-civil', label: 'derecho civil' },
	],
	'contratos-lucena': [
		{ path: '/derecho-civil', label: 'revisión de contratos' },
		{ path: '/empresas/contratos-mercantiles', label: 'contratos mercantiles entre empresas' },
		{ path: '/compraventas-empresas', label: 'compraventa de empresas' },
		{ path: '/cobro-deudas-impagos', label: 'cobro de deudas e impagos' },
	],
	'crear-empresa-andalucia': [
		{ path: '/empresas', label: 'servicios jurídicos para empresas' },
		{ path: '/empresas/constitucion-sociedades', label: 'constitución de la sociedad paso a paso' },
		{ path: '/empresas/proteccion-de-datos', label: 'adaptación al RGPD de la nueva empresa' },
		{ path: '/compraventas-empresas', label: 'compraventa de empresas' },
		{ path: '/recursos-administrativos', label: 'recursos administrativos' },
	],
	'traspaso-de-bar-paso-a-paso': [
		{ path: '/compraventas-empresas', label: 'compraventas de empresas y traspasos' },
		{ path: '/empresas/contratos-mercantiles', label: 'contratos mercantiles del traspaso' },
		{ path: '/empresas/derecho-laboral', label: 'la subrogación de trabajadores y el personal' },
		{ path: '/blog/alquilar-local-comercial-contrato', label: 'el contrato del local que alberga el negocio' },
		{ path: '/blog/crear-empresa-andalucia', label: 'montar el negocio desde cero' },
	],
	'alquilar-local-comercial-contrato': [
		{ path: '/empresas/contratos-mercantiles', label: 'contratos mercantiles para tu negocio' },
		{ path: '/urbanismo', label: 'licencias y urbanismo del local' },
		{ path: '/compraventas-empresas', label: 'compraventas de empresas y locales' },
		{ path: '/blog/desahucio-por-impago-lucena', label: 'desahucio por impago de renta' },
	],
	'pactos-de-socios-sl': [
		{ path: '/empresas/constitucion-sociedades', label: 'constitución de la sociedad con pactos desde el primer día' },
		{ path: '/empresas/contratos-mercantiles', label: 'contratos mercantiles entre socios y con terceros' },
		{ path: '/compraventas-empresas', label: 'compraventa de participaciones y empresas' },
		{ path: '/blog/responsabilidad-administradores-sl', label: 'responsabilidad de los administradores' },
	],
	'impagos-entre-empresas': [
		{ path: '/cobro-deudas-impagos', label: 'reclamación de deudas e impagos' },
		{ path: '/empresas/contratos-mercantiles', label: 'prevención contractual entre empresas' },
		{ path: '/blog/masc-negociacion-obligatoria', label: 'el MASC antes de demandar' },
	],
	'cuanto-cuesta-constituir-sl-2026': [
		{ path: '/empresas/constitucion-sociedades', label: 'constitución de sociedades con presupuesto cerrado' },
		{ path: '/empresas', label: 'servicios jurídicos para empresas' },
		{ path: '/empresas/proteccion-de-datos', label: 'RGPD de la empresa desde el primer cliente' },
	],
	'cuanto-cuesta-un-divorcio': [
		{ path: '/divorcios-separaciones', label: 'divorcio de mutuo acuerdo' },
		{ path: '/liquidacion-gananciales', label: 'liquidación de gananciales' },
		{ path: '/guarda-custodia', label: 'guarda y custodia' },
	],
	'custodia-compartida-cordoba': [
		{ path: '/guarda-custodia', label: 'guarda y custodia' },
		{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
		{ path: '/liquidacion-gananciales', label: 'liquidación de gananciales' },
	],
	'denuncias-falsas': [
		{ path: '/derecho-penal', label: 'defensa penal por denuncia falsa' },
		{ path: '/derecho-civil', label: 'responsabilidad civil' },
	],
	'desahucio-por-impago-lucena': [
		{ path: '/derecho-civil', label: 'defensa frente al desahucio' },
		{ path: '/cobro-deudas-impagos', label: 'cobro de deudas e impagos' },
	],
	'despido-improcedente': [
		{ path: '/despidos', label: 'impugnación de despido improcedente' },
		{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		{ path: '/accidente-laboral', label: 'accidente laboral' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
	],
	'divorcio-mutuo-acuerdo': [
		{ path: '/divorcios-separaciones', label: 'divorcio de mutuo acuerdo' },
		{ path: '/liquidacion-gananciales', label: 'liquidación de gananciales' },
		{ path: '/guarda-custodia', label: 'custodia de los hijos' },
	],
	'herencias-entre-hermanos': [
		{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
		{ path: '/derecho-civil', label: 'partición de herencia' },
	],
	'herencia-sin-testamento': [
		{ path: '/herencias-testamentos', label: 'herencias sin testamento' },
		{ path: '/derecho-civil', label: 'derecho civil' },
	],
	'impuesto-sucesiones-andalucia': [
		{ path: '/herencias-testamentos', label: 'gestión de herencias' },
		{ path: '/derecho-civil', label: 'derecho civil' },
	],
	'incapacidad-permanente': [
		{ path: '/incapacidad-permanente', label: 'solicitud de incapacidad permanente' },
		{ path: '/complemento-paternidad-maternidad', label: 'complemento de pensión' },
		{ path: '/accidente-laboral', label: 'accidente laboral' },
	],
	'indemnizacion-accidente-trafico': [
		{ path: '/indemnizaciones-trafico', label: 'reclamación de indemnización de tráfico' },
		{ path: '/accidente-laboral', label: 'accidente laboral' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
	],
	'jornada-375-horas': [
		{ path: '/despidos', label: 'despido por represalia' },
		{ path: '/empresas/derecho-laboral', label: 'registro horario y jornada en la empresa' },
		{ path: '/accidente-laboral', label: 'accidente laboral' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
	],
	'jubilacion-2027': [
		{ path: '/complemento-paternidad-maternidad', label: 'complemento por hijos en la pensión' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
		{ path: '/blog/mutualidades-alternativas-reta', label: 'cómo queda la cotización del autónomo con la nueva ley' },
	],
	'masc-negociacion-obligatoria': [
		{ path: '/derecho-civil', label: 'reclamaciones civiles' },
		{ path: '/empresas/contratos-mercantiles', label: 'contratos mercantiles entre empresas' },
		{ path: '/cobro-deudas-impagos', label: 'cobro de deudas' },
		{ path: '/compraventas-empresas', label: 'conflictos mercantiles' },
	],
	'novedades-laborales-2026': [
		{ path: '/despidos', label: 'despido nulo' },
		{ path: '/empresas/derecho-laboral', label: 'asesoría laboral para empresas' },
		{ path: '/accidente-laboral', label: 'accidente laboral' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
	],
	'novedades-pensiones-2027': [
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
		{ path: '/complemento-paternidad-maternidad', label: 'complemento de brecha de género' },
	],
	'nueva-ley-prevencion-riesgos-laborales': [
		{ path: '/accidente-laboral', label: 'accidente laboral' },
		{ path: '/empresas/derecho-laboral', label: 'prevención y protocolos para empresas' },
		{ path: '/despidos', label: 'despidos' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
	],
	'pension-de-alimentos': [
		{ path: '/guarda-custodia', label: 'guarda y custodia' },
		{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
		{ path: '/liquidacion-gananciales', label: 'liquidación de gananciales' },
	],
	'reclamacion-deudas-monitorio': [
		{ path: '/cobro-deudas-impagos', label: 'cobro de deudas e impagos' },
		{ path: '/empresas/contratos-mercantiles', label: 'reclamación del incumplimiento de un contrato' },
		{ path: '/derecho-civil', label: 'derecho civil' },
		{ path: '/compraventas-empresas', label: 'reclamaciones mercantiles' },
	],
	'reclamaciones-consumo-lucena': [
		{ path: '/consumo', label: 'reclamaciones de consumo' },
		{ path: '/reclamaciones-bancarias', label: 'reclamaciones bancarias' },
		{ path: '/derecho-civil', label: 'derecho civil' },
	],
	'reclamaciones-seguro-hogar': [
		{ path: '/derecho-civil', label: 'reclamación al seguro de hogar' },
		{ path: '/consumo', label: 'derechos del consumidor' },
	],
	'reclamar-agroseguro': [
		{ path: '/seguros-agrarios', label: 'reclamación a Agroseguro' },
		{ path: '/derecho-civil', label: 'derecho civil' },
	],
	'reforma-discapacidad-dependencia': [
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
		{ path: '/complemento-paternidad-maternidad', label: 'complementos de pensión' },
		{ path: '/accidente-laboral', label: 'accidente laboral' },
	],
	'reforma-ley-consumidores': [
		{ path: '/consumo', label: 'derechos del consumidor' },
		{ path: '/empresas/proteccion-de-datos', label: 'protección de datos en la relación con clientes' },
		{ path: '/reclamaciones-bancarias', label: 'reclamaciones bancarias' },
		{ path: '/derecho-civil', label: 'derecho civil' },
	],
	'regimen-de-visitas': [
		{ path: '/guarda-custodia', label: 'guarda y custodia' },
		{ path: '/divorcios-separaciones', label: 'divorcio y separación' },
		{ path: '/liquidacion-gananciales', label: 'liquidación de gananciales' },
	],
	'sanidad-extranjeros-sin-residencia': [
		{ path: '/nacionalidad-extranjeria', label: 'nacionalidad y extranjería' },
	],
	'sergio-cruz-chacon-abogado': [
		{ path: '/servicios', label: 'todos los servicios del despacho' },
		{ path: '/abogados-en-lucena', label: 'despacho en Lucena' },
		{ path: '/trayectoria', label: 'trayectoria profesional' },
	],
	'tarjetas-revolving-usura': [
		{ path: '/consumo', label: 'reclamación de tarjeta revolving' },
		{ path: '/reclamaciones-bancarias', label: 'reclamaciones bancarias' },
		{ path: '/derecho-civil', label: 'derecho civil' },
	],
	'testamento-online-cordoba': [
		{ path: '/herencias-testamentos', label: 'herencias y testamentos' },
		{ path: '/derecho-civil', label: 'derecho civil' },
	],
	'transparencia-retributiva': [
		{ path: '/despidos', label: 'despido por discriminación retributiva' },
		{ path: '/empresas/derecho-laboral', label: 'registro retributivo y obligaciones de empresa' },
		{ path: '/accidente-laboral', label: 'accidente laboral' },
		{ path: '/incapacidad-permanente', label: 'incapacidad permanente' },
	],
	'verifactu-facturacion-electronica': [
		{ path: '/empresas', label: 'servicios jurídicos para empresas' },
		{ path: '/empresas/constitucion-sociedades', label: 'constitución de sociedades y obligaciones societarias' },
		{ path: '/empresas/proteccion-de-datos', label: 'cumplimiento del RGPD de los datos de facturación' },
		{ path: '/compraventas-empresas', label: 'compraventa de empresas' },
		{ path: '/recursos-administrativos', label: 'sanciones y recursos' },
	],
	'zonas-tensionadas-alquiler': [
		{ path: '/derecho-civil', label: 'derecho de arrendamientos' },
		{ path: '/cobro-deudas-impagos', label: 'cobro de rentas impagadas' },
	],
};

/**
 * Inversa derivada de BLOG_RELATED_SERVICES: slug de página de servicio →
 * hrefs de los artículos del blog que la enlazan (deduplicados y ordenados
 * por fecha, más recientes primero). Se recalcula sola en cada build, de modo
 * que añadir un enlace en el mapa del blog crea automáticamente el enlace
 * de vuelta desde la página de servicio.
 */
export const SERVICE_BLOG_POSTS: Record<string, string[]> = (() => {
	const byService = new Map<string, Set<string>>();
	for (const [postSlug, links] of Object.entries(BLOG_RELATED_SERVICES)) {
		for (const { path } of links) {
			const service = path.replace(/^\//, '');
			if (!byService.has(service)) byService.set(service, new Set());
			byService.get(service)!.add(`/blog/${postSlug}/`);
		}
	}
	const dateIndex = new Map(BLOG_POSTS.map((post, i) => [post.href, i]));
	const result: Record<string, string[]> = {};
	for (const [service, hrefs] of byService) {
		result[service] = [...hrefs].sort(
			(a, b) => (dateIndex.get(a) ?? 0) - (dateIndex.get(b) ?? 0),
		);
	}
	return result;
})();