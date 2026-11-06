import { createEffect, createMemo, createSignal, Show } from "solid-js";
import { saveSite } from "../api";
import { GEO_FORM, type Site } from "../types";

export default function MapTab(props: { site: Site; onSaved: () => unknown }) {
	const [lat, setLat] = createSignal(props.site.lat);
	const [lng, setLng] = createSignal(props.site.lng);
	const [saving, setSaving] = createSignal(false);
	const [flash, setFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);

	createEffect(() => {
		setLat(props.site.lat);
		setLng(props.site.lng);
	});

	const coordinates = createMemo(() => {
		const latitude = Number(lat());
		const longitude = Number(lng());
		if (!lat().trim() || !lng().trim()) return null;
		if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
		return { latitude, longitude };
	});

	const embed = createMemo(() => {
		const point = coordinates();
		if (!point) return null;
		return `https://maps.google.com/maps?q=${point.latitude},${point.longitude}&z=16&hl=es&output=embed`;
	});

	const mapsLink = createMemo(() => {
		const point = coordinates();
		if (!point) return null;
		return `https://www.google.com/maps/search/?api=1&query=${point.latitude},${point.longitude}`;
	});

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		if (saving()) return;

		const changed: Record<string, string> = {};
		if (lat().trim() !== props.site.lat) changed.lat = lat();
		if (lng().trim() !== props.site.lng) changed.lng = lng();

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
					? { kind: "ok", text: "Coordenadas guardadas en BUSINESS.geo." }
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
					<h2>Mapa y coordenadas</h2>
					<p class="note">
						Las coordenadas alimentan el mapa incrustado, el enlace «Cómo llegar» y el schema
						LocalBusiness. Están en <code>BUSINESS.geo</code>.
					</p>

					<div class="field-row">
						{(() => {
							const latField = GEO_FORM[0];
							return (
								<label classList={{ field: true, locked: !props.site.editable.lat }}>
									<span class="name">{latField.label}</span>
									<input
										type="number"
										step="0.000001"
										value={lat()}
										disabled={!props.site.editable.lat}
										onInput={(event) => setLat(event.currentTarget.value)}
									/>
									<Show when={latField.hint}>
										<span class="hint">{latField.hint}</span>
									</Show>
									<Show when={!props.site.editable.lat}>
										<span class="hint">Esta plantilla no usa BUSINESS.geo.</span>
									</Show>
								</label>
							);
						})()}

						{(() => {
							const lngField = GEO_FORM[1];
							return (
								<label classList={{ field: true, locked: !props.site.editable.lng }}>
									<span class="name">{lngField.label}</span>
									<input
										type="number"
										step="0.000001"
										value={lng()}
										disabled={!props.site.editable.lng}
										onInput={(event) => setLng(event.currentTarget.value)}
									/>
									<Show when={lngField.hint}>
										<span class="hint">{lngField.hint}</span>
									</Show>
									<Show when={!props.site.editable.lng}>
										<span class="hint">Esta plantilla no usa BUSINESS.geo.</span>
									</Show>
								</label>
							);
						})()}
					</div>

					<div class="actions">
						<button type="submit" disabled={saving() || !coordinates()}>
							{saving() ? "Guardando…" : "Guardar coordenadas"}
						</button>
						<a class="link-button" href={mapsLink() ?? "#"} target="_blank" rel="noreferrer">
							Abrir en Google Maps
						</a>
					</div>

					<Show when={!props.site.editable.lat || !props.site.editable.lng}>
						<p class="note">
							Si los campos están bloqueados, la web no declara <code>geo</code> dentro de{" "}
							<code>BUSINESS</code>; añádelo desde la pestaña de código.
						</p>
					</Show>
				</form>

				<aside class="panel">
					<h2>Vista previa</h2>
					<Show
						when={embed()}
						fallback={<p class="note">Introduce coordenadas válidas para ver el mapa.</p>}
					>
						{(source) => (
							<iframe
								class="map-frame"
								src={source()}
								title="Mapa del negocio"
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							/>
						)}
					</Show>
					<Show when={coordinates()}>
						<p class="note mono">
							{coordinates()!.latitude.toFixed(6)}, {coordinates()!.longitude.toFixed(6)}
						</p>
					</Show>
				</aside>
			</div>
		</>
	);
}
