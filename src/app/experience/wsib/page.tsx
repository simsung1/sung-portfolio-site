import ExperienceLayout from "@/components/ExperienceLayout";

export default function WSIBPage() {
    return (
        <ExperienceLayout
            company="Workplace Safety and Insurance Board"
            role="Summer Student - Solutions Delivery"
            duration="May 2025 - Aug 2025"
            responsibilities={[
                "Responsibilities include working with senior engineers to do code reviews and shadow day-to-day activities.",
                "Provide regular updates to the direct supervisor, participate in student career-advancement seminars.",
            ]}
            links={[
                {
                    label: "Learn More about WSIB",
                    text: "About Us",
                    href: "https://www.wsib.ca/en/about-us",
                },
                {
                    label: "Position Posting",
                    text: "Details",
                    href: "https://www.wsib.ca/en/student-programs",
                },
            ]}
            extras={<div>Intership still in progress.</div>}
        />
    );
}
