import type { ContactItem } from "./interface/ContactItem";

import { LINKS } from "../constant/generalLink";

export const PERSONAL_INFO = {
    MY_NAME: "Chien-Yu Yeh (Kevin)",
    MY_EN_NAME: "Kevin",
    CURRENT_TITLE: "Senior Backend Engineer",
    BRIEF_INTRO: "Currently leading **Cart and Checkout backend** services in a large-scale e-commerce system.",
    DETAIL_INFO: [
        "Software engineer with 7+ years of development experience across **backend, frontend, AI/ML, and embedded systems**. Currently a Senior Software Engineer at Coupang, **leading Cart and Checkout backend services** in a large-scale e-commerce environment, and shipping features that grew premium memberships by **17%** and added **810K** members while improving service reliability.",
        "Outside of work, I enjoy traveling, taking photos, and spending time with animals.",
    ],
    LOCATION: "📍 Taiwan",
    COMPANY: "Coupang",
    RESUME_LINK: LINKS.RESUME
} as const;

export const PERSONAL_PHOTO = {
    PROFILE_PHOTO: { name: "profilePhoto", imageURL: "myPhoto/profilePhoto.jpg", adjustDirection: "center"}, 
    LIFE_PHOTO: [
        { name: "lifePhoto1", imageURL: "myPhoto/lifePhoto1.jpg", adjustDirection: "top", description: "Mount Cook National Park, New Zealand" },
        { name: "lifePhoto2", imageURL: "myPhoto/lifePhoto2.jpg", adjustDirection: "center", description: "My first aurora" },
        { name: "lifePhoto3", imageURL: "myPhoto/lifePhoto3.jpg", adjustDirection: "center", description: "With Mimi" }
    ]
} as const;

export const TOTAL_MY_PHOTO = Object.values(PERSONAL_PHOTO.LIFE_PHOTO);

export const CONTACT_INFO: ContactItem[] = [
    { key: "whatsapp", value: "+886937532865", iconURL: "logos:whatsapp-icon", isLinkActive: true, linkURL: LINKS.PHONE, customSize: "18" },
    { key: "email", value: "me0830code", iconURL: "logos:google-gmail", isLinkActive: true, linkURL: LINKS.GMAIL, customSize: "18" },
    { key: "github", value: "me0830code", iconURL: "logos:github-icon", isLinkActive: true, linkURL: LINKS.GITHUB, customSize: "18" },
    { key: "linkedin", value: "Chien-Yu Yeh", iconURL: "logos:linkedin-icon", isLinkActive: true, linkURL: LINKS.LINKEDIN, customSize: "18" }, 
] as const;

export const TOTAL_INFO = Object.values(CONTACT_INFO);