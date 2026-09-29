import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { CircleCheck, CircleAlert, MessageCircle } from 'lucide-react';
import { api } from '@/api';
import { Button } from '@/components/ui/button';
import { SITE, whatsappUrl } from '@/lib/shop';

export default function PaymentResult() {
	const [params] = useSearchParams();
	const sessionId = params.get('session_id');
	const orderId = params.get('order');
	const [state, setState] = useState<'checking' | 'ok' | 'fail'>('checking');

	useEffect(() => {
		let cancelled = false;
		if (!sessionId || !orderId) {
			setState('fail');
			return;
		}

		// The server asks Stripe whether the session was actually paid, so a
		// hand-edited URL cannot mark an order as paid.
		api.api.orders[':id'].confirm
			.$post({ param: { id: orderId }, json: { sessionId, orderId } })
			.then(async (response) => {
				if (cancelled) return;
				if (!response.ok) {
					setState('fail');
					return;
				}
				const result = (await response.json()) as { paid: boolean };
				setState(result.paid ? 'ok' : 'fail');
			})
			.catch(() => {
				if (!cancelled) setState('fail');
			});

		return () => {
			cancelled = true;
		};
	}, [sessionId, orderId]);

	return (
		<main className="bg-background flex min-h-screen items-center justify-center px-4">
			<div className="bg-card w-full max-w-md rounded-2xl border p-8 text-center">
				{state === 'checking' && (
					<p role="status" aria-live="polite" className="text-muted-foreground">
						Verificando tu pago…
					</p>
				)}

				{state === 'ok' && (
					<>
						<CircleCheck className="text-forest mx-auto size-14" />
						<h1 className="mt-4 font-serif text-3xl font-semibold">¡Pedido pagado!</h1>
						<p className="text-muted-foreground mt-2 text-sm">
							Tenemos tu pedido y el recibo te llega por email. Si elegiste recogida, te avisamos
							por WhatsApp cuando esté listo.
						</p>
					</>
				)}

				{state === 'fail' && (
					<>
						<CircleAlert className="text-destructive mx-auto size-14" />
						<h1 className="mt-4 font-serif text-3xl font-semibold">Pago no confirmado</h1>
						<p className="text-muted-foreground mt-2 text-sm">
							No se ha cobrado nada. Puedes reintentarlo desde el catálogo o enviarnos el pedido por
							WhatsApp y lo reservamos igualmente.
						</p>
					</>
				)}

				<div className="mt-6 flex flex-col gap-2">
					<Button asChild={false} onClick={() => (window.location.href = '/#catalogo')}>
						Volver al catálogo
					</Button>
					<a
						href={whatsappUrl('¡Hola! Acabo de hacer un pedido y quiero confirmar.')}
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="outline" className="w-full">
							<MessageCircle className="size-4" /> Confirmar por WhatsApp
						</Button>
					</a>
					<Link to="/" className="text-muted-foreground text-xs underline-offset-2 hover:underline">
						Volver a la tienda
					</Link>
					<p className="text-muted-foreground mt-2 text-xs">
						{SITE.name} · {SITE.phone}
					</p>
				</div>
			</div>
		</main>
	);
}
