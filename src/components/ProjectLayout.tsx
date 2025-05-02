"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

interface ProjectHighlightProps {
    images: string[];
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    goals: string[];
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
        onClick={onClick}
        className="absolute right-4 top-1/2 z-10 cursor-pointer text-white hidden md:block border rounded-full border-white bg-black opacity-25"
    >
        <ChevronRightIcon className="size-6" />
    </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
        onClick={onClick}
        className="absolute left-4 top-1/2 z-10 cursor-pointer text-white hidden md:block border rounded-full border-white bg-black opacity-25"
    >
        <ChevronLeftIcon className="size-6" />
    </div>
);

export default function ProjectLayout({
    images,
    title,
    description,
    techStack,
    githubUrl,
    goals = [],
}: ProjectHighlightProps) {
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
                    <Slider {...settings}>
                        {images.map((src, idx) => (
                            <div
                                key={idx}
                                className="relative w-full h-[40vh] max-w-[1440px] mx-auto"
                            >
                                <Image
                                    src={src}
                                    alt={`project-${idx}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="mt-15 sm:mt-0 flex flex-col gap-4 items-center md:items-start">
                    <h2 className="font-sharpsans text-2xl">Details</h2>
                    <h4 className="font-bold text-2xl my-2">{title}</h4>
                    <p className="text-left">{description}</p>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-sm bg-gray-200 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Check out my Github"
                        >
                            <FaGithub size={25} />
                        </a>
                    )}

                    <h2 className="font-sharpsans text-2xl my-2">
                        Project Goals
                    </h2>
                    <ul className="list-disc px-4">
                        {goals.map((goal, idx) => (
                            <li key={idx}>{goal}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
