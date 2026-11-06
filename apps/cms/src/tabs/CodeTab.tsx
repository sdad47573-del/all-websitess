import { createEffect, createMemo, createResource, createSignal, For, Show } from "solid-js";
import {
	fetchFiles,
	fetchHistory,
	readFile,
	readSnapshot,
	restoreSnapshot,
	writeFile,
} from "../api";
import { diffLines, diffStats, type DiffLine } from "../diff";
import type { Site } from "../types";

const formatMoment = (ms: number) =>
	new Date(ms).toLocaleString("es-ES", { dateStyle: "short", timeStyle: "short" });

export default function CodeTab(props: { site: Site; onSaved: () => unknown }) {
	const [files] = createResource(() => props.site.slug, fetchFiles);
	const [selected, setSelected] = createSignal("pages/index.astro");
	const [content] = createResource(selected, (path) => readFile(props.site.slug, path));
	const [history, { refetch: refetchHistory }] = createResource(selected, (path) =>
		fetchHistory(props.site.slug, path),
	);

	const [draft, setDraft] = createSignal("");
	const [saved, setSaved] = createSignal("");
	const [saving, setSaving] = createSignal(false);
	const [showHistory, setShowHistory] = createSignal(false);
	const [flash, setFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);
	const [compare, setCompare] = createSignal<{
		id: string;
		savedAt: number;
		lines: DiffLine[];
	} | null>(null);
	const [comparing, setComparing] = createSignal(false);

	createEffect(() => {
		const loaded = content();
		if (typeof loaded === "string") {
			setDraft(loaded);
			setSaved(loaded);
		}
	});

	const dirty = createMemo(() => draft() !== saved());

	const save = async () => {
		if (saving() || !dirty()) return;
		setSaving(true);
		setFlash(null);
		try {
			await writeFile(props.site.slug, selected(), draft());
			setCompare(null);
			setSaved(draft());
			setFlash({ kind: "ok", text: `${selected()} guardado.` });
			await refetchHistory();
			await props.onSaved();
		} catch (error) {
			setFlash({ kind: "error", text: String(error instanceof Error ? error.message : error) });
		} finally {
			setSaving(false);
		}
	};

	const restore = async (id: string) => {
		if (!window.confirm("¿Restaurar esta versión? La actual quedará en el historial.")) return;
		setFlash(null);
		try {
			await restoreSnapshot(props.site.slug, selected(), id);
			setCompare(null);
			setFlash({ kind: "ok", text: "Versión restaurada." });
			const [fresh] = await Promise.all([readFile(props.site.slug, selected()), refetchHistory()]);
			setDraft(fresh);
			setSaved(fresh);
			await props.onSaved();
		} catch (error) {
			setFlash({ kind: "error", text: String(error instanceof Error ? error.message : error) });
		}
	};

	const compareVersion = async (version: { id: string; savedAt: number }) => {
		setComparing(true);
		setFlash(null);
		try {
			const before = await readSnapshot(props.site.slug, selected(), version.id);
			setCompare({
				id: version.id,
				savedAt: version.savedAt,
				lines: diffLines(before, saved()),
			});
		} catch (error) {
			setFlash({ kind: "error", text: String(error instanceof Error ? error.message : error) });
		} finally {
			setComparing(false);
		}
	};

	const preview = async (id: string) => {
		setFlash(null);
		try {
			const version = await readSnapshot(props.site.slug, selected(), id);
			setDraft(version);
			setFlash({
				kind: "ok",
				text: "Versión cargada en el editor. Guárdala para aplicarla.",
			});
		} catch (error) {
			setFlash({ kind: "error", text: String(error instanceof Error ? error.message : error) });
		}
	};

	return (
		<>
			<Show when={flash()}>
				{(message) => <p classList={{ flash: true, [message().kind]: true }}>{message().text}</p>}
			</Show>

			<div class="code-layout">
				<aside class="panel files">
					<h2>Plantillas</h2>
					<Show when={files()}>
						{(items) => (
							<ul>
								<For each={items()}>
									{(file) => (
										<li>
											<button
												type="button"
												classList={{ "file-button": true, active: selected() === file.path }}
												onClick={() => {
													setFlash(null);
													setCompare(null);
													setSelected(file.path);
												}}
											>
												<span>{file.path}</span>
												<span class="hint">{Math.max(1, Math.round(file.size / 1024))} KB</span>
											</button>
										</li>
									)}
								</For>
							</ul>
						)}
					</Show>
					<Show when={files.error}>
						<p class="flash error">{String(files.error)}</p>
					</Show>

					<button
						type="button"
						class="ghost-button history-toggle"
						onClick={() => setShowHistory(!showHistory())}
					>
						{showHistory() ? "Ocultar historial" : `Historial (${history()?.length ?? 0})`}
					</button>

					<Show when={showHistory()}>
						<Show
							when={(history() ?? []).length > 0}
							fallback={<p class="note">Sin versiones todavía para este fichero.</p>}
						>
							<ul class="history">
								<For each={history() ?? []}>
									{(version) => (
										<li>
											<span class="hint">{formatMoment(version.savedAt)}</span>
											<span class="history-actions">
												<button type="button" class="link-button" onClick={() => preview(version.id)}>
													Ver
												</button>
												<button
													type="button"
													class="link-button"
													disabled={comparing()}
													onClick={() => void compareVersion(version)}
												>
													Comparar
												</button>
												<button type="button" class="link-button" onClick={() => restore(version.id)}>
													Restaurar
												</button>
											</span>
										</li>
									)}
								</For>
							</ul>
						</Show>
					</Show>
				</aside>

				<section class="panel editor-panel">
					<div class="editor-head">
						<h2>{selected()}</h2>
						<span classList={{ chip: true, warn: dirty() }}>{dirty() ? "sin guardar" : "guardado"}</span>
					</div>
					<p class="note">
						Editas el fichero real de la web. El panel no compila: si rompes la plantilla, el
						build fallará hasta que lo corrijas. Cada guardado deja la versión anterior en el
						historial.
					</p>

					<Show when={content.loading}>
						<p class="count">Cargando…</p>
					</Show>
					<Show when={content.error}>
						<p class="flash error">{String(content.error)}</p>
					</Show>

					<textarea
						class="editor"
						spellcheck={false}
						value={draft()}
						onInput={(event) => setDraft(event.currentTarget.value)}
						onKeyDown={(event) => {
							if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
								event.preventDefault();
								void save();
							}
						}}
						disabled={content.loading}
					/>

					<div class="actions">
						<button type="button" onClick={save} disabled={saving() || !dirty()}>
							{saving() ? "Guardando…" : "Guardar fichero"}
						</button>
						<button
							type="button"
							class="link-button"
							disabled={!dirty()}
							onClick={() => setDraft(saved())}
						>
							Descartar
						</button>
						<span class="hint">Ctrl/⌘ + S guarda</span>
					</div>

					<Show when={compare()}>
						{(diff) => (
							<section class="diff-panel">
								<div class="diff-head">
									<h3>Cambios desde {formatMoment(diff().savedAt)}</h3>
									<div class="diff-meta">
										<span class="chip ok">+{diffStats(diff().lines).added}</span>
										<span class="chip danger">−{diffStats(diff().lines).removed}</span>
										<button
											type="button"
											class="link-button"
											onClick={() => setCompare(null)}
										>
											Cerrar
										</button>
									</div>
								</div>
								<div class="diff">
									<For each={diff().lines}>
										{(line) => (
											<span classList={{ "diff-line": true, [line.type]: true }}>
												<span class="diff-num">{line.oldLine ?? ""}</span>
												<span class="diff-num">{line.newLine ?? ""}</span>
												<span class="diff-sign">
													{line.type === "add" ? "+" : line.type === "remove" ? "−" : " "}
												</span>
												<span>{line.text || " "}</span>
											</span>
										)}
									</For>
								</div>
							</section>
						)}
					</Show>
				</section>
			</div>
		</>
	);
}
