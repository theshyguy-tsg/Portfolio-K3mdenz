import { motion } from "framer-motion";
import { useState } from "react";
import { projectsData, uiText, fxConfig, type ProjectData } from "./data";
import { cardEntrance, lensFocusEntrance, slideRight, stagger, viewportOnce } from "./motion-presets";
import { AnimWord } from "./AnimWord";
import { useHoverEffect } from "@/hooks/useHoverEffect";
import { Dialog, DialogContent } from "@/components/ui/dialog";

function ExifTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border border-border bg-card/40 p-3 rounded-lg backdrop-blur">
      <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="font-mono text-xs uppercase font-medium text-foreground">{value}</span>
    </div>
  );
}

function ProjectRow({ project, index, onSelect }: { project: ProjectData; index: number; onSelect: (p: ProjectData) => void }) {
  const fxCard = useHoverEffect<HTMLElement>(fxConfig.projectRowCard);
  const fxAbout = useHoverEffect<HTMLButtonElement>(fxConfig.projectAboutBtn);

  return (
    <motion.article
      variants={lensFocusEntrance}
      onMouseEnter={fxCard.onMouseEnter}
      onAnimationEnd={fxCard.onAnimationEnd}
      className="soft-card hover-float flex flex-col gap-4 p-5 hover:border-neon/40 sm:p-6 cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Photo Container */}
      <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-muted/20">
        <img
          src={project.preview}
          alt={project.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Subtle glassmorphism overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <span className="rounded-full bg-white/95 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-black shadow-lg">
            VIEW FRAME ↗
          </span>
        </div>
        
        {/* Geographic Coordinate Tag */}
        <div className="absolute left-3 top-3 z-10 rounded-full bg-background/70 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground backdrop-blur-md">
          {project.coord}
        </div>
      </div>

      {/* Info */}
      <header className="flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="text-neon">{project.deploy}</span>
        <span>{project.year}</span>
      </header>

      <h3 className="font-display text-3xl leading-[0.9] sm:text-4xl text-foreground">
        {project.name}
      </h3>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider">
        <span className="text-muted-foreground">{project.type}</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-2" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={() => onSelect(project)}
          onMouseEnter={fxAbout.onMouseEnter}
          onAnimationEnd={fxAbout.onAnimationEnd}
          className="hover-float rounded-full bg-foreground px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-background shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {uiText.projects.aboutApp}
        </button>
        {project.deployUrl.startsWith("http") && (
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-float rounded-full bg-primary/20 border border-primary/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground flex items-center gap-1.5"
          >
            <span>LIVE WEB</span>
            <span>↗</span>
          </a>
        )}
        <div
          className="liquid-glass flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
        >
          <span>{project.stack[0]}</span>
          <span>·</span>
          <span>{project.stack[1]}</span>
        </div>
      </div>

      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {uiText.projects.entry} 0{index + 1} / 0{projectsData.length}
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

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
        <motion.div variants={lensFocusEntrance} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-neon">{uiText.projects.sectionNumber}</span> {uiText.projects.sectionTitle}
        </motion.div>
        <motion.h2 variants={stagger(0.1)} className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
          <AnimWord>{uiText.projects.heading1}</AnimWord>{" "}
          <AnimWord><span className="font-script text-primary">{uiText.projects.heading2}.</span></AnimWord>
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
          <ProjectRow key={p.id} project={p} index={i} onSelect={setSelectedProject} />
        ))}
      </motion.div>

      {/* Lightbox Dialog for Projects */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-[92vw] md:max-w-[85vw] lg:max-w-[75vw] xl:max-w-[65vw] overflow-y-auto max-h-[92dvh] p-0 border border-border bg-background shadow-2xl rounded-2xl">
          {selectedProject && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Column */}
              <div className="lg:col-span-8 bg-black/5 flex flex-col items-center justify-center p-6 min-h-[40vh] lg:min-h-[50vh] border-b lg:border-b-0 lg:border-r border-border">
                <img
                  src={selectedProject.preview}
                  alt={selectedProject.name}
                  className="max-h-[55dvh] w-full object-contain rounded-xl shadow-xl"
                />
                {selectedProject.deployUrl.startsWith("http") && (
                  <div className="mt-4 w-full text-center">
                    <p className="font-mono text-[11px] text-muted-foreground mb-2">
                      ⚡ Website hiện đang hoạt động trực tuyến phiên bản thử nghiệm
                    </p>
                    <a
                      href={selectedProject.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity"
                    >
                      <span>TRUY CẬP WEBSITE ({selectedProject.deployUrl.replace('https://', '')})</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Details Column */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col gap-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2 block">
                    {selectedProject.coord}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-1 leading-tight">
                    {selectedProject.name}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block border-b border-border/60 pb-4">
                    {selectedProject.type}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground font-bold">
                    {uiText.projects.aboutApp}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.about}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground font-bold border-t border-border/60 pt-4">
                    {uiText.projects.techStack}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedProject.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-border bg-card/60 px-3 py-1.5 font-mono text-xs font-medium text-foreground backdrop-blur"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-t border-border/60">
                  <span>CAPSTONE & PORTFOLIO</span>
                  <span>{selectedProject.year}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
