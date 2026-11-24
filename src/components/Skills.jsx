import { Reveal } from "./Reveal";
import { useInView } from "@/hooks/useInView";
import { skillGroups } from "@/lib/content";

function SkillCard({ group, index }) {
  const [ref, inView] = useInView(0.2);
  const Icon = group.icon;
  return (
    <div
      ref={ref}
      className={`reveal card group p-7 transition-[transform,box-shadow,opacity] duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
        inView ? "in" : ""
      }`}
      style={{ "--d": `${(index % 3) * 100}ms` }}
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-fg">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-display text-xl font-semibold leading-tight">{group.title}</h3>
      </div>
      <ul className="space-y-4">
        {group.items.map((item, i) => (
          <li key={item.name}>
            <div className="mb-1.5 flex items-baseline justify-between text-sm">
              <span className="font-semibold">{item.name}</span>
              <span className="tabular-nums text-muted">{item.level}%</span>
            </div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-line"
              role="progressbar"
              aria-label={`${item.name} proficiency`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={item.level}
            >
              <div
                className="bar-fill h-full rounded-full bg-gradient-to-r from-primary to-accent"
                style={{ width: `${item.level}%`, "--d": `${200 + i * 110}ms` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative bg-soft py-24 sm:py-32" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">Skills &amp; Technologies</p>
          <h2 id="skills-title" className="section-title">
            My technical <em>toolkit</em>
          </h2>
          <p className="mt-5 text-base text-muted sm:text-lg">
            A snapshot of the languages, frameworks, and tools I use to build reliable backend systems and full-stack web
            applications.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.title} group={g} index={i} />
          ))}
          <Reveal delay={200} className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-7 text-primary-fg">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/40 blur-2xl" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Currently learning</p>
            <p className="font-display mt-6 text-3xl font-light leading-tight">
              Spring Boot, REST APIs &amp; <em>full-stack</em> development.
            </p>
            <p className="mt-6 text-sm opacity-80">Daily Java problem-solving on LeetCode and SQL practice across real-world schemas.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
