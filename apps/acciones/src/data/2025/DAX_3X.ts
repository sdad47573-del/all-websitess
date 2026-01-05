import { DataType, TYPES } from "../utils";
import { NAMES } from "../names";
const DAX_3X_BUY_2024: DataType[] = [
  {
    date: "04/12/2024",
    type: TYPES.compra,
    id: "7fd88b72be664c74864f63e36904b131",
    name: NAMES.DAX_3X,
    amount: 10,
    price: 3511.6,
  },
  {
    date: "05/12/2024",
    type: TYPES.compra,
    name: NAMES.DAX_3X,
    id: "e95a159d0b174ed6a273ddf01a0cfe93",
    amount: 17,
    price: 6113.52,
  },
];
export const DAX_3X: DataType[] = [
  ...DAX_3X_BUY_2024,
  {
    date: "16/01/2025",
    type: TYPES.compra,
    name: NAMES.DAX_3X,
    id: "760e80d97ef34c03bb869a2688e85102",
    amount: 15,
    price: 5524.6,
  },
  {
    date: "31/01/2025",
    type: TYPES.compra,
    name: NAMES.DAX_3X,
    id: "3d8ee7c3f46b4f6f8449792d8784fbbf",
    amount: 10,
    price: 4264,
  },
  {
    date: "31/01/2025",
    type: TYPES.compra,
    name: NAMES.DAX_3X,
    id: "a47c6e7d726147ac8f9e08dcda7185c0",
    amount: 10,
    price: 4244.2,
  },
  {
    date: "03/02/2025",
    type: TYPES.compra,
    name: NAMES.DAX_3X,
    id: "870fab862db047e5893866e57686b5ab",
    amount: 10,
    price: 4051.2,
  },
  {
    date: "24/02/2025",
    type: TYPES.venta,
    name: NAMES.DAX_3X,
    id: "04240478ced34169b79a008c02d8fac7",
    amount: 72,
    price: 33229.88,
  },
];
