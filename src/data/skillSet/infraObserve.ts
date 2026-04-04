import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const infraObserveInfo: SkillSectionData = {
    name: "Infra & Observability",
    iconURL: "fluent-color:cloud-words-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const infraObserve: Record<string, SkillSetItem> = {
    AWS: { name: "AWS", iconURL: "skill-icons:aws-light", needToCustomize: false },
    DOCKER: { name: "Docker", iconURL: "skill-icons:docker", needToCustomize: false },
    KUBERNETES: { name: "K8s", iconURL: "skill-icons:kubernetes", needToCustomize: false },
    CI_CD: { name: "CI / CD", iconURL: "customIcon/CICD.png", needToCustomize: true },
    JENKINS: { name: "Jenkins", iconURL: "skill-icons:jenkins-light", needToCustomize: false },
    GRAFANA: { name: "Grafana", iconURL: "skill-icons:grafana-light", needToCustomize: false },
    PROMETHEUS: { name: "Prometheus", iconURL: "skill-icons:prometheus", needToCustomize: false },
} as const;