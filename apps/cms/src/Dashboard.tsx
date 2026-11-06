import { createEffect, createMemo, createResource, createSignal, For, Show } from "solid-js";
import { fetchSites, generateOg, ogUrl } from "./api";
import Shell from "./Shell";
import type { AuthUser } from "./types";

const PAGE_SIZE = 40;

const formatDate = (ms: number) => new Date(ms).toISOString().slice(0, 10);

const initials = (name: string) =>
	name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word[0]?.toLocaleUpperCase("es") ?? "")
		.join("");

type Estado = "todas" | "legal" | "fotos";
type View = "tarjetas" | "tabla";
type Order = "nombre" | "recientes" | "fotos";

const readView = (): View => {
	try {
		return localStorage.getItem("cms-view") === "tabla" ? "tabla" : "tarjetas";
	} catch {
		return "tarjetas";
	}
};

export default function Dashboard(props: { user: AuthUser }) {
	const [sites] = createResource(fetchSites);
	const [query, setQuery] = createSignal("");
	const [estado, setEstado] = createSignal<Estado>("todas");
	const [order, setOrder] = createSignal<Order>("nombre");
	const [view, setView] = createSignal<View>(readView());
	const [page, setPage] = createSignal(1);

	const [selected, setSelected] = createSignal<Set<string>>(new Set());
	const [bulk, setBulk] = createSignal(false);
	const [bulkMessage, setBulkMessage] = createSignal<string | null>(null);
	const [thumbVersion, setThumbVersion] = createSignal(0);

	// Cualquier cambio de búsqueda o filtro vuelve a la primera página.
	createEffect(() => {
		query();
		estado();
		order();
		setPage(1);
	});

	createEffect(() => {
		try {
			localStorage.setItem("cms-view", view());
		} catch {
			/* modo privado: solo se pierde la preferencia */
		}
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

	const allPageSelected = createMemo(
		() => rows().length > 0 && rows().every((site) => selected().has(site.slug)),
	);

	const toggle = (slug: string) => {
		const next = new Set(selected());
		if (next.has(slug)) next.delete(slug);
		else next.add(slug);
		setSelected(next);
	};

	const togglePage = (checked: boolean) => {
		const next = new Set(selected());
		for (const site of rows()) {
			if (checked) next.add(site.slug);
			else next.delete(site.slug);
		}
		setSelected(next);
	};

	const generateSelected = async () => {
		const slugs = [...selected()];
		if (slugs.length === 0) return;

		setBulk(true);
		setBulkMessage(null);
		const failed: string[] = [];
		let done = 0;

		for (const slug of slugs) {
			try {
				await generateOg(slug);
				done += 1;
			} catch {
				failed.push(slug);
			}
		}

		setBulk(false);
		setThumbVersion(thumbVersion() + 1);
		setSelected(new Set<string>());
		setBulkMessage(
			`Miniaturas regeneradas: ${done}${failed.length ? ` · fallos: ${failed.join(", ")}` : ""}.`,
		);
	};

	return (
		<Shell title="Webs" user={props.user}>
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
					onInput={(event) => setOrder(event.currentTarget.value as Order)}
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
				<div class="view-toggle" role="group" aria-label="Vista del listado">
					<button
						type="button"
						classList={{ tab: true, active: view() === "tarjetas" }}
						aria-pressed={view() === "tarjetas"}
						onClick={() => setView("tarjetas")}
					>
						Tarjetas
					</button>
					<button
						type="button"
						classList={{ tab: true, active: view() === "tabla" }}
						aria-pressed={view() === "tabla"}
						onClick={() => setView("tabla")}
					>
						Tabla
					</button>
				</div>
			</form>

			<Show
				when={!sites.loading}
				fallback={<p class="count">Cargando las webs…</p>}
			>
				<Show when={!sites.error} fallback={<p class="flash error">{String(sites.error)}</p>}>
					<p class="count">
						{filtered().length} resultado(s) · página {page()} de {totalPages()}
					</p>

					<Show when={selected().size > 0}>
						<div class="bulk-bar">
							<strong>{selected().size} seleccionada(s)</strong>
							<button type="button" disabled={bulk()} onClick={() => void generateSelected()}>
								{bulk() ? "Generando miniaturas…" : "Generar miniaturas"}
							</button>
							<button
								type="button"
								class="link-button"
								disabled={bulk()}
								onClick={() => setSelected(new Set<string>())}
							>
								Quitar selección
							</button>
						</div>
					</Show>

					<Show when={bulkMessage()}>
						{(message) => <p class="flash ok">{message()}</p>}
					</Show>

					<Show
						when={view() === "tarjetas"}
						fallback={
							<div class="table-wrap">
								<table>
									<thead>
										<tr>
											<th class="select-col">
												<input
													type="checkbox"
													checked={allPageSelected()}
													aria-label="Seleccionar esta página"
													onChange={(event) => togglePage(event.currentTarget.checked)}
												/>
											</th>
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
													<td colspan="7" class="empty">
														Ninguna web coincide con el filtro.
													</td>
												</tr>
											}
										>
											{(site) => (
												<tr classList={{ selected: selected().has(site.slug) }}>
													<td class="select-col">
														<input
															type="checkbox"
															checked={selected().has(site.slug)}
															aria-label={`Seleccionar ${site.name}`}
															onChange={() => toggle(site.slug)}
														/>
													</td>
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
						}
					>
						<Show
							when={rows().length > 0}
							fallback={<p class="empty panel">Ninguna web coincide con el filtro.</p>}
						>
							<div class="site-grid">
								<For each={rows()}>
									{(site) => (
										<div classList={{ "site-card": true, selected: selected().has(site.slug) }}>
											<label class="select-box">
												<input
													type="checkbox"
													checked={selected().has(site.slug)}
													aria-label={`Seleccionar ${site.name}`}
													onChange={() => toggle(site.slug)}
												/>
											</label>
											<a class="site-card-link" href={`/site/${site.slug}`}>
												<div class="thumb">
													<span class="thumb-fallback">{initials(site.name)}</span>
													<img
														src={`${ogUrl(site.slug)}?v=${thumbVersion()}`}
														alt=""
														loading="lazy"
														onError={(event) => {
															event.currentTarget.style.display = "none";
														}}
													/>
													<span class="thumb-city">{site.city || site.slug}</span>
												</div>
												<div class="site-card-body">
													<strong>{site.name}</strong>
													<span class="hint">{site.category || "Sin categoría"}</span>
													<div class="site-card-meta">
														<span class="chip">{site.photoCount} fotos</span>
														<span classList={{ chip: true, warn: site.legalPending, ok: !site.legalPending }}>
															{site.legalPending ? "legal pendiente" : "legal ok"}
														</span>
													</div>
												</div>
											</a>
										</div>
									)}
								</For>
							</div>
						</Show>
					</Show>

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
