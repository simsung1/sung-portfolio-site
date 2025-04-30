import Image from "next/image";
import { WorkExperience } from "@/types/workExperience";

interface ProjectTabProps {
    experience: WorkExperience;
}

export default function ProjectTab({ experience }: ProjectTabProps) {
    const gradientSelection: React.ReactNode[] = [
        <>
            <div
                className="absolute inset-0 pointer-events-none 
          bg-[linear-gradient(to_bottom,black_0%,transparent_10%,transparent_90%,black_100%)] 
          opacity-100"
            />
            <div
                className="absolute inset-0 pointer-events-none 
          bg-[linear-gradient(to_right,black_0%,transparent_10%,transparent_90%,black_100%)] 
          opacity-100"
            />
        </>,
        <>
            <div
                className="absolute inset-0 pointer-events-none 
            bg-[linear-gradient(to_bottom,white_0%,transparent_10%,transparent_90%,white_100%)] 
            opacity-100"
            />
            <div
                className="absolute inset-0 pointer-events-none 
            bg-[linear-gradient(to_right,white_0%,transparent_10%,transparent_90%,white_100%)] 
            opacity-100"
            />
        </>,
        <>
            <div
                className="absolute inset-0 pointer-events-none 
          bg-[linear-gradient(to_bottom,#F4F4F4_0%,transparent_10%,transparent_90%,#F4F4F4_100%)] 
          opacity-100"
            />
            <div
                className="absolute inset-0 pointer-events-none 
          bg-[linear-gradient(to_right,#F4F4F4_0%,transparent_10%,transparent_90%,#F4F4F4_100%)] 
          opacity-100"
            />
        </>,
    ];

    return (
        <>
            <div
                className={`w-full flex flex-col items-center justify-center ${experience.bgColor}`}
            >
                <div className="relative w-[90%] md:w-[70%] aspect-square md:aspect-[2/1] overflow-x-hidden">
                    <Image
                        src={experience.imgsrc}
                        alt={experience.imgalt}
                        fill
                        className="object-contain"
                    />
                    {/* Gradient Overlay, first one t-to-b, next one l-to-r */}
                    {experience.gradientIndex!= null && gradientSelection[experience.gradientIndex]}
                </div>
                <div className="font-sharpsans text-4xl text-center my-4 px-3">
                    {experience.btmTitle}
                </div>
                <div className="text-lg text-center mb-4 px-3">
                    {experience.btmText}
                </div>
                <a
                    href={experience.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit rounded-full bg-white text-black px-4 py-2 inline-block border border-white transition-all duration-200 hover:bg-black hover:text-white"
                >
                    Learn More
                </a>
            </div>
        </>
    );
}
