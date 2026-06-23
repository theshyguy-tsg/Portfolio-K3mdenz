import { motion, useAnimationControls } from "framer-motion";
import { useHoverEffect } from "@/hooks/useHoverEffect";

const tiles = [
  { label: "ABOUT", target: "about", accent: "neon" },
  { label: "SKILLS", target: "skills", accent: "cyan" },
  { label: "PROJECTS", target: "projects", accent: "lime" },
  { label: "CONTACT", target: "contact", accent: "neon" },
] as const;

function Tile({ label, target, accent, index }: { label: string; target: string; accent: string; index: number }) {
  const controls = useAnimationControls();
  const fx = useHoverEffect<HTMLButtonElement>("random");

  const handleClick = async () => {
    await controls.start({
      y: [0, -8, 600],
      opacity: [1, 1, 0],
      transition: { duration: 0.7, times: [0, 0.15, 1], ease: [0.4, 0, 0.6, 1] },
    });
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    await controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
    });
  };

  const accentClass =
    accent === "cyan" ? "group-hover:text-cyan group-hover:border-cyan"
      : accent === "lime" ? "group-hover:text-lime group-hover:border-lime"
      : "group-hover:text-neon group-hover:border-neon";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 * index, duration: 0.5 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.96 }}
      onMouseEnter={fx.onMouseEnter}
      onAnimationEnd={fx.onAnimationEnd}
      className={`liquid-glass hover-float float-soft float-soft-delay-${index % 4} group relative flex items-center justify-between gap-2 sm:gap-4 rounded-2xl px-3 sm:px-5 py-4 text-left transition-colors ${accentClass}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        ↳ 0{index + 1}
      </span>
      <span className="font-display text-[15px] sm:text-xl tracking-wide">{label}</span>
      <span className="text-neon transition-transform group-hover:translate-y-1">↓</span>
    </motion.button>
  );
}

export function QuickJumpTiles() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {tiles.map((t, i) => (
        <Tile key={t.label} {...t} index={i} />
      ))}
    </div>
  );
}
