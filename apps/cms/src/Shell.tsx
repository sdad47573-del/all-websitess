import type { JSX } from "solid-js";

export default function Shell(props: { title: string; children: JSX.Element }) {
	return (
		<>
			<header class="top">
				<a class="brand" href="/">
					<span class="mark">SD</span>
					<span>CMS de webs</span>
				</a>
				<nav class="crumbs">{props.title}</nav>
			</header>
			<main>{props.children}</main>
			<footer class="foot">
				Panel local: lee y escribe en <code>apps/&lt;web&gt;/src/data/site.ts</code>. Los cambios
				se guardan en el repositorio, sin commit.
			</footer>
		</>
	);
}
