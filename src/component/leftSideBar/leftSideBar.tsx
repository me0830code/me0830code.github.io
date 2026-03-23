import type { SectionKey } from "../../data/constant/contentData";
import { ProfilePhoto } from "./ProfilePhoto";
import { ProfileInfo } from "./ProfileInfo";
import { ContactInfo } from "./ContactInfo";
import { NavigationBar } from "./NavigationBar";
import { ViewMyResume } from "./ViewMyResume";

export function LeftSideBar({
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
        
        <NavigationBar 
          active={active as string} 
          onSelect={(key) => onSelect(key as SectionKey)} 
        />
        <ViewMyResume/>
      
      </aside>
    );
  }