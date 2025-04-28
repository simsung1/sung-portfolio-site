"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { HiDocumentDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import InfoCard from "./InfoCard";

export default function ContactBanner() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
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
            <div className="hidden md:flex">
                <div className="slider-container w-1/2 text-center aspect-square mt-5">
                    <Slider
                        ref={(slider) => {
                            sliderRef = slider;
                        }}
                        {...settings2}
                    >
                        <div key={1} className="bg-teal-100 aspect-square">
                            <h3>test1</h3>
                        </div>
                        <div key={2}>
                            <h3>Test2</h3>
                        </div>
                        <div key={3}>
                            <h3>3</h3>
                        </div>
                        <div key={4}>
                            <h3>4</h3>
                        </div>
                        <div key={5}>
                            <h3>5</h3>
                        </div>
                        <div key={6}>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
                <div
                    style={{ textAlign: "center" }}
                    className="w-1/2 aspect-square flex flex-col justify-center items-center"
                >
                    <button className="button p-2" onClick={previous}>
                        Previous
                    </button>
                    <button className="button p-2" onClick={next}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
