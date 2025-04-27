import ScrollBannerNav from "./ScrollBannerNav";
import DualCard from "./DualCard";
import SoloCard from "./SoloCard";

export default function WelcomeBanner() {
    const navItems = ["Overview", "Education", "Hobbies"];
    return (
        <>
            <div className="w-full">
                <h1 className="text-3xl font-sharpsans text-center py-3">
                    Hi, I&apos;m Sung
                </h1>
                <ScrollBannerNav navItems={navItems} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 w-screen">
                    <div className="col-span-2 md:row-span-2">
                        <DualCard />
                    </div>
                    <div className="col-span-1">
                        <SoloCard />
                    </div>
                    <div className="col-span-1">
                        <SoloCard />
                    </div>
                    <div className="col-span-1">
                        <SoloCard />
                    </div>
                    <div className="col-span-1">
                        <SoloCard />
                    </div>
                </div>
            </div>
        </>
    );
}
