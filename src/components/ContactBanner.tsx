"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import InfoCard from "./InfoCard";
import { messages } from "@/data/contactMessages";

export default function ContactBanner({ id }: { id: string }) {
    const sliderRef = useRef<Slider | null>(null);
    const [activeButton, setActiveButton] = useState<number>(0);

    const goToSlide = (index: number) => {
        sliderRef.current?.slickGoTo(index);
    };

    // settings for mobile view
    const settings = {
        arrows: false,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        swipeToSlide: true,
        dots: true,
    };

    //settings for tablet view+
    const settings2 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        afterChange: (current: number) => {
            setActiveButton(current);
        },
    };
    return (
        <div id={id} className="py-5 mb-2">
            <h1 className="text-3xl font-sharpsans text-center py-3" tabIndex={-1}>
                Get in Touch
            </h1>
            <div className="md:hidden">
                <div className="slider-container w-[90%] aspect-square mx-auto mt-5">
                    <Slider {...settings}>
                        <InfoCard
                            title={messages[0].title}
                            message={messages[0].message}
                            link={messages[0].link}
                            bgColor={messages[0].bgColor}
                            icon={messages[0].icon}
                            linkTitle={messages[0].linkTitle}
                        />
                        <InfoCard
                            title={messages[1].title}
                            message={messages[1].message}
                            link={messages[1].link}
                            bgColor={messages[1].bgColor}
                            icon={messages[1].icon}
                            linkTitle={messages[1].linkTitle}
                        />
                        <InfoCard
                            title={messages[2].title}
                            message={messages[2].message}
                            link={messages[2].link}
                            bgColor={messages[2].bgColor}
                            icon={messages[2].icon}
                            linkTitle={messages[2].linkTitle}
                        />
                    </Slider>
                </div>
            </div>
            <div className="hidden md:flex px-7">
                <div className="slider-container w-1/2 aspect-square mt-5">
                    <Slider ref={sliderRef} {...settings2}>
                        <InfoCard
                            title={messages[0].title}
                            message={messages[0].message}
                            link={messages[0].link}
                            bgColor={messages[0].bgColor}
                            icon={messages[0].icon}
                            linkTitle={messages[0].linkTitle}
                            image={messages[0].image}

                        />
                        <InfoCard
                            title={messages[1].title}
                            message={messages[1].message}
                            link={messages[1].link}
                            bgColor={messages[1].bgColor}
                            icon={messages[1].icon}
                            linkTitle={messages[1].linkTitle}
                            image={messages[1].image}
                        />
                        <InfoCard
                            title={messages[2].title}
                            message={messages[2].message}
                            link={messages[2].link}
                            bgColor={messages[2].bgColor}
                            icon={messages[2].icon}
                            linkTitle={messages[2].linkTitle}
                            image={messages[2].image}
                        />
                    </Slider>
                </div>
                <div className="w-1/2 aspect-square flex flex-col justify-center items-center">
                    <button
                        className={`font-sharpsans text-lg p-2 font-bold my-4 ${
                            activeButton === 0
                                ? "border-b-2 transition-all duration-300"
                                : ""
                        }`}
                        onClick={() => goToSlide(0)}
                    >
                        Work
                    </button>
                    <button
                        className={`font-sharpsans text-lg p-2 font-bold my-4 ${
                            activeButton === 1
                                ? "border-b-2 transition-all duration-300"
                                : ""
                        }`}
                        onClick={() => goToSlide(1)}
                    >
                        Personal
                    </button>
                    <button
                        className={`font-sharpsans text-lg p-2 font-bold my-4 ${
                            activeButton === 2
                                ? "border-b-2 transition-all duration-300"
                                : ""
                        }`}
                        onClick={() => goToSlide(2)}
                    >
                        Visitors
                    </button>
                </div>
            </div>
        </div>
    );
}
