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
                    "- Build and maintain backend services for the **Cart and Checkout**, supporting **16M+ daily active users** across web and mobile platforms.",
                    "- Delivered backend features for premium membership conversion, helping drive **2.2M+ new paid members** and **2K+ daily new buyers** in partnership with frontend and mobile teams.",
                    "- Delivered end-to-end backend implementations for high-traffic shopping events, including **Lunar New Year, 618, D11, and Christmas**, working with Order, Payment, Finance, frontend, and mobile teams to support **320K+ concurrent users** with **no production incidents.**",
                    "- Developed RESTful APIs for Cart & Checkout services, maintaining **90%+ test coverage** with Spring Boot, Spock, and Mockito.",
                    "- Built and improved **CI/CD workflows** with GitHub Actions, Docker, Kubernetes, and SonarQube, and used Grafana and Prometheus for production monitoring and troubleshooting."
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
                    "- Optimized performance-sensitive **C software** for the Dynamic Voltage and Frequency Scaling (DVFS) module across smartphone, tablet, and telematics SoCs for global customers including **OPPO, Apple, Google, and NVIDIA.**",
                    "- Built a **logging parser** using **C++ and Qt** to support root-cause analysis from historical logs and incidents, reducing debugging time by **20%+** for cross-functional engineering teams.",
                    "- Built a **Python and Jenkins-based automation framework** for SoC integration testing, automating image flashing and UXM equipment control via **RESTful APIs**, increasing equipment utilization by **30%+.**"
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
                    "- Improved the SSD Garbage Collection (GC) module in **C** to enhance NAND endurance and performance stability for storage products used by **Micron, SK hynix, and Kioxia.**",
                ],
                jobSkillSet: [
                    programmingLanguage.C,
                    infraObserve.JENKINS
                ]
            },
} as const;

export const TOTAL_EXPERIENCE = Object.values(EXPERIENCE_INFO);