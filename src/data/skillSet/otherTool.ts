import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const otherToolInfo: SkillSectionData = {
    name: "Tool",
    iconURL: "fluent-color:wrench-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const otherTool: SkillSetItem[] = [
    { name: "Claude", iconURL: "logos:claude-icon", needToCustomize: false },
    { name: "Windsurf", iconURL: "customIcon/Windsurf.png", needToCustomize: true },

    { name: "ElasticSearch", iconURL: "skill-icons:elasticsearch-light", needToCustomize: false },
    
    { name: "RESTful APIs", iconURL: "customIcon/RESTfulAPIs.png", needToCustomize: true },
    { name: "API Gateway", iconURL: "logos:aws-api-gateway", needToCustomize: false },

    { name: "Git", iconURL: "skill-icons:git", needToCustomize: false },
    { name: "GitHub Actions", iconURL: "skill-icons:githubactions-light", needToCustomize: false },
    { name: "AWS", iconURL: "skill-icons:aws-light", needToCustomize: false },
    { name: "Jenkins", iconURL: "skill-icons:jenkins-light", needToCustomize: false },
    { name: "Docker", iconURL: "skill-icons:docker", needToCustomize: false },
    { name: "Kubernetes", iconURL: "skill-icons:kubernetes", needToCustomize: false },
    { name: "Kafka", iconURL: "skill-icons:kafka", needToCustomize: false },
    { name: "SonarQube", iconURL: "devicon:sonarqube", needToCustomize: false },
    { name: "Grafana", iconURL: "skill-icons:grafana-light", needToCustomize: false },
] as const;
