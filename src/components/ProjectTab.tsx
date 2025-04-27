import Image from "next/image";

interface ProjectTabProps {
    bgColor: string;
    btmText: string;
    gradientIndex: 0 | 1 | 2;
}

export default function ProjectTab({ bgColor, btmText, gradientIndex }: ProjectTabProps) {
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
                className={`w-full flex flex-col items-center justify-center ${bgColor}`}
            >
                <div className="relative w-[90%] md:w-[70%] aspect-square md:aspect-[2/1] overflow-x-hidden">
                    <Image
                        src="/images/wsib-edit.jpg"
                        alt="Project Image"
                        fill
                        className="object-contain"
                    />
                    {/* Gradient Overlay, first one t-to-b, next one l-to-r */}
                    {gradientSelection[gradientIndex]}
                </div>
                <div className="font-sharpsans text-4xl text-center my-4">
                    {btmText}
                </div>
                <a
                    href="https://www.fanshawec.ca/programs/cpa3-computer-programming-and-analysis-co-op/courses-next"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit rounded-full bg-white text-black px-4 py-2 inline-block"
                >
                    Learn More
                </a>
            </div>
        </>
    );
}
