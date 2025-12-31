import { lazy, Suspense } from 'react';
import { Route, Switch } from 'wouter';
import { Loading } from '../components/Loading';
import { OfflineIndicator } from '../components/OfflineIndicator';
import { AuthedLayout } from './_AuthedRoutes';

const Login = lazy(() => import('../pages/Login').then((m) => ({ default: m.Login })));

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
