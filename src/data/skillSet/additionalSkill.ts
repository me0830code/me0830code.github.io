import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const additionalSkillInfo: SkillSectionData = {
    name: "Additional",
    iconURL: "fluent:text-bullet-list-square-sparkle-24-regular",
} as const;

export const additionalSkill: Record<string, SkillSetItem> = {
    CLAUDE: { name: "Claude", iconURL: "logos:claude-icon", needToCustomize: false },
    WINDSURF: { name: "Windsurf", iconURL: "customIcon/Windsurf.png", needToCustomize: true },
    DEVIN: { name: "Devin", iconURL: "customIcon/Devin.png", needToCustomize: true },
    TYPE_SCRIPT: { name: "TypeScript", iconURL: "skill-icons:typescript", needToCustomize: false },
    REACT: { name: "React", iconURL: "skill-icons:react-dark", needToCustomize: false },
    VUE: { name: "Vue", iconURL: "skill-icons:vuejs-light", needToCustomize: false },
    MONGO_DB: { name: "MongoDB", iconURL: "skill-icons:mongodb", needToCustomize: false },
    C_SHARP: { name: "C#", iconURL: "skill-icons:cs", needToCustomize: false },
    SWIFT: { name: "Swift", iconURL: "skill-icons:swift", needToCustomize: false },
} as const;
