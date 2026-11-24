import { BookOpen, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import { profileImage } from "@/lib/assets";
import { stats } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Photo */}
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-3 -rotate-3 rounded-[2.2rem] bg-accent-soft" aria-hidden />
          <figure className="relative overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-line">
            <img
              src={profileImage}
              alt="Fathima Asma among tall green leaves in soft dappled light"
              width={900}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-[55%_30%] transition-transform duration-[1.6s] ease-out hover:scale-105"
            />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-bg/85 px-4 py-3 text-sm backdrop-blur">
              <span className="font-display text-base font-semibold">Fathima Asma</span>
              <span className="text-muted">Java Developer · 3rd Year SE</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow">About Me</p>
            <h2 id="about-title" className="section-title">
              Driven by curiosity, <em>powered by code.</em>
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I am a dedicated and detail-oriented third-year Software Engineering student with a strong passion for
              backend development and software engineering. My journey into programming began with a fascination for how
              things work under the hood, which led me to specialize in Java and web application development.
            </p>
            <p>
              I enjoy building robust, scalable applications that solve real-world problems. My academic foundation in
              Object-Oriented Programming, Data Structures, and Database Management Systems has prepared me to tackle
              complex technical challenges with confidence and creativity.
            </p>
          </Reveal>

          <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map(({ icon: Icon, label, value }, i) => (
              <Reveal key={label} delay={150 + i * 90} className="card px-3 py-5 text-center sm:px-5">
                <Icon className="mx-auto mb-2 h-5 w-5 text-accent-ink" aria-hidden />
                <dd className="font-display text-xl font-semibold leading-tight sm:text-2xl">{value}</dd>
                <dt className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted sm:text-xs">{label}</dt>
              </Reveal>
            ))}
          </dl>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Reveal delay={100} className="card p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-semibold">Education</h3>
              <p className="mt-2 text-sm font-medium">
                Information Technology — Specializing in Software Engineering · Third Year
              </p>
              <p className="mt-2 text-sm text-muted">
                Maintaining a strong academic record with focus on core software fundamentals and practical application
                development.
              </p>
            </Reveal>
            <Reveal delay={200} className="card p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                <Target className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-semibold">Current Focus</h3>
              <p className="mt-2 text-sm font-medium">Learning Spring Boot and improving full-stack skills</p>
              <p className="mt-2 text-sm text-muted">
                Expanding beyond Spring MVC into Spring Boot microservices, REST API design, and modern deployment
                practices.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
