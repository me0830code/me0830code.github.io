export const COMPANY_INFO = {
    Coupang: { key:"Coupang", companyName: "Coupang", companyLink: "https://www.tw.coupang.com"},
} as const;

export type CompanyKey = (typeof COMPANY_INFO)[keyof typeof COMPANY_INFO]["key"];

export const TOTAL_COMPANY = Object.values(COMPANY_INFO);