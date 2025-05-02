import ProjectLayout from "@/components/ProjectLayout";

export const metadata = {
    title: "Introductory C++ Course",
    description: "Details about a project assigned in a previous C++ course.",
};

export default function CPPPage() {
    return (
        <ProjectLayout
            images={[
                "/images/stockstats-1.png",
                "/images/stockstats-2.png",
                "/images/stockstats-3.png"
            ]}
            title="Stock Statistics Console Program"
            description="Read data from a .csv file via command line and performed 
                        calculations on stock market data, including mean, median, 
                        standard deviation, and variance using provided formulas. 
                        Practiced structured output formatting using std::cout."
            techStack={["C++ 20"]}
            goals={[
                "Practice formatting output, showing values to one decimal place, and using locale to group numbers by commas",
                "Separation of code into header files and cpp files for project organization",
            ]}
        />
    );
}
