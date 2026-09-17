import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { collections as collectionsData } from "../data/content";
import { images, imgSrc, imgSrcSet, type Img } from "../data/images";
import { Eyebrow, SectionHeading } from "./Primitives";
import { CtaButton } from "./CtaButton";
import { easeOutSmooth } from "./Reveal";

const collectionImages: Record<string, { main: Img; accent?: Img }> = {
  "THE SAFARI COLLECTION": { main: images.collections.safari },
  "THE VELORA COLLECTION": { main: images.collections.velora },
  "THE HERITAGE COLLECTION": {
    main: images.collections.heritage,
    accent: images.collections.heritageAccent,
  },
  "THE SIGNATURE COLLECTION": { main: images.collections.signature },
  "THE EDIT COLLECTION": {
    main: images.collections.edit,
    accent: images.collections.editAccent,
  },
};

export function Collections() {
  const [active, setActive] = useState(0);
  const collection = collectionsData[active];
  const img = collectionImages[collection.name];

  return (
    <section
      id="collections"
      className="relative bg-offwhite px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading eyebrow="Five Curated Paths">
          COLLECTIONS
        </SectionHeading>

        <div className="mt-16 flex flex-col gap-10 lg:mt-20 lg:flex-row lg:gap-14">
          {/* Tab list */}
          <nav
            aria-label="Wedding collections"
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:sticky lg:top-28 lg:mx-0 lg:w-[300px] lg:shrink-0 lg:flex-col lg:gap-1 lg:self-start lg:overflow-visible lg:border-t lg:border-charcoal/10 lg:px-0 lg:pb-0"
          >
            {collectionsData.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={c.name}
                  onClick={() => setActive(i)}
                  aria-current={isActive}
                  className={`group relative shrink-0 border-charcoal/10 px-5 py-4 text-left transition-colors duration-400 lg:w-full lg:border-b lg:px-1 lg:py-6 ${
                    isActive ? "bg-ivory lg:bg-transparent" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-y-0 left-0 hidden w-[2px] bg-royal transition-transform duration-400 lg:block ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                    style={{ transformOrigin: "top" }}
                  />
                  <span className="flex items-center gap-3 lg:gap-4">
                    <span
                      className={`font-display text-lg transition-colors duration-300 lg:text-xl ${
                        isActive ? "text-royal-deep" : "text-taupe"
                      }`}
                    >
                      {c.number}
                    </span>
                    <span
                      className={`whitespace-nowrap font-sans text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 lg:whitespace-normal lg:text-xs lg:tracking-[0.16em] ${
                        isActive
                          ? "text-charcoal"
                          : "text-charcoal-soft group-hover:text-charcoal"
                      }`}
                    >
                      {c.name.replace("THE ", "").replace(" COLLECTION", "")}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Content panel */}
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: easeOutSmooth }}
                className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
              >
                {/* Image */}
                <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={imgSrc(img.main, 1100)}
                      srcSet={imgSrcSet(img.main, [560, 800, 1100, 1400])}
                      sizes="(min-width: 1024px) 38vw, 92vw"
                      alt={img.main.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {img.accent && (
                    <div className="relative mt-4 hidden aspect-[16/10] w-[75%] overflow-hidden sm:block">
                      <img
                        src={imgSrc(img.accent, 700)}
                        srcSet={imgSrcSet(img.accent, [400, 560, 700])}
                        sizes="30vw"
                        alt={img.accent.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="lg:col-span-7">
                  <Eyebrow>{collection.subtitle}</Eyebrow>
                  <h3 className="mt-4 font-display text-[1.9rem] font-normal leading-[1.1] text-charcoal sm:text-[2.3rem]">
                    {collection.name}
                  </h3>

                  <div className="mt-6 space-y-4">
                    {collection.description.map((p, i) => (
                      <p
                        key={i}
                        className="font-sans text-[15px] leading-[1.8] text-charcoal-soft"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <h4 className="mt-8 text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-royal-deep">
                    Services
                  </h4>
                  <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {collection.services.map((s) => (
                      <li
                        key={s}
                        className="flex gap-3 font-sans text-[14px] leading-[1.6] text-charcoal-soft"
                      >
                        <span aria-hidden className="mt-[9px] h-px w-3 shrink-0 bg-royal" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 border border-charcoal/12 bg-ivory p-6 sm:p-8">
                    <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-royal-deep">
                      {collection.investmentLabel}
                    </h4>
                    {collection.investmentValue ? (
                      <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="font-display text-5xl leading-none text-charcoal sm:text-6xl">
                          {collection.investmentValue}
                        </span>
                        <span className="font-sans text-sm text-charcoal-soft">
                          of the total vendor budget
                        </span>
                      </div>
                    ) : null}

                    {collection.minimumInvestment && (
                      <p className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-charcoal">
                        {collection.minimumInvestment}
                      </p>
                    )}

                    <p className="mt-4 font-sans text-[13px] leading-[1.7] text-charcoal-soft">
                      {collection.flatRateNote}
                    </p>
                    {collection.thirdPartyNote && (
                      <p className="mt-2 font-sans text-[13px] leading-[1.7] text-charcoal-soft/80">
                        {collection.thirdPartyNote}
                      </p>
                    )}
                  </div>

                  <div className="mt-8">
                    <CtaButton href="#contact" variant="outline">
                      Book a Consultation
                    </CtaButton>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
