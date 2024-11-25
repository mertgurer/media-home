import localFont from "next/font/local";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

const sfProDisplay = localFont({
    src: [
        {
            path: "../../../public/fonts/sfprodisplaybold.otf",
            weight: "700",
        },
        {
            path: "../../../public/fonts/sfprodisplaymedium.otf",
            weight: "500",
        },
        {
            path: "../../../public/fonts/sfprodisplayregular.otf",
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
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={sfProDisplay.className}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
