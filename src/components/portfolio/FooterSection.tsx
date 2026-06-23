import { motion } from "framer-motion";
import { profile, uiText } from "./data";

export function FooterSection() {
  // Use static year only — avoid Date.now() which would cause hydration mismatch.
  const year = 2026;

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      data-section="footer"
      className="relative w-full overflow-hidden border-t border-border bg-foreground px-6 py-12 font-mono text-[11px] uppercase tracking-[0.25em] text-background/70 sm:px-10"
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <div>
          <div className="text-background">{profile.handle}</div>
          <div className="mt-1">{uiText.footer.version}</div>
        </div>
        <div>
          <div className="text-background">{uiText.footer.location}</div>
          <div className="mt-1">{profile.location}</div>
        </div>
        <div>
          <div className="text-background">{uiText.footer.signal}</div>
          <div className="mt-1 text-lime">{uiText.footer.signalValue}</div>
        </div>
        <div className="text-right">
          <button
            type="button"
            onClick={scrollTop}
            className="text-cyan transition-colors hover:text-lime"
          >
            {uiText.footer.backToTop}
          </button>
          <div className="mt-1">{uiText.footer.forgedIn}</div>
        </div>
      </div>

      {/* CV download CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-10 flex flex-col gap-4 rounded-2xl border border-background/20 bg-background/[0.04] p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div className="flex items-center gap-4">
          <div
            aria-hidden
            className="flex h-12 w-10 shrink-0 items-center justify-center rounded-md bg-background/10 font-mono text-[9px] font-bold tracking-wider text-background"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 78% 0, 78% 22%, 100% 22%)",
            }}
          >
            PDF
          </div>
          <div>
            <div className="text-background">{uiText.footer.cvLabel}</div>
            <div className="mt-1 normal-case tracking-normal text-background/60">
              {uiText.footer.cvCaption}
            </div>
          </div>
        </div>
        <a
          href={uiText.footer.cvUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full bg-lime px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
        >
          {uiText.footer.cvView}
        </a>
      </motion.div>

      <div className="mt-8 border-t border-background/20 pt-8">
        <p className="mb-6 max-w-2xl text-background/80">
          "{uiText.footer.quotePrefix} {profile.name} {uiText.footer.quoteSuffix}"
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3rem,15vw,16rem)] leading-[0.8] text-aurora"
        >
          {profile.name}
        </motion.div>
        <div className="mt-4 flex flex-col gap-2 items-start sm:flex-row sm:items-end sm:justify-between">
          <div>© {year} · {profile.realName} · {uiText.footer.madeIn}</div>
          <div className="text-lime">{uiText.footer.endOfTransmission}</div>
        </div>
      </div>
    </footer>
  );
}
