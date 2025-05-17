import { Logo } from "./logo";
import Wrapper from "./wrapper";
import { menuItems } from "@/data/menui-items";
import Link from "next/link";
import { Instagram } from "../icons/instagram";
import { Github } from "../icons/github";
import { Linkedin } from "../icons/linkedin";
import { X } from "../icons/x";
import { buttonVariants } from "../ui/button";

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground">
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

                    <div className="flex items-end md:justify-end gap-4">
                        <a href="https://www.instagram.com/baillodev?igsh=MWRjZWl6OWx5c241bw==" target="_blank" className="text-muted-foreground hover:text-secondary transition-colors duration-500">
                            <Instagram size={20} />
                        </a>
                        <a href="https://x.com/baillodev?t=ciycUpAch3A3fDg7ceu1-Q&s=09" target="_blank" className="text-muted-foreground hover:text-secondary transition-colors duration-500">
                            <X size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/mamadou-baillo-diallo-8243a1250/" target="_blank" className="text-muted-foreground hover:text-secondary transition-colors duration-500">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/baillodev/" target="_blank" className="text-muted-foreground hover:text-secondary transition-colors duration-500">
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-foreground/15 pt-10 mt-10">
                    <p className="text-xs md:text-sm">Copyright © 2025 - tous droits réservés</p>
                </div>
            </Wrapper>
        </footer>
    )
}