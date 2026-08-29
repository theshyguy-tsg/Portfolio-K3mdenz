import type { Variants, Transition } from "framer-motion";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

export const cardEntrance: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
};

export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

export const charDrop: Variants = {
  hidden: { opacity: 0, y: "60%", skewY: 6 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, ease },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
