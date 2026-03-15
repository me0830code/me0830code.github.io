import { useMemo, useState } from "react";
import { AppShell } from "./layout/appLayout";
import { Sidebar } from "./component/LeftSideBar/LeftSideBar";
import type { SectionKey } from "./data/constant/contentData";
import { CONTENT_SECTION } from "./data/constant/contentData";

import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";

function AboutSection() {
  return (
    <div className="space-y-16">
      <section id="about" className="max-w-4xl pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
          About
        </p>

        <h1 className="mt-4 text-6xl font-semibold tracking-tight text-slate-900">
          About me
        </h1>

        <div className="mt-8 space-y-6 text-xl leading-10 text-slate-700">
          <p>
            I’m a software engineer passionate about building clean, scalable,
            and user-focused products.
          </p>

          <p>
            I enjoy turning complex ideas into practical solutions and
            continuously improving both technical execution and product
            thinking.
          </p>
        </div>
      </section>

      <section
        id="what-im-doing"
        className="max-w-5xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(148,163,184,0.08)]"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
          Focus
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          What I&apos;m doing
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Currently, I’m focused on backend engineering, building reliable
          systems, and creating a portfolio that better presents my work,
          experience, and projects.
        </p>
      </section>
    </div>
  );
}

// function AboutSection() {
//   return (
//     <div className="space-y-8">
//       <section
//         id="about"
//         className="rounded-2xl border border-sky-300/20 bg-[#0f1b2d] p-6 shadow-lg shadow-sky-950/20"
//       >
//         <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
//           About
//         </p>
//         <h1 className="text-4xl font-bold tracking-tight text-slate-50">
//           About me
//         </h1>
//         <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
//           I’m a software engineer passionate about building clean, scalable,
//           and user-focused products.
//         </p>
//         <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
//           I enjoy turning complex ideas into practical solutions and continuously
//           improving both technical execution and product thinking.
//         </p>
//       </section>

//       <section
//         id="what-im-doing"
//         className="rounded-2xl border border-sky-300/20 bg-[#132238] p-6 shadow-lg shadow-sky-950/20"
//       >
//         <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
//           Focus
//         </p>
//         <h2 className="text-3xl font-bold tracking-tight text-slate-50">
//           What I&apos;m doing
//         </h2>
//         <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
//           Currently, I’m focused on backend engineering, building reliable
//           systems, and creating a portfolio that better presents my work,
//           experience, and projects.
//         </p>
//       </section>
//     </div>
//   );
// }

function ContactSection() {
  return (
    <section className="rounded-2xl border bg-zinc-900 p-6">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-3 opacity-80">me0830code@gmail.com</p>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState<SectionKey>(CONTENT_SECTION.AboutMe.key);

  const content = useMemo(() => {
    switch (active) {
      case CONTENT_SECTION.AboutMe.key:
        return <AboutSection />;
      case CONTENT_SECTION.SideProject.key:
        return <ProjectsSection />;
      case CONTENT_SECTION.WorkExperience.key:
        return <ExperienceSection />;
      case CONTENT_SECTION.ContactInfo.key:
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  }, [active]);

  return (
    <AppShell
  leftSideBar={<Sidebar active={active} onSelect={setActive} />}
  rightContent={content}
/>
  );
}
// import { Navbar } from "./components/Navibar";
// import { Button } from "./components/Button";
// import { ProjectsSection } from "./sections/ProjectsSection";
// import { ExperienceSection } from "./sections/ExperienceSection";

// export default function App() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <main className="mx-auto max-w-5xl px-4 py-10 space-y-16">
//         <section className="space-y-4">
//           <p className="text-sm uppercase tracking-wider opacity-70">
//             Software Engineer • Backend • Data Products
//           </p>

//           <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
//             Hi, I’m Kevin
//           </h1>

//           <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
//             This is me.
//           </p>

//           <div className="flex flex-wrap gap-3 pt-2">
//             <Button href="#projects" variant="solid"> Side Projects</Button>
//             <Button href="#contact" variant="solid"> Contact Info</Button>
//           </div>
//         </section>

//         <section id="about" className="scroll-mt-24 space-y-3">
//           <h2 className="text-2xl font-semibold">About</h2>
//           <p className="opacity-80 leading-relaxed max-w-3xl">
//             I'm Kevin, this is my testing protfolio.
//           </p>
//         </section>

//         <section id="projects" className="scroll-mt-24">
//           <ProjectsSection />
//         </section>

//         <section id="experience" className="scroll-mt-24">
//           <ExperienceSection />
//         </section>

//         <section id="contact" className="scroll-mt-24 space-y-3">
//           <h2 className="text-2xl font-semibold">Contact</h2>
//           <p className="opacity-80">
//             Reach me at{" "}
//             <a className="underline" href="mailto:you@example.com">
//               me0830code@gmail.com
//             </a>
//             .
//           </p>

//           <div className="flex flex-wrap gap-3 text-sm">
//             <a className="underline" href="https://github.com/me0830code" target="_blank" rel="noreferrer">
//               GitHub
//             </a>
//             <a className="underline" href="#" target="_blank" rel="noreferrer">
//               LinkedIn
//             </a>
//           </div>
//         </section>

//         <footer className="pt-6 pb-2 text-sm opacity-60">
//           © {new Date().getFullYear()} me0830code
//         </footer>
//       </main>
//     </div>
//   );
// }