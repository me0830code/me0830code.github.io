import type { ProjectScrollProps } from "./interface/ProjectScrollProps";

import { ProjectScrollDirection, scrollProjectArea, useScrollProgress } from "../../../data/projectInfo/projectScroll";

export function ProjectScrollButton({ scrollRef, curDirection }: ProjectScrollProps) {
    const { isAtStart, isAtEnd } = useScrollProgress(scrollRef);
    const isLeftButton = curDirection === ProjectScrollDirection.LEFT;
    const shouldDisabledButton = isLeftButton ? isAtStart : isAtEnd;

    return (
        <button onClick={() => scrollProjectArea(scrollRef, curDirection)} className={`${curDirection === ProjectScrollDirection.LEFT ? "mr-3 lg:mr-4" : "ml-3 lg:ml-4"} flex items-center justify-center rounded-full ${shouldDisabledButton ? "" : "transition-transform duration-300 hover:scale-110"}`}>
            <img src={shouldDisabledButton ? (isLeftButton ? ProjectScrollDirection.LEFT.iconURLDisabledButton : ProjectScrollDirection.RIGHT.iconURLDisabledButton) : (isLeftButton ? ProjectScrollDirection.LEFT.iconURLEnabledButton : ProjectScrollDirection.RIGHT.iconURLEnabledButton)} alt={curDirection.value} className="h-10 w-10 object-contain lg:h-12 lg:w-12"/>
        </button>
    );
}