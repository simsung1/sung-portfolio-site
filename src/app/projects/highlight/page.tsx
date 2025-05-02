import ProjectLayout from "@/components/ProjectLayout";

export default function HighlightPage() {
    return (
        <ProjectLayout
            images={[
                "/images/portfolio-1.png",
                "/images/portfolio-2.png",
                "/images/portfolio-3.png",
                "/images/portfolio-4.png",
            ]}
            title="Portfolio Site"
            description="Using Next.js, Tailwind CSS, and Vercel, I created a
                        responsive and visually engaging portfolio site that
                        reflects my passion for full-stack development and
                        provides a smooth user experience across all devices."
            techStack={["Next.js", "Tailwind CSS", "Vercel"]}
            githubUrl="https://github.com/simsung1/sung-portfolio-site"
            goals={[
                "Implemented a responsive carousel using react-slick",
                "Learned custom domain deployment using Vercel and domain.com",
            ]}
        />
    );
}
