import React from "react";
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
                <ul id="menu-list" className="flex flex-col items-start ml-7 gap-4">
                    <li className="font-sharpsans font-bold text-2xl"><a href="#">About</a></li>
                    <li className="font-sharpsans font-bold text-2xl"><a href="#">Projects</a></li>
                    <li className="font-sharpsans font-bold text-2xl"><a href="#">Experience</a></li>
                    <li className="font-sharpsans font-bold text-2xl"><a href="#">Contact</a></li>
                    <li className="font-sharpsans font-bold text-2xl"><a href="#">Extras</a></li>
                </ul>
                <hr className="text-gray-200 w-9/10 mx-auto my-5"/>
            </div>
        </>
    );
};

export default SideMenu;
