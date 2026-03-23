import { AboutSection } from "./AboutMe";

import { ProjectsSection } from "../../sections/ProjectsSection";
import { ExperienceSection } from "../../sections/ExperienceSection";


export function RightContent() {
    return (
        <div className="flex flex-col gap-20">
            <section id="aboutMe" className="min-h-[50vh]">
                <AboutSection />
            </section>
            <section id="workExperience" className="min-h-[50vh]">
                <ExperienceSection />
            </section>
            <section id="sideProject" className="min-h-[50vh]">
                <ProjectsSection />
            </section>
        </div>
    );
}