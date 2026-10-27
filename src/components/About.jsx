import { GraduationCap, Code2, Sparkles, BookOpen, Target } from "lucide-react";
import profileImg from "@/assets/profile.png";

const stats = [
  { icon: Code2,         label: "Projects built",  value: "4+"          },
  { icon: GraduationCap, label: "SE Student",       value: "3rd Year"   },
  { icon: Sparkles,      label: "Tech focus",       value: "Backend & Web" },
];

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* ── Mobile-only: compact avatar + name byline (hidden on md+) ── */}
        <div className="about-mobile-header md:hidden">
          <div className="about-avatar-ring">
            {profileImg ? (
              <img
                src={profileImg}
                alt="Fathima Asma"
                className="about-avatar-img"
              />
            ) : (
              <span className="about-avatar-initials">FA</span>
            )}
          </div>
          <div>
            <p className="about-avatar-name">Fathima Asma</p>
            <p className="about-avatar-role">Java Developer · 3rd Year SE</p>
          </div>
        </div>

        {/* ── Main 2-col grid ── */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ── Left: Full photo card — desktop only ── */}
          {/* ── Left: Full photo card — desktop only (hidden on mobile via CSS) ── */}
          <div className="about-photo-col">
            <div className="about-photo-card">
              <div className="about-photo-blob" />

              <div className="about-photo-wrap">
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="Fathima Asma"
                    className="about-photo-img"
                  />
                ) : (
                  <div className="about-photo-placeholder">
                    <span className="about-photo-initials">FA</span>
                  </div>
                )}
              </div>

              <div className="about-dot about-dot-tl" />
              <div className="about-dot about-dot-br" />

              <div className="about-chip about-chip-left">
                <span>☕</span> Java Developer
              </div>
              <div className="about-chip about-chip-right">
                <span>🌐</span> Spring MVC
              </div>
            </div>

            {/* Stats row — desktop only, below photo */}
            <div className="about-stats-row">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="about-stat-card">
                  <Icon className="h-4 w-4 text-primary mb-1 mx-auto" />
                  <div className="about-stat-value">{value}</div>
                  <div className="about-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Text content ── */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                About Me
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Driven by curiosity,<br />powered by code.
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated and detail-oriented third-year Software Engineering
                student with a strong passion for backend development and software
                engineering. My journey into programming began with a fascination for
                how things work under the hood, which led me to specialize in Java and
                web application development.
              </p>
              <p>
                I enjoy building robust, scalable applications that solve real-world
                problems. My academic foundation in Object-Oriented Programming, Data
                Structures, and Database Management Systems has prepared me to tackle
                complex technical challenges with confidence and creativity.
              </p>
            </div>

            {/* Mobile stats — shows only on mobile since desktop has them under the photo */}
            <div className="about-stats-row md:hidden">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="about-stat-card">
                  <Icon className="h-4 w-4 text-primary mb-1 mx-auto" />
                  <div className="about-stat-value">{value}</div>
                  <div className="about-stat-label">{label}</div>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Information Technology — Specializing in Software Engineering · Third Year
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Maintaining a strong academic record with focus on core software
                    fundamentals and practical application development.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Current Focus</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Learning Spring Boot and improving full-stack skills
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Expanding beyond Spring MVC into Spring Boot microservices, REST
                    API design, and modern deployment practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}