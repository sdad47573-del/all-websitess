import { DataType, TYPES } from "../utils";
import { NAMES } from "../names";
export const SP500: DataType[] = [
  {
    date: "29/06/2024",
    type: TYPES.compra,
    id: "02bd002db88842889d722023a4658365",
    name: NAMES.SP_500,
    amount: 0.008979,
    price: 8.9,
  },
  {
    date: "29/06/2024",
    type: TYPES.compra,
    name: NAMES.SP_500,
    amount: 1,
    price: 992.08,
    id: "57e41425b9834764935d00e85de54f91",
  },
  {
    date: "22/08/2024",
    type: TYPES.venta,
    id: "ad9edfb82b6940789d192479836b9ece",
    name: NAMES.SP_500,
    amount: 1,
    price: 991.54,
  },
  {
    id: "d8ff86577ad64d4caa655664bfbb321d",
    date: "22/08/2024",
    type: TYPES.venta,
    name: NAMES.SP_500,
    amount: 0.008979,
    price: 8.91,
  },
];
