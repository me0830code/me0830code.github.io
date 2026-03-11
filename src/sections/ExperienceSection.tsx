import { milestones } from "../contents/experience";

export function ExperienceSection() {
  return (
    <section id="experience">
      <h2 className="text-2xl font-semibold">Experience</h2>

      <div className="mt-6 space-y-6">
        {milestones.map((m) => (
          <div key={`${m.period}-${m.title}`} className="relative">

            <div className="absolute left-2 top-2 h-full w-px bg-black/10" />

            <div className="rounded-2xl border p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-lg font-semibold">{m.title}</div>
                  <div className="opacity-80">{m.org}</div>
                </div>
                <div className="text-sm opacity-70">{m.period}</div>
              </div>

              <ul className="mt-3 list-disc space-y-1 pl-5 opacity-85">
                {m.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {m.updates?.length ? (
                <div className="mt-4">
                  <div className="text-sm font-semibold opacity-80">Updates</div>
                  <ul className="mt-2 space-y-1">
                    {m.updates.map((u) => (
                      <li key={`${u.date}-${u.text}`} className="text-sm opacity-80">
                        <span className="opacity-70">{u.date}</span> — {u.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}