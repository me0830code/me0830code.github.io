import type { NavigationBarInfo } from "../NavigationBar/interface/NavigationBarInfo";

import { ProfilePhoto } from "./ProfilePhoto";
import { ProfileInfo } from "./ProfileInfo";
import { ContactInfo } from "./ContactInfo";
import { NormalNavigationBar } from "../NavigationBar/NormalNavigationBar";

export function LeftSideBar({activeItemKey, onSelect}: NavigationBarInfo) {
    return (
        <aside className="rounded-[0.5rem] border border-slate-200 bg-white/80 p-6 shadow-sm">
            <ProfilePhoto/>
            <ProfileInfo/>
            <ContactInfo/>

            <hr className="my-6 border-t-2 border-slate-200"/>
            
            <NormalNavigationBar activeItemKey={activeItemKey} onSelect={onSelect}/>
        </aside>
    );
}