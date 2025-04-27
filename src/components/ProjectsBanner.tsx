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
            <div>
                <div className="w-full">
                    <h1 className="text-3xl font-sharpsans text-center py-3">
                        Collection of Projects
                    </h1>
                    <ScrollBannerNav navItems={navItems} />
                </div>
            </div>
        </>
    );
}
