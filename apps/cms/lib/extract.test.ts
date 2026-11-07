import { describe, expect, test } from "bun:test";
import { extractPieces } from "./extract";

const source = `
<main>
	<section id="inicio"><h1>Portada</h1><p>Esto no debe entrar.</p></section>
	<section id="casa">
		<p class="eyebrow">La casa</p>
		<h2>Pan <br /><em>fresco.</em></h2>
		<p>Un párrafo suficientemente largo para que la pieza tenga contenido real.</p>
		<p>Y otro párrafo que completa la historia de la casa.</p>
	</section>
	<section id="preguntas">
		<h2>Preguntas</h2>
		<details>
			<summary>¿Abre los domingos?</summary>
			<p>Sí, por la mañana.</p>
		</details>
	</section>
	<section id="visitanos">
		<h2>Dónde estamos</h2>
		<p>Calle Mayor, 1. Abrimos todos los días.</p>
	</section>
	<section id="fotos">
		<h2>Fotos</h2>
		<p>Esta sección no se extrae porque necesita imágenes.</p>
	</section>
	<LocalAbout
		label="La casa"
		title="Pan <br /><em>fresco.</em>"
		paragraphs={[
			'Un párrafo largo escrito directamente en el componente.',
			'Otro párrafo del componente.',
		]}
	/>
	<LocalFaq
		eyebrow="Preguntas"
		title="Antes de venir"
		items={[{ q: '¿Hay terraza?', a: 'Sí, en la parte de atrás.' }]}
	/>
	<LocalVisit
		eyebrow="Calle Mayor, 1"
		title="Visítanos"
		reserveNote="Llama antes si venís en grupo."
	/>
</main>
`;

describe("extraer piezas del HTML", () => {
	const pieces = extractPieces(source);

	test("extrae secciones estáticas y descarta portada y galería", () => {
		expect(pieces.some((piece) => piece.id === "inicio")).toBe(false);
		expect(pieces.some((piece) => piece.id === "fotos")).toBe(false);
		expect(pieces.find((piece) => piece.id === "casa")?.tipo).toBe("about");
		expect(pieces.find((piece) => piece.id === "preguntas")?.tipo).toBe("faq");
		expect(pieces.find((piece) => piece.id === "visitanos")?.tipo).toBe("visita");
	});

	test("lee las props literales de los componentes compartidos", () => {
		expect(pieces.some((piece) => piece.titulo === "Pan fresco.")).toBe(true);
		expect(pieces.some((piece) => piece.titulo === "Antes de venir")).toBe(true);
		expect(pieces.some((piece) => piece.tipo === "visita" && piece.nota?.includes("grupo"))).toBe(
			true,
		);
	});

	test("no inventa contenido cuando el texto viene de una expresión", () => {
		const dynamic = `<section id="casa"><h2>{titulo}</h2><p>{texto}</p></section>`;
		expect(extractPieces(dynamic)).toHaveLength(0);
	});
});
