import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 shadow-lg shadow-slate-950/30">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 shadow-[0_0_25px_rgba(16,185,129,0.45)]" />
              <span className="text-white text-lg font-semibold tracking-tight">Survey Studio</span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-slate-200/80 hover:text-white transition-colors text-sm">
                  {l.label}
                </a>
              ))}
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pb-4">
              <div className="flex flex-col py-2">
                {links.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-200/90 hover:text-white">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
