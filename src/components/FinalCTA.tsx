import { brand, contact, finalCta, whatsappHref } from "../data/content";
import { images, imgSrc, imgSrcSet } from "../data/images";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-charcoal py-28"
    >
      <img
        src={imgSrc(images.finalCta, 1800, 75)}
        srcSet={imgSrcSet(images.finalCta, [900, 1400, 1800, 2400])}
        sizes="100vw"
        alt={images.finalCta.alt}
        className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
        loading="lazy"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/75 to-charcoal/90"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-[2.6rem] font-normal leading-[1.08] text-ivory sm:text-[3.6rem] lg:text-[4.2rem]">
            {finalCta.heading}
          </h2>
        </Reveal>

        <div className="mx-auto mt-8 max-w-xl space-y-4">
          {finalCta.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06}>
              <p className="font-sans text-base leading-[1.85] text-ivory/80 sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <div className="mt-11 flex justify-center">
            <CtaButton href={whatsappHref} variant="outline-light">
              {finalCta.cta}
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mx-auto mt-20 max-w-xl border-t border-ivory/20 pt-10">
            <p className="whitespace-nowrap font-display text-2xl tracking-[0.14em] text-ivory sm:text-3xl">
              {brand.name}
            </p>
            <p className="mt-2 font-sans text-sm italic text-orchid-soft">
              Luxury Weddings. Thoughtfully Planned.
            </p>

            <div className="mt-7 flex flex-col flex-wrap items-center gap-x-8 gap-y-2 font-sans text-[13px] tracking-[0.04em] text-ivory/75 sm:flex-row sm:justify-center">
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="whitespace-nowrap transition-colors hover:text-orchid"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="whitespace-nowrap transition-colors hover:text-orchid"
              >
                {contact.email}
              </a>
              <span className="whitespace-nowrap">{contact.social}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
