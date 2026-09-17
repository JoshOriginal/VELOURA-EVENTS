import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { welcome } from "../data/content";
import { images, imgSrc, imgSrcSet } from "../data/images";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Primitives";

export function Welcome() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-40, 40]);

  return (
    <section
      id="welcome"
      ref={ref}
      className="relative overflow-hidden bg-ivory px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="order-2 lg:order-1 lg:col-span-5 lg:pt-16">
          <Reveal>
            <Eyebrow>The Veloura Story</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-[2.5rem] font-normal leading-[1.05] text-charcoal sm:text-[3.2rem]">
              {welcome.heading}
            </h2>
          </Reveal>

          <div className="mt-9 space-y-5">
            {welcome.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.12 + i * 0.05}>
                <p
                  className={`font-sans leading-[1.85] ${
                    i === 0
                      ? "text-lg text-charcoal sm:text-xl"
                      : "text-[15px] text-charcoal-soft sm:text-base"
                  }`}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <Reveal y={40}>
            <div className="relative ml-0 aspect-[4/5] w-full overflow-hidden lg:ml-10 lg:aspect-[5/6]">
              <motion.div style={{ y }} className="absolute inset-[-8%]">
                <img
                  src={imgSrc(images.welcome, 1400)}
                  srcSet={imgSrcSet(images.welcome, [700, 1000, 1400, 1800])}
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  alt={images.welcome.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ivory/10" />
              <span className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b border-l border-royal/50 sm:block" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
