import type { SectionKey } from "../../../data/constant/contentData";

export interface NavigationItemInfo {
    eachItem: { key: SectionKey; sectionTitle: string };
    isActive: boolean;
    onSelect: (key: SectionKey) => void;
}
