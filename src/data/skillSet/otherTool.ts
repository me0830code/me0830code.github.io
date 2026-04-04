import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const otherToolInfo: SkillSectionData = {
    name: "Tools",
    iconURL: "fluent:window-dev-tools-24-regular",
} as const;

export const otherTool: Record<string, SkillSetItem> = {
    CLAUDE: { name: "Claude", iconURL: "logos:claude-icon", needToCustomize: false },
    WINDSURF: { name: "Windsurf", iconURL: "customIcon/Windsurf.png", needToCustomize: true },
    GIT: { name: "Git", iconURL: "skill-icons:git", needToCustomize: false },
    QT: { name: "QT", iconURL: "skill-icons:qt-light", needToCustomize: false },
    SONAR_QUBE: { name: "SonarQube", iconURL: "devicon:sonarqube", needToCustomize: false },
} as const;
