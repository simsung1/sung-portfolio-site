import ScrollBannerNav from "./ScrollBannerNav"

export default function WelcomeBanner() {
    
    const navItems = ["Overview", "Education", "Hobbies"];
    return (
       <>
        <div className="my-10">
            <h1 className="text-3xl font-sharpsans text-center mb-5">Hi, I&apos;m Sung</h1>
            <ScrollBannerNav navItems={navItems}/>
        </div>
       </>
    )
}