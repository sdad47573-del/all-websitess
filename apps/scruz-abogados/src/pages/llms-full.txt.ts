// /llms-full.txt — versión exhaustiva del contenido del sitio para LLMs
// (estándar llmstxt.org: llms-full.txt es el archivo "full content").
// Se genera en el build desde las mismas fuentes de datos que el sitio:
// NAP/OFFICES/FAQ/ROUTE_DEFAULTS (seo.ts), SERVICES, UBICACIONES y BLOG_POSTS.
import { BLOG_POSTS } from '../data/BLOG_POSTS';
import { FAQ } from '../data/FAQ';
import { SERVICES } from '../data/SERVICES';
import { UBICACIONES } from '../data/UBICACIONES';
import { CITY_LANDINGS } from '../data/CITY_LANDINGS';
import { PLAZOS } from '../data/PLAZOS';
import { PARTIDOS_JUDICIALES, PROVINCIAS_CUBIERTAS } from '../data/JUZGADOS';
import { NAP, OFFICES, OPENING_HOURS, routeDefaults } from '../data/seo';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '../data/site';

export const prerender = true;

const abs = (p: string) => `${SITE_URL}${p}`;

const totalPartidos = PROVINCIAS_CUBIERTAS.reduce(
	(n, p) => n + PARTIDOS_JUDICIALES[p].length,
	0,
);

function buildLlmsFullTxt(): string {
	const lines: string[] = [];

	lines.push(`# ${SITE_NAME} — Contenido completo`);
	lines.push('');
	lines.push(
		`> ${SITE_TAGLINE}. Despacho de abogados con más de 20 años de experiencia: Derecho Civil, Penal, Laboral, Familia, Mercantil, Seguros y Extranjería. Oficinas en Lucena (Córdoba) y Málaga, atención en toda España. Primera consulta gratuita: 666 329 155.`,
	);
	lines.push('');

	lines.push('## Información del despacho');
	lines.push(`- Nombre: ${SITE_NAME} (${NAP.legalName})`);
	lines.push(`- NIF: ${NAP.taxId}`);
	lines.push(`- Fundación: ${NAP.foundingDate}`);
	lines.push(`- Email: ${NAP.email}`);
	lines.push(`- Teléfono: ${NAP.phoneMobile} / ${NAP.phoneLandline}`);
	lines.push(
		`- Dirección principal: ${NAP.address.streetAddress}, ${NAP.address.postalCode} ${NAP.address.addressLocality} (${NAP.address.addressRegion})`,
	);
	lines.push(`- Horario de oficina: ${OPENING_HOURS.map((h) => `${h.dayOfWeek} ${h.opens}–${h.closes}`).join(', ')}`);
	lines.push(`- Áreas servidas: ${['Lucena', 'Córdoba', 'Málaga', 'Granada', 'Andalucía', 'España'].join(', ')}`);
	lines.push(`- Primera consulta: orientativa gratuita. Honorarios con presupuesto cerrado por escrito y pago fraccionado.`);
	lines.push('');

	lines.push('## Oficinas');
	for (const office of OFFICES) {
		lines.push(
			`- ${office.city}${office.isMain ? ' (principal)' : ''}: ${office.streetAddress}, ${office.postalCode} — ${office.region}.`,
		);
	}
	lines.push('');
	lines.push('## Ubicaciones y cobertura');
	for (const ubi of UBICACIONES) {
		lines.push(`- ${ubi.city} (${ubi.province}): ${ubi.description} ${ubi.address}, ${ubi.zip}.`);
	}
	lines.push('');

	// Cobertura por plaza, con el órgano que lleva cada caso. Es el dato que
	// un lector automático no puede deducir: qué juzgado corresponde a cada
	// municipio y desde qué oficina se atiende. Se deriva de `src/data/cities/`
	// para que no se quede corto por olvido.
	lines.push('## Cobertura por plaza y órgano judicial');
	lines.push(
		'Oficinas reales en Lucena (Córdoba) y Málaga. En las plazas siguientes **no hay despacho abierto**:',
	);
	lines.push('la atención se presta desde la oficina más cercana, por videollamada y con cita cerrada.');
	for (const city of CITY_LANDINGS) {
		lines.push(
			`- ${city.city} (${city.province}): ${abs(`/abogados-en-${city.slug}/`)} — ${city.tribunal}. ` +
				`Sirve a ${city.municipios}. Se atiende desde ${city.office === 'malaga' ? 'Málaga' : 'Lucena'}, ${city.travel}.`,
		);
	}
	lines.push('');

	// Las herramientas son lo que un lector automático no encuentra en una
	// tabla de servicios: son utilidades con datos verificados que resuelven la
	// duda previa a contratar. Se listan con su URL y con qué contestan.
	lines.push('## Herramientas');
	lines.push(
		'Utilidades gratuitas con datos verificados (reparto judicial de la Ley 38/1988 y reforma de la LO 1/2025, y plazos con su artículo):',
	);
	lines.push(
		`- ${abs('/que-juzgado-me-corresponde/')} — busca el municipio y devuelve el partido judicial, el número de partido y el órgano de lo social, que va a la capital de provincia y no al partido.`,
	);
	lines.push(
		`- ${abs('/partidos-judiciales/')} — los ${totalPartidos} partidos de ${PROVINCIAS_CUBIERTAS.join(', ')} con sus municipios, qué materia lleva cada uno y desde qué despacho se atiende cada plaza.`,
	);
	lines.push(
		`- ${abs('/calculadora-plazos/')} — ${PLAZOS.length} plazos de recursos administrativos, herencias, laboral y prescripción, cada uno con su fecha de inicio y su artículo.`,
	);
	lines.push(
		`- ${abs('/calculadora-tasa-judicial/')} — cuota fija de la tasa judicial por tipo de proceso (Ley 10/2012, art. 7.1), con las cuotas anuladas por la STC 140/2016 marcadas. Las personas físicas están exentas (art. 4.2.a) y la parte variable sobre la cuantía ya no se aplica.`,
	);
	lines.push(
		`- ${abs('/impuestos-herencia/')} — plazo de seis meses para declarar el ITPF de una herencia (art. 48 LGT), bonificación del 20 % por presentar en los primeros 5 meses y del 5 % en los 6 (art. 49.1) y reducciones de Andalucía (Ley 5/2021).`,
	);
	lines.push(
		`- ${abs('/reparto-herencia/')} — legítima de dos tercios o un tercio (art. 809.1 CC), reparto entre cónyuge e hijos (arts. 833.1.a y 834.1) y parte disponible por testamento.`,
	);
	lines.push(
		`- ${abs('/donde-atendemos/')} — mapa filtrable de las plazas con las materias que se consultan en cada una, el despacho que las lleva y el tiempo real de desplazamiento.`,
	);
	lines.push('');

	lines.push('## Servicios');
	for (const service of SERVICES) {
		const long = routeDefaults(`${service.path}/`).description;
		lines.push(`### ${service.title} — ${abs(`${service.path}/`)}`);
		lines.push(service.description);
		if (long && long !== service.description) lines.push(long);
		lines.push('');
	}

	lines.push('## Preguntas frecuentes');
	for (const category of FAQ) {
		lines.push(`### ${category.title}`);
		for (const q of category.questions) {
			lines.push(`- **${q.title}** ${q.answer}`);
		}
		lines.push('');
	}

	lines.push('## Guías del blog');
	for (const post of BLOG_POSTS) {
		lines.push(`### ${post.title} — ${abs(post.href)}`);
		lines.push(`${post.description} (${post.readTime}, ${post.category}, ${post.date}).`);
		lines.push('');
	}

	lines.push('## Páginas informativas');
	lines.push(`- [Inicio](${abs('/')}) · [Quiénes somos](${abs('/quienes-somos/')}) · [Trayectoria](${abs('/trayectoria/')}) · [Ubicaciones](${abs('/ubicaciones/')}) · [FAQ](${abs('/FAQ/')})`);
	lines.push(`- [Servicios](${abs('/servicios/')}) · [Empresas](${abs('/empresas/')}) · [Blog](${abs('/blog/')})`);
	lines.push(`- [Aviso legal](${abs('/aviso-legal/')}) · [Política de privacidad](${abs('/politica-de-privacidad/')}) · [Declaración de accesibilidad](${abs('/declaracion-de-accesibilidad/')})`);
	lines.push('');

	return lines.join('\n');
}

export const GET = () =>
	new Response(buildLlmsFullTxt(), {
		headers: { 'content-type': 'text/plain; charset=utf-8' },
	});