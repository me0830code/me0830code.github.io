import type { SkillSectionData } from "./interface/SkillSectionData";
import type { SkillSetItem } from "./interface/SkillSetItem";

export const dataBaseInfo: SkillSectionData = {
    name: "Database",
    iconURL: "fluent-color:database-24",
    textColor: "text-blue-600",
    backgroundColor: "text-purple-600",
} as const;

export const dataBase: SkillSetItem[] = [
    { name: "SQL", iconURL: "devicon:azuresqldatabase", needToCustomize: false },
    { name: "NoSQL", iconURL: "material-icon-theme:json", needToCustomize: false },

    { name: "MySQL", iconURL: "skill-icons:mysql-light", needToCustomize: false },
    { name: "DynamoDB", iconURL: "skill-icons:dynamodb-light", needToCustomize: false },
    { name: "MongoDB", iconURL: "skill-icons:mongodb", needToCustomize: false },
    { name: "Redis", iconURL: "skill-icons:redis-light", needToCustomize: false },
    { name: "Firebase", iconURL: "devicon:firebase", needToCustomize: false },

    { name: "GraphQL", iconURL: "skill-icons:graphql-light", needToCustomize: false },
    { name: "Neo4j", iconURL: "devicon:neo4j", needToCustomize: false },
] as const;