import { createResource, Show } from "solid-js";
import { fetchConfig, fetchMe } from "./api";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SiteDetail from "./SiteDetail";
import Users from "./Users";

// Dos rutas y un servidor que devuelve index.html en cualquier ruta: no hace
// falta router, y cada navegación recarga con datos frescos. Antes de pintar
// nada se pregunta quién está dentro.
export default function App() {
	const [user, { refetch }] = createResource(fetchMe);
	const [config] = createResource(fetchConfig);

	return (
		<Show when={!user.loading} fallback={<p class="count gate">Comprobando sesión…</p>}>
			<Show
				when={!user.error}
				fallback={
					<p class="flash error gate">
						No se ha podido comprobar la sesión: {String(user.error)}
					</p>
				}
			>
				<Show when={user()} fallback={<Login onLogged={() => void refetch()} />}>
					{(current) => {
						if (config.loading) return <p class="count gate">Cargando el CMS…</p>;

						const scope = config();
						const path = window.location.pathname;

						// Modo propietario: una sola web, sin listado ni fichas ajenas.
						if (scope?.singleSite && scope.siteSlug) {
							if (/^\/usuarios\/?$/.test(path) && current().role === "admin") {
								return <Users user={current()} />;
							}
							const target = `/site/${scope.siteSlug}`;
							if (path !== target) {
								window.history.replaceState(null, "", `${target}${window.location.hash}`);
							}
							return <SiteDetail slug={scope.siteSlug} user={current()} singleSite />;
						}

						const match = path.match(/^\/site\/([a-z0-9-]+)\/?$/);
						if (match) return <SiteDetail slug={match[1]} user={current()} />;
						if (/^\/usuarios\/?$/.test(path)) {
							return <Users user={current()} />;
						}
						return <Dashboard user={current()} />;
					}}
				</Show>
			</Show>
		</Show>
	);
}
