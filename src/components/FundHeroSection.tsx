import React, { useEffect, useState } from 'react';
import ImgAvar from "../assets/whale_avatar2.png";
import blockies from 'ethereum-blockies-base64';
import { Link2 } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { HeroSectionProps } from '@/utils/props';
import { toast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

// need to fix the image address

const FundHeroSection: React.FC<HeroSectionProps> = ({ name, description, color, manager, loading }) => {

    const safeColor = color || 'secondary';
    const managerDefault = '0x0';

    const [avatar, setAvatar] = useState('');

    const handleLink = async () => {
        if (manager) {
            const etherscanUrl = `https://etherscan.io/address/${manager}`;
            window.open(etherscanUrl, '_blank');
        } else {
            toast({
                title: "Error getting data",
                description: "Connect to Metamask"
            })
        }
    };

    const getAccountAvatar = async () => {
        try {
            if (manager) {
                return blockies(manager);
            } else {
                return blockies(managerDefault);
            }
        } catch (error) {
            toast({
                title: "Error getting data",
                description: "Connect to Metamask"
            })
            console.log(error)
            return blockies(managerDefault);
        }
    };

    useEffect(() => {
        getAccountAvatar().then(setAvatar);
    }, []);
    

    return (
        <>
            {loading ? 
            <div className={`w-full pt-12 px-12 h-30 pb-10 mb-8 text-foreground shadow-xl flex flex-row items-center bg-${safeColor}`}>
                <img src={ImgAvar} alt="fund" className="w-[60px] h-auto rounded-full"/>
                <div className='ml-8 space-y-2'>
                    <div className="text-3xl font-bold"><Skeleton className="" /></div>
                    <div className="text-sm"><Skeleton className="" /></div>
                </div>
                <div className='flex-1 flex justify-end px-2'>
                    <p className='flex flex-col justify-center mx-8 italic'>Managed by:</p>
                    <div className='px-4 py-2 rounded bg-secondary opacity-90 flex items-center space-x-4'>
                        <img src={blockies(managerDefault)} alt="" className="w-[25px] h-auto rounded-full"/>
                        <p className='w-[400px]'><Skeleton className="" /></p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link2 size="25" className='hover:cursor-pointer p-1' onClick={handleLink}/>
                                </TooltipTrigger>
                                <TooltipContent>
                                <p>View on Etherscan</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div> 
            :
            <div className={`w-full pt-12 px-12 h-30 pb-10 mb-8 text-foreground shadow-xl flex flex-row items-center bg-${safeColor}`}>
                <img src={ImgAvar} alt={name} className="w-[60px] h-auto rounded-full"/>
                <div className='ml-8 space-y-2'>
                    <div className="text-3xl font-bold">{name}</div>
                    <div className="text-sm">{description}</div>
                </div>
                <div className='flex-1 flex justify-end px-2'>
                    <p className='flex flex-col justify-center mx-8 italic'>Managed by:</p>
                    <div className='px-4 py-2 rounded bg-secondary opacity-90 flex items-center space-x-4'>
                        <img src={avatar} alt="" className="w-[25px] h-auto rounded-full"/>
                        <p className='w-[400px]'>{manager}</p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link2 size="25" className='hover:cursor-pointer p-1' onClick={handleLink}/>
                                </TooltipTrigger>
                                <TooltipContent>
                                <p>View on Etherscan</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default FundHeroSection;