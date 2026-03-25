import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const frameworkLibInfo: SkillSectionData = {
    name: "Framework & Lib",
    iconURL: "fluent-color:star-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const frameworkLib: SkillSetItem[] = [
    { name: "React", iconURL: "skill-icons:swift", needToCustomize: false },
    { name: "Vue", iconURL: "skill-icons:vuejs-light", needToCustomize: false },
    { name: ".NET", iconURL: "skill-icons:dotnet", needToCustomize: false },

    { name: "Spring Boot", iconURL: "customIcon/SpringBoot.png", needToCustomize: true },
    { name: "Mockito", iconURL: "customIcon/Mockito.png", needToCustomize: true },
    { name: "JUnit", iconURL: "customIcon/JUnit.png", needToCustomize: true },

    { name: "QT", iconURL: "skill-icons:qt-light", needToCustomize: false },
    { name: "Flask", iconURL: "skill-icons:flask-light", needToCustomize: false },
    { name: "FastAPI", iconURL: "skill-icons:fastapi", needToCustomize: false },
] as const;