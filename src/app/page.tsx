import Nav from "@/components/Nav";
import ImageCarousel from "@/components/ImageCarousel";
import WelcomeBanner from "@/components/WelcomeBanner";
import ProjectsBanner from "@/components/ProjectsBanner";
import { images } from "@/data/carouselImages";

export default function Home() {
    return (
        <div>
            <Nav />
            <ImageCarousel images={images} />
            <WelcomeBanner />
            <ProjectsBanner />
        </div>
    );
}
