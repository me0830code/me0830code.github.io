import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const backendEngInfo: SkillSectionData = {
    name: "Backend Engineering",
    iconURL: "fluent:server-link-24-regular",
} as const;

export const backendEng: Record<string, SkillSetItem> = {
    JAVA: { name: "Java", iconURL: "skill-icons:java-light", needToCustomize: false },
    SPRING_BOOT: { name: "Spring Boot", iconURL: "customIcon/SpringBoot.png", needToCustomize: true },
    RESTFUL_API: { name: "RESTful APIs", iconURL: "customIcon/RESTfulAPIs.png", needToCustomize: true },
    MICRO_SERVICES: { name: "Microservices", iconURL: "fluent-color:diversity-24", needToCustomize: false },
    KAFKA: { name: "Kafka", iconURL: "skill-icons:kafka", needToCustomize: false },
    API_GATEWAY: { name: "API Gateway", iconURL: "logos:aws-api-gateway", needToCustomize: false },
    GRPAH_QL: { name: "GraphQL", iconURL: "skill-icons:graphql-light", needToCustomize: false },
} as const;