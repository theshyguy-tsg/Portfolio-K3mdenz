import { useEffect, useRef } from "react";

interface Particle {
  ox: number; oy: number;     // origin
  x: number; y: number;       // current
  vx: number; vy: number;     // velocity
}

interface Props {
  text: string;
  fontSize?: number;
  className?: string;
}

/**
 * Canvas-based neuron particle text. On hover, the letters scatter into ~600
 * neuron particles connected by short lines. Returns to origin via spring.
 */
export function NeuronName({ text, fontSize = 180, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    const buildParticles = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      // Scale font for viewport
      const fs = Math.min(fontSize, width / (text.length * 0.55));
      height = Math.max(fs * 1.3, 140);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Draw text offscreen
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      ctx.font = `700 ${fs}px "Cormorant Garamond", Georgia, serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(text, width / 2, height / 2);

      const img = ctx.getImageData(0, 0, width * dpr, height * dpr);
      const data = img.data;
      particles = [];
      const step = 5; // density
      for (let y = 0; y < height * dpr; y += step) {
        for (let x = 0; x < width * dpr; x += step) {
          const idx = (y * width * dpr + x) * 4 + 3; // alpha channel
          if (data[idx] > 128) {
            particles.push({
              ox: x / dpr,
              oy: y / dpr,
              x: x / dpr,
              y: y / dpr,
              vx: 0,
              vy: 0,
            });
          }
        }
      }
      ctx.clearRect(0, 0, width, height);
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;
      const repelRadius = 90;
      const repelRadius2 = repelRadius * repelRadius;

      // Update + draw points
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (mouse.active && d2 < repelRadius2 && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const force = (1 - d / repelRadius) * 5;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }
        // spring back to origin
        p.vx += (p.ox - p.x) * 0.045;
        p.vy += (p.oy - p.y) * 0.045;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw connections (only for displaced particles, sampled)
      ctx.strokeStyle = "rgba(93, 78, 67, 0.22)";
      ctx.lineWidth = 0.5;
      const sample = 6;
      for (let i = 0; i < particles.length; i += sample) {
        const a = particles[i];
        const moved = Math.abs(a.x - a.ox) + Math.abs(a.y - a.oy);
        if (moved < 4) continue;
        for (let j = i + sample; j < Math.min(i + sample * 6, particles.length); j += sample) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 900) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const moved = Math.abs(p.x - p.ox) + Math.abs(p.y - p.oy);
        ctx.fillStyle = moved > 6 ? "rgba(93, 78, 67, 0.95)" : "rgba(42, 36, 33, 0.92)";
        ctx.fillRect(p.x, p.y, 2, 2);
      }

      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = t.clientX - rect.left;
      mouseRef.current.y = t.clientY - rect.top;
      mouseRef.current.active = true;
    };

    let resizeObserver: ResizeObserver | null = null;

    const onResize = () => {
      cancelAnimationFrame(raf);
      buildParticles();
      raf = requestAnimationFrame(tick);
    };

    const init = async () => {
      if (document.fonts) {
        try {
          await document.fonts.ready;
        } catch (_) {}
      }

      buildParticles();

      // Retry once if font wasn't ready in time (common on mobile)
      if (particles.length === 0) {
        await new Promise<void>((r) => setTimeout(r, 300));
        buildParticles();
      }

      raf = requestAnimationFrame(tick);

      // Set up resize observer AFTER font is confirmed loaded so the initial
      // observation callback doesn't race with an empty particle array.
      if (window.ResizeObserver && wrap) {
        resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(wrap);
      } else {
        window.addEventListener("resize", onResize);
      }
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    canvas.addEventListener("touchend", onLeave);

    init();

    return () => {
      cancelAnimationFrame(raf);
      if (resizeObserver && wrap) {
        resizeObserver.unobserve(wrap);
        resizeObserver.disconnect();
      } else {
        window.removeEventListener("resize", onResize);
      }
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("touchend", onLeave);
    };
  }, [text, fontSize]);

  return (
    <div ref={wrapRef} className={className} aria-label={text}>
      <canvas ref={canvasRef} className="block w-full cursor-crosshair" />
    </div>
  );
}
