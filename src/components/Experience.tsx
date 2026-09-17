import { useState } from "react";
import { experience } from "../data/content";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { Eyebrow, SectionHeading } from "./Primitives";
import { motion } from "framer-motion";

const statementSentences = experience.statement.split(". ");
const statementFirst = statementSentences[0];
const statementRest = statementSentences.slice(1).join(". ").replace(/\.$/, "");

export function Experience() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-charcoal px-5 py-24 text-ivory sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #D9C39D 0, transparent 45%), radial-gradient(circle at 85% 75%, #D9C39D 0, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="max-w-2xl">
          <SectionHeading eyebrow="How We Work" light>
            {experience.heading}
          </SectionHeading>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-xl font-sans text-base leading-[1.85] text-ivory/75 sm:text-lg">
              {experience.intro}
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 border-t border-ivory/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {experience.items.map((item, i) => (
            <motion.div
              key={i}
              variants={revealItem}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex min-h-[220px] flex-col justify-between border-b border-r border-ivory/15 p-7 transition-colors duration-500 sm:p-8 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-royal/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span
                className={`font-display text-4xl transition-all duration-500 ${
                  hovered === i
                    ? "text-orchid translate-x-1"
                    : "text-ivory/25"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-8 font-sans text-[15px] leading-[1.7] text-ivory/85 sm:text-base">
                {item}
              </p>
              <span
                aria-hidden
                className={`mt-6 block h-px bg-royal transition-all duration-500 ease-out ${
                  hovered === i ? "w-10" : "w-0"
                }`}
              />
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-24 lg:mt-28">
          <div className="flex justify-center">
            <Eyebrow light>Our Philosophy</Eyebrow>
          </div>
          <p className="mx-auto mt-7 max-w-4xl text-balance text-center font-display text-[2rem] font-normal leading-[1.25] text-ivory sm:text-[2.6rem] lg:text-[3.1rem]">
            {statementFirst}.{" "}
            <span className="italic text-orchid">{statementRest}.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
