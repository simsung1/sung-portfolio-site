import Image from "next/image";
import { CardProps } from "@/types/cardType";

interface DualCardProps {
    data: CardProps;
}

export default function DualCard({ data }: DualCardProps) {
    return (
        <div className="flex w-full gap-1 md:flex-col">
            <div className="w-1/2 md:w-full p-4 rounded-l-3xl md:rounded-bl-none md:rounded-t-3xl bg-[#F4F4F4] aspect-[5/6] md:aspect-[10/7] flex items-center justify-center">
                <div className="w-3/4 md:w-2/3 aspect-square relative">
                    <Image
                        src={data.src}
                        alt={data.alt}
                        fill
                        className={`object-contain rounded-xl`}
                    />
                </div>
            </div>
            <div className="w-1/2 md:w-full aspect-square p-2 rounded-r-3xl md:rounded-r-none md:rounded-b-3xl bg-[#F4F4F4] flex flex-col items-center justify-center text-center md:aspect-[10/3]">
                <p className="font-bold my-2">{data.maintxt}</p>
                <p>{data.subtxt}</p>
            </div>
        </div>
    );
}
