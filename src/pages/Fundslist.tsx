import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
// import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../components/truncate.css';
import { Separator } from "@/components/ui/separator";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

type FundData = {
    id: number;
    name: string;
    description: string;
    avatar: string;
};

export default function FundsList() {

    const navigator = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [funds, setFunds] = useState<FundData[]>([]);

    const apy = 0.1;

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
        setFunds(hedgeFunds);
    }, []);

    const fundsElements = funds.map((fund) =>
    {
        return(<div onClick={() => navigator(`/funds-list/${fund.id}`)}>
            <Card className="cursor-pointer hover:border-primary">
                {!loading ?  
                <>
                    <CardHeader>
                        <div className="flex flex-row items-center space-x-8">
                            <img src={fund.avatar} alt={fund.name} className="w-[40px] h-[40px]"/>
                            <div className="space-y-2">
                                <CardTitle>{fund.name}</CardTitle>
                                <CardDescription className="truncate-2-lines">{fund.description}</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex h-8 items-center space-x-4 text-md">
                        <div className="flex-1 flex flex-row items-center justify-center space-x-8">
                                <p>TVL:</p>
                                <p className="">28</p>
                            </div>
                            <Separator orientation="vertical" />
                            <div className="flex-1 flex flex-row items-center justify-center space-x-8">
                                <p>APY:</p>
                                <div className='flex flex-row items-center justify-center space-x-1'>
                                    {apy > 0 ? <AiOutlineArrowUp color="rgb(34 197 94)" size={20}/> : apy < 0 ? <AiOutlineArrowDown color="rgb(249 115 22)" size={20}/> : ''}
                                    <p className={`font-bold ${apy > 0 ? 'text-green-500' : apy < 0 ? 'text-red-500' : ''}`}>10%</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </>
                :
                <div className="flex items-center space-x-4 p-8">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
                }
            </Card>
        </div>)
    })

    return (
        <div className='w-[100vw] h-[100vh] overflow-y-auto'>
            <div className="p-12">
                <HeroSection title="Dashboard"/>
                <div className='grid grid-cols-1 gap-4 justify-center my-6 md:grid-cols-3 lg:grid-cols-4'>
                    {fundsElements}
                </div>
            </div>
        </div>
    )
}