export function AboutSection() {
    return (
      <div className="space-y-16">
        <section className="max-w-4xl pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            About
          </p>
  
          <h1 className="mt-4 text-6xl font-semibold tracking-tight text-slate-900">
            About me
          </h1>
  
          <div className="mt-8 space-y-6 text-xl leading-10 text-slate-700">
            <p>
              I’m a software engineer passionate about building clean, scalable,
              and user-focused products.
            </p>
  
            <p>
              I enjoy turning complex ideas into practical solutions and
              continuously improving both technical execution and product
              thinking.
            </p>
          </div>
        </section>
  
        <section
          className="max-w-5xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(148,163,184,0.08)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Focus
          </p>
  
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            What I&apos;m doing
          </h2>
  
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Currently, I’m focused on backend engineering, building reliable
            systems, and creating a portfolio that better presents my work,
            experience, and projects.
          </p>
        </section>
      </div>
    );
  }