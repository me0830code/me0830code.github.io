import type { NavigationItemInfo } from "./interface/NavigationItemInfo.ts";

import { forwardRef } from "react";
import { ChevronRight } from "lucide-react"

export const NavigationItem = forwardRef<HTMLButtonElement, NavigationItemInfo>(
    function NavigationItem({ eachItem, isActive, onSelect }, ref) {
        return (
            <button
                ref={ref}
                onClick={() => onSelect(eachItem.key)}
                className={`
                    group shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-200
                    md:flex md:w-full md:items-center md:rounded-none md:border-0 md:px-0 md:py-2 md:text-left
                    ${
                        isActive
                            ? "border-sky-200 bg-sky-50 font-bold text-sky-600 md:bg-transparent"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 md:bg-transparent"
                    }
                `}
            >
                <span className="hidden w-5 items-center justify-center md:flex">
                    <span
                        className={`transform transition-all duration-300 ${
                            isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                        }`}
                    >
                        <ChevronRight size={16} />
                    </span>
                </span>

                <span className="whitespace-nowrap text-sm">
                    {eachItem.sectionTitle}
                </span>
            </button>
        );
    }
);

export function NavigationItem2({ eachItem, isActive, onSelect }: NavigationItemInfo) {
    return (
        <button
            onClick={() => onSelect(eachItem.key)}
            className={`
                group shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-200
                md:flex md:w-full md:items-center md:rounded-none md:border-0 md:px-0 md:py-2 md:text-left
                ${
                    isActive
                        ? "border-sky-300 bg-sky-100 font-bold text-sky-700 shadow-sm md:bg-transparent md:shadow-none"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 md:bg-transparent"
                }
            `}
        >
            <span className="hidden w-5 items-center justify-center md:flex">
                <span
                    className={`transition-all duration-300 transform ${
                        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`}
                >
                    <ChevronRight size={16} />
                </span>
            </span>

            <span className="whitespace-nowrap">
                {eachItem.sectionTitle}
            </span>
        </button>
    );
}

// export function NavigationItem({ eachItem, isActive, onSelect }: NavigationItemInfo) {
//     return (
//         <button onClick={() => onSelect(eachItem.key)} className={`group flex items-center w-full py-2 text-left transition-all duration-200 text-sm ${isActive ? "font-bold text-sky-600" : "font-medium text-black hover:text-black"}`}>
//             <span className="w-5 flex items-center justify-center">
//                 <span className={`transition-all duration-300 transform ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>
//                     <ChevronRight size={16}/>
//                 </span>
//             </span>

//             {eachItem.sectionTitle}
//         </button>
//     );
// }