import type { SkillItem } from "./interface/SkillItem";

import { dataBaseInfo, dataBase } from './dataBase';
import { frameworkLibInfo, frameworkLib } from './frameworkLib';
import { otherToolInfo, otherTool } from './otherTool';
import { programmingLanguageInfo, programmingLanguage } from './programmingLanguage';

export const MY_SKILL: SkillItem[] = [
    {
        name: programmingLanguageInfo.name,
        iconURL: programmingLanguageInfo.iconURL,
        textColor: programmingLanguageInfo.textColor,
        backgroundColor: programmingLanguageInfo.backgroundColor,
        skillSetItem: programmingLanguage
    },
    {
        name: dataBaseInfo.name,
        iconURL: dataBaseInfo.iconURL,
        textColor: dataBaseInfo.textColor,
        backgroundColor: dataBaseInfo.backgroundColor,
        skillSetItem: dataBase
    },
    {
        name: frameworkLibInfo.name,
        iconURL: frameworkLibInfo.iconURL,
        textColor: frameworkLibInfo.textColor,
        backgroundColor: frameworkLibInfo.backgroundColor,
        skillSetItem: frameworkLib
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