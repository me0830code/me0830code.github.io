export function Navbar() {
    const items = [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ];
  
    return (
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between gap-4">
          <a href="#" className="font-semibold tracking-tight">
            Kevin Yeh
          </a>
  
          <nav className="flex flex-wrap items-center gap-3 text-sm">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="rounded-full px-3 py-1 hover:bg-black/5 transition"
              >
                {it.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }