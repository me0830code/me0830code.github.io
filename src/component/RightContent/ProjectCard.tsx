import type { ProjectItem } from "../../data/projectInfo/interface/ProjectItem";

export function ProjectCard({projectName, projectYear, projectDescription, projectPreviewImageURL, projectLinkURL, projectSkillSet, projectTag}: ProjectItem) {
    return (
        <a href={projectLinkURL} target="_blank" rel="noopener noreferrer" className="group relative flex flex-row items-start gap-8 p-10 rounded-[0.5rem] bg-[#F8FAFC] border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 min-h-[300px]">
            <div className="absolute top-0 right-0 px-6 py-2.5 bg-white border-l border-b border-slate-100 rounded-tr-[0.5rem] rounded-bl-[0.5rem] group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-500 z-20 shadow-sm">
                <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 group-hover:text-white uppercase">
                    {projectTag} 
                </span>
            </div>

            <div className="flex-[1.5] flex flex-col justify-between self-stretch py-2">
                <div>
                    <div className="mb-4">
                        <h4 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                            {projectName}
                        </h4>

                        <span className="text-[11px] font-bold text-slate-400 tracking-widest">
                            Dev in {projectYear}
                        </span>
                    </div>

                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                        {projectDescription[0]}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-8">
                    {
                        projectSkillSet.map((eachSkill) => (
                            <span key={eachSkill.name} className="px-3 py-1 bg-white text-[9px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 rounded-lg group-hover:text-blue-500 group-hover:border-blue-100 transition-all shadow-sm">
                                {eachSkill.name}
                            </span>
                        ))
                    }
                </div>
            </div>

            <div className="flex-1 shrink-0 flex items-center justify-end h-full">
                <div className="relative w-full max-w-[180px] aspect-square overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/50 shadow-inner group-hover:shadow-2xl transition-all duration-700">
                    <img src={projectPreviewImageURL} alt={projectName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"/>
                </div>
            </div>
        </a>
    );
}