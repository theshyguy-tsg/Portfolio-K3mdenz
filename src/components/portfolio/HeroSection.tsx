import { motion } from "framer-motion";
import { profile, uiText } from "./data";
import { fadeUp, stagger } from "./motion-presets";
import { NeuronName } from "./NeuronName";
import { QuickJumpTiles } from "./QuickJumpTiles";

export function HeroSection() {
  return (
    <section
      data-section="hero"
      className="relative min-h-[100dvh] w-full overflow-hidden border-b border-border bg-background"
    >
      {/* Ken Burns Photography Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <motion.img
          src="/images/misty_mountains.jpg"
          alt="Artistic Misty Highlands Background"
          className="h-full w-full object-cover opacity-20 dark:opacity-10 filter brightness-[95%] sepia-[10%]"
          initial={{ scale: 1.10, y: 15 }}
          animate={{ scale: 1.01, y: 0 }}
          transition={{ duration: 15, ease: "easeOut" }}
        />
        {/* Vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent opacity-60" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent opacity-60" />
      </div>

      {/* Top Navigation HUD */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:px-10"
      >
        <span>{uiText.hero.sysCode}</span>
        <span className="hidden sm:inline">{profile.location}</span>
        <span className="text-primary font-bold">
          <motion.span
            className="inline-block mr-1"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.0, repeat: Infinity }}
          >●</motion.span>{" "}
          {profile.status}
        </span>
      </motion.div>

      <div className="relative z-0 flex min-h-[100dvh] flex-col justify-center px-6 pb-16 pt-32 sm:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-px w-12 bg-foreground/40" />
          <span>{profile.handle}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-2 font-display text-2xl sm:text-4xl italic text-muted-foreground tracking-wide font-light"
        >
          {profile.greeting}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="-mx-2 select-none"
        >
          <NeuronName text={profile.name} fontSize={320} className="w-full" />
          <p className="mt-1 px-2 font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
            {uiText.hero.hoverPrompt}
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          transition={{ delayChildren: 0.9 }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          <motion.p variants={fadeUp} className="md:col-span-6 font-mono text-xs uppercase tracking-widest text-primary font-bold">
            <span className="text-accent font-bold">▸</span> {profile.role}
          </motion.p>
          <motion.p variants={fadeUp} className="md:col-span-5 md:col-start-8 text-balance text-sm leading-relaxed text-muted-foreground">
            <span className="font-display italic text-lg text-primary block mb-1">{uiText.hero.taglineLabel}</span>
            "{profile.tagline}"
          </motion.p>
        </motion.div>

        {/* Quick jump tiles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-10"
        >
          <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
            {uiText.hero.fastJump}
          </div>
          <QuickJumpTiles />
        </motion.div>
      </div>
    </section>
  );
}
