interface WorkExperience {
    imgsrc: string;
    imgalt: string;
    bgColor?: string;
    btmTitle: string;
    btmText?: string
    gradientIndex: 0 | 1 | 2;
}

export const experiences : WorkExperience[] = [
    {
        imgsrc: "/images/wsib-exp.png",
        imgalt: "Ghibli Image of Sung Coding Wearing WSIB Sweater",
        bgColor: "bg-black",
        btmTitle: "Summer Student Intern",
        btmText: "May 2025 - Aug 2025",
        gradientIndex: 0
    },
    {
        imgsrc: "/images/fcv-exp.png",
        imgalt: "Ghibli Image of Sung at FCV as Cashier",
        bgColor: "bg-[#F4F4F4]",
        btmTitle: "Sales Associate",
        btmText: "June 2024 - Current",
        gradientIndex: 2
    },
    {
        imgsrc: "/images/cdi-exp.png",
        imgalt: "Ghibli Image of Sung Teaching English",
        bgColor: "bg-black",
        btmTitle: "Head English Instructor",
        btmText: "Feb 2023 - Feb 2024",
        gradientIndex: 0
    },
    {
        imgsrc: "/images/rogers-exp.png",
        imgalt: "Ghibli Image of Sung Working at Rogers",
        bgColor: "bg-[#F4F4F4]",
        btmTitle: "Sales Associate",
        btmText: "Jan 2022 - Feb 2023",
        gradientIndex: 2
    },
    {
        imgsrc: "/images/library-exp.png",
        imgalt: "Ghibli Image of Sung Working at Library",
        bgColor: "bg-black",
        btmTitle: "Student Librarian Assistant",
        btmText: "Sept 2021 - Oct 2022",
        gradientIndex: 0
    } 
]