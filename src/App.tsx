import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-16">
        <header>
          <h1 className="text-3xl font-bold">Kevin Yeh</h1>
          <p className="mt-2 text-lg opacity-80">
            Hello world!
          </p>
        </header>

        <ProjectsSection />
        <ExperienceSection />
      </main>
    </div>
  );
}