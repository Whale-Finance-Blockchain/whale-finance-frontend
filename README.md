# Whale Finance - Areon Code Area 2024

## Frontend Repo

## Basic Information
- *Project Name:* whale.finance
- *Project Team Members:* Luiz and Bryan
- *Project Establishment Date:* 2024, January

_

## Overall Project Introduction
- *Project Background:*

   > "The idea came from our own experience with the fund industry, both of us on the team have already/still interned at investment funds, in the normal asset analysis part. Crypto is not yet so widespread in Brazil, despite the growing expansion, and we saw the potential to decentralize the entire investment process in funds using smart contract technologies, like the ERC 6551. Thus arose whale.finance."

- *Project Introduction:*

  - Whale Finance uses ARC 6551 to allow managers to hold assets from investors priorizing *security*. In this way, we can basically make a descentralized asset management using EVM. The platform is designed for the two publics: The investors, who will be able to invest their tokens in really great funds around the work in a safe way, and the managers, who will be able to manage and hold investor tokens and can have a profit to themselves.

- *Project Explanation:*

  - First of all, it it's necessary, there is an attachment section below in this ReadMe file to explane more about financial market, specifically hedge funds. The essence of Whale Finance is basically safety first in transactions, highlighting its innovative approach to asset management.

  - *Decentralized Management of Tokenized Assets:* Whale Finance is a protocol for the decentralized management of a variety of tokenized assets in the future, including native crypto assets and tokenized Real World Assets (RWA).

  - *Investment Mechanisms and Security:* The platform uses NFTs representing investment funds in a unique way (using ERC 6551), SafeAccounts for asset management, and quotaTokens linked to the NFT. The fund managers, who (in the future) must be approved using a decentralized identity protocol like KILT, manage the assets in a limited way, providing security for investors. The fund strategies are publicly recorded on the blockchain, and the quotaTokens allow for internal voting on important decisions, like the fund’s closing date.

  - *Difficulty of Technology and Innovation:* The innovative way to perform swap priorizing safety is implemented using ERC 6551 (a very recent improvement protocol - May 2023).

  - *Flexibility and Use Cases:* Whale Finance offers flexibility in the investment flow, allowing investments at various stages and using oracles for continuous fund pricing. Besides investment funds that resemble traditional funds, the platform can also be used for managing DAO treasuries, where decisions are made through votes by quotaToken holders.

- *Why Areon?*

  - *High Transaction Throughput:* The capacity for up to 1000 transactions per second ensures efficient handling of high-volume activities, crucial for Asset Management Projects, like Whale Finance.

  - *Fast Transaction Confirmation Times:* With a short block time, the chain offers rapid transaction processing, beneficial for the timely execution of DeFi operations.

  - *Full Ethereum Virtual Machine Compatibility:* Its compatibility with the EVM allows easy integration or migration of Solidity-based smart contracts, tapping into Ethereum's established tools and community resources. Whale Finance is built in EVM and it's crucial to have opportunity to add the last updates of Ethereum in the project.

- *Project Repos:*

[Smart Contracts Repo](https://github.com/Whale-Finance-Blockchain/whale-finance)

[Website Repo](https://github.com/Whale-Finance-Blockchain/website)

- *Project Demo and Presentation:*

[Demo Link](https://whale-finance.netlify.app/)

[App Link](https://whale-finance-frontend.vercel.app/)

[Demo Video](https://youtu.be/DKN8tXYl858)

[Presentation Link](https://www.canva.com/design/DAF7ofuzmyE/aJQfqObLAS5EFFbdfTIpLA/edit?utm_content=DAF7ofuzmyE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

- *Technical Architecture:*

The main parameters to create a fund:

  - *Name:* The official title of the fund, used for recognition and branding.
  - *Ticker:* A unique series of letters representing the fund in the stock market, used for quick identification.
  - *Account:* The designated account for managing the fund's financial transactions and maintaining records.
  - *Tokens:* Digital assets within the fund that can represent shares or other assets, facilitating flexible transactions.
  - *Administration Fee:* A charge levied to cover the fund's operational costs, maintaining its viability.
  - *Performance Fee:* A fee charged based on the fund's performance, serving as an incentive for fund managers.
  - *Open Investment:* The time frame during which investments can be made into the fund, helping to manage the inflow of capital.
  - *Close Investment:* The period indicating when the fund stops accepting new investments, assisting in portfolio stability.
  - *Maturation Time:* The projected time frame for the fund to reach its investment goals, guiding investors on expected returns.

This ERC allows an nft owner to have control over an account, but with customizable features, such as limitations to the possible transactions made. The WhaleFinance contract implements the ERC721 tokens (NFT) and creates the controllable addresses, which we call Safe Accounts. Also, every fund has a quota (or share), which is an ERC20 token, also deployed when the NFT is created. With these features, the investors are able to invest with a stablecoin (say ZUSD) and get 1:1 quotas in exchange.

When the fund is open to trades, the manager can interact with UniSwap to make profits, using the assets available in the Safe Account. After maturation time, the investor can redeem their yields, with profits or loss.

![Project Photo](./src/assets/fund_creation.png)
![Project Photo](./src/assets/investment.png)
![Project Photo](./src/assets/swap.png)

- *Project Logo:* 

![Project Photo](./src/assets/whale_logo_green.png)

_

## Items Completed For the Hackathon

  - *Blockchain Side:*
      - [ERC6551Registry](https://github.com/Whale-Finance-Blockchain/whale-finance/tree/master/whale_finance/src/ERC6551Registry.sol): It's the contract that creates the SafeAccounts of the funds, registering the funds (NFTs) bounded to the accounts.
      - [MockERC20](https://github.com/Whale-Finance-Blockchain/whale-finance/tree/master/whale_finance/src/MockERC20.sol): It's an ERC20 implementation to be used by Whale Finance as currency.
      - [QuotaBeacon](https://github.com/Whale-Finance-Blockchain/whale-finance/tree/master/whale_finance/src/QuotaBeacon.sol): It's the contract that creates the QuotaTokens using the QuotaToken interface.
      - [QuotaToken](https://github.com/Whale-Finance-Blockchain/whale-finance/tree/master/whale_finance/src/QuotaToken.sol): It's the address that keeps the implementation of the QuotaToken logic.
      - [SafeAccount](https://github.com/Whale-Finance-Blockchain/whale-finance/tree/master/whale_finance/src/SafeAccount.sol): It's the account that holds all assets of the fund. It protects the assets and can be controlled (indirectly) by the fund manager.
      - [WhaleFinance](https://github.com/Whale-Finance-Blockchain/whale-finance/tree/master/whale_finance/src/WhaleFinance.sol): It's the main contract, which implements the creation of the funds and uses all other contracts. It's a NFT contract, in a way that each NFT represents a fund, creates a QuotaToken and a SafeAccount using the ERC6551Registry.

  - *Client Side:*
    - *Web Investor Features:*
      - [Funds List Page](./src/pages/FundsList/FundsList.tsx): Can choose a fund in a list of funds to make an investment (/fundslist route)
      - [Invest Page](./src/pages/FundId/FundId.tsx): Can see stats about the fund chosen, like a performance chart, and then invest in the favorite ones (/funds/id route)
    - *Web Manager Features:*
      - [Create Fund Page](./src/pages/CreateFund/CreateFund.tsx): Can create a fund based on the parameters listed below in the Fund section (/create-fund route)
      - [Funds List Page](./src/pages/Manager/Manager.tsx): Can choose a fund in a list of funds to see stats about the managed fund (/manager route)
      - [Dashboard Page](./src/pages/DashboardId/DashboardId.tsx): Can see stats about the fund chosen and then swap tokens to operate the fund (/manager/id route)

### Tokens Addresses in Areon Scan

  - Fork Uniwap:
     - UniswapV2Factory deployed at address: 0x0944830916CECb637613c9Fd0e8F6C21ccFFB4eF ([Link to AreonScan](https://areonscan.com/contracts/0x0944830916CECb637613c9Fd0e8F6C21ccFFB4eF))
     - Deployed WETH at address: 0x9C080703256BDF9Ea1b485aE72f13E31f74C558b ([Link to AreonScan](https://areonscan.com/contracts/0x9C080703256BDF9Ea1b485aE72f13E31f74C558b))
     - Deployed UniswapV2Router02 at address: 0x0fee4c356DEeF6567E95b6394420583CA1D1fEEa ([Link to AreonScan](0x0fee4c356DEeF6567E95b6394420583CA1D1fEEa))
  - Whale Implementation:
     - quotaTokenImplementation address: 0x9d8F28B52504112A8C89df9095ca3BF346286787 ([Link to AreonScan](https://areonscan.com/contracts/0x9d8F28B52504112A8C89df9095ca3BF346286787))
     - registry address: 0x5F1933923909C6a65a6769fA0d6F157857e33c48 ([Link to AreonScan](https://areonscan.com/contracts/0x5F1933923909C6a65a6769fA0d6F157857e33c48))
     - whaleToken address: 0x3546914261a14D476671B02498420aDBbE7cA69A ([Link to AreonScan](https://areonscan.com/contracts/0x3546914261a14D476671B02498420aDBbE7cA69A))
     - safeAccount address: 0xA261F923654Eb93Ab6c35D285d58c8a01D42F792 ([Link to AreonScan](https://areonscan.com/contracts/0xA261F923654Eb93Ab6c35D285d58c8a01D42F792))
     - beacon address: 0x53a3A188943C94442D76396ba682b09a1e66517F ([Link to AreonScan](https://areonscan.com/contracts/0x53a3A188943C94442D76396ba682b09a1e66517F))
     - whale Finance address: 0x8aa499C0f0A85b4960Ebe6Bfc993338a9e88cDdb ([Link to AreonScan](https://areonscan.com/contracts/0x8aa499C0f0A85b4960Ebe6Bfc993338a9e88cDdb))
  - Token Addresses:
    -  whaleToken address: 0x3546914261a14D476671B02498420aDBbE7cA69A ([Link to AreonScan](https://areonscan.com/contracts/0x3546914261a14D476671B02498420aDBbE7cA69A))
    -  WBTC address: 0x76D11E63a7b2Ec1C7A4D4Fc88f1D74FC8b98d651 ([Link to AreonScan](https://areonscan.com/contracts/0x76D11E63a7b2Ec1C7A4D4Fc88f1D74FC8b98d651))
    -  WDOT address: 0xc77e76e8400A9436A7ce4ebCFA18dF76Ae60ED01 ([Link to AreonScan](https://areonscan.com/contracts/0xc77e76e8400A9436A7ce4ebCFA18dF76Ae60ED01))
    -  USDT address: 0xAF4Bd9d6E474afa59655EFe171e02e4670718f09 ([Link to AreonScan](https://areonscan.com/contracts/0xAF4Bd9d6E474afa59655EFe171e02e4670718f09))
    -  USDC address: 0x536527976E98E253B424a3655E695D144E343341 ([Link to AreonScan](https://areonscan.com/contracts/0x536527976E98E253B424a3655E695D144E343341))
    -  Areon address: 0x69801C169647Ad125707Dd40096D4EDC20Bb521a ([Link to AreonScan](https://areonscan.com/contracts/0x69801C169647Ad125707Dd40096D4EDC20Bb521a))

## Attachment Information

### Traditional

Before that, to give some context, the stakeholders of the financial market explained:

  - Distributor: Markets and sells financial products to investors.
  
  - Exchange: Platform for buying and selling financial assets.
  
  - Custodian: Safeguards and manages financial assets.
  
  - Fund: Pooled investment vehicle managed professionally.
  
  These bullet points below describes the flow over a fund invesment in the traditional financial market, with 6 main stakeholders:
  
  - *Investor & Fund:* To have a share in the fund, the investor must pay a management fee to the manager, and a performance fee equivalent to a percentage above the market benchmark. In this way, the manager aligns with the investment by earning these fees for managing the fund.
  
  - *Distributor & Fund:* The distributor acts as a bridge between the fund and potential investors, marketing and selling the fund's financial products. Through collaborations and agreements, distributors help expand the fund's reach and increase its assets under management, enhancing the fund's visibility and accessibility.
  
  - *Exchange & Fund:* Exchanges serve as vital platforms where funds can actively participate in trading activities, acquiring or disposing of assets as per their investment strategies. They facilitate a transparent environment where funds can execute trades based on real-time market conditions, thus helping in the price discovery process and achieving investment objectives.
  
  - *Custodian & Fund:* Custodians play a pivotal role in safeguarding the assets of the fund, ensuring that they are held securely and are not susceptible to theft or loss. Apart from asset safekeeping, they also assist in transaction settlements and administrative services, thus ensuring smooth operational flow and compliance with regulatory requirements.

![Project Photo](./src/assets/traditional_am_new.png)

_

### Decentralized

Benefits to decentralize the asset management industry and differences from the traditional flow:

  - *Innovation:* There are no solutions (or few) that implements a full decentralized flow in the asset management industry (only crypto funds represents more than 1 billion dollars, but the solution can be extended to other markets), primordialy because the recent creation of ERC 6551 that can allow better the action of hold assets
  
  - *Autonomy and Control:* Investors and managers have more control over their assets and investments, without the influence or interference of centralized entities (that is one of the strongest principles to buy crypto today).
  
  - *Cost-Effectiveness:* By eliminating intermediaries (like the custodian), the platform can potentially reduce the costs associated with asset management, including fees that would normally be paid to distributors and custodians.
  
  - *Transparency:* Utilizing a decentralized platform ensures that all transactions and fund performances are recorded on a transparent and immutable ledger, which can increase trust among investors.
  
  - *Security:* Our main idead behind whale.finance, the use of ERC 6551 secures the way that manager can hold and manage assets from investors.
  
  - *Profit Opportunities for Managers:* The platform creates opportunities for managers to profit by offering their expertise to a wider audience, the performance is transparent and the mechanism to hold assets is secure.
  
  - *Regulatory Compliance:* The use of smart contracts can automate compliance with regulatory requirements.
  
  - *Integration and Potential:* The whale.finance is integrated with *Unis Swap*, and can be integrated in the future with other products, like Aave. Besides that, there is a lot of potential to explore 

![Project Photo](./src/assets/decentralized_am_new.png)

_

## Team Member Information
*Bryan Borck*

 - Frontend developer and designer in Whale Finance
 - Computer Engineering student at ITA (Brazil), PBA student cohort HK 2024, 2 years experience in Equity Research and involved (as participant and winner) in many web3 hackathons
 - [Github](https://github.com/BryanBorck)
 - Email: bryanborck@gmail.com

*Luiz Vasconcelos*

 - Blockchain developer in Whale Finance
 - Computer Engineering student at ITA (Brazil), PBA student cohort HK 2024, 1 year experience in blockchain development in a leadership area of innovation (brazilian startup), 2 years experience in Equity Research and involved (as participant and winner) in many web3 hackathons
 - [Github](https://github.com/luiz-lvj)

