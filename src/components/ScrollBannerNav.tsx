"use client";
import React, { useRef, useState } from "react";

interface ScrollableNavBarProps {
    navItems: string[];
    activeBorderColor: "white" | "black";
    onNavClick?: (index: number) => void; 
}

export default function ScrollBannerNav({
    navItems,
    activeBorderColor,
    onNavClick
}: ScrollableNavBarProps) {
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(0); //initialized to 0 for first element

    const handleClick = (index: number) => {
        setActiveIndex(index);
        buttonRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            // inline: "center",
            block: "nearest",
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onNavClick && onNavClick(index);
    };
    return (
        <>
            <div className="px-8 w-full overflow-x-auto whitespace-nowrap flex justify-around md:justify-center gap-8 scrollbar-invisible">
                {navItems.map((item, index) => (
                    <button
                        key={item}
                        ref={(el) => {
                            buttonRefs.current[index] = el;
                        }}
                        onClick={() => handleClick(index)}
                        className={`font-bold flex-shrink-0 py-1 my-2 border-b-2 transition-all duration-600 cursor-pointer ${
                            activeIndex === index
                                ? activeBorderColor === "white"
                                    ? "border-white"
                                    : "border-black"
                                : "border-transparent"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </>
    );
}
