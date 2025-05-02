import ProjectLayout from "@/components/ProjectLayout";

export default function WebDesignPage() {
    return (
        <ProjectLayout
            images={[
                "/images/info1217-1.png",
                "/images/info1217-2.png",
                "/images/info1217-3.png"
            ]}
            title="Web Design Class Projects"
            description="The collection of pictures show the concepts we practiced in class:
                        Flexbox, Grid, Responsive design, SEO optimization, and CSS Animations.
                        The course made me develop a deeper appreciation for the evolution
                        of web development."
            techStack={["HTML", "CSS"]}
            goals={[
                "Responsive Design Lab: create website with a 'mobile first' design concept using media queries",
                "Build foundations of CSS to learn Sass over the summer",
            ]}
        />
    );
}
