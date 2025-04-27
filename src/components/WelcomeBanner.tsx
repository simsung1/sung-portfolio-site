import ScrollBannerNav from "./ScrollBannerNav"
import DualCard from "./DualCard";

export default function WelcomeBanner() {
    
    const navItems = ["Overview", "Education", "Hobbies"];
    return (
       <>
        <div className="">
            <h1 className="text-3xl font-sharpsans text-center py-3">Hi, I&apos;m Sung</h1>
            <ScrollBannerNav navItems={navItems}/>
            <DualCard />
        </div>
       </>
    )
}