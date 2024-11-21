import { HomePageSectionIds } from "@/data/homePageSections";
import Image from "next/image";
import React from "react";

const Welcome = () => {
    return (
        <section
            id={HomePageSectionIds.WELCOME}
            className="min-h-screen relative w-screen flex items-center justify-center overflow-hidden p-20 max-md:p-0"
        >
            <div className="absolute h-[80%] mt-20 aspect-square rounded-2xl ed overflow-hidden -z-10">
                <Image
                    className="object-contain"
                    src="/images/welcome.jpg"
                    alt=""
                    fill
                    sizes="100%"
                    priority
                />
            </div>
            <div
                style={{
                    backgroundColor:
                        "color-mix(in srgb, var(--secondary), transparent 60%)",
                }}
                className="flex flex-col w-1/2 text-center text-background backdrop-blur-lg mt-20 px-10 py-8 rounded-lg gap-4 max-md:w-[92%] max-md:text-center"
            >
                <p className="font-medium text-5xl max-md:text-4xl">
                    Medya Planlama ve Satın Alma Ajansı
                </p>
                <p className="font-normal text-xl">
                    Reklam dünyasında fark yaratmak için buradayız. Alanında
                    uzman ekibimizle, sektördeki en yeni trendleri yakından
                    izliyor, inovatif çözümler sunuyor ve markanız için en
                    etkili medya stratejilerini hayata geçiriyoruz.
                </p>
            </div>
        </section>
    );
};

export default Welcome;
