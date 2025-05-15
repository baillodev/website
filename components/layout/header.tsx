"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import Link from "next/link";
import { Logo } from "./logo";
import { menuItems } from "@/data/menui-items";



export function Header() {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
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

                <div className="flex justify-center items-center gap-2">
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

                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                    >
                        {!isOpen ? (
                            <Menu className="size-6" />
                        ) : (
                            <X className="size-6" />
                        )}
                    </Button>

                </div>
            </Wrapper>
        </header>
    );
}
