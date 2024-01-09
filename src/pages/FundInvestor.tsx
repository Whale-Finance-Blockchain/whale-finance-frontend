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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
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
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
// import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { ReloadIcon } from "@radix-ui/react-icons"
import { Separator } from "@/components/ui/separator";
import FundHeroSection from "@/components/FundHeroSection";

type FundData = {
    id: number;
    name: string;
    description: string;
    avatar: string;
};

export default function FundInvestor() {

    const params = useParams();
    const fundId = params.id || '';

    const [loading, setLoading] = useState<boolean>(false);
    const [fund, setFund] = useState<FundData | null>(null);

    const navigator = useNavigate();

    // const [funds, setFunds] = useState<FundData[]>([]);

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

    function onInvest() {
        toast({
          title: "You invested",
          description: "using Whale Finance",
        })
        navigator("/success");
    }

    return (
        <div className='w-[100vw] h-[100vh] overflow-y-auto'>
            <FundHeroSection fund={fund} color="primary"/>
            <div className="px-12 pb-12">
                <Tabs defaultValue="invest" className="w-full">
                    <TabsList className="mb-8 grid-cols-2">
                        <TabsTrigger className="px-6" value="invest">Invest</TabsTrigger>
                        <TabsTrigger className="px-6" value="fund_information">Fund Info</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-4" value="invest">
                        <Card>
                            <CardHeader>
                                <CardTitle>Invest</CardTitle>
                                <CardDescription>You can choose the amount of USD to invest in this fund</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                            {/* <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form> */}
                                <div className="flex space-x-4">
                                    <div className="flex-1 space-y-1">
                                        <Label className="text-sm">Amount of USD</Label>
                                        <Input id="invest" type="number" placeholder="ex. 129" ></Input>
                                    </div>
                                    <Separator orientation="vertical" />
                                    <div className="flex-1 flex flex-col items-start space-y-1">
                                        <Label className="text-sm">USD Balance in your wallet</Label>
                                        <div className="flex flex-col items-center justify-center">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger className="text-2xl py-1 font-bold">123</TooltipTrigger>
                                                <TooltipContent>
                                                <p>Check in your wallet</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        </div>
                                    </div>
                                </div>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        {loading ?
                                        <Button disabled>
                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            Please wait
                                        </Button>
                                        :
                                        <Button onClick={onInvest}>Invest</Button>
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
                                            Invest
                                        </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
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