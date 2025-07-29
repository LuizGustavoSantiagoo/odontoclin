"use client"

import { useState } from "react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "#", label: "Profissionais" }
    ];

    const session = false;

    const NavLinks = () => (
        <>
            {navItems.map((item) => (
                <Button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    key={item.href}
                    asChild
                    className="bg-transparent text-black hover:border-b-3 hover:bg-transparent text-base">

                    <Link href={item.href} className="text-base font-normal">
                        {item.label}
                    </Link>

                </Button>
            ))}

            {
                session ? (
                    <Link
                        href="/dashBoard"
                        className="flex items-center justify-center hover:border-b-3">
                        Portal da Clinica
                    </Link>
                ) : (
                    <Button className="hover:border-b-3 bg-transparent text-black hover:bg-transparent ">
                           <LogIn /> Fazer Login
                    </Button>
                )

            }
        </>
    );

    return (
        <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white border-b-1">

            <div className="container mx-auto flex justify-between items-center">

                <Link href="/" className="font-bold text-3x1 font-zinc-900">
                    Odonto
                    <span className="text-emerald-500">Clin</span>
                </Link>


                <nav className="hidden md:flex items-center space-x-4">
                    <NavLinks />
                </nav>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button
                            className="text-black hover:border-b-3"
                            variant="ghost"
                            size="icon">
                            <Menu className="w-6 h-6"></Menu>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[240px] z-[9999]">

                        <SheetHeader></SheetHeader>
                        <SheetTitle className="ml-2">Menu</SheetTitle>
                        <SheetDescription className="ml-2">Veja nossos links</SheetDescription>

                        <nav className="flex flex-col ml-2 space-y-4">
                            <NavLinks />
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

        </header>
    );
}