import { DataType, TYPES } from "../utils";
import { NAMES } from "../names";

export const GOLD_3X_LEVERAGED_BUY_2024: DataType[] = [
  {
    date: "04/11/2024",
    id: "a3a5161fadb6431f965577cfcee5a5e4",
    type: TYPES.compra,
    name: NAMES.GOLD_3X_LEVERAGED,
    amount: 50,
    price: 3270.75,
  },
  // 05 nov 2024
  {
    date: "05/11/2024",
    type: TYPES.compra,
    id: "0636e3a03520479dbdf70cdd2c958ff1",
    name: NAMES.GOLD_3X_LEVERAGED,
    amount: 50,
    price: 3290.0,
  },
  {
    date: "05/11/2024",
    id: "7f662cf4374649f7b5379dbec87cf8eb",
    type: TYPES.compra,
    name: NAMES.GOLD_3X_LEVERAGED,
    amount: 50,
    price: 3253.75,
  },

  {
    date: "06/11/2024",
    id: "17cf1be8360641148dce8ba4d82c11ee",
    type: TYPES.compra,
    name: NAMES.GOLD_3X_LEVERAGED,
    amount: 50,
    price: 3062.0,
  },

  {
    date: "11/11/2024",
    id: "0d66d7a8fc8d45fb8d6502b95329694b",
    type: TYPES.compra,
    name: NAMES.GOLD_3X_LEVERAGED,
    amount: 50,
    price: 3059.0,
  },

  {
    id: "30a9c4f936fe41629824299ff118fb3e",
    date: "15/11/2024",
    type: TYPES.compra,
    name: NAMES.GOLD_3X_LEVERAGED,
    amount: 50,
    price: 2755.5,
  },
];

export const GOLD_3X_LEVERAGED: DataType[] = [
  ...GOLD_3X_LEVERAGED_BUY_2024,
  {
    id: "b372735ca0ad46d799e6a33876e3f7f3",
    date: "16/01/2025",
    type: TYPES.venta,
    name: NAMES.GOLD_3X_LEVERAGED,
    amount: 50,
    price: 3264,
  },
  {
    id: "d6b56b621ac24947989d3574f93841e5",
    date: "16/01/2025",
    type: TYPES.venta,
    name: NAMES.GOLD_3X_LEVERAGED,
    amount: 50,
    price: 3295.25,
  },
  {
    id: "b8fb94ebc00944198ed8e59f2c46cf99",
    date: "30/01/2025",
    type: TYPES.venta,
    name: NAMES.GOLD_3X_LEVERAGED,
    amount: 200,
    price: 14104,
  },
];
