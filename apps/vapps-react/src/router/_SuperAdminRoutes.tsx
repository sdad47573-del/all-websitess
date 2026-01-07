import { lazy, Suspense } from 'react';
import { Route, Switch } from 'wouter';
import { Loading } from '@react-components';
import { PrivateRoute } from './PrivateRoute';
import { SuperAdminRoute } from './SuperAdminRoute';
import Topbar from '../layouts/Topbar';

const Home = lazy(() => import('../pages/Home').then((m) => ({ default: m.Home })));
const Ventas = lazy(() => import('../pages/Ventas').then((m) => ({ default: m.Ventas })));
const Promos = lazy(() => import('../pages/Promos').then((m) => ({ default: m.Promos })));
const Promos2 = lazy(() => import('../pages/Promos2').then((m) => ({ default: m.Promos2 })));
const Compras = lazy(() => import('../pages/Compras').then((m) => ({ default: m.Compras })));
const HistorialVentas = lazy(() =>
	import('../pages/HistorialVentas').then((m) => ({ default: m.HistorialVentas })),
);
const Estadisticas = lazy(() =>
	import('../pages/Estadisticas').then((m) => ({ default: m.Estadisticas })),
);
const LibroCuentas = lazy(() =>
	import('../pages/LibroCuentas').then((m) => ({ default: m.LibroCuentas })),
);
const PendientesAsignar = lazy(() =>
	import('../pages/PendientesAsignar').then((m) => ({ default: m.PendientesAsignar })),
);
const NotFound = lazy(() => import('../pages/NotFound').then((m) => ({ default: m.NotFound })));
const ItemsNuevo = lazy(() =>
	import('../pages/ItemsNuevo').then((m) => ({ default: m.ItemsNuevo })),
);
const ComprasNueva = lazy(() =>
	import('../pages/ComprasNueva').then((m) => ({ default: m.ComprasNueva })),
);
const MarcasModelosNuevo = lazy(() =>
	import('../pages/MarcasModelosNuevo').then((m) => ({ default: m.MarcasModelosNuevo })),
);

export const AuthedLayout = () => {
	return (
		<PrivateRoute>
			<Topbar />
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/ventas" component={Ventas} />
					<Route path="/promos" component={Promos} />
					<Route path="/promos2" component={Promos2} />
					<Route path="/compras" component={Compras} />
					<Route path="/ventas-historial" component={HistorialVentas} />
					<Route path="/estadisticas" component={Estadisticas} />
					<Route path="/libro-cuentas" component={LibroCuentas} />
					<Route path="/pendientes-asignar" component={PendientesAsignar} />
					{/* Rutas Superadmin */}
					<SuperAdminRoute>
						<ComprasNueva />
						<Route path="/compras-nueva" component={ComprasNueva} />
						<Route path="/items-nuevo" component={ItemsNuevo} />
						<Route path="/marcas-modelos-nuevo" component={MarcasModelosNuevo} />
					</SuperAdminRoute>

					<Route component={NotFound} />
				</Switch>
			</Suspense>
		</PrivateRoute>
	);
};
