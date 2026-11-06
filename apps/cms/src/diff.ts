export type DiffLineType = "same" | "add" | "remove";

export interface DiffLine {
	type: DiffLineType;
	text: string;
	oldLine: number | null;
	newLine: number | null;
}

/** Diferencia por líneas entre dos textos (antes → después). */
export function diffLines(before: string, after: string): DiffLine[] {
	const a = before.split(/\r?\n/);
	const b = after.split(/\r?\n/);

	// Matriz de subsecuencia común más larga, de atrás hacia delante.
	const lcs: number[][] = Array.from({ length: a.length + 1 }, () =>
		new Array<number>(b.length + 1).fill(0),
	);
	for (let i = a.length - 1; i >= 0; i -= 1) {
		for (let j = b.length - 1; j >= 0; j -= 1) {
			lcs[i][j] =
				a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
		}
	}

	const lines: DiffLine[] = [];
	let i = 0;
	let j = 0;
	while (i < a.length && j < b.length) {
		if (a[i] === b[j]) {
			lines.push({ type: "same", text: a[i], oldLine: i + 1, newLine: j + 1 });
			i += 1;
			j += 1;
		} else if (lcs[i + 1][j] >= lcs[i][j + 1]) {
			lines.push({ type: "remove", text: a[i], oldLine: i + 1, newLine: null });
			i += 1;
		} else {
			lines.push({ type: "add", text: b[j], oldLine: null, newLine: j + 1 });
			j += 1;
		}
	}
	while (i < a.length) {
		lines.push({ type: "remove", text: a[i], oldLine: i + 1, newLine: null });
		i += 1;
	}
	while (j < b.length) {
		lines.push({ type: "add", text: b[j], oldLine: null, newLine: j + 1 });
		j += 1;
	}
	return lines;
}

export const diffStats = (lines: DiffLine[]) => ({
	added: lines.filter((line) => line.type === "add").length,
	removed: lines.filter((line) => line.type === "remove").length,
});
