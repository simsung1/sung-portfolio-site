"use client";
import { useState } from "react";
import ScrollBannerNav from "./ScrollBannerNav";
import ProjectTab from "./ProjectTab";

export default function ExperienceBanner({ id }: { id: string }) {
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
            <div className="w-full pt-5 pb-10 bg-black text-white ">
                <h1 className="text-2xl font-sharpsans text-center pt-3">
                    Work Experience
                </h1>
                <ScrollBannerNav
                    navItems={navItems}
                    activeBorderColor="white"
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
                        {/* First Set */}
                        <div className="w-1/5">
                            <ProjectTab
                                bgColor=""
                                btmTitle="Summer Student Intern"
                                btmText="May 2025 - Aug 2025"
                                gradientIndex={0}
                            />
                        </div>

                        {/* Second Set */}

                        <div className="w-1/5">
                            <ProjectTab
                                bgColor=""
                                btmTitle="Summer Student Intern"
                                btmText="May 2025 - Aug 2025"
                                gradientIndex={0}
                            />
                        </div>

                        {/* Third Set */}
                        <div className="w-1/5">
                            <ProjectTab
                                bgColor=""
                                btmTitle="Summer Student Intern"
                                btmText="May 2025 - Aug 2025"
                                gradientIndex={0}
                            />
                        </div>
                        <div className="w-1/5">
                            <ProjectTab
                                bgColor=""
                                btmTitle="Summer Student Intern"
                                btmText="May 2025 - Aug 2025"
                                gradientIndex={0}
                            />
                        </div>
                        <div className="w-1/5">
                            <ProjectTab
                                bgColor=""
                                btmTitle="Summer Student Intern"
                                btmText="May 2025 - Aug 2025"
                                gradientIndex={0}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
