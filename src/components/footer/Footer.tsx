import { Link } from "@/i18n/routing";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-background">
            <div
                style={{
                    backgroundColor:
                        "color-mix(in srgb, var(--primary), transparent 50%)",
                }}
                className="w-full h-28 flex justify-between items-center px-40 max-md:px-0 max-md:h-auto"
            >
                <Link
                    href={"/"}
                    className="h-1/2 relative aspect-[3] overflow-hidden max-md:hidden"
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
                <div className="flex text-end gap-20 text-sm font-semibold max-md:flex-col max-md:gap-2 max-md:items-end max-md:w-full max-md:px-[7%] max-md:py-4">
                    <div className="flex flex-col items-end max-md:gap-2 max-md:w-full">
                        <div className="flex items-center gap-3">
                            <p>0532 402 91 52</p>
                            <Phone size={16} strokeWidth={2.5} />{" "}
                        </div>
                        <div className="flex items-center gap-3">
                            <p>info@homemedya.com</p>
                            <Mail size={16} strokeWidth={2.5} />{" "}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <p>Sahrayı Cedit, Mengi Sk. FYİ Plaza No: 26</p>{" "}
                            <p>Kat:2 Ofis No:828, 34734 Kadıköy/İstanbul</p>
                        </div>
                        <MapPin size={20} strokeWidth={2.5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
