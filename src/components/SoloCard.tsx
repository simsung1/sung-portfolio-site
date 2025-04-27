import Image from "next/image";

export default function SoloCard() {
    return (
        <>
            <div className="w-full aspect-[5/6] flex flex-col p-4 rounded-3xl bg-[#F4F4F4] md:aspect-square">
                <div className="relative flex-[8]">
                    <Image
                        src="/images/tabs10.avif"
                        alt="tabs10 tablet"
                        fill
                        className={`object-contain`}
                    />
                </div>

                <p className="text-lg mt-2 text-center flex-[2] font-bold">Test the font here</p>
            </div>
        </>
    );
}
