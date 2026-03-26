import type { CompanyData } from "./CompanyData";
import type { SkillSetItem } from "../../skillSet/interface/SkillSetItem";

export interface ExperienceData {
    companyInfo: CompanyData;
    jobRole: string;
    jobDuration: string;
    jobWorkSummary: string[];
    jobSkillSet: SkillSetItem[];
}