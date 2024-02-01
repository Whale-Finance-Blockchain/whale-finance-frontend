export type FundData = {
    id: number;
    name: string;
    description: string;
    avatar: string;
};

export type HeroSectionProps = {
    name?: string;
    description?: string;
    color?: string;
    manager?: string;
    loading?: boolean;
};

export type HeroSectionSimpleProps = {
    title: string;
};

export interface ChartColors {
    backgroundColor?: string;
    bkgColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
}
  
export interface ChartComponentProps {
    data: any[];
    colors?: ChartColors;
}