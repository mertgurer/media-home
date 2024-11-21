"use client";

import { HomePageSectionIds, HomePageSections } from "@/data/homePageSections";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BurgerMenu from "./components/burgerMenu";
import { MobileViewPoint } from "@/constants/constants";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("welcome");
    const [open, setOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobileView(window.innerWidth <= MobileViewPoint);
        }

        const handleScroll = () => {
            const sections = Object.values(HomePageSectionIds);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementHalfInView = rect.top + rect.height / 2;
                    if (
                        elementHalfInView >= 0 &&
                        elementHalfInView <= window.innerHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            setScrolled(window.scrollY > 80);
        };

        const handleResize = () => {
            if (typeof window !== "undefined") {
                setIsMobileView(window.innerWidth <= MobileViewPoint);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className={`w-full h-20 fixed z-30 flex items-center justify-between px-44 bg-background duration-300 max-md:shadow-lg max-md:px-4 ${
                scrolled ? "shadow-lg" : ""
            }`}
        >
            <Link
                href={"/"}
                className="h-full relative aspect-[3] overflow-hidden max-md:h-2/3"
            >
                <Image
                    className="object-contain scale-90"
                    src="/images/logo-text.png"
                    alt=""
                    fill
                    sizes="100%"
                    priority
                />
            </Link>

            <div
                style={{
                    backgroundColor: isMobileView
                        ? "color-mix(in srgb, var(--text), transparent 20%)"
                        : "transparent",
                }}
                className={`flex gap-7 z-10 max-md:flex-col max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:opacity-90 max-md:backdrop-blur-lg max-md:gap-5 max-md:pb-20 max-md:pt-32 max-md:z-30 max-md:duration-500 ${
                    open ? "max-md:translate-y-0" : "max-md:-translate-y-full"
                }`}
            >
                {Object.values(HomePageSections).map((section) => (
                    <button
                        key={section.id}
                        onClick={() => {
                            if (isMobileView) setOpen(false);
                            document
                                .getElementById(section.id)
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`font-medium text-lg duration-300 hover:opacity-100 md:hover:text-primary max-md:text-background max-md:text-2xl ${
                            activeSection === section.id
                                ? !isMobileView
                                    ? "opacity-100 text-primary"
                                    : ""
                                : "opacity-80"
                        }`}
                    >
                        {section.title}
                    </button>
                ))}
            </div>
            <BurgerMenu open={open} setOpen={setOpen} />
        </div>
    );
};

export default Navbar;
