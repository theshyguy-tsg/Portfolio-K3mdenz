import { motion } from "framer-motion";

interface Props {
  items: readonly string[];
}

/**
 * Ferris wheel — items orbit on a circle, the whole rig rotates,
 * but each cabin counter-rotates so labels stay upright.
 */
export function FerrisWheel({ items }: Props) {
  const list = items.slice(0, 8);
  const radius = 130;

  return (
    <div className="relative aspect-square w-full max-w-[420px]">
      {/* Hub circle */}
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora" />
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-foreground/20" />

      {/* Spokes container — rotates */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {list.map((label, i) => {
          const angle = (i / list.length) * Math.PI * 2;
          const x = (Math.cos(angle) * radius).toFixed(3);
          const y = (Math.sin(angle) * radius).toFixed(3);
          const rotateDeg = ((angle * 180) / Math.PI + 180).toFixed(3);
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {/* Spoke line */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-px origin-left bg-foreground/15"
                style={{
                  width: radius,
                  transform: `translate(0, 0) rotate(${rotateDeg}deg)`,
                }}
              />
              {/* Cabin — counter rotate */}
              <motion.div
                className="liquid-glass relative -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground"
                animate={{ rotate: -360 }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              >
                {label}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
