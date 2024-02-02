export const WhaleFinanceAddress = "0x8aa499C0f0A85b4960Ebe6Bfc993338a9e88cDdb";
export const WhaleTokenAddress = "0x3546914261a14D476671B02498420aDBbE7cA69A";

export const WEthAddress = "0x9C080703256BDF9Ea1b485aE72f13E31f74C558b";

export const SwapRouter = "0x0fee4c356DEeF6567E95b6394420583CA1D1fEEa";


const WBTC = "0x76D11E63a7b2Ec1C7A4D4Fc88f1D74FC8b98d651";
const WDOT = "0xc77e76e8400A9436A7ce4ebCFA18dF76Ae60ED01";
const USDT = "0xAF4Bd9d6E474afa59655EFe171e02e4670718f09";
const USDC = "0x536527976E98E253B424a3655E695D144E343341";
const AREON = "0x69801C169647Ad125707Dd40096D4EDC20Bb521a";




export const scanUrl = "https://tanssi-evmexplorer.netlify.app/?rpcUrl=https%3A%2F%2Ffraa-dancebox-3064-rpc.a.dancebox.tanssi.network";

export const allowedTokens = {
    "WHALE": WhaleTokenAddress,
    "WBTC": WBTC,
    "WDOT": WDOT,
    "USDT": USDT,
    "USDC": USDC,
    "AREON": AREON
} as {
    [key: string]: string;
}

export const allowedtokensPrices = {
    "WHALE": 1.00,
    "WBTC": 42000,
    "WDOT": 6.78,
    "USDT": 1.00,
    "USDC": 1.00,
    "AREON": 0.094
} as {
    [key: string]: number;
}