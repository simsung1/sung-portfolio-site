import ExperienceLayout from "@/components/ExperienceLayout";

export default function UofTPage() {
    return (
        <ExperienceLayout
            company="University of Toronto"
            role="Student Librarian Assistant"
            duration="Sept 2021 - Oct 2022"
            responsibilities={[
                "Helped organize the library backroom, alphabetizing and sorting media files and hardware.",
                "Loaned out library material and prepared study rooms and lecture rooms for bookings.",
            ]}
            links={[
                {
                    label: "Visit Home Page",
                    text: "Main Page",
                    href: "https://www.utoronto.ca/",
                },
                {
                    label: "Position Posting",
                    text: "Library Student Jobs",
                    href: "https://onesearch.library.utoronto.ca/student-jobs",
                },
            ]}
            extras={<div>Test</div>}
        />
    );
}