import { createResource, createSignal, For, Show } from "solid-js";
import { deleteMedia, fetchMedia, mediaUrl, uploadMedia } from "../api";
import type { Site } from "../types";

const formatSize = (bytes: number) =>
	bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;

export default function MediaTab(props: { site: Site; onSaved: () => unknown }) {
	const [media, { refetch }] = createResource(() => props.site.slug, fetchMedia);
	const [busy, setBusy] = createSignal(false);
	const [flash, setFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);

	let newFile: HTMLInputElement | undefined;
	const replaceInputs = new Map<string, HTMLInputElement>();

	const run = async (task: () => Promise<string>) => {
		setBusy(true);
		setFlash(null);
		try {
			const message = await task();
			setFlash({ kind: "ok", text: message });
			await refetch();
			await props.onSaved();
		} catch (error) {
			setFlash({ kind: "error", text: String(error instanceof Error ? error.message : error) });
		} finally {
			setBusy(false);
		}
	};

	const upload = (file: File | undefined, name?: string) => {
		if (!file) return;
		void run(async () => {
			await uploadMedia(props.site.slug, file, name);
			return name ? `Imagen ${name} reemplazada.` : `Imagen ${file.name} subida.`;
		});
	};

	const remove = (name: string, referenced: boolean) => {
		if (referenced) return;
		if (!window.confirm(`¿Borrar ${name}? Esta acción no se puede deshacer.`)) return;
		void run(async () => {
			await deleteMedia(props.site.slug, name);
			return `Imagen ${name} borrada.`;
		});
	};

	return (
		<>
			<Show when={flash()}>
				{(message) => <p classList={{ flash: true, [message().kind]: true }}>{message().text}</p>}
			</Show>

			<section class="panel">
				<h2>Imágenes del proyecto</h2>
				<p class="note">
					Viven en <code>src/assets/fotos</code>. Reemplazar una imagen conserva el nombre, así que
					la web la usa sin tocar código. Una imagen nueva no aparece hasta que la referencies en
					la plantilla.
				</p>

				<div class="upload">
					<input
						ref={newFile}
						type="file"
						accept="image/png,image/jpeg,image/webp,image/avif,image/svg+xml,image/gif"
					/>
					<button
						type="button"
						disabled={busy()}
						onClick={() => {
							upload(newFile?.files?.[0]);
							if (newFile) newFile.value = "";
						}}
					>
						{busy() ? "Trabajando…" : "Subir imagen"}
					</button>
				</div>

				<Show when={media.loading}>
					<p class="count">Cargando imágenes…</p>
				</Show>
				<Show when={media.error}>
					<p class="flash error">{String(media.error)}</p>
				</Show>

				<Show when={media()}>
					{(items) => (
						<Show
							when={items().length > 0}
							fallback={<p class="note">Esta web no tiene imágenes en src/assets/fotos.</p>}
						>
							<div class="media-grid">
								<For each={items()}>
									{(item) => (
										<figure class="media-card">
											<img
												src={mediaUrl(props.site.slug, item.name)}
												alt=""
												loading="lazy" decoding="async"
											/>
											<figcaption>
												<span class="media-name" title={item.name}>
													{item.name}
												</span>
												<span class="hint">{formatSize(item.size)}</span>
												<Show
													when={item.referencedIn.length > 0}
													fallback={<span class="hint">Sin referencias</span>}
												>
													<span class="hint">En uso: {item.referencedIn.join(", ")}</span>
												</Show>
												<span class="media-actions">
													<button
														type="button"
														class="link-button"
														disabled={busy()}
														onClick={() => replaceInputs.get(item.name)?.click()}
													>
														Reemplazar
													</button>
													<button
														type="button"
														class="link-button danger"
														disabled={busy() || item.referencedIn.length > 0}
														title={
															item.referencedIn.length > 0
																? "Quita la referencia del código antes de borrarla"
																: "Borrar imagen"
														}
														onClick={() => remove(item.name, item.referencedIn.length > 0)}
													>
														Borrar
													</button>
												</span>
												<input
													ref={(element) => replaceInputs.set(item.name, element)}
													class="hidden"
													type="file"
													accept="image/png,image/jpeg,image/webp,image/avif,image/svg+xml,image/gif"
													onChange={(event) => {
														upload(event.currentTarget.files?.[0], item.name);
														event.currentTarget.value = "";
													}}
												/>
											</figcaption>
										</figure>
									)}
								</For>
							</div>
						</Show>
					)}
				</Show>
			</section>
		</>
	);
}
