import { InfoCardProps } from "@/types/contactType";
import { HiDocumentDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";

export const messages: InfoCardProps[] = [
    {
        title: "Hiring Managers and Recruiters",
        message:
            "Thank you for taking the time to navigate my portfolio! I'm an aspiring Full-Stack Developer with a string interest in Mobile app development as well. I try to make the software that I create as intuitive as possible. I hope you will consider my application to join your team, or if you're a recruiter, I'd love to hear from you as well! Always open to discussing projects, internships, or full-time roles.",
        link: "/files/SMS Resume.pdf",
        bgColor: "bg-[#F4F4F4]",
        icon: <HiDocumentDownload size={25} />,
        linkTitle: "Download My Resume",
        image: (
            <Image
                src="/images/skills.png"
                alt="Tech Stack Skills"
                fill
                className={`object-contain`}
            />
        ),
    },
    {
        title: "Friends, Classmates, Family",
        message:
            "I finally completed my portfolio site! I know I said I was working on it for a while,so now it's nice to finally have it complete. If you want help making your own personal site, send me a message and I'd love to discuss it with you. I'll consider a friends-and-family discount 😉",
        link: "https://www.instagram.com/sim.sung/",
        icon: <RiInstagramFill size={25} />,
        linkTitle: "Message me on Instagran",
        image: (
            <Image
                src="/images/friends.jpg"
                alt="Friends around a piano"
                fill
                className={`object-cover`}
            />
        ),
    },
    {
        title: "Visitors from Across the Globe",
        message:
            "Nice to meet you! I hope you found some inspiration for your own portfolio site or just enjoyed browsing through. I found my inspiration on Reddit when I saw someone's portfolio site designed like Netflix's site. Since my name (Sim, Sung) is close to Samsung, I decided to copy Samsung Canada's site. If you want to reach out to say hello, please feel free to do so!",
        link: "mailto:funnito@gmail.com",
        bgColor: "bg-orange-100",
        icon: <MdEmail size={25} />,
        linkTitle: "Send me a personal email",
        image: (
            <Image
                src="/images/globe.png"
                alt="Earth Clipart"
                fill
                className={`object-contain`}
            />
        ),
    },
];
