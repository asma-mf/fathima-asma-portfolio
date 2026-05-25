import { useState, useEffect, useCallback } from "react";
import {
  Github,
  ExternalLink,
  GitFork,
  Star,
  Clock,
  CheckCircle2,
  Archive,
  Wrench,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import projectsData from "@/data/project.json";

/* ─── Helpers ─────────────────────────────────────────────────── */
function formatDate(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

const STATUS_CONFIG = {
  active: {
    label: "Active",
    icon: CheckCircle2,
    className: "status-active",
  },
  archived: {
    label: "Archived",
    icon: Archive,
    className: "status-archived",
  },
  "under-development": {
    label: "Under Development",
    icon: Wrench,
    className: "status-dev",
  },
};

/* ─── Image Carousel ─────────────────────────────────────────── */
function ImageCarousel({ images, title }) {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [errored, setErrored] = useState({});

  const prev = useCallback(
    (e) => {
      e.stopPropagation();
      setIdx((i) => (i - 1 + images.length) % images.length);
    },
    [images.length]
  );

  const next = useCallback(
    (e) => {
      e.stopPropagation();
      setIdx((i) => (i + 1) % images.length);
    },
    [images.length]
  );

  const currentSrc = images[idx];
  const hasError = errored[currentSrc];
  const isLoaded = loaded[currentSrc];

  return (
    <div className="carousel-root">
      {/* Image area */}
      <div className="carousel-img-wrap">
        {!hasError ? (
          <>
            {!isLoaded && (
              <div className="carousel-placeholder">
                <span className="carousel-placeholder-icon">🖼️</span>
              </div>
            )}
            <img
              key={currentSrc}
              src={currentSrc}
              alt={`${title} screenshot ${idx + 1}`}
              loading="lazy"
              className={`carousel-img ${isLoaded ? "carousel-img-visible" : "carousel-img-hidden"}`}
              onLoad={() => setLoaded((l) => ({ ...l, [currentSrc]: true }))}
              onError={() => setErrored((e) => ({ ...e, [currentSrc]: true }))}
            />
          </>
        ) : (
          <div className="carousel-placeholder">
            <span className="carousel-placeholder-icon">📷</span>
            <p className="carousel-placeholder-text">Image coming soon</p>
          </div>
        )}

        {/* Nav arrows — only show if >1 image and no total error */}
        {images.length > 1 && (
          <>
            <button
              className="carousel-btn carousel-btn-left"
              onClick={prev}
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="carousel-btn carousel-btn-right"
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dot indicators */}
            <div className="carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === idx ? "carousel-dot-active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIdx(i);
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── GitHub Stats Hook ─────────────────────────────────────── */
function useGithubStats(apiUrl) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!apiUrl) return;
    fetch(apiUrl)
      .then((r) => r.json())
      .then((d) =>
        setStats({
          stars: d.stargazers_count ?? 0,
          forks: d.forks_count ?? 0,
          language: d.language ?? null,
        })
      )
      .catch(() => {});
  }, [apiUrl]);

  return stats;
}

/* ─── Project Card ──────────────────────────────────────────── */
function ProjectCard({ project }) {
  const stats = useGithubStats(project.api_url);
  const status = STATUS_CONFIG[project.status] ?? STATUS_CONFIG.active;
  const StatusIcon = status.icon;

  return (
    <article className="project-card">
      {/* Image column */}
      <div className="project-card-media">
        <ImageCarousel images={project.images} title={project.title} />

        {/* Type badge */}
        <span className="project-type-badge">{project.type}</span>

        {/* Featured ribbon */}
        {project.featured && (
          <span className="project-featured-badge">
            <Star size={11} />
            Featured
          </span>
        )}
      </div>

      {/* Content column */}
      <div className="project-card-body">
        {/* Header row */}
        <div className="project-card-header">
          <div className={`project-status-pill ${status.className}`}>
            <StatusIcon size={11} />
            {status.label}
          </div>

          {/* GitHub live stats */}
          {stats && (
            <div className="project-github-stats">
              <span className="github-stat">
                <Star size={12} />
                {stats.stars}
              </span>
              <span className="github-stat">
                <GitFork size={12} />
                {stats.forks}
              </span>
              {stats.language && (
                <span className="github-stat github-lang">
                  {stats.language}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Features */}
        {project.features?.length > 0 && (
          <div className="project-features">
            <p className="project-features-label">Key Features</p>
            <ul className="project-features-list">
              {project.features.slice(0, 4).map((f) => (
                <li key={f} className="project-feature-item">
                  <span className="project-feature-bullet">▸</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        <div className="project-stack">
          {project.stack.map((t) => (
            <span key={t} className="stack-badge">
              {t}
            </span>
          ))}
        </div>

        {/* Footer: date + links */}
        <div className="project-footer">
          <span className="project-start-date">
            <Calendar size={12} />
            Started {formatDate(project.start_date)}
          </span>

          <div className="project-links">
            {project.publish_url && (
              <a
                href={project.publish_url}
                target="_blank"
                rel="noreferrer"
                className="project-link project-link-primary"
                aria-label="View live site"
              >
                <ExternalLink size={14} />
                Live Site
              </a>
            )}
            <a
              href={project.repo_url}
              target="_blank"
              rel="noreferrer"
              className="project-link project-link-secondary"
              aria-label="View on GitHub"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export function Projects() {
  const featured = projectsData.filter((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section header */}
        <div className="projects-header">
          <div>
            <p className="section-eyebrow">Featured Projects</p>
            <h2 className="section-title">Things I&apos;ve built</h2>
          </div>
          <a
            href="https://github.com/asma-mf"
            target="_blank"
            rel="noreferrer"
            className="projects-all-link"
          >
            See all on GitHub <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="projects-featured-grid">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div className="projects-grid">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}