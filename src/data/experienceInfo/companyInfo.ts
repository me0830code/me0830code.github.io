import type { CompanyData } from "./interface/CompanyData";

import { LINKS } from "../constant/generalLink";

export const COMPANY_INFO: Record<string, CompanyData> = {
    COUPANG: { companyName: "Coupang", companyLink: LINKS.COUPANG, logoURL: "companyLogo/Coupang.png"},
    MEDIATEK: { companyName: "MediaTek", companyLink: LINKS.MEDIATEK, logoURL: "companyLogo/MediaTek.png"},
    PHISON: { companyName: "Phison Electronics", companyLink: LINKS.PHISON, logoURL: "companyLogo/Phison.png"},
} as const;