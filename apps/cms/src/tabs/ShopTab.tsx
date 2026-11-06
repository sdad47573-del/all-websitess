import { createEffect, createResource, createSignal, For, Show } from "solid-js";
import { fetchMedia, fetchShop, publishShop, saveShop, unpublishShop } from "../api";
import { DEFAULT_SHOP, type Shop, type ShopProduct, type Site } from "../types";

const newProduct = (): ShopProduct => ({
	id: `p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
	nombre: "",
	descripcion: "",
	precio: 0,
	imagen: "",
	stock: 0,
	visible: true,
});

export default function ShopTab(props: { site: Site; onSaved: () => unknown }) {
	const [state, { refetch }] = createResource(() => props.site.slug, fetchShop);
	const [media] = createResource(() => props.site.slug, fetchMedia);

	const [draft, setDraft] = createSignal<Shop>({ ...DEFAULT_SHOP });
	const [busy, setBusy] = createSignal(false);
	const [flash, setFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);

	createEffect(() => {
		const loaded = state()?.shop;
		if (loaded) setDraft(loaded);
	});

	const patch = (index: number, changes: Partial<ShopProduct>) => {
		setDraft({
			...draft(),
			productos: draft().productos.map((product, position) =>
				position === index ? { ...product, ...changes } : product,
			),
		});
	};

	const fail = (error: unknown) =>
		setFlash({
			kind: "error",
			text: error instanceof Error ? error.message : String(error),
		});

	const save = async (): Promise<boolean> => {
		if (busy()) return false;

		setBusy(true);
		setFlash(null);
		try {
			const result = await saveShop(props.site.slug, draft());
			setDraft(result.shop);
			setFlash({ kind: "ok", text: "Tienda guardada en src/data/tienda.json." });
			await refetch();
			return true;
		} catch (error) {
			fail(error);
			return false;
		} finally {
			setBusy(false);
		}
	};

	const publish = async () => {
		if (!(await save())) return;

		setBusy(true);
		setFlash(null);
		try {
			await publishShop(props.site.slug);
			setFlash({
				kind: "ok",
				text: "Página /tienda publicada. Lanza el build de la web para verla.",
			});
			await refetch();
			await props.onSaved();
		} catch (error) {
			fail(error);
		} finally {
			setBusy(false);
		}
	};

	const unpublish = async () => {
		if (!window.confirm("¿Quitar la página /tienda de esta web?")) return;

		setBusy(true);
		setFlash(null);
		try {
			await unpublishShop(props.site.slug);
			setFlash({ kind: "ok", text: "Página /tienda eliminada." });
			await refetch();
			await props.onSaved();
		} catch (error) {
			fail(error);
		} finally {
			setBusy(false);
		}
	};

	return (
		<>
			<Show when={flash()}>
				{(message) => <p classList={{ flash: true, [message().kind]: true }}>{message().text}</p>}
			</Show>

			<Show when={state.loading}>
				<p class="count">Cargando la tienda…</p>
			</Show>
			<Show when={state.error}>
				<p class="flash error">{String(state.error)}</p>
			</Show>

			<section class="panel">
				<h2>Tienda de la web</h2>
				<p class="note">
					Catálogo estático con carrito y pedido por WhatsApp. No cobra ni guarda pedidos:
					el cliente cierra el encargo en el chat. Los cambios se ven al hacer build.
				</p>

				<label class="checkbox-field">
					<input
						type="checkbox"
						checked={draft().activa}
						onChange={(event) => setDraft({ ...draft(), activa: event.currentTarget.checked })}
					/>
					<span>Tienda activa</span>
				</label>

				<div class="field-row">
					<label class="field">
						<span class="name">Título</span>
						<input
							value={draft().titulo}
							maxlength="80"
							onInput={(event) => setDraft({ ...draft(), titulo: event.currentTarget.value })}
						/>
					</label>
					<label class="field">
						<span class="name">WhatsApp de pedidos</span>
						<input
							value={draft().whatsapp}
							placeholder="34600111222"
							inputmode="tel"
							onInput={(event) => setDraft({ ...draft(), whatsapp: event.currentTarget.value })}
						/>
						<span class="hint">Con prefijo de país. Si está vacío se usa el teléfono de la ficha.</span>
					</label>
					<label class="field">
						<span class="name">Moneda</span>
						<select
							class="role-select"
							value={draft().moneda}
							onChange={(event) => setDraft({ ...draft(), moneda: event.currentTarget.value })}
						>
							<option value="EUR">EUR (€)</option>
							<option value="USD">USD ($)</option>
							<option value="GBP">GBP (£)</option>
						</select>
					</label>
				</div>

				<label class="field">
					<span class="name">Recogida o entrega</span>
					<input
						value={draft().recogida}
						maxlength="140"
						placeholder="Recogida en el local, de 12:00 a 16:00"
						onInput={(event) => setDraft({ ...draft(), recogida: event.currentTarget.value })}
					/>
				</label>

				<label class="field">
					<span class="name">Nota para el cliente</span>
					<input
						value={draft().nota}
						maxlength="300"
						placeholder="Pedidos con 24 h de antelación"
						onInput={(event) => setDraft({ ...draft(), nota: event.currentTarget.value })}
					/>
				</label>
			</section>

			<section class="panel store-section">
				<div class="store-head">
					<h2>{draft().productos.length} producto(s)</h2>
					<button
						type="button"
						class="ghost-button"
						disabled={draft().productos.length >= 80}
						onClick={() => setDraft({ ...draft(), productos: [...draft().productos, newProduct()] })}
					>
						+ Añadir producto
					</button>
				</div>

				<Show
					when={draft().productos.length > 0}
					fallback={<p class="note">Todavía no hay productos. Añade el primero para publicar la tienda.</p>}
				>
					<div class="store-products">
						<For each={draft().productos}>
							{(product, index) => (
								<article class="store-product">
									<div class="store-product-head">
										<strong>{product.nombre || "Producto sin nombre"}</strong>
										<button
											type="button"
											class="link-button danger"
											disabled={busy()}
											onClick={() =>
												setDraft({
													...draft(),
													productos: draft().productos.filter((_, position) => position !== index()),
												})
											}
										>
											Quitar
										</button>
									</div>

									<div class="store-product-grid">
										<label class="field">
											<span class="name">Nombre</span>
											<input
												value={product.nombre}
												maxlength="80"
												onInput={(event) => patch(index(), { nombre: event.currentTarget.value })}
											/>
										</label>
										<label class="field">
											<span class="name">Precio</span>
											<input
												type="number"
												min="0"
												step="0.01"
												value={product.precio}
												onInput={(event) =>
													patch(index(), {
														precio: event.currentTarget.value === "" ? 0 : Number(event.currentTarget.value),
													})
												}
											/>
										</label>
										<label class="field">
											<span class="name">Stock</span>
											<input
												type="number"
												min="0"
												step="1"
												value={product.stock}
												onInput={(event) =>
													patch(index(), {
														stock: event.currentTarget.value === "" ? 0 : Number(event.currentTarget.value),
													})
												}
											/>
										</label>
										<label class="field">
											<span class="name">Imagen</span>
											<select
												class="role-select"
												value={product.imagen}
												onChange={(event) => patch(index(), { imagen: event.currentTarget.value })}
											>
												<option value="">Sin imagen</option>
												<Show
													when={
														product.imagen &&
														!(media() ?? []).some((item) => item.name === product.imagen)
													}
												>
													<option value={product.imagen}>{product.imagen} (falta)</option>
												</Show>
												<For each={media() ?? []}>
													{(item) => <option value={item.name}>{item.name}</option>}
												</For>
											</select>
										</label>
										<label class="field store-wide">
											<span class="name">Descripción</span>
											<input
												value={product.descripcion}
												maxlength="300"
												onInput={(event) =>
													patch(index(), { descripcion: event.currentTarget.value })
												}
											/>
										</label>
									</div>

									<label class="checkbox-field">
										<input
											type="checkbox"
											checked={product.visible}
											onChange={(event) => patch(index(), { visible: event.currentTarget.checked })}
										/>
										<span>Visible en la tienda</span>
									</label>
								</article>
							)}
						</For>
					</div>
				</Show>
			</section>

			<section class="panel store-section">
				<div class="store-head">
					<h2>Publicación</h2>
					<span classList={{ chip: true, ok: state()?.page, warn: !state()?.page }}>
						{state()?.page ? "página publicada" : "sin publicar"}
					</span>
				</div>
				<p class="note">
					«Publicar» escribe <code>src/pages/tienda.astro</code> con los productos visibles.
					Después hay que construir la web: el CMS no compila ni despliega.
				</p>

				<div class="actions">
					<button type="button" disabled={busy()} onClick={() => void save()}>
						{busy() ? "Guardando…" : "Guardar tienda"}
					</button>
					<button
						type="button"
						class="ghost-button"
						disabled={busy() || !draft().activa}
						onClick={() => void publish()}
					>
						{state()?.page ? "Republicar /tienda" : "Publicar /tienda"}
					</button>
					<Show when={state()?.page}>
						<button
							type="button"
							class="ghost-button danger"
							disabled={busy()}
							onClick={() => void unpublish()}
						>
							Quitar página
						</button>
						<a
							class="link-button"
							href={`/preview/${props.site.slug}/tienda/`}
							target="_blank"
							rel="noreferrer"
						>
							Ver en la vista previa ↗
						</a>
					</Show>
				</div>
			</section>
		</>
	);
}
