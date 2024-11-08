"use client";

import About from "./_components/About";
import Contact from "./_components/Contact";
import References from "./_components/References";
import Services from "./_components/Services";
import Welcome from "./_components/Welcome";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <Welcome />
            <About />
            <Services />
            <References />
            <Contact />
        </main>
    );
}
