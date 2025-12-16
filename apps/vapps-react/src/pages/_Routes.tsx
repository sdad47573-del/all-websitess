import { Route, Switch } from 'wouter';
import Topbar from '../layouts/Topbar';
import { PrivateRoute } from '../router/PrivateRoute';
import { Compras } from './Compras';
import { Estadisticas } from './Estadisticas';
import { HistorialVentas } from './HistorialVentas';
import { Home } from './Home';
import { LibroCuentas } from './LibroCuentas';
import { Login } from './Login';
import { Promos } from './Promos';
import { Promos2 } from './Promos2';
import { Ventas } from './Ventas';

export const Routes = () => {
	return (
		<Switch>
			<Route path="/login" component={Login} />
			<Route>
				<PrivateRoute>
					<AuthedRoutes />
				</PrivateRoute>
			</Route>
		</Switch>
	);
};

const AuthedRoutes = () => {
	return (
		<Switch>
			<Route path="/promos" component={Promos} />
			<Route path="/promos2" component={Promos2} />

			<Route>
				<Topbar />
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/ventas" component={Ventas} />
					<Route path="/compras" component={Compras} />
					<Route path="/ventas-historial" component={HistorialVentas} />
					<Route path="/estadisticas" component={Estadisticas} />
					<Route path="/libro-cuentas" component={LibroCuentas} />
					<Route>404: No such page!</Route>
				</Switch>
			</Route>
		</Switch>
	);
};
