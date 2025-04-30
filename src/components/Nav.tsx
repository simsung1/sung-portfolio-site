"use client";

import Image from "next/image";
import Icon from "@/assets/icons/hamburger.svg";
import { useState } from "react";
import SideMenu from "./SideMenu";
import Link from "next/link";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between px-4 lg:justify-start lg:px-7 border-b border-gray-300">
                <Link
                    href="/"
                    id="logo-wrap"
                    className="w-25 h-16 flex justify-center items-center lg:mr-8 relative"
                >
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                        sizes="100px"
                    />
                </Link>
                <div className="flex items-center">
                    <Image
                        src={Icon}
                        alt="Hamburger Icon"
                        width={30}
                        height={30}
                        className="lg:hidden cursor-pointer"
                        onClick={() => setMenuOpen(true)}
                    />
                    <div className="hidden lg:block">
                        <ul className="flex items-center ml-1 gap-4">
                            <li className="font-samsung font-bold">
                                <Link href="/#about">About</Link>
                            </li>
                            <li className="font-samsung font-bold">
                                <Link href="/#experience">Experience</Link>
                            </li>
                            <li className="font-samsung font-bold">
                                <Link href="/#projects">Projects</Link>
                            </li>
                            <li className="font-samsung font-bold">
                                <Link href="/#contact">Contact</Link>
                            </li>
                            <li className="font-samsung font-bold">
                                <Link href="#extras">Extras</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}
