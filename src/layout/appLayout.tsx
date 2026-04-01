import type { SectionKey } from "../data/constant/contentData";

import { useState, useRef, useEffect } from "react";
import { LeftSideBar } from "../component/LeftSideBar/LeftSideBar";
import { RightContent } from "../component/RightContent/RightContent";
import { TopAreaNavigationBar } from "../component/NavigationBar/TopAreaNavigationBar";

import { BREAK_POINT } from "../data/constant/constant";
import { TOP_SECTION, CONTENT_SECTION } from "../data/constant/contentData";

export function AppLayout() {
    const [active, setActive] = useState<SectionKey>(CONTENT_SECTION.AboutMe.key);

    const isManualScrolling = useRef(false);

    const ProfileHeader = TOP_SECTION.ProfileHeader;
    const handleSelect = (key: SectionKey) => {
        isManualScrolling.current = true;
        setActive(key);

        const isTopNavLayout = window.innerWidth < BREAK_POINT.LAPTOP;
        const targetId = (isTopNavLayout && key === CONTENT_SECTION.AboutMe.key) ? ProfileHeader.key : key;
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        setTimeout(() => {
            isManualScrolling.current = false;
        }, 1000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isManualScrolling.current) {
                        setActive(entry.target.id as SectionKey);
                    }
                });
            },
            {
                rootMargin: "0px 0px -80% 0px",
                threshold: 0,
            }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,_#f8fbff,_#eef5fb)]">
            <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8 xl:px-14 xl:py-10">
                <div className="sticky top-0 z-30 mb-4 pt-1 xl:hidden">
                    <TopAreaNavigationBar activeItemKey={active} onSelect={handleSelect}/>
                </div>

                <div className="mb-4 xl:hidden">
                    <ProfileHeader.componentUI/>
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-10">
                    <aside className="hidden xl:block xl:col-span-3">
                        <div className="sticky top-8">
                            <LeftSideBar activeItemKey={active} onSelect={handleSelect}/>
                        </div>
                    </aside>

                    <main className="xl:col-span-9">
                        <RightContent/>
                    </main>
                </div>
            </div>
        </div>
    );
}