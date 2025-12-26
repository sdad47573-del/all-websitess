import { useStore } from '@nanostores/react';
import { orders } from '../stores/positions.store';

export default function Trades() {
  const list = useStore(orders);
  return (
    <div className="card">
      <h2>Trades</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Símbolo</th>
            <th>Side</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 ? (
            <tr><td colSpan={5}>Sin trades</td></tr>
          ) : (
            list.map((o) => (
              <tr key={o.id}>
                <td>{new Date(o.timestamp).toLocaleString()}</td>
                <td>{o.symbol}</td>
                <td>{o.side}</td>
                <td>{o.qty}</td>
                <td>{o.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
