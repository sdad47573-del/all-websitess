import {
	createEffect,
	type JSX,
	createMemo,
	createResource,
	createSignal,
	For,
	onCleanup,
	Show,
	untrack,
} from "solid-js";
import { fetchMedia, fetchSectionCatalog, fetchSections, mediaUrl, saveSections } from "../api";
import {
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

// Las piezas que se pintan con los componentes compartidos llevan un id fijo en
// la plantilla (`inicio`, `casa`…); las demás usan el id guardado en el JSON.
// Así la vista previa sabe a dónde saltar al elegir cada pieza.
const ANCLAS: Partial<Record<SectionType, string>> = {
	hero: "inicio",
	about: "casa",
	galeria: "galeria",
	visita: "visitanos",
	faq: "preguntas",
};

const anclasDe = (section: Section) =>
	[section.id, ANCLAS[section.tipo]].filter((id): id is string => Boolean(id));

/** Anchos de pantalla que se pueden simular en la vista previa. */
const SCREENS = [
	{ id: "desktop", label: "Escritorio", width: 0 },
	{ id: "tablet", label: "Tablet", width: 768 },
	{ id: "mobile", label: "Móvil", width: 390 },
] as const;

type ScreenId = (typeof SCREENS)[number]["id"];

function blank(tipo: SectionType): Section {
	const id = `pieza-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 5)}`;
	const base: Section = { id, tipo, visible: true, titulo: "" };
	// Cada tipo llega con su primer hueco para rellenar: así el editor enseña los
	// campos y el guardado solo se queja de lo que falte de verdad.
	if (tipo === "about" || tipo === "texto") return { ...base, parrafos: [""] };
	if (tipo === "destacados") return { ...base, items: [{ titulo: "", texto: "" }] };
	if (tipo === "faq") return { ...base, preguntas: [{ pregunta: "", respuesta: "" }] };
	if (tipo === "galeria") return { ...base, fotos: [{ imagen: "", alt: "" }] };
	if (tipo === "cta") return { ...base, texto: "", boton: { texto: "", href: "#" } };
	return base;
}

/** Bloque plegable del formulario: un título y, debajo, sus campos. */
function Group(props: { title: string; when?: boolean; open?: boolean; children: JSX.Element }) {
	return (
		<Show when={props.when ?? true}>
			<details class="field-group" open={props.open}>
				<summary>{props.title}</summary>
				{props.children}
			</details>
		</Show>
	);
}

/** Miniatura de cómo se ve cada tipo de pieza en la página. */
function PiecePreview(props: { tipo: SectionType; titulo?: string }) {
	const title = () => plain(props.titulo) || SECTION_LABELS[props.tipo];
	const lines = (count: number) => (
		<span class="mock-lines">
			<For each={Array.from({ length: count }, (_, index) => index)}>
				{() => <span class="mock-line" />}
			</For>
		</span>
	);

	return (
		<span classList={{ mock: true, [`mock-${props.tipo}`]: true }}>
			<Show when={props.tipo === "hero"}>
				<span class="mock-shot">
					<span class="mock-shot-title">{title()}</span>
					<span class="mock-pills">
						<span class="mock-pill" />
						<span class="mock-pill ghost" />
					</span>
				</span>
			</Show>

			<Show when={props.tipo === "galeria"}>
				<span class="mock-title">{title()}</span>
				<span class="mock-photos">
					<For each={[1, 2, 3]}>{() => <span class="mock-photo" />}</For>
				</span>
			</Show>

			<Show when={props.tipo === "destacados"}>
				<span class="mock-title">{title()}</span>
				<span class="mock-cards">
					<For each={[1, 2, 3]}>
						{(number) => (
							<span class="mock-card">
								<span class="mock-num">{String(number).padStart(2, "0")}</span>
								<span class="mock-line" />
								<span class="mock-line short" />
							</span>
						)}
					</For>
				</span>
			</Show>

			<Show when={props.tipo === "visita"}>
				<span class="mock-title">{title()}</span>
				<span class="mock-split">
					<span class="mock-map" />
					{lines(3)}
				</span>
			</Show>

			<Show when={props.tipo === "faq"}>
				<span class="mock-title">{title()}</span>
				<For each={[1, 2, 3]}>
					{() => (
						<span class="mock-faq">
							<span class="mock-line" />
							<span class="mock-plus">+</span>
						</span>
					)}
				</For>
			</Show>

			<Show when={props.tipo === "cta"}>
				<span class="mock-cta">
					<span class="mock-title">{title()}</span>
					{lines(2)}
					<span class="mock-pill" />
				</span>
			</Show>

			<Show when={props.tipo === "about" || props.tipo === "texto"}>
				<span class="mock-title">{title()}</span>
				{lines(4)}
			</Show>
		</span>
	);
}

function TextField(props: {
	label: string;
	value?: string;
	hint?: string;
	multiline?: boolean;
	maxlength?: number;
	onInput: (value: string) => void;
}) {
	let area: HTMLTextAreaElement | undefined;
	const length = () => (props.value ?? "").length;

	// El textarea crece con el texto: así se lee el título o la entradilla enteros
	// en vez de asomarse por una ventana de 52 px con barra interna.
	const fit = () => {
		if (!area) return;
		area.style.height = "auto";
		area.style.height = `${area.scrollHeight + 2}px`;
	};
	createEffect(() => {
		props.value;
		fit();
	});

	return (
		<label class="field">
			<span class="field-head">
				<span class="name">{props.label}</span>
				<Show when={props.maxlength}>
					<span
						classList={{
							"char-count": true,
							full: length() >= (props.maxlength ?? 0),
						}}
					>
						{length()}/{props.maxlength}
					</span>
				</Show>
			</span>
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
					ref={(element) => (area = element)}
					class="section-textarea"
					maxlength={props.maxlength}
					value={props.value ?? ""}
					onInput={(event) => {
						props.onInput(event.currentTarget.value);
						fit();
					}}
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
	slug: string;
	onInput: (value: string) => void;
	/** El botón de vaciar sobra cuando la fila ya tiene su propio «Quitar». */
	clearable?: boolean;
}) {
	const current = () => props.media.find((item) => item.name === props.value);
	const missing = () => Boolean(props.value) && !current();
	const size = () => {
		const bytes = current()?.size ?? 0;
		if (bytes <= 0) return "";
		return bytes > 1024 * 1024
			? `${(bytes / 1024 / 1024).toFixed(1)} MB`
			: `${Math.max(1, Math.round(bytes / 1024))} KB`;
	};

	return (
		<div class="field media-field">
			<span class="field-head">
				<span class="name">{props.label}</span>
				<Show when={props.value && props.clearable !== false}>
					<button type="button" class="link-button danger" onClick={() => props.onInput("")}>
						Quitar
					</button>
				</Show>
			</span>
			<div class="media-picker">
				<span class="media-shot" classList={{ empty: !props.value, missing: missing() }}>
					<Show when={missing() ? undefined : props.value}>
						{(name) => <img src={mediaUrl(props.slug, name())} alt="" loading="lazy" />}
					</Show>
					<Show when={missing()}>
						<span class="media-missing" aria-hidden="true">
							?
						</span>
					</Show>
				</span>
				<div class="media-controls">
					<select
						class="role-select"
						value={props.value ?? ""}
						aria-label={props.label}
						onChange={(event) => props.onInput(event.currentTarget.value)}
					>
						<option value="">Sin imagen</option>
						<Show when={missing()}>
							<option value={props.value}>{props.value} (falta)</option>
						</Show>
						<For each={props.media}>
							{(item) => <option value={item.name}>{item.name}</option>}
						</For>
					</select>
					<span class="hint">
						{missing()
							? `${props.value} no está en /images: la web usará otra foto.`
							: props.value
								? size()
									? `${props.value} · ${size()}`
									: props.value
								: "Sin imagen: la web usa la primera de la carpeta."}
					</span>
				</div>
			</div>
		</div>
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
	// Catálogo de piezas que ya existen en las webs publicadas.
	const [catalog] = createResource(fetchSectionCatalog);

	const [draft, setDraft] = createSignal<Section[]>([]);
	const [savedJson, setSavedJson] = createSignal("[]");
	const [selectedId, setSelectedId] = createSignal<string | null>(null);
	// Tres vistas: el listado de piezas, el catálogo para añadir y el editor.
	const [view, setView] = createSignal<"lista" | "catalogo" | "editor">("lista");
	const [busy, setBusy] = createSignal(false);
	const [flash, setFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);
	// La vista previa sale del build: se recarga a mano o al guardar las piezas.
	const [previewReload, setPreviewReload] = createSignal(0);
	const previewSrc = createMemo(
		() => `/preview/${props.site.slug}/?v=${previewReload()}`,
	);
	// Ancho simulado: el iframe adopta esa medida y la web responde con sus
	// propias media queries. No recarga: solo cambia el tamaño del marco.
	const [screen, setScreen] = createSignal<ScreenId>("desktop");
	const screenWidth = createMemo(
		() => SCREENS.find((item) => item.id === screen())?.width ?? 0,
	);
	let frame: HTMLIFrameElement | undefined;

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

	// La vista previa enseña solo la pieza abierta: dentro del iframe se oculta
	// todo lo que no sea ella (cabecera, otras secciones, pie y flotantes) pero
	// se conservan sus contenedores, para mantener el fondo y los márgenes del
	// sitio. El iframe es del mismo origen, así que se puede manipular su DOM.
	const [previewNote, setPreviewNote] = createSignal("");
	let timers: Array<ReturnType<typeof setTimeout>> = [];
	let hidden: Array<{ element: HTMLElement; display: string }> = [];
	let isolated: HTMLElement | null = null;

	const restorePreview = () => {
		for (const item of hidden) item.element.style.display = item.display;
		hidden = [];
		isolated = null;
	};

	const hideSibling = (element: Element) => {
		if (["SCRIPT", "STYLE", "LINK", "META", "TEMPLATE", "NOSCRIPT"].includes(element.tagName)) {
			return;
		}
		const node = element as HTMLElement;
		hidden.push({ element: node, display: node.style.display });
		node.style.display = "none";
	};

	const isolatePiece = (doc: Document, win: Window, target: HTMLElement) => {
		if (isolated === target) return;
		restorePreview();
		// Sube desde la pieza hasta el body escondiendo los hermanos de cada nivel:
		// así solo queda la rama que la contiene.
		let node: Element | null = target;
		while (node && node.parentElement && node !== doc.body) {
			for (const sibling of Array.from(node.parentElement.children)) {
				if (sibling !== node) hideSibling(sibling);
			}
			node = node.parentElement;
		}
		isolated = target;
		win.scrollTo({ top: 0 });
	};

	/** Elemento de la pieza dentro del documento de la vista previa. */
	const findPiece = (doc: Document, section: Section) =>
		anclasDe(section)
			.map((id) => doc.getElementById(id))
			.find((node): node is HTMLElement => Boolean(node));

	const jumpToPiece = () => {
		const doc = frame?.contentDocument;
		const win = frame?.contentWindow;
		const section = selected();
		if (!doc || !win || !section) return; // aún cargando: lo reintenta el `onLoad`
		const target = findPiece(doc, section);
		if (!target) {
			setPreviewNote(
				"Esta pieza no aparece en la vista previa: puede estar oculta o faltar el build.",
			);
			return;
		}
		setPreviewNote("");
		isolatePiece(doc, win, target);
		syncPiece(target, section);
	};

	const focusPreview = () => {
		for (const timer of timers) clearTimeout(timer);
		restorePreview();
		jumpToPiece();
		timers = [60, 300, 900, 1800].map((delay) => setTimeout(jumpToPiece, delay));
	};

	// Vuelca el borrador en la pieza: los componentes marcan con `data-campo` qué
	// nodo pinta cada campo, así lo que escribes se ve al momento sin guardar ni
	// reconstruir la web.
	const replaceText = (node: HTMLElement, value: string) => {
		const texts = Array.from(node.childNodes).filter(
			(child): child is Text => child.nodeType === 3,
		);
		if (!texts.length) {
			node.append(value);
			return;
		}
		// El texto editable es el más largo: los spans decorativos (el punto de la
		// etiqueta, la flecha del enlace) se quedan como están.
		const longest = texts.reduce((first, next) =>
			next.data.trim().length > first.data.trim().length ? next : first,
		);
		// Se conservan los espacios que separaban el texto de esos spans.
		const next = `${/^\s/.test(longest.data) ? " " : ""}${value}${/\s$/.test(longest.data) ? " " : ""}`;
		if (longest.data !== next) longest.data = next;
	};

	const applyLinkNode = (node: HTMLElement, link?: SectionLink) => {
		replaceText(node, link?.texto ?? "");
		const href = link?.href || "#";
		if (node.getAttribute("href") !== href) node.setAttribute("href", href);
	};

	const applyLink = (target: HTMLElement, field: string, link?: SectionLink) => {
		for (const node of Array.from(
			target.querySelectorAll<HTMLElement>(`[data-campo="${field}"]`),
		)) {
			applyLinkNode(node, link);
		}
	};

	const fieldText = (target: HTMLElement, field: string, value?: string) => {
		for (const node of Array.from(
			target.querySelectorAll<HTMLElement>(`[data-campo="${field}"]`),
		)) {
			if (field === "titulo") {
				// Los títulos admiten <br /> y <em>, como en la web.
				if (node.innerHTML !== (value ?? "")) node.innerHTML = value ?? "";
			} else {
				replaceText(node, value ?? "");
			}
		}
	};

	/** Ajusta una lista: rellena, oculta las sobrantes y clona si faltan huecos. */
	const syncList = (
		target: HTMLElement,
		selector: string,
		count: number,
		fill: (node: HTMLElement, index: number) => void,
	) => {
		const nodes = Array.from(target.querySelectorAll<HTMLElement>(selector));
		const first = nodes[0];
		if (!first?.parentElement) return;
		nodes.forEach((node, index) => {
			node.hidden = index >= count;
			if (index < count) fill(node, index);
		});
		for (let index = nodes.length; index < count; index++) {
			const clone = first.cloneNode(true) as HTMLElement;
			clone.hidden = false;
			fill(clone, index);
			first.parentElement.append(clone);
		}
	};

	const syncPiece = (target: HTMLElement, section: Section) => {
		fieldText(target, "titulo", section.titulo);
		fieldText(target, "etiqueta", section.etiqueta);
		fieldText(target, "texto", section.texto);
		fieldText(target, "nota", section.nota);
		fieldText(target, "notaHorario", section.notaHorario);
		fieldText(target, "pieFoto", section.pieFoto);
		fieldText(target, "distintivo", section.distintivo);
		fieldText(target, "mapaEtiqueta", section.mapaEtiqueta);
		applyLink(target, "boton", section.boton);
		applyLink(target, "botonSecundario", section.botonSecundario);
		applyLink(target, "galeriaEnlace", section.enlaceGaleria);

		const parrafos = section.parrafos ?? [];
		syncList(target, '[data-campo="parrafo"]', parrafos.length, (node, index) =>
			replaceText(node, parrafos[index] ?? ""),
		);

		const datos = section.datos ?? [];
		syncList(target, '[data-campo="dato"]', datos.length, (node, index) => {
			const html = datos[index]?.html ?? "";
			if (node.innerHTML !== html) node.innerHTML = html;
		});

		const destacados = section.items ?? [];
		syncList(target, '[data-campo="destacado"]', destacados.length, (node, index) => {
			for (const title of Array.from(
				node.querySelectorAll<HTMLElement>('[data-campo="itemTitulo"]'),
			)) {
				replaceText(title, destacados[index]?.titulo ?? "");
			}
			for (const text of Array.from(
				node.querySelectorAll<HTMLElement>('[data-campo="itemTexto"]'),
			)) {
				replaceText(text, destacados[index]?.texto ?? "");
			}
		});

		const preguntas = section.preguntas ?? [];
		syncList(target, '[data-campo="pregunta"]', preguntas.length, (node, index) => {
			for (const question of Array.from(
				node.querySelectorAll<HTMLElement>('[data-campo="preguntaTexto"]'),
			)) {
				replaceText(question, preguntas[index]?.pregunta ?? "");
			}
			for (const answer of Array.from(
				node.querySelectorAll<HTMLElement>('[data-campo="respuesta"]'),
			)) {
				replaceText(answer, preguntas[index]?.respuesta ?? "");
			}
		});

		const enlaces = section.enlaces ?? [];
		syncList(target, '[data-campo="enlace"]', enlaces.length, (node, index) =>
			applyLinkNode(node, enlaces[index]),
		);
	};

	const syncPreview = () => {
		const doc = frame?.contentDocument;
		const section = selected();
		if (!doc || !section) return;
		const target = findPiece(doc, section);
		if (target) syncPiece(target, section);
	};

	// Cualquier cambio del formulario se refleja al momento en la pieza aislada.
	createEffect(() => {
		selectedId();
		draft();
		untrack(syncPreview);
	});

	onCleanup(() => {
		for (const timer of timers) clearTimeout(timer);
	});

	// Al entrar en el editor o cambiar de pieza se salta su sección; el `onLoad`
	// del iframe vuelve a colocarse cuando la página termina de cargar. `untrack`
	// evita que escribir en un campo (que cambia el borrador) relance el salto.
	createEffect(() => {
		view();
		selectedId();
		untrack(focusPreview);
	});

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
		setView("editor");
	};

	const open = (id: string) => {
		setSelectedId(id);
		setView("editor");
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
				text: "Piezas guardadas. Lanza el build de la web y pulsa Recargar para verlas en la vista previa.",
			});
			setPreviewReload((value) => value + 1);
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
				<Show when={view() === "lista"}>
					<section class="panel pieces-list-view">
						<div class="list-head">
							<h2>Piezas de la página</h2>
							<span classList={{ chip: true, warn: dirty() }}>
								{dirty() ? "sin guardar" : "guardado"}
							</span>
						</div>
						<p class="note">
							Se pintan en este orden. Elige una para rellenar sus campos; la vista previa
							está a la derecha.
						</p>

						<ol class="piece-list">
							<For each={draft()}>
								{(section, index) => (
									<li>
										<div classList={{ "piece-row": true, active: section.id === selectedId() }}>
											<button
												type="button"
												class="piece-main"
												onClick={() => open(section.id)}
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

						<button
							type="button"
							class="add-sections"
							onClick={() => setView("catalogo")}
						>
							+ Añadir secciones
						</button>

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
						</div>

						<Show when={props.onEditCode}>
							<button
								type="button"
								class="link-button piece-code"
								onClick={() => props.onEditCode?.()}
							>
								Editar código de la plantilla
							</button>
						</Show>
					</section>
				</Show>

				<Show when={view() === "catalogo"}>
					<section class="panel catalog-view">
						<div class="list-head">
							<h2>Añadir pieza</h2>
							<button type="button" class="link-button" onClick={() => setView("lista")}>
								← Volver a la lista
							</button>
						</div>
						<p class="note">
							Piezas que ya usan las webs existentes. Al elegir una se añade al final y se
							abre para rellenarla.
						</p>
						<Show
							when={catalog()}
							fallback={
								<p class="hint">
									{catalog.error
										? "No se ha podido cargar el catálogo."
										: "Cargando el catálogo…"}
								</p>
							}
						>
							{(entries) => (
								<div class="catalog-grid">
									<For each={entries()}>
										{(item) => (
											<button
												type="button"
												class="catalog-pick"
												onClick={() => add(item.tipo)}
											>
												<span class="catalog-shot">
													<PiecePreview
														tipo={item.tipo}
														titulo={item.ejemplos[0]?.titulo}
													/>
												</span>
												<span class="catalog-name">{item.label}</span>
												<span class="hint">{item.descripcion}</span>
												<span class="hint">
													{`${item.usos} ${item.usos === 1 ? "web" : "webs"}`}
													<Show when={item.ejemplos[0]}>
														{(example) => ` · ${example().web}`}
													</Show>
												</span>
											</button>
										)}
									</For>
								</div>
							)}
						</Show>
					</section>
				</Show>

				<Show when={view() === "editor"}>
					<div class="sections-layout">
						<section class="panel piece-editor">
							<button
								type="button"
								class="link-button back-to-list"
								onClick={() => setView("lista")}
							>
								← Todas las piezas
							</button>
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

										<Group title="Título y textos" open>
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
										</Group>

										<Group when={section().tipo === "hero"} title="Imagen, botones y datos">
											<ImageField
												label="Imagen de portada"
												value={section().imagen}
												media={media() ?? []}
												slug={props.site.slug}
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
										</Group>

										<Group
											when={["about", "texto"].includes(section().tipo)}
											title="Párrafos"
										>
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
										</Group>

										<Group
											when={["about", "galeria", "visita", "texto"].includes(section().tipo)}
											title="Notas y mapa"
										>
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
										</Group>

										<Group when={section().tipo === "destacados"} title="Destacados">
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
										</Group>

										<Group when={section().tipo === "galeria"} title="Fotos y botón">
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
														<div class="field-row">								<ImageField
									label="Imagen"
									value={foto.imagen}
									media={media() ?? []}
									slug={props.site.slug}
									clearable={false}
									onInput={(value) =>
										setList(
											"fotos",
											(section().fotos ?? []).map((entry, position) =>
												position === index() ? { ...entry, imagen: value } : entry,
											),
										)
									}
								/>
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
										</Group>

										<Group when={section().tipo === "faq"} title="Preguntas">
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
										</Group>

										<Group
											when={["about", "texto", "visita"].includes(section().tipo)}
											title="Enlaces"
										>
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
										</Group>

										<Group when={section().tipo === "cta"} title="Botón">
											<LinkEditor
												label="Botón"
												value={section().boton}
												onChange={(value) => patch({ boton: value })}
											/>
										</Group>
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
											href={`/preview/${props.site.slug}/#${anclasDe(section()).at(-1)}`}
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

					<aside class="panel sections-preview">
						<div class="sections-preview-head">
							<h2>Vista previa</h2>
							<div class="sections-preview-tools">
								<button type="button" class="link-button" onClick={focusPreview}>
									Ir a la pieza
								</button>
								<button
									type="button"
									class="link-button"
									onClick={() => setPreviewReload((value) => value + 1)}
								>
									Recargar
								</button>
								<a
									class="link-button"
									href={`/preview/${props.site.slug}/`}
									target="_blank"
									rel="noreferrer"
								>
									Abrir ↗
								</a>
							</div>
						</div>

						<div class="sections-preview-sizes" role="group" aria-label="Tamaño de pantalla">
							<For each={SCREENS}>
								{(item) => (
									<button
										type="button"
										classList={{ "size-button": true, active: screen() === item.id }}
										aria-pressed={screen() === item.id}
										onClick={() => setScreen(item.id)}
									>
										{item.label}
										<Show when={item.width > 0}>
											<span>{item.width} px</span>
										</Show>
									</button>
								)}
							</For>
						</div>

						<Show
							when={props.site.hasBuild}
							fallback={
								<p class="hint">
									Esta web aún no tiene build. Ejecuta <code>bun run build</code> en{" "}
									<code>apps/{props.site.slug}</code> y pulsa Recargar.
								</p>
							}
						>
							<div
								class="sections-preview-frame"
								classList={{ device: screenWidth() > 0 }}
							>
								<iframe
									ref={(element) => (frame = element)}
									src={previewSrc()}
									title={`Vista previa de ${props.site.name}`}
									style={{ width: screenWidth() ? `${screenWidth()}px` : "100%" }}
									onLoad={focusPreview}
								/>
							</div>
							<Show when={previewNote()}>
								<p class="hint">{previewNote()}</p>
							</Show>
							<p class="hint">
								Se muestra solo la pieza abierta y se actualiza al escribir; «Abrir ↗» carga
								la web completa. Guarda y lanza el build para publicarla.
							</p>
						</Show>
						</aside>
					</div>
				</Show>
			</Show>
		</>
	);
}
