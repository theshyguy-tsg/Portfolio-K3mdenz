import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { projectsData, uiText, fxConfig, type ProjectData } from "./data";
import { cardEntrance, slideRight, stagger, viewportOnce } from "./motion-presets";
import { AnimWord } from "./AnimWord";
import { useHoverEffect } from "@/hooks/useHoverEffect";

function StackTile({ s }: { s: string }) {
  const fx = useHoverEffect<HTMLDivElement>(fxConfig.projectStackTile);
  return (
    <div
      onMouseEnter={fx.onMouseEnter}
      onAnimationEnd={fx.onAnimationEnd}
      className="liquid-glass hover-float flex items-center justify-between rounded-xl px-4 py-3 font-mono text-xs uppercase tracking-wider"
    >
      <span>{s}</span>
      <span className="text-neon">●</span>
    </div>
  );
}

function PreviewSkeleton() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 z-[5] overflow-hidden bg-muted/20"
    >
      {/* shimmer sweep */}
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
        style={{ animationName: "shimmer" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-neon" />
        <span>BOOTING PREVIEW…</span>
      </div>
    </div>
  );
}

function PreviewFallback({ project }: { project: ProjectData }) {
  return (
    <div className="absolute inset-0 z-[6] flex flex-col items-center justify-center gap-4 bg-aurora p-6 text-center">
      <span className="font-display text-4xl leading-none text-background sm:text-6xl">
        {project.name.split(" ")[0]}
      </span>
      <p className="max-w-[80%] font-mono text-[10px] uppercase tracking-[0.3em] text-background/80">
        {project.subtitle || "EMBED BLOCKED · OPEN LIVE TO VIEW"}
      </p>
      <Link
        to="/projects/$id"
        params={{ id: project.slug }}
        className="rounded-full bg-foreground px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-background shadow-lg transition-transform hover:-translate-y-0.5"
      >
        XEM CHI TIẾT DỰ ÁN ➔
      </Link>
    </div>
  );
}

function buildScreenshotUrl(siteUrl: string) {
  const params = new URLSearchParams({
    url: siteUrl,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1280",
    "viewport.height": "720",
    "viewport.deviceScaleFactor": "1",
    waitFor: "1500",
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

function PreviewBlock({ project }: { project: ProjectData }) {
  const hasLive = !!project.deployUrl && /^https?:\/\//.test(project.deployUrl);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="liquid-glass group relative aspect-video w-full overflow-hidden rounded-2xl">
      <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
        <span className={project.status.includes("DEVELOPMENT") ? "text-amber-400 animate-pulse" : "text-neon"}>●</span>
        <span>{project.status}</span>
      </div>

      {hasLive ? (
        <>
          <img
            src={buildScreenshotUrl(project.deployUrl)}
            alt={`${project.name} live preview`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {!loaded && !failed && <PreviewSkeleton />}
          {failed && <PreviewFallback project={project} />}

          <div className="pointer-events-none absolute inset-0 z-[7] bg-gradient-to-t from-background/70 via-transparent to-transparent" />

          <div className="absolute inset-0 z-10 flex items-end justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100">
            <Link
              to="/projects/$id"
              params={{ id: project.slug }}
              className="rounded-full bg-foreground px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-background shadow-lg transition-transform hover:scale-105"
            >
              XEM CHI TIẾT ➔
            </Link>
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-background/90 backdrop-blur px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground shadow-lg hover:text-cyan"
            >
              DEMO ↗
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-aurora opacity-90">
            <span className="font-display text-5xl text-background sm:text-7xl">
              {project.name.split(" ")[0]}
            </span>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
        </>
      )}
    </div>
  );
}

function ProjectRow({ project, index }: { project: ProjectData; index: number }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const fxCard = useHoverEffect<HTMLElement>(fxConfig.projectRowCard);
  const fxAbout = useHoverEffect<HTMLButtonElement>(fxConfig.projectAboutBtn);
  const fxTech = useHoverEffect<HTMLButtonElement>(fxConfig.projectTechBtn);

  return (
    <motion.article
      variants={cardEntrance}
      onMouseEnter={fxCard.onMouseEnter}
      onAnimationEnd={fxCard.onAnimationEnd}
      className="soft-card hover-float flex flex-col gap-4 p-5 hover:border-neon/40 sm:p-6"
    >
      {/* Preview on top */}
      <PreviewBlock project={project} />

      {/* Info below */}
      <header className="flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="text-neon">{project.coord}</span>
        <span>{project.year}</span>
      </header>

      <div>
        <h3 className="font-display text-3xl leading-[0.9] sm:text-4xl">
          {project.name}
        </h3>
        {project.subtitle && (
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {project.subtitle}
          </p>
        )}
      </div>

      {/* Status Progress Bar for in-progress projects */}
      {project.progressPercent && project.progressPercent < 100 && (
        <div className="space-y-1.5 rounded-xl bg-background/50 p-3 border border-border">
          <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-wider">
            <span className="text-amber-400 flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
              {project.statusText || "Đang phát triển"}
            </span>
            <span className="font-bold">{project.progressPercent}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-neon transition-all"
              style={{ width: `${project.progressPercent}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider">
        <span className="text-muted-foreground">{project.type}</span>
        <span className="text-foreground/40">·</span>
        <a
          href={project.deployUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-cyan underline-offset-4 hover:underline"
        >
          {uiText.projects.deployedOn} {project.deploy} ↗
        </a>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {/* Main CTA to dedicated Detail Page */}
        <Link
          to="/projects/$id"
          params={{ id: project.slug }}
          className="hover-float inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-background shadow-lg transition-colors hover:bg-aurora hover:text-foreground"
        >
          <span>CHI TIẾT DỰ ÁN</span>
          <span>➔</span>
        </Link>
        <button
          type="button"
          onClick={() => setTechOpen(true)}
          onMouseEnter={fxTech.onMouseEnter}
          onAnimationEnd={fxTech.onAnimationEnd}
          className="liquid-glass hover-float rounded-full px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-cyan hover:text-cyan"
        >
          {uiText.projects.techStack}
        </button>
      </div>

      {/* Framer Motion Tech Stack Modal */}
      {techOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setTechOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setTechOpen(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-muted/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Đóng"
            >
              ✕
            </button>

            {/* Header */}
            <div className="space-y-1 pr-10">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                <span>●</span>
                <span>{project.coord}</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                TECH STACK ARCHITECTURE
              </h3>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {uiText.projects.techStackDesc} {project.name}
              </p>
            </div>

            {/* Stack Tiles Grid */}
            <div className="mt-6 max-h-[50vh] overflow-y-auto pr-1">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {project.stack.map((s) => (
                  <StackTile key={s} s={s} />
                ))}
              </div>
            </div>

            {/* Footer Action Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-5">
              <Link
                to="/projects/$id"
                params={{ id: project.slug }}
                onClick={() => setTechOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-background transition-transform hover:scale-105"
              >
                <span>XEM CHI TIẾT DỰ ÁN</span>
                <span>➔</span>
              </Link>
              <button
                type="button"
                onClick={() => setTechOpen(false)}
                className="rounded-full border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                ĐÓNG
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      data-section="projects"
      className="relative w-full border-b border-border px-6 py-16 sm:px-10 sm:py-24"
    >
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-10 flex flex-col items-center gap-4 text-center sm:mb-12"
      >
        <motion.div variants={slideRight} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-neon">{uiText.projects.sectionNumber}</span> {uiText.projects.sectionTitle}
        </motion.div>
        <motion.h2 variants={stagger(0.1)} className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
          <AnimWord>{uiText.projects.heading1}</AnimWord>{" "}
          <AnimWord><span className="font-script text-aurora">{uiText.projects.heading2}.</span></AnimWord>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {projectsData.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
