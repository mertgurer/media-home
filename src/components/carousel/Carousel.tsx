"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselProps } from "./types";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";

const SCALE_FACTOR = 0.078;
const TILT_FACTOR = 15;
const TRANSLATE_FACTOR = 1.42;
const SMALL_TRANSLATE_FACTOR = 0.55;

export default function Carousel({ components }: CarouselProps) {
    const tweenNodes = useRef<HTMLElement[]>([]);
    const tweenNodeParents = useRef<HTMLElement[]>([]);
    const finalComponents =
        components.length < 10 ? [...components, ...components] : components;
    const [activeIndex, setActiveIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
    ]);

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector(".embla__slide") as HTMLElement;
        });
    }, []);

    const setTweenNodeParents = useCallback(
        (emblaApi: EmblaCarouselType): void => {
            tweenNodeParents.current = emblaApi
                .slideNodes()
                .map((slideNode) => {
                    return slideNode.querySelector(".embla__slide")
                        ?.parentElement as HTMLElement;
                });
        },
        []
    );

    const tweenScale = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === "scroll";

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                const slidePercentage = 1 / finalComponents.length;
                let diffToTarget =
                    (scrollSnap - scrollProgress) / slidePercentage;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex))
                        return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);
                                if (sign === -1) {
                                    diffToTarget =
                                        (scrollSnap - (1 + scrollProgress)) /
                                        slidePercentage;
                                }
                                if (sign === 1) {
                                    diffToTarget =
                                        (scrollSnap + (1 - scrollProgress)) /
                                        slidePercentage;
                                }
                            }
                        });

                        if (diffToTarget < 0.5 && diffToTarget > -0.5) {
                            setActiveIndex(slideIndex);
                        }

                        const tweenNode = tweenNodes.current[slideIndex];
                        const tweenNodeParent =
                            tweenNodeParents.current[slideIndex];
                        const translateFactor =
                            components.length < 7
                                ? SMALL_TRANSLATE_FACTOR
                                : TRANSLATE_FACTOR;

                        const scale = 1 - Math.abs(diffToTarget * SCALE_FACTOR);
                        const translateX =
                            Math.sign(-diffToTarget) *
                            Math.min(
                                Math.pow(diffToTarget * translateFactor, 2)
                            );
                        const tiltAngle = Math.min(
                            Math.max(diffToTarget * TILT_FACTOR, -15),
                            15
                        );
                        let zIndex =
                            Math.round(diffToTarget) === 0
                                ? 30
                                : -Math.abs(Math.round(diffToTarget));

                        tweenNode.style.transform = `
                                scale(${scale}) 
                                perspective(1000px)                        
                                rotateY(${-tiltAngle}deg)
                                translateX(${translateX}%)
                            `;
                        tweenNodeParent.style.zIndex = `${zIndex}`;
                    }
                });
            });
        },
        [components.length, finalComponents.length]
    );

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenNodeParents(emblaApi);
        tweenScale(emblaApi);

        emblaApi
            .on("reInit", setTweenNodes)
            .on("reInit", setTweenNodeParents)
            .on("reInit", tweenScale)
            .on("scroll", tweenScale)
            .on("slideFocus", tweenScale);
    }, [emblaApi, setTweenNodeParents, setTweenNodes, tweenScale]);

    return (
        <div
            ref={emblaRef}
            className={`h-full overflow-hidden py-6 max-md:w-full ${
                components.length < 7 ? "w-[80%] mx-auto" : "w-full"
            }`}
        >
            <div className="flex">
                {finalComponents.map((card, index) => {
                    return (
                        <div
                            key={index}
                            className={`min-w-0 max-md:flex-[0_0_50%] ${
                                components.length < 7
                                    ? "flex-[0_0_19.8%]"
                                    : "flex-[0_0_15%]"
                            }`}
                        >
                            <div className="embla__slide w-[125%] -ml-[12.5%]">
                                {React.cloneElement(card, {
                                    active: index === activeIndex,
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
