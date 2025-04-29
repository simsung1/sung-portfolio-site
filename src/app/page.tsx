import Nav from "@/components/Nav";
import HeroCarousel from "@/components/HeroCarousel";
import WelcomeBanner from "@/components/WelcomeBanner";
import ProjectsBanner from "@/components/ProjectsBanner";
import ExperienceBanner from "@/components/ExperienceBanner";
import ContactBanner from "@/components/ContactBanner";
import Footer  from "@/components/Footer";
import { images } from "@/data/carouselImages";
import { workExperiences } from "@/data/workExperience";
import { projExperiences } from "@/data/projectExperience";

export default function Home() {
    return (
        <div>
            <Nav />
            <HeroCarousel images={images} />
            <WelcomeBanner id="about" />
            <ExperienceBanner id="experience" experiences={workExperiences} />
            <ProjectsBanner id="projects" experiences={projExperiences}/>
            <ContactBanner id="contact" />
            <Footer />
        </div>
    );
}
