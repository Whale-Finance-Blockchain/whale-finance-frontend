import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
// import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { ReloadIcon } from "@radix-ui/react-icons"
import FundHeroSection from "@/components/FundHeroSection";

type FundData = {
    id: number;
    name: string;
    description: string;
    avatar: string;
};

export default function FundManager() {

    const params = useParams();
    const fundId = params.id || '';

    const [loading, setLoading] = useState<boolean>(false);
    const [fund, setFund] = useState<FundData | null>(null);

    // const navigator = useNavigate();

    // const [funds, setFunds] = useState<DataPoint[]>([]);

    // const fundsElements = funds.map((fund, idx) =>

    //     return(<div onClick={() => navigator(`/fundslist/${fund.id}`)}>

    //     </div>)
    // )

    // const [price, setPrice] = useState(0);

    // async function fetchCryptoPrice(symbol: any) {
    //     try {
    //       const response = await axios.get(`http://localhost:3000/api/crypto/price/${symbol}`);
    //       return response.data;
    //     } catch (error) {
    //       console.error('Error fetching crypto price:', error);
    //       // Handle error (e.g., show an alert or message to the user)
    //     }
    // }

    // useEffect(() => {
    //     fetchCryptoPrice('BTC').then(data => {
    //       setPrice(data.price);
    //     });
    // }, []);

    // const FormSchema = z.object({
    //     username: z.string().min(2, {
    //       message: "Username must be at least 2 characters.",
    //     }),
    // })

    // const form = useForm<z.infer<typeof FormSchema>>({
    //     resolver: zodResolver(FormSchema),
    //     defaultValues: {
    //       username: "",
    //     },
    // })
     
    // function onSubmit(data: z.infer<typeof FormSchema>) {
    //     toast({
    //       title: "You submitted the following values:",
    //       description: (
    //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //             <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //         </pre>
    //       ),
    //     })
    // }

    useEffect(() => {
        const hedgeFunds: FundData[] = [
            { id: 1, name: "Alpha Capital", description: "Specializes in algorithm-based trading strategies across global equity markets.", avatar: "src/assets/whale_avatar3.png"  },
            { id: 2, name: "Blue Peak Investments", description: "Focuses on long/short equity with a strong emphasis on emerging markets.", avatar: "src/assets/whale_avatar4.png" },
            { id: 3, name: "Crestwood Equity Partners", description: "A multi-strategy fund with a focus on value and event-driven investments.", avatar: "src/assets/whale_avatar5.png" },
            { id: 4, name: "Diamond Edge Capital", description: "Engages in quantitative trading, utilizing advanced analytics in global markets.", avatar: "src/assets/whale_avatar1.png" },
            { id: 5, name: "Echo Ventures", description: "Prioritizes sustainable and socially responsible investments in technology and green energy sectors.", avatar: "src/assets/whale_avatar3.png" },
            { id: 6, name: "Falcon Asset Management", description: "Specializes in high-yield fixed income and distressed assets.", avatar: "src/assets/whale_avatar1.png" },
            { id: 7, name: "Granite Hill Partners", description: "A real estate-focused hedge fund with an emphasis on commercial properties.", avatar: "src/assets/whale_avatar2.png" },
            { id: 8, name: "Horizon Global Strategies", description: "Concentrates on macroeconomic trends to guide investment in international equities and commodities.", avatar: "src/assets/whale_avatar4.png" },
            { id: 9, name: "Ironclad Funds", description: "Utilizes a risk-averse approach to invest in large-cap stocks and government bonds.", avatar: "src/assets/whale_avatar2.png" },
            { id: 10, name: "Jupiter Wealth Management", description: "A boutique hedge fund focusing on wealth preservation and conservative growth strategies.", avatar: "src/assets/whale_avatar5.png" }
        ];

        // Find the fund with the matching ID
        const selectedFund = hedgeFunds.find(f => f.id === parseInt(fundId, 10)) || null;
        setFund(selectedFund);
    }, [fundId]);

    return (
        <div className='w-[100vw] h-[100vh] overflow-y-auto'>
            <FundHeroSection fund={fund} color="secondary"/>
            <div className="px-12 pb-12">
                <Tabs defaultValue="swap" className="w-full">
                    <TabsList className="mb-8 grid-cols-2">
                        <TabsTrigger className="px-6" value="swap">Swap</TabsTrigger>
                        <TabsTrigger className="px-6" value="fund_information">Fund Info</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-4" value="swap">
                        <Card>
                            <CardHeader>
                                <CardTitle>Swap</CardTitle>
                                <CardDescription>You can choose the amount of USD to invest in this fund</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex space-x-4">
                                    <div className="flex-1 flex flex-row space-x-1">
                                        <Input id="tokenA" type="number" placeholder="ex. 129" ></Input>
                                        <Select>
                                            <SelectTrigger className="bg-secondary w-[180px]">
                                                <SelectValue placeholder="Select a token" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                <SelectLabel>Tokens</SelectLabel>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            {loading ?
                                            <Button disabled>
                                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                                Please wait
                                            </Button>
                                            :
                                            <Button>Swap</Button>
                                            }
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete your account
                                                and remove your data from our servers.
                                            </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction>
                                                Swap
                                            </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                    <div className="flex-1 flex flex-row space-x-1">
                                        <Input id="tokenB" type="number" placeholder="ex. 129" ></Input>
                                        <Select>
                                            <SelectTrigger className="bg-secondary w-[180px]">
                                                <SelectValue placeholder="Select a token" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                <SelectLabel>Tokens</SelectLabel>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Performace</CardTitle>
                                <CardDescription>TVL</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="w-[200px] h-[100px]">0</div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent className="space-y-4" value="fund_information">
                        <Card>
                            <CardHeader>
                                <CardTitle>Fund Creation Information</CardTitle>
                                <CardDescription>DHASDJSVAGDVAGDASV</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="w-[200px] h-[100px]">0</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Tokens Allowed</CardTitle>
                                <CardDescription>DHASDJSVAGDVAGDASV</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="w-[200px] h-[100px]">0</div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}