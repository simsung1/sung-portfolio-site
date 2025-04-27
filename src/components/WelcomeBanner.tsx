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
                <div className="flex flex-wrap w-screen gap-4 px-6">
                    <DualCard />
                    <SoloCard />
                    <SoloCard />
                    <SoloCard />
                    <SoloCard />
                </div>
            </div>
        </>
    );
}
