import React from 'react';
import ImgAvar from "../assets/whale_avatar2.png"

// need to fix the image address

type FundData = {
    id: number;
    name: string;
    description: string;
    avatar: string;
};

type HeroSectionProps = {
    fund?: FundData | null;
    color?: string;
};

const FundHeroSection: React.FC<HeroSectionProps> = ({ fund, color }) => {

    const safeFund = fund || { id: 0, name: 'Fund', description: '', avatar: '' };
    const safeColor = color || 'secondary';

    console.log(safeFund.avatar);

    return (
        <div className={`w-full pt-12 px-12 h-30 pb-10 mb-8 text-foreground shadow-xl flex flex-row items-center bg-${safeColor}`}>
            <img src={ImgAvar} alt={safeFund.name} className="w-[60px] h-auto rounded-full"/>
            <div className='ml-8 space-y-2'>
                <div className="text-3xl font-bold">{safeFund.name}</div>
                <div className="text-sm">{safeFund.description}</div>
            </div>
        </div>
    );
};

export default FundHeroSection;