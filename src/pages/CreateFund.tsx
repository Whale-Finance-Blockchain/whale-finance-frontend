import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import HeroSection from "@/components/HeroSection"
import { toast } from "@/components/ui/use-toast"
import React, { useState } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"


export default function CreateFund() {

    const navigator = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);

    const [openInvestment, setOpenInvestment] = React.useState<Date>();
    const [closeInvestment, setCloseInvestment] = React.useState<Date>();
    const [maturationTime, setMaturationtime] = React.useState<Date>();

    function onSave() {
        toast({
          title: "You saved",
          description: "Fund data information",
        })
    }

    function onSubmit() {
        toast({
          title: "You submitted",
          description: "your Fund Creation",
        })
        navigator("/success");
    }

    return (
        <div className='w-[100vw] h-[100vh] overflow-y-auto'>
            <div className="p-12">
                <HeroSection title="Create Fund"/>
                <Tabs defaultValue="fund_data" className="w-full">
                    <TabsList className="mb-8 grid-cols-2">
                        <TabsTrigger className="px-6" value="fund_data">Fund Data</TabsTrigger>
                        <TabsTrigger className="px-6" value="fund_regulation">Fund Regulation</TabsTrigger>
                    </TabsList>
                    <TabsContent value="fund_data">
                        <Card>
                        <CardHeader>
                            <CardTitle>Fund Data</CardTitle>
                            <CardDescription>
                            Make changes to your fund information here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                    <Label>Name</Label>
                                    <Input id="name" placeholder="ex. Falcon Fund" />
                                    </div>
                                    <div className="space-y-1">
                                    <Label>Ticker</Label>
                                    <Input id="ticker" placeholder="ex. FLCN" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                    <Label>Administration Fee</Label>
                                    <Input id="admfee" type="number" placeholder="ex. 1%" />
                                    </div>
                                    <div className="space-y-1">
                                    <Label>Performace Fee</Label>
                                    <Input id="perfee" type="number" placeholder="ex. 10%" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            {loading ?
                            <Button disabled>
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                            :
                            <Button onClick={onSave}>Save Changes</Button>
                            }
                        </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="fund_regulation">
                        <Card>
                        <CardHeader>
                            <CardTitle>Fund Regulation</CardTitle>
                            <CardDescription>
                            Change your fund regulation here. After sending, you will create your fund.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                    <Label>Start time for investments</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !openInvestment && "text-muted-foreground"
                                            )}
                                            >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {openInvestment ? format(openInvestment, "PPP") : <span>Pick a time to open investments</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                            mode="single"
                                            selected={openInvestment}
                                            onSelect={setOpenInvestment}
                                            initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    </div>
                                    <div className="space-y-1">
                                    <Label>End time for investments</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !closeInvestment && "text-muted-foreground"
                                            )}
                                            >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {closeInvestment ? format(closeInvestment, "PPP") : <span>Pick a time to close investments</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                            mode="single"
                                            selected={closeInvestment}
                                            onSelect={setCloseInvestment}
                                            initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    </div>
                                    <div className="space-y-1">
                                    <Label>Maturation Date</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !maturationTime && "text-muted-foreground"
                                            )}
                                            >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {maturationTime ? format(maturationTime, "PPP") : <span>Pick a maturation date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                            mode="single"
                                            selected={maturationTime}
                                            onSelect={setMaturationtime}
                                            initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                    <Label>Accepted Tokens</Label>
                                    <Input id="admfee" type="number" placeholder="ex. 1%" />
                                    </div>
                                    <div className="space-y-1">
                                    <Label>Choosen Dex</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a Dex" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectLabel>Dex</SelectLabel>
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
                            </div>
                        </CardContent>
                        <CardFooter>
                            {loading ?
                            <Button disabled>
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                            :
                            <Button onClick={onSubmit}>Submit Fund</Button>
                            }
                        </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
                <div className="w-full bg-red-600"></div>
            </div>
        </div>
    )
}