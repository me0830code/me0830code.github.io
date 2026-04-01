import type { NavigationBarInfo } from "../NavigationBar/interface/NavigationBarInfo";

import { NormalNavigationBar } from "./NormalNavigationBar";

export function TopAreaNavigationBar({activeItemKey, onSelect}: NavigationBarInfo) {
    return (
        <div className="rounded-[0.5rem] border border-slate-200/80 bg-white/85 px-3 py-3 shadow-sm backdrop-blur">
            <NormalNavigationBar activeItemKey={activeItemKey} onSelect={onSelect}/>
        </div>
    );
}