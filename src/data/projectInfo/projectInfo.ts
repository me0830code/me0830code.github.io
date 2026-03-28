import type { ProjectItem } from "./interface/ProjectItem";

import { projectType } from "./projectType";
import { dataBase } from "../skillSet/dataBase";
import { frameworkLib } from "../skillSet/frameworkLib";
import { otherTool } from "../skillSet/otherTool";
import { otherSkill } from "../skillSet/otherSkill";
import { programmingLanguage } from "../skillSet/programmingLanguage";

import { PROJECT_LINK } from "../constant/generalLink";

export const PROJECT_INFO: ProjectItem[] = [
    {
        projectName: "Coupang",
        projectYear: "Active",
        projectDescription: [
            "Drove key backend features across Coupang’s **cart** and **checkout** systems, contributing to **1.2M** new premium members."
        ],
        projectPreviewImageURL: "projectPreview/Coupang.png",
        projectLinkURL: PROJECT_LINK.COUPANG,
        projectSkillSet: [
            programmingLanguage.JAVA,
            frameworkLib.SPRING_BOOT,
            otherTool.JENKINS,
            otherTool.DOCKER,
            // dataBase.MY_SQL,
            // dataBase.REDIS,
            // otherTool.GRAFANA
        ],
        projectTag: projectType.MOBILE_APP_AND_WEB
    },
    {
        projectName: "AE Job Radar",
        projectYear: "Dev in 2025",
        projectDescription: [
            "Designed an adapter-based **job crawler** that matched SEEK software roles with **New Zealand accredited employers** to surface eligible openings."
        ],
        projectPreviewImageURL: "projectPreview/AE_Job_Radar.png",
        projectLinkURL: PROJECT_LINK.AE_JOB_RADAR,
        projectSkillSet: [
            programmingLanguage.PYTHON,
            dataBase.MONGO_DB,
            otherSkill.SCHEDULER,
        ],
        projectTag: projectType.CRAWLER
    },
    {
        projectName: "Baseball Detection",
        projectYear: "Dev in 2021",
        projectDescription: [
            "Engineered a baseball trajectory analysis system by training and tuning **Fast-Moving-Object** detection models and deploying APIs on AWS.",
        ],
        projectPreviewImageURL: "projectPreview/Baseball_Detection.png",
        projectLinkURL: PROJECT_LINK.BASEBALL_DETECTION,
        projectSkillSet: [
            programmingLanguage.PYTHON,
            frameworkLib.FLASK,
            otherTool.DOCKER,
            otherTool.AWS,
        ],
        projectTag: projectType.AI_ML
    },
    {
        projectName: "Always Baseball",
        projectYear: "Dev in 2021",
        projectDescription: [
            "Created an iOS app for real-time baseball game updates using Swift and Firebase.",
        ],
        projectPreviewImageURL: "projectPreview/Always_Baseball.png",
        projectLinkURL: PROJECT_LINK.ALWAYS_BASEBALL,
        projectSkillSet: [
            programmingLanguage.SWIFT,
            dataBase.FIREBASE,
        ],
        projectTag: projectType.MOBILE_APP
    },
    {
        projectName: "NCKU Library",
        projectYear: "Dev in 2021",
        projectDescription: [
            "Built and launched the iOS app from 0 to 1 in collaboration with a UI/UX designer, reaching **12K** downloads.",
        ],
        projectPreviewImageURL: "projectPreview/NCKU_Library.png",
        projectLinkURL: PROJECT_LINK.NCKU_LIBRARY,
        projectSkillSet: [
            programmingLanguage.SWIFT,
            programmingLanguage.JAVA,
            frameworkLib.SPRING_BOOT,
            dataBase.MY_SQL,
        ],
        projectTag: projectType.MOBILE_APP
    },
    {
        projectName: "One Piece",
        projectYear: "Dev in 2020",
        projectDescription: [
            "Built a full-stack news website with Vue and FastAPI, streamlining delivery through CI/CD automation.",
        ],
        projectPreviewImageURL: "projectPreview/One_Piece.png",
        projectLinkURL: PROJECT_LINK.ONE_PIECE,
        projectSkillSet: [
            frameworkLib.VUE,
            programmingLanguage.PYTHON,
            frameworkLib.FAST_API,
            dataBase.MONGO_DB,
            // otherTool.DOCKER,
            // otherTool.JENKINS,
        ],
        projectTag: projectType.WEB
    },
    {
        projectName: "Oivita",
        projectYear: "Dev in 2020",
        projectDescription: [
            "Built an Apple Watch IoT app using **BLE** to control devices and collect sensor data for health analytics.",
        ],
        projectPreviewImageURL: "projectPreview/Oivita.png",
        projectLinkURL: PROJECT_LINK.OIVITA,
        projectSkillSet: [
            programmingLanguage.SWIFT,
            otherSkill.EMBEDDED,
            otherSkill.BLUETOOTH,
        ],
        projectTag: projectType.MOBILE_APP
    },
    {
        projectName: "Furkids",
        projectYear: "Dev in 2017",
        projectDescription: [
            "Engineered a real-time data pipeline for animal-shelter data, powering a connected iOS app that reached **1.6K** downloads."
        ],
        projectPreviewImageURL: "projectPreview/Furkids.png",
        projectLinkURL: PROJECT_LINK.FURKIDS,
        projectSkillSet: [
            programmingLanguage.SWIFT,
            programmingLanguage.PYTHON,
            frameworkLib.FLASK,
            dataBase.DYNAMO_DB,
        ],
        projectTag: projectType.MOBILE_APP
    }
] as const;

const ITEMS_PER_PAGE = 4;

export const TOTAL_PROJECT_GROUP: ProjectItem[][] = Array.from(
    { length: Math.ceil(Object.values(PROJECT_INFO).length / ITEMS_PER_PAGE) },
    (_, i) => Object.values(PROJECT_INFO).slice(i * ITEMS_PER_PAGE, i * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
);