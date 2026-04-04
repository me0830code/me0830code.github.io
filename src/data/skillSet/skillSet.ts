import type { SkillItem } from "./interface/SkillItem";

import { programmingLanguageInfo, programmingLanguage } from "./programmingLanguage";
import { backendArchInfo, backendArch } from "./backendArch";
import { frontendDevInfo, frontendDev } from "./frontendDev";
import { dataBaseSearchInfo, dataBaseSearch } from "./dataBaseSearch";
import { infraObserveInfo, infraObserve } from "./infraObserve";
import { otherToolInfo, otherTool } from "./otherTool";

export const MY_SKILL: SkillItem[] = [
    {
        name: programmingLanguageInfo.name,
        iconURL: programmingLanguageInfo.iconURL,
        skillSetItem: programmingLanguage
    },
    {
        name: backendArchInfo.name,
        iconURL: backendArchInfo.iconURL,
        skillSetItem: backendArch
    },
    {
        name: frontendDevInfo.name,
        iconURL: frontendDevInfo.iconURL,
        skillSetItem: frontendDev
    },
    {
        name: dataBaseSearchInfo.name,
        iconURL: dataBaseSearchInfo.iconURL,
        skillSetItem: dataBaseSearch
    },
    {
        name: infraObserveInfo.name,
        iconURL: infraObserveInfo.iconURL,
        skillSetItem: infraObserve
    },
    {
        name: otherToolInfo.name,
        iconURL: otherToolInfo.iconURL,
        skillSetItem: otherTool
    },
] as const;

export const TOTAL_SKILL = Object.values(MY_SKILL);