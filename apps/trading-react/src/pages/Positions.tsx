import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { positions, updateLastPrice } from '../stores/positions.store';
import { useMarketPrice } from '../hooks/useMarketPrice';

function PositionRow({ symbol }: { symbol: string }) {
  const map = useStore(positions);
  const p = map[symbol];
  const { data } = useMarketPrice(symbol);
  useEffect(() => {
    if (data?.price) updateLastPrice(symbol, data.price);
  }, [symbol, data]);
  return (
    <tr>
      <td>{symbol}</td>
      <td>{p.qty}</td>
      <td>{p.avgPrice.toFixed(2)}</td>
      <td>{p.lastPrice.toFixed(2)}</td>
      <td>{p.value.toFixed(2)}</td>
      <td className={p.pnl >= 0 ? 'positive' : 'negative'}>{p.pnl.toFixed(2)}</td>
    </tr>
  );
}

export default function Positions() {
  const map = useStore(positions);
  const list = Object.keys(map);
  return (
    <div className="card">
      <h2>Posiciones</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Símbolo</th>
            <th>Cantidad</th>
            <th>Precio Medio</th>
            <th>Último</th>
            <th>Valor</th>
            <th>PNL</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 ? (
            <tr><td colSpan={6}>Sin posiciones</td></tr>
          ) : (
            list.map((s) => <PositionRow key={s} symbol={s} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
