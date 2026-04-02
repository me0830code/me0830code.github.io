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
    const pendingTargetKey = useRef<SectionKey | null>(null);

    const ProfileHeader = TOP_SECTION.ProfileHeader;

    const handleSelect = (key: SectionKey) => {
        isManualScrolling.current = true;
        pendingTargetKey.current = key;
        setActive(key);

        const needToShowTopNavigationBar = window.innerWidth < BREAK_POINT.LAPTOP;
        const targetId = (needToShowTopNavigationBar && key === CONTENT_SECTION.AboutMe.key) ? ProfileHeader.key : key;

        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const getSections = () => Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];

        const updateActiveSection = () => {
            const sections = getSections();
            if (sections.length === 0) return;

            const isDesktop = window.innerWidth >= BREAK_POINT.LAPTOP;
            const activationLine = isDesktop ? 140 : 120;
            const activationTolerance = 28;

            if (isManualScrolling.current && pendingTargetKey.current) {
                const needToShowTopNavigationBar = window.innerWidth < BREAK_POINT.LAPTOP;
                const targetId = (needToShowTopNavigationBar && pendingTargetKey.current === CONTENT_SECTION.AboutMe.key) ? ProfileHeader.key : pendingTargetKey.current;

                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const rect = targetElement.getBoundingClientRect();

                    if (Math.abs(rect.top - activationLine) <= activationTolerance) {
                        isManualScrolling.current = false;
                        pendingTargetKey.current = null;
                
                        if (targetId === ProfileHeader.key) {
                            setActive(CONTENT_SECTION.AboutMe.key);
                        } else {
                            setActive(targetId as SectionKey);
                        }
                    } else {
                        setActive(pendingTargetKey.current);
                    }
                }

                return;
            }

            const candidates = sections.map((section) => (
                {
                    id: section.id as SectionKey,
                    top: section.getBoundingClientRect().top,
                }
            )).filter((section) => section.top <= activationLine + activationTolerance);

            if (candidates.length === 0) {
                setActive(sections[0].id as SectionKey);
                return;
            }

            const current = candidates[candidates.length - 1];
            setActive(current.id);
        };

        const handleScroll = () => {
            updateActiveSection();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        updateActiveSection();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, [ProfileHeader.key]);

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