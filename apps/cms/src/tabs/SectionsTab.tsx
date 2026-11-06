import { createEffect, createMemo, createResource, createSignal, For, Show } from "solid-js";
import { fetchMedia, fetchSections, mediaUrl, saveSections } from "../api";
import {
	SECTION_CATALOG,
	SECTION_LABELS,
	type MediaItem,
	type Section,
	type SectionLink,
	type SectionType,
	type Site,
} from "../types";

const plain = (html?: string) => (html ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const LINK_PLACEHOLDER = "maps:directions o https://…";

// Cada tipo tiene su glifo: la miniatura enseña la foto cuando la pieza tiene
// una y, si no, resume el tipo de bloque de un vistazo.
const GLYPHS: Record<SectionType, string> = {
	hero: "▣",
	about: "¶",
	destacados: "✦",
	galeria: "▦",
	visita: "⌖",
	faq: "?",
	texto: "≡",
	cta: "➜",
};

const imagenDe = (section: Section) => section.imagen || section.fotos?.[0]?.imagen || null;

function blank(tipo: SectionType): Section {
	const id = `pieza-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 5)}`;
	const base: Section = { id, tipo, visible: true, titulo: "" };
	if (tipo === "texto") return { ...base, parrafos: [""] };
	if (tipo === "destacados") return { ...base, items: [{ titulo: "", texto: "" }] };
	if (tipo === "faq") return { ...base, preguntas: [{ pregunta: "", respuesta: "" }] };
	if (tipo === "cta") return { ...base, texto: "", boton: { texto: "", href: "#" } };
	return base;
}

function TextField(props: {
	label: string;
	value?: string;
	hint?: string;
	multiline?: boolean;
	maxlength?: number;
	onInput: (value: string) => void;
}) {
	return (
		<label class="field">
			<span class="name">{props.label}</span>
			<Show
				when={props.multiline}
				fallback={
					<input
						value={props.value ?? ""}
						maxlength={props.maxlength}
						autocomplete="off"
						onInput={(event) => props.onInput(event.currentTarget.value)}
					/>
				}
			>
				<textarea
					class="section-textarea"
					maxlength={props.maxlength}
					value={props.value ?? ""}
					onInput={(event) => props.onInput(event.currentTarget.value)}
				/>
			</Show>
			<Show when={props.hint}>
				<span class="hint">{props.hint}</span>
			</Show>
		</label>
	);
}

function ImageField(props: {
	label: string;
	value?: string;
	media: MediaItem[];
	onInput: (value: string) => void;
}) {
	return (
		<label class="field">
			<span class="name">{props.label}</span>
			<select
				class="role-select"
				value={props.value ?? ""}
				onChange={(event) => props.onInput(event.currentTarget.value)}
			>
				<option value="">Sin imagen</option>
				<Show when={props.value && !props.media.some((item) => item.name === props.value)}>
					<option value={props.value}>{props.value} (falta)</option>
				</Show>
				<For each={props.media}>
					{(item) => <option value={item.name}>{item.name}</option>}
				</For>
			</select>
		</label>
	);
}

function LinkEditor(props: {
	label: string;
	value?: SectionLink;
	onChange: (value?: SectionLink) => void;
}) {
	return (
		<div class="link-editor">
			<div class="link-head">
				<span class="name">{props.label}</span>
				<Show
					when={props.value}
					fallback={
						<button
							type="button"
							class="link-button"
							onClick={() => props.onChange({ texto: "", href: "" })}
						>
							+ Añadir enlace
						</button>
					}
				>
					<button type="button" class="link-button danger" onClick={() => props.onChange(undefined)}>
						Quitar
					</button>
				</Show>
			</div>
			<Show when={props.value}>
				{(link) => (
					<div class="field-row">
						<label class="field">
							<span class="name">Texto</span>
							<input
								value={link().texto}
								maxlength="90"
								onInput={(event) =>
									props.onChange({ ...link(), texto: event.currentTarget.value })
								}
							/>
						</label>
						<label class="field">
							<span class="name">Enlace</span>
							<input
								value={link().href}
								placeholder={LINK_PLACEHOLDER}
								onInput={(event) => props.onChange({ ...link(), href: event.currentTarget.value })}
							/>
						</label>
						<label class="checkbox-field">
							<input
								type="checkbox"
								checked={Boolean(link().externo)}
								onChange={(event) =>
									props.onChange({ ...link(), externo: event.currentTarget.checked })
								}
							/>
							<span>Otra pestaña</span>
						</label>
					</div>
				)}
			</Show>
		</div>
	);
}

export default function SectionsTab(props: {
	site: Site;
	onSaved: () => unknown;
	onEditCode?: () => void;
}) {
	const [state, { refetch }] = createResource(() => props.site.slug, fetchSections);
	const [media] = createResource(() => props.site.slug, fetchMedia);

	const [draft, setDraft] = createSignal<Section[]>([]);
	const [savedJson, setSavedJson] = createSignal("[]");
	const [selectedId, setSelectedId] = createSignal<string | null>(null);
	const [busy, setBusy] = createSignal(false);
	const [flash, setFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);

	createEffect(() => {
		const loaded = state();
		if (loaded === undefined) return; // todavía cargando
		const list = loaded?.secciones ?? [];
		setDraft(list);
		setSavedJson(JSON.stringify(list));
		// Al recargar tras guardar se mantiene la pieza abierta si sigue existiendo.
		setSelectedId((current) =>
			current && list.some((section) => section.id === current) ? current : (list[0]?.id ?? null),
		);
	});

	const selected = createMemo(
		() => draft().find((section) => section.id === selectedId()) ?? null,
	);
	const dirty = createMemo(() => JSON.stringify(draft()) !== savedJson());

	const patch = (changes: Partial<Section>) =>
		setDraft((current) =>
			current.map((section) =>
				section.id === selectedId() ? ({ ...section, ...changes } as Section) : section,
			),
		);

	const setList = (field: keyof Section, value: unknown[]) =>
		patch({ [field]: value } as unknown as Partial<Section>);

	const move = (index: number, delta: number) => {
		const next = [...draft()];
		const target = index + delta;
		if (target < 0 || target >= next.length) return;
		[next[index], next[target]] = [next[target], next[index]];
		setDraft(next);
	};

	const remove = (section: Section) => {
		if (!window.confirm(`¿Quitar la pieza «${plain(section.titulo) || section.tipo}»?`)) return;
		const next = draft().filter((item) => item.id !== section.id);
		setDraft(next);
		if (selectedId() === section.id) setSelectedId(next[0]?.id ?? null);
	};

	const add = (tipo: SectionType) => {
		const section = blank(tipo);
		setDraft([...draft(), section]);
		setSelectedId(section.id);
	};

	const save = async () => {
		if (busy()) return;
		setBusy(true);
		setFlash(null);
		try {
			const result = await saveSections(props.site.slug, draft());
			setDraft(result.secciones);
			setSavedJson(JSON.stringify(result.secciones));
			setFlash({
				kind: "ok",
				text: "Piezas guardadas. Lanza el build de la web para verlas en la página y en la vista previa.",
			});
			await refetch();
			await props.onSaved();
		} catch (error) {
			setFlash({
				kind: "error",
				text: error instanceof Error ? error.message : String(error),
			});
		} finally {
			setBusy(false);
		}
	};

	const discard = () => {
		const list = JSON.parse(savedJson()) as Section[];
		setDraft(list);
		setSelectedId(list[0]?.id ?? null);
		setFlash(null);
	};

	return (
		<>
			<Show when={flash()}>
				{(message) => <p classList={{ flash: true, [message().kind]: true }}>{message().text}</p>}
			</Show>

			<Show when={state.loading}>
				<p class="count">Cargando las piezas…</p>
			</Show>
			<Show when={state.error}>
				<p class="flash error">{String(state.error)}</p>
			</Show>

			<Show
				when={state() !== null && state() !== undefined}
				fallback={
					<Show when={!state.loading && !state.error}>
						<div class="panel notice">
							<h2>Esta web aún no usa piezas</h2>
							<p>
								La pestaña funciona con <code>src/data/secciones.json</code> y una página que
								pinta las secciones con <code>&lt;Secciones&gt;</code>.{" "}
								<b>{props.site.slug}</b> todavía guarda su portada escrita a mano en{" "}
								<code>src/pages/index.astro</code>, así que aquí solo se puede editar desde{" "}
								<code>Layout y código</code>.
							</p>
							<p class="hint">
								Para activarlo en otra web: crea su <code>secciones.json</code> y sustituye el
								contenido de <code>&lt;main&gt;</code> por el componente de piezas.
							</p>
						</div>
					</Show>
				}
			>
				<div class="sections-layout">
					<aside class="panel pieces">
						<h2>Piezas de la página</h2>
						<p class="note">
							Se pintan en este orden. Elige una para rellenar sus campos a la derecha.
						</p>

						<ol class="piece-list">
							<For each={draft()}>
								{(section, index) => (
									<li>
										<div classList={{ "piece-row": true, active: section.id === selectedId() }}>
											<button
												type="button"
												class="piece-main"
												onClick={() => setSelectedId(section.id)}
											>
												<span classList={{ "piece-thumb": true, [`tipo-${section.tipo}`]: true }}>
													<Show
														when={imagenDe(section)}
														fallback={
															<span class="piece-glyph" aria-hidden="true">
																{GLYPHS[section.tipo]}
															</span>
														}
													>
														{(name) => (
															<img
																src={mediaUrl(props.site.slug, name())}
																alt=""
																loading="lazy"
															/>
														)}
													</Show>
												</span>
												<span class="piece-index">
													{String(index() + 1).padStart(2, "0")}
												</span>
												<span class="piece-text">
													<span class="piece-name">{SECTION_LABELS[section.tipo]}</span>
													<span class="piece-title">
														{plain(section.titulo) || "Sin título"}
													</span>
												</span>
												<Show when={!section.visible}>
													<span class="chip warn">oculta</span>
												</Show>
											</button>
											<span class="piece-tools">
												<button
													type="button"
													class="link-button"
													title="Subir"
													disabled={index() === 0}
													onClick={() => move(index(), -1)}
												>
													↑
												</button>
												<button
													type="button"
													class="link-button"
													title="Bajar"
													disabled={index() === draft().length - 1}
													onClick={() => move(index(), 1)}
												>
													↓
												</button>
												<button
													type="button"
													class="link-button danger"
													title="Quitar"
													onClick={() => remove(section)}
												>
													✕
												</button>
											</span>
										</div>
									</li>
								)}
							</For>
						</ol>

						<div class="piece-add">
							<h3>Añadir pieza</h3>
							<p class="hint">Entra al final de la página; súbela con ↑.</p>
							<For each={SECTION_CATALOG}>
								{(item) => (
									<button type="button" class="ghost-button" onClick={() => add(item.tipo)}>
										+ {item.label}
										<span class="hint"> · {item.descripcion}</span>
									</button>
								)}
							</For>
							<Show when={props.onEditCode}>
								<button
									type="button"
									class="link-button piece-code"
									onClick={() => props.onEditCode?.()}
								>
									Editar código de la plantilla
								</button>
							</Show>
						</div>
					</aside>

					<section class="panel piece-editor">
						<Show when={selected()} fallback={<p class="note">Selecciona una pieza de la lista.</p>}>
							{(section) => (
								<>
									<div class="editor-head">
										<div class="editor-title">
											<span
												classList={{
													"piece-thumb": true,
													"piece-thumb-lg": true,
													[`tipo-${section().tipo}`]: true,
												}}
											>
												<Show
													when={imagenDe(section())}
													fallback={
														<span class="piece-glyph" aria-hidden="true">
															{GLYPHS[section().tipo]}
														</span>
													}
												>
													{(name) => (
														<img
															src={mediaUrl(props.site.slug, name())}
															alt=""
														/>
													)}
												</Show>
											</span>
											<h2>{SECTION_LABELS[section().tipo]}</h2>
										</div>
										<span classList={{ chip: true, warn: dirty() }}>
											{dirty() ? "sin guardar" : "guardado"}
										</span>
									</div>
									<p class="note">
										Estos textos son los que se ven en la página. El HTML permitido en los
										títulos es <code>&lt;br /&gt;</code> y <code>&lt;em&gt;</code>. Los enlaces
										pueden ser URLs completas o atajos <code>maps:place</code>,{" "}
										<code>maps:directions</code> y <code>maps:streetView</code>.
									</p>

									<div class="piece-fields">
										<label class="checkbox-field">
											<input
												type="checkbox"
												checked={section().visible}
												onChange={(event) => patch({ visible: event.currentTarget.checked })}
											/>
											<span>Visible en la página</span>
										</label>

										<Show when={section().tipo !== "cta"}>
											<TextField
												label="Etiqueta superior"
												value={section().etiqueta}
												maxlength={90}
												onInput={(value) => patch({ etiqueta: value })}
											/>
										</Show>

										<TextField
											label="Título"
											value={section().titulo}
											multiline
											maxlength={220}
											hint="Admite <br /> y <em> para partir el título."
											onInput={(value) => patch({ titulo: value })}
										/>

										<Show when={["hero", "galeria", "cta"].includes(section().tipo)}>
											<TextField
												label={section().tipo === "hero" ? "Entradilla" : "Texto"}
												value={section().texto}
												multiline
												maxlength={1200}
												onInput={(value) => patch({ texto: value })}
											/>
										</Show>

										<Show when={section().tipo === "hero"}>
											<ImageField
												label="Imagen de portada"
												value={section().imagen}
												media={media() ?? []}
												onInput={(value) => patch({ imagen: value })}
											/>
											<TextField
												label="Texto alternativo de la imagen"
												value={section().imagenAlt}
												maxlength={220}
												hint="Describe la foto para quien no la ve."
												onInput={(value) => patch({ imagenAlt: value })}
											/>
											<TextField
												label="Etiqueta sobre la foto"
												value={section().distintivo}
												maxlength={80}
												onInput={(value) => patch({ distintivo: value })}
											/>
											<TextField
												label="Pie de foto"
												value={section().pieFoto}
												maxlength={120}
												onInput={(value) => patch({ pieFoto: value })}
											/>
											<LinkEditor
												label="Botón principal"
												value={section().boton}
												onChange={(value) => patch({ boton: value })}
											/>
											<LinkEditor
												label="Botón secundario"
												value={section().botonSecundario}
												onChange={(value) => patch({ botonSecundario: value })}
											/>
											<LinkEditor
												label="Enlace de la foto"
												value={section().enlaceGaleria}
												onChange={(value) => patch({ enlaceGaleria: value })}
											/>

											<div class="link-editor">
												<div class="link-head">
													<span class="name">Datos bajo el texto</span>
													<button
														type="button"
														class="link-button"
														disabled={(section().datos ?? []).length >= 4}
														onClick={() =>
															setList("datos", [
																...(section().datos ?? []),
																{ etiqueta: "", html: "" },
															])
														}
													>
														+ Añadir dato
													</button>
												</div>
												<For each={section().datos ?? []}>
													{(dato, index) => (
														<div class="field-row">
															<label class="field">
																<span class="name">Etiqueta</span>
																<input
																	value={dato.etiqueta}
																	maxlength="60"
																	onInput={(event) =>
																		setList(
																			"datos",
																			(section().datos ?? []).map((item, position) =>
																				position === index()
																					? { ...item, etiqueta: event.currentTarget.value }
																					: item,
																			),
																		)
																	}
																/>
															</label>
															<label class="field">
																<span class="name">Valor</span>
																<input
																	value={dato.html}
																	maxlength="220"
																	onInput={(event) =>
																		setList(
																			"datos",
																			(section().datos ?? []).map((item, position) =>
																				position === index()
																					? { ...item, html: event.currentTarget.value }
																					: item,
																			),
																		)
																	}
																/>
															</label>
															<button
																type="button"
																class="link-button danger"
																onClick={() =>
																	setList(
																		"datos",
																		(section().datos ?? []).filter((_, position) => position !== index()),
																	)
																}
															>
																Quitar
															</button>
														</div>
													)}
												</For>
											</div>
										</Show>

										<Show when={["about", "texto"].includes(section().tipo)}>
											<div class="link-editor">
												<div class="link-head">
													<span class="name">Párrafos</span>
													<button
														type="button"
														class="link-button"
														disabled={(section().parrafos ?? []).length >= 12}
														onClick={() =>
															setList("parrafos", [...(section().parrafos ?? []), ""])
														}
													>
														+ Añadir párrafo
													</button>
												</div>
												<For each={section().parrafos ?? []}>
													{(parrafo, index) => (
														<div class="field-row">
															<textarea
																class="section-textarea"
																maxlength="1200"
																value={parrafo}
																onInput={(event) =>
																	setList(
																		"parrafos",
																		(section().parrafos ?? []).map((item, position) =>
																			position === index() ? event.currentTarget.value : item,
																		),
																	)
																}
															/>
															<button
																type="button"
																class="link-button danger"
																onClick={() =>
																	setList(
																		"parrafos",
																		(section().parrafos ?? []).filter((_, position) => position !== index()),
																	)
																}
															>
																Quitar
															</button>
														</div>
													)}
												</For>
											</div>
										</Show>

										<Show when={["about", "galeria", "visita", "texto"].includes(section().tipo)}>
											<TextField
												label={section().tipo === "visita" ? "Nota del horario" : "Nota"}
												value={
													section().tipo === "visita" ? section().notaHorario : section().nota
												}
												multiline
												maxlength={800}
												onInput={(value) =>
													patch(section().tipo === "visita" ? { notaHorario: value } : { nota: value })
												}
											/>
										</Show>

										<Show when={section().tipo === "visita"}>
											<TextField
												label="Etiqueta del mapa"
												value={section().mapaEtiqueta}
												maxlength={140}
												hint="Texto que aparece sobre el mapa."
												onInput={(value) => patch({ mapaEtiqueta: value })}
											/>
											<TextField
												label="Nota de contacto y accesibilidad"
												value={section().nota}
												multiline
												maxlength={800}
												onInput={(value) => patch({ nota: value })}
											/>
										</Show>

										<Show when={section().tipo === "destacados"}>
											<div class="link-editor">
												<div class="link-head">
													<span class="name">Destacados</span>
													<button
														type="button"
														class="link-button"
														disabled={(section().items ?? []).length >= 8}
														onClick={() =>
															setList("items", [
																...(section().items ?? []),
																{ titulo: "", texto: "" },
															])
														}
													>
														+ Añadir destacado
													</button>
												</div>
												<For each={section().items ?? []}>
													{(item, index) => (
														<div class="field-row">
															<label class="field">
																<span class="name">Título</span>
																<input
																	value={item.titulo}
																	maxlength="90"
																	onInput={(event) =>
																		setList(
																			"items",
																			(section().items ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, titulo: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																/>
															</label>
															<label class="field">
																<span class="name">Texto</span>
																<input
																	value={item.texto}
																	maxlength="600"
																	onInput={(event) =>
																		setList(
																			"items",
																			(section().items ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, texto: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																/>
															</label>
															<button
																type="button"
																class="link-button danger"
																onClick={() =>
																	setList(
																		"items",
																		(section().items ?? []).filter((_, position) => position !== index()),
																	)
																}
															>
																Quitar
															</button>
														</div>
													)}
												</For>
											</div>
										</Show>

										<Show when={section().tipo === "galeria"}>
											<div class="link-editor">
												<div class="link-head">
													<span class="name">Fotos</span>
													<button
														type="button"
														class="link-button"
														disabled={(section().fotos ?? []).length >= 12}
														onClick={() =>
															setList("fotos", [
																...(section().fotos ?? []),
																{ imagen: "", alt: "" },
															])
														}
													>
														+ Añadir foto
													</button>
												</div>
												<For each={section().fotos ?? []}>
													{(foto, index) => (
														<div class="field-row">
															<label class="field">
																<span class="name">Imagen</span>
																<select
																	class="role-select"
																	value={foto.imagen}
																	onChange={(event) =>
																		setList(
																			"fotos",
																			(section().fotos ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, imagen: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																>
																	<option value="">Sin imagen</option>
																	<For each={media() ?? []}>
																		{(item) => <option value={item.name}>{item.name}</option>}
																	</For>
																</select>
															</label>
															<label class="field">
																<span class="name">Texto alternativo</span>
																<input
																	value={foto.alt}
																	maxlength="220"
																	onInput={(event) =>
																		setList(
																			"fotos",
																			(section().fotos ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, alt: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																/>
															</label>
															<button
																type="button"
																class="link-button danger"
																onClick={() =>
																	setList(
																		"fotos",
																		(section().fotos ?? []).filter((_, position) => position !== index()),
																	)
																}
															>
																Quitar
															</button>
														</div>
													)}
												</For>
											</div>
											<LinkEditor
												label="Botón de la galería"
												value={section().boton}
												onChange={(value) => patch({ boton: value })}
											/>
										</Show>

										<Show when={section().tipo === "faq"}>
											<div class="link-editor">
												<div class="link-head">
													<span class="name">Preguntas</span>
													<button
														type="button"
														class="link-button"
														disabled={(section().preguntas ?? []).length >= 20}
														onClick={() =>
															setList("preguntas", [
																...(section().preguntas ?? []),
																{ pregunta: "", respuesta: "" },
															])
														}
													>
														+ Añadir pregunta
													</button>
												</div>
												<For each={section().preguntas ?? []}>
													{(item, index) => (
														<div class="field-row">
															<label class="field">
																<span class="name">Pregunta</span>
																<input
																	value={item.pregunta}
																	maxlength="220"
																	onInput={(event) =>
																		setList(
																			"preguntas",
																			(section().preguntas ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, pregunta: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																/>
															</label>
															<label class="field">
																<span class="name">Respuesta</span>
																<textarea
																	class="section-textarea"
																	maxlength="1200"
																	value={item.respuesta}
																	onInput={(event) =>
																		setList(
																			"preguntas",
																			(section().preguntas ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, respuesta: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																/>
															</label>
															<button
																type="button"
																class="link-button danger"
																onClick={() =>
																	setList(
																		"preguntas",
																		(section().preguntas ?? []).filter(
																			(_, position) => position !== index(),
																		),
																	)
																}
															>
																Quitar
															</button>
														</div>
													)}
												</For>
											</div>
										</Show>

										<Show when={["about", "texto"].includes(section().tipo)}>
											<div class="link-editor">
												<div class="link-head">
													<span class="name">Enlaces</span>
													<button
														type="button"
														class="link-button"
														disabled={(section().enlaces ?? []).length >= 6}
														onClick={() =>
															setList("enlaces", [
																...(section().enlaces ?? []),
																{ texto: "", href: "" },
															])
														}
													>
														+ Añadir enlace
													</button>
												</div>
												<For each={section().enlaces ?? []}>
													{(item, index) => (
														<div class="field-row">
															<label class="field">
																<span class="name">Texto</span>
																<input
																	value={item.texto}
																	maxlength="90"
																	onInput={(event) =>
																		setList(
																			"enlaces",
																			(section().enlaces ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, texto: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																/>
															</label>
															<label class="field">
																<span class="name">Enlace</span>
																<input
																	value={item.href}
																	placeholder={LINK_PLACEHOLDER}
																	onInput={(event) =>
																		setList(
																			"enlaces",
																			(section().enlaces ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, href: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																/>
															</label>
															<label class="checkbox-field">
																<input
																	type="checkbox"
																	checked={Boolean(item.externo)}
																	onChange={(event) =>
																		setList(
																			"enlaces",
																			(section().enlaces ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, externo: event.currentTarget.checked }
																					: entry,
																			),
																		)
																	}
																/>
																<span>Otra pestaña</span>
															</label>
															<button
																type="button"
																class="link-button danger"
																onClick={() =>
																	setList(
																		"enlaces",
																		(section().enlaces ?? []).filter((_, position) => position !== index()),
																	)
																}
															>
																Quitar
															</button>
														</div>
													)}
												</For>
											</div>
										</Show>

										<Show when={["visita"].includes(section().tipo)}>
											<div class="link-editor">
												<div class="link-head">
													<span class="name">Enlaces</span>
													<button
														type="button"
														class="link-button"
														disabled={(section().enlaces ?? []).length >= 6}
														onClick={() =>
															setList("enlaces", [
																...(section().enlaces ?? []),
																{ texto: "", href: "" },
															])
														}
													>
														+ Añadir enlace
													</button>
												</div>
												<For each={section().enlaces ?? []}>
													{(item, index) => (
														<div class="field-row">
															<label class="field">
																<span class="name">Texto</span>
																<input
																	value={item.texto}
																	maxlength="90"
																	onInput={(event) =>
																		setList(
																			"enlaces",
																			(section().enlaces ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, texto: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																/>
															</label>
															<label class="field">
																<span class="name">Enlace</span>
																<input
																	value={item.href}
																	placeholder={LINK_PLACEHOLDER}
																	onInput={(event) =>
																		setList(
																			"enlaces",
																			(section().enlaces ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, href: event.currentTarget.value }
																					: entry,
																			),
																		)
																	}
																/>
															</label>
															<label class="checkbox-field">
																<input
																	type="checkbox"
																	checked={Boolean(item.primario)}
																	onChange={(event) =>
																		setList(
																			"enlaces",
																			(section().enlaces ?? []).map((entry, position) =>
																				position === index()
																					? { ...entry, primario: event.currentTarget.checked }
																					: entry,
																			),
																		)
																	}
																/>
																<span>Botón principal</span>
															</label>
															<button
																type="button"
																class="link-button danger"
																onClick={() =>
																	setList(
																		"enlaces",
																		(section().enlaces ?? []).filter((_, position) => position !== index()),
																	)
																}
															>
																Quitar
															</button>
														</div>
													)}
												</For>
											</div>
										</Show>

										<Show when={section().tipo === "cta"}>
											<LinkEditor
												label="Botón"
												value={section().boton}
												onChange={(value) => patch({ boton: value })}
											/>
										</Show>
									</div>

									<div class="actions">
										<button type="button" disabled={busy() || !dirty()} onClick={() => void save()}>
											{busy() ? "Guardando…" : "Guardar piezas"}
										</button>
										<button
											type="button"
											class="link-button"
											disabled={!dirty() || busy()}
											onClick={discard}
										>
											Descartar
										</button>
										<a
											class="link-button"
											href={`/preview/${props.site.slug}/#${section().id}`}
											target="_blank"
											rel="noreferrer"
										>
											Ver en la vista previa ↗
										</a>
									</div>
								</>
							)}
						</Show>
					</section>
				</div>
			</Show>
		</>
	);
}
