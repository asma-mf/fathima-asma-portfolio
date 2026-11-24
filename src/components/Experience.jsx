import { Reveal } from "./Reveal";
import { useInView } from "@/hooks/useInView";
import { timeline } from "@/lib/content";

export function Experience() {
  const [lineRef, lineIn] = useInView(0.05, "0px 0px -20% 0px");
  return (
    <section id="experience" className="relative py-24 sm:py-32" aria-labelledby="exp-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Experience</p>
            <h2 id="exp-title" className="section-title">
              Academic projects &amp; <em>self-learning</em>
            </h2>
            <p className="mt-5 text-base text-muted sm:text-lg">
              While I haven&apos;t held a formal industry role yet, I&apos;ve treated every academic project and
              self-study sprint like real engineering work — with clean architecture, version control, and a focus on
              shipping.
            </p>
          </Reveal>

          <ol className="relative ml-4 space-y-10 sm:ml-6">
            <div
              ref={lineRef}
              className={`timeline-line absolute -left-px top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-line to-transparent ${
                lineIn ? "in" : ""
              }`}
              aria-hidden
            />
            {timeline.map((t, i) => {
              const Icon = t.icon;
              return (
                <li key={t.title} className="relative pl-10 sm:pl-12">
                  <Reveal delay={i * 80}>
                    <span className="absolute -left-5 top-1 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-fg ring-[6px] ring-bg">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <article className="card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                      <p className="chip mb-3">{t.period}</p>
                      <h3 className="font-display text-xl font-semibold leading-snug sm:text-2xl">{t.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-accent-ink">{t.org}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{t.desc}</p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
