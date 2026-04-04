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
        textColor: programmingLanguageInfo.textColor,
        backgroundColor: programmingLanguageInfo.backgroundColor,
        skillSetItem: programmingLanguage
    },
    {
        name: backendArchInfo.name,
        iconURL: backendArchInfo.iconURL,
        textColor: backendArchInfo.textColor,
        backgroundColor: backendArchInfo.backgroundColor,
        skillSetItem: backendArch
    },
    {
        name: frontendDevInfo.name,
        iconURL: frontendDevInfo.iconURL,
        textColor: frontendDevInfo.textColor,
        backgroundColor: frontendDevInfo.backgroundColor,
        skillSetItem: frontendDev
    },
    {
        name: dataBaseSearchInfo.name,
        iconURL: dataBaseSearchInfo.iconURL,
        textColor: dataBaseSearchInfo.textColor,
        backgroundColor: dataBaseSearchInfo.backgroundColor,
        skillSetItem: dataBaseSearch
    },
    {
        name: infraObserveInfo.name,
        iconURL: infraObserveInfo.iconURL,
        textColor: infraObserveInfo.textColor,
        backgroundColor: infraObserveInfo.backgroundColor,
        skillSetItem: infraObserve
    },
    {
        name: otherToolInfo.name,
        iconURL: otherToolInfo.iconURL,
        textColor: otherToolInfo.textColor,
        backgroundColor: otherToolInfo.backgroundColor,
        skillSetItem: otherTool
    },
] as const;

export const TOTAL_SKILL = Object.values(MY_SKILL);