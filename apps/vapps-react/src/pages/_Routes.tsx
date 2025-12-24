import { lazy, Suspense } from 'react';
import { Route, Switch } from 'wouter';
import { Loading } from '../components/Loading';
import Topbar from '../layouts/Topbar';
import { PrivateRoute } from '../router/PrivateRoute';

const Compras = lazy(() => import('./Compras').then(m => ({ default: m.Compras })));
const Estadisticas = lazy(() => import('./Estadisticas').then(m => ({ default: m.Estadisticas })));
const HistorialVentas = lazy(() => import('./HistorialVentas').then(m => ({ default: m.HistorialVentas })));
const Home = lazy(() => import('./Home').then(m => ({ default: m.Home })));
const LibroCuentas = lazy(() => import('./LibroCuentas').then(m => ({ default: m.LibroCuentas })));
const Login = lazy(() => import('./Login').then(m => ({ default: m.Login })));
const Promos = lazy(() => import('./Promos').then(m => ({ default: m.Promos })));
const Promos2 = lazy(() => import('./Promos2').then(m => ({ default: m.Promos2 })));
const Ventas = lazy(() => import('./Ventas').then(m => ({ default: m.Ventas })));

export const Routes = () => {
	return (
		<Suspense fallback={<Loading fullScreen />}>
			<Switch>
				<Route path="/login" component={Login} />

				<Route>
					<AuthedLayout />
				</Route>
			</Switch>
		</Suspense>
	);
};

const AuthedLayout = () => {
	return (
		<PrivateRoute>
			<Route path="/promos" component={Promos} />
			<Route path="/promos2" component={Promos2} />

			<Topbar />
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/ventas" component={Ventas} />
					<Route path="/compras" component={Compras} />
					<Route path="/ventas-historial" component={HistorialVentas} />
					<Route path="/estadisticas" component={Estadisticas} />
					<Route path="/libro-cuentas" component={LibroCuentas} />

					<Route>404: No such page!</Route>
				</Switch>
			</Suspense>
		</PrivateRoute>
	);
};
