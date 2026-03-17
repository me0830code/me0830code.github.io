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
