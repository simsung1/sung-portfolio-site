"use client";
import React, { useRef, useState  } from "react";

interface ScrollableNavBarProps {
    navItems: string[];
  }

export default function ScrollBannerNav({navItems}: ScrollableNavBarProps) {

    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
        buttonRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",

        });
    };
    return (
        <>
            <div className="px-4 w-full overflow-x-auto whitespace-nowrap flex justify-between lg:justify-center scrollbar-invisible">
                {navItems.map((item, index) => (
                    <button
                        key={item}
                        ref={(el) => {(buttonRefs.current[index] = el)}}
                        onClick={() => handleClick(index)}
                        className={`font-bold flex-shrink-0 py-1 my-2 mx-4 border-b-2 transition-all duration-600 ${activeIndex === index ? 'border-black' : 'border-transparent'}`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </>
    );
}
