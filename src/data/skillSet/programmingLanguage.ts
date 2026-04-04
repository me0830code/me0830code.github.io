import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const programmingLanguageInfo: SkillSectionData = {
    name: "Programming Languages",
    iconURL: "fluent-color:code-block-32",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const programmingLanguage: Record<string, SkillSetItem> = {
    JAVA: { name: "Java", iconURL: "skill-icons:java-light", needToCustomize: false },
    KOTLIN: { name: "Kotlin", iconURL: "skill-icons:kotlin-light", needToCustomize: false },
    TYPE_SCRIPT: { name: "TypeScript", iconURL: "skill-icons:typescript", needToCustomize: false },
    PYTHON: { name: "Python", iconURL: "skill-icons:python-light", needToCustomize: false },
    C: { name: "C", iconURL: "skill-icons:c", needToCustomize: false },
    C_PLUS_PLUS: { name: "C++", iconURL: "skill-icons:cpp", needToCustomize: false },
    SWIFT: { name: "Swift", iconURL: "skill-icons:swift", needToCustomize: false },
    SQL: { name: "SQL", iconURL: "devicon:azuresqldatabase", needToCustomize: false },
    C_SHARP: { name: "C#", iconURL: "skill-icons:cs", needToCustomize: false },
} as const;