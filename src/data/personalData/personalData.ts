import type { ContactItem } from "./interface/ContactItem";

import { LINKS } from "../constant/generalLink";

export const PERSONAL_INFO = {
    MY_NAME: "Chien-Yu Yeh (Kevin)",
    MY_EN_NAME: "Kevin",
    CURRENT_TITLE: "Senior Backend Engineer",
    BRIEF_INTRO: "Building **Cart and Checkout backend services** across web and mobile platforms. 😎",
    DETAIL_INFO: [
        "I'm a **Senior Backend Engineer** with **7+ years** of experience across backend systems, system-level software, and engineering automation.",
        "Currently at **Coupang** , building **Java Spring Boot** services for the **Cart and Checkout domains**, supporting **16M+ daily active users.** My recent work focuses on high-traffic e-commerce features, **RESTful APIs, automated testing, CI/CD, Kubernetes deployments, observability**, and cross-team delivery. Earlier experience in SoC software, firmware, debugging tools, and integration automation has shaped how I approach backend engineering, with a stronger focus on **reliability, performance, and root-cause analysis.**",
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
    { key: "whatsapp", value: "+886937532865", iconURL: "logos:whatsapp-icon", linkURL: LINKS.PHONE, customSize: "18" },
    { key: "email", value: "me0830code", iconURL: "logos:google-gmail", linkURL: LINKS.GMAIL, customSize: "18" },
    { key: "github", value: "me0830code", iconURL: "logos:github-icon", linkURL: LINKS.GITHUB, customSize: "18" },
    { key: "linkedin", value: "Chien-Yu (Kevin) Yeh", iconURL: "logos:linkedin-icon", linkURL: LINKS.LINKEDIN, customSize: "18" }, 
] as const;

export const TOTAL_INFO = Object.values(CONTACT_INFO);