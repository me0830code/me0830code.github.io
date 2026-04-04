import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const backendArchInfo: SkillSectionData = {
    name: "Backend Architecture",
    iconURL: "fluent-color:org-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const backendArch: Record<string, SkillSetItem> = {
    SPRING_BOOT: { name: "Spring Boot", iconURL: "customIcon/SpringBoot.png", needToCustomize: true },
    MICRO_SERVICES: { name: "Microservices", iconURL: "fluent-color:diversity-24", needToCustomize: false },
    KAFKA: { name: "Kafka", iconURL: "skill-icons:kafka", needToCustomize: false },
    RESTFUL_API: { name: "RESTful APIs", iconURL: "customIcon/RESTfulAPIs.png", needToCustomize: true },
    API_GATEWAY: { name: "API Gateway", iconURL: "logos:aws-api-gateway", needToCustomize: false },
    GRPAH_QL: { name: "GraphQL", iconURL: "skill-icons:graphql-light", needToCustomize: false },
    DOT_NET: { name: ".NET", iconURL: "skill-icons:dotnet", needToCustomize: false },
} as const;