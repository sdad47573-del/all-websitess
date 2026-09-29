import { useMemo, useState } from 'react';
import { CreditCard, Loader2, Truck } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '@/api';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
	availableSlots,
	euro,
	PACKS,
	PRODUCTS,
	SITE,
	whatsappUrl,
	type QuantityMap,
} from '@/lib/shop';
import { MessageCircle } from 'lucide-react';

type Props = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	cart: QuantityMap;
	packs: Record<string, number>;
	onClear: () => void;
	/** Se llama cuando el pedido sale (WhatsApp o pago iniciado) para guardarlo como último pedido. */
	onSubmit?: () => void;
};

const DELIVERY_FEE = 2.9;
const FREE_FROM = 40;

export function OrderDialog({ open, onOpenChange, cart, packs, onClear, onSubmit }: Props) {
	const [paying, setPaying] = useState(false);
	const [name, setName] = useState('');
	const [slotId, setSlotId] = useState<string | null>(null);
	const [notes, setNotes] = useState('');
	const [method, setMethod] = useState<'recogida' | 'domicilio'>('recogida');

	const items = useMemo(
		() =>
			PRODUCTS.filter((p) => (cart[p.id] ?? 0) > 0).map((p) => ({
				key: `kg-${p.id}`,
				label: `${(cart[p.id] ?? 0).toLocaleString('es-ES', { maximumFractionDigits: 2 })} kg de ${p.name}`,
				amount: p.pricePerKg * (cart[p.id] ?? 0),
			})),
		[cart],
	);

	const packItems = useMemo(
		() =>
			PACKS.filter((pk) => (packs[pk.id] ?? 0) > 0).map((pk) => ({
				key: `pack-${pk.id}`,
				label: `${pk.name}${(packs[pk.id] ?? 0) > 1 ? ` ×${packs[pk.id]}` : ''}`,
				amount: pk.price * (packs[pk.id] ?? 0),
			})),
		[packs],
	);

	const subtotal = [...items, ...packItems].reduce((sum, i) => sum + i.amount, 0);
	const shipping =
		subtotal >= FREE_FROM || method === 'recogida' || subtotal === 0 ? 0 : DELIVERY_FEE;
	const missing = Math.max(FREE_FROM - subtotal, 0);
	const slots = useMemo(() => availableSlots(method), [method, open]);

	function buildMessage() {
		const rows = [
			...items.map((i) => `• ${i.label} — ${euro(i.amount)}`),
			...packItems.map((i) => `• ${i.label} — ${euro(i.amount)}`),
		];
		const parts: string[] = [`¡Hola ${SITE.name}! Quiero hacer un pedido:`];
		if (rows.length) parts.push(rows.join('\n'));
		const total = subtotal + shipping;
		if (total > 0) parts.push(`Total aprox.: ${euro(total)}`);
		parts.push(`Entrega: ${method === 'recogida' ? 'recogida en tienda' : 'a domicilio'}`);
		if (name.trim()) parts.push(`Nombre: ${name.trim()}`);
		const slot = slots.find((s) => s.id === slotId);
		if (slot) parts.push(`Franja: ${slot.label}`);
		if (notes.trim()) parts.push(`Notas: ${notes.trim()}`);
		return parts.join('\n');
	}

	function send() {
		onSubmit?.();
		window.open(whatsappUrl(buildMessage()), '_blank', 'noopener,noreferrer');
	}

	async function payWithCard() {
		setPaying(true);
		try {
			const created = await api.api.orders.$post({
				json: {
					items: [...items, ...packItems].map((i) => ({
						label: i.label,
						amount: i.amount,
					})),
					subtotal,
					shipping,
					total: subtotal + shipping,
					name: name.trim() || undefined,
					delivery: method,
					time: slots.find((s) => s.id === slotId)?.label,
					notes: notes.trim() || undefined,
				},
			});

			if (!created.ok) {
				const body: unknown = await created.json().catch(() => null);
				throw new Error(
					body && typeof body === 'object' && 'error' in body
						? String((body as { error: unknown }).error)
						: 'No se pudo crear el pedido.',
				);
			}

			const order = await created.json();

			const checkout = await api.api.orders[':id'].checkout.$post({
				param: { id: order.id },
				json: { origin: window.location.origin },
			});

			if (!checkout.ok) {
				const body: unknown = await checkout.json().catch(() => null);
				throw new Error(
					body && typeof body === 'object' && 'error' in body
						? String((body as { error: unknown }).error)
						: 'No se pudo iniciar el pago.',
				);
			}

			const { url } = await checkout.json();
			onSubmit?.();
			window.location.href = url;
		} catch (err) {
			toast.error(
				err instanceof Error
					? err.message
					: 'No se pudo iniciar el pago. Inténtalo de nuevo o pide por WhatsApp.',
			);
		} finally {
			setPaying(false);
		}
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
				<DialogHeader>
					<DialogTitle className="font-serif text-2xl">Revisa tu pedido</DialogTitle>
					<DialogDescription>
						Lo confirmamos por WhatsApp con el peso final y el precio exacto.
					</DialogDescription>
				</DialogHeader>

				{subtotal === 0 ? (
					<p className="text-muted-foreground py-6 text-center text-sm">
						Aún no has añadido nada al pedido.
					</p>
				) : (
					<div className="space-y-4">
						<div className="bg-muted/40 divide-y rounded-lg border">
							{items.concat(packItems).map((line) => (
								<div
									key={line.key}
									className="flex items-center justify-between gap-3 px-4 py-3 text-sm"
								>
									<span className="min-w-0 font-medium">{line.label}</span>
									<span className="shrink-0 font-semibold">{euro(line.amount)}</span>
								</div>
							))}
						</div>

						{method === 'domicilio' && missing > 0 && (
							<div className="border-accent-foreground/30 bg-accent/30 rounded-lg border border-dashed p-3 text-sm">
								<p className="inline-flex items-center gap-2 font-medium">
									<Truck className="size-4" />
									Te faltan {euro(missing)} para el envío gratis
								</p>
							</div>
						)}

						<div className="space-y-3 rounded-lg border p-4">
							<div className="grid grid-cols-2 gap-2">
								<Button
									type="button"
									variant={method === 'recogida' ? 'default' : 'outline'}
									onClick={() => setMethod('recogida')}
								>
									Recoger en tienda
								</Button>
								<Button
									type="button"
									variant={method === 'domicilio' ? 'default' : 'outline'}
									onClick={() => setMethod('domicilio')}
								>
									A domicilio
								</Button>
							</div>
							<div className="space-y-1.5">
								<Label htmlFor="order-name">Tu nombre</Label>
								<Input
									id="order-name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="Para saber quién eres"
								/>
							</div>
							<div className="space-y-1.5">
								<Label>¿Cuándo lo quieres?</Label>
								<div className="flex flex-wrap gap-2">
									{slots.map((s) => (
										<Button
											key={s.id}
											type="button"
											size="sm"
											variant={slotId === s.id ? 'default' : 'outline'}
											onClick={() => setSlotId(s.id)}
										>
											{s.label}
										</Button>
									))}
								</div>
							</div>
							<div className="space-y-1.5">
								<Label htmlFor="order-notes">Notas</Label>
								<Textarea
									id="order-notes"
									value={notes}
									onChange={(e) => setNotes(e.target.value)}
									placeholder="Grosor de los filetes, si lo troceamos…"
									rows={2}
								/>
							</div>
						</div>

						<div className="space-y-1 text-sm">
							<div className="flex justify-between">
								<span className="text-muted-foreground">Subtotal</span>
								<span>{euro(subtotal)}</span>
							</div>
							<div className="flex justify-between">
								<span className="text-muted-foreground">Envío</span>
								<span>{shipping === 0 ? 'Gratis' : euro(shipping)}</span>
							</div>
							<div className="flex justify-between border-t pt-2 text-base font-bold">
								<span>Total</span>
								<span>{euro(subtotal + shipping)}</span>
							</div>
						</div>
					</div>
				)}

				<DialogFooter className="gap-2 sm:gap-0">
					<Button variant="outline" onClick={onClear}>
						Vaciar pedido
					</Button>
					<div className="flex flex-col gap-2 sm:flex-row">
						<Button onClick={send} disabled={subtotal === 0} variant="outline">
							<MessageCircle className="size-4" /> WhatsApp
						</Button>
						<Button onClick={payWithCard} disabled={subtotal === 0 || paying}>
							{paying ? (
								<Loader2 className="size-4 animate-spin" />
							) : (
								<CreditCard className="size-4" />
							)}
							Pagar con tarjeta
						</Button>
					</div>
				</DialogFooter>
				<p className="text-muted-foreground text-center text-xs">
					Pago seguro con Stripe · Sin cuenta ni registro · Recibo por email
				</p>
			</DialogContent>
		</Dialog>
	);
}
