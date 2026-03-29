import type { ProjectScrollProps } from "./interface/ProjectScrollProps";

import { ProjectScrollDirection, scrollProjectArea, useScrollProgress } from "../../../data/projectInfo/projectScroll";

export function ProjectScrollButton({scrollRef, curDirection}: ProjectScrollProps) {
    const { isAtStart, isAtEnd } = useScrollProgress(scrollRef);
    const isLeftButton = curDirection === ProjectScrollDirection.LEFT;
    const shouldDisabledButton = (isLeftButton ? isAtStart : isAtEnd);

    return (
        <button onClick={() => scrollProjectArea(scrollRef, curDirection)} className={`${curDirection === ProjectScrollDirection.LEFT ? "mr-4" : "ml-4"} flex items-center justify-center rounded-full ${shouldDisabledButton ? "" : "hover:scale-150 transition-transform duration-400"}"`}>
            <img className="w-40 h-40 object-contain" src={shouldDisabledButton ? (isLeftButton ? ProjectScrollDirection.LEFT.iconURLDisabledButton : ProjectScrollDirection.RIGHT.iconURLDisabledButton) : (isLeftButton ? ProjectScrollDirection.LEFT.iconURLEnabledButton : ProjectScrollDirection.RIGHT.iconURLEnabledButton)} alt={curDirection.value}/>
        </button>
    );
}
