import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const otherToolInfo: SkillSectionData = {
    name: "Tool",
    iconURL: "fluent-color:wrench-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const otherTool: Record<string, SkillSetItem> = {
    CLAUDE: { name: "Claude", iconURL: "logos:claude-icon", needToCustomize: false },
    WINDSURF: { name: "Windsurf", iconURL: "customIcon/Windsurf.png", needToCustomize: true },

    ELASTIC_SEARCH: { name: "ElasticSearch", iconURL: "skill-icons:elasticsearch-light", needToCustomize: false },
    
    RESTFUL_API: { name: "RESTful APIs", iconURL: "customIcon/RESTfulAPIs.png", needToCustomize: true },
    API_GATEWAY: { name: "API Gateway", iconURL: "logos:aws-api-gateway", needToCustomize: false },

    GIT: { name: "Git", iconURL: "skill-icons:git", needToCustomize: false },
    GITHUB_ACTION: { name: "GitHub Actions", iconURL: "skill-icons:githubactions-light", needToCustomize: false },
    AWS: { name: "AWS", iconURL: "skill-icons:aws-light", needToCustomize: false },
    JENKINS: { name: "Jenkins", iconURL: "skill-icons:jenkins-light", needToCustomize: false },
    DOCKER: { name: "Docker", iconURL: "skill-icons:docker", needToCustomize: false },
    KUBERNETES: { name: "Kubernetes", iconURL: "skill-icons:kubernetes", needToCustomize: false },
    KAFKA: { name: "Kafka", iconURL: "skill-icons:kafka", needToCustomize: false },
    SONAR_QUBE: { name: "SonarQube", iconURL: "devicon:sonarqube", needToCustomize: false },
    GRAFANA: { name: "Grafana", iconURL: "skill-icons:grafana-light", needToCustomize: false },
} as const;
