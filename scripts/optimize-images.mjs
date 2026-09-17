import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, extname, basename } from "path";

const SRC_DIR = join(process.cwd(), "src", "assets");
const OUT_DIR = join(process.cwd(), "public", "gallery");
const WIDTHS = [480, 800, 1200, 1800, 2400];

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(SRC_DIR).filter((f) => /\.jpe?g$/i.test(f));

const slugify = (name) =>
  basename(name, extname(name))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const manifest = {};

for (const file of files) {
  const slug = slugify(file);
  const inputPath = join(SRC_DIR, file);
  const meta = await sharp(inputPath).metadata();
  const nativeWidth = meta.width ?? 4000;

  manifest[slug] = { widths: [], nativeWidth, nativeHeight: meta.height };

  for (const w of WIDTHS) {
    if (w > nativeWidth + 100) continue;
    const outPath = join(OUT_DIR, `${slug}-${w}.webp`);
    await sharp(inputPath)
      .resize({ width: Math.min(w, nativeWidth) })
      .webp({ quality: 78 })
      .toFile(outPath);
    manifest[slug].widths.push(w);
    console.log(`${slug}-${w}.webp`);
  }
}

console.log("\n--- manifest ---");
console.log(JSON.stringify(manifest, null, 2));
