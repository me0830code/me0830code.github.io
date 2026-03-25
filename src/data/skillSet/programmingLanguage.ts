import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const programmingLanguageInfo: SkillSectionData = {
    name: "Language",
    iconURL: "fluent-color:code-block-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const programmingLanguage: SkillSetItem[] = [
    { name: "Java", iconURL: "skill-icons:java-light", needToCustomize: false },
    { name: "Kotlin", iconURL: "skill-icons:kotlin-light", needToCustomize: false },
    { name: "Groovy", iconURL: "devicon:groovy", needToCustomize: false },

    { name: "Python", iconURL: "skill-icons:python-light", needToCustomize: false },
    { name: "C", iconURL: "skill-icons:c", needToCustomize: false },
    { name: "C++", iconURL: "skill-icons:cpp", needToCustomize: false },
    { name: "C#", iconURL: "skill-icons:cs", needToCustomize: false },

    { name: "Swift", iconURL: "skill-icons:swift", needToCustomize: false },
    { name: "Object-C", iconURL: "logos:apple", needToCustomize: false },

    { name: "JavaScript", iconURL: "skill-icons:javascript", needToCustomize: false }
] as const;