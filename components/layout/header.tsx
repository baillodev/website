"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import Link from "next/link";
import { Logo } from "./logo";
import { menuItems } from "@/data/menui-items";



export function Header() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <header className="fixed inset-0 w-full h-16 border-b bg-foreground/5 backdrop-blur-md z-50">
            <Wrapper className="h-full flex items-center justify-between">
                <Logo />

                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList>
                        {menuItems.map(menuItem => (
                            <NavigationMenuItem key={menuItem.path}>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                    <Link href={`#${menuItem.path}`}>
                                        {menuItem.name}
                                    </Link>

                                </NavigationMenuLink>

                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <Button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    variant="outline"
                    size="icon"
                >
                    {theme === "dark" ? (
                        <Sun />
                    ) : (
                        <Moon />
                    )}
                </Button>
            </Wrapper>
        </header>
    );
}
