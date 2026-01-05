import { twMerge } from "tailwind-merge";
import { DataType, TYPES } from "../data/utils";

type DetailListprops = {
  items: DataType[];
};

export const DetailList = ({ items }: DetailListprops) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Most played songs this week
      </li>
      {items
        .sort((a, b) =>
          typeof a.unitPrice === "number" && typeof b.unitPrice === "number"
            ? a.unitPrice - b.unitPrice
            : 1
        )
        .sort((a, b) => (a.type === "Compra" ? -1 : 1))
        .map(({ id, amount, price, unitPrice, type }) => (
          <li
            key={id}
            className={twMerge(
              "list-row  text-success",
              type === TYPES.compra && "text-error"
            )}
          >
            <div>{amount}</div>
            <div>
              <div>{price}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {type}
              </div>
            </div>
            <div>precio unitario: {unitPrice}</div>
          </li>
        ))}
    </ul>
  );
};
