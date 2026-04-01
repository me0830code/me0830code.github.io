import type { NavigationItemInfo } from "./interface/NavigationItemInfo.ts";

import { forwardRef } from "react";
import { ChevronRight } from "lucide-react"

export const NavigationItem = forwardRef<HTMLButtonElement, NavigationItemInfo>(
    function NavigationItem({ eachItem, isActive, onSelect }, ref) {
        return (
            <button ref={ref} onClick={() => onSelect(eachItem.key)}
                className={`group shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-200 md:flex md:min-h-[52px] md:w-full md:items-center md:justify-center xl:min-h-0 xl:w-full xl:justify-start xl:rounded-none xl:border-0 xl:px-0 xl:py-2 xl:text-left ${isActive ? "border-sky-300 bg-sky-50 font-bold text-sky-700 xl:bg-transparent" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 xl:bg-transparent"}`}>
                <span className="hidden w-5 items-center justify-center xl:flex">
                    <span className={`transform transition-all duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>
                        <ChevronRight size={16}/>
                    </span>
                </span>

                <span className="truncate whitespace-nowrap text-sm">
                    {eachItem.sectionTitle}
                </span>
            </button>
        );
    }
);