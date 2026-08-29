import { motion } from "framer-motion";
import { toolbeltData, uiText } from "./data";
import { slideRight, stagger, viewportOnce } from "./motion-presets";
import { AnimWord } from "./AnimWord";
import { BrandIcon } from "./BrandIcon";

export function ToolbeltSection() {
  const half = Math.ceil(toolbeltData.length / 2);
  const rowA = toolbeltData.slice(0, half);
  const rowB = toolbeltData.slice(half);

  return (
    <section
      id="toolbelt"
      data-section="toolbelt"
      className="relative w-full overflow-hidden border-b border-border bg-card"
    >
      <div className="px-6 pt-16 sm:px-10 sm:pt-32">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 flex flex-col items-center gap-4 text-center"
        >
          <motion.div variants={slideRight} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-cyan">{uiText.toolbelt.sectionNumber}</span> {uiText.toolbelt.sectionTitle}
          </motion.div>
          <motion.h2 variants={stagger(0.1)} className="font-display text-[clamp(2rem,6vw,5rem)] leading-[0.9]">
            <AnimWord>{uiText.toolbelt.heading1}</AnimWord>{" "}
            <AnimWord><span className="font-script text-aurora">{uiText.toolbelt.heading2}</span></AnimWord>{" "}
            <AnimWord>{uiText.toolbelt.heading3}</AnimWord>
          </motion.h2>
        </motion.div>
      </div>

      {/* Two-row marquee, opposite directions */}
      <div className="space-y-3 py-10">
        <div className="border-y border-border py-5" data-marquee>
          <div className="marquee-track" style={{ ["--marquee-duration" as string]: "45s" }}>
            {[...rowA, ...rowA].map((t, i) => (
              <span
                key={i}
                className="font-display flex shrink-0 items-center gap-3 whitespace-nowrap text-2xl uppercase text-foreground/85 sm:text-4xl"
              >
                <BrandIcon name={t} />
                {t}
                <span className="text-neon">×</span>
              </span>
            ))}
          </div>
        </div>
        <div className="border-b border-border py-5" data-marquee>
          <div className="marquee-track-reverse" style={{ ["--marquee-duration" as string]: "55s" }}>
            {[...rowB, ...rowB].map((t, i) => (
              <span
                key={i}
                className="font-display flex shrink-0 items-center gap-3 whitespace-nowrap text-2xl uppercase text-foreground/70 sm:text-4xl"
              >
                <BrandIcon name={t} />
                {t}
                <span className="text-cyan">+</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
