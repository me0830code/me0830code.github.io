
import { Icon } from "@iconify/react";
import { SkillBadge } from "./SkillBadge";
import { TOTAL_SKILL } from "../../data/skillSet/skillSet";

export function SkillArea() {
    return (
        <div className="flex flex-col gap-10">
            <section className="relative pl-10 pr-10 pt-26 pb-10 rounded-[0.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                <div className="absolute top-0 left-0 px-6 py-2.5 bg-blue-500 rounded-tl-[0.5rem] rounded-br-[0.5rem] w-52 h-12 flex items-center justify-center">
                    <span className="text-[18px] tracking-tight text-white font-bold leading-none">
                        Technical Skills
                    </span>
                </div>

                {
                    TOTAL_SKILL.map((eachCategory, index) => (
                        <div key={eachCategory.name}>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2.5 ${eachCategory.backgroundColor} rounded-xl ${eachCategory.textColor}`}>
                                        <Icon icon={eachCategory.iconURL} className="w-8 h-8" />
                                    </div>

                                    <h3 className="py-2 text-[22px] font-bold text-[#1E293B] tracking-tight">
                                        {eachCategory.name}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {
                                        Object.entries(eachCategory.skillSetItem).map(([eachKey, eachTotalItem]) => (
                                            <SkillBadge key={eachKey} eachSkillSetItem={eachTotalItem}/>
                                        ))
                                    }
                                </div>
                            </div>

                            {
                                index !== TOTAL_SKILL.length - 1 && (<div className="h-px bg-slate-100 w-full my-6" />)
                            }
                        </div>
                    ))
                }
            </section>
        </div>
    );
}