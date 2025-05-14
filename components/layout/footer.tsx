import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Logo } from "./logo";
import Wrapper from "./wrapper";
import { menuItems } from "@/data/menui-items";
import Link from "next/link";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";
import { Discord } from "../icons/discord";
import { Github } from "../icons/github";
import { Linkedin } from "../icons/linkedin";
import { X } from "../icons/x";
import { buttonVariants } from "../ui/button";

export function Footer() {
    return (
        <footer className="bg-muted">
            <Wrapper className="pt-10 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <Logo />
                        <p className="max-w-sm text-sm md:text-base leading-10 mt-5">Passionné par le développement et l{"'"}intelligence artificielle.</p>
                    </div>
                    <div className="hidden md:flex flex-col items-start justify-start gap-4">
                        {menuItems.map(menuItem => (
                            <Link key={menuItem.path} href={`#${menuItem.path}`} className={buttonVariants({ size: "lg", variant: "link" })}>
                                {menuItem.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-end gap-4">
                        <Facebook size={20} />
                        <Instagram size={20} className="text-secondary" />
                        <Discord size={20} />
                        <Github size={20} className="text-secondary" />
                        <Linkedin size={20} />
                        <X size={20} className="text-secondary" />
                    </div>
                </div>

                <div className="border-t-2 pt-10 mt-10">
                    <p className="text-xs md:text-sm">Copyright © 2025 - tous droits réservés</p>
                </div>
            </Wrapper>

            <div className="fixed bg-background w-full py-4 bottom-0 md:hidden z-50">
                <Wrapper className="h-full flex justify-center items-center">
                    <NavigationMenu>
                        <NavigationMenuList className="flex-wrap">
                            {menuItems.map(menuItem => (
                                <NavigationMenuItem key={menuItem.path}>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                        <Link href={`#${menuItem.path}`} className="text-xs">
                                            {menuItem.name}
                                        </Link>

                                    </NavigationMenuLink>

                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </Wrapper>
            </div>
        </footer>
    )
}