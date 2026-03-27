import type { RefObject } from 'react';
import type { ProjectScrollDirectionType } from "../../../../data/projectInfo/projectScroll";

export interface ProjectScrollProps {
    scrollRef: RefObject<HTMLDivElement | null>;
    curDirection: ProjectScrollDirectionType;
}