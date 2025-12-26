import { atom } from 'nanostores';

export type Order = {
  id: string;
  symbol: string;
  side: 'BUY' | 'SELL';
  qty: number;
  price: number;
  timestamp: number;
};

export type Position = {
  symbol: string;
  qty: number;
  avgPrice: number;
  lastPrice: number;
  value: number;
  pnl: number;
};

export const orders = atom<Order[]>([]);
export const positions = atom<Record<string, Position>>({});

export function submitOrder(order: Order) {
  orders.set([order, ...orders.get()]);
  const p = positions.get()[order.symbol];
  const sign = order.side === 'BUY' ? 1 : -1;
  const newQty = (p?.qty ?? 0) + sign * order.qty;
  let newAvg = p?.avgPrice ?? 0;
  if (newQty !== 0) {
    const totalValue = (p?.qty ?? 0) * (p?.avgPrice ?? 0) + sign * order.qty * order.price;
    newAvg = totalValue / newQty;
  } else {
    newAvg = 0;
  }
  const next: Position = {
    symbol: order.symbol,
    qty: newQty,
    avgPrice: newAvg,
    lastPrice: p?.lastPrice ?? order.price,
    value: newQty * (p?.lastPrice ?? order.price),
    pnl: newQty * ((p?.lastPrice ?? order.price) - newAvg)
  };
  const map = { ...positions.get(), [order.symbol]: next };
  positions.set(map);
}

export function updateLastPrice(symbol: string, price: number) {
  const p = positions.get()[symbol];
  if (!p) return;
  const next: Position = {
    ...p,
    lastPrice: price,
    value: p.qty * price,
    pnl: p.qty * (price - p.avgPrice)
  };
  positions.set({ ...positions.get(), [symbol]: next });
}
