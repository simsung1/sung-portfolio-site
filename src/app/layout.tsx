import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const samsungOne = localFont({
    src: [
        {
            path: "../../public/fonts/SamsungOne-400.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/SamsungOne-700.ttf",
            weight: "700",
            style: "bold",
        },
    ],
    variable: "--font-samsung-one",
});

// Define SamsungSharpSans font
const sharpSans = localFont({
    src: [
        {
            path: "../../public/fonts/SamsungSharpSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-sharpsans",
});

export const metadata: Metadata = {
    title: "Sim Sung Canada | Student | Intern | Programmer",
    description:
        "Welcome to the portfolio site of Sung Min Sim! Here, I mimic the styling of Samsung Canada's website and throw in some personal stylings where necessary.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${samsungOne.variable} ${sharpSans.variable} font-samsung antialiased`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
