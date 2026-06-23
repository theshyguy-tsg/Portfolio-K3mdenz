import { motion } from "framer-motion";
import { educationData, uiText, fxConfig } from "./data";
import { cardEntrance, lensFocusEntrance, slideRight, stagger, viewportOnce } from "./motion-presets";
import { AnimWord } from "./AnimWord";
import { useHoverEffect } from "@/hooks/useHoverEffect";

type Block = (typeof educationData.blocks)[number];

function BlockCard({ block, i }: { block: Block; i: number }) {
  const fx = useHoverEffect<HTMLDivElement>(fxConfig.educationTimeline);
  return (
    <motion.div
      variants={lensFocusEntrance}
      onMouseEnter={fx.onMouseEnter}
      onAnimationEnd={fx.onAnimationEnd}
      className="relative cursor-default rounded-2xl p-4 pt-12 transition-colors hover:bg-background/60"
    >
      <div className="absolute left-4 top-4 h-3 w-3 rounded-full bg-primary ring-4 ring-card" />
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
        / 0{i + 1} · {block.tag}
      </div>
      <ul className="mt-3 space-y-1.5 font-mono text-xs">
        {block.items.map((item) => (
          <li key={item} className="text-foreground">
            <span className="text-primary">▸</span> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ApertureLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="50" cy="50" r="45" strokeDasharray="3 3" className="opacity-40" />
      <circle cx="50" cy="50" r="30" />
      {/* Aperture blades */}
      <line x1="50" y1="20" x2="65" y2="40" />
      <line x1="65" y1="40" x2="80" y2="50" />
      <line x1="80" y1="50" x2="65" y2="70" />
      <line x1="65" y1="70" x2="50" y2="80" />
      <line x1="50" y1="80" x2="35" y2="60" />
      <line x1="35" y1="60" x2="20" y2="50" />
      <line x1="20" y1="50" x2="35" y2="30" />
      <line x1="35" y1="30" x2="50" y2="20" />
    </svg>
  );
}

export function EducationSection() {
  const fxHeader = useHoverEffect<HTMLDivElement>(fxConfig.educationHeader);
  return (
    <section
      id="education"
      data-section="education"
      className="relative w-full overflow-hidden border-b border-border bg-card px-6 py-16 sm:px-10 sm:py-32"
    >
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-16 flex flex-col items-center gap-4 text-center"
      >
        <motion.div variants={lensFocusEntrance} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-accent">{uiText.education.sectionNumber}</span> {uiText.education.sectionTitle}
        </motion.div>
        <motion.h2 variants={stagger(0.1)} className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
          <AnimWord>{uiText.education.heading1}</AnimWord>{" "}
          <AnimWord><span className="font-script text-primary">{uiText.education.heading2}.</span></AnimWord>
        </motion.h2>
      </motion.div>

      {/* Photographer stamp card */}
      <motion.div
        variants={lensFocusEntrance}
        onMouseEnter={fxHeader.onMouseEnter}
        onAnimationEnd={fxHeader.onAnimationEnd}
        className="soft-card hover-float group relative mb-10 overflow-hidden p-6 sm:p-8"
        style={{ borderColor: "color-mix(in oklch, var(--primary) 35%, transparent)" }}
      >
        {/* Soft warmth background blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: "var(--gradient-aurora)" }}
        />

        {/* Watermark logo — bottom-right, very subtle */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -bottom-12 w-72 opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.10] sm:w-96 text-primary"
        >
          <ApertureLogo />
        </div>

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Full official logo + meta */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <ApertureLogo
              className="h-20 w-auto shrink-0 sm:h-24 text-primary"
            />
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>{uiText.education.institution}</span>
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px]"
                  style={{
                    background: "color-mix(in oklch, var(--accent) 15%, transparent)",
                    color: "var(--primary)",
                  }}
                >
                  <motion.span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--primary)" }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                  ACTIVE RESIDENCY
                </span>
              </div>
              <div
                className="font-mono text-sm uppercase tracking-wider sm:text-base text-primary font-bold"
              >
                ↳ {educationData.school}
              </div>
            </div>
          </div>

          {/* Period chip */}
          <div
            className="shrink-0 rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-[0.3em] sm:text-right"
            style={{
              border: "1px dashed color-mix(in oklch, var(--primary) 60%, transparent)",
              background: "color-mix(in oklch, var(--primary) 5%, transparent)",
            }}
          >
            <div className="text-muted-foreground">{uiText.education.period}</div>
            <div className="mt-1 text-foreground">{educationData.period}</div>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <motion.svg
          className="absolute left-0 top-6 h-px w-full"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
        >
          <motion.line
            x1="0" y1="0.5" x2="100" y2="0.5"
            stroke="currentColor"
            strokeWidth="1"
            className="text-foreground/20"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            vectorEffect="non-scaling-stroke"
          />
        </motion.svg>

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {educationData.blocks.map((block, i) => (
            <BlockCard key={block.tag} block={block} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
