// import { PERSONAL_INFO } from "../../data/personalData/personalData";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
type ContactItem = {
    label: string;
    href?: string;
    icon: ReactNode;
  };
  
  type ContactInfoProps = {
    location: {
      label: string;
      icon: ReactNode;
    };
    items: ContactItem[];
  };
  
  export function ContactInfo({ location, items }: ContactInfoProps) {
    return (
      <div className="space-y-4 text-sm">
      <div className="flex items-center gap-3 text-slate-600">
        <span className="shrink-0 text-slate-500">{location.icon}</span>
        <span>{location.label}</span>
      </div>

  
        <div className="mt-12 space-y-3">
          {items.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                title={item.label}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 transition hover:text-sky-600"
              >
                <span className="shrink-0 text-slate-500">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ) : (
              <div
                key={item.label}
                className="flex items-center gap-3 text-slate-600"
              >
                <span className="shrink-0 text-slate-500">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
// type ContactItem = {
//   label: string;
//   href: string;
//   icon: ReactNode;
// };

// type ContactInfoProps = {
//   items: ContactItem[];
// };

// export function ContactInfo({ items }: ContactInfoProps) {
//   return (
//     <div className="flex items-center gap-3">
//       {items.map((item) => (
//         <a
//           key={item.label}
//           href={item.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={item.label}
//           title={item.label}
//           className="inline-flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-600 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
//         >
//           {item.icon}
//         </a>
//       ))}
//     </div>
//   );
// }
// type ContactItem = {
//     label: string;
//     href?: string;
//   };
  
//   type ContactInfoProps = {
//     items: ContactItem[];
//   };
  
//   export function ContactInfo({ items }: ContactInfoProps) {
//     return (
//       <div className="space-y-3 text-sm text-slate-600">
//         {items.map((item) =>
//           item.href ? (
//             <a
//               key={item.label}
//               href={item.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block transition hover:text-sky-600"
//             >
//               {item.label}
//             </a>
//           ) : (
//             <div key={item.label}>{item.label}</div>
//           )
//         )}
//       </div>
//     );
//   }