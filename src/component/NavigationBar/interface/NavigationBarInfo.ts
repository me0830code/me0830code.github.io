import type { SectionKey } from "../../../data/constant/contentData";

export interface NavigationBarInfo {
    activeItemKey: SectionKey;
    onSelect: (key: SectionKey) => void;
}
