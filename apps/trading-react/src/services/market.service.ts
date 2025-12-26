const symbols = ['AAPL', 'GOOG', 'MSFT', 'TSLA', 'AMZN', 'NVDA'];

export function listSymbols() {
  return symbols;
}

export async function getPrice(symbol: string) {
  const base = symbol.length * 10;
  const noise = Math.sin(Date.now() / 30000 + symbol.length) * 5;
  const price = Math.max(1, Math.round((base + 100 + noise) * 100) / 100);
  return { symbol, price };
}
