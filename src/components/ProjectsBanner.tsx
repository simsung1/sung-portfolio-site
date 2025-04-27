import ScrollBannerNav from "./ScrollBannerNav";

export default function ProjectsBanner() {
    const navItems = [
        "Highlights",
        "Personal",
        "College: Web Design",
        "College: C++",
        "College: Java",
    ];
    return (
        <>
            <div className="w-full bg-black text-white pt-5">
                <h1 className="text-3xl font-sharpsans text-center py-3">
                    Collection of Projects
                </h1>
                <ScrollBannerNav navItems={navItems} activeBorderColor="white"/>
            </div>
        </>
    );
}
