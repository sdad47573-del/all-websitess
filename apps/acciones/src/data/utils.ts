export type DataType = {
  id: string;
  date: string;
  type: string;
  name: string;
  amount?: number;
  unitPrice?: number;
  price: number;
};

export const TYPES = {
  pagoIntereses: "Pago de intereses",
  venta: "Venta",
  reembolso: "Reembolso",
  dividendos: "Dividendos",
  compra: "Compra",
  otros: "Otros",
};

export const roundNumber = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

export function calcularTotales(transacciones: DataType[]) {
  const totales = transacciones.reduce(
    (acc, curr) => {
      const amount = curr.amount ?? 0;
      const price = curr.price ?? 0;
      const esCompra = curr.type === TYPES.compra; // o TYPES.compra si está definido
      if (esCompra) {
        acc.buy += price;
        acc.amount -= amount;
        acc.price -= price;
      } else {
        acc.sell += price;
        acc.amount += amount;
        acc.price += price;
      }

      return acc;
    },
    { amount: 0, price: 0, buy: 0, sell: 0 }
  );

  const promedioUnitario =
    totales.amount > 0 ? totales.price / totales.amount : 0;

  return {
    totalAmount: roundNumber(totales.amount),
    totalBuy: roundNumber(totales.buy),
    totalSell: roundNumber(totales.sell),
    totalPrice: roundNumber(totales.price),
    precioPromedioPorUnidad: promedioUnitario,
  };
}

//////////////////

function addUnitPrice(data: DataType[]) {
  return data.map((item) => ({
    ...item,
    unitPrice: item.amount ? item.price / item.amount : undefined,
  }));
}

export function addGlobalUnitPrice(objeto: { [x: string]: DataType[] }) {
  const resultado = {};

  for (const clave in objeto) {
    resultado[clave] = addUnitPrice(objeto[clave]);
  }

  return resultado;
}

/////////////////////

export const getTotalFromData = (data: any) => {
  const flatArray = Object.entries(data).flatMap(([key, records]: any) =>
    records.map((record: any) => ({
      ...record,
      company: key,
    }))
  );

  const total = flatArray.reduce((acc, item) => {
    const value = item.price || 0;
    return item.type === TYPES.compra ? acc - value : acc + value;
  }, 0);
  return roundNumber(total);
};
