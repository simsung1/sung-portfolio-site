import ProjectLayout from "@/components/ProjectLayout";

export const metadata = {
    title: "Momentum Project",
    description: "Upcoming poject to be completed with other students.",
};

export default function PersonalPage() {
    return (
        <ProjectLayout
            images={[
                "/images/mariokart.avif",
                "/images/mariokart.avif",
            ]}
            title="Momentum Project"
            description="What started off as a personal project for additional SQL practice 
                        has fortunately led to an opportunity to collaborate with classmates
                        and a professor over the summer! Though I cannot share any details 
                        yet, once the project is published, I will upload pictures and share 
                        more details."
            techStack={["Python", "MySQL"]}
            goals={[
                "Develop an app for the Western Soccer Team",
                "Details to be released",
            ]}
        />
    );
}
