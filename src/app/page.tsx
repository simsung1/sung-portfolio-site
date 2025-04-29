import Nav from "@/components/Nav";
import HeroCarousel from "@/components/HeroCarousel";
import WelcomeBanner from "@/components/WelcomeBanner";
import ProjectsBanner from "@/components/ProjectsBanner";
import ExperienceBanner from "@/components/ExperienceBanner";
import ContactBanner from "@/components/ContactBanner";
import Footer  from "@/components/Footer";
import { images } from "@/data/carouselImages";
import { experiences } from "@/data/workExperience";

export default function Home() {
    console.log(experiences);
    return (
        <div>
            <Nav />
            <HeroCarousel images={images} />
            <WelcomeBanner id="about" />
            <ExperienceBanner id="experience" experiences={experiences} />
            <ProjectsBanner id="projects" />
            <ContactBanner id="contact" />
            <Footer />
        </div>
    );
}
