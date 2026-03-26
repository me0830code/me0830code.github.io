import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const dataBaseInfo: SkillSectionData = {
    name: "Database",
    iconURL: "fluent-color:database-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const dataBase: Record<string, SkillSetItem> = {
    SQL: { name: "SQL", iconURL: "devicon:azuresqldatabase", needToCustomize: false },
    NO_SQL: { name: "NoSQL", iconURL: "material-icon-theme:json", needToCustomize: false },

    MY_SQL: { name: "MySQL", iconURL: "skill-icons:mysql-light", needToCustomize: false },
    DYNAMO_DB: { name: "DynamoDB", iconURL: "skill-icons:dynamodb-light", needToCustomize: false },
    MONGO_DB: { name: "MongoDB", iconURL: "skill-icons:mongodb", needToCustomize: false },
    REDIS: { name: "Redis", iconURL: "skill-icons:redis-light", needToCustomize: false },
    FIREBASE: { name: "Firebase", iconURL: "devicon:firebase", needToCustomize: false },

    GRPAH_QL: { name: "GraphQL", iconURL: "skill-icons:graphql-light", needToCustomize: false },
    NEO4J: { name: "Neo4j", iconURL: "devicon:neo4j", needToCustomize: false },
} as const;