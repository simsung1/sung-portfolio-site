"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface CarouselImage {
    src: string;
    alt: string;
    styling?: string;
    bgColor?: string;
    divContent?: React.ReactNode;
}

interface ImageCarouselProps {
    images: CarouselImage[];
}

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

const HeroCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
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
        <div className="relative w-full max-w-[1440px] h-[70vh] md:h-auto mx-auto md:aspect-[2.25/1]">
            <Slider
                {...settings}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
            >
                {images.map((img, index) => (
                    <div key={index} className={`relative w-full max-w-[1440px] h-[70vh] md:h-auto mx-auto md:aspect-[2.25/1] ${img.bgColor}`}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={img.styling}
                        />
                        {img.divContent}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroCarousel;
