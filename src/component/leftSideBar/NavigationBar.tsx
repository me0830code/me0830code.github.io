import { TOTAL_SECTION } from "../../data/constant/contentData";

export function NavigationBar({ 
    active, 
    onSelect 
  }: { 
    active: string; 
    onSelect: (key: string) => void; 
  }) {
    return (
      <div className="sticky top-8">
        <div className="space-y-8">
          <nav className="space-y-1 pt-4">
            {TOTAL_SECTION.map((eachSection) => {
              const isActive = eachSection.key === active;

              return (
                <button
                  key={eachSection.key}
                  onClick={() => onSelect(eachSection.key)}
                  className={`block w-full px-0 py-2 text-left text-base transition ${
                    isActive
                      ? "font-semibold text-slate-900"
                      : "text-slate-500 hover:text-sky-600"
                  }`}
                >
                  {eachSection.sectionTitle}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    );
}