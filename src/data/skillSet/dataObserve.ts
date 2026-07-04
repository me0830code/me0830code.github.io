import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const dataObserveInfo: SkillSectionData = {
    name: "Data & Observability",
    iconURL: "fluent:task-list-square-database-24-regular",
} as const;

export const dataObserve: Record<string, SkillSetItem> = {
    MY_SQL: { name: "MySQL", iconURL: "skill-icons:mysql-light", needToCustomize: false },
    REDIS: { name: "Redis", iconURL: "skill-icons:redis-light", needToCustomize: false },
    ELASTIC_SEARCH: { name: "ElasticSearch", iconURL: "skill-icons:elasticsearch-light", needToCustomize: false },
    DYNAMO_DB: { name: "DynamoDB", iconURL: "skill-icons:dynamodb-light", needToCustomize: false },
    GRAFANA: { name: "Grafana", iconURL: "skill-icons:grafana-light", needToCustomize: false },
    PROMETHEUS: { name: "Prometheus", iconURL: "skill-icons:prometheus", needToCustomize: false },
} as const;