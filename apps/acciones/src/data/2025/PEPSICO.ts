import { DataType, TYPES } from "../utils";
import { NAMES } from "../names";
export const PEPSICO_2024: DataType[] = [
  {
    date: "09/09/2024",
    id: "001ad588a08546b5b382e6050947eaa9",
    type: TYPES.compra,
    name: NAMES.PEPSICO,
    amount: 0.182436,
    price: 29.5,
  },
];
export const PEPSICO: DataType[] = [
  ...PEPSICO_2024,
  {
    date: "06/01/2025",
    id: "ed3eef1e8557475f8668ab315ca58bee",
    type: TYPES.dividendos,
    name: NAMES.PEPSICO,
    price: 0.2,
  },
  {
    date: "31/03/2025",
    type: TYPES.dividendos,
    name: NAMES.PEPSICO,
    id: "88cd76a62101406c8b54fee2bb72c84c",
    price: 0.19,
  },
];
