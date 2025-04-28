"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { HiDocumentDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import InfoCard from "./InfoCard";

export default function ContactBanner() {
    const sliderRef = useRef<Slider | null>(null);
    const [activeButton, setActiveButton] = useState<number>(0);

    const goToSlide = (index: number) => {
        sliderRef.current?.slickGoTo(index);
    };

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        swipeToSlide: true,
        dots: true,
    };

    const settings2 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current: number) => {
            setActiveButton(current);
        }
    };
    return (
        <div className="py-5 mb-2">
            <h1 className="text-2xl font-sharpsans text-center pt-3">
                Get in Touch
            </h1>
            <div className="md:hidden">
                <div className="slider-container w-[90%] aspect-square mx-auto mt-5">
                    <Slider {...settings}>
                        <InfoCard
                            title="Hiring Managers and Recruiters"
                            message="Thank you for taking the time to navigate my
                                    portfolio! I'm an aspiring Full-Stack
                                    Developer with a string interest in Mobile
                                    app development as well. I try to make the
                                    software that I create as intuitive as
                                    possible.
                                    I hope you will consider my
                                    application to join your team, or if
                                    you're a recruiter, I'd love to
                                    hear from you as well! Always open to
                                    discussing projects, internships, or
                                    full-time roles."
                            link="/files/SMS Resume.pdf"
                            bgColor="bg-[#F4F4F4]"
                            icon={<HiDocumentDownload size={25} />}
                            linkTitle="Download My Resume"
                        />
                        <InfoCard
                            title="Friends, Classmates, Family"
                            message="I finally completed my portfolio site! I
                                    know I said I was working on it for a while,
                                    so now it's nice to finally have it
                                    complete. If you want help making your own
                                    personal site, send me a message and
                                    I'd love to discuss it with you.
                                    I'll consider a friends-and-family
                                    discount 😉"
                            link="https://www.instagram.com/sim.sung/"
                            icon={<RiInstagramFill size={25} />}
                            linkTitle="Message me on Instagran"
                        />
                        <InfoCard
                            title="Visitors from Across the Globe"
                            message="Nice to meet you! I hope you found some
                                    inspiration for your own portfolio site or
                                    just enjoyed browsing through. I found my
                                    inspiration on Reddit when I saw
                                    someone's portfolio site designed like
                                    Netflix's site.
                                    If you want to reach out to say hello,
                                    please feel free to do so!"
                            link="mailto:funnito@gmail.com"
                            bgColor="bg-orange-100"
                            icon={<MdEmail size={25} />}
                            linkTitle="Send me a personal email"
                        />
                    </Slider>
                </div>
            </div>
            <div className="hidden md:flex px-7">
                <div className="slider-container w-1/2 aspect-square mt-5">
                    <Slider
                        ref={sliderRef}
                        {...settings2}
                    >
                        <InfoCard
                            title="Hiring Managers and Recruiters"
                            message="Thank you for taking the time to navigate my
                                    portfolio! I'm an aspiring Full-Stack
                                    Developer with a string interest in Mobile
                                    app development as well. I try to make the
                                    software that I create as intuitive as
                                    possible.
                                    I hope you will consider my
                                    application to join your team, or if
                                    you're a recruiter, I'd love to
                                    hear from you as well! Always open to
                                    discussing projects, internships, or
                                    full-time roles."
                            link="/files/SMS Resume.pdf"
                            bgColor="bg-[#F4F4F4]"
                            icon={<HiDocumentDownload size={25} />}
                            linkTitle="Download My Resume"
                        />
                        <InfoCard
                            title="Friends, Classmates, Family"
                            message="I finally completed my portfolio site! I
                                    know I said I was working on it for a while,
                                    so now it's nice to finally have it
                                    complete. If you want help making your own
                                    personal site, send me a message and
                                    I'd love to discuss it with you.
                                    I'll consider a friends-and-family
                                    discount 😉"
                            link="https://www.instagram.com/sim.sung/"
                            icon={<RiInstagramFill size={25} />}
                            linkTitle="Message me on Instagran"
                        />
                        <InfoCard
                            title="Visitors from Across the Globe"
                            message="Nice to meet you! I hope you found some
                                    inspiration for your own portfolio site or
                                    just enjoyed browsing through. I found my
                                    inspiration on Reddit when I saw
                                    someone's portfolio site designed like
                                    Netflix's site.
                                    If you want to reach out to say hello,
                                    please feel free to do so!"
                            link="mailto:funnito@gmail.com"
                            bgColor="bg-orange-100"
                            icon={<MdEmail size={25} />}
                            linkTitle="Send me a personal email"
                        />
                    </Slider>
                </div>
                <div
                    className="w-1/2 aspect-square flex flex-col justify-center items-center"
                >
                    <button className={`font-sharpsans text-lg p-2 font-bold my-4 ${activeButton === 0 ? 'border-b-2 transition-all duration-300' : ''}`} onClick={() => goToSlide(0)}>
                        Work
                    </button>
                    <button className={`font-sharpsans text-lg p-2 font-bold my-4 ${activeButton === 1 ? 'border-b-2 transition-all duration-300' : ''}`} onClick={() => goToSlide(1)}>
                        Personal
                    </button>
                    <button className={`font-sharpsans text-lg p-2 font-bold my-4 ${activeButton === 2 ? 'border-b-2 transition-all duration-300' : ''}`} onClick={() => goToSlide(2)}>
                        Visitors
                    </button>
                </div>
            </div>
        </div>
    );
}
