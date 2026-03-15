import type { ReactNode } from "react";

export function ContactInfo({ items }: ContactInfoProps) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="grid grid-cols-3">
          {items.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className={[
                "flex items-center justify-between px-4 py-3 text-slate-700 transition hover:bg-sky-50 hover:text-sky-700",
                index !== items.length - 1 ? "border-r border-slate-200" : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="shrink-0 text-slate-900">{item.icon}</span>
                <span className="truncate text-sm font-medium">{item.label}</span>
              </div>
  
              <ArrowUpRight className="ml-2 shrink-0" size={14} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    );
  }
// export function AppShell({
//     leftSideBar,
//     rightContent,
//   }: {
//     leftSideBar: ReactNode;
//     rightContent: ReactNode;
//   }) {
//     return (
//       <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.10),_transparent_28%),linear-gradient(to_bottom,_#f8fbff,_#eef6ff)]">
//         <div className="mx-auto max-w-7xl px-4 py-5 md:px-6 md:py-6">
//           <div className="grid grid-cols-12 gap-5 lg:gap-6">
//             <aside className="hidden md:block md:col-span-4 lg:col-span-3">
//               <div className="sticky top-6">
//                 {leftSideBar}
//               </div>
//             </aside>
  
//             <main className="col-span-12 md:col-span-8 lg:col-span-9">
//               {rightContent}
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }
// export function AppShell({
//     leftSideBar,
//     rightContent,
// }: {
//     leftSideBar: ReactNode;
//     rightContent: ReactNode;
// }) {
//     return (
//         <div className="min-h-screen bg-[#f8fbff]">
//         <div className="mx-auto px-6 py-6">
//           <div className="grid grid-cols-12 gap-6">
//             <aside className="hidden md:block md:col-span-4 lg:col-span-2">
//               <div className="sticky top-6">{leftSideBar}</div>
//             </aside>
  
//             <main className="col-span-12 md:col-span-8 lg:col-span-10">
//               {rightContent}
//             </main>
//           </div>
//         </div>
//       </div>
//       );
// }