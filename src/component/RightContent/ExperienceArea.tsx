import type { ComponentProps } from "../../data/constant/interface/ComponentProps";

import { CustomizedTextRendering } from "../Others/Helper";
import { SkillBadge } from "./SkillArea/SkillBadge";

import { TOTAL_EXPERIENCE, EXPERIENCE_INFO } from "../../data/experienceInfo/experienceInfo";

export function ExperienceArea({ sectionTitle }: ComponentProps) {
    return (
        <div className="flex flex-col gap-6 md:gap-10">
            <section className="relative rounded-[0.5rem] border border-slate-100 bg-white px-4 pt-20 pb-8 shadow-sm backdrop-blur sm:px-6 sm:pt-24 sm:pb-10 md:px-10 md:pt-25 md:pb-10">
                <div className="absolute top-0 left-0 flex h-11 w-44 items-center justify-center rounded-tl-[0.5rem] rounded-br-[0.5rem] bg-blue-500 px-4 py-2 sm:h-12 sm:w-52 sm:px-6 sm:py-2.5">
                    <span className="text-base font-bold leading-none tracking-tight text-white sm:text-[18px]">
                        {sectionTitle}
                    </span>
                </div>

                <div className="relative mt-2 pl-4 sm:pl-6 md:mt-4 md:ml-10 md:pl-0">
                    <div className="space-y-10 md:space-y-12">
                        {
                            Object.entries(TOTAL_EXPERIENCE).map(([eachKey, eachExperience], index, array) => {
                                const isLastItem = index === array.length - 1;

                                return (
                                    <div key={eachKey} className={`relative pl-24 sm:pl-28 md:pl-20 ${eachExperience.companyInfo === EXPERIENCE_INFO.PHISON.companyInfo ? "mb-0" : "mb-4 md:mb-6"}`}>
                                        {
                                            !isLastItem && (
                                                <div className="absolute left-8 top-[72px] bottom-[-1.5rem] w-0 border-l-2 border-dashed border-slate-200 sm:left-9 sm:top-20 md:left-[1px] md:top-12 md:bottom-[-2rem]"/>
                                            )
                                        }

                                        <a href={eachExperience.companyInfo.companyLink} target="_blank" rel="noopener noreferrer" className="absolute left-0 top-2 z-10 flex h-16 w-16 items-center justify-center rounded-md border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110 sm:h-[72px] sm:w-[72px] md:left-[-50px] md:top-1 md:h-10 md:w-27 md:hover:scale-125">
                                            <img src={eachExperience.companyInfo.logoURL} alt={eachExperience.companyInfo.companyName} className={`h-full w-full object-contain p-2 ${eachExperience.companyInfo === EXPERIENCE_INFO.COUPANG.companyInfo ? "translate-y-0 md:translate-y-1" : "translate-y-0"}`}/>
                                        </a>

                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-col gap-3 md:gap-2">
                                                <div className="flex flex-col gap-2 [@media(orientation:landscape)]:flex-row [@media(orientation:landscape)]:items-center [@media(orientation:landscape)]:justify-between md:flex-row md:items-center md:justify-between">
                                                    <h4 className="text-lg font-black text-black sm:text-[20px]">
                                                        {eachExperience.jobRole}
                                                    </h4>

                                                    <span className="w-fit text-xs font-medium text-slate-600 [@media(orientation:landscape)]:ml-auto [@media(orientation:landscape)]:inline-flex [@media(orientation:landscape)]:items-center [@media(orientation:landscape)]:rounded-[0.5rem] [@media(orientation:landscape)]:border [@media(orientation:landscape)]:border-slate-200 [@media(orientation:landscape)]:bg-slate-100 [@media(orientation:landscape)]:px-3 [@media(orientation:landscape)]:py-1 [@media(orientation:landscape)]:text-sm [@media(orientation:landscape)]:font-semibold [@media(orientation:landscape)]:text-black md:ml-0 md:inline-flex md:items-center md:rounded-[0.5rem] md:border md:border-slate-200 md:bg-slate-100 md:px-3 md:py-1 md:text-sm md:font-semibold md:text-black">
                                                        {eachExperience.jobDuration}
                                                    </span>
                                                </div>

                                                <a href={eachExperience.companyInfo.companyLink} target="_blank" rel="noopener noreferrer" className="text-base font-bold tracking-wide text-sky-600 underline sm:text-[18px]">
                                                    {eachExperience.companyInfo.companyName}
                                                </a>

                                                <div className="flex flex-wrap gap-2 md:gap-4">
                                                    {
                                                        Object.entries(eachExperience.jobSkillSet).map(([eachKey, eachTotalItem]) => (
                                                            <SkillBadge key={eachKey} eachSkillSetItem={eachTotalItem} needPrefixIcon={false}/>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                            <div className="mt-1 md:mt-4 md:mr-20 lg:mr-32 xl:mr-56">
                                                {
                                                    eachExperience.jobWorkSummary.map((item, index) => (
                                                        <p key={index} className={`text-[15px] leading-7 text-black sm:text-[16px] ${eachExperience.companyInfo === EXPERIENCE_INFO.PHISON.companyInfo ? "mb-2" : "mb-3 md:mb-4"}`}>
                                                            {CustomizedTextRendering(item)}
                                                        </p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}