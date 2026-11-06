import { describe, expect, test } from "bun:test";
import { diffLines, diffStats } from "./diff";

describe("diff", () => {
	test("sin cambios devuelve todo igual", () => {
		const lines = diffLines("uno\ndos\ntres", "uno\ndos\ntres");
		expect(lines.every((line) => line.type === "same")).toBe(true);
		expect(diffStats(lines)).toEqual({ added: 0, removed: 0 });
	});

	test("detecta líneas añadidas y quitadas", () => {
		const lines = diffLines("uno\ndos\ntres", "uno\ntres\ncuatro");
		const added = lines.filter((line) => line.type === "add").map((line) => line.text);
		const removed = lines.filter((line) => line.type === "remove").map((line) => line.text);

		expect(removed).toContain("dos");
		expect(added).toEqual(["cuatro"]);
		expect(diffStats(lines)).toEqual({ added: 1, removed: 1 });
	});

	test("numera las líneas de cada lado", () => {
		const lines = diffLines("a\nb", "a\nc");
		const removed = lines.find((line) => line.type === "remove");
		const added = lines.find((line) => line.type === "add");

		expect(removed).toMatchObject({ text: "b", oldLine: 2, newLine: null });
		expect(added).toMatchObject({ text: "c", oldLine: null, newLine: 2 });
	});
});
