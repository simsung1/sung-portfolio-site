import ProjectLayout from "@/components/ProjectLayout";

export const metadata = {
    title: "OOP with Java",
    description: "Description of the Fractions calculator project.",
};

export default function JavaPage() {
    return (
        <ProjectLayout
            images={[
                "/images/java-1.png",
                "/images/java-2.png",
                "/images/java-3.png"
            ]}
            title="Fractions Calculator, Swing GUI"
            description="A major project from the Java course where we implemented a set of classes 
                        based on a provided UML diagram. Using core object-oriented programming 
                        principles (encapsulation, inheritance, polymorphism), we structured the codebase. 
                        Integrated action listeners and event handlers to build a fully functional GUI 
                        using Java’s Swing library."
            techStack={["Java"]}
            goals={[
                "Practiced overriding the built-in toString() method in custom objects to produce formatted output",
                "Explored multiple JFrame layout options within the Swing library to make the program visually appealing",
            ]}
        />
    );
}
