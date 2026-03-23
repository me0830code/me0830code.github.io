import { useMemo, useState } from "react";
import { projects } from "../contents/project";
import type { Project } from "../contents/project";

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-1 text-sm opacity-70">Selected work and ongoing builds.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const active = tag === activeTag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={[
                  "rounded-full border px-3 py-1 text-sm transition",
                  active ? "bg-black text-white" : "hover:bg-black/5",
                ].join(" ")}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {featured.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-70">
            Featured
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p, index) => (
            <ProjectCard key={`${p.slug}-${index}`} p={p} />
          ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {featured.length > 0 && (
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-70">
            More Projects
          </h3>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status?: string }) {
  if (!status) return null;
  const map: Record<string, string> = {
    WIP: "border-yellow-500/30 bg-yellow-500/10",
    Demo: "border-blue-500/30 bg-blue-500/10",
    Shipped: "border-green-500/30 bg-green-500/10",
  };
  return (
    <span className={["text-xs rounded-full border px-2 py-1", map[status] ?? ""].join(" ")}>
      {status}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border p-5 hover:shadow-sm transition">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold">{p.title}</h4>
        <StatusBadge status={p.status} />
      </div>
      {p.cover ? (
        <img
          src={`${import.meta.env.BASE_URL}${p.cover}`}
          alt=""
          className="mb-4 h-40 w-full rounded-xl object-cover"
        />
      ) : null}
      <p className="mt-2 opacity-80">{p.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
      {p.tags.map((t: string, index: number) => (
        <span 
          key={`${t}-${index}`} 
          className="rounded-full border px-2 py-1 text-xs opacity-80"
        >
          {t}
        </span>
      ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
      {p.links.map((l: { label: string; href: string }, index: number) => (
        <a 
          key={`${l.href}-${index}`} 
          href={l.href} 
          target="_blank" 
          rel="noreferrer" 
          className="underline"
        >
          {l.label}
        </a>
      ))}
      </div>

      {p.timeframe && <div className="mt-3 text-xs opacity-60">{p.timeframe}</div>}
    </article>
  );
}