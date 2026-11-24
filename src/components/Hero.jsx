import { ArrowDown, ArrowRight, Download, GraduationCap, Rocket } from "lucide-react";
import { profileImage, socialIcons } from "@/lib/assets";
import socials from "@/data/social.json";

const marqueeItems = [
  "Java",
  "Spring MVC",
  "JSP",
  "Servlets",
  "SQL Server",
  "Spring Boot",
  "Hibernate / JPA",
  "MySQL",
  "JDBC",
  "Maven",
  "Git & GitHub",
  "REST APIs",
];

function Sprig({ className = "" }) {
  return (
    <svg viewBox="0 0 120 220" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={className} aria-hidden>
      <path d="M60 214C58 160 62 100 60 10" />
      {[30, 62, 94, 126, 158].map((y, i) => (
        <g key={y}>
          <path d={`M60 ${y + 22}C${36 - i * 2} ${y + 18} ${22 - i * 2} ${y} ${18} ${y - 14}C${42} ${y - 12} ${56} ${y + 4} 60 ${y + 22}Z`} />
          <path d={`M60 ${y + 40}C${84 + i * 2} ${y + 36} ${98 + i * 2} ${y + 18} ${102} ${y + 4}C${78} ${y + 6} ${64} ${y + 22} 60 ${y + 40}Z`} />
        </g>
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-10 pt-28 sm:pt-32 lg:pt-36">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="animate-drift absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-sage/40 blur-3xl" />
        <div
          className="animate-drift absolute -right-24 top-40 h-[26rem] w-[26rem] rounded-full bg-accent/25 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Copy */}
        <div>
          <div
            className="animate-rise inline-flex items-center gap-3 rounded-full border border-line bg-surface/80 px-4 py-2 text-sm font-medium shadow-soft backdrop-blur"
            style={{ "--d": "50ms" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Open to internship opportunities
          </div>

          <h1
            className="font-display animate-rise mt-7 text-[clamp(3.4rem,10vw,7.5rem)] font-light leading-[0.92] tracking-[-0.035em]"
            style={{ "--d": "150ms" }}
          >
            Fathima
            <br />
            <span className="italic text-accent-ink">Asma</span>
            <span className="text-accent">.</span>
          </h1>

          <p
            className="animate-rise mt-8 max-w-xl font-display text-xl leading-snug text-ink sm:text-2xl"
            style={{ "--d": "280ms" }}
          >
            Aspiring Java Developer — Building Scalable Web Applications with Spring&nbsp;MVC
          </p>

          <p className="animate-rise mt-5 max-w-xl text-base text-muted sm:text-lg" style={{ "--d": "380ms" }}>
            Third-year Software Engineering student passionate about backend development, OOP, and creating real-world
            solutions. Experienced with Java, Spring MVC, JSP, Servlets, and SQL.
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={{ "--d": "480ms" }}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="resume.pdf" download className="btn btn-ghost">
              <Download className="h-4 w-4" aria-hidden /> Resume
            </a>
          </div>

          <ul className="animate-rise mt-9 flex items-center gap-3" style={{ "--d": "580ms" }} aria-label="Social links">
            {socials.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noreferrer" aria-label={`${s.label} (opens in a new tab)`} className="icon-btn">
                  <img src={socialIcons[s.id]} alt="" data-mono={s.id === "github" ? "" : undefined} />
                </a>
              </li>
            ))}
            <li className="ml-2 hidden h-px w-16 bg-line sm:block" aria-hidden />
            <li className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-muted sm:block">Find me online</li>
          </ul>
        </div>

        {/* Portrait */}
        <div className="animate-rise relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:max-w-none" style={{ "--d": "250ms" }}>
          <Sprig className="animate-sway absolute -left-10 bottom-8 h-56 w-28 text-primary/40 sm:-left-16" />
          <Sprig className="animate-sway absolute -right-8 top-4 hidden h-40 w-20 rotate-12 text-accent/60 sm:block" />

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            {/* offset outline arch */}
            <div className="arch absolute inset-0 translate-x-4 translate-y-4 border border-accent/60" aria-hidden />
            <div className="arch absolute inset-0 overflow-hidden bg-soft shadow-lift ring-1 ring-line">
              <img
                src={profileImage}
                alt="Portrait of Fathima Asma standing among green foliage"
                width={900}
                height={1200}
                fetchPriority="high"
                className="h-full w-full object-cover object-[60%_55%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" aria-hidden />
            </div>

            {/* Rotating badge */}
            <div className="absolute -right-3 top-[18%] hidden h-28 w-28 sm:block lg:-right-8" aria-hidden>
              <div className="absolute inset-0 rounded-full bg-surface shadow-soft ring-1 ring-line" />
              <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
                <defs>
                  <path id="circ" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" />
                </defs>
                <text className="fill-ink" fontSize="9" fontWeight="700">
                  <textPath href="#circ" textLength="218" lengthAdjust="spacing">JAVA · SPRING MVC · SQL · JSP ·</textPath>
                </text>
              </svg>
              <span className="absolute inset-0 grid place-items-center font-display text-3xl italic text-accent-ink">A</span>
            </div>

            {/* Floating chips */}
            <div className="animate-float absolute -left-3 top-10 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-soft backdrop-blur sm:-left-10">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                <GraduationCap className="h-5 w-5" aria-hidden />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold">3rd Year</p>
                <p className="text-xs text-muted">SE Student</p>
              </div>
            </div>
            <div
              className="animate-float absolute -right-2 bottom-10 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-soft backdrop-blur sm:-right-8"
              style={{ animationDelay: "-3s" }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Rocket className="h-5 w-5" aria-hidden />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold">4+</p>
                <p className="text-xs text-muted">Projects built</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="mx-auto mt-14 hidden w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink lg:flex"
      >
        Scroll <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
      </a>

      {/* Tech marquee */}
      <div className="marquee relative mt-12 overflow-hidden border-y border-line bg-surface/60 py-5 backdrop-blur" aria-label="Technologies I work with">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex items-center gap-10 pr-10" aria-hidden={dup === 1}>
              {marqueeItems.map((m) => (
                <li key={m} className="flex items-center gap-10 font-display text-2xl italic text-ink/80">
                  {m}
                  <span className="text-accent" aria-hidden>
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
