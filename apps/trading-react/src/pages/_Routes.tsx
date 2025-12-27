import { Route, Switch } from 'wouter';
import OrderForm from '../components/OrderForm';
import Layout from '../layouts/Layout';
import BrokerDashboard from './BrokerDashboard';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Positions from './Positions';
import Trades from './Trades';

export function Routes() {
	return (
		<Layout>
			<Switch>
				<Route path="/" component={Dashboard} />
				<Route path="/broker" component={BrokerDashboard} />
				<Route path="/order/new" component={OrderForm} />
				<Route path="/orders" component={Orders} />
				<Route path="/positions" component={Positions} />
				<Route path="/trades" component={Trades} />
				<Route>404</Route>
			</Switch>
		</Layout>
	);
}
