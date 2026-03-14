export const CONTENT_SECTION = {
    AboutMe: { key:"aboutMe", sectionTitle: "About Me"},
    WorkExperience: { key: "workExperience", sectionTitle: "Work Experience"},
    SideProject: { key: "sideProject", sectionTitle: "Selected Projects"},
    ContactInfo: { key: "contactInfo", sectionTitle: "Contact Me"},
} as const;

export type SectionKey = (typeof CONTENT_SECTION)[keyof typeof CONTENT_SECTION]["key"];

export const TOTAL_SECTION = Object.values(CONTENT_SECTION);