import { HomePageSectionIds } from "@/data/homePageSections";
import React from "react";

const About = () => {
    return (
        <section
            id={HomePageSectionIds.ABOUT}
            className="w-full flex items-center justify-center bg-background pt-20 pb-24 shadow-[0_0_22px_-10px] shadow-black z-10"
        >
            <div className="w-2/3 flex flex-col items-center gap-4 max-md:w-[92%] max-md:text-center">
                <p className="text-4xl text-center font-semibold mb-4">
                    - Hakkımızda -
                </p>
                <div
                    style={{
                        backgroundColor:
                            "color-mix(in srgb, var(--primary), transparent 80%)",
                    }}
                    className="px-8 py-10 rounded-lg shadow-[0_8px_22px_-12px] shadow-black"
                >
                    <p className="font-semibold mb-2">
                        Medya Home olarak, medya planlama ve satın alma
                        sektöründe güven veren, stratejik çözümler sunan bir
                        lideriz. 10 yılı aşkın tecrübemizle, markalarımızın
                        hedeflerine ulaşması için etkili ve yenilikçi medya
                        stratejileri oluşturuyoruz.
                    </p>
                    <p className="font-semibold mb-2">
                        &ldquo;Başarıyı Stratejiyle İnşa Ediyoruz&ldquo;
                        sloganımızla, markalarımızı en doğru platformlarda,
                        doğru mesajlarla buluşturarak onların büyümesine katkı
                        sağlıyoruz. Şeffaf fiyatlandırma politikamız ve detaylı
                        analizlerimizle iş süreçlerini profesyonelce yönetiyor,
                        müşterilerimize uzun vadeli başarı vaat ediyoruz.
                    </p>
                    <p className="font-semibold">
                        Medya Home, markalar için sadece bir medya planlama
                        ajansı değil; güvenilir bir partnerdir. Hızlı, etkili ve
                        sürdürülebilir çözümlerimizle markalarımızın yanında
                        duruyor, her adımda stratejik destek sağlıyoruz. Güçlü
                        iş birlikleri ve sağlam ilişkiler inşa ederek sektördeki
                        lider konumumuzu pekiştiriyoruz.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-md:flex max-md:flex-col">
                    <div
                        style={{
                            backgroundColor:
                                "color-mix(in srgb, var(--primary), transparent 80%)",
                        }}
                        className="px-8 py-10 rounded-lg shadow-[0_8px_22px_-12px] shadow-black"
                    >
                        <p className="text-3xl font-semibold mb-2 ml-2">
                            Vizyonumuz
                        </p>
                        <p className="font-semibold">
                            Medya planlama ve satın alma alanında sektöre yön
                            veren, yaratıcı çözümlerimizle markaların stratejik
                            partneri olmayı amaçlıyoruz.
                        </p>
                    </div>
                    <div
                        style={{
                            backgroundColor:
                                "color-mix(in srgb, var(--primary), transparent 80%)",
                        }}
                        className="px-8 py-10 rounded-lg shadow-[0_8px_22px_-12px] shadow-black"
                    >
                        <p className="text-3xl font-semibold mb-2 ml-2">
                            Misyonumuz
                        </p>
                        <p className="font-semibold">
                            Müşterilerimizin hedeflerine ulaşmaları için
                            yenilikçi, ölçülebilir ve etkili medya stratejileri
                            geliştiriyor, her adımda şeffaflık ve güvenle
                            yanlarında yer alıyoruz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
