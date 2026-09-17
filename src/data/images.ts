// Curated editorial photography. Sourced from Unsplash and structured so the
// client's own photography can be dropped in later — every image is defined
// here as a single base URL + alt text, referenced by section.

export type Img = { base: string; alt: string };

const u = (base: string, alt: string): Img => ({ base, alt });

/** Build a responsive src for a given rendered width. */
export function imgSrc(img: Img, width: number, quality = 78): string {
  return `${img.base}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

/** Build a srcSet across a few common render widths. */
export function imgSrcSet(img: Img, widths: number[], quality = 78): string {
  return widths.map((w) => `${imgSrc(img, w, quality)} ${w}w`).join(", ");
}

export const images = {
  hero: u(
    "https://images.unsplash.com/photo-1634917906897-fb9fd0e7d527",
    "An African couple in matching vivid orange Ankara print attire share an intimate moment in a golden savannah field, sweeping white fabric in the breeze",
  ),
  welcome: u(
    "https://images.unsplash.com/photo-1661256396093-711d36caf075",
    "An African couple share a tender moment, the bride in a vivid turquoise and gold African print gown and headwrap",
  ),
  collections: {
    safari: u(
      "https://images.unsplash.com/photo-1665258918932-9e358bcfba0f",
      "An elegant African couple share an intimate moment on a wooden lodge staircase, dressed in sophisticated emerald print wedding attire, warm natural light",
    ),
    velora: u(
      "https://images.unsplash.com/photo-1653242832879-d730d48617f9",
      "A sophisticated African couple in matching purple and gold Ankara print outfits share a joyful studio portrait",
    ),
    heritage: u(
      "https://images.unsplash.com/photo-1788035963215-2dda1b80dc15",
      "A couple in elegant matching emerald traditional attire, an intimate studio portrait",
    ),
    heritageAccent: u(
      "https://images.unsplash.com/photo-1788035963213-b8021895ce6d",
      "Groom placing a tender kiss on his bride's cheek, both dressed in refined traditional emerald attire",
    ),
    signature: u(
      "https://images.unsplash.com/photo-1768777270882-9f74939fee50",
      "A refined reception table setting beside a floor-to-ceiling window overlooking a dusk skyline",
    ),
    edit: u(
      "https://images.unsplash.com/photo-1732649124686-3bab54f79aa3",
      "A timeless monogrammed wedding invitation suite styled on silk ribbon with dried florals",
    ),
    editAccent: u(
      "https://images.unsplash.com/photo-1738898179451-b5fc497f9f8e",
      "A minimalist monogram wedding invitation card with delicate ribbon detail",
    ),
  },
  journey: {
    inquire: u(
      "https://images.unsplash.com/photo-1659714838890-43a3ef681277",
      "A striking African couple in elegant blue and mauve traditional attire, framed by lush green foliage",
    ),
    consult: u(
      "https://images.unsplash.com/photo-1739302750695-31a8c978c770",
      "Two happy African American women laughing together during a planning meeting with a laptop",
    ),
    curate: u(
      "https://images.unsplash.com/photo-1782038522886-049a3549cd4a",
      "A curated garden table styled with blush florals in warm afternoon light",
    ),
    design: u(
      "https://images.unsplash.com/photo-1769230361357-8278572302d2",
      "Gold chairs framed by a dense floral installation, a cohesive design direction",
    ),
    coordinate: u(
      "https://images.unsplash.com/photo-1763553113391-a659bee36e06",
      "An elegant reception room set beneath arched doorways and soft florals",
    ),
    celebrate: u(
      "https://images.unsplash.com/photo-1661332517932-2d441bfb2994",
      "An elegant African couple in gold and cream traditional wedding attire, sharing a joyful moment",
    ),
  },
  finalCta: u(
    "https://images.unsplash.com/photo-1648328168368-3a25f2152802",
    "A joyful African couple in elegant emerald and gold African print wedding attire on a garden pathway",
  ),
};
