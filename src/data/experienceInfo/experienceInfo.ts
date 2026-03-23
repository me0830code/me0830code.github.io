import { LINKS } from "../constant/generalLink";

export const COMPANY_INFO = {
    Coupang: { key:"Coupang", companyName: "Coupang", companyLink: LINKS.COUPANG, logoURL: "companyLogo/Coupang.png"},
    MediaTek: { key:"MediaTek", companyName: "MediaTek", companyLink: LINKS.MEDIATEK, logoURL: "companyLogo/Coupang.png"},
    Phison: { key:"Phison", companyName: "Phison", companyLink: LINKS.PHISON, logoURL: "companyLogo/Coupang.png"},
} as const;

export type CompanyKey = (typeof COMPANY_INFO)[keyof typeof COMPANY_INFO]["key"];

export const TOTAL_COMPANY = Object.values(COMPANY_INFO);