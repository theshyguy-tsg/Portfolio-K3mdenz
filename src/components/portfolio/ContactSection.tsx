import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { profile, uiText, fxConfig } from "./data";
import { cardEntrance, slideRight, stagger, viewportOnce } from "./motion-presets";
import { AnimWord } from "./AnimWord";
import { useHoverEffect } from "@/hooks/useHoverEffect";

// Brand-colored social glyphs (real logos, official palette)
const SocialIcon = ({ name, className }: { name: string; className?: string }) => {
  const c = className ?? "h-5 w-5";
  // Use the first token so labels like "MAIL · ALT" resolve to the MAIL icon.
  const key = name.split(/[\s·]/)[0].trim().toUpperCase();
  switch (key) {
    case "GITHUB":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <path
            fill="#181717"
            d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.74.11 3.03.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.73 18.27.5 12 .5z"
          />
        </svg>
      );
    case "MAIL":
      // Gmail
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <path fill="#4285F4" d="M22 6.5v11A1.5 1.5 0 0 1 20.5 19H19V8.27l-7 5.13-7-5.13V19H3.5A1.5 1.5 0 0 1 2 17.5v-11l1.7-1.27L12 11l8.3-5.77L22 6.5z"/>
          <path fill="#EA4335" d="M2 6.5 12 14l10-7.5-1.7-1.27L12 11 3.7 5.23 2 6.5z"/>
          <path fill="#34A853" d="M19 19h1.5a1.5 1.5 0 0 0 1.5-1.5v-11L19 8.27V19z"/>
          <path fill="#FBBC05" d="M2 6.5v11A1.5 1.5 0 0 0 3.5 19H5V8.27L2 6.5z"/>
        </svg>
      );
    case "LINKEDIN":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <rect width="24" height="24" rx="3" fill="#0A66C2"/>
          <path fill="#fff" d="M7.1 9.6h2.8v8.6H7.1zM8.5 5.7a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM11.7 9.6h2.7v1.2c.4-.7 1.4-1.4 2.8-1.4 3 0 3.6 2 3.6 4.5v4.3h-2.8v-3.8c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2.1v3.8h-2.8V9.6z"/>
        </svg>
      );
    case "FACEBOOK":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.88 11.86V15.5h-3v-3.5h3V9.4c0-2.97 1.77-4.6 4.47-4.6 1.3 0 2.65.23 2.65.23v2.91h-1.5c-1.47 0-1.93.92-1.93 1.86V12h3.28l-.52 3.5h-2.76v8.36A12 12 0 0 0 24 12z"/>
          <path fill="#fff" d="M16.67 15.5 17.19 12h-3.28V9.8c0-.94.46-1.86 1.93-1.86h1.5V5.03s-1.35-.23-2.65-.23c-2.7 0-4.47 1.63-4.47 4.6V12h-3v3.5h3v8.36a12.06 12.06 0 0 0 3.76 0V15.5h2.76z"/>
        </svg>
      );
    case "INSTAGRAM":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <defs>
            <radialGradient id="ig-grad" cx="30%" cy="110%" r="130%">
              <stop offset="0%" stopColor="#FFD776"/>
              <stop offset="25%" stopColor="#F77737"/>
              <stop offset="50%" stopColor="#E1306C"/>
              <stop offset="80%" stopColor="#C13584"/>
              <stop offset="100%" stopColor="#5851DB"/>
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#ig-grad)"/>
          <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="3.4" fill="none" stroke="#fff" strokeWidth="1.8"/>
          <circle cx="17" cy="7" r="1" fill="#fff"/>
        </svg>
      );
    case "TELEGRAM":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <defs>
            <linearGradient id="tg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#37BBFE"/>
              <stop offset="100%" stopColor="#007DBB"/>
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="12" fill="url(#tg-grad)"/>
          <path fill="#fff" d="M5.5 11.7 17.3 7c.5-.2 1 .1.84.7l-2 9.4c-.13.6-.5.74-1 .47l-2.78-2.05-1.34 1.3c-.15.15-.27.27-.55.27l.2-2.83 5.16-4.66c.22-.2-.05-.31-.34-.12l-6.38 4-2.75-.86c-.6-.18-.61-.6.13-.92z"/>
        </svg>
      );
    default:
      return null;
  }
};

function MagneticTile({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (dist < 140) {
          el.style.transform = `translate3d(${dx * 0.25}px, ${dy * 0.25}px, 0)`;
        } else {
          el.style.transform = "translate3d(0,0,0)";
        }
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }}>
      {children}
    </div>
  );
}

type SocialItem = (typeof profile.socials)[number];

function SocialLink({ s }: { s: SocialItem }) {
  const fx = useHoverEffect<HTMLAnchorElement>(fxConfig.contactSocialLink);
  const dotClass = s.dot === "lime" ? "bg-lime" : s.dot === "cyan" ? "bg-cyan" : "bg-neon";
  const accentText = s.dot === "lime" ? "group-hover:text-lime" : s.dot === "cyan" ? "group-hover:text-cyan" : "group-hover:text-neon";
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={fx.onMouseEnter}
      onAnimationEnd={fx.onAnimationEnd}
      className={`liquid-glass hover-float group relative flex aspect-square flex-col justify-between overflow-hidden rounded-3xl bg-background p-4 sm:p-5 transition-colors hover:border-neon ${accentText}`}
    >
      {/* Watermark icon */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.18]">
        <SocialIcon name={s.label} className="h-32 w-32 -rotate-6 sm:h-36 sm:w-36" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <SocialIcon name={s.label} />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-neon">↗</span>
      </div>

      {/* Footer */}
      <div className="relative z-10 space-y-1">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotClass} animate-pulse`} />
          <span>{s.status}</span>
        </div>
        <div className="font-display text-xl leading-none">{s.label}</div>
        <div className="truncate font-mono text-[10px] text-muted-foreground">{s.handle}</div>
        <div className="h-0 overflow-hidden transition-all duration-300 group-hover:h-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon">{s.cta}</span>
        </div>
      </div>
    </a>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="relative w-full overflow-hidden border-b border-border px-6 py-16 sm:px-10 sm:py-32"
    >
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-16 flex flex-col items-center gap-4 text-center"
      >
        <motion.div variants={slideRight} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-lime">{uiText.contact.sectionNumber}</span> {uiText.contact.sectionTitle}
        </motion.div>
        <motion.h2 variants={stagger(0.1)} className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.85]">
          <AnimWord>{uiText.contact.heading1}</AnimWord>
          <br />
          <AnimWord><span className="font-script text-aurora">{uiText.contact.heading2}</span></AnimWord>
        </motion.h2>
      </motion.div>

      {/* Available marquee */}
      <div className="mb-10 overflow-hidden border-y border-border py-3">
        <div className="marquee-track" style={{ ["--marquee-duration" as string]: "38s" }}>
          {Array.from({ length: 2 }).flatMap((_, n) => {
            const items: string[] = [uiText.contact.availableFor, ...profile.contactMeta.availableFor];
            return items.map((item, i) => (
              <span
                key={`${n}-${i}`}
                className="flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                <span className={item === uiText.contact.availableFor ? "text-aurora" : ""}>{item}</span>
              </span>
            ));
          })}
        </div>
      </div>

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      >
        {profile.socials.map((s) => (
          <motion.div key={s.label} variants={cardEntrance}>
            <MagneticTile>
              <SocialLink s={s} />
            </MagneticTile>
          </motion.div>
        ))}
      </motion.div>

      {/* Response strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-12 grid grid-cols-1 gap-y-4 border-y border-border py-5 sm:grid-cols-3 sm:divide-x sm:divide-border"
      >
        {[
          { label: uiText.contact.responseTime, value: profile.contactMeta.responseTime, accent: "text-lime" },
          { label: uiText.contact.timezone, value: profile.contactMeta.timezone, accent: "text-cyan" },
          { label: uiText.contact.currently, value: profile.contactMeta.currently, accent: "text-neon" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col gap-1 px-2 sm:px-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {item.label}
            </span>
            <span className={`font-display text-lg uppercase tracking-wide ${item.accent}`}>
              {item.value}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.a
        href={`mailto:${profile.email}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-10 block w-full text-center font-display text-[clamp(2rem,6vw,5rem)] leading-tight text-aurora hover:underline"
      >
        {profile.email} →
      </motion.a>
    </section>
  );
}
