import type { SkillSetItem } from "./interface/SkillSetItem";

export const otherSkill: Record<string, SkillSetItem> = {
    SCHEDULER: { name: "Scheduler", iconURL: "twemoji:alarm-clock", needToCustomize: false},
    BLUETOOTH: { name: "Bluetooth", iconURL: "logos:bluetooth", needToCustomize: false},
    EMBEDDED: { name: "Embedded", iconURL: "customIcon/Embedded.png", needToCustomize: true},
} as const;
