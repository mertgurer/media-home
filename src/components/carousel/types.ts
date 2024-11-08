import { ReactElement } from "react";

export interface CarouselProps {
    components: ReactElement[];
}

export interface CarouselCardProps {
    title: string;
    description: string;
    image: string;
    active?: boolean;
}
