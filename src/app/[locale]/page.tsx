"use client";

import About from "./_components/About";
import Welcome from "./_components/Welcome";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center gap-3">
            <Welcome />
            <About />
        </main>
    );
}
