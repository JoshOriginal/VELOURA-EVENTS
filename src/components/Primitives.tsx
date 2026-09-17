import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.32em] ${
        light ? "text-orchid-soft" : "text-royal-deep"
      }`}
    >
      <span
        className={`h-px w-8 ${light ? "bg-orchid-soft/70" : "bg-royal/70"}`}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  children,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow ? (
        <Reveal>
          <div className={align === "center" ? "flex justify-center" : ""}>
            <Eyebrow light={light}>{eyebrow}</Eyebrow>
          </div>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 font-display font-normal leading-[1.05] text-balance ${
            light ? "text-ivory" : "text-charcoal"
          } text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem]`}
        >
          {children}
        </h2>
      </Reveal>
    </div>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <span
      className={`block h-px w-16 bg-gradient-to-r from-royal via-royal to-transparent ${className}`}
    />
  );
}

export function SectionNumber({ n }: { n: string }) {
  return (
    <span className="font-display text-sm tracking-[0.2em] text-royal-deep/80">
      {n}
    </span>
  );
}
