import Dashboard from "./Dashboard";
import SiteDetail from "./SiteDetail";

// Dos rutas y un servidor que devuelve index.html en cualquier ruta: no hace
// falta router, y cada navegación recarga con datos frescos.
export default function App() {
	const match = window.location.pathname.match(/^\/site\/([a-z0-9-]+)\/?$/);
	return match ? <SiteDetail slug={match[1]} /> : <Dashboard />;
}
