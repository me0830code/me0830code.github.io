
import type { ComponentProps } from "../../../data/constant/interface/ComponentProps";

import { useRef } from 'react';
import { TOTAL_PROJECT_GROUP } from "../../../data/projectInfo/projectInfo";
import { ProjectCard } from "./ProjectCard";
import { ProjectScrollButton } from "./ProjectScrollButton";
import { ProjectScrollDirection } from "../../../data/projectInfo/projectScroll";

export function ProjectArea({ sectionTitle }: ComponentProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex flex-col gap-10">
            <section className="relative pl-5 pr-5 pt-25 pb-5 rounded-[0.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                <div className="absolute top-0 left-0 px-6 py-2.5 bg-blue-500 rounded-tl-[0.5rem] rounded-br-[0.5rem] w-52 h-12 flex items-center justify-center">
                    <span className="text-[18px] tracking-tight text-white font-bold leading-none">
                        {sectionTitle}
                    </span>
                </div>
                
                <div className="flex flex-row items-center"> 
                    <ProjectScrollButton scrollRef={scrollRef} curDirection={ProjectScrollDirection.LEFT}/>

                    <div className="flex overflow-hidden">
                        <div ref={scrollRef} className="flex flex-row overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', userSelect: 'none'}}>
                            {
                                TOTAL_PROJECT_GROUP.map((eachProjecyGroup, index) => (
                                    <div key={index} className="w-full shrink-0 snap-start grid grid-cols-1 xl:grid-cols-2 gap-8 p-4 items-start">
                                        {
                                            eachProjecyGroup.map((eachProject) => (
                                                <ProjectCard key={eachProject.projectName} {...eachProject} />
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <ProjectScrollButton scrollRef={scrollRef} curDirection={ProjectScrollDirection.RIGHT}/>
                </div>
            </section>
        </div>
    );
}