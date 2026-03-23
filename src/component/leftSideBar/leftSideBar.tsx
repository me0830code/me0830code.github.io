import { TOTAL_SECTION } from "../../data/constant/contentData";
import type { SectionKey } from "../../data/constant/contentData";
import { LINKS } from "../../data/constant/generalLink";
import { ProfilePhoto } from "./ProfilePhoto";
import { ProfileInfo } from "./ProfileInfo";
import { ContactInfo } from "./ContactInfo";
import { ViewMyResume } from "./ViewMyResume";

export function Sidebar({
    active,
    onSelect,
  }: {
    active: SectionKey;
    onSelect: (key: SectionKey) => void;
  }) {
    return (
      <aside className="border-r border-slate-200/80 pr-8">
        <ProfilePhoto/>
        <ProfileInfo/>
        <ContactInfo/>

        <hr className="my-6 border-t-2 border-slate-200"/>
        
        <ViewMyResume/>
        <div className="sticky top-8">
          <div className="space-y-8">
            
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

          </div>
        </div>
      </aside>
    );
  }