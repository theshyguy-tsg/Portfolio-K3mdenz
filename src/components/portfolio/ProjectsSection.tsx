import { motion } from "framer-motion";
import { useState } from "react";
import { projectsData, uiText, fxConfig, type ProjectData } from "./data";
import { cardEntrance, slideRight, stagger, viewportOnce } from "./motion-presets";
import { AnimWord } from "./AnimWord";
import { useHoverEffect } from "@/hooks/useHoverEffect";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

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
        EMBED BLOCKED · OPEN LIVE TO VIEW
      </p>
      <a
        href={project.deployUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="rounded-full bg-foreground px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-background shadow-lg transition-transform hover:-translate-y-0.5"
      >
        OPEN LIVE ↗
      </a>
    </div>
  );
}

function buildScreenshotUrl(siteUrl: string) {
  // Microlink free screenshot API — returns the screenshot image directly.
  // Bypasses X-Frame-Options entirely (server-side rendering).
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
      <div className="absolute left-3 top-3 z-20 rounded-full bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground backdrop-blur">
        {uiText.projects.livePreview}
      </div>

      {hasLive ? (
        <>
          {/* Server-side screenshot via Microlink — works for any site */}
          <img
            src={buildScreenshotUrl(project.deployUrl)}
            alt={`${project.name} live preview`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Skeleton while screenshot is being generated */}
          {!loaded && !failed && <PreviewSkeleton />}

          {/* Fallback when the screenshot service errors out */}
          {failed && <PreviewFallback project={project} />}

          {/* Subtle gradient for legibility of overlays */}
          <div className="pointer-events-none absolute inset-0 z-[7] bg-gradient-to-t from-background/50 via-transparent to-transparent" />

          {/* Click-through link to open the real site */}
          {!failed && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open ${project.name} in a new tab`}
              className="absolute inset-0 z-10 flex items-end justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <span className="rounded-full bg-foreground px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-background shadow-lg">
                OPEN ↗
              </span>
            </a>
          )}
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

      <h3 className="font-display text-3xl leading-[0.9] sm:text-4xl">
        {project.name}
      </h3>

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

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setAboutOpen(true)}
          onMouseEnter={fxAbout.onMouseEnter}
          onAnimationEnd={fxAbout.onAnimationEnd}
          className="hover-float rounded-full bg-foreground px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-background shadow-lg transition-colors hover:bg-aurora hover:text-foreground"
        >
          {uiText.projects.aboutApp}
        </button>
        <button
          type="button"
          onClick={() => setTechOpen(true)}
          onMouseEnter={fxTech.onMouseEnter}
          onAnimationEnd={fxTech.onAnimationEnd}
          className="liquid-glass hover-float rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-cyan hover:text-cyan"
        >
          {uiText.projects.techStack}
        </button>
      </div>

      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {uiText.projects.entry} 0{index + 1} / 0{projectsData.length}
      </div>

      {/* About sheet */}
      <Sheet open={aboutOpen} onOpenChange={setAboutOpen}>
        <SheetContent className="overflow-y-auto sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-display text-3xl">{project.name}</SheetTitle>
            <SheetDescription className="font-mono text-xs uppercase tracking-[0.2em]">
              {project.type}
            </SheetDescription>
          </SheetHeader>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {project.about}
          </p>
          <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wider">
            <span className="text-muted-foreground">DEPLOY</span>
            <a href={project.deployUrl} target="_blank" rel="noreferrer noopener" className="text-cyan">
              {project.deploy} ↗
            </a>
          </div>
        </SheetContent>
      </Sheet>

      {/* Tech sheet */}
      <Sheet open={techOpen} onOpenChange={setTechOpen}>
        <SheetContent className="overflow-y-auto sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-display text-3xl">TECH STACK</SheetTitle>
            <SheetDescription className="font-mono text-xs uppercase tracking-[0.2em]">
              {uiText.projects.techStackDesc} {project.name.toLowerCase()}
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {project.stack.map((s) => (
              <StackTile key={s} s={s} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
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
