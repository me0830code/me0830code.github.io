import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const systemToolInfo: SkillSectionData = {
    name: "Systems & Tooling",
    iconURL: "fluent:window-dev-tools-24-regular",
} as const;

export const systemTool: Record<string, SkillSetItem> = {
    C: { name: "C", iconURL: "skill-icons:c", needToCustomize: false },
    C_PLUS_PLUS: { name: "C++", iconURL: "skill-icons:cpp", needToCustomize: false },
    PYTHON: { name: "Python", iconURL: "skill-icons:python-light", needToCustomize: false },
    QT: { name: "QT", iconURL: "skill-icons:qt-light", needToCustomize: false },
    FLASK: { name: "Flask", iconURL: "skill-icons:flask-light", needToCustomize: false },
} as const;
