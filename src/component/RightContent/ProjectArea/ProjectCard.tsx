import type { ProjectItem } from "../../../data/projectInfo/interface/ProjectItem";

import { SkillBadge } from "../SkillArea/SkillBadge";
import { CustomizedTextRendering } from "../../Others/Helper";

export function ProjectCard({projectName, projectYear, projectDescription, projectPreviewImageURL, projectLinkURL, projectSkillSet, projectTag}: ProjectItem) {    
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