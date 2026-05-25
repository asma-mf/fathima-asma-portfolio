import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import socials from "@/data/social.json";

const navLinks = [
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display font-bold text-lg tracking-tight">
          Fathima<span className="text-primary">.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Colorful social icons — desktop only, from social.json */}
          <div className="hidden md:flex items-center gap-1.5 mr-1">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                aria-label={s.label}
                className="navbar-social-btn"
                {...(s.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {s.type === "image" ? (
                  <img src={s.icon} alt={s.label} className="navbar-social-icon" />
                ) : (
                  <Mail className="h-4 w-4 text-muted-foreground" />
                )}
              </a>
            ))}
          </div>

          <ThemeToggle />

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Hire me</a>
          </Button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-foreground hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-up">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                {l.label}
              </a>
            ))}

            {/* Social icons in mobile menu — from social.json */}
            <div className="flex items-center gap-3 pt-4 border-t border-border mt-2">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  aria-label={s.label}
                  className={`navbar-social-btn${s.type === "lucide" ? " navbar-social-mail" : ""}`}
                  {...(s.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {s.type === "image" ? (
                    <img src={s.icon} alt={s.label} className="navbar-social-icon" />
                  ) : (
                    <Mail className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}