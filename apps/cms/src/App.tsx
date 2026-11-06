import { createResource, Show } from "solid-js";
import { fetchMe } from "./api";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SiteDetail from "./SiteDetail";
import Users from "./Users";

// Dos rutas y un servidor que devuelve index.html en cualquier ruta: no hace
// falta router, y cada navegación recarga con datos frescos. Antes de pintar
// nada se pregunta quién está dentro.
export default function App() {
	const [user, { refetch }] = createResource(fetchMe);

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
						const match = window.location.pathname.match(/^\/site\/([a-z0-9-]+)\/?$/);
						if (match) return <SiteDetail slug={match[1]} user={current()} />;
						if (/^\/usuarios\/?$/.test(window.location.pathname)) {
							return <Users user={current()} />;
						}
						return <Dashboard user={current()} />;
					}}
				</Show>
			</Show>
		</Show>
	);
}
