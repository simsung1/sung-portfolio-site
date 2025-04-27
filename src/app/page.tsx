import Nav from "@/components/Nav";
import ImageCarousel from "@/components/ImageCarousel";
import WelcomeBanner from "@/components/WelcomeBanner";
import { images } from "@/data/carouselImages";

export default function Home() {
//   const images = [
//     { src: "/images/wsib-edit.jpg", alt: "WSIB Logo with Summer Student text", styling: "object-contain object-bottom px-10 pb-5 md:object-right", bgColor: 'bg-[#2A3452]', divContent: <div className="text-white text-center z-1 absolute top-15 md:top-1/3 md:w-3/5 lg:w-1/2 md:left-15 md:text-left"><div className="font-sharpsans text-3xl ">Summer Student Position Starting in MAY</div><div className="text-xl mt-2">IT Service Delivery</div></div>},
//     { src: "/images/fanshawecampus.jpg", alt: "Fanshawe College T building", styling: "object-cover brightness-50", divContent: <div className="text-white text-center z-1 absolute top-15 md:top-1/3 md:w-3/5 lg:w-1/2 md:left-15 flex flex-col items-center md:block md:text-left"><div className="font-sharpsans text-3xl ">First Year of CPA3 Program <span className="text-red-600">Completed</span></div><div className="text-xl mt-2 text-white">Second Year Starts Sept 2025</div><a href="#" target="_blank" rel="noopener noreferrer" className="mt-5 lg:mt-10 w-fit rounded-full bg-white text-black px-4 py-2 inline-block">Learn More</a></div>},
//     { src: "/images/fcvlogo.jpg", alt: "Forest City Vape Logo", styling: "object-contain object-bottom px-10 pb-5 md:object-right", bgColor: 'bg-[#5B7E55]', divContent: <div className="text-white text-center z-1 absolute top-1/3 md:w-3/5 lg:w-1/2 md:text-left md:left-15 flex flex-col items-center md:block"><div className="font-sharpsans text-3xl ">Celebrating One Year with FCV</div><div className="text-xl mt-2">Thank you to the team for the amazing support!</div><a href="#" target="_blank" rel="noopener noreferrer" className="mt-5 lg:mt-10 w-fit rounded-full bg-black text-white px-4 py-2 inline-block">Learn More</a></div> },
//     { src: "/images/vue.png", alt: "Image 4", bgColor: 'bg-green-200' },
// ];

    return (
        <div>
            <Nav />
            <ImageCarousel images={images}/>
            <WelcomeBanner />
        </div>
    );
}
