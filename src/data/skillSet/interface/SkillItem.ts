import type { SkillSetItem } from "./SkillSetItem";

export interface SkillItem {
    name: string;
    iconURL: string;
    skillSetItem: Record<string, SkillSetItem>;
}