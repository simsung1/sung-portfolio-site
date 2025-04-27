import ScrollBannerNav from "./ScrollBannerNav";
import ProjectTab from "./ProjectTab";

export default function ExperienceBanner() {
    const navItems = [
        "WSIB",
        "Forest City Vape",
        "ChungDahm Institute",
        "Rogers",
        "University of Toronto",
    ];

    return (
        <>
            <div className="w-full py-5">
                <h1 className="text-3xl font-sharpsans text-center py-3">
                    Work Experience
                </h1>
                <ScrollBannerNav
                    navItems={navItems}
                    activeBorderColor="black"
                />
                <ProjectTab bgColor="" btmText="Test Text" gradientIndex={1}/>
            </div>
        </>
    );
}
