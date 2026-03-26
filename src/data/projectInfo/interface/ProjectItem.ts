import type { SkillSetItem } from "../../skillSet/interface/SkillSetItem";

export interface ProjectItem {
    projectName: string;
    projectYear: string;
    projectDescription: string[];
    projectPreviewImageURL: string;
    projectLinkURL: string;
    projectSkillSet: SkillSetItem[];
    projectTag: string;
}