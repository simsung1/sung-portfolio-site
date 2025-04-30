import React from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={onClose}
                />
            )}
            <div
                className={`fixed top-0 right-0 h-full w-[360px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={onClose} aria-label="Close menu">
                        <XMarkIcon className="size-8 text-black cursor-pointer" />
                    </button>
                </div>
                <ul
                    id="menu-list"
                    className="flex flex-col items-start ml-7 gap-4 font-sharpsans font-bold text-2xl"
                >
                    <li>
                        <Link href="/#about">About</Link>
                    </li>
                    <li>
                        <Link href="/#experience">Experience</Link>
                    </li>
                    <li>
                        <Link href="/#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/#contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/#" onClick={onClose}>
                            Extras
                        </Link>
                    </li>
                </ul>
                <hr className="text-gray-200 w-9/10 mx-auto my-5" />
                <a
                    href="/files/SMS Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    title="Download my resume"
                    className="ml-7 underline decoration-dashed hover:text-green-200"
                >
                    Download Resume
                </a>
                <a
                    href="mailto:sim.sungmin@outlook.com"
                    title="Send me an email"
                    className="block ml-7 my-4 underline decoration-dashed hover:text-green-200"
                >
                    Send me an email
                </a>
                <hr className="text-gray-200 w-9/10 mx-auto my-5" />
            </div>
        </>
    );
};

export default SideMenu;
