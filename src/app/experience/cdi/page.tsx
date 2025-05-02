import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
    title: "CDI Teaching Experience - Sung",
    description: "Details about my time as an English Instructor in Korea.",
};

export default function CDIPage() {
    return (
        <ExperienceLayout
            company="ChungDahm Institute"
            role="Head English Instructor"
            duration="Feb 2023 - Feb 2024"
            responsibilities={[
                "Taught English to elementary and middle school students in Korea at a private academy.",
                "Focused on critical thinking and applicable English while passively improving spoken and written grammar. ",
                "Led weekly meetings with other instructors on best teaching styles and updates to curriculums. ",
            ]}
            links={[
                {
                    label: "Visit Home Page",
                    text: "Main Page",
                    href: "https://company.creverse.com/en",
                },
                {
                    label: "Position Posting",
                    text: "Job Board",
                    href: "https://teachinkorea.creverse.com/careers/GeneralJobBoardList",
                },
            ]}
            extras={<div>Promoted to lead instructor in only six months, and learned to prepare lesson materials for youth aged 5-17.</div>}
        />
    );
}