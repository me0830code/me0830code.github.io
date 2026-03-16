import { TOTAL_SECTION } from "../../data/constant/contentData";
import type { SectionKey } from "../../data/constant/contentData";
import { LINKS } from "../../data/constant/generalLink";
import { ProfilePhoto } from "./ProfilePhoto";
import { ProfileInfo } from "./ProfileInfo";
import { ContactInfo } from "./ContactInfo";
import { Mail, Github, Linkedin, MapPin, PhoneIcon } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
export function Sidebar({
    active,
    onSelect,
  }: {
    active: SectionKey;
    onSelect: (key: SectionKey) => void;
  }) {
    return (
      <aside className="border-r border-slate-200/80 pr-5">
        <ProfilePhoto/>
        <ProfileInfo/>
        <ContactInfo
         location={{
            label: "Taiwan",
            icon: <PhoneIcon size={20} strokeWidth={1.75} />,
          }} 
  items={[
    {
      label: "Email",
      href: "mailto:you@example.com",
      icon: <Mail size={20} strokeWidth={1.75} />,
    },
    {
      label: "GitHub",
      href: "https://github.com/yourname",
      icon: <Github size={20} strokeWidth={1.75}/>,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourname",
      icon: <Linkedin size={20} strokeWidth={1.75} />,
    },
  ]}
/>
        <div className="sticky top-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-xl font-medium text-sky-700">
                M
              </div>
  
              <div>
                <h1 className="text-5xl font-semibold tracking-tight text-slate-900">
                  ME0830
                </h1>
                <p className="mt-2 text-base text-sky-600">Software Engineer</p>
              </div>
  
              <p className="max-w-xs text-sm leading-7 text-slate-600">
                Backend-focused engineer passionate about scalable systems,
                thoughtful product building, and clean UI.
              </p>
            </div>
  
            <div className="space-y-3 text-sm text-slate-600">
              <div>📍 Taiwan</div>
              <div>✉️ you@example.com</div>
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-sky-600"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-sky-600"
              >
                LinkedIn
              </a>
            </div>
  
            <nav className="space-y-1 pt-4">
              {TOTAL_SECTION.map((eachSection) => {
                const isActive = eachSection.key === active;
  
                return (
                  <button
                    key={eachSection.key}
                    onClick={() => onSelect(eachSection.key)}
                    className={[
                      "block w-full px-0 py-2 text-left text-base transition",
                      isActive
                        ? "font-semibold text-slate-900"
                        : "text-slate-500 hover:text-sky-600",
                    ].join(" ")}
                  >
                    {eachSection.sectionTitle}
                  </button>
                );
              })}
            </nav>
  
            <div className="pt-4">
              <a
                className="inline-flex items-center justify-center border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:text-sky-600"
                href={LINKS.RESUME}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </aside>
    );
  }
// export function Sidebar({
//     active,
//     onSelect,
//   }: {
//     active: SectionKey;
//     onSelect: (key: SectionKey) => void;
//   }) {
//     return (
//       <aside className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
//         <div className="space-y-6">
//           <div className="space-y-3">
//             <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-blue-200 text-xl font-bold text-sky-700">
//               M
//             </div>
  
//             <div>
//               <h1 className="text-xl font-bold tracking-tight text-slate-900">
//                 ME0830
//               </h1>
//               <p className="mt-1 text-sm font-medium text-sky-600">
//                 Software Engineer
//               </p>
//             </div>
  
//             <p className="text-sm leading-6 text-slate-600">
//               Backend-focused engineer passionate about scalable systems,
//               thoughtful product building, and clean UI.
//             </p>
//           </div>
  
//           <div className="space-y-2 border-t border-sky-100 pt-4 text-sm">
//             <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-700">
//               📍 Taiwan
//             </div>
//             <div className="rounded-xl bg-slate-50 px-3 py-2 text-slate-700">
//               ✉️ you@example.com
//             </div>
//             <a
//               href="https://github.com/yourname"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block rounded-xl bg-slate-50 px-3 py-2 text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
//             >
//               GitHub
//             </a>
//             <a
//               href="https://linkedin.com/in/yourname"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block rounded-xl bg-slate-50 px-3 py-2 text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
//             >
//               LinkedIn
//             </a>
//           </div>
  
//           <nav className="space-y-1 border-t border-sky-100 pt-4">
//             {TOTAL_SECTION.map((eachSection) => {
//               const isActive = eachSection.key === active;
  
//               return (
//                 <button
//                   key={eachSection.key}
//                   onClick={() => onSelect(eachSection.key)}
//                   className={[
//                     "w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200",
//                     isActive
//                       ? "bg-sky-500 text-white shadow-sm"
//                       : "text-slate-600 hover:bg-sky-50 hover:text-sky-700",
//                   ].join(" ")}
//                 >
//                   {eachSection.sectionTitle}
//                 </button>
//               );
//             })}
//           </nav>
  
//           <div className="border-t border-sky-100 pt-4">
//             <a
//               className="block rounded-xl bg-slate-900 px-3 py-2.5 text-center text-sm font-medium text-white transition hover:bg-sky-600"
//               href={LINKS.RESUME}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </aside>
//     );
//   }
  
// export function Sidebar({
//   active,
//   onSelect,
// }: {
//   active: SectionKey;
//   onSelect: (key: SectionKey) => void;
// }) {
//   return (
//     <div className="rounded-2xl border bg-zinc-950 p-5 space-y-5">
      
//       <div className="space-y-1">
//         <div className="text-lg font-semibold">ME0830</div>
//         <div className="text-sm opacity-70">Software Engineer</div>
//       </div>

      
//       <div className="space-y-2 text-sm">
//         <div className="rounded-xl border px-3 py-2">📍 Taiwan</div>
//         <div className="rounded-xl border px-3 py-2">✉️ you@example.com</div>
//       </div>

      
//       <div className="space-y-2">
//         {TOTAL_SECTION.map((eachSection) => {
//           const isActive = eachSection.key === active;
//           return (
//             <button
//               key={eachSection.key}
//               onClick={() => onSelect(eachSection.key)}
//               className={[
//                 "w-full rounded-xl px-3 py-2 text-left text-sm border transition",
//                 isActive ? "bg-black text-white" : "hover:bg-black/5",
//               ].join(" ")}
//             >
//               {eachSection.sectionTitle}
//             </button>
//           );
//         })}
//       </div>

      
//       <a
//         className="block text-center rounded-xl bg-black text-white px-3 py-2 text-sm hover:opacity-90 transition"
//         href={LINKS.RESUME}
//         target="_blank"
//          rel="noopener noreferrer"
//       >
//         Download Resume
//       </a>
//     </div>
//   );
// }