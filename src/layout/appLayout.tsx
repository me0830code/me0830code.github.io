import type { ReactNode } from "react";

export function AppShell({
    leftSideBar,
    rightContent,
}: {
    leftSideBar: ReactNode;
    rightContent: ReactNode;
}) {
  return (
  <div className="min-h-screen bg-zinc-900">
      <div className="mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <aside className="hidden md:block md:col-span-4 lg:col-span-3">
            <div className="sticky top-6">{leftSideBar}</div>
          </aside>

          <main className="col-span-12 md:col-span-8 lg:col-span-9">
            {rightContent}
          </main>
        </div>
      </div>
    </div>
  );
}