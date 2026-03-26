import type { ComponentProps } from "./ComponentProps"

export interface ContentSectionData {
    key: string;
    sectionTitle: string;
    componentUI: React.ComponentType<ComponentProps>
}