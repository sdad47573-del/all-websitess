// /llms.txt — guía estructurada de páginas para LLMs (estándar llmstxt.org).
// Se genera en el build desde las mismas fuentes de datos que el resto del
// sitio (SERVICES, BLOG_POSTS), así nunca se desincroniza del contenido real.
import { BLOG_POSTS } from '../data/BLOG_POSTS';
import { SERVICES } from '../data/SERVICES';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '../data/site';

export const prerender = true;

const abs = (p: string) => `${SITE_URL}${p}`;

function buildLlmsTxt(): string {
	const lines: string[] = [];

	lines.push(`# ${SITE_NAME}`);
	lines.push('');
	lines.push(
		`> ${SITE_TAGLINE}. Despacho de abogados con más de 20 años de experiencia: Derecho Civil, Penal, Laboral, Familia, Mercantil, Seguros y Extranjería. Oficinas en Lucena (Córdoba) y Málaga, atención en toda España. Primera consulta gratuita: 666 329 155.`,
	);
	lines.push('');

	lines.push('## Despacho');
	lines.push(`- [Inicio](${abs('/')}): Abogado Sergio Cruz Chacón en Lucena, Córdoba y Málaga. Presentación del despacho y acceso a todos los servicios.`);
	lines.push(`- [Quiénes somos](${abs('/quienes-somos/')}): Equipo y especialidades del despacho con más de 20 años de experiencia.`);
	lines.push(`- [Trayectoria](${abs('/trayectoria/')}): Historia, valores y trayectoria profesional del despacho.`);
	lines.push(`- [Ubicaciones](${abs('/ubicaciones/')}): Oficinas en Málaga (Teatinos) y Lucena (Calle El Agua 19), despachos bajo demanda.`);
	lines.push(`- [Preguntas frecuentes](${abs('/faq/')}): Honorarios, plazos y respuestas a las dudas legales más comunes.`);
	lines.push(`- [Servicios para empresas](${abs('/empresas/')}): Derecho mercantil, laboral, compliance, fusiones y compraventa de empresas.`);
	lines.push(`- [Blog jurídico](${abs('/blog/')}): Guías legales prácticas para particulares y empresas en Andalucía.`);
	lines.push('');

	lines.push('## Servicios');
	for (const service of SERVICES) {
		lines.push(`- [${service.title}](${abs(`${service.path}/`)}): ${service.description}`);
	}
	lines.push('');

	lines.push('## Guías del blog');
	for (const post of BLOG_POSTS) {
		lines.push(`- [${post.title}](${abs(post.href)}): ${post.description}`);
	}
	lines.push('');

	lines.push('## Más información');
	lines.push(
		`- [Contenido completo](${abs('/llms-full.txt')}): versión exhaustiva con NAP, oficinas, todas las preguntas frecuentes y detalles de cada servicio.`,
	);

	return lines.join('\n');
}

export const GET = () =>
	new Response(buildLlmsTxt(), {
		headers: { 'content-type': 'text/plain; charset=utf-8' },
	});