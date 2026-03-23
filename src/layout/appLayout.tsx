import type { ReactNode } from "react";

export function AppShell({
    leftSideBar,
    rightContent,
}: {
    leftSideBar: ReactNode;
    rightContent: ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,_#f8fbff,_#eef5fb)]">
            <div className="ml-6 mx-auto px-8 py-8">
                <div className="grid grid-cols-14 gap-12">
                <aside className="hidden md:block md:col-span-4 lg:col-span-3">
                    {leftSideBar}
                </aside>

                <main className="col-span-12 md:col-span-8 lg:col-span-9">
                    {rightContent}
                </main>
                </div>
            </div>
        </div>
    );
}