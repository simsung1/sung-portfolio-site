import Image from "next/image";

export default function SoloCard() {
    return (
        <>
            <div className="w-[calc(50%-0.5rem)] aspect-[5/6] flex flex-col p-4 rounded-3xl bg-[#F4F4F4] ">
                <div className="relative flex-[8]">
                    <Image
                        src="/images/tabs10.avif"
                        alt="tabs10 tablet"
                        fill
                        className={`object-contain`}
                    />
                </div>

                <p className="text-lg mt-2 text-center flex-[2]">Test the font here</p>
            </div>
        </>
    );
}
