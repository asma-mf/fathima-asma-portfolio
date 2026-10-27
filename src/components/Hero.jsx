import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";
import socials from "@/data/social.json";

const floatingIcons = [
  { icon: "☕", left: "8%", top: "18%", delay: "0s", duration: "6s" },
  { icon: "⚙️", left: "88%", top: "12%", delay: "1s", duration: "7s" },
  { icon: "🗄️", left: "78%", top: "62%", delay: "2s", duration: "8s" },
  { icon: "🔗", left: "4%", top: "72%", delay: "0.5s", duration: "6.5s" },
  { icon: "📡", left: "52%", top: "8%", delay: "1.5s", duration: "7.5s" },
  { icon: "🛠️", left: "28%", top: "80%", delay: "2.5s", duration: "8.5s" },
  { icon: "💻", left: "92%", top: "48%", delay: "3s", duration: "6s" },
  { icon: "☁️", left: "18%", top: "52%", delay: "1.2s", duration: "7s" },
];

function SocialIcon({ social, className = "social-icon-btn" }) {
  const isExternal = social.external;
  return (
    <a
      href={social.url}
      aria-label={social.label}
      className={className}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {social.type === "image" ? (
        <img src={social.icon} alt={social.label} className="social-icon-img" />
      ) : (
        <Mail className="h-5 w-5" />
      )}
    </a>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background decorations */}
      <div className="hero-bg-decorations">
        {floatingIcons.map((item, idx) => (
          <span
            key={idx}
            className="hero-float-icon floating-icon"
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.icon}
          </span>
        ))}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="hero-container">
        {/* ── Left column ── */}
        <div className="hero-content animate-fade-up">
          {/* Availability badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot">
              <span className="hero-badge-ping" />
              <span className="hero-badge-inner" />
            </span>
            Open to internship opportunities
          </div>

          {/* Name */}
          <h1 className="hero-name">
            Fathima<br />
            <span className="gradient-text">Asma</span>
          </h1>

          {/* Role */}
          <p className="hero-role">
            Aspiring Java Developer &mdash; Building Scalable Web Applications
            with Spring MVC
          </p>

          {/* Bio */}
          <p className="hero-bio">
            Third-year Software Engineering student passionate about backend
            development, OOP, and creating real-world solutions. Experienced
            with Java, Spring MVC, JSP, Servlets, and SQL.
          </p>

          {/* CTA row */}
          <div className="hero-cta-row">
            <Button size="lg" asChild className="shadow-elegant">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>

          {/* Social icons row — driven from social.json */}
          <div className="hero-socials">
            {socials.map((s) => (
              <SocialIcon
                key={s.id}
                social={s}
                className={`social-icon-btn${s.type === "lucide" ? " social-icon-btn-mail" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* ── Right column: profile photo ── */}
        <div className="hero-photo-col animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="hero-photo-frame">
            <div className="hero-ring hero-ring-1" />
            <div className="hero-ring hero-ring-2" />

            <div className="hero-photo-wrap">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Fathima Asma"
                  className="hero-photo-img"
                />
              ) : (
                <div className="hero-photo-placeholder">
                  <span className="hero-photo-initials">FA</span>
                </div>
              )}
            </div>

            <div className="hero-stat-chip hero-stat-chip-tr">
              <span className="hero-stat-chip-emoji">☕</span>
              <div>
                <p className="hero-stat-num">3rd Year</p>
                <p className="hero-stat-label">SE Student</p>
              </div>
            </div>

            <div className="hero-stat-chip hero-stat-chip-bl">
              <span className="hero-stat-chip-emoji">🚀</span>
              <div>
                <p className="hero-stat-num">4+</p>
                <p className="hero-stat-label">Projects built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}