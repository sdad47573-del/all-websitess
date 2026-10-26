// Crea la página /aviso-legal (aviso legal, privacidad y cookies) de una web
// del monorepo, con el pie que enlaza a las tres secciones y el crédito de
// Sur Digital.
//
// Uso:
//   node scripts/add-aviso-legal.mjs <app> --name "Nombre del negocio" \
//     [--city "Ciudad"] [--region "Provincia"] [--address "Calle, número"] \
//     [--phone "+34 ..."] [--maps "https://maps..."]
//
// Toma la URL del sitio de `astro.config.mjs` y, si no se pasan, la dirección
// y el mapa del `index.astro` de la app. No sobrescribe una página existente.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const app = args.find((arg) => !arg.startsWith('--'));

if (!app) {
	console.error('Falta el nombre de la app: node scripts/add-aviso-legal.mjs <app> --name "..."');
	process.exit(1);
}

const flag = (name, fallback = '') => {
	const index = args.indexOf(`--${name}`);
	return index === -1 ? fallback : (args[index + 1] ?? '');
};

const appDir = join(ROOT, 'apps', app);
const pagePath = join(appDir, 'src', 'pages', 'aviso-legal.astro');
const configPath = join(appDir, 'astro.config.mjs');
const indexPath = join(appDir, 'src', 'pages', 'index.astro');

if (!existsSync(join(appDir, 'src', 'pages'))) {
	console.error(`No existe apps/${app}/src/pages`);
	process.exit(1);
}
if (existsSync(pagePath)) {
	console.error(`apps/${app}/src/pages/aviso-legal.astro ya existe`);
	process.exit(1);
}

const config = existsSync(configPath) ? readFileSync(configPath, 'utf8') : '';
const index = existsSync(indexPath) ? readFileSync(indexPath, 'utf8') : '';

const site = flag('site') || /site:\s*'([^']+)'/.exec(config)?.[1] || '';
const maps = flag('maps') || /const mapsUrl\s*=\s*\n?\s*'([^']+)'/.exec(index)?.[1] || '';
const phone = flag('phone');
const phoneHref = phone ? `tel:+${phone.replace(/[^\d]/g, '')}` : '';

const name = flag('name') || app;
const city = flag('city');
const region = flag('region');
const address = flag('address');
const location = [address, city, region].filter(Boolean).join(', ');
const title = `Aviso legal y privacidad | ${name}`;

const page = `---
const today = new Date().toISOString().slice(0, 10);

const business = {
	name: ${JSON.stringify(name)},
	site: ${JSON.stringify(site)},
	maps: ${JSON.stringify(maps)},
	location: ${JSON.stringify(location || 'Consultar en la ficha de Google Maps')},
	${phone ? `phone: ${JSON.stringify(phone)},\n\tphoneHref: ${JSON.stringify(phoneHref)},` : ''}
};
---

<!doctype html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>${title}</title>
		<meta
			name="description"
			content={\`Aviso legal, política de privacidad y política de cookies de \${business.name}.\`}
		/>
		<meta name="robots" content="index, follow" />
		<link rel="canonical" href={\`\${business.site}/aviso-legal/\`} />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="es_ES" />
		<meta property="og:site_name" content={business.name} />
		<meta property="og:title" content="${title}" />
		<meta property="og:url" content={\`\${business.site}/aviso-legal/\`} />
		<meta name="twitter:card" content="summary" />
	</head>
	<body>
		<main>
			<nav aria-label="Migas de pan"><a href="/">&larr; Volver a {business.name}</a></nav>
			<h1>Aviso legal y privacidad</h1>
			<p class="sub">Última actualización: {today}</p>
			<aside class="aviso">
				<h2>Nota para el titular del negocio</h2>
				<p>
					Esta web es informativa y se ha elaborado con datos y fotografías que el negocio
					publica en su ficha de Google Maps. Antes de publicarla definitivamente faltan por
					completar la <strong>razón social</strong>, el <strong>NIF/CIF</strong> y un
					<strong>correo electrónico de contacto</strong>, datos que exige el artículo 10 de
					la LSSI-CE. Sustitúyelos en <code>src/pages/aviso-legal.astro</code>.
				</p>
			</aside>

			<article>
				<h2>Aviso legal</h2>

				<h3>1. Titular del sitio</h3>
				<ul>
					<li><strong>Nombre comercial:</strong> {business.name}</li>
					<li><strong>Razón social:</strong> [pendiente de completar]</li>
					<li><strong>NIF/CIF:</strong> [pendiente de completar]</li>
					<li><strong>Domicilio del establecimiento:</strong> {business.location}</li>
					${phone ? '<li><strong>Teléfono:</strong> <a href={business.phoneHref}>{business.phone}</a></li>' : ''}
					<li><strong>Correo electrónico:</strong> [pendiente de completar]</li>
				</ul>

				<h3>2. Objeto y condiciones de uso</h3>
				<p>
					Este sitio tiene carácter informativo sobre el negocio: su actividad, su ubicación
					y sus datos de contacto. No se ofrece contratación electrónica, pago online ni
					reserva a través de la web.
				</p>
				<p>
					La información sobre horarios, servicios y precios es orientativa y puede cambiar.
					Recomendamos confirmarla con el establecimiento
					${phone ? 'llamando al <a href={business.phoneHref}>{business.phone}</a>' : 'a través de su ficha de Google Maps'} antes de desplazarse.
				</p>

				<h3>3. Propiedad intelectual e imágenes</h3>
				<p>
					Los textos de este sitio están protegidos por la normativa de propiedad intelectual.
					Las fotografías proceden del perfil público del establecimiento en Google Maps y se
					alojan aquí para servirlas optimizadas; sus derechos pertenecen a sus autores. Si
					eres el titular o autor de alguna imagen y quieres que se retire, solicítalo
					${phone ? 'por teléfono' : 'a través de la ficha del negocio'} y se eliminará.
				</p>
				<p>
					El enlace a Google Maps conduce a un servicio de terceros, sujeto a sus propias
					condiciones y política de privacidad.
				</p>

				<h3>4. Legislación aplicable</h3>
				<p>
					Esta web se rige por la legislación española. Para cualquier controversia derivada
					del uso del sitio, las partes se someten a los juzgados y tribunales del domicilio
					del titular, salvo que la normativa de consumidores establezca otro fuero.
				</p>
			</article>

			<article id="privacidad">
				<h2>Política de privacidad</h2>

				<h3>1. Datos que se recogen</h3>
				<p>
					Este sitio no tiene formularios, cuentas de usuario, boletín ni carrito de compra.
					No se recogen datos personales a través de la web. Si contactas con el negocio
					${phone ? 'por teléfono' : 'a través de su ficha de Google Maps'}, los datos que
					facilites se utilizan únicamente para atender tu consulta.
				</p>

				<h3>2. Base jurídica y conservación</h3>
				<p>
					La base legal para el tratamiento es el consentimiento al realizar la consulta y el
					interés legítimo en atenderla. Los datos de contacto se conservan solo durante el
					tiempo necesario para gestionarla y, después, el que exijan las obligaciones legales
					aplicables.
				</p>

				<h3>3. Destinatarios</h3>
				<p>
					No se ceden datos a terceros salvo obligación legal. El sitio se aloja en un
					proveedor de hosting y utiliza Google Maps, un servicio que puede recibir datos
					técnicos como la dirección IP al cargarse en el navegador. Consulta la
					<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
						>política de privacidad de Google</a
					>.
				</p>

				<h3>4. Derechos</h3>
				<p>
					Puedes ejercer los derechos de acceso, rectificación, supresión, oposición,
					limitación y portabilidad dirigiéndote al titular
					${phone ? 'por teléfono' : 'en el domicilio del establecimiento'}. También puedes
					presentar una reclamación ante la
					<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer"
						>Agencia Española de Protección de Datos</a
					>.
				</p>
			</article>

			<article id="cookies">
				<h2>Política de cookies</h2>

				<h3>1. Cookies propias</h3>
				<p>
					Este sitio no instala cookies propias de analítica, publicidad ni seguimiento. No hay
					herramientas de medición de audiencia ni píxeles de redes sociales.
				</p>

				<h3>2. Cookies de terceros</h3>
				<p>
					El mapa y los enlaces a Google Maps pueden instalar cookies técnicas o de medición
					propias de Google al cargarse. Puedes bloquearlas desde la configuración de tu
					navegador.
				</p>

				<h3>3. Cómo gestionarlas</h3>
				<p>
					Todos los navegadores permiten bloquear o eliminar las cookies instaladas. Si las
					bloqueas, el mapa incrustado puede no mostrarse, aunque el resto de la web seguirá
					funcionando.
				</p>
			</article>

			<p class="cierre">
				Para cualquier consulta sobre el negocio:
				<a href={business.maps} target="_blank" rel="noopener noreferrer">{business.name} en Google Maps</a>${phone ? '\n\t\t\t\t· <a href={business.phoneHref}>{business.phone}</a>' : ''}
			</p>
		</main>

		<footer>
			<nav aria-label="Información legal y créditos">
				<a href="/aviso-legal">Aviso legal</a>
				<a href="/aviso-legal#privacidad">Privacidad</a>
				<a href="/aviso-legal#cookies">Cookies</a>
				<span>Web creada por <a href="https://sur-digital.vercel.app/" rel="noopener">Sur Digital</a></span>
			</nav>
		</footer>

		<style>
			:root { color-scheme: light; }
			body { margin: 0; padding: 3rem 1.25rem 4rem; font: 16px/1.75 system-ui, -apple-system, 'Segoe UI', sans-serif; color: #24211d; background: #faf7f2; }
			main { max-width: 46rem; margin: 0 auto; }
			nav { margin-bottom: 2rem; font-size: .9rem; }
			nav a { color: #8a5a2b; font-weight: 600; text-decoration: none; }
			nav a:hover { text-decoration: underline; }
			h1 { margin: 0 0 .4rem; font-size: clamp(1.9rem, 5vw, 2.6rem); line-height: 1.15; }
			.sub { margin: 0 0 2.5rem; color: #8a8175; font-size: .85rem; }
			.aviso { margin-bottom: 2.5rem; padding: 1rem 1.15rem; border-left: 4px solid #b8874a; background: #f1e8db; }
			.aviso h2 { margin: 0 0 .4rem; font-size: 1rem; color: #6c4718; }
			.aviso p { margin: 0; font-size: .9rem; }
			article { margin-bottom: 3rem; }
			h2 { margin: 0 0 1rem; padding-bottom: .5rem; border-bottom: 2px solid rgb(36 33 29 / .15); font-size: 1.5rem; }
			h3 { margin: 1.75rem 0 .5rem; font-size: 1.05rem; color: #8a5a2b; }
			p, li { font-size: .95rem; }
			a { color: #8a5a2b; }
			ul { padding-left: 1.15rem; }
			code { background: rgb(36 33 29 / .07); padding: .1rem .35rem; border-radius: 4px; font-size: .85em; }
			.cierre { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgb(36 33 29 / .15); font-size: .9rem; color: #8a8175; white-space: pre-line; }
			footer { max-width: 46rem; margin: 3rem auto 0; border-top: 1px solid rgb(36 33 29 / .15); padding-top: 1.25rem; }
			footer nav { display: flex; flex-wrap: wrap; gap: .35rem 1.1rem; margin: 0; font-size: .8rem; color: #8a8175; }
			@media (max-width: 600px) { body { padding: 2rem 1rem 3rem; } }
		</style>
	</body>
</html>
`;

writeFileSync(pagePath, page, 'utf8');
console.log(`Creado apps/${app}/src/pages/aviso-legal.astro`);
