import ScrollBannerNav from "./ScrollBannerNav";
import ProjectTab from "./ProjectTab";

export default function ProjectsBanner({ id }: { id: string }) {
    const navItems = [
        "Highlight",
        "In Progress",
        "Personal",
        "College: Web Design",
        "College: C++",
        "College: Java",
    ];
    return (
        <section id={id}>
            <div className="w-full bg-black text-white pt-5 pb-10">
                <h1 className="text-2xl font-sharpsans text-center pt-3">
                    Collection of Projects
                </h1>
                <ScrollBannerNav navItems={navItems} activeBorderColor="white"/>
                <ProjectTab bgColor="bg-black" btmText="Test Text" gradientIndex={0}/>
            </div>
        </section>
    );
}
