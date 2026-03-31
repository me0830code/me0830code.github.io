import type { SkillSetItem } from "../../../data/skillSet/interface/SkillSetItem";

import { Icon } from "@iconify/react";

export function SkillBadge({
    eachSkillSetItem,
    needPrefixIcon = true,
    needHover = false,
}: {
    eachSkillSetItem: SkillSetItem;
    needPrefixIcon?: boolean;
    needHover?: boolean;
}) {
    return (
        <div
            className={`
                group inline-flex items-center rounded-[0.5rem] border text-sm
                ${
                    needPrefixIcon
                        ? "gap-1.5 bg-white/80 border-slate-200 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2"
                        : "gap-1 bg-[#ffe6ec] border-slate-200 px-2.5 py-[6px] sm:px-3 sm:py-1"
                }
                ${
                    needHover
                        ? "cursor-default backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-md"
                        : "cursor-default"
                }
            `}
        >
            {needPrefixIcon ? (
                eachSkillSetItem.needToCustomize ? (
                    <img
                        src={eachSkillSetItem.iconURL}
                        alt={eachSkillSetItem.name}
                        className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                    />
                ) : (
                    <Icon
                        icon={eachSkillSetItem.iconURL}
                        className={`h-4 w-4 text-slate-400 sm:h-5 sm:w-5 ${
                            needHover
                                ? "transition-colors duration-300 group-hover:text-slate-600"
                                : ""
                        }`}
                    />
                )
            ) : null}

            <span
                className={`whitespace-nowrap font-semibold ${
                    needPrefixIcon
                        ? "text-xs sm:text-sm"
                        : "text-xs sm:text-[13px]"
                } ${
                    needHover
                        ? "text-slate-600 group-hover:text-slate-900"
                        : "text-black"
                }`}
            >
                {eachSkillSetItem.name}
            </span>
        </div>
    );
}

export function SkillBadge2({eachSkillSetItem, needPrefixIcon = true, needHover = false }: { eachSkillSetItem: SkillSetItem, needPrefixIcon?: boolean, needHover?: boolean }) {
    return (
        <div className={`${!needPrefixIcon ? "max-h-6" : ""} flex items-center gap-2.5 px-4 py-2 ${!needPrefixIcon ? "bg-[#ffe6ec] border border-slate-200" :"bg-white/80 border border-slate-200" } backdrop-blur-sm rounded-[0.5rem] ${needHover ? "shadow-sm hover:border-blue-400/50 hover:shadow-md transition-all duration-300" : ""} cursor-default group`}>
            {
                needPrefixIcon ? (
                    eachSkillSetItem.needToCustomize ? (
                        <img src={eachSkillSetItem.iconURL} alt={eachSkillSetItem.name} className="w-6 h-6 object-contain"/>
                    ) : (
                        <Icon icon={eachSkillSetItem.iconURL} className={`w-6 h-6 text-slate-400 ${needHover ? "group-hover:text-slate-600 transition-colors duration-300" : ""}`}/>
                    )
                ) : (null)
            }

            <span className={`text-sm font-semibold ${needHover ? "text-slate-600 group-hover:text-slate-900" : "text-black"}`}>
                {eachSkillSetItem.name}
            </span>
        </div>
    );
}