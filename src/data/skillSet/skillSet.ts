import type { SkillItem } from "./interface/SkillItem";

import { backendEngInfo, backendEng } from "./backendEng";
import { cloudInfraInfo, cloudInfra } from "./cloudInfra";
import { dataObserveInfo, dataObserve } from "./dataObserve";
import { testingQualityInfo, testingQuality } from "./testingQuality";
import { systemToolInfo, systemTool } from "./systemTool";
import { additionalSkillInfo, additionalSkill } from "./additionalSkill";

export const MY_SKILL: SkillItem[] = [
    {
        name: backendEngInfo.name,
        iconURL: backendEngInfo.iconURL,
        skillSetItem: backendEng
    },
    {
        name: cloudInfraInfo.name,
        iconURL: cloudInfraInfo.iconURL,
        skillSetItem: cloudInfra
    },
    {
        name: dataObserveInfo.name,
        iconURL: dataObserveInfo.iconURL,
        skillSetItem: dataObserve
    },
    {
        name: testingQualityInfo.name,
        iconURL: testingQualityInfo.iconURL,
        skillSetItem: testingQuality
    },
    {
        name: systemToolInfo.name,
        iconURL: systemToolInfo.iconURL,
        skillSetItem: systemTool
    },
    {
        name: additionalSkillInfo.name,
        iconURL: additionalSkillInfo.iconURL,
        skillSetItem: additionalSkill
    },
] as const;

export const TOTAL_SKILL = Object.values(MY_SKILL);