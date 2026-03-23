import type { SectionKey } from "../../../data/constant/contentData";

import { TOTAL_SECTION } from "../../../data/constant/contentData";
import { NavigationItem } from "./NavigationItem";

export function NavigationBar({ 
    active, 
    onSelect 
}: { 
    active: SectionKey;
    onSelect: (key: SectionKey) => void;
}) {
    return (
        <div className="sticky top-8">
            <div className="space-y-8">
                <nav className="space-y-1">
                    {
                        TOTAL_SECTION.map((eachSection) => {
                            const isActive = eachSection.key === active;
                            return <NavigationItem eachItem={eachSection} isActive={isActive} onSelect={onSelect}/>
                        })
                    }
                </nav>
            </div>
        </div>
    );
}