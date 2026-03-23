import { useState } from "react";
import { LeftSideBar } from "../component/LeftSideBar/LeftSideBar";
import { RightContent } from "../component/RightContent/RightContent";
import type { SectionKey } from "../data/constant/contentData";
import { CONTENT_SECTION } from "../data/constant/contentData";

export function AppLayout() {

    const [active, setActive] = useState<SectionKey>(CONTENT_SECTION.AboutMe.key);

    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,_#f8fbff,_#eef5fb)]">
            <div className="ml-6 mx-auto px-8 py-8">
                <div className="grid grid-cols-14 gap-12">
                <aside className="hidden md:block md:col-span-4 lg:col-span-3">
                    <LeftSideBar active={active} onSelect={setActive}/>
                </aside>

                <main className="col-span-12 md:col-span-8 lg:col-span-9">
                    <RightContent active={active}/>
                </main>
                </div>
            </div>
        </div>
    );
}