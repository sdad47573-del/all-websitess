import { createMemo, createSignal, Show } from "solid-js";
import type { Site } from "../types";

type Device = "escritorio" | "tablet" | "movil";

const DEVICES: Array<{ id: Device; label: string; width: string }> = [
	{ id: "escritorio", label: "Escritorio", width: "100%" },
	{ id: "tablet", label: "Tablet", width: "820px" },
	{ id: "movil", label: "Móvil", width: "390px" },
];

export default function PreviewTab(props: { site: Site }) {
	const [device, setDevice] = createSignal<Device>("escritorio");
	const [reload, setReload] = createSignal(0);

	const width = createMemo(
		() => DEVICES.find((item) => item.id === device())?.width ?? "100%",
	);
	const src = createMemo(() => `/preview/${props.site.slug}/?v=${reload()}`);

	return (
		<>
			<div class="preview-toolbar">
				<div class="view-toggle" role="group" aria-label="Tamaño de la vista previa">
					{DEVICES.map((item) => (
						<button
							type="button"
							classList={{ tab: true, active: device() === item.id }}
							aria-pressed={device() === item.id}
							onClick={() => setDevice(item.id)}
						>
							{item.label}
						</button>
					))}
				</div>
				<div class="preview-actions">
					<button type="button" class="ghost-button" onClick={() => setReload(reload() + 1)}>
						Recargar
					</button>
					<a class="ghost-button" href={src()} target="_blank" rel="noreferrer">
						Abrir en pestaña nueva ↗
					</a>
				</div>
			</div>

			<Show
				when={props.site.hasBuild}
				fallback={
					<div class="panel notice">
						<h2>Esta web aún no tiene build</h2>
						<p>
							La vista previa sale del prerender local. Ejecuta{" "}
							<code>bun run build</code> en <code>apps/{props.site.slug}</code> y recarga
							la ficha para verla aquí mismo.
						</p>
						<Show when={props.site.siteUrl}>
							<p>
								Mientras tanto puedes abrir la versión publicada:{" "}
								<a href={props.site.siteUrl} target="_blank" rel="noreferrer">
									{props.site.siteUrl}
								</a>
							</p>
						</Show>
					</div>
				}
			>
				<div class="browser">
					<div class="browser-bar">
						<span class="dot" />
						<span class="dot" />
						<span class="dot" />
						<span class="browser-url">
							/{props.site.slug}/ · {device()}
						</span>
					</div>
					<div class="preview-stage">
						<iframe
							class="preview-frame"
							src={src()}
							title={`Vista previa de ${props.site.name}`}
							style={{ width: width() }}
							loading="lazy"
						/>
					</div>
				</div>
				<p class="hint preview-note">
					Prerender local de <code>apps/{props.site.slug}/dist</code>. Los enlaces internos
					navegan dentro de la vista previa; para cambios de datos o plantillas, guarda y
					recarga (o vuelve a hacer build).
				</p>
			</Show>
		</>
	);
}
