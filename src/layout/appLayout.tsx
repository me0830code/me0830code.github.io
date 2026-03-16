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