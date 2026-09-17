import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faq } from "../data/content";
import { SectionHeading } from "./Primitives";
import { Reveal } from "./Reveal";
import { easeOutSmooth } from "./Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((current) => (current === i ? null : i));
  };

  return (
    <section
      id="faq"
      className="relative bg-offwhite px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Good to Know" align="center">
          {faq.heading}
        </SectionHeading>

        <div className="mt-16 border-t border-charcoal/12">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            const paragraphs = item.answer.split("\n\n");

            return (
              <Reveal key={item.question} delay={Math.min(i * 0.04, 0.2)}>
                <div className="border-b border-charcoal/12">
                  <h3>
                    <button
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                    >
                      <span className="font-display text-lg leading-snug text-charcoal sm:text-xl">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className="relative flex h-7 w-7 shrink-0 items-center justify-center"
                      >
                        <span className="absolute h-px w-3.5 bg-charcoal" />
                        <motion.span
                          animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                          transition={{ duration: 0.35, ease: easeOutSmooth }}
                          className="absolute h-3.5 w-px bg-charcoal"
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: easeOutSmooth }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pb-7 pr-10 font-sans text-[15px] leading-[1.8] text-charcoal-soft sm:text-base">
                          {paragraphs.map((p, pi) => (
                            <p key={pi}>{p}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
