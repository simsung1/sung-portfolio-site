"use client";
import { useState } from "react";
import ScrollBannerNav from "./ScrollBannerNav";
import ProjectTab from "./ProjectTab";
import { WorkExperience } from "@/types/workExperience";

interface ProjectsBannerProps {
    id: string;
    experiences: WorkExperience[];
}

export default function ProjectsBanner({ id, experiences }: ProjectsBannerProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const navItems = [
        "Highlight",
        "In Progress",
        "Summer",
        "College: Web Design",
        "College: C++",
        "College: Java",
    ];

    return (
        <section id={id}>
                    <div className="w-full pt-5 pb-10 bg-[url(/images/cubecorner.jpg)] bg-cover">
                        <h1 className="text-3xl font-sharpsans text-center pt-3">
                            Collection of Projects
                        </h1>
                        <ScrollBannerNav
                            navItems={navItems}
                            activeBorderColor="black"
                            onNavClick={(index) => setActiveIndex(index)}
                        />
        
                        <div className="w-full overflow-x-hidden mt-4">
                            {/* Modify width and translate-x styling below depending on number of banner elements */}
                            <div
                                className={`flex transition-transform duration-500 w-[600%] ${
                                    activeIndex === 0
                                        ? "translate-x-0"
                                        : activeIndex === 1
                                        ? "-translate-x-1/6"
                                        : activeIndex === 2
                                        ? "-translate-x-1/3"
                                        : activeIndex === 3
                                        ? "-translate-x-1/2"
                                        : activeIndex === 4
                                        ? "-translate-x-2/3"
                                        : activeIndex === 5
                                        ? "-translate-x-5/6"
                                        : ""
                                }`}
                            >
                 
                                <div className="w-1/6">
                                    <ProjectTab experience={experiences[0]} />
                                </div>
                                <div className="w-1/6">
                                    <ProjectTab experience={experiences[1]} />
                                </div>
                                <div className="w-1/6">
                                    <ProjectTab experience={experiences[2]} />
                                </div>
                                <div className="w-1/6">
                                    <ProjectTab experience={experiences[3]} />
                                </div>
                                <div className="w-1/6">
                                    <ProjectTab experience={experiences[4]} />
                                </div>
                                <div className="w-1/6">
                                    <ProjectTab experience={experiences[5]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    );
}