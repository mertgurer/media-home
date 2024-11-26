import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

const sfProDisplay = localFont({
    src: [
        {
            path: "../../public/fonts/sfprodisplaybold.otf",
            weight: "700",
        },
        {
            path: "../../public/fonts/sfprodisplaymedium.otf",
            weight: "500",
        },
        {
            path: "../../public/fonts/sfprodisplayregular.otf",
            weight: "400",
        },
    ],
});

export const metadata: Metadata = {
    title: "Home Medya",
    description: "Home Medya Web Sitesi",
    icons: {
        icon: "/images/logo.png",
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang={"tr"}>
            <body className={sfProDisplay.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
