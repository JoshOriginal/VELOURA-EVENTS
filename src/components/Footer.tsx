import { contact, footer } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-12 text-ivory/70 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <p className="whitespace-nowrap font-display text-xl tracking-[0.14em] text-ivory">
            {footer.name}
          </p>
          <p className="mt-1 whitespace-nowrap font-sans text-xs italic text-ivory/55">
            {footer.tagline}
          </p>
        </div>

        <div className="flex flex-col items-center gap-1.5 font-sans text-xs tracking-[0.03em] sm:items-end">
          <a
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            className="whitespace-nowrap hover:text-orchid"
          >
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="whitespace-nowrap hover:text-orchid"
          >
            {contact.email}
          </a>
          <span className="whitespace-nowrap">{contact.social}</span>
        </div>
      </div>
    </footer>
  );
}
