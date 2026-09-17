import { motion, useReducedMotion } from "framer-motion";
import { hero } from "../data/content";
import { images, imgSrc, imgSrcSet } from "../data/images";
import { CtaButton } from "./CtaButton";
import { easeOutSmooth } from "./Reveal";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduced ? 0.01 : 9, ease: easeOutSmooth }}
      >
        <img
          src={imgSrc(images.hero, 1800, 80)}
          srcSet={imgSrcSet(images.hero, [900, 1400, 1800, 2400])}
          sizes="100vw"
          alt={images.hero.alt}
          className="h-full w-full object-cover object-[50%_30%]"
          fetchPriority="high"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/20"
      />
      <div aria-hidden className="absolute inset-0 bg-charcoal/10" />

      <div className="relative z-10 w-full px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: easeOutSmooth }}
            className="text-[10px] font-sans font-medium uppercase tracking-[0.4em] text-orchid-soft sm:text-xs"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: easeOutSmooth }}
            className="mt-6 font-display text-[3rem] leading-[0.98] text-ivory sm:text-[4.5rem] lg:text-[6.4rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: easeOutSmooth }}
            className="mt-6 max-w-md font-display text-xl italic text-ivory/90 sm:text-2xl"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: easeOutSmooth }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <CtaButton href="#contact" variant="outline-light">
              {hero.cta}
            </CtaButton>
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-ivory/60">
              {hero.period}
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10"
        aria-hidden
      >
        <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-ivory/60">
          Scroll
        </span>
        <motion.span
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-px bg-gradient-to-b from-ivory/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}
