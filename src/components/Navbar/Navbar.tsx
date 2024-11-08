"use client";

import { HomePageSectionIds, HomePageSections } from "@/data/homePageSections";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.values(HomePageSectionIds);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
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
            className={`w-full h-20 fixed z-30 flex items-center justify-between px-44 bg-background duration-300 ${
                scrolled ? "shadow-lg" : ""
            }`}
        >
            <Link
                href={"/"}
                className="h-3/4 relative aspect-[3] overflow-hidden"
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
            <div className="flex gap-7">
                {Object.values(HomePageSections).map((section) => (
                    <button
                        key={section.id}
                        onClick={() => {
                            document
                                .getElementById(section.id)
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`font-semibold duration-300 hover:text-primary ${
                            activeSection === section.id ? "text-primary" : ""
                        }`}
                    >
                        {section.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
