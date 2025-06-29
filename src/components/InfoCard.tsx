import React from "react";
import { InfoCardProps } from "@/types/contactType";

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    message,
    link,
    image,
    icon,
    bgColor = 'bg-[#cee7f5]',
    linkTitle = 'Visit Link'
}) => {
    return (
        <div className={`${bgColor} aspect-square rounded-3xl p-4`}>
            <div className="flex flex-col items-center justify-around h-full">
                <h2 className="text-xl font-bold text-center">{title}</h2>
                <p className="lg:px-10">{message}</p>
                <div className="hidden lg:block w-1/2 z-1 aspect-[2/1] relative rounded-lg overflow-hidden">
                    {image}
                </div>
                <div className="flex mx-auto p-1 border border-black rounded-md hover:bg-white">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={linkTitle}
                    >
                        {icon}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
