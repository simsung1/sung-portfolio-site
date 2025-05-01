import ExperienceLayout from "@/components/ExperienceLayout";

export default function FCVPage() {
    return (
        <ExperienceLayout
            company="Forest City Vape"
            role="Sales Associate"
            duration="June 2024 - Current"
            responsibilities={[
                "Responsibilities include restocking inventory, handling POS transactions, and attending to customer inquiries about products.",
                "Staying up to date on product knowledge and performing opening and closing duties as a key-holder.",
            ]}
            links={[
                {
                    label: "Visit Home Page",
                    text: "Main Page",
                    href: "https://www.forestcityvape.com/",
                },
                {
                    label: "Position Posting",
                    text: "Not Available - In person",
                    href: "#",
                },
            ]}
            extras={<div>Test</div>}
        />
    );
}