import { CarouselImage } from "@/types/carouselImage";

export const images: CarouselImage[] = [
    {
        src: "/images/wsib-edit.jpg",
        alt: "WSIB Logo with Summer Student text",
        styling: "object-contain object-bottom px-10 pb-5 md:object-right",
        bgColor: "bg-[#2A3452]",
        divContent: (
            <div className="text-white text-center z-1 absolute top-15 md:top-1/3 md:w-3/5 lg:w-1/2 md:left-15 md:text-left">
                <div className="font-sharpsans text-3xl ">
                    Summer Student Position Starting in MAY 2025
                </div>
                <div className="text-xl mt-2">IT Service Delivery</div>
            </div>
        ),
    },
    {
        src: "/images/fanshawecampus.jpg",
        alt: "Fanshawe College T building",
        styling: "object-cover brightness-50",
        divContent: (
            <div className="text-white text-center z-1 absolute top-15 md:top-1/3 md:w-3/5 lg:w-1/2 md:left-15 flex flex-col items-center md:block md:text-left">
                <div className="font-sharpsans text-3xl ">
                    First Year of CPA3 Program{" "}
                    <span className="text-red-600">Completed</span>
                </div>
                <div className="text-xl mt-2 text-white">
                    Second Year Starts Sept 2025
                </div>
                <a
                    href="https://www.fanshawec.ca/programs/cpa3-computer-programming-and-analysis-co-op/courses-next"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 lg:mt-10 w-fit rounded-full bg-white text-black px-4 py-2 inline-block"
                >
                    Learn More
                </a>
            </div>
        ),
    },
    {
        src: "/images/fcvlogo.jpg",
        alt: "Forest City Vape Logo",
        styling: "object-contain object-bottom px-10 pb-5 md:object-right",
        bgColor: "bg-[#5B7E55]",
        divContent: (
            <div className="text-white text-center px-10 md:px-0 z-1 absolute top-1/3 md:w-3/5 lg:w-1/2 md:text-left md:left-15 flex flex-col items-center md:block">
                <div className="font-sharpsans text-3xl ">
                    Celebrating One Year with FCV
                </div>
                <div className="text-xl mt-2">
                    Thank you to the team for the amazing support!
                </div>
                <a
                    href="https://www.forestcityvape.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 lg:mt-10 w-fit rounded-full bg-black text-white px-4 py-2 inline-block"
                >
                    Learn More
                </a>
            </div>
        ),
    },
    {
        src: "/images/homescreenshot.png",
        alt: "Screenshot of portfolio page in ipad mini view",
        styling:
            "object-contain object-bottom px-10 pb-5 md:object-right pt-1/2 brightness-50",
        bgColor: "bg-[#3C3C3C]",
        divContent: (
            <div className="text-white text-center z-1 absolute px-2 top-15 md:top-1/3 md:w-3/5 lg:w-1/2 md:left-15 md:text-left">
                <div className="font-sharpsans text-3xl ">
                    Portfolio Site Launched <br />
                    🎉
                </div>
                <div className="text-xl mt-2 px-2 md:px-0">
                    Inspired by Samsung Canada&apos;s Site.
                    <br/>
                    Here&apos;s to more successful projects in the future 🥂
                </div>
            </div>
        ),
    },
];
