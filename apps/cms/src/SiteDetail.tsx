import { createEffect, createMemo, createResource, createSignal, For, Show } from "solid-js";
import { fetchSite, saveSite } from "./api";
import Shell from "./Shell";
import { EDITABLE_FIELDS, FIELD_FORM, type EditableField, type Site } from "./types";

const emptyDraft = (): Record<EditableField, string> => ({
	name: "",
	tagline: "",
	phone: "",
	street: "",
	postalCode: "",
	city: "",
	siteUrl: "",
});

const draftFrom = (site: Site): Record<EditableField, string> => ({
	name: site.name,
	tagline: site.tagline,
	phone: site.phone,
	street: site.street,
	postalCode: site.postalCode,
	city: site.city,
	siteUrl: site.siteUrl,
});

const formatDate = (ms: number) => new Date(ms).toISOString().slice(0, 10);

export default function SiteDetail(props: { slug: string }) {
	const [site, { refetch }] = createResource(() => props.slug, fetchSite);
	const [draft, setDraft] = createSignal(emptyDraft());
	const [saving, setSaving] = createSignal(false);
	const [flash, setFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);

	// Cada vez que llega la ficha (o se recarga tras guardar), el formulario
	// parte de lo que hay en el fichero.
	createEffect(() => {
		const current = site();
		if (current) setDraft(draftFrom(current));
	});

	const missing = createMemo(() => {
		const current = site();
		return current ? EDITABLE_FIELDS.filter((field) => !current.editable[field]).length : 0;
	});

	const address = createMemo(() => {
		const current = site();
		if (!current) return "—";
		return [current.street, current.postalCode, current.city].filter(Boolean).join(", ") || "—";
	});

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		const current = site();
		if (!current || saving()) return;

		const values = draft();
		const changed: Partial<Record<EditableField, string>> = {};
		for (const field of EDITABLE_FIELDS) {
			if (values[field].trim() !== current[field]) changed[field] = values[field];
		}

		if (Object.keys(changed).length === 0) {
			setFlash({ kind: "ok", text: "No hay cambios que guardar." });
			return;
		}

		setSaving(true);
		setFlash(null);
		try {
			const result = await saveSite(props.slug, changed);
			if (result.ok) {
				setFlash({ kind: "ok", text: "Cambios guardados en src/data/site.ts." });
			} else {
				setFlash({ kind: "error", text: result.errors.join(" · ") });
			}
			await refetch();
		} catch (error) {
			setFlash({ kind: "error", text: String(error) });
		} finally {
			setSaving(false);
		}
	};

	return (
		<Shell title={site()?.name ?? "Ficha"}>
			<p class="back">
				<a href="/">← Todas las webs</a>
			</p>

			<Show when={site.loading}>
				<p class="count">Cargando la ficha…</p>
			</Show>

			<Show when={site.error}>
				<p class="flash error">{String(site.error)}</p>
			</Show>

			<Show when={site()}>
				{(current) => (
					<>
						<section class="head">
							<h1>{current().name}</h1>
							<p class="meta">
								<span class="chip">{current().slug}</span>
								<Show when={current().category}>
									<span class="chip">{current().category}</span>
								</Show>
								<span classList={{ chip: true, warn: current().legalPending, ok: !current().legalPending }}>
									{current().legalPending ? "legales pendientes" : "legales completos"}
								</span>
							</p>
						</section>

						<Show when={flash()}>
							{(message) => <p classList={{ flash: true, [message().kind]: true }}>{message().text}</p>}
						</Show>

						<div class="columns">
							<form class="panel" onSubmit={handleSubmit}>
								<h2>Datos del negocio</h2>
								<p class="note">
									{missing() === 0
										? "Todos los campos son editables."
										: `${missing()} campo(s) no son editables en esta plantilla y se muestran bloqueados.`}
								</p>

								<For each={FIELD_FORM}>
									{(definition) => {
										const editable = () => current().editable[definition.field];
										return (
											<label classList={{ field: true, locked: !editable() }}>
												<span class="name">{definition.label}</span>
												<input
													type={definition.type ?? "text"}
													value={draft()[definition.field]}
													disabled={!editable()}
													autocomplete="off"
													onInput={(event) =>
														setDraft({ ...draft(), [definition.field]: event.currentTarget.value })
													}
												/>
												<Show when={definition.hint}>
													<span class="hint">{definition.hint}</span>
												</Show>
												<Show when={!editable()}>
													<span class="hint">
														Esta plantilla no declara este campo como literal editable.
													</span>
												</Show>
											</label>
										);
									}}
								</For>

								<div class="actions">
									<button type="submit" disabled={saving()}>
										{saving() ? "Guardando…" : "Guardar cambios"}
									</button>
									<button
										type="button"
										class="link-button"
										onClick={() => {
											setDraft(draftFrom(current()));
											setFlash(null);
										}}
									>
										Descartar
									</button>
								</div>
							</form>

							<aside class="panel side">
								<h2>Ficha</h2>
								<dl>
									<dt>URL</dt>
									<dd>
										<Show when={current().siteUrl} fallback="—">
											<a href={current().siteUrl} target="_blank" rel="noreferrer">
												{current().siteUrl.replace("https://", "")}
											</a>
										</Show>
									</dd>
									<dt>Dirección</dt>
									<dd>{address()}</dd>
									<dt>Fotos</dt>
									<dd>
										{current().photoCount} archivo(s) en <code>src/assets/fotos</code>
									</dd>
									<dt>Aviso legal</dt>
									<dd>{current().hasLegalPage ? "Página propia" : "Sin página propia"}</dd>
									<dt>Actualizado</dt>
									<dd class="mono">{formatDate(current().updatedAt)}</dd>
									<dt>Ruta</dt>
									<dd class="mono">apps/{current().slug}/src/data/site.ts</dd>
								</dl>
								<Show when={current().summary}>
									<h3>Resumen publicado</h3>
									<p class="summary">{current().summary}</p>
								</Show>
							</aside>
						</div>
					</>
				)}
			</Show>
		</Shell>
	);
}
