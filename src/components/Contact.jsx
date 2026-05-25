import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import socials from "@/data/social.json";

export function Contact() {
  const emailLink = socials.find((s) => s.id === "email");

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center gradient-hero text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-medium mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              Available for internship opportunities starting 2026
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s build something great together.
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto mb-8">
              Looking for an intern who&apos;s curious, reliable, and ready to
              learn? I&apos;d love to hear from you.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button size="lg" variant="secondary" asChild className="shadow-glow">
                <a href={emailLink?.url ?? "mailto:fathuasma456@gmail.com"}>
                  Get in touch &rarr;
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm opacity-90 mb-6">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {emailLink?.url?.replace("mailto:", "") ?? "fathuasma456@gmail.com"}
              </span>
              <span className="inline-flex items-center gap-2">
                📍 Open to remote &amp; on-site
              </span>
            </div>

            {/* Social icon buttons — driven from social.json */}
            <div className="flex justify-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  aria-label={s.label}
                  className={`contact-social-btn${s.type === "image" ? " contact-social-img-btn" : ""}`}
                  {...(s.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {s.type === "image" ? (
                    <img src={s.icon} alt={s.label} className="contact-social-icon" />
                  ) : (
                    <Mail className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground mt-10">
          <p>© {new Date().getFullYear()} Fathima Asma. All rights reserved.</p>
          <p>Built with React, Tailwind CSS &amp; a lot of ☕</p>
        </footer>
      </div>
    </section>
  );
}