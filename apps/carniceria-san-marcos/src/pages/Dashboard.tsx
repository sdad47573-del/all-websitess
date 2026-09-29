import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { LayoutDashboard, Receipt } from 'lucide-react';

import { api } from '@/api';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { euro, SITE } from '@/lib/shop';

/**
 * Order overview.
 *
 * This route used to be protected starter content that only greeted a
 * signed-in user. With auth gone there is no user to greet, so it now shows the
 * shop's actual orders, which is what the route was for.
 */

interface Order {
	id: string;
	createdAt: number;
	status: 'pending' | 'paid' | 'cancelled';
	items: { label: string; amount: number }[];
	total: number;
	delivery: 'recogida' | 'domicilio';
}

interface Stats {
	total: number;
	paid: number;
	totalEur: number;
}

const STATUS_LABEL: Record<Order['status'], string> = {
	paid: 'Pagado',
	pending: 'Pendiente',
	cancelled: 'Cancelado',
};

export default function Dashboard() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [stats, setStats] = useState<Stats | null>(null);

	useEffect(() => {
		// Both reads fail together, so they are fetched together.
		void Promise.all([api.api.orders.$get(), api.api.orders.stats.$get()]).then(
			async ([ordersResponse, statsResponse]) => {
				if (ordersResponse.ok) setOrders(await ordersResponse.json());
				if (statsResponse.ok) setStats(await statsResponse.json());
			},
		);
	}, []);

	return (
		<main className="bg-background text-foreground min-h-screen px-6 py-10">
			<div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
				<header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-muted-foreground text-sm font-medium">{SITE.name}</p>
						<h1 className="mt-1 text-3xl font-bold tracking-tight">Pedidos</h1>
					</div>
					<Button asChild={false} variant="outline" className="self-start">
						<Link to="/">Volver a la tienda</Link>
					</Button>
				</header>

				<section aria-label="Resumen de pedidos" className="grid gap-4 sm:grid-cols-3">
					<Card className="border-border/70 shadow-none">
						<CardHeader className="pb-2">
							<div className="bg-primary/10 text-primary mb-2 flex size-10 items-center justify-center rounded-lg">
								<LayoutDashboard aria-hidden="true" className="size-5" />
							</div>
							<CardTitle className="text-muted-foreground text-sm font-medium">
								Pedidos totales
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-3xl font-bold tracking-tight">{stats ? stats.total : '—'}</p>
						</CardContent>
					</Card>

					<Card className="border-border/70 shadow-none">
						<CardHeader className="pb-2">
							<div className="bg-primary/10 text-primary mb-2 flex size-10 items-center justify-center rounded-lg">
								<Receipt aria-hidden="true" className="size-5" />
							</div>
							<CardTitle className="text-muted-foreground text-sm font-medium">
								Pedidos pagados
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-3xl font-bold tracking-tight">{stats ? stats.paid : '—'}</p>
						</CardContent>
					</Card>

					<Card className="border-border/70 shadow-none">
						<CardHeader className="pb-2">
							<div className="bg-primary/10 text-primary mb-2 flex size-10 items-center justify-center rounded-lg">
								<Receipt aria-hidden="true" className="size-5" />
							</div>
							<CardTitle className="text-muted-foreground text-sm font-medium">Facturado</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-3xl font-bold tracking-tight">
								{stats ? euro(stats.totalEur) : '—'}
							</p>
						</CardContent>
					</Card>
				</section>

				<Card className="border-border/70 shadow-none">
					<CardHeader>
						<CardTitle>Pedidos recientes</CardTitle>
					</CardHeader>
					<CardContent>
						{orders.length === 0 ? (
							<p className="text-muted-foreground text-sm">
								Todavía no hay pedidos. Cuando alguien compre en la tienda aparecerán aquí.
							</p>
						) : (
							<ul className="divide-y">
								{orders.map((order) => (
									<li
										key={order.id}
										className="flex flex-wrap items-center justify-between gap-3 py-3"
									>
										<div className="min-w-0">
											<p className="truncate text-sm font-medium">
												{order.items.map((item) => item.label).join(', ')}
											</p>
											<p className="text-muted-foreground mt-0.5 text-xs">
												{new Date(order.createdAt).toLocaleDateString('es-ES', {
													day: 'numeric',
													month: 'long',
													year: 'numeric',
												})}
												{order.delivery === 'recogida' ? ' · Recogida en tienda' : ' · A domicilio'}
											</p>
										</div>
										<div className="flex items-center gap-3">
											<Badge variant={order.status === 'paid' ? 'secondary' : 'outline'}>
												{STATUS_LABEL[order.status]}
											</Badge>
											<span className="text-sm font-semibold tabular-nums">
												{euro(order.total)}
											</span>
										</div>
									</li>
								))}
							</ul>
						)}
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
