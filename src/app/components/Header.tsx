import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { LogoIcon } from "./icons/icons";

export default function Header() {
  return (
    <header className="container mx-auto p-4 grid grid-cols-12 gap-4">
      <div className="col-span-6 md:col-span-2 flex items-center font-raleway text-[24px] font-bold leading-[24px] text-center">
        <LogoIcon />
        <span className="ml-4 font-raleway text-[24px] font-bold leading-[24px] text-center">
          Drive Solar
        </span>
      </div>
      <div className="hidden md:flex col-span-8 justify-center items-center">
        <NavigationMenu className="bg-white rounded-full px-10 py-2 hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/#hero-block" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-inter text-[16px] font-bold leading-[24px] text-[#8987A1]`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#promote" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-inter text-[16px] font-bold leading-[24px] text-[#8987A1]`}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#how-it-works" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-inter text-[16px] font-bold leading-[24px] text-[#8987A1]`}
                >
                  How it Works
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#earnings" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-inter text-[16px] font-bold leading-[24px] text-[#8987A1]`}
                >
                  Benefits
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="col-span-6 md:col-span-2 flex justify-center">
        <Button
          asChild
          className="bg-[#F7C33D] font-raleway text-[16px] font-bold leading-[24px] text-center"
        >
          <Link href="/#contact-us">Get more info</Link>
        </Button>
      </div>
    </header>
  );
}
