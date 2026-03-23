import type { SectionKey } from "../../data/constant/contentData";

import { useMemo } from "react";
import { AboutSection } from "./AboutMe";
import { CONTENT_SECTION } from "../../data/constant/contentData";

import { ProjectsSection } from "../../sections/ProjectsSection";
import { ExperienceSection } from "../../sections/ExperienceSection";


export function RightContent({ 
    active
}: { 
    active: SectionKey;
}) {
    const content = useMemo(() => {
        switch (active) {
            case CONTENT_SECTION.AboutMe.key:
            return <AboutSection />;
            case CONTENT_SECTION.SideProject.key:
            return <ProjectsSection />;
            case CONTENT_SECTION.WorkExperience.key:
            return <ExperienceSection />;
            default:
            return <AboutSection />;
        }
    }, [active]);
    
    return content;
}