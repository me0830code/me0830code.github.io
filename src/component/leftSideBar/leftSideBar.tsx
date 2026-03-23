import type { SectionKey } from "../../data/constant/contentData";

import { ProfilePhoto } from "./ProfilePhoto";
import { ProfileInfo } from "./ProfileInfo";
import { ContactInfo } from "./ContactInfo";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { ViewMyResume } from "./ViewMyResume";

export function LeftSideBar({
    active,
    onSelect,
}: {
    active: SectionKey;
    onSelect: (key: SectionKey) => void;
}) {
    return (
      <aside className="border-r border-slate-200 pr-8">
          <ProfilePhoto/>
          <ProfileInfo/>
          <ContactInfo/>
          <hr className="my-6 border-t-2 border-slate-200"/>
          <NavigationBar active={active} onSelect={onSelect}/>
          <hr className="my-6 border-t-2 border-slate-200"/>
          <ViewMyResume/>
      </aside>
    );
}