// Client-supplied photography. Source files live in src/assets and are
// pre-processed (scripts/optimize-images.mjs) into responsive WebP variants
// under public/gallery/<slug>-<width>.webp. Re-run that script after adding
// or replacing files in src/assets.

export type Img = { widths: number[]; slug: string; alt: string };

const GALLERY_WIDTHS: Record<string, number[]> = {
  "veloura-events-1": [480, 800, 1200, 1800, 2400],
  "veloura-events-2": [480, 800, 1200, 1800, 2400],
  "veloura-events-3": [480, 800, 1200, 1800, 2400],
  "veloura-events-4": [480, 800, 1200, 1800, 2400],
  "veloura-events-5": [480, 800, 1200, 1800, 2400],
  "veloura-events-6": [480, 800, 1200, 1800, 2400],
  "veloura-events-7": [480, 800, 1200, 1800, 2400],
  "veloura-events-8": [480, 800, 1200, 1800, 2400],
  "veloura-events-9": [480, 800, 1200, 1800, 2400],
  "veloura-events-10": [480, 800, 1200, 1800, 2400],
  "veloura-events-11": [480, 800, 1200, 1800, 2400],
  "veloura-events-12": [480, 800, 1200, 1800, 2400],
  "veloura-events-13": [480, 800, 1200, 1800, 2400],
  "veloura-events-14": [480, 800, 1200, 1800, 2400],
  "veloura-events-15": [480, 800, 1200, 1800, 2400],
  "veloura-events-16": [480, 800, 1200, 1800, 2400],
  "veloura-events-17": [480, 800, 1200, 1800, 2400],
  "veloura-events-18": [480, 800, 1200, 1800, 2400],
};

const u = (slug: string, alt: string): Img => ({
  slug,
  widths: GALLERY_WIDTHS[slug] ?? [800, 1200, 1800],
  alt,
});

function pathFor(slug: string, width: number): string {
  return `/gallery/${slug}-${width}.webp`;
}

/** Build a responsive src for a given rendered width (nearest available, rounding up). */
export function imgSrc(img: Img, width: number, _quality?: number): string {
  const chosen =
    img.widths.find((w) => w >= width) ?? img.widths[img.widths.length - 1];
  return pathFor(img.slug, chosen);
}

/** Build a srcSet across the available generated widths. */
export function imgSrcSet(
  img: Img,
  _hintWidths?: number[],
  _quality?: number,
): string {
  return img.widths.map((w) => `${pathFor(img.slug, w)} ${w}w`).join(", ");
}

export const images = {
  hero: u(
    "veloura-events-10",
    "An intimate moment as a bride in beaded lace and a groom in a purple and gold brocade jacket touch foreheads, wedding rings visible, teal sky behind them",
  ),
  welcome: u(
    "veloura-events-9",
    "An elegant bride in a teal and gold beaded gown with an ornate updo, surrounded by bridesmaids in jewel-toned gowns",
  ),
  collections: {
    safari: u(
      "veloura-events-6",
      "An outdoor reception table styled with terracotta pots, tropical palm fronds and an Africa-shaped menu card",
    ),
    velora: u(
      "veloura-events-2",
      "A grand ballroom reception with rows of gold-trimmed chairs and elegant gold-rimmed place settings",
    ),
    heritage: u(
      "veloura-events-14",
      "A joyful guest in vivid traditional beadwork and a orange headdress, part of a cultural wedding celebration",
    ),
    heritageAccent: u(
      "veloura-events-12",
      "A wedding party in emerald traditional attire celebrating with ceremonial canes raised on a sunlit lawn",
    ),
    signature: u(
      "veloura-events-18",
      "An elegant ivory and gold sweetheart table styled beneath a draped canopy for an outdoor reception",
    ),
    edit: u(
      "veloura-events-1",
      "A reception table styled with illuminated LOVE lettering, gold and red damask linens and florals",
    ),
    editAccent: u(
      "veloura-events-17",
      "A bride raising her bouquet beneath a softly lit draped tent",
    ),
  },
  journey: {
    inquire: u(
      "veloura-events-7",
      "A row of large portrait panels of a couple, displayed as an installation at their wedding celebration",
    ),
    consult: u(
      "veloura-events-4",
      "A refined reception styled with cane-back chairs, dark tablescapes and abundant white florals",
    ),
    curate: u(
      "veloura-events-8",
      "A bride surrounded by her joyful bridesmaids in matching red gowns",
    ),
    design: u(
      "veloura-events-5",
      "A ceremony arch dressed in white florals with gold bow-back chairs arranged beneath draped fabric",
    ),
    coordinate: u(
      "veloura-events-3",
      "A mirrored dance floor reflecting rose-covered arches and crystal chandeliers under an evening sky",
    ),
    celebrate: u(
      "veloura-events-16",
      "A bride in a white and gold gown dancing joyfully among guests beneath string lights at night",
    ),
  },
  finalCta: u(
    "veloura-events-13",
    "A groom in white and gold traditional attire tenderly carrying his bride, surrounded by warm floral décor at night",
  ),
};

// A curated highlights reel used by the Experience section's 3D slideshow.
export const experienceHighlights: Img[] = [
  u(
    "veloura-events-11",
    "A groom laughing joyfully as he and his bride hold hands during their outdoor ceremony",
  ),
  u(
    "veloura-events-9",
    "An elegant bride in a teal and gold beaded gown with an ornate updo, surrounded by bridesmaids",
  ),
  u(
    "veloura-events-6",
    "A destination-styled table with terracotta pots, tropical fronds and an Africa-shaped menu card",
  ),
  u(
    "veloura-events-15",
    "A groom kissing his bride beside the wedding cake at a warmly lit reception",
  ),
  u(
    "veloura-events-3",
    "A mirrored dance floor reflecting a rose-covered arch and crystal chandeliers at dusk",
  ),
  u(
    "veloura-events-18",
    "An ivory and gold sweetheart table styled beneath a draped outdoor canopy",
  ),
  u(
    "veloura-events-8",
    "A bride surrounded by her joyful bridesmaids in matching red gowns",
  ),
  u(
    "veloura-events-16",
    "A bride in white and gold dancing joyfully beneath string lights at night",
  ),
];
