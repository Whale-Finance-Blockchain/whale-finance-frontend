import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
// import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { ReloadIcon } from "@radix-ui/react-icons"
import FundHeroSection from "@/components/FundHeroSection";
import { WhaleFinanceAddress, WhaleTokenAddress, allowedTokens, allowedtokensPrices } from '../utils/addresses';
import { QuotaTokenAbi } from '../contracts/QuotaToken';
import { WhaleFinanceAbi } from '../contracts/WhaleFinance';
import { ethers } from "ethers"
import { MultiChainTokenAbi } from "@/contracts/MultichainToken"
import { useTheme } from "@/components/theme-provider"
import { getChartColors } from "@/utils/chartUtils"
import { ChartTestComponent } from "@/components/ChartTest"
import { Coins, TrendingUp, Wallet } from "lucide-react"
import { FundData } from "@/utils/props"
import { mockChart, hedgeFunds } from "@/utils/mock" 

export default function FundInvestor({ account, provider, signer }: { account: string | null; provider: any; signer: any;}) {

    const params = useParams();
    const fundId = params.id || '';

    // const navigator = useNavigate();

    //@ts-ignore
    const [fund, setFund] = useState<FundData | null>(null);
    const [invest, setInvest] = useState(0);
    const [whaleTokenBalance, setWhaleTokenBalance] = useState(0);
    const [fundName, setFundName] = useState("Fund");
    const [fundManager, setFundManager] = useState("0x0");

    //@ts-ignore
    const [fundAddress, setFundAddress] = useState("0x0");
    const [tokensHolding, setTokensHolding] = useState({} as any);
    //@ts-ignore
    const [fundQuota, setFundQuota] = useState("0x0");
    const [quotaBalance, setQuotaBalance] = useState(0);
    const [totalQuota, setTotalQuota] = useState(0);

    const [investMsg, setInvestMsg] = useState("Invest");

    const [loading, setLoading] = useState<boolean>(false);

    async function getWhaleTokenBalance(){
        try{
            if(account == "" || !ethers.utils.isAddress(account as string)){
                return;
            }
            const whaleTokenContract = new ethers.Contract(WhaleTokenAddress,MultiChainTokenAbi, signer);
            const balanceToken = await whaleTokenContract.functions.balanceOf(account);
            
            setWhaleTokenBalance(Number(ethers.utils.formatEther(balanceToken[0]._hex)));
            

        } catch(err){
            toast({
                title: "Error getting Whale Balance",
                description: "Connect to Metamask"
            })
            console.log(err)
        } 
    }

    async function getTokensHolding(accountAddress: string){
        try{
            if(account == "" || !ethers.utils.isAddress(account as string)){
                return;
            }

            const allocations: any = {}
            const whaleTokenContract = new ethers.Contract(WhaleTokenAddress, QuotaTokenAbi, signer);
            const whaleTokenBalance = await whaleTokenContract.functions.balanceOf(accountAddress);

            allocations["WHALE"] = Number(ethers.utils.formatEther(whaleTokenBalance[0]._hex));

            await Promise.all(
                Object.keys(allowedTokens).map(async (token: string) => {
                    const tokenContract = new ethers.Contract(allowedTokens[token], MultiChainTokenAbi, signer);
                    const balance = await tokenContract.functions.balanceOf(accountAddress);
                    allocations[token] = Number(ethers.utils.formatEther(balance[0]._hex));
                })
            );

            console.log(allocations);

            setTokensHolding({...allocations});
            console.log(tokensHolding)
            

        } catch(err){
            
            console.log(err)
        }
    }

    async function getFundManager(){
        try{
            if(account == "" || !ethers.utils.isAddress(account as string)){
                return;
            }
            const whaleFinanceContract = new ethers.Contract(WhaleFinanceAddress,WhaleFinanceAbi, signer);
            const managerAccount = await whaleFinanceContract.functions.ownerOf(fundId);
            
            setFundManager(managerAccount[0]);
            

        } catch(err){
            toast({
                title: "Error getting Whale Balance",
                description: "Connect to Metamask"
            })
            console.log(err)
        }
    }

    async function getFundAddress(){
        try{
            if(account == "" || !ethers.utils.isAddress(account as string)){
                return;
            }
            const whaleFinanceContract = new ethers.Contract(WhaleFinanceAddress,WhaleFinanceAbi, signer);
            
            const fundAccount = await whaleFinanceContract.functions.fundsAddresses(fundId);

            console.log(fundAccount);
            
            setFundAddress(fundAccount[0]);

            
            await getTokensHolding(fundAccount[0]);

        } catch(err){
            toast({
                title: "Error getting Fund Addrses",
                description: "Connect to Metamask"
            })
            console.log(err)
        }
    }

    async function getQuotaBalance(quotaAddress: string){
        try{
            if(account == "" || !ethers.utils.isAddress(account as string)){
                return;
            }
            const quotaTokenContract = new ethers.Contract(quotaAddress,QuotaTokenAbi, signer);
            
            const quotaBalance = await quotaTokenContract.functions.balanceOf(account);
            const totalSupply = await quotaTokenContract.functions.totalSupply();

            console.log("balance", quotaBalance)

            console.log(quotaBalance);
            
            setQuotaBalance(Number(ethers.utils.formatEther(quotaBalance[0]._hex)));
            setTotalQuota(Number(ethers.utils.formatEther(totalSupply[0]._hex)));

        } catch(err){
            toast({
                title: "Error getting Fund Addrses",
                description: "Connect to Metamask"
            })
            console.log(err)
        }
    }

    async function getFundQuota(){
        try{
            if(account == "" || !ethers.utils.isAddress(account as string)){
                return;
            }
            const whaleFinanceContract = new ethers.Contract(WhaleFinanceAddress,WhaleFinanceAbi, signer);
            
            const quotaAddress = await whaleFinanceContract.functions.quotasAddresses(fundId);
            
            setFundQuota(quotaAddress[0]);

            console.log("quota", quotaAddress[0]);
            

            
            await getQuotaBalance(quotaAddress[0]);

        } catch(err){
            toast({
                title: "Error getting Fund Addrses",
                description: "Connect to Metamask"
            })
            console.log(err)
        }
    }

    useEffect(() => {
        getFundAddress();
    },[signer])

    useEffect(() => {
        getFundQuota();
    },[signer])

    useEffect(() => {
        getFundManager();
    }, [signer]);

    useEffect(() => {
        getWhaleTokenBalance();
    }, [signer]);

    async function makeInvestment(){
        try{
            if(invest <= 0 || invest > whaleTokenBalance){
                toast({
                    title: "Unable to invest",
                    description: "Please enter a valid amount to invest"
                })
                
                return;
            }

            const whaleFinanceContract = new ethers.Contract(WhaleFinanceAddress, WhaleFinanceAbi, signer);

            const whaleTokenContract = new ethers.Contract(WhaleTokenAddress, QuotaTokenAbi, signer);
            
            setLoading(true);
            const txApprove = await whaleTokenContract.functions.approve(WhaleFinanceAddress, ethers.utils.parseEther(String(invest)));

            console.log(txApprove)
            await txApprove.wait();

            console

            
            console.log(fundId)
            const txInvest = await whaleFinanceContract.functions.invest(ethers.utils.parseEther(String(invest)), fundId);
            console.log(fundId)

            setLoading(true);
            await txInvest.wait();
            setLoading(false);

            toast({
                title: "You invested",
                description: "using Whale Finance",
              })

        }catch(err){
            console.log(err);
            console.log("ERRRR")
        } finally{
            setLoading(false);
            setInvest(0);
            setInvestMsg("Approve WHALE")
        }
    }
    
    useEffect(() => {
        
    },[signer]);

    async function getFundName(){
        try{
            if(account == "" || !ethers.utils.isAddress(account as string)){
                return;
            }
            const whaleFinanceContract = new ethers.Contract(WhaleFinanceAddress,WhaleFinanceAbi, provider);
            const nameFund = await whaleFinanceContract.functions.fundsNames(fundId);
            setFundName(nameFund[0]);

        } catch(err){
            toast({
                title: "Error fund name",
                description: "Unable to get fund name"
            })
            console.log(err)
        } 
    }

    useEffect(() => {
        getFundName();
    },[account, signer]);

    useEffect(() => {
        // Find the fund with the matching ID
        const selectedFund = hedgeFunds.find(f => f.id === parseInt(fundId, 10)) || null;
        setFund(selectedFund);
    }, [fundId]);

    function formatToUSD(number: number) {
        const formattedNumber = new Intl.NumberFormat('en-US', { 
          style: 'currency', 
          currency: 'USD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(number); // Convert to millions
      
        return `${formattedNumber}`;
    }

    const { theme } = useTheme();

    const [chartColors, setChartColors] = useState(() => getChartColors());

    useEffect(() => {
        setTimeout(() => {
            setChartColors(getChartColors());
        }, 1); // Adjust delay
    }, [theme]);

    function getAum(quantities: {[key: string]: number}, prices: {[key: string]: number}){
        console.log("quantity", quantities);
        console.log("prices", prices);
        let aum = 0;
        Object.keys(quantities).forEach((token: string) => {
            console.log("token", token);
            const newValue = Number(quantities[token]) * Number((prices[token]));
            console.log("newValue", newValue);

            aum += newValue;
        })
        return aum;

    }

    return (
        <div className='w-[100vw] h-[100vh] overflow-y-auto'>
            <FundHeroSection name={fundName} description={"Description"}  color="primary" manager={fundManager} loading={loading}/>
            <div className="px-12 pb-12">
                <Tabs defaultValue="invest" className="w-full">
                    <TabsList className="mb-8 grid-cols-2">
                        <TabsTrigger className="px-6" value="invest">Overview</TabsTrigger>
                        <TabsTrigger className="px-6" value="fund_information">Portfolio Info</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-4" value="invest">
                        <Card>
                            <CardHeader>
                                <CardTitle>Invest</CardTitle>
                                <CardDescription>You can choose the amount of WHALE to invest in this fund</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex space-x-4">
                                    <div className="flex-1 space-y-1">
                                        <Label className="text-sm ml-2">Amount of WHALE</Label>
                                        <div className="flex flex-row space-x-1">
                                            <Input 
                                                id="invest" 
                                                type="number" 
                                                placeholder="ex. 129"
                                                value={invest}
                                                onChange={(e) => setInvest(parseFloat(e.target.value))} 
                                            />
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Button
                                                        onClick={() => setInvest(whaleTokenBalance)}
                                                        className="underline text-primary px-2" variant="outline">Max</Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                    <p>Invest all your money in the wallet</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col items-start space-y-1 bg-primarylighter rounded px-4 py-2">
                                        <Label className="text-sm">WHALE Balance in your wallet</Label>
                                        <div className="flex flex-col items-center justify-center">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger className="text-2xl font-bold">
                                                    <div>
                                                    {formatToUSD(whaleTokenBalance)}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                <p>Check in your wallet</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        </div>
                                    </div>
                                </div>
                                {loading ?
                                <Button disabled>
                                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </Button>
                                :
                                <Button onClick={makeInvestment}>{investMsg}</Button>
                                }
                                {/* <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        {loading ?
                                        <Button disabled>
                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            Please wait
                                        </Button>
                                        :
                                        <Button onClick={makeInvestment}>{investMsg}</Button>
                                        }
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone.
                                        </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>
                                            Invest
                                        </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog> */}
                            </CardContent>
                        </Card>
                        <div className="grid grid-cols-1 gap-4 justify-center my-6 md:grid-cols-5 lg:grid-cols-5">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Price</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <Wallet />
                                    <p>{formatToUSD(totalQuota/getAum(tokensHolding, allowedtokensPrices))}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Assets Under Management (TVL)</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <Coins />
                                    <p>{formatToUSD(getAum(tokensHolding, allowedtokensPrices))}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Fund Performance (APY)</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <TrendingUp />
                                    <p>+25%</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[1px] border-primary">
                                <CardHeader>
                                    <CardTitle>My Value Deposited</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <Coins />
                                    <p>{Number(quotaBalance).toFixed(3)}</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[1px] border-primary">
                                <CardHeader>
                                    <CardTitle>My Total Return</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xl flex flex-row space-x-2">
                                    <TrendingUp />
                                    <p>0%</p>
                                </CardContent>
                            </Card>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Performance</CardTitle>
                                <CardDescription>Price</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartTestComponent data={mockChart} colors={chartColors}></ChartTestComponent>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent className="space-y-4" value="fund_information">
                        {/* <Card>
                            <CardHeader>
                                <CardTitle>Fund Regulation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                data about the fund here
                            </CardContent>
                        </Card> */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Tokens Allocation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className="">Asset</TableHead>
                                        
                                        <TableHead className="text-right">Price</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {Object.keys(tokensHolding).map((token: string) => (
                                        <TableRow key={token}>
                                            <TableCell className="">{token}</TableCell>
                                            
                                            <TableCell className="text-right">{allowedtokensPrices[token]}</TableCell>
                                            <TableCell className="text-right">{tokensHolding[token]}</TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                        <TableCell colSpan={4} className="text-right">${getAum(tokensHolding, allowedtokensPrices)}</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}