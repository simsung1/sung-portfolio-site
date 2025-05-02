import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
    title: "Rogers Associate Experience - Sung",
    description: "My experience with Rogers as a sales associate in Toronto",
};

export default function RogersPage() {
    return (
        <ExperienceLayout
            company="Rogers Communications"
            role="Sales Associate"
            duration="Jan 2022 - Feb 2023"
            responsibilities={[
                "Resolved customer account issues and promoted wireless sales with add-ons such as device protection.",
                "Stayed up-to-date on supplementary training and best sales practices.",
            ]}
            links={[
                {
                    label: "Visit Home Page",
                    text: "Main Page",
                    href: "https://www.rogers.com/",
                },
                {
                    label: "Position Posting",
                    text: "Sales Associate",
                    href: "https://jobs.rogers.com/job/Toronto-Sales-Associate-ON/1279599600/",
                },
            ]}
            extras={
                <div>
                    Received an internal shout-out email from the CEO along with
                    my colleague about a positive experience we provided to a
                    VIP customer.
                </div>
            }
        />
    );
}
