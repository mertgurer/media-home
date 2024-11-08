import { HomePageSectionIds } from "@/data/homePageSections";
import React from "react";

const About = () => {
    return (
        <section
            id={HomePageSectionIds.ABOUT}
            className="min-h-screen w-full flex items-center justify-center bg-background shadow-[0_0_22px_-10px] shadow-black"
        >
            <div className="w-1/2 flex flex-col items-center">
                <div
                    style={{
                        backgroundColor:
                            "color-mix(in srgb, var(--primary), transparent 50%)",
                    }}
                    className="px-8 py-4 rounded-lg"
                >
                    <p className="text-4xl font-semibold mb-4 ml-2">
                        Hakkımızda
                    </p>
                    <p className="font-medium">
                        Medya Home olarak, medya planlama ve satın alma
                        sektöründe güven veren, stratejik çözümler sunan bir
                        lideriz. 10 yılı aşkın tecrübemizle, markalarımızın
                        hedeflerine ulaşması için etkili ve yenilikçi medya
                        stratejileri oluşturuyoruz.
                    </p>
                    <p className="font-medium">
                        &ldquo;Başarıyı Stratejiyle İnşa Ediyoruz&ldquo;
                        sloganımızla, markalarımızı en doğru platformlarda,
                        doğru mesajlarla buluşturarak onların büyümesine katkı
                        sağlıyoruz. Şeffaf fiyatlandırma politikamız ve detaylı
                        analizlerimizle iş süreçlerini profesyonelce yönetiyor,
                        müşterilerimize uzun vadeli başarı vaat ediyoruz.
                    </p>
                    <p className="font-medium">
                        Medya Home, markalar için sadece bir medya planlama
                        ajansı değil; güvenilir bir partnerdir. Hızlı, etkili ve
                        sürdürülebilir çözümlerimizle markalarımızın yanında
                        duruyor, her adımda stratejik destek sağlıyoruz. Güçlü
                        iş birlikleri ve sağlam ilişkiler inşa ederek sektördeki
                        lider konumumuzu pekiştiriyoruz.
                    </p>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default About;
