export function Navbar() {
    const items = [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ];
  
    return (
      <header className="w-full border-b bg-white">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center gap-6">
          <a href="#" className="font-semibold tracking-tight">
            Kevin Yeh
          </a>
  
          <nav className="flex-1 grid grid-cols-4 gap-2">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-center rounded-xl px-3 py-2 text-sm hover:bg-black/5 transition"
              >
                {it.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }