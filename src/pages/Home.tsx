import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
import HeroSection from "@/components/HeroSection";
import { ChartTestComponent } from "../components/ChartTest";
import { useEffect, useState } from "react";
import { useTheme } from '@/components/theme-provider';
import { getChartColors } from '../utils/chartUtils'; 

const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
];   

export default function Home() {

    const { theme } = useTheme();

    const [chartColors, setChartColors] = useState(() => getChartColors());

    useEffect(() => {
        setTimeout(() => {
            setChartColors(getChartColors());
        }, 1); // Adjust delay
    }, [theme]);

    return (
        <div className='w-[100vw] h-[100vh] overflow-y-auto'>
            <div className="p-12">  
                <HeroSection title="Home"/>
                {/* Investor and Manager menu */}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Investor Features</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <NavigationMenuLink>
                                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:cursor-pointer">
                                            <div className="text-sm font-medium leading-none">Introduction</div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Re-usable components built using Radix UI and Tailwind CSS.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink>
                                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:cursor-pointer">
                                            <div className="text-sm font-medium leading-none">Introduction</div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Re-usable components built using Radix UI and Tailwind CSS.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Manager Features</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <NavigationMenuLink>
                                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:cursor-pointer">
                                            <div className="text-sm font-medium leading-none">Introduction</div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Re-usable components built using Radix UI and Tailwind CSS.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink>
                                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:cursor-pointer">
                                            <div className="text-sm font-medium leading-none">Introduction</div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Re-usable components built using Radix UI and Tailwind CSS.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className='grid grid-cols-1 gap-4 justify-center my-6 md:grid-cols-3 lg:grid-cols-4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>ADASDSA</CardTitle>
                            <CardDescription>DHASDJSVAGDVAGDASV</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Data</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>ADASDSA</CardTitle>
                            <CardDescription>DHASDJSVAGDVAGDASV</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Data</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>ADASDSA</CardTitle>
                            <CardDescription>DHASDJSVAGDVAGDASV</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Data</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>ADASDSA</CardTitle>
                            <CardDescription>DHASDJSVAGDVAGDASV</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Data</p>
                        </CardContent>
                    </Card>
                </div>




                <Card>
                    <CardHeader>
                        <CardTitle>LIGHTWEIGHT CHARTS</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartTestComponent data={initialData} colors={chartColors}></ChartTestComponent>
                    </CardContent>
                </Card>

          






                {/* <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm m-12"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                            <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel> */}
            </div>
        </div>
    )
}