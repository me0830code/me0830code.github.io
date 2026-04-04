import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const frontendDevInfo: SkillSectionData = {
    name: "Frontend Development",
    iconURL: "fluent-color:text-bullet-list-square-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const frontendDev: Record<string, SkillSetItem> = {
    REACT: { name: "React", iconURL: "skill-icons:react-dark", needToCustomize: false },
    VUE: { name: "Vue", iconURL: "skill-icons:vuejs-light", needToCustomize: false },

    TAILWIND_CSS: { name: "TailwindCSS", iconURL: "skill-icons:vuejs-light", needToCustomize: false },
    RWD: { name: "Responsive Web Design (RWD)", iconURL: "skill-icons:vuejs-light", needToCustomize: false },

} as const;