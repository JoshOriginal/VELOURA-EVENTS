import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { journey } from "../data/content";
import { images, imgSrc, imgSrcSet, type Img } from "../data/images";
import { SectionHeading } from "./Primitives";
import { easeOutSmooth, Reveal } from "./Reveal";

const stepImages: Img[] = [
  images.journey.inquire,
  images.journey.consult,
  images.journey.curate,
  images.journey.design,
  images.journey.coordinate,
  images.journey.celebrate,
];

export function PlanningJourney() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = stepRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      className="relative bg-charcoal px-5 py-24 text-ivory sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading eyebrow="Six Steps, One Calm Process" light>
          {journey.heading}
        </SectionHeading>
      </div>

      {/* Desktop: sticky image + scrolling steps */}
      <div className="mx-auto mt-20 hidden max-w-[1600px] gap-16 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="sticky top-28 self-start">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden">
              <AnimatePresence mode="sync">
                <motion.img
                  key={active}
                  src={imgSrc(stepImages[active], 900)}
                  srcSet={imgSrcSet(stepImages[active], [500, 700, 900, 1200])}
                  sizes="35vw"
                  alt={stepImages[active].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: easeOutSmooth }}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ivory/10" />
            </div>

            <div className="mt-8 flex max-w-md items-center gap-4">
              <span className="font-display text-3xl text-orchid">
                {journey.steps[active].number}
              </span>
              <div className="h-px flex-1 bg-ivory/15">
                <motion.div
                  className="h-full bg-royal"
                  animate={{ width: `${((active + 1) / journey.steps.length) * 100}%` }}
                  transition={{ duration: 0.6, ease: easeOutSmooth }}
                />
              </div>
              <span className="font-sans text-xs tracking-[0.2em] text-ivory/50">
                {active + 1}/{journey.steps.length}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {journey.steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="flex min-h-[62vh] flex-col justify-center border-t border-ivory/10 py-10 first:border-t-0"
            >
              <span
                className={`font-display text-6xl transition-colors duration-500 sm:text-7xl ${
                  active === i ? "text-orchid" : "text-ivory/20"
                }`}
              >
                {step.number}
              </span>
              <h3
                className={`mt-5 font-display text-3xl transition-colors duration-500 sm:text-4xl ${
                  active === i ? "text-ivory" : "text-ivory/40"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-4 max-w-md font-sans text-base leading-[1.8] transition-colors duration-500 ${
                  active === i ? "text-ivory/75" : "text-ivory/30"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="relative mx-auto mt-16 max-w-xl lg:hidden">
        <div className="absolute bottom-0 left-[15px] top-0 w-px bg-ivory/15" aria-hidden />
        <div className="space-y-14">
          {journey.steps.map((step, i) => (
            <Reveal key={step.number} delay={0.03 * i}>
              <div className="relative pl-11">
                <span
                  aria-hidden
                  className="absolute left-0 top-1 h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-orchid ring-4 ring-charcoal"
                  style={{ left: "15px" }}
                />
                <div className="mb-4 aspect-[5/4] w-full overflow-hidden">
                  <img
                    src={imgSrc(stepImages[i], 700)}
                    srcSet={imgSrcSet(stepImages[i], [400, 560, 700])}
                    sizes="90vw"
                    alt={stepImages[i].alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="font-display text-2xl text-orchid">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-2xl text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.75] text-ivory/70">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
