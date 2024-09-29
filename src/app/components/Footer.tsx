import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LogoIcon } from "./icons/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-white p-4 mt-20 rounded-3xl">
      <div className="flex justify-between items-center px-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <LogoIcon />
            <h3 className="ml-4 text-[24px] font-bold leading-[24px] text-center">
              Drive Solar
            </h3>
          </div>
          <p className="py-8 font-inter text-[16px] font-normal leading-[24px] text-left text-[#8987A1]">
            Ready to elevate to fully use sun? <br />
            Contact us today to discuss your project and <br />
            discover how we can bring our contribution together.
          </p>
          <p>
            <span>❤️</span>
            <span className="font-inter text-[16px] font-normal leading-[24px] text-left">
              Made with love to society
            </span>
          </p>
        </div>

        <div className="hidden md:flex space-x-8">
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
      </div>
    </footer>
  );
}
