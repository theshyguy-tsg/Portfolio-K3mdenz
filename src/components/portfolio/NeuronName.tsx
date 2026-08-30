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
 * Canvas-based neural particle text for K3MDENZ.
 * Samples letter matrix and renders interactive magnetic neuron particles.
 */
export function NeuronName({ text, fontSize = 220, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const buildParticles = () => {
      const rect = wrap.getBoundingClientRect();
      const parentWidth = wrap.parentElement?.getBoundingClientRect().width || window.innerWidth;
      width = Math.max(rect.width || parentWidth - 48, 340);
      
      // Calculate responsive font size
      const targetFontSize = Math.min(fontSize, Math.max(width / (text.length * 0.58), 44));
      height = Math.max(targetFontSize * 1.3, 110);

      // Set physical canvas dimensions
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Create offscreen canvas for bulletproof pixel sampling
      const offCanvas = document.createElement("canvas");
      offCanvas.width = canvas.width;
      offCanvas.height = canvas.height;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      offCtx.scale(dpr, dpr);
      offCtx.fillStyle = "#ffffff";
      offCtx.font = `900 ${targetFontSize}px Anton, "Space Grotesk", Impact, "Arial Black", sans-serif`;
      offCtx.textBaseline = "middle";
      offCtx.textAlign = "center";
      offCtx.letterSpacing = "2px";
      offCtx.fillText(text, width / 2, height / 2);

      const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);
      const data = imgData.data;
      const newParticles: Particle[] = [];
      const step = Math.max(Math.round(4 * dpr), 3); // crisp density

      for (let y = 0; y < offCanvas.height; y += step) {
        for (let x = 0; x < offCanvas.width; x += step) {
          const alphaIdx = (y * offCanvas.width + x) * 4 + 3;
          if (data[alphaIdx] > 100) {
            const px = x / dpr;
            const py = y / dpr;
            newParticles.push({
              ox: px,
              oy: py,
              x: px,
              y: py,
              vx: 0,
              vy: 0,
            });
          }
        }
      }

      particles = newParticles;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const mouse = mouseRef.current;
      const repelRadius = 100;
      const repelRadiusSq = repelRadius * repelRadius;
      const isDark = document.documentElement.classList.contains("dark");

      // 1. Physics update
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;

        if (mouse.active && distSq < repelRadiusSq && distSq > 0.1) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / repelRadius) * 6;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Elastic return spring
        p.vx += (p.ox - p.x) * 0.06;
        p.vy += (p.oy - p.y) * 0.06;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;
      }

      // 2. Draw neural connections between moving particles
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(139, 92, 246, 0.28)";
      const sampleRate = 5;
      for (let i = 0; i < particles.length; i += sampleRate) {
        const p1 = particles[i];
        const moved = Math.abs(p1.x - p1.ox) + Math.abs(p1.y - p1.oy);
        if (moved < 3) continue;

        for (let j = i + sampleRate; j < Math.min(i + sampleRate * 5, particles.length); j += sampleRate) {
          const p2 = particles[j];
          const cdx = p1.x - p2.x;
          const cdy = p1.y - p2.y;
          const cDistSq = cdx * cdx + cdy * cdy;
          if (cDistSq < 1200) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw high-definition neural particles
      const defaultColor = isDark ? "rgba(241, 245, 249, 0.95)" : "rgba(15, 23, 42, 0.95)";
      const activeColor = "rgba(147, 51, 234, 1)";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const moved = Math.abs(p.x - p.ox) + Math.abs(p.y - p.oy);
        ctx.fillStyle = moved > 4 ? activeColor : defaultColor;
        ctx.fillRect(p.x, p.y, 2.6, 2.6);
      }

      ctx.restore();
      raf = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.touches[0].clientX - rect.left;
        mouseRef.current.y = e.touches[0].clientY - rect.top;
        mouseRef.current.active = true;
      }
    };

    let resizeObserver: ResizeObserver | null = null;

    const setup = async () => {
      if (document.fonts) {
        try {
          await document.fonts.ready;
        } catch (_) {}
      }

      buildParticles();

      // Ensure particles are populated even if initial render was 0-width
      if (particles.length === 0) {
        setTimeout(buildParticles, 100);
        setTimeout(buildParticles, 400);
      }

      raf = requestAnimationFrame(render);

      if (window.ResizeObserver && wrap) {
        resizeObserver = new ResizeObserver(() => {
          buildParticles();
        });
        resizeObserver.observe(wrap);
      } else {
        window.addEventListener("resize", buildParticles);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleMouseLeave);

    setup();

    return () => {
      cancelAnimationFrame(raf);
      if (resizeObserver && wrap) {
        resizeObserver.unobserve(wrap);
        resizeObserver.disconnect();
      } else {
        window.removeEventListener("resize", buildParticles);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleMouseLeave);
    };
  }, [text, fontSize]);

  return (
    <div ref={wrapRef} className={`w-full overflow-visible ${className || ""}`} aria-label={text}>
      <canvas ref={canvasRef} className="block w-full cursor-crosshair" />
    </div>
  );
}
