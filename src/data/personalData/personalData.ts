import { LINKS } from "../constant/generalLink";

export const PERSONAL_INFO = {
    MY_NAME: "Chien-Yu (Kevin) Yeh",
    CURRENT_TITLE: "Senior Software Engineer",
    BRIEF_INTRO: "Software Engineer with **7+ years** of experience, currently leading **Cart and Checkout backend** services in a large-scale e-commerce system.",
    DETAIL_INFO: "",
    LOCATION: "📍 Taiwan",
    COMPANY: "Coupang",
    RESUME_LINK: LINKS.RESUME
} as const;

export const CONTACT_INFO = {
  PHONE: { key: "Phone", value: "+(886) 937532865", iconURL: "emojione-v1:mobile-phone", isLinkActive: false, linkURL: "", customSize: "24" },
  EMAIL: { key: "email", value: "me0830code@gmail.com", iconURL: "logos:google-gmail", isLinkActive: false, linkURL: "", customSize: "24" },
  GITHUB: { key: "github", value: "me0830code", iconURL: "logos:github-icon", isLinkActive: true, linkURL: LINKS.GITHUB, customSize: "24" },
  LINKEDIN: { key: "linkedin", value: "Chien-Yu (Kevin) Yeh", iconURL: "logos:linkedin-icon", isLinkActive: true, linkURL: LINKS.LINKEDIN, customSize: "24" }, 
  WHATSAPP: { key: "whatsapp", value: "+886 937 532 865", iconURL: "logos:whatsapp-icon", isLinkActive: false, linkURL: "", customSize: "24"}
} as const;

export type ContactKey = (typeof CONTACT_INFO)[keyof typeof CONTACT_INFO]["key"];

export const TOTAL_INFO = Object.values(CONTACT_INFO);