import { motion, useReducedMotion } from "framer-motion";
import { contact, whatsappHref } from "../data/content";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0 fill-current">
      <path d="M16.02 3C9.4 3 4 8.38 4 15.02c0 2.4.66 4.63 1.8 6.55L4 29l7.6-1.75a12.9 12.9 0 0 0 4.42.78h.01c6.63 0 12.02-5.38 12.02-12.02C28.05 8.38 22.66 3 16.02 3Zm0 21.86h-.01a10.7 10.7 0 0 1-5.47-1.5l-.39-.23-4.5 1.04 1.07-4.4-.25-.4a10.68 10.68 0 0 1-1.65-5.35c0-5.91 4.82-10.72 10.72-10.72 2.86 0 5.55 1.12 7.57 3.14a10.63 10.63 0 0 1 3.14 7.58c0 5.9-4.82 10.72-10.72 10.72Zm5.87-8.03c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1 1.26-.19.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.59-.94-.84-1.58-1.88-1.76-2.2-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.72-1.75-.99-2.39-.26-.63-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.4 5.39 4.76.75.32 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp: ${contact.phone}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0.01 : 0.7, delay: 1.1 }}
      className="group fixed z-40 flex items-center gap-3 rounded-full bg-[#25D366] pl-3.5 pr-3.5 py-3.5 text-ivory shadow-[0_8px_28px_rgba(0,0,0,0.28)] transition-[padding] duration-500 ease-out hover:pr-5"
      style={{
        right: "max(1.1rem, env(safe-area-inset-right, 0px) + 1.1rem)",
        bottom: "max(1.1rem, env(safe-area-inset-bottom, 0px) + 1.1rem)",
      }}
    >
      <WhatsAppIcon />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-[11px] font-sans font-semibold uppercase tracking-[0.18em] transition-[max-width,opacity] duration-500 ease-out group-hover:max-w-[10rem] group-hover:opacity-100 sm:inline-block sm:opacity-0">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
