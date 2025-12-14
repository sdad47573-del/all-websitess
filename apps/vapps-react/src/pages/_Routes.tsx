import { Route, Switch } from 'wouter';
import Topbar from '../layouts/Topbar';
import { PrivateRoute } from '../router/PrivateRoute';
import { Beneficios } from './Beneficios';
import { Compras } from './Compras';
import { Estadisticas } from './Estadisticas';
import { HistorialVentas } from './HistorialVentas';
import { Home } from './Home';
import { Ingresos } from './Ingresos';
import { Login } from './Login';
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
		<>
			<Topbar />
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/ventas" component={Ventas} />
				<Route path="/compras" component={Compras} />
				<Route path="/estadisticas" component={Estadisticas} />
				<Route path="/ingresos" component={Ingresos} />
				<Route path="/beneficios" component={Beneficios} />
				<Route path="/ventas-historial" component={HistorialVentas} />
				<Route>404: No such page!</Route>
			</Switch>
		</>
	);
};
