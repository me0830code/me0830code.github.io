import type { ExperienceData } from "./interface/ExperienceData";

import { COMPANY_INFO } from "./companyInfo";
import { dataBase } from "../skillSet/dataBase";
import { frameworkLib } from "../skillSet/frameworkLib";
import { otherTool } from "../skillSet/otherTool";
import { programmingLanguage } from "../skillSet/programmingLanguage";

export const EXPERIENCE_INFO: Record<string, ExperienceData> = {
    COUPANG: {
                companyInfo: COMPANY_INFO.COUPANG,
                jobRole: "Senior Backend Engineer",
                jobDuration: "Jan 2025 - Present",
                jobWorkSummary: [
                    "- Developed key backend business features and optimized legacy systems for the Coupang app and website across the cart and checkout domains, improving scalability, user experience, and reliability.",
                    "- Implemented backend RESTful APIs in Java Spring Boot, with over **90%** test coverage using JUnit, Groovy (Spock), and Mockito.",
                    "- Collaborated with frontend team and mobile teams to deliver growth features that increased premium membership registrations by **17%** and added **810K** premium members.",
                    "- Architected CI/CD pipelines, containerized services with Docker, enforced code quality with SonarQube, automated Kubernetes deployments and set up Grafana monitoring dashboards to improve system reliability and speed up troubleshooting."
                ],
                jobSkillSet: [
                    programmingLanguage.JAVA,
                    programmingLanguage.KOTLIN,
                    frameworkLib.SPRING_BOOT,
                    otherTool.DOCKER,
                    otherTool.KUBERNETES,
                    dataBase.REDIS,
                    otherTool.GRAFANA
                ]
            },
    MEDIATEK: {
                companyInfo: COMPANY_INFO.MEDIATEK,
                jobRole: "Software Engineer",
                jobDuration: "Apr 2022 - Jan 2025",
                jobWorkSummary: [
                    "- Developed embedded software using C for the Dynamic Voltage and Frequency Scaling (DVFS) module in smartphones, tablets, wearable devices, and telematics SoCs for Google, Apple, NVIDIA.",
                    "- Collaborated with different module members to develop a logging parser using C++ with Qt framework and MySQL to analyze the root causes of issues through historic syndromes, achieving a **20%+** reduction in debugging time.",
                    "- Developed an automation tool for SoC integration tests using Python (Flask) and Jenkins to build, package, and flash images to EVB boards via RESTful APIs, automating UXM to trigger simulated scenarios and increasing equipment utilization by **30%+**."
                ],
                jobSkillSet: [
                    programmingLanguage.C,
                    programmingLanguage.C_PLUS_PLUS,
                    programmingLanguage.PYTHON,
                    frameworkLib.FLASK,
                    frameworkLib.QT,
                    dataBase.MY_SQL,
                    otherTool.JENKINS
                ]
            },
    PHISON: {
                companyInfo: COMPANY_INFO.PHISON,
                jobRole: "Software and Firmware Engineer",
                jobDuration: "Sep 2021 - Mar 2022",
                jobWorkSummary: [
                    "- Participated in the development and optimization of the SSD Garbage Collection (GC) module using C, and designed stress tests to profile performance and verify proper functioning for SoCs used by SK Hynix, Micron, and Kioxia."
                ],
                jobSkillSet: [
                    programmingLanguage.C,
                    otherTool.JENKINS
                ]
            },
} as const;

export const TOTAL_EXPERIENCE = Object.values(EXPERIENCE_INFO);