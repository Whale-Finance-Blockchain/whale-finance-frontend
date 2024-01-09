import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ConnectWalletBtn from "./ConnectWalletBtn";
import NavButton from "./NavButton";
import LogoApp from "../assets/whale_logo_green.png";

export function Header({ isMetamaskInstalled, connectWallet, account, signer }: 
    { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; signer: any;}) {

    const navigator = useNavigate();

    return (
        <div className='md:w-[12.5vw] lg:w-[12.5vw] md:h-screen lg:h-screen shadow-2xl border-r-[1px] border-secondary'>
            <div className="w-full bg-transparent flex flex-col items-center">
                <img className="w-[6vw] py-[5vh] cursor-pointer" src={LogoApp} alt="Whale Finance" onClick={() => navigator('/')}/>
                <Button variant="ghost" className="w-full" onClick={() => navigator('/')}>Home</Button>
                <NavButton to="/funds-list">Funds List</NavButton>
                <NavButton to="/create-fund">Create Fund</NavButton>
                <NavButton to="/manager">Manager Area</NavButton>
                <div className="w-full flex flex-row justify-center mt-[35vh] mb-6">
                    <ModeToggle/>
                </div>
                <ConnectWalletBtn
                    isMetamaskInstalled={isMetamaskInstalled}
                    connectWallet={connectWallet}
                    account={account}
                    signer={signer}
                />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="w-full">Open KYC Manager</Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                            Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                            Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                        </div>
                        <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                {/* <div className="w-full flex flex-row justify-center mt-48">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div> */}
            </div>
        </div>
    )
}

