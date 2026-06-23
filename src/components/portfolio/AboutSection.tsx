import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutData, profile, uiText, fxConfig } from "./data";
import { cardEntrance, lensFocusEntrance, slideRight, stagger, viewportOnce } from "./motion-presets";
import { AnimWord } from "./AnimWord";
import { useHoverEffect } from "@/hooks/useHoverEffect";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const fxMain = useHoverEffect<HTMLElement>(fxConfig.aboutMainCard);
  const fxVibe = useHoverEffect<HTMLElement>(fxConfig.aboutVibeCard);
  const fxDev = useHoverEffect<HTMLElement>(fxConfig.aboutDevCard);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xMain = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 80]);
  const xVibe = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -80]);

  return (
    <section
      ref={ref}
      id="about"
      data-section="about"
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
          <span className="text-neon">{uiText.about.sectionNumber}</span> {uiText.about.sectionTitle}
        </motion.div>
        <motion.h2 variants={stagger(0.1)} className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
          <AnimWord>{profile.realName},</AnimWord>
          <br />
          <AnimWord>
            <span className="font-script text-aurora">{uiText.about.aka} {profile.name}.</span>
          </AnimWord>
        </motion.h2>
      </motion.div>

      {/* Split-text scroll signature */}
      <div className="mb-16 overflow-hidden">
        <motion.div style={{ x: xMain }} className="font-display text-[clamp(3rem,11vw,10rem)] leading-[0.85] text-aurora">
          {aboutData.main.title}
        </motion.div>
        <motion.div style={{ x: xVibe }} className="text-right font-display text-[clamp(2rem,8vw,7rem)] leading-[0.85] text-foreground/30">
          × {aboutData.vibe.title}
        </motion.div>
      </div>

      <motion.div
        variants={stagger(0.18)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <motion.article
          variants={lensFocusEntrance}
          onMouseEnter={fxMain.onMouseEnter}
          onAnimationEnd={fxMain.onAnimationEnd}
          className="liquid-glass hover-float group relative flex flex-col gap-4 rounded-3xl bg-background p-8 transition-all hover:border-neon sm:p-10"
        >
          <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-neon">▸ {aboutData.main.label}</span>
            <span>★★★★★</span>
          </div>
          <h3 className="font-display text-3xl leading-tight text-aurora sm:text-4xl">
            {aboutData.main.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{aboutData.main.body}</p>
          <div className="mt-auto h-1 w-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "92%" }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="h-full bg-aurora"
            />
          </div>
        </motion.article>

        <motion.article
          variants={lensFocusEntrance}
          onMouseEnter={fxVibe.onMouseEnter}
          onAnimationEnd={fxVibe.onAnimationEnd}
          className="liquid-glass hover-float group relative flex flex-col gap-4 rounded-3xl bg-background p-8 transition-all hover:border-cyan sm:p-10"
        >
          <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-cyan">▸ {aboutData.vibe.label}</span>
            <span>★★★★☆</span>
          </div>
          <h3 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
            {aboutData.vibe.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{aboutData.vibe.body}</p>
          <div className="mt-auto h-1 w-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="h-full bg-cyan"
            />
          </div>
        </motion.article>

        <motion.article
          variants={lensFocusEntrance}
          onMouseEnter={fxDev.onMouseEnter}
          onAnimationEnd={fxDev.onAnimationEnd}
          className="liquid-glass hover-float group relative flex flex-col gap-4 rounded-3xl bg-background p-8 transition-all hover:border-lime md:col-span-2 lg:col-span-1 sm:p-10"
        >
          <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-lime">▸ {aboutData.dev.label}</span>
            <span>★★★★☆</span>
          </div>
          <h3 className="font-display text-3xl leading-tight text-lime sm:text-4xl">
            {aboutData.dev.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{aboutData.dev.body}</p>
          <div className="mt-auto h-1 w-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="h-full bg-lime"
            />
          </div>
        </motion.article>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-12 max-w-3xl text-balance text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        {profile.bio}
      </motion.p>

      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-10 max-w-3xl border-l-2 border-neon pl-6"
      >
        <p className="text-base leading-relaxed text-foreground/80 italic sm:text-lg">
          "{profile.quote}"
        </p>
        <footer className="mt-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-neon">
          <span>★</span>
          <span>{profile.goal}</span>
        </footer>
      </motion.blockquote>
    </section>
  );
}
