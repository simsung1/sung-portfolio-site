import ScrollBannerNav from "./ScrollBannerNav";
import DualCard from "./DualCard";
import SoloCard from "./SoloCard";

export default function WelcomeBanner({ id }: { id: string }) {
    const navItems = ["Overview", "Education", "Hobbies"];
    return (
        <section id={id}>
            <div className="w-full mt-10 mb-4">
                <h1 className="text-2xl font-sharpsans text-center pt-3">
                    Hi, I&apos;m Sung
                </h1>
                <ScrollBannerNav navItems={navItems} activeBorderColor="black"/>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-2 *:w-full">
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
        </section>
    );
}
