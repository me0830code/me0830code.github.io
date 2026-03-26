import type { ProjectItem } from "./interface/ProjectItem";

import { projectType } from "./projectType"
import { dataBase } from "../skillSet/dataBase";
import { frameworkLib } from "../skillSet/frameworkLib";
import { otherTool } from "../skillSet/otherTool";
import { programmingLanguage } from "../skillSet/programmingLanguage";

export const PROJECT_INFO: ProjectItem[] = [
    {
        projectName: "Project1",
        projectYear: "2026",
        projectDescription: [
            "This is first line",
            "This is second line"
        ],
        projectPreviewImageURL: "projectPreview/test.png",
        projectLinkURL: "https://www.google.com",
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
            otherTool.GRAFANA
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
] as const;

export const TOTAL_PROJECT = Object.values(PROJECT_INFO);