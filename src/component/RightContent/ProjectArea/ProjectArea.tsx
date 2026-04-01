
import type { ComponentProps } from "../../../data/constant/interface/ComponentProps";

import { useEffect, useMemo, useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectScrollButton } from "./ProjectScrollButton";
import { ProjectScrollDirection } from "../../../data/projectInfo/projectScroll";

import { BREAK_POINT } from "../../../data/constant/constant";
import { TOTAL_PROJECT_LIST } from "../../../data/projectInfo/projectInfo";

function chunkProjects<T>(items: T[], chunkSize: number): T[][] {
    return Array.from(
        { length: Math.ceil(items.length / chunkSize) },
        (_, i) => items.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
}

export function ProjectArea({ sectionTitle }: ComponentProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;

            if (width >= BREAK_POINT.DESKTOP) {
                setItemsPerPage(4);
            } else if (width >= BREAK_POINT.MOBILE) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const groupedProjects = useMemo(
        () => chunkProjects(TOTAL_PROJECT_LIST, itemsPerPage),
        [itemsPerPage]
    );

    return (
        <div className="flex flex-col gap-6 md:gap-10">
            <section className="relative rounded-[0.5rem] border border-slate-100 bg-white px-4 pt-20 pb-6 shadow-sm backdrop-blur sm:px-6 sm:pt-24 sm:pb-8 md:px-5 md:pt-25 md:pb-5">
                <div className="absolute top-0 left-0 flex h-11 w-44 items-center justify-center rounded-tl-[0.5rem] rounded-br-[0.5rem] bg-blue-500 px-4 py-2 sm:h-12 sm:w-52 sm:px-6 sm:py-2.5">
                    <span className="text-base font-bold leading-none tracking-tight text-white sm:text-[18px]">
                        {sectionTitle}
                    </span>
                </div>

                <div className="mb-3 flex items-center justify-end md:hidden">
                    <div className="flex flex-row">
                        <span className="mb-3 mr-1 text-sm font-bold tracking-wide text-[#ff3224]">
                            Swipe to view more
                        </span>

                        <img src="customIcon/SwipeArrow.png" alt="SwipeArrow" className="h-5 w-5 object-contain"/>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="hidden md:block">
                        <ProjectScrollButton scrollRef={scrollRef} curDirection={ProjectScrollDirection.LEFT}/>
                    </div>

                    <div className="min-w-0 flex-1 overflow-hidden">
                        <div ref={scrollRef} className="no-scrollbar flex overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing" style={{scrollbarWidth: "none", msOverflowStyle: "none", userSelect: "none"}}>
                            {
                                groupedProjects.map((projectGroup, index) => (
                                    <div key={index} className="grid w-[92%] shrink-0 snap-start grid-cols-1 gap-4 p-1 md:w-full md:grid-cols-2 md:gap-5 md:p-2 xl:grid-cols-2 xl:gap-8 xl:p-4">
                                        {
                                            projectGroup.map((eachProject) => (
                                                <ProjectCard key={eachProject.projectName} {...eachProject}/>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <ProjectScrollButton scrollRef={scrollRef} curDirection={ProjectScrollDirection.RIGHT}/>
                    </div>
                </div>
            </section>
        </div>
    );
}