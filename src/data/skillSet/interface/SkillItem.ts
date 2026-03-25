import type { SkillSetItem } from "./SkillSetItem"

export interface SkillItem {
    name: string;
    iconURL: string;
    textColor: string;
    backgroundColor: string;
    skillSetItem: SkillSetItem[];
}