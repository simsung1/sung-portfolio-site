"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

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

const ImageCarousel = () => {
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

    const images = [
        { src: "/images/bash.png", alt: "Image 1", bgColor: 'bg-black', divContent: <div className="text-red-400 z-1 absolute top-5 left-5">Test Div</div>},
        { src: "/images/github.png", alt: "Image 2", bgColor: 'bg-yellow-400' },
        { src: "/images/react.png", alt: "Image 3", bgColor: 'bg-blue-400' },
        { src: "/images/vue.png", alt: "Image 4", bgColor: 'bg-green-200' },
    ];

    return (
        <div className="relative w-full max-w-[1440px] h-[70vh] mb-10 max-h-[640px] mx-auto md:h-[30vh] lg:h-[70vh]">
            <Slider
                {...settings}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
            >
                {images.map((img, index) => (
                    <div key={index} className="relative h-[70vh] w-full md:h-[30vh] lg:h-[70vh]">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={`object-contain ${img.bgColor}`}
                        />
                        {img.divContent}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
