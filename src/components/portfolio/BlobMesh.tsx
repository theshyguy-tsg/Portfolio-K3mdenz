import { motion } from "framer-motion";

const blobs = [
  {
    style: { background: "oklch(0.62 0.24 295 / 0.22)" },
    className: "absolute -left-40 -top-40 h-[520px] w-[520px]",
    animate: { x: [0, 70, 30, -30, 0], y: [0, 40, 80, 30, 0] },
    duration: 22,
    delay: 0,
  },
  {
    style: { background: "oklch(0.78 0.16 185 / 0.20)" },
    className: "absolute -bottom-40 -right-40 h-[500px] w-[500px]",
    animate: { x: [0, -60, -20, 40, 0], y: [0, -50, -90, -35, 0] },
    duration: 19,
    delay: 2,
  },
  {
    style: { background: "oklch(0.85 0.18 110 / 0.14)" },
    className: "absolute left-1/2 top-[45%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2",
    animate: { x: [-60, 60, 0, -60], y: [-30, 40, -50, -30] },
    duration: 27,
    delay: 5,
  },
] as const;

export function BlobMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          aria-hidden
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay,
          }}
          className={`${blob.className} rounded-full blur-3xl`}
          style={blob.style}
        />
      ))}
    </div>
  );
}
