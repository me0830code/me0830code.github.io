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

  
        <div className="mt-6 space-y-3">
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