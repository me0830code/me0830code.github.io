import type { SectionKey } from "../data/constant/contentData";

import { useState, useRef, useEffect } from "react";
import { LeftSideBar } from "../component/LeftSideBar/LeftSideBar";
import { TopNavigatioBar } from "../component/LeftSideBar/NavigationBar/TopNavigationBar";
import { RightContent } from "../component/RightContent/RightContent";
import { CONTENT_SECTION } from "../data/constant/contentData";
import { MiniProfileHeader } from "../component/LeftSideBar/MiniProfileHeader";

export function AppLayout() {
    const [active, setActive] = useState<SectionKey>(CONTENT_SECTION.AboutMe.key);

    const isManualScrolling = useRef(false);

    const handleSelect = (key: SectionKey) => {
        isManualScrolling.current = true;
        setActive(key);

        const isTopNavLayout = window.innerWidth < 1536;

        const targetId =
            isTopNavLayout && key === CONTENT_SECTION.AboutMe.key
                ? "mini-profile-header"
                : key;

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
            <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8 2xl:px-14 2xl:py-10">
                <div className="sticky top-0 z-30 -mx-1 mb-4 bg-[linear-gradient(to_bottom,_#f8fbff,_#eef5fb)] px-1 py-1 2xl:hidden">
                    <TopNavigatioBar active={active} onSelect={handleSelect} />
                </div>

                <div className="mb-4 2xl:hidden">
                    <MiniProfileHeader />
                </div>

                <div className="grid grid-cols-1 gap-6 2xl:grid-cols-12 2xl:gap-10">
                    <aside className="hidden 2xl:block 2xl:col-span-3">
                        <div className="sticky top-8">
                            <LeftSideBar active={active} onSelect={handleSelect} />
                        </div>
                    </aside>

                    <main className="2xl:col-span-9">
                        <RightContent />
                    </main>
                </div>
            </div>
        </div>
    );
}

export function AppLayout2() {
    const [active, setActive] = useState<SectionKey>(CONTENT_SECTION.AboutMe.key);

    const isManualScrolling = useRef(false);

    const handleSelect = (key: SectionKey) => {
        isManualScrolling.current = true;
        setActive(key);
        
        const element = document.getElementById(key);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
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
                threshold: 0
            }
        );
    
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));
    
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,_#f8fbff,_#eef5fb)]">
            <div className="mx-auto px-8 py-8">
                <div className="grid grid-cols-14 gap-12">
                    <aside className="pl-2 hidden md:block md:col-span-4 lg:col-span-3 sticky top-8 h-fit">
                        <LeftSideBar active={active} onSelect={handleSelect}/>
                    </aside>

                    <main className="pr-6 col-span-12 md:col-span-10 lg:col-span-11">
                        <RightContent />
                    </main>
                </div>
            </div>
        </div>
    );
}