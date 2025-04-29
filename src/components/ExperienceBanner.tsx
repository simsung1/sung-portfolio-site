"use client";
import { useState } from "react";
import ScrollBannerNav from "./ScrollBannerNav";
import ProjectTab from "./ProjectTab";

interface WorkExperience {
    imgsrc: string;
    imgalt: string;
    bgColor?: string;
    btmTitle: string;
    btmText?: string;
    gradientIndex: 0 | 1 | 2;
}

interface ExperienceBannerProps {
    id: string;
    experiences: WorkExperience[];
}

export default function ExperienceBanner({ id, experiences }: ExperienceBannerProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const navItems = [
        "WSIB",
        "Forest City Vape",
        "ChungDahm Institute",
        "Rogers",
        "University of Toronto",
    ];

    return (
        <section id={id}>
            <div className={`w-full pt-5 pb-10 ${experiences[activeIndex].bgColor} ${activeIndex % 2 == 0? "text-white" : ""}`}>
                <h1 className="text-2xl font-sharpsans text-center pt-3">
                    Work Experience
                </h1>
                <ScrollBannerNav
                    navItems={navItems}
                    activeBorderColor={activeIndex % 2 == 0? "white" : "black"}
                    onNavClick={(index) => setActiveIndex(index)}
                />

                <div className="w-full overflow-x-hidden">
                    <div
                        className={`flex transition-transform duration-500 w-[500%] ${
                            activeIndex === 0
                                ? "translate-x-0"
                                : activeIndex === 1
                                ? "-translate-x-1/5"
                                : activeIndex === 2
                                ? "-translate-x-2/5"
                                : activeIndex === 3
                                ? "-translate-x-3/5"
                                : activeIndex === 4
                                ? "-translate-x-4/5"
                                : ""
                        }`}
                    >
                        {/* First Work Exp */}
                        <div className="w-1/5">
                            <ProjectTab experience={experiences[activeIndex]} />
                        </div>

                         {/* Second Work Exp */}
                        <div className="w-1/5">
                            <ProjectTab experience={experiences[activeIndex]} />
                        </div>

                         {/* Third Work Exp */}
                        <div className="w-1/5">
                            <ProjectTab experience={experiences[activeIndex]} />
                        </div>

                         {/* Fourth Work Exp */}
                        <div className="w-1/5">
                            <ProjectTab experience={experiences[activeIndex]} />
                        </div>

                         {/* Fifth Work Exp */}
                        <div className="w-1/5">
                            <ProjectTab experience={experiences[activeIndex]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
