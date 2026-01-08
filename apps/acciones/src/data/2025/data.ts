import { NAMES } from '../names';
import { addGlobalUnitPrice, getTotalFromData } from '../utils';
import { AMAZON } from './AMAZON';
import { BRENT_X3 } from './BRENT_X3';
import { COSTCO } from './COSTCO';
import { DAX_3X } from './DAX_3X';
import { GOLD_3X_LEVERAGED } from './GOLD_3X_LEVERAGED';
import { intereses } from './intereses';
import { PEPSICO } from './PEPSICO';
import { RHEINMETALL } from './RHEINMETALL';
import { BRENT_X3_SHORT } from './BRENT_X3_SHORT';
import { GAS_3X } from './GAS_3X';
import { SILVER_3X } from './SILVER_3X';
import { USD_EUR_5X } from './USD_EUR_5X';

export const UNCOMPLETE_DATA_2025 = {
	[NAMES.AMAZON]: AMAZON,
	[NAMES.BRENT_X3]: BRENT_X3,
	[NAMES.BRENT_X3_SHORT]: BRENT_X3_SHORT,
	[NAMES.COSTCO]: COSTCO,
	[NAMES.DAX_3X]: DAX_3X,
	[NAMES.GAS_3X]: GAS_3X,
	[NAMES.GOLD_3X_LEVERAGED]: GOLD_3X_LEVERAGED,
	[NAMES.PEPSICO]: PEPSICO,
	[NAMES.RHEINMETALL]: RHEINMETALL,
	[NAMES.SILVER_3X]: SILVER_3X,
	[NAMES.USD_EUR_5X]: USD_EUR_5X,
	[NAMES.interestPayment]: intereses,
};

export const DATA_2025 = addGlobalUnitPrice(UNCOMPLETE_DATA_2025);

export const GLOBALS_2025 = getTotalFromData(DATA_2025);
