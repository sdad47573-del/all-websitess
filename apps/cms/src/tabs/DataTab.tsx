import { createEffect, createMemo, createSignal, For, Show } from "solid-js";
import { saveSite } from "../api";
import { EDITABLE_FIELDS, FIELD_FORM, type EditableField, type Site } from "../types";

const draftFrom = (site: Site): Record<EditableField, string> => ({
	name: site.name,
	tagline: site.tagline,
	phone: site.phone,
	street: site.street,
	postalCode: site.postalCode,
	city: site.city,
	siteUrl: site.siteUrl,
	lat: site.lat,
	lng: site.lng,
});

const formatDate = (ms: number) => new Date(ms).toISOString().slice(0, 10);

export default function DataTab(props: { site: Site; onSaved: () => unknown }) {
	const [draft, setDraft] = createSignal(draftFrom(props.site));
	const [saving, setSaving] = createSignal(false);
	const [flash, setFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);

	createEffect(() => setDraft(draftFrom(props.site)));

	const missing = createMemo(
		() => EDITABLE_FIELDS.filter((field) => !props.site.editable[field]).length,
	);

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		if (saving()) return;

		const values = draft();
		const changed: Partial<Record<EditableField, string>> = {};
		for (const field of EDITABLE_FIELDS) {
			if (values[field].trim() !== props.site[field]) changed[field] = values[field];
		}

		if (Object.keys(changed).length === 0) {
			setFlash({ kind: "ok", text: "No hay cambios que guardar." });
			return;
		}

		setSaving(true);
		setFlash(null);
		try {
			const result = await saveSite(props.site.slug, changed);
			setFlash(
				result.ok
					? { kind: "ok", text: "Cambios guardados en src/data/site.ts." }
					: { kind: "error", text: result.errors.join(" · ") },
			);
			await props.onSaved();
		} catch (error) {
			setFlash({ kind: "error", text: String(error) });
		} finally {
			setSaving(false);
		}
	};

	return (
		<>
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
							const editable = () => props.site.editable[definition.field];
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
								setDraft(draftFrom(props.site));
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
							<Show when={props.site.siteUrl} fallback="—">
								<a href={props.site.siteUrl} target="_blank" rel="noreferrer">
									{props.site.siteUrl.replace("https://", "")}
								</a>
							</Show>
						</dd>
						<dt>Dirección</dt>
						<dd>
							{[props.site.street, props.site.postalCode, props.site.city]
								.filter(Boolean)
								.join(", ") || "—"}
						</dd>
						<dt>Fotos</dt>
						<dd>
							{props.site.photoCount} archivo(s) en <code>src/assets/fotos</code>
						</dd>
						<dt>Aviso legal</dt>
						<dd>{props.site.hasLegalPage ? "Página propia" : "Sin página propia"}</dd>
						<dt>Actualizado</dt>
						<dd class="mono">{formatDate(props.site.updatedAt)}</dd>
						<dt>Ruta</dt>
						<dd class="mono">apps/{props.site.slug}/src/data/site.ts</dd>
					</dl>
					<Show when={props.site.summary}>
						<h3>Resumen publicado</h3>
						<p class="summary">{props.site.summary}</p>
					</Show>
				</aside>
			</div>
		</>
	);
}
