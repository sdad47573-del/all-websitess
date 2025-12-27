import type { ReactNode } from 'react';
import { Link, useRoute } from 'wouter';

export default function Layout({ children }: { children: ReactNode }) {
	const [isDashboard] = useRoute('/');
	const [isOrders] = useRoute('/orders');
	const [isPositions] = useRoute('/positions');
	const [isTrades] = useRoute('/trades');
	return (
		<div>
			<nav className="nav">
				<Link href="/" className={isDashboard ? 'active' : ''}>
					Dashboard
				</Link>
				<Link href="/broker" className={window.location.pathname === '/broker' ? 'active' : ''}>
					Broker
				</Link>
				<Link href="/orders" className={isOrders ? 'active' : ''}>
					Órdenes
				</Link>
				<Link href="/positions" className={isPositions ? 'active' : ''}>
					Posiciones
				</Link>
				<Link href="/trades" className={isTrades ? 'active' : ''}>
					Trades
				</Link>
			</nav>
			<div className="container">{children}</div>
		</div>
	);
}
