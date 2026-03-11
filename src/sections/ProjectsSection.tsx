import { projects } from "../contents/project";

export function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="rounded-2xl border p-5">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              {p.timeframe && (
                <span className="text-sm opacity-70">{p.timeframe}</span>
              )}
            </div>

            <p className="mt-2 opacity-80">{p.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2 py-1 text-xs opacity-80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}