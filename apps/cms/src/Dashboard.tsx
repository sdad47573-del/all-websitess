import { createEffect, createMemo, createResource, createSignal, For, Show } from "solid-js";
import { fetchSites } from "./api";
import Shell from "./Shell";

const PAGE_SIZE = 40;

const formatDate = (ms: number) => new Date(ms).toISOString().slice(0, 10);

type Estado = "todas" | "legal" | "fotos";

export default function Dashboard() {
	const [sites] = createResource(fetchSites);
	const [query, setQuery] = createSignal("");
	const [estado, setEstado] = createSignal<Estado>("todas");
	const [order, setOrder] = createSignal<"nombre" | "recientes" | "fotos">("nombre");
	const [page, setPage] = createSignal(1);

	// Cualquier cambio de búsqueda o filtro vuelve a la primera página.
	createEffect(() => {
		query();
		estado();
		order();
		setPage(1);
	});

	const stats = createMemo(() => {
		const all = sites() ?? [];
		return {
			total: all.length,
			legal: all.filter((site) => site.legalPending).length,
			sinFotos: all.filter((site) => site.photoCount === 0).length,
		};
	});

	const filtered = createMemo(() => {
		const needle = query().trim().toLocaleLowerCase("es");
		return (sites() ?? []).filter((site) => {
			if (estado() === "legal" && !site.legalPending) return false;
			if (estado() === "fotos" && site.photoCount > 0) return false;
			if (!needle) return true;
			return [site.name, site.slug, site.city, site.street]
				.join(" ")
				.toLocaleLowerCase("es")
				.includes(needle);
		});
	});

	const sorted = createMemo(() => {
		const list = [...filtered()];
		if (order() === "recientes") list.sort((a, b) => b.updatedAt - a.updatedAt);
		else if (order() === "fotos") list.sort((a, b) => b.photoCount - a.photoCount);
		return list;
	});

	const totalPages = createMemo(() => Math.max(1, Math.ceil(sorted().length / PAGE_SIZE)));
	const rows = createMemo(() =>
		sorted().slice((page() - 1) * PAGE_SIZE, page() * PAGE_SIZE),
	);

	return (
		<Shell title="Webs">
			<section class="head">
				<h1>{stats().total} webs de negocio</h1>
				<p>
					Inventario y edición de los datos de cada web. Todo sale de <code>src/data/site.ts</code>.
				</p>
			</section>

			<section class="cards">
				<div class="card">
					<span class="value">{stats().total}</span>
					<span class="label">webs</span>
				</div>
				<div class="card">
					<span class="value">{stats().legal}</span>
					<span class="label">con datos legales pendientes</span>
				</div>
				<div class="card">
					<span class="value">{stats().sinFotos}</span>
					<span class="label">sin fotos en el proyecto</span>
				</div>
			</section>

			<form class="filters" onSubmit={(event) => event.preventDefault()}>
				<input
					type="search"
					value={query()}
					onInput={(event) => setQuery(event.currentTarget.value)}
					placeholder="Buscar por nombre, slug, ciudad o calle…"
				/>
				<select
					value={estado()}
					onInput={(event) => setEstado(event.currentTarget.value as Estado)}
				>
					<option value="todas">Todas</option>
					<option value="legal">Legales pendientes</option>
					<option value="fotos">Sin fotos</option>
				</select>
				<select
					value={order()}
					onInput={(event) => setOrder(event.currentTarget.value as "nombre" | "recientes" | "fotos")}
					aria-label="Ordenar"
				>
					<option value="nombre">A–Z</option>
					<option value="recientes">Recientes</option>
					<option value="fotos">Más fotos</option>
				</select>
				<button type="submit">Filtrar</button>
				<Show when={query() || estado() !== "todas"}>
					<button
						type="button"
						class="ghost-button"
						onClick={() => {
							setQuery("");
							setEstado("todas");
						}}
					>
						Limpiar
					</button>
				</Show>
			</form>

			<Show
				when={!sites.loading}
				fallback={<p class="count">Cargando las webs…</p>}
			>
				<Show when={!sites.error} fallback={<p class="flash error">{String(sites.error)}</p>}>
					<p class="count">{filtered().length} resultado(s)</p>

					<div class="table-wrap">
						<table>
							<thead>
								<tr>
									<th>Web</th>
									<th>Ciudad</th>
									<th>Teléfono</th>
									<th>Fotos</th>
									<th>Legal</th>
									<th>Actualizado</th>
								</tr>
							</thead>
							<tbody>
								<For
									each={rows()}
									fallback={
										<tr>
											<td colspan="6" class="empty">
												Ninguna web coincide con el filtro.
											</td>
										</tr>
									}
								>
									{(site) => (
										<tr>
											<td>
												<a class="site" href={`/site/${site.slug}`}>
													<strong>{site.name}</strong>
													<span>{site.slug}</span>
												</a>
											</td>
											<td>{site.city || "—"}</td>
											<td class="mono">{site.phone || "—"}</td>
											<td class="num">{site.photoCount}</td>
											<td>
												<span classList={{ chip: true, warn: site.legalPending, ok: !site.legalPending }}>
													{site.legalPending ? "pendiente" : "completo"}
												</span>
											</td>
											<td class="mono dim">{formatDate(site.updatedAt)}</td>
										</tr>
									)}
								</For>
							</tbody>
						</table>
					</div>

					<Show when={totalPages() > 1}>
						<div class="pager">
							<button
								type="button"
								class="link-button"
								disabled={page() === 1}
								onClick={() => setPage(page() - 1)}
							>
								← Anterior
							</button>
							<span>
								Página {page()} de {totalPages()}
							</span>
							<button
								type="button"
								class="link-button"
								disabled={page() === totalPages()}
								onClick={() => setPage(page() + 1)}
							>
								Siguiente →
							</button>
						</div>
					</Show>
				</Show>
			</Show>
		</Shell>
	);
}
