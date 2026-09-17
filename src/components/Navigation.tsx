import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { brand, navLinks } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { CtaButton, scrollToId } from "./CtaButton";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navigation() {
  const scrolled = useScrolled(30);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    scrollToId(href.slice(1));
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "bg-ivory/95 shadow-[0_1px_0_0_rgba(35,32,28,0.08)] backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-6 xl:px-12">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`whitespace-nowrap font-display text-base tracking-[0.14em] transition-colors duration-500 sm:text-lg sm:tracking-[0.18em] xl:text-xl ${
              scrolled || open ? "text-charcoal" : "text-ivory"
            }`}
          >
            {brand.name}
          </a>

          <ul className="hidden items-center gap-5 xl:flex xl:gap-9">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`relative py-2 text-[11px] font-sans font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                      scrolled
                        ? isActive
                          ? "text-charcoal"
                          : "text-charcoal-soft hover:text-charcoal"
                        : isActive
                          ? "text-ivory"
                          : "text-ivory/75 hover:text-ivory"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-royal transition-all duration-400 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden xl:block">
            <CtaButton
              href="#contact"
              variant={scrolled ? "outline" : "outline-light"}
              className="!whitespace-nowrap !px-6 !py-3 !text-[11px]"
            >
              Book a Consultation
            </CtaButton>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[6px] xl:hidden"
          >
            <motion.span
              animate={
                open
                  ? { rotate: 45, y: 4 }
                  : { rotate: 0, y: 0 }
              }
              className={`h-px w-6 origin-center transition-colors duration-300 ${
                scrolled || open ? "bg-charcoal" : "bg-ivory"
              }`}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className={`h-px w-6 transition-colors duration-300 ${
                scrolled || open ? "bg-charcoal" : "bg-ivory"
              }`}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className={`h-px w-6 origin-center transition-colors duration-300 ${
                scrolled || open ? "bg-charcoal" : "bg-ivory"
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-ivory xl:hidden"
          >
            <div className="h-[76px] shrink-0" />
            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-display text-3xl text-charcoal transition-colors hover:text-royal-deep"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * navLinks.length, duration: 0.5 }}
                className="mt-4"
              >
                <CtaButton href="#contact" onClick={() => setOpen(false)}>
                  Book a Consultation
                </CtaButton>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
