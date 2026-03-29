import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const frameworkLibInfo: SkillSectionData = {
    name: "Framework & Lib",
    iconURL: "fluent-color:star-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const frameworkLib: Record<string, SkillSetItem> = {
    REACT: { name: "React", iconURL: "skill-icons:react-dark", needToCustomize: false },
    VUE: { name: "Vue", iconURL: "skill-icons:vuejs-light", needToCustomize: false },
    DOT_NET: { name: ".NET", iconURL: "skill-icons:dotnet", needToCustomize: false },

    SPRING_BOOT: { name: "Spring Boot", iconURL: "customIcon/SpringBoot.png", needToCustomize: true },
    MOCKITO: { name: "Mockito", iconURL: "customIcon/Mockito.png", needToCustomize: true },
    JUNIT: { name: "JUnit", iconURL: "customIcon/JUnit.png", needToCustomize: true },

    QT: { name: "QT", iconURL: "skill-icons:qt-light", needToCustomize: false },
    FLASK: { name: "Flask", iconURL: "skill-icons:flask-light", needToCustomize: false },
    FAST_API: { name: "FastAPI", iconURL: "skill-icons:fastapi", needToCustomize: false },
} as const;