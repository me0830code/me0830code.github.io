import type { ComponentProps } from "../../data/constant/interface/ComponentProps";

import { TOTAL_PROJECT } from "../../data/projectInfo/projectInfo";
import { ProjectCard } from "./ProjectCard";

export function ProjectArea({ sectionTitle }: ComponentProps) {
    return (
        <div className="flex flex-col gap-10">
            <section className="relative pl-10 pr-10 pt-20 pb-10 rounded-[0.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                <div className="absolute top-0 left-0 px-6 py-2.5 bg-blue-500 rounded-tl-[0.5rem] rounded-br-[0.5rem] w-52 h-12 flex items-center justify-center">
                    <span className="text-[18px] tracking-tight text-white font-bold leading-none">
                        {sectionTitle}
                    </span>
                </div>

                <div className="mt-9 grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {
                        TOTAL_PROJECT.map((eachProject) => (
                            <ProjectCard key={eachProject.projectName} {... eachProject}/>
                        ))
                    }
                </div>
            </section>
        </div>
    );
}