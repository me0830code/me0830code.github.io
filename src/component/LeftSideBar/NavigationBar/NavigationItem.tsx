import type { SectionKey } from "../../../data/constant/contentData";

import { ChevronRight } from "lucide-react"

interface NavigationItemProps {
    eachItem: { key: SectionKey; sectionTitle: string };
    isActive: boolean;
    onSelect: (key: SectionKey) => void;
}

export function NavigationItem({ eachItem, isActive, onSelect }: NavigationItemProps) {
    return (
        <button onClick={() => onSelect(eachItem.key)} className={`group flex items-center w-full py-2 text-left transition-all duration-200 text-sm ${isActive ? "font-bold text-sky-600" : "font-medium text-black hover:text-black"}`}>
            <span className="w-5 flex items-center justify-center">
                <span className={`transition-all duration-300 transform ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>
                    <ChevronRight size={16}/>
                </span>
            </span>

            {eachItem.sectionTitle}
        </button>
    );
}