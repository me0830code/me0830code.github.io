import type { ProjectItem } from "../../../data/projectInfo/interface/ProjectItem";

import { SkillBadge } from "../SkillArea/SkillBadge";
import { CustomizedTextRendering } from "../../Others/Helper";

export function ProjectCard({
    projectName,
    projectYear,
    projectDescription,
    projectPreviewImageURL,
    projectLinkURL,
    projectSkillSet,
    projectTag,
}: ProjectItem) {
    return (
        <a
            href={projectLinkURL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-6 rounded-[0.5rem] border border-slate-100 bg-[#F8FAFC] p-5 transition-all duration-300 hover:bg-white hover:shadow-[0_25px_20px_-15px_rgba(0,0,0,0.1)] md:p-8 min-[1440px]:flex-row min-[1440px]:items-start min-[1440px]:gap-8 min-[1440px]:p-10"
        >
            <div className="absolute top-0 right-0 rounded-tr-[0.5rem] rounded-bl-[0.5rem] border-l border-b border-slate-100 bg-white px-3 py-1.5 shadow-sm transition-all duration-300 group-hover:border-sky-600 group-hover:bg-sky-600 sm:px-4 sm:py-2 md:px-6 md:py-2.5">
                <span className="text-sm font-bold text-slate-400 group-hover:text-white sm:text-[16px]">
                    {projectTag}
                </span>
            </div>

            <div className="order-1 mt-10 flex flex-col min-[1440px]:order-2 min-[1440px]:mt-10 min-[1440px]:flex-none">
                <div className="mx-auto w-24 overflow-hidden rounded-[1.75rem] border border-slate-200/50 bg-white shadow-inner transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl sm:w-[110px]">
                    <div className="aspect-square">
                        <img
                            src={projectPreviewImageURL}
                            alt={projectName}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            <div className="order-2 flex min-w-0 flex-1 flex-col justify-start min-[1440px]:order-1 min-[1440px]:py-2">
                <div>
                    <h4 className="pr-14 text-2xl font-bold tracking-tight text-black transition-colors group-hover:text-sky-600 sm:pr-20 sm:text-[24px]">
                        {projectName}
                    </h4>

                    <div className="mt-1 mb-4">
                        <span className="text-[12px] font-bold tracking-widest text-slate-600">
                            {projectYear}
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 min-[1440px]:flex-row min-[1440px]:items-start">
                        <div className="flex-1">
                            {projectDescription.map((eachDescription, index) => (
                                <p
                                    key={index}
                                    className="mr-0 text-[15px] leading-7 text-black sm:text-[16px] min-[1440px]:mr-4"
                                >
                                    {CustomizedTextRendering(eachDescription)}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="my-5 border-t border-slate-200 md:mb-6" />

                <div className="flex flex-wrap gap-2.5">
                    {projectSkillSet.map((eachSkill) => (
                        <SkillBadge key={eachSkill.name} eachSkillSetItem={eachSkill} />
                    ))}
                </div>
            </div>
        </a>
    );
}

export function ProjectCard2({projectName, projectYear, projectDescription, projectPreviewImageURL, projectLinkURL, projectSkillSet, projectTag}: ProjectItem) {    
    return (
        <a href={projectLinkURL} target="_blank" rel="noopener noreferrer" className="group relative flex flex-row items-start gap-8 p-10 rounded-[0.5rem] bg-[#F8FAFC] border border-slate-100 hover:bg-white hover:shadow-[0_25px_20px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 right-0 px-6 py-2.5 bg-white border-l border-b border-slate-100 rounded-tr-[0.5rem] rounded-bl-[0.5rem] group-hover:bg-sky-600 group-hover:border-sky-600 transition-all duration-300 z-20 shadow-sm">
                <span className="text-[16px] font-bold text-slate-400 group-hover:text-white">
                    {projectTag}
                </span>
            </div>

            <div className="flex-[1.5] flex flex-col justify-start py-2">
                <div>
                    <div className="flex flex-row">
                        <div>
                            <h4 className="text-[24px] font-bold text-black tracking-tight group-hover:text-sky-600 transition-colors">
                                {projectName}
                            </h4>

                            <div className="mt-1 mb-4">
                                <span className="text-[12px] font-bold text-slate-600 tracking-widest">
                                    {projectYear}
                                </span>
                            </div>

                            <div className="flex flex-row items-start">
                                <div className="flex-1">
                                    {
                                        projectDescription.map((eachDescription, index) => (
                                            <p key={index} className="text-black text-[16px] leading-relaxed mr-4">
                                                {CustomizedTextRendering(eachDescription)}
                                            </p>
                                        ))
                                    }
                                </div>

                                <div className="flex-none shrink-0 flex justify-end">
                                    <div className="relative w-[110px] h-[110px] aspect-square -translate-y-[calc(30%-12px)] overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/50 shadow-inner group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                                            <img src={projectPreviewImageURL} alt={projectName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mb-6 border-t-1 border-slate-200"/>

                <div className="flex flex-wrap gap-2.5">
                    {
                        projectSkillSet.map((eachSkill) => (
                            <SkillBadge key={eachSkill.name} eachSkillSetItem={eachSkill}/>
                        ))
                    }
                </div>
            </div>
        </a>
    );
}