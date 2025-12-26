import { useStore } from '@nanostores/react';
import { positions } from '../stores/positions.store';

export default function Dashboard() {
  const map = useStore(positions);
  const list = Object.values(map);
  const totalValue = list.reduce((a, p) => a + p.value, 0);
  const totalPnl = list.reduce((a, p) => a + p.pnl, 0);
  return (
    <div className="grid grid-3">
      <div className="card">
        <h2>Valor</h2>
        <div style={{ fontSize: 28, fontWeight: 700 }}>{totalValue.toFixed(2)} €</div>
      </div>
      <div className="card">
        <h2>PNL</h2>
        <div className={totalPnl >= 0 ? 'positive' : 'negative'} style={{ fontSize: 28, fontWeight: 700 }}>
          {totalPnl.toFixed(2)} €
        </div>
      </div>
      <div className="card">
        <h2>Posiciones</h2>
        <div style={{ fontSize: 28, fontWeight: 700 }}>{list.length}</div>
      </div>
    </div>
  );
}
