import { TOTAL_SECTION } from "../../data/constant/generalData";
import type { SectionKey } from "../../data/constant/generalData";

export function Sidebar({
  active,
  onSelect,
}: {
  active: SectionKey;
  onSelect: (key: SectionKey) => void;
}) {
  return (
    <div className="rounded-2xl border bg-zinc-950 p-5 space-y-5">
      
      <div className="space-y-1">
        <div className="text-lg font-semibold">ME0830</div>
        <div className="text-sm opacity-70">Software Engineer</div>
      </div>

      
      <div className="space-y-2 text-sm">
        <div className="rounded-xl border px-3 py-2">📍 Taiwan</div>
        <div className="rounded-xl border px-3 py-2">✉️ you@example.com</div>
      </div>

      
      <div className="space-y-2">
        {TOTAL_SECTION.map((eachSection) => {
          const isActive = eachSection.key === active;
          return (
            <button
              key={eachSection.key}
              onClick={() => onSelect(eachSection.key)}
              className={[
                "w-full rounded-xl px-3 py-2 text-left text-sm border transition",
                isActive ? "bg-black text-white" : "hover:bg-black/5",
              ].join(" ")}
            >
              {eachSection.sectionTitle}
            </button>
          );
        })}
      </div>

      
      <a
        className="block text-center rounded-xl bg-black text-white px-3 py-2 text-sm hover:opacity-90 transition"
        href="#"
      >
        Download Resume
      </a>
    </div>
  );
}