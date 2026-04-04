import type { SkillSetItem } from "./interface/SkillSetItem";

export const otherSkill: Record<string, SkillSetItem> = {
    SCHEDULER: { name: "Scheduler", iconURL: "twemoji:alarm-clock", needToCustomize: false},
    BLUETOOTH: { name: "Bluetooth", iconURL: "logos:bluetooth", needToCustomize: false},
    EMBEDDED: { name: "Embedded", iconURL: "customIcon/Embedded.png", needToCustomize: true},

    OBJ_C: { name: "Object-C", iconURL: "logos:apple", needToCustomize: false },
    
    CORE_DATA: { name: "Core Data", iconURL: "flat-color-icons:data-sheet", needToCustomize: false},
    NO_SQL: { name: "NoSQL", iconURL: "material-icon-theme:json", needToCustomize: false },
    SQL_LITE: { name: "SQLite", iconURL: "devicon:sqlite", needToCustomize: false },
    NEO4J: { name: "Neo4j", iconURL: "devicon:neo4j", needToCustomize: false },

    GROOVY: { name: "Groovy", iconURL: "devicon:groovy", needToCustomize: false },
    MOCKITO: { name: "Mockito", iconURL: "customIcon/Mockito.png", needToCustomize: true },
    JUNIT: { name: "JUnit", iconURL: "customIcon/JUnit.png", needToCustomize: true },
    
    FLASK: { name: "Flask", iconURL: "skill-icons:flask-light", needToCustomize: false },
    FAST_API: { name: "FastAPI", iconURL: "skill-icons:fastapi", needToCustomize: false },

    GITHUB_ACTION: { name: "GitHub Actions", iconURL: "skill-icons:githubactions-light", needToCustomize: false },
} as const;
