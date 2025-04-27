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
        { src: "/images/wsib-edit.jpg", alt: "WSIB Logo with Summer Student text", styling: "object-contain object-bottom px-10 pb-5 md:object-right", bgColor: 'bg-[#2A3452]', divContent: <div className="text-white text-center z-1 absolute top-15 md:top-1/3 md:w-3/5 lg:w-1/2 md:left-5"><div className="font-sharpsans text-3xl ">Summer Student Position Starting in MAY</div><div className="text-xl mt-2">IT Service Delivery</div></div>},
        { src: "/images/fanshawecampus.jpg", alt: "Fanshawe College T building", styling: "object-cover brightness-50", divContent: <div className="text-white text-center z-1 absolute top-15 md:top-1/3 md:w-3/5 lg:w-1/2 lg:left-5 flex flex-col items-center"><div className="font-sharpsans text-3xl ">First Year of CPA3 Program <span className="text-red-600">Completed</span></div><div className="text-xl mt-2 text-white">Second Year Starts Sept 2025</div><a href="#" target="_blank" rel="noopener noreferrer" className="mt-10 md:mt-3 w-fit rounded-full bg-white text-black p-4">Learn More</a></div>},
        { src: "/images/fcvlogo.jpg", alt: "Forest City Vape Logo", styling: "object-contain object-bottom px-10 pb-5 md:object-right", bgColor: 'bg-[#5B7E55]', divContent: <div className="text-white text-center z-1 absolute top-1/3 md:w-3/5 lg:w-1/2 md:left-10 flex flex-col items-center"><div className="font-sharpsans text-3xl ">Celebrating One Year with FCV</div><div className="text-xl mt-2">Thank you to the team for the amazing support!</div><a href="#" target="_blank" rel="noopener noreferrer" className="mt-5 md:mt-3 w-fit rounded-full bg-black text-white p-4">Learn More</a></div> },
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
                    <div key={index} className={`relative h-[70vh] w-full md:h-[30vh] lg:h-[70vh] ${img.bgColor}`}>
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

export default ImageCarousel;
