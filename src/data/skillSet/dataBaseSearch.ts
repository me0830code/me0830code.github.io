import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const dataBaseSearchInfo: SkillSectionData = {
    name: "Databases & Search",
    iconURL: "fluent:task-list-square-database-24-regular",
} as const;

export const dataBaseSearch: Record<string, SkillSetItem> = {
    MY_SQL: { name: "MySQL", iconURL: "skill-icons:mysql-light", needToCustomize: false },
    REDIS: { name: "Redis", iconURL: "skill-icons:redis-light", needToCustomize: false },
    ELASTIC_SEARCH: { name: "ElasticSearch", iconURL: "skill-icons:elasticsearch-light", needToCustomize: false },
    DYNAMO_DB: { name: "DynamoDB", iconURL: "skill-icons:dynamodb-light", needToCustomize: false },
    MONGO_DB: { name: "MongoDB", iconURL: "skill-icons:mongodb", needToCustomize: false },
    FIREBASE: { name: "Firebase", iconURL: "devicon:firebase", needToCustomize: false },
} as const;