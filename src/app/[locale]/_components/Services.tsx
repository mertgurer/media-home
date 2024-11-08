import Carousel from "@/components/carousel/Carousel";
import Card from "@/components/carousel/components/Card";
import { HomePageSectionIds } from "@/data/homePageSections";
import { ServicesData } from "@/data/servicesData";
import React from "react";

const Services = () => {
    return (
        <section
            id={HomePageSectionIds.SERVICES}
            style={{
                backgroundColor:
                    "color-mix(in srgb, var(--primary), transparent 80%)",
            }}
            className="w-full flex flex-col items-center justify-center py-20 backdrop-blur-xl gap-4"
        >
            <p className="text-4xl font-semibold">- Servislerimiz -</p>
            <Carousel
                components={ServicesData.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            />
        </section>
    );
};

export default Services;
