import type { SectionKey } from "../../data/constant/contentData";

import { ProfilePhoto } from "./ProfilePhoto";
import { ProfileInfo } from "./ProfileInfo";
import { ContactInfo } from "./ContactInfo";
import { NavigationBar } from "./NavigationBar/NavigationBar";

export function LeftSideBar({
    active,
    onSelect,
}: {
    active: SectionKey;
    onSelect: (key: SectionKey) => void;
}) {
    return (
        <aside className="rounded-[0.5rem] border border-slate-200 bg-white/80 p-6 shadow-sm">
            <ProfilePhoto />
            <ProfileInfo />
            <ContactInfo />
            <hr className="my-6 border-t-2 border-slate-200" />
            <NavigationBar active={active} onSelect={onSelect} />
        </aside>
    );
}

export function LeftSideBar2({
    active,
    onSelect,
}: {
    active: SectionKey;
    onSelect: (key: SectionKey) => void;
}) {
    return (
      <aside className="border-r border-slate-200 pr-10">
          <ProfilePhoto/>
          <ProfileInfo/>
          <ContactInfo/>
          <hr className="my-6 border-t-2 border-slate-200"/>
          <NavigationBar active={active} onSelect={onSelect}/>
      </aside>
    );
}