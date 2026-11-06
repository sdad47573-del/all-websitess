import { createMemo, createResource, For, Show } from "solid-js";
import { fetchSeo, ogUrl } from "../api";
import type { Site } from "../types";

const domainOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function SeoTab(props: { site: Site }) {
	const [audit] = createResource(() => props.site.slug, fetchSeo);

	const counts = createMemo(() => {
		const checks = audit()?.checks ?? [];
		return {
			ok: checks.filter((check) => check.status === "ok").length,
			warn: checks.filter((check) => check.status === "warn").length,
			error: checks.filter((check) => check.status === "error").length,
		};
	});

	return (
		<>
			<Show when={audit.loading}>
				<p class="count">Analizando el HTML construido…</p>
			</Show>
			<Show when={audit.error}>
				<p class="flash error">{String(audit.error)}</p>
			</Show>

			<Show when={audit()}>
				{(data) => (
					<>
						<Show when={!data().hasBuild}>
							<div class="panel notice">
								<h2>Falta el build</h2>
								<p>
									La auditoría y la vista previa leen el HTML final. Ejecuta{" "}
									<code>bun run build</code> en <code>apps/{props.site.slug}</code> y recarga
									la ficha. Mientras tanto se muestran los datos de partida.
								</p>
							</div>
						</Show>

						<div class="seo-grid">
							<section class="panel">
								<h2>Resultado en Google</h2>
								<div class="serp">
									<span class="serp-url">
										{data().siteUrl ? `${domainOf(data().siteUrl)} ›` : props.site.slug}
									</span>
									<span class="serp-title">{data().title || "Sin título"}</span>
									<span class="serp-desc">
										{data().description || "Sin meta descripción."}
									</span>
								</div>
							</section>

							<section class="panel">
								<h2>Al compartir el enlace</h2>
								<div class="social">
									<Show
										when={data().hasOg}
										fallback={<div class="og-placeholder social-placeholder">Sin imagen OG</div>}
									>
										<img src={ogUrl(props.site.slug)} alt="" />
									</Show>
									<div class="social-body">
										<span class="social-domain">
											{data().siteUrl ? domainOf(data().siteUrl) : "dominio pendiente"}
										</span>
										<strong>{data().title || props.site.name}</strong>
										<span class="hint">{data().description || props.site.tagline}</span>
									</div>
								</div>
							</section>
						</div>

						<Show when={data().hasBuild}>
							<section class="panel seo-checks">
								<div class="check-count">
									<h2>Comprobaciones</h2>
									<span class="chip ok">{counts().ok} ok</span>
									<Show when={counts().warn > 0}>
										<span class="chip warn">{counts().warn} avisos</span>
									</Show>
									<Show when={counts().error > 0}>
										<span class="chip danger">{counts().error} errores</span>
									</Show>
								</div>

								<ul class="checks">
									<For each={data().checks}>
										{(check) => (
											<li class={check.status}>
												<span class="dot" />
												<div>
													<strong>{check.label}</strong>
													<span class="detail">{check.detail}</span>
												</div>
											</li>
										)}
									</For>
								</ul>
							</section>
						</Show>
					</>
				)}
			</Show>
		</>
	);
}
