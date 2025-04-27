import ScrollBannerNav from "./ScrollBannerNav";
import ProjectTab from "./ProjectTab";

export default function ProjectsBanner() {
    const navItems = [
        "Highlight",
        "In Progress",
        "Personal",
        "College: Web Design",
        "College: C++",
        "College: Java",
    ];
    return (
        <>
            <div className="w-full bg-black text-white py-5">
                <h1 className="text-3xl font-sharpsans text-center py-3">
                    Collection of Projects
                </h1>
                <ScrollBannerNav navItems={navItems} activeBorderColor="white"/>
                <ProjectTab bgColor="bg-black" btmText="Test Text" gradientIndex={0}/>
            </div>
        </>
    );
}
