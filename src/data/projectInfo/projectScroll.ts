import type { RefObject } from 'react';

export const ProjectScrollDirection = {
    LEFT: "left",
    RIGHT: "right"
} as const;

export type ProjectScrollDirectionType = (typeof ProjectScrollDirection)[keyof typeof ProjectScrollDirection];

export const scrollProjectArea = (scrollRef: RefObject<HTMLElement | null>, direction: ProjectScrollDirectionType) => {
    if (scrollRef.current) {
        const pageWidth = scrollRef.current.clientWidth;
        scrollRef.current.scrollBy({
            left: direction === ProjectScrollDirection.LEFT ? -pageWidth : pageWidth,
            behavior: 'smooth'
        });
    }
};