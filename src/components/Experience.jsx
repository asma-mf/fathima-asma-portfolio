import { GraduationCap, Code2, Database, Sparkles } from "lucide-react";
const timeline = [{
  icon: GraduationCap,
  period: "2023 — Present",
  title: "B.Tech in Computer Science",
  org: "University · 3rd Year",
  desc: "Core coursework in Data Structures, Algorithms, DBMS, Operating Systems, and Software Engineering. Maintaining a strong academic record while shipping side projects."
}, {
  icon: Code2,
  period: "2024 — 2025",
  title: "Fresh Fold — Academic Capstone",
  org: "Java · Spring MVC · SQL Server",
  desc: "Designed and developed a full-stack laundry management system end-to-end — from database schema and MVC architecture to UI, authentication, and order workflows."
}, {
  icon: Database,
  period: "2024",
  title: "Fitness Membership System",
  org: "Java · JSP · Servlets · OOP",
  desc: "Built a member, trainer, and attendance management application applying object-oriented design and file-handling persistence as a hands-on OOP project."
}, {
  icon: Sparkles,
  period: "Ongoing",
  title: "Self-Learning & Practice",
  org: "Spring Boot · DSA · SQL",
  desc: "Currently deepening Spring Boot, REST APIs, and full-stack development. Daily problem-solving in Java on LeetCode and SQL practice across real-world schemas."
}];
export function Experience() {
  return <section id="experience" className="py-24 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Academic projects & self-learning
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            While I haven&apos;t held a formal industry role yet, I&apos;ve treated every
            academic project and self-study sprint like real engineering work — with
            clean architecture, version control, and a focus on shipping.
          </p>
        </div>

        <ol className="relative border-l border-border ml-3 space-y-10">
          {timeline.map(t => {
          const Icon = t.icon;
          return <li key={t.title} className="ml-8">
                <span className="absolute -left-[18px] mt-0.5 h-9 w-9 rounded-full bg-primary text-primary-foreground ring-4 ring-background flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-xs font-medium text-muted-foreground mb-1">
                  {t.period}
                </p>
                <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                <p className="text-sm text-primary mb-2">{t.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </li>;
        })}
        </ol>
      </div>
    </section>;
}