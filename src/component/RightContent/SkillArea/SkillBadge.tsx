import type { SkillSetItem } from "../../../data/skillSet/interface/SkillSetItem";

import { Icon } from "@iconify/react";

export function SkillBadge({eachSkillSetItem, needPrefixIcon = true, needHover = false }: { eachSkillSetItem: SkillSetItem, needPrefixIcon?: boolean, needHover?: boolean }) {
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