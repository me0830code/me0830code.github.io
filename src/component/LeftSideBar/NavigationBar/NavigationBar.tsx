import type { SectionKey } from "../../../data/constant/contentData";

import { useEffect, useRef } from "react";
import { TOTAL_SECTION } from "../../../data/constant/contentData";
import { NavigationItem } from "./NavigationItem";

export function NavigationBar({
    active,
    onSelect,
}: {
    active: SectionKey;
    onSelect: (key: SectionKey) => void;
}) {
    const navRef = useRef<HTMLElement | null>(null);
    const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    useEffect(() => {
        const navElement = navRef.current;
        const activeElement = itemRefs.current[active];

        if (!navElement || !activeElement) return;

        if (window.innerWidth >= 1280) return;

        const navRect = navElement.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();

        const leftThreshold = navRect.left + 48;
        const rightThreshold = navRect.right - 48;

        const isTooFarLeft = activeRect.left < leftThreshold;
        const isTooFarRight = activeRect.right > rightThreshold;

        if (!isTooFarLeft && !isTooFarRight) return;

        const targetScrollLeft =
            activeElement.offsetLeft -
            navElement.clientWidth / 2 +
            activeElement.clientWidth / 2;

        navElement.scrollTo({
            left: Math.max(0, targetScrollLeft),
            behavior: "smooth",
        });
    }, [active]);

    return (
        <nav
            ref={navRef}
            className="hide-scrollbar flex w-full gap-2 overflow-x-auto whitespace-nowrap pb-1 xl:block xl:space-y-1 xl:overflow-visible xl:whitespace-normal xl:pb-0"
        >
            {TOTAL_SECTION.map((eachSection) => {
                const isActive = eachSection.key === active;

                return (
                    <NavigationItem
                        key={eachSection.key}
                        ref={(element) => {
                            itemRefs.current[eachSection.key] = element;
                        }}
                        eachItem={eachSection}
                        isActive={isActive}
                        onSelect={onSelect}
                    />
                );
            })}
        </nav>
    );
}

export function NavigationBar2({ 
    active, 
    onSelect 
}: { 
    active: SectionKey;
    onSelect: (key: SectionKey) => void;
}) {
    return (
        <div className="sticky top-8">
            <div className="space-y-8">
                <nav className="space-y-1">
                    {
                        TOTAL_SECTION.map((eachSection) => {
                            const isActive = eachSection.key === active;
                            return <NavigationItem key={eachSection.key} eachItem={eachSection} isActive={isActive} onSelect={onSelect}/>
                        })
                    }
                </nav>
            </div>
        </div>
    );
}