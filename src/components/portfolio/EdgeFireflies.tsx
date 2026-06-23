import { motion } from "framer-motion";

const GLOW = [
  { bg: "oklch(0.78 0.045 75 / 0.65)", shadow: "0 0 10px 4px oklch(0.78 0.045 75 / 0.25)" },
  { bg: "oklch(0.92 0.025 80 / 0.75)", shadow: "0 0 10px 4px oklch(0.92 0.025 80 / 0.25)" },
  { bg: "oklch(0.85 0.04 80 / 0.65)", shadow: "0 0 10px 4px oklch(0.85 0.04 80 / 0.2)" },
];

// [side, px from edge, top vh, size px, colorIdx, duration s, delay s]
const FLIES = [
  ["left",  28, 12, 6, 0, 7.0, 0.0],
  ["left",  48, 32, 4, 1, 9.0, 1.8],
  ["left",  18, 52, 5, 2, 6.5, 3.2],
  ["left",  52, 68, 4, 0, 8.0, 0.7],
  ["left",  34, 80, 6, 1, 7.5, 2.5],
  ["left",  14, 44, 3, 2, 10., 4.5],
  ["right", 32, 18, 5, 1, 8.0, 0.6],
  ["right", 50, 38, 4, 0, 7.0, 2.2],
  ["right", 20, 58, 6, 2, 9.0, 1.1],
  ["right", 44, 74, 3, 0, 6.5, 3.8],
  ["right", 58, 86, 5, 1, 7.5, 0.4],
  ["right", 24, 28, 4, 2, 8.5, 4.2],
] as const;

export function EdgeFireflies() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {FLIES.map(([side, offset, top, size, colorIdx, duration, delay], i) => {
        const glow = GLOW[colorIdx];
        return (
          <motion.div
            key={i}
            aria-hidden
            className="absolute rounded-full"
            style={{
              [side]: offset,
              top: `${top}vh`,
              width: size,
              height: size,
              backgroundColor: glow.bg,
              boxShadow: glow.shadow,
            }}
            animate={{
              y: [0, -20, -110, -150],
              opacity: [0, 0.85, 0.85, 0],
              scale: [0.5, 1, 1, 0.3],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeOut",
              times: [0, 0.15, 0.8, 1],
            }}
          />
        );
      })}
    </div>
  );
}
