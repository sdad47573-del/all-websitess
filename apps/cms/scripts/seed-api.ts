import { transaction } from "@app-server";
import { readSectionCatalog } from "../lib/catalog";
import { readLibraryEntries } from "../lib/library";
import { ogImage, hasBuild } from "../lib/preview";
import { pageUsesSections, readSections } from "../lib/sections";
import { listSites } from "../lib/sites";
import { openCmsDatabase } from "../api/db";

/**
 * Importa una sola vez el contenido actual de `apps/` a SQLite.
 *
 * No se ejecuta al arrancar la API: así el servidor nunca depende de Git. Si
 * cambias una web en el repositorio y quieres reflejarlo, vuelve a ejecutarlo.
 */
const db = openCmsDatabase();
const sites = listSites();
const now = Date.now();

const insertSite = db.prepare(
	"INSERT INTO sites (slug, payload, updated_at) VALUES (?, ?, ?)",
);
const insertSections = db.prepare(
	"INSERT INTO sections (site_slug, payload, uses_pieces, updated_at) VALUES (?, ?, ?, ?)",
);
const insertLibrary = db.prepare(
	"INSERT INTO library (clave, payload, updated_at) VALUES (?, ?, ?)",
);
const insertCatalog = db.query(
	"INSERT INTO catalog (id, payload, updated_at) VALUES (1, ?, ?)",
);
const insertMeta = db.query("INSERT INTO meta (key, value) VALUES (?, ?)");
const library = readLibraryEntries();

let sectionCount = 0;
let brokenSections = 0;

transaction(db, () => {
	db.exec("DELETE FROM sections; DELETE FROM library; DELETE FROM catalog; DELETE FROM sites; DELETE FROM meta;");

	for (const site of sites) {
		let sections = null;
		try {
			sections = readSections(site.slug);
		} catch {
			// Una web con el JSON roto se importa sin piezas, pero no corta el resto.
			brokenSections += 1;
		}

		const data = {
			...site,
			hasBuild: hasBuild(site.slug),
			hasOg: Boolean(ogImage(site.slug)),
			hasSections: Boolean(sections),
		};
		insertSite.run(site.slug, JSON.stringify(data), now);

		if (sections) {
			insertSections.run(
				site.slug,
				JSON.stringify(sections),
				pageUsesSections(site.slug) ? 1 : 0,
				now,
			);
			sectionCount += sections.secciones.length;
		}
	}

	for (const entry of library) {
		insertLibrary.run(entry.clave, JSON.stringify(entry), now);
	}

	insertCatalog.run(JSON.stringify(readSectionCatalog()), now);
	insertMeta.run("seeded_at", String(now));
	insertMeta.run("source", "apps/");
});

console.log(
	`API lista: ${sites.length} webs, ${sectionCount} piezas, ${library.length} modelos de biblioteca.`,
);
if (brokenSections > 0) {
	console.log(`${brokenSections} webs con secciones inválidas se han importado sin piezas.`);
}
console.log(`Base de datos: ${process.env.CMS_DB_PATH ?? "apps/cms/data/cms.sqlite"}`);
