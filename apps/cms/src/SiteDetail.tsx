import { createResource, createSignal, For, Show } from "solid-js";
import { fetchSite, generateOg, ogUrl } from "./api";
import Shell from "./Shell";
import CodeTab from "./tabs/CodeTab";
import DataTab from "./tabs/DataTab";
import MapTab from "./tabs/MapTab";
import MediaTab from "./tabs/MediaTab";
import PreviewTab from "./tabs/PreviewTab";
import SeoTab from "./tabs/SeoTab";

type Tab = "vista" | "datos" | "mapas" | "seo" | "imagenes" | "codigo";

const TABS: Array<{ id: Tab; label: string }> = [
	{ id: "vista", label: "Vista previa" },
	{ id: "datos", label: "Datos" },
	{ id: "mapas", label: "Mapas" },
	{ id: "seo", label: "SEO y compartir" },
	{ id: "imagenes", label: "Imágenes" },
	{ id: "codigo", label: "Layout y código" },
];

export default function SiteDetail(props: { slug: string }) {
	const [site, { refetch }] = createResource(() => props.slug, fetchSite);
	const requested = window.location.hash.replace("#", "") as Tab;
	const [tab, setTab] = createSignal<Tab>(
		TABS.some((item) => item.id === requested) ? requested : "vista",
	);

	// La pestaña activa va en la URL: recargar o volver atrás mantiene el sitio
	// donde estabas (#mapas, #imagenes, #codigo).
	const selectTab = (id: Tab) => {
		setTab(id);
		window.history.replaceState(null, "", `#${id}`);
	};

	const [ogVersion, setOgVersion] = createSignal(0);
	const [ogState, setOgState] = createSignal<boolean | null>(null);
	const [ogBusy, setOgBusy] = createSignal(false);
	const [ogFlash, setOgFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);

	const generate = async (slug: string) => {
		setOgBusy(true);
		setOgFlash(null);
		try {
			const info = await generateOg(slug);
			setOgState(true);
			setOgVersion(ogVersion() + 1);
			setOgFlash({
				kind: "ok",
				text: `Miniatura generada (${Math.max(1, Math.round(info.size / 1024))} KB).${
					info.backup ? " La anterior se ha guardado." : ""
				}`,
			});
			await refetch();
		} catch (error) {
			setOgFlash({
				kind: "error",
				text: String(error instanceof Error ? error.message : error),
			});
		} finally {
			setOgBusy(false);
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

							<div class="og-card">
								<Show
									when={ogState() ?? current().hasOg}
									fallback={<div class="og-placeholder">Sin miniatura</div>}
								>
									<img
										class="og-thumb"
										src={`${ogUrl(current().slug)}?v=${ogVersion()}`}
										alt={`Miniatura OG de ${current().name}`}
									/>
								</Show>
								<div class="og-actions">
									<button
										type="button"
										disabled={ogBusy()}
										onClick={() => void generate(current().slug)}
									>
										{ogBusy()
											? "Generando…"
											: (ogState() ?? current().hasOg)
												? "Regenerar miniatura"
												: "Generar miniatura"}
									</button>
									<span class="hint">1200 × 630 JPG · escribe public/og.jpg</span>
									<Show when={ogFlash()}>
										{(message) => (
											<span classList={{ flash: true, [message().kind]: true }}>
												{message().text}
											</span>
										)}
									</Show>
								</div>
							</div>
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
							<Show when={tab() === "vista"}>
								<PreviewTab site={current()} />
							</Show>
							<Show when={tab() === "datos"}>
								<DataTab site={current()} onSaved={refetch} />
							</Show>
							<Show when={tab() === "mapas"}>
								<MapTab site={current()} onSaved={refetch} />
							</Show>
							<Show when={tab() === "seo"}>
								<SeoTab site={current()} />
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
