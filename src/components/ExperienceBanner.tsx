import ScrollBannerNav from "./ScrollBannerNav";
import ProjectTab from "./ProjectTab";

export default function ExperienceBanner({ id }: { id: string }) {
    const navItems = [
        "WSIB",
        "Forest City Vape",
        "ChungDahm Institute",
        "Rogers",
        "University of Toronto",
    ];

    return (
        <section id={id}>
            <div className="w-full pt-5 pb-10">
                <h1 className="text-2xl font-sharpsans text-center pt-3">
                    Work Experience
                </h1>
                <ScrollBannerNav
                    navItems={navItems}
                    activeBorderColor="black"
                />
                <ProjectTab bgColor="" btmText="Test Text" gradientIndex={1}/>
            </div>
        </section>
    );
}
