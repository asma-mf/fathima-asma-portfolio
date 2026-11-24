import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "@/lib/content";
import { socialIcons } from "@/lib/assets";
import socials from "@/data/social.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  // Scroll state + reading progress
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Mobile menu: Esc to close + lock body scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-fg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          aria-label="Primary"
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-3 pl-5 transition-all duration-500 sm:h-16 ${
            scrolled || open
              ? "border-line bg-bg/80 shadow-soft backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#home" className="font-display text-xl font-semibold tracking-tight" aria-label="Fathima Asma — home">
            Fathima<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "bg-primary/10 text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn btn-primary hidden !min-h-11 !px-5 !py-2 text-sm sm:inline-flex">
              Hire me <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <button
              type="button"
              className="icon-btn md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </nav>

        {/* Reading progress */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px]" aria-hidden>
          <div
            className="h-full origin-left bg-gradient-to-r from-accent to-gold"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-center gap-8 px-8 pb-10 pt-24">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="font-display flex items-baseline gap-4 border-b border-line py-4 text-4xl tracking-tight"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="text-sm font-sans text-accent-ink">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                tabIndex={open ? 0 : -1}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="icon-btn"
              >
                <img src={socialIcons[s.id]} alt="" data-mono={s.id === "github" ? "" : undefined} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
