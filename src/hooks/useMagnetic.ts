 import { useEffect, useRef } from "react";

/**
 * Magnetic cursor effect — element shifts toward the cursor within a radius.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35, radius = 120) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
       const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (dist < radius) {
          el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
        } else {
          el.style.transform = "translate3d(0,0,0)";
        }
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "translate3d(0,0,0)";
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength, radius]);

  return ref;
}
