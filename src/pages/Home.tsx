import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
import HeroSection from "@/components/HeroSection";


export default function Home() {


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