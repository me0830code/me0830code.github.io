import type { SectionKey } from "../../../data/constant/contentData";
import { NavigationBar } from "../NavigationBar/NavigationBar";

export function TopNavigatioBar({
    active,
    onSelect,
}: {
    active: SectionKey;
    onSelect: (key: SectionKey) => void;
}) {
    return (
        <div className="rounded-[0.5rem] border border-slate-200/80 bg-white/85 px-3 py-3 shadow-sm backdrop-blur">
            <NavigationBar active={active} onSelect={onSelect} />
        </div>
    );
}