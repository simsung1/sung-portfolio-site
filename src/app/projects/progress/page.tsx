import ProjectLayout from "@/components/ProjectLayout";

export default function InProgressPage() {
    return (
        <ProjectLayout
            images={[
                "/images/portfolio-1.png",
                "/images/portfolio-2.png",
                "/images/portfolio-3.png",
                "/images/portfolio-4.png",
            ]}
            title="Console-run BlackJack (Game of 21)"
            description="Building on top of a school project, I am in the progress of adding 
                        full-functionality to make it closer to the game of BlackJack. 
                        Foundational concepts of OOP, such as Encapsulation, Inheritance,
                        and Polymorphism are all practiced in this project. "
            techStack={["Java"]}
            goals={[
                "Implemented a responsive carousel using react-slick",
                "Incorporates user input handling and game loop logic for turn-based decision making.",
            ]}
        />
    );
}
