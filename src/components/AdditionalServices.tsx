import { additionalServices } from "../data/content";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { SectionHeading } from "./Primitives";
import { motion } from "framer-motion";

export function AdditionalServices() {
  return (
    <section
      id="services"
      className="relative bg-ivory px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Extend Your Experience" className="lg:max-w-xl">
            {additionalServices.heading}
          </SectionHeading>
          <Reveal delay={0.1} className="lg:max-w-sm">
            <p className="font-sans text-[15px] leading-[1.8] text-charcoal-soft">
              {additionalServices.intro}
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 border-t border-charcoal/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {additionalServices.services.map((service, i) => (
            <motion.div
              key={service}
              variants={revealItem}
              className="group flex items-center justify-between gap-4 border-b border-charcoal/10 py-6 pr-2 transition-colors duration-300 sm:px-2 lg:px-4"
            >
              <span className="flex items-center gap-4 sm:gap-5">
                <span className="font-display text-sm text-royal-deep/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-[15px] text-charcoal-soft transition-colors duration-300 group-hover:text-charcoal sm:text-base">
                  {service}
                </span>
              </span>
              <span
                aria-hidden
                className="h-px w-0 bg-royal transition-all duration-400 ease-out group-hover:w-6"
              />
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <div className="mx-auto max-w-3xl space-y-5 border-l border-royal/50 pl-6 sm:pl-8">
            {additionalServices.closing.map((p, i) => (
              <p
                key={i}
                className="font-sans text-[15px] leading-[1.85] text-charcoal-soft sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
