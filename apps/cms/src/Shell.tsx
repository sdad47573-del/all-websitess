import type { JSX } from "solid-js";
import { Show } from "solid-js";
import { logoutUser } from "./api";
import { type AuthUser, ROLE_LABELS } from "./types";

export default function Shell(props: { title: string; user: AuthUser; children: JSX.Element }) {
	const leave = async () => {
		try {
			await logoutUser();
		} finally {
			window.location.href = "/";
		}
	};

	return (
		<>
			<header class="top">
				<a class="brand" href="/">
					<span class="mark">SD</span>
					<span>CMS de webs</span>
				</a>
				<nav class="crumbs">{props.title}</nav>
				<div class="session">
					<Show when={props.user.role === "admin"}>
						<a class="ghost-button" href="/usuarios">
							Usuarios
						</a>
					</Show>
					<span class="session-user">
						<strong>{props.user.name}</strong>
						<span class="hint">{ROLE_LABELS[props.user.role]}</span>
					</span>
					<button type="button" class="ghost-button" onClick={() => void leave()}>
						Salir
					</button>
				</div>
			</header>
			<main>{props.children}</main>
			<footer class="foot">
				Panel local: lee y escribe en <code>apps/&lt;web&gt;/src/data/site.ts</code>. Los cambios
				se guardan en el repositorio, sin commit.
			</footer>
		</>
	);
}
