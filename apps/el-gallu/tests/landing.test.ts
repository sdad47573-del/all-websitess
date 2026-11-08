import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('landing de El Gallu', () => {
	test('presenta los datos NAP y permite llamar por teléfono', () => {
		expect(page).toContain('{business.streetAddress}');
		expect(page).toContain('{business.postalCode}');
		expect(page).toContain('{business.city}');
		expect(page).toContain('href={phoneHrefs[0]}');
		expect(page).toContain('{business.phones[0]}');
	});

	test('incluye el mapa embebido y enlaces de ubicación', () => {
		expect(page).toContain('src={mapEmbedUrl}');
		expect(page).toContain('href={directionsUrl}');
		expect(page).toContain('href={mapsUrl}');
	});

	test('usa la foto de la ficha de Maps desde un asset local, sin hotlinkearla', () => {
		expect(page).toContain("import { Image } from 'astro:assets';");
		expect(page).toContain('src={dishPhoto.src}');
		expect(page).toContain('alt={dishPhoto.alt}');
		expect(page).toContain('format="webp"');
		// Sigue sin enlazar directamente a lh3.googleusercontent.com.
		expect(page).not.toContain('googleusercontent');
		expect(page).not.toContain('photoUrl');
	});

	test('monta una galería con las fotos de la carta', () => {
		expect(page).toContain('class="gallery-section"');
		expect(page).toContain('id="fotos"');
		expect(page).toContain('gallery.map((photo)');
		expect(page).toContain('alt={photo.alt}');
		expect(page).toContain('loading="lazy"');
		expect(page).toContain('<a href="#fotos">Fotos</a>');
	});

	test('incluye metadatos SEO y una llamada fija en móvil', () => {
		expect(page).toContain('rel="canonical"');
		expect(page).toContain('application/ld+json');
		expect(page).toContain('phone-cta');
		expect(styles).toContain('.phone-cta');
	});

	test('mantiene la navegación de secciones disponible en móvil', () => {
		expect(page).toContain('class="mobile-nav"');
		expect(page).toContain('aria-label="Navegación móvil"');
		expect(page).toContain('href="#carta"');
		expect(page).toContain('href="#contacto"');
		expect(styles).toContain('.mobile-nav');
	});
});
