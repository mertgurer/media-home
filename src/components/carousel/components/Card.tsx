import React from "react";
import { CarouselCardProps } from "../types";
import Image from "next/image";

const Card = ({ title, description, image, active }: CarouselCardProps) => {
    return (
        <div className="bg-background flex flex-col items-center justify-center px-0 gap-4 aspect-square rounded-3xl overflow-hidden shadow-[0_8px_22px_-12px] shadow-black">
            <div
                style={{
                    backgroundColor:
                        "color-mix(in srgb, var(--text), transparent 30%)",
                }}
                className={`flex flex-col items-center justify-center z-10 w-full h-full backdrop-blur-sm ${
                    active ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
            >
                <p className="text-3xl font-semibold text-center text-balance text-background">
                    {title}
                </p>
                <p className=" font-semibold text-lg text-center text-balance text-background mt-3 leading-5 px-10 mb-[20%]">
                    {description}
                </p>
            </div>
            <div className="absolute top w-full aspect-square rounded-3xl overflow-hidden bg-secondary">
                <Image
                    className="object-contain"
                    src={image}
                    alt=""
                    fill
                    sizes="100%"
                    priority
                />
            </div>
        </div>
    );
};

export default Card;
