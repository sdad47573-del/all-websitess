import { useState } from 'react';
import { useSubmitOrder } from '../hooks/useAlpaca';

export default function OrderForm() {
	const [symbol, setSymbol] = useState('');
	const [qty, setQty] = useState(1);
	const [side, setSide] = useState<'buy' | 'sell'>('buy');
	const [type, setType] = useState<'market' | 'limit'>('market');
	const [limitPrice, setLimitPrice] = useState<number | undefined>(undefined);

	const { mutate: submitOrder, isPending, error } = useSubmitOrder();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		submitOrder({
			symbol: symbol.toUpperCase(),
			qty,
			side,
			type,
			time_in_force: 'day',
			limit_price: limitPrice,
		});
	};

	return (
		<div className="card mx-auto max-w-md">
			<h2 className="mb-4 text-xl font-bold">Nueva Orden (Alpaca)</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-sm font-medium">Símbolo</label>
					<input
						type="text"
						className="w-full rounded border p-2"
						value={symbol}
						onChange={(e) => setSymbol(e.target.value)}
						placeholder="Ej: AAPL"
						required
					/>
				</div>

				<div className="flex gap-4">
					<div className="flex-1">
						<label className="block text-sm font-medium">Cantidad</label>
						<input
							type="number"
							className="w-full rounded border p-2"
							value={qty}
							onChange={(e) => setQty(parseInt(e.target.value))}
							min={1}
							required
						/>
					</div>
					<div className="flex-1">
						<label className="block text-sm font-medium">Lado</label>
						<select
							className="w-full rounded border p-2"
							value={side}
							onChange={(e) => setSide(e.target.value as 'buy' | 'sell')}
						>
							<option value="buy">Comprar</option>
							<option value="sell">Vender</option>
						</select>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium">Tipo de Orden</label>
					<select
						className="w-full rounded border p-2"
						value={type}
						onChange={(e) => setType(e.target.value as 'market' | 'limit')}
					>
						<option value="market">Mercado</option>
						<option value="limit">Límite</option>
					</select>
				</div>

				{type === 'limit' && (
					<div>
						<label className="block text-sm font-medium">Precio Límite</label>
						<input
							type="number"
							className="w-full rounded border p-2"
							value={limitPrice || ''}
							onChange={(e) => setLimitPrice(parseFloat(e.target.value))}
							step="0.01"
							required
						/>
					</div>
				)}

				{error && <div className="text-sm text-red-500">Error: {(error as any).message}</div>}

				<button
					type="submit"
					className={`w-full rounded px-4 py-2 font-bold text-white ${
						side === 'buy' ? 'bg-green-600' : 'bg-red-600'
					}`}
					disabled={isPending}
				>
					{isPending ? 'Enviando...' : `${side === 'buy' ? 'Comprar' : 'Vender'} ${symbol}`}
				</button>
			</form>
		</div>
	);
}
