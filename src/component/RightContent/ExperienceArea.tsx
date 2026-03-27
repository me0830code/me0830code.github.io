import type { ComponentProps } from "../../data/constant/interface/ComponentProps";

import { TOTAL_EXPERIENCE, EXPERIENCE_INFO } from "../../data/experienceInfo/experienceInfo";
import { CustomizedTextRendering } from "../Others/Helper";
import { SkillBadge } from "./SkillArea/SkillBadge";

export function ExperienceArea({ sectionTitle }: ComponentProps) {
    return (
        <div className="flex flex-col gap-10">
            <section className="relative pl-12.5 pr-10 pt-25 pb-10 rounded-[0.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                <div className="absolute top-0 left-0 px-6 py-2.5 bg-blue-500 rounded-tl-[0.5rem] rounded-br-[0.5rem] w-52 h-12 flex items-center justify-center">
                    <span className="text-[18px] tracking-tight text-white font-bold leading-none">
                        {sectionTitle}
                    </span>
                </div>
  
                <div className="relative mt-4 ml-10 space-y-12">
                    <div className="absolute left-1 top-0 bottom-20 w-[2px] bg-slate-100 border-l-2 border-dashed border-slate-200" />

                    {
                        Object.entries(TOTAL_EXPERIENCE).map(([eachKey, eachExperience]) => (
                            <div key={eachKey} className={`relative pl-20 group ${eachExperience.companyInfo === EXPERIENCE_INFO.PHISON.companyInfo ? 'mb-0': 'mb-6'}`}>

                                <a href={eachExperience.companyInfo.companyLink} target="_blank" rel="noopener noreferrer" className={`mt-0 absolute left-[-50px] w-27 h-10 rounded-md bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center z-10 group-hover:scale-130 transition-transform duration-300`}>
                                    <img src={eachExperience.companyInfo.logoURL} alt={eachExperience.companyInfo.companyName} className={`p-2 w-full h-full object-contain ${eachExperience.companyInfo === EXPERIENCE_INFO.COUPANG.companyInfo ? 'translate-y-1' : 'translate-y-0'}`}/>
                                </a>

                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-[20px] font-black text-black transition-colors">
                                                {eachExperience.jobRole}
                                            </h4>

                                            <span className="hidden md:block w-[2px] h-4 bg-gray-300 mx-1"/>

                                            <div className="flex flex-wrap gap-4">
                                                {
                                                    Object.entries(eachExperience.jobSkillSet).map(([eachKey, eachTotalItem]) => (
                                                        <SkillBadge key={eachKey} eachSkillSetItem={eachTotalItem} needPrefixIcon={false}/>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <span className="text-sm font-semibold text-black bg-slate-100 px-3 py-1 rounded-[0.5rem] border border-slate-200">
                                            {eachExperience.jobDuration}
                                        </span>
                                    </div>

                                    <a href={eachExperience.companyInfo.companyLink} target="_blank" rel="noopener noreferrer" className="text-[18px] text-sky-600 font-bold tracking-wide underline">
                                        {eachExperience.companyInfo.companyName}
                                    </a>

                                    <div className="mt-4 mr-56">
                                        {
                                            eachExperience.jobWorkSummary.map((item, index) => (
                                                <p key={index} className={`text-[16px] text-black leading-relaxed ${eachExperience.companyInfo === EXPERIENCE_INFO.PHISON.companyInfo ? 'mb-2' : 'mb-4'}`}>
                                                    {CustomizedTextRendering(item)}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}