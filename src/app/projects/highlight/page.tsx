"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

const NextArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute right-4 top-1/2 z-10 cursor-pointer text-white hidden md:block border rounded-full border-white bg-black opacity-25"
        >
            <ChevronRightIcon className="size-6" />
        </div>
    );
};

const PrevArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute left-4 top-1/2 z-10 cursor-pointer text-white hidden md:block border rounded-full border-white bg-black opacity-25"
        >
            <ChevronLeftIcon className="size-6" />
        </div>
    );
};

export default function HighlightPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="p-6 md:p-10 lg:p-15">
            <div className="mt-5 md:mt-10 w-full flex flex-col sm:flex-row items-center gap-5">
                <div className="relative w-full sm:w-1/2 md:max-w-[1440px] h-[40vh] md:h-auto md:aspect-[2.25/1]">
                    <Slider
                        {...settings}
                        nextArrow={<NextArrow />}
                        prevArrow={<PrevArrow />}
                    >
                        <div className="relative w-full h-[40vh] max-w-[1440px] mx-auto z-0">
                            <Image
                                src="/images/wsib-edit.jpg"
                                alt="wsib"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="relative w-full h-[40vh] max-w-[1440px] mx-auto">
                            <Image
                                src="/images/wsib-edit.jpg"
                                alt="wsib"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="relative w-full h-[40vh] max-w-[1440px] mx-auto">
                            <Image
                                src="/images/wsib-edit.jpg"
                                alt="wsib"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Slider>
                </div>
                <div className="mt-15 sm:mt-0 flex flex-col gap-4 items-center md:items-start">
                    <h2 className="font-sharpsans text-2xl">Details</h2>
                    <h4 className="font-bold text-2xl my-2">Portfolio Site</h4>
                    <p className="text-left">
                        Using Next.js, Tailwind CSS, and Vercel, I created a a
                        responsive and visually engaging portfolio site that
                        reflects my passion for full-stack development and
                        provides a smooth user experience across all devices.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
                            Next.js
                        </span>
                        <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
                            Tailwind CSS
                        </span>
                        <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
                            Vercel
                        </span>
                    </div>
                    <a
                        href="https://github.com/simsung1"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Check out my Github"
                    >
                        <FaGithub size={25} />
                    </a>
                    <h2 className="font-sharpsans text-2xl my-2">
                        Project Goals
                    </h2>
                    <ul className="list-disc px-4">
                        <li>
                            Implemented a responsive carousel using react-slick
                        </li>
                        <li>
                            Learned custom domain deployment using Vercel and
                            domain.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
