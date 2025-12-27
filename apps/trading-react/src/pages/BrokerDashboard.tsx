import { useAlpacaAccount, useAlpacaPositions } from '../hooks/useAlpaca';

export default function BrokerDashboard() {
	const { data: account, isLoading: loadingAccount } = useAlpacaAccount();
	const { data: positions, isLoading: loadingPositions } = useAlpacaPositions();

	if (loadingAccount || loadingPositions) {
		return <div>Cargando datos de Alpaca...</div>;
	}

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold">Resumen de Cuenta (Alpaca)</h1>

			<div className="grid-3 grid">
				<div className="card">
					<h2>Equity</h2>
					<div style={{ fontSize: 28, fontWeight: 700 }}>
						{parseFloat(account?.equity || '0').toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</div>
				</div>
				<div className="card">
					<h2>Efectivo</h2>
					<div style={{ fontSize: 28, fontWeight: 700 }}>
						{parseFloat(account?.cash || '0').toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</div>
				</div>
				<div className="card">
					<h2>PNL Diario</h2>
					<div
						className={parseFloat(account?.todays_pnl || '0') >= 0 ? 'positive' : 'negative'}
						style={{ fontSize: 28, fontWeight: 700 }}
					>
						{parseFloat(account?.todays_pnl || '0').toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</div>
				</div>
			</div>

			<div className="card">
				<h2>Posiciones Actuales</h2>
				<table className="mt-4 w-full">
					<thead>
						<tr className="text-left">
							<th>Símbolo</th>
							<th>Cant.</th>
							<th>Precio Promedio</th>
							<th>Precio Actual</th>
							<th>PNL Total</th>
						</tr>
					</thead>
					<tbody>
						{positions?.map((pos: any) => (
							<tr key={pos.symbol}>
								<td>{pos.symbol}</td>
								<td>{pos.qty}</td>
								<td>{parseFloat(pos.avg_entry_price).toFixed(2)}</td>
								<td>{parseFloat(pos.current_price).toFixed(2)}</td>
								<td className={parseFloat(pos.unrealized_pl) >= 0 ? 'positive' : 'negative'}>
									{parseFloat(pos.unrealized_pl).toFixed(2)}
								</td>
							</tr>
						))}
						{(!positions || positions.length === 0) && (
							<tr>
								<td colSpan={5} className="py-4 text-center">
									No hay posiciones abiertas
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
