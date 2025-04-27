import Image from "next/image";

export default function DualCard() {
    return (
        <div className="flex w-full gap-1 md:flex-col">
            <div className="w-1/2 md:w-full p-4 rounded-l-3xl md:rounded-bl-none md:rounded-t-3xl bg-[#F4F4F4] relative aspect-[5/6] md:aspect-[10/7]">
                <Image
                    src="/images/tabs10.avif"
                    alt="tabs10 tablet"
                    fill
                    className={`object-contain`}
                />
            </div>
            <div className="w-1/2 md:w-full aspect-square p-2 rounded-r-3xl md:rounded-r-none md:rounded-b-3xl bg-[#F4F4F4] flex items-center justify-center md:aspect-[10/3]">
                <p className="font-bold">bye</p>
            </div>
        </div>
    );
}
