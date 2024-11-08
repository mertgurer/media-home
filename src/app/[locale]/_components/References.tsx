import { HomePageSectionIds } from "@/data/homePageSections";
import Image from "next/image";
import React from "react";

const References = () => {
    return (
        <section
            id={HomePageSectionIds.REFERENCES}
            className="w-full flex flex-col items-center justify-center py-20 gap-7 bg-background "
        >
            <p className="text-4xl font-semibold">- Referanslarımız -</p>
            <div className="relative aspect-[1.75] w-[60%] rounded-3xl overflow-hidden bg-secondary shadow-[0_8px_22px_-12px] shadow-black">
                <Image
                    className="object-contain"
                    src="/images/references.png"
                    alt=""
                    fill
                    sizes="100%"
                    priority
                />
            </div>
        </section>
    );
};

export default References;
