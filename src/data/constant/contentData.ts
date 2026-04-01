import type { ContentSectionData } from "./interface/ContentSectionData";

import { AboutMe } from "../../component/RightContent/AboutMe/AboutMe";
import { ExperienceArea } from "../../component/RightContent/ExperienceArea";
import { ProjectArea } from "../../component/RightContent/ProjectArea/ProjectArea";
import { SkillArea } from "../../component/RightContent/SkillArea/SkillArea";
import { ProfileHeader } from "../../component/ProfileHeader/ProfileHeader";

export const TOP_SECTION: Record<string, ContentSectionData> = {
    ProfileHeader: { key: "ProfileHeader", sectionTitle: "ProfileHeader", componentUI: ProfileHeader},
}

export const CONTENT_SECTION: Record<string, ContentSectionData> = {
    AboutMe: { key: "AboutMe", sectionTitle: "Hello World 😊", componentUI: AboutMe},
    WorkExperience: { key: "WorkExperience", sectionTitle: "Work Experience", componentUI: ExperienceArea},
    SideProject: { key: "SideProject", sectionTitle: "Selected Projects", componentUI: ProjectArea},
    Skills: { key: "Skills", sectionTitle: "Technical Skills", componentUI: SkillArea}
} as const;

export type SectionKey = (typeof CONTENT_SECTION)[keyof typeof CONTENT_SECTION]["key"];

export const TOTAL_SECTION = Object.values(CONTENT_SECTION);