"use client";
import { useState } from "react";
import ScrollBannerNav from "./ScrollBannerNav";
import ProjectTab from "./ProjectTab";
import { WorkExperience } from "@/types/workExperience";

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
                <h1 className="text-3xl font-sharpsans text-center pt-3">
                    Work Experience
                </h1>
                <ScrollBannerNav
                    navItems={navItems}
                    activeBorderColor={activeIndex % 2 == 0? "white" : "black"}
                    onNavClick={(index) => setActiveIndex(index)}
                />

                <div className="w-full overflow-x-hidden mt-4">
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
                            <ProjectTab experience={experiences[0]} />
                        </div>

                         {/* Second Work Exp */}
                        <div className="w-1/5">
                            <ProjectTab experience={experiences[1]} />
                        </div>

                         {/* Third Work Exp */}
                        <div className="w-1/5">
                            <ProjectTab experience={experiences[2]} />
                        </div>

                         {/* Fourth Work Exp */}
                        <div className="w-1/5">
                            <ProjectTab experience={experiences[3]} />
                        </div>

                         {/* Fifth Work Exp */}
                        <div className="w-1/5">
                            <ProjectTab experience={experiences[4]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
