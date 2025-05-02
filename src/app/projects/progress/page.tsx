import ProjectLayout from "@/components/ProjectLayout";

export const metadata = {
    title: "Current Project In Progress",
    description: "Details about the project I'm currently working on.",
};

export default function InProgressPage() {
    return (
        <ProjectLayout
            images={[
                "/images/progress-1.png",
                "/images/progress-2.png",
            ]}
            title="Console-run BlackJack (Game of 21)"
            description="Building on top of a school project, I am in the progress of adding 
                        full-functionality to make it closer to the game of BlackJack. 
                        Foundational concepts of OOP, such as Encapsulation, Inheritance,
                        and Polymorphism are all practiced in this project. "
            techStack={["Java"]}
            goals={[
                "Implement a responsive carousel using react-slick",
                "Incorporate user input handling and game loop logic for turn-based decision making.",
            ]}
        />
    );
}
