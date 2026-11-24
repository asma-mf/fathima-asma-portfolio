import { ArrowUp, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { EMAIL } from "@/lib/content";
import { socialIcons } from "@/lib/assets";
import socials from "@/data/social.json";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 pb-8 pt-10 sm:px-6 sm:pt-16" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#16382b] px-6 py-16 text-center text-[#f7f3ea] shadow-lift sm:rounded-[2.5rem] sm:px-12 sm:py-24 dark:bg-[#143026] dark:ring-1 dark:ring-white/10">
            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
              <div className="animate-drift absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#e4766a]/40 blur-3xl" />
              <div
                className="animate-drift absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#a8c3a0]/30 blur-3xl"
                style={{ animationDelay: "-8s" }}
              />
              <div className="absolute inset-4 rounded-[1.6rem] border border-white/10 sm:inset-6 sm:rounded-[2.1rem]" />
            </div>

            <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" aria-hidden />
              Available for internship opportunities starting 2026
            </span>

            <h2
              id="contact-title"
              className="font-display mx-auto mt-8 max-w-3xl text-[clamp(2.2rem,6vw,4.5rem)] font-light leading-[1.05] tracking-tight"
            >
              Let&apos;s build something <em className="text-[#f4a196]">great</em> together.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-[#f7f3ea]/80 sm:text-lg">
              Looking for an intern who&apos;s curious, reliable, and ready to learn? I&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="btn bg-[#f7f3ea] text-[#14261d] shadow-[0_14px_30px_-12px_rgba(0,0,0,.5)] hover:bg-white"
              >
                <Mail className="h-4 w-4" aria-hidden /> Get in touch <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <a href="resume.pdf" download className="btn border-white/30 text-[#f7f3ea] hover:bg-white/10">
                <Download className="h-4 w-4" aria-hidden /> Download Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#f7f3ea]/85">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
                <Mail className="h-4 w-4" aria-hidden /> {EMAIL}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden /> Open to remote &amp; on-site
              </span>
            </div>

            <ul className="mt-9 flex justify-center gap-3" aria-label="Social links">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="grid h-12 w-12 place-items-center rounded-full bg-[#f7f3ea] transition-transform hover:-translate-y-1 hover:scale-105"
                  >
                    <img src={socialIcons[s.id]} alt="" className="h-6 w-6 object-contain" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 pb-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Fathima Asma. All rights reserved.</p>
          <p>Built with React, Tailwind CSS &amp; a lot of ☕</p>
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-accent-ink">
            Back to top <ArrowUp className="h-4 w-4" aria-hidden />
          </a>
        </footer>
      </div>
    </section>
  );
}
