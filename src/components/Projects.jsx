import { useEffect, useState } from "react";
import {
  Archive,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitFork,
  Maximize2,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { projectImage, socialIcons } from "@/lib/assets";
import projects from "@/data/project.json";

const STATUS = {
  active: { label: "Active", icon: CheckCircle2, cls: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300" },
  archived: { label: "Archived", icon: Archive, cls: "bg-stone-500/15 text-stone-700 dark:text-stone-300" },
  "under-development": { label: "Under Development", icon: Wrench, cls: "bg-amber-500/15 text-amber-800 dark:text-amber-300" },
};

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/* Live GitHub stats (silently omitted if the API is unreachable / rate-limited) */
function useGithubStats(apiUrl) {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const ctrl = new AbortController();
    const key = `gh:${apiUrl}`;
    try {
      const cached = sessionStorage.getItem(key);
      if (cached) {
        setStats(JSON.parse(cached));
        return;
      }
    } catch {
      /* ignore */
    }
    fetch(apiUrl, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const s = { stars: d.stargazers_count ?? 0, forks: d.forks_count ?? 0, language: d.language ?? null };
        setStats(s);
        try {
          sessionStorage.setItem(key, JSON.stringify(s));
        } catch {
          /* ignore */
        }
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, [apiUrl]);
  return stats;
}

/* Gallery inside a "browser window" frame */
function Gallery({ project }) {
  const images = project.images.map(projectImage);
  const captions = project.captions ?? project.images.map((_, i) => `${project.title} — screenshot ${i + 1}`);
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const many = images.length > 1;
  const go = (d) => setIdx((i) => (i + d + images.length) % images.length);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-soft">
        <div className="flex items-center gap-2 border-b border-line bg-soft px-4 py-2.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
          <span className="ml-3 hidden truncate rounded-full bg-bg px-3 py-0.5 text-[11px] text-muted sm:block">
            {project.id}
          </span>
        </div>

        <div className="group relative aspect-[16/9] bg-soft">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute inset-0 block h-full w-full cursor-zoom-in"
            aria-label={`Enlarge screenshot ${idx + 1} of ${images.length}: ${captions[idx]}`}
          >
            <img
              key={images[idx]}
              src={images[idx]}
              alt={captions[idx]}
              loading="lazy"
              decoding="async"
              className="fade-in h-full w-full object-contain"
            />
            <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-bg/85 text-ink opacity-0 shadow-soft backdrop-blur transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
              <Maximize2 className="h-4 w-4" aria-hidden />
            </span>
          </button>

          {many && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-bg/90 text-ink shadow-soft backdrop-blur transition-transform hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-bg/90 text-ink shadow-soft backdrop-blur transition-transform hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
              <span className="absolute bottom-3 right-3 rounded-full bg-bg/85 px-3 py-1 text-xs font-semibold tabular-nums backdrop-blur">
                {idx + 1} / {images.length}
              </span>
            </>
          )}
        </div>
      </div>

      {many && (
        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Choose screenshot">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === idx}
              className={`relative aspect-[16/10] w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-soft transition-all sm:w-24 ${
                i === idx ? "border-accent opacity-100" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      {open && (
        <Lightbox
          images={images}
          captions={captions}
          index={idx}
          title={project.title}
          onChange={setIdx}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const stats = useGithubStats(project.api_url);
  const status = STATUS[project.status] ?? STATUS.active;
  const StatusIcon = status.icon;
  const flip = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="article" className="relative">
      <div className="card grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
        <div className={`min-w-0 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          <div className="lg:sticky lg:top-28">
            <Gallery project={project} />
          </div>
        </div>

        <div className={`flex min-w-0 flex-col lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-display text-5xl font-light italic leading-none text-accent/60" aria-hidden>
              {number}
            </span>
            <span className={`chip border-transparent ${status.cls}`}>
              <StatusIcon className="h-3.5 w-3.5" aria-hidden /> {status.label}
            </span>
            {project.featured && (
              <span className="chip border-transparent bg-accent-soft text-accent-ink">
                <Star className="h-3.5 w-3.5" aria-hidden /> Featured
              </span>
            )}
            {project.additional && (
              <span className="chip border-transparent bg-primary/12 text-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden /> Additional project
              </span>
            )}
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-accent-ink">{project.type}</p>
          <h3 className="font-display mt-2 text-2xl font-medium leading-tight tracking-tight sm:text-3xl">{project.title}</h3>

          {(stats || project.start_date) && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
              {project.start_date && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden /> Started {formatDate(project.start_date)}
                </span>
              )}
              {stats && (
                <>
                  <span className="inline-flex items-center gap-1.5" title="GitHub stars">
                    <Star className="h-3.5 w-3.5" aria-hidden /> {stats.stars}
                    <span className="sr-only">stars</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5" title="GitHub forks">
                    <GitFork className="h-3.5 w-3.5" aria-hidden /> {stats.forks}
                    <span className="sr-only">forks</span>
                  </span>
                  {stats.language && <span className="font-semibold text-ink">{stats.language}</span>}
                </>
              )}
            </div>
          )}

          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>

          {project.features.length > 0 && (
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em]">Key features</h4>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
            {project.stack.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          {project.note && <p className="mt-5 rounded-xl bg-soft px-4 py-3 text-xs leading-relaxed text-muted">{project.note}</p>}

          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            {project.publish_url && (
              <a href={project.publish_url} target="_blank" rel="noreferrer" className="btn btn-primary !min-h-11 !px-5 text-sm">
                <ExternalLink className="h-4 w-4" aria-hidden /> Live site
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            <a href={project.repo_url} target="_blank" rel="noreferrer" className="btn btn-ghost !min-h-11 !px-5 text-sm">
              <img src={socialIcons.github} alt="" data-mono="" className="h-4 w-4 object-contain" /> GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {project.extra_links?.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="btn btn-ghost !min-h-11 !px-5 text-sm">
                {l.label} <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-soft py-24 sm:py-32" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Projects</p>
            <h2 id="projects-title" className="section-title">
              Things I&apos;ve <em>built</em>
            </h2>
          </div>
          <a
            href="https://github.com/asma-mf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost !min-h-11 text-sm"
            style={{ "--d": "0ms" }}
          >
            See all on GitHub <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>

        <div className="space-y-10 lg:space-y-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
