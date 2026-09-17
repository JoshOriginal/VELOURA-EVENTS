import { contact, credit, footer } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 pb-24 pt-12 text-ivory/70 sm:px-8 sm:pb-8 lg:px-12">
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

      <div className="mx-auto mt-10 max-w-[1600px] border-t border-ivory/10 pt-6 text-center">
        <p className="font-sans text-[11px] tracking-[0.03em] text-ivory/35">
          Copyright &copy; {credit.year} {footer.name}. Made by{" "}
          <a
            href={credit.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ivory/35 underline decoration-ivory/20 underline-offset-2 transition-colors hover:text-orchid hover:decoration-orchid/50"
          >
            {credit.developer}
          </a>
        </p>
      </div>
    </footer>
  );
}
