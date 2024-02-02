import React from 'react';
import { HeroSectionSimpleProps } from '@/utils/props';

const HeroSection: React.FC<HeroSectionSimpleProps> = ({ title }) => {
    return (
        <div className="w-full h-24 text-foreground">
            <div className="text-3xl font-bold">{title}</div>
        </div>
    );
};

export default HeroSection;