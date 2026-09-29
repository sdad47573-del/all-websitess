import { DataType, TYPES } from "../utils";
import { NAMES } from "../names";
export const SP_500_X3: DataType[] = [
  {
    date: "08/11/2024",
    id: "9cdb3e1716b14f6fa2377bbe4bad3b49",
    type: TYPES.compra,
    name: NAMES.SP_500_X3,
    amount: 30,
    price: 3325.3,
  },
  {
    date: "11/11/2024",
    type: TYPES.compra,
    name: NAMES.SP_500_X3,
    amount: 40,
    id: "615f15bbb061406abbe3e0fdf4068a58",
    price: 4575.0,
  },
  {
    date: "12/11/2024",
    type: TYPES.venta,
    name: NAMES.SP_500_X3,
    id: "5c33317274e34912b6c8a4f9e59988bb",
    amount: 30,
    price: 3410.0,
  },
  {
    date: "26/11/2024",
    id: "4848d2ea2c7a40428647da91a0bc55f1",
    type: TYPES.venta,
    name: NAMES.SP_500_X3,
    amount: 40,
    price: 4616.6,
  },
];
