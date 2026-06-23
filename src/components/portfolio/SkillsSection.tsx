import { motion } from "framer-motion";
import { skillsData, uiText, fxConfig } from "./data";
import { cardEntrance, lensFocusEntrance, slideRight, stagger, viewportOnce } from "./motion-presets";
import { AnimWord } from "./AnimWord";
import { useHoverEffect } from "@/hooks/useHoverEffect";

type Skill = (typeof skillsData)[number];

function SkillCard({ s, i }: { s: Skill; i: number }) {
  const fx = useHoverEffect<HTMLElement>(fxConfig.skillCard);
  return (
    <motion.article
      variants={lensFocusEntrance}
      onMouseEnter={fx.onMouseEnter}
      onAnimationEnd={fx.onAnimationEnd}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="liquid-glass hover-float group relative flex flex-col gap-4 rounded-3xl bg-background p-8 sm:p-10"
    >
      <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className="text-neon">{s.code}</span>
        <span className="text-cyan">{s.level}%</span>
      </div>
      <h3 className="font-display text-2xl leading-tight sm:text-3xl">{s.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
      <div className="mt-auto h-3 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${s.level}%` }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 + 0.2 }}
          className={`h-full rounded-full ${
            i === 0 ? "bg-neon" : i === 1 ? "bg-cyan" : "bg-lime"
          }`}
        />
      </div>
    </motion.article>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      data-section="skills"
      className="relative w-full overflow-hidden border-b border-border px-6 py-16 sm:px-10 sm:py-32"
    >
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-16 flex flex-col items-center gap-4 text-center"
      >
        <motion.div variants={lensFocusEntrance} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-lime">{uiText.skills.sectionNumber}</span> {uiText.skills.sectionTitle}
        </motion.div>
        <motion.h2 variants={stagger(0.1)} className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
          <AnimWord>{uiText.skills.heading1}</AnimWord>{" "}
          <AnimWord><span className="font-script text-aurora">{uiText.skills.heading2}</span></AnimWord>
          <br />
          <AnimWord>{uiText.skills.heading3}</AnimWord>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger(0.18)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {skillsData.map((s, i) => (
          <SkillCard key={s.code} s={s} i={i} />
        ))}
      </motion.div>
    </section>
  );
}
