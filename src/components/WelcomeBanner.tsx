"use client";
import { useState } from "react";
import ScrollBannerNav from "./ScrollBannerNav";
import DualCard from "./DualCard";
import SoloCard from "./SoloCard";
import { overviewData, educationData, hobbyData } from "@/data/welcomeCards";

export default function WelcomeBanner({ id }: { id: string }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const navItems = ["Overview", "Education", "Hobbies"];


    return (
        <section id={id}>
            <div className="w-full mt-10 mb-4">
                <h1 className="text-2xl font-sharpsans text-center pt-3">
                    Hi, I&apos;m Sung Min
                </h1>
                <ScrollBannerNav
                    navItems={navItems}
                    activeBorderColor="black"
                    onNavClick={(index) => setActiveIndex(index)}
                />
                <div className="w-full overflow-x-hidden">
                    <div
                        className={`flex transition-transform duration-500 w-[300%] ${
                            activeIndex === 0
                                ? "translate-x-0"
                                : activeIndex === 1
                                ? "-translate-x-1/3"
                                : activeIndex === 2
                                ? "-translate-x-2/3"
                                : ""
                        }`}
                    >
                        {/* First Set */}
                        <div className="w-1/3">
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-2">
                                <div className="col-span-2 md:row-span-2">
                                    <DualCard  data={overviewData[0]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={overviewData[1]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={overviewData[2]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={overviewData[3]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={overviewData[4]}/>
                                </div>
                            </div>
                        </div>

                        {/* Second Set */}

                        <div className="w-1/3">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-2">
                                <div className="col-span-2 md:row-span-2">
                                    <DualCard data={educationData[0]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={educationData[1]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={educationData[2]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={educationData[3]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={educationData[4]}/>
                                </div>
                            </div>
                        </div>

                        {/* Third Set */}
                        <div className="w-1/3">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-2">
                                <div className="col-span-2 md:row-span-2">
                                    <DualCard data={hobbyData[0]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={hobbyData[1]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={hobbyData[2]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={hobbyData[3]}/>
                                </div>
                                <div className="col-span-1">
                                    <SoloCard data={hobbyData[4]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
