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
                    "• Build and maintain backend services and **REST APIs in Java with Spring Boot** for the **Cart and Checkout domains** on an e-commerce platform with **16M+ daily active users** across web and mobile.",
                    "• Delivered backend features for premium membership conversion, helping drive **2.2M+ new paid members** and **2K+ daily new buyers** in partnership with frontend and mobile teams.",
                    "• Implemented backend features and cross-service integrations for major shopping events, including **Lunar New Year, 618, D11, and Christmas**, working with Order, Payment, Finance, frontend, and mobile teams.",
                    "• Built and improved **CI/CD pipelines with GitHub Actions**, integrating automated tests, **SonarQube** quality checks, **Docker** image builds, and **Kubernetes** deployments, while monitoring and troubleshooting production services with **Grafana and Prometheus**.",
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
                    "• Developed and optimized **C software** for the **Dynamic Voltage and Frequency Scaling (DVFS)** subsystem across smartphone, tablet, and telematics SoCs, supporting global customer programs including **OPPO, Apple, Google, and NVIDIA**.",
                    "• Built a **C++ and Qt log parser** to match log patterns against known failure signatures from historical incidents, reducing debugging time by **20%+** for cross-functional engineering teams.",
                    "• Built a **Python-based framework** for SoC integration testing, integrated with **Jenkins** to automate image flashing and control UXM test equipment via **REST APIs**, increasing equipment utilization by **30%+**.",
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
                    "• Improved the **SSD garbage collection (GC)** firmware module in **C** to increase NAND endurance and sustain write performance across SSD solutions for customers including **Micron, SK hynix, and Kioxia**.",
                ],
                jobSkillSet: [
                    programmingLanguage.C,
                    infraObserve.JENKINS
                ]
            },
} as const;

export const TOTAL_EXPERIENCE = Object.values(EXPERIENCE_INFO);