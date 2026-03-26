import type { ContentSectionData } from "./interface/ContentSectionData"

import { AboutMe } from "../../component/RightContent/AboutMe";
import { ExperienceArea } from "../../component/RightContent/ExperienceArea";
import { ProjectCard } from "../../component/RightContent/ProjectCard";
import { SkillArea } from "../../component/RightContent/SkillArea";

export const CONTENT_SECTION: Record<string, ContentSectionData> = {
    AboutMe: { key: "AboutMe", sectionTitle: "About Me", componentUI: AboutMe},
    WorkExperience: { key: "WorkExperience", sectionTitle: "Work Experience", componentUI: ExperienceArea},
    SideProject: { key: "SideProject", sectionTitle: "Selected Projects", componentUI: ProjectCard},
    Skills: { key: "Skills", sectionTitle: "Technical Skills", componentUI: SkillArea}
} as const;

export type SectionKey = (typeof CONTENT_SECTION)[keyof typeof CONTENT_SECTION]["key"];

export const TOTAL_SECTION = Object.values(CONTENT_SECTION);