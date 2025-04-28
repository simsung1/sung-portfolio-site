import React from "react";

interface InfoCardProps {
    title: string;
    message: string;
    link: string;
    icon?: React.ReactNode;
    bgColor?: string;
    linkTitle?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    message,
    link,
    icon,
    bgColor = 'bg-[#cee7f5]',
    linkTitle = 'Visit Link'
}) => {
    return (
        <div className={`${bgColor} aspect-square rounded-3xl p-4`}>
            <div className="flex flex-col items-center justify-between h-full">
                <h2 className="text-xl font-bold text-center">{title}</h2>
                <p>{message}</p>
                <div className="flex mx-auto">
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
