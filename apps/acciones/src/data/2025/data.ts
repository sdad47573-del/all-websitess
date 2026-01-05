import { NAMES } from "../names";
import { addGlobalUnitPrice, getTotalFromData } from "../utils";
import { AMAZON } from "./AMAZON";
import { BRENT_X3 } from "./BRENT_X3";
import { COSTCO } from "./COSTCO";
import { DAX_3X } from "./DAX_3X";
import { GOLD_3X_LEVERAGED } from "./GOLD_3X_LEVERAGED";
import { intereses } from "./intereses";
import { PEPSICO } from "./PEPSICO";
import { RHEINMETALL } from "./RHEINMETALL";
import { BRENT_X3_SHORT } from "./BRENT_X3_SHORT";

export const UNCOMPLETE_DATA_2025 = {
  [NAMES.AMAZON]: AMAZON,
  [NAMES.COSTCO]: COSTCO,
  [NAMES.PEPSICO]: PEPSICO,
  [NAMES.RHEINMETALL]: RHEINMETALL,
  [NAMES.GOLD_3X_LEVERAGED]: GOLD_3X_LEVERAGED,
  [NAMES.DAX_3X]: DAX_3X,
  [NAMES.BRENT_X3_SHORT]: BRENT_X3_SHORT,
  [NAMES.BRENT_X3]: BRENT_X3,
  [NAMES.interestPayment]: intereses,
};

export const DATA_2025 = addGlobalUnitPrice(UNCOMPLETE_DATA_2025);

export const GLOBALS_2025 = getTotalFromData(DATA_2025);
