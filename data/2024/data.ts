import { NAMES } from '../names';
import { addGlobalUnitPrice, getTotalFromData } from '../utils';
import { ALPHABET } from './ALPHABET';
import { AMAZON } from './AMAZON';
import { AMD } from './AMD';
import { APPLE } from './APPLE';
import { ASML } from './ASML';
import { BARRICK_GOLD_CORP } from './BARRICK_GOLD_CORP';
import { BRENT_X3 } from './BRENT_X3';
import { BROADCOM } from './BROADCOM';
import { CISCO } from './CISCO';
import { COCA_COLA } from './COCA_COLA';
import { COFFEE_X3 } from './COFFEE_X3';
import { COSTCO } from './COSTCO';
import { CROWDSTRIKE } from './CROWDSTRIKE';
import { PHYSICAL_GOLD } from './PHYSICAL_GOLD';
import { GOLD_3X_LEVERAGED } from './GOLD_3X_LEVERAGED';
import { GOLD_3X_SHORT } from './GOLD_3X_SHORT';
import { INTEL } from './INTEL';
// import { intereses } from "./intereses";
import { MASTERCARD } from './MASTERCARD';
import { MGM } from './MGM';
import { MICROSOFT } from './MICROSOFT';
import { MSCI_WORLD } from './MSCI_WORLD';
import { MUNICHRE } from './MUENCH';
import { NEWMONT } from './NEWMONT';
import { NVIDIA } from './nvidia';
import { PEPSICO } from './PEPSICO';
import { PROCTER } from './PROCTER';
import { SILVER } from './SILVER';
import { SP500 } from './SP_500';
import { TESLA } from './TESLA';
import { TSMC } from './TSMC';
import { UNILEVER } from './UNILEVER';
import { USD_EUR_5X } from './USD_EUR_5X';
import { BRENT } from './WISDOMTREE_BRENT';
import { SP_500_X3 } from './WISDOMTREE_SP500';
import { ETHEREUM } from './ETHEREUM';
import { BRENT_X3_SHORT } from './BRENT_X3_SHORT';

export const UNCOMPLETE_DATA_2024 = {
	[NAMES.ALPHABET]: ALPHABET,
	[NAMES.AMAZON]: AMAZON,
	[NAMES.AMD]: AMD,
	[NAMES.APPLE]: APPLE,
	[NAMES.ASML]: ASML,
	[NAMES.BARRICK_GOLD_CORP]: BARRICK_GOLD_CORP,
	[NAMES.BRENT]: BRENT,
	[NAMES.BRENT_X3]: BRENT_X3,
	[NAMES.BRENT_X3_SHORT]: BRENT_X3_SHORT,
	[NAMES.BROADCOM]: BROADCOM,
	[NAMES.CISCO]: CISCO,
	[NAMES.COCA_COLA]: COCA_COLA,
	[NAMES.COFFEE_X3]: COFFEE_X3,
	[NAMES.COSTCO]: COSTCO,
	[NAMES.CROWDSTRIKE]: CROWDSTRIKE,
	[NAMES.ETHEREUM]: ETHEREUM,
	[NAMES.GOLD_3X_LEVERAGED]: GOLD_3X_LEVERAGED,
	[NAMES.GOLD_3X_SHORT]: GOLD_3X_SHORT,
	[NAMES.INTEL]: INTEL,
	[NAMES.MASTERCARD]: MASTERCARD,
	[NAMES.MGM]: MGM,
	[NAMES.MICROSOFT]: MICROSOFT,
	[NAMES.MSCI_WORLD]: MSCI_WORLD,
	[NAMES.MUNICHRE]: MUNICHRE,
	[NAMES.NEWMONT]: NEWMONT,
	[NAMES.NVIDIA]: NVIDIA,
	[NAMES.PEPSICO]: PEPSICO,
	[NAMES.PHYSICAL_GOLD]: PHYSICAL_GOLD,
	[NAMES.PROCTER]: PROCTER,
	[NAMES.SILVER]: SILVER,
	[NAMES.SP_500]: SP500,
	[NAMES.SP_500_X3]: SP_500_X3,
	[NAMES.TESLA]: TESLA,
	[NAMES.TSMC]: TSMC,
	[NAMES.UNILEVER]: UNILEVER,
	[NAMES.USD_EUR_5X]: USD_EUR_5X,
	// [NAMES.interestPayment]: intereses,
};

export const DATA_2024 = addGlobalUnitPrice(UNCOMPLETE_DATA_2024);

export const GLOBALS_2024 = getTotalFromData(DATA_2024);
