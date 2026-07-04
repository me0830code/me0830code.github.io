import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const testingQualityInfo: SkillSectionData = {
    name: "Testing & Quality",
    iconURL: "fluent:cube-checkmark-24-regular",
} as const;

export const testingQuality: Record<string, SkillSetItem> = {
    JUNIT: { name: "JUnit", iconURL: "customIcon/JUnit.png", needToCustomize: true },
    GROOVY: { name: "Groovy", iconURL: "devicon:groovy", needToCustomize: false },
    MOCKITO: { name: "Mockito", iconURL: "customIcon/Mockito.png", needToCustomize: true },
    SONAR_QUBE: { name: "SonarQube", iconURL: "devicon:sonarqube", needToCustomize: false },
} as const;
