import type { ContactItem } from "./interface/ContactItem";

import { LINKS } from "../constant/generalLink";

export const PERSONAL_INFO = {
    MY_NAME: "Chien-Yu (Kevin) Yeh",
    CURRENT_TITLE: "Senior Software Engineer",
    BRIEF_INTRO: "Software Engineer with **7+ years** of experience, currently leading **Cart and Checkout backend** services in a large-scale e-commerce system.",
    DETAIL_INFO: "Software engineer with 7+ years of development experience across **backend, frontend, AI/ML, and embedded systems**. Currently a Senior Software Engineer at Coupang, **leading Cart and Checkout backend services** in a large-scale e-commerce environment, and shipping features that grew premium memberships by **17%** and added **810K** members while improving service reliability.",
    LOCATION: "📍 Taiwan",
    COMPANY: "Coupang",
    RESUME_LINK: LINKS.RESUME
} as const;

export const PERSONAL_PHOTO = [
    { name: "Photo_1", imageURL: "projectPreview/Image1.jpg" },
    { name: "Photo_2", imageURL: "projectPreview/Image2.jpg" },
    { name: "Photo_3", imageURL: "projectPreview/Image3.jpg" },
] as const;

export const CONTACT_INFO: ContactItem[] = [
    { key: "whatsapp", value: "+886 937 532 865", iconURL: "logos:whatsapp-icon", isLinkActive: false, linkURL: "", customSize: "24" },
    { key: "email", value: "me0830code@gmail.com", iconURL: "logos:google-gmail", isLinkActive: false, linkURL: "", customSize: "24" },
    { key: "github", value: "me0830code", iconURL: "logos:github-icon", isLinkActive: true, linkURL: LINKS.GITHUB, customSize: "24" },
    { key: "linkedin", value: "Chien-Yu (Kevin) Yeh", iconURL: "logos:linkedin-icon", isLinkActive: true, linkURL: LINKS.LINKEDIN, customSize: "24" }, 
] as const;

export const TOTAL_INFO = Object.values(CONTACT_INFO);