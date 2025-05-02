import Image from "next/image";
import { CardProps } from "@/types/cardType";

interface SoloCardProps {
    data: CardProps
}

export default function SoloCard({data}: SoloCardProps) {
    return (
        <>
            <div className="w-full aspect-[5/6] flex flex-col p-4 rounded-3xl bg-[#F4F4F4] md:aspect-square">
                <div className="flex-[7] flex justify-center items-center">
                    <div className="w-3/4 aspect-square relative">
                        <Image
                            src={data.src}
                            alt={data.alt}
                            fill
                            sizes="75vw"
                            className={`object-contain rounded-xl`}
                        />
                    </div>
                </div>

                <p className="text-md mt-2 text-center flex-[3] font-bold">
                    {data.maintxt}
                </p>
            </div>
        </>
    );
}
