import type { ProjectItem } from "./interface/ProjectItem";

import { projectType } from "./projectType";
import { dataBase } from "../skillSet/dataBase";
import { frameworkLib } from "../skillSet/frameworkLib";
import { otherTool } from "../skillSet/otherTool";
import { programmingLanguage } from "../skillSet/programmingLanguage";

export const PROJECT_INFO: ProjectItem[] = [
    {
        projectName: "AE Job Radar",
        projectYear: "2025",
        projectDescription: [
            "Hello"
        ],
        projectPreviewImageURL: "https://github.com/me0830code/Demo_AEJobsRadar/blob/main/Arch.png?raw=true",
        projectLinkURL: "https://github.com/me0830code/Demo_AEJobsRadar",
        projectSkillSet: [
            dataBase.SQL
        ],
        projectTag: projectType.WEB
    },
    {
        projectName: "Project2",
        projectYear: "2026",
        projectDescription: [
            "This is first line",
            "This is second line"
        ],
        projectPreviewImageURL: "projectPreview/test.png",
        projectLinkURL: "https://www.google.com",
        projectSkillSet: [
            dataBase.SQL,
            frameworkLib.SPRING_BOOT
        ],
        projectTag: projectType.CRAWLER
    },
    {
        projectName: "Project3",
        projectYear: "2026",
        projectDescription: [
            "This is first line",
            "This is second line"
        ],
        projectPreviewImageURL: "projectPreview/test.png",
        projectLinkURL: "https://www.google.com",
        projectSkillSet: [
            dataBase.SQL,
        ],
        projectTag: projectType.AI_ML
    },
    {
        projectName: "Project4",
        projectYear: "2026",
        projectDescription: [
            "This is first line",
            "This is second line"
        ],
        projectPreviewImageURL: "projectPreview/test.png",
        projectLinkURL: "https://www.google.com",
        projectSkillSet: [
            dataBase.SQL,
            programmingLanguage.C_PLUS_PLUS
        ],
        projectTag: projectType.MOBILE_APP
    },
    {
        projectName: "Project5",
        projectYear: "2026",
        projectDescription: [
            "This is first line",
            "This is second line"
        ],
        projectPreviewImageURL: "projectPreview/test.png",
        projectLinkURL: "https://www.google.com",
        projectSkillSet: [
            dataBase.SQL,
        ],
        projectTag: projectType.AI_ML
    },
    {
        projectName: "Project6",
        projectYear: "2026",
        projectDescription: [
            "This is first line",
            "This is second line"
        ],
        projectPreviewImageURL: "projectPreview/test.png",
        projectLinkURL: "https://www.google.com",
        projectSkillSet: [
            dataBase.SQL,
        ],
        projectTag: projectType.AI_ML
    },
    {
        projectName: "Project7",
        projectYear: "2026",
        projectDescription: [
            "This is first line",
            "This is second line"
        ],
        projectPreviewImageURL: "projectPreview/test.png",
        projectLinkURL: "https://www.google.com",
        projectSkillSet: [
            dataBase.SQL,
            otherTool.GRAFANA,
            otherTool.CLAUDE,
            otherTool.WINDSURF,
            otherTool.JENKINS,
            otherTool.GITHUB_ACTION,
            programmingLanguage.KOTLIN,
            programmingLanguage.C_PLUS_PLUS,
        ],
        projectTag: projectType.AI_ML
    },
] as const;

const ITEMS_PER_PAGE = 4;

export const TOTAL_PROJECT_GROUP: ProjectItem[][] = Array.from(
    { length: Math.ceil(Object.values(PROJECT_INFO).length / ITEMS_PER_PAGE) },
    (_, i) => Object.values(PROJECT_INFO).slice(i * ITEMS_PER_PAGE, i * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
);