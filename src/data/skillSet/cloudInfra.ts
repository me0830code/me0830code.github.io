import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const cloudInfraInfo: SkillSectionData = {
    name: "Cloud & Infrastructure",
    iconURL: "fluent:cloud-cube-24-regular",
} as const;

export const cloudInfra: Record<string, SkillSetItem> = {
    AWS: { name: "AWS", iconURL: "skill-icons:aws-light", needToCustomize: false },
    DOCKER: { name: "Docker", iconURL: "skill-icons:docker", needToCustomize: false },
    KUBERNETES: { name: "K8s", iconURL: "skill-icons:kubernetes", needToCustomize: false },
    CI_CD: { name: "CI / CD", iconURL: "customIcon/CICD.png", needToCustomize: true },
    JENKINS: { name: "Jenkins", iconURL: "skill-icons:jenkins-light", needToCustomize: false },
    GITHUB_ACTION: { name: "GitHub Actions", iconURL: "skill-icons:githubactions-light", needToCustomize: false },
} as const;