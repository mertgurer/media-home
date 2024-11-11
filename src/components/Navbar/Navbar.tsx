"use client";

import { HomePageSectionIds, HomePageSections } from "@/data/homePageSections";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BurgerMenu from "./components/burgerMenu";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("welcome");
    const [open, setOpen] = useState(false);

    useEffect(() => {
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

            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
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
                className="h-3/4 relative aspect-[3] overflow-hidden max-md:h-2/3"
            >
                <Image
                    className="object-contain"
                    src="/images/logo-text.png"
                    alt=""
                    fill
                    sizes="100%"
                    priority
                />
            </Link>

            <div
                style={{
                    backgroundColor:
                        "color-mix(in srgb, var(--text), transparent 20%)",
                }}
                className={`flex gap-7 z-10 max-md:flex-col max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:opacity-90 max-md:backdrop-blur-lg max-md:gap-5 max-md:pb-20 max-md:pt-32 max-md:z-30 max-md:duration-500 ${
                    open ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                {Object.values(HomePageSections).map((section) => (
                    <button
                        key={section.id}
                        onClick={() => {
                            document
                                .getElementById(section.id)
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`font-semibold duration-300 hover:text-primary max-md:text-background max-md:text-2xl ${
                            activeSection === section.id ? "text-primary" : ""
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
