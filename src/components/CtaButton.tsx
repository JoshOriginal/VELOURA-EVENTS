import type { ReactNode } from "react";

type CtaButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "outline-light";
  className?: string;
};

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CtaButton({
  children,
  href = "#contact",
  onClick,
  variant = "solid",
  className = "",
}: CtaButtonProps) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden px-8 py-4 text-[11px] font-sans font-semibold uppercase tracking-[0.24em] transition-colors duration-500";

  const styles = {
    solid: "bg-charcoal text-ivory hover:text-charcoal",
    outline: "border border-charcoal/30 text-charcoal hover:text-ivory",
    "outline-light": "border border-ivory/40 text-ivory hover:text-charcoal",
  } as const;

  const fillColor = {
    solid: "bg-royal",
    outline: "bg-charcoal",
    "outline-light": "bg-ivory",
  } as const;

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToId(href.slice(1));
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 -translate-x-full ${fillColor[variant]} transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0`}
      />
      <span className="relative">{children}</span>
      <span
        aria-hidden
        className="relative translate-x-0 transition-transform duration-500 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </a>
  );
}
