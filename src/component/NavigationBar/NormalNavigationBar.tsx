import type { NavigationBarInfo } from "../NavigationBar/interface/NavigationBarInfo";

import { useEffect, useRef } from "react";
import { NavigationItem } from "./NavigationItem";

import { BREAK_POINT } from "../../data/constant/constant";
import { TOTAL_SECTION } from "../../data/constant/contentData";

export function NormalNavigationBar({activeItemKey, onSelect}: NavigationBarInfo) {
    const navRef = useRef<HTMLElement | null>(null);
    const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    useEffect(() => {
        const navElement = navRef.current;
        const activeElement = itemRefs.current[activeItemKey];
    
        if (!navElement || !activeElement) return;
    
        if (window.innerWidth >= BREAK_POINT.MOBILE) return;
    
        const navRect = navElement.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();
    
        const leftThreshold = navRect.left + 48;
        const rightThreshold = navRect.right - 48;
    
        const isTooFarLeft = activeRect.left < leftThreshold;
        const isTooFarRight = activeRect.right > rightThreshold;
    
        if (!isTooFarLeft && !isTooFarRight) return;
    
        const targetScrollLeft = activeElement.offsetLeft - (navElement.clientWidth / 2) + (activeElement.clientWidth / 2);
    
        navElement.scrollTo({left: Math.max(0, targetScrollLeft), behavior: "smooth"});
    }, [activeItemKey]);

    return (
        <nav ref={navRef} className="hide-scrollbar flex w-full gap-2 overflow-x-auto whitespace-nowrap md:grid md:grid-cols-4 md:items-center md:gap-3 md:overflow-visible md:whitespace-normal xl:block xl:space-y-1">
            {
                TOTAL_SECTION.map((eachSection) =>
                    {
                        const isActive = eachSection.key === activeItemKey;
                        return (
                            <NavigationItem key={eachSection.key} ref={(element) => {itemRefs.current[eachSection.key] = element;}} eachItem={eachSection} isActive={isActive} onSelect={onSelect}/>
                        );
                    }
                )
            }
        </nav>
    );
}