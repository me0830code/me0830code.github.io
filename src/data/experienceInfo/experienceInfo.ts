import type { CompanyData } from "./interface/CompanyData";

import { LINKS } from "../constant/generalLink";

export const COMPANY_INFO: CompanyData[] = [
    { companyName: "Coupang", companyLink: LINKS.COUPANG, logoURL: "companyLogo/Coupang.png"},
    { companyName: "MediaTek", companyLink: LINKS.MEDIATEK, logoURL: "companyLogo/Coupang.png"},
    { companyName: "Phison", companyLink: LINKS.PHISON, logoURL: "companyLogo/Coupang.png"},
] as const;

export const TOTAL_COMPANY = Object.values(COMPANY_INFO);