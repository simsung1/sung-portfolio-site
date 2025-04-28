import Nav from "@/components/Nav";
import HeroCarousel from "@/components/HeroCarousel";
import WelcomeBanner from "@/components/WelcomeBanner";
import ProjectsBanner from "@/components/ProjectsBanner";
import ExperienceBanner from "@/components/ExperienceBanner";
import ContactBanner from "@/components/ContactBanner";
import Footer  from "@/components/Footer";
import { images } from "@/data/carouselImages";

export default function Home() {
    return (
        <div>
            <Nav />
            <HeroCarousel images={images} />
            <WelcomeBanner />
            <ProjectsBanner />
            <ExperienceBanner />
            <ContactBanner />
            <Footer />
        </div>
    );
}
