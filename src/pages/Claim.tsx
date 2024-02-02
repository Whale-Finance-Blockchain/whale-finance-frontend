import { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import HeroSection from '../components/HeroSection';
import { Button } from '../components/ui/button';
import { Input } from '@/components/ui/input';
import { allowedTokens } from "../utils/addresses";
import { ReloadIcon } from '@radix-ui/react-icons';
import { toast } from '@/components/ui/use-toast';
import { ethers } from 'ethers';

export default function Claim({ account, signer} : { account: string | null; signer: any;}) {

    
    const [loading, setLoading] = useState<boolean>(false);

    const [amounts, setAmounts] = useState({} as any); 

    const handleClaims = async  () => {

        try{
            setLoading(true);
            // const claims = await whaleFinanceContract.functions.claimTokens();
            // setClaims(claims);

            await Promise.all(Object.keys(amounts).map(async (token: string) => {
                const tokenContract = new ethers.Contract(allowedTokens[token], ['function mint(address _to, uint256 _amount) public'], signer);
                await tokenContract.mint(account, amounts[token]);

            }));
            
            setLoading(false);

        } catch(err){
            console.log(err);
        }
        
    };

    useEffect(() => {
        let amountsTmp =  {} as any
        Object.keys(allowedTokens).forEach((token: string) => {
            amountsTmp[token] = 0;
        }
        );

        setAmounts({...amountsTmp});
    },[])

    const onClaim = async () => {
        await handleClaims();
        toast({
          title: "Tokens Claimed",
          description: "You have successfully claimed your tokens",
        })
    }
      
    return (
        <div className='w-[100vw] h-[100vh] overflow-y-auto'>
            <div className="p-12">
                <HeroSection title="Claim Tokens (only testnet)"/>
                <Card>
                    <CardHeader>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <CardTitle>Claim our allowed tokens to test</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {Object.keys(allowedTokens).map((tokenName: string, idx: number) => {
                            
                            return(
                                <div key={idx} className='mb-8 w-[60%] mx-[20%]'>
                                    <p className='indent-2 text-sm mb-2'>{tokenName}</p>
                                    <Input 
                                        id={tokenName} 
                                        type="number" 
                                        placeholder="Enter number of tokens"

                                        value={(tokenName in amounts) ? amounts[tokenName] : 0}
                                        onChange={(e) => setAmounts({...amounts, [tokenName]: parseFloat(e.target.value)})}
                                        // value={admFee}
                                        // onChange={(e) => setAdmFee(parseFloat(e.target.value))}
                                     />
                                </div>
                            );
                        })}
                        {loading ? 
                        <Button disabled>
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>
                        : 
                        <Button className='mx-[40%] w-[20%] my-4' onClick={onClaim}>Claim</Button>
                        }
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}