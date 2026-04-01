import type { RefObject } from 'react';

import { useState, useEffect } from 'react';

export const ProjectScrollDirection = {
    LEFT: { value: "left", iconURLEnabledButton: "customIcon/Scroll_Left_Button.png", iconURLDisabledButton: "customIcon/Disabled_Scroll_Left_Button.png" },
    RIGHT: { value: "right", iconURLEnabledButton: "customIcon/Scroll_Right_Button.png", iconURLDisabledButton: "customIcon/Disabled_Scroll_Right_Button.png" }
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

export const useScrollProgress = (ref: RefObject<HTMLElement | null>, offset: number = 5) => {
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = el;
            setIsAtStart(scrollLeft <= offset);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - offset);
        };

        el.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => el.removeEventListener('scroll', handleScroll);
    }, [ref, offset]);

    return { isAtStart, isAtEnd };
};