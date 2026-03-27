import type { ProjectScrollProps } from "./interface/ProjectScrollProps";

import { Icon } from "@iconify/react";
import { ProjectScrollDirection, scrollProjectArea } from "../../../data/projectInfo/projectScroll";

export function ProjectScrollButton({scrollRef, curDirection}: ProjectScrollProps) {
    return (
        <button onClick={() => scrollProjectArea(scrollRef, curDirection)} className={`${curDirection === ProjectScrollDirection.LEFT ? "mr-4" : "ml-4"} flex items-center justify-center rounded-full hover:scale-150 transition-transform duration-400"`}>
            <Icon icon="emojione:left-arrow" className={`w-10 h-10 text-slate-400 ${curDirection === ProjectScrollDirection.RIGHT ? "rotate-180" : ""}`}/>
        </button>
    );
}
