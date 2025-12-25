import { lazy, Suspense } from 'react';
import { Route, Switch } from 'wouter';
import { Loading } from '../components/Loading';
import Topbar from '../layouts/Topbar';
import { PrivateRoute } from '../router/PrivateRoute';
import { OfflineIndicator } from '../components/OfflineIndicator';

const Compras = lazy(() => import('./Compras').then(m => ({ default: m.Compras })));
const Estadisticas = lazy(() => import('./Estadisticas').then(m => ({ default: m.Estadisticas })));
const HistorialVentas = lazy(() => import('./HistorialVentas').then(m => ({ default: m.HistorialVentas })));
const Home = lazy(() => import('./Home').then(m => ({ default: m.Home })));
const LibroCuentas = lazy(() => import('./LibroCuentas').then(m => ({ default: m.LibroCuentas })));
const Login = lazy(() => import('./Login').then(m => ({ default: m.Login })));
const Promos = lazy(() => import('./Promos').then(m => ({ default: m.Promos })));
const Promos2 = lazy(() => import('./Promos2').then(m => ({ default: m.Promos2 })));
const Ventas = lazy(() => import('./Ventas').then(m => ({ default: m.Ventas })));
const PendientesAsignar = lazy(() => import('./PendientesAsignar').then(m => ({ default: m.PendientesAsignar })));

export const Routes = () => {
	return (
		<>
			<OfflineIndicator />
			<Suspense fallback={<Loading fullScreen />}>
				<Switch>
					<Route path="/login" component={Login} />

					<Route>
						<AuthedLayout />
					</Route>
				</Switch>
			</Suspense>
		</>
	);
};

const AuthedLayout = () => {
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

					<Route>404: No such page!</Route>
				</Switch>
			</Suspense>
		</PrivateRoute>
	);
};
