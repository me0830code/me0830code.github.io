import type { ExperienceData } from "./interface/ExperienceData";

import { programmingLanguage } from "../skillSet/programmingLanguage";
import { backendArch } from "../skillSet/backendArch";
import { dataBaseSearch } from "../skillSet/dataBaseSearch";
import { infraObserve } from "../skillSet/infraObserve";
import { otherTool } from "../skillSet/otherTool";
import { otherSkill } from "../skillSet/otherSkill";

import { COMPANY_INFO } from "./companyInfo";

export const EXPERIENCE_INFO: Record<string, ExperienceData> = {
    COUPANG: {
                companyInfo: COMPANY_INFO.COUPANG,
                jobRole: "Senior Backend Engineer",
                jobDuration: "Jan 2025 - Present",
                jobWorkSummary: [
                    "- **Leading backend features** for Cart & Checkout domains, ensuring high availability and a seamless experience for **16M+ daily active users** across web and mobile platforms.",
                    "- Delivered key growth initiatives that gained **1.2M+ new paid members** and **2K+ daily new buyers** by collaborating with frontend and mobile teams to deploy high-impact features that drove premium membership conversion.",
                    "- Executed the end-to-end backend implementation for multiple **high-traffic campaigns (Lunar New Year, 618, and D11)**, partnering with cross-functional teams (Order, Payment, Finance) to support **320K+ concurrent users** with **zero production incidents**.",
                    "- Engineered robust RESTful APIs with **90%+ test coverage** using Spring Boot, Spock, and Mockito, enforcing high code quality for mission-critical services.",
                    "- Architected CI/CD pipelines and automated Kubernetes deployments via GitHub Actions, integrating Docker and SonarQube to ensure code quality while leveraging Grafana and Prometheus for proactive system monitoring and accelerating troubleshooting."
                ],
                jobSkillSet: [
                    programmingLanguage.JAVA,
                    backendArch.SPRING_BOOT,
                    infraObserve.DOCKER,
                    infraObserve.KUBERNETES,
                    infraObserve.JENKINS,
                    infraObserve.GRAFANA,
                    dataBaseSearch.MY_SQL,
                ]
            },
    MEDIATEK: {
                companyInfo: COMPANY_INFO.MEDIATEK,
                jobRole: "Software Engineer",
                jobDuration: "Apr 2022 - Jan 2025",
                jobWorkSummary: [
                    "- Optimized embedded software for the **Dynamic Voltage and Frequency Scaling (DVFS)** module across smartphone, tablet, and telematics SoCs, delivering high-performance solutions for global clients including **OPPO, Apple, Google, and NVIDIA**.",
                    "- Engineered a **high-performance logging parser** using C++ and the Qt framework to analyze root causes via historical syndromes and incidents, **reducing debugging time by 20%+** for cross-functional module teams.",
                    "- Architected an **automated SoC integration testing framework** using Python and Jenkins, automating image flashing and UXM equipment control via RESTful APIs to **increase equipment utilization by 30%+**."
                ],
                jobSkillSet: [
                    programmingLanguage.C,
                    programmingLanguage.C_PLUS_PLUS,
                    programmingLanguage.PYTHON,
                    otherTool.QT,
                    otherSkill.FLASK,
                    infraObserve.JENKINS,
                    dataBaseSearch.MY_SQL,
                ]
            },
    PHISON: {
                companyInfo: COMPANY_INFO.PHISON,
                jobRole: "Software and Firmware Engineer",
                jobDuration: "Sep 2021 - Mar 2022",
                jobWorkSummary: [
                    "- Refined the SSD Garbage Collection (GC) module using C to enhance NAND endurance and performance stability, delivering high-reliability solutions for industry leaders including **Micron, SK Hynix, and Kioxia**.",
                ],
                jobSkillSet: [
                    programmingLanguage.C,
                    infraObserve.JENKINS
                ]
            },
} as const;

export const TOTAL_EXPERIENCE = Object.values(EXPERIENCE_INFO);