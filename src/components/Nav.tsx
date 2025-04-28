"use client";

import Image from "next/image";
import Icon from "@/assets/icons/hamburger.svg";
import { useState } from "react";
import SideMenu from "./SideMenu";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div
                id="nav-wrap"
                className="flex justify-between px-4 lg:justify-start lg:px-7"
            >
                <div
                    id="logo-wrap"
                    className="h-16 flex justify-center items-center lg:mr-8"
                >
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </div>
                <div id="menu-wrap" className="flex items-center">
                    <Image
                        src={Icon}
                        alt="Hamburger Icon"
                        width={30}
                        height={30}
                        className="lg:hidden cursor-pointer"
                        onClick={() => setMenuOpen(true)}
                    />
                    <div id="list-wrap" className="hidden lg:block">
                        <ul className="flex items-center ml-1 gap-4">
                            <li className="font-samsung font-bold">
                                <a href="#about">About</a>
                            </li>
                            <li className="font-samsung font-bold">
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="font-samsung font-bold">
                                <a href="#experience">Experience</a>
                            </li>
                            <li className="font-samsung font-bold">
                                <a href="#contact">Contact</a>
                            </li>
                            <li className="font-samsung font-bold">
                                <a href="#extras">Extras</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}
