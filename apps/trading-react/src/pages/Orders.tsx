import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { orders, submitOrder } from '../stores/positions.store';
import { listSymbols } from '../services/market.service';

export default function Orders() {
  const list = useStore(orders);
  const [symbol, setSymbol] = useState(listSymbols()[0]);
  const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(100);
  return (
    <div className="grid grid-2">
      <div className="card">
        <h2>Nueva orden</h2>
        <div className="row">
          <select className="input" value={symbol} onChange={(e) => setSymbol(e.target.value)}>
            {listSymbols().map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select className="input" value={side} onChange={(e) => setSide(e.target.value as 'BUY' | 'SELL')}>
            <option value="BUY">Compra</option>
            <option value="SELL">Venta</option>
          </select>
        </div>
        <div className="row">
          <input className="input" type="number" value={qty} onChange={(e) => setQty(Number(e.target.value))} placeholder="Cantidad" />
          <input className="input" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Precio" />
        </div>
        <div className="row">
          <button
            className="btn"
            onClick={() => submitOrder({ id: crypto.randomUUID(), symbol, side, qty, price, timestamp: Date.now() })}
          >
            Enviar
          </button>
        </div>
      </div>
      <div className="card">
        <h2>Órdenes</h2>
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
            {list.map((o) => (
              <tr key={o.id}>
                <td>{new Date(o.timestamp).toLocaleString()}</td>
                <td>{o.symbol}</td>
                <td>{o.side}</td>
                <td>{o.qty}</td>
                <td>{o.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
