import { createResource, createSignal, For, Show } from "solid-js";
import { fetchSite } from "./api";
import Shell from "./Shell";
import CodeTab from "./tabs/CodeTab";
import DataTab from "./tabs/DataTab";
import MapTab from "./tabs/MapTab";
import MediaTab from "./tabs/MediaTab";

type Tab = "datos" | "mapas" | "imagenes" | "codigo";

const TABS: Array<{ id: Tab; label: string }> = [
	{ id: "datos", label: "Datos" },
	{ id: "mapas", label: "Mapas" },
	{ id: "imagenes", label: "Imágenes" },
	{ id: "codigo", label: "Layout y código" },
];

export default function SiteDetail(props: { slug: string }) {
	const [site, { refetch }] = createResource(() => props.slug, fetchSite);
	const requested = window.location.hash.replace("#", "") as Tab;
	const [tab, setTab] = createSignal<Tab>(
		TABS.some((item) => item.id === requested) ? requested : "datos",
	);

	// La pestaña activa va en la URL: recargar o volver atrás mantiene el sitio
	// donde estabas (#mapas, #imagenes, #codigo).
	const selectTab = (id: Tab) => {
		setTab(id);
		window.history.replaceState(null, "", `#${id}`);
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
								<span
									classList={{
										chip: true,
										warn: current().legalPending,
										ok: !current().legalPending,
									}}
								>
									{current().legalPending ? "legales pendientes" : "legales completos"}
								</span>
							</p>
						</section>

						<div class="tabs" role="tablist">
							<For each={TABS}>
								{(item) => (
									<button
										type="button"
										role="tab"
										aria-selected={tab() === item.id}
										classList={{ tab: true, active: tab() === item.id }}
										onClick={() => selectTab(item.id)}
									>
										{item.label}
									</button>
								)}
							</For>
						</div>

						<div class="tab-panel">
							<Show when={tab() === "datos"}>
								<DataTab site={current()} onSaved={refetch} />
							</Show>
							<Show when={tab() === "mapas"}>
								<MapTab site={current()} onSaved={refetch} />
							</Show>
							<Show when={tab() === "imagenes"}>
								<MediaTab site={current()} onSaved={refetch} />
							</Show>
							<Show when={tab() === "codigo"}>
								<CodeTab site={current()} onSaved={refetch} />
							</Show>
						</div>
					</>
				)}
			</Show>
		</Shell>
	);
}
